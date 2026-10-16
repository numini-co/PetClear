import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, FileCheck, MessageCircle, Package, Plane, XCircle } from 'lucide-react'
import SEOHead from '../components/SEOHead.tsx'
import Hero from '../components/Hero.tsx'
import Breadcrumb from '../components/Breadcrumb.tsx'
import FAQItem from '../components/FAQItem.tsx'
import SnippetAnswer from '../components/SnippetAnswer.tsx'
import LinkedText from '../components/LinkedText.tsx'
import OfficialSources from '../components/OfficialSources.tsx'
import PaidIncludes from '../components/PaidIncludes.tsx'
import WhatsAppGate from '../components/WhatsAppGate.tsx'
import { stripInternalMarkdownLinks } from '../lib/linkedText.ts'
import { BASE_URL, getWhatsAppUrl, siteConfig } from '../lib/seo.ts'
import {
  GOV_FEE_CONFIRM,
  MOCCAE_FEE_FRAMING_NOTE,
  MOCCAE_PERMIT_FEE_FRAMING,
  MOCCAE_RELEASE_CAT_FRAMING,
  MOCCAE_RELEASE_DOG_FRAMING,
  PERMIT_VALIDITY,
  TITER_SAMPLE_RULE,
} from '../lib/regulatory.ts'
import { CTA_SCOPED_QUOTE, GUIDE_SOFT_GATE, STRONG_WA_CLASS, waEligibility } from '../lib/conversionCopy.ts'

const WA = waEligibility({ need: 'managed move' })

const snippetQuestion = 'How much does Dubai Pet Relocation charge?'
const snippetAnswer =
  'Coordination is quoted after we know the pet, the route and which tier you want: PawPilot, PawPartner or PawVIP. This page lists what each tier includes and leaves out. Government permit and release fees are confirmed on the official MOCCAE portal. Airline freight and clinic invoices are third-party. Email support@dubai-pet-relocation.ae or WhatsApp +971504782999 when you are ready to book.'

const FAQS = [
  {
    q: 'How much does a managed pet relocation through Dubai cost?',
    a: 'There is no single ticket. A move splits into government steps, veterinary work, freight, crate, airport handling and our coordination. We quote the coordination after eligibility. Confirm current MOCCAE amounts on the official portal. Cost types in more depth live on [the cost guide](/guides/pet-relocation-cost-dubai/).',
  },
  {
    q: 'How do you prepare a quote?',
    a: 'We quote after eligibility, once we know the pet, the route, the month and whether you want PawPilot, PawPartner or PawVIP. Government fees, airline freight and clinic invoices stay on their own invoices. Send pet type, breed, origin or destination, and month on WhatsApp.',
  },
  {
    q: 'What is the difference between PawPilot, PawPartner and PawVIP?',
    a: 'PawPilot (Essential) reviews the file and names the next deadline. You still book the clinic and the airline. PawPartner (Premium) adds booking coordination, travel-day updates and document submission. PawVIP (Coordination) adds a dedicated manager and contingency planning. The law does not change between tiers. Who holds each task does. Inbound clearance and door-to-door delivery are service pages, not extra price bands.',
  },
  {
    q: 'How do MOCCAE permit fees sit next to a coordination quote?',
    a: 'Those are government charges paid on the official portal, not a line we invent or bundle as a first-party AED figure. Confirm the live import-permit and arrival-release amounts when you apply. Fees may change. The walkthrough is on [the MOCCAE import permit guide](/guides/moccae-import-permit/).',
  },
  {
    q: 'What never sits inside a Dubai Pet Relocation package?',
    a: 'Portal fees, airline freight, clinic invoices, a crate you buy yourself unless we quote one, destination quarantine, and municipality registration after arrival. Those are third-party or government. We name them so a quote does not pretend to be an all-in ticket.',
  },
  {
    q: 'What is a quote for if the guides already explain the process?',
    a: 'The guides explain the process. WhatsApp is for a quote on a managed relocation. If you are preparing the file yourself, use the [import checklist](/guides/import-checklist/) and the [UAE import requirements](/guides/uae-pet-import-requirements/). A quote covers the coordination for your pet and route.',
  },
  {
    q: 'How long is the MOCCAE import permit valid when I budget a quote?',
    a: '90 days from issuance. The pet must arrive inside that window. That is a timing constraint on the quote, not a fee. Titer, when required, uses a result of at least 0.5 IU/ml and a certificate valid for 365 days if the vaccine stays valid and continuous and no booster is given, not a wait after the draw.',
  },
  {
    q: 'Where do I go after I pick a package?',
    a: 'Document plan and door-to-door sit on [pet relocation Dubai](/). Inbound clearance sits on [pet import to Dubai](/service/pet-import-dubai/). Outbound sits on [pet export from Dubai](/service/pet-export-dubai/). This page covers how we price the work, not the job pages.',
  },
]

