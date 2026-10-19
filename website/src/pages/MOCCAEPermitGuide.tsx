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
import { PERMIT_VALIDITY } from '../lib/regulatory.ts'

const CHECKED = '22 September 2026'
const TITRE_ON_PERMIT =
  'High-risk origins need a rabies antibody result of at least 0.5 IU/ml. The certificate is valid for 365 days if the vaccine stays valid and continuous and no booster is given. Otherwise the test is repeated. A first vaccine, or a gap in vaccination, needs at least 21 days before the test. A valid booster does not. The permit is a separate document, valid 90 days from issuance.'
const PERMIT_TIME =
  'The published estimate is 1 working day, or 5 working days for a service, emotional support or medical dog. That is an estimate on the page, not a promise.'
const PERMIT_FEES =
  'On 22 September 2026 the MOCCAE page listed AED 200 to issue an import permit for one animal, AED 500 to release one dog, and AED 250 to release one cat. These are government charges, not a relocation package. Pay the amount shown when you apply.'
import GuideDualPath from '../components/GuideDualPath.tsx'
import { CTA_ELIGIBILITY_MOVE, CTA_PERMIT_ELIGIBILITY, GUIDE_SOFT_GATE, STRONG_WA_CLASS, waEligibility } from '../lib/conversionCopy.ts'
import GuideToc from '../components/GuideToc.tsx'

const waPermit = waEligibility({ need: 'document plan' })
const waManaged = waEligibility({ need: 'managed move' })

const PERMIT_WA =
  'inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-2xl bg-[#0B6B3A] px-5 py-3.5 text-sm font-semibold text-white shadow-lg ring-1 ring-black/10 transition hover:bg-[#085530] sm:w-auto'
const PERMIT_SECONDARY =
  'inline-flex min-h-12 w-full items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-[#3A45B0] ring-1 ring-[#3A45B0]/30 hover:bg-[#E9ECFB] sm:w-auto'
const PERMIT_END_LINK =
  'inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-transparent px-5 py-3.5 text-sm font-semibold text-white ring-1 ring-white/45 transition hover:bg-white/10'
const PERMIT_DIY =
  'Not ready to hire? Use the self-serve steps on this page. No free human consultation is promised.'
const PERMIT_FINE =
  'WhatsApp +971 50 478 2999. The permit is valid 90 days from issuance. Confirm government fees on the MOCCAE portal.'
