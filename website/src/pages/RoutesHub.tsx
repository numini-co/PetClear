import { Link } from 'react-router-dom'
import { ArrowRight, MessageCircle, Plane } from 'lucide-react'
import SEOHead from '../components/SEOHead.tsx'
import Breadcrumb from '../components/Breadcrumb.tsx'
import Hero from '../components/Hero.tsx'
import OfficialSources from '../components/OfficialSources.tsx'
import LastVerified from '../components/LastVerified.tsx'
import HubCrossLinks from '../components/HubCrossLinks.tsx'
import FAQItem from '../components/FAQItem.tsx'
import LinkedText from '../components/LinkedText.tsx'
import { stripInternalMarkdownLinks } from '../lib/linkedText.ts'
import { BASE_URL, getWhatsAppUrl } from '../lib/seo.ts'
import { ROUTE50_INBOUND_CARDS, ROUTE50_OUTBOUND_CARDS } from '../data/routes/registry.ts'
import type { RouteHubCard } from '../types/routePage.ts'

type HubCard = { title: string; to: string; image: string; desc: string }

/** Timeline / cost teasers — no invented AED government fees. */
const TEASERS: Record<string, string> = {
  '/routes/uk-to-dubai/': 'Typical 4–6 week prep on a low-risk origin. Freight + crate + coordination quoted per pet; MOCCAE fees confirm-on-portal.',
  '/routes/usa-to-dubai/': 'US origin file plus titer where it applies. Plan several weeks, not a last-minute cargo slot.',
  '/routes/india-to-dubai/': 'High-risk origin: RNATT sample within 90 days before travel. Longer lead than UK/EU; cargo default.',
  '/routes/australia-to-dubai/': 'Strict AU export chain into a UAE import clock. Multi-week prep; government fees confirm-on-portal.',
  '/routes/philippines-to-dubai/': 'High-risk route from MNL and beyond. Titer window + cargo booking — not a cabin hop.',
  '/routes/canada-to-dubai/': 'CFIA-endorsed health certificate into DXB. Typical multi-week prep; no package AED on this card.',
  '/routes/new-zealand-to-dubai/': 'Rabies-free origin still needs a full UAE import file. Timeline follows the permit clock.',
  '/routes/south-africa-to-dubai/': 'Titer-required origin. Build the sample window first, then crate and cargo.',
  '/routes/germany-to-dubai/': 'FRA/MUC export into DXB/DWC. EU origin, UAE permit clock — typical 4–8 week prep.',
  '/routes/france-to-dubai/': 'CDG export into DXB/DWC. French origin file; government fees confirm-on-portal.',
  '/routes/singapore-to-dubai/': 'Changi export into UAE cargo. Short sector, full import clock — not a same-week surprise.',
  '/routes/saudi-arabia-to-dubai/': 'RUH/JED/DMM GCC hop. Still a full UAE entry file — not a pet-taxi day trip.',
  '/routes/netherlands-to-dubai/': 'AMS gateway into DXB/DWC. One Dutch airport, full UAE file; typical EU-origin lead time.',
  '/routes/dubai-to-uk/': 'Destination-backwards: GB pet health certificate and tapeworm timing drive the clock, not a reversed import list.',
  '/routes/dubai-to-usa/': 'CDC dog rules and US arrival inspection sit first. Timeline is destination-led.',
  '/routes/dubai-to-canada/': 'CFIA-facing papers into YYZ/YVR/YUL/YYC. Plan from Canada backwards.',
  '/routes/dubai-to-australia/': 'DAFF Group 3 + Mickleham quarantine — months, not weeks. Australia first, then UAE export.',
  '/routes/dubai-to-india/': 'AQCS Advance NOC and designated-airport arrival. India import file, not a UAE-entry recap.',
  '/routes/dubai-to-philippines/': 'BAI SPSIC first, then UAE export into MNL/CEB/CRK.',
  '/routes/dubai-to-germany/': 'Leave Dubai for FRA/MUC/BER with EU entry planned destination-backwards.',
  '/routes/dubai-to-saudi-arabia/': 'MEWA Anaam permit into RUH/JED/DMM. Saudi import, not a reversed UAE checklist.',
}

