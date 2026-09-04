import { Link } from 'react-router-dom'
import { LINK_RE } from '../lib/linkedText.ts'

/** Render plain copy with optional `[anchor](/path/)` internal links. */
export default function LinkedText({ text }: { text: string }) {
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
