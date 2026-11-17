import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  CheckCircle,
  ChevronDown,
  ChevronUp,
  AlertTriangle,
  Plane,
  Ruler,
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

const PAGE_TITLE = 'Dog Relocation to Dubai | How to Bring Your Dog'
const PAGE_DESCRIPTION =
  'Dog relocation to Dubai: breed check, IATA crate, MOCCAE import permit and cargo booking. See what a managed dog move includes. Check if we can move your dog.'

const WA = waEligibility({ pet: 'Dog', destination: 'Dubai', need: 'managed dog move' })

const DOG_PAID = [
  'Breed and origin eligibility check',
  'MOCCAE import permit timing (valid 90 days from issuance) against the flight',
  'IATA crate sizing check and cargo booking with an accepting airline',
  'Vet document sequencing with your own vet',
  'DXB or DWC inspection, release and optional home delivery',
] as const

const GOV_FEE_LINE =
  'MOCCAE government fees are confirmed on the official MOCCAE portal at the time of application. They are not part of our coordination price.'

const LEAD =
  'Dog relocation to Dubai starts with a breed check against the MOCCAE ban list, then microchip and vaccines with your own vet, and a rabies antibody test if the origin requires it. The import permit is valid 90 days from issuance. Finish with an IATA crate, cargo booking, inspection and release at Dubai.'

const SNIPPET_QUESTION = 'How do I bring a dog to Dubai?'
const SNIPPET_ANSWER =
  'To bring a dog to Dubai, clear the breed on the MOCCAE ban list, finish microchip and vaccines with your own vet, and add a rabies antibody test only if the origin requires it. Hold a MOCCAE import permit valid 90 days from issuance, then an IATA crate on cargo the airline has accepted. Dubai inspects and releases the dog when the documents match.'

const DOG_FAQS: { q: string; a: string }[] = [
  {
    q: 'Can I bring my dog to live in Dubai?',
    a: 'A dog can live in Dubai when the breed is not on the MOCCAE ban list and the import documents match. You need a MOCCAE import permit valid 90 days from issuance, the vaccines named for dogs, a health certificate from the origin authority, and an airline that accepts the dog into Dubai, usually as cargo. Buildings may set their own pet rules after arrival. Checklist: [/guides/uae-pet-import-requirements/](/guides/uae-pet-import-requirements/). Breed names: [/guides/banned-dog-breeds-dubai/](/guides/banned-dog-breeds-dubai/).',
  },
  {
    q: 'How is a dog move different from a cat move?',
    a: 'Dogs have a federal ban list. Cats do not use that list; Bengal and Serval cats have a pedigree condition instead. Dogs need larger rigid crates, and many towers treat a dog crate as a goods-lift booking. Dog vaccines on the MOCCAE page are rabies, distemper, parvovirus, infectious canine hepatitis and leptospirosis. Do not use the cat vaccine list for a dog. Cat preparation: [/cat-relocation-to-dubai/](/cat-relocation-to-dubai/).',
  },
  {
    q: 'How long does dog relocation to Dubai take?',
    a: 'The timing follows the vaccine already in the dog and whether the origin requires a rabies antibody test. A first rabies vaccine has a wait on the UK export certificate of more than 21 days, and the dog must be at least 15 weeks old at UK export. The MOCCAE import permit is valid 90 days from issuance, so apply after the flight window is known. Route example: [/routes/uk-to-dubai/](/routes/uk-to-dubai/).',
  },
  {
    q: 'Can my dog fly in the cabin to Dubai?',
    a: 'A cabin seat into Dubai is not the product to plan on. Emirates says animals on itineraries ending in Dubai travel as cargo, and ordinary pets are not in the Emirates cabin. British Airways says pets travel in the hold, not the cabin. An Etihad cabin product is a separate Abu Dhabi booking. Confirm the live product. Modes: [/guides/pet-flight-options-dubai/](/guides/pet-flight-options-dubai/). Etihad: [/guides/etihad-pet-policy/](/guides/etihad-pet-policy/).',
  },
  {
    q: 'What if I am not sure of the breed?',
    a: 'Send the name your vet uses, and clear photos, before a permit is filed. A shelter label such as mix is not a decision. The MOCCAE page lists banned types, and the UK export certificate also refuses crosses of a similar list. We will not file a permit for a dog that matches that list. A non-compliant import may be rejected at your expense or confiscated. Names: [/guides/banned-dog-breeds-dubai/](/guides/banned-dog-breeds-dubai/).',
  },
  {
    q: 'Who meets the dog at Dubai airport?',
    a: 'MOCCAE inspects the dog at the entry port and releases the documents when they match. Door-to-door collection, when it is booked, starts from cargo after that release and goes to the address. If you collect the dog yourself, the same papers still have to match. Clearance time is set at the airport, not as a published hour. Arrival notes: [/guides/dubai-pet-arrival-guide/](/guides/dubai-pet-arrival-guide/).',
  },
  {
    q: 'What does a managed dog move to Dubai include?',
    a: 'A managed dog move covers the breed and origin check, permit timing against the flight, the IATA crate and cargo booking, sequencing with your own vet, and release at DXB or DWC with optional home delivery. We do not fly the dog, issue certificates or give veterinary advice. Government fees are confirmed on the official MOCCAE portal and are not part of the coordination price. Service: [/service/dog-relocation-dubai/](/service/dog-relocation-dubai/).',
  },
  {
    q: 'When should I start a dog move to Dubai?',
    a: 'Start once the move month is set, so vaccines, any rabies antibody test and the crate are ready before you apply. The MOCCAE import permit is valid 90 days from issuance, so file it after the flight window is known. Where required, MOCCAE Ministerial Resolution 109/2021 asks for at least 0.5 IU/ml from an approved laboratory, sampled at least 21 days after the first or interrupted rabies vaccination, before export. Confirm the rule on the MOCCAE portal.',
  },
]

