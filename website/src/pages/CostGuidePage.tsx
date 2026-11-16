import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  MessageCircle,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  AlertTriangle,
  CheckCircle,
  Scale,
  Sun,
  Snowflake,
  Plane,
  Shield,
  FileCheck,
  Truck,
  Package,
  MapPin,
  PawPrint,
  Users,
} from 'lucide-react'
import SEOHead from '../components/SEOHead.tsx'
import Hero from '../components/Hero.tsx'
import SnippetAnswer from '../components/SnippetAnswer.tsx'
import LinkedText from '../components/LinkedText.tsx'
import { stripInternalMarkdownLinks } from '../lib/linkedText.ts'
import { getWhatsAppUrl, BASE_URL, siteConfig } from '../lib/seo.ts'
import { PERMIT_FEE_VERIFY, RELEASE_FEE_VERIFY } from '../lib/regulatory.ts'
import GuideDualPath from '../components/GuideDualPath.tsx'
import GuideFunnelCta from '../components/GuideFunnelCta.tsx'
import { CTA_MANAGED_QUOTE, GUIDE_SOFT_GATE, STRONG_WA_CLASS, waEligibility } from '../lib/conversionCopy.ts'
import WhatsAppGate from '../components/WhatsAppGate.tsx'

const costGuideMsg = waEligibility({ need: 'managed move' })

const PAGE_TITLE = 'Pet Relocation Cost Dubai | What Your Quote Includes'
const PAGE_DESCRIPTION =
  'Pet relocation cost in Dubai: crate size, route, season, cabin or hold, and documents. See what a managed move includes, then check if we can move your pet.'

const GOV_FEE_LINE =
  'MOCCAE government fees are confirmed on the official MOCCAE portal at the time of application. They are not part of our coordination price.'

const TITER_RULE =
  'Under MOCCAE Ministerial Resolution 109/2021, when a titre is required the result must be at least 0.5 IU/ml from an approved laboratory, and the sample is taken at least 21 days after the first or interrupted rabies vaccination, before export. Confirm on the MOCCAE portal.'

const COST_PAID = [
  'MOCCAE permit timing (import permit valid 90 days from issuance) and export certificate sequencing',
  'Airline and cargo or cabin booking against an accepted IATA crate',
  'Crate sizing check',
  'Vet appointment timing',
  'DXB or DWC handover and delivery',
] as const

const COST_FINE =
  'WhatsApp +971504782999. Import permit valid 90 days from issuance. Titre, when required: at least 0.5 IU/ml from an approved laboratory, sample taken at least 21 days after the first or interrupted rabies vaccination, before export. Confirm on the MOCCAE portal.'

const COST_DIY =
  'Not ready to book? Keep reading the cost tables. WhatsApp is for a managed-move quote.'

const FUNNEL_LINKS = [
  { to: '/service/pet-relocation-dubai/', label: 'Compare managed-move services', icon: 'package' as const },
  { to: '/prices/', label: 'How we quote', icon: 'file' as const },
]

const TEXT_LINK =
  'inline-flex items-center justify-center px-2 py-3.5 text-sm font-semibold text-[#4F5BD5] underline-offset-2 hover:underline'
const TEXT_LINK_DARK =
  'inline-flex items-center justify-center px-2 py-3.5 text-sm font-semibold text-white underline-offset-2 hover:underline'

const snippetQuestion = 'How much does pet relocation cost in Dubai?'
const snippetAnswer =
  'Pet relocation cost in Dubai is quoted for your pet after an eligibility check. Crate size, route, season, cabin or hold, and documents change the total. MOCCAE government fees are confirmed on the official portal and are not part of our coordination price. Email support@dubai-pet-relocation.ae or WhatsApp +971504782999.'

const COST_FAQS: { q: string; a: string }[] = [
  {
    q: 'How much does pet relocation cost in Dubai?',
    a: 'Pet relocation cost in Dubai is quoted for your pet after an eligibility check. The quote turns on crate size and volumetric weight, the route and airline, cabin or hold, the season, documents and whether a titre is needed, and door-to-door scope. MOCCAE government fees are confirmed on the official MOCCAE portal at the time of application. They are not part of our coordination price. Check if we can move your pet for a managed-move quote.',
  },
  {
    q: 'How much does it cost to import a pet into the UAE?',
    a: 'Importing a pet into the UAE is quoted after an eligibility check. There is no single published import tariff. The quote covers veterinary work, freight, the crate, airport handling and coordination. MOCCAE government fees are confirmed on the official MOCCAE portal. Rules are on [UAE pet import requirements](/guides/uae-pet-import-requirements/), and permit steps are on [the MOCCAE permit guide](/guides/moccae-import-permit/). The paid import is [managed pet import](/service/pet-import-dubai/).',
  },
  {
    q: 'How much does it cost to get a dog imported?',
    a: 'A dog import is quoted after an eligibility check, and it is often higher than a cat import because crate volume and cargo weight drive the airline charge. Larger breeds need larger IATA crates. MOCCAE government fees are confirmed on the official MOCCAE portal. Species depth is on [dog relocation to Dubai](/dog-relocation-to-dubai/). Check if we can move your pet for a managed-move quote.',
  },
  {
    q: 'How much does it cost to fly with a pet on an airline?',
    a: 'Airline animal charges are separate from government fees and from a relocation quote. Cabin, checked baggage and manifest cargo are priced by the carrier, the route and the pet plus carrier size. Confirm the live charge with the airline. Emirates notes are on the [Emirates pet cargo guide](/guides/emirates-pet-cargo/). Etihad cabin notes are on the [Etihad pet policy](/guides/etihad-pet-policy/). Then request a managed-move quote.',
  },
  {
    q: 'How much does it cost to relocate a pet from Dubai to India?',
    a: 'A move from Dubai to India is quoted for that pet and those dates after an eligibility check. It includes UAE export paperwork, freight, the crate, coordination and the Indian entry pathway, which is a different stack from importing into the UAE. Corridor detail is on [Dubai to India](/routes/dubai-to-india/). Outbound framing is on [pet relocation from Dubai](/service/pet-relocation-from-dubai/). WhatsApp +971504782999 for a managed-move quote.',
  },
  {
    q: 'Is the cost guide the same as booking a relocation service?',
    a: 'Reading the cost guide is not a booking. The tables explain what drives a quote. A managed move is paid coordination on [pet relocation Dubai](/service/pet-relocation-dubai/), inbound [pet import](/service/pet-import-dubai/) or outbound [pet export](/service/pet-export-dubai/). MOCCAE government fees are confirmed on the official MOCCAE portal. WhatsApp +971504782999 when you are ready to book.',
  },
  {
    q: 'Why is cargo so expensive compared to my own flight ticket?',
    a: 'Cargo costs more than an economy seat because the pet travels as manifest cargo in a pressurised, climate-controlled hold, not as passenger baggage. The airline charge covers crate space, climate control, ground handling at both airports and live-animal procedures. Those are airline fees, not a relocation quote. We book cargo or cabin only against a crate the airline accepts.',
  },
  {
    q: 'Can I get a cheaper quote from a general moving company?',
    a: 'A general mover can quote the flight, and that quote often stops at the flight. Ask whether it includes MOCCAE permit timing, an IATA crate, destination clearance and delivery after arrival. A managed move names those steps on the quote before you pay. Compare [managed-move services](/service/pet-relocation-dubai/), then check if we can move your pet.',
  },
  {
    q: 'What is the cheapest way to bring a pet to Dubai?',
    a: 'The lowest spend is usually an owner who already has the microchip, rabies vaccine, health certificate and import permit in order, and who files each step. The clinic, the airline and MOCCAE still invoice their own charges. A missed document or a rejected crate can force a new booking. PawPilot is document guidance, quoted after we know the pet and the route.',
  },
  {
    q: 'Do you offer payment plans?',
    a: 'Payment timing is written on the quote before you agree. We do not publish a deposit percentage, a minimum amount or a price-match promise. Send the pet, route and dates on WhatsApp +971504782999 for a managed-move quote.',
  },
]

