import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  AlertTriangle,
  Ban,
  ChevronDown,
  ChevronUp,
  FileCheck,
  Clock,
  Heart,
  Dog,
  CheckCircle,
} from 'lucide-react'
import SEOHead from '../components/SEOHead.tsx'
import Hero from '../components/Hero.tsx'
import Breadcrumb from '../components/Breadcrumb.tsx'
import GuideFunnelCta from '../components/GuideFunnelCta.tsx'
import { BASE_URL } from '../lib/seo.ts'
import GuideDualPath from '../components/GuideDualPath.tsx'
import { GUIDE_SOFT_GATE, waEligibility } from '../lib/conversionCopy.ts'

const CHECKED = '22 September 2026'
const MOCCAE_IMPORT = 'https://moccae.gov.ae/en/services/import-permit-pets'
const waBreed = waEligibility({ pet: 'dog', need: 'managed move' })

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
        {open ? <ChevronUp className="w-5 h-5 text-[#4F5BD5] shrink-0" /> : <ChevronDown className="w-5 h-5 text-[#5A5A5A] shrink-0" />}
      </button>
      {open && <div className="faq-answer">{answer}</div>}
    </div>
  )
}

export default function BannedBreedsGuide() {
  const title = 'Dubai Dog Breed Restrictions | Import Eligibility'
  const description =
    'Check dog breed restrictions before planning a move to Dubai. Find official sources, eligibility questions and the next steps for a breed assessment.'
  const canonical = `${BASE_URL}/guides/banned-dog-breeds-dubai/`
  const ogImage = `${BASE_URL}/assets/og-banned-breeds.jpg`

  const faqData = [
    {
      question: 'Are crosses of these breeds banned?',
      answer:
        'The MOCCAE English page checked on 22 September 2026 lists named breeds. It does not add the phrase "any cross". This guide does not add it either. The UK export certificate 3926EHC does require the Official Veterinarian to exclude a similar list, including crosses, for a dog leaving the United Kingdom. That is a UK certificate rule, not an extra sentence on the UAE list.',
    },
    {
      question: 'What happens if the dog is on the list?',
      answer:
        'The published outcome for a non-compliant import is rejection at the owner\'s expense or confiscation. The page checked on 22 September 2026 does not publish a fine amount, a jail term, or a euthanasia tariff. An exception exists for service, emotional support and medical dogs when the required documents are supplied.',
    },
    {
      question: 'Are Rottweilers, Dobermans and Boxers banned?',
      answer:
        'They were not on the MOCCAE pet import list checked on 22 September 2026. This page does not call them banned, and it does not publish muzzle, leash or insurance rules for them. A building can still set its own pet policy. Ask that building before you book cargo.',
    },
    {
      question: 'Can a banned breed enter as a service or emotional support dog?',
      answer:
        'The same MOCCAE page allows an exception for dogs used as service animals, emotional support animals or for medical purposes. You need a training-centre document certified by the origin authority, a medical report on the owner certified the same way, and a signed pledge about ownership and breeding. A casual letter is not those documents. Processing for that category is listed as 5 working days. The ordinary permit estimate is 1 working day.',
    },
    {
      question: 'What is the fine for importing a banned breed?',
      answer:
        'The live import page does not publish a fine amount. It says a non-compliant pet will be rejected at the owner\'s expense or confiscated. Older fine ranges are not repeated here.',
    },
    {
      question: 'Are flat-faced dogs banned from Dubai?',
      answer:
        'They are not on the MOCCAE ban list. An airline can still refuse them. IAG Cargo says some dangerous dog breeds and snub-nosed cats and dogs may not be accepted. This page does not copy a month-by-month embargo. Airline notes: the snub-nosed dogs guide.',
    },
    {
      question: 'What if I am unsure of the breed name?',
      answer:
        'Compare the name on the veterinary record with the list on this page. WhatsApp photos only if you are ready to book a managed dog relocation. This guide does not offer a free photo review.',
    },
    {
      question: 'Do I still need an import permit if the breed is allowed?',
      answer:
        'Yes. A permitted breed still needs a MOCCAE import permit valid for 90 days from issuance, plus the vaccines and health certificate for that origin. Breed names are the first check, not the whole file.',
    },
  ]

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqData.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Guides', item: `${BASE_URL}/guides/` },
      { '@type': 'ListItem', position: 3, name: 'Banned dog breeds in Dubai', item: canonical },
    ],
  }

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    image: ogImage,
    author: { '@type': 'Organization', name: 'Dubai Pet Relocation', url: BASE_URL },
    publisher: { '@type': 'Organization', name: 'Dubai Pet Relocation', logo: { '@type': 'ImageObject', url: `${BASE_URL}/assets/logo.png` } },
    datePublished: '2025-01-15',
    dateModified: '2026-09-22',
    mainEntityOfPage: { '@type': 'WebPage', '@id': canonical },
  }

  return (
    <>
      <SEOHead
        meta={{ title, description, canonical, ogImage, ogType: 'article' }}
        schemas={[faqSchema, breadcrumbSchema, articleSchema]}
      />
      <Breadcrumb items={[{ label: 'Guides', path: '/guides/' }, { label: 'Banned dog breeds' }]} />

      <Hero
        image="/images/guide-banned-breeds.jpg"
        imageAlt="A leashed dog with its owner in a Dubai park"
        eyebrow="Pet relocation guide"
        title="Dog breed restrictions for importing to Dubai"
        subtitle="Names below are the ban list on the MOCCAE pet import page. The page does not publish a fine amount. A permitted breed still needs a permit valid 90 days from issuance."
        updated={`Last verified: ${CHECKED}`}
        primaryLabel="Get a managed dog-move quote"
        primaryClassName="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#0B6B3A] px-6 py-3.5 text-sm font-semibold text-white shadow-lg ring-1 ring-black/10 transition hover:bg-[#085530] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#085530] sm:w-auto"
        whatsappMessage={waBreed}
        gateLine={GUIDE_SOFT_GATE}
        secondary={{ label: 'Managed dog relocation eligibility', to: '/service/dog-relocation-dubai/' }}
      />

      <section className="section-padding bg-white">
        <div className="max-w-[900px] mx-auto px-5 sm:px-6 lg:px-8">
          <GuideDualPath
            diyNote="Stay on this page if you are checking the breed name yourself."
            moneyTo="/service/dog-relocation-dubai/"
            moneyLabel="Managed dog relocation eligibility"
            waMessage={waBreed}
            waLabel="Get a managed dog-move quote"
          />
        </div>
      </section>

      <section id="banned-list" className="section-padding bg-[#F5F6FD]">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-8">
            <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mb-4">
              Breeds named on the import page
            </h2>
            <p className="text-[#5A5A5A] text-base leading-relaxed">
              These are the names on the MOCCAE pet import page on {CHECKED}. Rottweiler, Doberman and Boxer were not on that list. Wolf-dog hybrids, Bandog and a blanket "any cross" line were not on it either, so they are not added here.
            </p>
            <p className="text-[#8A8A8A] text-xs leading-relaxed mt-3">
              Source:{' '}
              <a href={MOCCAE_IMPORT} className="underline" target="_blank" rel="noopener noreferrer">
                MOCCAE import of pets
              </a>
              . Checked {CHECKED}. Veterinary review was not supplied.
            </p>
          </div>
          <ul className="grid sm:grid-cols-2 gap-3 text-sm text-[#5A5A5A] mb-8">
            {BANNED_DOGS.map((breed) => (
              <li key={breed} className="flex gap-2 bg-white rounded-2xl px-4 py-3">
                <Ban className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" />
                {breed}
              </li>
            ))}
          </ul>
          <div className="warning-box">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-[#C89F5A] shrink-0 mt-0.5" />
              <p className="text-[#5A5A5A] text-sm leading-relaxed">
                If the import does not comply, the pet may be rejected at the owner&apos;s expense or confiscated. The page does not publish a fine, a quarantine length, or a boarding tariff.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mb-4">
            Breeds this page does not restrict
          </h2>
          <p className="text-[#5A5A5A] max-w-3xl leading-relaxed mb-6">
            Rottweiler, Doberman and Boxer are not on the service-page list we checked. This URL does not publish a muzzle rule, a leash length, an insurance requirement, or an apartment ban for them. Ask the building you are moving into. Residency rules were not on the MOCCAE page.
          </p>
          <p className="text-[#5A5A5A] max-w-3xl leading-relaxed">
            Savannah cats were not named on that page, so this guide does not call them banned. Bengal and Serval cats need a fifth-generation pedigree certificate. Cat preparation:{' '}
            <Link to="/cat-relocation-to-dubai/" className="font-semibold text-[#4F5BD5] hover:underline">cat relocation</Link>.
          </p>
        </div>
      </section>

      <section className="section-padding bg-[#F5F6FD]">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10">
            <div className="bg-white rounded-[20px] shadow-sm p-6 lg:p-8">
              <h2 className="text-xl font-bold text-[#2A2A2A] mb-4">If the name is on the list</h2>
              <p className="text-[#5A5A5A] text-sm leading-relaxed mb-4">
                Do not book cargo for a named breed unless the service, emotional support or medical documents below are actually in the file. A matching animal that is not on the list is examined at the entry port and released. This page does not promise a release time.
              </p>
              <ul className="space-y-2 text-sm text-[#5A5A5A]">
                <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /> Rejection at the owner&apos;s expense, or confiscation.</li>
                <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /> No AED fine is printed on the page we checked.</li>
                <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /> The import permit, if you still need one for an allowed breed, is valid for 90 days from issuance.</li>
              </ul>
            </div>
            <div className="bg-[#E9ECFB] rounded-[20px] p-6 lg:p-8">
              <div className="flex items-center gap-3 mb-4">
                <Heart className="w-5 h-5 text-[#4F5BD5]" />
                <h2 className="text-xl font-bold text-[#2A2A2A]">Service, emotional support and medical dogs</h2>
              </div>
              <p className="text-[#5A5A5A] text-sm leading-relaxed mb-4">
                The ban list has this exception. Emotional support is named on the page. It is not excluded.
              </p>
              <ul className="space-y-2 text-sm text-[#5A5A5A]">
                <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /> Training-centre document, certified by the origin authority, stating the dog is trained as a service, emotional support or medical dog.</li>
                <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /> Medical report on the owner, certified the same way.</li>
                <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /> Signed pledge about ownership, not abandoning the dog, and not breeding it.</li>
                <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /> Published service time for this category: 5 working days. That is an estimate on the page, not a promise.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <h2 className="text-[24px] sm:text-[30px] font-bold text-[#2A2A2A] mb-4">Airlines can still refuse a permitted breed</h2>
          <p className="text-[#5A5A5A] max-w-3xl leading-relaxed">
            IAG Cargo says some dangerous dog breeds and snub-nosed cats and dogs may not be accepted, and it points to the IATA live-animal rules. Emirates itineraries ending in Dubai travel as cargo. This page does not copy cabin weights, fares, or a summer calendar. See{' '}
            <Link to="/guides/snub-nosed-dogs-flying-uae/" className="font-semibold text-[#4F5BD5] hover:underline">snub-nosed dogs</Link>
            {' '}and{' '}
            <Link to="/dog-relocation-to-dubai/" className="font-semibold text-[#4F5BD5] hover:underline">dog relocation</Link>
            {' '}for crate fit. Confirm the carrier in writing.
          </p>
        </div>
      </section>

      <GuideFunnelCta
        variant="mid"
        title="Breed allowed, and you want the move booked?"
        subtitle="Use this list as the name check. Guides are free to read. WhatsApp is for people ready to book a managed relocation. If the breed is allowed, open managed dog relocation eligibility. Government fees: confirm on the MOCCAE portal."
        eligibilityMessage={waBreed}
        waLabel="Get a managed dog-move quote"
        waClassName="inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-[#0B6B3A] px-5 py-3.5 text-sm font-semibold text-white shadow-lg ring-1 ring-black/10 transition hover:bg-[#085530]"
        links={[
          { to: '/service/dog-relocation-dubai/', label: 'Managed dog relocation eligibility', icon: 'dog' },
          { to: '/service/moccae-pet-permit/', label: 'MOCCAE permit assistance', icon: 'file' },
        ]}
      />

      <section className="section-padding bg-white">
        <div className="max-w-[820px] mx-auto px-5 sm:px-6 lg:px-8">
          <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mb-8 text-center">
            Frequently asked questions
          </h2>
          <div className="bg-white rounded-[20px] shadow-sm p-6 lg:p-8">
            {faqData.map((faq) => (
              <FAQItem key={faq.question} question={faq.question} answer={<p>{faq.answer}</p>} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#F5F6FD]">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <h2 className="text-[24px] sm:text-[30px] font-bold text-[#2A2A2A] mb-8 text-center">Related pages</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link to="/dog-relocation-to-dubai/" className="bg-white rounded-[20px] shadow-sm p-6 hover:shadow-md transition-shadow">
              <Dog className="w-5 h-5 text-[#4F5BD5] mb-3" />
              <h3 className="text-lg font-bold text-[#2A2A2A] mb-2">Dog relocation to Dubai</h3>
              <p className="text-sm text-[#5A5A5A] leading-relaxed">Crate fit and the breed check before cargo.</p>
            </Link>
            <Link to="/guides/uae-pet-import-requirements/" className="bg-white rounded-[20px] shadow-sm p-6 hover:shadow-md transition-shadow">
              <FileCheck className="w-5 h-5 text-[#4F5BD5] mb-3" />
              <h3 className="text-lg font-bold text-[#2A2A2A] mb-2">UAE pet import requirements for dogs and cats</h3>
              <p className="text-sm text-[#5A5A5A] leading-relaxed">Permit, vaccines and the same ban list in the full file.</p>
            </Link>
            <Link to="/how-it-works/" className="bg-white rounded-[20px] shadow-sm p-6 hover:shadow-md transition-shadow">
              <Clock className="w-5 h-5 text-[#C89F5A] mb-3" />
              <h3 className="text-lg font-bold text-[#2A2A2A] mb-2">How the service works</h3>
              <p className="text-sm text-[#5A5A5A] leading-relaxed">What a managed file covers after the breed is allowed.</p>
            </Link>
          </div>
        </div>
      </section>

      <GuideFunnelCta
        variant="end"
        title="Ready to book if the breed is allowed?"
        subtitle="Guides are free to read. WhatsApp is for people ready to book a managed relocation. Start with managed dog relocation eligibility, then the quote gate. We do not offer a free breed consultation. The MOCCAE import permit is valid for 90 days from issuance."
        eligibilityMessage={waBreed}
        waLabel="Get a managed dog-move quote"
        waClassName="inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-[#0B6B3A] px-5 py-3.5 text-sm font-semibold text-white shadow-lg ring-1 ring-black/10 transition hover:bg-[#085530]"
        paidItems={[
          'Breed eligibility check against the published import list',
          'IATA crate sizing',
          'Airline booking, cabin or cargo',
          'MOCCAE import permit timing for an allowed breed (90 days from issuance)',
          'DXB or DWC airport handoff',
        ]}
        links={[
          { to: '/service/dog-relocation-dubai/', label: 'Managed dog relocation eligibility', icon: 'dog' },
          { to: '/service/pet-import-dubai/', label: 'Pet import Dubai', icon: 'plane' },
        ]}
      />
    </>
  )
}
