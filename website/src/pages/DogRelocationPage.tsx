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
import { getWhatsAppUrl, BASE_URL } from '../lib/seo.ts'
import { waEligibility } from '../lib/conversionCopy.ts'
import Breadcrumb from '../components/Breadcrumb.tsx'
import WhatsAppBtn from '../components/WhatsAppBtn.tsx'
import OfficialSources from '../components/OfficialSources.tsx'
import RelatedLinks from '../components/RelatedLinks.tsx'

const WA = waEligibility({ pet: 'Dog', destination: 'Dubai', need: 'managed move' })

const DOG_FAQS: { q: string; a: string }[] = [
  {
    q: 'Can I bring my dog to live in Dubai?',
    a: 'Yes, when the breed is not on the published ban list and the import file matches. You need a MOCCAE import permit valid 90 days from issuance, the vaccines named for dogs, a health certificate from the origin authority, and an airline product that accepts the dog into Dubai, usually as cargo. Buildings may set their own pet rules after arrival. Checklist: [/guides/uae-pet-import-requirements/](/guides/uae-pet-import-requirements/). Breed names: [/guides/banned-dog-breeds-dubai/](/guides/banned-dog-breeds-dubai/).',
  },
  {
    q: 'How is a dog move different from a cat move?',
    a: 'Dogs have a federal ban list. Cats do not use that list; Bengal and Serval cats have a pedigree condition instead. Dogs need larger rigid crates, and many towers treat a dog crate as a goods-lift booking. Dog vaccines on the MOCCAE page are rabies, distemper, parvovirus, infectious canine hepatitis and leptospirosis. Do not use the cat vaccine list for a dog. Cat preparation: [/cat-relocation-to-dubai/](/cat-relocation-to-dubai/).',
  },
  {
    q: 'How long does dog relocation to Dubai take?',
    a: 'It depends on the vaccine already in the dog and on whether the origin is high-risk. A first rabies vaccine has a wait on the UK export certificate of more than 21 days, and the dog must be at least 15 weeks old at UK export. High-risk origins add a rabies antibody test. The permit itself is valid 90 days from issuance. There is no single 4 to 6 week promise. Route example: [/routes/uk-to-dubai/](/routes/uk-to-dubai/).',
  },
  {
    q: 'Can my dog fly in the cabin to Dubai?',
    a: 'Do not assume a cabin seat. Emirates says animals on itineraries ending in Dubai travel as cargo, and ordinary pets are not in the Emirates cabin. British Airways says pets travel in the hold, not the cabin. An Etihad cabin product is a separate Abu Dhabi booking. Confirm the live product. Modes: [/guides/pet-flight-options-dubai/](/guides/pet-flight-options-dubai/). Etihad: [/guides/etihad-pet-policy/](/guides/etihad-pet-policy/).',
  },
  {
    q: 'What if I am not sure of the breed?',
    a: 'Send the name used by your vet and clear photos before a permit is filed. Shelter labels such as "mix" are not a decision. The MOCCAE page lists banned types, and the UK export certificate also refuses crosses of a similar list. We will not file a permit for a dog that matches that list. Fines are not invented here: the live page says a non-compliant import may be rejected at your expense or confiscated.',
  },
  {
    q: 'Who meets the dog at Dubai airport?',
    a: 'MOCCAE inspects at the entry port and releases a matching file. If you book door-to-door, collection is from cargo after that release, then to the address. If you collect yourself, the same papers still have to match. We do not promise a clearance time or a photo at every step. Arrival notes: [/guides/dubai-pet-arrival-guide/](/guides/dubai-pet-arrival-guide/).',
  },
]

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
        title="Dog Relocation to Dubai | Breed, Crate and Permit"
        description="Dog relocation to Dubai: check the breed ban, size the crate, and follow the MOCCAE permit valid 90 days from issuance. WhatsApp +971504782999."
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
            headline: 'Dog Relocation to Dubai | Breed, Crate and Permit',
            description: 'Dog relocation to Dubai: check the breed ban, size the crate, and follow the MOCCAE permit valid 90 days from issuance.',
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
        title="Bring your dog to Dubai"
        subtitle="Start with the breed, then the crate, then the permit. The legal checklist lives on the import guide. This page is the practical dog preparation."
        updated="Checked 22 September 2026"
        whatsappMessage={WA}
        primaryLabel="Check this dog's move"
        secondary={{ label: 'How it works', to: '/how-it-works/' }}
      />

      <section className="py-20 lg:py-28">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mb-4">
            What to sort out before you book a flight
          </h2>
          <p className="text-base sm:text-lg text-[#5A5A5A] leading-relaxed max-w-3xl">
            A dog move fails the file when the breed is banned, the crate does not fit the dog, or the airline will not accept that shape of head in that season. The{' '}
            <Link to="/service/dog-relocation-dubai/" className="font-semibold text-[#4F5BD5] hover:underline">dog relocation service</Link>
            {' '}is the paid coordination. This page answers the preparation questions first.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <div className="bg-white rounded-[20px] shadow-sm p-6 sm:p-8">
              <PawPrint className="w-5 h-5 text-[#4F5BD5] mb-4" />
              <h3 className="text-lg font-semibold text-[#2A2A2A] mb-3">Will the dog cope with the crate?</h3>
              <p className="text-sm text-[#5A5A5A] leading-relaxed">
                Let the dog sleep and eat in the crate for several days before travel, at home. The crate needs ventilation and enough room to stand, turn and lie down. We do not claim a temperature inside the hold, and we do not offer sedation or calming-drug advice. If the dog is unwell or severely distressed, ask your own vet whether the dog should fly. That is a veterinary decision, not a page instruction.
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
                {' '}guide. A restricted-breed story about muzzles and apartments is not restated here, because that residency rule was not on the import page checked on 22 September 2026.
              </p>
            </div>
            <div className="bg-white rounded-[20px] shadow-sm p-6 sm:p-8 sm:col-span-2 lg:col-span-1">
              <Plane className="w-5 h-5 text-[#4F5BD5] mb-4" />
              <h3 className="text-lg font-semibold text-[#2A2A2A] mb-3">What if the flight changes?</h3>
              <p className="text-sm text-[#5A5A5A] leading-relaxed">
                Cargo bookings can move. A managed file is rebooked against the permit window, which is 90 days from issuance, and against the health certificate's own validity. We do not promise to know about a delay before the airline does. You get WhatsApp updates during business hours on a booked move.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mb-4">How a dog file is put together</h2>
          <ol className="mt-8 max-w-3xl space-y-6 text-[#5A5A5A]">
            <li>
              <h3 className="text-lg font-semibold text-[#2A2A2A]">1. Breed, weight and origin</h3>
              <p className="mt-2 leading-relaxed">Send the breed, weight and country on WhatsApp if you want a managed move. We compare the breed with the published ban list. Origin decides whether a rabies antibody test is required. There is no 15-minute reply promise.</p>
            </li>
            <li>
              <h3 className="text-lg font-semibold text-[#2A2A2A]">2. Your vet, not a drug plan from us</h3>
              <p className="mt-2 leading-relaxed">Your vet implants or scans the microchip and gives the dog vaccines. MOCCAE names rabies, distemper, parvovirus, infectious canine hepatitis and leptospirosis for dogs. Leptospirosis can be replaced by a lab test when the exporting country does not vaccinate against it. Parasite products and doses stay with that vet. The legal sequence is on the import guide.</p>
            </li>
            <li>
              <h3 className="text-lg font-semibold text-[#2A2A2A]">3. Permit and a cargo product</h3>
              <p className="mt-2 leading-relaxed">The MOCCAE import permit is valid for 90 days from issuance. Book the airline only after you know that product accepts this dog. Emirates requires cargo for itineraries ending in Dubai. We confirm crate size and breed limits in writing with the carrier. We do not guarantee acceptance.</p>
            </li>
            <li>
              <h3 className="text-lg font-semibold text-[#2A2A2A]">4. Travel day and release</h3>
              <p className="mt-2 leading-relaxed">The health certificate is issued by the origin authority inside its own validity. At Dubai the animal is inspected and released if the file matches. Delivery to the home is available when that service is booked. See <Link to="/service/pet-relocation-to-dubai/" className="font-semibold text-[#4F5BD5] hover:underline">pet relocation to Dubai</Link>.</p>
            </li>
          </ol>
          <div className="mt-8">
            <WhatsAppBtn label="Check this dog's move" message={WA} />
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mb-4">Crate size for a dog</h2>
          <p className="text-[#5A5A5A] max-w-3xl leading-relaxed">
            Measure the dog standing: nose to the base of the tail, floor to the top of the head or ears, and the widest point of the body. The crate must let the dog stand, turn and lie down. Rigid plastic or wood with a metal door is the usual cargo crate. Wire crates are commonly refused. Bowls should be reachable without opening the door. Exact internal centimetres are an IATA and airline check, not a price list. See the{' '}
            <Link to="/guides/iata-pet-crate-requirements/" className="font-semibold text-[#4F5BD5] hover:underline">IATA crate guide</Link>.
            We do not publish crate prices in AED.
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

      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mb-4">Airline acceptance is conditional</h2>
          <p className="text-[#5A5A5A] max-w-3xl leading-relaxed">
            Emirates: ordinary pets are not in the cabin, and itineraries ending in Dubai must travel as cargo. British Airways: pets travel in the hold, not the cabin. IAG Cargo says some dangerous dog breeds and snub-nosed dogs may not be accepted. None of those pages gave a Dubai hold temperature or a month-by-month embargo we can repeat as fact. Confirm the product. Flight options are on the{' '}
            <Link to="/guides/pet-flight-options-dubai/" className="font-semibold text-[#4F5BD5] hover:underline">pet flight options</Link> hub.
          </p>
          <p className="text-[#5A5A5A] max-w-3xl leading-relaxed mt-4">
            Heat is a real planning problem in the Gulf, but a sentence such as "most airlines refuse all dogs from June to August" was not on the official pages checked on 22 September 2026. Ask the carrier for that date and that breed.
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mb-4">What a dog quote is made of</h2>
          <p className="text-[#5A5A5A] max-w-3xl leading-relaxed">
            We do not publish a package total or a crate price. The drivers are origin veterinary work, the government permit and release fees (listed on the import guide), the crate size, the cargo rate, and whether you want door-to-door delivery. Read{' '}
            <Link to="/guides/pet-relocation-cost-dubai/" className="font-semibold text-[#4F5BD5] hover:underline">pet relocation cost</Link>
            {' '}for the driver list, then ask for a quote on this dog.
          </p>
          <div className="mt-8">
            <WhatsAppBtn label="Ask for a dog quote" message={WA} />
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
        intro="Import rules, the paid dog service, and the cat page if you are moving both."
        path="/dog-relocation-to-dubai/"
      />

      <OfficialSources
        extra={[
          { label: 'MOCCAE: import of pets', href: 'https://moccae.gov.ae/en/services/import-permit-pets' },
          { label: 'Emirates: travelling with animals', href: 'https://www.emirates.com/ae/english/help/faq-topics/baggage-and-lost-property/faq/what-are-the-rules-and-charges-for-travelling-with-animals/' },
        ]}
        checkedLabel="Checked 22 September 2026 against the MOCCAE pet import page and the Emirates animals FAQ. This is not a veterinary certificate."
      />

      <section className="py-20 lg:py-28">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="bg-[#4F5BD5] rounded-3xl p-8 sm:p-12 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Ready for a managed dog move?</h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-8">
              Use the import guide if you are preparing the file yourself. WhatsApp +971504782999 is for eligibility and a quote. Email support@dubai-pet-relocation.ae.
            </p>
            <a
              href={getWhatsAppUrl(WA)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#25D366] text-white rounded-2xl font-semibold hover:bg-[#1ebe57] transition-colors"
            >
              Check this dog&apos;s move
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
