import type { RouteHubCard, RoutePageData } from '../../types/routePage.ts'
import { LOCKED_50_SLUGS } from './lockedSlugs.ts'
import { assembleRoute } from './assemble.ts'
import { GERMANY_COPY } from './copy/germany.ts'
import { OUTBOUND_TWIN_COPY } from './copy/outboundTwins.ts'
import { GCC_COPY } from './copy/gcc.ts'
import { EUROPE_COPY } from './copy/europe.ts'
import { ASIA_COPY } from './copy/asia.ts'
import { heroPathForSlug, hubTitle } from './countryMeta.ts'
import type { RouteUniqueCopy } from './copy/types.ts'

const ALL_COPY: RouteUniqueCopy[] = [
  ...GERMANY_COPY,
  ...OUTBOUND_TWIN_COPY,
  ...GCC_COPY,
  ...EUROPE_COPY,
  ...ASIA_COPY,
]

function assertUniqueSlugs(copy: RouteUniqueCopy[]): void {
  const seen = new Set<string>()
  for (const row of copy) {
    if (seen.has(row.slug)) throw new Error(`Duplicate route copy for ${row.slug}`)
    seen.add(row.slug)
  }
  const missing = LOCKED_50_SLUGS.filter((s) => !seen.has(s))
  const extra = [...seen].filter((s) => !(LOCKED_50_SLUGS as readonly string[]).includes(s))
  if (missing.length || extra.length) {
    throw new Error(
      `Route50 copy/slug mismatch. Missing: ${missing.join(', ') || '—'} Extra: ${extra.join(', ') || '—'}`,
    )
  }
}

assertUniqueSlugs(ALL_COPY)

export const ROUTE50_REGISTRY: Record<string, RoutePageData> = Object.fromEntries(
  ALL_COPY.map((copy) => {
    const data = assembleRoute(copy)
    return [data.slug, data]
  }),
)

export const ROUTE50_SLUGS = LOCKED_50_SLUGS

export function getRoute50(slug: string): RoutePageData | undefined {
  return ROUTE50_REGISTRY[slug]
}

export const ROUTE50_HUB_CARDS: RouteHubCard[] = LOCKED_50_SLUGS.map((slug) => {
  const data = ROUTE50_REGISTRY[slug]
  return {
    title: hubTitle(slug, data.countryKey, data.direction),
    to: `/routes/${slug}/`,
    image: heroPathForSlug(slug),
    desc: data.hubCardDesc,
    direction: data.direction,
  }
})

export const ROUTE50_INBOUND_CARDS = ROUTE50_HUB_CARDS.filter((c) => c.direction === 'inbound')
export const ROUTE50_OUTBOUND_CARDS = ROUTE50_HUB_CARDS.filter((c) => c.direction === 'outbound')
