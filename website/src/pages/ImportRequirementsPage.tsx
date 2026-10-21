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
  Ban,
  PawPrint,
  Syringe,
} from 'lucide-react'
import SEOHead from '../components/SEOHead.tsx'
import Hero from '../components/Hero.tsx'
import SnippetAnswer from '../components/SnippetAnswer.tsx'
import LinkedText from '../components/LinkedText.tsx'
import { stripInternalMarkdownLinks } from '../lib/linkedText.ts'
import { getWhatsAppUrl, BASE_URL, siteConfig } from '../lib/seo.ts'
import Breadcrumb from '../components/Breadcrumb.tsx'
import ContentImage from '../components/ContentImage.tsx'
import OfficialSources from '../components/OfficialSources.tsx'
import GuideFunnelCta from '../components/GuideFunnelCta.tsx'
import GuideDualPath from '../components/GuideDualPath.tsx'
import PaidIncludes from '../components/PaidIncludes.tsx'
import { CTA_ELIGIBILITY_MOVE, CTA_MANAGED_QUOTE, GUIDE_SOFT_GATE, waEligibility } from '../lib/conversionCopy.ts'
import GuideToc from '../components/GuideToc.tsx'

const CHECKED = '22 September 2026'
const MOCCAE_IMPORT = 'https://moccae.gov.ae/en/services/import-permit-pets'
const waImport = waEligibility({ destination: 'Dubai', need: 'managed move' })

const STRONG_WA =
  'inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#0B6B3A] px-6 py-3.5 text-sm font-semibold text-white shadow-lg ring-1 ring-black/10 transition hover:bg-[#085530] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:w-auto'

const FUNNEL_WA =
  'inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-2xl bg-[#0B6B3A] px-5 py-3.5 text-sm font-semibold text-white shadow-lg ring-1 ring-black/10 transition hover:bg-[#085530] sm:w-auto'

const IMPORT_PAID = [
  'Eligibility check for origin, breed and age',
  'MOCCAE import permit timing (valid 90 days from issuance)',
  'Airline booking for the accepted product',
  'IATA crate check before the booking is held',
  'DXB or DWC handoff',
] as const

const BANNED_DOGS = [
  'Staffordshire Bull Terrier',
  'American Pit Bull Terrier',
  'American Staffordshire Terrier',
  'American Bully',
  'Brazilian Mastiff (Fila Brasileiro)',
  'Argentinian Mastiff (Dogo Argentino)',
  'Tibetan Mastiff',
  'Neapolitan Mastiff',
  'French Mastiff (Dogue de Bordeaux)',
  'Boerboel',
  'Bullmastiff',
  'Cane Corso (Italian Mastiff)',
  'Bully Kutta (Alangu Mastiff, Indian Mastiff)',
  'Perro de Presa Canario (Canary Mastiff)',
  'Japanese Tosa',
  'Presa Canario',
]

function FAQItem({ question, answer }: { question: string; answer: React.ReactNode }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="faq-item">
      <button onClick={() => setOpen(!open)} className="faq-question w-full text-left" aria-expanded={open}>
        <span>{question}</span>
        {open ? <ChevronUp className="w-5 h-5 shrink-0 ml-3" /> : <ChevronDown className="w-5 h-5 shrink-0 ml-3" />}
      </button>
      {open && <div className="faq-answer">{answer}</div>}
    </div>
  )
}

