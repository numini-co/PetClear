/**
 * Cluster-aware internal linking engine (Blueprint B04).
 * Caps related/body outbound; forces a money-sink path from help content.
 * Chrome (header/footer) is out of scope — do not grow the footer from here.
 */

import { dubaiAreas } from './areas/dubai/index.ts'
import { SERVICE_LINKS } from './nav.ts'

export type Placement = 'body' | 'related' | 'hub' | 'funnel'
export type Cluster =
  | 'money'
  | 'import-docs'
  | 'export'
  | 'cost'
  | 'flight'
  | 'route-inbound'
  | 'route-outbound'
  | 'dubai-area'
  | 'species-dog'
  | 'species-cat'

export interface LinkEdge {
  from: string | RegExp
  to: string
  anchor: string
  cluster: Cluster
  placement: Placement
  priority: 1 | 2 | 3
  note?: string
}

export interface PageLinkPolicy {
  path: string | RegExp
  cluster: Cluster
  relatedCap: number
  bodyCap: number
  requireMoneySink?: boolean
  funnel?: boolean
}

export interface ResolvedLink {
  to: string
  label: string
  note?: string
  cluster?: Cluster
  priority?: 1 | 2 | 3
}

/** Money sinks in priority order. Species sinks are only used from species pages. */
export const MONEY_SINKS = [
  '/service/pet-relocation-dubai/',
  '/service/pet-import-dubai/',
  '/service/pet-export-dubai/',
  '/service/pet-relocation-to-dubai/',
  '/service/pet-relocation-from-dubai/',
  '/guides/moccae-import-permit/',
  '/guides/import-checklist/',
  '/guides/uae-pet-import-requirements/',
  '/prices/',
  '/guides/pet-relocation-cost-dubai/',
  '/service/dog-relocation-dubai/',
  '/service/cat-relocation-dubai/',
] as const

export const SPECIES_SINKS = new Set<string>([
  '/service/dog-relocation-dubai/',
  '/service/cat-relocation-dubai/',
])

export const AREA_SERVICE_CHIP_HREFS = [
  '/service/pet-relocation-dubai/',
  '/service/pet-import-dubai/',
  '/service/pet-export-dubai/',
  '/service/pet-transport-dubai/',
] as const

export const AREA_SERVICE_CHIPS = SERVICE_LINKS.filter((l) =>
  (AREA_SERVICE_CHIP_HREFS as readonly string[]).includes(l.to),
)

/** Orphan areas that need a curated inbound neighbor (audit §B). */
const AREA_NEIGHBOR_EXTRAS: Record<string, Array<{ label: string; to: string }>> = {
  '/dubai/jbr/': [{ label: 'Bluewaters', to: '/dubai/bluewaters/' }],
  '/dubai/dubai-silicon-oasis/': [{ label: 'International City', to: '/dubai/international-city/' }],
}

const DEFAULT_POLICY: Omit<PageLinkPolicy, 'path' | 'cluster'> = {
  relatedCap: 6,
  bodyCap: 5,
}

