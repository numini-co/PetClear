/**
 * Locked keyword map check.
 * Run from website/: npm run check:keywords
 *
 * Errors (fail the build): a keyword owned by more than one URL, a sitemap URL
 * missing from the map, a map URL that is not in the sitemap, or a broken map.
 * Title/H1 mismatches are warnings. They are printed and do not fail the build.
 */
import fs from 'node:fs'
import path from 'node:path'
import { loadPageSignals, readSitemapPaths } from './page-signals.ts'
import { CANONICAL_ORIGIN, fuzzyContains, normalizeKeyword, toCanonicalUrl } from './keyword-text.ts'

const INTENTS = new Set([
  'service/money',
  'guide/informational',
  'route',
  'community',
  'species',
])

interface AllowedOverlap {
  keyword: string
  urls: string[]
  reason: string
}

interface MapEntry {
  url: string
  primaryKeyword: string
  secondaryKeywords: string[]
  intent: string
  notes?: string
}

interface KeywordMapFile {
  normalization?: string
  allowedOverlaps: AllowedOverlap[]
  entries: MapEntry[]
}

interface Owner {
  url: string
  role: 'primary' | 'secondary'
}

const websiteRoot = path.resolve(import.meta.dirname, '..')
const mapPath = path.resolve(websiteRoot, '../seo/keyword-map.json')

function failSelfTest(message: string): never {
  console.error(`ERROR keyword check self-test: ${message}`)
  process.exit(1)
}

function selfTest(): void {
  if (normalizeKeyword('  Pet   Relocation Dubai ') !== 'pet relocation dubai') {
    failSelfTest('whitespace normalisation')
  }
  if (normalizeKeyword('Snub-Nosed Dogs') !== 'snub nosed dogs') {
    failSelfTest('hyphen normalisation')
  }
  if (normalizeKeyword('dog') === normalizeKeyword('dogs')) failSelfTest('plural must stay distinct')
  if (normalizeKeyword('uae') === normalizeKeyword('dubai')) failSelfTest('uae and dubai must stay distinct')
  if (!fuzzyContains('How to bring your dog to Dubai', 'how to bring your dog to dubai')) {
    failSelfTest('exact phrase should match')
  }
  if (!fuzzyContains('Compare our pet relocation services', 'compare pet relocation services')) {
    failSelfTest('stop-word fuzzy match should pass')
  }
  if (fuzzyContains('Pet Transport in Jumeirah', 'pet relocation jumeirah')) {
    failSelfTest('unrelated title should not match')
  }
}

function isStringArray(value: unknown): value is string[] {
  return Array.isArray(value) && value.every((item) => typeof item === 'string')
}

function loadMap(): KeywordMapFile {
  const raw = fs.readFileSync(mapPath, 'utf8')
  const parsed = JSON.parse(raw) as KeywordMapFile
  if (!parsed || !Array.isArray(parsed.entries) || !Array.isArray(parsed.allowedOverlaps)) {
    throw new Error('seo/keyword-map.json must contain entries and allowedOverlaps arrays')
  }
  return parsed
}

function overlapAllows(overlap: AllowedOverlap, keyword: string, owners: Owner[]): boolean {
  if (normalizeKeyword(overlap.keyword) !== keyword) return false
  if (!overlap.reason || !overlap.reason.trim()) return false
  const urls = new Set(overlap.urls.map((url) => toCanonicalUrl(url)))
  if (!owners.every((owner) => urls.has(owner.url))) return false
  const primaryCount = owners.filter((owner) => owner.role === 'primary').length
  return primaryCount <= 1
}