const FAQS: { q: string; a: string }[] = [
  {
    q: 'What do I need to bring a dog or cat into the UAE?',
    a: 'A [MOCCAE import permit](/guides/moccae-import-permit/) valid for 90 days from issuance, a permanent microchip whose number matches the health certificate, the vaccines named for that species, parasite treatment in the 14 days before shipment, and an authorised health certificate. High-risk origins also need a rabies antibody test of at least 0.5 IU/ml. Pets are shipped under IATA conditions. Confirm your origin on the live MOCCAE page: the United Kingdom was on the low-risk list on 22 September 2026. Managed import: [pet import Dubai](/service/pet-import-dubai/).',
  },
  {
    q: 'How long is the MOCCAE import permit valid?',
    a: 'The [MOCCAE import permit](/guides/moccae-import-permit/) is valid for 90 days from the date of issuance. The same approval is the [MOCCAE pet import permit](/guides/moccae-import-permit/). The pet must enter inside that window. An expired permit cannot be used. That clock is not the rabies-test certificate and it is not a municipal registration deadline. Government fees are confirmed on the MOCCAE portal. A managed file is [pet import Dubai](/service/pet-import-dubai/).',
  },
  {
    q: 'Do pets go into quarantine in the UAE?',
    a: 'The MOCCAE service is an inspection at the entry port and release when the animal matches the permit. The page does not describe a routine quarantine stay, and it does not give a number of days for a hold. If the import does not comply, the pet may be rejected at the owner\'s expense or confiscated.',
  },
  {
    q: 'Which origins need a rabies antibody test?',
    a: 'High-risk origins. The live page keeps a low-risk country list and it can change, so this guide does not reprint the full list. On 22 September 2026 the United Kingdom was on that list. When a test is required, the result must be at least 0.5 IU/ml. The same page says the test certificate is valid for 365 days if the rabies vaccine stays valid and continuous and no booster is given. Otherwise the test is repeated. A first vaccine, or a gap in vaccination, needs at least 21 days before the test. A valid booster does not need that 21-day wait before the test.',
  },
  {
    q: 'What vaccines do dogs need, and what do cats need?',
    a: 'Dogs: rabies, distemper, parvovirus, infectious canine hepatitis, and leptospirosis. Leptospirosis can be replaced by a lab test if the exporting country does not vaccinate against it. Cats: rabies, panleukopenia, rhinotracheitis and calicivirus. Do not copy the dog list onto a cat. Bengal and Serval cats also need a fifth-generation pedigree certificate.',
  },
  {
    q: 'Can my pet fly in the cabin to Dubai?',
    a: 'Emirates says ordinary animals are not allowed in the cabin, and every itinerary ending in Dubai must travel as cargo. British Airways says pets travel in the hold, not the cabin. Other airlines are separate products. Confirm the booking. Cabin weights and fares are not copied here. See [/guides/pet-flight-options-dubai/](/guides/pet-flight-options-dubai/) and [/guides/etihad-pet-policy/](/guides/etihad-pet-policy/).',
  },
  {
    q: 'What are the government fees?',
    a: 'On 22 September 2026 the MOCCAE service page listed AED 200 to issue an import permit for one animal, AED 500 to request release of one dog, and AED 250 to request release of one cat. These are government charges, not a relocation package. Confirm on the MOCCAE portal.',
  },
  {
    q: 'How do I register my pet after arrival?',
    a: 'Local municipality registration is a separate step after entry. No municipal deadline or fee was re-checked on an official municipality page on 22 September 2026, so this guide does not state one. The only 90-day figure on this page is the MOCCAE import permit, counted from issuance.',
  },
]

