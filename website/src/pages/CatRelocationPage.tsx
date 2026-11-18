import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  CheckCircle,
  ChevronDown,
  ChevronUp,
  AlertTriangle,
  Plane,
  Heart,
  PawPrint,
} from 'lucide-react'
import SEOHead from '../components/SEOHead.tsx'
import Hero from '../components/Hero.tsx'
import LinkedText from '../components/LinkedText.tsx'
import { stripInternalMarkdownLinks } from '../lib/linkedText.ts'
import { BASE_URL } from '../lib/seo.ts'
import { GUIDE_SOFT_GATE, STRONG_WA_CLASS, waEligibility } from '../lib/conversionCopy.ts'
import Breadcrumb from '../components/Breadcrumb.tsx'
import WhatsAppBtn from '../components/WhatsAppBtn.tsx'
import OfficialSources from '../components/OfficialSources.tsx'
import RelatedLinks from '../components/RelatedLinks.tsx'
import PaidIncludes from '../components/PaidIncludes.tsx'
import SnippetAnswer from '../components/SnippetAnswer.tsx'

const PAGE_TITLE = 'Cat Relocation to Dubai | How to Bring Your Cat'
const PAGE_DESCRIPTION =
  'Cat relocation to Dubai: vaccines, MOCCAE import permit, airline-approved carrier and cargo booking. A managed cat move is quoted after eligibility.'

const WA = waEligibility({ pet: 'Cat', destination: 'Dubai', need: 'managed move' })

const CAT_PAID = [
  'Eligibility and origin check, including Bengal and Serval pedigree and flat-faced acceptance',
  'MOCCAE import permit timing (valid 90 days from issuance) against the flight',
  'Airline-accepted carrier sizing and cargo booking',
  'Vet document sequencing with your own vet',
  'DXB or DWC inspection, release and optional home delivery',
] as const

const GOV_FEE_LINE =
  'MOCCAE government fees are confirmed on the official MOCCAE portal at the time of application. They are not part of our coordination price.'

const LEAD =
  'Cat relocation to Dubai starts with a microchip and the MOCCAE-named cat vaccines from your own vet, plus a rabies antibody test only if the origin requires it. The import permit is valid 90 days from issuance. Finish with an airline-accepted carrier, cargo booking, inspection and release at Dubai.'

const SNIPPET_QUESTION = 'How do I bring a cat to Dubai?'
const SNIPPET_ANSWER =
  'To bring a cat to Dubai, finish the microchip and cat vaccines with your own vet, and add a rabies antibody test only if the origin requires it. Hold a MOCCAE import permit valid 90 days from issuance, then an airline-accepted carrier and cargo booking. Dubai inspects and releases the cat when the documents match.'

