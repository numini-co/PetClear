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

export function getWhatsAppUrl(message: string, campaign = 'pet-relocation'): string {
  const phone = '971551744849'
  const params = new URLSearchParams({
    text: message,
    utm_source: 'site',
    utm_medium: 'whatsapp',
    utm_campaign: campaign,
  })
  return `https://wa.me/${phone}?${params.toString()}`
}

export const defaultOGImage = `${BASE_URL}/assets/og-default.jpg`

export const siteConfig = {
  name: 'Dubai Pet Relocation',
  tagline: 'Your pet\'s journey, made clear.',
  description: 'Transparent pet relocation coordination service for Dubai and the UAE. We help pet owners understand the process, check requirements, and connect with trusted relocation partners.',
  phone: '+971 55 174 4849',
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
