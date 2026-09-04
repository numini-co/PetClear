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
  HelpCircle,
  Dog,
  Cat,
  MessageCircle,
  PawPrint,
  FileText,
  Stethoscope,
  Microscope,
  Ban,
  Plane,
} from 'lucide-react'
import SEOHead from '../components/SEOHead.tsx'
import Hero from '../components/Hero.tsx'
import Breadcrumb from '../components/Breadcrumb.tsx'
import WhatsAppBtn from '../components/WhatsAppBtn.tsx'
import LastVerified from '../components/LastVerified.tsx'
import ContentImage from '../components/ContentImage.tsx'
import OfficialSources from '../components/OfficialSources.tsx'
import { BASE_URL, siteConfig } from '../lib/seo.ts'
import {
  LAST_VERIFIED_LABEL,
  PERMIT_FEE_VERIFY,
  PERMIT_PROCESSING_ESTIMATE,
  PERMIT_VALIDITY,
} from '../lib/regulatory.ts'

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
      question: 'What is the UAE Pass path for a MOCCAE import permit?',
      answer:
        'Log in at moccae.gov.ae with UAE Pass, then open Services → Export and Import Services → Import Permit for Pets. You cannot skip UAE Pass. If you do not yet have an account, set it up before you gather scans — the form will not open without it. This guide walks the path; the commercial twin is MOCCAE permit assistance if you want a coordinator on the thread.',
    },
    {
      question: 'How long does MOCCAE take, and is that a guarantee?',
      answer:
        'Complete applications are typically estimated at 2–5 working days. That figure is secondary-sourced, not a first-party SLA. Incomplete or inconsistent files are returned and the estimate restarts. Apply once the travel date is real enough to fit the 30-day validity window.',
    },
    {
      question: 'Why was my MOCCAE application sent back?',
      answer:
        'Typical causes: pet photo that is not a clear front face on a neutral background; rabies vaccination outside the 21-day / 12-month window on the planned arrival date; a microchip digit that does not match the certificate; breed spelling that does not match the vet record; a missing RNATT when the origin requires one. The Ministry tells you the reason — fix that reason, then resubmit. Confirm whether a fresh portal fee is charged when you resubmit.',
    },
    {
      question: 'What if the 30-day permit expires before the pet lands?',
      answer:
        'You apply again and pay the live portal fee again. MOCCAE import permits are valid for 30 days from issuance — never 90. Time the application to a confirmed cargo date, not to the week you first thought about moving.',
    },
    {
      question: 'Is the permit fee AED 200 or AED 500?',
      answer:
        'Published amounts have differed. This page does not pick a number. Confirm the current per-pet fee on the official portal when you apply, and confirm the separate arrival-release / inspection amount at the cargo terminal.',
    },
    {
      question: 'Can I put two pets on one MOCCAE import permit?',
      answer:
        'Treat each animal as its own application unless the live portal explicitly offers a combined personal-consignment path for your case. Personal import is typically limited to a maximum of 2 pets per person per permit / per year (2 cats, or 2 dogs, or 1 cat and 1 dog). Confirm the current portal rule before you pay.',
    },
    {
      question: 'Should I DIY the portal or use permit assistance?',
      answer:
        'DIY if you already have UAE Pass, a consistent document pack and time to absorb a resubmission. Use MOCCAE permit assistance if a rejection would blow a cargo booking or you cannot complete UAE Pass yourself. The government fee is the same either way — you are buying file hygiene, not a Ministry stamp.',
    },
    {
      question: 'Does this permit replace the rabies titer test?',
      answer:
        'No. The permit is Ministry approval to enter. An RNATT is a laboratory result attached when your origin requires it. Sample must be taken within 90 days before travel and read at least 0.5 IU/ml. See the rabies titer test guide. Confirm whether your origin needs one on the portal — we do not publish an unverified country list here.',
    },
    {
      question: 'Who do I contact if the portal is down?',
      answer:
        `Try again during UAE business hours and keep your application reference. For coordination help, message ${siteConfig.name} on WhatsApp or email ${siteConfig.email}. We cannot reopen a Ministry outage, but we can keep the file ready so you submit the moment the form is back.`,
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
        name: 'Sign in with UAE Pass',
        text: 'Open the official MOCCAE portal with a UAE Pass login and choose Import Permit for Pets.',
      },
      {
        '@type': 'HowToStep',
        position: 3,
        name: 'Submit Application',
        text: 'Upload all documents, enter pet details accurately, and pay the current portal fee (confirm the amount on the official MOCCAE site).',
      },
      {
        '@type': 'HowToStep',
        position: 4,
        name: 'Wait for Approval',
        text: 'Processing is typically estimated at 2–5 working days for a complete file. Monitor email and the portal. This is an estimate, not a first-party SLA.',
      },
      {
        '@type': 'HowToStep',
        position: 5,
        name: 'Download Permit',
        text: 'Once approved, download and print the permit. Carry it with your pet during travel.',
      },
    ],
  }

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.name,
    url: BASE_URL,
    email: siteConfig.email,
  }
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    url: BASE_URL,
  }
  const schemas = [organizationSchema, websiteSchema, faqSchema, breadcrumbSchema, howToSchema]

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
        image="/assets/w5/moccae-import-permit-guide-clipboard-illustration.png"
        imageAlt="Illustration of a MOCCAE pet import permit application with a validity clock"
        eyebrow="How-to guide — not the service page"
        title="MOCCAE Import Permit for Pets — Dubai & UAE Complete Guide (2026)"
        subtitle="UAE Pass login, form fields, 30-day validity, rejection reasons, and an honest DIY versus managed comparison. Confirm fees on the official portal."
        updated={LAST_VERIFIED_LABEL}
        whatsappMessage="Hi Dubai Pet Relocation, I am applying for a MOCCAE import permit and want the walkthrough checked before I submit."
        primaryLabel="Get the file checked"
        secondary={{ label: 'Permit assistance service', to: '/service/moccae-pet-permit/' }}
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
                  <p className="text-lg font-bold text-[#2A2A2A]">Verify on the MOCCAE portal</p>
                  <p className="text-sm text-[#5A5A5A] mt-1">Permit and arrival-release fees are paid to the government. Published amounts have differed — confirm the current figures on the official portal before you apply.</p>
                </div>
                <div className="p-4 bg-[#4F5BD5]/5 rounded-xl">
                  <p className="font-semibold text-[#4F5BD5] text-sm mb-1">Processing Time</p>
                  <p className="text-lg font-bold text-[#2A2A2A]">Estimate: 2–5 working days</p>
                  <p className="text-sm text-[#5A5A5A] mt-1">{PERMIT_PROCESSING_ESTIMATE}</p>
                </div>
                <div className="p-4 bg-[#C89F5A]/5 rounded-xl">
                  <p className="font-semibold text-[#C89F5A] text-sm mb-1">Validity</p>
                  <p className="text-lg font-bold text-[#2A2A2A]">30 days from issuance</p>
                  <p className="text-sm text-[#5A5A5A] mt-1">{PERMIT_VALIDITY}</p>
                </div>
                <div className="p-4 bg-[#C9453A]/5 rounded-xl">
                  <p className="font-semibold text-[#C9453A] text-sm mb-1">Penalty Without Permit</p>
                  <p className="text-lg font-bold text-[#2A2A2A]">Refused entry, fines, re-export</p>
                </div>
                <LastVerified />
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
              This is the folded-in application walkthrough — there is no separate walkthrough URL. Follow the order. If you want someone on the thread, use{' '}
              <Link to="/service/moccae-pet-permit/" className="font-semibold text-[#4F5BD5] hover:underline">
                MOCCAE permit assistance
              </Link>
              .
            </p>
          </div>

          <ContentImage
            src="/assets/w5/moccae-import-permit-application-steps-diagram.png"
            alt="Step-by-step MOCCAE pet import permit application from account setup to permit issue"
            caption="Generic UI blocks — not screenshots of the live portal. Fee and validity stay in the copy."
          />

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
                <h3 className="text-xl font-bold text-[#2A2A2A] mb-2">Sign in with UAE Pass</h3>
                <p className="text-[#5A5A5A] text-sm leading-relaxed mb-3">
                  Open the official MOCCAE digital services portal and authenticate with <strong>UAE Pass</strong>. Then choose Services → Export and Import Services → Import Permit for Pets. If you do not have UAE Pass yet, create it first — the form will not open without it. A sponsor or household member with UAE Pass can sometimes complete the application for a newcomer; the applicant details must still match the person who will collect the pet.
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
                  Fill pet details (species, breed spelling exactly as on the vet record, 15-digit microchip), origin country, and planned arrival. Upload scans in the format the portal asks for (typically PDF or JPEG, size-capped). Pay only the live portal fee — {PERMIT_FEE_VERIFY} Attach an RNATT result only when the origin requires one; the sample must be taken within 90 days before travel and read at least 0.5 IU/ml.
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
                  {PERMIT_PROCESSING_ESTIMATE} Monitor email and the portal. Keep the application reference. If the estimate slips, contact MOCCAE with that reference — or ask{' '}
                  <Link to="/service/moccae-pet-permit/" className="font-semibold text-[#4F5BD5] hover:underline">
                    permit assistance
                  </Link>{' '}
                  to stay on the status with you.
                </p>
                <div className="p-3 bg-[#E9ECFB] rounded-xl text-sm text-[#5A5A5A]">
                  <strong className="text-[#4F5BD5]">Timing tip:</strong> {PERMIT_VALIDITY} Applying the week you first research the move is how permits expire on the tarmac.
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
          <ContentImage
            src="/assets/w5/moccae-permit-rejection-causes-and-fixes-diagram.png"
            alt="MOCCAE pet permit rejection causes and how to fix each one"
            caption="Cause and fix. Confirm any resubmission fee on the portal — we do not invent one."
          />
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
                  <td>Shoot a front-face photo on a plain wall before you open the form</td>
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
                  When you resubmit after a rejection, the processing estimate restarts. Two rejects can push a cargo date past the 30-day window. That is the practical reason to line-check the file — or to use{' '}
                  <Link to="/service/moccae-pet-permit/" className="font-semibold text-[#4F5BD5] hover:underline">
                    MOCCAE permit assistance
                  </Link>{' '}
                  — before you pay the portal.
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
                  <span><strong>Cost:</strong> confirm the current fee on the official MOCCAE portal</span>
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
                <Link to="/service/moccae-pet-permit/" className="font-semibold text-[#4F5BD5] hover:underline">
                  MOCCAE permit assistance
                </Link>{' '}
                is the commercial twin of this guide: document collection, a line-check against the current requirements, portal submission support, and status tracking until the Ministry issues the PDF. We do not issue permits and we do not claim a volume badge.
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
                    <p className="text-xs text-[#5A5A5A]">If rejected, we read the Ministry reason, fix the file, and you resubmit. Confirm any extra portal fee when you resubmit.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#F5F6FD]">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mb-4 text-center">
            DIY on the portal versus managed permit assistance
          </h2>
          <p className="text-[#5A5A5A] text-base leading-relaxed text-center max-w-3xl mx-auto mb-8">
            The government fee does not change. You are choosing who watches the file. This comparison is honest, not a conversion trick.
          </p>
          <div className="overflow-x-auto">
            <table className="data-table min-w-[640px]">
              <thead>
                <tr>
                  <th>Question</th>
                  <th>DIY with this guide</th>
                  <th>Managed via the service page</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="font-medium">Who logs into UAE Pass?</td>
                  <td>You</td>
                  <td>You — we do not invent a government login</td>
                </tr>
                <tr>
                  <td className="font-medium">Who line-checks chip numbers?</td>
                  <td>You, against the list above</td>
                  <td>We review, then you submit</td>
                </tr>
                <tr>
                  <td className="font-medium">Who pays MOCCAE?</td>
                  <td>You, live portal amount</td>
                  <td>You, same live portal amount</td>
                </tr>
                <tr>
                  <td className="font-medium">When a reject lands</td>
                  <td>You read the reason and resubmit</td>
                  <td>We interpret the reason and stay on the thread</td>
                </tr>
                <tr>
                  <td className="font-medium">Best when</td>
                  <td>Pack is already consistent and the date is flexible</td>
                  <td>A cargo slot would die if the estimate restarts</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-center mt-6">
            <Link to="/service/moccae-pet-permit/" className="font-semibold text-[#4F5BD5] hover:underline">
              Open the MOCCAE permit assistance service →
            </Link>
          </p>
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link to="/service/moccae-pet-permit/" className="bg-[#E9ECFB] rounded-[20px] p-6 hover:shadow-md transition-shadow group ring-1 ring-[#4F5BD5]/20">
              <div className="w-10 h-10 rounded-xl bg-[#4F5BD5]/10 flex items-center justify-center mb-4">
                <Shield className="w-5 h-5 text-[#4F5BD5]" />
              </div>
              <h3 className="text-lg font-bold text-[#2A2A2A] mb-2 group-hover:text-[#4F5BD5] transition-colors">MOCCAE permit assistance</h3>
              <p className="text-sm text-[#5A5A5A] leading-relaxed">Commercial twin — document review and tracking. We still do not issue the permit.</p>
            </Link>
            <Link to="/guides/uae-pet-import-requirements/" className="bg-[#F5F6FD] rounded-[20px] p-6 hover:shadow-md transition-shadow group">
              <div className="w-10 h-10 rounded-xl bg-[#4F5BD5]/10 flex items-center justify-center mb-4 group-hover:bg-[#4F5BD5]/20 transition-colors">
                <FileCheck className="w-5 h-5 text-[#4F5BD5]" />
              </div>
              <h3 className="text-lg font-bold text-[#2A2A2A] mb-2 group-hover:text-[#4F5BD5] transition-colors">UAE Pet Import Requirements</h3>
              <p className="text-sm text-[#5A5A5A] leading-relaxed">Complete step-by-step guide to all documentation needed for importing pets into the UAE.</p>
            </Link>
            <Link to="/guides/rabies-titer-test-dubai/" className="bg-[#F5F6FD] rounded-[20px] p-6 hover:shadow-md transition-shadow group">
              <div className="w-10 h-10 rounded-xl bg-[#4F5BD5]/10 flex items-center justify-center mb-4 group-hover:bg-[#4F5BD5]/20 transition-colors">
                <Stethoscope className="w-5 h-5 text-[#4F5BD5]" />
              </div>
              <h3 className="text-lg font-bold text-[#2A2A2A] mb-2 group-hover:text-[#4F5BD5] transition-colors">Rabies titer test (RNATT)</h3>
              <p className="text-sm text-[#5A5A5A] leading-relaxed">Sample within 90 days before travel — not a 90-day wait after the result.</p>
            </Link>
            <Link to="/service/pet-import-dubai/" className="bg-[#F5F6FD] rounded-[20px] p-6 hover:shadow-md transition-shadow group">
              <div className="w-10 h-10 rounded-xl bg-[#4F5BD5]/10 flex items-center justify-center mb-4 group-hover:bg-[#4F5BD5]/20 transition-colors">
                <Plane className="w-5 h-5 text-[#4F5BD5]" />
              </div>
              <h3 className="text-lg font-bold text-[#2A2A2A] mb-2 group-hover:text-[#4F5BD5] transition-colors">Pet import service</h3>
              <p className="text-sm text-[#5A5A5A] leading-relaxed">When you need cargo and clearance as well as the permit.</p>
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
            Send the chip number, rabies date and origin. We will tell you whether the file is ready for UAE Pass — then you choose DIY with this guide or{' '}
            <Link to="/service/moccae-pet-permit/" className="underline font-semibold">
              permit assistance
            </Link>
            . Email {siteConfig.email} if WhatsApp is not convenient.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <WhatsAppBtn
              label="Apply for Permit Help"
              message="Hi Dubai Pet Relocation, I need help with my MOCCAE import permit application for my pet. Can you handle the entire process for me?"
              className="whatsapp-pulse"
            />
            <Link
              to="/service/moccae-pet-permit/"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-white/10 text-white rounded-2xl font-semibold text-sm hover:bg-white/20 transition-colors"
            >
              <HelpCircle className="w-4 h-4" />
              Permit assistance service
            </Link>
          </div>
        </div>
      </section>
      <OfficialSources />
    </>
  )
}
