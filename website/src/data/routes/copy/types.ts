import type { DestinationRules, RouteFaq } from '../../../types/routePage.ts'

/** Unique corridor copy. Airports/airlines/UAE chrome come from the seed assembler. */
export interface RouteUniqueCopy {
  slug: string
  countryKey: string
  title: string
  meta: string
  h1: string
  heroAlt: string
  intro: string
  snippetQuestion: string
  snippetAnswer: string
  hubCardDesc: string
  faqs: RouteFaq[]
  destinationRules?: DestinationRules
  copyStatus?: 'exemplar' | 'draft' | 'final'
}