const PERMIT_PAID = [
  'Line-check of chip number, vaccine dates and pet photo before you pay the portal',
  'Permit timed so the 90-day window covers the booked flight',
  'Resubmission handled if MOCCAE sends the file back',
  'Airline or cargo booking and IATA crate check',
  'DXB arrival release and customs paperwork coordination',
] as const
const PERMIT_SOURCES = [
  { label: 'UAE MOCCAE: import permits and rules', href: 'https://www.moccae.gov.ae' },
  { label: 'IATA Live Animals Regulations: travel crates', href: 'https://www.iata.org/en/programs/cargo/live-animals/' },
  { label: 'Etihad: travelling with pets', href: 'https://www.etihad.com/en-ae/plan/travel-companion/travelling-with-pets' },
  { label: 'Emirates: pets and unusual baggage allowances', href: 'https://www.emirates.com/english/before-you-fly/baggage/unusual-baggage-and-special-allowances/' },
  { label: 'USDA APHIS: Pet Travel (US health certificates)', href: 'https://www.aphis.usda.gov/pet-travel' },
]

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
  const title = 'MOCCAE Import Permit | Application Guide'
  const description =
    'How to apply for a MOCCAE pet import permit with UAE Pass. Valid 90 days from issuance. Confirm fees on the MOCCAE portal. Check if we can file it for you.'
  const canonical = `${BASE_URL}/guides/moccae-import-permit/`
  const ogImage = `${BASE_URL}/assets/og-moccae-permit.jpg`

  const faqData = [
    {
      question: 'Do I need a MOCCAE pet import permit?',
      answer:
        'Every dog or cat entering the UAE needs its own MOCCAE import permit before travel, with one pet on one permit. Airlines will not board the pet without it, and customs will refuse entry. Apply on the official MOCCAE portal with UAE Pass using the steps on this page. The permit is valid 90 days from issuance. Confirm the current import-permit and arrival-release fees on that portal; fees may change. DIY the steps on this page. Paid permit assistance: [/service/moccae-pet-permit/](/service/moccae-pet-permit/). The managed inbound file is [pet import Dubai](/service/pet-import-dubai/). Tick-list: [/guides/import-checklist/](/guides/import-checklist/). Coordination packages: [/prices/](/prices/). Email support@dubai-pet-relocation.ae or WhatsApp +971504782999 when you are ready to book a managed file.',
    },
    {
      question: 'How do I apply for a MOCCAE import permit?',
      answer:
        'Log in to moccae.gov.ae with UAE Pass, then open Export and Import Services and Import Permit for Pets. The import application itself lists no documents for ordinary dogs and cats. Release later needs the customs paper or bill of lading, the vaccine record, the health certificate, and the antibody certificate if the origin is high-risk. The permit is valid 90 days from issuance. On 22 September 2026 the page listed AED 200 per animal, AED 500 to release a dog, and AED 250 to release a cat. The published estimate is 1 working day, or 5 working days for a service, emotional support or medical dog. DIY those steps on this page. WhatsApp +971504782999 only if you want a quote. Buyers who want the file held use [/service/moccae-pet-permit/](/service/moccae-pet-permit/). Tick-list: [/guides/import-checklist/](/guides/import-checklist/).',
    },
    {
      question: 'How to get a MOCCAE license?',
      answer:
        'For pet relocation, you almost always mean the import permit for pets, not a MOCCAE business or trade license. Apply with UAE Pass on moccae.gov.ae, then open Export and Import Services and Import Permit for Pets. The permit is valid 90 days from issuance. Confirm the current portal fee when you apply; fees may change. If you need a commercial trade license, that is a different MOCCAE product. Do not mix the two applications. Service help: [/service/moccae-pet-permit/](/service/moccae-pet-permit/). Full import checklist: [/guides/uae-pet-import-requirements/](/guides/uae-pet-import-requirements/).',
    },
    {
      question: 'How long does the MOCCAE import permit take?',
      answer:
        'Complete applications are typically estimated at 2–5 working days. That figure is secondary-sourced, not a first-party SLA. Incomplete or inconsistent files are returned and the estimate restarts. Apply once the travel date is real enough to fit the 90-day validity window.',
    },
    {
      question: 'What is the UAE Pass path for a MOCCAE import permit?',
      answer:
        'Log in at moccae.gov.ae with UAE Pass, then open Services → Export and Import Services → Import Permit for Pets. You cannot skip UAE Pass. If you do not yet have an account, set it up before you gather scans. The form will not open without it. This guide walks the path. Use MOCCAE permit assistance if you want a coordinator on the thread.',
    },
    {
      question: 'Why was my MOCCAE application sent back?',
      answer:
        'Typical causes: pet photo that is not a clear front face on a neutral background; rabies vaccination outside the 21-day / 12-month window on the planned arrival date; a microchip digit that does not match the certificate; breed spelling that does not match the vet record; a missing RNATT when the origin requires one. The Ministry tells you the reason. Fix that reason, then resubmit. Confirm whether a fresh portal fee is charged when you resubmit.',
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
        'DIY on this page if you already have UAE Pass, a consistent document pack and time to absorb a resubmission. Use [/service/moccae-pet-permit/](/service/moccae-pet-permit/) if a rejection would blow a cargo booking or you cannot complete UAE Pass yourself. The government fee is the same either way. You are buying file hygiene, not a Ministry stamp. When you also need crate, cargo and a Dubai door, open [/service/pet-import-dubai/](/service/pet-import-dubai/) or quote after eligibility on [/prices/](/prices/). Tick-list: [/guides/import-checklist/](/guides/import-checklist/).',
    },
        {
      question: 'Does this permit replace the rabies titer test?',
      answer:
        'The MOCCAE import permit is Ministry approval to enter, valid 90 days from issuance. An antibody test is a separate laboratory result for a high-risk origin: at least 0.5 IU/ml, with a certificate valid 365 days if the vaccine stays valid and no booster is given. An older 90-day sample window is not on the live page. See the [rabies titre guide](/guides/rabies-titer-test-dubai/). This page does not reprint the low-risk list. On 22 September 2026 the United Kingdom was on it and the United States was not named on it.',
    },
    {
      question: 'How much does a MOCCAE import permit cost?',
      answer:
        'On 22 September 2026 the MOCCAE page listed AED 200 to issue an import permit for one animal, AED 500 to release one dog, and AED 250 to release one cat. Pay the amount on the screen when you apply. Those government charges are separate from veterinary work, the crate, cargo and coordination. Paid filing help: [/service/moccae-pet-permit/](/service/moccae-pet-permit/). Full inbound job: [/service/pet-import-dubai/](/service/pet-import-dubai/).',
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
        name: 'Prepare required documents',
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
        name: 'Submit the application',
        text: 'Upload all documents, enter pet details accurately, and pay the current portal fee (confirm the amount on the official MOCCAE site).',
      },
      {
        '@type': 'HowToStep',
        position: 4,
        name: 'Wait for approval',
        text: 'Processing is typically estimated at 2–5 working days for a complete file. Monitor email and the portal. This is an estimate, not a first-party SLA.',
      },
      {
        '@type': 'HowToStep',
        position: 5,
        name: 'Download the permit',
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
<div className="mx-auto max-w-[900px] px-5 pt-8"><GuideToc items={[{ href: '#what-moccae-is', label: 'What MOCCAE is' }, { href: '#application-steps', label: 'Application steps' }]} /></div>

      {/* Hero */}
      <Hero
        image="/assets/w5/moccae-import-permit-guide-clipboard-illustration.png"
        imageAlt="Illustration of a MOCCAE import permit application with a validity clock"
        eyebrow="Step-by-step guide"
        title="How to apply for a MOCCAE import permit"
        subtitle="A MOCCAE pet import permit is valid for 90 days from issuance. This page covers UAE Pass, the form, and why a file is sent back. Confirm the fee on the MOCCAE portal."
        updated={`Last verified: ${CHECKED}`}
        whatsappMessage={waPermit}
        primaryLabel={CTA_PERMIT_ELIGIBILITY}
        primaryClassName={STRONG_WA_CLASS}
        secondary={{ label: 'Permit assistance service', to: '/service/moccae-pet-permit/' }}
        showBuyerQualify
        paidIncludes={[...PERMIT_PAID]}
        gateLine={GUIDE_SOFT_GATE}
        waService="Import service"
      />

      <section className="section-padding bg-white">
        <div className="max-w-[900px] mx-auto px-5 sm:px-6 lg:px-8 space-y-6">
          <SnippetAnswer question={snippetQuestion} answer={snippetAnswer} />
          <GuideDualPath
            diyNote="Keep reading for the UAE Pass path, 90-day validity and rejection fixes if you are filing yourself."
            moneyTo="/service/moccae-pet-permit/"
            moneyLabel="MOCCAE permit assistance"
            moneyClassName={PERMIT_SECONDARY}
            waMessage={waPermit}
            waLabel={CTA_PERMIT_ELIGIBILITY}
            waClassName={PERMIT_WA}
            gateLine={GUIDE_SOFT_GATE}
            diyLine={PERMIT_DIY}
            waService="Import service"
          />
          <p className="text-sm leading-relaxed text-[#5A5A5A]">{GUIDE_SOFT_GATE}</p>
          <div className="rounded-[20px] bg-[#F5F6FD] p-5 sm:p-6 ring-1 ring-[#4F5BD5]/10">
            <h2 className="text-lg font-bold text-[#2A2A2A] mb-4">
              What you need before you apply
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
                <dd className="mt-1 text-sm leading-relaxed text-[#5A5A5A]">{TITRE_ON_PERMIT}</dd>
              </div>
            </dl>
            <p className="mt-4 text-sm leading-relaxed text-[#5A5A5A]">
              {PERMIT_FEES} After clearance, the{' '}
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
      <section id="what-moccae-is" className="section-padding scroll-mt-24 bg-[#F5F6FD]">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mb-4">
                What is MOCCAE and why does it matter?
              </h2>
              <p className="text-[#5A5A5A] text-base leading-relaxed mb-6">
                MOCCAE is the UAE Ministry of Climate Change and Environment. It is the federal office that decides whether a dog or cat may enter any of the seven emirates, Dubai included. If you are planning a move, this is the permit that sits between a booked crate and a refused cargo desk.
              </p>
              <p className="text-[#5A5A5A] text-base leading-relaxed mb-6">
                You apply on the official portal with UAE Pass. The import permit is valid for 90 days from issuance. Confirm the current permit and arrival-release fees on that portal; amounts change and we do not assume a table here. Airlines will not board without the PDF, and the cargo village will not release the animal without it. This page is the how-to. Paid filing help is{' '}
                <Link to="/service/moccae-pet-permit/" className="font-semibold text-[#4F5BD5] hover:underline">
                  MOCCAE permit assistance
                </Link>
                . When you also need crate, cargo and a Dubai door, open{' '}
                <Link to="/service/pet-import-dubai/" className="font-semibold text-[#4F5BD5] hover:underline">
                  pet import Dubai
                </Link>
                . The wider overview is{' '}
                <Link to="/" className="font-semibold text-[#4F5BD5] hover:underline">
                  pet relocation Dubai
                </Link>
                . The statutory list lives on{' '}
                <Link to="/guides/uae-pet-import-requirements/" className="font-semibold text-[#4F5BD5] hover:underline">
                  UAE pet import requirements for dogs and cats
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
                  Why the permit is mandatory
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
              <h3 className="text-xl font-bold text-[#2A2A2A] mb-5">Permit at a glance</h3>
              <div className="space-y-4">
                <div className="p-4 bg-[#4F5BD5]/5 rounded-xl">
                  <p className="font-semibold text-[#4F5BD5] text-sm mb-1">Cost</p>
                  <p className="text-lg font-bold text-[#2A2A2A]">AED 200 / 500 / 250</p>
                  <p className="text-sm text-[#5A5A5A] mt-1">{PERMIT_FEES}</p>
                </div>
                <div className="p-4 bg-[#4F5BD5]/5 rounded-xl">
                  <p className="font-semibold text-[#4F5BD5] text-sm mb-1">Processing time</p>
                  <p className="text-lg font-bold text-[#2A2A2A]">1 working day</p>
                  <p className="text-sm text-[#5A5A5A] mt-1">{PERMIT_TIME}</p>
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
                  <p className="text-lg font-bold text-[#2A2A2A]">0.5 IU/ml, 365-day certificate</p>
                  <p className="text-sm text-[#5A5A5A] mt-1">{TITRE_ON_PERMIT}</p>
                </div>
                <div className="p-4 bg-[#C9453A]/5 rounded-xl">
                  <p className="font-semibold text-[#C9453A] text-sm mb-1">Penalty without permit</p>
                  <p className="text-lg font-bold text-[#2A2A2A]">Rejection or confiscation</p>
                  <p className="text-sm text-[#5A5A5A] mt-1">At the owner&apos;s expense if rejected. The page checked on {CHECKED} does not publish a fine amount.</p>
                </div>
                <LastVerified date={CHECKED} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Step-by-Step Process */}
      <section id="application-steps" className="section-padding scroll-mt-24 bg-white">
        <div id="step-by-step" className="sr-only" />
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mb-4">
              Step-by-step MOCCAE import permit application
            </h2>
            <p className="text-[#5A5A5A] text-base leading-relaxed">
              Follow the steps in order. If you want a coordinator on the file, use{' '}
              <Link to="/service/moccae-pet-permit/" className="font-semibold text-[#4F5BD5] hover:underline">
                MOCCAE permit assistance
              </Link>
              .
            </p>
          </div>

          <ContentImage
            src="/assets/w5/moccae-import-permit-application-steps-diagram.webp"
            alt="Step-by-step MOCCAE import permit application from account setup to permit issue"
            caption="Generic UI blocks, not screenshots of the live portal. Confirm the live fee on the MOCCAE portal. Permit validity is 90 days from issuance."
            width={1024}
            height={1536}
          />

          <div className="space-y-6 mb-10">
            <div className="bg-white rounded-[20px] shadow-sm p-6 lg:p-8 flex gap-5">
              <div className="w-12 h-12 rounded-full bg-[#4F5BD5] text-white flex items-center justify-center text-lg font-bold shrink-0">1</div>
              <div>
                <h3 className="text-xl font-bold text-[#2A2A2A] mb-2">Prepare required documents</h3>
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
                    <span>Microchip number that matches the health certificate. ISO 11784/11785 was not restated as a current rule.</span>
                  </div>
                  <div className="p-3 bg-[#F5F6FD] rounded-xl text-sm text-[#5A5A5A] flex items-start gap-2">
                    <FileText className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" />
                    <span>Authorised health certificate. The live page does not state a universal 10-day validity.</span>
                  </div>
                  <div className="p-3 bg-[#F5F6FD] rounded-xl text-sm text-[#5A5A5A] flex items-start gap-2">
                    <Ban className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" />
                    <span>Breed name against the published ban list. Rottweiler, Doberman and Boxer were not on it.</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-[20px] shadow-sm p-6 lg:p-8 flex gap-5">
              <div className="w-12 h-12 rounded-full bg-[#4F5BD5] text-white flex items-center justify-center text-lg font-bold shrink-0">2</div>
              <div>
                <h3 className="text-xl font-bold text-[#2A2A2A] mb-2">Sign in with UAE Pass</h3>
                <p className="text-[#5A5A5A] text-sm leading-relaxed mb-3">
                  Open the official MOCCAE digital services portal and authenticate with <strong>UAE Pass</strong>. Then choose Services → Export and Import Services → Import Permit for Pets. If you do not have UAE Pass yet, create it first. The form will not open without it. A sponsor or household member with UAE Pass can sometimes complete the application for a newcomer; the applicant details must still match the person who will collect the pet.
                </p>
                <div className="warning-box">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-[#C89F5A] shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-[#2A2A2A] text-sm mb-1">Portal access tip</p>
                      <p className="text-[#5A5A5A] text-sm">The MOCCAE portal sometimes has server maintenance or slow response times. Apply during UAE business hours (Sunday–Thursday, 8 AM–4 PM) for best results. Save your application reference number immediately.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-[20px] shadow-sm p-6 lg:p-8 flex gap-5">
              <div className="w-12 h-12 rounded-full bg-[#4F5BD5] text-white flex items-center justify-center text-lg font-bold shrink-0">3</div>
              <div>
                <h3 className="text-xl font-bold text-[#2A2A2A] mb-2">Submit the application</h3>
                <p className="text-[#5A5A5A] text-sm leading-relaxed mb-3">
                  Fill pet details (species, breed spelling exactly as on the vet record, microchip number), origin country, and planned arrival. The import application itself lists no documents for ordinary dogs and cats. Service, emotional support and medical dogs are the exception and need the three certified papers named on the page. {PERMIT_FEES} A high-risk origin still needs the antibody certificate at release: at least 0.5 IU/ml, under the 365-day conditions.
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
                <h3 className="text-xl font-bold text-[#2A2A2A] mb-2">Wait for approval</h3>
                <p className="text-[#5A5A5A] text-sm leading-relaxed mb-3">
                  {PERMIT_TIME} Monitor email and the portal. Keep the application reference. If the estimate slips, contact MOCCAE with that reference, or ask{' '}
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
                <h3 className="text-xl font-bold text-[#2A2A2A] mb-2">Download and print the permit</h3>
                <p className="text-[#5A5A5A] text-sm leading-relaxed">
                  Once approved, download the permit PDF and print at least two copies. One copy goes with your pet's travel documents, and one stays with you. The airline will check the permit at check-in, and Dubai customs will verify it on arrival. Do not rely on digital copies alone. Printed permits are mandatory.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <GuideFunnelCta
        variant="mid"
        title="Permit ready - book the managed move?"
        subtitle="This guide covers the MOCCAE import permit, valid 90 days from issuance. Stay here if you are filing yourself. When you also need crate, cargo and door delivery, open pet import to Dubai or WhatsApp if you are ready to book. Government fees checked on 22 September 2026 were AED 200, AED 500 and AED 250."
        eligibilityMessage={waManaged}
        waLabel={CTA_ELIGIBILITY_MOVE}
        waClassName={PERMIT_WA}
        waService="Import service"
        paidItems={PERMIT_PAID}
        paidAfterCta
        gateLine={GUIDE_SOFT_GATE}
        diyLine={PERMIT_DIY}
        finePrint={PERMIT_FINE}
        links={[
          { to: '/service/pet-import-dubai/', label: 'pet import Dubai', icon: 'plane' },
          { to: '/', label: 'pet relocation Dubai', icon: 'package' },
          { to: '/service/moccae-pet-permit/', label: 'MOCCAE pet permit assistance', icon: 'file' },
        ]}
      />

      {/* Common Rejection Reasons */}
      <section className="section-padding bg-[#F5F6FD]">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mb-8 text-center">
            Common rejection reasons and how to fix them
          </h2>
          <ContentImage
            src="/assets/w5/moccae-permit-rejection-causes-and-fixes-diagram.webp"
            alt="MOCCAE pet permit rejection causes and how to fix each one"
            caption="Cause and fix. Confirm any resubmission fee on the portal. We do not assume one."
            width={1536}
            height={1024}
          />
          <div className="overflow-x-auto mb-10">
            <table className="data-table min-w-[600px]">
              <thead>
                <tr>
                  <th>Rejection reason</th>
                  <th>How to fix</th>
                  <th>Prevention tip</th>
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
                <p className="font-semibold text-[#2A2A2A] mb-1">Resubmission resets the timeline</p>
                <p className="text-[#5A5A5A] text-sm leading-relaxed">
                  When you resubmit after a rejection, the processing estimate restarts. Two rejects can push a cargo date past the 90-day window. That is the practical reason to line-check the file, or to use{' '}
                  <Link to="/service/moccae-pet-permit/" className="font-semibold text-[#4F5BD5] hover:underline">
                    MOCCAE permit assistance
                  </Link>
                  , before you pay the portal.
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
                <h3 className="text-xl font-bold text-[#2A2A2A]">MOCCAE export permit (leaving Dubai)</h3>
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
                <h3 className="text-xl font-bold text-[#2A2A2A]">How Dubai Pet Relocation handles permits</h3>
              </div>
              <p className="text-[#5A5A5A] text-sm leading-relaxed mb-5">
                <Link to="/service/moccae-pet-permit/" className="font-semibold text-[#4F5BD5] hover:underline">
                  MOCCAE permit assistance
                </Link>{' '}
                is the paid filing service for this guide: document collection, a line-check against the current requirements, portal submission support, and status tracking until the Ministry issues the PDF. We do not issue permits and we do not claim a volume badge.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#4F5BD5] text-white flex items-center justify-center text-xs font-bold shrink-0">1</div>
                  <div>
                    <p className="font-semibold text-[#2A2A2A] text-sm">Document review</p>
                    <p className="text-xs text-[#5A5A5A]">We check every document for completeness, format, and accuracy before submission.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#4F5BD5] text-white flex items-center justify-center text-xs font-bold shrink-0">2</div>
                  <div>
                    <p className="font-semibold text-[#2A2A2A] text-sm">Application submission</p>
                    <p className="text-xs text-[#5A5A5A]">We complete the MOCCAE portal application, upload documents, and pay fees.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#4F5BD5] text-white flex items-center justify-center text-xs font-bold shrink-0">3</div>
                  <div>
                    <p className="font-semibold text-[#2A2A2A] text-sm">Follow-up and monitoring</p>
                    <p className="text-xs text-[#5A5A5A]">We track application status daily and contact MOCCAE if processing exceeds 5 days.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#4F5BD5] text-white flex items-center justify-center text-xs font-bold shrink-0">4</div>
                  <div>
                    <p className="font-semibold text-[#2A2A2A] text-sm">Error correction and resubmission</p>
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
                  <td>You. We do not assume a government login</td>
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
            Related guides
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link to="/service/moccae-pet-permit/" className="bg-[#E9ECFB] rounded-[20px] p-6 hover:shadow-md transition-shadow group ring-1 ring-[#4F5BD5]/20">
              <div className="w-10 h-10 rounded-xl bg-[#4F5BD5]/10 flex items-center justify-center mb-4">
                <Shield className="w-5 h-5 text-[#4F5BD5]" />
              </div>
              <h3 className="text-lg font-bold text-[#2A2A2A] mb-2 group-hover:text-[#4F5BD5] transition-colors">MOCCAE permit assistance</h3>
              <p className="text-sm text-[#5A5A5A] leading-relaxed">Paid document review and tracking. We still do not issue the permit.</p>
            </Link>
            <Link to="/guides/uae-pet-import-requirements/" className="bg-[#F5F6FD] rounded-[20px] p-6 hover:shadow-md transition-shadow group">
              <div className="w-10 h-10 rounded-xl bg-[#4F5BD5]/10 flex items-center justify-center mb-4 group-hover:bg-[#4F5BD5]/20 transition-colors">
                <FileCheck className="w-5 h-5 text-[#4F5BD5]" />
              </div>
              <h3 className="text-lg font-bold text-[#2A2A2A] mb-2 group-hover:text-[#4F5BD5] transition-colors">UAE pet import requirements</h3>
              <p className="text-sm text-[#5A5A5A] leading-relaxed">Complete step-by-step guide to all documentation needed for importing pets into the UAE.</p>
            </Link>
            <Link to="/guides/rabies-titer-test-dubai/" className="bg-[#F5F6FD] rounded-[20px] p-6 hover:shadow-md transition-shadow group">
              <div className="w-10 h-10 rounded-xl bg-[#4F5BD5]/10 flex items-center justify-center mb-4 group-hover:bg-[#4F5BD5]/20 transition-colors">
                <Stethoscope className="w-5 h-5 text-[#4F5BD5]" />
              </div>
              <h3 className="text-lg font-bold text-[#2A2A2A] mb-2 group-hover:text-[#4F5BD5] transition-colors">Rabies titer test (RNATT)</h3>
              <p className="text-sm text-[#5A5A5A] leading-relaxed">At least 0.5 IU/ml. Certificate valid 365 days if the vaccine stays valid and no booster is given.</p>
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
              <h3 className="text-lg font-bold text-[#2A2A2A] mb-2 group-hover:text-[#C89F5A] transition-colors">Dog relocation to Dubai</h3>
              <p className="text-sm text-[#5A5A5A] leading-relaxed">Complete guide for bringing dogs to Dubai, including breed rules and crate requirements.</p>
            </Link>
            <Link to="/cat-relocation-to-dubai/" className="bg-[#F5F6FD] rounded-[20px] p-6 hover:shadow-md transition-shadow group">
              <div className="w-10 h-10 rounded-xl bg-[#4F5BD5]/10 flex items-center justify-center mb-4 group-hover:bg-[#4F5BD5]/20 transition-colors">
                <Cat className="w-5 h-5 text-[#4F5BD5]" />
              </div>
              <h3 className="text-lg font-bold text-[#2A2A2A] mb-2 group-hover:text-[#4F5BD5] transition-colors">Cat relocation to Dubai</h3>
              <p className="text-sm text-[#5A5A5A] leading-relaxed">Everything you need to know about bringing cats to Dubai safely.</p>
            </Link>
          </div>
        </div>
      </section>

      <GuideFunnelCta
        variant="end"
        title="Ready to book a managed relocation?"
        subtitle="Send chip number, rabies date and origin on WhatsApp only if you want a managed file. The permit is valid 90 days from issuance. Government fees checked on 22 September 2026 were AED 200, AED 500 and AED 250."
        eligibilityMessage={waPermit}
        waLabel={CTA_PERMIT_ELIGIBILITY}
        waClassName={PERMIT_WA}
        linkClassName={PERMIT_END_LINK}
        waService="Import service"
        paidItems={PERMIT_PAID}
        paidAfterCta
        gateLine={GUIDE_SOFT_GATE}
        diyLine={PERMIT_DIY}
        finePrint={PERMIT_FINE}
        links={[
          { to: '/service/pet-import-dubai/', label: 'pet import Dubai', icon: 'plane' },
          { to: '/', label: 'pet relocation Dubai', icon: 'package' },
          { to: '/guides/import-checklist/', label: 'Import checklist', icon: 'file' },
        ]}
      />
      <OfficialSources heading="Official sources" sources={PERMIT_SOURCES} />
    </>
  )
}
