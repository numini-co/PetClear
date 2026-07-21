import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  FileCheck,
  Shield,
  AlertTriangle,
  ChevronDown,
  ChevronUp,
  Clock,
  DollarSign,
  CheckCircle,
  XCircle,
  HelpCircle,
  Dog,
  Cat,
  Globe,
  Upload,
  RefreshCw,
  MessageCircle,
  PawPrint,
  FileText,
  Stethoscope,
  Microscope,
  Ban,
  Plane,
  Calendar,
} from 'lucide-react'
import SEOHead from '../components/SEOHead.tsx'
import Hero from '../components/Hero.tsx'
import Breadcrumb from '../components/Breadcrumb.tsx'
import WhatsAppBtn from '../components/WhatsAppBtn.tsx'
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
export default function MOCCAEPermitGuide() {
  const title = 'MOCCAE Import Permit for Pets — Dubai & UAE Complete Guide (2026)'
  const description = 'Step-by-step guide to obtaining a MOCCAE import permit for pets entering Dubai and the UAE. Learn required documents, processing times, costs, common rejection reasons, and how Dubai Pet Relocation handles applications.'
  const canonical = `${BASE_URL}/guides/moccae-import-permit/`
  const ogImage = `${BASE_URL}/assets/og-moccae-permit.jpg`

  const faqData = [
    {
      question: 'How long does the MOCCAE import permit take?',
      answer: 'The MOCCAE import permit typically takes 2–5 business days to process once all documents are correctly submitted. However, if your application is incomplete, contains errors, or requires additional verification, processing can take 1–2 weeks or longer. Dubai Pet Relocation recommends applying at least 3–4 weeks before your planned travel date to account for any resubmission needs.',
    },
    {
      question: 'Can I apply for the MOCCAE import permit myself?',
      answer: 'Yes, you can apply directly through the MOCCAE online portal or the MOCCAE UAE app. However, the process requires careful document preparation, correct photo formatting, and accurate breed/vaccination entry. Many owners make mistakes that lead to rejection or delays. Dubai Pet Relocation offers an application service where we handle the entire process, error-check all documents, and follow up with MOCCAE on your behalf.',
    },
    {
      question: 'What if my MOCCAE permit is rejected?',
      answer: 'If your permit is rejected, MOCCAE will specify the reason (wrong photo, expired vaccine, incorrect microchip number, wrong breed declaration, etc.). You must correct the issue and resubmit. There is no additional fee for resubmission, but the processing timeline resets. Dubai Pet Relocation reviews rejection reasons, fixes the problem, and resubmits within 24 hours to minimize delays.',
    },
    {
      question: 'What happens if my permit expires before I travel?',
      answer: 'MOCCAE import permits are valid for 90 days from issuance. If your permit expires before travel, you must submit a new application and pay the AED 200 fee again. Dubai Pet Relocation tracks permit expiry dates and coordinates your travel timeline to ensure your permit is valid on arrival day. We also set calendar reminders for reapplication if needed.',
    },
    {
      question: 'Do cats and dogs need separate permits?',
      answer: 'Yes, each pet requires a separate MOCCAE import permit. The fee is AED 200 per pet. You cannot combine multiple pets on a single permit application. If you are relocating 2 dogs and 1 cat, you need 3 separate permits and will pay AED 600 total.',
    },
    {
      question: 'What documents do I need for the MOCCAE import permit?',
      answer: 'You need: (1) Clear passport copy of the pet owner, (2) Recent pet photo (front face, neutral background), (3) Up-to-date vaccination records showing rabies and annual vaccines, (4) Microchip certificate with ISO 11784/11785 compliant chip number, (5) Health certificate from an accredited veterinarian (for some origins). All documents must be in English or Arabic.',
    },
    {
      question: 'Is a MOCCAE export permit needed to leave Dubai?',
      answer: 'Yes, if you are leaving Dubai with your pet, you need a MOCCAE export permit. The process is similar to the import permit: apply online, submit passport copy, pet photo, vaccination records, and microchip certificate. The fee is also AED 200 per pet. Some destination countries require additional health certificates endorsed by the UAE government vet. Dubai Pet Relocation handles both import and export permits.',
    },
    {
      question: 'What is the most common reason for MOCCAE permit rejection?',
      answer: 'The most common rejection reason is an incorrect or low-quality pet photo. MOCCAE requires a clear, front-facing photo of the pet with a neutral background, no accessories, and good lighting. Other common reasons include: expired rabies vaccination, incorrect microchip number entry, breed name mismatch with passport, and missing or incomplete vaccination records.',
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
      { '@type': 'ListItem', position: 2, name: 'MOCCAE Import Permit Guide', item: canonical },
    ],
  }

  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Apply for a MOCCAE Import Permit for Pets in the UAE',
    description: 'Step-by-step guide to applying for a MOCCAE import permit for dogs and cats entering Dubai and the UAE.',
    totalTime: 'P2D',
    estimatedCost: { '@type': 'MonetaryAmount', currency: 'AED', value: '200' },
    step: [
      {
        '@type': 'HowToStep',
        position: 1,
        name: 'Prepare Required Documents',
        text: 'Gather passport copy, pet photo, vaccination records, microchip certificate, and health certificate.',
      },
      {
        '@type': 'HowToStep',
        position: 2,
        name: 'Create MOCCAE Account',
        text: 'Register on the MOCCAE online portal or download the MOCCAE UAE app.',
      },
      {
        '@type': 'HowToStep',
        position: 3,
        name: 'Submit Application',
        text: 'Upload all documents, enter pet details accurately, and pay AED 200 per pet.',
      },
      {
        '@type': 'HowToStep',
        position: 4,
        name: 'Wait for Approval',
        text: 'Processing takes 2–5 business days. Monitor your email and portal for updates.',
      },
      {
        '@type': 'HowToStep',
        position: 5,
        name: 'Download Permit',
        text: 'Once approved, download and print the permit. Carry it with your pet during travel.',
      },
    ],
  }

  const schemas = [faqSchema, breadcrumbSchema, howToSchema]

  const meta = {
    title: 'MOCCAE Import Permit for Pets — Dubai & UAE Guide (2026)',
    description,
    canonical,
    ogImage,
    ogType: 'article',
    keywords: 'MOCCAE import permit UAE, MOCCAE pet permit Dubai, UAE pet import permit, how to apply MOCCAE permit, MOCCAE permit cost, MOCCAE permit processing time, Dubai pet import documents, MOCCAE export permit, pet relocation permit UAE, MOCCAE online portal',
  }

  return (
    <>
      <SEOHead meta={meta} schemas={schemas} />
      <Breadcrumb items={[{ label: 'Guides', path: '/guides/' }, { label: 'MOCCAE Import Permit Guide' }]} />

      {/* Hero */}
      <Hero
        image="/images/guide-moccae.jpg"
        imageAlt="MOCCAE import permit paperwork with a calm dog beside the documents"
        eyebrow="Pet Relocation Guide"
        title="MOCCAE Import Permit for Pets — Dubai & UAE Complete Guide (2026)"
        subtitle="A mandatory government approval for every pet entering the UAE. The application process, documents, costs, and common mistakes — explained."
        updated="Updated June 2026"
      />

      {/* What is MOCCAE */}
      <section className="section-padding bg-[#F5F6FD]">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mb-4">
                What Is MOCCAE and Why Does It Matter?
              </h2>
              <p className="text-[#5A5A5A] text-base leading-relaxed mb-6">
                <strong>MOCCAE</strong> stands for the <strong>Ministry of Climate Change and Environment</strong> of the United Arab Emirates. It is the federal government body responsible for regulating animal imports, exports, and welfare across all seven emirates, including Dubai.
              </p>
              <p className="text-[#5A5A5A] text-base leading-relaxed mb-6">
                Every dog, cat, and other pet entering the UAE must have a valid MOCCAE import permit before arrival. This permit confirms that your pet meets UAE health, vaccination, and identification standards. Airlines will not board pets without it, and Dubai customs will refuse entry.
              </p>
              <div className="bg-white rounded-[20px] shadow-sm p-6">
                <h3 className="text-lg font-bold text-[#2A2A2A] mb-3 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-[#4F5BD5]" />
                  Why the Permit Is Mandatory
                </h3>
                <ul className="space-y-2 text-sm text-[#5A5A5A]">
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /><span>Prevents entry of unvaccinated or diseased animals</span></li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /><span>Tracks banned and restricted breeds entering Dubai</span></li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /><span>Ensures microchip identification for all imported pets</span></li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /><span>Protects public health and local animal populations</span></li>
                </ul>
              </div>
            </div>
            <div className="bg-white rounded-[20px] shadow-sm p-6 lg:p-8">
              <h3 className="text-xl font-bold text-[#2A2A2A] mb-5">Permit at a Glance</h3>
              <div className="space-y-4">
                <div className="p-4 bg-[#4F5BD5]/5 rounded-xl">
                  <p className="font-semibold text-[#4F5BD5] text-sm mb-1">Cost</p>
                  <p className="text-lg font-bold text-[#2A2A2A]">Import permit AED 200 per pet</p>
                  <p className="text-sm text-[#5A5A5A] mt-1">Plus release fee on arrival: AED 500/dog or AED 250/cat. Government total ~AED 700/dog, ~AED 450/cat.</p>
                </div>
                <div className="p-4 bg-[#4F5BD5]/5 rounded-xl">
                  <p className="font-semibold text-[#4F5BD5] text-sm mb-1">Processing Time</p>
                  <p className="text-lg font-bold text-[#2A2A2A]">2–5 business days</p>
                </div>
                <div className="p-4 bg-[#C89F5A]/5 rounded-xl">
                  <p className="font-semibold text-[#C89F5A] text-sm mb-1">Validity</p>
                  <p className="text-lg font-bold text-[#2A2A2A]">90 days from issuance</p>
                </div>
                <div className="p-4 bg-[#C9453A]/5 rounded-xl">
                  <p className="font-semibold text-[#C9453A] text-sm mb-1">Penalty Without Permit</p>
                  <p className="text-lg font-bold text-[#2A2A2A]">Refused entry, fines, re-export</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Step-by-Step Process */}
      <section id="step-by-step" className="section-padding bg-white">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mb-4">
              Step-by-Step MOCCAE Import Permit Application
            </h2>
            <p className="text-[#5A5A5A] text-base leading-relaxed">
              Follow these steps carefully to apply for your pet's MOCCAE import permit. Errors at any stage can cause delays or rejection.
            </p>
          </div>

          <div className="space-y-6 mb-10">
            <div className="bg-white rounded-[20px] shadow-sm p-6 lg:p-8 flex gap-5">
              <div className="w-12 h-12 rounded-full bg-[#4F5BD5] text-white flex items-center justify-center text-lg font-bold shrink-0">1</div>
              <div>
                <h3 className="text-xl font-bold text-[#2A2A2A] mb-2">Prepare Required Documents</h3>
                <p className="text-[#5A5A5A] text-sm leading-relaxed mb-3">
                  Before starting the application, gather all required documents. Ensure they are clear, in English or Arabic, and up to date.
                </p>
                <div className="grid sm:grid-cols-2 gap-2">
                  <div className="p-3 bg-[#F5F6FD] rounded-xl text-sm text-[#5A5A5A] flex items-start gap-2">
                    <FileCheck className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" />
                    <span>Passport copy of the pet owner (clear, full page)</span>
                  </div>
                  <div className="p-3 bg-[#F5F6FD] rounded-xl text-sm text-[#5A5A5A] flex items-start gap-2">
                    <PawPrint className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" />
                    <span>Recent pet photo (front face, neutral background, no accessories)</span>
                  </div>
                  <div className="p-3 bg-[#F5F6FD] rounded-xl text-sm text-[#5A5A5A] flex items-start gap-2">
                    <Stethoscope className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" />
                    <span>Vaccination records (rabies + annual boosters, dates clear)</span>
                  </div>
                  <div className="p-3 bg-[#F5F6FD] rounded-xl text-sm text-[#5A5A5A] flex items-start gap-2">
                    <Microscope className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" />
                    <span>Microchip certificate (ISO 11784/11785 compliant, 15-digit number)</span>
                  </div>
                  <div className="p-3 bg-[#F5F6FD] rounded-xl text-sm text-[#5A5A5A] flex items-start gap-2">
                    <FileText className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" />
                    <span>Health certificate (from accredited vet, within required timeframe)</span>
                  </div>
                  <div className="p-3 bg-[#F5F6FD] rounded-xl text-sm text-[#5A5A5A] flex items-start gap-2">
                    <Ban className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" />
                    <span>Breed confirmation (if mixed breed or restricted breed)</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-[20px] shadow-sm p-6 lg:p-8 flex gap-5">
              <div className="w-12 h-12 rounded-full bg-[#4F5BD5] text-white flex items-center justify-center text-lg font-bold shrink-0">2</div>
              <div>
                <h3 className="text-xl font-bold text-[#2A2A2A] mb-2">Create a MOCCAE Account</h3>
                <p className="text-[#5A5A5A] text-sm leading-relaxed mb-3">
                  Visit the MOCCAE online portal or download the <strong>MOCCAE UAE</strong> mobile app. Register using your email and UAE mobile number (or your sponsor's number if you don't have one yet). Complete your profile with accurate personal details matching your passport.
                </p>
                <div className="warning-box">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-[#C89F5A] shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-[#2A2A2A] text-sm mb-1">Portal Access Tip</p>
                      <p className="text-[#5A5A5A] text-sm">The MOCCAE portal sometimes has server maintenance or slow response times. Apply during UAE business hours (Sunday–Thursday, 8 AM–4 PM) for best results. Save your application reference number immediately.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-[20px] shadow-sm p-6 lg:p-8 flex gap-5">
              <div className="w-12 h-12 rounded-full bg-[#4F5BD5] text-white flex items-center justify-center text-lg font-bold shrink-0">3</div>
              <div>
                <h3 className="text-xl font-bold text-[#2A2A2A] mb-2">Submit the Application</h3>
                <p className="text-[#5A5A5A] text-sm leading-relaxed mb-3">
                  Log in to the portal, select "Import Permit for Pets," and fill out the application form. Upload all documents in the specified format (usually PDF or JPEG, under 2MB per file). Pay the AED 200 fee per pet via credit card or online bank transfer.
                </p>
                <div className="grid sm:grid-cols-2 gap-2">
                  <div className="p-3 bg-[#F5F6FD] rounded-xl text-sm text-[#5A5A5A] flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" />
                    <span>Double-check microchip number for typos</span>
                  </div>
                  <div className="p-3 bg-[#F5F6FD] rounded-xl text-sm text-[#5A5A5A] flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" />
                    <span>Use exact breed name from official sources</span>
                  </div>
                  <div className="p-3 bg-[#F5F6FD] rounded-xl text-sm text-[#5A5A5A] flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" />
                    <span>Ensure rabies vaccine is valid on travel date</span>
                  </div>
                  <div className="p-3 bg-[#F5F6FD] rounded-xl text-sm text-[#5A5A5A] flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" />
                    <span>Photo: front face, clear eyes, no collars/accessories</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-[20px] shadow-sm p-6 lg:p-8 flex gap-5">
              <div className="w-12 h-12 rounded-full bg-[#4F5BD5] text-white flex items-center justify-center text-lg font-bold shrink-0">4</div>
              <div>
                <h3 className="text-xl font-bold text-[#2A2A2A] mb-2">Wait for Approval</h3>
                <p className="text-[#5A5A5A] text-sm leading-relaxed mb-3">
                  MOCCAE processes applications in 2–5 business days. Monitor your email and the portal for status updates. You will receive an approval notification with a downloadable permit PDF.
                </p>
                <div className="p-3 bg-[#E9ECFB] rounded-xl text-sm text-[#5A5A5A]">
                  <strong className="text-[#4F5BD5]">Pro tip:</strong> If you don't hear back within 5 business days, contact MOCCAE customer service with your application reference number. Dubai Pet Relocation handles all follow-ups for our clients.
                </div>
              </div>
            </div>

            <div className="bg-white rounded-[20px] shadow-sm p-6 lg:p-8 flex gap-5">
              <div className="w-12 h-12 rounded-full bg-[#4F5BD5] text-white flex items-center justify-center text-lg font-bold shrink-0">5</div>
              <div>
                <h3 className="text-xl font-bold text-[#2A2A2A] mb-2">Download and Print the Permit</h3>
                <p className="text-[#5A5A5A] text-sm leading-relaxed">
                  Once approved, download the permit PDF and print at least two copies. One copy goes with your pet's travel documents, and one stays with you. The airline will check the permit at check-in, and Dubai customs will verify it on arrival. Do not rely on digital copies alone — printed permits are mandatory.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Rejection Reasons */}
      <section className="section-padding bg-[#F5F6FD]">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mb-8 text-center">
            Common Rejection Reasons & How to Fix Them
          </h2>
          <div className="overflow-x-auto mb-10">
            <table className="data-table min-w-[600px]">
              <thead>
                <tr>
                  <th>Rejection Reason</th>
                  <th>How to Fix</th>
                  <th>Prevention Tip</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="font-medium">Wrong pet photo</td>
                  <td>Retake with neutral background, front face, no accessories</td>
                  <td>Use Dubai Pet Relocation's photo guide before submission</td>
                </tr>
                <tr>
                  <td className="font-medium">Expired rabies vaccine</td>
                  <td>Revaccinate and wait 21 days before reapplying</td>
                  <td>Check vaccine expiry date before applying</td>
                </tr>
                <tr>
                  <td className="font-medium">Incorrect microchip number</td>
                  <td>Verify with scanner and re-enter exactly as shown</td>
                  <td>Copy-paste from official certificate, never type manually</td>
                </tr>
                <tr>
                  <td className="font-medium">Wrong breed declaration</td>
                  <td>Correct breed name and provide documentation if mixed</td>
                  <td>Use official breed name from vet records or FCI/AKC</td>
                </tr>
                <tr>
                  <td className="font-medium">Incomplete vaccination records</td>
                  <td>Upload full vaccination history with clear dates</td>
                  <td>Ask your vet for a complete, stamped vaccination book</td>
                </tr>
                <tr>
                  <td className="font-medium">Passport mismatch</td>
                  <td>Ensure passport name matches application exactly</td>
                  <td>Use same spelling as your travel passport</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="warning-box max-w-3xl mx-auto">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-[#C89F5A] shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-[#2A2A2A] mb-1">Resubmission Resets the Timeline</p>
                <p className="text-[#5A5A5A] text-sm leading-relaxed">
                  When you resubmit after a rejection, the 2–5 business day processing clock restarts. If your permit is rejected twice, you could lose 2+ weeks. Dubai Pet Relocation error-checks every application before submission to avoid this scenario.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Export Permit & Dubai Pet Relocation */}
      <section className="section-padding bg-white">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10">
            <div className="bg-[#F5F6FD] rounded-[20px] p-6 lg:p-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-[#4F5BD5]/10 flex items-center justify-center">
                  <Plane className="w-5 h-5 text-[#4F5BD5]" />
                </div>
                <h3 className="text-xl font-bold text-[#2A2A2A]">MOCCAE Export Permit (Leaving Dubai)</h3>
              </div>
              <p className="text-[#5A5A5A] text-sm leading-relaxed mb-5">
                If you are relocating from Dubai to another country, you need a MOCCAE export permit. The process is similar to the import permit but with a few differences.
              </p>
              <div className="space-y-3">
                <div className="p-3 bg-white rounded-xl text-sm text-[#5A5A5A] flex items-start gap-2">
                  <DollarSign className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" />
                  <span><strong>Cost:</strong> AED 200 per pet (same as import)</span>
                </div>
                <div className="p-3 bg-white rounded-xl text-sm text-[#5A5A5A] flex items-start gap-2">
                  <Clock className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" />
                  <span><strong>Processing:</strong> 2–5 business days</span>
                </div>
                <div className="p-3 bg-white rounded-xl text-sm text-[#5A5A5A] flex items-start gap-2">
                  <FileCheck className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" />
                  <span><strong>Documents:</strong> Passport copy, pet photo, UAE vaccination records, microchip certificate</span>
                </div>
                <div className="p-3 bg-white rounded-xl text-sm text-[#5A5A5A] flex items-start gap-2">
                  <Stethoscope className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" />
                  <span><strong>Health certificate:</strong> May need additional government vet endorsement for some destinations</span>
                </div>
              </div>
            </div>

            <div className="bg-[#E9ECFB] rounded-[20px] p-6 lg:p-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-[#4F5BD5]/10 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-[#4F5BD5]" />
                </div>
                <h3 className="text-xl font-bold text-[#2A2A2A]">How Dubai Pet Relocation Handles Permits</h3>
              </div>
              <p className="text-[#5A5A5A] text-sm leading-relaxed mb-5">
                Dubai Pet Relocation's permit service handles the entire application process from document collection to final approval. Our team has processed hundreds of MOCCAE permits and knows exactly what triggers rejections.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#4F5BD5] text-white flex items-center justify-center text-xs font-bold shrink-0">1</div>
                  <div>
                    <p className="font-semibold text-[#2A2A2A] text-sm">Document Review</p>
                    <p className="text-xs text-[#5A5A5A]">We check every document for completeness, format, and accuracy before submission.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#4F5BD5] text-white flex items-center justify-center text-xs font-bold shrink-0">2</div>
                  <div>
                    <p className="font-semibold text-[#2A2A2A] text-sm">Application Submission</p>
                    <p className="text-xs text-[#5A5A5A]">We complete the MOCCAE portal application, upload documents, and pay fees.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#4F5BD5] text-white flex items-center justify-center text-xs font-bold shrink-0">3</div>
                  <div>
                    <p className="font-semibold text-[#2A2A2A] text-sm">Follow-Up & Monitoring</p>
                    <p className="text-xs text-[#5A5A5A]">We track application status daily and contact MOCCAE if processing exceeds 5 days.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#4F5BD5] text-white flex items-center justify-center text-xs font-bold shrink-0">4</div>
                  <div>
                    <p className="font-semibold text-[#2A2A2A] text-sm">Error Correction & Resubmission</p>
                    <p className="text-xs text-[#5A5A5A]">If rejected, we fix the issue and resubmit within 24 hours at no extra service charge.</p>
                  </div>
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
              Common questions about MOCCAE import and export permits for pets.
            </p>
            <div className="bg-white rounded-[20px] shadow-sm p-6 lg:p-8">
              {faqData.map((faq, i) => (
                <FAQItem key={i} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-16 bg-white">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mb-8 text-center">
            Related Guides
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link to="/guides/uae-pet-import-requirements/" className="bg-[#F5F6FD] rounded-[20px] p-6 hover:shadow-md transition-shadow group">
              <div className="w-10 h-10 rounded-xl bg-[#4F5BD5]/10 flex items-center justify-center mb-4 group-hover:bg-[#4F5BD5]/20 transition-colors">
                <FileCheck className="w-5 h-5 text-[#4F5BD5]" />
              </div>
              <h3 className="text-lg font-bold text-[#2A2A2A] mb-2 group-hover:text-[#4F5BD5] transition-colors">UAE Pet Import Requirements</h3>
              <p className="text-sm text-[#5A5A5A] leading-relaxed">Complete step-by-step guide to all documentation needed for importing pets into the UAE.</p>
            </Link>
            <Link to="/how-it-works/" className="bg-[#F5F6FD] rounded-[20px] p-6 hover:shadow-md transition-shadow group">
              <div className="w-10 h-10 rounded-xl bg-[#4F5BD5]/10 flex items-center justify-center mb-4 group-hover:bg-[#4F5BD5]/20 transition-colors">
                <Clock className="w-5 h-5 text-[#4F5BD5]" />
              </div>
              <h3 className="text-lg font-bold text-[#2A2A2A] mb-2 group-hover:text-[#4F5BD5] transition-colors">How Dubai Pet Relocation Works</h3>
              <p className="text-sm text-[#5A5A5A] leading-relaxed">Learn about our transparent coordination process from start to finish.</p>
            </Link>
            <Link to="/dog-relocation-to-dubai/" className="bg-[#F5F6FD] rounded-[20px] p-6 hover:shadow-md transition-shadow group">
              <div className="w-10 h-10 rounded-xl bg-[#C89F5A]/10 flex items-center justify-center mb-4 group-hover:bg-[#C89F5A]/20 transition-colors">
                <Dog className="w-5 h-5 text-[#C89F5A]" />
              </div>
              <h3 className="text-lg font-bold text-[#2A2A2A] mb-2 group-hover:text-[#C89F5A] transition-colors">Dog Relocation to Dubai</h3>
              <p className="text-sm text-[#5A5A5A] leading-relaxed">Complete guide for bringing dogs to Dubai, including breed rules and crate requirements.</p>
            </Link>
            <Link to="/cat-relocation-to-dubai/" className="bg-[#F5F6FD] rounded-[20px] p-6 hover:shadow-md transition-shadow group">
              <div className="w-10 h-10 rounded-xl bg-[#4F5BD5]/10 flex items-center justify-center mb-4 group-hover:bg-[#4F5BD5]/20 transition-colors">
                <Cat className="w-5 h-5 text-[#4F5BD5]" />
              </div>
              <h3 className="text-lg font-bold text-[#2A2A2A] mb-2 group-hover:text-[#4F5BD5] transition-colors">Cat Relocation to Dubai</h3>
              <p className="text-sm text-[#5A5A5A] leading-relaxed">Everything you need to know about bringing cats to Dubai safely.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-[#4F5BD5]">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8 text-center">
          <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-white mb-4">
            Let Dubai Pet Relocation Handle Your MOCCAE Permit
          </h2>
          <p className="text-white/80 text-lg leading-relaxed max-w-2xl mx-auto mb-8">
            Avoid rejection delays and paperwork stress. Dubai Pet Relocation's permit service includes document review, error-checking, application submission, and free resubmission if needed.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <WhatsAppBtn
              label="Apply for Permit Help"
              message="Hi Dubai Pet Relocation, I need help with my MOCCAE import permit application for my pet. Can you handle the entire process for me?"
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
