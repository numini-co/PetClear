/** Shared regulatory display helpers. Do not publish unverified fees. */
export const LAST_VERIFIED_DATE = '6 September 2026'
export const LAST_VERIFIED_LABEL = `Last verified: ${LAST_VERIFIED_DATE}`

export const PERMIT_VALIDITY =
  'MOCCAE import permits are valid for 90 days from the date of issuance. The pet must enter the UAE within that window. It is not allowed to import pets with an expired import permit.'

export const PERMIT_FEE_VERIFY =
  'Confirm the current MOCCAE import-permit fee on the official portal when you apply. Fees may change.'

export const RELEASE_FEE_VERIFY =
  'An arrival veterinary release/inspection fee is also payable at the cargo terminal. Confirm the current dog and cat amounts on the official MOCCAE portal before travel; fees may change.'

export const GOV_FEE_CONFIRM =
  'Confirm the current MOCCAE import-permit and arrival-release fees on the official portal. Fees may change.'

/** Federal MOCCAE framing only. Always labeled government + confirm-on-portal. Not DPR prices. */
export const MOCCAE_PERMIT_FEE_FRAMING = 'AED 200'
export const MOCCAE_RELEASE_DOG_FRAMING = 'AED 500'
export const MOCCAE_RELEASE_CAT_FRAMING = 'AED 250'
export const MOCCAE_FEE_FRAMING_NOTE =
  'These are government fees on the official MOCCAE portal, not Dubai Pet Relocation package prices. Confirm the live amounts when you apply. Fees may change.'

export const GOV_FEE_TABLE_CELL = 'Confirm on official MOCCAE portal'

/** MOCCAE export health-certificate fee / timing. Secondary-source only (register 2026-09-09; portal WAF). */
export const EXPORT_CERT_FEE_VERIFY =
  'A government fee applies for the MOCCAE export health certificate. Confirm the current personal-consignment amount on the official portal when you apply — do not treat secondary blog numerals as first-party official fees.'

export const EXPORT_CERT_TIMING_VERIFY =
  'Secondary sources describe a short export-certificate window (commonly discussed as about 30 days from issuance) and a one-working-day service time. Confirm current validity and processing on the official MOCCAE portal. Do not treat those figures as first-party official facts.'

/**
 * Single register for the UAE inbound rabies-antibody rule.
 * The 1 Oct 2026 audit of the live MOCCAE import-permit page separates two clocks:
 * the import permit is 90 days from issuance, and a required antibody certificate
 * is valid for 365 days while the vaccine stays valid and continuous and no booster
 * is given. Do not publish a 90-day pre-travel sample window.
 */
export const TITER_CERTIFICATE_RULE =
  'When a rabies antibody test is required, the result must be at least 0.5 IU/ml. The certificate is valid for 365 days if the rabies vaccine stays valid and continuous and no booster is given. Otherwise the test is repeated. A first vaccine, or a gap in vaccination, needs at least 21 days before the test. A valid booster does not need that wait.'

/** Existing imports keep this name. The text is the certificate rule above, not a sample window. */
export const TITER_SAMPLE_RULE = TITER_CERTIFICATE_RULE

export const TITER_THRESHOLD = '≥0.5 IU/ml'

/**
 * Shared record for the UAE inbound antibody rule.
 * Reviewer is unnamed because the source register does not store one.
 * checkedDate stays the last published review. This release did not complete a new portal read.
 */
export const UAE_INBOUND_TITER_RECORD = {
  jurisdiction: 'United Arab Emirates',
  direction: 'inbound',
  species: 'dogs and cats',
  rule: TITER_CERTIFICATE_RULE,
  exceptions:
    'Low-risk origins are not described as needing this test. The United Kingdom, the United States, Australia, Hawaii, Guam and other destination clocks stay on their own pages.',
  sourceUrl: 'https://www.moccae.gov.ae/ar/services/import-permit-pets',
  checkedDate: LAST_VERIFIED_DATE,
  reviewer: 'Not named in the published register',
} as const

export const PERMIT_PROCESSING_ESTIMATE =
  'MOCCAE import-permit processing is typically estimated at 2–5 working days for a complete application. That figure is a secondary-sourced estimate, not a first-party SLA — confirm current timing on the official portal.'

export const MICROCHIP_BEFORE_RABIES =
  'The ISO 11784/11785 15-digit microchip must be implanted before the rabies vaccination that will be used for UAE import.'

export const RABIES_AGE_WAIT =
  'First rabies vaccination is not given before the pet is 12 weeks old, and at least 21 days must elapse between that vaccination and arrival in the UAE.'

export const TWO_PETS_RULE =
  'Personal (non-commercial) import is typically limited to a maximum of 2 pets per person (2 cats, or 2 dogs, or 1 cat and 1 dog) per permit / per year. Confirm the current portal rule for your case.'

export const NONCOMPLIANCE_FINE =
  'Non-compliant imports can face penalties. Check the current rules with MOCCAE.'

export const MANIFEST_CARGO =
  'Pets must enter the UAE as manifested cargo under IATA live-animal conditions — not as cabin or accompanied checked baggage. Etihad in-cabin arrivals into Abu Dhabi are a published exception for eligible small pets.'

export const PARASITE_WINDOW =
  'External parasite treatment (for example Fipronil or Permethrin) and internal deworming are required within 10 days before shipping to the UAE.'

export const EXEMPT_LIST_HOLD =
  'MOCCAE maintains a rabies-controlled / exempt-country list that decides whether an RNATT is required. We do not publish a country-exemption list on this page. Confirm your origin on the official MOCCAE portal.'
