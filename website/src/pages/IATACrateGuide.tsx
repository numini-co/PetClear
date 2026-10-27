import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Plane,
  Ruler,
  Shield,
  AlertTriangle,
  ChevronDown,
  ChevronUp,
  XCircle,
  CheckCircle,
  DollarSign,
  Clock,
  Wind,
  PawPrint,
  ExternalLink,
} from 'lucide-react'
import SEOHead from '../components/SEOHead.tsx'
import Hero from '../components/Hero.tsx'
import Breadcrumb from '../components/Breadcrumb.tsx'
import LinkedText from '../components/LinkedText.tsx'
import GuideFunnelCta from '../components/GuideFunnelCta.tsx'
import RelatedLinks from '../components/RelatedLinks.tsx'
import { stripInternalMarkdownLinks } from '../lib/linkedText.ts'
import { BASE_URL } from '../lib/seo.ts'
import { CTA_CHECK_MOVE, CTA_MANAGED_QUOTE, waEligibility } from '../lib/conversionCopy.ts'

const STRONG_WA =
  'inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#0B6B3A] px-6 py-3.5 text-sm font-semibold text-white shadow-lg ring-1 ring-black/10 transition hover:bg-[#085530] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:w-auto'

const CRATE_PAID = [
  "Measure your pet and match an IATA crate to the airline's rules",
  'Crate sourced to size, with metal fasteners, bowls and Live Animal labels',
  'Cargo or cabin booking held only against a crate the airline will accept',
  'MOCCAE import permit timing (valid 90 days from issuance)',
  'Airport handover and customs clearance through to your door',
] as const

const CRATE_WA = waEligibility({
  need: 'pet type and breed, weight, measured length and height if known, route, travel month, and whether crate supply is needed',
})
import GuideToc from '../components/GuideToc.tsx'

/* ─── FAQ accordion helper ─── */
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

