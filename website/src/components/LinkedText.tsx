import { Link } from 'react-router-dom'

const LINK_RE = /\[([^\]]+)\]\((\/[^)]+)\)/g

/** Render plain copy with optional `[anchor](/path/)` internal links. */
export function LinkedText({ text }: { text: string }) {
  const parts: React.ReactNode[] = []
  let last = 0
  const re = new RegExp(LINK_RE.source, 'g')
  let match: RegExpExecArray | null
  while ((match = re.exec(text)) !== null) {
    if (match.index > last) parts.push(text.slice(last, match.index))
    parts.push(
      <Link key={`${match.index}-${match[2]}`} to={match[2]} className="font-semibold text-[#4F5BD5] hover:underline">
        {match[1]}
      </Link>,
    )
    last = match.index + match[0].length
  }
  if (last < text.length) parts.push(text.slice(last))
  return <>{parts}</>
}

export function stripInternalMarkdownLinks(text: string): string {
  return text.replace(LINK_RE, '$1')
}
