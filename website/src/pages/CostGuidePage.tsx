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
import { getWhatsAppUrl, BASE_URL } from '../lib/seo.ts'

const costGuideMsg = 'Hi, I saw your cost guide and want a personalized quote for relocating my [dog/cat] from [country] to Dubai.'

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
    className={`inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#25D366] text-white rounded-2xl font-semibold text-sm hover:bg-[#1ebe57] transition-colors ${fullWidth ? 'w-full' : ''} ${className}`}
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
      {
        '@type': 'Question',
        name: 'Do dogs need to be quarantined in Dubai?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. If all documentation is complete and correct — MOCCAE import permit, ISO microchip, rabies vaccination, and health certificate — pets do not require mandatory quarantine in Dubai. This is one of the UAE\'s main advantages. However, incomplete documentation can result in conditional quarantine at the owner\'s expense, costing AED 8,500 or more.',
        },
      },
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
          text: 'The absolute cheapest way is DIY from a low-risk country like the UK or EU, with a small pet, during off-peak season, with all documentation already complete. That could cost as little as AED 5,400. But "cheapest" rarely means "best value." The savings of doing it yourself are often wiped out by: one missed document (quarantine = AED 8,500+), one wrong crate (rebooking = AED 2,000+), 20+ hours of your time (what\'s your hourly rate?), the stress of managing five different providers. For most pet owners, our PawPilot tier (AED 1,500–2,500 service fee) covers the documentation and flight booking — eliminating the biggest error risks while keeping costs reasonable.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you offer payment plans?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. We accept payment via credit card, bank transfer, and Tabby (buy now, pay later). For moves over AED 10,000, we can split payment into two installments: 50% deposit to lock your booking and start permits, 50% due 7 days before travel. We also offer a price match guarantee: show us a comparable quote from a licensed competitor, and we\'ll match or beat it — while including the hidden fees they probably left out.',
        },
      },
    ],
  }

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'How Much Does It Cost to Bring a Dog or Cat to Dubai? 2026 Price Breakdown',
    description: 'Real pet relocation costs for Dubai in 2026. Itemized breakdown of government fees, veterinary costs, air cargo, travel crates, and service coordination fees. Route-specific prices from UK, USA, India, Australia, and Philippines.',
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
    dateModified: '2026-06-25',
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
        title="Pet Relocation Cost Dubai 2026 | Transparent Price Guide"
        description="Complete 2026 cost guide for pet relocation to Dubai. Transparent breakdown of government fees, vet costs, cargo shipping, and our service fee."
        keywords="pet relocation cost Dubai, dog relocation cost, cat relocation cost, pet transport price Dubai, how much to relocate pet to Dubai"
        canonical={`${BASE_URL}/guides/pet-relocation-cost-dubai/`}
        ogType="article"
        jsonLd={[faqSchema, articleSchema, breadcrumbSchema]}
      />
      {/* ===== HERO ===== */}
      <Hero
        image="/images/cost-hero.jpg"
        imageAlt="Pet owner reviewing transparent Dubai pet relocation costs"
        eyebrow="Pet Relocation Guide"
        title="How Much Does It Cost to Bring a Dog or Cat to Dubai? 2026 Price Breakdown"
        subtitle="Bringing a pet to Dubai costs AED 8,000–25,000, around AED 12,000 typical. We publish every cost, line by line — before you ever message us."
        updated="Updated June 2026"
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
              From the UK or EU? No rabies titer test needed. From India, Pakistan, or the Philippines? You'll need a titer test, a 90-day wait, and often more veterinary prep. That adds AED 1,500–2,500.
            </p>
          </Card>
          <Card>
            <div className="w-11 h-11 rounded-[14px] bg-[#E9ECFB] flex items-center justify-center mb-4">
              <Sun className="w-5 h-5 text-[#C0392B]" />
            </div>
            <h4 className="font-bold text-[#2A2A2A] mb-2">3. Your travel season</h4>
            <p className="text-sm text-[#5A5A5A] leading-relaxed">
              Summer is complicated. From June to September, many airlines restrict or ban pet cargo due to heat. Brachycephalic breeds face additional airline bans. Off-season rerouting, ground transport, or extended boarding can add AED 2,000–5,000.
            </p>
          </Card>
          <Card>
            <div className="w-11 h-11 rounded-[14px] bg-[#E9ECFB] flex items-center justify-center mb-4">
              <FileCheck className="w-5 h-5 text-[#4F5BD5]" />
            </div>
            <h4 className="font-bold text-[#2A2A2A] mb-2">4. Your pet's documentation status</h4>
            <p className="text-sm text-[#5A5A5A] leading-relaxed">
              Already microchipped and vaccinated? You'll save AED 300–600. Starting from scratch? Budget for the full veterinary timeline. Missing one document can mean your pet is refused entry, confiscated, or re-exported — at your expense (boarding/re-flight costs can run into the thousands).
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
                <tr><td>MOCCAE Import Permit</td><td>Verify on portal</td><td>Official approval to bring your pet into the UAE. Mandatory. Valid 30 days from issuance. Confirm the current fee on the official MOCCAE portal — published amounts have differed.</td><td>Before travel</td></tr>
                <tr><td>MOCCAE Release Fee (on arrival)</td><td>Verify on portal</td><td>Veterinary release/inspection fee paid when your pet clears at the cargo terminal. Confirm the current amount on the official portal.</td><td>On arrival</td></tr>
                <tr><td>Dubai Customs Clearance / Bill of Entry</td><td>500–1,000</td><td>Agent handling at DXB or DWC cargo terminal.</td><td>On arrival</td></tr>
                <tr><td>Dubai Municipality Registration</td><td>~10</td><td>Annual pet registration via the Aleef app.</td><td>Within 30 days of arrival</td></tr>
                <tr><td>Municipality Microchipping (if not done)</td><td>~50</td><td>15-digit ISO chip implantation at government centers.</td><td>Pre-travel</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-[#5A5A5A] mt-3 font-medium">MOCCAE permit and arrival-release fees are government charges — confirm the current amounts on the official portal. Customs, municipality registration and microchipping are additional.</p>
          <p className="text-sm text-[#5A5A5A] mt-2">
            Government fees are the same whichever coordinator you use. If a quote seems suspiciously low, they may be omitting a permit step or hiding a surcharge later.
          </p>
          <p className="text-xs text-[#8A8A8A] mt-3 leading-relaxed">
            Last verified: 4 September 2026. Cargo and partner prices are indicative ranges. Confirm current MOCCAE and municipality fees on the official portals before you apply — your personalized quote reflects live figures for your route and dates.
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
                <tr><th>Service</th><th>Cost (AED)</th><th>Notes</th></tr>
              </thead>
              <tbody>
                <tr><td>ISO Microchip + Rabies Vaccination</td><td>300–600</td><td>Microchip must be implanted <em>before</em> the rabies vaccine. Both must be ≥21 days before travel.</td></tr>
                <tr><td>Rabies Titer Test (RNATT)</td><td>500–1,200</td><td>Only required for high-risk countries. Blood sample ≥21 days after rabies vaccine. Results take 2–4 weeks.</td></tr>
                <tr><td>Core Vaccinations (if not current)</td><td>100–200</td><td>Dogs: DHPPIL. Cats: FVRCP.</td></tr>
                <tr><td>International Health Certificate + Endorsement</td><td>400–1,500</td><td>Issued by an accredited government vet within 10 days of travel. Cost varies by country.</td></tr>
                <tr><td>Antiparasitic Treatments</td><td>50–150</td><td>Internal (deworming) and external (Fipronil/Permethrin) within 14 days of arrival.</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-[#5A5A5A] mt-3 font-medium">
            Veterinary total: AED 1,350–3,650 (low-risk, fully documented pet) to AED 2,850–4,650 (high-risk, starting from scratch)
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
                <tr><th>Route Type</th><th>Estimated Cost (AED)</th><th>Notes</th></tr>
              </thead>
              <tbody>
                <tr><td>Short-haul (GCC, nearby Asia)</td><td>3,000–5,000</td><td>Shorter flights, lower fuel surcharges</td></tr>
                <tr><td>Medium-haul (Europe, UK, Turkey)</td><td>5,000–8,000</td><td>Most common routes. Emirates SkyCargo dominates.</td></tr>
                <tr><td>Long-haul (USA, Canada, Australia)</td><td>7,000–12,000+</td><td>Distance + fuel + size = higher cost.</td></tr>
                <tr><td>In-cabin (Etihad to Abu Dhabi only, ≤8kg)</td><td>Confirm at booking. Expired 2026 promo was ~USD 399. USD 1,500 = Estimated only</td><td>Not a current standard fee. Not available to Dubai. Eligibility: ≤8 kg incl. carrier.</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-[#5A5A5A] mt-3">
            Cargo fees are charged by <strong>volumetric weight</strong> — a formula using crate length × width × height. A large dog in a big crate can easily hit 8,000+ AED in freight alone. This is why crate size matters so much.
          </p>
        </div>

        {/* Dubai Pet Relocation Service Coordination Fee */}
        <div className="mb-12">
          <h3 className="text-lg font-bold text-[#2A2A2A] mb-4 flex items-center gap-2">
            <Users className="w-5 h-5 text-[#4F5BD5]" /> Dubai Pet Relocation Service Coordination Fee
          </h3>
          <p className="text-sm text-[#5A5A5A] mb-4">
            This is what we charge to handle everything — permits, paperwork, flight booking, partner coordination, and WhatsApp updates at every step.
          </p>
          <div className="overflow-x-auto">
            <table className="data-table min-w-[560px]">
              <thead>
                <tr><th>Tier</th><th>Cost (AED)</th><th>What's Included</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>PawPilot</strong> (Essential)</td>
                  <td>1,500–2,500</td>
                  <td>Documentation, MOCCAE permit application, flight booking, basic email/WhatsApp support</td>
                </tr>
                <tr>
                  <td><strong>PawPartner</strong> (Premium)</td>
                  <td>3,000–5,000</td>
                  <td>+ Door-to-door pickup and delivery, IATA crate, vet coordination, WhatsApp updates during the move, photo updates</td>
                </tr>
                <tr>
                  <td><strong>PawVIP</strong> (Coordination)</td>
                  <td>5,000–8,000</td>
                  <td>+ Personal handler assigned, real-time tracking, video updates at every checkpoint, comprehensive travel insurance, priority rebooking if flights change</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-[#5A5A5A] mt-3">
            <strong>What's different about us:</strong> We tell you exactly who our partners are — the vet clinics, the cargo handlers, the ground transport teams. We don't pretend we own an airline. We just know which ones to trust, and we manage every interaction so you don't have to chase five different phone numbers.
          </p>
          <p className="mt-2 text-sm">
            <Link to="/services/" className="text-[#4F5BD5] font-medium hover:underline inline-flex items-center gap-1">
              See our pet relocation packages <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </p>
        </div>

        {/* Total Estimated Cost Range */}
        <div className="mb-4">
          <h3 className="text-lg font-bold text-[#2A2A2A] mb-4">Total Estimated Cost Range (All-In)</h3>
          <div className="overflow-x-auto">
            <table className="data-table">
              <thead>
                <tr><th>Scenario</th><th>Total (AED)</th></tr>
              </thead>
              <tbody>
                <tr><td><strong>Small cat from UK/EU</strong> (low-risk, PawPilot)</td><td>8,000–11,000</td></tr>
                <tr><td><strong>Medium dog from UK/EU</strong> (low-risk, PawPartner)</td><td>12,000–16,000</td></tr>
                <tr><td><strong>Large dog from USA</strong> (low-risk, PawPartner)</td><td>15,000–20,000</td></tr>
                <tr><td><strong>Any pet from high-risk country</strong> (India, Pakistan, Philippines) with titer test</td><td>14,000–22,000</td></tr>
                <tr><td><strong>Brachycephalic breed with summer rerouting</strong></td><td>18,000–25,000+</td></tr>
                <tr><td><strong>DIY from UK/EU</strong> (no service fee)</td><td>5,400–8,500</td></tr>
                <tr><td><strong>DIY from high-risk country</strong></td><td>8,500–14,500</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-8 text-center">
          <WhatsAppCta text="Not Sure Which Tier Fits Your Move? WhatsApp Us — We'll Match You in 2 Minutes" fullWidth className="sm:w-auto sm:inline-flex" />
        </div>
      </Section>

      {/* ===== COST BY ROUTE ===== */}
      <Section className="bg-white">
        <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mb-10">Cost by Route — What You'll Pay from Your Country</h2>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card>
            <h3 className="text-lg font-bold text-[#2A2A2A] mb-3">UK to Dubai</h3>
            <p className="text-sm text-[#5A5A5A] mb-4 leading-relaxed">The easiest route. No quarantine. No titer test. No 90-day wait.</p>
            <ul className="text-sm text-[#5A5A5A] space-y-1 mb-4">
              <li><strong>Small cat:</strong> AED 8,000–11,000</li>
              <li><strong>Medium dog:</strong> AED 12,000–16,000</li>
              <li><strong>Large dog:</strong> AED 15,000–20,000</li>
              <li><strong>Timeline:</strong> 4–6 weeks from first microchip to reunion</li>
            </ul>
            <p className="text-sm text-[#5A5A5A] leading-relaxed">
              The UK is a low-risk country, so your pet only needs the microchip, rabies vaccine (≥21 days old), health certificate, and MOCCAE permit. We handle the DEFRA export endorsement and Emirates SkyCargo booking from London Heathrow or Manchester.
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
              <li><strong>Small cat:</strong> AED 10,000–14,000</li>
              <li><strong>Medium dog:</strong> AED 14,000–18,000</li>
              <li><strong>Large dog:</strong> AED 16,000–22,000</li>
              <li><strong>Timeline:</strong> 6–8 weeks</li>
            </ul>
            <p className="text-sm text-[#5A5A5A] leading-relaxed">
              From the US, the main cost driver is distance. Cargo from New York, Los Angeles, or Chicago runs higher than from London. We also coordinate the USDA APHIS health certificate endorsement, which adds a step most owners don't know about.
            </p>
          </Card>

          <Card>
            <h3 className="text-lg font-bold text-[#2A2A2A] mb-3">India to Dubai</h3>
            <p className="text-sm text-[#5A5A5A] mb-4 leading-relaxed">High-risk country. Titer test required. 90-day wait mandatory.</p>
            <ul className="text-sm text-[#5A5A5A] space-y-1 mb-4">
              <li><strong>Small cat:</strong> AED 12,000–16,000</li>
              <li><strong>Medium dog:</strong> AED 16,000–20,000</li>
              <li><strong>Large dog:</strong> AED 18,000–25,000</li>
              <li><strong>Timeline:</strong> Minimum 4 months from scratch</li>
            </ul>
            <p className="text-sm text-[#5A5A5A] leading-relaxed">
              The titer test (AED 500–1,200) and 90-day waiting period are non-negotiable. The blood sample must be processed at a WOAH/ISO 17025 accredited lab. We work with vets in Mumbai, Delhi, and Bangalore who understand the UAE export requirements. One wrong document and your pet gets quarantined at your expense.
            </p>
          </Card>

          <Card>
            <h3 className="text-lg font-bold text-[#2A2A2A] mb-3">Australia to Dubai</h3>
            <p className="text-sm text-[#5A5A5A] mb-4 leading-relaxed">Low-risk but long distance. High cargo costs.</p>
            <ul className="text-sm text-[#5A5A5A] space-y-1 mb-4">
              <li><strong>Small cat:</strong> AED 12,000–16,000</li>
              <li><strong>Medium dog:</strong> AED 16,000–22,000</li>
              <li><strong>Large dog:</strong> AED 20,000–25,000+</li>
              <li><strong>Timeline:</strong> 6–8 weeks</li>
            </ul>
            <p className="text-sm text-[#5A5A5A] leading-relaxed">
              Australia's strict export health certificate adds complexity. The flight distance drives cargo costs up significantly. Most pets route through Singapore or directly on Emirates from Sydney/Melbourne/Perth.
            </p>
          </Card>
        </div>

        <Card className="mb-8">
          <h3 className="text-lg font-bold text-[#2A2A2A] mb-3">Philippines to Dubai</h3>
          <p className="text-sm text-[#5A5A5A] mb-4 leading-relaxed">High-risk. Titer test + 90-day wait required.</p>
          <ul className="text-sm text-[#5A5A5A] space-y-1 mb-4">
            <li><strong>Small cat:</strong> AED 12,000–16,000</li>
            <li><strong>Medium dog:</strong> AED 15,000–20,000</li>
            <li><strong>Large dog:</strong> AED 18,000–24,000</li>
            <li><strong>Timeline:</strong> Minimum 4 months from scratch</li>
          </ul>
          <p className="text-sm text-[#5A5A5A] leading-relaxed">
            The Philippines is a popular origin for Dubai's large Filipino expat community. We coordinate the Bureau of Animal Industry export permit, titer test, and Philippine health certificate — then handle the UAE-side import permit and customs clearance.
          </p>
        </Card>

        <div className="text-center">
          <WhatsAppCta text="Get an Exact Quote for Your Route — WhatsApp Us Your Pet's Details" fullWidth className="sm:w-auto sm:inline-flex" />
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
                <th>Total Cost Range (AED)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Small</strong></td>
                <td>Up to 8kg</td>
                <td>Chihuahua, Pomeranian, Shih Tzu, Dachshund, most cats</td>
                <td>Small (up to 40cm)</td>
                <td>8,000–12,000</td>
              </tr>
              <tr>
                <td><strong>Medium</strong></td>
                <td>8–20kg</td>
                <td>Beagle, Corgi, Shiba Inu, French Bulldog, Cocker Spaniel</td>
                <td>Medium (40–60cm)</td>
                <td>12,000–16,000</td>
              </tr>
              <tr>
                <td><strong>Large</strong></td>
                <td>20–35kg</td>
                <td>Labrador, Golden Retriever, Border Collie, Boxer</td>
                <td>Large (60–80cm)</td>
                <td>15,000–20,000</td>
              </tr>
              <tr>
                <td><strong>Extra Large</strong></td>
                <td>35kg+</td>
                <td>German Shepherd, Great Dane, Rottweiler, Husky</td>
                <td>XL (80cm+)</td>
                <td>18,000–25,000+</td>
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
                <td>2,000–5,000</td>
                <td>Airlines cancel pet cargo May 1 – September 30. Competitors book, then charge you to reroute.</td>
                <td>We check seasonal restrictions <em>before</em> booking. If a change is needed, we rebook at no extra coordination fee.</td>
              </tr>
              <tr>
                <td><strong>Refusal / re-export due to missing documents</strong></td>
                <td>thousands</td>
                <td>One wrong microchip number or expired certificate. Missing one document can mean your pet is refused entry, confiscated, or re-exported — at your expense (boarding/re-flight costs can run into the thousands).</td>
                <td>We check every document three times. We know the current MOCCAE forms. Where an error on our side causes a delay, we&apos;ll make it right — the specifics are set out in your service agreement.</td>
              </tr>
              <tr>
                <td><strong>Crate rejected at check-in</strong></td>
                <td>500–1,500 + new crate cost</td>
                <td>Non-IATA crate, wrong size, missing labels.</td>
                <td>We provide certified, correctly sized, pre-labeled crates. No surprises at the airport.</td>
              </tr>
              <tr>
                <td><strong>Extended boarding if flight is canceled</strong></td>
                <td>200–400/day</td>
                <td>Weather, airline error, missed connections.</td>
                <td>We include 48 hours of contingency boarding in our PawPartner and PawVIP tiers.</td>
              </tr>
              <tr>
                <td><strong>Document translation</strong></td>
                <td>200–500</td>
                <td>Some origin countries require Arabic translation.</td>
                <td>Included in our PawPartner and PawVIP service fees.</td>
              </tr>
              <tr>
                <td><strong>Customs "facilitation fee"</strong></td>
                <td>300–800</td>
                <td>Unofficial charges at some cargo terminals.</td>
                <td>We work with accredited agents only. No under-the-table fees. Ever.</td>
              </tr>
              <tr>
                <td><strong>Destination-side delivery charge</strong></td>
                <td>500–1,500</td>
                <td>Some companies quote only to the airport.</td>
                <td>PawPartner and PawVIP include door-to-door delivery. We tell you exactly what's included.</td>
              </tr>
              <tr>
                <td><strong>Insurance upsell</strong></td>
                <td>500–2,000</td>
                <td>Sold at the last minute, often with vague coverage.</td>
                <td>We explain insurance options upfront in plain language. No jargon. No pressure.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="warning-box mb-6">
          <h4 className="font-bold text-[#2A2A2A] mb-2 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-[#4F5BD5]" /> The Honest Truth About Quote Inflation
          </h4>
          <p className="text-sm text-[#5A5A5A] leading-relaxed">
            We've read the reviews. "From changing quotes, to adding extra charges... we are now over £3,000 over the original quote." — a real pet-relocation customer.
          </p>
          <p className="text-sm text-[#5A5A5A] leading-relaxed mt-2">
            That happens when companies give you a lowball estimate to win your business, then add "unforeseen" costs later. The airline fee was higher than expected. The crate was bigger than estimated. The permit took longer.
          </p>
          <p className="text-sm text-[#2A2A2A] leading-relaxed mt-2">
            At Dubai Pet Relocation, we give you a <strong>range</strong> based on your specific pet, route, and season. If the final cost falls within that range, you pay what we quoted. Where an error on our side causes a delay, we'll make it right — the specifics are set out in your service agreement.
          </p>
        </div>

        <p className="text-sm">
          <Link to="/about/" className="text-[#4F5BD5] font-medium hover:underline inline-flex items-center gap-1">
            Why we're transparent about pricing <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </p>

        <div className="mt-8 text-center">
          <WhatsAppCta text="Worried About Hidden Fees? WhatsApp Us for a Fully Itemized Quote" fullWidth className="sm:w-auto sm:inline-flex" />
        </div>
      </Section>

      {/* ===== DIY vs USING A SERVICE ===== */}
      <Section className="bg-[#EEF0FC]">
        <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mb-4">DIY vs. Using a Service — The Honest Comparison</h2>
        <p className="text-[#5A5A5A] max-w-3xl mb-10 leading-relaxed">
          Can you relocate your pet to Dubai without a company? Yes. Should you? Let's look at the numbers and the reality.
        </p>

        <div className="grid lg:grid-cols-2 gap-8 mb-10">
          <Card>
            <h3 className="text-lg font-bold text-[#2A2A2A] mb-4">DIY Breakdown</h3>
            <div className="overflow-x-auto">
              <table className="data-table min-w-[640px]">
                <thead>
                  <tr><th>Step</th><th>What You Do</th><th>Cost (AED)</th><th>Risk</th></tr>
                </thead>
                <tbody>
                  <tr><td>Find a vet who knows UAE export requirements</td><td>Research, call, verify</td><td>300–600</td><td>Many vets have never done a UAE export. One wrong vaccine date = rejected permit.</td></tr>
                  <tr><td>Apply for MOCCAE import permit</td><td>Online portal, forms, follow-up</td><td>~200</td><td>One wrong field = 2-week delay or denial.</td></tr>
                  <tr><td>Buy IATA crate</td><td>Research, measure, order</td><td>500–2,000</td><td>Non-compliant crate = refused at check-in. No refund on the flight.</td></tr>
                  <tr><td>Book cargo flight with airline</td><td>Call cargo department, submit documents</td><td>3,000–12,000</td><td>Reservation agents often get pet-specific rules wrong.</td></tr>
                  <tr><td>Prepare health certificate</td><td>Vet visit + government endorsement</td><td>400–1,500</td><td>Must be within 10 days of travel. Expired = invalid.</td></tr>
                  <tr><td>Arrange ground transport to/from airports</td><td>Taxi or pet taxi</td><td>200–500</td><td>Most taxis won't take pets.</td></tr>
                  <tr><td>Clear customs in Dubai</td><td>Go to cargo terminal, queue, paperwork</td><td>500–1,000</td><td>3–6 hours at DXB cargo. Arabic documentation may be required.</td></tr>
                  <tr><td>Register pet with Dubai Municipality</td><td>Aleef app, vet visit, paperwork</td><td>~60</td><td>Must be done within 30 days. Fines apply for late registration.</td></tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-[#2A2A2A] font-medium mt-4">DIY total: AED 5,400–8,500 (low-risk, experienced) to AED 8,500–14,500 (high-risk, learning as you go)</p>
            <p className="text-sm text-[#5A5A5A] mt-1">DIY time investment: 20–40 hours of research, phone calls, form filling, and coordination.</p>
          </Card>

          <Card>
            <h3 className="text-lg font-bold text-[#2A2A2A] mb-4">Using Dubai Pet Relocation</h3>
            <p className="text-sm font-semibold text-[#2A2A2A] mb-3">What we handle:</p>
            <ul className="space-y-2 text-sm text-[#5A5A5A] mb-6">
              {[
                'MOCCAE permit application and tracking',
                'Vet partner coordination (we know which vets understand UAE export rules)',
                'IATA crate sizing, supply, and labeling',
                'Cargo flight booking with pet-specific confirmation in writing',
                'Document triple-check before submission',
                'Real-time WhatsApp updates at every step',
                'Customs clearance at DXB/DWC (you don\'t go to the cargo terminal — we do)',
                'Door-to-door delivery to your new home',
                'Post-arrival municipality registration guidance',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-[#2A2A2A] font-medium">Dubai Pet Relocation total: AED 8,000–25,000 depending on route, size, and tier</p>
            <p className="text-sm text-[#5A5A5A] mt-1">Your time investment: 2–3 hours (initial consultation, a few document uploads, pickup/delivery coordination)</p>
          </Card>
        </div>

        <Card className="bg-[#4F5BD5] text-white border-none">
          <h3 className="text-lg font-bold mb-3">The Honest Verdict</h3>
          <p className="text-sm text-white/90 leading-relaxed mb-3">
            DIY is possible. If you're detail-oriented, have 20+ free hours, and are comfortable navigating government portals and airline cargo departments, you can save AED 2,000–5,000.
          </p>
          <p className="text-sm text-white/90 leading-relaxed mb-3">
            But the error rate is high. The stress is extreme. And the hidden costs of a mistake — quarantine, rebooking, missed flights — often exceed our service fee.
          </p>
          <p className="text-sm text-white/90 leading-relaxed">
            We exist because your time and your pet's safety are worth more than the coordination fee. Most of our customers tried DIY first, got overwhelmed, and called us. We don't judge them. We just fix it.
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
              <li className="flex items-start gap-2"><AlertTriangle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /><span>If your pet is already booked and the embargo hits, rerouting costs AED 2,000–5,000</span></li>
              <li className="flex items-start gap-2"><AlertTriangle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /><span>Alternative: Ground transport from nearby countries (GCC) adds AED 1,500–3,000</span></li>
              <li className="flex items-start gap-2"><AlertTriangle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /><span>Alternative: In-cabin pet nanny (very small pets only) adds AED 5,000–10,000</span></li>
              <li className="flex items-start gap-2"><AlertTriangle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /><span>Alternative: Private charter (for high-value or urgent moves) adds AED 15,000–50,000+</span></li>
              <li className="flex items-start gap-2"><AlertTriangle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /><span>Waiting it out: Extended boarding at our partner facility costs AED 200–400/day</span></li>
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
          Every pet is different. Every route is different. Every season is different. A guide can give you a range. A 5-minute WhatsApp conversation gives you a firm quote.
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
            <h3 className="text-lg font-bold text-[#2A2A2A] mb-4">What you'll get back in 15 minutes:</h3>
            <ul className="space-y-3 text-sm text-[#5A5A5A]">
              <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /><span>A realistic cost range</span></li>
              <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /><span>A clear timeline</span></li>
              <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /><span>The right service tier recommendation</span></li>
              <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /><span>An honest assessment of any seasonal or breed restrictions</span></li>
              <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /><span>No pressure. No follow-up spam. Just the information you need.</span></li>
            </ul>
          </Card>
        </div>

        <div id="whatsapp-cta" className="text-center">
          <WhatsAppCta text="Get Your Exact Quote — WhatsApp Us Now" fullWidth className="sm:w-auto sm:inline-flex" />
          <div className="flex flex-col sm:flex-row gap-3 justify-center mt-4">
            <WhatsAppCta text="Chat With Our Pet Relocation Team — No Obligation" fullWidth className="sm:w-auto sm:inline-flex bg-[#4F5BD5] hover:bg-[#3A45B0]" />
            <WhatsAppCta text="Questions About Your Pet's Move? We're on WhatsApp" fullWidth className="sm:w-auto sm:inline-flex bg-[#4F5BD5] hover:bg-[#4a7a5e]" />
          </div>
        </div>
      </Section>

      {/* ===== FAQ ===== */}
      <Section className="bg-white">
        <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mb-10">Frequently Asked Questions</h2>
        <div className="max-w-3xl">
          <FAQItem
            question="Do dogs need to be quarantined in Dubai?"
            answer={
              <>
                <p>No. If all documentation is complete and correct — MOCCAE import permit, ISO microchip, rabies vaccination, and health certificate — pets do not require mandatory quarantine in Dubai. This is one of the UAE's main advantages.</p>
                <p className="mt-3 text-[#5A5A5A]">
                  However, with incomplete documentation the real risk is that your pet is refused entry, confiscated, or re-exported — at your expense (boarding/re-flight costs can run into the thousands). This is why we triple-check every document before your pet travels.
                </p>
                <p className="mt-3">
                  <Link to="/guides/uae-pet-import-requirements/" className="text-[#4F5BD5] font-medium hover:underline inline-flex items-center gap-1">
                    Read our full UAE import requirements guide <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </p>
              </>
            }
          />
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
                <p>The absolute cheapest way is DIY from a low-risk country like the UK or EU, with a small pet, during off-peak season, with all documentation already complete. That could cost as little as AED 5,400.</p>
                <p className="mt-3">But "cheapest" rarely means "best value." The savings of doing it yourself are often wiped out by:</p>
                <ul className="mt-2 space-y-1 text-sm text-[#5A5A5A]">
                  <li>One missed document (refusal, confiscation, or re-export at your expense = thousands)</li>
                  <li>One wrong crate (rebooking = AED 2,000+)</li>
                  <li>20+ hours of your time (what's your hourly rate?)</li>
                  <li>The stress of managing five different providers</li>
                </ul>
                <p className="mt-3">For most pet owners, our <strong>PawPilot tier</strong> (AED 1,500–2,500 service fee) covers the documentation and flight booking — eliminating the biggest error risks while keeping costs reasonable.</p>
              </>
            }
          />
          <FAQItem
            question="Do you offer payment plans?"
            answer={
              <p>Yes. We accept payment via credit card, bank transfer, and Tabby (buy now, pay later). For moves over AED 10,000, we can split payment into two installments: 50% deposit to lock your booking and start permits, 50% due 7 days before travel. We also offer a <strong>price match guarantee</strong>: show us a comparable quote from a licensed competitor, and we'll match or beat it — while including the hidden fees they probably left out.</p>
            }
          />
        </div>
      </Section>

      {/* ===== FINAL CTA ===== */}
      <section className="relative overflow-hidden bg-[#4F5BD5] text-white section-padding">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Ready to Know Your Exact Cost?</h2>
          <p className="text-white/90 max-w-2xl mx-auto mb-4 leading-relaxed">
            You've read the breakdown. You know the ranges. You know what drives the price. Now let's get specific.
          </p>
          <p className="text-white font-semibold mb-2">One WhatsApp message. One 15-minute conversation. One firm, itemized quote.</p>
          <p className="text-white/80 mb-2">No forms. No phone calls. No "we'll get back to you in 24–48 hours."</p>
          <p className="text-white/80 mb-8">Just a real human on WhatsApp, looking at your pet's details, and telling you exactly what you'll pay — and why.</p>
          <p className="text-white font-medium mb-8">Trusted relocation guidance — get your quote first, then decide.</p>

          <div id="whatsapp-cta-final">
            <WhatsAppCta text="Get Your Exact Quote — WhatsApp Us Now" fullWidth className="sm:w-auto sm:inline-flex" />
          </div>
        </div>
      </section>

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
