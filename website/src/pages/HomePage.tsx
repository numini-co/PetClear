import { Link } from 'react-router-dom'
import {
  MessageCircle, FileCheck, Phone, Heart, ArrowRight,
  Plane, MapPin, Shield, PawPrint, BookOpen, Sun,
} from 'lucide-react'
import SEOHead from '../components/SEOHead.tsx'
import { getWhatsAppUrl, siteConfig, BASE_URL } from '../lib/seo.ts'
import { SERVICE_LINKS, GUIDE_LINKS } from '../data/nav.ts'
import { cardImageFor } from '../data/cardImages.ts'
import Hero from '../components/Hero.tsx'
import FAQItem from '../components/FAQItem.tsx'
import ContentImage from '../components/ContentImage.tsx'
import LastVerified from '../components/LastVerified.tsx'
import LinkedText from '../components/LinkedText.tsx'
import { stripInternalMarkdownLinks } from '../lib/linkedText.ts'
import { TOP_COMMUNITY_LINKS } from '../data/areas/dubai/topCommunities.ts'
import { CTA_ELIGIBILITY_MOVE, CTA_SUPPORT, GUIDE_SOFT_GATE, WA_ELIGIBILITY_DEFAULT } from '../lib/conversionCopy.ts'
import { openingHoursSpecification } from '../lib/openingHours.ts'

const defaultMsg = WA_ELIGIBILITY_DEFAULT

/** Homepage-only. White on #0B6B3A is 6.61:1. Shared Hero/header styles stay unchanged. */
const HOME_PRIMARY_WA =
  'inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#0B6B3A] px-6 py-3.5 text-sm font-semibold text-white shadow-lg ring-1 ring-black/10 transition hover:bg-[#095A31] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:w-auto'

const HOME_PAID_INCLUDES = [
  'Breed and route eligibility check before anything is booked',
  'MOCCAE import permit timed so the 90-day window from issuance covers the flight, or the export certificate sequenced for the destination',
  'Airline or cargo booking with the IATA crate measured on your pet',
  'DXB or DWC arrival release and home delivery coordinated with vetted partners',
  'One coordinator on WhatsApp during published hours',
] as const

const HOME_CLOSING_PAID = [
  'Eligibility check before any booking',
  'Permit or export certificate timed to the flight',
  'Crate, cargo and home handover held on one file',
] as const

