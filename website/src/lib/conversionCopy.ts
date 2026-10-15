/** Shared buyer-qualification copy. No invented fees, volumes, or testimonials. */

/** Primary enquiry action. Requests move details for a proposal. Not a free consult. */
export const CTA_CHECK_MOVE = 'Tell us about your move'
/** Touched-page primary: eligibility, not a free consult. */
export const CTA_ELIGIBILITY_MOVE = 'Check if we can move your pet'
/** Guide pages: reading is free; WhatsApp is for a booked move. */
export const GUIDE_SOFT_GATE =
  'Guides are free to read. WhatsApp is for people ready to book a managed relocation.'
export const CTA_SUPPORT =
  'Share your departure city, destination, pet details and preferred travel date so we can understand your requirements.'
export const CTA_CHECK_ELIGIBILITY = 'Check eligibility'
export const CTA_MANAGED_QUOTE = 'Get a managed-move quote'
export const CTA_SCOPED_QUOTE = 'WhatsApp for a quote'
export const CTA_BREED_ELIGIBILITY = 'Check breed eligibility'
export const CTA_PERMIT_ELIGIBILITY = 'Check permit eligibility'

/** Exact playbook bridge. Place after the first useful guide answer and at the end. */
export const GUIDE_BRIDGE =
  'This guide covers the general process. If you want Dubai Pet Relocation to coordinate the move, send the pet, route, dates and documents on WhatsApp and we will reply with what a quote includes.'

/** Sticky / skip-path prompt. Neutral enquiry — no fee is charged by opening WhatsApp. */
export const WA_ELIGIBILITY_DEFAULT =
  'Hello Dubai Pet Relocation. I would like a quote for a pet move. I will send the pet, origin, destination and target date.'

/** Direct WhatsApp skip — short English ask, no empty templates. */
export const WA_DIRECT_PROMPT =
  'Please share your name, pet (dog or cat), origin, destination and target date so we can prepare a quote.'

/** Foufou questionnaire labels — keep wording exact for handlers. */
export const SERVICE_OPTIONS = [
  'Door-to-door service',
  'Import service',
  'Export service',
  'Import and export service',
] as const

export type ServiceNeeded = (typeof SERVICE_OPTIONS)[number]

export type EligibilityLeadFields = {
  name?: string
  email?: string
  pet?: string
  service?: string
  origin?: string
  destination?: string
  date?: string
  intent?: string
  notes?: string
  need?: string
  page?: string
}

/** Drop empty, underscore-only, or leftover `__` placeholder values. */
export function sanitizeLeadField(value?: string | null): string | undefined {
  if (value == null) return undefined
  let text = String(value).trim()
  if (!text) return undefined
  text = text
    .replace(/\b_+\b/g, ' ')
    .replace(/\(([^)]*)\)/g, (_, inner: string) => {
      const trimmed = inner.trim()
      return trimmed ? `(${trimmed})` : ''
    })
    .replace(/\s+/g, ' ')
    .replace(/^[\s,.:;\-–—]+|[\s,.:;\-–—]+$/g, '')
    .trim()
  if (!text) return undefined
  if (/^[_.…\-–—]+$/.test(text)) return undefined
  return text
}

export function hasBlankPlaceholders(text: string): boolean {
  return /(?:^|[\s.])(?:Origin|Pet|Target date)\s*:\s*_+\b/i.test(text) || /:\s*__\b/.test(text)
}

/**
 * Gate answers win. Ignore clicked-link text that is a blank eligibility
 * template or the generic paid-check sentence with empty Origin/Pet/Date.
 */
export function usefulClickedNote(text?: string | null): string | undefined {
  const raw = text?.trim()
  if (!raw) return undefined
  if (hasBlankPlaceholders(raw)) return undefined
  const collapsed = raw.replace(/\s+/g, ' ').trim()
  if (collapsed === WA_ELIGIBILITY_DEFAULT) return undefined
  if (/^I want a paid Dubai pet relocation eligibility check\.?$/i.test(collapsed)) return undefined
  if (/^I would like a quote for a pet move with Dubai Pet Relocation\.?$/i.test(collapsed)) return undefined
  return collapsed
}

function pushFilled(lines: string[], label: string, value?: string | null) {
  const filled = sanitizeLeadField(value)
  if (filled) lines.push(`${label}: ${filled}`)
}

/** Structured English wa.me body. Only filled fields — never blank `__` lines. */
export function composeEligibilityLead(fields: EligibilityLeadFields): string {
  const lines = ['Dubai Pet Relocation — quote request']
  pushFilled(lines, 'Name', fields.name)
  pushFilled(lines, 'Email', fields.email)
  pushFilled(lines, 'Pet', fields.pet)
  pushFilled(lines, 'Service', fields.service)
  pushFilled(lines, 'Origin', fields.origin)
  pushFilled(lines, 'Destination', fields.destination)
  pushFilled(lines, 'Target date', fields.date)
  pushFilled(lines, 'Intent', fields.intent)
  pushFilled(lines, 'Need', fields.need)
  pushFilled(lines, 'Notes', fields.notes)
  pushFilled(lines, 'Page', fields.page)
  return lines.join('\n')
}

export function waEligibility(fields?: {
  origin?: string
  destination?: string
  pet?: string
  date?: string
  need?: string
}) {
  const parts = ['I would like a quote for a pet move with Dubai Pet Relocation.']
  const add = (label: string, value?: string) => {
    const filled = sanitizeLeadField(value)
    if (filled) parts.push(`${label}: ${filled}.`)
  }
  add('Origin', fields?.origin)
  add('Destination', fields?.destination)
  add('Pet', fields?.pet)
  add('Target date', fields?.date)
  add('Need', fields?.need)
  if (parts.length === 1) {
    parts.push('Please share name, pet, origin, destination, and target date in English.')
  }
  return parts.join(' ')
}

export const WA_GATE =
  'General guidance is free in the guides. Bespoke document review and coordination are paid.'

export const WA_GATE_DIY =
  'Not ready to hire? Use the self-serve checklist below — no free human consultation is promised.'

export const PAID_INCLUDES_TITLE = 'What paid coordination includes'
export const PAID_INCLUDES_ITEMS = [
  'MOCCAE permit timing (import permit valid 90 days from issuance) and export-certificate sequencing',
  'Airline and cargo booking against the accepted crate or cabin product',
  'IATA crate or cabin-carrier rules checked before the ticket is held',
  'Airport handoff and last-mile partner coordination on WhatsApp during business hours',
] as const

export const PAID_INCLUDES_FOOT =
  'Government permit and release fees are confirmed on the official MOCCAE portal. Amounts are the figures on that portal.'

/** Leaving Dubai. No package prices. Export-certificate window stays confirm-on-portal. */
export const OUTBOUND_PAID_INCLUDES = [
  'MOCCAE export health certificate timing (confirm the validity window on the MOCCAE portal)',
  'Destination import paperwork coordinated to that window',
  'Airline or cargo booking for the live-animal product leaving Dubai',
  'IATA crate check before the booking is held',
  'Airport handover at DXB',
] as const

/** White on #0B6B3A clears 4.5:1. Full width below 640px, above the sticky bar. */
export const STRONG_WA_CLASS =
  'inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#0B6B3A] px-6 py-3.5 text-sm font-semibold text-white shadow-lg ring-1 ring-black/10 transition hover:bg-[#085530] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:w-auto'