const INBOUND_CORE: HubCard[] = [
  { title: 'UK to Dubai', to: '/routes/uk-to-dubai/', image: '/assets/route-heroes/route-uk-to-dubai-dog-flag-hero.jpg', desc: 'Low-risk origin: microchip, vaccinations, MOCCAE permit and a DEFRA health certificate.' },
  { title: 'USA to Dubai', to: '/routes/usa-to-dubai/', image: '/assets/route-heroes/route-usa-to-dubai-dog-flag-hero.jpg', desc: 'US origin rules, titer requirements where they apply, and DXB cargo arrival.' },
  { title: 'India to Dubai', to: '/routes/india-to-dubai/', image: '/assets/route-heroes/route-india-to-dubai-dog-flag-hero.jpg', desc: 'High-risk rabies origin: RNATT sample within 90 days before travel, then permit timing.' },
  { title: 'Australia to Dubai', to: '/routes/australia-to-dubai/', image: '/assets/route-heroes/route-australia-to-dubai-dog-flag-hero.jpg', desc: 'Strict export chain plus UAE import documents, timed to your flight.' },
  { title: 'Philippines to Dubai', to: '/routes/philippines-to-dubai/', image: '/assets/route-heroes/route-philippines-to-dubai-dog-flag-hero.jpg', desc: 'High-risk route: RNATT sample window before travel, and cargo booking from Manila and beyond.' },
  { title: 'Canada to Dubai', to: '/routes/canada-to-dubai/', image: '/assets/route-heroes/route-canada-to-dubai-dog-flag-hero.jpg', desc: 'CFIA-endorsed health certificate, MOCCAE permit, and DXB clearance.' },
  { title: 'New Zealand to Dubai', to: '/routes/new-zealand-to-dubai/', image: '/assets/route-heroes/route-new-zealand-to-dubai-dog-flag-hero.jpg', desc: 'Rabies-free origin advantage, still with a full UAE import document chain.' },
  { title: 'South Africa to Dubai', to: '/routes/south-africa-to-dubai/', image: '/assets/route-heroes/route-south-africa-to-dubai-dog-flag-hero.jpg', desc: 'Titer-required origin with permit, crate and cargo steps mapped out.' },
]

const OUTBOUND_CORE: HubCard[] = [
  { title: 'Dubai to UK', to: '/routes/dubai-to-uk/', image: '/assets/route-heroes/route-dubai-to-uk-dog-flag-hero.jpg', desc: 'MOCCAE export certificate, GB pet health certificate and tapeworm timing.' },
  { title: 'Dubai to USA', to: '/routes/dubai-to-usa/', image: '/assets/route-heroes/route-dubai-to-usa-dog-flag-hero.jpg', desc: 'CDC dog import rules, health certificate and US arrival inspection.' },
]

const GCC_INBOUND = ['/routes/saudi-arabia-to-dubai/', '/routes/qatar-to-dubai/', '/routes/oman-to-dubai/', '/routes/bahrain-to-dubai/', '/routes/kuwait-to-dubai/']

function withTeaser(card: HubCard): HubCard {
  const teaser = TEASERS[card.to]
  if (!teaser) return card
  if (card.desc.includes(teaser.slice(0, 24))) return card
  return { ...card, desc: `${card.desc} ${teaser}` }
}

function mergeUnique(core: HubCard[], extra: readonly RouteHubCard[]): HubCard[] {
  const seen = new Set<string>()
  const out: HubCard[] = []
  for (const card of [...core, ...extra]) {
    if (seen.has(card.to)) continue
    seen.add(card.to)
    out.push(withTeaser(card))
  }
  return out
}

const INBOUND = mergeUnique(INBOUND_CORE, ROUTE50_INBOUND_CARDS)
const OUTBOUND = mergeUnique(OUTBOUND_CORE, ROUTE50_OUTBOUND_CARDS)