function main(): void {
  selfTest()
  const errors: string[] = []
  const titleWarnings: string[] = []
  const otherWarnings: string[] = []
  const map = loadMap()
  const sitemap = readSitemapPaths(websiteRoot).map((pathName) => toCanonicalUrl(pathName))
  const sitemapSet = new Set(sitemap)
  const signals = loadPageSignals(websiteRoot)

  const seenUrls = new Set<string>()
  const ownersByKeyword = new Map<string, Owner[]>()
  const claim = (keyword: string, owner: Owner) => {
    const normalised = normalizeKeyword(keyword)
    if (!normalised) {
      errors.push(`ERROR empty keyword on ${owner.url} (${owner.role})`)
      return
    }
    const owners = ownersByKeyword.get(normalised) ?? []
    owners.push(owner)
    ownersByKeyword.set(normalised, owners)
  }

  for (const entry of map.entries) {
    if (!entry || typeof entry.url !== 'string' || typeof entry.primaryKeyword !== 'string') {
      errors.push('ERROR a map entry is missing url or primaryKeyword')
      continue
    }
    const url = toCanonicalUrl(entry.url)
    if (seenUrls.has(url)) errors.push(`ERROR duplicate map entry for ${url}`)
    seenUrls.add(url)
    if (!sitemapSet.has(url)) {
      errors.push(`ERROR map URL is not in the sitemap (does not exist as a public URL): ${url}`)
    }
    if (!INTENTS.has(entry.intent)) {
      errors.push(`ERROR ${url} has an unknown intent "${entry.intent}"`)
    }
    if (!isStringArray(entry.secondaryKeywords)) {
      errors.push(`ERROR ${url} secondaryKeywords must be an array of strings`)
      continue
    }
    if (entry.notes !== undefined && typeof entry.notes !== 'string') {
      errors.push(`ERROR ${url} notes must be a string when present`)
    }
    claim(entry.primaryKeyword, { url, role: 'primary' })
    for (const secondary of entry.secondaryKeywords) {
      claim(secondary, { url, role: 'secondary' })
    }

    const signal = signals.get(url.slice(CANONICAL_ORIGIN.length))
    if (!signal || !signal.title || !signal.h1) {
      errors.push(`ERROR could not read the title or H1 for ${url}`)
      continue
    }
    const primary = normalizeKeyword(entry.primaryKeyword)
    if (primary && !fuzzyContains(signal.title, primary) && !fuzzyContains(signal.h1, primary)) {
      titleWarnings.push(
        [
          `WARN ${url}`,
          `  primary: "${primary}"`,
          `  title: "${signal.title}"`,
          `  h1: "${signal.h1}"`,
          '  The primary keyword is not in the title or the H1. This does not fail the build.',
        ].join('\n'),
      )
    }
  }

  for (const pathName of sitemap) {
    if (!seenUrls.has(pathName)) errors.push(`ERROR sitemap URL has no keyword map entry: ${pathName}`)
  }

  for (const [keyword, owners] of ownersByKeyword) {
    const urls = new Set(owners.map((owner) => owner.url))
    if (urls.size < 2) {
      if (owners.length > 1) {
        const roles = owners.map((owner) => owner.role).join(' and ')
        errors.push(`ERROR "${keyword}" is repeated on ${owners[0].url} (${roles})`)
      }
      continue
    }
    const primaryOwners = owners.filter((owner) => owner.role === 'primary')
    const listed = owners.map((owner) => `  ${owner.role} ${owner.url}`).join('\n')
    if (primaryOwners.length > 1) {
      errors.push(
        `ERROR primary keyword "${keyword}" belongs to more than one URL. A primary may belong to exactly one URL.\n${listed}`,
      )
      continue
    }
    const allowed = map.allowedOverlaps.some((overlap) => overlapAllows(overlap, keyword, owners))
    if (!allowed) {
      errors.push(
        `ERROR keyword "${keyword}" is duplicated across URLs. Give each page its own keyword, or add an allowedOverlaps entry with a reason.\n${listed}`,
      )
    }
  }

  const liveKeywords = new Set(ownersByKeyword.keys())
  for (const overlap of map.allowedOverlaps) {
    if (!overlap || typeof overlap.keyword !== 'string' || !isStringArray(overlap.urls)) {
      errors.push('ERROR an allowedOverlaps entry is missing keyword or urls')
      continue
    }
    if (!overlap.reason || !overlap.reason.trim()) {
      errors.push(`ERROR allowedOverlaps for "${overlap.keyword}" needs a reason`)
    }
    const keyword = normalizeKeyword(overlap.keyword)
    const owners = ownersByKeyword.get(keyword) ?? []
    const urls = new Set(owners.map((owner) => owner.url))
    if (urls.size < 2) {
      otherWarnings.push(
        `WARN allowedOverlaps lists "${keyword}" but that keyword is not shared across URLs. Remove the stale exception.`,
      )
    }
    for (const url of overlap.urls) {
      const canonical = toCanonicalUrl(url)
      if (!sitemapSet.has(canonical)) {
        errors.push(`ERROR allowedOverlaps URL is not in the sitemap: ${canonical}`)
      }
    }
    if (!liveKeywords.has(keyword)) {
      otherWarnings.push(`WARN allowedOverlaps keyword "${keyword}" is not used in the map.`)
    }
  }

  console.log('Keyword map check')
  console.log(`Sitemap URLs: ${sitemap.length}`)
  console.log(`Map entries: ${map.entries.length}`)
  console.log('')
  if (errors.length === 0) console.log('Errors: 0')
  else {
    console.log(`Errors: ${errors.length}`)
    console.log(errors.join('\n\n'))
  }
  console.log('')
  if (titleWarnings.length === 0) console.log('Title/H1 warnings: 0')
  else {
    console.log(`Title/H1 warnings: ${titleWarnings.length}`)
    console.log(titleWarnings.join('\n\n'))
  }
  if (otherWarnings.length) {
    console.log('')
    console.log(`Other warnings: ${otherWarnings.length}`)
    console.log(otherWarnings.join('\n\n'))
  }
  console.log('')
  if (errors.length > 0) {
    console.log('Result: failed')
    process.exit(1)
  }
  console.log(titleWarnings.length || otherWarnings.length ? 'Result: passed with warnings' : 'Result: passed')
}

main()