export const PAGE_LINK_POLICIES: PageLinkPolicy[] = [
  { path: '/', cluster: 'money', relatedCap: 6, bodyCap: 5, requireMoneySink: true },
  { path: '/prices/', cluster: 'cost', relatedCap: 6, bodyCap: 4, requireMoneySink: true },
  { path: '/guides/', cluster: 'import-docs', relatedCap: 8, bodyCap: 4, requireMoneySink: true },
  { path: '/routes/', cluster: 'route-inbound', relatedCap: 8, bodyCap: 4, requireMoneySink: true },
  { path: '/cities/', cluster: 'dubai-area', relatedCap: 6, bodyCap: 4, requireMoneySink: true },
  { path: '/dubai/', cluster: 'dubai-area', relatedCap: 6, bodyCap: 4, requireMoneySink: true },
  { path: '/cities/dubai/', cluster: 'dubai-area', relatedCap: 6, bodyCap: 5, requireMoneySink: true },
  { path: '/dog-relocation-to-dubai/', cluster: 'species-dog', relatedCap: 6, bodyCap: 4, requireMoneySink: true },
  { path: '/cat-relocation-to-dubai/', cluster: 'species-cat', relatedCap: 6, bodyCap: 4, requireMoneySink: true },
  {
    path: /^\/dubai\/[^/]+\/$/,
    cluster: 'dubai-area',
    relatedCap: 7,
    bodyCap: 4,
    requireMoneySink: true,
  },
  {
    path: /^\/routes\/(?!dubai-to-).+-to-dubai\/$/,
    cluster: 'route-inbound',
    relatedCap: 8,
    bodyCap: 5,
    requireMoneySink: true,
  },
  {
    path: /^\/routes\/dubai-to-.+\/$/,
    cluster: 'route-outbound',
    relatedCap: 8,
    bodyCap: 5,
    requireMoneySink: true,
  },
  { path: /^\/service\/.+\/$/, cluster: 'money', relatedCap: 6, bodyCap: 5 },
  {
    path: /^\/guides\/(moccae-import-permit|import-checklist|uae-pet-import-requirements)\/$/,
    cluster: 'import-docs',
    relatedCap: 6,
    bodyCap: 5,
    requireMoneySink: true,
    funnel: true,
  },
  {
    path: /^\/guides\/(pet-relocation-cost-dubai|rabies-titer-test-dubai)\/$/,
    cluster: 'cost',
    relatedCap: 6,
    bodyCap: 5,
    requireMoneySink: true,
    funnel: true,
  },
  {
    path: '/guides/iata-pet-crate-requirements/',
    cluster: 'flight',
    relatedCap: 6,
    bodyCap: 5,
    requireMoneySink: true,
    funnel: true,
  },
  { path: /^\/guides\/.+\/$/, cluster: 'import-docs', relatedCap: 6, bodyCap: 5, requireMoneySink: true },
]

function edge(
  from: string | RegExp,
  to: string,
  anchor: string,
  cluster: Cluster,
  placement: Placement,
  priority: 1 | 2 | 3 = 1,
  note?: string,
): LinkEdge {
  return { from, to, anchor, cluster, placement, priority, note }
}

/**
 * Curated edges: map P1 body/related, hub strips, checklist/prices inlinks,
 * species money, inbound directional body. Area neighbors are generated.
 */
