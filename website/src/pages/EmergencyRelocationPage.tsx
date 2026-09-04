import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  AlertTriangle,
  ChevronDown,
  ChevronUp,
  Clock,
  CheckCircle,
  XCircle,
  HelpCircle,
  MessageCircle,
  Phone,
  PawPrint,
  Plane,
  Briefcase,
  Heart,
  Zap,
  FileCheck,
  Stethoscope,
  CalendarClock,
  Upload,
} from 'lucide-react'
import SEOHead from '../components/SEOHead.tsx'
import Hero from '../components/Hero.tsx'
import Breadcrumb from '../components/Breadcrumb.tsx'
import OfficialSources from '../components/OfficialSources.tsx'
import { getWhatsAppUrl, BASE_URL, PHONE_DISPLAY, PHONE_E164 } from '../lib/seo.ts'

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

/* ─── WhatsApp CTA helper ─── */
function WhatsAppCta({ text, label, className = '' }: { text: string; label: string; className?: string }) {
  return (
    <a
      href={getWhatsAppUrl(text)}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 px-6 py-3.5 bg-[#25D366] text-white rounded-2xl font-semibold text-sm hover:bg-[#1ebe57] transition-colors shadow-sm ${className}`}
    >
      <MessageCircle className="w-4 h-4" />
      {label}
    </a>
  )
}

const URGENT_MSG =
  'Hi Dubai Pet Relocation — this is urgent. I need to move my pet to Dubai on a tight deadline. Country of origin: [country]. Pet: [dog/cat, breed]. My travel date: [date]. Can you tell me what is possible?'

/* ─── Page ─── */
export default function EmergencyRelocationPage() {
  const description =
    'Need to relocate your pet to Dubai fast? Emergency and urgent pet relocation help for sudden job moves, visa deadlines, and family emergencies. From low-risk countries with documents in order, a fast move is possible. Message us on WhatsApp for a 15-minute reply.'
  const canonical = `${BASE_URL}/emergency-pet-relocation-dubai/`
  const ogImage = `${BASE_URL}/images/hero-dog.jpg`

  const faqData = [
    {
      question: 'How fast can you relocate my pet to Dubai?',
      answer:
        'It depends entirely on your country of origin and whether your documents are in order. From a low-risk country (UK, EU, USA, Canada, Australia, New Zealand, Japan, Singapore) with an ISO microchip, a valid rabies vaccination, and a recent health certificate already in place, the process can move quickly — typically in the 4–6 week range, and sometimes faster if everything is ready. From a high-risk country, the mandatory rabies titer test and its 90-day waiting period mean a truly last-minute move is not possible — the minimum timeline is around 4 months. The honest first step is to send us your details on WhatsApp so we can tell you exactly what is achievable for your situation.',
    },
    {
      question: 'Can I move my pet in a few days if it is a real emergency?',
      answer:
        'If your pet is from a low-risk country and already has an ISO microchip, a valid rabies vaccination administered at least 21 days before travel, and the health certificate can be issued within 10 days of arrival, a very fast move can be possible. If your pet is from a high-risk country, the rabies titer test requires a blood draw at least 21 days after vaccination plus a mandatory 90-day wait from the blood draw date — this cannot be waived, expedited, or bypassed for any reason. We will never promise a timeline that the rules do not allow. Message us and we will give you a straight answer.',
    },
    {
      question: 'What can be expedited, and what cannot?',
      answer:
        'We can move quickly on the things that are within our control: reviewing your documents, preparing and submitting the MOCCAE import permit (processing is typically 2–7 working days), booking manifest cargo, arranging the health certificate, and coordinating customs clearance on arrival. What cannot be sped up are the fixed biological and regulatory waiting periods: the 21-day wait after a rabies vaccination, and — for high-risk countries — the 90-day wait after the titer test blood draw. These are set by UAE regulations and are non-negotiable.',
    },
    {
      question: 'What should I send you right now to get started fast?',
      answer:
        'Send us a WhatsApp message with: (1) your pet\'s country of origin, (2) species and breed, (3) your required arrival date in Dubai, (4) a photo of the microchip certificate, (5) a photo of the rabies vaccination record, and (6) any other vaccination or health documents you have. With those, we can assess your real timeline within minutes and tell you honestly whether your deadline is achievable.',
    },
    {
      question: 'Do you really reply within 15 minutes?',
      answer:
        'During our operating hours we aim to reply to urgent WhatsApp messages within 15 minutes. When a job, visa, or family deadline is closing in, every hour matters — so we prioritise time-sensitive cases and give you a clear, honest read on what is possible before anything else. If you message outside hours, we respond first thing.',
    },
    {
      question: 'Will my pet have to go into quarantine if we rush?',
      answer:
        'No — Dubai does not require mandatory quarantine when documentation is complete and correct, including the MOCCAE import permit, ISO microchip, rabies vaccination, and health certificate. The risk in a rushed move is not quarantine by default, but errors: a missing document, a microchip number mismatch, or an expired vaccine can lead to refused entry or conditional quarantine at your expense. That is exactly why we error-check everything before your pet flies.',
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
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Emergency & Urgent Pet Relocation in Dubai', item: canonical },
    ],
  }

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Emergency & Urgent Pet Relocation in Dubai',
    serviceType: 'Urgent pet relocation and import coordination',
    areaServed: { '@type': 'Country', name: 'United Arab Emirates' },
    provider: { '@type': 'Organization', name: 'Dubai Pet Relocation', url: BASE_URL },
    description,
  }

  const schemas = [faqSchema, breadcrumbSchema, serviceSchema]

  const meta = {
    title: 'Emergency & Urgent Pet Relocation in Dubai | Fast Help',
    description,
    canonical,
    ogImage,
    ogType: 'website',
    keywords:
      'emergency pet relocation Dubai, urgent pet relocation UAE, fast pet import Dubai, last minute pet move Dubai, expedited pet relocation Dubai, quick pet relocation UAE, pet relocation deadline Dubai, rush pet shipping Dubai',
  }

  return (
    <>
      <SEOHead meta={meta} schemas={schemas} />
      <Breadcrumb items={[{ label: 'Emergency & Urgent Pet Relocation' }]} />

      {/* Hero */}
      <Hero
        image="/images/hero-dog.jpg"
        imageAlt="A calm dog waiting beside a packed travel crate, ready for an urgent relocation to Dubai"
        eyebrow="Urgent Pet Relocation"
        title="Emergency & Urgent Pet Relocation in Dubai"
        subtitle="A sudden job move, a closing visa window, or a family emergency — take a breath. Message us on WhatsApp and we'll tell you honestly what's possible, fast. We aim to reply within 15 minutes."
        whatsappMessage={URGENT_MSG}
        updated="Updated June 2026"
      />

      {/* Urgent reassurance bar */}
      <section className="bg-[#0E1330]">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white text-sm sm:text-base font-medium flex items-center gap-2 text-center sm:text-left">
            <Zap className="w-5 h-5 text-[#25D366] shrink-0" />
            On a deadline? Send your pet's details now — we'll give you a real answer, not a sales pitch.
          </p>
          <div className="flex flex-wrap justify-center gap-3 shrink-0">
            <WhatsAppCta text={URGENT_MSG} label="Message Us Now" className="whatsapp-pulse" />
            <a
              href={`tel:${PHONE_E164}`}
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-white/10 text-white rounded-2xl font-semibold text-sm hover:bg-white/20 transition-colors ring-1 ring-white/25"
            >
              <Phone className="w-4 h-4" />
              {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </section>

      {/* Who this is for */}
      <section className="section-padding bg-[#F5F6FD]">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mb-4">
              Who Needs an Urgent Pet Move?
            </h2>
            <p className="text-[#5A5A5A] text-base leading-relaxed">
              Life rarely gives much notice. If you're suddenly facing a hard deadline to get your pet to
              Dubai, you're not alone — and you're in the right place. These are the situations we help with
              every week.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-[20px] shadow-sm p-6 lg:p-8">
              <div className="w-12 h-12 rounded-[14px] bg-[#4F5BD5]/10 flex items-center justify-center mb-4">
                <Briefcase className="w-6 h-6 text-[#4F5BD5]" />
              </div>
              <h3 className="text-lg font-bold text-[#2A2A2A] mb-2">A Sudden Job Move</h3>
              <p className="text-sm text-[#5A5A5A] leading-relaxed">
                A new role in Dubai with a start date that's weeks — not months — away. You can't leave your
                pet behind, and you need to know what's actually achievable in the time you have.
              </p>
            </div>
            <div className="bg-white rounded-[20px] shadow-sm p-6 lg:p-8">
              <div className="w-12 h-12 rounded-[14px] bg-[#C89F5A]/10 flex items-center justify-center mb-4">
                <CalendarClock className="w-6 h-6 text-[#C89F5A]" />
              </div>
              <h3 className="text-lg font-bold text-[#2A2A2A] mb-2">A Visa or Deadline</h3>
              <p className="text-sm text-[#5A5A5A] leading-relaxed">
                A residency visa, lease, or relocation package with a closing window. You need the paperwork
                handled correctly the first time, because there's no room for a rejected permit or a restart.
              </p>
            </div>
            <div className="bg-white rounded-[20px] shadow-sm p-6 lg:p-8">
              <div className="w-12 h-12 rounded-[14px] bg-[#C9453A]/10 flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-[#C9453A]" />
              </div>
              <h3 className="text-lg font-bold text-[#2A2A2A] mb-2">A Family Emergency</h3>
              <p className="text-sm text-[#5A5A5A] leading-relaxed">
                A change in circumstances, an unexpected move, or a situation where your pet simply needs to
                join you sooner than planned. We'll move calmly and quickly on everything within our control.
              </p>
            </div>
          </div>

          <div className="mt-8">
            <WhatsAppCta
              text={URGENT_MSG}
              label="Tell us your deadline — we'll tell you what's possible"
            />
          </div>
        </div>
      </section>

      {/* Honest reality: what can and cannot be rushed */}
      <section className="section-padding bg-white">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mb-4">
              The Honest Truth: What Can Be Expedited — and What Cannot
            </h2>
            <p className="text-[#5A5A5A] text-base leading-relaxed">
              We won't promise you a timeline the rules don't allow. Some parts of a relocation are fully
              within our control and can be done fast. Others are fixed waiting periods set by UAE regulations
              that no agent — anywhere — can shorten. Knowing the difference is what keeps your move on track.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 mb-10">
            <div className="bg-[#F5F6FD] rounded-[20px] p-6 lg:p-8 border-l-4 border-[#25D366]">
              <h3 className="text-xl font-bold text-[#2A2A2A] mb-5 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-[#25D366]" />
                What We Can Move Fast On
              </h3>
              <ul className="space-y-3 text-sm text-[#5A5A5A]">
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" /><span>Same-day document review — send us photos and we'll tell you what's missing</span></li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" /><span>MOCCAE import permit preparation and submission (processing typically 2–7 working days)</span></li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" /><span>Manifest cargo booking on the earliest safe flight</span></li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" /><span>Health certificate and antiparasitic timing (issued within 10 days of arrival)</span></li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" /><span>Customs clearance coordination on arrival (typically 2–4 hours when documents are correct)</span></li>
              </ul>
            </div>

            <div className="bg-[#F5F6FD] rounded-[20px] p-6 lg:p-8 border-l-4 border-[#C9453A]">
              <h3 className="text-xl font-bold text-[#2A2A2A] mb-5 flex items-center gap-2">
                <XCircle className="w-5 h-5 text-[#C9453A]" />
                What Cannot Be Rushed
              </h3>
              <ul className="space-y-3 text-sm text-[#5A5A5A]">
                <li className="flex items-start gap-2"><XCircle className="w-4 h-4 text-[#C9453A] shrink-0 mt-0.5" /><span>The 21-day wait after a rabies vaccination before travel — a fixed minimum</span></li>
                <li className="flex items-start gap-2"><XCircle className="w-4 h-4 text-[#C9453A] shrink-0 mt-0.5" /><span>The rabies titer test for high-risk countries: blood drawn ≥21 days after vaccination</span></li>
                <li className="flex items-start gap-2"><XCircle className="w-4 h-4 text-[#C9453A] shrink-0 mt-0.5" /><span>The 90-day waiting period from the titer test blood draw — non-negotiable, no exceptions</span></li>
                <li className="flex items-start gap-2"><XCircle className="w-4 h-4 text-[#C9453A] shrink-0 mt-0.5" /><span>Re-doing a step that was done in the wrong order (e.g. vaccinated before microchipped)</span></li>
              </ul>
            </div>
          </div>

          <div className="warning-box max-w-3xl">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-[#C89F5A] shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-[#2A2A2A] mb-1">From a high-risk country, a truly last-minute move is not possible</p>
                <p className="text-[#5A5A5A] text-sm leading-relaxed">
                  If your pet is coming from a high-risk rabies country, the mandatory titer test plus the
                  90-day waiting period make the absolute minimum timeline around 4 months from scratch. We
                  say this plainly because the alternative — promising the impossible — only ends in a missed
                  deadline and a stranded pet. If you're in this situation, message us anyway: the sooner we
                  start the clock, the sooner your pet can fly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How fast a low-risk move can go */}
      <section className="section-padding bg-[#F5F6FD]">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mb-4">
              How Fast a Low-Risk Move Can Go
            </h2>
            <p className="text-[#5A5A5A] text-base leading-relaxed">
              From a low-risk country — the UK, EU, USA, Canada, Australia, New Zealand, Japan, or Singapore —
              there is no titer test and no 90-day wait. With your pet's documents already in order, the
              path is short and we can move quickly. Here's the realistic sequence.
            </p>
          </div>

          <div className="space-y-6 mb-10">
            <div className="bg-white rounded-[20px] shadow-sm p-6 lg:p-8 flex gap-5">
              <div className="w-12 h-12 rounded-full bg-[#4F5BD5] text-white flex items-center justify-center text-lg font-bold shrink-0">1</div>
              <div>
                <h3 className="text-xl font-bold text-[#2A2A2A] mb-2">Document Check (Same Day)</h3>
                <p className="text-[#5A5A5A] text-sm leading-relaxed">
                  We confirm your pet has an ISO 11784/11785 microchip, a valid rabies vaccination given at
                  least 21 days before the planned travel date, and core vaccinations on record. If all three
                  are in place, you're already most of the way there.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-[20px] shadow-sm p-6 lg:p-8 flex gap-5">
              <div className="w-12 h-12 rounded-full bg-[#4F5BD5] text-white flex items-center justify-center text-lg font-bold shrink-0">2</div>
              <div>
                <h3 className="text-xl font-bold text-[#2A2A2A] mb-2">MOCCAE Import Permit (2–7 Working Days)</h3>
                <p className="text-[#5A5A5A] text-sm leading-relaxed">
                  We prepare and submit the MOCCAE import permit (AED 200 per pet, valid 90 days from
                  issuance). Because we error-check every detail before submitting, we avoid the rejections
                  that quietly add a week or more to a rushed move.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-[20px] shadow-sm p-6 lg:p-8 flex gap-5">
              <div className="w-12 h-12 rounded-full bg-[#4F5BD5] text-white flex items-center justify-center text-lg font-bold shrink-0">3</div>
              <div>
                <h3 className="text-xl font-bold text-[#2A2A2A] mb-2">Cargo Booking & Health Certificate</h3>
                <p className="text-[#5A5A5A] text-sm leading-relaxed">
                  Pets travel to Dubai as manifest cargo (not cabin or checked baggage). We book the earliest
                  safe flight, arrange antiparasitic treatment within 14 days of arrival, and time the
                  International Health Certificate so it's issued within its 10-day validity window.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-[20px] shadow-sm p-6 lg:p-8 flex gap-5">
              <div className="w-12 h-12 rounded-full bg-[#25D366] text-white flex items-center justify-center text-lg font-bold shrink-0">4</div>
              <div>
                <h3 className="text-xl font-bold text-[#2A2A2A] mb-2">Arrival & Clearance</h3>
                <p className="text-[#5A5A5A] text-sm leading-relaxed">
                  Your pet arrives at the Dubai cargo terminal. With correct documents, customs clearance
                  typically takes 2–4 hours and there is no quarantine. We coordinate the clearance so you can
                  focus on settling in.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[#E9ECFB] rounded-[20px] p-6 lg:p-8 max-w-3xl">
            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-[#4F5BD5] shrink-0 mt-0.5" />
              <p className="text-sm text-[#2A2A2A] leading-relaxed">
                <strong>Realistic low-risk timeline:</strong> from a low-risk country with documents in order,
                the process commonly runs in the 4–6 week range — and can be shorter when everything is
                already prepared. One factor to flag early: the summer heat embargo (roughly May 1 –
                September 30) restricts pet cargo, so an urgent summer move may need alternative routing.
                Message us and we'll map your specific dates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What to send us right now */}
      <section className="section-padding bg-white">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mb-4">
                Send Us This Right Now on WhatsApp
              </h2>
              <p className="text-[#5A5A5A] text-base leading-relaxed mb-6">
                The fastest way to get a real answer is to give us the few details that determine your
                timeline. Snap photos on your phone — no need to find a scanner. With these in hand, we can
                tell you within minutes whether your deadline is achievable and exactly what happens next.
              </p>
              <div className="flex flex-wrap gap-3">
                <WhatsAppCta text={URGENT_MSG} label="Start Now on WhatsApp" className="whatsapp-pulse" />
                <a
                  href={`tel:${PHONE_E164}`}
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#F5F6FD] text-[#2A2A2A] rounded-2xl font-semibold text-sm hover:bg-[#E9ECFB] transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#4F5BD5]" />
                  Or call {PHONE_DISPLAY}
                </a>
              </div>
            </div>

            <div className="bg-[#F5F6FD] rounded-[20px] shadow-sm p-6 lg:p-8">
              <h3 className="text-lg font-bold text-[#2A2A2A] mb-5 flex items-center gap-2">
                <Upload className="w-5 h-5 text-[#4F5BD5]" />
                Your "Send Now" Checklist
              </h3>
              <ul className="space-y-3 text-sm text-[#5A5A5A]">
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /><span>Your pet's <strong>country of origin</strong></span></li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /><span><strong>Species and breed</strong> (so we can confirm it's not a banned breed)</span></li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /><span>Your <strong>required arrival date</strong> in Dubai</span></li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /><span>A photo of the <strong>microchip certificate</strong></span></li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /><span>A photo of the <strong>rabies vaccination record</strong></span></li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /><span>Any <strong>other vaccination or health documents</strong> you have</span></li>
              </ul>
              <p className="text-xs text-[#8A8A8A] mt-5">
                Don't have everything? Send what you do have. We'll tell you what's missing and how to get it
                fast.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The 15-minute promise + how we help */}
      <section className="section-padding bg-[#F5F6FD]">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="max-w-3xl text-center mx-auto mb-10">
            <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mb-4">
              Our 15-Minute Reply Promise
            </h2>
            <p className="text-[#5A5A5A] text-base leading-relaxed">
              When you're racing a deadline, waiting on a quote form is the last thing you need. During
              operating hours, we aim to reply to urgent WhatsApp messages within 15 minutes — with a clear,
              honest assessment, not a sales pitch.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            <div className="bg-white rounded-[20px] shadow-sm p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-[#25D366]/10 flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 text-[#25D366]" />
              </div>
              <h3 className="text-lg font-bold text-[#2A2A2A] mb-2">Fast First Reply</h3>
              <p className="text-sm text-[#5A5A5A] leading-relaxed">We prioritise time-sensitive cases and respond quickly so you're not left guessing.</p>
            </div>
            <div className="bg-white rounded-[20px] shadow-sm p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-[#4F5BD5]/10 flex items-center justify-center mx-auto mb-4">
                <FileCheck className="w-6 h-6 text-[#4F5BD5]" />
              </div>
              <h3 className="text-lg font-bold text-[#2A2A2A] mb-2">Honest Timeline</h3>
              <p className="text-sm text-[#5A5A5A] leading-relaxed">We tell you what's achievable and what isn't — before you commit to anything.</p>
            </div>
            <div className="bg-white rounded-[20px] shadow-sm p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-[#C89F5A]/10 flex items-center justify-center mx-auto mb-4">
                <Stethoscope className="w-6 h-6 text-[#C89F5A]" />
              </div>
              <h3 className="text-lg font-bold text-[#2A2A2A] mb-2">Error-Checked Paperwork</h3>
              <p className="text-sm text-[#5A5A5A] leading-relaxed">We review every document so a rushed move doesn't get derailed by a rejection.</p>
            </div>
            <div className="bg-white rounded-[20px] shadow-sm p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-[#4F5BD5]/10 flex items-center justify-center mx-auto mb-4">
                <Plane className="w-6 h-6 text-[#4F5BD5]" />
              </div>
              <h3 className="text-lg font-bold text-[#2A2A2A] mb-2">Earliest Safe Flight</h3>
              <p className="text-sm text-[#5A5A5A] leading-relaxed">We book the soonest manifest cargo option that keeps your pet safe and compliant.</p>
            </div>
          </div>

          <div className="text-center">
            <WhatsAppCta text={URGENT_MSG} label="Get my 15-minute assessment" className="whatsapp-pulse" />
          </div>
        </div>
      </section>

      {/* Internal links / related */}
      <section className="py-16 bg-white">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mb-8 text-center">
            Understand the Full Picture
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link to="/service/pet-import-dubai/" className="bg-[#F5F6FD] rounded-[20px] p-6 hover:shadow-md transition-shadow group">
              <div className="w-10 h-10 rounded-xl bg-[#4F5BD5]/10 flex items-center justify-center mb-4 group-hover:bg-[#4F5BD5]/20 transition-colors">
                <PawPrint className="w-5 h-5 text-[#4F5BD5]" />
              </div>
              <h3 className="text-lg font-bold text-[#2A2A2A] mb-2 group-hover:text-[#4F5BD5] transition-colors">Pet Import to Dubai</h3>
              <p className="text-sm text-[#5A5A5A] leading-relaxed">Our core import service — how we manage your pet's move from start to arrival.</p>
            </Link>
            <Link to="/guides/uae-pet-import-requirements/" className="bg-[#F5F6FD] rounded-[20px] p-6 hover:shadow-md transition-shadow group">
              <div className="w-10 h-10 rounded-xl bg-[#4F5BD5]/10 flex items-center justify-center mb-4 group-hover:bg-[#4F5BD5]/20 transition-colors">
                <FileCheck className="w-5 h-5 text-[#4F5BD5]" />
              </div>
              <h3 className="text-lg font-bold text-[#2A2A2A] mb-2 group-hover:text-[#4F5BD5] transition-colors">UAE Import Requirements</h3>
              <p className="text-sm text-[#5A5A5A] leading-relaxed">The full document checklist, permit rules, and step-by-step timeline for the UAE.</p>
            </Link>
            <Link to="/guides/rabies-titer-test-dubai/" className="bg-[#F5F6FD] rounded-[20px] p-6 hover:shadow-md transition-shadow group">
              <div className="w-10 h-10 rounded-xl bg-[#C89F5A]/10 flex items-center justify-center mb-4 group-hover:bg-[#C89F5A]/20 transition-colors">
                <Stethoscope className="w-5 h-5 text-[#C89F5A]" />
              </div>
              <h3 className="text-lg font-bold text-[#2A2A2A] mb-2 group-hover:text-[#C89F5A] transition-colors">Rabies Titer Test</h3>
              <p className="text-sm text-[#5A5A5A] leading-relaxed">Why high-risk countries can't move last-minute — the titer test and 90-day wait, explained.</p>
            </Link>
            <Link to="/contact/" className="bg-[#F5F6FD] rounded-[20px] p-6 hover:shadow-md transition-shadow group">
              <div className="w-10 h-10 rounded-xl bg-[#4F5BD5]/10 flex items-center justify-center mb-4 group-hover:bg-[#4F5BD5]/20 transition-colors">
                <MessageCircle className="w-5 h-5 text-[#4F5BD5]" />
              </div>
              <h3 className="text-lg font-bold text-[#2A2A2A] mb-2 group-hover:text-[#4F5BD5] transition-colors">Contact Us</h3>
              <p className="text-sm text-[#5A5A5A] leading-relaxed">Reach our team directly to talk through your urgent move and next steps.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-[#F5F6FD]">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mb-4 text-center">
              Urgent Relocation FAQ
            </h2>
            <p className="text-[#5A5A5A] text-base leading-relaxed text-center mb-10">
              Straight answers to the questions people ask when the clock is ticking.
            </p>
            <div className="bg-white rounded-[20px] shadow-sm p-6 lg:p-8">
              {faqData.map((faq, i) => (
                <FAQItem key={i} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Official Sources */}
      <OfficialSources />

      {/* Final CTA */}
      <section className="py-16 lg:py-20 bg-[#4F5BD5]">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8 text-center">
          <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-white mb-4">
            Your Deadline Is Closing — Let's Move
          </h2>
          <p className="text-white/80 text-lg leading-relaxed max-w-2xl mx-auto mb-8">
            Send us your pet's details now and we'll give you a clear, honest answer about what's possible —
            usually within 15 minutes. No pressure, no impossible promises. Just a calm plan to get your pet
            to Dubai.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <WhatsAppCta text={URGENT_MSG} label="Message Us on WhatsApp" className="whatsapp-pulse" />
            <a
              href={`tel:${PHONE_E164}`}
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-white/10 text-white rounded-2xl font-semibold text-sm hover:bg-white/20 transition-colors"
            >
              <Phone className="w-4 h-4" />
              Call {PHONE_DISPLAY}
            </a>
            <Link
              to="/how-it-works/"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-white/10 text-white rounded-2xl font-semibold text-sm hover:bg-white/20 transition-colors"
            >
              <HelpCircle className="w-4 h-4" />
              How It Works
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
