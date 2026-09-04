import { Link } from 'react-router-dom'
import { ArrowRight, MessageCircle, Plane } from 'lucide-react'
import SEOHead from '../components/SEOHead.tsx'
import Breadcrumb from '../components/Breadcrumb.tsx'
import Hero from '../components/Hero.tsx'
import OfficialSources from '../components/OfficialSources.tsx'
import LastVerified from '../components/LastVerified.tsx'
import HubCrossLinks from '../components/HubCrossLinks.tsx'
import { BASE_URL, getWhatsAppUrl } from '../lib/seo.ts'
import { ROUTE50_INBOUND_CARDS, ROUTE50_OUTBOUND_CARDS } from '../data/routes/registry.ts'

const INBOUND = [
  { title: 'UK to Dubai', to: '/routes/uk-to-dubai/', image: '/images/hero-uk.jpg', desc: 'Low-risk origin: microchip, vaccinations, MOCCAE permit and a DEFRA health certificate.' },
  { title: 'USA to Dubai', to: '/routes/usa-to-dubai/', image: '/images/hero-usa.jpg', desc: 'US origin rules, titer requirements where they apply, and DXB cargo arrival.' },
  { title: 'India to Dubai', to: '/routes/india-to-dubai/', image: '/images/hero-india.jpg', desc: 'High-risk rabies origin: titer test, waiting period, and permit timing.' },
  { title: 'Australia to Dubai', to: '/routes/australia-to-dubai/', image: '/images/hero-australia.jpg', desc: 'Strict export chain plus UAE import documents, timed to your flight.' },
  { title: 'Philippines to Dubai', to: '/routes/philippines-to-dubai/', image: '/images/hero-philippines.jpg', desc: 'High-risk route: RNATT, waiting period, and cargo booking from Manila and beyond.' },
  { title: 'Canada to Dubai', to: '/routes/canada-to-dubai/', image: '/images/hero-canada.jpg', desc: 'CFIA-endorsed health certificate, MOCCAE permit, and DXB clearance.' },
  { title: 'New Zealand to Dubai', to: '/routes/new-zealand-to-dubai/', image: '/images/hero-new-zealand.jpg', desc: 'Rabies-free origin advantage, still with a full UAE import document chain.' },
  { title: 'South Africa to Dubai', to: '/routes/south-africa-to-dubai/', image: '/images/hero-south-africa.jpg', desc: 'Titer-required origin with permit, crate and cargo steps mapped out.' },
  ...ROUTE50_INBOUND_CARDS,
]

const OUTBOUND = [
  { title: 'Dubai to UK', to: '/routes/dubai-to-uk/', image: '/images/hero-dubai-to-uk.jpg', desc: 'MOCCAE export certificate, GB pet health certificate and tapeworm timing.' },
  { title: 'Dubai to USA', to: '/routes/dubai-to-usa/', image: '/images/hero-dubai-to-usa.jpg', desc: 'CDC dog import rules, health certificate and US arrival inspection.' },
  ...ROUTE50_OUTBOUND_CARDS,
]