const PACKAGES = [
  {
    name: 'PawPilot',
    alias: 'Essential',
    to: '/service/moccae-pet-permit/',
    linkLabel: 'Permit and file review',
    includes: [
      'Breed and route eligibility check before you commit to cargo',
      'Document list for the current UAE import or destination export requirements',
      'MOCCAE import-permit window: 90 days from issuance',
      'WhatsApp during published business hours',
    ],
    excludes: [
      'Airline or cargo booking',
      'Airport handoff or last-mile van',
      'Government portal fees and clinic invoices',
    ],
  },
  {
    name: 'PawPartner',
    alias: 'Premium',
    to: '/service/pet-relocation-dubai/',
    linkLabel: 'Door-to-door coordination',
    includes: [
      'Everything in PawPilot',
      'Booking coordination for the clinic, crate and cargo',
      'Travel-day support and WhatsApp updates during published hours',
      'Document submission handling and a post-arrival check-in',
    ],
    excludes: [
      'A dedicated manager and contingency planning (those sit in PawVIP)',
      'Government permit and release fees (confirm on the portal)',
      'Airline freight and clinic invoices',
    ],
  },
  {
    name: 'PawVIP',
    alias: 'Coordination',
    to: '/services/',
    linkLabel: 'Compare all three tiers',
    includes: [
      'Everything in PawPartner',
      'A dedicated relocation manager on the file',
      'Emergency contingency planning',
      'Boarding and nanny arrangements when the route needs them',
    ],
    excludes: [
      'We do not operate the airline or claim to own the vans',
      'Municipality registration after arrival (Aleef or local equivalent)',
      'Destination quarantine billed by a foreign authority',
    ],
  },
]

