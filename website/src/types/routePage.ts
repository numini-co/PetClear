export type RouteDirection = 'inbound' | 'outbound'
export type AirlineMode = 'cabin' | 'cargo' | 'cabin_or_cargo' | 'generally_not' | 'confirm'
export type VerificationStatus = 'unverified' | 'verified'
export type CopyStatus = 'stub' | 'exemplar' | 'draft' | 'final'

export interface RouteAirport {
  iata: string
  city: string
  role?: string
  notes?: string
}

export interface UaeAirport {
  iata: 'DXB' | 'DWC' | 'AUH'
  city: string
  notes: string
}

export interface RouteAirline {
  name: string
  mode: AirlineMode
  notes: string
  policyUrl?: string
  verified: boolean
  verificationStatus: VerificationStatus
}

export interface UaeRules {
  permitValidityDays: 30
  titerSampleWindowDays: 90
  titerMinIUml: 0.5
  manifestCargoDefault: boolean
  bullets: string[]
  disclaimer?: string
}

export interface DestinationRules {
  authorityHint: string
  bullets: string[]
  verifyNote: string
}

export interface RouteFaq {
  question: string
  answer: string
}

export interface RouteRelatedLink {
  label: string
  href: string
}

export interface RouteCta {
  label: 'Get Route Checked'
  whatsapp: '+971504782999'
  note?: string
}

export interface OfficialSource {
  label: string
  href: string
}

/** Typed payload for Route50 corridor pages. No volumes or fee numerals on pages. */
export interface RoutePageData {
  slug: string
  direction: RouteDirection
  countryKey: string
  countryName: string
  title: string
  meta: string
  h1: string
  heroImage: string
  heroAlt: string
  intro: string
  snippetQuestion: string
  snippetAnswer: string
  airports: RouteAirport[]
  uaeAirports: UaeAirport[]
  airlines: RouteAirline[]
  uaeRules: UaeRules
  destinationRules?: DestinationRules
  faqs: RouteFaq[]
  relatedLinks: RouteRelatedLink[]
  extraSources?: OfficialSource[]
  rulesSpecialties: string
  difficulties: string
  howItWorks: string
  airportsNarrative: string
  airlinesNarrative: string
  depthBar: 'OWNER ≥1000 unique'
  wordCountEstimate: number
  cta: RouteCta
  hubCardDesc: string
  lastVerified: string
  copyStatus: CopyStatus
}

export interface RouteHubCard {
  title: string
  to: string
  image: string
  desc: string
  direction: RouteDirection
}