export default function RoutesHub() {
  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Pet Relocation Routes to and from Dubai',
    itemListElement: [...INBOUND, ...OUTBOUND].map((r, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      url: `${BASE_URL}${r.to}`,
      name: r.title,
    })),
  }

  return (
    <div>
      <SEOHead
        meta={{
          title: 'Pet Relocation Routes to and from Dubai | Country Guides',
          description:
            'Country-by-country pet relocation routes into and out of Dubai. Inbound and outbound guides covering documents, timelines and WhatsApp quotes.',
          canonical: `${BASE_URL}/routes/`,
          ogType: 'website',
        }}
        schemas={[itemListSchema]}
      />
      <Breadcrumb items={[{ label: 'Routes' }]} />

      <Hero
        image="/images/import-hero.jpg"
        imageAlt="A dog ready for an international flight beside travel documents"
        eyebrow="Relocation Routes"
        title="Pet Relocation Routes to and from Dubai"
        subtitle="Country guides, grouped inbound versus outbound. Each route page covers documents, timing and what we coordinate — no generic copy-paste across borders."
        updated="Last verified 4 September 2026"
        secondary={{ label: 'UAE Import Requirements', to: '/guides/uae-pet-import-requirements/' }}
      />

      <section className="bg-white section-padding">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-center gap-3">
            <Plane className="h-6 w-6 text-[#4F5BD5]" />
            <div>
              <h2 className="text-[24px] font-bold text-[#2A2A2A] sm:text-[30px]">Inbound — to Dubai</h2>
              <p className="mt-1 text-sm text-[#5A5A5A]">Pets arriving in the UAE. Every inbound move needs a MOCCAE import permit valid 30 days from issuance.</p>
            </div>
          </div>
          <LastVerified className="mb-6 text-xs text-[#8A8A8A]" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {INBOUND.map((r) => (
              <Link
                key={r.to}
                to={r.to}
                className="group overflow-hidden rounded-[20px] border border-[#E6E8F5] bg-white transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <img src={r.image} alt={r.title} width={1536} height={1024} loading="lazy" className="h-44 w-full object-cover" />
                <div className="p-5">
                  <h3 className="mb-2 text-lg font-bold text-[#2A2A2A] group-hover:text-[#4F5BD5]">{r.title}</h3>
                  <p className="text-sm leading-relaxed text-[#5A5A5A]">{r.desc}</p>
                  <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-[#4F5BD5]">
                    Read the route guide <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F5F6FD] section-padding">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-center gap-3">
            <Plane className="h-6 w-6 rotate-180 text-[#4F5BD5]" />
            <div>
              <h2 className="text-[24px] font-bold text-[#2A2A2A] sm:text-[30px]">Outbound — from Dubai</h2>
              <p className="mt-1 text-sm text-[#5A5A5A]">Pets leaving the UAE. Destination import rules drive the timeline — not a reversed inbound checklist.</p>
            </div>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {OUTBOUND.map((r) => (
              <Link
                key={r.to}
                to={r.to}
                className="group overflow-hidden rounded-[20px] border border-[#E6E8F5] bg-white transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <img src={r.image} alt={r.title} width={1536} height={1024} loading="lazy" className="h-44 w-full object-cover" />
                <div className="p-5">
                  <h3 className="mb-2 text-lg font-bold text-[#2A2A2A] group-hover:text-[#4F5BD5]">{r.title}</h3>
                  <p className="text-sm leading-relaxed text-[#5A5A5A]">{r.desc}</p>
                  <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-[#4F5BD5]">
                    Read the route guide <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <HubCrossLinks
        heading="Start here if you are still choosing the job"
        intro="Country guides sit on this hub. Category entry, tiers and the directional service pages live one click away — use the anchors below so each URL keeps its own intent."
        links={[
          { to: '/', label: 'Homepage overview', note: 'Category entry for pet relocation coordination in Dubai' },
          { to: '/services/', label: 'Compare our service tiers', note: 'Essential through full coordination — then open a service URL' },
          { to: '/service/pet-relocation-to-dubai/', label: 'Bringing your pet to Dubai', note: 'Inbound-only arrival, permit and settling-in spine' },
          { to: '/service/pet-relocation-from-dubai/', label: 'Leaving Dubai with your pet', note: 'Outbound-only destination-first timeline' },
          { to: '/service/pet-transport-dubai/', label: 'Local pet transport and pet taxi service', note: 'Ground and airport runs — not international cargo' },
          { to: '/guides/', label: 'Guides hub', note: 'Permits, titer, crates and cost drivers' },
        ]}
      />

      <OfficialSources />

      <section className="bg-[#4F5BD5] section-padding">
        <div className="mx-auto max-w-[1200px] px-5 text-center sm:px-6 lg:px-8">
          <h2 className="mb-4 text-[28px] font-bold text-white sm:text-[34px]">Need a route that is not listed?</h2>
          <p className="mx-auto mb-7 max-w-2xl text-white/80">
            Message us on WhatsApp with your origin, destination and pet details. We will map the current requirements for your exact corridor.
          </p>
          <a
            href={getWhatsAppUrl('Hi Dubai Pet Relocation! I need help with a pet relocation route that is not listed on your site.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-7 py-4 text-sm font-semibold text-white shadow-lg transition hover:bg-[#1DA851]"
          >
            <MessageCircle className="h-4 w-4" /> Ask on WhatsApp
          </a>
        </div>
      </section>
    </div>
  )
}