const WhatsAppCta = ({
  text,
  message = costGuideMsg,
  fullWidth = false,
  className = '',
}: {
  text: string
  message?: string
  fullWidth?: boolean
  className?: string
}) => (
  <a
    href={getWhatsAppUrl(message)}
    target="_blank"
    rel="noopener noreferrer"
    className={`${STRONG_WA_CLASS} ${fullWidth ? 'w-full sm:w-auto' : ''} ${className}`}
  >
    <MessageCircle className="w-4 h-4" />
    {text}
  </a>
)

function QuoteLinks() {
  return (
    <p className="mt-4 text-sm text-[#5A5A5A]">
      <Link to="/service/pet-relocation-dubai/" className="font-semibold text-[#4F5BD5] hover:underline">
        Compare managed-move services
      </Link>
      {' and '}
      <Link to="/prices/" className="font-semibold text-[#4F5BD5] hover:underline">
        How we quote
      </Link>
      .
    </p>
  )
}

const Section = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <section className={`section-padding ${className}`}>
    <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">{children}</div>
  </section>
)

const Card = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <div className={`bg-white rounded-[20px] shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 p-6 lg:p-8 ${className}`}>
    {children}
  </div>
)

function FAQItem({ question, answer }: { question: string; answer: React.ReactNode }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="faq-item">
      <button onClick={() => setOpen(!open)} className="faq-question w-full text-left" aria-expanded={open}>
        <span>{question}</span>
        {open ? <ChevronUp className="w-5 h-5 text-[#4F5BD5] shrink-0" /> : <ChevronDown className="w-5 h-5 text-[#5A5A5A] shrink-0" />}
      </button>
      {open && <div className="faq-answer">{answer}</div>}
    </div>
  )
}

