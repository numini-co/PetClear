import { useState } from 'react'
import {
  CheckCircle,
  ChevronDown,
  ChevronUp,
  MessageCircle,
  Handshake,
  Plane,
  Stethoscope,
  Shield,
  Home,
  Phone,
  FileText,
  Clock,
  X,
  PawPrint,
  Heart,
  Sparkles,
  Truck,
} from 'lucide-react'
import SEOHead from '../components/SEOHead.tsx'
import Hero from '../components/Hero.tsx'
import { getWhatsAppUrl, BASE_URL } from '../lib/seo.ts'
import Breadcrumb from '../components/Breadcrumb.tsx'
import OfficialSources from '../components/OfficialSources.tsx'

/* ─── FAQ accordion helper ─── */
function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="faq-item">
      <button
        onClick={() => setOpen(!open)}
        className="faq-question w-full text-left"
        aria-expanded={open}
      >
        <span>{question}</span>
        {open ? <ChevronUp className="w-5 h-5 shrink-0 ml-3" /> : <ChevronDown className="w-5 h-5 shrink-0 ml-3" />}
      </button>
      {open && (
        <div className="faq-answer">
          <p>{answer}</p>
        </div>
      )}
    </div>
  )
}

/* ─── WhatsApp link builder ─── */
function WhatsAppLink({ text, label, className }: { text: string; label: string; className?: string }) {
  return (
    <a
      href={getWhatsAppUrl(text)}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {label}
    </a>
  )
}

