import type {
  RouteAirline,
  RouteAirport,
  RoutePageData,
  RouteRelatedLink,
  UaeAirport,
  UaeRules,
} from '../../types/routePage.ts'
import { COUNTRY_AIR_AIR } from './seed/airportsAirlines.ts'
import { COUNTRY_META, DESTINATION_SOURCES, heroPathForSlug } from './countryMeta.ts'
import type { RouteUniqueCopy } from './copy/types.ts'

const UAE_AIRPORTS_INBOUND: UaeAirport[] = [
  {
    iata: 'DXB',
    city: 'Dubai International',
    notes:
      'Typical passenger hub; pet clearance for cargo itineraries is usually via cargo / veterinary release pathways, not baggage reclaim.',
  },
  {
    iata: 'DWC',
    city: 'Al Maktoum / Dubai World Central',
    notes: 'Cargo-centric pathway on many Emirates SkyCargo-style consignments.',
  },
  {
    iata: 'AUH',
    city: 'Abu Dhabi',
    notes:
      'Relevant when the itinerary uses Etihad. Cabin into AUH is an airline- and OD-specific exception — confirm current policy.',
  },
]

const UAE_AIRPORTS_OUTBOUND: UaeAirport[] = [
  {
    iata: 'DXB',
    city: 'Dubai International',
    notes:
      'Common departure side for passenger tickets; pets may still move as cargo or hold depending on the airline product leaving Dubai.',
  },
  {
    iata: 'DWC',
    city: 'Al Maktoum / Dubai World Central',
    notes: 'Cargo departure pathway on many SkyCargo-style consignments.',
  },
  {
    iata: 'AUH',
    city: 'Abu Dhabi',
    notes: 'Alternate UAE departure when Etihad routing is used — confirm the live pet product.',
  },
]

function inboundUaeRules(countryName: string): UaeRules {
  return {
    permitValidityDays: 30,
    titerSampleWindowDays: 90,
    titerMinIUml: 0.5,
    manifestCargoDefault: true,
    bullets: [
      `Obtain a MOCCAE import permit before the pet leaves ${countryName}; the permit is valid for 30 days from issuance — the animal must enter the UAE within that window.`,
      'UAE entry for most dogs and cats is as manifest cargo under IATA live-animal conditions (cabin into Dubai is not the default). Etihad cabin into Abu Dhabi is a published exception for eligible small pets — confirm current policy.',
      'ISO 11784/11785 microchip must match the health certificate; implant the chip before the rabies vaccination used for UAE import.',
      'When a rabies antibody titer (RNATT) is required, the blood sample must be taken within 90 days before travel and result ≥ 0.5 IU/ml — this is a pre-travel sample window, not a 90-day waiting period after the draw.',
      'Confirm on the official MOCCAE portal whether this origin is on the current rabies-controlled / exempt list before you skip a titer. We do not publish an unverified exempt-country list.',
      'Government-endorsed origin health certificate and parasite treatments must meet MOCCAE timing — verify current portal requirements before flight week.',
      'MOCCAE and on-arrival release fee amounts: confirm on the official portal — we do not publish fee numerals here.',
    ],
    disclaimer:
      'Rules summarised from the regulatory source of truth. Always re-check MOCCAE and your airline before travel. Dubai Pet Relocation is not affiliated with MOCCAE or any airline.',
  }
}

function outboundUaeRules(): UaeRules {
  return {
    permitValidityDays: 30,
    titerSampleWindowDays: 90,
    titerMinIUml: 0.5,
    manifestCargoDefault: true,
    bullets: [
      'Leaving the UAE needs MOCCAE exit documentation (veterinary health certificate / export pathway via MOCCAE digital services) — plan this after destination rules are clear.',
      'Export health certificate validity is commonly a short window (SOT cites 30 days from issue for the export-certificate pathway — verify on the MOCCAE portal before you book).',
      'Do not reuse inbound MOCCAE import-permit logic for an outbound move. A 30-day import permit is for entering the UAE, not for leaving it.',
      'Airline acceptance leaving Dubai can differ from the inbound product on the same brand — confirm current policy for the outbound origin-destination pair.',
      'No package or government fee numerals on this page — confirm fees on official portals; Dubai Pet Relocation quotes on request.',
    ],
    disclaimer:
      'UAE exit rules summarised at high level. Re-verify on the MOCCAE portal. Dubai Pet Relocation is not affiliated with MOCCAE or any airline.',
  }
}

function twinSlug(slug: string): string | null {
  if (slug.startsWith('dubai-to-')) {
    return `${slug.slice('dubai-to-'.length)}-to-dubai`
  }
  if (slug.endsWith('-to-dubai')) {
    return `dubai-to-${slug.slice(0, -'-to-dubai'.length)}`
  }
  return null
}

function twinHref(slug: string): string | null {
  const twin = twinSlug(slug)
  if (!twin) return null
  return `/routes/${twin}/`
}

