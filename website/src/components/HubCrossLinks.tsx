import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export interface HubCrossLink {
  to: string
  label: string
  note: string
}

/** Visible contextual inbound/outbound strip used on Week 1 hubs. */
export default function HubCrossLinks({
  heading,
  intro,
  links,
}: {
  heading: string
  intro: string
  links: HubCrossLink[]
}) {
  return (
    <section className="bg-white section-padding">
      <div className="mx-auto max-w-[1100px] px-5 sm:px-6 lg:px-8">
        <h2 className="mb-3 text-[22px] font-bold text-[#2A2A2A] sm:text-[28px]">{heading}</h2>
        <p className="mb-6 max-w-3xl text-sm leading-relaxed text-[#5A5A5A] sm:text-base">{intro}</p>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="flex items-start justify-between gap-3 rounded-2xl bg-[#F5F6FD] px-5 py-4 transition-colors hover:bg-[#E9ECFB]"
            >
              <span>
                <span className="block text-sm font-semibold text-[#2A2A2A]">{l.label}</span>
                <span className="mt-1 block text-xs leading-relaxed text-[#5A5A5A]">{l.note}</span>
              </span>
              <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-[#4F5BD5]" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
