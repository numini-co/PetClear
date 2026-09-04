// SEO utilities for Dubai Pet Relocation website
// Replace BASE_URL with actual domain when decided
export const BASE_URL = 'https://dubai-pet-relocation.ae'

export interface SEOMeta {
  title: string
  description: string
  canonical?: string
  ogImage?: string
  ogType?: string
  noindex?: boolean
  keywords?: string
}

export function buildCanonical(path: string): string {
  return `${BASE_URL}${path}`
}

// Trim hero copy to its first sentence (or ~155 chars) for short, scannable heroes.
export function shortSubtitle(text: string, max = 155): string {
  if (!text) return text
  const firstSentence = text.split(/(?<=[.!?])\s/)[0]
  const base = firstSentence && firstSentence.length <= max ? firstSentence : text
  if (base.length <= max) return base
  return base.slice(0, max).replace(/\s+\S*$/, '') + '…'
}

/** Digits for wa.me / tel query strings (no plus, no spaces). */
export const WHATSAPP_PHONE = '971504782999'
/** E.164 — schema.org telephone, tel: hrefs. */
export const PHONE_E164 = '+971504782999'
/** Human-readable display. */
export const PHONE_DISPLAY = '+971 50 478 2999'

export function getWhatsAppUrl(message: string, campaign = 'pet-relocation'): string {
  const params = new URLSearchParams({
    text: message,
    utm_source: 'site',
    utm_medium: 'whatsapp',
    utm_campaign: campaign,
  })
  return `https://wa.me/${WHATSAPP_PHONE}?${params.toString()}`
}

export const defaultOGImage = `${BASE_URL}/assets/og-default.jpg`

export const siteConfig = {
  name: 'Dubai Pet Relocation',
  tagline: 'Your pet\'s journey, made clear.',
  description: 'Transparent pet relocation coordination service for Dubai and the UAE. We help pet owners understand the process, check requirements, and connect with trusted relocation partners.',
  phone: PHONE_DISPLAY,
  phoneE164: PHONE_E164,
  email: 'hello@dubai-pet-relocation.ae',
  address: {
    street: '217 Zahra Townhouses, Town Square',
    city: 'Dubai',
    region: 'Dubai',
    postalCode: '00000',
    country: 'AE',
  },
  hours: 'Open daily · 9:00 AM – 8:00 PM',
  geo: {
    lat: '25.2048',
    lng: '55.2708',
  },
}
