/** Keyword normalisation and the title/H1 fuzzy test shared by the map check. */

const FUZZY_STOP = new Set(['a', 'an', 'the', 'and', 'or', 'of', 'your', 'our'])

/**
 * Lowercase, trim, collapse whitespace. Hyphens and other punctuation become
 * spaces. Singular/plural pairs stay distinct. "uae" and "dubai" stay distinct.
 */
export function normalizeKeyword(value: string): string {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, ' ')
    .trim()
    .replace(/\s+/g, ' ')
}

/** True when the title or H1 contains the keyword, allowing light wording differences. */
export function fuzzyContains(haystack: string, keyword: string): boolean {
  const hay = normalizeKeyword(haystack)
  const key = normalizeKeyword(keyword)
  if (!hay || !key) return false
  if (hay.includes(key)) return true

  const needed = key.split(' ').filter((token) => token && !FUZZY_STOP.has(token))
  if (needed.length === 0) return false
  let index = 0
  for (const token of hay.split(' ')) {
    if (token === needed[index]) index += 1
    if (index === needed.length) return true
  }
  return false
}

export const CANONICAL_ORIGIN = 'https://dubai-pet-relocation.ae'

export function toCanonicalUrl(value: string): string {
  let path = value.trim()
  path = path.replace(/^https?:\/\/dubai-pet-relocation\.ae/i, '')
  path = path.split('?')[0].split('#')[0]
  if (!path.startsWith('/')) path = `/${path}`
  if (path !== '/' && !path.endsWith('/')) path = `${path}/`
  return `${CANONICAL_ORIGIN}${path}`
}

export function canonicalPath(url: string): string {
  return toCanonicalUrl(url).slice(CANONICAL_ORIGIN.length)
}
