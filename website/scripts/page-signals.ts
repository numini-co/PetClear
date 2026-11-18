/**
 * Read the title, H1 and meta description each public page renders today.
 * Data files are parsed as text so the check does not boot the React app.
 */
import fs from 'node:fs'
import path from 'node:path'
import { CANONICAL_ORIGIN } from './keyword-text.ts'

export interface PageSignal {
  path: string
  url: string
  title: string
  h1: string
  description: string
  /** primaryKeyword field on a service or area data file, when the page has one. */
  explicitPrimary?: string
}

const PAGE_FILES: Record<string, string> = {
  '/': 'HomePage.tsx',
  '/guides/pet-relocation-cost-dubai/': 'CostGuidePage.tsx',
  '/guides/uae-pet-import-requirements/': 'ImportRequirementsPage.tsx',
  '/how-it-works/': 'HowItWorksPage.tsx',
  '/dog-relocation-to-dubai/': 'DogRelocationPage.tsx',
  '/cat-relocation-to-dubai/': 'CatRelocationPage.tsx',
  '/about/': 'AboutPage.tsx',
  '/for-pet-relocators/': 'ForPetRelocatorsPage.tsx',
  '/service/corporate-pet-relocation/': 'CorporateRelocationPage.tsx',
  '/contact/': 'ContactPage.tsx',
  '/faq/': 'FAQPage.tsx',
  '/services/': 'ServicesPage.tsx',
  '/prices/': 'PricesPage.tsx',
  '/routes/': 'RoutesHub.tsx',
  '/cities/': 'CitiesHub.tsx',
  '/guides/': 'GuidesHub.tsx',
  '/routes/uk-to-dubai/': 'UKToDubai.tsx',
  '/routes/usa-to-dubai/': 'USAToDubai.tsx',
  '/routes/india-to-dubai/': 'IndiaToDubai.tsx',
  '/routes/australia-to-dubai/': 'AustraliaToDubai.tsx',
  '/routes/philippines-to-dubai/': 'PhilippinesToDubai.tsx',
  '/routes/canada-to-dubai/': 'CanadaToDubai.tsx',
  '/routes/new-zealand-to-dubai/': 'NewZealandToDubai.tsx',
  '/routes/south-africa-to-dubai/': 'SouthAfricaToDubai.tsx',
  '/routes/dubai-to-uk/': 'DubaiToUK.tsx',
  '/routes/dubai-to-usa/': 'DubaiToUSA.tsx',
  '/guides/banned-dog-breeds-dubai/': 'BannedBreedsGuide.tsx',
  '/guides/iata-pet-crate-requirements/': 'IATACrateGuide.tsx',
  '/guides/pet-travel-summer-dubai/': 'SummerTravelGuide.tsx',
  '/guides/moccae-import-permit/': 'MOCCAEPermitGuide.tsx',
  '/guides/rabies-titer-test-dubai/': 'TiterTestGuide.tsx',
  '/guides/pet-flight-options-dubai/': 'PetFlightOptionsHub.tsx',
  '/guides/etihad-pet-policy/': 'EtihadPetPolicyGuide.tsx',
  '/guides/pet-as-checked-baggage/': 'PetAsCheckedBaggageGuide.tsx',
  '/guides/emirates-pet-cargo/': 'EmiratesPetCargoGuide.tsx',
  '/guides/dubai-pet-arrival-guide/': 'DubaiPetArrivalGuide.tsx',
  '/guides/pet-export-from-dubai/': 'PetExportFromDubaiGuide.tsx',
  '/guides/snub-nosed-dogs-flying-uae/': 'SnubNosedDogsFlyingUaeGuide.tsx',
  '/guides/import-checklist/': 'ImportChecklistGuide.tsx',
  '/cities/abu-dhabi/': 'AbuDhabiCity.tsx',
  '/cities/sharjah/': 'SharjahCity.tsx',
  '/cities/dubai/': 'DubaiCity.tsx',
  '/dubai/': 'DubaiPillar.tsx',
}

function readBalanced(source: string, openIndex: number): string | null {
  const open = source[openIndex]
  const close = open === '{' ? '}' : open === '(' ? ')' : ''
  if (!close) return null
  let depth = 0
  let quote: "'" | '"' | '`' | null = null
  for (let i = openIndex; i < source.length; i += 1) {
    const char = source[i]
    if (quote) {
      if (char === '\\') {
        i += 1
        continue
      }
      if (char === quote) quote = null
      continue
    }
    if (char === "'" || char === '"' || char === '`') {
      quote = char
      continue
    }
    if (char === open) depth += 1
    else if (char === close) {
      depth -= 1
      if (depth === 0) return source.slice(openIndex, i + 1)
    }
  }
  return null
}

