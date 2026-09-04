// Data-driven Service page model. One generic <ServicePage> renders any of these.
// Used to scale the site to 200+ pages per the Blue Book plan.

export type ServiceBlock =
  | { type: 'p'; text: string }
  | { type: 'list'; items: string[] }
  | { type: 'steps'; steps: { title: string; text: string }[] }
  | { type: 'table'; headers: string[]; rows: string[][] }
  | { type: 'image'; src: string; alt: string; caption?: string }

export interface ServiceSection {
  h2: string
  /** optional short intro under the H2 */
  intro?: string
  body: ServiceBlock[]
}

export interface ServiceFAQ {
  q: string
  a: string
}

export interface ServiceLink {
  label: string
  to: string
}

export interface ServicePageData {
  /** slug only, e.g. 'pet-relocation-dubai' (mounted at /service/<slug>/) */
  slug: string
  seoTitle: string
  metaDescription: string
  keywords: string
  h1: string
  /** <= 80 words, shown in the hero */
  heroValueProp: string
  /** Hero path — W3 assets use /assets/w1-w3/; blocked heroes keep existing placeholders. */
  heroImage: string
  heroImageAlt: string
  primaryKeyword: string
  /** pre-filled WhatsApp message for this page's CTAs */
  whatsappMessage: string
  /** trust chips under the hero */
  trustBadges?: string[]
  /** AED range, drives Offer schema + the pricing line */
  costRange?: { low: string; high: string }
  sections: ServiceSection[]
  faq: ServiceFAQ[]
  /** internal links rendered in a "Related services" block (also good for SEO) */
  relatedLinks: ServiceLink[]
  /** when true, emit HowTo schema from the first 'steps' block found */
  hasHowTo?: boolean
  howToName?: string
}