function ScopeLinks({ tone = 'light' }: { tone?: 'light' | 'dark' }) {
  const linkClass =
    tone === 'dark'
      ? 'font-semibold text-white underline underline-offset-2 hover:text-white/80'
      : 'font-semibold text-[#4F5BD5] hover:underline'
  return (
    <p className={`mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm ${tone === 'dark' ? 'justify-center text-white/80' : 'text-[#5A5A5A]'}`}>
      <Link to="/service/dog-relocation-dubai/" className={linkClass}>
        See the managed dog relocation service
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

export default function DogRelocationPage() {
  return (
    <div className="bg-[#F5F6FD]">
      <SEOHead
        canonical={`${BASE_URL}/dog-relocation-to-dubai/`}
        title={PAGE_TITLE}
        description={PAGE_DESCRIPTION}
        ogType="article"
        schemas={[
          {
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: DOG_FAQS.map((f) => ({
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
              { '@type': 'ListItem', position: 2, name: 'Dog Relocation to Dubai', item: `${BASE_URL}/dog-relocation-to-dubai/` },
            ],
          },
          {
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: PAGE_TITLE,
            description: PAGE_DESCRIPTION,
            url: `${BASE_URL}/dog-relocation-to-dubai/`,
            dateModified: '2026-09-22',
            author: { '@type': 'Organization', name: 'Dubai Pet Relocation' },
            publisher: { '@type': 'Organization', name: 'Dubai Pet Relocation' },
          },
        ]}
      />
      <Breadcrumb items={[{ label: 'Dog Relocation to Dubai' }]} />

      <Hero
        image="/images/hero-dog.jpg"
        imageAlt="Dog sitting beside a travel crate before a flight to Dubai"
        eyebrow="Dogs"
        title="How to bring your dog to Dubai"
        subtitle={LEAD}
        updated="Checked 22 September 2026"
        whatsappMessage={WA}
        primaryLabel="Check if we can move your dog"
        primaryClassName={STRONG_WA_CLASS}
        secondary={{ label: 'How it works', to: '/how-it-works/' }}
        showBuyerQualify
        paidIncludes={[...DOG_PAID]}
        gateLine={GUIDE_SOFT_GATE}
        ctaSupport="Send the breed your vet uses, the weight, the origin country and the move month."
      />

      <section className="py-20 lg:py-28">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <ScopeLinks />
          <div className="mt-10">
            <SnippetAnswer question={SNIPPET_QUESTION} answer={SNIPPET_ANSWER} />
          </div>
          <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mb-4">
            Dog relocation to Dubai: what to sort before you book
          </h2>
          <p className="text-base sm:text-lg text-[#5A5A5A] leading-relaxed max-w-3xl">
            A move fails when the breed is banned, the crate does not fit the dog, or the airline will not accept that shape of head on that date. The{' '}
            <Link to="/service/dog-relocation-dubai/" className="font-semibold text-[#4F5BD5] hover:underline">dog relocation service</Link>
            {' '}is paid coordination for owners who want the breed check, the permit window and the cargo booking held together.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <div className="bg-white rounded-[20px] shadow-sm p-6 sm:p-8">
              <PawPrint className="w-5 h-5 text-[#4F5BD5] mb-4" />
              <h3 className="text-lg font-semibold text-[#2A2A2A] mb-3">Will the dog cope with the crate?</h3>
              <p className="text-sm text-[#5A5A5A] leading-relaxed">
                Let the dog sleep and eat in the crate for several days before travel, at home. It needs room to stand, turn and lie down. We do not offer sedation or calming-drug advice. If the dog is unwell or severely distressed, ask your own vet whether the dog should fly. That is a veterinary decision.
              </p>
            </div>
            <div className="bg-white rounded-[20px] shadow-sm p-6 sm:p-8">
              <AlertTriangle className="w-5 h-5 text-[#4F5BD5] mb-4" />
              <h3 className="text-lg font-semibold text-[#2A2A2A] mb-3">Is this breed allowed?</h3>
              <p className="text-sm text-[#5A5A5A] leading-relaxed">
                MOCCAE publishes a ban list for dogs. Check it before you pay for a crate. The full names are on the{' '}
                <Link to="/guides/banned-dog-breeds-dubai/" className="font-semibold text-[#4F5BD5] hover:underline">banned dog breeds</Link>
                {' '}page and on the{' '}
                <Link to="/guides/uae-pet-import-requirements/" className="font-semibold text-[#4F5BD5] hover:underline">import requirements</Link>
                {' '}guide. Residency rules for restricted breeds are separate from import rules; check them with your community or the authority before you book.
              </p>
            </div>
            <div className="bg-white rounded-[20px] shadow-sm p-6 sm:p-8 sm:col-span-2 lg:col-span-1">
              <Plane className="w-5 h-5 text-[#4F5BD5] mb-4" />
              <h3 className="text-lg font-semibold text-[#2A2A2A] mb-3">What if the flight changes?</h3>
              <p className="text-sm text-[#5A5A5A] leading-relaxed">
                Cargo bookings can move. A booked move is rechecked against the permit window, which is 90 days from issuance, and against the health certificate&apos;s own validity. We do not know about a delay before the airline does. You get WhatsApp updates during business hours on a booked move.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mb-4">Timeline for a dog move to Dubai</h2>
          <p className="text-[#5A5A5A] max-w-3xl leading-relaxed">
            The order is fixed even when the calendar is not. Owners coming from the UK, Europe, India or South Africa usually already have a move month. What changes is whether that origin requires a rabies antibody test, and how long the origin health certificate stays valid. Apply for the permit only after the flight window is known.
          </p>
          <ol className="mt-8 max-w-3xl space-y-6 text-[#5A5A5A]">
            <li>
              <h3 className="text-lg font-semibold text-[#2A2A2A]">1. Breed, then origin</h3>
              <p className="mt-2 leading-relaxed">
                Compare the dog with the MOCCAE ban list before you pay for a crate or a flight. Crosses count when the export certificate says they do. Names are on the{' '}
                <Link to="/guides/banned-dog-breeds-dubai/" className="font-semibold text-[#4F5BD5] hover:underline">banned dog breeds</Link>
                {' '}guide.
              </p>
            </li>
            <li>
              <h3 className="text-lg font-semibold text-[#2A2A2A]">2. Microchip and vaccines with your vet</h3>
              <p className="mt-2 leading-relaxed">
                Your vet implants or scans the microchip and gives the vaccines MOCCAE names for dogs: rabies, distemper, parvovirus, infectious canine hepatitis and leptospirosis. Leptospirosis can be replaced by a lab test when the exporting country does not vaccinate against it. Parasite products and doses stay with that vet. We do not give veterinary advice.
              </p>
            </li>
            <li>
              <h3 className="text-lg font-semibold text-[#2A2A2A]">3. Rabies antibody test, where the origin requires it</h3>
              <p className="mt-2 leading-relaxed">
                Where the origin requires a rabies antibody test, MOCCAE Ministerial Resolution 109/2021 asks for a result of at least 0.5 IU/ml from an approved laboratory. The sample is taken at least 21 days after the first or interrupted rabies vaccination, before export. Confirm the rule on the MOCCAE portal. On the UK export certificate, a first rabies vaccine has a wait of more than 21 days, and the dog must be at least 15 weeks old at export. That UK wait is not a titre window.
              </p>
            </li>
            <li>
              <h3 className="text-lg font-semibold text-[#2A2A2A]">4. Health certificate in its own validity</h3>
              <p className="mt-2 leading-relaxed">
                The origin authority issues the health certificate inside its own validity. It has to be in date on travel day. Your vet books the exam. We do not issue the certificate and we do not publish a day count for it.
              </p>
            </li>
            <li>
              <h3 className="text-lg font-semibold text-[#2A2A2A]">5. MOCCAE import permit after the flight window is known</h3>
              <p className="mt-2 leading-relaxed">
                The MOCCAE import permit is valid 90 days from issuance. Apply after the flight window is known so those 90 days cover arrival. An expired permit cannot be used for the landing. Owners filing it themselves use the{' '}
                <Link to="/guides/moccae-import-permit/" className="font-semibold text-[#4F5BD5] hover:underline">MOCCAE import permit guide</Link>
                .
              </p>
            </li>
            <li>
              <h3 className="text-lg font-semibold text-[#2A2A2A]">6. Crate, cargo, inspection and release</h3>
              <p className="mt-2 leading-relaxed">
                Size an IATA crate so the dog can stand, turn and lie down, then book an airline that has accepted the breed on that date. At Dubai the dog is inspected and released when the documents match. Home delivery is available only when it is booked. See{' '}
                <Link to="/service/pet-relocation-to-dubai/" className="font-semibold text-[#4F5BD5] hover:underline">pet relocation to Dubai</Link>
                {' '}for the inbound handover.
              </p>
            </li>
          </ol>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mb-4">Doing it yourself or booking a managed dog move</h2>
          <p className="text-[#5A5A5A] max-w-3xl leading-relaxed">
            You can bring a dog to Dubai without a coordinator. The{' '}
            <Link to="/guides/import-checklist/" className="font-semibold text-[#4F5BD5] hover:underline">import checklist</Link>
            {' '}is the tick-list, and the{' '}
            <Link to="/guides/moccae-import-permit/" className="font-semibold text-[#4F5BD5] hover:underline">MOCCAE import permit guide</Link>
            {' '}is the application walkthrough. Both are there to read. Neither one assigns a person to complete the portal for you.
          </p>
          <div className="grid lg:grid-cols-2 gap-8 mt-10 max-w-5xl">
            <div className="bg-[#F5F6FD] rounded-[20px] p-6 sm:p-8">
              <h3 className="text-lg font-semibold text-[#2A2A2A] mb-4">What you do on your own</h3>
              <ul className="space-y-3 text-sm text-[#5A5A5A]">
                <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /> Match the breed to the ban list before you pay for a flight.</li>
                <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /> Book your own vet for the microchip, the vaccines and the health certificate.</li>
                <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /> Book the laboratory if a rabies antibody test is required, and confirm the result on the MOCCAE portal.</li>
                <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /> Apply for the import permit yourself and keep it inside the 90 days from issuance.</li>
                <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /> Buy the crate, book cargo with a carrier that has accepted the dog, and attend inspection at DXB or DWC.</li>
              </ul>
              <p className="mt-4 text-sm text-[#5A5A5A] leading-relaxed">
                If the flight moves, you rebook the cargo against the permit and the health certificate yourself.
              </p>
            </div>
            <div className="bg-[#F5F6FD] rounded-[20px] p-6 sm:p-8">
              <h3 className="text-lg font-semibold text-[#2A2A2A] mb-4">What a managed dog move covers</h3>
              <p className="text-sm text-[#5A5A5A] leading-relaxed">
                A managed dog move is coordination: breed and origin eligibility, permit timing against the flight, the IATA crate and cargo booking, sequencing with your own vet, then inspection, release and optional home delivery at DXB or DWC. We do not fly the dog, issue the health certificate, or give veterinary advice. Your vet remains the person who vaccinates and signs. {GOV_FEE_LINE}
              </p>
              <p className="mt-4 text-sm text-[#5A5A5A] leading-relaxed">
                The paid coordination is the{' '}
                <Link to="/service/dog-relocation-dubai/" className="font-semibold text-[#4F5BD5] hover:underline">dog relocation service</Link>
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
          <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mb-4">Crate size for a dog</h2>
          <p className="text-[#5A5A5A] max-w-3xl leading-relaxed">
            Measure the dog standing: nose to the base of the tail, floor to the top of the head or ears, and the widest point of the body. A medium or large dog needs those three measures before the crate is bought. The crate must let the dog stand, turn and lie down. Rigid plastic or wood with a metal door is the usual cargo crate. Wire crates are commonly refused. Bowls should be reachable without opening the door. Exact internal centimetres are an IATA and airline check. See the{' '}
            <Link to="/guides/iata-pet-crate-requirements/" className="font-semibold text-[#4F5BD5] hover:underline">IATA crate guide</Link>
            . We do not publish a crate price.
          </p>
          <div className="grid lg:grid-cols-2 gap-8 mt-10 items-center">
            <ul className="space-y-3 text-sm text-[#5A5A5A]">
              <li className="flex gap-2"><Ruler className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /> Length: the dog can lie with legs extended.</li>
              <li className="flex gap-2"><Ruler className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /> Height: ears do not touch the roof when standing.</li>
              <li className="flex gap-2"><Ruler className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /> Width: the dog can turn.</li>
              <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /> Flat-faced breeds: airline limits are extra. Read <Link to="/guides/snub-nosed-dogs-flying-uae/" className="font-semibold text-[#4F5BD5] hover:underline">snub-nosed dogs flying to the UAE</Link> and still confirm the booking. We will not promise a summer flight.</li>
            </ul>
            <img
              src="/images/dog-crate.jpg"
              alt="Measuring a dog for a travel crate before flying to Dubai"
              width={1200}
              height={800}
              className="w-full h-64 object-cover rounded-[20px]"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mb-4">Airline acceptance is conditional</h2>
          <p className="text-[#5A5A5A] max-w-3xl leading-relaxed">
            Emirates: ordinary pets are not in the cabin, and itineraries ending in Dubai must travel as cargo. British Airways: pets travel in the hold, not the cabin. IAG Cargo says some dangerous dog breeds and snub-nosed dogs may not be accepted. Confirm the product with the carrier. We do not guarantee acceptance. Flight options are on the{' '}
            <Link to="/guides/pet-flight-options-dubai/" className="font-semibold text-[#4F5BD5] hover:underline">pet flight options</Link>
            {' '}hub.
          </p>
          <p className="text-[#5A5A5A] max-w-3xl leading-relaxed mt-4">
            Summer heat limits cargo acceptance for some airlines and breeds. Confirm the date and breed with the carrier before booking. We do not publish a hold temperature.
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mb-4">What a dog quote is made of</h2>
          <p className="text-[#5A5A5A] max-w-3xl leading-relaxed">
            We do not publish a package total. The drivers are origin veterinary work, the crate size, the cargo rate, and whether you want door-to-door delivery. {GOV_FEE_LINE} Read{' '}
            <Link to="/guides/pet-relocation-cost-dubai/" className="font-semibold text-[#4F5BD5] hover:underline">what changes the cost</Link>
            , then check if we can move your dog.
          </p>
          <div className="mt-8 max-w-3xl">
            <p className="text-sm leading-relaxed text-[#5A5A5A] mb-4">{GUIDE_SOFT_GATE}</p>
            <WhatsAppBtn strong label="Check if we can move your dog" message={WA} />
            <ScopeLinks />
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mb-4">Questions about dogs</h2>
          <div className="mt-8 max-w-3xl">
            {DOG_FAQS.map((f) => (
              <FaqItem key={f.q} question={f.q} answer={<p><LinkedText text={f.a} /></p>} />
            ))}
          </div>
        </div>
      </section>

      <RelatedLinks
        heading="Related dog pages"
        intro="The managed dog service, the ban list, and the checklist if you are filing the import yourself."
        links={[
          {
            to: '/service/dog-relocation-dubai/',
            label: 'Dog relocation in Dubai',
            note: 'Paid dog relocation: what a managed dog move includes',
          },
          {
            to: '/',
            label: 'pet relocation Dubai',
            note: 'Managed pet relocation from and to Dubai',
          },
          {
            to: '/guides/banned-dog-breeds-dubai/',
            label: 'Banned and restricted dog breeds',
            note: 'Legal-entry check before you book',
          },
          {
            to: '/guides/import-checklist/',
            label: 'Import documents checklist',
            note: 'Tick-list if you are filing the import yourself',
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
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Ready for a managed dog move?</h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-6">
              Use the import checklist if you are preparing the documents yourself. A managed dog move is quoted after an eligibility check. WhatsApp +971504782999. Email support@dubai-pet-relocation.ae.
            </p>
            <WhatsAppBtn strong label="Check if we can move your dog" message={WA} />
            <p className="mt-4 text-sm leading-relaxed text-white/80 max-w-2xl mx-auto">{GUIDE_SOFT_GATE}</p>
            <ScopeLinks tone="dark" />
            <PaidIncludes tone="dark" compact items={DOG_PAID} className="mx-auto mt-6 max-w-2xl text-left" />
          </div>
        </div>
      </section>
    </div>
  )
}