export const LINK_EDGES: LinkEdge[] = [
  // —— Hubs (current HubCrossLinks + checklist/prices inlinks)
  edge('/', '/service/pet-relocation-dubai/', 'Homepage overview', 'money', 'hub', 2, 'Start here if you are still choosing a path'),
  edge('/guides/', '/', 'Homepage overview', 'money', 'hub', 2, 'Start here if you are still choosing a path'),
  edge('/guides/', '/services/', 'Compare our service tiers', 'money', 'hub', 2, 'How much of the file we hold'),
  edge('/guides/', '/service/pet-relocation-dubai/', 'Our Dubai pet relocation service', 'money', 'hub', 1, 'Door-to-door booking after you have read the rule'),
  edge('/guides/', '/guides/import-checklist/', 'Pet import documents checklist', 'import-docs', 'hub', 1, 'Ordered tick-list for the 90-day permit file'),
  edge('/guides/', '/prices/', 'Quoted packages and eligibility', 'cost', 'hub', 1, 'Quote-only packages — no invented government fees'),
  edge('/guides/', '/guides/pet-flight-options-dubai/', 'Pet flight options hub', 'flight', 'hub', 2, 'Cabin, cargo, jet and charter compared'),
  edge('/guides/', '/service/private-jet-pet-travel/', 'Private jet pet travel', 'flight', 'hub', 3, 'Quote-only dedicated aircraft'),
  edge('/guides/', '/service/shared-pet-charter/', 'Shared pet charter', 'flight', 'hub', 3, 'Quote-only group lift'),
  edge('/guides/', '/service/pet-transport-dubai/', 'Local pet transport and pet taxi service', 'money', 'hub', 2, 'Ground transfers and airport pet taxi'),
  edge('/guides/', '/routes/', 'Routes hub', 'route-inbound', 'hub', 2, 'Country corridors inbound and outbound'),
  edge('/guides/', '/dubai/', 'Dubai communities we cover', 'dubai-area', 'hub', 2, 'Last-mile pickup and delivery by community'),

  edge('/routes/', '/', 'Homepage overview', 'money', 'hub', 2, 'Overview of pet relocation coordination in Dubai'),
  edge('/routes/', '/services/', 'Compare our service tiers', 'money', 'hub', 2, 'Essential through full coordination — then open a service URL'),
  edge('/routes/', '/service/pet-relocation-to-dubai/', 'Bringing your pet to Dubai', 'route-inbound', 'hub', 1, 'Inbound-only arrival, permit and settling-in spine'),
  edge('/routes/', '/service/pet-relocation-from-dubai/', 'Leaving Dubai with your pet', 'route-outbound', 'hub', 1, 'Outbound-only destination-first timeline'),
  edge('/routes/', '/prices/', 'Quoted packages and eligibility', 'cost', 'hub', 1, 'Quote-only — confirm government fees on the portal'),
  edge('/routes/', '/guides/import-checklist/', 'Pet import documents checklist', 'import-docs', 'hub', 1, 'Tick-list before you book an inbound corridor'),
  edge('/routes/', '/service/pet-transport-dubai/', 'Local pet transport and pet taxi service', 'money', 'hub', 2, 'Ground and airport runs — not international cargo'),
  edge('/routes/', '/guides/', 'Guides hub', 'import-docs', 'hub', 2, 'Permits, titer, crates and cost drivers'),

  edge('/cities/', '/', 'Homepage overview', 'money', 'hub', 2, 'Overview of UAE pet relocation coordination'),
  edge('/cities/', '/services/', 'Compare our service tiers', 'money', 'hub', 2, 'Essential through full coordination'),
  edge('/cities/', '/service/pet-relocation-dubai/', 'Door-to-door pet relocation in Dubai', 'money', 'hub', 1, 'Book the managed file after you pick the emirate'),
  edge('/cities/', '/prices/', 'Quoted packages and eligibility', 'cost', 'hub', 1, 'Quote-only packages after eligibility'),
  edge('/cities/', '/service/pet-transport-dubai/', 'Pet transport across Dubai', 'money', 'hub', 2, 'Inter-emirate ground and pet taxi'),
  edge('/cities/', '/dubai/', 'Dubai communities we cover', 'dubai-area', 'hub', 2, 'Community directory for the largest emirate'),
  edge('/cities/', '/routes/', 'Country route guides', 'route-inbound', 'hub', 2, 'Inbound and outbound corridors'),

  edge('/dubai/', '/service/pet-relocation-dubai/', 'Door-to-door pet relocation in Dubai', 'money', 'hub', 1, 'International booking page — not this directory'),
  edge('/dubai/', '/service/pet-transport-dubai/', 'Pet transport and pet taxi', 'money', 'hub', 2, 'Local and inter-emirate ground runs'),
  edge('/dubai/', '/guides/import-checklist/', 'Pet import documents checklist', 'import-docs', 'hub', 1, 'Tick-list before the last-mile van'),
  edge('/dubai/', '/prices/', 'Quoted packages and eligibility', 'cost', 'hub', 2, 'Quote-only — no invented government fees'),
  edge('/dubai/', '/guides/dubai-pet-arrival-guide/', 'Dubai pet arrival guide', 'import-docs', 'hub', 2, 'Cargo collection, first week, Aleef clock'),
  edge('/dubai/', '/cities/', 'UAE cities and emirates', 'dubai-area', 'hub', 2, 'Abu Dhabi, Sharjah and coverage notes'),
  edge('/dubai/', '/cities/dubai/', 'Dubai emirate overview', 'dubai-area', 'hub', 2, 'Separate live URL — not redirected here'),
  edge('/dubai/', '/routes/', 'Country route guides', 'route-inbound', 'hub', 2, 'Inbound and outbound corridors'),

  // —— Body: map P1 money-sink misses
  edge('/dubai/', '/service/pet-relocation-dubai/', 'door-to-door pet relocation in Dubai', 'money', 'body', 1),
  edge('/cities/dubai/', '/service/pet-relocation-dubai/', 'door-to-door pet relocation in Dubai', 'money', 'body', 1),
  edge(
    /^\/routes\/(?!dubai-to-).+-to-dubai\/$/,
    '/service/pet-relocation-to-dubai/',
    'pet relocation to Dubai',
    'route-inbound',
    'body',
    1,
  ),
  edge(
    /^\/routes\/(?!dubai-to-).+-to-dubai\/$/,
    '/service/pet-relocation-dubai/',
    'pet relocation Dubai',
    'money',
    'body',
    2,
  ),
  edge('/dog-relocation-to-dubai/', '/service/dog-relocation-dubai/', 'dog relocation in Dubai', 'species-dog', 'body', 1),
  edge('/cat-relocation-to-dubai/', '/service/cat-relocation-dubai/', 'cat relocation in Dubai', 'species-cat', 'body', 1),
  edge('/guides/iata-pet-crate-requirements/', '/service/dog-relocation-dubai/', 'dog relocation service', 'species-dog', 'body', 1),
  edge('/guides/banned-dog-breeds-dubai/', '/service/dog-relocation-dubai/', 'dog relocation service', 'species-dog', 'body', 1),
  edge('/guides/snub-nosed-dogs-flying-uae/', '/service/dog-relocation-dubai/', 'dog relocation service', 'species-dog', 'body', 1),

  // —— Body: checklist + prices topical inlinks (map was 0 inbound)
  edge('/guides/pet-relocation-cost-dubai/', '/guides/import-checklist/', 'pet import documents checklist', 'import-docs', 'body', 1),
  edge('/guides/pet-relocation-cost-dubai/', '/prices/', 'quoted packages on Prices', 'cost', 'body', 1),
  edge('/guides/moccae-import-permit/', '/guides/import-checklist/', 'import documents checklist', 'import-docs', 'body', 1),
  edge('/guides/moccae-import-permit/', '/prices/', 'quoted packages on Prices', 'cost', 'body', 2),
  edge('/guides/rabies-titer-test-dubai/', '/guides/import-checklist/', 'pet import documents checklist', 'import-docs', 'body', 1),
  edge('/guides/uae-pet-import-requirements/', '/guides/import-checklist/', 'import documents checklist', 'import-docs', 'body', 2),
  edge('/guides/uae-pet-import-requirements/', '/prices/', 'quoted packages on Prices', 'cost', 'body', 2),

  // —— Related rails for hot guides / species / cities
  edge('/guides/pet-relocation-cost-dubai/', '/service/pet-relocation-dubai/', 'Pet relocation Dubai', 'money', 'related', 1, 'Quoted coordination after you have the cost types'),
  edge('/guides/pet-relocation-cost-dubai/', '/guides/import-checklist/', 'Import documents checklist', 'import-docs', 'related', 1, 'Tick-list that sits beside the cost stack'),
  edge('/guides/pet-relocation-cost-dubai/', '/prices/', 'Prices and eligibility', 'cost', 'related', 1, 'Quote-only packages — confirm portal fees'),
  edge('/guides/rabies-titer-test-dubai/', '/service/pet-import-dubai/', 'Pet import to Dubai', 'money', 'related', 1, 'Commercial file after the sample is in date'),
  edge('/guides/rabies-titer-test-dubai/', '/guides/import-checklist/', 'Import documents checklist', 'import-docs', 'related', 1, 'Where the titer sits in the ordered file'),
  edge('/guides/rabies-titer-test-dubai/', '/guides/moccae-import-permit/', 'MOCCAE import permit (90-day validity)', 'import-docs', 'related', 2, 'Permit clock after a passing result'),
  edge('/guides/rabies-titer-test-dubai/', '/guides/uae-pet-import-requirements/', 'UAE pet import requirements', 'import-docs', 'related', 2, 'Statutory checklist this titer rule sits inside'),
  edge('/guides/iata-pet-crate-requirements/', '/service/pet-relocation-dubai/', 'Pet relocation Dubai', 'money', 'related', 1, 'Crate sizing inside a managed move'),
  edge('/guides/iata-pet-crate-requirements/', '/service/dog-relocation-dubai/', 'Dog relocation service', 'species-dog', 'related', 1, 'Dog service page for crate-led files'),
  edge('/guides/iata-pet-crate-requirements/', '/guides/snub-nosed-dogs-flying-uae/', 'Snub-nosed dogs flying to the UAE', 'flight', 'related', 2, 'IATA +10% crate rule for brachycephalic breeds'),
  edge('/guides/iata-pet-crate-requirements/', '/guides/pet-relocation-cost-dubai/', 'What drives pet relocation cost', 'cost', 'related', 2, 'Crate is one line in the cost stack'),
  edge('/dog-relocation-to-dubai/', '/service/dog-relocation-dubai/', 'Dog relocation in Dubai', 'species-dog', 'related', 1, 'Commercial dog file — this page stays the inbound journey'),
  edge('/dog-relocation-to-dubai/', '/service/pet-relocation-dubai/', 'Pet relocation Dubai', 'money', 'related', 2, 'Door-to-door when the breed is clear'),
  edge('/dog-relocation-to-dubai/', '/guides/banned-dog-breeds-dubai/', 'Banned and restricted dog breeds', 'species-dog', 'related', 2, 'Legal-entry check before you book'),
  edge('/dog-relocation-to-dubai/', '/guides/import-checklist/', 'Import documents checklist', 'import-docs', 'related', 2, 'Tick-list beside the species journey'),
  edge('/cat-relocation-to-dubai/', '/service/cat-relocation-dubai/', 'Cat relocation in Dubai', 'species-cat', 'related', 1, 'Commercial cat file — this page stays the inbound journey'),
  edge('/cat-relocation-to-dubai/', '/service/pet-relocation-dubai/', 'Pet relocation Dubai', 'money', 'related', 2, 'Door-to-door when the crate plan is clear'),
  edge('/cat-relocation-to-dubai/', '/guides/import-checklist/', 'Import documents checklist', 'import-docs', 'related', 2, 'Tick-list beside the species journey'),
  edge('/cat-relocation-to-dubai/', '/guides/iata-pet-crate-requirements/', 'IATA crate requirements', 'flight', 'related', 2, 'Crate comfort for cats in cargo'),
  edge('/cities/dubai/', '/service/pet-relocation-dubai/', 'Door-to-door pet relocation in Dubai', 'money', 'related', 1, 'Book the managed file after the emirate overview'),
  edge('/cities/dubai/', '/prices/', 'Quoted packages and eligibility', 'cost', 'related', 2, 'Quote-only — confirm government fees on the portal'),
  edge('/cities/dubai/', '/guides/import-checklist/', 'Pet import documents checklist', 'import-docs', 'related', 2, 'Tick-list before DXB clearance'),
  edge('/cities/dubai/', '/dubai/', 'Dubai communities we cover', 'dubai-area', 'related', 2, 'Last-mile directory — separate live URL'),
  edge('/prices/', '/service/pet-relocation-dubai/', 'Pet relocation Dubai', 'money', 'related', 1, 'Door-to-door booking page'),
  edge('/prices/', '/guides/pet-relocation-cost-dubai/', 'What drives pet relocation cost', 'cost', 'related', 1, 'Cost types — this page stays quote-only'),
  edge('/prices/', '/guides/import-checklist/', 'Import documents checklist', 'import-docs', 'related', 2, 'Documents that sit beside a quoted package'),

  // —— Route related extras (twin/sibling stay in assemble.ts)
  edge(
    /^\/routes\/(?!dubai-to-).+-to-dubai\/$/,
    '/service/pet-relocation-to-dubai/',
    'Pet relocation to Dubai',
    'route-inbound',
    'related',
    1,
  ),
  edge(
    /^\/routes\/(?!dubai-to-).+-to-dubai\/$/,
    '/service/pet-relocation-dubai/',
    'Pet relocation Dubai',
    'money',
    'related',
    1,
  ),
  edge(
    /^\/routes\/dubai-to-.+\/$/,
    '/service/pet-relocation-from-dubai/',
    'Pet relocation from Dubai',
    'route-outbound',
    'related',
    1,
  ),
  edge(
    /^\/routes\/dubai-to-.+\/$/,
    '/service/pet-relocation-dubai/',
    'Pet relocation Dubai',
    'money',
    'related',
    1,
  ),
]

