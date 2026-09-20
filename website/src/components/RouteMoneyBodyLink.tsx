import { Link } from 'react-router-dom'
import { pickBodyLinks } from '../data/internalLinks.ts'

/** One inbound body sentence: directional money + flagship (map P1). */
export default function RouteMoneyBodyLink({ path }: { path: string }) {
  const links = pickBodyLinks(path)
  if (links.length === 0) return null
  const directional = links.find((l) => l.to === '/service/pet-relocation-to-dubai/') ?? links[0]
  const flagship = links.find((l) => l.to === '/service/pet-relocation-dubai/')
  return (
    <p className="mt-4 leading-relaxed text-[#5A5A5A]">
      If you want the inbound file held for you, start on{' '}
      <Link className="font-semibold text-[#4F5BD5]" to={directional.to}>
        {directional.label}
      </Link>
      {flagship ? (
        <>
          . Door-to-door coordination sits on{' '}
          <Link className="font-semibold text-[#4F5BD5]" to={flagship.to}>
            {flagship.label}
          </Link>
        </>
      ) : null}
      .
    </p>
  )
}
