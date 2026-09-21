import { useLocation } from 'react-router-dom'
import type { SEOMeta } from '../lib/seo'
import { buildCanonical, defaultOGImage } from '../lib/seo'

interface SEOHeadProps {
  meta?: SEOMeta
  title?: string
  description?: string
  canonical?: string
  ogImage?: string
  ogType?: string
  noindex?: boolean
  schemas?: Record<string, unknown>[]
  jsonLd?: Record<string, unknown>[]
}

// React 19 native document metadata: rendering <title>/<meta>/<link> here hoists
// them into <head> on the client AND emits them in server/prerender output, so
// crawlers and AI engines get real per-page meta + JSON-LD in the raw HTML.
export default function SEOHead(props: SEOHeadProps) {
  const meta: SEOMeta = props.meta || {
    title: props.title || '',
    description: props.description || '',
    canonical: props.canonical,
    ogImage: props.ogImage,
    ogType: props.ogType,
    noindex: props.noindex,
  }

  const schemas = props.schemas || props.jsonLd || []
  const location = useLocation()
  const canonical = meta.canonical || buildCanonical(location.pathname)
  const ogImage = meta.ogImage || defaultOGImage
  const ogType = meta.ogType || 'website'
  const robots = meta.robots
    || (meta.noindex
      ? 'noindex, nofollow'
      : 'index, follow, max-image-preview:large, max-snippet:-1')

  return (
    <>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <meta name="robots" content={robots} />
      <link rel="canonical" href={canonical} />

      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Dubai Pet Relocation" />
      <meta property="og:locale" content="en_AE" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={ogImage} />

      {schemas.map((schema, i) => (
        <script
          // eslint-disable-next-line react/no-array-index-key
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  )
}