export default function PricesPage() {
  const url = `${BASE_URL}/prices/`
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Prices', item: url },
    ],
  }
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: stripInternalMarkdownLinks(f.a) },
    })),
  }
  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Pet relocation prices and quote inclusions',
    url,
    description:
      'Quoted Dubai pet relocation packages by scope. Government fees confirmed on the MOCCAE portal.',
    publisher: { '@type': 'Organization', name: siteConfig.name, url: BASE_URL },
  }

  return (
    <div>
      <SEOHead
        meta={{
          title: 'Pet Relocation Prices Dubai | 2026 Quote Guide',
          description:
            'What a Dubai pet relocation quote includes: permits, vet work, the crate, cargo and delivery. Government fees stay on the MOCCAE portal.',
          canonical: url,
          ogType: 'website',
        }}
        schemas={[webPageSchema, breadcrumbSchema, faqSchema]}
      />
      <Breadcrumb items={[{ label: 'Prices' }]} />

      <Hero
        image="/images/cost-hero.jpg"
        imageAlt="Pet owner reviewing a Dubai pet relocation quote with travel documents beside a crate"
        eyebrow="Quoted packages, not a government fee table"
        title="Pet relocation prices and quote inclusions"
        subtitle="Your quote depends on the route, the pet, the flight and the scope you choose. Review what each service includes, then send origin, destination, pet and dates."
        updated="Updated September 2026"
        primaryLabel="Get a scoped quote"
        primaryClassName={STRONG_WA_CLASS}
        whatsappMessage={WA}
        secondary={{ label: 'Cost types guide', to: '/guides/pet-relocation-cost-dubai/' }}
        showBuyerQualify
        gateLine={GUIDE_SOFT_GATE}
      />

      <section className="section-padding bg-white">
        <div className="mx-auto max-w-[900px] px-5 sm:px-6 lg:px-8">
          <SnippetAnswer question={snippetQuestion} answer={snippetAnswer} />
          <p className="mb-4 leading-relaxed text-[#5A5A5A]">
            Package scopes are listed here. The types of cost, without a coordination price, are explained on{' '}
            <Link to="/guides/pet-relocation-cost-dubai/" className="font-semibold text-[#3A45B0] hover:underline">
              pet relocation cost Dubai
            </Link>
            . Government fees are confirmed on the official portal.{' '}
            {GOV_FEE_CONFIRM} Confirm them on the{' '}
            <a
              href="https://www.moccae.gov.ae/en/services/export-import-services/import-permit-pets.aspx"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-[#3A45B0] hover:underline"
            >
              official MOCCAE pet import permit page
            </a>
            . The how-to lives on the{' '}
            <Link to="/guides/moccae-import-permit/" className="font-semibold text-[#3A45B0] hover:underline">
              MOCCAE import permit guide
            </Link>
            .
          </p>
          <p className="leading-relaxed text-[#5A5A5A]">
            {PERMIT_VALIDITY} {TITER_SAMPLE_RULE} The permit clock and the certificate conditions are separate. They do
            not become a price list.
          </p>
        </div>
      </section>

      <section className="section-padding bg-[#F5F6FD]">
        <div className="mx-auto max-w-[1100px] px-5 sm:px-6 lg:px-8">
          <h2 className="text-section mb-4">What drives the price</h2>
          <p className="text-body mb-6 max-w-3xl">
            A quote is a bundle, not a ticket. Direction matters first: inbound files run on a 90-day MOCCAE import
            permit; outbound files run destination-first and a UAE export health certificate. Pet size and crate volume
            move freight. Heat months and snub-nosed airline rules shrink the product list. How much of the sequence you
            hand over decides whether you buy a document plan or a held move.
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              {
                t: 'Route and direction',
                b: 'A UK file is a different job from an India titer file or a Dubai-to-Australia export. Each route keeps its own document list.',
              },
              {
                t: 'Crate and airline product',
                b: 'Manifest cargo into Dubai is the usual inbound product. Cabin is a separate airline rule, not a default. Freight follows volumetric weight, not our coordination fee.',
              },
              {
                t: 'Season and breed',
                b: 'Summer embargoes and restricted-breed housing rules can force a later month or a different aircraft. Eligibility comes before we quote cargo.',
              },
              {
                t: 'How much we hold',
                b: 'PawPilot leaves bookings with you. PawPartner coordinates booking and travel day. PawVIP adds a dedicated manager. Same laws. Different labour.',
              },
            ].map((card) => (
              <div key={card.t} className="rounded-[20px] bg-white p-6 shadow-sm ring-1 ring-[#3A45B0]/10">
                <h3 className="mb-2 text-lg font-bold text-[#2A2A2A]">{card.t}</h3>
                <p className="text-sm leading-relaxed text-[#5A5A5A]">{card.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="quote-inclusions" className="section-padding scroll-mt-24 bg-white">
        <div className="mx-auto max-w-[1100px] px-5 sm:px-6 lg:px-8">
          <h2 className="text-section mb-3">Service packages</h2>
          <p className="text-body mb-8 max-w-3xl">
            The names match the{' '}
            <Link to="/services/" className="font-semibold text-[#3A45B0] hover:underline">
              services hub
            </Link>
            : PawPilot, PawPartner and PawVIP. Each card shows what the tier includes, what it leaves out, and that the
            proposal is prepared on WhatsApp after eligibility. Government fee notes further down are labelled
            confirm-on-portal. They are not package prices.
          </p>
          <div className="grid gap-6 lg:grid-cols-3">
            {PACKAGES.map((pkg) => (
              <article
                key={pkg.name}
                className="flex flex-col rounded-[20px] bg-[#F5F6FD] p-6 ring-1 ring-[#3A45B0]/15"
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-[#3A45B0]">{pkg.alias}</p>
                <h3 className="mt-2 text-xl font-bold text-[#2A2A2A]">{pkg.name}</h3>
                <p className="mt-3 text-sm font-semibold text-[#2A2A2A]">
                  Quoted on WhatsApp after eligibility. The figure follows the pet, the route and this tier.
                </p>
                <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-[#8A8A8A]">Includes</p>
                <ul className="mt-2 space-y-2">
                  {pkg.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm leading-relaxed text-[#5A5A5A]">
                      <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-[#3A45B0]" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-[#8A8A8A]">Does not include</p>
                <ul className="mt-2 space-y-2">
                  {pkg.excludes.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm leading-relaxed text-[#5A5A5A]">
                      <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-[#C9453A]" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href={getWhatsAppUrl(WA, 'prices-package')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${STRONG_WA_CLASS} mt-6`}
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  {CTA_SCOPED_QUOTE}
                </a>
                <Link
                  to={pkg.to}
                  className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-[#3A45B0] hover:underline"
                >
                  {pkg.linkLabel} <ArrowRight className="h-4 w-4" />
                </Link>
              </article>
            ))}
          </div>
          <WhatsAppGate line={GUIDE_SOFT_GATE} className="mt-6 max-w-xl" />
        </div>
      </section>

      <section className="section-padding bg-[#F5F6FD]">
        <div className="mx-auto max-w-[900px] px-5 sm:px-6 lg:px-8">
          <h2 className="text-section mb-4">What is never included</h2>
          <p className="text-body mb-4">
            Third-party and government lines stay on their own invoices. We will not bury them inside a pretty package
            total. Confirm MOCCAE import-permit and arrival-release fees on the official portal. Confirm airline animal
            charges on the carrier. Confirm clinic work with the vet who signs the certificate.
          </p>
          <ul className="space-y-3">
            {[
              'MOCCAE import-permit and cargo-terminal release fees (portal / official; amounts change)',
              'Airline or cargo freight, including labelled Emirates animal-charge tiers on the airline site',
              'Veterinary invoices: microchip, vaccines, titer lab, health certificate, parasite treatment',
              'A crate you purchase yourself, unless we quote supply as a separate line',
              'Destination quarantine or foreign-entry charges on an outbound file',
              'Dubai Municipality / Aleef registration after the pet is already home',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-[#5A5A5A]">
                <XCircle className="mt-0.5 h-5 w-5 shrink-0 text-[#C9453A]" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6 rounded-[20px] bg-white p-5 ring-1 ring-[#3A45B0]/15">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#3A45B0]">
              Government fees only (MOCCAE / official portal)
            </p>
            <p className="mt-2 text-sm leading-relaxed text-[#5A5A5A]">{MOCCAE_FEE_FRAMING_NOTE}</p>
            <ul className="mt-3 space-y-2 text-sm text-[#5A5A5A]">
              <li>Import permit framing: {MOCCAE_PERMIT_FEE_FRAMING}. Confirm on the official portal.</li>
              <li>
                Arrival release framing: {MOCCAE_RELEASE_DOG_FRAMING} (dog) / {MOCCAE_RELEASE_CAT_FRAMING} (cat). Confirm
                on the official portal.
              </li>
            </ul>
            <p className="mt-3 text-sm leading-relaxed text-[#5A5A5A]">{GOV_FEE_CONFIRM}</p>
          </div>
          <p className="mt-6 text-sm leading-relaxed text-[#5A5A5A]">
            Airline animal charges stay on the carrier. Jet and shared-charter seats stay quote-only on their own service
            pages. Local pet taxi is a separate ground product, also quote-only for our coordination.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="mx-auto max-w-[900px] px-5 sm:px-6 lg:px-8">
          <h2 className="text-section mb-4">DIY versus paid coordination</h2>
          <p className="text-body mb-4">
            If you already have UAE Pass, a consistent document pack and time to absorb a portal resubmission, stay in
            the guides. The{' '}
            <Link to="/guides/import-checklist/" className="font-semibold text-[#3A45B0] hover:underline">
              import checklist
            </Link>{' '}
            and{' '}
            <Link to="/guides/uae-pet-import-requirements/" className="font-semibold text-[#3A45B0] hover:underline">
              UAE import requirements
            </Link>{' '}
            pages are written for that path. A quote covers the coordination for your pet and route.
          </p>
          <p className="text-body mb-6">
            Pay when a missed sequence would blow a cargo date, when you cannot complete UAE Pass yourself, or when you
            want one coordinator to hold permit timing, airline booking, crate rules and the airport handoff. That is
            when a coordinator is worth hiring.
          </p>
          <PaidIncludes />
        </div>
      </section>

      <section className="section-padding bg-[#F5F6FD]">
        <div className="mx-auto max-w-[820px] px-5 sm:px-6 lg:px-8">
          <h2 className="mb-6 text-center text-[24px] font-bold text-[#2A2A2A] sm:text-[30px]">
            Frequently asked questions
          </h2>
          <div className="space-y-3">
            {FAQS.map((f) => (
              <FAQItem key={f.q} question={f.q} answer={<LinkedText text={f.a} />} />
            ))}
          </div>
        </div>
      </section>

      <OfficialSources
        extra={[
          {
            label: 'MOCCAE — pet import permit (official)',
            href: 'https://www.moccae.gov.ae/en/services/export-import-services/import-permit-pets.aspx',
          },
        ]}
      />

      <section className="section-padding bg-[#4F5BD5]">
        <div className="mx-auto max-w-[800px] px-5 text-center sm:px-6 lg:px-8">
          <h2 className="mb-4 text-[24px] font-bold text-white sm:text-[32px]">Ready for a scoped quote?</h2>
          <p className="mb-4 text-white/90">
            WhatsApp pet type, breed, route and month if you want us to run the file. We explain the next step before any paid work starts.
            Government fees stay on the portal.
          </p>
          <PaidIncludes tone="dark" compact className="mx-auto mb-6 max-w-2xl text-left" />
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={getWhatsAppUrl(WA, 'prices')}
              target="_blank"
              rel="noopener noreferrer"
                  className={`${STRONG_WA_CLASS} px-7`}
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              {CTA_SCOPED_QUOTE}
            </a>
            <Link
              to="/service/pet-relocation-dubai/"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-white px-7 py-4 text-sm font-semibold text-[#3A45B0]"
            >
              <Package className="h-4 w-4" aria-hidden="true" />
              Door-to-door service
            </Link>
            <Link
              to="/service/pet-import-dubai/"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-white/10 px-7 py-4 text-sm font-semibold text-white ring-1 ring-white/30"
            >
              <Plane className="h-4 w-4" aria-hidden="true" />
              Managed import
            </Link>
            <Link
              to="/guides/moccae-import-permit/"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-white/10 px-7 py-4 text-sm font-semibold text-white ring-1 ring-white/30"
            >
              <FileCheck className="h-4 w-4" aria-hidden="true" />
              MOCCAE permit guide
            </Link>
          </div>
          <WhatsAppGate tone="dark" line={GUIDE_SOFT_GATE} className="mt-4 [&_p]:text-white" />
        </div>
      </section>
    </div>
  )
}
