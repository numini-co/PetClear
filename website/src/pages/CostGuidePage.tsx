import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  MessageCircle,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  AlertTriangle,
  CheckCircle,
  XCircle,
  DollarSign,
  Scale,
  Sun,
  Snowflake,
  Calendar,
  HelpCircle,
  Plane,
  Shield,
  FileCheck,
  Truck,
  Package,
  MapPin,
  Clock,
  Phone,
  PawPrint,
  TrendingUp,
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

const snippetQuestion = 'How much does it cost to relocate a pet in Dubai?'
const snippetAnswer =
  'Relocating a pet through Dubai is a bundle of government permits, veterinary work, air freight, an IATA crate, airport handling, and coordination — not one ticket price. Confirm contested MOCCAE fees on the official portal. Airline charges vary by route and size. Our coordination package is quoted. Email support@dubai-pet-relocation.ae or WhatsApp +971 50 478 2999.'

const COST_PAA_FAQS: { q: string; a: string }[] = [
  {
    q: 'How much does it cost to relocate a pet in Dubai?',
    a: `There is no single ticket price. A Dubai pet move splits into government permits and port release. ${PERMIT_FEE_VERIFY} ${RELEASE_FEE_VERIFY} Veterinary prep, air freight, an IATA crate, airport handling, and coordination sit on top. Airline charges vary by route and size. Cost types are listed on this page. Dubai Pet Relocation packages are quoted on [/service/pet-relocation-dubai/](/service/pet-relocation-dubai/). WhatsApp +971504782999 when you are ready to book a managed move.`,
  },
  {
    q: 'How much does it cost to import a pet into the UAE?',
    a: 'UAE import cost splits into government charges, veterinary work, freight, the crate, handling, and coordination. There is no single published import tariff. Rules live on [UAE pet import requirements](/guides/uae-pet-import-requirements/). The permit steps are on [the MOCCAE permit guide](/guides/moccae-import-permit/). The paid import service is [managed pet import](/service/pet-import-dubai/). Coordination is quoted after we know the pet and the route. Email support@dubai-pet-relocation.ae or WhatsApp +971504782999.',
  },
  {
    q: 'How much does it cost to get a dog imported?',
    a: 'Dog imports usually cost more than cats because crate volume and cargo weight drive freight, but government and veterinary types still apply. Confirm MOCCAE permit and dog release amounts on the portal before you budget. Larger breeds need larger IATA crates. Species depth: [/dog-relocation-to-dubai/](/dog-relocation-to-dubai/). Coordination is quoted — no invented package band. WhatsApp +971504782999.',
  },
  {
    q: 'How much does it cost to fly with a pet on an airline?',
    a: 'Airline animal charges are separate from government fees and from a full relocation quote. Cabin, checked-baggage, and manifest cargo products price differently by carrier, route, and pet-plus-carrier size. Confirm live tiers on the airline — do not treat a blog table as a quote. For Emirates depth see [/guides/emirates-pet-cargo/](/guides/emirates-pet-cargo/); for Etihad cabin see [/guides/etihad-pet-policy/](/guides/etihad-pet-policy/). Then Get a Quote for coordination.',
  },
  {
    q: 'How much does it cost to relocate a pet from Dubai to India?',
    a: 'Dubai→India cost is destination-side (AQCS / Indian entry pathway) plus UAE export paperwork, freight, crate, and coordination — not the same stack as importing into the UAE. We do not assume corridor package bands. Corridor depth and FAQs belong on [/routes/dubai-to-india/](/routes/dubai-to-india/); general cost types stay on this guide; outbound journey framing on [/service/pet-relocation-from-dubai/](/service/pet-relocation-from-dubai/). WhatsApp +971504782999 for a route quote.',
  },
  {
    q: 'Is the cost guide the same as booking a relocation service?',
    a: 'This guide explains cost types. Read the tables here if you are budgeting yourself. The commercial jobs sit on [/service/pet-relocation-dubai/](/service/pet-relocation-dubai/), inbound [/service/pet-import-dubai/](/service/pet-import-dubai/), and outbound [/service/pet-export-dubai/](/service/pet-export-dubai/). Packages stay quoted. Confirm MOCCAE fees on the portal. WhatsApp +971504782999 when you are ready to book.',
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

/* FAQ accordion */
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
    mainEntity: [
      ...COST_PAA_FAQS.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: stripInternalMarkdownLinks(f.a) },
      })),
      {
        '@type': 'Question',
        name: 'Why is cargo so expensive compared to my own flight ticket?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Pets travel as manifest cargo, not as baggage. This means they ride in a climate-controlled, pressurized section of the cargo hold — not in the passenger cabin. The fee covers: dedicated cargo space (your pet\'s crate displaces freight that could have been sold), climate control and pressurization throughout the flight, ground handling at both airports (check-in, loading, unloading, customs), insurance and liability coverage for live animals, IATA-compliant handling procedures. A pet\'s cargo ticket costs more than your economy seat because it requires specialized infrastructure, staff, and safety protocols. The good news: it\'s the safest way for pets to fly long distances.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I get a cheaper quote from a general moving company?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sometimes — but rarely, and often with hidden costs. General movers (like ISS or Sparkle) treat pet relocation as a side business. Their quotes often exclude: MOCCAE permit fees ("that\'s a government fee, not our problem"), IATA crate costs ("you can buy that yourself"), customs clearance at destination ("you\'ll need to collect your pet from the airport"), post-arrival registration ("we only handle the flight"). By the time you add the missing pieces, the total usually exceeds our all-inclusive quote. Plus, a mover\'s priority is your furniture. Our priority is your pet. Every time.',
        },
      },
      {
        '@type': 'Question',
        name: 'What\'s the cheapest way to bring a pet to Dubai?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'An owner can file a low-risk move when the microchip, rabies vaccine, health certificate, and permit are already in order. The clinic, the airline, and MOCCAE still invoice their own steps. A missed document or a rejected crate can hold the pet or force a new booking. PawPilot is document guidance, quoted after we know the pet and the route. It is not a published package.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you offer payment plans?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'How you pay, and whether a move can be split, is written on the quote before you agree. This page does not publish a deposit percentage, a minimum amount, or a price-match promise.',
        },
      },
    ],
  }

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'How Much Does It Cost to Bring a Dog or Cat to Dubai? 2026 Price Breakdown',
    description: 'What changes a Dubai pet relocation quote in 2026: government fees checked on the MOCCAE portal, veterinary work, the crate, freight and coordination. Package totals are quoted, not printed as a from-price.',
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
    dateModified: '2026-10-16',
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
        title="Pet Relocation Cost Dubai | What Changes Your Quote"
        description="Understand the costs behind a Dubai pet move, including freight, crates, veterinary work and coordination. Learn how to compare itemised quotes."
        canonical={`${BASE_URL}/guides/pet-relocation-cost-dubai/`}
        ogType="article"
        jsonLd={[faqSchema, articleSchema, breadcrumbSchema]}
      />
      {/* ===== HERO ===== */}
      <Hero
        image="/images/cost-hero.jpg"
        imageAlt="Pet owner reviewing transparent Dubai pet relocation costs"
        eyebrow="Pet Relocation Guide"
        title="What affects the cost of pet relocation in Dubai"
        subtitle="A Dubai pet move is government, veterinary, freight, crate, handling and coordination — not one ticket. Contested MOCCAE fees are confirmed on the portal. Our package is quoted after eligibility."
        updated="Updated September 2026"
        primaryLabel="Get a managed-move quote"
        primaryClassName={STRONG_WA_CLASS}
        whatsappMessage={costGuideMsg}
        secondary={{ label: 'Pet relocation Dubai service', to: '/service/pet-relocation-dubai/' }}
        gateLine={GUIDE_SOFT_GATE}
      />

      {/* ===== SNIPPET + COST TYPES ===== */}
      <Section className="bg-white">
        <SnippetAnswer question={snippetQuestion} answer={snippetAnswer} />
        <div className="mb-8">
          <GuideDualPath
            diyNote="Keep reading the cost types and tables if you are budgeting the file yourself."
            moneyTo="/service/pet-relocation-dubai/"
            moneyLabel="Pet relocation Dubai"
            waMessage={costGuideMsg}
            waLabel="Get a managed-move quote"
            waClassName={STRONG_WA_CLASS}
            gateLine={GUIDE_SOFT_GATE}
          />
        </div>
        <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mb-4">
          What you actually pay — by cost type
        </h2>
        <p className="text-[#5A5A5A] max-w-3xl mb-8 leading-relaxed">
          How much it costs to relocate a pet in Dubai depends on six types, not a single airline ticket. Government and
          veterinary amounts are paid to the portal or clinic. Freight and crate follow the animal&apos;s size. Handling is
          the airport side. Coordination, the Dubai Pet Relocation package, is quoted after eligibility on{' '}
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
              MOCCAE import permit (valid 90 days) and arrival release. Published amounts have differed — confirm the live
              fee on the official portal. Municipality registration is a separate, small post-arrival step.
            </p>
          </Card>
          <Card>
            <div className="w-11 h-11 rounded-[14px] bg-[#E9ECFB] flex items-center justify-center mb-4">
              <PawPrint className="w-5 h-5 text-[#4F5BD5]" />
            </div>
            <h3 className="font-bold text-[#2A2A2A] mb-2">Veterinary</h3>
            <p className="text-sm text-[#5A5A5A] leading-relaxed">
              ISO microchip, rabies and core vaccines, health certificate, parasite treatment, and a titer test only when
              the origin country requires one. Clinic prices vary by country — we do not assume a UAE clinic tariff.
            </p>
          </Card>
          <Card>
            <div className="w-11 h-11 rounded-[14px] bg-[#E9ECFB] flex items-center justify-center mb-4">
              <Plane className="w-5 h-5 text-[#4F5BD5]" />
            </div>
            <h3 className="font-bold text-[#2A2A2A] mb-2">Freight</h3>
            <p className="text-sm text-[#5A5A5A] leading-relaxed">
              Manifest cargo is quoted per route and volumetric weight. Emirates publishes labelled animal-charge tiers of
              USD 500 / 650 / 800 (source: Emirates) — airline fees, not a freight quote.{' '}
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
              quoted after eligibility. Competitor from-bands are labelled market listings only, not our price.
            </p>
          </Card>
        </div>
        <p className="text-sm text-[#5A5A5A] mt-8 leading-relaxed">
          Questions: {siteConfig.email} or WhatsApp {siteConfig.phone}.
        </p>
      </Section>

      <GuideFunnelCta
        variant="mid"
        title="Cost types clear — check a managed move?"
        subtitle="This guide stays educational. Eligibility and a scoped quote sit on the service pages and WhatsApp. We do not assume package or government fee amounts here."
        eligibilityMessage={costGuideMsg}
        waLabel={CTA_MANAGED_QUOTE}
        waClassName={STRONG_WA_CLASS}
        gateLine={GUIDE_SOFT_GATE}
      />

      {/* ===== WHY COSTS VARY ===== */}
      <Section className="bg-white">
        <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mb-4">Why Pet Relocation Costs Vary So Much</h2>
        <h3 className="text-lg font-bold text-[#2A2A2A] mb-6">Four Factors That Determine Your Final Price</h3>
        <p className="text-[#5A5A5A] mb-10">No two pet moves cost the same. Here's why.</p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <div className="w-11 h-11 rounded-[14px] bg-[#E9ECFB] flex items-center justify-center mb-4">
              <Scale className="w-5 h-5 text-[#4F5BD5]" />
            </div>
            <h4 className="font-bold text-[#2A2A2A] mb-2">1. Your pet's size</h4>
            <p className="text-sm text-[#5A5A5A] leading-relaxed">
              Cargo fees are based on the crate's <strong>volumetric weight</strong> — not how much your pet actually weighs. A 40kg Labrador in a large crate costs significantly more than a 5kg cat in a small one. The crate itself costs more too.
            </p>
          </Card>
          <Card>
            <div className="w-11 h-11 rounded-[14px] bg-[#E9ECFB] flex items-center justify-center mb-4">
              <MapPin className="w-5 h-5 text-[#4F5BD5]" />
            </div>
            <h4 className="font-bold text-[#2A2A2A] mb-2">2. Your origin country</h4>
            <p className="text-sm text-[#5A5A5A] leading-relaxed">
              From the UK or EU, a rabies antibody test is not the usual inbound step. From India, Pakistan, or the Philippines, when a test is required, use a result of at least 0.5 IU/ml and a certificate valid for 365 days if the vaccine stays valid and continuous and no booster is given. See the{' '}<Link to="/guides/rabies-titer-test-dubai/" className="text-[#4F5BD5] font-medium hover:underline">rabies titer test guide</Link>. The clinic invoices that extra work. We do not publish a veterinary tariff.
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
            <h4 className="font-bold text-[#2A2A2A] mb-2">4. Your pet's documentation status</h4>
            <p className="text-sm text-[#5A5A5A] leading-relaxed">
              A pet that is already microchipped, with the rabies vaccine in the right order, skips those clinic steps. Starting from a first vaccine adds at least 21 days before travel, and a first vaccine or a gap needs at least 21 days before an antibody test. A missing document can mean refusal, a hold, or a return journey at the owner's expense.
            </p>
          </Card>
        </div>
      </Section>

      {/* ===== COMPLETE COST BREAKDOWN ===== */}
      <Section className="bg-[#F5F6FD]">
        <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mb-4">The Complete Cost Breakdown — Every Dirham Explained</h2>
        <p className="text-[#5A5A5A] max-w-3xl mb-10 leading-relaxed">
          Here's what you'll actually pay. These are real numbers based on our 2026 partner rates and government fee schedules. No estimates hidden behind "contact us for pricing."
        </p>

        {/* Government & Mandatory Fees */}
        <div className="mb-12">
          <h3 className="text-lg font-bold text-[#2A2A2A] mb-4 flex items-center gap-2">
            <Shield className="w-5 h-5 text-[#4F5BD5]" /> Government & Mandatory Fees
          </h3>
          <div className="overflow-x-auto">
            <table className="data-table min-w-[640px]">
              <thead>
                <tr>
                  <th>Fee</th>
                  <th>Cost (AED)</th>
                  <th>What It Covers</th>
                  <th>When You Pay</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>MOCCAE Import Permit</td><td>AED 200</td><td>One animal, on the MOCCAE page checked 22 September 2026. Valid 90 days from issuance. Confirm the payment screen.</td><td>Before travel</td></tr>
                <tr><td>MOCCAE release on arrival</td><td>AED 500 dog / AED 250 cat</td><td>Same check date. Veterinary release when the pet clears. Confirm the payment screen.</td><td>On arrival</td></tr>
                <tr><td>Cargo-handler invoice</td><td>On that invoice</td><td>Whoever files the bill of entry at DXB or DWC.</td><td>On arrival</td></tr>
                <tr><td>Dubai Municipality registration</td><td>Confirm on Aleef</td><td>Annual registration. Within 30 days of arrival.</td><td>After arrival</td></tr>
                <tr><td>Microchip, if the pet does not have one</td><td>Clinic invoice</td><td>ISO chip, implanted before the rabies vaccine.</td><td>Before travel</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-[#5A5A5A] mt-3 font-medium">MOCCAE permit and arrival-release fees are government charges — confirm the current amounts on the official portal. Customs, municipality registration and microchipping are additional.</p>
          <p className="text-sm text-[#5A5A5A] mt-2">
            Government fees are the same whichever coordinator you use. If a quote seems suspiciously low, they may be omitting a permit step or hiding a surcharge later.
          </p>
          <p className="text-xs text-[#8A8A8A] mt-3 leading-relaxed">
            MOCCAE amounts above were read on 22 September 2026. Cargo, the crate, and coordination are quoted for the pet and the date. Confirm municipality fees on Aleef before you apply.
          </p>
        </div>

        {/* Veterinary Costs */}
        <div className="mb-12">
          <h3 className="text-lg font-bold text-[#2A2A2A] mb-4 flex items-center gap-2">
            <PawPrint className="w-5 h-5 text-[#4F5BD5]" /> Veterinary Costs
          </h3>
          <div className="overflow-x-auto">
            <table className="data-table min-w-[560px]">
              <thead>
                <tr><th>Service</th><th>Who invoices it</th><th>Notes</th></tr>
              </thead>
              <tbody>
                <tr><td>ISO microchip and rabies vaccination</td><td>The clinic</td><td>The chip goes in before the rabies vaccine. A first vaccine, or a gap, needs at least 21 days before travel.</td></tr>
                <tr><td>Rabies antibody test</td><td>The clinic and the laboratory</td><td>When the origin requires it. A first vaccine or a gap needs at least 21 days before the sample. The laboratory sets the turnaround.</td></tr>
                <tr><td>Core vaccinations, if they are not current</td><td>The clinic</td><td>Dogs and cats need the vaccines that destination asks for. Confirm the list with the clinic.</td></tr>
                <tr><td>Health certificate and endorsement</td><td>The clinic and the endorsing office</td><td>Issued close to travel. An expired certificate is not accepted.</td></tr>
                <tr><td>Parasite treatment</td><td>The clinic</td><td>Internal and external treatment inside the window the destination states.</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-[#5A5A5A] mt-3 font-medium">
            There is no published veterinary total. Ask the clinic for its current fees before the appointment.
          </p>
        </div>

        {/* Travel Crate */}
        <div className="mb-12">
          <h3 className="text-lg font-bold text-[#2A2A2A] mb-4 flex items-center gap-2">
            <Package className="w-5 h-5 text-[#4F5BD5]" /> Travel Crate
          </h3>
          <div className="overflow-x-auto">
            <table className="data-table">
              <thead>
                <tr><th>Crate Size</th><th>Typical Pet</th><th>Cost (AED)</th></tr>
              </thead>
              <tbody>
                <tr><td>Small (up to 40cm)</td><td>Cat, small dog (Chihuahua, Pomeranian)</td><td>~110–300</td></tr>
                <tr><td>Medium (40–60cm)</td><td>Medium dog (Beagle, Corgi, Shiba Inu)</td><td>~225–900</td></tr>
                <tr><td>Large (60–80cm)</td><td>Large dog (Labrador, Golden Retriever)</td><td>~500–1,500</td></tr>
                <tr><td>XL (80cm+)</td><td>Extra-large dog (German Shepherd, Great Dane)</td><td>~900–2,000+</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-[#5A5A5A] mt-3">
            Crates must be <strong>IATA LAR-compliant</strong> — rigid, well-ventilated, with secure locking doors. We provide correctly sized, pre-labeled crates. Buying the wrong crate on Amazon is one of the most common (and expensive) mistakes we see.
          </p>
          <p className="mt-2 text-sm">
            <Link to="/guides/iata-pet-crate-requirements/" className="text-[#4F5BD5] font-medium hover:underline inline-flex items-center gap-1">
              IATA crate requirements and costs <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </p>
        </div>

        {/* Air Cargo / Flight Fees */}
        <div className="mb-12">
          <h3 className="text-lg font-bold text-[#2A2A2A] mb-4 flex items-center gap-2">
            <Plane className="w-5 h-5 text-[#4F5BD5]" /> Air Cargo / Flight Fees
          </h3>
          <div className="overflow-x-auto">
            <table className="data-table min-w-[560px]">
              <thead>
                <tr><th>Route Type</th><th>Who prices it</th><th>Notes</th></tr>
              </thead>
              <tbody>
                <tr><td>Short-haul (GCC, nearby Asia)</td><td>The airline, for that crate</td><td>Distance is shorter. The season and the crate volume still change the figure.</td></tr>
                <tr><td>Medium-haul (Europe, UK, Turkey)</td><td>The airline, for that crate</td><td>Confirm the carrier’s current live-animal product before you treat a passenger fare as pet travel.</td></tr>
                <tr><td>Long-haul (USA, Canada, Australia)</td><td>The airline, for that crate</td><td>Distance, crate volume and any connection are the usual reasons the freight is higher.</td></tr>
                <tr><td>In-cabin, where an airline still offers it</td><td>The airline, on that flight</td><td>Emirates cargo into Dubai is not an in-cabin product. Any Abu Dhabi cabin exception has a weight limit and must be confirmed on the current Etihad page.</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-[#5A5A5A] mt-3">
            Airlines usually charge freight on the crate’s volume, not only on the pet’s weight. A larger crate can cost more than a smaller one on the same route. Ask the carrier for the figure before you treat a range on the internet as your quote.
          </p>
          <p className="mt-2 text-sm">
            <Link to="/guides/emirates-pet-cargo/" className="text-[#4F5BD5] font-medium hover:underline inline-flex items-center gap-1">
              Emirates pet cargo — airline tiers vs freight quote <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </p>
        </div>

        {/* Dubai Pet Relocation Service Coordination Fee */}
        <div className="mb-12">
          <h3 className="text-lg font-bold text-[#2A2A2A] mb-4 flex items-center gap-2">
            <Users className="w-5 h-5 text-[#4F5BD5]" /> Dubai Pet Relocation coordination
          </h3>
          <p className="text-sm text-[#5A5A5A] mb-4">
            This is the coordination we quote for permits, paperwork, flight booking, partner coordination, and WhatsApp updates. The figure is quoted after eligibility, once we know the pet, the route and the month. We do not publish a from-price.
          </p>
          <div className="overflow-x-auto">
            <table className="data-table min-w-[560px]">
              <thead>
                <tr><th>Tier</th><th>Cost</th><th>What's Included</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>PawPilot</strong> (Essential)</td>
                  <td>Quoted after eligibility</td>
                  <td>Documentation, MOCCAE permit application, flight booking, basic email/WhatsApp support</td>
                </tr>
                <tr>
                  <td><strong>PawPartner</strong> (Premium)</td>
                  <td>Quoted after eligibility</td>
                  <td>+ Door-to-door pickup and delivery, IATA crate, vet coordination, WhatsApp updates during the move, photo updates</td>
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
            The quote names the coordination, and it separates government fees, the clinic, the airline and the van. We do not operate the airline. The people who handle the animal are the specialists booked for that move.
          </p>
          <p className="mt-2 text-sm">
            <Link to="/prices/" className="text-[#4F5BD5] font-medium hover:underline inline-flex items-center gap-1">
              See quoted packages on Prices <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </p>
        </div>

        {/* Total Estimated Cost Range */}
        <div className="mb-4">
          <h3 className="text-lg font-bold text-[#2A2A2A] mb-4">Total Estimated Cost Range (All-In)</h3>
          <p className="text-sm text-[#5A5A5A] mb-4">
            What changes the quote. These rows are not package prices. Coordination is quoted after we know the pet and the route.
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
                <tr><td><strong>India, Pakistan, or the Philippines</strong></td><td>Adds the antibody test when MOCCAE requires it.</td></tr>
                <tr><td><strong>Flat-faced breed in the heat window</strong></td><td>The airline may refuse cargo. A reroute is quoted first.</td></tr>
                <tr><td><strong>Owner files the permit</strong></td><td>Government, clinic, and airline invoices still apply.</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="mx-auto mt-8 max-w-xl text-center">
          <WhatsAppCta text="Get a managed-move quote for your corridor" fullWidth />
          <WhatsAppGate line={GUIDE_SOFT_GATE} className="mt-3" />
        </div>
      </Section>

      {/* ===== COST BY ROUTE ===== */}
      <Section className="bg-white">
        <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mb-10">Cost by Route — What You'll Pay from Your Country</h2>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card>
            <h3 className="text-lg font-bold text-[#2A2A2A] mb-3">UK to Dubai</h3>
            <p className="text-sm text-[#5A5A5A] mb-4 leading-relaxed">The easiest route. No quarantine. No titer test required — the UK is low-risk, so there is no RNATT to plan.</p>
            <ul className="text-sm text-[#5A5A5A] space-y-1 mb-4">
              <li><strong>Crate size</strong> sets the airline’s volumetric weight.</li>
              <li><strong>Airport:</strong> London Heathrow or Manchester, only if that desk accepts the crate.</li>
              <li><strong>Clock:</strong> rabies vaccine at least 21 days old, then the health certificate close to travel.</li>
              <li><strong>Permit:</strong> 90 days from issuance. The pet must arrive inside that window.</li>
            </ul>
            <p className="text-sm text-[#5A5A5A] leading-relaxed">
              The UK is treated as low-risk, so the usual file is the microchip, the rabies vaccine, a health certificate endorsed by an official veterinarian, and the MOCCAE permit. The airline confirms the cargo booking. We coordinate the file.
            </p>
            <p className="mt-3 text-sm">
              <Link to="/routes/uk-to-dubai/" className="text-[#4F5BD5] font-medium hover:underline inline-flex items-center gap-1">
                Read our full UK to Dubai guide <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </p>
          </Card>

          <Card>
            <h3 className="text-lg font-bold text-[#2A2A2A] mb-3">USA to Dubai</h3>
            <p className="text-sm text-[#5A5A5A] mb-4 leading-relaxed">Also low-risk. No titer test needed if the rabies vaccine is current.</p>
            <ul className="text-sm text-[#5A5A5A] space-y-1 mb-4">
              <li><strong>Distance</strong> from the US airport to Dubai changes the airline quote.</li>
              <li><strong>Endorsement:</strong> a USDA APHIS health certificate, on top of the clinic visit.</li>
              <li><strong>Crate size</strong> still sets volumetric weight.</li>
              <li><strong>Permit:</strong> the same 90-day MOCCAE window.</li>
            </ul>
            <p className="text-sm text-[#5A5A5A] leading-relaxed">
              The United States is treated as low-risk when the rabies vaccine is current. The extra step owners miss is the government endorsement of the health certificate. The airline prices the crate from the actual departure airport.
            </p>
          </Card>

          <Card>
            <h3 className="text-lg font-bold text-[#2A2A2A] mb-3">India to Dubai</h3>
            <p className="text-sm text-[#5A5A5A] mb-4 leading-relaxed">High-risk country. Titer required: use a result of at least 0.5 IU/ml and a certificate valid for 365 days if the vaccine stays valid and continuous and no booster is given.</p>
            <ul className="text-sm text-[#5A5A5A] space-y-1 mb-4">
              <li><strong>Antibody test</strong> when MOCCAE requires it: at least 0.5 IU/ml.</li>
              <li><strong>Certificate:</strong> 365 days if the vaccine stays valid and continuous and no booster is given.</li>
              <li><strong>Export papers</strong> from the Indian authority, close to travel.</li>
              <li><strong>Clinic invoice</strong> is separate. We do not publish a laboratory tariff.</li>
            </ul>
            <p className="text-sm text-[#5A5A5A] leading-relaxed">
              The sample goes to a laboratory the destination accepts. See the{' '}<Link to="/guides/rabies-titer-test-dubai/" className="text-[#4F5BD5] font-medium hover:underline">rabies titer test guide</Link>. Ask the clinic in your city whether it can draw the sample. A mismatched document can hold the pet at the owner’s expense.
            </p>
          </Card>

          <Card>
            <h3 className="text-lg font-bold text-[#2A2A2A] mb-3">Australia to Dubai</h3>
            <p className="text-sm text-[#5A5A5A] mb-4 leading-relaxed">Low-risk but long distance. High cargo costs.</p>
            <ul className="text-sm text-[#5A5A5A] space-y-1 mb-4">
              <li><strong>Export certificate</strong> from the Australian authority.</li>
              <li><strong>Distance</strong> from Sydney, Melbourne, Brisbane, or Perth.</li>
              <li><strong>Connection:</strong> only if the airline’s live-animal product uses one.</li>
              <li><strong>Permit:</strong> the same 90-day MOCCAE window on arrival.</li>
            </ul>
            <p className="text-sm text-[#5A5A5A] leading-relaxed">
              Australia is treated as low-risk for UAE entry, and the export certificate is still a separate Australian step. Confirm whether the itinerary is direct or connects. A direct passenger ticket is not cabin travel by default.
            </p>
          </Card>
        </div>

        <Card className="mb-8">
          <h3 className="text-lg font-bold text-[#2A2A2A] mb-3">Philippines to Dubai</h3>
          <p className="text-sm text-[#5A5A5A] mb-4 leading-relaxed">High-risk. Titer required: use a result of at least 0.5 IU/ml and a certificate valid for 365 days if the vaccine stays valid and continuous and no booster is given.</p>
          <ul className="text-sm text-[#5A5A5A] space-y-1 mb-4">
            <li><strong>Antibody test</strong> when required: at least 0.5 IU/ml, certificate valid 365 days if the vaccine stays valid and continuous and no booster is given.</li>
            <li><strong>Philippine export papers</strong> from the Bureau of Animal Industry.</li>
            <li><strong>UAE permit</strong> valid 90 days from issuance.</li>
            <li><strong>Crate size</strong> still sets the airline quote.</li>
          </ul>
          <p className="text-sm text-[#5A5A5A] leading-relaxed">
            The Philippines file needs the export step, the antibody test when MOCCAE asks for it, and the health certificate, then the UAE import permit. The quote names who presents that file at the cargo desk.
          </p>
        </Card>

        <div className="mx-auto max-w-xl text-center">
          <WhatsAppCta text="Get a managed-move quote for your route" fullWidth />
          <WhatsAppGate line={GUIDE_SOFT_GATE} className="mt-3" />
          <p className="mt-4 text-sm text-[#5A5A5A]">
            Quoted packages are on the{' '}
            <Link to="/prices/" className="font-semibold text-[#4F5BD5] hover:underline">
              prices page
            </Link>
            . The paid jobs are{' '}
            <Link to="/service/pet-relocation-dubai/" className="font-semibold text-[#4F5BD5] hover:underline">
              pet relocation Dubai
            </Link>
            ,{' '}
            <Link to="/service/pet-import-dubai/" className="font-semibold text-[#4F5BD5] hover:underline">
              pet import Dubai
            </Link>
            , and{' '}
            <Link to="/service/pet-export-dubai/" className="font-semibold text-[#4F5BD5] hover:underline">
              pet export Dubai
            </Link>
            .
          </p>
        </div>
      </Section>

      {/* ===== COST BY PET SIZE ===== */}
      <Section className="bg-[#F5F6FD]">
        <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mb-4">Cost by Pet Size — How Your Pet's Dimensions Affect Price</h2>
        <div className="overflow-x-auto mb-6">
          <table className="data-table min-w-[720px]">
            <thead>
              <tr>
                <th>Size Category</th>
                <th>Weight (kg)</th>
                <th>Typical Breeds</th>
                <th>Crate Size</th>
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
                <td>8–20kg</td>
                <td>Beagle, Corgi, Shiba Inu, French Bulldog, Cocker Spaniel</td>
                <td>Medium (40–60cm)</td>
                <td>Mid-size crate. Volumetric weight rises.</td>
              </tr>
              <tr>
                <td><strong>Large</strong></td>
                <td>20–35kg</td>
                <td>Labrador, Golden Retriever, Border Collie, Boxer</td>
                <td>Large (60–80cm)</td>
                <td>Large crate. Confirm the aircraft can take it.</td>
              </tr>
              <tr>
                <td><strong>Extra Large</strong></td>
                <td>35kg+</td>
                <td>German Shepherd, Great Dane, Rottweiler, Husky</td>
                <td>XL (80cm+)</td>
                <td>Extra-large crate. Some aircraft cannot take it.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="warning-box">
          <p className="text-sm text-[#2A2A2A]">
            <strong>Important:</strong> Airlines use <strong>volumetric weight</strong>, not actual weight. A large crate takes up more cargo space than a small one, even if your pet is lean. We measure your pet's length (nose to base of tail) and height (floor to top of head, ears included) to size the crate precisely. An oversized crate costs you more in freight. An undersized one gets rejected at check-in.
          </p>
        </div>
      </Section>

      {/* ===== HIDDEN COSTS ===== */}
      <Section className="bg-white">
        <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mb-4">Hidden Costs — What Competitors Don't Tell You</h2>
        <p className="text-[#5A5A5A] max-w-3xl mb-4 leading-relaxed">
          This is where most pet owners get burned. The quote looks reasonable. Then the extras arrive.
        </p>
        <p className="text-[#5A5A5A] mb-10">Here's what to watch for — and what we include upfront.</p>

        <h3 className="text-lg font-bold text-[#2A2A2A] mb-4">Common Hidden Fees in the Industry</h3>
        <div className="overflow-x-auto mb-10">
          <table className="data-table min-w-[720px]">
            <thead>
              <tr>
                <th>Hidden Cost</th>
                <th>Typical Amount (AED)</th>
                <th>Why It Happens</th>
                <th>How Dubai Pet Relocation Handles It</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Flight rebooking due to summer embargo</strong></td>
                <td>Quoted if the date changes</td>
                <td>Many airlines restrict pet cargo from 1 May to 30 September.</td>
                <td>We check the seasonal rule before a cargo request goes to the airline. A new booking is priced before you agree.</td>
              </tr>
              <tr>
                <td><strong>Refusal / re-export due to missing documents</strong></td>
                <td>Quoted if it happens</td>
                <td>A mismatched microchip or an expired certificate can mean refusal, holding, or a return journey, at the owner’s expense.</td>
                <td>We check the documents against the current list before they are submitted. What a delay on our side means is written in the service agreement.</td>
              </tr>
              <tr>
                <td><strong>Crate rejected at check-in</strong></td>
                <td>Quoted if it happens</td>
                <td>A crate that is the wrong size, the wrong material, or missing labels.</td>
                <td>The crate is measured on the animal and labelled before travel day.</td>
              </tr>
              <tr>
                <td><strong>Extended boarding if flight is canceled</strong></td>
                <td>Quoted before it is booked</td>
                <td>Weather, an airline change, or a missed connection.</td>
                <td>PawVIP includes contingency planning. Boarding is arranged when the route needs it. It is not a fixed number of free days.</td>
              </tr>
              <tr>
                <td><strong>Document translation</strong></td>
                <td>Quoted if the file needs it</td>
                <td>Some authorities ask for a translation.</td>
                <td>If a translation is required, it is named on the quote. It is not assumed to be inside every tier.</td>
              </tr>
              <tr>
                <td><strong>Customs "facilitation fee"</strong></td>
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
                <td><strong>Insurance upsell</strong></td>
                <td>Quoted only if you ask</td>
                <td>Cover for delay, veterinary cost or cancellation.</td>
                <td>We do not sell a named policy on this page. If you want cover, we say what can be arranged before you agree.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="warning-box mb-6">
          <h4 className="font-bold text-[#2A2A2A] mb-2 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-[#4F5BD5]" /> The Honest Truth About Quote Inflation
          </h4>
          <p className="text-sm text-[#5A5A5A] leading-relaxed">
            A quote that leaves out the crate, the airline, or the government fee looks lower than the move.
          </p>
          <p className="text-sm text-[#5A5A5A] leading-relaxed mt-2">
            The airline prices the crate. The clinic prices the certificate. MOCCAE prices the permit and the release. Those lines move when the pet, the date, or the route changes.
          </p>
          <p className="text-sm text-[#2A2A2A] leading-relaxed mt-2">
            The quote you receive names each line before you agree. If something on our side of the file needs to change, the service agreement says what happens next.
          </p>
        </div>

        <p className="text-sm">
          <Link to="/about/" className="text-[#4F5BD5] font-medium hover:underline inline-flex items-center gap-1">
            Why we're transparent about pricing <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </p>

        <div className="mx-auto mt-8 max-w-xl text-center">
          <WhatsAppCta text="Request an itemised managed-move quote" fullWidth />
          <WhatsAppGate line={GUIDE_SOFT_GATE} className="mt-3" />
        </div>
      </Section>

      {/* ===== DIY vs USING A SERVICE ===== */}
      <Section className="bg-[#EEF0FC]">
        <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mb-4">DIY vs. Using a Service — The Honest Comparison</h2>
        <p className="text-[#5A5A5A] max-w-3xl mb-10 leading-relaxed">
          An owner can file the permit and ask the airline for cargo. The steps below are still separate invoices.
        </p>

        <div className="grid lg:grid-cols-2 gap-8 mb-10">
          <Card>
            <h3 className="text-lg font-bold text-[#2A2A2A] mb-4">DIY Breakdown</h3>
            <div className="overflow-x-auto">
              <table className="data-table min-w-[640px]">
                <thead>
                  <tr><th>Step</th><th>What you do</th><th>Who invoices it</th><th>What can go wrong</th></tr>
                </thead>
                <tbody>
                  <tr><td>Clinic papers</td><td>Book a clinic that will issue the export file</td><td>The clinic</td><td>A vaccine dated before the microchip is not accepted.</td></tr>
                  <tr><td>MOCCAE import permit</td><td>Apply on the official portal</td><td>AED 200 on the page checked 22 September 2026</td><td>A wrong field can mean a new application. Confirm the payment screen.</td></tr>
                  <tr><td>Crate</td><td>Measure the animal and buy a crate the airline accepts</td><td>The supplier</td><td>A crate that is the wrong size can be refused on travel day.</td></tr>
                  <tr><td>Cargo</td><td>Ask the airline for a live-animal booking</td><td>The airline</td><td>A passenger seat is not a cargo booking.</td></tr>
                  <tr><td>Health certificate</td><td>Clinic visit, then the official endorsement</td><td>The clinic and the endorsing office</td><td>An expired certificate is not accepted.</td></tr>
                  <tr><td>Road legs</td><td>Book a vehicle that will carry the crate</td><td>The transport company</td><td>A normal taxi may refuse the crate.</td></tr>
                  <tr><td>Arrival</td><td>Present the file at the cargo terminal</td><td>MOCCAE release: AED 500 for a dog, AED 250 for a cat, on the same check date</td><td>A mismatch can hold the pet. The terminal does not publish a fixed clearance time.</td></tr>
                  <tr><td>Municipality registration</td><td>Aleef or Dubai Smart Services, within 30 days</td><td>Confirm on that channel</td><td>Late registration is the municipality’s own rule. Confirm any charge there.</td></tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-[#2A2A2A] font-medium mt-4">There is no published DIY total. Each provider invoices its own step.</p>
            <p className="text-sm text-[#5A5A5A] mt-1">The owner’s time is the calls, the portal, and the cargo desk.</p>
          </Card>

          <Card>
            <h3 className="text-lg font-bold text-[#2A2A2A] mb-4">Using Dubai Pet Relocation</h3>
            <p className="text-sm font-semibold text-[#2A2A2A] mb-3">What we handle:</p>
            <ul className="space-y-2 text-sm text-[#5A5A5A] mb-6">
              {[
                'The order of the MOCCAE permit and the papers it needs',
                'What the clinic must issue, and which date it must be issued',
                'Crate measurement against the animal and the airline limit',
                'The cargo request the airline confirms in writing',
                'A check of the file against the current list before it is submitted',
                'Who presents the file at DXB or DWC, named on the quote',
                'Whether delivery stops at the cargo desk or continues to the address',
                'What municipality registration still needs after arrival',
              ].map((item) => (
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
          <h3 className="text-lg font-bold mb-3">The Honest Verdict</h3>
          <p className="text-sm text-white/90 leading-relaxed mb-3">
            An owner can file the permit and book the cargo. The clinic, the airline, and MOCCAE still invoice their own steps.
          </p>
          <p className="text-sm text-white/90 leading-relaxed mb-3">
            A mismatched microchip, an expired certificate, or a crate the airline rejects can hold the pet or send it back, at the owner’s expense.
          </p>
          <p className="text-sm text-white/90 leading-relaxed">
            Coordination is the order of that file, and the person who presents it. The quote names the scope before you agree.
          </p>
        </Card>
      </Section>

      {/* ===== SEASONAL PRICING FACTORS ===== */}
      <Section className="bg-white">
        <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mb-10">Seasonal Pricing Factors — When You Move Matters</h2>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <Card>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-11 h-11 rounded-[14px] bg-[#E9ECFB] flex items-center justify-center">
                <Sun className="w-5 h-5 text-[#C0392B]" />
              </div>
              <h3 className="text-lg font-bold text-[#2A2A2A]">Summer Heat Embargo (May 1 – September 30)</h3>
            </div>
            <p className="text-sm text-[#5A5A5A] mb-4 leading-relaxed">
              From May 1 to September 30, ground temperatures in Dubai exceed 45°C. Most airlines suspend or heavily restrict live animal cargo.
            </p>
            <p className="text-sm font-semibold text-[#2A2A2A] mb-2">What this means for your cost:</p>
            <ul className="space-y-2 text-sm text-[#5A5A5A]">
              <li className="flex items-start gap-2"><AlertTriangle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /><span>A booked crate may need a new flight if the airline suspends live animals. The carrier prices that change.</span></li>
              <li className="flex items-start gap-2"><AlertTriangle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /><span>A road move inside the GCC is a different product from air cargo. It is quoted on its own.</span></li>
              <li className="flex items-start gap-2"><AlertTriangle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /><span>A charter is only discussed when the route and the pet justify it, and only with a figure before you agree.</span></li>
              <li className="flex items-start gap-2"><AlertTriangle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /><span>Waiting for a cooler month can mean boarding. That cost is confirmed before it is booked.</span></li>
            </ul>
            <p className="text-sm text-[#5A5A5A] mt-4 leading-relaxed">
              <strong>Brachycephalic breeds (Bulldogs, Pugs, Persian cats):</strong> Many airlines ban these breeds entirely from May through September, regardless of temperature. Some restrict them to October–April only. If you have a snub-nosed pet, plan your move for winter or budget for significant alternatives.
            </p>
          </Card>

          <Card>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-11 h-11 rounded-[14px] bg-[#E9ECFB] flex items-center justify-center">
                <Snowflake className="w-5 h-5 text-[#4F5BD5]" />
              </div>
              <h3 className="text-lg font-bold text-[#2A2A2A]">Peak Season (October–May)</h3>
            </div>
            <p className="text-sm text-[#5A5A5A] mb-4 leading-relaxed">
              October through May is peak relocation season. More flights available. More routing options. Lower risk of cancellation.
            </p>
            <p className="text-sm font-semibold text-[#2A2A2A] mb-2">Cost implications:</p>
            <ul className="space-y-2 text-sm text-[#5A5A5A]">
              <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /><span>Cargo rates are generally 10–15% lower than summer emergency rates</span></li>
              <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /><span>More airline options = competitive pricing</span></li>
              <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /><span>Earlier booking = better rates. Last-minute bookings in peak season cost more due to limited cargo space.</span></li>
            </ul>
            <p className="text-sm text-[#2A2A2A] font-medium mt-4">Our recommendation:</p>
            <p className="text-sm text-[#5A5A5A] leading-relaxed">
              If you're planning a move, book your pet's relocation 8–12 weeks in advance. The best rates and the best routing options go first.
            </p>
          </Card>
        </div>
      </Section>

      {/* ===== HOW TO GET ACCURATE QUOTE ===== */}
      <Section className="bg-[#F5F6FD]">
        <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mb-4">How to Get an Accurate, Personalized Quote</h2>
        <p className="text-[#5A5A5A] max-w-3xl mb-8 leading-relaxed">
          Every pet is different. Every route is different. Every season is different. A guide can give you the cost drivers. A quote uses the pet, the route and the date, and we reply during published hours.
        </p>

        <div className="grid lg:grid-cols-2 gap-8 mb-10">
          <Card>
            <h3 className="text-lg font-bold text-[#2A2A2A] mb-4">Here's what we need to price your move accurately:</h3>
            <ol className="space-y-3 text-sm text-[#5A5A5A]">
              <li className="flex items-start gap-3"><span className="w-6 h-6 rounded-full bg-[#4F5BD5] text-white text-xs font-bold flex items-center justify-center shrink-0">1</span><span><strong>Pet type and breed</strong> (dog or cat? Labrador or Persian?)</span></li>
              <li className="flex items-start gap-3"><span className="w-6 h-6 rounded-full bg-[#4F5BD5] text-white text-xs font-bold flex items-center justify-center shrink-0">2</span><span><strong>Weight and approximate dimensions</strong> (for crate sizing)</span></li>
              <li className="flex items-start gap-3"><span className="w-6 h-6 rounded-full bg-[#4F5BD5] text-white text-xs font-bold flex items-center justify-center shrink-0">3</span><span><strong>Moving from</strong> (city and country)</span></li>
              <li className="flex items-start gap-3"><span className="w-6 h-6 rounded-full bg-[#4F5BD5] text-white text-xs font-bold flex items-center justify-center shrink-0">4</span><span><strong>Moving to</strong> (Dubai, or elsewhere in UAE?)</span></li>
              <li className="flex items-start gap-3"><span className="w-6 h-6 rounded-full bg-[#4F5BD5] text-white text-xs font-bold flex items-center justify-center shrink-0">5</span><span><strong>Planned move date</strong> (or "as soon as possible")</span></li>
              <li className="flex items-start gap-3"><span className="w-6 h-6 rounded-full bg-[#4F5BD5] text-white text-xs font-bold flex items-center justify-center shrink-0">6</span><span><strong>Current documentation status</strong> (microchipped? Vaccinated? Titer test done?)</span></li>
            </ol>
          </Card>
          <Card>
            <h3 className="text-lg font-bold text-[#2A2A2A] mb-4">What a quote conversation covers:</h3>
            <ul className="space-y-3 text-sm text-[#5A5A5A]">
              <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /><span>A realistic cost range</span></li>
              <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /><span>A clear timeline</span></li>
              <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /><span>The right service tier recommendation</span></li>
              <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /><span>An honest assessment of any seasonal or breed restrictions</span></li>
              <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /><span>No pressure. No follow-up spam. Just the information you need.</span></li>
            </ul>
          </Card>
        </div>

        <div id="whatsapp-cta" className="mx-auto max-w-xl text-center">
          <WhatsAppCta text="Get a managed-move quote" fullWidth />
          <WhatsAppGate line={GUIDE_SOFT_GATE} className="mt-3" />
          <p className="mt-4 text-sm text-[#5A5A5A]">
            <Link to="/prices/" className="font-semibold text-[#4F5BD5] hover:underline">
              See quoted packages
            </Link>
            {' · '}
            <Link to="/service/pet-relocation-dubai/" className="font-semibold text-[#4F5BD5] hover:underline">
              Pet relocation Dubai
            </Link>
            {' · '}
            <Link to="/service/pet-import-dubai/" className="font-semibold text-[#4F5BD5] hover:underline">
              Pet import Dubai
            </Link>
          </p>
        </div>
      </Section>

      {/* ===== FAQ ===== */}
      <Section className="bg-white">
        <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mb-10">Frequently Asked Questions</h2>
        <div className="max-w-3xl">
          {COST_PAA_FAQS.map((f) => (
            <FAQItem
              key={f.q}
              question={f.q}
              answer={<p><LinkedText text={f.a} /></p>}
            />
          ))}
          <FAQItem
            question="Why is cargo so expensive compared to my own flight ticket?"
            answer={
              <>
                <p>Pets travel as <strong>manifest cargo</strong>, not as baggage. This means they ride in a climate-controlled, pressurized section of the cargo hold — not in the passenger cabin. The fee covers:</p>
                <ul className="mt-2 space-y-1 text-sm text-[#5A5A5A]">
                  <li>Dedicated cargo space (your pet's crate displaces freight that could have been sold)</li>
                  <li>Climate control and pressurization throughout the flight</li>
                  <li>Ground handling at both airports (check-in, loading, unloading, customs)</li>
                  <li>Insurance and liability coverage for live animals</li>
                  <li>IATA-compliant handling procedures</li>
                </ul>
                <p className="mt-3">A pet's cargo ticket costs more than your economy seat because it requires specialized infrastructure, staff, and safety protocols. The good news: it's the safest way for pets to fly long distances.</p>
              </>
            }
          />
          <FAQItem
            question="Can I get a cheaper quote from a general moving company?"
            answer={
              <>
                <p>Sometimes — but rarely, and often with hidden costs. General movers (like ISS or Sparkle) treat pet relocation as a side business. Their quotes often exclude:</p>
                <ul className="mt-2 space-y-1 text-sm text-[#5A5A5A]">
                  <li>MOCCAE permit fees ("that's a government fee, not our problem")</li>
                  <li>IATA crate costs ("you can buy that yourself")</li>
                  <li>Customs clearance at destination ("you'll need to collect your pet from the airport")</li>
                  <li>Post-arrival registration ("we only handle the flight")</li>
                </ul>
                <p className="mt-3">By the time you add the missing pieces, the total usually exceeds our all-inclusive quote. Plus, a mover's priority is your furniture. Our priority is your pet. Every time.</p>
                <p className="mt-3">
                  <Link to="/services/" className="text-[#4F5BD5] font-medium hover:underline inline-flex items-center gap-1">
                    See our full service comparison <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </p>
              </>
            }
          />
          <FAQItem
            question="What's the cheapest way to bring a pet to Dubai?"
            answer={
              <>
                <p>An owner can file a low-risk move when the microchip, rabies vaccine, health certificate, and permit are already in order. The clinic, the airline, and MOCCAE still invoice their own steps.</p>
                <p className="mt-3">A missed document or a rejected crate can hold the pet or force a new booking. The cost of that delay is whatever the kennel and the airline charge.</p>
                <p className="mt-3"><strong>PawPilot</strong> is document guidance. It is quoted after we know the pet and the route. It is not a published package, and it does not book the flight by itself.</p>
              </>
            }
          />
          <FAQItem
            question="Do you offer payment plans?"
            answer={
              <p>How you pay, and whether a move can be split, is written on the quote before you agree. This page does not publish a deposit percentage, a minimum amount, or a price-match promise.</p>
            }
          />
        </div>
      </Section>

      <GuideFunnelCta
        variant="end"
        title="Ready to book a managed move?"
        eligibilityMessage={costGuideMsg}
        waLabel={CTA_MANAGED_QUOTE}
        waClassName={STRONG_WA_CLASS}
        gateLine={GUIDE_SOFT_GATE}
      />

      {/* ===== DISCLAIMER ===== */}
      <Section className="bg-[#F5F6FD]">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs text-[#8A8A8A] leading-relaxed mb-3">
            Last updated: June 2026. Prices are based on current partner rates and government fee schedules. Cargo and airline fees fluctuate with fuel prices and seasonal demand. Your personalized quote will reflect real-time pricing for your specific route and dates.
          </p>
          <p className="text-xs text-[#8A8A8A] leading-relaxed">
            Dubai Pet Relocation is a pet relocation coordination service. We coordinate with vetted partners — veterinarians, cargo handlers, ground transport teams — to manage every step of your pet's journey. We guide you through MOCCAE import requirements and work with vetted relocation partners.
          </p>
        </div>
      </Section>
    </div>
  )
}