/* ─── Page ─── */
export default function HowItWorksPage() {
  const steps = [
    {
      num: 1,
      id: 'step1',
      title: 'Free Consultation & Quote',
      duration: 'WhatsApp, 15 minutes',
      body: 'You message us on WhatsApp. We reply within 15 minutes during business hours (or by 8 AM if you message overnight). We ask five things: what type of pet, breed and weight, where are you moving from and to, when do you need to move, and do you have any existing documents? Within 24 hours, we send you an itemized quote. Not a vague range. A line-by-line breakdown of what you\'ll pay, when you\'ll pay it, and what each charge covers.',
      icon: <MessageCircle className="w-5 h-5" />,
      youDo: 'Send pet details and photos on WhatsApp',
      weDo: 'Assess route, check breed restrictions, review timeline, send itemized quote',
      timeline: 'Same day to 24 hours',
    },
    {
      num: 2,
      id: 'step2',
      title: 'Document Check & Eligibility Review',
      duration: '1–3 days',
      body: 'Once you accept the quote, we audit every document your pet needs. This includes ISO 11784/11785 microchip certificate, rabies vaccination records, core vaccination records, any existing health certificates, and your passport copy for permit applications. We check for the three most common errors that cause delays: mismatched microchip numbers, expired vaccines, and health certificates issued outside the 10-day travel window. If anything is missing or wrong, we tell you immediately — not at the airport.',
      icon: <FileText className="w-5 h-5" />,
      youDo: 'Send photos or scans of existing documents',
      weDo: 'Complete document audit, flag issues, create a checklist of what\'s missing',
      timeline: '1–3 days',
    },
    {
      num: 3,
      id: 'step3',
      title: 'Partner Matching',
      duration: '1–2 days',
      body: 'Not every partner is right for every move. A vet who excels at Dubai-to-London exports may not be the best choice for a Dubai-to-Sydney move. A cargo agent who handles large dogs beautifully may not specialize in cats. We match you based on your route, your pet\'s size and breed, your timeline, and your budget. You get the best specialist for each step. Not a generalist who does everything adequately.',
      icon: <Handshake className="w-5 h-5" />,
      youDo: 'Approve the partner match and service tier',
      weDo: 'Select and brief the right vet, cargo agent, and ground transport partner',
      timeline: '1–2 days',
    },
    {
      num: 4,
      id: 'step4',
      title: 'Booking & Coordination',
      duration: '3–10 days',
      body: 'This is where the logistics come together. We book your pet\'s manifest cargo flight with the airline\'s cargo department, your IATA-certified travel crate measured to your pet\'s exact dimensions, your vet appointment for the pre-travel health certificate, your MOCCAE permit application, and your ground transport for pickup and delivery. We confirm in writing: flight number, date, and departure time; crate dimensions and ventilation compliance; vet appointment date and location; permit application submission date; pickup time from your home. You receive a single document with all confirmed dates, times, and contact details.',
      icon: <Plane className="w-5 h-5" />,
      youDo: 'Approve bookings, confirm pickup address, pay deposit',
      weDo: 'Coordinate all bookings, confirm in writing, manage schedule conflicts',
      timeline: '3–10 days (depending on route and permit processing)',
    },
    {
      num: 5,
      id: 'step5',
      title: 'Pre-Travel Preparation',
      duration: '2–5 days before travel',
      body: 'In the final days before travel, we run through our pre-flight checklist. Vet visit: Our partner vet examines your pet, issues the international health certificate, and administers any required antiparasitic treatment. We check the certificate for the three common errors: wrong date format, missing stamp, and mismatched microchip number. Crate fitting: We deliver the IATA-certified crate to your home 2–3 days before travel. Your pet gets time to explore, smell, and settle in. We provide a crate-training guide if your pet is anxious. Permit confirmation: We verify your MOCCAE permit is approved and valid for your travel date. Final update: We send you a WhatsApp message 24 hours before travel with confirmed flight details, pickup time, crate status, and your pet\'s current condition.',
      icon: <Stethoscope className="w-5 h-5" />,
      youDo: 'Bring pet to vet appointment, help pet get comfortable in crate',
      weDo: 'Verify all documents, deliver crate, run final compliance check',
      timeline: '2–5 days before travel',
    },
    {
      num: 6,
      id: 'step6',
      title: 'Travel Day Support',
      duration: '1 travel day',
      body: 'Travel day is the most stressful part for pet owners. We know. We\'ve been there. Pickup: Our ground transport partner collects your pet from your home at the confirmed time. We send you a photo when your pet is loaded. Airport check-in: Our cargo partner handles check-in at the DXB or DWC cargo terminal. We confirm your pet is accepted, the crate is compliant, and the flight is on schedule. Boarding: We send a photo of your pet in the holding area before boarding. In transit: We track the flight and send updates at each milestone (departure, mid-flight estimate, landing). Landing: We confirm arrival and begin customs clearance immediately. You are never left wondering. If the flight is delayed, we tell you before you ask. If there\'s a problem, we tell you and we tell you what we\'re doing about it.',
      icon: <Plane className="w-5 h-5" />,
      youDo: 'Be available for pickup and be near your phone for updates',
      weDo: 'Coordinate pickup, check-in, tracking, customs clearance, and real-time updates',
      timeline: '1 travel day',
    },
    {
      num: 7,
      id: 'step7',
      title: 'Arrival & Handover',
      duration: '2–6 hours after landing',
      body: 'The best part. Customs clearance: Our partner clears your pet through Dubai customs at the cargo terminal. We handle all paperwork, inspection, and fees. Health check: If required, our partner vet performs a brief arrival health check. Delivery: We transport your pet directly to your home, hotel, or designated address. We send a photo 10 minutes before arrival so you know exactly when to expect them. Reunion: Your pet is home. We follow up 24 hours later to check how they\'re settling in. Post-arrival support: We assist with Dubai Municipality registration via the Aleef app (required within 30 days of arrival). If you need a local vet recommendation, we connect you with our trusted partners.',
      icon: <Home className="w-5 h-5" />,
      youDo: 'Be present for delivery, settle your pet in',
      weDo: 'Customs clearance, delivery, follow-up, registration support',
      timeline: '2–6 hours after landing',
    },
  ]

  const comparisonRows = [
    { task: 'Your single WhatsApp contact', us: true, them: false },
    { task: 'MOCCAE permit application', us: true, them: false },
    { task: 'Document review & compliance check', us: true, them: false },
    { task: 'Flight booking with cargo department', us: true, them: false },
    { task: 'IATA crate supply & sizing', us: true, them: false },
    { task: 'Timeline coordination & reminders', us: true, them: false },
    { task: 'Real-time updates & photos', us: true, them: false },
    { task: 'Problem-solving if issues arise', us: true, them: false },
    { task: 'Customs clearance coordination', us: true, them: false },
    { task: 'Door-to-door transport booking', us: true, them: false },
    { task: 'Veterinary examination', us: false, them: true, themLabel: 'Vet partner' },
    { task: 'Health certificate issuance', us: false, them: true, themLabel: 'Vet partner' },
    { task: 'Physical cargo handling at airport', us: false, them: true, themLabel: 'Cargo agent' },
    { task: 'Airline flight operations', us: false, them: true, themLabel: 'Airline' },
    { task: 'Government inspection & stamping', us: false, them: true, themLabel: 'Customs broker' },
    { task: 'Driving & ground transport', us: false, them: true, themLabel: 'Transport partner' },
  ]

  const heroWaText = 'Hi, I want to understand how the relocation process works for my [dog/cat] from [country] to Dubai. Can you walk me through it?'

  const schemas = [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Are you a middleman?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. A middleman takes a cut and adds no value. We are a coordination and quality controller. We handle your permit, book your flight, provide your crate, coordinate your vet, arrange your transport, and update you every step of the way. If anything goes wrong, we fix it. You pay one fee for one point of contact and a network of experts. That\'s not a markup — that\'s a service.',
          },
        },
        {
          '@type': 'Question',
          name: 'Why not just go direct to the airline or vet?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'You can go direct, but airline passenger reservations often don\'t know pet cargo rules, and vets are medical experts, not travel experts. You also become the project manager, chasing five different phone numbers if something goes wrong. DIY is possible, but the error rate is high and the hidden costs often exceed our service fee. We exist because your time and your pet\'s safety are worth more than the coordination fee.',
          },
        },
        {
          '@type': 'Question',
          name: 'How long does the whole process take?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'From low-risk countries like the UK, EU, or USA, the process takes 4 to 6 weeks from first consultation to reunion. From high-risk countries requiring a rabies titer test, the minimum timeline is 4 months including the 90-day waiting period after the titer test. We recommend starting 8 to 12 weeks before your move date.',
          },
        },
        {
          '@type': 'Question',
          name: 'What if my pet\'s flight is cancelled or delayed?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'We monitor every flight. If a cancellation or delay affects your pet, we rebook on the next available pet-friendly flight at no additional coordination fee, arrange extended boarding with our vet partner if needed, and send photos and updates every 2 hours. Where an error on our side causes a delay, we\'ll make it right — the specifics are set out in your service agreement.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do you offer insurance?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. We offer three tiers of travel insurance: Basic (included) covers flight rebooking and boarding; Comprehensive (recommended) covers veterinary emergencies during transit, travel delay costs, and document error protection; Premium (full coverage) includes everything above plus cancellation protection, door-to-door delay coverage, and a dedicated handler. We explain what each covers in plain language with no small print surprises.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'How to Relocate Your Pet to or from Dubai',
      description: 'A step-by-step guide to relocating your dog or cat to or from Dubai using a professional pet relocation coordination service.',
      totalTime: 'P4W',
      estimatedCost: {
        '@type': 'MonetaryAmount',
        currency: 'AED',
        value: '8000-25000',
      },
      supply: [
        { '@type': 'HowToSupply', name: 'ISO 11784/11785 microchip' },
        { '@type': 'HowToSupply', name: 'Rabies vaccination certificate' },
        { '@type': 'HowToSupply', name: 'IATA-approved travel crate' },
        { '@type': 'HowToSupply', name: 'International health certificate' },
      ],
      tool: [
        { '@type': 'HowToTool', name: 'MOCCAE import/export permit application' },
        { '@type': 'HowToTool', name: 'Emirates SkyCargo or Etihad Cargo booking' },
      ],
      step: [
        {
          '@type': 'HowToStep',
          name: 'Free consultation and quote',
          text: 'Contact Dubai Pet Relocation via WhatsApp with your pet\'s type, breed, weight, origin, destination, and planned move date. Receive an itemized quote within 24 hours.',
          url: `${BASE_URL}/how-it-works/#step1`,
        },
        {
          '@type': 'HowToStep',
          name: 'Document check and eligibility review',
          text: 'Dubai Pet Relocation audits your pet\'s existing documents including microchip certificate, vaccination records, and health certificates. They flag errors and provide a checklist of missing items.',
          url: `${BASE_URL}/how-it-works/#step2`,
        },
        {
          '@type': 'HowToStep',
          name: 'Partner matching',
          text: 'Dubai Pet Relocation matches you with the best vetted partners for your specific route, pet size, breed, and budget. You approve the match and service tier.',
          url: `${BASE_URL}/how-it-works/#step3`,
        },
        {
          '@type': 'HowToStep',
          name: 'Booking and coordination',
          text: 'Dubai Pet Relocation books your pet\'s cargo flight, IATA-certified crate, vet appointment, and ground transport. You receive a single document with all confirmed dates and details.',
          url: `${BASE_URL}/how-it-works/#step4`,
        },
        {
          '@type': 'HowToStep',
          name: 'Pre-travel preparation',
          text: 'Your pet visits the vet partner for a health certificate and any required treatments. Dubai Pet Relocation delivers the IATA crate to your home 2-3 days before travel for familiarization.',
          url: `${BASE_URL}/how-it-works/#step5`,
        },
        {
          '@type': 'HowToStep',
          name: 'Travel day support',
          text: 'Ground transport collects your pet from your home. The cargo partner handles airport check-in. Dubai Pet Relocation tracks the flight and sends real-time updates and photos at every milestone.',
          url: `${BASE_URL}/how-it-works/#step6`,
        },
        {
          '@type': 'HowToStep',
          name: 'Arrival and handover',
          text: 'Dubai Pet Relocation handles customs clearance and delivers your pet to your door. They follow up 24 hours later and assist with Dubai Municipality registration via the Aleef app.',
          url: `${BASE_URL}/how-it-works/#step7`,
        },
      ],
    },
    {
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
          name: 'How It Works',
          item: `${BASE_URL}/how-it-works/`,
        },
      ],
    },
  ]

  return (
    <div className="bg-[#F5F6FD]">
      <SEOHead
        title="How Pet Relocation Works in Dubai | 7-Step Process"
        description="Our transparent 7-step pet relocation process for Dubai: free consultation, document check, partner matching, booking, pre-travel prep, travel day, and arrival."
        keywords="how pet relocation works, pet relocation process Dubai, dog relocation steps, cat relocation process, pet transport Dubai steps"
        canonical={`${BASE_URL}/how-it-works/`}
        ogType="article"
        schemas={schemas}
      />
      <Breadcrumb items={[{label: 'How It Works'}]} />

      {/* ═══════════ HERO ═══════════ */}
      <Hero
        image="/images/how-it-works-hero.jpg"
        imageAlt="A dog beside a travel crate and a checklist, representing the step-by-step relocation process"
        eyebrow="How It Works"
        title="How Pet Relocation Works in Dubai: A Clear, Step-by-Step Guide"
        subtitle="Your pet relocation coordination service — we coordinate a team of vetted specialists so you don't manage five companies from your phone at 2 AM."
        updated="Updated June 2026"
        whatsappMessage={heroWaText}
      />

      {/* ═══════════ WHAT WE ACTUALLY DO ═══════════ */}
      <section className="section-padding">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mb-4">
            What We Actually Do (And Why It&apos;s Not &quot;Middlemanning&quot;)
          </h2>
          <p className="text-[#5A5A5A] mb-8">
            Think of us like a wedding planner. We don&apos;t bake the cake. We don&apos;t play the music. We don&apos;t make the flowers. But we taste the cake, check the sound system, and make sure the bouquet arrives on time. If the florist is late, we fix it — and you blame us, not them. That&apos;s the value.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-[20px] shadow-sm p-6 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
              <h3 className="font-bold text-[#4F5BD5] mb-4 flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                We handle:
              </h3>
              <ul className="text-[#5A5A5A] space-y-2 text-sm">
                <li>Your single point of contact (one WhatsApp thread, one human, one timeline)</li>
                <li>Your MOCCAE permit application and follow-up</li>
                <li>Your flight booking with the airline&apos;s cargo department (not the passenger desk)</li>
                <li>Your IATA-certified travel crate, sized and labeled correctly</li>
                <li>Your vet appointment coordination and document review</li>
                <li>Your customs clearance at DXB or DWC cargo terminal</li>
                <li>Your door-to-door transport on both ends</li>
                <li>Your real-time updates, photos, and status reports</li>
                <li>Your problem-solving if anything goes sideways</li>
              </ul>
            </div>

            <div className="bg-white rounded-[20px] shadow-sm p-6 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
              <h3 className="font-bold text-[#4F5BD5] mb-4 flex items-center gap-2">
                <Handshake className="w-5 h-5" />
                Our partners handle:
              </h3>
              <ul className="text-[#5A5A5A] space-y-2 text-sm">
                <li>The actual veterinary examination and health certificate</li>
                <li>The physical cargo handling at the airport terminal</li>
                <li>The airline&apos;s flight operations and cargo hold</li>
                <li>The government inspection and stamping at customs</li>
                <li>The ground transport driving</li>
              </ul>
            </div>
          </div>

          <p className="text-[#5A5A5A] mb-8">
            We don&apos;t own an airline. We don&apos;t run a veterinary clinic. We don&apos;t employ cargo handlers. But we know exactly which ones to trust, and we manage every interaction so you don&apos;t have to. If you went direct to each provider, you&apos;d spend 20+ hours coordinating, you&apos;d have no backup if one fails, and if something went wrong, you&apos;d be chasing five different phone numbers. With us, you send one WhatsApp. We handle the rest.
          </p>

          <WhatsAppLink
            text="Hi, I want to understand how the relocation process works for my [dog/cat] from [country] to Dubai. Can you walk me through it?"
            label="Ask us anything on WhatsApp"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] text-white rounded-2xl font-semibold hover:bg-[#1ebe57] transition-colors"
          />
        </div>
      </section>

      {/* ═══════════ 7-STEP PROCESS ═══════════ */}
      <section className="section-padding bg-white">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mb-4">
            Your Pet&apos;s Journey: 7 Steps From Consultation to Reunion
          </h2>
          <p className="text-[#5A5A5A] mb-10">
            Below is the exact process we follow for every relocation. If you book with us, you&apos;ll receive a personalized timeline with dates, deadlines, and your dedicated contact at each step.
          </p>

          <div className="relative">
            {/* vertical line */}
            <div className="absolute left-[19px] top-0 bottom-0 w-0.5 bg-[#4F5BD5]/20 hidden sm:block" />

            <div className="space-y-10">
              {steps.map((step) => (
                <div key={step.num} id={step.id} className="relative sm:pl-14">
                  {/* timeline dot */}
                  <div className="hidden sm:flex absolute left-0 top-0 w-10 h-10 rounded-full bg-[#4F5BD5] text-white items-center justify-center font-bold text-sm shadow-md">
                    {step.num}
                  </div>
                  <div className="bg-[#F5F6FD] rounded-[20px] p-6 sm:p-8 border border-[#4F5BD5]/10">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="sm:hidden w-8 h-8 rounded-full bg-[#4F5BD5] text-white flex items-center justify-center font-bold text-xs">
                        {step.num}
                      </div>
                      <div className="w-9 h-9 rounded-lg bg-[#4F5BD5]/10 flex items-center justify-center text-[#4F5BD5]">
                        {step.icon}
                      </div>
                      <div>
                        <h3 className="font-bold text-[#2A2A2A] text-lg">{step.title}</h3>
                        <span className="text-xs font-semibold text-[#4F5BD5] uppercase tracking-wide">{step.duration}</span>
                      </div>
                    </div>
                    <p className="text-[#5A5A5A] leading-relaxed mb-4">{step.body}</p>

                    <div className="grid sm:grid-cols-2 gap-4 bg-white rounded-2xl p-4">
                      <div>
                        <p className="text-xs font-semibold text-[#4F5BD5] uppercase tracking-wide mb-1">You do</p>
                        <p className="text-sm text-[#2A2A2A]">{step.youDo}</p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-[#4F5BD5] uppercase tracking-wide mb-1">We do</p>
                        <p className="text-sm text-[#2A2A2A]">{step.weDo}</p>
                      </div>
                    </div>
                    <p className="text-xs text-[#8A8A8A] mt-3 flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      Typical timeline: {step.timeline}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10">
            <WhatsAppLink
              text="Hi, I want to understand how the relocation process works for my [dog/cat] from [country] to Dubai. Can you walk me through it?"
              label="Start your pet's journey — WhatsApp us"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] text-white rounded-2xl font-semibold hover:bg-[#1ebe57] transition-colors"
            />
          </div>
        </div>
      </section>

      {/* ═══════════ WHAT WE DO VS PARTNERS ═══════════ */}
      <section className="section-padding">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mb-4">
            Radical Transparency: What Dubai Pet Relocation Handles vs. What Our Partners Handle
          </h2>
          <p className="text-[#5A5A5A] mb-8">
            We don&apos;t hide our partner model. We&apos;re proud of it. Here&apos;s the exact breakdown of who does what.
          </p>

          <div className="overflow-x-auto rounded-2xl shadow-sm border border-gray-100 mb-8">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Task</th>
                  <th>Dubai Pet Relocation (Us)</th>
                  <th>Our Partners</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr key={i}>
                    <td className="font-medium text-[#2A2A2A]">{row.task}</td>
                    <td>
                      {row.us ? (
                        <span className="inline-flex items-center gap-1 text-[#4F5BD5] font-semibold">
                          <CheckCircle className="w-4 h-4" /> Yes
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-red-500 font-semibold">
                          <X className="w-4 h-4" /> No
                        </span>
                      )}
                    </td>
                    <td>
                      {row.them ? (
                        <span className="inline-flex items-center gap-1 text-[#4F5BD5] font-semibold">
                          <CheckCircle className="w-4 h-4" /> Yes {row.themLabel && <span className="text-[#5A5A5A] font-normal">({row.themLabel})</span>}
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-red-500 font-semibold">
                          <X className="w-4 h-4" /> No
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-white rounded-[20px] shadow-sm p-6 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
            <h3 className="font-bold text-[#2A2A2A] mb-3">What this means for you:</h3>
            <p className="text-[#5A5A5A] mb-4">
              You have one contact. One timeline. One invoice. But behind that one contact is a team of specialists who each do their part better than a generalist could.
            </p>
            <p className="text-[#5A5A5A]">
              If our vet partner is at capacity, we have alternatives. If our cargo partner&apos;s flight is cancelled, we rebook through another. If our transport partner is delayed, we dispatch a backup. You don&apos;t manage any of this. We do.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════ WHO OUR PARTNERS ARE ═══════════ */}
      <section className="section-padding bg-white">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mb-4">
            Meet the Specialists Behind Your Pet&apos;s Journey
          </h2>
          <p className="text-[#5A5A5A] mb-8">
            We work with the same partners repeatedly because consistency matters. These are not random contractors. They are vetted, monitored, and accountable to us.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-[#F5F6FD] rounded-[20px] p-6 border border-[#4F5BD5]/10">
              <h3 className="font-bold text-[#2A2A2A] mb-3 flex items-center gap-2">
                <Stethoscope className="w-5 h-5 text-[#4F5BD5]" />
                Veterinary Clinics
              </h3>
              <ul className="text-[#5A5A5A] space-y-2 text-sm">
                <li><strong>German Veterinary Clinic</strong> (Dubai) — ISO microchipping, rabies vaccines, health certificates, export documentation</li>
                <li><strong>British Veterinary Hospital</strong> (Dubai) — Specialist in brachycephalic breeds, pre-travel health checks</li>
              </ul>
            </div>

            <div className="bg-[#F5F6FD] rounded-[20px] p-6 border border-[#4F5BD5]/10">
              <h3 className="font-bold text-[#2A2A2A] mb-3 flex items-center gap-2">
                <Plane className="w-5 h-5 text-[#4F5BD5]" />
                IATA-Certified Cargo Agents
              </h3>
              <ul className="text-[#5A5A5A] space-y-2 text-sm">
                <li>Licensed cargo agents based at DXB and DWC terminals</li>
                <li>Direct relationships with Emirates SkyCargo, Etihad Cargo, and flydubai Cargo</li>
                <li>Specialists in live animal handling and IATA LAR compliance</li>
              </ul>
            </div>

            <div className="bg-[#F5F6FD] rounded-[20px] p-6 border border-[#4F5BD5]/10">
              <h3 className="font-bold text-[#2A2A2A] mb-3 flex items-center gap-2">
                <Plane className="w-5 h-5 text-[#4F5BD5]" />
                Airlines
              </h3>
              <ul className="text-[#5A5A5A] space-y-2 text-sm">
                <li><strong>Emirates SkyCargo</strong> — Primary partner for most international routes</li>
                <li><strong>Etihad Cargo</strong> — Secondary partner for specific routes and capacity backup</li>
                <li><strong>flydubai Cargo</strong> — Regional and domestic routes</li>
              </ul>
            </div>

            <div className="bg-[#F5F6FD] rounded-[20px] p-6 border border-[#4F5BD5]/10">
              <h3 className="font-bold text-[#2A2A2A] mb-3 flex items-center gap-2">
                <Truck className="w-5 h-5 text-[#4F5BD5]" />
                Customs Brokers & Ground Transport
              </h3>
              <ul className="text-[#5A5A5A] space-y-2 text-sm">
                <li>Licensed UAE customs brokers with MOCCAE clearance expertise</li>
                <li>Air-conditioned, pet-specific ground transport vehicles</li>
                <li>Drivers trained in pet handling and crate safety</li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-[20px] shadow-sm p-6 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
            <h3 className="font-bold text-[#2A2A2A] mb-4">How We Choose Partners</h3>
            <p className="text-[#5A5A5A] mb-4">Every partner must pass our vetting criteria:</p>
            <ol className="text-[#5A5A5A] space-y-2 list-decimal list-inside">
              <li><strong>License verification</strong> — Valid MOCCAE, DED, or equivalent trade license</li>
              <li><strong>Certification check</strong> — IPATA, IATA LAR, or relevant professional certification</li>
              <li><strong>Reference audit</strong> — Minimum 3 verified references from other pet relocation companies</li>
              <li><strong>Trial period</strong> — We observe their work on 3+ relocations before adding them to our roster</li>
              <li><strong>Ongoing monitoring</strong> — Quarterly review of their performance, response times, and customer feedback</li>
            </ol>
            <p className="text-[#5A5A5A] mt-4">
              If a partner drops below our standards, we remove them. No exceptions.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════ WHAT YOU GET AS A CLIENT ═══════════ */}
      <section className="section-padding">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mb-8">What You Get When You Work With Dubai Pet Relocation</h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-[20px] shadow-sm p-6 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
              <div className="w-11 h-11 rounded-[14px] bg-[#E9ECFB] flex items-center justify-center mb-4">
                <MessageCircle className="w-5 h-5 text-[#4F5BD5]" />
              </div>
              <h3 className="font-bold text-[#2A2A2A] mb-2">One WhatsApp contact</h3>
              <p className="text-sm text-[#5A5A5A]">No email ping-pong. No chasing five phone numbers. One human who knows your pet&apos;s name, your route, your timeline, and your concerns.</p>
            </div>

            <div className="bg-white rounded-[20px] shadow-sm p-6 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
              <div className="w-11 h-11 rounded-[14px] bg-[#E9ECFB] flex items-center justify-center mb-4">
                <Phone className="w-5 h-5 text-[#4F5BD5]" />
              </div>
              <h3 className="font-bold text-[#2A2A2A] mb-2">Real-time updates</h3>
              <p className="text-sm text-[#5A5A5A]">Photo at check-in. Photo at boarding. Confirmation of departure. Confirmation of landing. If the flight is delayed, we tell you before you ask.</p>
            </div>

            <div className="bg-white rounded-[20px] shadow-sm p-6 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
              <div className="w-11 h-11 rounded-[14px] bg-[#E9ECFB] flex items-center justify-center mb-4">
                <FileText className="w-5 h-5 text-[#4F5BD5]" />
              </div>
              <h3 className="font-bold text-[#2A2A2A] mb-2">Document help</h3>
              <p className="text-sm text-[#5A5A5A]">We review every document three times. We know the current MOCCAE forms. We submit permits ourselves. If there&apos;s an issue, we fix it before it becomes a problem.</p>
            </div>

            <div className="bg-white rounded-[20px] shadow-sm p-6 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
              <div className="w-11 h-11 rounded-[14px] bg-[#E9ECFB] flex items-center justify-center mb-4">
                <Shield className="w-5 h-5 text-[#4F5BD5]" />
              </div>
              <h3 className="font-bold text-[#2A2A2A] mb-2">Price protection</h3>
              <p className="text-sm text-[#5A5A5A]">The quote you receive is itemized and fixed. Government fees don&apos;t change. Our service fee doesn&apos;t change. Where an error on our side causes a delay, we&apos;ll make it right — the specifics are set out in your service agreement.</p>
            </div>

            <div className="bg-white rounded-[20px] shadow-sm p-6 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
              <div className="w-11 h-11 rounded-[14px] bg-[#E9ECFB] flex items-center justify-center mb-4">
                <Clock className="w-5 h-5 text-[#4F5BD5]" />
              </div>
              <h3 className="font-bold text-[#2A2A2A] mb-2">WhatsApp during business hours</h3>
              <p className="text-sm text-[#5A5A5A]">Message us on WhatsApp during opening hours (9:00 AM – 8:00 PM GST). For travel-day issues we prioritise replies on the active thread.</p>
            </div>

            <div className="bg-white rounded-[20px] shadow-sm p-6 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
              <div className="w-11 h-11 rounded-[14px] bg-[#E9ECFB] flex items-center justify-center mb-4">
                <Heart className="w-5 h-5 text-[#4F5BD5]" />
              </div>
              <h3 className="font-bold text-[#2A2A2A] mb-2">Problem-solving</h3>
              <p className="text-sm text-[#5A5A5A]">If your flight is cancelled, we rebook. If your vet is delayed, we reschedule. If customs asks for an extra document, we handle it. You never handle a crisis alone.</p>
            </div>

            <div className="bg-white rounded-[20px] shadow-sm p-6 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 sm:col-span-2 lg:col-span-3">
              <div className="w-11 h-11 rounded-[14px] bg-[#E9ECFB] flex items-center justify-center mb-4">
                <Home className="w-5 h-5 text-[#4F5BD5]" />
              </div>
              <h3 className="font-bold text-[#2A2A2A] mb-2">Post-arrival support</h3>
              <p className="text-sm text-[#5A5A5A]">We help with Dubai Municipality registration, local vet recommendations, and settling-in advice. Your relationship with us doesn&apos;t end at the airport.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ PRICING TRANSPARENCY ═══════════ */}
      <section className="section-padding bg-white">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mb-4">
            How We Make Money (And Why It Costs What It Costs)
          </h2>
          <p className="text-[#5A5A5A] mb-8">
            We make money in two ways: a partner commission and a coordination fee. We don&apos;t mark up government fees. We don&apos;t add hidden charges. We show you exactly where every dirham goes.
          </p>

          <div className="overflow-x-auto rounded-2xl shadow-sm border border-gray-100 mb-8">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Item</th>
                  <th>Cost (AED)</th>
                  <th>Who Pays</th>
                  <th>Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>MOCCAE export permit</td><td>200</td><td>You</td><td>Government fee, no markup</td></tr>
                <tr><td>Veterinary health check &amp; certificate</td><td>800</td><td>You</td><td>Vet partner fee</td></tr>
                <tr><td>ISO microchip (if needed)</td><td>150</td><td>You</td><td>One-time cost</td></tr>
                <tr><td>IATA travel crate</td><td>600</td><td>You</td><td>Size-dependent</td></tr>
                <tr><td>Air freight (cargo)</td><td>4,500</td><td>You</td><td>Airline fee, no markup</td></tr>
                <tr><td>Customs clearance</td><td>400</td><td>You</td><td>Broker fee</td></tr>
                <tr><td>Ground transport (pickup + delivery)</td><td>300</td><td>You</td><td>Transport partner fee</td></tr>
                <tr className="bg-[#4F5BD5]/5"><td className="font-bold text-[#2A2A2A]">Dubai Pet Relocation service fee</td><td className="font-bold text-[#2A2A2A]">2,500</td><td className="font-bold text-[#2A2A2A]">You</td><td className="font-bold text-[#2A2A2A]">Our coordination + support fee</td></tr>
                <tr className="bg-[#4F5BD5]/10"><td className="font-bold text-[#2A2A2A]">Total estimated cost</td><td className="font-bold text-[#2A2A2A]">9,450</td><td></td><td className="font-bold text-[#2A2A2A]">Varies by route and pet size</td></tr>
              </tbody>
            </table>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-[#F5F6FD] rounded-[20px] p-6 border border-[#4F5BD5]/10">
              <h3 className="font-bold text-[#4F5BD5] mb-4">What our service fee covers:</h3>
              <ul className="text-sm text-[#5A5A5A] space-y-1">
                <li>Your dedicated relocation coordinator</li>
                <li>Document review and compliance checking</li>
                <li>MOCCAE permit application and follow-up</li>
                <li>Flight booking and rebooking if needed</li>
                <li>Crate sizing, supply, and labeling</li>
                <li>Vet appointment coordination</li>
                <li>Real-time updates and communication</li>
                <li>Customs clearance coordination</li>
                <li>Problem-solving and contingency management</li>
                <li>Post-arrival support and registration help</li>
              </ul>
            </div>

            <div className="bg-[#F5F6FD] rounded-[20px] p-6 border border-[#4F5BD5]/10">
              <h3 className="font-bold text-red-700 mb-4">What our service fee does NOT cover:</h3>
              <ul className="text-sm text-[#5A5A5A] space-y-1">
                <li>Government fees (MOCCAE, customs, municipality)</li>
                <li>Airline freight charges</li>
                <li>Veterinary fees</li>
                <li>Crate costs</li>
                <li>Ground transport fees</li>
              </ul>
              <p className="text-sm text-[#5A5A5A] mt-3">
                These are passed through at cost. We add nothing.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-[20px] shadow-sm p-6 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 mb-8">
            <h3 className="font-bold text-[#2A2A2A] mb-2">Why we don&apos;t mark up government fees:</h3>
            <p className="text-[#5A5A5A]">
              Because that would be dishonest. Government fees are fixed. You can verify them on the MOCCAE website. Adding a margin to a fixed fee is a hidden charge, and we don&apos;t do hidden charges.
            </p>
          </div>

          <WhatsAppLink
            text="Hi, I want to get a free consultation for pet relocation to Dubai."
            label="Get a free consultation"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] text-white rounded-2xl font-semibold hover:bg-[#1ebe57] transition-colors"
          />
        </div>
      </section>

      {/* ═══════════ FAQ ═══════════ */}
      <section className="section-padding">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mb-8">
            Frequently Asked Questions About Pet Relocation in Dubai
          </h2>
          <div className="bg-white rounded-[20px] shadow-sm p-6 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 sm:p-8">
            <FAQItem
              question="Are you a middleman?"
              answer="No. A middleman takes a cut and adds no value. We are a coordination and quality controller. Think of it this way: if you planned your own wedding, you'd still pay the caterer, the band, and the venue. But you'd spend 100 hours coordinating them, and if the flowers were late, you'd be the one making phone calls while wearing a tuxedo. A wedding planner charges a fee, but they save you time, prevent problems, and handle crises. That's what we do for your pet's move. Specifically: we handle your permit, book your flight, provide your crate, coordinate your vet, arrange your transport, and update you every step of the way. If anything goes wrong, we fix it. You pay one fee for one point of contact and a network of experts. That's not a markup — that's a service."
            />
            <FAQItem
              question="Why not just go direct to the airline or vet?"
              answer="You can. Many people do. But here's what happens when you go direct: Airline passenger reservations often don't know pet cargo rules. We've seen agents book pets on flights that don't accept live cargo, or quote crate sizes that don't meet IATA standards. We book through the cargo department, not the passenger desk. Vets are medical experts, not travel experts. They can issue a health certificate, but they may not know the specific format MOCCAE requires, or the 10-day validity window. We review every certificate before submission. You become the project manager. One wrong document, one missed deadline, one cancelled flight — and you're chasing phone calls at midnight while preparing for your own move. DIY is possible. But the error rate is high, the stress is extreme, and the hidden costs often exceed our service fee. We exist because your time and your pet's safety are worth more than the coordination fee."
            />
            <FAQItem
              question="How long does the whole process take?"
              answer="From low-risk countries like the UK, EU, or USA: 4 to 6 weeks from first consultation to reunion. From high-risk countries requiring a rabies titer test: minimum 4 months (including the 90-day waiting period after the titer test). We recommend starting 8 to 12 weeks before your move date. Starting earlier is always better. Starting later creates stress and may limit flight options."
            />
            <FAQItem
              question="What if my pet's flight is cancelled or delayed?"
              answer="We monitor every flight. If a cancellation or delay affects your pet, we: (1) Rebook on the next available pet-friendly flight at no additional coordination fee, (2) Arrange extended boarding with our vet partner if needed, (3) Send you photos and updates every 2 hours until your pet is airborne. Where an error on our side causes a delay, we'll make it right — the specifics are set out in your service agreement."
            />
            <FAQItem
              question="Do you offer insurance?"
              answer="Yes. We offer three tiers of travel insurance: Basic (included) covers flight rebooking and boarding if the delay is airline-related; Comprehensive (recommended) covers veterinary emergencies during transit, travel delay costs, and document error protection; Premium (full coverage) includes everything above plus cancellation protection, door-to-door delay coverage, and a dedicated handler for the entire journey. We explain what each covers in plain language — not insurance jargon. No small print surprises."
            />
          </div>
        </div>
      </section>

      <OfficialSources />

      {/* ═══════════ FINAL CTA ═══════════ */}
      <section className="relative overflow-hidden bg-[#4F5BD5] section-padding">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Ready to See How Simple Pet Relocation Can Be?
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-4">
            You&apos;ve read the process. You know what we do, what our partners do, and how we make money. You know we&apos;re not a middleman — we&apos;re your pet relocation coordination service.
          </p>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            The next step is a 15-minute WhatsApp conversation. No forms. No phone calls. No obligation. Tell us about your pet. We&apos;ll tell you what&apos;s needed, what it costs, and how long it takes. Then you decide.
          </p>
          <a
            href={getWhatsAppUrl(heroWaText)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#25D366] text-white rounded-2xl font-semibold hover:bg-[#1ebe57] transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
            Start your pet&apos;s journey
          </a>
        </div>
      </section>
    </div>
  )
}
