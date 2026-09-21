import type { ServiceSection, ServiceFAQ } from './servicePage.ts'

// Data-driven Area page model (Blue Book Phase 3 — Dubai area domination).
export interface AreaPageData {
  /** slug only, e.g. 'dubai-marina' (mounted at /dubai/<slug>/) */
  slug: string
  areaName: string
  emirate: string
  seoTitle: string
  metaDescription: string
  h1: string
  heroValueProp: string
  /** /images/area-<slug>.jpg */
  heroImage: string
  heroImageAlt: string
  primaryKeyword: string
  whatsappMessage: string
  geo?: { lat: string; lng: string }
  /** nearby landmarks / communities for local relevance */
  landmarks: string[]
  /** generic note about local vets (no fabricated named clinics) */
  vetsNote?: string
  /** opening area intro paragraph */
  intro: string
  sections: ServiceSection[]
  faq: ServiceFAQ[]
  /** links to nearby area pages */
  relatedAreas: { label: string; to: string }[]
}