function outermostObjects(source: string): string[] {
  const objects: string[] = []
  let depth = 0
  let start = -1
  let quote: "'" | '"' | '`' | null = null
  for (let i = 0; i < source.length; i += 1) {
    const char = source[i]
    if (quote) {
      if (char === '\\') {
        i += 1
        continue
      }
      if (char === quote) quote = null
      continue
    }
    if (char === "'" || char === '"' || char === '`') {
      quote = char
      continue
    }
    if (char === '{') {
      if (depth === 0) start = i
      depth += 1
    } else if (char === '}') {
      depth -= 1
      if (depth === 0 && start >= 0) {
        objects.push(source.slice(start, i + 1))
        start = -1
      }
    }
  }
  return objects
}

function unescapeQuoted(value: string): string {
  return value.replace(/\\n/g, '\n').replace(/\\'/g, "'").replace(/\\"/g, '"')
}

function readQuoted(source: string, start: number): { value: string; end: number } | null {
  const quote = source[start]
  if (quote !== "'" && quote !== '"') return null
  let value = ''
  for (let i = start + 1; i < source.length; i += 1) {
    const char = source[i]
    if (char === '\\') {
      const next = source[i + 1] ?? ''
      value += next === 'n' ? '\n' : next
      i += 1
      continue
    }
    if (char === quote) return { value, end: i }
    value += char
  }
  return null
}

function readField(source: string, name: string): string | null {
  const matcher = new RegExp(`\\b${name}\\s*:\\s*`)
  const found = matcher.exec(source)
  if (!found) return null
  let index = found.index + found[0].length
  while (source[index] === ' ' || source[index] === '\n' || source[index] === '\r') index += 1
  const quoted = readQuoted(source, index)
  return quoted ? quoted.value : null
}

function collectStringConsts(source: string): Map<string, string> {
  const consts = new Map<string, string>()
  const matcher = /(?:const|let)\s+([A-Za-z_][\w]*)\s*=\s*/g
  let found = matcher.exec(source)
  while (found) {
    const name = found[1]
    let index = found.index + found[0].length
    while (source[index] === ' ' || source[index] === '\n' || source[index] === '\r') index += 1
    const quoted = readQuoted(source, index)
    if (quoted && !consts.has(name)) consts.set(name, quoted.value)
    matcher.lastIndex = quoted ? quoted.end + 1 : index + 1
    found = matcher.exec(source)
  }
  return consts
}

function readObjectProp(block: string, name: string, consts: Map<string, string>): string | null {
  const literal = new RegExp(`\\b${name}\\s*:\\s*(['"])`)
  const literalMatch = literal.exec(block)
  if (literalMatch) {
    const quoted = readQuoted(block, literalMatch.index + literalMatch[0].length - 1)
    if (quoted) return quoted.value
  }
  const ident = new RegExp(`\\b${name}\\s*:\\s*([A-Za-z_][\\w]*)\\b`)
  const identMatch = ident.exec(block)
  if (identMatch && consts.has(identMatch[1])) return consts.get(identMatch[1]) ?? null
  const shorthand = new RegExp(`(?:^|[,{]\\s*)${name}\\s*[,}]`)
  if (shorthand.test(block) && consts.has(name)) return consts.get(name) ?? null
  return null
}

function readJsxProp(block: string, name: string, consts: Map<string, string>): string | null {
  const quoted = new RegExp(`\\b${name}\\s*=\\s*(['"])`)
  const quotedMatch = quoted.exec(block)
  if (quotedMatch) {
    const value = readQuoted(block, quotedMatch.index + quotedMatch[0].length - 1)
    if (value) return value.value
  }
  const braced = new RegExp(`\\b${name}\\s*=\\s*\\{\\s*(['"])`)
  const bracedMatch = braced.exec(block)
  if (bracedMatch) {
    const value = readQuoted(block, bracedMatch.index + bracedMatch[0].length - 1)
    if (value) return unescapeQuoted(value.value)
  }
  const ident = new RegExp(`\\b${name}\\s*=\\s*\\{\\s*([A-Za-z_][\\w]*)\\s*\\}`)
  const identMatch = ident.exec(block)
  if (identMatch && consts.has(identMatch[1])) return consts.get(identMatch[1]) ?? null
  return null
}

function objectLiteral(source: string, name: string): string | null {
  const matcher = new RegExp(`(?:const|let)\\s+${name}\\s*=\\s*\\{`)
  const found = matcher.exec(source)
  if (!found) return null
  const openIndex = found.index + found[0].length - 1
  return readBalanced(source, openIndex)
}

function headerChunk(source: string, openTag: string): string | null {
  const start = source.indexOf(openTag)
  if (start < 0) return null
  const rest = source.slice(start)
  const endMatchers = [/\bschemas\s*=/, /\bjsonLd\s*=/, /\/>/]
  let end = rest.length
  for (const matcher of endMatchers) {
    const found = matcher.exec(rest)
    if (found && found.index < end) end = found.index
  }
  return rest.slice(0, end)
}

