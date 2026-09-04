import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  CheckCircle,
  AlertTriangle,
  ChevronDown,
  ChevronUp,
  FileText,
  Shield,
  Plane,
  Clock,
  Stethoscope,
  MessageCircle,
  Microscope,
  Ban,
  PawPrint,
  Syringe,
} from 'lucide-react'
import SEOHead from '../components/SEOHead.tsx'
import Hero from '../components/Hero.tsx'
import SnippetAnswer from '../components/SnippetAnswer.tsx'
import { getWhatsAppUrl, BASE_URL, siteConfig } from '../lib/seo.ts'
import Breadcrumb from '../components/Breadcrumb.tsx'
import LastVerified from '../components/LastVerified.tsx'
import ContentImage from '../components/ContentImage.tsx'
import OfficialSources from '../components/OfficialSources.tsx'
import {
  EXEMPT_LIST_HOLD,
  LAST_VERIFIED_LABEL,
  MANIFEST_CARGO,
  MICROCHIP_BEFORE_RABIES,
  NONCOMPLIANCE_FINE,
  PARASITE_WINDOW,
  PERMIT_FEE_VERIFY,
  PERMIT_PROCESSING_ESTIMATE,
  PERMIT_VALIDITY,
  RABIES_AGE_WAIT,
  TITER_SAMPLE_RULE,
  TWO_PETS_RULE,
} from '../lib/regulatory.ts'

/* ─── FAQ accordion helper ─── */
function FAQItem({ question, answer }: { question: string; answer: React.ReactNode }) {
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
      {open && <div className="faq-answer">{answer}</div>}
    </div>
  )
}

const snippetQuestion = 'How long do pets stay in quarantine?'
const snippetAnswer =
  'The UAE typically has no long quarantine when documents are correct. Compliant dogs and cats are examined at the entry port and released to the owner. We do not invent a day-count for a paperwork hold. Dogs are legal; some breeds are banned. The MOCCAE import permit is valid 30 days.'

