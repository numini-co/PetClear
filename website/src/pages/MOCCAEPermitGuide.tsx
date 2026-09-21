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
  Dog,
  Cat,
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
import GuideFunnelCta from '../components/GuideFunnelCta.tsx'
import LastVerified from '../components/LastVerified.tsx'
import ContentImage from '../components/ContentImage.tsx'
import OfficialSources from '../components/OfficialSources.tsx'
import SnippetAnswer from '../components/SnippetAnswer.tsx'
import LinkedText from '../components/LinkedText.tsx'
import { stripInternalMarkdownLinks } from '../lib/linkedText.ts'
import { BASE_URL, siteConfig } from '../lib/seo.ts'
import {
  LAST_VERIFIED_LABEL,
  PERMIT_FEE_VERIFY,
  PERMIT_PROCESSING_ESTIMATE,
  PERMIT_VALIDITY,
  TITER_SAMPLE_RULE,
} from '../lib/regulatory.ts'
import GuideDualPath from '../components/GuideDualPath.tsx'
import { waEligibility } from '../lib/conversionCopy.ts'

const waPermit = waEligibility({ need: 'document plan' })
const waManaged = waEligibility({ need: 'managed move' })

const snippetQuestion = 'Do I need a MOCCAE import permit?'
const snippetAnswer =
  'Yes. Every dog or cat entering the UAE needs a MOCCAE import permit before travel. Apply on the official portal with UAE Pass, or we review the file and submit with you. The permit is valid 90 days from issuance. Confirm current fees on the portal. Email support@dubai-pet-relocation.ae or WhatsApp +971 50 478 2999.'

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
  const title = 'MOCCAE Pet Import Permit | Dubai & UAE Guide 2026'
  const description =
    'MOCCAE pet import permit: 90-day validity, UAE Pass application, documents, and rejection reasons. Confirm fees on the official portal.'
  const canonical = `${BASE_URL}/guides/moccae-import-permit/`
  const ogImage = `${BASE_URL}/assets/og-moccae-permit.jpg`

  const faqData = [
        {
      question: 'Do I need a MOCCAE import permit for my dog?',
      answer:
        'Every dog entering the UAE needs its own MOCCAE import permit before travel — cats too (one pet, one permit). Airlines will not board without it, and the port will refuse entry. Apply on the official MOCCAE portal with UAE Pass. The permit is valid 90 days from issuance. Confirm the current import-permit and arrival-release fees on that portal; fees may change. DIY the steps on this page. Commercial assistance twin: [/service/moccae-pet-permit/](/service/moccae-pet-permit/). Full inbound job: [/service/pet-import-dubai/](/service/pet-import-dubai/). Tick-list: [/guides/import-checklist/](/guides/import-checklist/). Coordination packages: [/prices/](/prices/).',
    },
        {
      question: 'How do I get a pet import permit from MOCCAE?',
      answer:
        'Log in at moccae.gov.ae with UAE Pass, open Import Permit for Pets, upload owner ID/passport copy, pet photo, vaccination and microchip records, and health-certificate details, then pay the current portal fee. Confirm that fee on the portal; we do not invent an official AED amount. Processing is often estimated in a few working days — that is not a first-party SLA. Validity: 90 days from issuance. DIY the steps on this page. WhatsApp +971504782999 only if you want a paid eligibility check for permit assistance on a managed file. Service twin: [/service/moccae-pet-permit/](/service/moccae-pet-permit/). Packages: [/prices/](/prices/).',
    },
    {
      question: 'How to apply for a Moccae license?',
      answer:
        'For pet relocation, you almost always mean the MOCCAE pet import permit, not a MOCCAE business or trade license. Apply via UAE Pass → Import Permit for Pets on the official portal. The permit is valid 90 days from issuance. Confirm the current portal fee when you apply; fees may change. If you need a commercial trade license, that is a different MOCCAE product — do not mix the two applications.',
    },
    {
      question: 'How to get a MOCCAE license?',
      answer:
        'Same disambiguation: pet owners need the import permit for pets, not a general “MOCCAE license.” Path: UAE Pass on moccae.gov.ae → Export and Import Services → Import Permit for Pets. Validity is 90 days from issuance. Service help: [/service/moccae-pet-permit/](/service/moccae-pet-permit/). Full import checklist: [/guides/uae-pet-import-requirements/](/guides/uae-pet-import-requirements/).',
    },
        {
      question: 'Do I need a MOCCAE import permit?',
      answer:
        'Every dog or cat entering the UAE needs a MOCCAE import permit before travel. Airlines will not board the pet without it, and customs will refuse entry. The permit is valid 90 days from issuance. Apply on the official MOCCAE portal with UAE Pass using the steps on this page. Confirm current fees on the portal. Paid permit assistance: [/service/moccae-pet-permit/](/service/moccae-pet-permit/). Flagship inbound: [/service/pet-import-dubai/](/service/pet-import-dubai/). Tick-list: [/guides/import-checklist/](/guides/import-checklist/). Email support@dubai-pet-relocation.ae or WhatsApp +971504782999 when you are ready to book a managed file — not for a free consult.',
    },
        {
      question: 'How do I apply for a MOCCAE import permit?',
      answer:
        'Log in to the official MOCCAE portal (moccae.gov.ae) with UAE Pass, choose Export and Import Services → Import Permit for Pets, upload the owner passport copy, pet photo, vaccination records, microchip certificate and health-certificate details, then pay the current portal fee. Confirm that fee on the portal; we do not invent an official AED amount. Processing is typically a few business days — an estimate, not a first-party SLA. DIY those steps in the walkthrough on this page. Buyers who want the file held use [/service/moccae-pet-permit/](/service/moccae-pet-permit/). Tick-list: [/guides/import-checklist/](/guides/import-checklist/). Packages: [/prices/](/prices/).',
    },
    {
      question: 'How long does the MOCCAE import permit take?',
      answer:
        'Complete applications are typically estimated at 2–5 working days. That figure is secondary-sourced, not a first-party SLA. Incomplete or inconsistent files are returned and the estimate restarts. Apply once the travel date is real enough to fit the 90-day validity window.',
    },
    {
      question: 'What is the UAE Pass path for a MOCCAE import permit?',
      answer:
        'Log in at moccae.gov.ae with UAE Pass, then open Services → Export and Import Services → Import Permit for Pets. You cannot skip UAE Pass. If you do not yet have an account, set it up before you gather scans — the form will not open without it. This guide walks the path; the commercial twin is MOCCAE permit assistance if you want a coordinator on the thread.',
    },
    {
      question: 'How long does MOCCAE take, and is that a guarantee?',
      answer:
        'Complete applications are typically estimated at 2–5 working days. That figure is secondary-sourced, not a first-party SLA. Incomplete or inconsistent files are returned and the estimate restarts. Apply once the travel date is real enough to fit the 90-day validity window.',
    },
    {
      question: 'Why was my MOCCAE application sent back?',
      answer:
        'Typical causes: pet photo that is not a clear front face on a neutral background; rabies vaccination outside the 21-day / 12-month window on the planned arrival date; a microchip digit that does not match the certificate; breed spelling that does not match the vet record; a missing RNATT when the origin requires one. The Ministry tells you the reason — fix that reason, then resubmit. Confirm whether a fresh portal fee is charged when you resubmit.',
    },
    {
      question: 'What if the 90-day permit expires before the pet lands?',
      answer:
        'You apply again and pay the live portal fee again. MOCCAE import permits are valid for 90 days from issuance. Expired permits cannot be used. Time the application so arrival still falls inside that window.',
    },
    {
      question: 'What are the labeled MOCCAE permit and release fees?',
      answer:
        'MOCCAE charges an import-permit fee before travel and a veterinary release/inspection fee at the cargo terminal. Confirm both live amounts on the official portal; fees may change. Those government charges exclude veterinary work, crate, cargo and coordination.',
    },
    {
      question: 'Can I put two pets on one MOCCAE import permit?',
      answer:
        'Treat each animal as its own application unless the live portal explicitly offers a combined personal-consignment path for your case. Personal import is typically limited to a maximum of 2 pets per person per permit / per year (2 cats, or 2 dogs, or 1 cat and 1 dog). Confirm the current portal rule before you pay.',
    },
        {
      question: 'Should I DIY the portal or use permit assistance?',
      answer:
        'DIY on this page if you already have UAE Pass, a consistent document pack and time to absorb a resubmission. Use [/service/moccae-pet-permit/](/service/moccae-pet-permit/) if a rejection would blow a cargo booking or you cannot complete UAE Pass yourself. The government fee is the same either way — you are buying file hygiene, not a Ministry stamp. When you also need crate, cargo and a Dubai door, open [/service/pet-import-dubai/](/service/pet-import-dubai/) or quote after eligibility on [/prices/](/prices/). Tick-list: [/guides/import-checklist/](/guides/import-checklist/).',
    },
        {
      question: 'Does this permit replace the rabies titer test?',
      answer:
        'The MOCCAE import permit is Ministry approval to enter. An RNATT is a separate laboratory result attached only when your origin requires it. The blood sample must be taken within 90 days before travel and read at least 0.5 IU/ml — that is a sample-timing window, not a 90-day wait after the draw. See the [rabies titer test guide](/guides/rabies-titer-test-dubai/). Confirm whether your origin needs one on the MOCCAE portal; we do not publish an unverified country list here. If you want titer timing held inside a managed import, open [/service/pet-import-dubai/](/service/pet-import-dubai/).',
    },
    {
      question: 'How much does a MOCCAE pet import permit cost?',
      answer:
        'Confirm the current import-permit fee on the official MOCCAE portal when you apply with UAE Pass. Published amounts have differed across secondary write-ups, so we do not invent an official AED figure here. The government fee is separate from veterinary work, crate, cargo and coordination. Our coordination is quoted after eligibility on [/prices/](/prices/). Paid filing help: [/service/moccae-pet-permit/](/service/moccae-pet-permit/). Flagship inbound job: [/service/pet-import-dubai/](/service/pet-import-dubai/).',
    },
    {
      question: 'What happens after the MOCCAE import permit is issued?',
      answer:
        'Download the PDF, print at least two copies, and keep arrival inside the 90-day validity window from issuance. The airline checks the permit at boarding, and the cargo village checks it again on landing. After clearance, Dubai-side collection and municipality registration sit on the [Dubai pet arrival guide](/guides/dubai-pet-arrival-guide/). If you want cargo, crate and a door held together, open [/service/pet-import-dubai/](/service/pet-import-dubai/) or request a scoped quote after eligibility on [/prices/](/prices/).',
    },
    {
      question: 'Who do I contact if the portal is down?',
      answer:
        `Try again during UAE business hours and keep your application reference. This guide cannot reopen a Ministry outage. If you already booked a managed file, message ${siteConfig.name} on WhatsApp or email ${siteConfig.email} so the pack is ready when the form is back.`,
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
    title,
    description,
    canonical,
    ogImage,
    ogType: 'article',
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
        title="MOCCAE Pet Import Permit for Dubai & the UAE"
        subtitle="UAE Pass login, form fields, 90-day validity, rejection reasons, and an honest DIY versus managed comparison. Confirm fees on the official portal."
        updated={LAST_VERIFIED_LABEL}
        whatsappMessage={waPermit}
        primaryLabel="Check permit eligibility"
        secondary={{ label: 'Permit assistance service', to: '/service/moccae-pet-permit/' }}
        showBuyerQualify
      />

      <section className="section-padding bg-white">
        <div className="max-w-[900px] mx-auto px-5 sm:px-6 lg:px-8 space-y-6">
          <SnippetAnswer question={snippetQuestion} answer={snippetAnswer} />
          <GuideDualPath
            diyNote="Keep reading for the UAE Pass path, 90-day validity and rejection fixes if you are filing yourself."
            moneyTo="/service/moccae-pet-permit/"
            moneyLabel="MOCCAE permit assistance"
            waMessage={waPermit}
            waLabel="Check permit eligibility"
          />
          <div className="rounded-[20px] bg-[#F5F6FD] p-5 sm:p-6 ring-1 ring-[#4F5BD5]/10">
            <h2 className="text-lg font-bold text-[#2A2A2A] mb-4">
              MOCCAE permit entities: UAE Pass, 90 days, RNATT, portal fees
            </h2>
            <dl className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl bg-white p-4 shadow-sm">
                <dt className="text-xs font-semibold uppercase tracking-wider text-[#4F5BD5]">UAE Pass</dt>
                <dd className="mt-1 text-sm leading-relaxed text-[#5A5A5A]">
                  The official login for the MOCCAE portal. The Import Permit for Pets form will not open without it.
                </dd>
              </div>
              <div className="rounded-xl bg-white p-4 shadow-sm">
                <dt className="text-xs font-semibold uppercase tracking-wider text-[#4F5BD5]">MOCCAE portal</dt>
                <dd className="mt-1 text-sm leading-relaxed text-[#5A5A5A]">
                  Apply at moccae.gov.ae → Export and Import Services → Import Permit for Pets. Confirm live fees there.
                </dd>
              </div>
              <div className="rounded-xl bg-white p-4 shadow-sm">
                <dt className="text-xs font-semibold uppercase tracking-wider text-[#4F5BD5]">Validity</dt>
                <dd className="mt-1 text-sm leading-relaxed text-[#5A5A5A]">{PERMIT_VALIDITY}</dd>
              </div>
              <div className="rounded-xl bg-white p-4 shadow-sm">
                <dt className="text-xs font-semibold uppercase tracking-wider text-[#4F5BD5]">RNATT (when required)</dt>
                <dd className="mt-1 text-sm leading-relaxed text-[#5A5A5A]">{TITER_SAMPLE_RULE}</dd>
              </div>
            </dl>
            <p className="mt-4 text-sm leading-relaxed text-[#5A5A5A]">
              {PERMIT_FEE_VERIFY} After clearance, the{' '}
              <Link to="/guides/dubai-pet-arrival-guide/" className="font-semibold text-[#4F5BD5] hover:underline">
                Dubai pet arrival guide
              </Link>{' '}
              covers cargo-village collection. Coordination is quoted after eligibility on{' '}
              <Link to="/prices/" className="font-semibold text-[#4F5BD5] hover:underline">
                Prices
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* What is MOCCAE */}
      <section className="section-padding bg-[#F5F6FD]">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mb-4">
                What Is MOCCAE and Why Does It Matter?
              </h2>
              <p className="text-[#5A5A5A] text-base leading-relaxed mb-6">
                MOCCAE is the UAE Ministry of Climate Change and Environment. It is the federal office that decides whether a dog or cat may enter any of the seven emirates — Dubai included. If you are planning a move, this is the permit that sits between a booked crate and a refused cargo desk.
              </p>
              <p className="text-[#5A5A5A] text-base leading-relaxed mb-6">
                You apply on the official portal with UAE Pass. The import permit is valid for 90 days from issuance. Confirm the current permit and arrival-release fees on that portal; amounts change and we do not invent a table here. Airlines will not board without the PDF, and the cargo village will not release the animal without it. This page is the how-to. The paid filing twin is{' '}
                <Link to="/service/moccae-pet-permit/" className="font-semibold text-[#4F5BD5] hover:underline">
                  MOCCAE permit assistance
                </Link>
                . When you also need crate, cargo and a Dubai door, open{' '}
                <Link to="/service/pet-import-dubai/" className="font-semibold text-[#4F5BD5] hover:underline">
                  pet import services in Dubai
                </Link>{' '}
                or door-to-door{' '}
                <Link to="/service/pet-relocation-dubai/" className="font-semibold text-[#4F5BD5] hover:underline">
                  pet relocation Dubai
                </Link>
                . The statutory list lives on{' '}
                <Link to="/guides/uae-pet-import-requirements/" className="font-semibold text-[#4F5BD5] hover:underline">
                  UAE pet import requirements
                </Link>
                ; the tick-box sequence is the{' '}
                <Link to="/guides/import-checklist/" className="font-semibold text-[#4F5BD5] hover:underline">
                  pet import checklist
                </Link>
                . Quoted packages (no invented government fees) sit on{' '}
                <Link to="/prices/" className="font-semibold text-[#4F5BD5] hover:underline">
                  Prices
                </Link>
                . After the PDF is issued, cargo-village collection and municipality registration live on the{' '}
                <Link to="/guides/dubai-pet-arrival-guide/" className="font-semibold text-[#4F5BD5] hover:underline">
                  Dubai pet arrival guide
                </Link>
                .
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
                  <p className="text-lg font-bold text-[#2A2A2A]">90 days from issuance</p>
                  <p className="text-sm text-[#5A5A5A] mt-1">{PERMIT_VALIDITY}</p>
                </div>
                <div className="p-4 bg-[#4F5BD5]/5 rounded-xl">
                  <p className="font-semibold text-[#4F5BD5] text-sm mb-1">Login</p>
                  <p className="text-lg font-bold text-[#2A2A2A]">UAE Pass on the MOCCAE portal</p>
                  <p className="text-sm text-[#5A5A5A] mt-1">The Import Permit for Pets form will not open without UAE Pass. Confirm fees on that portal.</p>
                </div>
                <div className="p-4 bg-[#4F5BD5]/5 rounded-xl">
                  <p className="font-semibold text-[#4F5BD5] text-sm mb-1">RNATT (when required)</p>
                  <p className="text-lg font-bold text-[#2A2A2A]">Sample within 90 days before travel</p>
                  <p className="text-sm text-[#5A5A5A] mt-1">{TITER_SAMPLE_RULE}</p>
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
            src="/assets/w5/moccae-import-permit-application-steps-diagram.webp"
            alt="Step-by-step MOCCAE pet import permit application from account setup to permit issue"
            caption="Generic UI blocks — not screenshots of the live portal. Confirm the live fee on the MOCCAE portal. Permit validity is 90 days from issuance."
            width={1024}
            height={1536}
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

      <GuideFunnelCta
        variant="mid"
        title="Permit ready - book the managed move?"
        subtitle="This guide covers the MOCCAE import permit (valid 90 days from issuance). DIY the portal steps above. When you also need crate, cargo and door delivery, open a money service or WhatsApp eligibility if you are ready to book. Confirm portal fees on the official site. Tick-list: import checklist."
        eligibilityMessage={waManaged}
        links={[
          { to: '/service/pet-import-dubai/', label: 'Pet import to Dubai', icon: 'plane' },
          { to: '/service/moccae-pet-permit/', label: 'MOCCAE permit assistance', icon: 'file' },
          { to: '/prices/', label: 'Prices after eligibility', icon: 'package' },
        ]}
      />

      {/* Common Rejection Reasons */}
      <section className="section-padding bg-[#F5F6FD]">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mb-8 text-center">
            Common Rejection Reasons & How to Fix Them
          </h2>
          <ContentImage
            src="/assets/w5/moccae-permit-rejection-causes-and-fixes-diagram.webp"
            alt="MOCCAE pet permit rejection causes and how to fix each one"
            caption="Cause and fix. Confirm any resubmission fee on the portal — we do not invent one."
            width={1536}
            height={1024}
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
                  When you resubmit after a rejection, the processing estimate restarts. Two rejects can push a cargo date past the 90-day window. That is the practical reason to line-check the file — or to use{' '}
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
          <p className="text-center mt-6 text-sm leading-relaxed text-[#5A5A5A]">
            <Link to="/service/moccae-pet-permit/" className="font-semibold text-[#4F5BD5] hover:underline">
              Open the MOCCAE permit assistance service
            </Link>
            {' · '}
            <Link to="/service/pet-import-dubai/" className="font-semibold text-[#4F5BD5] hover:underline">
              Pet import to Dubai
            </Link>
            {' · '}
            <Link to="/guides/import-checklist/" className="font-semibold text-[#4F5BD5] hover:underline">
              Import checklist
            </Link>
            {' · '}
            <Link to="/prices/" className="font-semibold text-[#4F5BD5] hover:underline">
              Prices after eligibility
            </Link>
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-white">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mb-4 text-center">
              MOCCAE import permit questions
            </h2>
            <p className="text-[#5A5A5A] text-base leading-relaxed text-center mb-10">
              Common questions about MOCCAE import and export permits for pets.
            </p>
            <div className="bg-white rounded-[20px] shadow-sm p-6 lg:p-8">
              {faqData.map((faq, i) => (
                <FAQItem key={i} question={faq.question} answer={<LinkedText text={faq.answer} />} />
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
            <Link to="/service/pet-relocation-dubai/" className="bg-[#F5F6FD] rounded-[20px] p-6 hover:shadow-md transition-shadow group">
              <div className="w-10 h-10 rounded-xl bg-[#4F5BD5]/10 flex items-center justify-center mb-4 group-hover:bg-[#4F5BD5]/20 transition-colors">
                <PawPrint className="w-5 h-5 text-[#4F5BD5]" />
              </div>
              <h3 className="text-lg font-bold text-[#2A2A2A] mb-2 group-hover:text-[#4F5BD5] transition-colors">Pet relocation Dubai</h3>
              <p className="text-sm text-[#5A5A5A] leading-relaxed">Door-to-door coordination after the permit window is understood.</p>
            </Link>
            <Link to="/guides/import-checklist/" className="bg-[#F5F6FD] rounded-[20px] p-6 hover:shadow-md transition-shadow group">
              <div className="w-10 h-10 rounded-xl bg-[#4F5BD5]/10 flex items-center justify-center mb-4 group-hover:bg-[#4F5BD5]/20 transition-colors">
                <FileCheck className="w-5 h-5 text-[#4F5BD5]" />
              </div>
              <h3 className="text-lg font-bold text-[#2A2A2A] mb-2 group-hover:text-[#4F5BD5] transition-colors">Pet import checklist</h3>
              <p className="text-sm text-[#5A5A5A] leading-relaxed">Tick-list from microchip to cargo clearance, including the 90-day permit.</p>
            </Link>
            <Link to="/guides/dubai-pet-arrival-guide/" className="bg-[#F5F6FD] rounded-[20px] p-6 hover:shadow-md transition-shadow group">
              <div className="w-10 h-10 rounded-xl bg-[#4F5BD5]/10 flex items-center justify-center mb-4 group-hover:bg-[#4F5BD5]/20 transition-colors">
                <Plane className="w-5 h-5 text-[#4F5BD5]" />
              </div>
              <h3 className="text-lg font-bold text-[#2A2A2A] mb-2 group-hover:text-[#4F5BD5] transition-colors">Dubai pet arrival guide</h3>
              <p className="text-sm text-[#5A5A5A] leading-relaxed">Cargo-village clearance and collection after the 90-day permit is issued.</p>
            </Link>
            <Link to="/prices/" className="bg-[#E9ECFB] rounded-[20px] p-6 hover:shadow-md transition-shadow group ring-1 ring-[#4F5BD5]/20">
              <div className="w-10 h-10 rounded-xl bg-[#4F5BD5]/10 flex items-center justify-center mb-4">
                <DollarSign className="w-5 h-5 text-[#4F5BD5]" />
              </div>
              <h3 className="text-lg font-bold text-[#2A2A2A] mb-2 group-hover:text-[#4F5BD5] transition-colors">Prices after eligibility</h3>
              <p className="text-sm text-[#5A5A5A] leading-relaxed">Coordination packages quoted after eligibility. Government fees stay confirm-on-portal.</p>
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

      <GuideFunnelCta
        variant="end"
        title="Ready to book a managed relocation?"
        subtitle="Send chip number, rabies date and origin on WhatsApp only if you want us to run the file — or open door-to-door / import services. MOCCAE permits are valid 90 days from issuance; titer samples (when required) within 90 days before travel. Confirm fees on the portal."
        eligibilityMessage={waPermit}
        links={[
          { to: '/service/pet-import-dubai/', label: 'Pet import to Dubai', icon: 'plane' },
          { to: '/guides/import-checklist/', label: 'Import checklist', icon: 'file' },
          { to: '/prices/', label: 'Prices after eligibility', icon: 'package' },
        ]}
      />
      <OfficialSources />
    </>
  )
}
