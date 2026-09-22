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
import { getWhatsAppUrl, BASE_URL } from '../lib/seo.ts'
import { waEligibility } from '../lib/conversionCopy.ts'
import Breadcrumb from '../components/Breadcrumb.tsx'
import WhatsAppBtn from '../components/WhatsAppBtn.tsx'
import OfficialSources from '../components/OfficialSources.tsx'
import RelatedLinks from '../components/RelatedLinks.tsx'

const WA = waEligibility({ pet: 'Cat', destination: 'Dubai', need: 'managed move' })

const CAT_FAQS: { q: string; a: string }[] = [
  {
    q: 'Can I bring my cat to Dubai?',
    a: 'Yes, when the papers match and an airline accepts the cat. Cats use the same MOCCAE import permit as dogs: valid 90 days from issuance, plus a permanent microchip, rabies and the cat vaccines, and a health certificate. Cats are not on the dog ban list. Bengal and Serval cats need a fifth-generation pedigree certificate. Rules: [/guides/uae-pet-import-requirements/](/guides/uae-pet-import-requirements/). WhatsApp +971504782999.',
  },
  {
    q: 'How is a cat move different from a dog move?',
    a: 'The crate is smaller, the vaccine list is different, and the breed problem is a pedigree rule for Bengal and Serval cats rather than the dog ban list. Cats often hide, refuse food, or panic at a carrier they have never seen. Preparation is carrier practice at home, not a medicine plan copied from dogs. Dog page: [/dog-relocation-to-dubai/](/dog-relocation-to-dubai/).',
  },
  {
    q: 'Can my cat fly in the cabin to Dubai?',
    a: 'Not on the Emirates product into Dubai. That airline says itineraries ending in Dubai travel as cargo, and ordinary pets are not in the cabin. British Airways also carries pets in the hold, not the cabin. An Etihad cabin seat, where offered, is an Abu Dhabi product to confirm live: [/guides/etihad-pet-policy/](/guides/etihad-pet-policy/). We do not promise that cargo is calmer than a cabin.',
  },
  {
    q: 'Should I sedate my cat for the flight?',
    a: 'This page does not recommend a drug, a dose, or a spray. Many airlines refuse sedated animals. Ask your own vet, and get the airline\'s written rule, before anyone gives a medicine. Practical preparation is a carrier the cat already uses, a familiar cloth if the airline allows it, and water the carrier instructions allow. No feeding timetable is given here.',
  },
  {
    q: 'When should I start?',
    a: 'Start when you know the move is real. If rabies vaccination is already valid and the origin is low-risk, the short clocks are the 90-day permit, parasite treatment in the 14 days before shipping, and the origin health certificate. A high-risk origin adds the antibody test described on the import guide. We do not publish a 6 to 8 week promise or a 15-minute reply.',
  },
  {
    q: 'My cat is old or has a medical condition. Can they fly?',
    a: 'Age alone is not a rule on the MOCCAE page. Fitness to fly is your vet\'s decision and the airline\'s acceptance. We will not say a cat is safe to fly from this page. If the vet says no, the move waits.',
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

export default function CatRelocationPage() {
  return (
    <div className="bg-[#F5F6FD]">
      <SEOHead
        canonical={`${BASE_URL}/cat-relocation-to-dubai/`}
        title="Cat Relocation to Dubai | Carrier, Papers and Permit"
        description="Cat relocation to Dubai: carrier fit, Bengal and Serval pedigree, and the MOCCAE permit valid 90 days from issuance. No sedation advice. WhatsApp +971504782999."
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
            headline: 'Cat Relocation to Dubai | Carrier, Papers and Permit',
            description: 'Cat relocation to Dubai: carrier fit, Bengal and Serval pedigree, and the MOCCAE permit valid 90 days from issuance.',
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
        title="Bring your cat to Dubai"
        subtitle="Cats are not small dogs. The practical work is the carrier, the cat vaccines, and a pedigree if the cat is a Bengal or a Serval. The permit rules sit on the import guide."
        updated="Checked 22 September 2026"
        whatsappMessage={WA}
        primaryLabel="Check this cat's move"
        secondary={{ label: 'How it works', to: '/how-it-works/' }}
      />

      <section className="py-20 lg:py-28">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mb-4">
            What cat owners need that dog owners do not
          </h2>
          <p className="text-base sm:text-lg text-[#5A5A5A] leading-relaxed max-w-3xl">
            The paid file is{' '}
            <Link to="/service/cat-relocation-dubai/" className="font-semibold text-[#4F5BD5] hover:underline">cat relocation in Dubai</Link>.
            This page stays on preparation. Dog breed bans, dog crate series and dog vaccines are on the{' '}
            <Link to="/dog-relocation-to-dubai/" className="font-semibold text-[#4F5BD5] hover:underline">dog page</Link>
            {' '}and are not repeated as cat instructions.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <div className="bg-white rounded-[20px] shadow-sm p-6 sm:p-8">
              <PawPrint className="w-5 h-5 text-[#4F5BD5] mb-4" />
              <h3 className="text-lg font-semibold text-[#2A2A2A] mb-3">The carrier has to be familiar</h3>
              <p className="text-sm text-[#5A5A5A] leading-relaxed">
                Leave the carrier out at home with the door open. Feed the cat beside it, then inside it, over several days. A familiar cloth is useful if the airline allows soft items. The cat must be able to stand, turn and lie down. A carrier that is only just large enough to squeeze into is not a fit.
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
              <h3 className="text-lg font-semibold text-[#2A2A2A] mb-3">No sedation plan on this page</h3>
              <p className="text-sm text-[#5A5A5A] leading-relaxed">
                Do not sedate a cat because a dog article suggested a calming aid. We do not name medicines, pheromone products, or doses. If a vet and the airline both put permission in writing, that is their instruction, not ours. Airline refusal of sedated animals is common enough that you must ask before travel day.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mb-4">Papers that are specific to cats</h2>
          <ul className="max-w-3xl space-y-4 text-[#5A5A5A]">
            <li className="flex gap-3"><CheckCircle className="w-5 h-5 text-[#4F5BD5] shrink-0 mt-0.5" /> MOCCAE import permit, valid 90 days from issuance. Same permit window as a dog. It does not make the rest of the file identical.</li>
            <li className="flex gap-3"><CheckCircle className="w-5 h-5 text-[#4F5BD5] shrink-0 mt-0.5" /> Cat vaccines named on the MOCCAE page: rabies, feline panleukopenia, feline rhinotracheitis and feline calicivirus. Feline leukaemia was not on that required list when checked on 22 September 2026.</li>
            <li className="flex gap-3"><CheckCircle className="w-5 h-5 text-[#4F5BD5] shrink-0 mt-0.5" /> Bengal and Serval cats: a pedigree certificate to the fifth generation. Other domestic cats are not given that extra line on the page we checked. Savannah cats were not named there, so this page does not call them banned.</li>
            <li className="flex gap-3"><CheckCircle className="w-5 h-5 text-[#4F5BD5] shrink-0 mt-0.5" /> Parasite treatment in the 14 days before shipment, recorded by your vet. The UK export certificate names products that include permethrin. Permethrin products sold for dogs can be dangerous for cats. Your vet must choose a cat-safe product. We do not give a dose.</li>
            <li className="flex gap-3"><CheckCircle className="w-5 h-5 text-[#4F5BD5] shrink-0 mt-0.5" /> Permanent microchip number matching the health certificate. Full sequence: <Link to="/guides/uae-pet-import-requirements/" className="font-semibold text-[#4F5BD5] hover:underline">UAE pet import requirements</Link>.</li>
          </ul>
          <div className="mt-8">
            <WhatsAppBtn label="Check this cat's move" message={WA} />
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mb-4">Airline product for a cat</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-[20px] shadow-sm p-6">
              <Plane className="w-5 h-5 text-[#4F5BD5] mb-3" />
              <h3 className="font-semibold text-[#2A2A2A] mb-2">Into Dubai</h3>
              <p className="text-sm text-[#5A5A5A] leading-relaxed">
                Emirates requires cargo for itineraries ending in Dubai. The pet form asks for at least one week&apos;s notice and says animals travel only if they are older than four months. That is an airline condition, separate from the government age rules on the import guide. Flat-faced cats, including many Persians, can be refused even when import rules allow the cat. Confirm the booking. We do not state a November-to-April window as an Emirates rule, because that calendar was not on the FAQ checked on 22 September 2026.
              </p>
            </div>
            <div className="bg-white rounded-[20px] shadow-sm p-6">
              <Plane className="w-5 h-5 text-[#4F5BD5] mb-3" />
              <h3 className="font-semibold text-[#2A2A2A] mb-2">Not a Dubai cabin seat</h3>
              <p className="text-sm text-[#5A5A5A] leading-relaxed">
                British Airways carries pets in the hold. IAG Cargo says some snub-nosed cats may not be accepted. Etihad&apos;s cabin product, if you are considering it, is explained on the{' '}
                <Link to="/guides/etihad-pet-policy/" className="font-semibold text-[#4F5BD5] hover:underline">Etihad pet policy</Link>
                {' '}page and must be rechecked. This page does not repeat weights, carrier centimetres or fares from that airline. A road transfer from Abu Dhabi is a separate booking, not a published minute count.
              </p>
            </div>
          </div>
          <p className="text-sm text-[#5A5A5A] mt-6 max-w-3xl">
            The snub-nosed guide on this site is written for dogs. It does not set cat rules. Use it only as a reminder that flat faces are an airline question, then confirm the cat&apos;s own booking.
          </p>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mb-4">Cost, without a made-up table</h2>
          <p className="text-[#5A5A5A] max-w-3xl leading-relaxed">
            A smaller crate can mean a lower freight rate. It does not create a published AED band. Government permit and release fees are on the{' '}
            <Link to="/guides/uae-pet-import-requirements/" className="font-semibold text-[#4F5BD5] hover:underline">import requirements</Link>
            {' '}page. Cargo, the carrier, UK or origin vet fees, and coordination are quoted for this cat. See{' '}
            <Link to="/guides/pet-relocation-cost-dubai/" className="font-semibold text-[#4F5BD5] hover:underline">what drives cost</Link>.
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-28">
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
        intro="Import rules, the paid cat service, and the dog page if you are moving both."
        path="/cat-relocation-to-dubai/"
      />

      <OfficialSources
        extra={[
          { label: 'MOCCAE: import of pets', href: 'https://moccae.gov.ae/en/services/import-permit-pets' },
          { label: 'Emirates: travelling with animals', href: 'https://www.emirates.com/ae/english/help/faq-topics/baggage-and-lost-property/faq/what-are-the-rules-and-charges-for-travelling-with-animals/' },
        ]}
        checkedLabel="Checked 22 September 2026 against the MOCCAE pet import page and the Emirates animals FAQ. This is not a veterinary certificate."
      />

      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="bg-[#4F5BD5] rounded-3xl p-8 sm:p-12 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Ready for a managed cat move?</h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-8">
              Prepare from the guide if you are doing the papers yourself. WhatsApp +971504782999 is for a paid eligibility check. Email support@dubai-pet-relocation.ae.
            </p>
            <a
              href={getWhatsAppUrl(WA)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#25D366] text-white rounded-2xl font-semibold hover:bg-[#1ebe57] transition-colors"
            >
              Check this cat&apos;s move
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
