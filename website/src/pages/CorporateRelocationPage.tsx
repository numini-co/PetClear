import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Building2,
  Users,
  FileCheck,
  MessageCircle,
  ChevronDown,
  ChevronUp,
  ClipboardList,
  UserCheck,
  Globe,
  PlaneTakeoff,
  PlaneLanding,
  ShieldCheck,
  ArrowRight,
  HelpCircle,
  PawPrint,
  Layers,
  BarChart3,
  CheckCircle,
} from 'lucide-react'
import SEOHead from '../components/SEOHead.tsx'
import Hero from '../components/Hero.tsx'
import Breadcrumb from '../components/Breadcrumb.tsx'
import OfficialSources from '../components/OfficialSources.tsx'
import { getWhatsAppUrl, BASE_URL } from '../lib/seo.ts'

/* ─── Corporate WhatsApp message ─── */
const corporateMsg =
  'Hi Dubai Pet Relocation, I manage employee relocations and would like a corporate pet relocation quote. We have [number] employees relocating to/from Dubai with pets.'

/* ─── WhatsApp CTA button ─── */
function WhatsAppCta({
  label,
  message = corporateMsg,
  className = '',
}: {
  label: string
  message?: string
  className?: string
}) {
  return (
    <a
      href={getWhatsAppUrl(message, 'corporate-relocation')}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#25D366] text-white rounded-2xl font-semibold text-sm hover:bg-[#1ebe57] transition-colors ${className}`}
    >
      <MessageCircle className="w-4 h-4" />
      {label}
    </a>
  )
}

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
export default function CorporateRelocationPage() {
  const canonical = `${BASE_URL}/service/corporate-pet-relocation/`

  const faqData = [
    {
      question: 'How does corporate pet relocation pricing work per employee?',
      answer:
        'Each employee\'s pet move is quoted individually — species, crate, route and season change the file. Official MOCCAE fees (confirm on the portal; fees may change) are import permit AED 200, dog port release AED 500 and cat port release AED 250. We do not publish package or coordination-tier totals here. WhatsApp +971504782999 for a per-employee quote that HR can approve or expense.',
    },
    {
      question: 'Who is the point of contact for a corporate account?',
      answer:
        'We assign a single point of contact who coordinates every move under your account. Instead of each relocating employee chasing vets, cargo handlers, and the MOCCAE portal separately, your HR or mobility manager and the employee deal with one coordinator who manages the full chain. This keeps communication consistent and means you are not managing multiple unrelated providers across multiple moves.',
    },
    {
      question: 'Can you handle multiple employees and multi-pet families at the same time?',
      answer:
        'Yes. We coordinate several employee moves in parallel and handle families relocating with more than one pet. Note that the MOCCAE import permit is issued per animal (AED 200 per pet), and the UAE limits imports to a maximum of two pets per person per year — so a multi-pet household may need permits split across family members. We map this out per family at the quoting stage so there are no surprises at customs.',
    },
    {
      question: 'Do you support relocations both to and from Dubai?',
      answer:
        'Yes. We handle inbound moves of employees relocating to Dubai and the UAE, outbound moves of employees leaving Dubai for another country, and international moves that route through Dubai. Inbound moves centre on the MOCCAE import permit and UAE entry requirements; outbound moves involve the MOCCAE export permit and the destination country\'s own import rules. We coordinate the relevant side of the move for each employee.',
    },
    {
      question: 'What reporting do you provide for HR and mobility teams?',
      answer:
        'For corporate accounts we provide status updates on each move and a per-employee cost breakdown so the relocation can be tracked and reconciled against the mobility budget. Because each move is quoted and documented individually, HR and mobility managers get a clear view of which employees are in progress, what stage each move is at, and what each one costs. We keep the documentation organised per employee rather than as one undifferentiated batch.',
    },
    {
      question: 'How early should we engage you before an employee\'s start date?',
      answer:
        'As early as possible. From low-risk countries such as the UK, EU, USA, Canada, Australia, and New Zealand, the pet import process typically takes 4–6 weeks. From high-risk countries that require a titer, the blood sample should be taken within 90 days before travel and read at least 0.5 IU/ml — that is not a wait after the draw. Start the pet file alongside visa and housing so the employee is not in Dubai while the animal is still grounded.',
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
        text: typeof faq.answer === 'string' ? faq.answer : faq.question,
      },
    })),
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${BASE_URL}/` },
      { '@type': 'ListItem', position: 2, name: 'Corporate Pet Relocation Dubai', item: canonical },
    ],
  }

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Corporate Pet Relocation Dubai',
    serviceType: 'Corporate pet relocation coordination',
    description:
      'Pet relocation coordination for HR and mobility teams managing employee moves to and from Dubai. Single point of contact, document handling, transparent per-employee pricing, and multi-pet and family support.',
    areaServed: { '@type': 'Country', name: 'United Arab Emirates' },
    provider: {
      '@type': 'Organization',
      name: 'Dubai Pet Relocation',
      url: BASE_URL,
    },
  }

  const schemas = [faqSchema, breadcrumbSchema, serviceSchema]

  const meta = {
    title: 'Corporate Pet Relocation Dubai | HR & Mobility Quotes',
    description:
      'Corporate pet relocation Dubai for HR and mobility teams. Per-employee quotes, one coordinator, inbound and outbound. WhatsApp +971504782999.',
    canonical,
    ogType: 'website',
    keywords:
      'corporate pet relocation Dubai, employee pet relocation UAE, mobility pet relocation Dubai, HR pet relocation, business pet relocation Dubai, relocation package pet, employee pet move Dubai',
  }

  return (
    <div>
      <SEOHead meta={meta} schemas={schemas} />
      <Breadcrumb
        items={[
          { label: 'Services', path: '/services/' },
          { label: 'Corporate Pet Relocation Dubai' },
        ]}
      />

      {/* ═══════════ HERO ═══════════ */}
      <Hero
        image="/images/services-hero.jpg"
        imageAlt="Relocation manager reviewing an employee's pet relocation documents for a move to Dubai"
        eyebrow="For HR, Mobility & Relocation Teams"
        title="Corporate Pet Relocation Dubai"
        subtitle="When your employees move, their pets move too. We coordinate the pet side of corporate relocations to and from Dubai — one point of contact, quote-only per-employee pricing, and the paperwork handled."
        whatsappMessage={corporateMsg}
        secondary={{ label: 'Request a Corporate Quote', to: '/contact/' }}
      />

      {/* ═══════════ WHY PETS BELONG IN THE MOBILITY PACKAGE ═══════════ */}
      <section className="section-padding bg-white">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mb-4">
              Pets Are Part of the Relocation Decision
            </h2>
            <p className="text-[#5A5A5A] text-base leading-relaxed mb-4">
              For many of the people your organisation relocates, a pet is family. When an assignment to Dubai
              means leaving a dog or cat behind — or facing a confusing import process alone — it becomes one
              more reason for a candidate to hesitate or a placement to wobble. Folding pet relocation into the
              mobility package removes that friction and signals that the move has been thought through end to end.
            </p>
            <p className="text-[#5A5A5A] text-base leading-relaxed">
              The challenge for HR and mobility teams is that pet relocation sits outside the usual scope. It
              involves government permits, accredited veterinarians, IATA-compliant air cargo, and customs
              clearance — a chain of specialists that does not map neatly onto a standard relocation vendor.
              That is the gap we fill: we run the pet side so your team and your employee do not have to learn it.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#F5F6FD] rounded-[20px] p-6 border border-[#4F5BD5]/10">
              <div className="w-11 h-11 rounded-[14px] bg-[#E9ECFB] flex items-center justify-center mb-4">
                <UserCheck className="w-5 h-5 text-[#4F5BD5]" />
              </div>
              <h3 className="font-bold text-[#2A2A2A] mb-2">Single point of contact</h3>
              <p className="text-sm text-[#5A5A5A] leading-relaxed">
                One coordinator manages every move under your account, so your team is not chasing five different
                providers per employee.
              </p>
            </div>
            <div className="bg-[#F5F6FD] rounded-[20px] p-6 border border-[#4F5BD5]/10">
              <div className="w-11 h-11 rounded-[14px] bg-[#E9ECFB] flex items-center justify-center mb-4">
                <FileCheck className="w-5 h-5 text-[#4F5BD5]" />
              </div>
              <h3 className="font-bold text-[#2A2A2A] mb-2">Document handling</h3>
              <p className="text-sm text-[#5A5A5A] leading-relaxed">
                We prepare and check the MOCCAE permit, microchip, vaccination, and health-certificate paperwork
                for each pet before it travels.
              </p>
            </div>
            <div className="bg-[#F5F6FD] rounded-[20px] p-6 border border-[#4F5BD5]/10">
              <div className="w-11 h-11 rounded-[14px] bg-[#E9ECFB] flex items-center justify-center mb-4">
                <BarChart3 className="w-5 h-5 text-[#4F5BD5]" />
              </div>
              <h3 className="font-bold text-[#2A2A2A] mb-2">Transparent per-employee pricing</h3>
              <p className="text-sm text-[#5A5A5A] leading-relaxed">
                Each move is quoted as a clear, itemized figure so it can be approved, expensed, or built into a
                relocation package.
              </p>
            </div>
            <div className="bg-[#F5F6FD] rounded-[20px] p-6 border border-[#4F5BD5]/10">
              <div className="w-11 h-11 rounded-[14px] bg-[#E9ECFB] flex items-center justify-center mb-4">
                <Layers className="w-5 h-5 text-[#4F5BD5]" />
              </div>
              <h3 className="font-bold text-[#2A2A2A] mb-2">Multi-pet & family support</h3>
              <p className="text-sm text-[#5A5A5A] leading-relaxed">
                Families relocating with more than one pet are handled per household, with permits mapped correctly
                across family members.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ WHAT HR / MOBILITY MANAGERS GET ═══════════ */}
      <section className="section-padding bg-[#F5F6FD]">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mb-4">
              What HR and Mobility Managers Get
            </h2>
            <p className="text-[#5A5A5A] text-base leading-relaxed">
              A corporate account is built around the realities of managing relocations at scale: predictable
              communication, paperwork you can trust, and pricing you can defend in a budget review. Here is what
              that looks like in practice.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-[20px] shadow-sm p-6 lg:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 rounded-[14px] bg-[#E9ECFB] flex items-center justify-center">
                  <UserCheck className="w-5 h-5 text-[#4F5BD5]" />
                </div>
                <h3 className="text-lg font-bold text-[#2A2A2A]">A single coordinator, not a phone tree</h3>
              </div>
              <p className="text-[#5A5A5A] text-sm leading-relaxed">
                One point of contact owns every move under your account. Your relocating employee deals with the
                same coordinator from first enquiry to arrival, and your HR or mobility team has one person to ask
                for a status update — rather than managing the vet, the cargo handler, the crate supplier, and the
                customs agent separately for each case.
              </p>
            </div>

            <div className="bg-white rounded-[20px] shadow-sm p-6 lg:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 rounded-[14px] bg-[#E9ECFB] flex items-center justify-center">
                  <ClipboardList className="w-5 h-5 text-[#4F5BD5]" />
                </div>
                <h3 className="text-lg font-bold text-[#2A2A2A]">Document handling, checked before travel</h3>
              </div>
              <p className="text-[#5A5A5A] text-sm leading-relaxed">
                We prepare and error-check the documents each pet needs: the MOCCAE import permit (AED 200 per
                animal), the ISO microchip certificate, rabies and core vaccination records, and the international
                health certificate. Every document must carry the same microchip number — a mismatch is an
                automatic rejection at customs, so we verify it before your employee&apos;s pet ever boards.
              </p>
            </div>

            <div className="bg-white rounded-[20px] shadow-sm p-6 lg:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 rounded-[14px] bg-[#E9ECFB] flex items-center justify-center">
                  <BarChart3 className="w-5 h-5 text-[#4F5BD5]" />
                </div>
                <h3 className="text-lg font-bold text-[#2A2A2A]">Transparent per-employee pricing</h3>
              </div>
              <p className="text-[#5A5A5A] text-sm leading-relaxed">
                Each move is quoted individually and itemized: government fees, veterinary costs, the IATA crate,
                air cargo, and the coordination fee. Because the figure is broken down line by line, it can be
                approved, expensed, or written into a relocation allowance without a back-and-forth over what is
                and is not included.
              </p>
            </div>

            <div className="bg-white rounded-[20px] shadow-sm p-6 lg:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 rounded-[14px] bg-[#E9ECFB] flex items-center justify-center">
                  <Layers className="w-5 h-5 text-[#4F5BD5]" />
                </div>
                <h3 className="text-lg font-bold text-[#2A2A2A]">Multi-pet and family support</h3>
              </div>
              <p className="text-[#5A5A5A] text-sm leading-relaxed">
                We handle households relocating with more than one pet. Because the MOCCAE permit is issued per
                animal and the UAE caps imports at two pets per person per year, multi-pet families sometimes need
                permits arranged across family members. We map this out per household at the quoting stage so it is
                resolved on paper, not at the cargo terminal.
              </p>
            </div>

            <div className="bg-white rounded-[20px] shadow-sm p-6 lg:p-8 md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 rounded-[14px] bg-[#E9ECFB] flex items-center justify-center">
                  <ClipboardList className="w-5 h-5 text-[#4F5BD5]" />
                </div>
                <h3 className="text-lg font-bold text-[#2A2A2A]">Per-employee reporting and status visibility</h3>
              </div>
              <p className="text-[#5A5A5A] text-sm leading-relaxed">
                We keep documentation organised per employee and provide status updates and a cost breakdown for
                each move, so HR and mobility managers can see which employees are in progress, what stage each
                move has reached, and what each one costs. That makes it straightforward to track the pet element
                of a relocation against the wider mobility budget and timeline.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ COORDINATION TIERS ═══════════ */}
      <section className="section-padding bg-white">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mb-4">
              Coordination Tiers You Can Map to Your Policy
            </h2>
            <p className="text-[#5A5A5A] text-base leading-relaxed">
              The coordination fee sits on top of the unavoidable government, veterinary, crate, and cargo costs.
              We publish three tiers so you can align the level of service with your relocation policy — a baseline
              allowance for some grades, a fuller coordination level for senior or executive moves. The figures below
              are the coordination fee only; the full per-employee quote adds the route-specific costs.
            </p>
          </div>

          <div className="overflow-x-auto mb-6">
            <table className="data-table min-w-[640px]">
              <thead>
                <tr>
                  <th>Tier</th>
                  <th>Coordination Fee (AED)</th>
                  <th>What&apos;s Included</th>
                  <th>Typical Fit</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>PawPilot</strong> (Essential)</td>
                  <td>1,500–2,500</td>
                  <td>Documentation, MOCCAE permit application, flight booking, basic email/WhatsApp support</td>
                  <td>Standard relocation allowance, low-risk routes, organised owners</td>
                </tr>
                <tr>
                  <td><strong>PawPartner</strong> (Premium)</td>
                  <td>3,000–5,000</td>
                  <td>+ Door-to-door pickup and delivery, IATA crate, vet coordination, WhatsApp updates during the move, photo updates</td>
                  <td>Most corporate moves — hands-off for the employee</td>
                </tr>
                <tr>
                  <td><strong>PawVIP</strong> (Coordination)</td>
                  <td>5,000–8,000</td>
                  <td>+ Personal handler assigned, real-time tracking, video updates at every checkpoint, comprehensive travel insurance, priority rebooking if flights change</td>
                  <td>Senior and executive relocations</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-[#5A5A5A] leading-relaxed">
            These are the same published tiers we offer every client — there is no inflated corporate markup. What
            a corporate account adds is the single point of contact across multiple moves and per-employee
            reporting. For the full line-by-line cost structure behind a quote, see our{' '}
            <Link to="/guides/pet-relocation-cost-dubai/" className="text-[#4F5BD5] font-medium hover:underline inline-flex items-center gap-1">
              pet relocation cost guide <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            .
          </p>
        </div>
      </section>

      {/* ═══════════ INBOUND / OUTBOUND / INTERNATIONAL ═══════════ */}
      <section className="section-padding bg-[#F5F6FD]">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mb-4">
              How It Fits Employee Relocations To and From Dubai
            </h2>
            <p className="text-[#5A5A5A] text-base leading-relaxed">
              Corporate mobility runs in every direction — bringing talent into Dubai, sending it out on assignment,
              and moving people between international offices. We coordinate the pet side of each, with the specific
              requirements that direction demands.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-[20px] shadow-sm p-6 lg:p-8">
              <div className="w-11 h-11 rounded-[14px] bg-[#E9ECFB] flex items-center justify-center mb-4">
                <PlaneLanding className="w-5 h-5 text-[#4F5BD5]" />
              </div>
              <h3 className="text-lg font-bold text-[#2A2A2A] mb-3">Relocating employees to Dubai</h3>
              <p className="text-sm text-[#5A5A5A] leading-relaxed mb-4">
                For inbound assignments, the pet move centres on the MOCCAE import permit and the UAE entry rules —
                microchip, rabies and core vaccinations, health certificate, and, for high-risk origin countries, a
                rabies titer test with a 90-day wait. We sync the pet timeline with the employee&apos;s start date so
                the pet is not left grounded after the family has already arrived.
              </p>
              <Link to="/service/pet-relocation-to-dubai/" className="text-[#4F5BD5] text-sm font-medium hover:underline inline-flex items-center gap-1">
                Pet relocation to Dubai <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="bg-white rounded-[20px] shadow-sm p-6 lg:p-8">
              <div className="w-11 h-11 rounded-[14px] bg-[#E9ECFB] flex items-center justify-center mb-4">
                <PlaneTakeoff className="w-5 h-5 text-[#4F5BD5]" />
              </div>
              <h3 className="text-lg font-bold text-[#2A2A2A] mb-3">Relocating employees from Dubai</h3>
              <p className="text-sm text-[#5A5A5A] leading-relaxed mb-4">
                When an employee leaves Dubai for another posting, the move involves the MOCCAE export permit plus
                the destination country&apos;s own import requirements, which vary widely. We coordinate the UAE-side
                paperwork and the outbound logistics so the pet&apos;s departure tracks with the rest of the
                employee&apos;s offboarding.
              </p>
              <Link to="/service/pet-relocation-from-dubai/" className="text-[#4F5BD5] text-sm font-medium hover:underline inline-flex items-center gap-1">
                Pet relocation from Dubai <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="bg-white rounded-[20px] shadow-sm p-6 lg:p-8">
              <div className="w-11 h-11 rounded-[14px] bg-[#E9ECFB] flex items-center justify-center mb-4">
                <Globe className="w-5 h-5 text-[#4F5BD5]" />
              </div>
              <h3 className="text-lg font-bold text-[#2A2A2A] mb-3">International moves via Dubai</h3>
              <p className="text-sm text-[#5A5A5A] leading-relaxed mb-4">
                For transfers between international offices — or moves that route through the UAE — we coordinate
                international pet relocation end to end, matching each country&apos;s rules to the journey. This suits
                global mobility programmes where Dubai is one node in a wider network of postings.
              </p>
              <Link to="/service/international-pet-relocation/" className="text-[#4F5BD5] text-sm font-medium hover:underline inline-flex items-center gap-1">
                International pet relocation <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ HOW WE WORK WITH YOUR TEAM ═══════════ */}
      <section className="section-padding bg-white">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mb-4">
              How We Work With Your Mobility Team
            </h2>
            <p className="text-[#5A5A5A] text-base leading-relaxed">
              The process is deliberately light on your side. You introduce the move; we run the pet relocation and
              keep you informed. A typical engagement looks like this.
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-[#F5F6FD] rounded-[20px] p-6 lg:p-8 flex gap-5">
              <div className="w-12 h-12 rounded-full bg-[#4F5BD5] text-white flex items-center justify-center text-lg font-bold shrink-0">1</div>
              <div>
                <h3 className="text-lg font-bold text-[#2A2A2A] mb-2">Introduce the move</h3>
                <p className="text-[#5A5A5A] text-sm leading-relaxed">
                  Your HR or mobility manager sends us the basics: the employee, the route (to or from Dubai), the
                  pet type and size, the rough timeline, and the policy tier you want to apply. One message is enough
                  to start.
                </p>
              </div>
            </div>

            <div className="bg-[#F5F6FD] rounded-[20px] p-6 lg:p-8 flex gap-5">
              <div className="w-12 h-12 rounded-full bg-[#4F5BD5] text-white flex items-center justify-center text-lg font-bold shrink-0">2</div>
              <div>
                <h3 className="text-lg font-bold text-[#2A2A2A] mb-2">Receive a per-employee quote</h3>
                <p className="text-[#5A5A5A] text-sm leading-relaxed">
                  We return an itemized quote for that move — government fees, veterinary costs, crate, cargo, and
                  coordination tier — so it can be approved or built into the relocation package before anything
                  starts.
                </p>
              </div>
            </div>

            <div className="bg-[#F5F6FD] rounded-[20px] p-6 lg:p-8 flex gap-5">
              <div className="w-12 h-12 rounded-full bg-[#4F5BD5] text-white flex items-center justify-center text-lg font-bold shrink-0">3</div>
              <div>
                <h3 className="text-lg font-bold text-[#2A2A2A] mb-2">We coordinate directly with the employee</h3>
                <p className="text-[#5A5A5A] text-sm leading-relaxed">
                  Once approved, the assigned coordinator works directly with the relocating employee on documents,
                  vet appointments, crate sizing, and flight booking — taking the day-to-day load off your team while
                  keeping you in the loop.
                </p>
              </div>
            </div>

            <div className="bg-[#F5F6FD] rounded-[20px] p-6 lg:p-8 flex gap-5">
              <div className="w-12 h-12 rounded-full bg-[#4F5BD5] text-white flex items-center justify-center text-lg font-bold shrink-0">4</div>
              <div>
                <h3 className="text-lg font-bold text-[#2A2A2A] mb-2">Status updates through to arrival</h3>
                <p className="text-[#5A5A5A] text-sm leading-relaxed">
                  We provide status updates per move and confirm completion on arrival and clearance. Documentation
                  is kept organised per employee, so reconciling the pet element against the mobility budget is
                  straightforward.
                </p>
              </div>
            </div>
          </div>

          <div className="warning-box mt-8">
            <div className="flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-[#4F5BD5] shrink-0 mt-0.5" />
              <p className="text-sm text-[#2A2A2A] leading-relaxed">
                <strong>Honest scope:</strong> We are a pet relocation coordination service that coordinates vetted partners —
                veterinarians, cargo handlers, and ground transport teams. We do not own an airline, and the rules
                are set by MOCCAE and the relevant authorities, not by us. Government fees and entry requirements are
                fixed and apply to every provider equally. Each employee&apos;s quote reflects live figures for their
                route and dates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ FAQ ═══════════ */}
      <section className="section-padding bg-[#F5F6FD]">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mb-4 text-center">
              Corporate Pet Relocation FAQ
            </h2>
            <p className="text-[#5A5A5A] text-base leading-relaxed text-center mb-10">
              Common questions from HR, mobility, and relocation managers.
            </p>
            <div className="bg-white rounded-[20px] shadow-sm p-6 lg:p-8">
              {faqData.map((faq, i) => (
                <FAQItem key={i} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ OFFICIAL SOURCES ═══════════ */}
      <OfficialSources />

      {/* ═══════════ CORPORATE CTA ═══════════ */}
      <section className="py-16 lg:py-20 bg-[#4F5BD5]">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8 text-center">
          <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mx-auto mb-5">
            <Building2 className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-white mb-4">
            Request a Corporate Pet Relocation Quote
          </h2>
          <p className="text-white/80 text-lg leading-relaxed max-w-2xl mx-auto mb-8">
            Tell us how many employees are relocating and in which direction. We&apos;ll come back with a clear,
            per-employee quote and a single point of contact for your account — so the pet side of your moves is one
            less thing to manage.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <WhatsAppCta label="Request a Corporate Quote on WhatsApp" />
            <Link
              to="/contact/"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-white/10 text-white rounded-2xl font-semibold text-sm hover:bg-white/20 transition-colors"
            >
              <HelpCircle className="w-4 h-4" />
              Contact Our Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
