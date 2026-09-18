/** Shared buyer-qualification copy. No invented fees, volumes, or testimonials. */

export const CTA_CHECK_MOVE = 'Check if we can move your pet'
export const CTA_CHECK_ELIGIBILITY = 'Check eligibility'
export const CTA_MANAGED_QUOTE = 'Get a managed-move quote'
export const CTA_BREED_ELIGIBILITY = 'Check breed eligibility'
export const CTA_PERMIT_ELIGIBILITY = 'Check permit eligibility'

/** Exact playbook bridge. Place after the first useful guide answer and at the end. */
export const GUIDE_BRIDGE =
  'This guide covers the general process. If you want Dubai Pet Relocation to review your route, pet, dates, and documents and coordinate the move, that is a paid relocation service. Send the details on WhatsApp for eligibility and scope.'

export const WA_ELIGIBILITY_DEFAULT =
  'I want a paid Dubai pet relocation eligibility check. Origin: __. Pet: __. Target date: __. Need: managed move / document plan / other.'

export function waEligibility(fields?: {
  origin?: string
  pet?: string
  date?: string
  need?: string
}) {
  return `I want a paid Dubai pet relocation eligibility check. Origin: ${fields?.origin ?? '__'}. Pet: ${fields?.pet ?? '__'}. Target date: ${fields?.date ?? '__'}. Need: ${fields?.need ?? 'managed move / document plan / other'}.`
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
  'Government permit and release fees are confirmed on the official MOCCAE portal. We do not invent amounts here.'