const WhatsAppCta = ({
  text,
  message = defaultMsg,
  className = '',
}: {
  text: string
  message?: string
  className?: string
}) => (
  <a
    href={getWhatsAppUrl(message)}
    target="_blank"
    rel="noopener noreferrer"
    className={`inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-2xl bg-[#0B6B3A] px-7 py-4 text-sm font-semibold text-white shadow-sm transition-all hover:bg-[#095A31] sm:w-auto ${className}`}
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

const ROUTES = [
  { label: 'UK to Dubai', to: '/routes/uk-to-dubai/' },
  { label: 'USA to Dubai', to: '/routes/usa-to-dubai/' },
  { label: 'India to Dubai', to: '/routes/india-to-dubai/' },
  { label: 'Dubai to UK', to: '/routes/dubai-to-uk/' },
  { label: 'Dubai to USA', to: '/routes/dubai-to-usa/' },
  { label: 'Australia to Dubai', to: '/routes/australia-to-dubai/' },
]

const HOME_FAQS = [
  {
    q: 'What does a pet relocation coordinator in Dubai actually do?',
    a: 'We sequence documents, MOCCAE permit timing, crate sizing, cargo booking and the last-mile handover, then stay on WhatsApp during business hours. We do not operate the airline or claim to own the vans. Physical handling is done by vetted partners.',
  },
  {
    q: 'Which page should I open: import, export, or a local journey?',
    a: 'A dog or cat arriving in Dubai starts on [pet import to Dubai](/service/pet-import-dubai/). A dog or cat leaving the UAE starts on [pet export from Dubai](/service/pet-export-dubai/). A journey that stays on the road starts on [local pet transport](/service/pet-transport-dubai/). Door-to-door coordination of documents, crate, flight and handover is [pet relocation in Dubai](/service/pet-relocation-dubai/).',
  },
  {
    q: 'Where should I start if I’m not sure whether I need full relocation or just local transport?',
    a: 'If the pet is crossing a border, open [pet relocation in Dubai](/service/pet-relocation-dubai/). If the pet only needs a van, a clinic run, or an airport collection, open [local pet transport](/service/pet-transport-dubai/). Compare who holds each task on [service tiers](/services/).',
  },
  {
    q: 'How long does it take to relocate a pet to Dubai?',
    a: 'It depends on the origin. A low-risk file with a microchip, valid vaccines and a health certificate can be planned in weeks, then the MOCCAE permit must still be valid on arrival: 90 days from issuance. A high-risk origin adds a rabies antibody test of at least 0.5 IU/ml. That certificate is valid for 365 days while the vaccine stays valid and continuous and no booster is given. It is not a 90-day wait after the blood draw.',
  },
  {
    q: 'Do I need a relocation company, or can I do it myself?',
    a: 'You can file the permit yourself. The [MOCCAE import permit guide](/guides/moccae-import-permit/) is the walkthrough, and the [import checklist](/guides/import-checklist/) is the tick-list. Use a coordinator when you want the document order, the cargo booking and the airport handover held as one file. Compare the scopes on [pet relocation services](/service/pet-relocation-dubai/).',
  },
  {
    q: 'Can my pet fly in the cabin to Dubai?',
    a: 'Emirates says ordinary pets are not in the cabin, and an itinerary that ends in Dubai travels as cargo. Other airlines are a separate check. Compare the modes on [pet flight options](/guides/pet-flight-options-dubai/).',
  },
  {
    q: 'Do pets need quarantine when arriving in Dubai?',
    a: 'There is no automatic quarantine when the inbound file is complete and consistent. Incomplete or mismatched documents can lead to delayed release or conditional holding at the owner’s expense. We review the file before you fly so that risk is visible early.',
  },
  {
    q: 'How long is a MOCCAE import permit valid?',
    a: 'A MOCCAE import permit is valid for 90 days from issuance, the pet must arrive inside that window, and current portal fees are confirmed on the official MOCCAE portal.',
  },
  {
    q: 'When is a rabies antibody test required?',
    a: 'Only when the origin is treated as high-risk on the current MOCCAE portal. The result must be at least 0.5 IU/ml. The certificate is valid for 365 days if the vaccine stays valid and continuous and no booster is given. Otherwise the test is repeated. That is not a 90-day wait after the blood draw. The 90-day clock is the import permit. The full conditions are on the [rabies titer test](/guides/rabies-titer-test-dubai/) guide.',
  },
  {
    q: 'Can I move both a dog and a cat on the same timeline?',
    a: 'Often yes, but crate, airline and apartment rules still differ by species. We plan one WhatsApp thread and two crate files. Species detail sits on the dog and cat service pages; the federal permit chain is shared.',
  },
  {
    q: 'What should I send on WhatsApp to start?',
    a: 'WhatsApp is for a quote about a managed relocation. Send pet type, breed, approximate weight, origin or destination, and a target month. We reply during published hours, say whether the move is inbound or outbound, and explain the next step before any paid work starts.',
  },
  {
    q: 'Do you operate the airline or the pet taxi yourselves?',
    a: 'No. We are a coordination service. International cargo and local pet taxi are different products on different URLs. We match you to the right page and the right partner, then keep the documents aligned.',
  },
]

const TOP_COMMUNITIES = TOP_COMMUNITY_LINKS

export default function HomePage() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.name,
    url: BASE_URL,
    logo: `${BASE_URL}/assets/logo.png`,
    description: siteConfig.description,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Dubai',
      addressRegion: 'Dubai',
      addressCountry: 'AE',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      availableLanguage: ['English', 'Arabic'],
      areaServed: 'AE',
      telephone: siteConfig.phoneE164,
    },
    openingHoursSpecification,
  }

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    url: BASE_URL,
    description: siteConfig.description,
  }

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: siteConfig.name,
    description: 'Pet relocation coordination service in Dubai',
    url: BASE_URL,
    telephone: siteConfig.phoneE164,
    email: siteConfig.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.region,
      addressCountry: siteConfig.address.country,
    },
    openingHoursSpecification,
    areaServed: { '@type': 'Country', name: 'United Arab Emirates' },
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL }],
  }

  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Dubai Pet Relocation Services',
    itemListElement: SERVICE_LINKS.map((s, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: s.label,
      url: `${BASE_URL}${s.to}`,
    })),
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: HOME_FAQS.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: stripInternalMarkdownLinks(f.a) },
    })),
  }

  return (
    <div>
      <SEOHead
        meta={{
          title: 'Pet Relocation Dubai | Door-to-Door Pet Moving UAE',
          description:
            'Pet relocation Dubai for dogs and cats: MOCCAE permit, IATA crate, flight and home handover held as one file. Check if we can move your pet.',
          canonical: `${BASE_URL}/`,
          ogType: 'website',
        }}
        schemas={[organizationSchema, websiteSchema, localBusinessSchema, breadcrumbSchema, itemListSchema, faqSchema]}
      />

      {/* 1. Hero — existing placeholder; original-photo hero remains blocked */}
      <Hero
        image="/images/hero-dog.jpg"
        imageAlt="Illustration of a golden retriever sitting beside a small hard-sided carrier in an airport terminal, with a luggage trolley and a hazy skyline through the windows. The carrier in the picture is not a measured travel crate for a dog of this size."
        eyebrow="Pet relocation coordination for Dubai and the UAE"
        title="Pet relocation Dubai: door-to-door, to and from the UAE"
        subtitle="Your move month is already fixed, and the dog or cat still needs a permit, a crate and a flight. We hold the MOCCAE file, the IATA crate, the cargo booking and the home handover as one coordinated move."
        primaryLabel={CTA_ELIGIBILITY_MOVE}
        primaryClassName={HOME_PRIMARY_WA}
        ctaSupport={CTA_SUPPORT}
        whatsappMessage={WA_ELIGIBILITY_DEFAULT}
        paidIncludes={[...HOME_PAID_INCLUDES]}
        secondary={{ label: 'Compare relocation services', to: '/services/' }}
        updated="Updated September 2026"
        showBuyerQualify
      />

      <section className="border-b border-[#E6E8F5] bg-[#F7F8FC]">
        <div className="mx-auto max-w-[760px] px-5 py-8 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#4F5BD5]">Quick answer</p>
          <p className="mt-3 text-[17px] leading-relaxed text-[#2A2A2A]">
            Pet relocation Dubai means a MOCCAE permit valid 90 days from issuance, a microchip before the rabies vaccine, an IATA crate, and a cargo booking. We coordinate the documents, the flight and the home handover. A low-risk origin can move in weeks. A high-risk origin adds a rabies antibody test of at least 0.5 IU/ml.
          </p>
        </div>
      </section>

      {/* 2. Trust bar — process chips only; no metrics, no trust-bar photo */}
      <section className="border-b border-[#E6E8F5] bg-white">
        <div className="mx-auto max-w-[1200px] px-5 py-8 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-6 text-center md:grid-cols-5">
            {[
              { value: 'Document', label: 'Review before you fly' },
              { value: 'MOCCAE', label: 'Permit guidance' },
              { value: 'WhatsApp', label: 'Updates during hours' },
              { value: 'IATA', label: 'Crate sizing help' },
              { value: 'Door-to-door', label: 'Partner delivery' },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl font-bold text-[#4F5BD5] lg:text-3xl">{stat.value}</p>
                <p className="mt-1 text-xs text-[#8A8A8A]">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Services grid — cards only to /service/* + /services/ */}
      <section className="section-padding bg-[#F5F6FD]">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-[#4F5BD5]">Choose your move</span>
            <h2 className="text-section mt-3 mb-4">Import, export, or a journey by road</h2>
            <p className="text-body-large mx-auto max-w-3xl">
              Start with the direction of the journey. The service page then says who prepares the documents, who handles the animal, and what a quote is based on.
            </p>
          </div>
          <div className="grid items-start gap-4 md:grid-cols-3">
            {[
              {
                title: 'Bringing a pet to Dubai',
                text: 'Documents, the import permit, arrival clearance and delivery to the building.',
                to: '/service/pet-import-dubai/',
                label: 'Pet import to Dubai',
              },
              {
                title: 'Leaving Dubai with a pet',
                text: 'The destination’s rules first, then the UAE export certificate and the handover at departure.',
                to: '/service/pet-export-dubai/',
                label: 'Pet export from Dubai',
              },
              {
                title: 'A journey that stays on the road',
                text: 'Airport collection, a clinic visit, or travel between emirates. No international paperwork.',
                to: '/service/pet-transport-dubai/',
                label: 'Local pet transport',
              },
            ].map((choice) => {
              const img = cardImageFor(choice.to)
              return (
                <Link
                  key={choice.to}
                  to={choice.to}
                  className="group w-full overflow-hidden rounded-[20px] bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                >
                  {img ? (
                    <img src={img.src} alt={img.alt} width={1200} height={900} loading="lazy" className="aspect-[4/3] w-full object-cover" />
                  ) : null}
                  <div className="px-5 py-4">
                    <span className="flex items-center justify-between gap-3 text-sm font-semibold text-[#2A2A2A] group-hover:text-[#4F5BD5]">
                      {choice.title} <ArrowRight className="h-4 w-4 shrink-0 text-[#4F5BD5]" />
                    </span>
                    <p className="mt-2 text-sm leading-relaxed text-[#5A5A5A]">{choice.text}</p>
                    <p className="mt-3 text-sm font-semibold text-[#4F5BD5]">{choice.label}</p>
                  </div>
                </Link>
              )
            })}
          </div>
          <p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-relaxed text-[#5A5A5A]">
            Door-to-door coordination of documents, the crate, the flight and the handover is{' '}
            <Link to="/service/pet-relocation-dubai/" className="font-semibold text-[#4F5BD5] hover:underline">
              pet relocation in Dubai
            </Link>
            . Dog and cat handling, the permit on its own, and charter options are on the services page.
          </p>
          <div className="mt-8 text-center">
            <Link
              to="/services/"
              className="inline-flex items-center gap-2 rounded-2xl border-2 border-[#4F5BD5] px-6 py-3.5 text-sm font-semibold text-[#4F5BD5] hover:bg-[#4F5BD5]/5"
            >
              Compare our service tiers <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 3b. Managed-move paths and WhatsApp */}
      <section className="border-y border-[#E6E8F5] bg-white">
        <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-6 px-5 py-10 sm:px-6 md:flex-row lg:px-8">
          <div className="max-w-xl text-center md:text-left">
            <p className="text-sm font-semibold uppercase tracking-wider text-[#4F5BD5]">When you want us to coordinate</p>
            <h2 className="mt-2 text-[22px] font-bold text-[#2A2A2A] sm:text-[26px]">
              Door-to-door relocation, import or export
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-[#5A5A5A]">
              Not sure which service? Compare door-to-door relocation, import and export first. When you are ready to book, WhatsApp ({siteConfig.phone}) for an eligibility check. MOCCAE portal fees are confirmed on the official site.
            </p>
            <p className="mt-2 text-xs leading-relaxed text-[#5A5A5A]">
              WhatsApp is for a quote. We explain the next step before any paid work starts.
            </p>
          </div>
          <div className="flex w-full max-w-md flex-col gap-3 md:max-w-none md:flex-row md:flex-wrap md:justify-end">
            <WhatsAppCta text={CTA_ELIGIBILITY_MOVE} message={WA_ELIGIBILITY_DEFAULT} />
            <Link
              to="/service/pet-relocation-dubai/"
              className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border-2 border-[#4F5BD5] px-5 py-3 text-sm font-semibold text-[#4F5BD5] hover:bg-[#4F5BD5]/5 sm:w-auto"
            >
              Pet relocation Dubai <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/service/pet-import-dubai/"
              className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border-2 border-[#4F5BD5] px-5 py-3 text-sm font-semibold text-[#4F5BD5] hover:bg-[#4F5BD5]/5 sm:w-auto"
            >
              Pet import to Dubai <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/service/pet-export-dubai/"
              className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border-2 border-[#4F5BD5] px-5 py-3 text-sm font-semibold text-[#4F5BD5] hover:bg-[#4F5BD5]/5 sm:w-auto"
            >
              Pet export from Dubai <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/prices/"
              className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border-2 border-[#4F5BD5] px-5 py-3 text-sm font-semibold text-[#4F5BD5] hover:bg-[#4F5BD5]/5 sm:w-auto"
            >
              Prices and packages <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Routes strip */}
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-6 lg:px-8">
          <div className="mb-8 grid items-center gap-8 lg:grid-cols-2">
            <div>
              <span className="text-sm font-semibold uppercase tracking-wider text-[#4F5BD5]">Popular Relocation Routes</span>
              <h2 className="text-section mt-3 mb-4">Routes into Dubai and routes leaving Dubai</h2>
              <p className="text-body mb-4">
                Arrivals from the UK, the USA and India do not share one paperwork list. A UK file is usually vaccinations, a health certificate and the MOCCAE import permit, valid for 90 days from issuance. A US file adds endorsement steps that have to match the cargo date. India and other origins that need a rabies titer add a result of at least 0.5 IU/ml and a certificate valid for 365 days if the vaccine stays valid and continuous and no booster is given.
              </p>
              <p className="text-body mb-4">
                Leaving Dubai is not the inbound list in reverse. The destination's rules set the clock. The UAE export certificate is only useful once those destination treatments and waiting periods are ready. The routes hub holds the full list in both directions. The cards below are the routes owners ask about first.
              </p>
              <p className="text-body">
                Moving from a country not listed here? Ask for an eligibility check for that route when you are ready to book.
              </p>
            </div>
            <ContentImage
              src="/assets/w1-w3/routes-strip-beagle-crate-doorway-dubai-skyline.jpg"
              alt="Beagle in a travel crate at a doorway with a Dubai skyline beyond"
              caption="UK, USA, India, Australia and more. Each route has its own rules."
            />
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {ROUTES.map((r) => (
              <Link
                key={r.to}
                to={r.to}
                className="flex items-center justify-between rounded-2xl bg-[#F5F6FD] px-5 py-4 text-sm font-semibold text-[#2A2A2A] hover:bg-[#E9ECFB]"
              >
                {r.label} <ArrowRight className="h-4 w-4 text-[#4F5BD5]" />
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link to="/routes/" className="inline-flex items-center gap-2 text-sm font-semibold text-[#4F5BD5] hover:underline">
              Open the routes hub <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. How it works — 3 steps max */}
      <section className="section-padding bg-[#F5F6FD]">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-[#4F5BD5]">How Dubai Pet Relocation Works</span>
            <h2 className="text-section mt-3 mb-4">From your pet's details to an agreed plan</h2>
            <p className="text-body-large mx-auto max-w-3xl">
              These three steps are the start. Share the travel details, review the requirements and the proposed service, then prepare with the support you agree. The process page sets out the longer sequence, including partner roles and travel day.
            </p>
          </div>
          <ContentImage
            src="/assets/w1-w3/how-pet-relocation-works-7-step-process-dubai.webp"
            alt="Diagram of the 7-step Dubai pet relocation process from eligibility check to home reunion"
            width={1100}
            height={733}
            caption="From the first message through to the handover."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                step: '01',
                icon: Phone,
                title: "Share your pet's travel details",
                body: 'Send your departure city, destination, pet details and preferred travel date. We use those details to see whether the move is inbound, outbound or local, and which service applies.',
              },
              {
                step: '02',
                icon: FileCheck,
                title: 'Review the requirements and proposed service',
                body: 'We review microchip, vaccinations, crate sizing and the permit window with you. A MOCCAE import permit is valid for 90 days from issuance. When a titer is required, the blood sample uses a result of at least 0.5 IU/ml and a certificate valid for 365 days if the vaccine stays valid and continuous and no booster is given.',
              },
              {
                step: '03',
                icon: Heart,
                title: 'Prepare for the journey with the agreed support',
                body: 'Vetted veterinary and transport partners handle the animal. We coordinate cargo or pet taxi and update you on WhatsApp during published hours.',
              },
            ].map((s) => (
              <Card key={s.step} className="relative">
                <span className="absolute top-7 right-7 text-[64px] font-bold leading-none text-[#4F5BD5]/[0.04]">{s.step}</span>
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-[14px] bg-[#E9ECFB]">
                  <s.icon className="h-5 w-5 text-[#4F5BD5]" />
                </div>
                <h3 className="mb-3 text-lg font-bold text-[#2A2A2A]">{s.title}</h3>
                <p className="text-body">{s.body}</p>
              </Card>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              to="/how-it-works/"
              className="inline-flex items-center gap-2 rounded-2xl border-2 border-[#4F5BD5] px-6 py-3.5 text-sm font-semibold text-[#4F5BD5] hover:bg-[#4F5BD5]/5"
            >
              See the full process <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Cost drivers — qualitative only */}
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-[900px] px-5 sm:px-6 lg:px-8">
          <span className="text-sm font-semibold uppercase tracking-wider text-[#4F5BD5]">What Drives Pet Relocation Costs</span>
          <h2 className="text-section mt-3 mb-4">What a quote is built from</h2>
          <p className="text-body mb-4">
            A relocation quote depends on the route, your pet's size, travel arrangements and how much coordination you hand over. Government steps, veterinary work, an IATA crate and live-animal cargo all sit in that proposal. Permit amounts and release fees are confirmed on the official portals.
          </p>
          <p className="text-body mb-4">
            What actually moves a quote: direction (inbound permit window versus outbound destination rules), pet size and crate, season (heat embargoes and snub-nosed limits), and whether you want document guidance only or travel-day held for you. A small cat on a short inbound hop is a different job from a large dog leaving for a quarantine destination. Two pets can share a coordinator thread and still need two crates and two portal filings.
          </p>
          <p className="text-body mb-4">
            Local pet taxi is a separate ground product. Typical market ranges for short city runs, DXB, AUH and Dubai–Abu Dhabi sit on the transport page, labelled as market bands and dated, not as Dubai Pet Relocation selling prices. A van to the cargo desk is not an international ticket, and we will not let a taxi quote pretend to be a relocation quote.
          </p>
          <p className="text-body mb-6">
            Read the cost guide for the types of cost. When you know the route, WhatsApp for a quote scoped to your pet. Bring species, breed, weight, origin or destination, and a month.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/guides/pet-relocation-cost-dubai/" className="inline-flex items-center gap-2 text-sm font-semibold text-[#4F5BD5] hover:underline">
              Open the cost guide <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/prices/" className="inline-flex items-center gap-2 text-sm font-semibold text-[#3A45B0] hover:underline">
              Open quoted packages <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 7. UAE import essentials */}
      <section className="section-padding bg-[#F5F6FD]">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-6 lg:px-8">
          <div className="mb-8 grid items-start gap-8 lg:grid-cols-2">
            <div>
              <span className="text-sm font-semibold uppercase tracking-wider text-[#4F5BD5]">UAE Pet Import Essentials</span>
              <h2 className="text-section mt-3 mb-4">Import facts owners mix up most often</h2>
              <p className="text-body mb-4">
                Full checklists live on the guides. These are the facts owners mix up most often, with a link to the longer page. Last-verified stamps sit next to regulatory lines.
              </p>
              <p className="text-body mb-4">
                Two timing errors cause most inbound delays. The first is treating the import permit as if it lasted 30 days; official MOCCAE wording is 90 days from issuance, and the pet must arrive inside that window. The second is treating a titer as a 90-day wait after the blood draw. When a titer is required, the sample uses a result of at least 0.5 IU/ml and a certificate valid for 365 days if the vaccine stays valid and continuous and no booster is given. The permit guide and the titre guide set out each step.
              </p>
              <LastVerified />
            </div>
            <ContentImage
              src="/assets/w1-w3/iata-crate-hardware-detail-compliance-dubai.jpg"
              alt="Close-up of IATA-compliant pet crate hardware with ventilation grille and secure metal door"
              caption="Crates built to IATA Live Animals Regulations: the standard cargo staff inspect."
            />
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Shield,
                title: '90-day import permit',
                body: 'A MOCCAE import permit is valid for 90 days from issuance. Arrive inside that window. Confirm the current portal fee when you apply.',
                to: '/guides/moccae-import-permit/',
                label: 'MOCCAE permit guide',
              },
              {
                icon: FileCheck,
                title: 'Titer timing',
                body: 'When a titer is required, use a result of at least 0.5 IU/ml and a certificate valid for 365 days if the vaccine stays valid and continuous and no booster is given. Result at least 0.5 IU/ml. Not a 90-day wait after the test.',
                to: '/guides/rabies-titer-test-dubai/',
                label: 'Titer guide',
              },
              {
                icon: PawPrint,
                title: 'Banned and restricted breeds',
                body: 'Some dog types cannot enter; others face residency limits inside Dubai. We check eligibility before you commit to cargo.',
                to: '/guides/banned-dog-breeds-dubai/',
                label: 'Breed rules',
              },
              {
                icon: Plane,
                title: 'IATA crate',
                body: 'The animal must stand, turn and lie down. Hardware: the door grid, bolts and water bowl. That is what acceptance staff actually look at.',
                to: '/guides/iata-pet-crate-requirements/',
                label: 'Crate rules',
              },
              {
                icon: Sun,
                title: 'Summer travel',
                body: 'Heat embargoes and snub-nosed restrictions shrink airline choice in the hot months. Plan the month before you plan the ticket.',
                to: '/guides/pet-travel-summer-dubai/',
                label: 'Summer guide',
              },
              {
                icon: BookOpen,
                title: 'Full import checklist',
                body: 'Microchip, vaccinations, health certificate and permit, collected on the import guide.',
                to: '/guides/uae-pet-import-requirements/',
                label: 'Import requirements',
              },
            ].map((c) => (
              <Card key={c.title}>
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-[14px] bg-[#E9ECFB]">
                  <c.icon className="h-5 w-5 text-[#4F5BD5]" />
                </div>
                <h3 className="mb-2 text-lg font-bold text-[#2A2A2A]">{c.title}</h3>
                <p className="text-body mb-4">{c.body}</p>
                <Link to={c.to} className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#4F5BD5] hover:underline">
                  {c.label} <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Dubai areas + emirates */}
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-6 lg:px-8">
          <div className="mb-8 grid items-center gap-8 lg:grid-cols-2">
            <div>
              <span className="text-sm font-semibold uppercase tracking-wider text-[#4F5BD5]">Dubai Areas We Cover</span>
              <h2 className="text-section mt-3 mb-4">Where we collect and deliver in Dubai and the other emirates</h2>
              <p className="text-body mb-4">
                Collection and delivery have to fit the building. A Marina tower lobby, a JBR walk-up, a Palm gate and an Arabian Ranches villa driveway are four different handoffs. A crate that fits a Downtown service lift may not be the constraint in a villa community. Heat and driveway access often are. Open the Dubai hub for community notes, and the cities hub for Abu Dhabi and the wider UAE.
              </p>
              <p className="text-body mb-4">
                We coordinate collection and delivery across the communities below and the rest of the directory. DXB is the usual cargo door for marina and downtown moves. DWC is often the shorter road for south Dubai and villa areas. That is routing advice, not a promise that one airport suits every pet.
              </p>
              <p className="text-body">
                Other emirates follow the same federal MOCCAE rules. The arrival airport and the municipality steps change. Abu Dhabi has its own city guide. Sharjah and the northern emirates are coordinated when you send the community name.
              </p>
            </div>
            <ContentImage
              src="/assets/w1-w3/dubai-pet-relocation-community-coverage-map.webp"
              alt="Map of Dubai communities covered for pet relocation, from Dubai Marina to Mirdif and Dubai South"
              width={1100}
              height={733}
              caption="Dubai communities from Dubai Marina to Mirdif and Dubai South."
            />
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {TOP_COMMUNITIES.map((a) => (
              <Link
                key={a.slug}
                to={`/dubai/${a.slug}/`}
                className="flex items-center gap-2 rounded-2xl bg-[#F5F6FD] px-4 py-3 text-sm font-semibold text-[#2A2A2A] hover:bg-[#E9ECFB]"
              >
                <MapPin className="h-4 w-4 shrink-0 text-[#4F5BD5]" />
                {a.areaName}
              </Link>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link to="/dubai/" className="inline-flex items-center gap-2 text-sm font-semibold text-[#4F5BD5] hover:underline">
              All Dubai communities <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/cities/" className="inline-flex items-center gap-2 text-sm font-semibold text-[#4F5BD5] hover:underline">
              UAE cities and emirates <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 9. Why pet owners work with us */}
      <section className="section-padding bg-[#F5F6FD]">
        <div className="mx-auto max-w-[900px] px-5 sm:px-6 lg:px-8">
          <span className="text-sm font-semibold uppercase tracking-wider text-[#4F5BD5]">How the work is split</span>
          <h2 className="text-section mt-3 mb-4">A coordinator, then the people who handle the animal</h2>
          <p className="text-body mb-4">
            A coordinator reads the file, names the next deadline, and stays on WhatsApp during published hours. Veterinary work, the crate, the airline and the van are done by the specialists booked for that move. We check the documents before they are submitted, and we measure the crate on the animal.
          </p>
          <p className="text-body mb-4">
            An arrival in Dubai is planned separately from a departure. A banned breed is checked before anyone talks about cargo. A nervous cat is not treated as a small dog in a smaller box. Heat, the crate, and the first days after landing are part of the plan.
          </p>
          <p className="text-body mb-6">
            Completed moves are published here only with the owner’s permission. Until a case is ready, the useful detail is the sequence on the service page. Send the pet, the route and the month when you want a quote.
          </p>
          <Link to="/about/" className="inline-flex items-center gap-2 text-sm font-semibold text-[#4F5BD5] hover:underline">
            About the coordination model <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* 10. Guides strip */}
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-[#4F5BD5]">Guides</span>
            <h2 className="text-section mt-3 mb-3">Guides for one rule at a time</h2>
            <p className="text-body-large mx-auto max-w-2xl">
              Start with the guide that answers the question in front of you. The guides hub holds the rest.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {GUIDE_LINKS.slice(0, 6).map((g) => {
              const img = cardImageFor(g.to)
              return (
                <Link
                  key={g.to}
                  to={g.to}
                  className="group overflow-hidden rounded-[20px] bg-[#F5F6FD] shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                >
                  {img ? (
                    <img src={img.src} alt={img.alt} width={1200} height={800} loading="lazy" className="aspect-[3/2] w-full object-cover" />
                  ) : null}
                  <span className="flex items-center justify-between gap-3 px-5 py-4 text-sm font-semibold text-[#2A2A2A] group-hover:text-[#4F5BD5]">
                    {g.label} <ArrowRight className="h-4 w-4 shrink-0 text-[#4F5BD5]" />
                  </span>
                </Link>
              )
            })}
          </div>
          <div className="mt-8 text-center">
            <Link to="/guides/" className="inline-flex items-center gap-2 text-sm font-semibold text-[#4F5BD5] hover:underline">
              All pet relocation guides <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 11. FAQ — 9 unique */}
      <section className="section-padding bg-[#F5F6FD]">
        <div className="mx-auto max-w-[820px] px-5 sm:px-6 lg:px-8">
          <h2 className="mb-6 text-center text-[24px] font-bold text-[#2A2A2A] sm:text-[30px] lg:text-[34px]">
            Frequently asked questions
          </h2>
          <div className="space-y-3">
            {HOME_FAQS.map((f) => (
              <FAQItem key={f.q} question={f.q} answer={<LinkedText text={f.a} />} />
            ))}
          </div>
          <p className="mt-8 text-center">
            <Link to="/faq/" className="inline-flex items-center gap-2 text-sm font-semibold text-[#4F5BD5] hover:underline">
              More questions on the FAQ hub <ArrowRight className="h-4 w-4" />
            </Link>
          </p>
        </div>
      </section>

      {/* 12. Final CTA — commercial services + WhatsApp eligibility */}
      <section className="section-padding bg-[#4F5BD5]">
        <div className="mx-auto max-w-[800px] px-5 text-center sm:px-6 lg:px-8">
          <h2 className="mb-4 text-[24px] font-bold text-white sm:text-[32px]">Ready to book a managed move?</h2>
          <p className="mb-3 text-white">
            Check if we can move your pet. Send the pet, the route and the month. We reply with whether the move is eligible and what a managed-move quote includes.
          </p>
          <p className="mb-4 text-sm leading-relaxed text-white/90">
            After you message us, we read the breed and the route, name the documents that come first, and say whether the month looks realistic.
          </p>
          <ul className="mx-auto mb-4 max-w-md list-disc space-y-1 pl-5 text-left text-sm leading-relaxed text-white">
            {HOME_CLOSING_PAID.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="mb-8 text-sm leading-relaxed text-white">{GUIDE_SOFT_GATE}</p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap">
            <WhatsAppCta text={CTA_ELIGIBILITY_MOVE} message={WA_ELIGIBILITY_DEFAULT} className="justify-center" />
            <Link
              to="/service/pet-relocation-dubai/"
              className="inline-flex w-full items-center justify-center gap-2 rounded-2xl px-7 py-3 text-sm font-semibold text-white ring-1 ring-white/50 hover:bg-white/10 sm:w-auto"
            >
              Pet relocation services
            </Link>
            <Link
              to="/service/pet-import-dubai/"
              className="inline-flex w-full items-center justify-center gap-2 rounded-2xl px-7 py-3 text-sm font-semibold text-white ring-1 ring-white/50 hover:bg-white/10 sm:w-auto"
            >
              pet import Dubai
            </Link>
            <Link
              to="/service/pet-export-dubai/"
              className="inline-flex w-full items-center justify-center gap-2 rounded-2xl px-7 py-3 text-sm font-semibold text-white ring-1 ring-white/50 hover:bg-white/10 sm:w-auto"
            >
              Pet export from Dubai
            </Link>
            <Link
              to="/prices/"
              className="inline-flex w-full items-center justify-center gap-2 rounded-2xl px-7 py-3 text-sm font-semibold text-white ring-1 ring-white/50 hover:bg-white/10 sm:w-auto"
            >
              Prices and packages
            </Link>
          </div>
          <div className="h-24 sm:hidden" aria-hidden="true" />
        </div>
      </section>
    </div>
  )
}
