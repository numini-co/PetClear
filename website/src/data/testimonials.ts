export interface Testimonial {
  quote: string // the client's own words (lightly tidied is fine)
  name: string // real first name + last initial, e.g. "Sarah M."
  detail: string // e.g. "Dubai Marina · Golden Retriever to London"
  rating?: number // 1–5, defaults to 5
}

// ─────────────────────────────────────────────────────────────────────────────
// REAL client reviews only. Paste your genuine testimonials here and the rotating
// testimonials section on the homepage shows automatically. An empty array hides
// the whole section, so nothing fabricated is ever published.
//
// Minimum per entry: a real quote + a real first name + a real area/pet detail.
// (Sourcing from your WhatsApp threads or Google reviews is ideal.) Up to ~50.
// Do not fabricate reviews — fabricated testimonials are deceptive and unlawful
// (FTC fake-review rule, 2024) and get the site demoted by the audit's truth check.
// ─────────────────────────────────────────────────────────────────────────────
export const TESTIMONIALS: Testimonial[] = []