export function normalizePath(path: string): string {
  if (!path) return '/'
  const trimmed = path.startsWith('http') ? new URL(path).pathname : path
  if (trimmed === '/') return '/'
  return trimmed.endsWith('/') ? trimmed : `${trimmed}/`
}

export function isMoneySink(href: string, fromPath?: string): boolean {
  const to = normalizePath(href)
  if (!(MONEY_SINKS as readonly string[]).includes(to)) return false
  if (SPECIES_SINKS.has(to) && fromPath) {
    const from = normalizePath(fromPath)
    const cluster = getPagePolicy(from).cluster
    if (to === '/service/dog-relocation-dubai/') return cluster === 'species-dog' || cluster === 'flight'
    if (to === '/service/cat-relocation-dubai/') return cluster === 'species-cat'
  }
  return true
}

export function isCoreMoneySink(href: string): boolean {
  const to = normalizePath(href)
  return (
    to === '/service/pet-relocation-dubai/' ||
    to === '/service/pet-import-dubai/' ||
    to === '/service/pet-export-dubai/' ||
    to === '/service/pet-relocation-to-dubai/' ||
    to === '/service/pet-relocation-from-dubai/' ||
    to === '/guides/moccae-import-permit/' ||
    to === '/guides/import-checklist/' ||
    to === '/guides/uae-pet-import-requirements/' ||
    to === '/prices/' ||
    to === '/guides/pet-relocation-cost-dubai/' ||
    to === '/service/dog-relocation-dubai/' ||
    to === '/service/cat-relocation-dubai/'
  )
}

