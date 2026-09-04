import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import {
  FLIGHT_MODE_CARDS,
  type FlightModeId,
  type FlightModeCard,
} from '../data/flightModes.ts'
import { cardImageFor } from '../data/cardImages.ts'

export default function FlightModeCards({
  heading = 'The six pet travel modes',
  intro,
  exclude,
  cards,
}: {
  heading?: string
  intro?: string
  exclude?: FlightModeId
  cards?: FlightModeCard[]
}) {
  const items = cards ?? (exclude ? FLIGHT_MODE_CARDS.filter((c) => c.id !== exclude) : FLIGHT_MODE_CARDS)

  return (
    <section className="section-padding bg-[#F5F6FD]">
      <div className="mx-auto max-w-[1100px] px-5 sm:px-6 lg:px-8">
        <h2 className="mb-3 text-[24px] font-bold text-[#2A2A2A] sm:text-[30px]">{heading}</h2>
        {intro ? <p className="mb-6 max-w-3xl text-base leading-relaxed text-[#5A5A5A]">{intro}</p> : null}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((c) => {
            const img = cardImageFor(c.to)
            return (
              <Link
                key={c.to}
                to={c.to}
                className="flex flex-col overflow-hidden rounded-[20px] bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                {img ? (
                  <img src={img.src} alt={img.alt} width={1200} height={800} loading="lazy" className="aspect-[3/2] w-full object-cover" />
                ) : null}
                <div className="flex flex-1 flex-col p-6">
                  <span className="mb-2 text-xs font-semibold uppercase tracking-wider text-[#4F5BD5]">
                    {c.kind === 'service' ? 'Service' : 'Guide'}
                  </span>
                  <h3 className="mb-2 text-lg font-bold text-[#2A2A2A]">{c.title}</h3>
                  <p className="mb-4 flex-1 text-sm leading-relaxed text-[#5A5A5A]">{c.blurb}</p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#4F5BD5]">
                    Open {c.title.toLowerCase()} <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