const faqs = [
  {
    q: 'Do all inbound routes use the same MOCCAE permit?',
    a: 'Yes. Every pet entering the UAE needs a MOCCAE import permit valid for 90 days from issuance, wherever the origin. High-risk origins add an RNATT sample taken within 90 days before travel (≥0.5 IU/ml). Confirm government fees on the official portal. Start with [UAE pet import requirements](/guides/uae-pet-import-requirements/).',
  },
  {
    q: 'Why is an outbound guide not a reversed inbound checklist?',
    a: 'Destination authorities set the clock — CFIA, DAFF/Mickleham, BAI, MEWA, EU certificates. UAE export paperwork is only one layer. Open the outbound URL for that country rather than flipping a to-Dubai page.',
  },
  {
    q: 'How much does a route cost?',
    a: 'Cost is a stack — origin vet prep, documents, freight, crate, cargo release, ground and destination fees — not a single invented AED band on this hub. Government amounts are confirm-on-portal. Read [what pet relocation costs](/guides/pet-relocation-cost-dubai/), then WhatsApp the origin, destination and pet.',
  },
  {
    q: 'Are Germany, France, Singapore, Saudi and the Netherlands live?',
    a: 'Yes. Inbound and matching outbound twins are on this hub (including dubai-to-canada/australia/india/philippines/germany/saudi). Cards below are the live program set — we do not rename those URLs.',
  },
  {
    q: 'Is a GCC hop just a pet taxi?',
    a: 'No. Saudi, Qatar, Oman, Bahrain and Kuwait still need a full import or destination file. Same-day vans inside the UAE sit on [pet transport in Dubai](/service/pet-transport-dubai/).',
  },
]