/* ─── Page ─── */
export default function IATACrateGuide() {
  const title = 'IATA Approved Dog Crate Rules | Sizing for UAE Flights'
  const description =
    'IATA approved dog crate: a hard shell, metal door and fasteners, ventilation and sizing. The airline makes the final acceptance. Check if we can size it.'
  const canonical = `${BASE_URL}/guides/iata-pet-crate-requirements/`
  const ogImage = `${BASE_URL}/assets/og-crate-guide.jpg`

  const faqData = [
    {
      question: 'What is an IATA approved dog crate?',
      answer:
        'An IATA approved dog crate is a rigid crate built to the IATA Live Animals Regulations (LAR) container standard, sized so the dog can stand, turn and lie down, with a metal door, secure fasteners and ventilation. IATA does not certify crate brands, and the airline accepts or refuses the crate on the day.',
    },
    {
      question: 'Are pet travel crates airline-approved?',
      answer:
        'The airline approves the shipment, not a crate brand. A crate that matches IATA size and hardware can be accepted, but snub-nosed breeds, heat embargoes and bolt quality can still fail at the desk. Confirm the carrier notes before you book. If you book a managed move, we measure the pet and match the crate to the airline before the flight is held.',
    },
    {
      question: 'Which dog crates are airline-approved?',
      answer:
        'Crates that pass cargo checks are a rigid shell with a metal door, metal nuts and bolts, no wheels and the correct size. Soft carriers, wire crates, folding crates and homemade boxes fail. The airline still accepts or refuses the shipment on the day. If you book a managed move, we measure the pet and match the crate to the airline before the flight is held.',
    },
    {
      question: 'Where can I buy IATA approved dog crates?',
      answer:
        'Buy from pet-travel suppliers or specialty retailers that sell rigid IATA-style crates in the size your dog actually measures. Prioritise correct length and height, and the hardware, over brand claims. Dubai and origin-city pet stores and aviation suppliers often stock them. Verify the model against the airline notes before flight day. If you book a managed move, we measure the pet and match the crate to the airline before the flight is held.',
    },
    {
      question: 'Can I use a soft carrier for my pet\'s flight to Dubai?',
      answer: 'Soft carriers, fabric bags and collapsible carriers are not permitted for cargo-hold travel to Dubai. IATA Live Animal Regulations (LAR) require hard-shell plastic or wooden crates with metal doors and ventilation on all four sides. Soft carriers are only acceptable for in-cabin travel with small cats and dogs under 8kg, and even then not every airline allows them.',
    },
    {
      question: 'How do I measure my dog for an IATA crate?',
      answer: 'Measure your dog standing in a natural position. (A) Length: from nose tip to base of tail. (B) Height: from floor to top of head or ears (whichever is higher). (C) Width: across the widest point of the shoulders. The crate must be: Length = A + 10–15 cm, Height = B + 10 cm, Width = C x 2 (allowing the dog to turn around comfortably). Take those measurements from the formula above. A video-call measurement is part of a booked managed move.',
    },
    {
      question: 'What if my crate is 1 cm too small?',
      answer: 'Airlines and cargo handlers strictly enforce IATA crate sizing. A crate that is even 1 cm too small will be refused at check-in. The airline or ground handler will not accept the risk. You must use a larger crate or your pet will be offloaded. Dubai Pet Relocation always recommends adding a 2–3 cm safety margin to all measurements.',
    },
    {
      question: 'Are wire crates or wooden crates allowed?',
      answer: 'Wire crates and homemade wooden crates are generally not accepted for international cargo travel. IATA LAR requires a single-piece hard plastic shell with a metal door and secure locking mechanism. Some airlines accept custom wooden crates for very large animals, but these must meet strict construction standards including internal frames, metal mesh ventilation, and no exposed screws.',
    },
    {
      question: 'Does Emirates SkyCargo have special crate requirements?',
      answer: 'Emirates SkyCargo requires IATA-compliant crates with a metal nut-and-bolt system securing the top and bottom halves. Plastic clips alone are not sufficient. The crate must have water and food bowls attached to the door, and a "Live Animal" sticker and arrow labels on all sides. Brachycephalic breeds require one size larger than standard.',
    },
    {
      question: 'How long before travel should I start crate familiarization?',
      answer: 'Start crate familiarization at least 2–3 weeks before travel. For anxious pets, 4–6 weeks is better. The process involves introducing the crate as a safe space, feeding meals inside, adding familiar blankets, and gradually increasing the time your pet spends inside with the door closed.',
    },
    {
      question: 'Is it better to buy or rent a travel crate?',
      answer: 'Buying suits multiple trips or a young pet that may grow. Hiring can suit a one-time relocation and avoids storage. Crate supply or hire can be arranged inside a managed move, and the cost is quoted after eligibility.',
    },
    {
      question: 'Can I put my pet\'s favorite toy in the crate?',
      answer: 'Small, soft toys are generally allowed, but hard toys, balls, chews, and items with small parts are prohibited because they can become choking hazards or damage the crate interior. Attach a familiar blanket or T-shirt with your scent. Do not include rawhide, bones, or food bowls with loose items.',
    },
  ]

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqData.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: typeof faq.answer === 'string' ? stripInternalMarkdownLinks(faq.answer) : faq.question,
      },
    })),
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'IATA Pet Travel Crate Requirements', item: canonical },
    ],
  }

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    image: ogImage,
    author: { '@type': 'Organization', name: 'Dubai Pet Relocation', url: BASE_URL },
    publisher: { '@type': 'Organization', name: 'Dubai Pet Relocation', logo: { '@type': 'ImageObject', url: `${BASE_URL}/assets/logo.png` } },
    datePublished: '2025-01-15',
    dateModified: '2026-10-27',
    mainEntityOfPage: { '@type': 'WebPage', '@id': canonical },
  }

  const schemas = [faqSchema, breadcrumbSchema, articleSchema]

  const meta = {
    title,
    description,
    canonical,
    ogImage,
    ogType: 'article',
  }

  return (
    <>
      <SEOHead meta={meta} schemas={schemas} />
      <Breadcrumb items={[{ label: 'Guides', path: '/guides/' }, { label: 'IATA Pet Crate Requirements' }]} />
<div className="mx-auto max-w-[900px] px-5 pt-8"><GuideToc items={[{ href: '#what-lar-is', label: 'What makes a crate IATA approved' }, { href: '#measure-your-pet', label: 'Measure your pet' }]} /></div>

      {/* Hero */}
      <Hero
        image="/images/guide-iata-crate.jpg"
        imageAlt="A dog resting in a hard-sided travel crate. IATA publishes the sizing rules. It does not approve a crate brand."
        eyebrow="Pet Relocation Guide"
        title="IATA pet crate requirements: choosing and measuring a travel crate"
        subtitle="The wrong crate can get your pet refused at the airport. IATA LAR sizing, construction rules, and airline-specific policies for safe travel to Dubai."
        updated="Updated October 2026"
        primaryClassName={STRONG_WA}
        whatsappMessage={CRATE_WA}
      />

      {/* What is IATA LAR */}
      <section id="what-lar-is" className="section-padding scroll-mt-24 bg-[#F5F6FD]">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mb-4">
                What makes a crate IATA approved?
              </h2>
              <p className="text-[#5A5A5A] text-base leading-relaxed mb-6">
                Airlines apply the <strong>IATA Live Animal Regulations (LAR)</strong> to crate design, sizing, ventilation, labeling, and documentation. IATA publishes that standard. It does not approve a crate brand. The airline accepts or refuses the crate on the day.
              </p>
              <p className="text-[#5A5A5A] text-base leading-relaxed mb-6">
                Airlines flying to Dubai, including Emirates, Etihad and flydubai, require all pets in cargo to travel in IATA LAR-compliant crates. Failure to meet these standards means your pet will be refused at check-in, potentially causing missed flights, extra fees, and severe stress for your animal. A managed dog move that includes crate sizing is on the{' '}
                <Link to="/service/dog-relocation-dubai/" className="font-semibold text-[#4F5BD5] hover:underline">
                  dog relocation service
                </Link>
                .
              </p>
              <div className="bg-white rounded-[20px] shadow-sm p-6">
                <h3 className="text-lg font-bold text-[#2A2A2A] mb-3 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-[#4F5BD5]" />
                  Why IATA Compliance Matters
                </h3>
                <ul className="space-y-2 text-sm text-[#5A5A5A]">
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /><span>Airlines will refuse non-compliant crates at check-in</span></li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /><span>Ground handlers will not accept pets in unsafe containers</span></li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /><span>Non-compliant crates risk injury, escape, or death during transit</span></li>
                </ul>
              </div>
            </div>
            <div className="bg-white rounded-[20px] shadow-sm p-6 lg:p-8">
              <h3 className="text-xl font-bold text-[#2A2A2A] mb-5">IATA Crate Construction Checklist</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#4F5BD5] text-white flex items-center justify-center text-xs font-bold shrink-0">✓</div>
                  <div>
                    <p className="font-semibold text-[#2A2A2A] text-sm">Hard plastic shell</p>
                    <p className="text-xs text-[#5A5A5A]">Single-piece rigid construction. No soft or flexible panels.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#4F5BD5] text-white flex items-center justify-center text-xs font-bold shrink-0">✓</div>
                  <div>
                    <p className="font-semibold text-[#2A2A2A] text-sm">Metal door with secure latch</p>
                    <p className="text-xs text-[#5A5A5A]">Must be metal mesh or bars with a locking mechanism that cannot be opened by the animal.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#4F5BD5] text-white flex items-center justify-center text-xs font-bold shrink-0">✓</div>
                  <div>
                    <p className="font-semibold text-[#2A2A2A] text-sm">Ventilation on all 4 sides</p>
                    <p className="text-xs text-[#5A5A5A]">At least 16% of total wall area must be open for air circulation.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#4F5BD5] text-white flex items-center justify-center text-xs font-bold shrink-0">✓</div>
                  <div>
                    <p className="font-semibold text-[#2A2A2A] text-sm">No wheels (or wheels removed)</p>
                    <p className="text-xs text-[#5A5A5A]">Wheels must be removed or taped securely to prevent movement during handling.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#4F5BD5] text-white flex items-center justify-center text-xs font-bold shrink-0">✓</div>
                  <div>
                    <p className="font-semibold text-[#2A2A2A] text-sm">Food and water bowls</p>
                    <p className="text-xs text-[#5A5A5A]">Attachable bowls must be fitted to the door interior, accessible from outside.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#4F5BD5] text-white flex items-center justify-center text-xs font-bold shrink-0">✓</div>
                  <div>
                    <p className="font-semibold text-[#2A2A2A] text-sm">Leak-proof floor</p>
                    <p className="text-xs text-[#5A5A5A]">Absorbent bedding or mat must cover the floor. No straw, hay, or wood shavings.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#4F5BD5] text-white flex items-center justify-center text-xs font-bold shrink-0">✓</div>
                  <div>
                    <p className="font-semibold text-[#2A2A2A] text-sm">Live Animal labels</p>
                    <p className="text-xs text-[#5A5A5A]">"Live Animal" sticker and upright arrow labels on all four sides and top.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <GuideFunnelCta
        variant="mid"
        title="Crate rules clear? Check if we can manage the move"
        subtitle="This guide stays educational. Eligibility and crate-led booking sit on the service pages and WhatsApp. We do not assume crate or airline fee amounts."
        eligibilityMessage={CRATE_WA}
        waLabel={CTA_CHECK_MOVE}
        waClassName={STRONG_WA}
      />

      {/* Sizing Formula */}
      <section id="measure-your-pet" className="section-padding scroll-mt-24 bg-white">
        <div id="sizing-formula" className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mb-4">
              Crate sizing formula: getting it exactly right
            </h2>
            <p className="text-[#5A5A5A] text-base leading-relaxed">
              The most common reason pets are refused at check-in is incorrect crate size. Use this formula to ensure your pet has enough space to stand, turn, and lie down comfortably.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="bg-[#F5F6FD] rounded-[20px] p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-[#4F5BD5]/10 flex items-center justify-center mx-auto mb-4">
                <Ruler className="w-6 h-6 text-[#4F5BD5]" />
              </div>
              <h3 className="text-lg font-bold text-[#2A2A2A] mb-2">Length</h3>
              <p className="text-sm text-[#5A5A5A] leading-relaxed mb-3">Measure from nose tip to base of tail.</p>
              <div className="bg-white rounded-xl p-3 text-sm font-semibold text-[#4F5BD5]">
                Crate Length = A + 10–15 cm
              </div>
            </div>
            <div className="bg-[#F5F6FD] rounded-[20px] p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-[#4F5BD5]/10 flex items-center justify-center mx-auto mb-4">
                <Ruler className="w-6 h-6 text-[#4F5BD5]" />
              </div>
              <h3 className="text-lg font-bold text-[#2A2A2A] mb-2">Height</h3>
              <p className="text-sm text-[#5A5A5A] leading-relaxed mb-3">Measure from floor to top of head or ears (whichever is higher).</p>
              <div className="bg-white rounded-xl p-3 text-sm font-semibold text-[#4F5BD5]">
                Crate Height = B + 10 cm
              </div>
            </div>
            <div className="bg-[#F5F6FD] rounded-[20px] p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-[#C89F5A]/10 flex items-center justify-center mx-auto mb-4">
                <Ruler className="w-6 h-6 text-[#C89F5A]" />
              </div>
              <h3 className="text-lg font-bold text-[#2A2A2A] mb-2">Width</h3>
              <p className="text-sm text-[#5A5A5A] leading-relaxed mb-3">Measure across the widest point of the shoulders.</p>
              <div className="bg-white rounded-xl p-3 text-sm font-semibold text-[#C89F5A]">
                Crate Width = C × 2
              </div>
            </div>
          </div>

          <div className="warning-box max-w-3xl mx-auto">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-[#C89F5A] shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-[#2A2A2A] mb-1">No Margin for Error</p>
                <p className="text-[#5A5A5A] text-sm leading-relaxed">
                  Airlines and ground handlers will measure your crate at check-in. If it is too small, even by 1 cm, your pet will be refused. Always add a 2–3 cm safety margin to all measurements. For brachycephalic breeds, IATA requires a container 10% larger than the standard calculation. See{' '}
                  <Link to="/guides/snub-nosed-dogs-flying-uae/" className="font-semibold text-[#4F5BD5] hover:underline">
                    snub-nosed dog flying rules for the UAE
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Not Allowed */}
      <section className="section-padding bg-[#F5F6FD]">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mb-8 text-center">
            What Is NOT Allowed for Cargo Travel
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="bg-white rounded-[20px] shadow-sm p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-[#C9453A]/10 flex items-center justify-center mx-auto mb-4">
                <XCircle className="w-6 h-6 text-[#C9453A]" />
              </div>
              <h3 className="text-lg font-bold text-[#2A2A2A] mb-2">Soft Carriers</h3>
              <p className="text-sm text-[#5A5A5A] leading-relaxed">Fabric, nylon, or collapsible soft carriers are prohibited for cargo. Only for in-cabin (small pets) on select airlines.</p>
            </div>
            <div className="bg-white rounded-[20px] shadow-sm p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-[#C9453A]/10 flex items-center justify-center mx-auto mb-4">
                <XCircle className="w-6 h-6 text-[#C9453A]" />
              </div>
              <h3 className="text-lg font-bold text-[#2A2A2A] mb-2">Wire Crates</h3>
              <p className="text-sm text-[#5A5A5A] leading-relaxed">Folding metal wire crates are not accepted. They lack the structural integrity and ventilation security required by IATA.</p>
            </div>
            <div className="bg-white rounded-[20px] shadow-sm p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-[#C9453A]/10 flex items-center justify-center mx-auto mb-4">
                <XCircle className="w-6 h-6 text-[#C9453A]" />
              </div>
              <h3 className="text-lg font-bold text-[#2A2A2A] mb-2">Wooden Crates</h3>
              <p className="text-sm text-[#5A5A5A] leading-relaxed">Homemade wooden crates are rejected. Custom wooden crates only accepted if professionally built to IATA specs with metal frames.</p>
            </div>
            <div className="bg-white rounded-[20px] shadow-sm p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-[#C9453A]/10 flex items-center justify-center mx-auto mb-4">
                <XCircle className="w-6 h-6 text-[#C9453A]" />
              </div>
              <h3 className="text-lg font-bold text-[#2A2A2A] mb-2">Homemade Crates</h3>
              <p className="text-sm text-[#5A5A5A] leading-relaxed">DIY plastic tubs, modified boxes, or improvised containers are strictly forbidden by all airlines flying to Dubai.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Airline-Specific Requirements */}
      <section className="section-padding bg-white">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mb-8 text-center">
            Airline-Specific Crate Requirements
          </h2>

          <div className="overflow-x-auto mb-10">
            <table className="data-table min-w-[720px]">
              <thead>
                <tr>
                  <th>Airline</th>
                  <th>Crate Type</th>
                  <th>Locking</th>
                  <th>Brachycephalic Rule</th>
                  <th>Special Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="font-medium">Emirates SkyCargo</td>
                  <td>IATA hard plastic or custom wooden</td>
                  <td>Metal nuts & bolts required</td>
                  <td>One size larger crate</td>
                  <td>Water & food bowls mandatory; Live Animal labels required</td>
                </tr>
                <tr>
                  <td className="font-medium">Etihad Cargo</td>
                  <td>IATA hard plastic</td>
                  <td>Secure locking; metal preferred</td>
                  <td>One size larger crate</td>
                  <td>Confirm health certificate timing and sedation rules with Etihad Cargo</td>
                </tr>
                <tr>
                  <td className="font-medium">flydubai</td>
                  <td>IATA hard plastic</td>
                  <td>Standard IATA latch</td>
                  <td>May refuse during summer</td>
                  <td>Smaller aircraft; limited large crate capacity</td>
                </tr>
                <tr>
                  <td className="font-medium">Lufthansa Cargo</td>
                  <td>IATA hard plastic</td>
                  <td>Metal reinforcement preferred</td>
                  <td>One size larger crate</td>
                  <td>Excellent for European routing to Dubai</td>
                </tr>
                <tr>
                  <td className="font-medium">KLM Cargo</td>
                  <td>IATA hard plastic</td>
                  <td>Standard IATA latch</td>
                  <td>One size larger crate</td>
                  <td>Strong European hub; good for connecting flights</td>
                </tr>
                <tr>
                  <td className="font-medium">Turkish Cargo</td>
                  <td>IATA hard plastic</td>
                  <td>Standard IATA latch</td>
                  <td>Seasonal restrictions apply</td>
                  <td>Popular for Asia & Africa routes; Istanbul hub</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-[#5A5A5A] text-sm leading-relaxed mb-6 max-w-3xl mx-auto">
            The Emirates booking product that uses this crate on a Dubai arrival is covered in{' '}
            <Link to="/guides/emirates-pet-cargo/" className="font-semibold text-[#4F5BD5] hover:underline">
              Emirates pet cargo crate rules
            </Link>
            .
          </p>

          <div className="warning-box max-w-3xl mx-auto">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-[#C89F5A] shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-[#2A2A2A] mb-1">Always Confirm Before Booking</p>
                <p className="text-[#5A5A5A] text-sm leading-relaxed">
                  Airline policies change frequently. Always confirm crate requirements with the cargo department at least 48 hours before departure. Dubai Pet Relocation handles this confirmation for every client as part of our pre-departure checklist.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Crate Familiarization & Cost */}
      <section className="section-padding bg-[#F5F6FD]">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10">
            <div className="bg-white rounded-[20px] shadow-sm p-6 lg:p-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-[#4F5BD5]/10 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-[#4F5BD5]" />
                </div>
                <h3 className="text-xl font-bold text-[#2A2A2A]">Crate Familiarization Guide</h3>
              </div>
              <p className="text-[#5A5A5A] text-sm leading-relaxed mb-5">
                Start 2–3 weeks before travel (4–6 weeks for anxious pets). The goal is to make the crate a safe, comfortable space your pet associates with positive experiences.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-full bg-[#4F5BD5] text-white flex items-center justify-center text-xs font-bold shrink-0">1</div>
                  <div>
                    <p className="font-semibold text-[#2A2A2A] text-sm">Open-door introduction</p>
                    <p className="text-xs text-[#5A5A5A]">Place the crate in a familiar room with the door open. Add a soft blanket and your pet's favorite toy. Let them explore freely.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-full bg-[#4F5BD5] text-white flex items-center justify-center text-xs font-bold shrink-0">2</div>
                  <div>
                    <p className="font-semibold text-[#2A2A2A] text-sm">Feed meals inside</p>
                    <p className="text-xs text-[#5A5A5A]">Place food bowls at the back of the crate. Start near the entrance and gradually move them deeper over several days.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-full bg-[#4F5BD5] text-white flex items-center justify-center text-xs font-bold shrink-0">3</div>
                  <div>
                    <p className="font-semibold text-[#2A2A2A] text-sm">Close the door briefly</p>
                    <p className="text-xs text-[#5A5A5A]">Once your pet is comfortable entering, close the door for 1–2 minutes while they eat. Gradually increase to 10–15 minutes.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-full bg-[#4F5BD5] text-white flex items-center justify-center text-xs font-bold shrink-0">4</div>
                  <div>
                    <p className="font-semibold text-[#2A2A2A] text-sm">Extended sessions</p>
                    <p className="text-xs text-[#5A5A5A]">Work up to 1–2 hours inside with the door closed. Add a worn T-shirt with your scent for comfort.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-full bg-[#4F5BD5] text-white flex items-center justify-center text-xs font-bold shrink-0">5</div>
                  <div>
                    <p className="font-semibold text-[#2A2A2A] text-sm">Simulate travel day</p>
                    <p className="text-xs text-[#5A5A5A]">Pick up the crate gently while your pet is inside and place it in a different room. Reward calm behavior.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-[20px] shadow-sm p-6 lg:p-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-[#C89F5A]/10 flex items-center justify-center">
                  <DollarSign className="w-5 h-5 text-[#C89F5A]" />
                </div>
                <h3 className="text-xl font-bold text-[#2A2A2A]">Buying vs. Renting a Crate</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="data-table min-w-[420px]">
                  <thead>
                    <tr>
                      <th>Factor</th>
                      <th>Buying</th>
                      <th>Renting</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-medium">Cost</td>
                      <td>The supplier prices the crate. We do not publish a buy tariff.</td>
                      <td>The supplier prices the hire. We do not publish a rent tariff.</td>
                    </tr>
                    <tr>
                      <td className="font-medium">Ownership</td>
                      <td>Yours to keep</td>
                      <td>Return after travel</td>
                    </tr>
                    <tr>
                      <td className="font-medium">Best for</td>
                      <td>Frequent travelers, growing puppies</td>
                      <td>One-time relocation, limited storage</td>
                    </tr>
                    <tr>
                      <td className="font-medium">Return flights</td>
                      <td>Use same crate for return</td>
                      <td>Need to rent again or switch</td>
                    </tr>
                    <tr>
                      <td className="font-medium">Storage</td>
                      <td>Requires home storage space</td>
                      <td>No storage needed</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-[#5A5A5A] mt-4 leading-relaxed">
                Inside a managed move we can source a crate to the measured size, or arrange one at the origin, and the cost is part of the quote after the eligibility check.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How Dubai Pet Relocation Sizes Crates */}
      <section className="section-padding bg-white">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mb-4">
              How Dubai Pet Relocation sizes crates: our 3-step process
            </h2>
            <p className="text-[#5A5A5A] text-base leading-relaxed">
              On a booked managed move, the crate is sized from the pet in front of us, not from a breed average, so check-in is less likely to fail on dimensions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-[#F5F6FD] rounded-[20px] p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-[#4F5BD5]/10 flex items-center justify-center mx-auto mb-4">
                <PawPrint className="w-6 h-6 text-[#4F5BD5]" />
              </div>
              <h3 className="text-lg font-bold text-[#2A2A2A] mb-2">Step 1: Photo & Video Review</h3>
              <p className="text-sm text-[#5A5A5A] leading-relaxed">On a booked move, you send photos and a short video of your pet standing naturally. We assess body proportions, head shape and posture to estimate the crate size range.</p>
            </div>
            <div className="bg-[#F5F6FD] rounded-[20px] p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-[#4F5BD5]/10 flex items-center justify-center mx-auto mb-4">
                <Ruler className="w-6 h-6 text-[#4F5BD5]" />
              </div>
              <h3 className="text-lg font-bold text-[#2A2A2A] mb-2">Step 2: Guided Measurement</h3>
              <p className="text-sm text-[#5A5A5A] leading-relaxed">For booked clients, we guide the measurement on a video call. We record length, height, width and weight, and add a 2–3 cm safety margin to every dimension.</p>
            </div>
            <div className="bg-[#F5F6FD] rounded-[20px] p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-[#C89F5A]/10 flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-[#C89F5A]" />
              </div>
              <h3 className="text-lg font-bold text-[#2A2A2A] mb-2">Step 3: Airline rule check</h3>
              <p className="text-sm text-[#5A5A5A] leading-relaxed">The measurements and breed are checked against the airline's crate rules before the crate is ordered and the booking is held.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-[#F5F6FD]">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mb-4 text-center">
              Frequently Asked Questions
            </h2>
            <p className="text-[#5A5A5A] text-base leading-relaxed text-center mb-10">
              Common questions about IATA pet travel crates for Dubai flights.
            </p>
            <div className="bg-white rounded-[20px] shadow-sm p-6 lg:p-8">
              {faqData.map((faq, i) => (
                <FAQItem key={i} question={faq.question} answer={<LinkedText text={faq.answer} />} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <RelatedLinks
        heading="Related guides and services"
        intro="The crate rules are here to use yourself. A managed dog move or a door-to-door move is booked on the service pages."
        path="/guides/iata-pet-crate-requirements/"
      />

      <p className="bg-white px-5 pb-10 text-center text-sm text-[#5A5A5A]">
        <Link to="/service/dog-relocation-dubai/" className="font-semibold text-[#4F5BD5] hover:underline">
          See what a managed dog move includes
        </Link>
      </p>

      <GuideFunnelCta
        variant="end"
        title="Want us to size and supply the crate as part of your move?"
        subtitle="Eligibility and crate-led booking sit on the service pages and WhatsApp. We explain the next step before any paid work starts. We do not assume crate or airline fee amounts."
        eligibilityMessage={CRATE_WA}
        waLabel={CTA_MANAGED_QUOTE}
        waClassName={STRONG_WA}
        paidItems={CRATE_PAID}
      />
    </>
  )
}
