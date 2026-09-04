// Single source for the six pet-travel modes. Used by the hub, child guides,
// commercial jet/charter pages, and the door-to-door money-page card strip.

export type FlightModeId = 'cabin' | 'baggage' | 'cargo' | 'jet' | 'charter' | 'doorToDoor'

export const FLIGHT_MODE_PATHS = {
  hub: '/guides/pet-flight-options-dubai/',
  cabin: '/guides/etihad-pet-policy/',
  baggage: '/guides/pet-as-checked-baggage/',
  cargo: '/guides/emirates-pet-cargo/',
  jet: '/service/private-jet-pet-travel/',
  charter: '/service/shared-pet-charter/',
  doorToDoor: '/service/pet-relocation-dubai/',
} as const

export interface FlightModeCard {
  id: FlightModeId
  title: string
  blurb: string
  to: string
  kind: 'guide' | 'service'
}

export const FLIGHT_MODE_CARDS: FlightModeCard[] = [
  {
    id: 'cabin',
    title: 'Pet in cabin',
    blurb:
      'Small dogs and cats on Etihad only. Combined pet + carrier ≤8 kg. Emirates, flydubai and Air Arabia: no cabin cats or dogs (falcons excepted). UAE cabin arrivals land at Abu Dhabi, not Dubai. Fees live on the Etihad guide.',
    to: FLIGHT_MODE_PATHS.cabin,
    kind: 'guide',
  },
  {
    id: 'baggage',
    title: 'Pet as checked baggage',
    blurb:
      'Accompanied hold travel on the same ticket. Into Dubai this is often cargo — never assume every UAE route qualifies. Emirates airline-fee tiers USD 500 / 650 / 800 apply only when the itinerary is eligible.',
    to: FLIGHT_MODE_PATHS.baggage,
    kind: 'guide',
  },
  {
    id: 'cargo',
    title: 'Manifest air cargo',
    blurb:
      'The default for UAE import. Educational SkyCargo / booking-steps guide. DPR cargo coordination is quote-only — not a published freight list.',
    to: FLIGHT_MODE_PATHS.cargo,
    kind: 'guide',
  },
  {
    id: 'jet',
    title: 'Private jet pet travel',
    blurb:
      'A dedicated aircraft when scheduled cabin, baggage or cargo will not accept the animal or the timeline. Custom charter quote only — no all-in jet numbers.',
    to: FLIGHT_MODE_PATHS.jet,
    kind: 'service',
  },
  {
    id: 'charter',
    title: 'Shared / group pet charter',
    blurb:
      'A dedicated lift shared with other pets — a midpoint between scheduled cargo and a full private jet. A firm seat is Get a Quote — we do not publish charter prices.',
    to: FLIGHT_MODE_PATHS.charter,
    kind: 'service',
  },
  {
    id: 'doorToDoor',
    title: 'Door-to-door pet relocation',
    blurb:
      'The umbrella service: we pick the flight mode, then coordinate documents, crate, booking and the last mile. DPR package fees are Get a Quote — no invented package prices.',
    to: FLIGHT_MODE_PATHS.doorToDoor,
    kind: 'service',
  },
]

export const UAE_MANIFEST_CARGO_RULE =
  'Pets entering the UAE travel as manifested (manifest) cargo under IATA live-animal conditions — not as cabin pets or accompanied checked baggage. The documented exception is Etihad in-cabin arrivals into Abu Dhabi.'

export function flightModeCardsExcept(id?: FlightModeId): FlightModeCard[] {
  if (!id) return FLIGHT_MODE_CARDS
  return FLIGHT_MODE_CARDS.filter((c) => c.id !== id)
}
