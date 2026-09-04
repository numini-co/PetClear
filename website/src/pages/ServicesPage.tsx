import { Link } from 'react-router-dom'
import {
  MessageCircle, CheckCircle, Shield, Plane, FileCheck, Heart, Stethoscope,
  MapPin, PawPrint, Home, X, Star, ArrowRight,
} from 'lucide-react'
import SEOHead from '../components/SEOHead.tsx'
import { getWhatsAppUrl, BASE_URL } from '../lib/seo.ts'
import Breadcrumb from '../components/Breadcrumb.tsx'
import Hero from '../components/Hero.tsx'
import FAQItem from '../components/FAQItem.tsx'
import ContentImage from '../components/ContentImage.tsx'
import { SERVICE_LINKS } from '../data/nav.ts'

const WhatsAppCta = ({
  text,
  message,
  className = '',
  fullWidth = false,
}: {
  text: string
  message: string
  className?: string
  fullWidth?: boolean
}) => (
  <a
    href={getWhatsAppUrl(message)}
    target="_blank"
    rel="noopener noreferrer"
    className={`inline-flex items-center justify-center gap-2 rounded-2xl bg-[#25D366] px-7 py-4 text-sm font-semibold text-white shadow-sm transition-all hover:bg-[#1DA851] ${fullWidth ? 'w-full' : ''} ${className}`}
  >
    <MessageCircle className="h-4 w-4" />
    {text}
  </a>
)

const Card = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <div className={`rounded-[20px] bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md lg:p-8 ${className}`}>
    {children}
  </div>
)

const FEATURE_ROWS = [
  { label: 'Route & eligibility check', tiers: [true, true, true] },
  { label: 'Document checklist & review', tiers: [true, true, true] },
  { label: 'MOCCAE permit guidance', tiers: [true, true, true] },
  { label: 'WhatsApp during business hours', tiers: [true, true, true] },
  { label: 'Partner recommendations', tiers: [true, true, true] },
  { label: 'Timeline tracking', tiers: [true, true, true] },
  { label: 'Booking coordination', tiers: [false, true, true] },
  { label: 'Travel-day support', tiers: [false, true, true] },
  { label: 'Post-arrival check-in', tiers: [false, true, true] },
  { label: 'Document submission handling', tiers: [false, true, true] },
  { label: 'Dedicated relocation manager', tiers: [false, false, true] },
  { label: 'Emergency contingency planning', tiers: [false, false, true] },
  { label: 'Boarding & nanny arrangements', tiers: [false, false, true] },
]

const tiers = [
  {
    name: 'PawPilot',
    subtitle: 'Essential',
    description: 'Guidance and document checks for owners who will book flights and vets themselves. Same regulatory sequence — you hold the bookings.',
    icon: Plane,
    iconBg: 'bg-[#4F5BD5]',
    highlights: ['Route & eligibility check', 'Document checklist & review', 'MOCCAE permit guidance', 'WhatsApp during business hours', 'Partner recommendations'],
  },
  {
    name: 'PawPartner',
    subtitle: 'Premium',
    description: 'We coordinate bookings, travel-day updates and the handover so you are not juggling airline, clinic and cargo desk yourself.',
    icon: Star,
    iconBg: 'bg-[#4F5BD5]',
    popular: true,
    highlights: ['Everything in PawPilot', 'Booking coordination', 'Travel-day support & updates', 'Post-arrival check-in', 'Document submission handling'],
  },
  {
    name: 'PawVIP',
    subtitle: 'Coordination',
    description: 'A named coordinator holds the complex file — multi-pet, tight months, or owners who want every handoff named.',
    icon: Heart,
    iconBg: 'bg-[#C89F5A]',
    highlights: ['Everything in PawPartner', 'Dedicated relocation manager', 'Emergency contingency planning', 'Boarding & nanny arrangements', 'Home-to-home logistics'],
  },
]

