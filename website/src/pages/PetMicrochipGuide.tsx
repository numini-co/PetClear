import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Microscope,
  Shield,
  AlertTriangle,
  ChevronDown,
  ChevronUp,
  CheckCircle,
  XCircle,
  HelpCircle,
  FileCheck,
  Stethoscope,
  Syringe,
  ScanLine,
  RefreshCw,
  FileText,
  Clock,
} from 'lucide-react'
import SEOHead from '../components/SEOHead.tsx'
import Hero from '../components/Hero.tsx'
import Breadcrumb from '../components/Breadcrumb.tsx'
import WhatsAppBtn from '../components/WhatsAppBtn.tsx'
import OfficialSources from '../components/OfficialSources.tsx'
import { BASE_URL } from '../lib/seo.ts'

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
export default function PetMicrochipGuide() {
  const description = 'Complete guide to pet microchip requirements for entering the UAE. Learn the ISO 11784/11785 standard, the 15-digit chip rule, the critical microchip-before-rabies ordering, what happens if your chip is non-compliant, and how Dubai Pet Relocation verifies the number across every document.'
  const canonical = `${BASE_URL}/guides/pet-microchip-requirements-uae/`
  const ogImage = `${BASE_URL}/assets/og-pet-microchip.jpg`

  const faqData = [
    {
      question: 'Does my pet need a microchip to enter the UAE?',
      answer: 'Yes. Every dog and cat entering the UAE must have an ISO 11784/11785 compliant 15-digit microchip. The microchip is the permanent identifier that links your pet to its rabies vaccination, health certificate, and MOCCAE import permit. Without a compliant microchip, your pet cannot be cleared for import, and Dubai Municipality registration after arrival also requires a microchip.',
    },
    {
      question: 'What microchip standard does the UAE accept?',
      answer: 'The UAE accepts microchips that are ISO 11784/11785 compliant with a 15-digit number. This is the international standard read by universal scanners. If your pet has a non-ISO chip (for example, an older or region-specific format), the inspecting vet may not be able to read it with a standard scanner. In that case the pet must be scanned with a universal scanner that can read its chip, or re-chipped with an ISO 11784/11785 compliant chip so all documents can be matched.',
    },
    {
      question: 'Why must the microchip be implanted before the rabies vaccination?',
      answer: 'The microchip must be implanted before the rabies vaccination so the vaccination record can be tied to a verifiable, permanent identifier. If your pet was vaccinated before it was microchipped, there is no way to prove the vaccination belongs to that specific animal, so the vaccination is considered invalid for UAE entry. If this happens, the pet must be re-vaccinated after the microchip is implanted, and the post-vaccination waiting period starts again.',
    },
    {
      question: 'What happens if my pet was vaccinated before being microchipped?',
      answer: 'If the rabies vaccination was given before the microchip was implanted, the vaccination is invalid for UAE entry. You will need to re-vaccinate your pet after microchipping and wait the required period (a minimum of 21 days before travel) before continuing. This is one of the most common and costly ordering mistakes, because it restarts part of the timeline. Always microchip first, then vaccinate.',
    },
    {
      question: 'What if the microchip number is different on my documents?',
      answer: 'Every document must show the same microchip number. The number on the microchip certificate, the rabies vaccination certificate, the international health certificate, and the MOCCAE import permit must all match exactly. A mismatch between the microchip certificate and the vaccination certificate is an automatic rejection at customs. Dubai Pet Relocation scans the chip and cross-checks the 15-digit number on every document before travel to catch any typo or mismatch.',
    },
    {
      question: 'Can a non-ISO microchip still be used for the UAE?',
      answer: 'A non-ISO microchip is a risk because it may not be readable by a standard universal scanner. If the inspecting vet cannot read your pet\'s chip, you have two options: bring a universal scanner capable of reading that chip so the number can be confirmed, or have your pet re-chipped with an ISO 11784/11785 compliant 15-digit chip. Re-chipping is the cleaner solution because it keeps the identification consistent with the UAE standard and with every document in the file.',
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
      { '@type': 'ListItem', position: 2, name: 'Pet Microchip Requirements for UAE', item: canonical },
    ],
  }

  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Meet the Pet Microchip Requirements for the UAE',
    description: 'Step-by-step guide to getting a compliant ISO 11784/11785 microchip in the correct order before importing a pet into the UAE.',
    step: [
      {
        '@type': 'HowToStep',
        position: 1,
        name: 'Implant an ISO Microchip',
        text: 'Have a licensed vet implant an ISO 11784/11785 compliant 15-digit microchip before anything else.',
      },
      {
        '@type': 'HowToStep',
        position: 2,
        name: 'Vaccinate Against Rabies',
        text: 'Administer the rabies vaccination only after the microchip is implanted, so the record links to the chip.',
      },
      {
        '@type': 'HowToStep',
        position: 3,
        name: 'Record the Number on Every Document',
        text: 'Ensure the 15-digit microchip number appears identically on the microchip certificate, vaccination certificate, health certificate, and MOCCAE import permit.',
      },
      {
        '@type': 'HowToStep',
        position: 4,
        name: 'Verify the Chip Is Readable',
        text: 'Scan the chip with a universal scanner before travel to confirm it reads and matches the documents. Re-chip if it is non-compliant.',
      },
    ],
  }

  const schemas = [faqSchema, breadcrumbSchema, howToSchema]

  const meta = {
    title: 'Pet Microchip Requirements for UAE — ISO Chip & Order Rule (2026)',
    description,
    canonical,
    ogImage,
    ogType: 'article',
    keywords: 'pet microchip requirements UAE, ISO 11784 11785 microchip, 15-digit microchip Dubai, microchip before rabies vaccination, UAE pet import microchip, microchip number match documents, non-compliant microchip UAE, universal microchip scanner Dubai, dog microchip Dubai, cat microchip UAE',
  }

  return (
    <>
      <SEOHead meta={meta} schemas={schemas} />
      <Breadcrumb items={[{ label: 'Guides', path: '/guides/' }, { label: 'Pet Microchip Requirements for UAE' }]} />

      {/* Hero */}
      <Hero
        image="/images/service-pet-relocation-dubai.jpg"
        imageAlt="A vet scanning a calm pet's microchip beside its import documents for UAE entry"
        eyebrow="Pet Relocation Guide"
        title="Pet Microchip Requirements for UAE"
        subtitle="The microchip is the permanent ID that ties your pet to every document. The ISO standard, the 15-digit rule, and the one ordering mistake that invalidates your rabies vaccine — explained."
        updated="Updated June 2026"
      />

      {/* What the UAE requires */}
      <section className="section-padding bg-[#F5F6FD]">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mb-4">
                What Microchip Does the UAE Require?
              </h2>
              <p className="text-[#5A5A5A] text-base leading-relaxed mb-6">
                Every dog and cat entering the UAE must have a microchip that is <strong>ISO 11784/11785 compliant</strong> with a <strong>15-digit number</strong>. This is the international standard read by universal scanners worldwide, and it is the identifier that connects your pet to its rabies vaccination, health certificate, and MOCCAE import permit.
              </p>
              <p className="text-[#5A5A5A] text-base leading-relaxed mb-6">
                The microchip is more than identification. It is the thread that runs through the entire import file. Inspectors scan the chip on arrival and compare the number against every document. If the chip cannot be read, or the number does not match, the pet cannot be cleared.
              </p>
              <div className="bg-white rounded-[20px] shadow-sm p-6">
                <h3 className="text-lg font-bold text-[#2A2A2A] mb-3 flex items-center gap-2">
                  <Microscope className="w-5 h-5 text-[#4F5BD5]" />
                  Microchip Requirements at a Glance
                </h3>
                <ul className="space-y-2 text-sm text-[#5A5A5A]">
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /><span>ISO 11784/11785 compliant, 15-digit number</span></li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /><span>Implanted <strong>before</strong> the rabies vaccination</span></li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /><span>Same number on every single document</span></li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /><span>Permanent — also required for Dubai Municipality registration</span></li>
                </ul>
              </div>
            </div>
            <div className="bg-white rounded-[20px] shadow-sm p-6 lg:p-8">
              <h3 className="text-xl font-bold text-[#2A2A2A] mb-5">Microchip Certificate at a Glance</h3>
              <div className="space-y-4">
                <div className="p-4 bg-[#4F5BD5]/5 rounded-xl">
                  <p className="font-semibold text-[#4F5BD5] text-sm mb-1">Standard</p>
                  <p className="text-lg font-bold text-[#2A2A2A]">ISO 11784/11785, 15 digits</p>
                  <p className="text-sm text-[#5A5A5A] mt-1">Read by universal scanners. This is the format the UAE expects.</p>
                </div>
                <div className="p-4 bg-[#4F5BD5]/5 rounded-xl">
                  <p className="font-semibold text-[#4F5BD5] text-sm mb-1">Validity</p>
                  <p className="text-lg font-bold text-[#2A2A2A]">Permanent</p>
                  <p className="text-sm text-[#5A5A5A] mt-1">The chip stays valid for life. The order in which it was implanted is what matters.</p>
                </div>
                <div className="p-4 bg-[#C89F5A]/5 rounded-xl">
                  <p className="font-semibold text-[#C89F5A] text-sm mb-1">Critical Rule</p>
                  <p className="text-lg font-bold text-[#2A2A2A]">Microchip before rabies vaccine</p>
                  <p className="text-sm text-[#5A5A5A] mt-1">Vaccinating first invalidates the rabies record for UAE entry.</p>
                </div>
                <div className="p-4 bg-[#C9453A]/5 rounded-xl">
                  <p className="font-semibold text-[#C9453A] text-sm mb-1">Mismatch Penalty</p>
                  <p className="text-lg font-bold text-[#2A2A2A]">Automatic rejection at customs</p>
                  <p className="text-sm text-[#5A5A5A] mt-1">A number that does not match across documents fails inspection.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The ISO standard */}
      <section className="section-padding bg-white">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mb-4">
              The ISO 11784/11785 Standard and the 15-Digit Number
            </h2>
            <p className="text-[#5A5A5A] text-base leading-relaxed">
              Not every microchip is the same. The UAE expects the international ISO format, and there is a clear reason: it is the format a standard scanner can read anywhere in the world.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <div className="bg-[#F5F6FD] rounded-[20px] p-6 lg:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#4F5BD5]/10 flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-[#4F5BD5]" />
                </div>
                <h3 className="text-xl font-bold text-[#2A2A2A]">What "ISO Compliant" Means</h3>
              </div>
              <ul className="space-y-3 text-sm text-[#5A5A5A] leading-relaxed">
                <li className="flex items-start gap-2"><span className="text-[#4F5BD5] mt-0.5">•</span><span>The chip meets the <strong>ISO 11784/11785</strong> international standard.</span></li>
                <li className="flex items-start gap-2"><span className="text-[#4F5BD5] mt-0.5">•</span><span>It produces a <strong>15-digit number</strong>, the format used on UAE import paperwork.</span></li>
                <li className="flex items-start gap-2"><span className="text-[#4F5BD5] mt-0.5">•</span><span>It can be read by a <strong>universal scanner</strong>, so any accredited vet or customs inspector can verify it.</span></li>
                <li className="flex items-start gap-2"><span className="text-[#4F5BD5] mt-0.5">•</span><span>The number is permanent and is the anchor for the whole import file.</span></li>
              </ul>
            </div>

            <div className="bg-[#F5F6FD] rounded-[20px] p-6 lg:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#C9453A]/10 flex items-center justify-center">
                  <XCircle className="w-5 h-5 text-[#C9453A]" />
                </div>
                <h3 className="text-xl font-bold text-[#2A2A2A]">When the Chip Is Non-Compliant</h3>
              </div>
              <p className="text-sm text-[#5A5A5A] leading-relaxed mb-4">
                If your pet has a non-ISO chip — an older or region-specific format — a standard scanner may not be able to read it. That creates a verification problem at inspection. You then have two paths:
              </p>
              <ul className="space-y-3 text-sm text-[#5A5A5A] leading-relaxed">
                <li className="flex items-start gap-2"><ScanLine className="w-4 h-4 text-[#C89F5A] shrink-0 mt-0.5" /><span><strong>Universal scanner:</strong> provide a universal scanner capable of reading that chip so the number can be confirmed against the documents.</span></li>
                <li className="flex items-start gap-2"><RefreshCw className="w-4 h-4 text-[#C89F5A] shrink-0 mt-0.5" /><span><strong>Re-chip:</strong> have your pet implanted with an ISO 11784/11785 compliant 15-digit chip so everything matches the UAE standard.</span></li>
              </ul>
            </div>
          </div>

          <div className="warning-box max-w-3xl mx-auto">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-[#C89F5A] shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-[#2A2A2A] mb-1">Re-Chipping Is the Cleaner Fix</p>
                <p className="text-[#5A5A5A] text-sm leading-relaxed">
                  Carrying a universal scanner works in theory, but it depends on the right equipment being available at exactly the right moment. Re-chipping with an ISO 11784/11785 compliant chip removes the uncertainty and keeps the identification consistent with every document in your file.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The critical ordering rule */}
      <section id="ordering-rule" className="section-padding bg-[#F5F6FD]">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mb-4">
              The Critical Rule: Microchip Before Rabies Vaccination
            </h2>
            <p className="text-[#5A5A5A] text-base leading-relaxed">
              This is the single most important — and most commonly broken — rule in the microchip process. The microchip must be implanted <strong>before</strong> the rabies vaccination, never after.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <div className="bg-white rounded-[20px] shadow-sm p-6 lg:p-8 border-l-4 border-[#4F5BD5]">
              <h3 className="text-lg font-bold text-[#2A2A2A] mb-4 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-[#4F5BD5]" />
                Correct Order
              </h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-full bg-[#4F5BD5] text-white flex items-center justify-center text-xs font-bold shrink-0">1</div>
                  <p className="text-sm text-[#5A5A5A]"><strong>Implant the microchip.</strong> ISO 11784/11785 compliant, 15 digits. Always first.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-full bg-[#4F5BD5] text-white flex items-center justify-center text-xs font-bold shrink-0">2</div>
                  <p className="text-sm text-[#5A5A5A]"><strong>Administer the rabies vaccination.</strong> The record now links to the chip number.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-full bg-[#4F5BD5] text-white flex items-center justify-center text-xs font-bold shrink-0">3</div>
                  <p className="text-sm text-[#5A5A5A]"><strong>Continue the process.</strong> Health certificate and import permit all carry the same number.</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-[20px] shadow-sm p-6 lg:p-8 border-l-4 border-[#C9453A]">
              <h3 className="text-lg font-bold text-[#2A2A2A] mb-4 flex items-center gap-2">
                <XCircle className="w-5 h-5 text-[#C9453A]" />
                Wrong Order — Vaccine First
              </h3>
              <p className="text-sm text-[#5A5A5A] leading-relaxed mb-4">
                If the rabies vaccine was given before the microchip, there is no way to prove the vaccination belongs to that specific animal. The vaccination is <strong>invalid for UAE entry</strong>.
              </p>
              <div className="p-4 bg-[#C9453A]/5 rounded-xl">
                <p className="font-semibold text-[#C9453A] text-sm mb-1">The Fix</p>
                <p className="text-sm text-[#5A5A5A] leading-relaxed">
                  You must re-vaccinate after the microchip is implanted, then wait the required period (a minimum of 21 days before travel) before continuing. This restarts part of the timeline.
                </p>
              </div>
            </div>
          </div>

          <div className="warning-box max-w-3xl mx-auto">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-[#C89F5A] shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-[#2A2A2A] mb-1">Why the Order Exists</p>
                <p className="text-[#5A5A5A] text-sm leading-relaxed">
                  The microchip is the permanent identifier. By implanting it first, the rabies vaccination record can be tied to a verifiable, specific animal. A vaccination given before the chip has no anchor — which is exactly why MOCCAE treats it as invalid.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Matching the number across documents */}
      <section className="section-padding bg-white">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mb-4">
              Matching the Number Across Every Document
            </h2>
            <p className="text-[#5A5A5A] text-base leading-relaxed">
              The 15-digit microchip number must appear, identically, on every document in your import file. A single typo or mismatch is enough to fail inspection. Inspectors scan the chip and compare it line by line.
            </p>
          </div>

          <div className="overflow-x-auto mb-10">
            <table className="data-table min-w-[600px]">
              <thead>
                <tr>
                  <th>Document</th>
                  <th>What It Confirms</th>
                  <th>Must Carry the Microchip Number?</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="font-medium">Microchip Certificate</td>
                  <td>The chip is ISO 11784/11785 compliant and 15 digits</td>
                  <td>Yes — the source of truth</td>
                </tr>
                <tr>
                  <td className="font-medium">Rabies Vaccination Certificate</td>
                  <td>The rabies vaccine is tied to this specific animal</td>
                  <td>Yes — must match exactly</td>
                </tr>
                <tr>
                  <td className="font-medium">International Health Certificate</td>
                  <td>The pet is fit to travel and treated for parasites</td>
                  <td>Yes — must match exactly</td>
                </tr>
                <tr>
                  <td className="font-medium">MOCCAE Import Permit</td>
                  <td>Government approval for this animal to enter the UAE</td>
                  <td>Yes — must match exactly</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="warning-box max-w-3xl mx-auto mb-10">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-[#C89F5A] shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-[#2A2A2A] mb-1">A Mismatch Is an Automatic Rejection</p>
                <p className="text-[#5A5A5A] text-sm leading-relaxed">
                  A mismatch between the microchip certificate and the vaccination certificate means automatic rejection at customs. Because the number is 15 digits, a single transposed or dropped digit is easy to miss when documents are typed by hand — which is exactly why it must be checked against a scan, not just read.
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-[#F5F6FD] rounded-[20px] p-6">
              <div className="w-10 h-10 rounded-xl bg-[#4F5BD5]/10 flex items-center justify-center mb-4">
                <FileCheck className="w-5 h-5 text-[#4F5BD5]" />
              </div>
              <h3 className="text-lg font-bold text-[#2A2A2A] mb-2">Copy, Never Retype</h3>
              <p className="text-sm text-[#5A5A5A] leading-relaxed">Take the number from the official microchip certificate. Retyping a 15-digit number by hand is the most common way an error sneaks in.</p>
            </div>
            <div className="bg-[#F5F6FD] rounded-[20px] p-6">
              <div className="w-10 h-10 rounded-xl bg-[#4F5BD5]/10 flex items-center justify-center mb-4">
                <ScanLine className="w-5 h-5 text-[#4F5BD5]" />
              </div>
              <h3 className="text-lg font-bold text-[#2A2A2A] mb-2">Scan to Confirm</h3>
              <p className="text-sm text-[#5A5A5A] leading-relaxed">Scan the physical chip and confirm it reads the same number printed on every document before travel day.</p>
            </div>
            <div className="bg-[#F5F6FD] rounded-[20px] p-6">
              <div className="w-10 h-10 rounded-xl bg-[#C89F5A]/10 flex items-center justify-center mb-4">
                <FileText className="w-5 h-5 text-[#C89F5A]" />
              </div>
              <h3 className="text-lg font-bold text-[#2A2A2A] mb-2">Check Every Page</h3>
              <p className="text-sm text-[#5A5A5A] leading-relaxed">The number must be on the microchip certificate, the vaccination certificate, the health certificate, and the import permit — all identical.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How Dubai Pet Relocation verifies the chip */}
      <section className="section-padding bg-[#F5F6FD]">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10">
            <div className="bg-white rounded-[20px] shadow-sm p-6 lg:p-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-[#4F5BD5]/10 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-[#4F5BD5]" />
                </div>
                <h3 className="text-xl font-bold text-[#2A2A2A]">How We Verify Your Pet's Microchip</h3>
              </div>
              <p className="text-[#5A5A5A] text-sm leading-relaxed mb-5">
                Dubai Pet Relocation treats the microchip as the foundation of the whole file. We confirm the chip is compliant, readable, and consistent before your pet ever travels.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#4F5BD5] text-white flex items-center justify-center text-xs font-bold shrink-0">1</div>
                  <div>
                    <p className="font-semibold text-[#2A2A2A] text-sm">Confirm the Standard</p>
                    <p className="text-xs text-[#5A5A5A]">We verify the chip is ISO 11784/11785 compliant with a 15-digit number.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#4F5BD5] text-white flex items-center justify-center text-xs font-bold shrink-0">2</div>
                  <div>
                    <p className="font-semibold text-[#2A2A2A] text-sm">Check the Order</p>
                    <p className="text-xs text-[#5A5A5A]">We confirm the microchip was implanted before the rabies vaccination, so the rabies record is valid.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#4F5BD5] text-white flex items-center justify-center text-xs font-bold shrink-0">3</div>
                  <div>
                    <p className="font-semibold text-[#2A2A2A] text-sm">Scan and Cross-Check</p>
                    <p className="text-xs text-[#5A5A5A]">We scan the chip and match the 15-digit number against every document to catch any typo or mismatch.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#4F5BD5] text-white flex items-center justify-center text-xs font-bold shrink-0">4</div>
                  <div>
                    <p className="font-semibold text-[#2A2A2A] text-sm">Resolve Non-Compliance</p>
                    <p className="text-xs text-[#5A5A5A]">If the chip is non-ISO, we arrange a universal scanner or coordinate re-chipping before travel.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#E9ECFB] rounded-[20px] p-6 lg:p-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-[#4F5BD5]/10 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-[#4F5BD5]" />
                </div>
                <h3 className="text-xl font-bold text-[#2A2A2A]">Where the Microchip Fits in Your Timeline</h3>
              </div>
              <p className="text-[#5A5A5A] text-sm leading-relaxed mb-5">
                The microchip is step one of the entire relocation. Getting it right — and in the right order — keeps the rest of the timeline on track.
              </p>
              <ul className="space-y-3 text-sm text-[#5A5A5A]">
                <li className="flex items-start gap-2"><Microscope className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /><span><strong>Microchip first</strong> — always before the rabies vaccination.</span></li>
                <li className="flex items-start gap-2"><Syringe className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /><span><strong>Rabies vaccination</strong> — recorded against the chip number.</span></li>
                <li className="flex items-start gap-2"><Stethoscope className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /><span><strong>Health certificate</strong> — carries the same microchip number.</span></li>
                <li className="flex items-start gap-2"><FileCheck className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /><span><strong>MOCCAE import permit</strong> — issued against the matching number.</span></li>
              </ul>
              <p className="text-xs text-[#8A8A8A] mt-5 leading-relaxed">
                For the full step-by-step process, see our <Link to="/guides/uae-pet-import-requirements/" className="text-[#4F5BD5] underline">UAE Pet Import Requirements</Link> guide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-white">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mb-4 text-center">
              Frequently Asked Questions
            </h2>
            <p className="text-[#5A5A5A] text-base leading-relaxed text-center mb-10">
              Common questions about pet microchip requirements for the UAE.
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
      <section className="py-16 bg-[#F5F6FD]">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mb-8 text-center">
            Related Guides
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link to="/guides/uae-pet-import-requirements/" className="bg-white rounded-[20px] shadow-sm p-6 hover:shadow-md transition-shadow group">
              <div className="w-10 h-10 rounded-xl bg-[#4F5BD5]/10 flex items-center justify-center mb-4 group-hover:bg-[#4F5BD5]/20 transition-colors">
                <FileCheck className="w-5 h-5 text-[#4F5BD5]" />
              </div>
              <h3 className="text-lg font-bold text-[#2A2A2A] mb-2 group-hover:text-[#4F5BD5] transition-colors">UAE Pet Import Requirements</h3>
              <p className="text-sm text-[#5A5A5A] leading-relaxed">The complete step-by-step guide to every document needed to bring a pet into the UAE.</p>
            </Link>
            <Link to="/guides/rabies-titer-test-dubai/" className="bg-white rounded-[20px] shadow-sm p-6 hover:shadow-md transition-shadow group">
              <div className="w-10 h-10 rounded-xl bg-[#4F5BD5]/10 flex items-center justify-center mb-4 group-hover:bg-[#4F5BD5]/20 transition-colors">
                <Stethoscope className="w-5 h-5 text-[#4F5BD5]" />
              </div>
              <h3 className="text-lg font-bold text-[#2A2A2A] mb-2 group-hover:text-[#4F5BD5] transition-colors">Rabies Titer Test for Dubai</h3>
              <p className="text-sm text-[#5A5A5A] leading-relaxed">How the rabies titer test works for pets from high-risk countries, and how to pass it the first time.</p>
            </Link>
            <Link to="/service/pet-import-dubai/" className="bg-white rounded-[20px] shadow-sm p-6 hover:shadow-md transition-shadow group">
              <div className="w-10 h-10 rounded-xl bg-[#C89F5A]/10 flex items-center justify-center mb-4 group-hover:bg-[#C89F5A]/20 transition-colors">
                <FileText className="w-5 h-5 text-[#C89F5A]" />
              </div>
              <h3 className="text-lg font-bold text-[#2A2A2A] mb-2 group-hover:text-[#C89F5A] transition-colors">Pet Import to Dubai Service</h3>
              <p className="text-sm text-[#5A5A5A] leading-relaxed">Our end-to-end service for importing your pet into Dubai, with the paperwork handled for you.</p>
            </Link>
            <Link to="/contact/" className="bg-white rounded-[20px] shadow-sm p-6 hover:shadow-md transition-shadow group">
              <div className="w-10 h-10 rounded-xl bg-[#4F5BD5]/10 flex items-center justify-center mb-4 group-hover:bg-[#4F5BD5]/20 transition-colors">
                <HelpCircle className="w-5 h-5 text-[#4F5BD5]" />
              </div>
              <h3 className="text-lg font-bold text-[#2A2A2A] mb-2 group-hover:text-[#4F5BD5] transition-colors">Contact Dubai Pet Relocation</h3>
              <p className="text-sm text-[#5A5A5A] leading-relaxed">Have a question about your pet's microchip or documents? Get in touch and we'll help.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-[#4F5BD5]">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8 text-center">
          <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-white mb-4">
            Not Sure If Your Pet's Microchip Is Compliant?
          </h2>
          <p className="text-white/80 text-lg leading-relaxed max-w-2xl mx-auto mb-8">
            Send us your microchip certificate and we'll confirm it is ISO 11784/11785 compliant, check the order against your rabies vaccination, and make sure the number matches every document before you travel.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <WhatsAppBtn
              label="Check My Pet's Microchip"
              message="Hi Dubai Pet Relocation, I'd like you to check whether my pet's microchip is compliant for UAE entry and that the number matches my documents."
              className="whatsapp-pulse"
            />
            <Link
              to="/contact/"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-white/10 text-white rounded-2xl font-semibold text-sm hover:bg-white/20 transition-colors"
            >
              <HelpCircle className="w-4 h-4" />
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
