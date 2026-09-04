import { ExternalLink } from 'lucide-react'
import LastVerified from './LastVerified.tsx'

// Outbound citations to the actual authorities (audit: "cite official sources").
// Linked at authority level (stable) — we never restate their rules as our own.
const SOURCES: { label: string; href: string }[] = [
  { label: 'UAE MOCCAE — import permits & rules', href: 'https://www.moccae.gov.ae' },
  { label: 'IATA Live Animals Regulations — travel crates', href: 'https://www.iata.org/en/programs/cargo/live-animals/' },
  { label: 'Etihad — travelling with pets', href: 'https://www.etihad.com/en-ae/plan/travel-companion/travelling-with-pets' },
  { label: 'Emirates — travelling with pets / animals', href: 'https://www.emirates.com/ae/english/before-you-fly/travel/travelling-with-pets/' },
  { label: 'USDA APHIS — Pet Travel (US health certificates)', href: 'https://www.aphis.usda.gov/pet-travel' },
]

export default function OfficialSources() {
  return (
    <section className="bg-[#EEF0FC] section-padding">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
        <span className="text-sm font-semibold uppercase tracking-wider text-[#4F5BD5]">
          Verify With the Authorities
        </span>
        <h2 className="text-section mt-3 mb-4">Official Sources</h2>
        <p className="text-body-large max-w-2xl mb-3">
          We coordinate the paperwork, but the rules are set by government and industry
          authorities. Always confirm the current requirements directly with the official sources.
        </p>
        <LastVerified className="mb-6 text-sm text-[#5A5A5A]" />
        <ul className="flex flex-wrap gap-3">
          {SOURCES.map((s) => (
            <li key={s.href}>
              <a
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-[#D8DCF3] bg-white px-4 py-2 text-sm font-semibold text-[#4F5BD5] transition hover:border-[#4F5BD5]"
              >
                {s.label}
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
