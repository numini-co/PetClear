import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  FileCheck,
  Shield,
  AlertTriangle,
  ChevronDown,
  ChevronUp,
  Clock,
  CheckCircle,
  HelpCircle,
  Globe,
  MessageCircle,
  PawPrint,
  FileText,
  Stethoscope,
  Microscope,
  Syringe,
  Plane,
  Ban,
} from 'lucide-react'
import SEOHead from '../components/SEOHead.tsx'
import Hero from '../components/Hero.tsx'
import Breadcrumb from '../components/Breadcrumb.tsx'
import WhatsAppBtn from '../components/WhatsAppBtn.tsx'
import OfficialSources from '../components/OfficialSources.tsx'
import { getWhatsAppUrl, BASE_URL } from '../lib/seo.ts'

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

/* ─── Checklist step type ─── */
interface ChecklistStep {
  num: number
  title: string
  when: string
  body: string
  icon: React.ReactNode
}

/* ─── Page ─── */
export default function ImportChecklistGuide() {
  const title = 'Pet Import Documents Checklist for Dubai — Step-by-Step (2026)'
  const description = 'A checkable, ordered documents checklist to import a pet to Dubai: microchip, rabies vaccination, titer test, MOCCAE import permit, health certificate, IATA crate, cargo booking, and arrival clearance. Timing notes and a documents summary table.'
  const canonical = `${BASE_URL}/guides/pet-import-documents-checklist/`
  const ogImage = `${BASE_URL}/assets/og-import-checklist.jpg`

  const checklistSteps: ChecklistStep[] = [
    {
      num: 1,
      title: 'Implant an ISO Microchip',
      when: 'Day 0 — before vaccination',
      body: 'Your pet needs a 15-digit ISO 11784/11785 compliant microchip. It must be implanted before the rabies vaccination. If your pet was vaccinated before being microchipped, the vaccination is invalid for UAE entry and must be repeated. The same microchip number must appear on every subsequent document.',
      icon: <Microscope className="w-5 h-5" />,
    },
    {
      num: 2,
      title: 'Administer the Rabies Vaccination',
      when: 'Day 0 — at least 21 days before travel',
      body: 'Your pet must be at least 12 weeks old at vaccination. The vaccine must be inactivated or recombinant (not attenuated live virus), administered at least 21 days before travel and within 12 months of arrival. The certificate must show the microchip number, vaccine batch number, manufacturer, date, and the vet’s signature and stamp.',
      icon: <Syringe className="w-5 h-5" />,
    },
    {
      num: 3,
      title: 'Complete Core Vaccinations',
      when: 'Day 0–14',
      body: 'Dogs need DHPPIL (Distemper, Hepatitis, Parvovirus, Parainfluenza, Leptospirosis). Cats need FVRCP (Feline Viral Rhinotracheitis, Calicivirus, Panleukopenia). These are usually given alongside the rabies vaccine or shortly after.',
      icon: <Shield className="w-5 h-5" />,
    },
    {
      num: 4,
      title: 'Rabies Titer Test — Only If From a High-Risk Country',
      when: 'Day 21+ — then a 90-day wait',
      body: 'If your pet is from a high-risk rabies country, a blood sample must be drawn at least 21 days after the rabies vaccination and processed at a WOAH/ISO 17025 accredited laboratory. The result must be at least 0.5 IU/ml. You then wait 90 days from the date of blood collection before the pet can enter the UAE. Pets from low-risk countries (UK, EU, USA, Canada, Australia, New Zealand, Japan, Singapore) do not need a titer test — but pets from Bahrain and Qatar do, despite being low-risk.',
      icon: <Stethoscope className="w-5 h-5" />,
    },
    {
      num: 5,
      title: 'Apply for the MOCCAE Import Permit',
      when: 'Within 90 days of travel',
      body: 'Apply online via the MOCCAE portal or the MOCCAE mobile app. The import permit costs AED 200 per animal and is valid for 90 days from issuance. Processing takes 3–7 working days. You will need the owner’s passport, UAE visa, the pet’s microchip number, vaccination records, and the titer test result if applicable. A release fee is also payable on arrival: AED 500/dog or AED 250/cat.',
      icon: <FileText className="w-5 h-5" />,
    },
    {
      num: 6,
      title: 'Obtain the International Health Certificate',
      when: 'Within 10 days of travel',
      body: 'A government-accredited veterinarian issues the International Health Certificate within 10 days of arrival. It must include the owner’s details, the microchip number, vaccination records, and antiparasitic treatment details. Antiparasitic treatment — internal deworming (Praziquantel) and external (Fipronil or Permethrin) — must be given within 14 days of arrival and recorded on the certificate.',
      icon: <FileCheck className="w-5 h-5" />,
    },
    {
      num: 7,
      title: 'Prepare an IATA-Compliant Travel Crate',
      when: '2–3 weeks before travel',
      body: 'Pets must travel in a hard-shell IATA Live Animal Regulations (LAR) compliant crate — not a soft carrier — with metal doors, ventilation on all four sides, and water and food bowls attached to the door. The crate must be large enough for your pet to stand, turn around, and lie down naturally. Start crate familiarisation 2–3 weeks before travel (longer for anxious pets).',
      icon: <PawPrint className="w-5 h-5" />,
    },
    {
      num: 8,
      title: 'Book the Manifest Cargo Flight',
      when: '2–4 weeks before travel',
      body: 'All pets entering Dubai must travel as manifest cargo — they cannot fly in the cabin or as checked baggage on flights to Dubai. Emirates SkyCargo is most common for DXB arrivals (72 hours advance notice); Etihad Cargo is an alternative for Abu Dhabi arrivals. Cargo costs typically range from AED 3,000–12,000 depending on route, airline, and pet size.',
      icon: <Plane className="w-5 h-5" />,
    },
    {
      num: 9,
      title: 'Clear Customs on Arrival',
      when: 'Day of arrival',
      body: 'Your pet arrives at the DXB or DWC cargo terminal. You (or your agent) present the MOCCAE import permit, original health certificate, vaccination records, microchip certificate, titer test result (if applicable), antiparasitic treatment record, and the owner’s passport and UAE visa. If every document is correct, customs clearance takes 2–4 hours and your pet does not enter quarantine.',
      icon: <CheckCircle className="w-5 h-5" />,
    },
    {
      num: 10,
      title: 'Register With Dubai Municipality',
      when: 'Within 30 days of arrival',
      body: 'Register your pet via the Aleef app or the Dubai Smart Services portal within 30 days of arrival. You need your Emirates ID, the pet’s microchip number, current vaccination records, a pet photo, and your residence address (Makani number). The fee is around AED 10, annual renewal is required, and a physical municipality ID tag must be worn on the collar at all times.',
      icon: <FileText className="w-5 h-5" />,
    },
  ]

  const faqData = [
    {
      question: 'What documents do I need to import a pet to Dubai?',
      answer: 'You need: (1) an ISO 11784/11785 microchip certificate, (2) a rabies vaccination certificate administered at least 21 days before travel, (3) core vaccination records (DHPPIL for dogs, FVRCP for cats), (4) a rabies titer test result if your pet is from a high-risk country, (5) a MOCCAE import permit, (6) an International Health Certificate issued within 10 days of arrival, (7) an antiparasitic treatment record, and (8) a copy of the owner’s passport and UAE visa. Every document must show the same microchip number.',
    },
    {
      question: 'Does my pet need a rabies titer test to enter Dubai?',
      answer: 'Only if your pet is coming from a high-risk rabies country. Pets from low-risk countries — including the UK, EU, USA, Canada, Australia, New Zealand, Japan, and Singapore — do not need a titer test. The exception is Bahrain and Qatar: pets from these two countries must have a titer test even though they are classified as low-risk. Always verify your country’s current status on the MOCCAE portal before skipping the test.',
    },
    {
      question: 'How long does it take to import a pet to Dubai?',
      answer: 'From low-risk countries such as the UK, EU, USA, Canada, Australia, or New Zealand, the process takes around 4–6 weeks. From high-risk countries that require a rabies titer test, the minimum timeline is about 4 months because of the mandatory 90-day waiting period after the blood sample is collected. Starting at least 8 weeks before your planned move is recommended.',
    },
    {
      question: 'Do pets go into quarantine when arriving in Dubai?',
      answer: 'No. If all documentation is complete and correct — including the MOCCAE import permit, ISO microchip, valid rabies vaccination, and the health certificate — pets do not require mandatory quarantine in Dubai. Customs clearance typically takes 2–4 hours at the cargo terminal. Incomplete or incorrect documentation, however, can result in conditional quarantine at the owner’s expense.',
    },
    {
      question: 'Can my pet fly in the cabin into Dubai?',
      answer: 'No. All pets entering Dubai must travel as manifest cargo. They cannot fly in the cabin or as checked baggage on flights to Dubai. Pets travel in an IATA Live Animal Regulations compliant hard-shell crate in the temperature-controlled hold. Emirates SkyCargo is the most common carrier for DXB arrivals, and Etihad Cargo is an alternative for Abu Dhabi.',
    },
    {
      question: 'How much is the MOCCAE import permit and when should I apply?',
      answer: 'The MOCCAE import permit costs AED 200 per animal and is valid for 90 days from issuance, with processing taking 3–7 working days. A release fee is also payable on arrival — AED 500 per dog or AED 250 per cat — bringing the government total to roughly AED 700 per dog or AED 450 per cat. Apply within the 90-day validity window so the permit is still valid on your arrival day, while leaving time to book your cargo flight.',
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
      { '@type': 'ListItem', position: 2, name: 'Pet Import Documents Checklist for Dubai', item: canonical },
    ],
  }

  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Import a Pet to Dubai — Documents Checklist',
    description: 'Step-by-step documents checklist to import a dog or cat to Dubai, from microchip to arrival clearance.',
    step: checklistSteps.map((s) => ({
      '@type': 'HowToStep',
      position: s.num,
      name: s.title,
      text: s.body,
    })),
  }

  const schemas = [faqSchema, breadcrumbSchema, howToSchema]

  const meta = {
    title: 'Pet Import Documents Checklist for Dubai (2026)',
    description,
    canonical,
    ogImage,
    ogType: 'article',
    keywords: 'pet import documents checklist Dubai, Dubai pet import checklist, documents to import pet to Dubai, UAE pet import documents, MOCCAE import permit checklist, pet import requirements Dubai, dog import documents Dubai, cat import documents Dubai',
  }

  return (
    <>
      <SEOHead meta={meta} schemas={schemas} />
      <Breadcrumb items={[{ label: 'Guides', path: '/guides/' }, { label: 'Pet Import Documents Checklist' }]} />

      {/* Hero */}
      <Hero
        image="/images/import-hero.jpg"
        imageAlt="Pet import documents and a calm dog beside an IATA travel crate at Dubai cargo terminal"
        eyebrow="Pet Relocation Checklist"
        title="Pet Import Documents Checklist for Dubai"
        subtitle="An ordered, checkable list of every document and step to import your pet to Dubai — microchip to arrival clearance — with timing notes and a summary table."
        updated="Updated June 2026"
      />

      {/* Intro + at-a-glance */}
      <section className="section-padding bg-[#F5F6FD]">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mb-4">
                Everything You Need, In Order
              </h2>
              <p className="text-[#5A5A5A] text-base leading-relaxed mb-6">
                Bringing a pet into the UAE is a documents process. Every item on this checklist is mandatory, and the steps must happen in the right order. The microchip comes before the rabies vaccination, the rabies vaccination comes before the titer test, and the MOCCAE import permit comes before you fly.
              </p>
              <p className="text-[#5A5A5A] text-base leading-relaxed mb-6">
                Skip a step or get the sequence wrong and your pet can be refused entry, confiscated, or re-exported at your expense. Use the ordered checklist below, tick off each item, then confirm everything against the documents summary table.
              </p>
              <div className="bg-white rounded-[20px] shadow-sm p-6">
                <h3 className="text-lg font-bold text-[#2A2A2A] mb-3 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-[#4F5BD5]" />
                  The One Rule That Causes Most Rejections
                </h3>
                <ul className="space-y-2 text-sm text-[#5A5A5A]">
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /><span>Every document must show the same microchip number</span></li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /><span>Microchip must be implanted before the rabies vaccination</span></li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /><span>The rabies vaccine must be valid on your travel date</span></li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /><span>The health certificate must be issued within 10 days of arrival</span></li>
                </ul>
              </div>
            </div>
            <div className="bg-white rounded-[20px] shadow-sm p-6 lg:p-8">
              <h3 className="text-xl font-bold text-[#2A2A2A] mb-5">Import at a Glance</h3>
              <div className="space-y-4">
                <div className="p-4 bg-[#4F5BD5]/5 rounded-xl">
                  <p className="font-semibold text-[#4F5BD5] text-sm mb-1">MOCCAE Import Permit</p>
                  <p className="text-lg font-bold text-[#2A2A2A]">AED 200 per pet</p>
                  <p className="text-sm text-[#5A5A5A] mt-1">Plus release fee on arrival: AED 500/dog or AED 250/cat. Government total ~AED 700/dog, ~AED 450/cat.</p>
                </div>
                <div className="p-4 bg-[#4F5BD5]/5 rounded-xl">
                  <p className="font-semibold text-[#4F5BD5] text-sm mb-1">Timeline (Low-Risk Countries)</p>
                  <p className="text-lg font-bold text-[#2A2A2A]">4–6 weeks</p>
                </div>
                <div className="p-4 bg-[#C89F5A]/5 rounded-xl">
                  <p className="font-semibold text-[#C89F5A] text-sm mb-1">Timeline (High-Risk Countries)</p>
                  <p className="text-lg font-bold text-[#2A2A2A]">Minimum ~4 months</p>
                  <p className="text-sm text-[#5A5A5A] mt-1">Includes the 90-day wait after the rabies titer test.</p>
                </div>
                <div className="p-4 bg-[#C9453A]/5 rounded-xl">
                  <p className="font-semibold text-[#C9453A] text-sm mb-1">Transport</p>
                  <p className="text-lg font-bold text-[#2A2A2A]">Manifest cargo only</p>
                  <p className="text-sm text-[#5A5A5A] mt-1">No cabin or checked-baggage travel into Dubai.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The ordered checklist */}
      <section id="checklist" className="section-padding bg-white">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mb-4">
              The Pet Import Documents Checklist
            </h2>
            <p className="text-[#5A5A5A] text-base leading-relaxed">
              Work through these ten steps in order. Tick each box as you complete it. Every item is mandatory unless the step says it depends on your origin country.
            </p>
          </div>

          <div className="space-y-6 mb-10">
            {checklistSteps.map((step) => (
              <div key={step.num} className="bg-white rounded-[20px] shadow-sm p-6 lg:p-8 flex gap-5">
                <div className="w-12 h-12 rounded-full bg-[#4F5BD5] text-white flex items-center justify-center text-lg font-bold shrink-0">{step.num}</div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-9 h-9 rounded-[12px] bg-[#E9ECFB] flex items-center justify-center text-[#4F5BD5]">
                      {step.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#2A2A2A]">{step.title}</h3>
                      <span className="text-xs font-semibold text-[#4F5BD5] uppercase tracking-wide">{step.when}</span>
                    </div>
                  </div>
                  <p className="text-[#5A5A5A] text-sm leading-relaxed">{step.body}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="warning-box max-w-3xl mx-auto">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-[#C89F5A] shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-[#2A2A2A] mb-1">Order Matters More Than Speed</p>
                <p className="text-[#5A5A5A] text-sm leading-relaxed">
                  If the rabies vaccine was given before the microchip, MOCCAE will reject the import permit and you will need to re-vaccinate and wait another 21 days. Confirm the sequence on your records before you start the permit application.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <a
              href={getWhatsAppUrl('Hi, I’m importing my pet to Dubai. Can you check my documents checklist and timeline?')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] text-white rounded-2xl font-semibold hover:bg-[#1ebe57] transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              Send us your documents and we’ll check them
            </a>
          </div>
        </div>
      </section>

      {/* Documents summary table */}
      <section className="section-padding bg-[#F5F6FD]">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mb-4 text-center">
            Documents Summary Table
          </h2>
          <p className="text-[#5A5A5A] text-base leading-relaxed text-center max-w-2xl mx-auto mb-8">
            One-glance reference for every document, what it is, how long it stays valid, and the typical government or vet cost in AED.
          </p>
          <div className="overflow-x-auto rounded-[20px] shadow-sm border border-gray-100 mb-8">
            <table className="data-table min-w-[640px]">
              <thead>
                <tr>
                  <th>Document</th>
                  <th>What It Is</th>
                  <th>Validity</th>
                  <th>Cost (AED)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="font-semibold text-[#2A2A2A]">ISO Microchip Certificate</td>
                  <td>15-digit ISO 11784/11785 compliant microchip</td>
                  <td>Permanent</td>
                  <td>300–600 (at vet)</td>
                </tr>
                <tr>
                  <td className="font-semibold text-[#2A2A2A]">Rabies Vaccination Certificate</td>
                  <td>Inactivated or recombinant rabies vaccine</td>
                  <td>1 year (annual booster)</td>
                  <td>Included in vet fee</td>
                </tr>
                <tr>
                  <td className="font-semibold text-[#2A2A2A]">Core Vaccination Records</td>
                  <td>DHPPIL (dogs) or FVRCP (cats)</td>
                  <td>Per vaccine schedule</td>
                  <td>100–200</td>
                </tr>
                <tr>
                  <td className="font-semibold text-[#2A2A2A]">Rabies Titer Test (RNATT)</td>
                  <td>Blood test proving rabies immunity (high-risk countries only)</td>
                  <td>90-day wait from sample</td>
                  <td>500–1,200</td>
                </tr>
                <tr>
                  <td className="font-semibold text-[#2A2A2A]">MOCCAE Import Permit</td>
                  <td>Official approval from UAE Ministry of Climate Change and Environment</td>
                  <td>90 days from issuance</td>
                  <td>200</td>
                </tr>
                <tr>
                  <td className="font-semibold text-[#2A2A2A]">International Health Certificate</td>
                  <td>Government-accredited vet certificate with parasite treatments</td>
                  <td><strong>10 days</strong> from issuance</td>
                  <td>400–1,500</td>
                </tr>
                <tr>
                  <td className="font-semibold text-[#2A2A2A]">Antiparasitic Treatment Record</td>
                  <td>Internal deworming + external flea/tick treatment</td>
                  <td>Within 14 days of arrival</td>
                  <td>50–150</td>
                </tr>
                <tr>
                  <td className="font-semibold text-[#2A2A2A]">Owner&apos;s Passport &amp; UAE Visa</td>
                  <td>Required for permit application and customs clearance</td>
                  <td>&mdash;</td>
                  <td>&mdash;</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="warning-box max-w-3xl mx-auto">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-[#C89F5A] shrink-0 mt-0.5" />
              <p className="text-sm text-[#2A2A2A]">
                <strong>Critical:</strong> Every document above must show the <strong>same microchip number</strong>. A mismatch between the microchip certificate and the vaccination certificate is an automatic rejection at customs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timing notes */}
      <section className="section-padding bg-white">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10">
            <div className="bg-[#F5F6FD] rounded-[20px] p-6 lg:p-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-[#4F5BD5]/10 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-[#4F5BD5]" />
                </div>
                <h3 className="text-xl font-bold text-[#2A2A2A]">Timing Notes That Catch People Out</h3>
              </div>
              <div className="space-y-3">
                <div className="p-3 bg-white rounded-xl text-sm text-[#5A5A5A] flex items-start gap-2">
                  <Microscope className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" />
                  <span><strong>Microchip before vaccination.</strong> Vaccinations given before the microchip are invalid and must be repeated, adding 21 days.</span>
                </div>
                <div className="p-3 bg-white rounded-xl text-sm text-[#5A5A5A] flex items-start gap-2">
                  <Syringe className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" />
                  <span><strong>21-day rabies wait.</strong> The pet cannot travel until at least 21 days after the first rabies vaccination.</span>
                </div>
                <div className="p-3 bg-white rounded-xl text-sm text-[#5A5A5A] flex items-start gap-2">
                  <Stethoscope className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" />
                  <span><strong>90-day titer wait.</strong> From high-risk countries, the pet cannot enter for 90 days after the titer blood draw — non-negotiable.</span>
                </div>
                <div className="p-3 bg-white rounded-xl text-sm text-[#5A5A5A] flex items-start gap-2">
                  <FileText className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" />
                  <span><strong>Permit validity is 90 days.</strong> Apply too early and the permit may expire before travel; apply too late and you may miss the flight window.</span>
                </div>
                <div className="p-3 bg-white rounded-xl text-sm text-[#5A5A5A] flex items-start gap-2">
                  <FileCheck className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" />
                  <span><strong>10-day health certificate.</strong> Issued within 10 days of arrival, so it is one of the last steps before travel.</span>
                </div>
              </div>
            </div>

            <div className="bg-[#E9ECFB] rounded-[20px] p-6 lg:p-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-[#4F5BD5]/10 flex items-center justify-center">
                  <Globe className="w-5 h-5 text-[#4F5BD5]" />
                </div>
                <h3 className="text-xl font-bold text-[#2A2A2A]">Low-Risk vs High-Risk Origin</h3>
              </div>
              <p className="text-[#5A5A5A] text-sm leading-relaxed mb-5">
                Your origin country decides whether you need a titer test and how long the whole process takes.
              </p>
              <div className="space-y-3">
                <div className="p-4 bg-white rounded-xl">
                  <p className="font-semibold text-[#4F5BD5] text-sm mb-1">Low-risk — no titer test</p>
                  <p className="text-xs text-[#5A5A5A]">UK, EU, USA, Canada, Australia, New Zealand, Japan, Singapore. Typical timeline: 4–6 weeks.</p>
                </div>
                <div className="p-4 bg-white rounded-xl">
                  <p className="font-semibold text-[#C89F5A] text-sm mb-1">High-risk — titer test required</p>
                  <p className="text-xs text-[#5A5A5A]">Most of Africa, Latin America, Central Asia, and parts of Asia. Minimum timeline: ~4 months due to the 90-day wait.</p>
                </div>
                <div className="p-4 bg-white rounded-xl">
                  <p className="font-semibold text-[#C9453A] text-sm mb-1">Special exception</p>
                  <p className="text-xs text-[#5A5A5A]">Bahrain and Qatar require a titer test despite being low-risk. Always verify your country on the MOCCAE portal.</p>
                </div>
              </div>
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
              Common questions about the documents and timeline to import a pet to Dubai.
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

      {/* Related Links */}
      <section className="py-16 bg-white">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mb-8 text-center">
            Related Guides &amp; Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link to="/guides/uae-pet-import-requirements/" className="bg-[#F5F6FD] rounded-[20px] p-6 hover:shadow-md transition-shadow group">
              <div className="w-10 h-10 rounded-xl bg-[#4F5BD5]/10 flex items-center justify-center mb-4 group-hover:bg-[#4F5BD5]/20 transition-colors">
                <FileCheck className="w-5 h-5 text-[#4F5BD5]" />
              </div>
              <h3 className="text-lg font-bold text-[#2A2A2A] mb-2 group-hover:text-[#4F5BD5] transition-colors">UAE Pet Import Requirements</h3>
              <p className="text-sm text-[#5A5A5A] leading-relaxed">The full requirements guide behind this checklist — rules, vaccinations, and banned breeds.</p>
            </Link>
            <Link to="/guides/moccae-import-permit/" className="bg-[#F5F6FD] rounded-[20px] p-6 hover:shadow-md transition-shadow group">
              <div className="w-10 h-10 rounded-xl bg-[#4F5BD5]/10 flex items-center justify-center mb-4 group-hover:bg-[#4F5BD5]/20 transition-colors">
                <FileText className="w-5 h-5 text-[#4F5BD5]" />
              </div>
              <h3 className="text-lg font-bold text-[#2A2A2A] mb-2 group-hover:text-[#4F5BD5] transition-colors">MOCCAE Import Permit Guide</h3>
              <p className="text-sm text-[#5A5A5A] leading-relaxed">How to apply for the import permit, what triggers rejections, and how to fix them.</p>
            </Link>
            <Link to="/service/pet-import-dubai/" className="bg-[#F5F6FD] rounded-[20px] p-6 hover:shadow-md transition-shadow group">
              <div className="w-10 h-10 rounded-xl bg-[#C89F5A]/10 flex items-center justify-center mb-4 group-hover:bg-[#C89F5A]/20 transition-colors">
                <Plane className="w-5 h-5 text-[#C89F5A]" />
              </div>
              <h3 className="text-lg font-bold text-[#2A2A2A] mb-2 group-hover:text-[#C89F5A] transition-colors">Pet Import to Dubai Service</h3>
              <p className="text-sm text-[#5A5A5A] leading-relaxed">Our full import service: permit, documents, crate, cargo, and arrival clearance.</p>
            </Link>
            <Link to="/contact/" className="bg-[#F5F6FD] rounded-[20px] p-6 hover:shadow-md transition-shadow group">
              <div className="w-10 h-10 rounded-xl bg-[#4F5BD5]/10 flex items-center justify-center mb-4 group-hover:bg-[#4F5BD5]/20 transition-colors">
                <MessageCircle className="w-5 h-5 text-[#4F5BD5]" />
              </div>
              <h3 className="text-lg font-bold text-[#2A2A2A] mb-2 group-hover:text-[#4F5BD5] transition-colors">Contact Us</h3>
              <p className="text-sm text-[#5A5A5A] leading-relaxed">Send us your pet’s details and we’ll confirm exactly which documents you need.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-[#4F5BD5]">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8 text-center">
          <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-white mb-4">
            Let Us Handle Your Pet Import Checklist
          </h2>
          <p className="text-white/80 text-lg leading-relaxed max-w-2xl mx-auto mb-8">
            Avoid sequencing mistakes and rejected permits. Dubai Pet Relocation manages the full document chain — microchip checks, vaccination timing, titer coordination, the MOCCAE permit, health certificate, crate, and cargo — from start to arrival.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <WhatsAppBtn
              label="Check My Import Documents"
              message="Hi Dubai Pet Relocation, I’m importing my pet to Dubai and want help working through the documents checklist. Can you guide me?"
              className="whatsapp-pulse"
            />
            <Link
              to="/how-it-works/"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-white/10 text-white rounded-2xl font-semibold text-sm hover:bg-white/20 transition-colors"
            >
              <HelpCircle className="w-4 h-4" />
              Learn How It Works
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
