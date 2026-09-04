// Print assembled word counts for Route50 slugs. Run from website/: npx tsx scripts/count-route50-words.mjs
import { ROUTE50_REGISTRY } from '../src/data/routes/registry.ts'

const rows = Object.values(ROUTE50_REGISTRY)
  .map((r) => ({
    slug: r.slug,
    direction: r.direction,
    words: r.wordCountEstimate,
    faqs: r.faqs.length,
    links: r.relatedLinks.length,
    title: r.title,
  }))
  .sort((a, b) => a.words - b.words)

const under = rows.filter((r) => r.words < 1000)
const thinFaq = rows.filter((r) => r.faqs < 6 || r.faqs > 10)
const thinLinks = rows.filter((r) => r.links < 6)
const sample = ['dubai-to-australia', 'dubai-to-philippines', 'dubai-to-india', 'germany-to-dubai', 'saudi-arabia-to-dubai']

console.log(
  JSON.stringify(
    {
      count: rows.length,
      min: rows[0],
      max: rows[rows.length - 1],
      under1000: under,
      faqOutOfRange: thinFaq,
      linksUnder6: thinLinks,
      sample: sample.map((slug) => rows.find((r) => r.slug === slug)),
    },
    null,
    2,
  ),
)

if (under.length || thinFaq.length || thinLinks.length) process.exit(1)