function readSeoField(source: string, field: 'title' | 'description', consts: Map<string, string>): string | null {
  const header = headerChunk(source, '<SEOHead')
  if (!header) return null
  const metaRef = header.match(/\bmeta=\{\s*([A-Za-z_][\w]*)\s*\}/)
  if (metaRef) {
    const object = objectLiteral(source, metaRef[1])
    if (object) {
      const fromObject = readObjectProp(object, field, consts)
      if (fromObject) return fromObject
    }
  }
  return readJsxProp(header, field, consts) ?? readObjectProp(header, field, consts)
}

function readHeroTitle(source: string, consts: Map<string, string>): string | null {
  const start = source.indexOf('<Hero')
  if (start < 0) return null
  const rest = source.slice(start)
  const end = rest.indexOf('/>')
  const block = end >= 0 ? rest.slice(0, end) : rest.slice(0, 1500)
  return readJsxProp(block, 'title', consts)
}

function signal(pathName: string, fields: Omit<PageSignal, 'path' | 'url'>): PageSignal {
  return {
    path: pathName,
    url: `${CANONICAL_ORIGIN}${pathName}`,
    ...fields,
  }
}

function fromDataObject(object: string, kind: 'service' | 'area' | 'route'): PageSignal | null {
  const slug = readField(object, 'slug')
  if (!slug) return null
  if (kind === 'route') {
    const title = readField(object, 'title')
    const h1 = readField(object, 'h1')
    const description = readField(object, 'meta') ?? ''
    if (!title || !h1) return null
    return signal(`/routes/${slug}/`, { title, h1, description })
  }
  const title = readField(object, 'seoTitle')
  const h1 = readField(object, 'h1')
  const description = readField(object, 'metaDescription') ?? ''
  const explicitPrimary = readField(object, 'primaryKeyword') ?? undefined
  if (!title || !h1) return null
  const prefix = kind === 'service' ? '/service/' : '/dubai/'
  return signal(`${prefix}${slug}/`, { title, h1, description, explicitPrimary })
}

function loadDataSignals(websiteRoot: string, signals: Map<string, PageSignal>): void {
  const groups: Array<{ dir: string; kind: 'service' | 'area' | 'route'; skip: Set<string> }> = [
    {
      dir: path.join(websiteRoot, 'src/data/services'),
      kind: 'service',
      skip: new Set(['index.ts']),
    },
    {
      dir: path.join(websiteRoot, 'src/data/areas/dubai'),
      kind: 'area',
      skip: new Set(['index.ts', 'topCommunities.ts']),
    },
    {
      dir: path.join(websiteRoot, 'src/data/routes/copy'),
      kind: 'route',
      skip: new Set(['types.ts']),
    },
  ]

  for (const group of groups) {
    for (const fileName of fs.readdirSync(group.dir)) {
      if (!fileName.endsWith('.ts') || group.skip.has(fileName)) continue
      const source = fs.readFileSync(path.join(group.dir, fileName), 'utf8')
      for (const object of outermostObjects(source)) {
        const row = fromDataObject(object, group.kind)
        if (!row) continue
        if (signals.has(row.path)) {
          throw new Error(`Duplicate page signal for ${row.path} (${fileName})`)
        }
        signals.set(row.path, row)
      }
    }
  }
}

function loadTsxSignals(websiteRoot: string, signals: Map<string, PageSignal>): void {
  const pagesDir = path.join(websiteRoot, 'src/pages')
  for (const [pathName, fileName] of Object.entries(PAGE_FILES)) {
    const source = fs.readFileSync(path.join(pagesDir, fileName), 'utf8')
    const consts = collectStringConsts(source)
    const title = readSeoField(source, 'title', consts)
    const description = readSeoField(source, 'description', consts) ?? ''
    const h1 = readHeroTitle(source, consts)
    if (!title || !h1) {
      throw new Error(`Could not read title or H1 from ${fileName} (${pathName})`)
    }
    signals.set(pathName, signal(pathName, { title, h1, description }))
  }
}

export function loadPageSignals(websiteRoot: string): Map<string, PageSignal> {
  const signals = new Map<string, PageSignal>()
  loadDataSignals(websiteRoot, signals)
  loadTsxSignals(websiteRoot, signals)
  return signals
}

export function readSitemapPaths(websiteRoot: string): string[] {
  const xml = fs.readFileSync(path.join(websiteRoot, 'public/sitemap.xml'), 'utf8')
  const paths: string[] = []
  for (const match of xml.matchAll(/<loc>\s*([^<]+?)\s*<\/loc>/g)) {
    const url = match[1].trim()
    const pathName = url.replace(/^https?:\/\/[^/]+/i, '') || '/'
    const normalised = pathName === '/' ? '/' : pathName.endsWith('/') ? pathName : `${pathName}/`
    paths.push(normalised)
  }
  return paths
}