const IMPORT_PAA_FAQS: { q: string; a: string; link?: { to: string; label: string } }[] = [
  {
    q: 'How long do pets stay in quarantine?',
    a: 'The UAE typically has no long quarantine when the file is correct. Compliant pets are examined by MOCCAE veterinary staff at the entry port and released to the owner. Incomplete papers can mean a hold, refusal or re-export at your expense — we do not invent a day-count for that hold. The import permit is valid 30 days.',
  },
  {
    q: 'Is there quarantine for pets in Dubai?',
    a: 'No routine quarantine for a compliant file. MOCCAE veterinary staff examine the pet at the entry port and release the owner. There is no new quarantine URL on this site — this import-requirements page owns the question. A paperwork problem can still mean a hold, refusal or re-export at your expense.',
  },
  {
    q: 'What are the quarantine rules for pets entering the UAE?',
    a: 'Compliant pets are not routinely quarantined. The rule is examination and release at the port when the microchip, rabies papers, health certificate and 30-day MOCCAE import permit match. We do not invent a hold duration. Depth stays on this page — we did not create a separate quarantine guide URL.',
  },
  {
    q: 'What are the rules and regulations for pets in the UAE?',
    a: 'UAE pet rules cover an ISO microchip, current rabies vaccination, a government health certificate, a MOCCAE import permit valid 30 days, cargo entry (except Etihad cabin into Abu Dhabi), municipality registration after arrival, and breed bans. Confirm contested government fees on the official portal. Email support@dubai-pet-relocation.ae or WhatsApp +971 50 478 2999.',
    link: { to: '/guides/banned-dog-breeds-dubai/', label: 'Banned dog breeds in Dubai' },
  },
  {
    q: 'What are the requirements for traveling with my pet to the UAE?',
    a: 'You need an ISO 15-digit microchip implanted before the rabies vaccine, a current rabies vaccination, core vaccines, a government-endorsed health certificate, antiparasitic timing, and a MOCCAE import permit valid 30 days. Pets enter Dubai as manifest cargo. High-risk origins add a titer pathway. Confirm live portal fees before you apply.',
  },
  {
    q: 'Does Dubai allow pet dogs?',
    a: 'Yes. Dubai allows pet dogs when the breed is permitted and the import documents are complete. Some types are federally banned or restricted in apartments. Check the banned-breed list before you book a crate or a flight. A MOCCAE import permit, valid 30 days, is still required.',
    link: { to: '/guides/banned-dog-breeds-dubai/', label: 'Banned dog breeds in Dubai' },
  },
  {
    q: 'Is it legal to have a dog in Dubai?',
    a: 'Yes. It is legal to keep a permitted dog in Dubai. You still need the 30-day MOCCAE import permit to bring one in, then municipality registration. Banned and restricted breeds cannot be treated as a loophole. We are a coordinator — confirm the current list on the official portal and our banned-breeds guide.',
    link: { to: '/guides/banned-dog-breeds-dubai/', label: 'Banned dog breeds in Dubai' },
  },
  {
    q: 'Do I need a MOCCAE import permit for my dog?',
    a: 'Yes — and every cat too. The permit is valid 30 days from issuance. Apply questions and the walkthrough live on the MOCCAE import permit guide. This page stays on the full import-rules checklist, including quarantine.',
    link: { to: '/guides/moccae-import-permit/', label: 'MOCCAE import permit guide' },
  },
]

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
export default function ImportRequirementsPage() {
  const checklistItems = [
    'Confirm your pet\'s breed is not banned in the UAE',
    'Check if your origin country requires a rabies titer test',
    MICROCHIP_BEFORE_RABIES,
    RABIES_AGE_WAIT,
    'Administer core vaccines (DHPPIL for dogs, FVRCP for cats)',
    TITER_SAMPLE_RULE,
    `${PERMIT_VALIDITY} ${PERMIT_FEE_VERIFY}`,
    MANIFEST_CARGO,
    PARASITE_WINDOW,
    'Obtain International Health Certificate within 10 days of arrival',
    'Register with Dubai Municipality within 30 days of arrival',
  ]

  const steps = [
    {
      num: 1,
      title: 'Check Your Breed and Country',
      days: 'Day 0',
      body: 'Before you do anything, confirm two things: (1) Is your dog\'s breed listed under Federal Law 22/2016 Annex 2? (2) Does MOCCAE require an RNATT for your origin? That second question is answered on the official portal — not by an unofficial country list on this page.',
      icon: <Ban className="w-5 h-5" />,
      warn: 'The exempt / rabies-controlled country list could not be captured first-party for publication. Always verify your origin on the MOCCAE portal before skipping a titer test.',
    },
    {
      num: 2,
      title: 'Implant the Microchip',
      days: 'Day 0',
      body: MICROCHIP_BEFORE_RABIES + ' If your pet was vaccinated before being microchipped, the vaccination is invalid for UAE entry. The microchip number must appear on every subsequent document.',
      icon: <Microscope className="w-5 h-5" />,
      warn: 'If your pet was already vaccinated before getting microchipped, the vaccination is invalid for UAE entry. You\'ll need to re-vaccinate after microchipping and wait another 21 days.',
    },
    {
      num: 3,
      title: 'Rabies Vaccination',
      days: 'Day 0',
      body: RABIES_AGE_WAIT + ' The vaccine must be inactivated or recombinant (not attenuated live virus) and within 12 months of arrival.',
      icon: <Syringe className="w-5 h-5" />,
      warn: null,
    },
    {
      num: 4,
      title: 'Core Vaccinations',
      days: 'Day 0–14',
      body: 'Dogs: DHPPIL (Distemper, Hepatitis, Parvovirus, Parainfluenza, Leptospirosis). Cats: FVRCP (Feline Viral Rhinotracheitis, Calicivirus, Panleukopenia). These are typically administered alongside the rabies vaccine or shortly after.',
      icon: <Shield className="w-5 h-5" />,
      warn: null,
    },
    {
      num: 5,
      title: 'Rabies Titer Test — If Required',
      days: 'After day 21 — sample must sit within 90 days of travel',
      body: TITER_SAMPLE_RULE + ' Draw the sample ≥21 days after the rabies vaccination and send it to an accredited laboratory.',
      icon: <Stethoscope className="w-5 h-5" />,
      warn: 'We do not publish an unverified exempt-country list. Confirm your origin on the MOCCAE portal before you skip this step.',
    },
    {
      num: 6,
      title: 'Apply for MOCCAE Import Permit',
      days: 'Day 21–90',
      body: `Apply online via the MOCCAE portal with UAE Pass (see the dedicated permit guide). ${PERMIT_VALIDITY} ${PERMIT_PROCESSING_ESTIMATE} ${PERMIT_FEE_VERIFY} Required: owner passport, UAE visa or residency details, microchip number, vaccination records, and titer result if your origin requires one.`,
      icon: <FileText className="w-5 h-5" />,
      warn: 'Apply as close to your travel date as safely possible (within the 30-day validity) while leaving time for flight booking.',
    },
    {
      num: 7,
      title: 'Book Manifest Cargo Flight',
      days: '2–4 weeks before travel',
      body: `${MANIFEST_CARGO} Emirates arrivals into Dubai travel as SkyCargo. Cargo pricing is airline- and route-specific — we do not invent a total here.`,
      icon: <Plane className="w-5 h-5" />,
      warn: null,
    },
    {
      num: 8,
      title: 'Health Certificate and Antiparasitics',
      days: 'Within 10–14 days of travel',
      body: `${PARASITE_WINDOW} International health certificate: issued or endorsed by the competent origin authority, commonly within 5–10 days of departure.`,
      icon: <Stethoscope className="w-5 h-5" />,
      warn: null,
    },
    {
      num: 9,
      title: 'Arrival and Customs Clearance',
      days: 'Day of arrival',
      body: 'Your pet arrives at DXB or DWC cargo terminal. You (or your agent) present the MOCCAE import permit, original health certificate, vaccination records, microchip certificate, titer test result (if applicable), antiparasitic treatment record, and owner\'s passport and UAE visa. If all documents are correct, customs clearance takes 2–4 hours. Your pet does not enter quarantine.',
      icon: <CheckCircle className="w-5 h-5" />,
      warn: null,
    },
    {
      num: 10,
      title: 'Dubai Municipality Registration',
      days: 'Within 30 days',
      body: 'Register your pet via the Aleef app or Dubai Smart Services portal. You need your Emirates ID, pet\'s microchip number, current vaccination records, pet photo, and your residence address (Makani number). Fee: ~AED 10. Annual renewal required. A physical municipality ID tag must be worn on your pet\'s collar at all times.',
      icon: <FileText className="w-5 h-5" />,
      warn: null,
    },
  ]

  return (
    <div className="bg-[#F5F6FD]">
      <SEOHead
        title="UAE Pet Import Requirements 2026 | Permits & Documents"
        description="Complete guide to UAE pet import requirements for Dubai. MOCCAE permit, vaccination rules, banned breeds, health certificates, microchip, rabies titer test, and more."
        keywords="UAE pet import requirements, MOCCAE import permit, Dubai pet import rules, pet vaccination requirements UAE, dog import Dubai, cat import Dubai, banned dog breeds Dubai"
        canonical={`${BASE_URL}/guides/uae-pet-import-requirements/`}
        ogType="article"
        schemas={[
          {
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              ...IMPORT_PAA_FAQS.map((f) => ({
                '@type': 'Question',
                name: f.q,
                acceptedAnswer: { '@type': 'Answer', text: f.a },
              })),
              {
                '@type': 'Question',
                name: 'Do dogs need to be quarantined in Dubai?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'No. If all documentation is complete and correct — including the MOCCAE import permit, ISO microchip, rabies vaccination, and health certificate — pets do not require mandatory quarantine in Dubai. However, incomplete documentation can result in conditional quarantine at the owner\'s expense.',
                },
              },
              {
                '@type': 'Question',
                name: 'What is the MOCCAE import permit for pets?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'The MOCCAE import permit is a mandatory approval from the UAE Ministry of Climate Change and Environment required for all pets entering the UAE. It is valid for 30 days from issuance. Confirm the current permit and arrival-release fees on the official portal before you apply — published amounts have differed. You must apply online via the MOCCAE portal or app before your pet travels.',
                },
              },
              {
                '@type': 'Question',
                name: 'Is a rabies titer test required for Dubai?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'A rabies titer test (RNATT) is required for pets arriving from countries that are not on MOCCAE\'s rabies-controlled / exempt list. When it is required, the blood sample must be taken within 90 days before travel and the result must be at least 0.5 IU/ml. We do not publish an unverified country list — confirm your origin on the official portal.',
                },
              },
              {
                '@type': 'Question',
                name: 'What documents are needed to bring a cat to the UAE?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'To bring a cat to the UAE, you need: (1) MOCCAE import permit, (2) ISO 11784/11785 microchip certificate, (3) rabies vaccination certificate (≥21 days old), (4) FVRCP vaccination records, (5) international health certificate (within 10 days of travel), (6) antiparasitic treatment record, and (7) copy of owner\'s passport and UAE visa.',
                },
              },
              {
                '@type': 'Question',
                name: 'How long does preparing a UAE import file take?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'When an RNATT is not required and vaccinations are already in place, owners often complete the pack in a matter of weeks (health-certificate window, 10-day parasite treatments, 30-day permit, cargo slot). When an RNATT is required, the floor is set by the 21-day post-vaccine wait, lab turnaround, and keeping the sample inside 90 days of travel — not by a 90-day sit after the result. Start as soon as the move is real.',
                },
              },
              {
                '@type': 'Question',
                name: 'How is this guide different from the pet-import service page?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'This URL owns the statutory checklist. The commercial import job — crate, cargo, clearance, door delivery — lives on /service/pet-import-dubai/. The permit walkthrough lives on /guides/moccae-import-permit/. We cross-link; we do not clone the tables.',
                },
              },
              {
                '@type': 'Question',
                name: 'What is the non-compliance fine for a wrong import file?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'MOCCAE states a fine of AED 5,000 per animal, and the animal may be rejected or confiscated. Compliant pets are examined at the entry port and released — there is no routine quarantine.',
                },
              },
              {
                '@type': 'Question',
                name: 'Can a pet fly in the cabin into Dubai on Emirates?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'No. Emirates does not carry ordinary dogs or cats in the cabin. Itineraries ending in Dubai must travel as SkyCargo. Do not read the USD 500 / 650 / 800 checked-baggage animal charges (or older cargo range figures) as a cabin fare into DXB. Etihad publishes an in-cabin option for eligible small pets into Abu Dhabi only.',
                },
              },
              {
                '@type': 'Question',
                name: 'When must parasite treatment be given?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'External parasite treatment and internal deworming are required within 10 days before shipping to the UAE. Time them to the cargo date, not to the week you first filled a form.',
                },
              },
            ],
          },
          {
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: siteConfig.name,
            url: BASE_URL,
            email: siteConfig.email,
            telephone: siteConfig.phone,
          },
          {
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: siteConfig.name,
            url: BASE_URL,
          },
          {
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'UAE Pet Import Requirements 2026: Complete Guide to Bringing Dogs & Cats to Dubai',
            description: 'Complete guide to UAE pet import requirements for Dubai. MOCCAE permit, vaccination rules, banned breeds, health certificates, microchip, rabies titer test, and more.',
            author: {
              '@type': 'Organization',
              name: 'Dubai Pet Relocation',
            },
            publisher: {
              '@type': 'Organization',
              name: 'Dubai Pet Relocation',
            },
            datePublished: '2026-06-01',
            dateModified: '2026-09-04',
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
                name: 'UAE Pet Import Requirements',
                item: `${BASE_URL}/guides/uae-pet-import-requirements/`,
              },
            ],
          },
        ]}
      />
      <Breadcrumb
        items={[
          
          { label: 'Guides', path: '/guides/' },
          { label: 'UAE Pet Import Requirements' },
        ]}
      />
      {/* ═══════════ HERO ═══════════ */}
      <Hero
        image="/assets/w5/uae-pet-import-requirements-master-checklist-illustration.png"
        imageAlt="Master checklist of UAE pet import requirements: microchip, vaccinations, titer test, permit and health certificate"
        eyebrow="Statutory checklist — not the import service"
        title="UAE Pet Import Requirements 2026: Complete Guide to Bringing Dogs & Cats to Dubai"
        subtitle="30-day MOCCAE permit, RNATT sample within 90 days before travel, microchip before rabies, manifested cargo. Confirm fees on the portal."
        updated={LAST_VERIFIED_LABEL}
        whatsappMessage="Hi, I need the UAE pet import requirements checked for my pet from [country] to Dubai."
        primaryLabel="Check my document list"
        secondary={{ label: 'Commercial import service', to: '/service/pet-import-dubai/' }}
      />

      {/* ═══════════ SNIPPET ═══════════ */}
      <section className="pt-12 pb-4">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <SnippetAnswer question={snippetQuestion} answer={snippetAnswer} />
          <p className="text-[#5A5A5A] leading-relaxed max-w-3xl">
            The UAE typically has no long quarantine when the file is correct. Rules cover microchip, rabies, health
            certificate, a 30-day MOCCAE import permit, cargo entry, and breed bans. Dogs are legal; some types are not.{' '}
            <Link to="/guides/banned-dog-breeds-dubai/" className="text-[#4F5BD5] font-medium hover:underline">
              Banned dog breeds in Dubai
            </Link>
            . Confirm contested government fees on the official portal. Email support@dubai-pet-relocation.ae or WhatsApp
            +971 50 478 2999.
          </p>
        </div>
      </section>

      {/* ═══════════ QUICK CHECKLIST ═══════════ */}
      <section className="py-20 lg:py-28">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[20px] shadow-sm p-6 sm:p-10 lg:p-12 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-11 h-11 rounded-[14px] bg-[#E9ECFB] flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-[#4F5BD5]" />
              </div>
              <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A]">Your Quick Checklist</h2>
            </div>
            <p className="text-[#5A5A5A] mb-8">
              Here&apos;s the full document list in one place. Every item below is mandatory. Skip one, and your pet could be refused entry, confiscated, or re-exported at your expense.
            </p>
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
              {checklistItems.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full border-2 border-[#4F5BD5]/30 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-[#4F5BD5]">{i + 1}</span>
                  </div>
                  <span className="text-[#2A2A2A] text-sm leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 pt-6 border-t border-gray-100">
              <h3 className="font-bold text-[#2A2A2A] mb-3">Key MOCCAE Rules at a Glance</h3>
              <ul className="text-sm text-[#5A5A5A] space-y-1 mb-4">
                <li><strong>Import permit:</strong> {PERMIT_VALIDITY} {PERMIT_FEE_VERIFY}</li>
                <li><strong>Pets per person:</strong> {TWO_PETS_RULE}</li>
                <li><strong>Minimum import age:</strong> {RABIES_AGE_WAIT}</li>
                <li><strong>Rabies antibody titer:</strong> {TITER_SAMPLE_RULE}</li>
                <li><strong>Transport:</strong> {MANIFEST_CARGO}</li>
                <li><strong>Non-compliance:</strong> {NONCOMPLIANCE_FINE}</li>
                <li><strong>Processing estimate:</strong> {PERMIT_PROCESSING_ESTIMATE}</li>
              </ul>
              <LastVerified className="text-xs text-[#8A8A8A]" />
            </div>
            <div className="mt-8 pt-6 border-t border-gray-100 flex flex-wrap gap-4">
              <WhatsAppLink
                text="Hi, I need help understanding the import requirements for my pet from [country] to Dubai."
                label="Get help with your documents"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] text-white rounded-2xl font-semibold hover:bg-[#1ebe57] transition-colors"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ REQUIRED DOCUMENTS TABLE ═══════════ */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mb-4">
            What You Need to Bring Your Pet to Dubai (Quick Checklist)
          </h2>
          <p className="text-[#5A5A5A] mb-8">
            Every item below is mandatory. Skip one, and your pet could be refused entry, confiscated, or re-exported at your expense.
          </p>

          <div className="overflow-x-auto rounded-[20px] shadow-sm border border-gray-100 mb-8">
            <table className="data-table min-w-[640px]">
              <thead>
                <tr>
                  <th>Document</th>
                  <th>What It Is</th>
                  <th>Timing / validity</th>
                  <th>Fee note</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="font-semibold text-[#2A2A2A]">MOCCAE Import Permit</td>
                  <td>Official approval from UAE Ministry of Climate Change and Environment</td>
                  <td>30 days from issuance</td>
                  <td>Verify on portal</td>
                </tr>
                <tr>
                  <td className="font-semibold text-[#2A2A2A]">ISO Microchip Certificate</td>
                  <td>15-digit ISO 11784/11785 compliant microchip</td>
                  <td>Permanent — implant before rabies vaccination</td>
                  <td>Private vet charge</td>
                </tr>
                <tr>
                  <td className="font-semibold text-[#2A2A2A]">Rabies Vaccination Certificate</td>
                  <td>Proof of rabies vaccine administered by a licensed vet</td>
                  <td>≥21 days and ≤12 months before arrival; pet ≥12 weeks at vaccination</td>
                  <td>Private vet charge</td>
                </tr>
                <tr>
                  <td className="font-semibold text-[#2A2A2A]">Core Vaccination Records</td>
                  <td>Dogs: CDV, parvovirus, hepatitis, leptospirosis. Cats: panleukopenia, rhinotracheitis, calicivirus</td>
                  <td>Per vaccine schedule</td>
                  <td>Private vet charge</td>
                </tr>
                <tr>
                  <td className="font-semibold text-[#2A2A2A]">Rabies Titer Test (RNATT)</td>
                  <td>Blood test proving rabies antibodies when the origin requires it</td>
                  <td>Sample within 90 days before travel; result ≥0.5 IU/ml</td>
                  <td>Private lab / shipping</td>
                </tr>
                <tr>
                  <td className="font-semibold text-[#2A2A2A]">International Health Certificate</td>
                  <td>Origin-country government-endorsed veterinary certificate</td>
                  <td>Commonly 5–10 days before departure</td>
                  <td>Private / official vet</td>
                </tr>
                <tr>
                  <td className="font-semibold text-[#2A2A2A]">Antiparasitic Treatment Record</td>
                  <td>Internal deworming + external flea/tick treatment</td>
                  <td>Within 10 days before shipping</td>
                  <td>Private vet charge</td>
                </tr>
                <tr>
                  <td className="font-semibold text-[#2A2A2A]">Owner&apos;s Passport &amp; UAE Visa</td>
                  <td>Required for permit application and customs</td>
                  <td>—</td>
                  <td>—</td>
                </tr>
              </tbody>
            </table>
          </div>
          <LastVerified className="mb-8 text-xs text-[#8A8A8A]" />

          <div className="warning-box mb-8">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-[#4F5BD5] shrink-0 mt-0.5" />
              <p className="text-sm text-[#2A2A2A]">
                <strong>Critical:</strong> Every document must show the <strong>same microchip number</strong>. A mismatch between the microchip certificate and the vaccination certificate = automatic rejection at customs.
              </p>
            </div>
          </div>

          <div className="bg-[#EEF0FC] rounded-2xl p-6 mb-8">
            <h3 className="font-semibold text-[#2A2A2A] mb-3 flex items-center gap-2">
              <Clock className="w-5 h-5 text-[#4F5BD5]" />
              How Long Does It Take?
            </h3>
            <ul className="space-y-2 text-[#5A5A5A]">
              <li><strong className="text-[#2A2A2A]">RNATT not required</strong> and the pet is already vaccinated: usually a matter of weeks (health certificate, 10-day parasite treatments, 30-day permit, cargo slot)</li>
              <li><strong className="text-[#2A2A2A]">RNATT required</strong>: 21-day post-vaccine wait + lab time + the sample must still fall within 90 days before travel — not a 90-day sit after the result</li>
              <li>{EXEMPT_LIST_HOLD}</li>
            </ul>
          </div>

          <WhatsAppLink
            text="Hi, I need help with my pet's documents for import to Dubai. Can you check my timeline?"
            label="Get help with your documents — WhatsApp us"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] text-white rounded-2xl font-semibold hover:bg-[#1ebe57] transition-colors"
          />
        </div>
      </section>

      {/* ═══════════ STEP-BY-STEP TIMELINE ═══════════ */}
      <section className="py-20 lg:py-28">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mb-4">
            Step-by-Step: How to Import Your Pet to Dubai
          </h2>
          <p className="text-[#5A5A5A] mb-10">
            Follow these 10 steps in order. Each builds on the previous one. This is the statutory sequence — the commercial import job lives on{' '}
            <Link to="/service/pet-import-dubai/" className="font-semibold text-[#4F5BD5] hover:underline">
              pet import to Dubai
            </Link>
            .
          </p>
          <ContentImage
            src="/assets/w5/uae-pet-import-step-by-step-timeline-diagram.png"
            alt="Step-by-step UAE pet import timeline from vaccinations to arrival clearance"
            caption="Timed steps use the 30-day permit and the sample-within-90-days titer rule. Fees are not baked into the graphic."
          />

          <div className="relative">
            {/* vertical line */}
            <div className="absolute left-[19px] top-0 bottom-0 w-0.5 bg-[#4F5BD5]/20 hidden sm:block" />

            <div className="space-y-8">
              {steps.map((step) => (
                <div key={step.num} className="relative sm:pl-14">
                  {/* timeline dot */}
                  <div className="hidden sm:flex absolute left-0 top-0 w-10 h-10 rounded-full bg-[#4F5BD5] text-white items-center justify-center font-bold text-sm shadow-md">
                    {step.num}
                  </div>
                  <div className="bg-white rounded-[20px] shadow-sm p-6 sm:p-8 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="sm:hidden w-8 h-8 rounded-full bg-[#4F5BD5] text-white flex items-center justify-center font-bold text-xs">
                        {step.num}
                      </div>
                      <div className="w-11 h-11 rounded-[14px] bg-[#E9ECFB] flex items-center justify-center text-[#4F5BD5]">
                        {step.icon}
                      </div>
                      <div>
                        <h3 className="font-bold text-[#2A2A2A] text-lg">{step.title}</h3>
                        <span className="text-xs font-semibold text-[#4F5BD5] uppercase tracking-wide">{step.days}</span>
                      </div>
                    </div>
                    <p className="text-[#5A5A5A] leading-relaxed mb-3">{step.body}</p>
                    {step.warn && (
                      <div className="warning-box">
                        <div className="flex items-start gap-2">
                          <AlertTriangle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" />
                          <p className="text-sm text-[#2A2A2A]">{step.warn}</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10">
            <WhatsAppLink
              text="Hi, I have questions about my pet's import timeline to Dubai."
              label="Questions about your timeline? Ask an expert on WhatsApp"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] text-white rounded-2xl font-semibold hover:bg-[#1ebe57] transition-colors"
            />
          </div>
        </div>
      </section>

      {/* ═══════════ REQUIRED DOCUMENTS (DETAILED) ═══════════ */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mb-8">Required Documents Checklist</h2>
          <p className="text-[#5A5A5A] mb-10">Every pet entering the UAE needs these documents. No exceptions.</p>

          <div className="grid md:grid-cols-2 gap-6">
            {/* MOCCAE Import Permit */}
            <div className="bg-[#F5F6FD] rounded-[20px] p-6 border border-[#4F5BD5]/10 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-11 h-11 rounded-[14px] bg-[#E9ECFB] flex items-center justify-center">
                  <FileText className="w-5 h-5 text-[#4F5BD5]" />
                </div>
                <h3 className="font-bold text-[#2A2A2A]">MOCCAE Import Permit</h3>
              </div>
              <p className="text-[#5A5A5A] text-sm mb-4">
                The import permit is the gatekeeper. Without it, your pet cannot enter the UAE.
              </p>
              <ul className="text-sm text-[#5A5A5A] space-y-1 mb-4">
                <li><strong>Apply:</strong> Online at moccae.gov.ae via UAE Pass — see the <Link to="/guides/moccae-import-permit/" className="font-semibold text-[#4F5BD5] hover:underline">MOCCAE import permit guide</Link></li>
                <li><strong>Cost:</strong> confirm the current permit and arrival-release fees on the official MOCCAE portal</li>
                <li><strong>Processing:</strong> typically estimated at 2–5 working days (not a first-party SLA)</li>
                <li><strong>Validity:</strong> 30 days from issuance</li>
              </ul>
              <div className="warning-box">
                <p className="text-sm text-[#2A2A2A]">
                  <strong>Warning:</strong> The permit is valid for a limited window. Apply too early, and it may expire before you travel. Apply too late, and you may miss your flight booking window.
                </p>
              </div>
            </div>

            {/* ISO Microchip Certificate */}
            <div className="bg-[#F5F6FD] rounded-[20px] p-6 border border-[#4F5BD5]/10 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-11 h-11 rounded-[14px] bg-[#E9ECFB] flex items-center justify-center">
                  <Microscope className="w-5 h-5 text-[#4F5BD5]" />
                </div>
                <h3 className="font-bold text-[#2A2A2A]">ISO Microchip Certificate</h3>
              </div>
              <ul className="text-sm text-[#5A5A5A] space-y-1 mb-4">
                <li>Must be <strong>ISO 11784/11785 compliant</strong> (15-digit number)</li>
                <li>Must be implanted <strong>before</strong> the rabies vaccination</li>
                <li>The microchip number must appear on every document</li>
              </ul>
              <div className="warning-box">
                <p className="text-sm text-[#2A2A2A]">
                  <strong>Warning:</strong> If your pet was already vaccinated before getting microchipped, the vaccination is invalid for UAE entry. You&apos;ll need to re-vaccinate after microchipping and wait another 21 days.
                </p>
              </div>
            </div>

            {/* Rabies Vaccination Certificate */}
            <div className="bg-[#F5F6FD] rounded-[20px] p-6 border border-[#4F5BD5]/10 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-11 h-11 rounded-[14px] bg-[#E9ECFB] flex items-center justify-center">
                  <Syringe className="w-5 h-5 text-[#4F5BD5]" />
                </div>
                <h3 className="font-bold text-[#2A2A2A]">Rabies Vaccination Certificate</h3>
              </div>
              <ul className="text-sm text-[#5A5A5A] space-y-1">
                <li>Pet must be <strong>≥12 weeks old</strong> at vaccination</li>
                <li>Must be <strong>≥21 days old</strong> at time of travel</li>
                <li>Must be <strong>within 12 months</strong> of arrival</li>
                <li>Must be inactivated or recombinant vaccine</li>
                <li>Certificate must include: microchip number, vaccine batch number, manufacturer, date of administration, vet&apos;s signature and stamp</li>
              </ul>
            </div>

            {/* Rabies Titer Test */}
            <div className="bg-[#F5F6FD] rounded-[20px] p-6 border border-[#4F5BD5]/10 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-11 h-11 rounded-[14px] bg-[#E9ECFB] flex items-center justify-center">
                  <Stethoscope className="w-5 h-5 text-[#4F5BD5]" />
                </div>
                <h3 className="font-bold text-[#2A2A2A]">Rabies Titer Test (RNATT)</h3>
              </div>
              <ul className="text-sm text-[#5A5A5A] space-y-1 mb-4">
                <li>Required when MOCCAE does <strong>not</strong> treat the origin as exempt</li>
                <li>Confirm your origin on the official portal — we do not publish an unverified country list</li>
                <li>Blood sample drawn <strong>≥21 days after</strong> rabies vaccination</li>
                <li>Minimum result: <strong>≥0.5 IU/ml</strong></li>
                <li>Sample taken <strong>within 90 days before travel</strong> — not a 90-day wait after the result</li>
                <li>Processed at a laboratory MOCCAE will accept (typically WOAH / ISO 17025 accredited)</li>
              </ul>
            </div>

            {/* International Health Certificate */}
            <div className="bg-[#F5F6FD] rounded-[20px] p-6 border border-[#4F5BD5]/10 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-11 h-11 rounded-[14px] bg-[#E9ECFB] flex items-center justify-center">
                  <FileText className="w-5 h-5 text-[#4F5BD5]" />
                </div>
                <h3 className="font-bold text-[#2A2A2A]">International Health Certificate</h3>
              </div>
              <ul className="text-sm text-[#5A5A5A] space-y-1">
                <li>Issued by a <strong>government-accredited or official veterinarian</strong></li>
                <li>Valid for <strong>10 days</strong> from issuance to arrival</li>
                <li>Must include: pet owner&apos;s details, microchip number, vaccination records, antiparasitic treatment dates and products used, vet&apos;s official stamp and signature</li>
              </ul>
            </div>

            {/* Antiparasitic Treatment Record */}
            <div className="bg-[#F5F6FD] rounded-[20px] p-6 border border-[#4F5BD5]/10 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-11 h-11 rounded-[14px] bg-[#E9ECFB] flex items-center justify-center">
                  <Shield className="w-5 h-5 text-[#4F5BD5]" />
                </div>
                <h3 className="font-bold text-[#2A2A2A]">Antiparasitic Treatment Record</h3>
              </div>
              <ul className="text-sm text-[#5A5A5A] space-y-1">
                <li><strong>Internal deworming</strong> within 10 days before shipping</li>
                <li><strong>External parasite treatment</strong> (for example Fipronil or Permethrin) within 10 days before shipping</li>
                <li>Record must include product name, date of administration, and vet&apos;s signature</li>
              </ul>
            </div>

            {/* Owner's Passport */}
            <div className="bg-[#F5F6FD] rounded-[20px] p-6 border border-[#4F5BD5]/10 md:col-span-2 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-11 h-11 rounded-[14px] bg-[#E9ECFB] flex items-center justify-center">
                  <FileText className="w-5 h-5 text-[#4F5BD5]" />
                </div>
                <h3 className="font-bold text-[#2A2A2A]">Owner&apos;s Passport and UAE Visa</h3>
              </div>
              <ul className="text-sm text-[#5A5A5A] space-y-1">
                <li>Required for permit application and customs clearance</li>
                <li>The permit applicant must match the person collecting the pet</li>
              </ul>
            </div>
          </div>

          <div className="mt-10">
            <WhatsAppLink
              text="Hi, I need help with my pet's documents for import to Dubai. Can you check what I have?"
              label="Get help with your documents — Send us a photo of what you have, and we'll check it"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] text-white rounded-2xl font-semibold hover:bg-[#1ebe57] transition-colors"
            />
          </div>
        </div>
      </section>

      {/* ═══════════ BANNED AND RESTRICTED BREEDS ═══════════ */}
      <section className="py-20 lg:py-28">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mb-4">
            Banned and Restricted Dog Breeds
          </h2>
          <p className="text-[#5A5A5A] mb-8">
            Federal Law No. 22 of 2016 Annex 2 (as amended, including Ministerial Decree 190/2021) lists dangerous-dog types that cannot be imported as ordinary pets. The dedicated list lives on{' '}
            <Link to="/guides/banned-dog-breeds-dubai/" className="font-semibold text-[#4F5BD5] hover:underline">
              banned dog breeds in Dubai
            </Link>
            . Narrow service / assistance exceptions need training-centre and medical documentation — an “emotional support” letter is not a shortcut.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-[20px] shadow-sm p-6 border-l-4 border-red-500 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
              <h3 className="font-bold text-red-700 mb-4 flex items-center gap-2">
                <Ban className="w-5 h-5" />
                Completely Banned (Cannot Enter the UAE)
              </h3>

              <div className="mb-4">
                <h4 className="font-semibold text-[#2A2A2A] text-sm mb-2">Pit Bull Types</h4>
                <ul className="text-sm text-[#5A5A5A] space-y-1">
                  <li>American Pit Bull Terrier</li>
                  <li>Staffordshire Bull Terrier</li>
                  <li>American Staffordshire Terrier</li>
                  <li>American Bully</li>
                  <li>Any Bull Terrier or Pit Bull cross</li>
                </ul>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-[#2A2A2A] text-sm mb-2">Mastiff Types</h4>
                <ul className="text-sm text-[#5A5A5A] space-y-1">
                  <li>Brazilian Mastiff (Fila Brasileiro)</li>
                  <li>Argentinian Mastiff (Dogo Argentino)</li>
                  <li>Tibetan Mastiff</li>
                  <li>Neapolitan Mastiff</li>
                  <li>French Mastiff (Dogue de Bordeaux)</li>
                  <li>Boerboel</li>
                  <li>Bullmastiff</li>
                  <li>Cane Corso (Italian Mastiff)</li>
                  <li>Bully Kutta (Alangu / Indian Mastiff)</li>
                  <li>Perro de Presa Canario (Canary Mastiff)</li>
                  <li>Any Mastiff cross or hybrid</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-[#2A2A2A] text-sm mb-2">Other Banned Breeds</h4>
                <ul className="text-sm text-[#5A5A5A] space-y-1">
                  <li>Japanese Tosa (Tosa Inu)</li>
                  <li>Rottweiler</li>
                  <li>Doberman</li>
                  <li>Boxer</li>
                  <li>Wolf-dog hybrids (any dog mixed with a wolf)</li>
                  <li>Savannah cats and Bengal cats (unless 5th generation removed from pedigree)</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-[20px] shadow-sm p-6 border-l-4 border-[#4F5BD5] hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
              <h3 className="font-bold text-[#4F5BD5] mb-4 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5" />
                Restricted Breeds (Dubai-Specific Rules)
              </h3>
              <p className="text-sm text-[#5A5A5A] mb-4">
                These breeds are permitted in the UAE but have <strong>additional restrictions in Dubai</strong>:
              </p>
              <ul className="text-sm text-[#5A5A5A] space-y-1 mb-4">
                <li>Cannot live in apartments</li>
                <li>Must be leashed and muzzled in public</li>
                <li>Must be registered with the Veterinary Services Division</li>
              </ul>
              <h4 className="font-semibold text-[#2A2A2A] text-sm mb-2">Restricted breeds:</h4>
              <ul className="text-sm text-[#5A5A5A] space-y-1">
                <li>Bull Terrier (including Miniature)</li>
                <li>Husky</li>
                <li>English Bulldog / Old English Bulldog</li>
                <li>Perro de Presa Mallorquin</li>
                <li>Shar Pei</li>
              </ul>
              <div className="warning-box mt-4">
                <p className="text-sm text-[#2A2A2A]">
                  Federal Law 22/2016 Annex 2 treats Rottweiler, Doberman, Presa Canario and Boxer as banned types, not merely Dubai-restricted. Confirm the current annex on the official source before you book — do not rely on a blog reprint.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-[20px] shadow-sm p-6 mb-8 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
            <h3 className="font-bold text-[#2A2A2A] mb-4 flex items-center gap-2">
              <div className="w-11 h-11 rounded-[14px] bg-[#E9ECFB] flex items-center justify-center">
                <PawPrint className="w-5 h-5 text-[#4F5BD5]" />
              </div>
              Service and Emotional Support Animal Exceptions
            </h3>
            <p className="text-[#5A5A5A] mb-4">
              Banned breeds may receive an exception <strong>only</strong> if they are:
            </p>
            <ul className="text-[#5A5A5A] space-y-2 mb-4">
              <li>Certified <strong>service animals</strong> (trained by an ADI or IGDF accredited organization)</li>
              <li>Certified <strong>emotional support animals</strong> (for medical purposes)</li>
            </ul>
            <p className="text-[#5A5A5A] mb-4">Required documentation:</p>
            <ul className="text-[#5A5A5A] space-y-1 mb-4">
              <li>Training record from an accredited training centre</li>
              <li>Medical records justifying the need for the animal</li>
            </ul>
            <div className="warning-box">
              <p className="text-sm text-[#2A2A2A]">
                <strong>Penalty warning:</strong> {NONCOMPLIANCE_FINE} Possession rules for Annex-2 dogs are a separate federal matter — see the banned-breeds guide rather than an invented fine ladder here.
              </p>
            </div>
          </div>

          <WhatsAppLink
            text="Hi, I want to check if my pet's breed is eligible for import to Dubai."
            label="Check my pet's eligibility — WhatsApp us your breed and we'll confirm the rules"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] text-white rounded-2xl font-semibold hover:bg-[#1ebe57] transition-colors"
          />
        </div>
      </section>

      {/* ═══════════ VACCINATION REQUIREMENTS ═══════════ */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mb-8">Vaccination Requirements</h2>
          <ContentImage
            src="/assets/w5/vet-scanning-cat-microchip-uae-import-check.jpg"
            alt="Vet scanning a cat's microchip during UAE pet import preparation"
            caption="Microchip first, then rabies. A scan on the table is cheaper than a refused landing."
          />

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-[#F5F6FD] rounded-[20px] p-6 border border-[#4F5BD5]/10 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
              <h3 className="font-bold text-[#2A2A2A] mb-4 flex items-center gap-2">
                <div className="w-11 h-11 rounded-[14px] bg-[#E9ECFB] flex items-center justify-center">
                  <Syringe className="w-5 h-5 text-[#4F5BD5]" />
                </div>
                Rabies Vaccination (Mandatory for All)
              </h3>
              <ul className="text-sm text-[#5A5A5A] space-y-2">
                <li><strong>Minimum age:</strong> 12 weeks at first vaccination</li>
                <li><strong>Pre-travel window:</strong> Administered between 21 days and 12 months prior to entering the UAE</li>
                <li><strong>Accepted types:</strong> Inactivated or recombinant vaccines only</li>
                <li><strong>Not accepted:</strong> Attenuated live virus vaccines</li>
                <li><strong>Boosters:</strong> Annual booster required, or follow manufacturer&apos;s guidance for 2-3 year vaccines</li>
              </ul>
            </div>

            <div className="bg-[#F5F6FD] rounded-[20px] p-6 border border-[#4F5BD5]/10 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
              <h3 className="font-bold text-[#2A2A2A] mb-4 flex items-center gap-2">
                <div className="w-11 h-11 rounded-[14px] bg-[#E9ECFB] flex items-center justify-center">
                  <Shield className="w-5 h-5 text-[#4F5BD5]" />
                </div>
                Core Vaccinations — Dogs
              </h3>
              <ul className="text-sm text-[#5A5A5A] space-y-1">
                <li>Canine Distemper Virus (CDV)</li>
                <li>Canine Parvovirus (CPV)</li>
                <li>Infectious Canine Hepatitis (Adenovirus)</li>
                <li>Leptospirosis (Canicola and Icterohaemorrhagiae)</li>
              </ul>
            </div>

            <div className="bg-[#F5F6FD] rounded-[20px] p-6 border border-[#4F5BD5]/10 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
              <h3 className="font-bold text-[#2A2A2A] mb-4 flex items-center gap-2">
                <div className="w-11 h-11 rounded-[14px] bg-[#E9ECFB] flex items-center justify-center">
                  <Shield className="w-5 h-5 text-[#4F5BD5]" />
                </div>
                Core Vaccinations — Cats
              </h3>
              <ul className="text-sm text-[#5A5A5A] space-y-1">
                <li>Feline Panleukopenia (FPV / Feline Distemper)</li>
                <li>Feline Rhinotracheitis (FHV-1 / Herpes Virus)</li>
                <li>Feline Calicivirus (FCV)</li>
                <li>Feline Leukemia (FeLV) — recommended by some authorities</li>
              </ul>
            </div>

            <div className="bg-[#F5F6FD] rounded-[20px] p-6 border border-[#4F5BD5]/10 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
              <h3 className="font-bold text-[#2A2A2A] mb-4">Vaccination Timing — Why Order Matters</h3>
              <ol className="text-sm text-[#5A5A5A] space-y-2 list-decimal list-inside">
                <li><strong>Microchip first.</strong> Always. The microchip must precede the rabies vaccination.</li>
                <li><strong>Rabies vaccination second.</strong> Wait ≥21 days before travel.</li>
                <li><strong>Core vaccines third.</strong> Can be given alongside rabies or shortly after.</li>
                <li><strong>Titer test fourth (if required).</strong> Blood drawn ≥21 days after rabies vaccination.</li>
                <li><strong>Health certificate last.</strong> Within 10 days of arrival.</li>
              </ol>
            </div>
          </div>

          <div className="warning-box">
            <p className="text-sm text-[#2A2A2A]">
              <strong>Warning:</strong> If your vaccination records show the rabies vaccine was given before the microchip, MOCCAE will reject your import permit. You&apos;ll need to re-vaccinate after microchipping and restart the timeline.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════ RABIES TITER TEST ═══════════ */}
      <section className="py-20 lg:py-28">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mb-4">Rabies Titer Test Rules</h2>
          <p className="text-[#5A5A5A] mb-8">
            The rabies titer test (also called RNATT — Rabies Neutralising Antibody Titre Test) proves that your pet&apos;s rabies vaccine worked.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-[20px] shadow-sm p-6 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
              <h3 className="font-bold text-[#2A2A2A] mb-4">Do You Need a Titer Test?</h3>
              <p className="text-[#5A5A5A] mb-3">
                <strong>Yes, if MOCCAE does not treat your origin as exempt.</strong> The Ministry maintains a rabies-controlled / exempt-country list. We do not reprint an unofficial version of that list on this page.
              </p>
              <p className="text-[#5A5A5A] mb-4">
                Deep timing lives on the{' '}
                <Link to="/guides/rabies-titer-test-dubai/" className="font-semibold text-[#4F5BD5] hover:underline">
                  rabies titer test guide
                </Link>
                . Confirm the origin on the portal before you skip the test.
              </p>
              <div className="warning-box">
                <p className="text-sm text-[#2A2A2A]">
                  The high-risk/low-risk country list is maintained by MOCCAE and changes. Verify your country&apos;s current status in the MOCCAE portal before skipping the titer test.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-[20px] shadow-sm p-6 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
              <h3 className="font-bold text-[#2A2A2A] mb-4">Titer Test Requirements</h3>
              <ul className="text-[#5A5A5A] space-y-2">
                <li>Blood sample drawn <strong>≥21 days after</strong> primary rabies vaccination</li>
                <li>Minimum result: <strong>≥0.5 IU/ml</strong></li>
                <li>Must be processed at a <strong>WOAH/ISO 17025 accredited laboratory</strong></li>
                <li>Sample taken <strong>within 90 days before travel</strong> — not a 90-day wait after the result</li>
                <li>The test result must be included in your MOCCAE permit application</li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-[20px] shadow-sm p-6 mb-8 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
            <h3 className="font-bold text-[#2A2A2A] mb-4">Titer Test Timeline Example</h3>
            <div className="overflow-x-auto">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Day</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="font-semibold">Day 0</td><td>Microchip, then rabies vaccination</td></tr>
                  <tr><td className="font-semibold">Day 21+</td><td>Earliest useful blood sample for RNATT</td></tr>
                  <tr><td className="font-semibold">Lab window</td><td>Operational estimate — often 1–3 weeks</td></tr>
                  <tr><td className="font-semibold">Sample rule</td><td>Draw must fall within 90 days before arrival</td></tr>
                  <tr><td className="font-semibold">Permit</td><td>Apply so the 30-day validity still covers landing</td></tr>
                  <tr><td className="font-semibold">Last 10 days</td><td>Parasite treatments + origin health certificate</td></tr>
                  <tr><td className="font-semibold">Travel day</td><td>Manifest cargo; sample and permit both still in date</td></tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4 font-semibold text-[#2A2A2A]">
              When an RNATT is required, the floor is set by vaccine wait + lab time + keeping the sample inside 90 days of travel — not by a post-test sit.
            </p>
          </div>

          <div className="warning-box mb-8">
            <p className="text-sm text-[#2A2A2A]">
              <strong>Warning:</strong> The sample-within-90-days rule is <strong>not negotiable</strong>. A passing result whose draw date is older than 90 days on arrival is the wrong certificate. Do not invent a 90-day sit after the PDF arrives.
            </p>
          </div>

          <WhatsAppLink
            text="Hi, I have questions about the rabies titer test timeline for my pet coming to Dubai."
            label="Ask an expert about your titer test timeline"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] text-white rounded-2xl font-semibold hover:bg-[#1ebe57] transition-colors"
          />
        </div>
      </section>

      {/* ═══════════ IMPORT PERMIT APPLICATION ═══════════ */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mb-4">Import Permit Application</h2>
          <p className="text-[#5A5A5A] mb-8">
            The MOCCAE import permit is the single most important document for bringing your pet to Dubai. Without it, your pet cannot enter the country.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-[#F5F6FD] rounded-[20px] p-6 border border-[#4F5BD5]/10 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
              <h3 className="font-bold text-[#2A2A2A] mb-4">How to Apply</h3>
              <ol className="text-[#5A5A5A] space-y-2 list-decimal list-inside">
                <li><strong>Online:</strong> Visit <a href="https://www.moccae.gov.ae/en/services/export-import-services/import-permit-pets.aspx" target="_blank" rel="noopener noreferrer" className="text-[#4F5BD5] underline">moccae.gov.ae</a> and navigate to the pet import permit section</li>
                <li><strong>Mobile app:</strong> Download the MOCCAE app (available on iOS and Android)</li>
                <li><strong>With a coordinator:</strong> <Link to="/service/moccae-pet-permit/" className="font-semibold text-[#4F5BD5] hover:underline">MOCCAE permit assistance</Link> reviews the file — we still do not issue the permit</li>
              </ol>
            </div>

            <div className="bg-[#F5F6FD] rounded-[20px] p-6 border border-[#4F5BD5]/10 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
              <h3 className="font-bold text-[#2A2A2A] mb-4">What You&apos;ll Need</h3>
              <ul className="text-[#5A5A5A] space-y-1">
                <li>Copy of your passport</li>
                <li>UAE visa or proof of residency</li>
                <li>Pet&apos;s ISO microchip number</li>
                <li>Rabies vaccination certificate (with microchip number, batch number, manufacturer, date, vet stamp)</li>
                <li>Core vaccination records</li>
                <li>Titer test result (if applicable)</li>
                <li>Recent photo of your pet</li>
              </ul>
            </div>

            <div className="bg-[#F5F6FD] rounded-[20px] p-6 border border-[#4F5BD5]/10 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
              <h3 className="font-bold text-[#2A2A2A] mb-4">Fees and Timeline</h3>
              <ul className="text-[#5A5A5A] space-y-1">
                <li><strong>Fee:</strong> confirm the current permit and arrival-release amounts on the official MOCCAE portal</li>
                <li><strong>Processing:</strong> typically estimated at 2–5 working days (not a first-party SLA)</li>
                <li><strong>Validity:</strong> 30 days from issuance</li>
              </ul>
            </div>

            <div className="bg-[#F5F6FD] rounded-[20px] p-6 border border-[#4F5BD5]/10 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
              <h3 className="font-bold text-[#2A2A2A] mb-4">Common Application Mistakes</h3>
              <ul className="text-[#5A5A5A] space-y-1">
                <li><strong>Microchip mismatch:</strong> The microchip number on the permit application doesn&apos;t match the vaccination certificate</li>
                <li><strong>Expired vaccine:</strong> Rabies vaccine is older than 12 months or less than 21 days old</li>
                <li><strong>Missing titer test:</strong> Applying for a permit from a high-risk country without the titer test result</li>
                <li><strong>Wrong validity window:</strong> Applying too early and having the permit expire before travel</li>
              </ul>
            </div>
          </div>

          <div className="warning-box mb-8">
            <p className="text-sm text-[#2A2A2A]">
              <strong>Warning:</strong> If your permit application is rejected, you must correct the issue and reapply. This can add 1–2 weeks to your timeline. We check every application three times before submission.
            </p>
          </div>

          <WhatsAppLink
            text="Hi, I need help with my MOCCAE import permit application for my pet."
            label="Get help with your permit application"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] text-white rounded-2xl font-semibold hover:bg-[#1ebe57] transition-colors"
          />
        </div>
      </section>

      {/* ═══════════ AIRLINE-SPECIFIC REQUIREMENTS ═══════════ */}
      <section className="py-20 lg:py-28">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mb-4">Airline-Specific Requirements</h2>
          <p className="text-[#5A5A5A] mb-8">
            All pets entering Dubai <strong>must travel as manifest cargo</strong>. They cannot fly in the cabin or as checked baggage on flights to Dubai — with one exception.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-[20px] shadow-sm p-6 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
              <h3 className="font-bold text-[#2A2A2A] mb-3 flex items-center gap-2">
                <div className="w-11 h-11 rounded-[14px] bg-[#E9ECFB] flex items-center justify-center">
                  <Plane className="w-5 h-5 text-[#4F5BD5]" />
                </div>
                Emirates SkyCargo
              </h3>
              <p className="text-sm text-[#5A5A5A] mb-3">
                Emirates is the most common airline for pet transport to Dubai.
              </p>
              <ul className="text-sm text-[#5A5A5A] space-y-1">
                <li><strong>In-cabin:</strong> No regular pets allowed. Only trained service dogs and falcons on specific routes.</li>
                <li><strong>Checked baggage:</strong> Not accepted for flights to Dubai.</li>
                <li><strong>Cargo (SkyCargo):</strong> Mandatory for itineraries ending in Dubai. First-party Emirates checked-baggage animal charges (USD 500 / 650 / 800 by weight and size) apply to eligible departures <em>from</em> Dubai under 17 hours — they are not a cabin fare and they are not a published DXB-arrival cargo tariff. Confirm current SkyCargo pricing with the airline.</li>
                <li><strong>Advance notice:</strong> Minimum 72 hours</li>
                <li><strong>Crate:</strong> IATA-approved, rigid, leak-proof. For restricted breeds, crate must be at least 10% larger than standard.</li>
                <li><strong>Banned breeds:</strong> Even stricter than UAE law. Includes snub-nosed breeds with seasonal restrictions (November–April only).</li>
              </ul>
            </div>

            <div className="bg-white rounded-[20px] shadow-sm p-6 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
              <h3 className="font-bold text-[#2A2A2A] mb-3 flex items-center gap-2">
                <div className="w-11 h-11 rounded-[14px] bg-[#E9ECFB] flex items-center justify-center">
                  <Plane className="w-5 h-5 text-[#4F5BD5]" />
                </div>
                Etihad Airways
              </h3>
              <p className="text-sm text-[#5A5A5A] mb-3">
                Etihad is the most pet-friendly UAE airline — but only for Abu Dhabi.
              </p>
              <ul className="text-sm text-[#5A5A5A] space-y-1">
                <li><strong>In-cabin (to Abu Dhabi only):</strong> Small dogs and cats allowed. Pet + carrier must weigh ≤8 kg. Carrier max: 40 x 40 x 22 cm. Etihad publishes cabin pet fees that change; confirm at booking. A 2026 promo from USD 399 is expired; USD 1,500 is Estimated only.</li>
                <li><strong>Checked baggage:</strong> Accepted on some routes.</li>
                <li><strong>Cargo:</strong> Available for larger pets.</li>
                <li><strong>Advance notice:</strong> Book via Contact Centre; submit form 7 days before, documents 72 hours before.</li>
                <li><strong>Banned breeds:</strong> Same as UAE federal list, plus Boxer.</li>
                <li><strong>Abu Dhabi entry:</strong> Etihad publishes a pet release permit, a completed UAE health certificate and an Abu Dhabi Customs Bill of Entry. Confirm current handling charges with the airline / customs broker — we do not invent an AED figure here.</li>
                <li><strong>Pet age:</strong> Must be ≥16 weeks old for in-cabin.</li>
              </ul>
            </div>

            <div className="bg-white rounded-[20px] shadow-sm p-6 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
              <h3 className="font-bold text-[#2A2A2A] mb-3 flex items-center gap-2">
                <div className="w-11 h-11 rounded-[14px] bg-[#E9ECFB] flex items-center justify-center">
                  <Plane className="w-5 h-5 text-[#4F5BD5]" />
                </div>
                flydubai
              </h3>
              <p className="text-sm text-[#5A5A5A] mb-3">
                flydubai does not have a published pet-in-cabin policy.
              </p>
              <ul className="text-sm text-[#5A5A5A] space-y-1">
                <li>Pets are generally handled as cargo via flydubai&apos;s cargo services or partners.</li>
                <li><strong>Recommendation:</strong> Contact flydubai Cargo directly for arrangements.</li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-[20px] shadow-sm p-6 mb-8 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
            <h3 className="font-bold text-[#2A2A2A] mb-4">Airline Comparison Summary</h3>
            <div className="overflow-x-auto">
              <table className="data-table min-w-[680px]">
                <thead>
                  <tr>
                    <th>Airline</th>
                    <th>Cabin to UAE?</th>
                    <th>Checked Baggage to UAE?</th>
                    <th>Cargo to UAE?</th>
                    <th>Best For</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="font-semibold">Emirates</td>
                    <td>❌ No (except service dogs)</td>
                    <td>❌ No</td>
                    <td>✅ Yes (SkyCargo)</td>
                    <td>Most DXB arrivals; direct routes</td>
                  </tr>
                  <tr>
                    <td className="font-semibold">Etihad</td>
                    <td>✅ Yes (to Abu Dhabi, ≤8kg)</td>
                    <td>✅ Some routes</td>
                    <td>✅ Yes</td>
                    <td>Small pets to Abu Dhabi; pet-friendly policies</td>
                  </tr>
                  <tr>
                    <td className="font-semibold">flydubai</td>
                    <td>❌ No</td>
                    <td>❌ No</td>
                    <td>✅ Yes (Cargo)</td>
                    <td>Budget cargo options; regional routes</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="warning-box mb-8">
            <p className="text-sm text-[#2A2A2A]">
              <strong>Important:</strong> The choice of airline affects your total cost by AED 3,000–12,000. We work with the cargo departments directly — not the passenger reservation desks — to confirm pet-specific rules in writing before booking.
            </p>
          </div>

          <WhatsAppLink
            text="Hi, I'm not sure which airline fits my route for pet relocation to Dubai. Can you help?"
            label="Not sure which airline fits your route? Ask an expert"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] text-white rounded-2xl font-semibold hover:bg-[#1ebe57] transition-colors"
          />
        </div>
      </section>

      {/* ═══════════ HEALTH CERTIFICATE TIMING ═══════════ */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mb-4">Health Certificate Timing</h2>
          <p className="text-[#5A5A5A] mb-8">
            The International Health Certificate is the last document you obtain before travel. Get the timing wrong, and it expires before your pet arrives.
          </p>

          <div className="bg-[#F5F6FD] rounded-[20px] p-6 mb-8 border border-[#4F5BD5]/10">
            <ul className="text-[#5A5A5A] space-y-2">
              <li><strong>Valid for 10 days</strong> from the date of issuance to the date of arrival in the UAE</li>
              <li>Must be issued by a <strong>government-accredited or official veterinarian</strong></li>
              <li>Must include antiparasitic treatment records</li>
              <li>Must show the same microchip number as all other documents</li>
            </ul>
          </div>

          <div className="bg-white rounded-[20px] shadow-sm p-6 mb-8 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
            <h3 className="font-bold text-[#2A2A2A] mb-4">When to Schedule the Health Certificate</h3>
            <ul className="text-[#5A5A5A] space-y-2">
              <li><strong>Book the vet appointment 2–3 days before your pet&apos;s flight</strong></li>
              <li>The certificate must be issued within 10 days of arrival, so work backwards from your arrival date</li>
              <li>If your flight is delayed and the certificate expires, you must obtain a new one</li>
            </ul>
            <div className="warning-box mt-4">
              <p className="text-sm text-[#2A2A2A]">
                Some countries require additional government endorsement (e.g., DEFRA in the UK, USDA in the USA, CFIA in Canada). This can add 2–5 days. Confirm your origin country&apos;s endorsement requirements with your vet.
              </p>
            </div>
          </div>

          <WhatsAppLink
            text="Hi, I need help scheduling my vet appointments for my pet's relocation to Dubai."
            label="Need help scheduling your vet appointments? We coordinate with our partner clinics"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] text-white rounded-2xl font-semibold hover:bg-[#1ebe57] transition-colors"
          />
        </div>
      </section>

      {/* ═══════════ WHAT HAPPENS IF DOCUMENTS ARE WRONG ═══════════ */}
      <section className="py-20 lg:py-28">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mb-4">
            What Happens If Your Documents Are Wrong
          </h2>
          <p className="text-[#5A5A5A] mb-8">
            This is the section most pet owners skip — and the one that causes the most pain.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-[20px] shadow-sm p-6 border-t-4 border-[#4F5BD5] hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
              <h3 className="font-bold text-[#4F5BD5] mb-3 flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                No Quarantine (If Documents Are Correct)
              </h3>
              <p className="text-[#5A5A5A]">
                If all your paperwork is complete, correct, and consistent, your pet <strong>does not need to enter quarantine</strong>. This is one of the UAE&apos;s biggest advantages as a pet relocation destination.
              </p>
            </div>

            <div className="bg-white rounded-[20px] shadow-sm p-6 border-t-4 border-[#4F5BD5] hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
              <h3 className="font-bold text-[#4F5BD5] mb-3 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5" />
                Conditional Quarantine (If Documents Are Wrong)
              </h3>
              <p className="text-[#5A5A5A] mb-3">
                Quarantine is imposed if your pet arrives from a high-risk country without a titer test, documentation is incomplete, or the pet shows clinical signs of illness.
              </p>
              <ul className="text-sm text-[#5A5A5A] space-y-1">
                <li><strong>Location:</strong> Dubai Cargo Village or Abu Dhabi Cargo Terminal</li>
                <li><strong>Cost:</strong> Entirely borne by the owner</li>
                <li><strong>Duration:</strong> Until the issue is resolved (typically 30 days)</li>
                <li>Missing one document can mean your pet is refused entry, confiscated, or re-exported — at your expense (boarding/re-flight costs can run into the thousands)</li>
              </ul>
            </div>

            <div className="bg-white rounded-[20px] shadow-sm p-6 border-t-4 border-red-500 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
              <h3 className="font-bold text-red-700 mb-3 flex items-center gap-2">
                <Ban className="w-5 h-5" />
                Return or Euthanasia (Worst Cases)
              </h3>
              <p className="text-[#5A5A5A] mb-3">
                {NONCOMPLIANCE_FINE} In serious cases the animal may be refused entry or returned to origin at the owner&apos;s expense. We do not dramatise outcomes that are not in the first-party import rule.
              </p>
              <div className="warning-box">
                <p className="text-sm text-[#2A2A2A]">
                  Outdated blogs still describe a 90-day permit or a 90-day wait after the titer. This page uses the locked rules: 30-day permit validity and a sample taken within 90 days before travel.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-[20px] shadow-sm p-6 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
            <h3 className="font-bold text-[#2A2A2A] mb-4">The Most Common Document Errors</h3>
            <ol className="text-[#5A5A5A] space-y-2 list-decimal list-inside">
              <li><strong>Microchip before vaccination</strong> — Vaccination given before microchip = invalid</li>
              <li><strong>Titer test timing</strong> — Blood drawn before 21 days post-vaccination = invalid</li>
              <li><strong>Permit validity</strong> — Permit expired before travel = entry denied</li>
              <li><strong>Health certificate expiry</strong> — Certificate older than 10 days on arrival = quarantine risk</li>
              <li><strong>Mismatched microchip numbers</strong> — Different numbers on different documents = automatic rejection</li>
            </ol>
          </div>

          <div className="mt-8">
            <WhatsAppLink
              text="Hi, I want to make sure my pet's documents are correct before traveling to Dubai. Can you help?"
              label="Get help with your documents — Send us what you have. We'll catch the errors before they catch you."
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] text-white rounded-2xl font-semibold hover:bg-[#1ebe57] transition-colors"
            />
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#F5F6FD]">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <h2 className="text-[24px] sm:text-[30px] font-bold text-[#2A2A2A] mb-8 text-center">Related services and guides</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link to="/service/pet-import-dubai/" className="bg-white rounded-[20px] p-6 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-bold text-[#2A2A2A] mb-2">Pet import service</h3>
              <p className="text-sm text-[#5A5A5A]">Commercial twin — cargo, clearance and a Dubai door. This page stays the rules list.</p>
            </Link>
            <Link to="/guides/moccae-import-permit/" className="bg-white rounded-[20px] p-6 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-bold text-[#2A2A2A] mb-2">MOCCAE import permit guide</h3>
              <p className="text-sm text-[#5A5A5A]">UAE Pass walkthrough and rejection reasons for the 30-day permit.</p>
            </Link>
            <Link to="/guides/rabies-titer-test-dubai/" className="bg-white rounded-[20px] p-6 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-bold text-[#2A2A2A] mb-2">Rabies titer test (RNATT)</h3>
              <p className="text-sm text-[#5A5A5A]">Sample within 90 days before travel. Threshold ≥0.5 IU/ml.</p>
            </Link>
            <Link to="/service/moccae-pet-permit/" className="bg-white rounded-[20px] p-6 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-bold text-[#2A2A2A] mb-2">MOCCAE permit assistance</h3>
              <p className="text-sm text-[#5A5A5A]">Document review and portal tracking. The Ministry still issues the PDF.</p>
            </Link>
            <Link to="/guides/banned-dog-breeds-dubai/" className="bg-white rounded-[20px] p-6 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-bold text-[#2A2A2A] mb-2">Banned dog breeds</h3>
              <p className="text-sm text-[#5A5A5A]">Federal Law 22/2016 Annex 2 list and mixed-breed notes.</p>
            </Link>
            <Link to="/service/pet-relocation-to-dubai/" className="bg-white rounded-[20px] p-6 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-bold text-[#2A2A2A] mb-2">Relocation to Dubai</h3>
              <p className="text-sm text-[#5A5A5A]">Arrival-side settling after the statutory pack is complete.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════ FAQ ═══════════ */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mb-8">Frequently Asked Questions</h2>
          <div className="bg-white rounded-[20px] shadow-sm p-6 sm:p-8">
            {IMPORT_PAA_FAQS.map((f) => (
              <FAQItem
                key={f.q}
                question={f.q}
                answer={
                  <>
                    <p>{f.a}</p>
                    {f.link ? (
                      <p className="mt-3">
                        <Link to={f.link.to} className="text-[#4F5BD5] font-medium hover:underline">
                          {f.link.label}
                        </Link>
                      </p>
                    ) : null}
                  </>
                }
              />
            ))}
            <FAQItem
              question="Do dogs need to be quarantined in Dubai?"
              answer="No. If all documentation is complete and correct — including the MOCCAE import permit, ISO microchip, rabies vaccination, and health certificate — pets do not require mandatory quarantine in Dubai. However, incomplete documentation can result in conditional quarantine at the owner's expense."
            />
            <FAQItem
              question="What is the MOCCAE import permit for pets?"
              answer="The MOCCAE import permit is a mandatory approval from the UAE Ministry of Climate Change and Environment required for all pets entering the UAE. It is valid for 30 days from issuance. Confirm the current permit and arrival-release fees on the official portal before you apply. You must apply online via the MOCCAE portal or app before your pet travels."
            />
            <FAQItem
              question="Is a rabies titer test required for Dubai?"
              answer="A rabies titer test (RNATT) is required when your origin is not on MOCCAE's rabies-controlled / exempt list. When it is required, the blood sample must be taken within 90 days before travel and the result must be at least 0.5 IU/ml. We do not publish an unverified country list — confirm your origin on the official portal."
            />
            <FAQItem
              question="What documents are needed to bring a cat to the UAE?"
              answer="A cat needs the same federal pack as a dog, with feline core vaccines (panleukopenia, rhinotracheitis, calicivirus) instead of the canine set: MOCCAE import permit (30-day validity), ISO microchip implanted before rabies, rabies certificate (12 weeks + 21 days), health certificate, parasite treatments within 10 days before shipping, and the owner's passport / UAE visa details."
            />
            <FAQItem
              question="How long does preparing a UAE import file take?"
              answer="When an RNATT is not required and vaccinations are already done, owners often finish in a matter of weeks. When an RNATT is required, the floor is the 21-day post-vaccine wait, lab turnaround, and keeping the sample inside 90 days of travel — not a 90-day sit after the result. Start as soon as the move is real."
            />
            <FAQItem
              question="How is this guide different from the pet-import service page?"
              answer="This URL owns the statutory checklist. The commercial import job — crate, cargo, clearance, door delivery — lives on /service/pet-import-dubai/. The permit walkthrough lives on /guides/moccae-import-permit/. We cross-link; we do not clone the tables."
            />
            <FAQItem
              question="What is the non-compliance fine for a wrong import file?"
              answer="MOCCAE states a fine of AED 5,000 per animal, and the animal may be rejected or confiscated. Compliant pets are examined at the entry port and released — there is no routine quarantine."
            />
            <FAQItem
              question="Can a pet fly in the cabin into Dubai on Emirates?"
              answer="No. Emirates does not carry ordinary dogs or cats in the cabin. Itineraries ending in Dubai must travel as SkyCargo. Do not read the USD 500 / 650 / 800 checked-baggage animal charges (or older cargo range figures) as a cabin fare into DXB. Etihad publishes an in-cabin option for eligible small pets into Abu Dhabi only."
            />
            <FAQItem
              question="When must parasite treatment be given?"
              answer="External parasite treatment and internal deworming are required within 10 days before shipping to the UAE. Time them to the cargo date, not to the week you first filled a form."
            />
          </div>
        </div>
      </section>

      {/* ═══════════ FINAL CTA ═══════════ */}
      <section className="py-20 lg:py-28 bg-[#4F5BD5]">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8 text-center">
          <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-white mb-4">
            Ready to bring your pet home to Dubai?
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            Send origin, breed and what you already have. We will tell you which items on this checklist are still open — or point you to the{' '}
            <Link to="/service/pet-import-dubai/" className="underline font-semibold">
              commercial import service
            </Link>
            . Email {siteConfig.email} if WhatsApp is not convenient.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={getWhatsAppUrl('Hi, I need help understanding the import requirements for my [dog/cat] from [country] to Dubai.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#25D366] text-white rounded-2xl font-semibold hover:bg-[#1ebe57] transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              📱 Get help with your documents
            </a>
            <a
              href={getWhatsAppUrl('Hi, I want to check if my pet is eligible for import to Dubai.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 border-2 border-white/20 text-white rounded-2xl font-semibold hover:bg-white/10 transition-colors"
            >
              ✅ Check my pet&apos;s eligibility
            </a>
          </div>
          <p className="text-white/60 text-sm mt-6">
            Pre-filled WhatsApp message: &quot;Hi, I need help understanding the import requirements for my [dog/cat] from [country] to Dubai.&quot;
          </p>
        </div>
      </section>

      <OfficialSources />
    </div>
  )
}