export default function CostGuidePage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: COST_FAQS.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: stripInternalMarkdownLinks(f.a) },
    })),
  }

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    image: `${BASE_URL}/assets/cost-guide-hero.jpg`,
    author: {
      '@type': 'Organization',
      name: 'Dubai Pet Relocation',
      url: BASE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Dubai Pet Relocation',
      logo: {
        '@type': 'ImageObject',
        url: `${BASE_URL}/assets/logo.png`,
      },
    },
    datePublished: '2026-06-25',
    dateModified: '2026-11-16',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${BASE_URL}/guides/pet-relocation-cost-dubai/`,
    },
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: `${BASE_URL}/`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Pet Relocation Cost Dubai',
        item: `${BASE_URL}/guides/pet-relocation-cost-dubai/`,
      },
    ],
  }

  return (
    <div>
      <SEOHead
        title={PAGE_TITLE}
        description={PAGE_DESCRIPTION}
        canonical={`${BASE_URL}/guides/pet-relocation-cost-dubai/`}
        ogType="article"
        jsonLd={[faqSchema, articleSchema, breadcrumbSchema]}
      />
      <Hero
        image="/images/cost-hero.jpg"
        imageAlt="Pet owner reviewing transparent Dubai pet relocation costs"
        eyebrow="Pet Relocation Guide"
        title="What affects the cost of pet relocation in Dubai"
        subtitle="Pet relocation Dubai cost depends on crate size, the route, the season, cabin or hold, and documents. A managed move is quoted after an eligibility check. MOCCAE government fees are confirmed on the official portal."
        updated="Updated November 2026"
        primaryLabel={CTA_MANAGED_QUOTE}
        primaryClassName={STRONG_WA_CLASS}
        whatsappMessage={costGuideMsg}
        secondary={{ label: 'Compare managed-move services', to: '/service/pet-relocation-dubai/' }}
        showBuyerQualify
        paidIncludes={[...COST_PAID]}
        gateLine={GUIDE_SOFT_GATE}
      />

      <Section className="bg-white">
        <SnippetAnswer question={snippetQuestion} answer={snippetAnswer} />
        <div className="mb-8">
          <GuideDualPath
            diyNote="Keep reading the cost types and tables if you are budgeting the move yourself."
            moneyTo="/service/pet-relocation-dubai/"
            moneyLabel="Compare managed-move services"
            moneyClassName="inline-flex items-center text-sm font-semibold text-[#4F5BD5] underline-offset-2 hover:underline"
            waMessage={costGuideMsg}
            waLabel={CTA_MANAGED_QUOTE}
            waClassName={STRONG_WA_CLASS}
            gateLine={GUIDE_SOFT_GATE}
            diyLine={COST_DIY}
          />
          <p className="mt-3 text-sm text-[#5A5A5A]">
            <Link to="/prices/" className="font-semibold text-[#4F5BD5] hover:underline">
              How we quote
            </Link>
          </p>
        </div>
        <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mb-4">
          What drives pet relocation cost in Dubai
        </h2>
        <p className="text-[#5A5A5A] max-w-3xl mb-8 leading-relaxed">
          Six cost types sit behind a move, not a single airline ticket. Government fees are paid to MOCCAE. Veterinary
          fees are paid to the clinic. Freight and the crate follow the animal&apos;s size. Handling is the airport side.
          Coordination is quoted after an eligibility check on{' '}
          <Link to="/" className="text-[#4F5BD5] font-medium hover:underline">
            pet relocation Dubai
          </Link>
          , inbound{' '}
          <Link to="/service/pet-import-dubai/" className="text-[#4F5BD5] font-medium hover:underline">
            pet import
          </Link>
          , or outbound{' '}
          <Link to="/service/pet-export-dubai/" className="text-[#4F5BD5] font-medium hover:underline">
            pet export
          </Link>
          . Pair the stack with the{' '}
          <Link to="/guides/import-checklist/" className="text-[#4F5BD5] font-medium hover:underline">
            pet import documents checklist
          </Link>
          {' '}before you budget the permit clock.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <div className="w-11 h-11 rounded-[14px] bg-[#E9ECFB] flex items-center justify-center mb-4">
              <Shield className="w-5 h-5 text-[#4F5BD5]" />
            </div>
            <h3 className="font-bold text-[#2A2A2A] mb-2">Government</h3>
            <p className="text-sm text-[#5A5A5A] leading-relaxed">
              MOCCAE import permit, valid 90 days from issuance, and arrival release. {GOV_FEE_LINE} Municipality
              registration is a separate post-arrival step.
            </p>
          </Card>
          <Card>
            <div className="w-11 h-11 rounded-[14px] bg-[#E9ECFB] flex items-center justify-center mb-4">
              <PawPrint className="w-5 h-5 text-[#4F5BD5]" />
            </div>
            <h3 className="font-bold text-[#2A2A2A] mb-2">Veterinary</h3>
            <p className="text-sm text-[#5A5A5A] leading-relaxed">
              ISO microchip, rabies and core vaccines, health certificate and parasite treatment. A titre is only for a
              high-risk origin. {TITER_RULE} Clinic prices vary by country.
            </p>
          </Card>
          <Card>
            <div className="w-11 h-11 rounded-[14px] bg-[#E9ECFB] flex items-center justify-center mb-4">
              <Plane className="w-5 h-5 text-[#4F5BD5]" />
            </div>
            <h3 className="font-bold text-[#2A2A2A] mb-2">Freight</h3>
            <p className="text-sm text-[#5A5A5A] leading-relaxed">
              Manifest cargo is quoted per route and volumetric weight. Emirates publishes its own live-animal charges;
              confirm them with the airline. They are airline fees, not a relocation quote.{' '}
              <Link to="/guides/emirates-pet-cargo/" className="text-[#4F5BD5] font-medium hover:underline">
                Emirates pet cargo guide
              </Link>
              .
            </p>
          </Card>
          <Card>
            <div className="w-11 h-11 rounded-[14px] bg-[#E9ECFB] flex items-center justify-center mb-4">
              <Package className="w-5 h-5 text-[#4F5BD5]" />
            </div>
            <h3 className="font-bold text-[#2A2A2A] mb-2">Crate</h3>
            <p className="text-sm text-[#5A5A5A] leading-relaxed">
              An IATA-compliant rigid crate sized so the animal can stand, turn and lie down. Wrong hardware is a common
              check-in reject. See the{' '}
              <Link to="/guides/iata-pet-crate-requirements/" className="text-[#4F5BD5] font-medium hover:underline">
                IATA crate guide
              </Link>
              .
            </p>
          </Card>
          <Card>
            <div className="w-11 h-11 rounded-[14px] bg-[#E9ECFB] flex items-center justify-center mb-4">
              <Truck className="w-5 h-5 text-[#4F5BD5]" />
            </div>
            <h3 className="font-bold text-[#2A2A2A] mb-2">Handling</h3>
            <p className="text-sm text-[#5A5A5A] leading-relaxed">
              Cargo-terminal acceptance, customs paperwork and last-mile handover at DXB or DWC. This is airport and
              ground work, not the airline animal charge.
            </p>
          </Card>
          <Card>
            <div className="w-11 h-11 rounded-[14px] bg-[#E9ECFB] flex items-center justify-center mb-4">
              <Users className="w-5 h-5 text-[#4F5BD5]" />
            </div>
            <h3 className="font-bold text-[#2A2A2A] mb-2">Coordination</h3>
            <p className="text-sm text-[#5A5A5A] leading-relaxed">
              The Dubai Pet Relocation package covers document checks, permit timing, booking and WhatsApp updates. It is
              quoted after an eligibility check, and it is separate from government fees and airline charges.
            </p>
          </Card>
        </div>
        <p className="text-sm text-[#5A5A5A] mt-8 leading-relaxed">
          Questions: {siteConfig.email} or WhatsApp +971504782999.
        </p>
      </Section>

      <GuideFunnelCta
        variant="mid"
        title="Ready for a managed-move quote?"
        subtitle="Eligibility comes first. A managed-move quote names the coordination for your pet, route and dates. Government fees stay on the official MOCCAE portal."
        eligibilityMessage={costGuideMsg}
        waLabel={CTA_MANAGED_QUOTE}
        waClassName={STRONG_WA_CLASS}
        links={FUNNEL_LINKS}
        linkClassName={TEXT_LINK}
        paidItems={COST_PAID}
        gateLine={GUIDE_SOFT_GATE}
        diyLine={COST_DIY}
        finePrint={COST_FINE}
      />

      <Section className="bg-white">
        <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mb-4">Why pet relocation costs vary so much</h2>
        <h3 className="text-lg font-bold text-[#2A2A2A] mb-6">Four factors that determine the quote</h3>
        <p className="text-[#5A5A5A] mb-10">No two pet moves cost the same. These are the reasons.</p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <div className="w-11 h-11 rounded-[14px] bg-[#E9ECFB] flex items-center justify-center mb-4">
              <Scale className="w-5 h-5 text-[#4F5BD5]" />
            </div>
            <h4 className="font-bold text-[#2A2A2A] mb-2">1. Your pet&apos;s size</h4>
            <p className="text-sm text-[#5A5A5A] leading-relaxed">
              Cargo fees follow the crate&apos;s <strong>volumetric weight</strong>, not only how much your pet weighs. A large crate costs more to fly than a small one, and the crate itself is a separate line on the quote.
            </p>
          </Card>
          <Card>
            <div className="w-11 h-11 rounded-[14px] bg-[#E9ECFB] flex items-center justify-center mb-4">
              <MapPin className="w-5 h-5 text-[#4F5BD5]" />
            </div>
            <h4 className="font-bold text-[#2A2A2A] mb-2">2. Your origin country</h4>
            <p className="text-sm text-[#5A5A5A] leading-relaxed">
              The United Kingdom and the United States are usually low-risk, so a titre is not the usual inbound step. India and the Philippines are high-risk and need a titre. {TITER_RULE} See the{' '}
              <Link to="/guides/rabies-titer-test-dubai/" className="text-[#4F5BD5] font-medium hover:underline">rabies titre test guide</Link>.
              The clinic invoices that work. We do not publish a veterinary tariff.
            </p>
          </Card>
          <Card>
            <div className="w-11 h-11 rounded-[14px] bg-[#E9ECFB] flex items-center justify-center mb-4">
              <Sun className="w-5 h-5 text-[#C0392B]" />
            </div>
            <h4 className="font-bold text-[#2A2A2A] mb-2">3. Your travel season</h4>
            <p className="text-sm text-[#5A5A5A] leading-relaxed">
              From May through September, many airlines restrict pet cargo because of heat. Flat-faced breeds face extra airline limits. A reroute, a road leg, or extra boarding is quoted before it is booked.
            </p>
          </Card>
          <Card>
            <div className="w-11 h-11 rounded-[14px] bg-[#E9ECFB] flex items-center justify-center mb-4">
              <FileCheck className="w-5 h-5 text-[#4F5BD5]" />
            </div>
            <h4 className="font-bold text-[#2A2A2A] mb-2">4. Your pet&apos;s documentation status</h4>
            <p className="text-sm text-[#5A5A5A] leading-relaxed">
              A pet that is already microchipped, with the rabies vaccine in the right order, skips those clinic steps. A first vaccination, or an interrupted course, needs at least 21 days before the titre sample and before export. A missing document can mean refusal, a hold, or a return journey at the owner&apos;s expense.
            </p>
          </Card>
        </div>
      </Section>

      <Section className="bg-[#F5F6FD]">
        <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mb-4">What goes into a pet relocation quote</h2>
        <p className="text-[#5A5A5A] max-w-3xl mb-10 leading-relaxed">
          Every move is quoted for your pet, route and dates after an eligibility check. The rows below name who charges for each step. They are not a package price.
        </p>

        <div className="mb-12">
          <h3 className="text-lg font-bold text-[#2A2A2A] mb-4 flex items-center gap-2">
            <Shield className="w-5 h-5 text-[#4F5BD5]" /> Government and mandatory fees
          </h3>
          <div className="overflow-x-auto">
            <table className="data-table min-w-[640px]">
              <thead>
                <tr>
                  <th>Fee</th>
                  <th>Where it is confirmed</th>
                  <th>What it covers</th>
                  <th>When you pay</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>MOCCAE import permit</td>
                  <td>Confirmed on the official MOCCAE portal</td>
                  <td>One animal. Valid 90 days from issuance.</td>
                  <td>Before travel</td>
                </tr>
                <tr>
                  <td>MOCCAE release on arrival</td>
                  <td>Confirmed on the official MOCCAE portal</td>
                  <td>Veterinary release when the pet clears.</td>
                  <td>On arrival</td>
                </tr>
                <tr>
                  <td>Cargo-handler invoice</td>
                  <td>On that invoice</td>
                  <td>Whoever files the bill of entry at DXB or DWC.</td>
                  <td>On arrival</td>
                </tr>
                <tr>
                  <td>Dubai Municipality registration</td>
                  <td>Confirm on Aleef</td>
                  <td>Annual registration. Within 30 days of arrival.</td>
                  <td>After arrival</td>
                </tr>
                <tr>
                  <td>Microchip, if the pet does not have one</td>
                  <td>Clinic invoice</td>
                  <td>ISO chip, implanted before the rabies vaccine.</td>
                  <td>Before travel</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-[#5A5A5A] mt-3 font-medium">
            {GOV_FEE_LINE} {PERMIT_FEE_VERIFY} {RELEASE_FEE_VERIFY}
          </p>
          <p className="text-sm text-[#5A5A5A] mt-2">
            Government fees are the same whichever coordinator you use. A quote should name them as government charges, separate from coordination. Customs, municipality registration and microchipping are additional.
          </p>
        </div>

        <div className="mb-12">
          <h3 className="text-lg font-bold text-[#2A2A2A] mb-4 flex items-center gap-2">
            <PawPrint className="w-5 h-5 text-[#4F5BD5]" /> Veterinary costs
          </h3>
          <div className="overflow-x-auto">
            <table className="data-table min-w-[560px]">
              <thead>
                <tr><th>Service</th><th>Who invoices it</th><th>Notes</th></tr>
              </thead>
              <tbody>
                <tr><td>ISO microchip and rabies vaccination</td><td>The clinic</td><td>The chip goes in before the rabies vaccine. A first vaccine, or a gap, needs at least 21 days before travel.</td></tr>
                <tr><td>Rabies antibody test</td><td>The clinic and the laboratory</td><td>{TITER_RULE} The laboratory sets the turnaround.</td></tr>
                <tr><td>Core vaccinations, if they are not current</td><td>The clinic</td><td>Dogs and cats need the vaccines the destination asks for. Confirm the list with the clinic.</td></tr>
                <tr><td>Health certificate and endorsement</td><td>The clinic and the endorsing office</td><td>Issued close to travel. An expired certificate is not accepted.</td></tr>
                <tr><td>Parasite treatment</td><td>The clinic</td><td>Internal and external treatment inside the window the destination states.</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-[#5A5A5A] mt-3 font-medium">
            There is no published veterinary total. Ask the clinic for its current fees before the appointment.
          </p>
        </div>

        <div className="mb-12">
          <h3 className="text-lg font-bold text-[#2A2A2A] mb-4 flex items-center gap-2">
            <Package className="w-5 h-5 text-[#4F5BD5]" /> Travel crate
          </h3>
          <div className="overflow-x-auto">
            <table className="data-table">
              <thead>
                <tr><th>Crate size</th><th>Typical pet</th><th>What sets the price</th></tr>
              </thead>
              <tbody>
                <tr><td>Small (up to 40cm)</td><td>Cat, small dog (Chihuahua, Pomeranian)</td><td>Crate size and airline acceptance</td></tr>
                <tr><td>Medium (40 to 60cm)</td><td>Medium dog (Beagle, Corgi, Shiba Inu)</td><td>Crate size and airline acceptance</td></tr>
                <tr><td>Large (60 to 80cm)</td><td>Large dog (Labrador, Golden Retriever)</td><td>Crate size and airline acceptance</td></tr>
                <tr><td>XL (80cm and above)</td><td>Extra-large dog (German Shepherd, Great Dane)</td><td>Crate size and airline acceptance</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-[#5A5A5A] mt-3">
            Crates must be <strong>IATA LAR-compliant</strong>: rigid, well ventilated, with secure locking doors. On a managed move the crate is sized to the animal and labelled before travel. Buying the wrong crate is a common reason acceptance is refused.
          </p>
          <p className="mt-2 text-sm">
            <Link to="/guides/iata-pet-crate-requirements/" className="text-[#4F5BD5] font-medium hover:underline inline-flex items-center gap-1">
              IATA crate requirements <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </p>
        </div>

        <div className="mb-12">
          <h3 className="text-lg font-bold text-[#2A2A2A] mb-4 flex items-center gap-2">
            <Plane className="w-5 h-5 text-[#4F5BD5]" /> Air cargo and flight fees
          </h3>
          <div className="overflow-x-auto">
            <table className="data-table min-w-[560px]">
              <thead>
                <tr><th>Route type</th><th>Who prices it</th><th>Notes</th></tr>
              </thead>
              <tbody>
                <tr><td>Short-haul (GCC, nearby Asia)</td><td>The airline, for that crate</td><td>Distance is shorter. The season and the crate volume still change the figure.</td></tr>
                <tr><td>Medium-haul (Europe, UK, Turkey)</td><td>The airline, for that crate</td><td>Confirm the carrier&apos;s current live-animal product before you treat a passenger fare as pet travel.</td></tr>
                <tr><td>Long-haul (USA, Canada, Australia)</td><td>The airline, for that crate</td><td>Distance, crate volume and any connection are the usual reasons the freight is higher.</td></tr>
                <tr><td>In-cabin, where an airline still offers it</td><td>The airline, on that flight</td><td>Emirates cargo into Dubai is not an in-cabin product. Any Abu Dhabi cabin exception has a weight limit and must be confirmed on the current Etihad page.</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-[#5A5A5A] mt-3">
            Airlines usually charge freight on the crate&apos;s volume, not only on the pet&apos;s weight. A larger crate can cost more than a smaller one on the same route. Ask the carrier for the figure before you treat a blog note as your quote.
          </p>
          <p className="mt-2 text-sm">
            <Link to="/guides/emirates-pet-cargo/" className="text-[#4F5BD5] font-medium hover:underline inline-flex items-center gap-1">
              Emirates pet cargo guide <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </p>
        </div>

        <div className="mb-12">
          <h3 className="text-lg font-bold text-[#2A2A2A] mb-4 flex items-center gap-2">
            <Users className="w-5 h-5 text-[#4F5BD5]" /> Dubai Pet Relocation coordination
          </h3>
          <p className="text-sm text-[#5A5A5A] mb-4">
            This is the coordination we quote for permits, paperwork, flight booking, ground handover and WhatsApp updates. The figure is quoted after eligibility, once we know the pet, the route and the month. We do not publish a from-price, and we do not fly the animal or issue certificates ourselves.
          </p>
          <div className="overflow-x-auto">
            <table className="data-table min-w-[560px]">
              <thead>
                <tr><th>Tier</th><th>Cost</th><th>What is included</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>PawPilot</strong> (Essential)</td>
                  <td>Quoted after eligibility</td>
                  <td>Documentation, MOCCAE permit application, flight booking, basic email and WhatsApp support</td>
                </tr>
                <tr>
                  <td><strong>PawPartner</strong> (Premium)</td>
                  <td>Quoted after eligibility</td>
                  <td>Door-to-door pickup and delivery, IATA crate, vet coordination, WhatsApp updates during the move, photo updates</td>
                </tr>
                <tr>
                  <td><strong>PawVIP</strong> (Coordination)</td>
                  <td>Quoted after eligibility</td>
                  <td>A dedicated relocation manager, emergency contingency planning, and boarding or nanny arrangements when the route needs them. Insurance, if you want it, is quoted separately.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-[#5A5A5A] mt-3">
            The quote names the coordination, and it separates government fees, the clinic, the airline and the van. We do not operate the airline.
          </p>
          <p className="mt-2 text-sm">
            <Link to="/prices/" className="text-[#4F5BD5] font-medium hover:underline inline-flex items-center gap-1">
              How we quote <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </p>
        </div>

        <div className="mb-4">
          <h3 className="text-lg font-bold text-[#2A2A2A] mb-4">What changes the total</h3>
          <p className="text-sm text-[#5A5A5A] mb-4">
            These rows are not package prices. Coordination is quoted after we know the pet and the route.
          </p>
          <div className="overflow-x-auto">
            <table className="data-table">
              <thead>
                <tr><th>Situation</th><th>What changes the quote</th></tr>
              </thead>
              <tbody>
                <tr><td><strong>UK or EU, small crate</strong></td><td>Quoted after the pet and the airport are known</td></tr>
                <tr><td><strong>UK or EU, larger crate</strong></td><td>Higher volumetric weight. The airline prices it.</td></tr>
                <tr><td><strong>USA, long-haul cargo</strong></td><td>Distance and crate size change the airline quote.</td></tr>
                <tr><td><strong>India, Pakistan or the Philippines</strong></td><td>Adds the titre when MOCCAE requires it. {TITER_RULE}</td></tr>
                <tr><td><strong>Flat-faced breed in the heat window</strong></td><td>The airline may refuse cargo. A reroute is quoted first.</td></tr>
                <tr><td><strong>Owner files the permit</strong></td><td>Government, clinic and airline invoices still apply.</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="mx-auto mt-8 max-w-xl text-center">
          <WhatsAppCta text="Get a managed-move quote for your corridor" fullWidth />
          <WhatsAppGate line={GUIDE_SOFT_GATE} className="mt-3" />
          <QuoteLinks />
        </div>
      </Section>

      <Section className="bg-white">
        <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mb-10">How the route changes the cost</h2>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card>
            <h3 className="text-lg font-bold text-[#2A2A2A] mb-3">UK to Dubai</h3>
            <p className="text-sm text-[#5A5A5A] mb-4 leading-relaxed">Usually a lower-risk route. Quarantine is not the usual inbound step. A titre is not usually required. Confirm on the MOCCAE portal before you travel.</p>
            <ul className="text-sm text-[#5A5A5A] space-y-1 mb-4">
              <li><strong>Crate size</strong> sets the airline&apos;s volumetric weight.</li>
              <li><strong>Airport:</strong> London Heathrow or Manchester, only if that desk accepts the crate.</li>
              <li><strong>Clock:</strong> rabies vaccine at least 21 days old, then the health certificate close to travel.</li>
              <li><strong>Permit:</strong> valid 90 days from issuance. The pet must arrive inside that window.</li>
            </ul>
            <p className="text-sm text-[#5A5A5A] leading-relaxed">
              The UK is treated as low-risk, so the usual documents are the microchip, the rabies vaccine, a health certificate endorsed by an official veterinarian, and the MOCCAE permit. The airline confirms the cargo booking. We coordinate the sequence.
            </p>
            <p className="mt-3 text-sm">
              <Link to="/routes/uk-to-dubai/" className="text-[#4F5BD5] font-medium hover:underline inline-flex items-center gap-1">
                Read our full UK to Dubai guide <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </p>
          </Card>

          <Card>
            <h3 className="text-lg font-bold text-[#2A2A2A] mb-3">USA to Dubai</h3>
            <p className="text-sm text-[#5A5A5A] mb-4 leading-relaxed">Usually low-risk when the rabies vaccine is current, so a titre is not the usual step. Confirm on the MOCCAE portal.</p>
            <ul className="text-sm text-[#5A5A5A] space-y-1 mb-4">
              <li><strong>Distance</strong> from the US airport to Dubai changes the airline quote.</li>
              <li><strong>Endorsement:</strong> an APHIS health certificate, on top of the clinic visit.</li>
              <li><strong>Crate size</strong> still sets volumetric weight.</li>
              <li><strong>Permit:</strong> the import permit is valid 90 days from issuance.</li>
            </ul>
            <p className="text-sm text-[#5A5A5A] leading-relaxed">
              The United States is treated as low-risk when the rabies vaccine is current. The extra step owners miss is the government endorsement of the health certificate. The airline prices the crate from the actual departure airport.
            </p>
          </Card>

          <Card>
            <h3 className="text-lg font-bold text-[#2A2A2A] mb-3">India to Dubai</h3>
            <p className="text-sm text-[#5A5A5A] mb-4 leading-relaxed">High-risk origin. A titre is required. {TITER_RULE}</p>
            <ul className="text-sm text-[#5A5A5A] space-y-1 mb-4">
              <li><strong>Antibody test</strong> when MOCCAE requires it: at least 0.5 IU/ml from an approved laboratory.</li>
              <li><strong>Sample:</strong> at least 21 days after the first or interrupted rabies vaccination, before export.</li>
              <li><strong>Export papers</strong> from the Indian authority, close to travel.</li>
              <li><strong>Clinic invoice</strong> is separate. We do not publish a laboratory tariff.</li>
            </ul>
            <p className="text-sm text-[#5A5A5A] leading-relaxed">
              The sample goes to a laboratory the destination accepts. See the{' '}
              <Link to="/guides/rabies-titer-test-dubai/" className="text-[#4F5BD5] font-medium hover:underline">rabies titre test guide</Link>.
              Ask the clinic in your city whether it can draw the sample. A mismatched document can hold the pet at the owner&apos;s expense.
            </p>
          </Card>

          <Card>
            <h3 className="text-lg font-bold text-[#2A2A2A] mb-3">Australia to Dubai</h3>
            <p className="text-sm text-[#5A5A5A] mb-4 leading-relaxed">Usually low-risk for UAE entry, and a long flight. Confirm on the MOCCAE portal. The airline quotes the crate.</p>
            <ul className="text-sm text-[#5A5A5A] space-y-1 mb-4">
              <li><strong>Export certificate</strong> from the Australian authority.</li>
              <li><strong>Distance</strong> from Sydney, Melbourne, Brisbane or Perth.</li>
              <li><strong>Connection:</strong> only if the airline&apos;s live-animal product uses one.</li>
              <li><strong>Permit:</strong> the import permit is valid 90 days from issuance.</li>
            </ul>
            <p className="text-sm text-[#5A5A5A] leading-relaxed">
              Australia is treated as low-risk for UAE entry, and the export certificate is still a separate Australian step. Confirm whether the itinerary is direct or connects. A direct passenger ticket is not cabin travel by default.
            </p>
          </Card>
        </div>

        <Card className="mb-8">
          <h3 className="text-lg font-bold text-[#2A2A2A] mb-3">Philippines to Dubai</h3>
          <p className="text-sm text-[#5A5A5A] mb-4 leading-relaxed">High-risk origin. A titre is required. {TITER_RULE}</p>
          <ul className="text-sm text-[#5A5A5A] space-y-1 mb-4">
            <li><strong>Antibody test</strong> when required: at least 0.5 IU/ml from an approved laboratory, sampled at least 21 days after the first or interrupted rabies vaccination, before export.</li>
            <li><strong>Philippine export papers</strong> from the Bureau of Animal Industry.</li>
            <li><strong>UAE permit</strong> valid 90 days from issuance.</li>
            <li><strong>Crate size</strong> still sets the airline quote.</li>
          </ul>
          <p className="text-sm text-[#5A5A5A] leading-relaxed">
            The Philippines route needs the export step, the titre when MOCCAE asks for it, and the health certificate, then the UAE import permit. The quote names who presents those documents at the cargo desk.
          </p>
        </Card>

        <div className="mx-auto max-w-xl text-center">
          <WhatsAppCta text="Get a managed-move quote for your route" fullWidth />
          <WhatsAppGate line={GUIDE_SOFT_GATE} className="mt-3" />
          <p className="mt-4 text-sm text-[#5A5A5A]">
            <Link to="/service/pet-relocation-dubai/" className="font-semibold text-[#4F5BD5] hover:underline">
              Compare managed-move services
            </Link>
            {' and '}
            <Link to="/prices/" className="font-semibold text-[#4F5BD5] hover:underline">
              How we quote
            </Link>
            . The paid jobs also include{' '}
            <Link to="/service/pet-import-dubai/" className="font-semibold text-[#4F5BD5] hover:underline">
              pet import Dubai
            </Link>
            {' and '}
            <Link to="/service/pet-export-dubai/" className="font-semibold text-[#4F5BD5] hover:underline">
              pet export Dubai
            </Link>
            .
          </p>
        </div>
      </Section>

      <Section className="bg-[#F5F6FD]">
        <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mb-4">How crate size changes the cost</h2>
        <div className="overflow-x-auto mb-6">
          <table className="data-table min-w-[720px]">
            <thead>
              <tr>
                <th>Size category</th>
                <th>Weight (kg)</th>
                <th>Typical breeds</th>
                <th>Crate size</th>
                <th>What changes the quote</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Small</strong></td>
                <td>Up to 8kg</td>
                <td>Chihuahua, Pomeranian, Shih Tzu, Dachshund, most cats</td>
                <td>Small (up to 40cm)</td>
                <td>Smallest crate. The airline still quotes the route.</td>
              </tr>
              <tr>
                <td><strong>Medium</strong></td>
                <td>8 to 20kg</td>
                <td>Beagle, Corgi, Shiba Inu, French Bulldog, Cocker Spaniel</td>
                <td>Medium (40 to 60cm)</td>
                <td>Mid-size crate. Volumetric weight rises.</td>
              </tr>
              <tr>
                <td><strong>Large</strong></td>
                <td>20 to 35kg</td>
                <td>Labrador, Golden Retriever, Border Collie, Boxer</td>
                <td>Large (60 to 80cm)</td>
                <td>Large crate. Confirm the aircraft can take it.</td>
              </tr>
              <tr>
                <td><strong>Extra large</strong></td>
                <td>35kg and above</td>
                <td>German Shepherd, Great Dane, Rottweiler, Husky</td>
                <td>XL (80cm and above)</td>
                <td>Extra-large crate. Some aircraft cannot take it.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="warning-box">
          <p className="text-sm text-[#2A2A2A]">
            <strong>Important:</strong> Airlines use <strong>volumetric weight</strong>, not actual weight. A large crate takes up more cargo space than a small one, even if your pet is lean. We measure your pet&apos;s length (nose to base of tail) and height (floor to top of head, ears included) to size the crate precisely. An oversized crate costs more in freight. An undersized one gets rejected at check-in.
          </p>
        </div>
      </Section>

      <Section className="bg-white">
        <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mb-4">Costs that are easy to miss</h2>
        <p className="text-[#5A5A5A] max-w-3xl mb-4 leading-relaxed">
          A low quote often leaves out a step that still has to be paid. Then the extras arrive.
        </p>
        <p className="text-[#5A5A5A] mb-10">Here is what to watch for, and how a managed quote handles it.</p>

        <h3 className="text-lg font-bold text-[#2A2A2A] mb-4">Common costs that are easy to miss</h3>
        <div className="overflow-x-auto mb-10">
          <table className="data-table min-w-[720px]">
            <thead>
              <tr>
                <th>Cost</th>
                <th>How it is handled in a quote</th>
                <th>Why it happens</th>
                <th>How Dubai Pet Relocation handles it</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Flight rebooking due to a summer embargo</strong></td>
                <td>Quoted if the date changes</td>
                <td>Many airlines restrict pet cargo from 1 May to 30 September.</td>
                <td>We check the seasonal rule before a cargo request goes to the airline. A new booking is priced before you agree.</td>
              </tr>
              <tr>
                <td><strong>Refusal or re-export due to missing documents</strong></td>
                <td>Quoted if it happens</td>
                <td>A mismatched microchip or an expired certificate can mean refusal, holding, or a return journey, at the owner&apos;s expense.</td>
                <td>We check the documents against the current list before they are submitted. What a delay on our side means is written in the service agreement.</td>
              </tr>
              <tr>
                <td><strong>Crate rejected at check-in</strong></td>
                <td>Quoted if it happens</td>
                <td>A crate that is the wrong size, the wrong material, or missing labels.</td>
                <td>The crate is measured on the animal and labelled before travel day.</td>
              </tr>
              <tr>
                <td><strong>Extended boarding if the flight is cancelled</strong></td>
                <td>Quoted before it is booked</td>
                <td>Weather, an airline change, or a missed connection.</td>
                <td>PawVIP includes contingency planning. Boarding is arranged when the route needs it. It is not a fixed number of free days.</td>
              </tr>
              <tr>
                <td><strong>Document translation</strong></td>
                <td>Quoted if the documents need it</td>
                <td>Some authorities ask for a translation.</td>
                <td>If a translation is required, it is named on the quote. It is not assumed to be inside every tier.</td>
              </tr>
              <tr>
                <td><strong>Unofficial terminal payment</strong></td>
                <td>Not a fee we add</td>
                <td>A request for an unofficial payment at a terminal.</td>
                <td>You pay the charges on the government, airline and handler invoices. We do not add a private terminal fee.</td>
              </tr>
              <tr>
                <td><strong>Destination-side delivery charge</strong></td>
                <td>Named on the quote</td>
                <td>A quote that stops at the airport still needs a vehicle to the building.</td>
                <td>The quote says whether delivery is to the cargo desk or to the address.</td>
              </tr>
              <tr>
                <td><strong>Insurance, if you ask for it</strong></td>
                <td>Quoted only if you ask</td>
                <td>Cover for delay, veterinary cost or cancellation.</td>
                <td>We do not sell a named policy here. If you want cover, we say what can be arranged before you agree.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="warning-box mb-6">
          <h4 className="font-bold text-[#2A2A2A] mb-2 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-[#4F5BD5]" /> How to compare two quotes
          </h4>
          <p className="text-sm text-[#5A5A5A] leading-relaxed">
            A quote that leaves out the crate, the airline, or the government fee looks lower than the move.
          </p>
          <p className="text-sm text-[#5A5A5A] leading-relaxed mt-2">
            The airline prices the crate. The clinic prices the certificate. MOCCAE prices the permit and the release. Those lines move when the pet, the date or the route changes. {GOV_FEE_LINE}
          </p>
          <p className="text-sm text-[#2A2A2A] leading-relaxed mt-2">
            The quote you receive names each line before you agree. If something on our side of the work needs to change, the service agreement says what happens next.
          </p>
        </div>

        <p className="text-sm">
          <Link to="/about/" className="text-[#4F5BD5] font-medium hover:underline inline-flex items-center gap-1">
            About our coordination service <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </p>

        <div className="mx-auto mt-8 max-w-xl text-center">
          <WhatsAppCta text="Request an itemised managed-move quote" fullWidth />
          <WhatsAppGate line={GUIDE_SOFT_GATE} className="mt-3" />
          <QuoteLinks />
        </div>
      </Section>

      <Section className="bg-[#EEF0FC]">
        <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mb-4">Doing it yourself or booking a managed move</h2>
        <p className="text-[#5A5A5A] max-w-3xl mb-10 leading-relaxed">
          An owner can file the permit and ask the airline for cargo. The steps below are still separate invoices.
        </p>

        <div className="grid lg:grid-cols-2 gap-8 mb-10">
          <Card>
            <h3 className="text-lg font-bold text-[#2A2A2A] mb-4">Doing it yourself</h3>
            <div className="overflow-x-auto">
              <table className="data-table min-w-[640px]">
                <thead>
                  <tr><th>Step</th><th>What you do</th><th>Who invoices it</th><th>What can go wrong</th></tr>
                </thead>
                <tbody>
                  <tr><td>Clinic papers</td><td>Book a clinic that will issue the export documents</td><td>The clinic</td><td>A vaccine dated before the microchip is not accepted.</td></tr>
                  <tr><td>MOCCAE import permit</td><td>Apply on the official portal</td><td>Confirmed on the official MOCCAE portal. Valid 90 days from issuance. Not part of our coordination price.</td><td>A wrong field can mean a new application.</td></tr>
                  <tr><td>Crate</td><td>Measure the animal and buy a crate the airline accepts</td><td>The supplier</td><td>A crate that is the wrong size can be refused on travel day.</td></tr>
                  <tr><td>Cargo</td><td>Ask the airline for a live-animal booking</td><td>The airline</td><td>A passenger seat is not a cargo booking.</td></tr>
                  <tr><td>Health certificate</td><td>Clinic visit, then the official endorsement</td><td>The clinic and the endorsing office</td><td>An expired certificate is not accepted.</td></tr>
                  <tr><td>Road legs</td><td>Book a vehicle that will carry the crate</td><td>The transport company</td><td>A normal taxi may refuse the crate.</td></tr>
                  <tr><td>Arrival</td><td>Present the documents at the cargo terminal</td><td>Confirmed on the official MOCCAE portal at the time of application. Not part of our coordination price.</td><td>A mismatch can hold the pet. The terminal does not publish a fixed clearance time.</td></tr>
                  <tr><td>Municipality registration</td><td>Aleef or Dubai Smart Services, within 30 days</td><td>Confirm on that channel</td><td>Late registration is the municipality&apos;s own rule. Confirm any charge there.</td></tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-[#2A2A2A] font-medium mt-4">There is no published do-it-yourself total. Each provider invoices its own step.</p>
            <p className="text-sm text-[#5A5A5A] mt-1">The owner&apos;s time is the calls, the portal and the cargo desk.</p>
          </Card>

          <Card>
            <h3 className="text-lg font-bold text-[#2A2A2A] mb-4">Using Dubai Pet Relocation</h3>
            <p className="text-sm font-semibold text-[#2A2A2A] mb-3">What a booked move includes:</p>
            <ul className="space-y-2 text-sm text-[#5A5A5A] mb-6">
              {COST_PAID.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-[#2A2A2A] font-medium">Dubai Pet Relocation coordination is quoted for the pet and the route. It is not a published package total.</p>
            <p className="text-sm text-[#5A5A5A] mt-1">You still send the pet details, the documents the clinic issues, and the collection address.</p>
          </Card>
        </div>

        <Card className="bg-[#4F5BD5] text-white border-none">
          <h3 className="text-lg font-bold mb-3">What the comparison comes down to</h3>
          <p className="text-sm text-white/90 leading-relaxed mb-3">
            An owner can file the permit and book the cargo. The clinic, the airline and MOCCAE still invoice their own steps.
          </p>
          <p className="text-sm text-white/90 leading-relaxed mb-3">
            A mismatched microchip, an expired certificate, or a crate the airline rejects can hold the pet or send it back, at the owner&apos;s expense.
          </p>
          <p className="text-sm text-white/90 leading-relaxed">
            Coordination is the order of those documents, and the person who presents them. The quote names the scope before you agree.
          </p>
        </Card>
        <p className="mt-6 text-sm">
          <Link to="/services/" className="text-[#4F5BD5] font-medium hover:underline inline-flex items-center gap-1">
            See our full service comparison <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </p>
      </Section>

      <Section className="bg-white">
        <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mb-10">How the travel season changes the cost</h2>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <Card>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-11 h-11 rounded-[14px] bg-[#E9ECFB] flex items-center justify-center">
                <Sun className="w-5 h-5 text-[#C0392B]" />
              </div>
              <h3 className="text-lg font-bold text-[#2A2A2A]">Summer heat embargo (1 May to 30 September)</h3>
            </div>
            <p className="text-sm text-[#5A5A5A] mb-4 leading-relaxed">
              From 1 May to 30 September, ground temperatures in Dubai exceed 45°C. Most airlines suspend or heavily restrict live animal cargo.
            </p>
            <p className="text-sm font-semibold text-[#2A2A2A] mb-2">What this means for your cost:</p>
            <ul className="space-y-2 text-sm text-[#5A5A5A]">
              <li className="flex items-start gap-2"><AlertTriangle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /><span>A booked crate may need a new flight if the airline suspends live animals. The carrier prices that change.</span></li>
              <li className="flex items-start gap-2"><AlertTriangle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /><span>A road move inside the GCC is a different product from air cargo. It is quoted on its own.</span></li>
              <li className="flex items-start gap-2"><AlertTriangle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /><span>A charter is only discussed when the route and the pet justify it, and only with a figure before you agree.</span></li>
              <li className="flex items-start gap-2"><AlertTriangle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /><span>Waiting for a cooler month can mean boarding. That cost is confirmed before it is booked.</span></li>
            </ul>
            <p className="text-sm text-[#5A5A5A] mt-4 leading-relaxed">
              <strong>Brachycephalic breeds (Bulldogs, Pugs, Persian cats):</strong> Many airlines ban these breeds entirely from May through September, regardless of temperature. Some restrict them to October to April only. If you have a snub-nosed pet, plan the move for the cooler months, or ask for a quoted alternative before you book.
            </p>
          </Card>

          <Card>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-11 h-11 rounded-[14px] bg-[#E9ECFB] flex items-center justify-center">
                <Snowflake className="w-5 h-5 text-[#4F5BD5]" />
              </div>
              <h3 className="text-lg font-bold text-[#2A2A2A]">Peak season (October to May)</h3>
            </div>
            <p className="text-sm text-[#5A5A5A] mb-4 leading-relaxed">
              October through May is peak relocation season. More flights are available. More routing options exist. The risk of a heat cancellation is lower.
            </p>
            <p className="text-sm font-semibold text-[#2A2A2A] mb-2">What changes in the quote:</p>
            <ul className="space-y-2 text-sm text-[#5A5A5A]">
              <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /><span>More airlines accept live animals than during the heat embargo, so there are more routing options.</span></li>
              <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /><span>The airline still prices the crate. A managed quote names that charge before you agree.</span></li>
              <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /><span>Earlier booking keeps more cargo space. A last-minute date can limit the flights that will take the crate.</span></li>
            </ul>
            <p className="text-sm text-[#2A2A2A] font-medium mt-4">Our recommendation:</p>
            <p className="text-sm text-[#5A5A5A] leading-relaxed">
              If you are planning a move, book the pet&apos;s relocation 8 to 12 weeks in advance. Earlier dates have more routing options.
            </p>
          </Card>
        </div>
      </Section>

      <Section className="bg-[#F5F6FD]">
        <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mb-4">What we need to quote your move</h2>
        <p className="text-[#5A5A5A] max-w-3xl mb-8 leading-relaxed">
          Every pet, route and season is different. Send the details below. The quote is built after an eligibility check, and we reply during published hours.
        </p>

        <div className="grid lg:grid-cols-2 gap-8 mb-10">
          <Card>
            <h3 className="text-lg font-bold text-[#2A2A2A] mb-4">What we need before we quote:</h3>
            <ol className="space-y-3 text-sm text-[#5A5A5A]">
              <li className="flex items-start gap-3"><span className="w-6 h-6 rounded-full bg-[#4F5BD5] text-white text-xs font-bold flex items-center justify-center shrink-0">1</span><span><strong>Pet type and breed</strong> (dog or cat, and the breed)</span></li>
              <li className="flex items-start gap-3"><span className="w-6 h-6 rounded-full bg-[#4F5BD5] text-white text-xs font-bold flex items-center justify-center shrink-0">2</span><span><strong>Weight and approximate dimensions</strong> (for crate sizing)</span></li>
              <li className="flex items-start gap-3"><span className="w-6 h-6 rounded-full bg-[#4F5BD5] text-white text-xs font-bold flex items-center justify-center shrink-0">3</span><span><strong>Origin</strong> (city and country)</span></li>
              <li className="flex items-start gap-3"><span className="w-6 h-6 rounded-full bg-[#4F5BD5] text-white text-xs font-bold flex items-center justify-center shrink-0">4</span><span><strong>Destination</strong> (Dubai, or elsewhere in the UAE)</span></li>
              <li className="flex items-start gap-3"><span className="w-6 h-6 rounded-full bg-[#4F5BD5] text-white text-xs font-bold flex items-center justify-center shrink-0">5</span><span><strong>Planned move date</strong> (or as soon as the documents allow)</span></li>
              <li className="flex items-start gap-3"><span className="w-6 h-6 rounded-full bg-[#4F5BD5] text-white text-xs font-bold flex items-center justify-center shrink-0">6</span><span><strong>Documents status</strong> (microchipped, vaccinated, titre done if the route needs one)</span></li>
            </ol>
          </Card>
          <Card>
            <h3 className="text-lg font-bold text-[#2A2A2A] mb-4">What a quote covers:</h3>
            <ul className="space-y-3 text-sm text-[#5A5A5A]">
              <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /><span>The coordination we will quote for this pet, route and dates</span></li>
              <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /><span>The document order and a clear timeline</span></li>
              <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /><span>Which managed tier fits the move</span></li>
              <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /><span>Seasonal or breed limits the airline may apply</span></li>
              <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /><span>MOCCAE permit timing (import permit valid 90 days from issuance), crate check, airline booking, and DXB or DWC handover, quoted before you pay</span></li>
            </ul>
          </Card>
        </div>

        <div id="whatsapp-cta" className="mx-auto max-w-xl text-center">
          <ul className="mb-6 space-y-2 text-left text-sm text-[#5A5A5A]">
            {COST_PAID.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-[#4F5BD5]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <WhatsAppCta text="Get a managed-move quote" fullWidth />
          <WhatsAppGate line={GUIDE_SOFT_GATE} className="mt-3" />
          <QuoteLinks />
        </div>
      </Section>

      <Section className="bg-white">
        <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mb-10">Frequently asked questions</h2>
        <div className="max-w-3xl">
          {COST_FAQS.map((f) => (
            <FAQItem
              key={f.q}
              question={f.q}
              answer={<p><LinkedText text={f.a} /></p>}
            />
          ))}
        </div>
      </Section>

      <GuideFunnelCta
        variant="end"
        title="Ready to book a managed move?"
        subtitle="Send the pet, origin, destination and date. We check eligibility, then quote the managed move. Government fees stay on the official MOCCAE portal."
        eligibilityMessage={costGuideMsg}
        waLabel={CTA_MANAGED_QUOTE}
        waClassName={STRONG_WA_CLASS}
        links={FUNNEL_LINKS}
        linkClassName={TEXT_LINK_DARK}
        paidItems={COST_PAID}
        gateLine={GUIDE_SOFT_GATE}
        diyLine={COST_DIY}
        finePrint={COST_FINE}
      />

      <Section className="bg-[#F5F6FD]">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs text-[#8A8A8A] leading-relaxed mb-3">
            Last updated: November 2026. Every move is quoted for your pet, route and dates after an eligibility check. Airline charges move with the route and the season. We do not fly the animal or issue certificates ourselves.
          </p>
          <p className="text-xs text-[#8A8A8A] leading-relaxed">
            Dubai Pet Relocation is a pet relocation coordination service. We coordinate veterinarians, cargo handlers and ground transport for the steps named on your quote. We guide you through MOCCAE import requirements. {GOV_FEE_LINE}
          </p>
        </div>
      </Section>
    </div>
  )
}
