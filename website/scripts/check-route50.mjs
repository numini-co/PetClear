// Sanity checks for Route50 copy + heroes. Run from website/: node scripts/check-route50.mjs
import fs from 'node:fs'
import path from 'node:path'

const root = path.resolve(import.meta.dirname, '..')
const locked = fs
  .readFileSync(path.resolve(root, '../docs/route50/LOCKED_50_URLS.txt'), 'utf8')
  .split('\n')
  .map((l) => l.trim())
  .filter((l) => l && !l.startsWith('#'))

const heroDir = path.join(root, 'public/assets/route-heroes')
const missingHeroes = locked.filter(
  (slug) => !fs.existsSync(path.join(heroDir, `route-${slug}-dog-flag-hero.jpg`)),
)

const copyDir = path.join(root, 'src/data/routes/copy')
const copyFiles = fs.readdirSync(copyDir).filter((f) => f.endsWith('.ts') && f !== 'types.ts')
const slugs = new Set()
const titles = []
const metas = []
const hubs = []
const intros = []
const bannedHits = []
const faqCounts = []

const BAN = [
  /waiting period after/i,
  /AED\s*\d/,
  /official partner/i,
  /MOCCAE-approved airline/i,
  /DataForSEO/i,
]
const WAIT_AFTER = /90-day wait after/i

for (const file of copyFiles) {
  const text = fs.readFileSync(path.join(copyDir, file), 'utf8')
  const slugMatches = [...text.matchAll(/slug:\s*'([^']+)'/g)].map((m) => m[1])
  slugMatches.forEach((s) => slugs.add(s))
  for (const m of text.matchAll(/title:\s*'([^']+)'/g)) titles.push(m[1])
  for (const m of text.matchAll(/meta:\s*'([^']+)'/g)) metas.push(m[1])
  for (const m of text.matchAll(/hubCardDesc:\s*'([^']+)'/g)) hubs.push(m[1])
  for (const m of text.matchAll(/intro:\s*\n\s*'([\s\S]*?)',/g)) intros.push(m[1])
  for (const re of BAN) {
    if (re.test(text)) bannedHits.push(`${file} matched ${re}`)
  }
  if (WAIT_AFTER.test(text) && !/not a 90-day wait after/i.test(text)) {
    bannedHits.push(`${file} matched ${WAIT_AFTER}`)
  }
}

const missingCopy = locked.filter((s) => !slugs.has(s))
const extraCopy = [...slugs].filter((s) => !locked.includes(s))
const longTitles = titles.filter((t) => t.length > 70)
const longMetas = metas.filter((t) => t.length > 160)
const longHubs = hubs.filter((t) => t.length > 120)
const shortIntros = intros.filter((t) => t.replace(/\s+/g, ' ').trim().length < 80)

const report = {
  locked: locked.length,
  copySlugs: slugs.size,
  missingCopy,
  extraCopy,
  missingHeroes,
  longTitles,
  longMetas,
  longHubs,
  shortIntroCount: shortIntros.length,
  bannedHits,
}

console.log(JSON.stringify(report, null, 2))
if (
  missingCopy.length ||
  extraCopy.length ||
  missingHeroes.length ||
  longTitles.length ||
  bannedHits.length
) {
  process.exit(1)
}