const addOns = [
  { icon: Shield, name: 'Travel insurance coordination', desc: 'We help you ask the right coverage questions. We do not sell a numbered policy from this page.' },
  { icon: Home, name: 'Boarding contingency', desc: 'If a document or flight slips, we arrange temporary boarding with a vetted partner — quoted when needed.' },
  { icon: PawPrint, name: 'Pet nanny / escort', desc: 'A trained escort can accompany some journeys. Availability is confirmed per route, not assumed.' },
  { icon: Stethoscope, name: 'Pre-travel health package', desc: 'Clinic exam, health certificate and parasite timing arranged with partner vets.' },
  { icon: MapPin, name: 'Door-to-door ground', desc: 'Collection and delivery, including the pet taxi / ground page when the job never leaves the road.' },
  { icon: FileCheck, name: 'Expedited document handling', desc: 'We prioritise the file and the portal steps. Government clocks still belong to the portal, not to us.' },
]

const SERVICES_FAQS = [
  {
    q: 'What is the difference between PawPilot, PawPartner and PawVIP?',
    a: 'PawPilot is document guidance. PawPartner adds booking and travel-day coordination. PawVIP adds a dedicated manager and contingency planning. The MOCCAE and airline steps do not change — only who holds each task.',
  },
  {
    q: 'Which tier includes booking coordination?',
    a: 'PawPartner and PawVIP. PawPilot owners book the airline and clinic themselves after we have checked the file.',
  },
  {
    q: 'Do the tiers change the regulatory steps?',
    a: 'No. A 30-day import permit is still 30 days. A titer sample, when required, is still taken within 90 days before travel. Tiers change labour, not the law.',
  },
  {
    q: 'Can I start on Essential and upgrade later?',
    a: 'Yes. If cargo booking or travel-day starts to overwhelm the file, we move you to a coordination tier and quote the difference on WhatsApp before we take the extra work.',
  },
  {
    q: 'Are add-ons required for every move?',
    a: 'No. Crate, boarding or an escort are added when the route or the animal needs them. We will not attach an add-on to inflate a quote.',
  },
  {
    q: 'How do I pick a service page after choosing a tier?',
    a: 'Tier is how much help you want. The service URL is the job: door-to-door, inbound only, outbound only, or pet taxi. Open the matching /service/ page from the list on this hub, or start from the homepage overview.',
  },
  {
    q: 'Do you publish package prices on this page?',
    a: 'No. Coordination fees are quoted on WhatsApp after we know the pet and the corridor. We do not invent AED package tables here. Government portal fees are confirmed on the official site.',
  },
  {
    q: 'What happens after I message about a tier?',
    a: 'We confirm the route, recommend a tier, and send a quote range. You can also write from Contact. Nothing is booked until you accept the scope in the thread.',
  },
]