function relatedLinks(copy: RouteUniqueCopy, direction: 'inbound' | 'outbound'): RouteRelatedLink[] {
  const links: RouteRelatedLink[] = [{ label: 'All pet relocation routes', href: '/routes/' }]
  const twin = twinHref(copy.slug)
  const meta = COUNTRY_META[copy.countryKey]
  const countryLabel = meta ? titleDisplay(meta.name) : copy.countryKey
  if (twin) {
    const twinSlugOnly = twin.replace(/^\/routes\/|\/$/g, '')
    links.push({
      label:
        direction === 'inbound'
          ? `Dubai to ${countryLabel} (outbound twin)`
          : `${countryLabel} to Dubai (inbound twin)`,
      href: `/routes/${twinSlugOnly}/`,
    })
  }
  if (direction === 'inbound') {
    links.push({ label: 'Pet relocation to Dubai', href: '/service/pet-relocation-to-dubai/' })
  } else {
    links.push({ label: 'Pet relocation from Dubai', href: '/service/pet-relocation-from-dubai/' })
  }
  links.push({ label: 'Pet relocation Dubai', href: '/service/pet-relocation-dubai/' })
  if (copy.countryKey === 'qatar') {
    links.push({ label: 'Etihad pet policy (UAE cabin exception)', href: '/guides/etihad-pet-policy/' })
    links.push({ label: 'Emirates pet cargo', href: '/guides/emirates-pet-cargo/' })
  }
  return links
}

function titleDisplay(name: string): string {
  return name.startsWith('the ') ? name.slice(4, 5).toUpperCase() + name.slice(5) : name
}

function mapAirports(countryKey: string, direction: 'inbound' | 'outbound'): RouteAirport[] {
  const seed = COUNTRY_AIR_AIR[countryKey]
  if (!seed) throw new Error(`Missing airport seed for ${countryKey}`)
  const role = direction === 'inbound' ? 'export' : 'import_gateway'
  return seed.airports.map((a) => ({
    iata: a.iata,
    city: a.city === 'via HK note' ? 'Hong Kong (routing note — not a China domestic airport)' : a.city,
    role: a.iata === 'HKG' && countryKey === 'china' ? 'note' : role,
    notes:
      a.iata === 'HKG' && countryKey === 'china'
        ? 'Seed lists HKG as a via-Hong-Kong routing note, not as a mainland China airport.'
        : direction === 'inbound'
          ? 'Confirm live-animal export handling for your carrier at this airport.'
          : 'Confirm live-animal arrival handling for your carrier at this gateway.',
  }))
}

function mapAirlines(countryKey: string, direction: 'inbound' | 'outbound'): RouteAirline[] {
  const seed = COUNTRY_AIR_AIR[countryKey]
  if (!seed) throw new Error(`Missing airline seed for ${countryKey}`)
  const od = direction === 'inbound' ? `${countryKey} → UAE` : `UAE → ${countryKey}`
  return seed.airlines.map((a) => {
    const qatarGuard =
      countryKey === 'qatar'
        ? ' This corridor page is not a Qatar Airways pet-policy guide — confirm QA live-animal rules on the carrier’s official page; for UAE cabin/cargo products see our Etihad and Emirates guides.'
        : ''
    return {
      name: a.name,
      mode: a.mode,
      notes: `${a.seedNotes.trim()} Mode and breed/weight limits are OD-specific for ${od}. Confirm current policy before booking.${qatarGuard} Dubai Pet Relocation is not affiliated with this airline.`,
      policyUrl: a.policyUrl,
      verified: false,
      verificationStatus: a.verificationStatus,
    }
  })
}

export function assembleRoute(copy: RouteUniqueCopy): RoutePageData {
  if (!COUNTRY_AIR_AIR[copy.countryKey]) {
    throw new Error(`Unknown countryKey ${copy.countryKey} for slug ${copy.slug}`)
  }
  const direction = copy.slug.startsWith('dubai-to-') ? 'outbound' : 'inbound'
  if (direction === 'outbound' && !copy.destinationRules) {
    throw new Error(`Outbound route ${copy.slug} is missing destinationRules`)
  }
  const meta = COUNTRY_META[copy.countryKey]
  const countryName = meta?.name ?? copy.countryKey
  return {
    slug: copy.slug,
    direction,
    countryKey: copy.countryKey,
    countryName,
    title: copy.title,
    meta: copy.meta,
    h1: copy.h1,
    heroImage: heroPathForSlug(copy.slug),
    heroAlt: copy.heroAlt,
    intro: copy.intro,
    snippetQuestion: copy.snippetQuestion,
    snippetAnswer: copy.snippetAnswer,
    airports: mapAirports(copy.countryKey, direction),
    uaeAirports: direction === 'inbound' ? UAE_AIRPORTS_INBOUND : UAE_AIRPORTS_OUTBOUND,
    airlines: mapAirlines(copy.countryKey, direction),
    uaeRules: direction === 'inbound' ? inboundUaeRules(countryName) : outboundUaeRules(),
    destinationRules: copy.destinationRules,
    faqs: copy.faqs,
    relatedLinks: relatedLinks(copy, direction),
    extraSources: direction === 'outbound' ? DESTINATION_SOURCES[copy.countryKey] : undefined,
    cta: {
      label: 'Get Route Checked',
      whatsapp: '+971504782999',
      note: 'Quote-only. No published package prices. Confirm airline policy and official portal fees before booking.',
    },
    hubCardDesc: copy.hubCardDesc,
    lastVerified: '2026-09-05',
    copyStatus: copy.copyStatus ?? 'draft',
  }
}