function policyMatches(policy: PageLinkPolicy, path: string): boolean {
  if (typeof policy.path === 'string') return policy.path === path
  return policy.path.test(path)
}

export function getPagePolicy(path: string): PageLinkPolicy {
  const normalized = normalizePath(path)
  const hit = PAGE_LINK_POLICIES.find((p) => policyMatches(p, normalized))
  return (
    hit ?? {
      path: normalized,
      cluster: 'money',
      ...DEFAULT_POLICY,
    }
  )
}

function edgeMatches(from: string | RegExp, path: string): boolean {
  if (typeof from !== 'string') return from.test(path)
  if (from === path) return true
  if (from.endsWith('*')) return path.startsWith(from.slice(0, -1))
  return false
}

function defaultSinkFor(path: string): ResolvedLink {
  const cluster = getPagePolicy(path).cluster
  if (cluster === 'route-inbound') {
    return { to: '/service/pet-relocation-to-dubai/', label: 'Pet relocation to Dubai', cluster: 'route-inbound', priority: 1 }
  }
  if (cluster === 'route-outbound' || cluster === 'export') {
    return { to: '/service/pet-relocation-from-dubai/', label: 'Pet relocation from Dubai', cluster: 'route-outbound', priority: 1 }
  }
  if (cluster === 'species-dog') {
    return { to: '/service/dog-relocation-dubai/', label: 'Dog relocation in Dubai', cluster: 'species-dog', priority: 1 }
  }
  if (cluster === 'species-cat') {
    return { to: '/service/cat-relocation-dubai/', label: 'Cat relocation in Dubai', cluster: 'species-cat', priority: 1 }
  }
  if (cluster === 'cost') {
    return { to: '/service/pet-relocation-dubai/', label: 'Pet relocation Dubai', cluster: 'money', priority: 1 }
  }
  if (cluster === 'import-docs') {
    return { to: '/service/pet-import-dubai/', label: 'Pet import to Dubai', cluster: 'money', priority: 1 }
  }
  return { to: '/service/pet-relocation-dubai/', label: 'Pet relocation Dubai', cluster: 'money', priority: 1 }
}