export default function ServicesPage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Services', item: `${BASE_URL}/services/` },
    ],
  }

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Dubai Pet Relocation Services',
    provider: { '@type': 'Organization', name: 'Dubai Pet Relocation', url: BASE_URL },
    areaServed: { '@type': 'City', name: 'Dubai' },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Pet Relocation Service Tiers',
      itemListElement: tiers.map((tier) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: `${tier.name} — ${tier.subtitle}`,
          description: tier.description,
        },
      })),
    },
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: SERVICES_FAQS.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }

  return (
    <div>
      <SEOHead
        meta={{
          title: 'Dubai Pet Relocation Services — From Essential to Coordination',
          description:
            'Compare Dubai pet relocation service tiers — from document guidance to full coordination. Choose a package, then open the service page for your move.',
          keywords: 'pet relocation services Dubai, pet coordination Dubai, PawPilot, PawPartner, PawVIP',
          canonical: `${BASE_URL}/services/`,
          ogType: 'website',
        }}
        schemas={[serviceSchema, breadcrumbSchema, faqSchema]}
      />

      <Breadcrumb items={[{ label: 'Services' }]} />

      <Hero
        image="/images/services-hero.jpg"
        imageAlt="A happy dog and cat beside a travel crate in a welcoming Dubai pet relocation office"
        eyebrow="Our Services"
        title="Dubai Pet Relocation Services — From Essential to Coordination"
        subtitle="Choose how much of the file we hold, then open the service page for inbound, outbound, door-to-door or pet taxi. Quotes on WhatsApp — no invented package prices."
        updated="Updated September 2026"
        primaryLabel="Get a Relocation Quote"
        secondary={{ label: 'Back to homepage overview', to: '/' }}
      />

      <section className="section-padding bg-white">
        <div className="mx-auto max-w-[900px] px-5 sm:px-6 lg:px-8">
          <p className="text-body mb-4">
            This hub compares tiers. It does not own “pet relocation Dubai” — that money head is{' '}
            <Link to="/service/pet-relocation-dubai/" className="font-semibold text-[#4F5BD5] hover:underline">
              our Dubai pet relocation service
            </Link>
            . Inbound arrivals use{' '}
            <Link to="/service/pet-relocation-to-dubai/" className="font-semibold text-[#4F5BD5] hover:underline">
              pet relocation to Dubai, step by step
            </Link>
            . Departures use{' '}
            <Link to="/service/pet-relocation-from-dubai/" className="font-semibold text-[#4F5BD5] hover:underline">
              pet relocation from Dubai
            </Link>
            . Ground transfers use{' '}
            <Link to="/service/pet-transport-dubai/" className="font-semibold text-[#4F5BD5] hover:underline">
              local pet transport and pet taxi service
            </Link>
            .
          </p>
          <p className="text-body">
            Start from the{' '}
            <Link to="/" className="font-semibold text-[#4F5BD5] hover:underline">
              homepage overview
            </Link>{' '}
            if you are still choosing a direction, or from the{' '}
            <Link to="/routes/" className="font-semibold text-[#4F5BD5] hover:underline">
              routes hub
            </Link>{' '}
            if you already know the country.
          </p>
        </div>
      </section>

      <section className="section-padding bg-[#F5F6FD]">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-6 lg:px-8">
          <ContentImage
            src="/assets/w1-w3/pet-relocation-service-tiers-comparison-dubai.png"
            alt="Comparison of PawPilot, PawPartner and PawVIP pet relocation service tiers in Dubai"
            caption="Three tiers, one process. No prices in the diagram — they are quoted, not printed."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {tiers.map((tier) => (
              <Card key={tier.name} className={`relative flex flex-col ${tier.popular ? 'ring-2 ring-[#4F5BD5]' : ''}`}>
                {tier.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#4F5BD5] px-4 py-1 text-xs font-bold tracking-wider text-white uppercase">
                    Most requested
                  </span>
                )}
                <div className={`mb-5 flex h-12 w-12 items-center justify-center rounded-[14px] ${tier.iconBg}`}>
                  <tier.icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="mb-1 text-xl font-bold text-[#2A2A2A]">{tier.name}</h3>
                <p className="mb-2 text-sm font-semibold text-[#4F5BD5]">{tier.subtitle}</p>
                <p className="mb-2 text-sm font-semibold text-[#2A2A2A]">Quote on WhatsApp</p>
                <p className="mb-6 flex-1 text-sm leading-relaxed text-[#5A5A5A]">{tier.description}</p>
                <ul className="mb-6 space-y-2.5">
                  {tier.highlights.map((label) => (
                    <li key={label} className="flex items-start gap-2.5 text-sm text-[#5A5A5A]">
                      <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-[#4F5BD5]" />
                      <span>{label}</span>
                    </li>
                  ))}
                </ul>
                <WhatsAppCta
                  text={`Ask about ${tier.name}`}
                  message={`Hi Dubai Pet Relocation! I am interested in the ${tier.name} tier (${tier.subtitle}) for my pet relocation. Can you quote the scope?`}
                  fullWidth
                  className="!py-3"
                />
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <h2 className="mb-3 text-[24px] font-bold text-[#2A2A2A] sm:text-[30px] lg:text-[36px]">Full comparison</h2>
            <p className="mx-auto max-w-2xl text-base leading-relaxed text-[#5A5A5A]">
              Same sequence on every tier. The ticks show who holds the task.
            </p>
          </div>
          <div className="-mx-5 overflow-x-auto px-5 sm:mx-0 sm:px-0">
            <table className="w-full min-w-[600px] text-sm">
              <thead>
                <tr className="border-b border-[#E2E5F6]">
                  <th className="px-4 py-4 text-left font-semibold text-[#2A2A2A]">Feature</th>
                  {tiers.map((tier) => (
                    <th key={tier.name} className="px-4 py-4 text-center font-semibold text-[#2A2A2A]">
                      {tier.name}
                      <span className="block text-xs font-normal text-[#8A8A8A]">{tier.subtitle}</span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {FEATURE_ROWS.map((row, idx) => (
                  <tr key={row.label} className={idx % 2 === 0 ? 'bg-[#F0F2FB]' : ''}>
                    <td className="px-4 py-3 text-[#5A5A5A]">{row.label}</td>
                    {row.tiers.map((on, i) => (
                      <td key={tiers[i].name} className="px-4 py-3 text-center">
                        {on ? <CheckCircle className="mx-auto h-5 w-5 text-[#4F5BD5]" /> : <X className="mx-auto h-5 w-5 text-[#C8C8C8]" />}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#F5F6FD]">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <h2 className="mb-3 text-[24px] font-bold text-[#2A2A2A] sm:text-[30px]">Add-on services</h2>
            <p className="mx-auto max-w-2xl text-base leading-relaxed text-[#5A5A5A]">
              Optional pieces. Quoted when the route needs them — not bundled as fake discounts.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {addOns.map((addon) => (
              <Card key={addon.name}>
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-[14px] bg-[#E9ECFB]">
                  <addon.icon className="h-5 w-5 text-[#4F5BD5]" />
                </div>
                <h3 className="mb-2 text-lg font-bold text-[#2A2A2A]">{addon.name}</h3>
                <p className="text-sm leading-relaxed text-[#5A5A5A]">{addon.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="mx-auto max-w-[1100px] px-5 sm:px-6 lg:px-8">
          <h2 className="mb-3 text-[24px] font-bold text-[#2A2A2A] sm:text-[30px]">Open the service page for your move</h2>
          <p className="mb-6 max-w-3xl text-[#5A5A5A]">
            After you pick a tier, open the URL that owns the search. Children use /service/ singular. The homepage and this hub are the parents.
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            {SERVICE_LINKS.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="flex items-center justify-between rounded-2xl bg-[#F5F6FD] px-5 py-4 text-sm font-semibold text-[#2A2A2A] hover:bg-[#E9ECFB]"
              >
                {l.label} <ArrowRight className="h-4 w-4 text-[#4F5BD5]" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#F5F6FD]">
        <div className="mx-auto max-w-[820px] px-5 sm:px-6 lg:px-8">
          <h2 className="mb-6 text-center text-[24px] font-bold text-[#2A2A2A] sm:text-[30px]">Frequently asked questions</h2>
          <div className="space-y-3">
            {SERVICES_FAQS.map((f) => (
              <FAQItem key={f.q} question={f.q} answer={f.a} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#4F5BD5]">
        <div className="mx-auto max-w-[800px] px-5 text-center sm:px-6 lg:px-8">
          <h2 className="mb-4 text-[24px] font-bold text-white sm:text-[30px]">Not sure which tier fits?</h2>
          <p className="mb-8 text-base leading-relaxed text-white/80">
            Tell us the pet, the route and the month. We recommend a tier and quote the scope — no package price list, no 15-minute SLA.
          </p>
          <WhatsAppCta
            text="Get a Personalized Quote"
            message="Hi Dubai Pet Relocation! I am not sure which service tier is right for me. Can you help me choose based on my pet and route?"
          />
        </div>
      </section>
    </div>
  )
}
