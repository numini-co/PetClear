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
  Globe,
  MessageCircle,
  PawPrint,
  FileText,
  Stethoscope,
  Microscope,
  Syringe,
  Plane,
} from 'lucide-react'
import SEOHead from '../components/SEOHead.tsx'
import Hero from '../components/Hero.tsx'
import Breadcrumb from '../components/Breadcrumb.tsx'
import GuideFunnelCta from '../components/GuideFunnelCta.tsx'
import OfficialSources from '../components/OfficialSources.tsx'
import LastVerified from '../components/LastVerified.tsx'
import { getWhatsAppUrl, BASE_URL } from '../lib/seo.ts'
import GuideDualPath from '../components/GuideDualPath.tsx'
import { waEligibility } from '../lib/conversionCopy.ts'

const waChecklist = waEligibility({ need: 'managed move' })

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
  const title = 'Pet Import Checklist Dubai | Documents in Order'
  const description =
    'Pet import checklist for Dubai, checked 22 September 2026: matching microchip, species vaccines, 365-day titre conditions when required, and a MOCCAE permit valid 90 days from issuance.'
  const canonical = `${BASE_URL}/guides/import-checklist/`
  const ogImage = `${BASE_URL}/assets/og-import-checklist.jpg`

  const checklistSteps: ChecklistStep[] = [
    {
      num: 1,
      title: 'Fit a permanent microchip',
      when: 'Before the health certificate is written',
      body: 'The animal needs a permanent microchip. The number on the health certificate must match the chip in the animal. The live MOCCAE page checked on 22 September 2026 does not restate ISO 11784/11785, and it does not say the chip must be implanted before the rabies vaccine. Do not treat either line as a current rejection rule.',
      icon: <Microscope className="w-5 h-5" />,
    },
    {
      num: 2,
      title: 'Give the rabies vaccine',
      when: 'Not before 12 weeks of age',
      body: 'Rabies vaccination is not given before 12 weeks of age. Validity follows the manufacturer. The certificate must show the microchip number, vaccine name, manufacturer, batch number and date. A 21-day wait before arrival is not the sentence on the MOCCAE page. That 21-day wait applies to the antibody test after a first or lapsed vaccine.',
      icon: <Syringe className="w-5 h-5" />,
    },
    {
      num: 3,
      title: 'Give the other vaccines for that species',
      when: 'With the vaccine record',
      body: 'Dogs: distemper, parvovirus, infectious canine hepatitis, and leptospirosis. Leptospirosis can be replaced by a lab test if the exporting country does not vaccinate against it. Cats: panleukopenia, rhinotracheitis and calicivirus. Feline leukaemia was not on the required list. Do not copy the dog list onto a cat.',
      icon: <Shield className="w-5 h-5" />,
    },
    {
      num: 4,
      title: 'Rabies antibody test, only for a high-risk origin',
      when: '365-day certificate conditions',
      body: 'High-risk origins need a result of at least 0.5 IU/ml from a laboratory approved by the export authority. The certificate is valid for 365 days if the rabies vaccine stays valid and continuous and no booster is given. Otherwise repeat the test. A first vaccine, or a gap in vaccination, needs at least 21 days before the test. A valid booster does not. This page does not reprint the low-risk country list. On 22 September 2026 the United Kingdom was on it. The United States was not named on it.',
      icon: <Stethoscope className="w-5 h-5" />,
    },
    {
      num: 5,
      title: 'Apply for the MOCCAE import permit',
      when: 'Valid 90 days from issuance',
      body: 'Apply before travel. The permit is valid for 90 days from issuance. An expired permit cannot be used. That clock is not a 30-day stamp and it is not the antibody certificate. On 22 September 2026 the page listed AED 200 to issue a permit for one animal, AED 500 to release one dog, and AED 250 to release one cat. Published service time: 1 working day, or 5 working days for a service, emotional support or medical dog. The import application itself lists no documents for ordinary dogs and cats.',
      icon: <FileText className="w-5 h-5" />,
    },
    {
      num: 6,
      title: 'Carry an authorised health certificate',
      when: 'Validity depends on the origin form',
      body: 'The live MOCCAE page asks for an authorised health certificate from the competent veterinary authority. It does not state a universal 5-day or 10-day validity. For a UK export, certificate 3926EHC is valid for 10 days after an exam within 24 hours of export. Parasite treatment is internal and external, in the 14 days before shipment, recorded on the certificate or passport. Your vet chooses a product that is safe for that species. No dose is given here.',
      icon: <FileCheck className="w-5 h-5" />,
    },
    {
      num: 7,
      title: 'Size an IATA crate',
      when: 'Before the airline accepts the booking',
      body: 'Cats and dogs are shipped to IATA live-animal conditions. The crate has to let the animal stand, turn and lie down. This checklist does not publish a crate price.',
      icon: <PawPrint className="w-5 h-5" />,
    },
    {
      num: 8,
      title: 'Book an airline product that accepts the animal',
      when: 'After the permit window is understood',
      body: 'Emirates says ordinary pets are not in the cabin, and itineraries ending in Dubai must travel as cargo. Other airlines are separate products. This page does not publish a cargo tariff.',
      icon: <Plane className="w-5 h-5" />,
    },
    {
      num: 9,
      title: 'Inspection and release',
      when: 'At the entry port',
      body: 'A matching animal is examined at the entry port and released. The page does not describe a routine quarantine length and it does not give a clearance time. Release needs the customs paper or bill of lading, the vaccine record, the health certificate, and the antibody certificate if the origin is high-risk. If the file does not match, the pet may be rejected at your expense or confiscated. No fine amount is published.',
      icon: <CheckCircle className="w-5 h-5" />,
    },
    {
      num: 10,
      title: 'Local registration, after entry',
      when: 'Separate from the import permit',
      body: 'Municipality registration is a different step. No municipal deadline or fee was re-checked on an official municipality page on 22 September 2026, so this checklist does not state one. The only 90-day figure here is the MOCCAE import permit, counted from issuance.',
      icon: <FileText className="w-5 h-5" />,
    },
  ]

  const faqData = [
    {
      question: 'What documents do I need to import a pet to Dubai?',
      answer: 'A MOCCAE import permit valid for 90 days from issuance, a permanent microchip whose number matches the health certificate, the vaccines named for that species, parasite treatment in the 14 days before shipment, and an authorised health certificate. High-risk origins also need a rabies antibody test of at least 0.5 IU/ml. The import application itself lists no documents for ordinary dogs and cats. Release later needs the customs paper, the vaccine record, the health certificate, and the antibody certificate if the origin is high-risk.',
    },
    {
      question: 'Does my pet need a rabies titre test to enter Dubai?',
      answer: 'Only if the origin is high-risk. This checklist does not reprint the low-risk list. On 22 September 2026 the United Kingdom was on the list printed on the MOCCAE page, and the United States was not named on it. When a test is required, the result must be at least 0.5 IU/ml and the certificate follows the 365-day conditions on the titre guide.',
    },
    {
      question: 'How long does it take to import a pet to Dubai?',
      answer: 'There is no single week count. The permit estimate on the page is 1 working day, or 5 working days for a service, emotional support or medical dog. A first or lapsed rabies vaccine needs at least 21 days before an antibody test. Airline space can add time. We do not promise a 4 to 6 week file.',
    },
    {
      question: 'Do pets go into quarantine when arriving in Dubai?',
      answer: 'The MOCCAE service is an inspection at the entry port and release when the animal matches the permit. The page does not describe a routine quarantine stay, and it does not give a number of hours. If the import does not comply, the pet may be rejected at the owner\'s expense or confiscated.',
    },
    {
      question: 'Can my pet fly in the cabin into Dubai?',
      answer: 'Emirates says ordinary animals are not allowed in the cabin, and every itinerary ending in Dubai must travel as cargo. Other airlines are separate products. Cabin weights and fares are not copied here.',
    },
    {
      question: 'How much is the MOCCAE import permit and when should I apply?',
      answer: 'Apply before travel. The permit is valid for 90 days from issuance. On 22 September 2026 the page listed AED 200 for one animal, AED 500 to release one dog, and AED 250 to release one cat. Those are government charges, not a relocation package. Pay the amount shown when you apply.',
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
      { '@type': 'ListItem', position: 2, name: 'Guides', item: `${BASE_URL}/guides/` },
      { '@type': 'ListItem', position: 3, name: 'Pet Import Documents Checklist for Dubai', item: canonical },
    ],
  }

  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to import a pet to Dubai: documents checklist',
    description: 'Documents checklist to import a dog or cat to Dubai. MOCCAE import permit is valid 90 days from issuance. Government fees are the amounts on the official page.',
    step: checklistSteps.map((s) => ({
      '@type': 'HowToStep',
      position: s.num,
      name: s.title,
      text: s.body,
    })),
  }

  const schemas = [faqSchema, breadcrumbSchema, howToSchema]

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
      <Breadcrumb items={[{ label: 'Guides', path: '/guides/' }, { label: 'Pet Import Documents Checklist' }]} />

      {/* Hero */}
      <Hero
        image="/images/import-hero.jpg"
        imageAlt="Pet import documents and a calm dog beside an IATA travel crate at Dubai cargo terminal"
        eyebrow="Pet Relocation Checklist"
        title="Pet Import Documents Checklist for Dubai"
        subtitle="An ordered list for a dog or cat entering the UAE: matching microchip, species vaccines, titre only when the origin is high-risk, and a permit valid 90 days from issuance."
        updated="Last verified: 22 September 2026"
        primaryLabel="Tell us about your move"
        whatsappMessage={waChecklist}
        secondary={{ label: 'Pet import service', to: '/service/pet-import-dubai/' }}
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
                Bringing a pet into the UAE is a documents process. Check the breed, the origin, the chip number, the vaccines for that species, and the permit window before you fly. The import permit is valid for 90 days from issuance.
              </p>
              <div className="mb-6">
                <GuideDualPath
                  diyNote="Keep ticking the list below if you are lining up the file yourself."
                  moneyTo="/service/pet-import-dubai/"
                  moneyLabel="Pet import to Dubai"
                  waMessage={waChecklist}
                />
              </div>
              <p className="text-[#5A5A5A] text-base leading-relaxed mb-6">
                A missing item can mean the animal is rejected at your expense or confiscated. The live page does not publish a fine amount. Use the ordered checklist below. For the statutory rules behind each box, open the{' '}
                <Link to="/guides/uae-pet-import-requirements/" className="font-semibold text-[#4F5BD5] hover:underline">
                  UAE pet import requirements
                </Link>{' '}
                guide. For the UAE Pass path and 90-day validity, open the{' '}
                <Link to="/guides/moccae-import-permit/" className="font-semibold text-[#4F5BD5] hover:underline">
                  MOCCAE import permit
                </Link>{' '}
                walkthrough. When you want the work coordinated, use{' '}
                <Link to="/service/pet-import-dubai/" className="font-semibold text-[#4F5BD5] hover:underline">
                  pet import services in Dubai
                </Link>{' '}
                or door-to-door{' '}
                <Link to="/service/pet-relocation-dubai/" className="font-semibold text-[#4F5BD5] hover:underline">
                  pet relocation Dubai
                </Link>
                . Commercial permit filing sits on{' '}
                <Link to="/service/moccae-pet-permit/" className="font-semibold text-[#4F5BD5] hover:underline">
                  MOCCAE permit assistance
                </Link>
                .
              </p>
              <div className="bg-white rounded-[20px] shadow-sm p-6">
                <h3 className="text-lg font-bold text-[#2A2A2A] mb-3 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-[#4F5BD5]" />
                  The One Rule That Causes Most Rejections
                </h3>
                <ul className="space-y-2 text-sm text-[#5A5A5A]">
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /><span>The chip number on the health certificate must match the animal</span></li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /><span>High-risk origins need at least 0.5 IU/ml under the 365-day certificate conditions</span></li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /><span>The permit lasts 90 days from issuance</span></li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /><span>Parasite treatment sits in the 14 days before shipment</span></li>
                </ul>
              </div>
            </div>
            <div className="bg-white rounded-[20px] shadow-sm p-6 lg:p-8">
              <h3 className="text-xl font-bold text-[#2A2A2A] mb-5">Import at a Glance</h3>
              <div className="space-y-4">
                <div className="p-4 bg-[#4F5BD5]/5 rounded-xl">
                  <p className="font-semibold text-[#4F5BD5] text-sm mb-1">MOCCAE Import Permit</p>
                  <p className="text-lg font-bold text-[#2A2A2A]">Valid 90 days from issuance</p>
                  <p className="text-sm text-[#5A5A5A] mt-1">Government fees checked 22 September 2026: AED 200 permit, AED 500 dog release, AED 250 cat release.</p>
                </div>
                <div className="p-4 bg-[#4F5BD5]/5 rounded-xl">
                  <p className="font-semibold text-[#4F5BD5] text-sm mb-1">Permit service time</p>
                  <p className="text-lg font-bold text-[#2A2A2A]">1 working day</p>
                  <p className="text-sm text-[#5A5A5A] mt-1">5 working days for a service, emotional support or medical dog. An estimate, not a promise.</p>
                </div>
                <div className="p-4 bg-[#C89F5A]/5 rounded-xl">
                  <p className="font-semibold text-[#C89F5A] text-sm mb-1">High-risk titre</p>
                  <p className="text-lg font-bold text-[#2A2A2A]">0.5 IU/ml</p>
                  <p className="text-sm text-[#5A5A5A] mt-1">Certificate valid 365 days if the vaccine stays valid and no booster is given.</p>
                </div>
                <div className="p-4 bg-[#C9453A]/5 rounded-xl">
                  <p className="font-semibold text-[#C9453A] text-sm mb-1">Transport</p>
                  <p className="text-lg font-bold text-[#2A2A2A]">Manifest cargo only</p>
                  <p className="text-sm text-[#5A5A5A] mt-1">No cabin or checked-baggage travel into Dubai.</p>
                </div>
                <LastVerified date="22 September 2026" />
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
                  The chip number has to match every certificate. An implant-before-vaccine order was not restated on the live page, so this checklist does not treat it as a current rejection rule. Confirm the origin and the breed before you spend the permit&apos;s 90 days.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <a
              href={getWhatsAppUrl(waChecklist)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] text-white rounded-2xl font-semibold hover:bg-[#1ebe57] transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              Check if we can move your pet
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
            What the MOCCAE page says, and who issues it. Private vet prices are not listed. Government fees are the three amounts checked on 22 September 2026.
          </p>
          <div className="overflow-x-auto rounded-[20px] shadow-sm border border-gray-100 mb-8">
            <table className="data-table min-w-[640px]">
              <thead>
                <tr>
                  <th>Document</th>
                  <th>What It Is</th>
                  <th>Validity</th>
                  <th>Fee on the checked page</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="font-semibold text-[#2A2A2A]">Microchip</td>
                  <td>Permanent chip. The certificate number must match the animal. ISO was not restated.</td>
                  <td>Permanent</td>
                  <td>Not a government fee on this page</td>
                </tr>
                <tr>
                  <td className="font-semibold text-[#2A2A2A]">Rabies vaccination</td>
                  <td>Not before 12 weeks. Validity follows the manufacturer.</td>
                  <td>Manufacturer</td>
                  <td>Not a government fee on this page</td>
                </tr>
                <tr>
                  <td className="font-semibold text-[#2A2A2A]">Other vaccines</td>
                  <td>Dogs and cats have different lists. See step 3.</td>
                  <td>Manufacturer</td>
                  <td>Not a government fee on this page</td>
                </tr>
                <tr>
                  <td className="font-semibold text-[#2A2A2A]">Rabies antibody test</td>
                  <td>High-risk origins. At least 0.5 IU/ml.</td>
                  <td>365 days if the vaccine stays valid and no booster is given</td>
                  <td>Not a government fee on this page</td>
                </tr>
                <tr>
                  <td className="font-semibold text-[#2A2A2A]">MOCCAE import permit</td>
                  <td>Apply before travel. An expired permit cannot be used.</td>
                  <td>90 days from issuance</td>
                  <td>AED 200 per animal</td>
                </tr>
                <tr>
                  <td className="font-semibold text-[#2A2A2A]">Health certificate</td>
                  <td>Authorised certificate from the origin authority. No universal 10-day rule.</td>
                  <td>The origin form&apos;s own validity</td>
                  <td>Not a MOCCAE fee</td>
                </tr>
                <tr>
                  <td className="font-semibold text-[#2A2A2A]">Parasite treatment</td>
                  <td>Internal and external, in the 14 days before shipment.</td>
                  <td>14 days before shipment</td>
                  <td>Not a government fee on this page</td>
                </tr>
                <tr>
                  <td className="font-semibold text-[#2A2A2A]">Dog or cat release</td>
                  <td>Inspection at the entry port, then release if the animal matches.</td>
                  <td>At arrival</td>
                  <td>AED 500 per dog, AED 250 per cat</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="warning-box max-w-3xl mx-auto">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-[#C89F5A] shrink-0 mt-0.5" />
              <p className="text-sm text-[#2A2A2A]">
                <strong>Match the chip number.</strong> The health certificate number has to match the animal. The page we checked does not publish a fine for a mismatch. The outcome it does publish is rejection at your expense or confiscation.
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
                  <span><strong>Chip number.</strong> It must match the health certificate. An implant-before-vaccine rule was not restated.</span>
                </div>
                <div className="p-3 bg-white rounded-xl text-sm text-[#5A5A5A] flex items-start gap-2">
                  <Syringe className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" />
                  <span><strong>21 days before the test.</strong> After a first or lapsed rabies vaccine. A valid booster does not need that wait. This is not a rule that every pet waits 21 days before arrival.</span>
                </div>
                <div className="p-3 bg-white rounded-xl text-sm text-[#5A5A5A] flex items-start gap-2">
                  <Stethoscope className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" />
                  <span><strong>Titre certificate.</strong> At least 0.5 IU/ml. Valid 365 days if the vaccine stays valid and continuous and no booster is given. An older 90-day sample window is not on the live page.</span>
                </div>
                <div className="p-3 bg-white rounded-xl text-sm text-[#5A5A5A] flex items-start gap-2">
                  <FileText className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" />
                  <span><strong>Permit validity is 90 days from issuance.</strong> An expired permit cannot be used. That clock is not a municipal deadline.</span>
                </div>
                <div className="p-3 bg-white rounded-xl text-sm text-[#5A5A5A] flex items-start gap-2">
                  <FileCheck className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" />
                  <span><strong>Health certificate.</strong> Authorised by the origin authority. A 10-day life is a UK export certificate rule (3926EHC), not a universal MOCCAE number.</span>
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
                The live page keeps a low-risk list and it can change. This checklist does not reprint it.
              </p>
              <div className="space-y-3">
                <div className="p-4 bg-white rounded-xl">
                  <p className="font-semibold text-[#4F5BD5] text-sm mb-1">Checked on 22 September 2026</p>
                  <p className="text-xs text-[#5A5A5A]">The United Kingdom was on the low-risk list. The United States was not named on it. Confirm any other origin on the live page before you skip the test.</p>
                </div>
                <div className="p-4 bg-white rounded-xl">
                  <p className="font-semibold text-[#C89F5A] text-sm mb-1">High-risk origin</p>
                  <p className="text-xs text-[#5A5A5A]">Antibody test of at least 0.5 IU/ml. Certificate valid 365 days if the vaccine stays valid and no booster is given. Minimum import age not less than 15 weeks.</p>
                </div>
                <div className="p-4 bg-white rounded-xl">
                  <p className="font-semibold text-[#C9453A] text-sm mb-1">Age wording</p>
                  <p className="text-xs text-[#5A5A5A]">Vaccination is not before 12 weeks. The English page says the low-risk minimum age &quot;will be 12&quot; without a unit, so that figure is not treated as confirmed weeks.</p>
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

      <GuideFunnelCta
        variant="mid"
        title="Documents lined up — book the import?"
        subtitle="Use the checklist here if you are filing yourself. Open pet import or door-to-door relocation when you want us to run the file. WhatsApp eligibility only if you are ready to book. Confirm MOCCAE fees on the portal."
        eligibilityMessage={waChecklist}
      />

      {/* Related Links */}
      <section className="py-16 bg-white">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mb-8 text-center">
            Related Guides &amp; Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
            <Link to="/service/pet-relocation-dubai/" className="bg-[#F5F6FD] rounded-[20px] p-6 hover:shadow-md transition-shadow group">
              <div className="w-10 h-10 rounded-xl bg-[#4F5BD5]/10 flex items-center justify-center mb-4 group-hover:bg-[#4F5BD5]/20 transition-colors">
                <PawPrint className="w-5 h-5 text-[#4F5BD5]" />
              </div>
              <h3 className="text-lg font-bold text-[#2A2A2A] mb-2 group-hover:text-[#4F5BD5] transition-colors">Pet Relocation Dubai</h3>
              <p className="text-sm text-[#5A5A5A] leading-relaxed">Door-to-door coordination when the checklist is only the first half of the job.</p>
            </Link>
            <Link to="/service/moccae-pet-permit/" className="bg-[#F5F6FD] rounded-[20px] p-6 hover:shadow-md transition-shadow group">
              <div className="w-10 h-10 rounded-xl bg-[#4F5BD5]/10 flex items-center justify-center mb-4 group-hover:bg-[#4F5BD5]/20 transition-colors">
                <FileText className="w-5 h-5 text-[#4F5BD5]" />
              </div>
              <h3 className="text-lg font-bold text-[#2A2A2A] mb-2 group-hover:text-[#4F5BD5] transition-colors">MOCCAE Permit Assistance</h3>
              <p className="text-sm text-[#5A5A5A] leading-relaxed">File review and UAE Pass submission support. The Ministry still issues the PDF.</p>
            </Link>
            <Link to="/contact/" className="bg-[#F5F6FD] rounded-[20px] p-6 hover:shadow-md transition-shadow group">
              <div className="w-10 h-10 rounded-xl bg-[#4F5BD5]/10 flex items-center justify-center mb-4 group-hover:bg-[#4F5BD5]/20 transition-colors">
                <MessageCircle className="w-5 h-5 text-[#4F5BD5]" />
              </div>
              <h3 className="text-lg font-bold text-[#2A2A2A] mb-2 group-hover:text-[#4F5BD5] transition-colors">Contact Us</h3>
              <p className="text-sm text-[#5A5A5A] leading-relaxed">The document list is on this page. WhatsApp if you are ready to book a managed import, not for a free recap of the checklist.</p>
            </Link>
          </div>
        </div>
      </section>

      <GuideFunnelCta
        variant="end"
        title="Ready to book a managed import?"
        subtitle="Avoid sequencing mistakes and rejected permits when you want the file held. WhatsApp eligibility if you are ready to book, or open the door-to-door / import service pages. Permit validity: 90 days from issuance."
        eligibilityMessage={waChecklist}
      />
    </>
  )
}