function areaNeighbors(path: string): ResolvedLink[] {
  const slug = path.match(/^\/dubai\/([^/]+)\/$/)?.[1]
  if (!slug) return []
  const area = dubaiAreas.find((a) => a.slug === slug)
  const extras = AREA_NEIGHBOR_EXTRAS[path] ?? []
  const seen = new Set<string>([path])
  const out: ResolvedLink[] = []
  for (const n of [...extras, ...(area?.relatedAreas ?? [])]) {
    const to = normalizePath(n.to)
    if (seen.has(to)) continue
    if (!to.startsWith('/dubai/') || to === '/dubai/') continue
    seen.add(to)
    out.push({ to, label: n.label, cluster: 'dubai-area', priority: 2 })
    if (out.length >= 5) break
  }
  return out
}

function edgesFor(path: string, placement?: Placement): LinkEdge[] {
  return LINK_EDGES.filter((e) => edgeMatches(e.from, path) && (!placement || e.placement === placement))
}

function capLinks(links: ResolvedLink[], cap: number, path: string, requireSink?: boolean): ResolvedLink[] {
  const unique: ResolvedLink[] = []
  const seen = new Set<string>()
  for (const link of links) {
    const to = normalizePath(link.to)
    if (to === path || seen.has(to)) continue
    seen.add(to)
    unique.push({ ...link, to })
  }
  if (unique.length <= cap) {
    if (requireSink && !unique.some((l) => isCoreMoneySink(l.to))) {
      const sink = defaultSinkFor(path)
      if (!seen.has(sink.to) && unique.length < cap) unique.push(sink)
      else if (!seen.has(sink.to) && unique.length >= cap) unique[unique.length - 1] = sink
    }
    return unique
  }
  const sinks = unique.filter((l) => isCoreMoneySink(l.to))
  const rest = unique.filter((l) => !isCoreMoneySink(l.to))
  const sinkKeep = sinks.slice(0, Math.min(2, cap))
  const restKeep = rest.slice(0, Math.max(0, cap - sinkKeep.length))
  const capped = [...restKeep, ...sinkKeep]
  if (requireSink && !capped.some((l) => isCoreMoneySink(l.to))) {
    capped[capped.length - 1] = defaultSinkFor(path)
  }
  return capped.slice(0, cap)
}

