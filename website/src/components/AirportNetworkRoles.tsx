import { Link } from 'react-router-dom'
import { Plane } from 'lucide-react'

/** Role titles only — no personal names, handler brands, or fee tables. */
export const AIRPORT_NETWORK_ROLES = [
  'Export vetting coordination',
  'Cargo acceptance liaison',
  'Arrival clearance coordination',
  'Inter-airport transfer briefing',
] as const

export type AirportNetworkRole = (typeof AIRPORT_NETWORK_ROLES)[number]

export type AirportNetworkCard = {
  country: string
  city: string
  iata: string
  role: AirportNetworkRole
}

/** Sample corridor airports from route50 seed + UAE DXB/DWC/AUH. Roles, not people. */
export const AIRPORT_NETWORK_CARDS: AirportNetworkCard[] = [
  { country: 'United Arab Emirates', city: 'Dubai', iata: 'DXB', role: 'Arrival clearance coordination' },
  { country: 'United Arab Emirates', city: 'Dubai', iata: 'DWC', role: 'Cargo acceptance liaison' },
  { country: 'United Arab Emirates', city: 'Abu Dhabi', iata: 'AUH', role: 'Arrival clearance coordination' },
  { country: 'India', city: 'Delhi', iata: 'DEL', role: 'Export vetting coordination' },
  { country: 'India', city: 'Mumbai', iata: 'BOM', role: 'Cargo acceptance liaison' },
  { country: 'Germany', city: 'Frankfurt', iata: 'FRA', role: 'Export vetting coordination' },
  { country: 'Germany', city: 'Munich', iata: 'MUC', role: 'Cargo acceptance liaison' },
  { country: 'Singapore', city: 'Singapore', iata: 'SIN', role: 'Inter-airport transfer briefing' },
  { country: 'Philippines', city: 'Manila', iata: 'MNL', role: 'Export vetting coordination' },
  { country: 'Australia', city: 'Sydney', iata: 'SYD', role: 'Cargo acceptance liaison' },
  { country: 'Netherlands', city: 'Amsterdam', iata: 'AMS', role: 'Export vetting coordination' },
  { country: 'France', city: 'Paris', iata: 'CDG', role: 'Cargo acceptance liaison' },
]

export const AIRPORT_NETWORK_BLURB = `We coordinate pet moves through a working airport network — by country, airport (IATA), and role (export vetting, cargo acceptance, arrival clearance, inter-airport transfer) — not through named individuals or preferred partner lists.

On UAE corridors that usually means DXB and DWC for manifest-cargo arrival and departure pathways, with AUH when the itinerary uses Abu Dhabi-side rules.

Overseas, we map the same role lens to the origin or destination gateway your corridor actually uses (for example DEL/BOM, LHR, FRA, SIN) so the file matches how pets really move — cabin vs cargo remains airline policy to confirm.

Dubai Pet Relocation is a coordinator: we line-check documents and timelines and brief the right airport-side roles; we do not operate aircraft or claim airline or airport affiliation.

No personal names, no invented handler brands, and no fee tables here — live moves stay quote-only on WhatsApp (+971504782999).`

type Props = {
  /** Full About section vs compact strip. */
  variant?: 'full' | 'compact'
  showRelocatorsLink?: boolean
}

export default function AirportNetworkRoles({ variant = 'full', showRelocatorsLink = true }: Props) {
  if (variant === 'compact') {
    return (
      <section className="bg-white py-10">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-6 lg:px-8">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-[#4F5BD5]">Airport network — roles only</p>
          <div className="flex gap-3 overflow-x-auto pb-2">
            {AIRPORT_NETWORK_CARDS.slice(0, 8).map((card) => (
              <div
                key={`${card.iata}-${card.role}-compact`}
                className="min-w-[200px] rounded-2xl bg-[#F5F6FD] px-4 py-3"
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-[#8A8A8A]">{card.country}</p>
                <p className="mt-1 text-sm font-bold text-[#2A2A2A]">
                  {card.city} ({card.iata})
                </p>
                <p className="mt-1 text-xs text-[#5A5A5A]">{card.role}</p>
              </div>
            ))}
          </div>
          {showRelocatorsLink ? (
            <p className="mt-4 text-sm text-[#5A5A5A]">
              Peer relocators:{' '}
              <Link to="/for-pet-relocators/" className="font-semibold text-[#4F5BD5] hover:underline">
                playbooks and network access
              </Link>
              .
            </p>
          ) : null}
        </div>
      </section>
    )
  }

  return (
    <section className="bg-[#F5F6FD] section-padding">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-3xl">
          <span className="text-sm font-semibold uppercase tracking-wider text-[#4F5BD5]">Airport network</span>
          <h2 className="mt-3 mb-4 text-[24px] font-bold text-[#2A2A2A] sm:text-[30px] lg:text-[36px]">
            Country, airport, and role — not a named-expert roster
          </h2>
          <div className="space-y-4 text-base leading-relaxed text-[#5A5A5A]">
            {AIRPORT_NETWORK_BLURB.split('\n\n').map((para) => (
              <p key={para.slice(0, 48)}>{para}</p>
            ))}
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {AIRPORT_NETWORK_CARDS.map((card) => (
            <div
              key={`${card.country}-${card.iata}-${card.role}`}
              className="rounded-[20px] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-[14px] bg-[#E9ECFB]">
                <Plane className="h-5 w-5 text-[#4F5BD5]" />
              </div>
              <p className="text-xs font-semibold uppercase tracking-wider text-[#8A8A8A]">{card.country}</p>
              <p className="mt-1 text-lg font-bold text-[#2A2A2A]">
                {card.city} ({card.iata})
              </p>
              <p className="mt-2 text-sm font-semibold text-[#4F5BD5]">{card.role}</p>
            </div>
          ))}
        </div>

        {showRelocatorsLink ? (
          <p className="mt-8 text-base leading-relaxed text-[#5A5A5A]">
            If you already move pets professionally and want playbooks plus this role map, see{' '}
            <Link to="/for-pet-relocators/" className="font-semibold text-[#4F5BD5] hover:underline">
              for pet relocators
            </Link>
            . Owner quotes stay on WhatsApp (+971504782999).
          </p>
        ) : null}
      </div>
    </section>
  )
}
