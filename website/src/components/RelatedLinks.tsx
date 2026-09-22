import HubCrossLinks from './HubCrossLinks.tsx'
import type { ResolvedLink } from '../data/internalLinks.ts'
import { getRelatedLinks } from '../data/internalLinks.ts'

/**
 * Shared related rail. Same card language as HubCrossLinks; data from the linking engine.
 */
export default function RelatedLinks({
  heading,
  intro,
  links,
  path,
}: {
  heading: string
  intro?: string
  links?: ResolvedLink[]
  path?: string
}) {
  const resolved = links ?? (path ? getRelatedLinks(path) : [])
  if (resolved.length === 0) return null
  return (
    <HubCrossLinks
      heading={heading}
      intro={intro ?? 'Nearby pages for the same part of the move.'}
      links={resolved.map((l) => ({ to: l.to, label: l.label, note: l.note ?? '' }))}
    />
  )
}