export function getRelatedLinks(path: string): ResolvedLink[] {
  const normalized = normalizePath(path)
  const policy = getPagePolicy(normalized)
  const fromEdges = edgesFor(normalized, 'related')
    .sort((a, b) => a.priority - b.priority)
    .map((e) => ({ to: e.to, label: e.anchor, note: e.note, cluster: e.cluster, priority: e.priority }))

  const generated: ResolvedLink[] = []
  if (/^\/dubai\/[^/]+\/$/.test(normalized)) {
    generated.push({ to: '/dubai/', label: 'All Dubai areas', note: 'Community hub', cluster: 'dubai-area', priority: 1 })
    generated.push(...areaNeighbors(normalized))
    generated.push({
      to: '/service/pet-relocation-dubai/',
      label: 'Pet relocation Dubai',
      note: 'Door-to-door file for this community',
      cluster: 'money',
      priority: 1,
    })
  }

  return capLinks([...fromEdges, ...generated], policy.relatedCap, normalized, policy.requireMoneySink)
}

export function pickBodyLinks(path: string, existingHrefSet: ReadonlySet<string> = new Set()): ResolvedLink[] {
  const normalized = normalizePath(path)
  const policy = getPagePolicy(normalized)
  const existing = new Set([...existingHrefSet].map(normalizePath))
  const out: ResolvedLink[] = []
  for (const e of edgesFor(normalized, 'body').sort((a, b) => a.priority - b.priority)) {
    const to = normalizePath(e.to)
    if (to === normalized || existing.has(to)) continue
    existing.add(to)
    out.push({ to, label: e.anchor, cluster: e.cluster, priority: e.priority })
    if (out.length >= policy.bodyCap) break
  }
  return out
}

