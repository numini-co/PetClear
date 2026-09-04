import type { RouteAirline, RouteAirport, RouteDirection, UaeAirport } from '../types/routePage.ts'

type Props = {
  countryName: string
  direction: RouteDirection
  countryAirports: RouteAirport[]
  uaeAirports: UaeAirport[]
  airlines: RouteAirline[]
}

const MODE_LABEL: Record<RouteAirline['mode'], string> = {
  cabin: 'Cabin (confirm seats/eligibility)',
  cargo: 'Manifest cargo / SkyCargo-style',
  cabin_or_cargo: 'Cabin or cargo — confirm for this OD',
  generally_not: 'Generally does not accept pets',
  confirm: 'Confirm current pet policy',
}

export default function RouteAirportsAirlinesBlock({
  countryName,
  direction,
  countryAirports,
  uaeAirports,
  airlines,
}: Props) {
  return (
    <section className="bg-white section-padding">
      <div className="mx-auto max-w-[1200px] space-y-12 px-5 sm:px-6 lg:px-8">
        <div>
          <h2 className="text-[24px] font-bold text-[#2A2A2A] sm:text-[30px]">
            Main airports — {countryName} {direction === 'inbound' ? '→ UAE' : '← from Dubai'}
          </h2>
          <p className="mt-3 max-w-3xl text-base leading-relaxed text-[#5A5A5A]">
            Pets on this corridor typically move through the airports below. UAE clearance for most dogs and cats is
            via cargo pathways at DXB and/or DWC; Abu Dhabi (AUH) appears when the itinerary uses Etihad cabin rules.
            Airport names are routing facts — not a partnership claim.
          </p>
          <div className="mt-6 overflow-x-auto rounded-[20px] border border-[#E6E8F5]">
            <table className="min-w-full text-sm">
              <thead className="bg-[#F5F6FD] text-left">
                <tr>
                  <th className="px-4 py-3 font-semibold text-[#2A2A2A]">IATA</th>
                  <th className="px-4 py-3 font-semibold text-[#2A2A2A]">City / airport</th>
                  <th className="px-4 py-3 font-semibold text-[#2A2A2A]">Role</th>
                  <th className="px-4 py-3 font-semibold text-[#2A2A2A]">Side</th>
                </tr>
              </thead>
              <tbody>
                {countryAirports.map((a) => (
                  <tr key={`${a.iata}-${a.city}`} className="border-t border-[#E6E8F5]">
                    <td className="px-4 py-3 font-mono font-semibold">{a.iata}</td>
                    <td className="px-4 py-3 text-[#5A5A5A]">
                      {a.city}
                      {a.notes ? <span className="mt-1 block text-xs text-[#8A8A8A]">{a.notes}</span> : null}
                    </td>
                    <td className="px-4 py-3 text-[#5A5A5A]">{a.role || '—'}</td>
                    <td className="px-4 py-3 text-[#5A5A5A]">{countryName}</td>
                  </tr>
                ))}
                {uaeAirports.map((a) => (
                  <tr key={a.iata} className="border-t border-[#E6E8F5]">
                    <td className="px-4 py-3 font-mono font-semibold">{a.iata}</td>
                    <td className="px-4 py-3 text-[#5A5A5A]">
                      {a.city}
                      <span className="mt-1 block text-xs text-[#8A8A8A]">{a.notes}</span>
                    </td>
                    <td className="px-4 py-3 text-[#5A5A5A]">{direction === 'inbound' ? 'import_clearance' : 'export'}</td>
                    <td className="px-4 py-3 text-[#5A5A5A]">UAE</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h2 className="text-[24px] font-bold text-[#2A2A2A] sm:text-[30px]">
            Airlines that can move pets on this corridor
          </h2>
          <p className="mt-3 max-w-3xl text-base leading-relaxed text-[#5A5A5A]">
            Modes below come from our corridor seed and must be confirmed against the airline’s current pet policy for
            your exact itinerary. Dubai Pet Relocation is a coordinator — not an airline, and not an official partner of
            any carrier listed.
          </p>
          <div className="mt-6 overflow-x-auto rounded-[20px] border border-[#E6E8F5]">
            <table className="min-w-full text-sm">
              <thead className="bg-[#F5F6FD] text-left">
                <tr>
                  <th className="px-4 py-3 font-semibold text-[#2A2A2A]">Airline</th>
                  <th className="px-4 py-3 font-semibold text-[#2A2A2A]">Pet mode</th>
                  <th className="px-4 py-3 font-semibold text-[#2A2A2A]">Notes</th>
                  <th className="px-4 py-3 font-semibold text-[#2A2A2A]">Policy</th>
                </tr>
              </thead>
              <tbody>
                {airlines.map((al) => (
                  <tr key={al.name} className="border-t border-[#E6E8F5]">
                    <td className="px-4 py-3 font-semibold text-[#2A2A2A]">{al.name}</td>
                    <td className="px-4 py-3 text-[#5A5A5A]">{MODE_LABEL[al.mode]}</td>
                    <td className="px-4 py-3 text-[#5A5A5A]">{al.notes}</td>
                    <td className="px-4 py-3 text-[#5A5A5A]">
                      {al.verificationStatus === 'verified' && al.policyUrl ? (
                        <a
                          className="font-semibold text-[#4F5BD5]"
                          href={al.policyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Official policy
                        </a>
                      ) : (
                        <span>
                          Confirm current policy
                          {al.verificationStatus === 'unverified' ? (
                            <span className="mt-1 block text-xs text-[#8A8A8A]">Unverified seed row</span>
                          ) : null}
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs text-[#8A8A8A]">
            Last seed import: unverified rows show “Confirm current policy”. No airline logos or affiliation claims.
          </p>
        </div>
      </div>
    </section>
  )
}