const CAT_FAQS: { q: string; a: string }[] = [
  {
    q: 'Can I bring my cat to Dubai?',
    a: 'A cat can enter Dubai when the papers match and an airline accepts the cat. You need a MOCCAE import permit valid 90 days from issuance, a permanent microchip, the cat vaccines MOCCAE names, and a health certificate. Bengal and Serval cats need a fifth-generation pedigree certificate. Cats are not on the dog ban list. Rules: [/guides/uae-pet-import-requirements/](/guides/uae-pet-import-requirements/).',
  },
  {
    q: 'How is a cat move different from a dog move?',
    a: 'The carrier is smaller, the vaccine list is the cat list, and the breed condition is a fifth-generation pedigree for Bengal and Serval cats rather than the dog ban list. Cats often hide, refuse food, or panic in a carrier they have never used. Preparation is carrier practice at home. Dog preparation: [/dog-relocation-to-dubai/](/dog-relocation-to-dubai/).',
  },
  {
    q: 'Can my cat fly in the cabin to Dubai?',
    a: 'A cabin seat into Dubai is not the product to plan on. Emirates says itineraries ending in Dubai travel as cargo, and ordinary pets are not in the Emirates cabin. British Airways carries pets in the hold, not the cabin. An Etihad cabin product, where offered, is an Abu Dhabi booking to confirm live. Flat-faced cats can still be refused. Etihad: [/guides/etihad-pet-policy/](/guides/etihad-pet-policy/).',
  },
  {
    q: 'Which airlines fly cats to Dubai, and in the cabin or the hold?',
    a: 'Emirates requires cargo for itineraries ending in Dubai, asks for notice of at least one week, and says animals travel only if they are older than four months. British Airways carries pets in the hold. IAG Cargo says some snub-nosed cats may not be accepted. An Etihad cabin product has to be rechecked live. Confirm the booking with the carrier. We do not guarantee acceptance. Etihad: [/guides/etihad-pet-policy/](/guides/etihad-pet-policy/).',
  },
  {
    q: 'Should I sedate my cat for the flight?',
    a: 'Sedation is a decision for your own vet and the airline. Many airlines refuse sedated animals. Ask your vet, and get the written airline rule, before anyone gives a medicine. Practical preparation is a carrier the cat already uses, a familiar cloth if the airline allows it, and water the carrier instructions allow. We do not give a fasting time, a drug name, or a dose.',
  },
  {
    q: 'When should I start a cat move to Dubai?',
    a: 'Start once the move month is set, so the vaccines, any rabies antibody test and the carrier are ready before you apply. Where the origin requires a rabies antibody test, MOCCAE Ministerial Resolution 109/2021 asks for at least 0.5 IU/ml from an approved laboratory, sampled at least 21 days after the first or interrupted rabies vaccination, before export. The MOCCAE import permit is valid 90 days from issuance, so apply after the flight window is known. Parasite treatment is recorded in the 14 days before shipment, and the health certificate has to be in date on travel day. Confirm the antibody rule on the MOCCAE portal.',
  },
  {
    q: 'My cat is old or has a medical condition. Can they fly?',
    a: 'Age alone is not a rule on the MOCCAE import page. Fitness to fly is a decision for your own vet, and acceptance is a decision for the airline. If the vet says the cat should not fly, the move waits. We do not give veterinary advice, and we do not decide that a cat is fit to fly.',
  },
  {
    q: 'What does a managed cat move to Dubai include?',
    a: 'A managed cat move covers the eligibility and origin check, including Bengal and Serval pedigree and flat-faced acceptance, permit timing against the flight, the airline-accepted carrier and cargo booking, sequencing with your own vet, and release at DXB or DWC with optional home delivery. We do not fly the cat, issue certificates or give veterinary advice. Government fees are confirmed on the official MOCCAE portal and are not part of the coordination price. Service: [/service/cat-relocation-dubai/](/service/cat-relocation-dubai/).',
  },
]

function ScopeLinks({ tone = 'light' }: { tone?: 'light' | 'dark' }) {
  const linkClass =
    tone === 'dark'
      ? 'font-semibold text-white underline underline-offset-2 hover:text-white/80'
      : 'font-semibold text-[#4F5BD5] hover:underline'
  return (
    <p className={`mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm ${tone === 'dark' ? 'justify-center text-white/80' : 'text-[#5A5A5A]'}`}>
      <Link to="/service/cat-relocation-dubai/" className={linkClass}>
        See the managed cat relocation service
      </Link>
      <Link to="/prices/" className={linkClass}>
        How we quote
      </Link>
    </p>
  )
}

function FaqItem({ question, answer }: { question: string; answer: React.ReactNode }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="faq-item">
      <button onClick={() => setOpen(!open)} aria-expanded={open} className="faq-question w-full text-left">
        <span className="pr-4">{question}</span>
        {open ? <ChevronUp className="w-5 h-5 shrink-0 text-[#4F5BD5]" /> : <ChevronDown className="w-5 h-5 shrink-0 text-[#8A8A8A]" />}
      </button>
      {open && <div className="faq-answer">{answer}</div>}
    </div>
  )
}