/** Alias used in the audit brief. */
export const getBodyLinkSuggestions = pickBodyLinks

export function getHubCrossLinks(path: string): ResolvedLink[] {
  const normalized = normalizePath(path)
  return edgesFor(normalized, 'hub')
    .sort((a, b) => a.priority - b.priority)
    .map((e) => ({ to: e.to, label: e.anchor, note: e.note, cluster: e.cluster, priority: e.priority }))
}

export function mergeRelatedLinks(
  path: string,
  existing: Array<{ to: string; label: string; note?: string }>,
): ResolvedLink[] {
  const normalized = normalizePath(path)
  const policy = getPagePolicy(normalized)
  const combined: ResolvedLink[] = [
    ...existing.map((l) => ({ to: normalizePath(l.to), label: l.label, note: l.note })),
    ...getRelatedLinks(normalized),
  ]
  return capLinks(combined, policy.relatedCap, normalized, policy.requireMoneySink)
}

export function areaPeerLinkCount(path: string): { hub: boolean; peers: number; peersMax: 5 } {
  const related = getRelatedLinks(path)
  const peers = related.filter((l) => l.to.startsWith('/dubai/') && l.to !== '/dubai/').map((l) => l.to)
  return {
    hub: related.some((l) => l.to === '/dubai/'),
    peers: new Set(peers).size,
    peersMax: 5,
  }
}

export function runInternalLinkChecks(): { ok: boolean; errors: string[] } {
  const errors: string[] = []
  for (const policy of PAGE_LINK_POLICIES) {
    if (!policy.requireMoneySink) continue
    if (typeof policy.path !== 'string') continue
    const related = getRelatedLinks(policy.path)
    const body = pickBodyLinks(policy.path)
    const hub = getHubCrossLinks(policy.path)
    const hits = [...related, ...body, ...hub]
    if (!hits.some((l) => isCoreMoneySink(l.to))) {
      errors.push(`requireMoneySink failed for ${policy.path}`)
    }
  }
  for (const area of dubaiAreas) {
    const path = `/dubai/${area.slug}/`
    const stats = areaPeerLinkCount(path)
    if (!stats.hub) errors.push(`area ${path} missing /dubai/ hub`)
    if (stats.peers > 5) errors.push(`area ${path} has ${stats.peers} peer links (cap 5)`)
    const related = getRelatedLinks(path)
    if (!related.some((l) => isCoreMoneySink(l.to))) {
      errors.push(`area ${path} missing money sink in related`)
    }
  }
  for (const sample of ['/routes/uk-to-dubai/', '/routes/germany-to-dubai/']) {
    const inboundRelated = getRelatedLinks(sample)
    const inboundBody = pickBodyLinks(sample)
    if (![...inboundRelated, ...inboundBody].some((l) => l.to === '/service/pet-relocation-to-dubai/')) {
      errors.push(`${sample} missing directional money sink`)
    }
    if (![...inboundRelated, ...inboundBody].some((l) => l.to === '/service/pet-relocation-dubai/')) {
      errors.push(`${sample} missing flagship`)
    }
  }
  if (LINK_EDGES.some((e) => e.to.includes('emergency-pet-relocation'))) {
    errors.push('emergency service must not be linked')
  }
  return { ok: errors.length === 0, errors }
}