export default function ImportRequirementsPage() {
  const checklist = [
    'Check the dog against the ban list below. Bengal and Serval cats need a fifth-generation pedigree.',
    'Check whether the origin is high-risk on the live MOCCAE page before you skip a rabies antibody test.',
    'Fit a permanent microchip. The number on the health certificate must match the chip in the animal.',
    'Give the vaccines named for that species. First rabies vaccine not before 12 weeks of age. Validity follows the manufacturer.',
    'For a high-risk origin, obtain a rabies antibody result of at least 0.5 IU/ml under the 365-day conditions on the live page.',
    'Apply for the MOCCAE import permit before travel. It is valid for 90 days from issuance.',
    'Book an airline product that accepts the animal. Emirates itineraries ending in Dubai are cargo.',
    'Record internal and external parasite treatment in the 14 days before shipment. Your vet chooses a product safe for that species.',
    'Carry an authorised health certificate from the competent veterinary authority. Day counts depend on the origin certificate, not a single UAE number.',
  ]

  return (
    <div className="bg-[#F5F6FD]">
      <SEOHead
        title="UAE Pet Import Requirements | Dogs & Cats"
        description="Check the documents and eligibility requirements for bringing a dog or cat into the UAE. Use official sources and a clear checklist before booking travel."
        canonical={`${BASE_URL}/guides/uae-pet-import-requirements/`}
        ogType="article"
        schemas={[
          {
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: FAQS.map((f) => ({
              '@type': 'Question',
              name: f.q,
              acceptedAnswer: { '@type': 'Answer', text: stripInternalMarkdownLinks(f.a) },
            })),
          },
          {
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'UAE Pet Import Requirements',
            description: 'Permit, vaccines, microchip and cargo rules for dogs and cats entering the UAE.',
            dateModified: '2026-09-22',
            author: { '@type': 'Organization', name: 'Dubai Pet Relocation' },
            publisher: { '@type': 'Organization', name: 'Dubai Pet Relocation' },
          },
          {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: `${BASE_URL}/` },
              { '@type': 'ListItem', position: 2, name: 'Guides', item: `${BASE_URL}/guides/` },
              { '@type': 'ListItem', position: 3, name: 'UAE Pet Import Requirements', item: `${BASE_URL}/guides/uae-pet-import-requirements/` },
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
        ]}
      />
      <Breadcrumb items={[{ label: 'Guides', path: '/guides/' }, { label: 'UAE Pet Import Requirements' }]} />
<div className="mx-auto max-w-[900px] px-5 pt-8"><GuideToc items={[{ href: '#checklist', label: 'Checklist' }, { href: '#documents', label: 'Documents and who is responsible' }, { href: '#order-of-work', label: 'Order of work' }, { href: '#breed-rules', label: 'Breed rules' }]} /></div>

      <Hero
        image="/assets/w5/uae-pet-import-requirements-master-checklist-illustration.png"
        imageAlt="Checklist illustration for UAE pet import documents"
        eyebrow="Import rules"
        title="UAE pet import requirements for dogs and cats"
        subtitle="Permit valid 90 days from issuance, species-specific vaccines, and an airline product that will actually carry the animal. Fees below are the government amounts published on the MOCCAE page."
        updated={`Checked ${CHECKED}`}
        whatsappMessage={waImport}
        primaryLabel={CTA_ELIGIBILITY_MOVE}
        primaryClassName={STRONG_WA}
        showBuyerQualify
        paidIncludes={[...IMPORT_PAID]}
        gateLine={GUIDE_SOFT_GATE}
        waService="Import service"
        secondary={{ label: 'pet import Dubai', to: '/service/pet-import-dubai/' }}
      />

      <section className="pt-12 pb-4">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <SnippetAnswer
            question="What is required to import a dog or cat?"
            answer="A MOCCAE import permit valid for 90 days from issuance, a matching microchip, the vaccines for that species, parasite treatment in the 14 days before shipment, and an authorised health certificate. High-risk origins add a rabies antibody test of at least 0.5 IU/ml. Matching animals are inspected at the entry port and released. This is not a veterinary certificate."
          />
          <p className="text-[#5A5A5A] leading-relaxed max-w-3xl mt-4">
            This guide is the do-it-yourself checklist. It was read against the{' '}
            <a href={MOCCAE_IMPORT} className="font-semibold text-[#4F5BD5] hover:underline" target="_blank" rel="noopener noreferrer">
              MOCCAE import of pets page
            </a>{' '}
            on {CHECKED}. Where that page is silent or the English wording is unclear, the sentence below says so. The approval you apply for is the{' '}
            <Link to="/guides/moccae-import-permit/" className="font-semibold text-[#4F5BD5] hover:underline">
              MOCCAE import permit
            </Link>
            . Owners also look up the same document as the{' '}
            <Link to="/guides/moccae-import-permit/" className="font-semibold text-[#4F5BD5] hover:underline">
              MOCCAE pet import permit
            </Link>
            . It is valid for 90 days from issuance. Government fees are confirmed on the MOCCAE portal. {GUIDE_SOFT_GATE} The managed file is{' '}
            <Link to="/service/pet-import-dubai/" className="font-semibold text-[#4F5BD5] hover:underline">
              pet import Dubai
            </Link>
            . The wider overview is{' '}
            <Link to="/" className="font-semibold text-[#4F5BD5] hover:underline">
              pet relocation Dubai
            </Link>
            .
          </p>
          <div className="mt-6 max-w-3xl">
            <GuideDualPath
              diyNote="Stay on this page if you are assembling the papers yourself."
              moneyTo="/service/pet-import-dubai/"
              moneyLabel="pet import Dubai"
              waMessage={waImport}
              waLabel={CTA_ELIGIBILITY_MOVE}
              waClassName={FUNNEL_WA}
            />
          </div>
        </div>
      </section>

      <section id="checklist" className="scroll-mt-24 py-20 lg:py-28">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[20px] shadow-sm p-6 sm:p-10">
            <h2 className="text-[24px] sm:text-[30px] font-bold text-[#2A2A2A] mb-4">Checklist</h2>
            <p className="text-[#5A5A5A] mb-6">
              A missing item can mean the animal is rejected at your expense or confiscated. The live page does not publish a fine amount, so this guide does not invent one.
            </p>
            <ol className="space-y-3">
              {checklist.map((item, i) => (
                <li key={item} className="flex gap-3 text-sm text-[#2A2A2A]">
                  <span className="font-bold text-[#4F5BD5]">{i + 1}.</span>
                  <span>{item}</span>
                </li>
              ))}
            </ol>
            <div className="mt-8 grid sm:grid-cols-2 gap-4 text-sm text-[#5A5A5A]">
              <p><strong className="text-[#2A2A2A]">Permit:</strong> 90 days from issuance. Published service time: 1 working day, or 5 working days for a service, emotional support or medical dog. That is an estimate on the page, not a promise.</p>
              <p><strong className="text-[#2A2A2A]">How many:</strong> Individuals may import up to 2 companion animals per person in the year (2 cats, 2 dogs, or 1 of each), except resident animals returning.</p>
              <p><strong className="text-[#2A2A2A]">Government fees on {CHECKED}:</strong> AED 200 import permit per animal, AED 500 release per dog, AED 250 release per cat. Confirm on the MOCCAE portal.</p>
              <p><strong className="text-[#2A2A2A]">Age:</strong> Vaccination not before 12 weeks. High-risk imports not less than 15 weeks. The English page says the low-risk minimum age "will be 12" without a unit, so that figure is not treated as confirmed. UK exports use the 15-week rule on certificate 3926EHC.</p>
            </div>
            <p className="mt-6 text-sm text-[#5A5A5A]">
              Titre rules, when the origin is high-risk, are on the{' '}
              <Link to="/guides/rabies-titer-test-dubai/" className="font-semibold text-[#4F5BD5] hover:underline">
                rabies titre test
              </Link>{' '}
              guide. A shorter tick list is the{' '}
              <Link to="/guides/import-checklist/" className="font-semibold text-[#4F5BD5] hover:underline">
                import checklist
              </Link>
              .
            </p>
            <div className="mt-8 max-w-xl space-y-4">
              <PaidIncludes items={IMPORT_PAID} />
              <a
                href={getWhatsAppUrl(waImport)}
                target="_blank"
                rel="noopener noreferrer"
                data-wa-service="Import service"
                className={STRONG_WA}
              >
                {CTA_ELIGIBILITY_MOVE}
              </a>
              <p className="text-xs leading-relaxed text-[#5A5A5A]">{GUIDE_SOFT_GATE}</p>
            </div>
          </div>
        </div>
      </section>

      <section id="documents" className="scroll-mt-24 py-20 lg:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <h2 className="text-[24px] sm:text-[30px] font-bold text-[#2A2A2A] mb-4">Documents and who is responsible</h2>
          <p className="text-[#5A5A5A] mb-8 max-w-3xl">
            MOCCAE issues the import permit and the release. The origin government vet issues the health certificate. The airline accepts or refuses the animal. Your own vet gives vaccines and parasite treatment. Dubai Pet Relocation does not issue any of those documents.
          </p>
          <div className="overflow-x-auto rounded-[20px] border border-gray-100">
            <table className="data-table min-w-[640px]">
              <thead>
                <tr>
                  <th>Item</th>
                  <th>What the checked page says</th>
                  <th>Authority</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="font-semibold">
                    <Link to="/guides/moccae-import-permit/" className="text-[#4F5BD5] hover:underline">
                      MOCCAE import permit
                    </Link>
                  </td>
                  <td>
                    The{' '}
                    <Link to="/guides/moccae-import-permit/" className="font-semibold text-[#4F5BD5] hover:underline">
                      MOCCAE pet import permit
                    </Link>{' '}
                    is the same approval. Valid 90 days from issuance. Apply before travel. Government fees are confirmed on the MOCCAE portal.
                  </td>
                  <td>MOCCAE</td>
                </tr>
                <tr>
                  <td className="font-semibold">Microchip</td>
                  <td>Permanent chip. The number on the health certificate must match the animal. ISO 11784/11785 was not restated on the live service page, so it is not stated as a current rule here.</td>
                  <td>Your vet records it. MOCCAE checks the match.</td>
                </tr>
                <tr>
                  <td className="font-semibold">Rabies antibody test</td>
                  <td>High-risk origins only. At least 0.5 IU/ml. Certificate valid 365 days if the vaccine stays valid and continuous and no booster is given. An older PDF&apos;s 90-day sample window is not on the live page.</td>
                  <td>Lab approved by the export country&apos;s competent authority. Result can sit on the health certificate.</td>
                </tr>
                <tr>
                  <td className="font-semibold">Health certificate</td>
                  <td>Authorised certificate from the competent veterinary authority. The live MOCCAE page does not give a 5-day or 10-day validity. For a UK export, 3926EHC is valid for 10 days and the exam is within 24 hours of export.</td>
                  <td>Origin authority. UK: an Official Veterinarian under APHA or DAERA.</td>
                </tr>
                <tr>
                  <td className="font-semibold">Parasite treatment</td>
                  <td>Internal and external treatment in the 14 days before shipment, stated on the certificate or passport. No dose is given here. A dog product must not be used on a cat.</td>
                  <td>Your vet</td>
                </tr>
                <tr>
                  <td className="font-semibold">Release</td>
                  <td>Inspection at the entry port, then an electronic release if the animal matches. No routine quarantine is described.</td>
                  <td>MOCCAE at the listed quarantine centre, including Dubai Airport Cargo Village and Al Maktoum International Airport</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section id="order-of-work" className="scroll-mt-24 py-20 lg:py-28">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <h2 className="text-[24px] sm:text-[30px] font-bold text-[#2A2A2A] mb-4">Order of work</h2>
          <p className="text-[#5A5A5A] mb-6 max-w-3xl">
            Do the origin rules and the airline acceptance before you spend the permit&apos;s 90 days. The sequence below is the UAE inbound rule for dogs and cats. Source: the MOCCAE import-permit service, checked 6 September 2026. An older diagram that showed a 90-day sample window is not used.
          </p>
          <ol className="mt-8 space-y-4 max-w-3xl text-[#5A5A5A]">
            <li><strong className="text-[#2A2A2A]">Breed and origin.</strong> Dogs: the ban list below. Cats: Bengal and Serval pedigree. Origin: high-risk or low-risk on the live page.</li>
            <li><strong className="text-[#2A2A2A]">Microchip and vaccines.</strong> Chip number must match every certificate. Vaccinate at not less than 12 weeks. Dog and cat vaccine lists are different.</li>
            <li><strong className="text-[#2A2A2A]">Antibody test, only if the origin is high-risk.</strong> At least 0.5 IU/ml. Respect the 21-day wait after a first or lapsed rabies vaccine. Keep the 365-day conditions, or repeat the test. Timing is on the <Link to="/guides/rabies-titer-test-dubai/" className="font-semibold text-[#4F5BD5] hover:underline">rabies titre test</Link> guide.</li>
            <li><strong className="text-[#2A2A2A]">Import permit.</strong> Online through MOCCAE. Valid 90 days from issuance. The import application itself lists no documents for ordinary dogs and cats. Release later needs the customs paper or bill of lading, the vaccine record, the health certificate, and the antibody certificate if the origin is high-risk.</li>
            <li><strong className="text-[#2A2A2A]">Airline.</strong> IATA shipping conditions. Direct shipment is cleaner. If the animal transits, it must not mix with other pet animals. Emirates endings in Dubai are cargo.</li>
            <li><strong className="text-[#2A2A2A]">Last days.</strong> Parasite treatment inside the 14 days before shipment. Health certificate inside the validity of that origin form.</li>
            <li><strong className="text-[#2A2A2A]">Arrival.</strong> Inspection and release. Then, separately, whatever local registration your emirate asks for. This guide does not state a municipal deadline.</li>
          </ol>
          <p className="mt-6 text-sm text-[#5A5A5A]">
            Permit clicks: <Link to="/guides/moccae-import-permit/" className="font-semibold text-[#4F5BD5] hover:underline">MOCCAE import permit</Link>.
            {' '}A shorter tick list: <Link to="/guides/import-checklist/" className="font-semibold text-[#4F5BD5] hover:underline">import checklist</Link>.
            {' '}The titre guide now follows the same 365-day certificate condition. A 90-day sample window is not the live rule.
          </p>
        </div>
      </section>

      <section id="breed-rules" className="scroll-mt-24 py-20 lg:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <h2 className="text-[24px] sm:text-[30px] font-bold text-[#2A2A2A] mb-4">Banned dogs, and the cat exception</h2>
          <p className="text-[#5A5A5A] mb-6 max-w-3xl">
            Names below are the ban list on the MOCCAE pet import page on {CHECKED}. Crosses are explicit on the UK export certificate 3926EHC. They are not spelled out as "any cross" on the MOCCAE English page, so this guide does not add that phrase to the UAE list. Rottweiler, Doberman and Boxer were not on the service-page list we checked. The{' '}
            <Link to="/guides/banned-dog-breeds-dubai/" className="font-semibold text-[#4F5BD5] hover:underline">banned dog breeds</Link> guide uses this same list.
          </p>
          <ul className="grid sm:grid-cols-2 gap-2 text-sm text-[#5A5A5A] mb-8">
            {BANNED_DOGS.map((breed) => (
              <li key={breed} className="flex gap-2"><Ban className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" />{breed}</li>
            ))}
          </ul>
          <div className="bg-[#F5F6FD] rounded-[20px] p-6 mb-6">
            <h3 className="font-bold text-[#2A2A2A] mb-2">Service, emotional support and medical dogs</h3>
            <p className="text-sm text-[#5A5A5A] leading-relaxed">
              The same page allows an exception for dogs used as service animals, emotional support animals or for medical purposes, with a training-centre document certified by the origin authority, a medical report on the owner certified the same way, and a signed pledge about ownership and breeding. A casual letter is not those documents. Processing for that category is listed as 5 working days.
            </p>
          </div>
          <div className="bg-[#F5F6FD] rounded-[20px] p-6">
            <h3 className="font-bold text-[#2A2A2A] mb-2 flex items-center gap-2"><PawPrint className="w-5 h-5 text-[#4F5BD5]" /> Cats</h3>
            <p className="text-sm text-[#5A5A5A] leading-relaxed">
              The dog ban list is not a cat list. To import Bengal and Serval cats, a pedigree certificate (fifth generation) is required for individuals and companies. Flat-faced cats can still be refused by an airline. See <Link to="/cat-relocation-to-dubai/" className="font-semibold text-[#4F5BD5] hover:underline">cat relocation</Link> for carrier preparation. Dog crate and breed preparation: <Link to="/dog-relocation-to-dubai/" className="font-semibold text-[#4F5BD5] hover:underline">dog relocation</Link>.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <h2 className="text-[24px] sm:text-[30px] font-bold text-[#2A2A2A] mb-6">Vaccines by species</h2>
          <ContentImage
            src="/assets/w5/vet-scanning-cat-microchip-uae-import-check.jpg"
            alt="Vet scanning a cat microchip while preparing import papers"
            caption="The chip number has to match the health certificate. An implant-before-vaccine order was not restated on the live MOCCAE page checked on 22 September 2026."
          />
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div className="bg-white rounded-[20px] p-6 shadow-sm">
              <h3 className="font-bold text-[#2A2A2A] mb-3 flex items-center gap-2"><Syringe className="w-5 h-5 text-[#4F5BD5]" /> Dogs</h3>
              <ul className="text-sm text-[#5A5A5A] space-y-1">
                <li>Rabies, not before 12 weeks, then valid as the manufacturer states</li>
                <li>Canine distemper</li>
                <li>Canine parvovirus</li>
                <li>Infectious canine hepatitis</li>
                <li>Leptospirosis, or a lab test if the exporting country does not vaccinate</li>
              </ul>
            </div>
            <div className="bg-white rounded-[20px] p-6 shadow-sm">
              <h3 className="font-bold text-[#2A2A2A] mb-3 flex items-center gap-2"><Shield className="w-5 h-5 text-[#4F5BD5]" /> Cats</h3>
              <ul className="text-sm text-[#5A5A5A] space-y-1">
                <li>Rabies, not before 12 weeks, then valid as the manufacturer states</li>
                <li>Feline panleukopenia</li>
                <li>Feline rhinotracheitis</li>
                <li>Feline calicivirus</li>
              </ul>
              <p className="text-sm text-[#5A5A5A] mt-3">Feline leukaemia was not on the required list. This page does not call it mandatory.</p>
            </div>
          </div>
          <p className="text-sm text-[#5A5A5A] mt-6 max-w-3xl">
            For a UK export, certificate 3926EHC also requires the first rabies vaccination more than 21 days before export. That 21-day export wait is a UK certificate rule. On the MOCCAE page, a 21-day wait is stated for the antibody test after a first or lapsed rabies vaccine, not as a sentence that every pet must wait 21 days before arrival.
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <h2 className="text-[24px] sm:text-[30px] font-bold text-[#2A2A2A] mb-4">Airline responsibility</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#F5F6FD] rounded-[20px] p-6">
              <Plane className="w-5 h-5 text-[#4F5BD5] mb-2" />
              <h3 className="font-bold text-[#2A2A2A] mb-2">Emirates into Dubai</h3>
              <p className="text-sm text-[#5A5A5A] leading-relaxed">
                Ordinary pets are not in the cabin. Itineraries ending in Dubai must be cargo. Ask SkyCargo. The pet form asks for at least one week&apos;s notice and an age above four months. Excess-baggage prices on the Emirates FAQ apply to eligible trips that start in Dubai. They are not a cargo tariff into Dubai. More: <Link to="/guides/emirates-pet-cargo/" className="font-semibold text-[#4F5BD5] hover:underline">Emirates pet cargo</Link>.
              </p>
            </div>
            <div className="bg-[#F5F6FD] rounded-[20px] p-6">
              <FileText className="w-5 h-5 text-[#4F5BD5] mb-2" />
              <h3 className="font-bold text-[#2A2A2A] mb-2">Other carriers</h3>
              <p className="text-sm text-[#5A5A5A] leading-relaxed">
                British Airways carries pets in the hold and points UK export customers to its pet partner. IAG Cargo says some dangerous dog breeds and snub-nosed cats and dogs may not be accepted. Etihad and flydubai rules were not fully re-read on 22 September 2026 because the Etihad page did not load. Do not use old weights, centimetres or fares from this guide. Check <Link to="/guides/etihad-pet-policy/" className="font-semibold text-[#4F5BD5] hover:underline">Etihad</Link> and <Link to="/guides/pet-flight-options-dubai/" className="font-semibold text-[#4F5BD5] hover:underline">flight options</Link> against the live airline page.
              </p>
            </div>
          </div>
          <div className="warning-box mt-6">
            <p className="text-sm text-[#2A2A2A] flex gap-2">
              <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" />
              MOCCAE says cats and dogs are shipped to IATA conditions. A direct consignment must not mix with other pet animals if it crosses another country. No AED range for "choosing an airline" is published here.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <h2 className="text-[24px] sm:text-[30px] font-bold text-[#2A2A2A] mb-4">If the file does not match</h2>
          <p className="text-[#5A5A5A] max-w-3xl leading-relaxed">
            The published outcome is rejection at the owner&apos;s expense or confiscation. The page checked on {CHECKED} does not publish a fine amount, a quarantine length, or a boarding tariff. A matching file is examined and released. We do not promise a release time.
          </p>
          <ul className="mt-6 max-w-3xl space-y-2 text-sm text-[#5A5A5A]">
            <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0" /> Microchip number differs across documents.</li>
            <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0" /> Permit expired. It lasts 90 days from issuance.</li>
            <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0" /> High-risk origin with no antibody result, or a result below 0.5 IU/ml, or a certificate outside the 365-day conditions.</li>
            <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0" /> Parasite treatment outside the 14 days before shipment.</li>
            <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0" /> Dog named on the ban list, without the service, emotional support or medical documents the page requires.</li>
          </ul>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <h2 className="text-[24px] sm:text-[30px] font-bold text-[#2A2A2A] mb-8">Related pages</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              ['/service/pet-import-dubai/', 'pet import Dubai', 'Cargo, clearance and delivery when you want the file handled.'],
              ['/guides/moccae-import-permit/', 'MOCCAE import permit', 'How to request the 90-day permit.'],
              ['/guides/rabies-titer-test-dubai/', 'Rabies titre guide', 'Read with this page. The live rule is the 365-day certificate condition, not a 90-day sample window.'],
              ['/routes/uk-to-dubai/', 'UK to Dubai', '3926EHC and the low-risk origin note for Britain.'],
              ['/dog-relocation-to-dubai/', 'Dog relocation', 'Crate fit and the breed check.'],
              ['/cat-relocation-to-dubai/', 'Cat relocation', 'Carrier fit and Bengal or Serval papers.'],
              ['/', 'pet relocation Dubai', 'Homepage overview for a managed move to or from Dubai.'],
              ['/guides/pet-relocation-cost-dubai/', 'Cost guide', 'Drivers only. Government fees are the three amounts above.'],
              ['/guides/dubai-pet-arrival-guide/', 'Arrival guide', 'After the aircraft lands.'],
            ].map(([to, title, text]) => (
              <Link key={to} to={to} className="bg-[#F5F6FD] rounded-[20px] p-6 hover:shadow-md transition-shadow">
                <h3 className="font-bold text-[#2A2A2A] mb-2">{title}</h3>
                <p className="text-sm text-[#5A5A5A]">{text}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <h2 className="text-[24px] sm:text-[30px] font-bold text-[#2A2A2A] mb-8">Questions</h2>
          <div className="bg-white rounded-[20px] shadow-sm p-6 sm:p-8">
            {FAQS.map((f) => (
              <FAQItem key={f.q} question={f.q} answer={<p><LinkedText text={f.a} /></p>} />
            ))}
          </div>
        </div>
      </section>

      <GuideFunnelCta
        variant="end"
        title="Get a managed-move quote"
        subtitle={`${GUIDE_SOFT_GATE} A managed import covers the MOCCAE import permit window (90 days from issuance), the airline booking and the handoff. Government fees are confirmed on the MOCCAE portal.`}
        eligibilityMessage={waImport}
        waLabel={CTA_MANAGED_QUOTE}
        waClassName={FUNNEL_WA}
        paidItems={IMPORT_PAID}
        links={[
          { to: '/service/pet-import-dubai/', label: 'pet import Dubai', icon: 'plane' },
          { to: '/guides/moccae-import-permit/', label: 'MOCCAE pet import permit', icon: 'file' },
          { to: '/guides/import-checklist/', label: 'import checklist', icon: 'file' },
        ]}
      />

      <OfficialSources
        extra={[
          { label: 'MOCCAE: import of pets (cats and dogs)', href: MOCCAE_IMPORT },
          { label: 'GOV.UK: 3926EHC cats and dogs to the UAE', href: 'https://www.gov.uk/export-health-certificates/export-cats-and-dogs-to-the-united-arab-emirates-uae-certificate-3926' },
          { label: 'Emirates: rules for travelling with animals', href: 'https://www.emirates.com/ae/english/help/faq-topics/baggage-and-lost-property/faq/what-are-the-rules-and-charges-for-travelling-with-animals/' },
          { label: 'British Airways: travelling with pets', href: 'https://www.britishairways.com/content/information/travel-assistance/travelling-with-pets' },
        ]}
        checkedLabel={`Checked ${CHECKED} against the primary pages linked here. This is a document check for the wording on this guide. It is not a veterinary review and not a government certificate.`}
      />
    </div>
  )
}