function RouteCardGrid({ routes }: { routes: HubCard[] }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {routes.map((r) => (
        <Link
          key={r.to}
          to={r.to}
          className="group overflow-hidden rounded-[20px] border border-[#E6E8F5] bg-white transition hover:-translate-y-0.5 hover:shadow-md"
        >
          <img
            src={r.image}
            alt={r.title}
            width={1536}
            height={1024}
            loading="lazy"
            className="h-44 w-full object-cover"
            onError={(e) => {
              if (e.currentTarget.src.endsWith('/images/import-hero.jpg')) return
              e.currentTarget.src = '/images/import-hero.jpg'
            }}
          />
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
  )
}

export default function RoutesHub() {
  const canonical = `${BASE_URL}/routes/`
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
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Routes', item: canonical },
    ],
  }
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: stripInternalMarkdownLinks(f.a) },
    })),
  }

  return (
    <div>
      <SEOHead
        meta={{
          title: 'Pet Relocation Routes to and from Dubai | Country Guides',
          description:
            'Pet relocation routes to and from Dubai: UK, USA, India, Germany, Singapore and more. Timelines and documents, not invented fees.',
          canonical,
          ogType: 'website',
        }}
        schemas={[breadcrumbSchema, itemListSchema, faqSchema]}
      />
      <Breadcrumb items={[{ label: 'Routes' }]} />

      <Hero
        image="/images/import-hero.jpg"
        imageAlt="A dog ready for an international flight beside travel documents"
        eyebrow="Relocation Routes"
        title="Pet Relocation Routes to and from Dubai"
        subtitle="Country guides grouped inbound versus outbound. Each card is a live URL — documents, timing teasers and what we coordinate, not copy-paste across borders."
        updated="Last verified 18 September 2026"
        secondary={{ label: 'UAE Import Requirements', to: '/guides/uae-pet-import-requirements/' }}
      />

      <section className="bg-white section-padding">
        <div className="mx-auto max-w-[800px] px-5 sm:px-6 lg:px-8">
          <h2 className="mb-4 text-[24px] font-bold text-[#2A2A2A] sm:text-[30px]">How to use this hub</h2>
          <LastVerified className="mb-4 text-xs text-[#8A8A8A]" date="18 September 2026" />
          <p className="mb-4 leading-relaxed text-[#5A5A5A]">
            Open the country pair that matches the direction of travel. Inbound pages assume a UAE entry file: ISO
            microchip, vaccinations, a MOCCAE import permit valid 90 days from issuance, and — where required — an RNATT
            sample taken within 90 days before travel at ≥0.5 IU/ml. Outbound pages start from the destination authority
            and work backwards through a UAE export health certificate. Card teasers give a typical lead time and a cost
            type (freight, crate, coordination). They do not assume AED government fees.
          </p>
          <p className="leading-relaxed text-[#5A5A5A]">
            Germany, France, Singapore, Saudi Arabia and the Netherlands are live inbound corridors. Outbound twins
            include Canada, Australia, India, the Philippines, Germany and Saudi. GCC hops (Saudi, Qatar, Oman, Bahrain,
            Kuwait) still need a full file — they are not a same-day pet taxi. Ground vans inside the UAE sit on{' '}
            <Link to="/service/pet-transport-dubai/" className="font-semibold text-[#4F5BD5] hover:underline">
              pet transport in Dubai
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="bg-[#F5F6FD] section-padding">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-6 lg:px-8">
          <div className="mb-6 rounded-[20px] border border-[#E6E8F5] bg-white p-6">
            <h2 className="mb-2 text-lg font-bold text-[#2A2A2A]">GCC corridors</h2>
            <p className="mb-4 text-sm leading-relaxed text-[#5A5A5A]">
              Short sectors still carry a full UAE import or destination-import clock. Confirm portal fees when you apply.
              Highlighted inbound cards:{' '}
              {GCC_INBOUND.map((to, i) => {
                const card = INBOUND.find((c) => c.to === to)
                if (!card) return null
                return (
                  <span key={to}>
                    {i > 0 ? ' · ' : ''}
                    <Link to={to} className="font-semibold text-[#4F5BD5] hover:underline">
                      {card.title}
                    </Link>
                  </span>
                )
              })}
              .
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white section-padding">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-center gap-3">
            <Plane className="h-6 w-6 text-[#4F5BD5]" />
            <div>
              <h2 className="text-[24px] font-bold text-[#2A2A2A] sm:text-[30px]">Inbound — to Dubai</h2>
              <p className="mt-1 text-sm text-[#5A5A5A]">
                Pets arriving in the UAE. Every inbound move needs a MOCCAE import permit valid 90 days from issuance.
              </p>
            </div>
          </div>
          <RouteCardGrid routes={INBOUND} />
        </div>
      </section>

      <section className="bg-[#F5F6FD] section-padding">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-center gap-3">
            <Plane className="h-6 w-6 rotate-180 text-[#4F5BD5]" />
            <div>
              <h2 className="text-[24px] font-bold text-[#2A2A2A] sm:text-[30px]">Outbound — from Dubai</h2>
              <p className="mt-1 text-sm text-[#5A5A5A]">
                Pets leaving the UAE. Destination import rules drive the timeline — not a reversed inbound checklist.
              </p>
            </div>
          </div>
          <RouteCardGrid routes={OUTBOUND} />
        </div>
      </section>

      <section className="bg-white section-padding">
        <div className="mx-auto max-w-[900px] px-5 sm:px-6 lg:px-8">
          <h2 className="mb-6 text-[24px] font-bold text-[#2A2A2A] sm:text-[30px]">Route hub FAQs</h2>
          <div className="space-y-3">
            {faqs.map((f) => (
              <FAQItem key={f.q} question={f.q} answer={<LinkedText text={f.a} />} />
            ))}
          </div>
        </div>
      </section>

      <HubCrossLinks
        heading="Start here if you are still choosing the job"
        intro="Country guides sit on this hub. Homepage, tiers and the directional service pages live one click away — use the anchors below so each URL keeps its own intent."
        path="/routes/"
      />

      <OfficialSources />

      <section className="bg-[#4F5BD5] section-padding">
        <div className="mx-auto max-w-[1200px] px-5 text-center sm:px-6 lg:px-8">
          <h2 className="mb-4 text-[28px] font-bold text-white sm:text-[34px]">Need a route that is not listed?</h2>
          <p className="mx-auto mb-7 max-w-2xl text-white/80">
            Message us on WhatsApp with your origin, destination and pet details. We will map the current requirements for
            your exact corridor.
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