export default function CatRelocationPage() {
  return (
    <div className="bg-[#F5F6FD]">
      <SEOHead
        canonical={`${BASE_URL}/cat-relocation-to-dubai/`}
        title={PAGE_TITLE}
        description={PAGE_DESCRIPTION}
        ogType="article"
        schemas={[
          {
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: CAT_FAQS.map((f) => ({
              '@type': 'Question',
              name: f.q,
              acceptedAnswer: { '@type': 'Answer', text: stripInternalMarkdownLinks(f.a) },
            })),
          },
          {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: `${BASE_URL}/` },
              { '@type': 'ListItem', position: 2, name: 'Cat Relocation to Dubai', item: `${BASE_URL}/cat-relocation-to-dubai/` },
            ],
          },
          {
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: PAGE_TITLE,
            description: PAGE_DESCRIPTION,
            url: `${BASE_URL}/cat-relocation-to-dubai/`,
            dateModified: '2026-09-22',
            author: { '@type': 'Organization', name: 'Dubai Pet Relocation' },
            publisher: { '@type': 'Organization', name: 'Dubai Pet Relocation' },
          },
        ]}
      />
      <Breadcrumb items={[{ label: 'Cat Relocation to Dubai' }]} />

      <Hero
        image="/images/hero-cat.jpg"
        imageAlt="A cat resting in a travel carrier before a journey to Dubai"
        eyebrow="Cats"
        title="How to bring your cat to Dubai"
        subtitle={LEAD}
        updated="Checked 22 September 2026"
        whatsappMessage={WA}
        primaryLabel="Check if we can move your cat"
        primaryClassName={STRONG_WA_CLASS}
        secondary={{ label: 'How it works', to: '/how-it-works/' }}
        showBuyerQualify
        paidIncludes={[...CAT_PAID]}
        gateLine={GUIDE_SOFT_GATE}
        ctaSupport="Send the breed your vet uses, the origin country and the move month."
      />

      <section className="py-20 lg:py-28">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <ScopeLinks />
          <div className="mt-10">
            <SnippetAnswer question={SNIPPET_QUESTION} answer={SNIPPET_ANSWER} />
          </div>
          <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mb-4">
            Cat relocation to Dubai: what to sort before you book
          </h2>
          <p className="text-base sm:text-lg text-[#5A5A5A] leading-relaxed max-w-3xl">
            Most cats flying into Dubai travel in the hold. The{' '}
            <Link to="/service/cat-relocation-dubai/" className="font-semibold text-[#4F5BD5] hover:underline">cat relocation service</Link>
            {' '}is paid coordination for the vaccines, the permit window, the carrier and the cargo booking. If a dog is travelling too, breed bans and dog vaccines are on the{' '}
            <Link to="/dog-relocation-to-dubai/" className="font-semibold text-[#4F5BD5] hover:underline">dog relocation page</Link>
            . They are separate from the cat rules.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <div className="bg-white rounded-[20px] shadow-sm p-6 sm:p-8">
              <PawPrint className="w-5 h-5 text-[#4F5BD5] mb-4" />
              <h3 className="text-lg font-semibold text-[#2A2A2A] mb-3">The carrier has to be familiar</h3>
              <p className="text-sm text-[#5A5A5A] leading-relaxed">
                Leave the carrier out at home with the door open. Feed the cat beside it, then inside it, over several days. A familiar cloth helps if the airline allows soft items. The cat must stand, turn and lie down. A carrier that is only just large enough to squeeze into is not a fit. See the{' '}
                <Link to="/guides/iata-pet-crate-requirements/" className="font-semibold text-[#4F5BD5] hover:underline">IATA crate guide</Link>
                {' '}for the cargo carrier rules.
              </p>
            </div>
            <div className="bg-white rounded-[20px] shadow-sm p-6 sm:p-8">
              <Heart className="w-5 h-5 text-[#4F5BD5] mb-4" />
              <h3 className="text-lg font-semibold text-[#2A2A2A] mb-3">Food, water and litter</h3>
              <p className="text-sm text-[#5A5A5A] leading-relaxed">
                Attach water the way the airline specifies. Do not assume a cat will eat or use a tray in a moving aircraft. We do not give a fasting time. Ask your vet what to offer before check-in. A litter tray is not a requirement we can verify, and many cats will not use one in a crate.
              </p>
            </div>
            <div className="bg-white rounded-[20px] shadow-sm p-6 sm:p-8">
              <AlertTriangle className="w-5 h-5 text-[#4F5BD5] mb-4" />
              <h3 className="text-lg font-semibold text-[#2A2A2A] mb-3">Sedation is a vet and airline decision</h3>
              <p className="text-sm text-[#5A5A5A] leading-relaxed">
                Do not sedate a cat because a dog article suggested a calming aid. We do not name medicines, pheromone products or doses. If your vet and the airline both put permission in writing, that instruction is theirs. Ask before travel day, because many airlines refuse sedated animals.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mb-4">Timeline for a cat move to Dubai</h2>
          <p className="text-[#5A5A5A] max-w-3xl leading-relaxed">
            Apply for the MOCCAE import permit only after the flight window is known.
          </p>
          <ol className="mt-8 max-w-3xl space-y-6 text-[#5A5A5A]">
            <li>
              <h3 className="text-lg font-semibold text-[#2A2A2A]">1. Vet checks and vaccines</h3>
              <p className="mt-2 leading-relaxed">
                Your vet scans or implants the microchip and gives the vaccines MOCCAE names for cats: rabies, feline panleukopenia, feline rhinotracheitis and feline calicivirus. A fifth-generation pedigree certificate is required only for Bengal and Serval cats. Confirm Savannah and other hybrid cats with MOCCAE before booking. The document sequence is on the{' '}
                <Link to="/guides/uae-pet-import-requirements/" className="font-semibold text-[#4F5BD5] hover:underline">UAE pet import requirements</Link>
                {' '}guide.
              </p>
            </li>
            <li>
              <h3 className="text-lg font-semibold text-[#2A2A2A]">2. Rabies antibody test, where the origin requires it</h3>
              <p className="mt-2 leading-relaxed">
                Add the test only if the origin requires it. MOCCAE Ministerial Resolution 109/2021 asks for a result of at least 0.5 IU/ml from an approved laboratory. The sample is taken at least 21 days after the first or interrupted rabies vaccination, before export. Confirm the rule on the MOCCAE portal.
              </p>
            </li>
            <li>
              <h3 className="text-lg font-semibold text-[#2A2A2A]">3. MOCCAE import permit after the flight window is known</h3>
              <p className="mt-2 leading-relaxed">
                The MOCCAE import permit is valid 90 days from issuance. Apply after the flight window is known so those 90 days cover arrival. An expired permit cannot be used for the landing. Owners applying themselves use the{' '}
                <Link to="/guides/moccae-import-permit/" className="font-semibold text-[#4F5BD5] hover:underline">MOCCAE import permit guide</Link>
                .
              </p>
            </li>
            <li>
              <h3 className="text-lg font-semibold text-[#2A2A2A]">4. Parasite treatment in the 14 days before shipment</h3>
              <p className="mt-2 leading-relaxed">
                Your vet records parasite treatment in the 14 days before shipment and chooses the product. The UK export certificate names products that include permethrin. Permethrin products sold for dogs can be dangerous for cats. We do not give a dose.
              </p>
            </li>
            <li>
              <h3 className="text-lg font-semibold text-[#2A2A2A]">5. Health certificate</h3>
              <p className="mt-2 leading-relaxed">
                The origin authority issues the health certificate inside its own validity. It has to be in date on travel day, and the microchip number has to match the cat. Your vet books the exam.
              </p>
            </li>
            <li>
              <h3 className="text-lg font-semibold text-[#2A2A2A]">6. Flight, inspection and release</h3>
              <p className="mt-2 leading-relaxed">
                Book cargo on an airline that has accepted the cat. Dubai inspects and releases the cat when the documents match. Home delivery is available only when it is booked. See{' '}
                <Link to="/service/pet-relocation-to-dubai/" className="font-semibold text-[#4F5BD5] hover:underline">pet relocation to Dubai</Link>
                {' '}for the inbound handover.
              </p>
            </li>
          </ol>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mb-4">Doing it yourself or booking a managed cat move</h2>
          <p className="text-[#5A5A5A] max-w-3xl leading-relaxed">
            You can bring a cat to Dubai without a coordinator. The{' '}
            <Link to="/guides/import-checklist/" className="font-semibold text-[#4F5BD5] hover:underline">import checklist</Link>
            {' '}is the tick-list, and the{' '}
            <Link to="/guides/moccae-import-permit/" className="font-semibold text-[#4F5BD5] hover:underline">MOCCAE import permit guide</Link>
            {' '}is the application walkthrough. Both are there to read. Neither one assigns a person to complete the portal for you.
          </p>
          <div className="grid lg:grid-cols-2 gap-8 mt-10 max-w-5xl">
            <div className="bg-[#F5F6FD] rounded-[20px] p-6 sm:p-8">
              <h3 className="text-lg font-semibold text-[#2A2A2A] mb-4">What you do on your own</h3>
              <ul className="space-y-3 text-sm text-[#5A5A5A]">
                <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /> Book your own vet for the microchip, the named cat vaccines and the health certificate.</li>
                <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /> For a Bengal or a Serval, get the fifth-generation pedigree, and confirm flat-faced acceptance with the airline.</li>
                <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /> Book the laboratory if a rabies antibody test is required, and confirm the result on the MOCCAE portal.</li>
                <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /> Apply for the import permit yourself and keep it inside the 90 days from issuance.</li>
                <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /> Buy an airline-accepted carrier, book cargo, record parasite treatment in the 14 days before shipment, and attend inspection at DXB or DWC.</li>
              </ul>
            </div>
            <div className="bg-[#F5F6FD] rounded-[20px] p-6 sm:p-8">
              <h3 className="text-lg font-semibold text-[#2A2A2A] mb-4">What a managed cat move covers</h3>
              <p className="text-sm text-[#5A5A5A] leading-relaxed">
                A managed cat move coordinates the eligibility check, including Bengal and Serval pedigree and flat-faced acceptance, permit timing, the carrier and cargo booking, sequencing with your own vet, then release and optional home delivery at DXB or DWC. We do not fly the cat, issue the health certificate or give veterinary advice. Your vet vaccinates and signs.
              </p>
              <p className="mt-4 text-sm text-[#5A5A5A] leading-relaxed">
                The paid coordination is the{' '}
                <Link to="/service/cat-relocation-dubai/" className="font-semibold text-[#4F5BD5] hover:underline">cat relocation service</Link>
                . For the wider inbound handover, see{' '}
                <Link to="/service/pet-relocation-to-dubai/" className="font-semibold text-[#4F5BD5] hover:underline">pet relocation to Dubai</Link>
                . If the job is the import clearance rather than the whole journey, see{' '}
                <Link to="/service/pet-import-dubai/" className="font-semibold text-[#4F5BD5] hover:underline">pet import to Dubai</Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mb-4">Cabin or hold for a cat flying to Dubai</h2>
          <p className="text-[#5A5A5A] max-w-3xl leading-relaxed">
            Plan the hold when the flight ends in Dubai. Flat-faced cats, including many Persians, can be refused even when import rules allow them.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mt-10">
            <div className="bg-[#F5F6FD] rounded-[20px] shadow-sm p-6">
              <Plane className="w-5 h-5 text-[#4F5BD5] mb-3" />
              <h3 className="font-semibold text-[#2A2A2A] mb-2">Into Dubai</h3>
              <p className="text-sm text-[#5A5A5A] leading-relaxed">
                Emirates requires cargo for itineraries ending in Dubai. Ordinary pets are not in the Emirates cabin. The pet form asks for notice of at least one week and says animals travel only if they are older than four months. That condition is separate from the government import rules. Confirm the booking. We do not guarantee acceptance.
              </p>
            </div>
            <div className="bg-[#F5F6FD] rounded-[20px] shadow-sm p-6">
              <Plane className="w-5 h-5 text-[#4F5BD5] mb-3" />
              <h3 className="font-semibold text-[#2A2A2A] mb-2">Hold, and the Abu Dhabi cabin product</h3>
              <p className="text-sm text-[#5A5A5A] leading-relaxed">
                British Airways carries pets in the hold. IAG Cargo says some snub-nosed cats may not be accepted. An Etihad cabin product is an Abu Dhabi booking. Read the{' '}
                <Link to="/guides/etihad-pet-policy/" className="font-semibold text-[#4F5BD5] hover:underline">Etihad pet policy</Link>
                {' '}and recheck it live. A road transfer from Abu Dhabi is a separate booking.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mb-4">What changes the cost of a cat move</h2>
          <p className="text-[#5A5A5A] max-w-3xl leading-relaxed">
            We do not publish a package total. A smaller carrier can change the freight rate. The drivers are origin veterinary work, the carrier, the cargo rate, and whether you want door-to-door delivery. {GOV_FEE_LINE} Read{' '}
            <Link to="/guides/pet-relocation-cost-dubai/" className="font-semibold text-[#4F5BD5] hover:underline">what changes the cost</Link>
            , then check if we can move your cat.
          </p>
          <div className="mt-8 max-w-3xl">
            <p className="text-sm leading-relaxed text-[#5A5A5A] mb-4">{GUIDE_SOFT_GATE}</p>
            <WhatsAppBtn strong label="Check if we can move your cat" message={WA} />
            <ScopeLinks />
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mb-4">Questions about cats</h2>
          <div className="mt-8 max-w-3xl">
            {CAT_FAQS.map((f) => (
              <FaqItem key={f.q} question={f.q} answer={<p><LinkedText text={f.a} /></p>} />
            ))}
          </div>
        </div>
      </section>

      <RelatedLinks
        heading="Related cat pages"
        intro="The managed cat service, and the checklist if you are preparing the import yourself."
        links={[
          {
            to: '/service/cat-relocation-dubai/',
            label: 'Cat relocation in Dubai',
            note: 'What a managed cat move includes',
          },
          {
            to: '/',
            label: 'pet relocation Dubai',
            note: 'Managed pet relocation from and to Dubai',
          },
          {
            to: '/guides/import-checklist/',
            label: 'Import documents checklist',
            note: 'Tick-list if you are preparing the import yourself',
          },
          {
            to: '/guides/iata-pet-crate-requirements/',
            label: 'IATA crate requirements',
            note: 'Carrier fit for a cat in cargo',
          },
        ]}
      />

      <OfficialSources
        sources={[
          { label: 'UAE MOCCAE: import permits and rules', href: 'https://www.moccae.gov.ae' },
          { label: 'IATA: Live Animals Regulations for travel crates', href: 'https://www.iata.org/en/programs/cargo/live-animals/' },
          { label: 'Etihad: travelling with pets', href: 'https://www.etihad.com/en-ae/plan/travel-companion/travelling-with-pets' },
          { label: 'Emirates: pets and unusual baggage allowances', href: 'https://www.emirates.com/english/before-you-fly/baggage/unusual-baggage-and-special-allowances/' },
        ]}
        extra={[
          { label: 'MOCCAE: import of pets', href: 'https://moccae.gov.ae/en/services/import-permit-pets' },
          { label: 'Emirates: travelling with animals', href: 'https://www.emirates.com/ae/english/help/faq-topics/baggage-and-lost-property/faq/what-are-the-rules-and-charges-for-travelling-with-animals/' },
        ]}
        checkedLabel="Checked 22 September 2026 against the MOCCAE pet import page and the Emirates animals FAQ. This is not a veterinary certificate."
      />

      <section className="py-20 lg:py-28 max-sm:pb-36">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="bg-[#4F5BD5] rounded-3xl p-8 sm:p-12 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Ready for a managed cat move?</h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-6">
              Use the import checklist if you are preparing the documents yourself. A managed cat move is quoted after an eligibility check. WhatsApp +971504782999 is for owners ready to book a managed cat move. Email support@dubai-pet-relocation.ae.
            </p>
            <WhatsAppBtn strong label="Check if we can move your cat" message={WA} />
            <p className="mt-4 text-sm leading-relaxed text-white/80 max-w-2xl mx-auto">{GUIDE_SOFT_GATE}</p>
            <ScopeLinks tone="dark" />
            <PaidIncludes tone="dark" compact items={CAT_PAID} className="mx-auto mt-6 max-w-2xl text-left" />
          </div>
        </div>
      </section>
    </div>
  )
}
