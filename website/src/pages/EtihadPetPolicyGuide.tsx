import { Link } from 'react-router-dom'
import { CheckCircle, MessageCircle } from 'lucide-react'
import SEOHead from '../components/SEOHead.tsx'
import Hero from '../components/Hero.tsx'
import Breadcrumb from '../components/Breadcrumb.tsx'
import FAQItem from '../components/FAQItem.tsx'
import ContentImage from '../components/ContentImage.tsx'
import FlightModeCards from '../components/FlightModeCards.tsx'
import UaeCargoRuleCallout from '../components/UaeCargoRuleCallout.tsx'
import OfficialSources from '../components/OfficialSources.tsx'
import LastVerified from '../components/LastVerified.tsx'
import { BASE_URL, getWhatsAppUrl } from '../lib/seo.ts'
import { FLIGHT_MODE_PATHS } from '../data/flightModes.ts'

const ETIHAD_PETS_URL = 'https://www.etihad.com/en-ae/plan/travel-companion/travelling-with-pets'

const WA =
  'Hi Dubai Pet Relocation! I want to check Etihad in-cabin eligibility for my pet and coordinate AUH arrival plus transfer to Dubai if needed.'

const faqData = [
  {
    q: 'Can pets fly in the cabin into Dubai International (DXB)?',
    a: 'Not on Emirates, flydubai or Air Arabia for dogs and cats (falcons are the published exception on those carriers). Cabin into the UAE is an Etihad product that arrives at Abu Dhabi (AUH). Pets entering Dubai itself travel as manifest cargo. We can still coordinate an AUH cabin arrival and a ground transfer to a Dubai address.',
  },
  {
    q: 'What does Etihad charge for a cabin pet?',
    a: 'From USD 399 per flight in Economy (source: Etihad). In Business you must buy an extra seat plus USD 399. Confirm the live amount on Etihad’s travelling-with-pets page before you pay.',
  },
  {
    q: 'What are the size and weight limits?',
    a: 'Pet plus carrier must weigh up to 8 kg. The under-seat carrier maximum is 40 × 40 × 22 cm. If an extra seat is purchased the published larger limit is 50 × 43 × 50 cm (source: Etihad). Pets must be at least 16 weeks old. The owner must be 18 or older.',
  },
  {
    q: 'How early do I need to book?',
    a: 'Submit the pet booking form at least 7 days before the flight and email the required documents at least 72 hours before departure (source: Etihad). Cabin slots are limited; do not treat this as a same-week product.',
  },
  {
    q: 'What documents are needed to fly into Abu Dhabi with a pet on Etihad?',
    a: 'Etihad lists a pet release permit, a completed UAE health certificate, and an Abu Dhabi Customs Bill of Entry for arrivals into Abu Dhabi (source: Etihad). A valid MOCCAE import permit is still required — it is valid 30 days from issuance, not 90.',
  },
  {
    q: 'Do you book the Etihad cabin ticket for me?',
    a: 'We coordinate eligibility, the booking form, document timing, AUH arrival steps and the transfer to Dubai when that is the home address. We are not Etihad and we do not sell airline tickets as a carrier.',
  },
  {
    q: 'What if my pet is over 8 kg?',
    a: 'Cabin is closed. Open the manifest cargo guide or the door-to-door service. A private jet or shared charter is only relevant when scheduled cargo also will not work — those pages are quote-only.',
  },
  {
    q: 'Is this the same as door-to-door relocation?',
    a: 'No. This page owns Etihad cabin rules. Door-to-door pet relocation is the umbrella orchestration when you want documents, crate, flight mode and last mile on one thread.',
  },
]

export default function EtihadPetPolicyGuide() {
  const canonical = `${BASE_URL}${FLIGHT_MODE_PATHS.cabin}`
  const title = 'Etihad Pets in Cabin 2026 — Policy, Fees & AUH Arrival'
  const description =
    'Etihad is the UAE in-cabin option for small dogs and cats: from USD 399 Economy, ≤8 kg including carrier, 40×40×22 cm, book ≥7 days out. AUH arrival and Dubai transfer explained.'

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Guides', item: `${BASE_URL}/guides/` },
      { '@type': 'ListItem', position: 3, name: 'Etihad pet policy', item: canonical },
    ],
  }
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    author: { '@type': 'Organization', name: 'Dubai Pet Relocation', url: BASE_URL },
    dateModified: '2026-09-04',
    mainEntityOfPage: { '@type': 'WebPage', '@id': canonical },
  }
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqData.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }

  return (
    <div>
      <SEOHead
        meta={{
          title,
          description,
          keywords:
            'Etihad pet policy, Etihad pets in cabin, Etihad pet fee, can pets fly in cabin to UAE, in cabin pet Abu Dhabi',
          canonical,
          ogType: 'article',
        }}
        schemas={[breadcrumbSchema, articleSchema, faqSchema]}
      />
      <Breadcrumb items={[{ label: 'Guides', path: '/guides/' }, { label: 'Etihad pet policy' }]} />

      <Hero
        image="/assets/w1-w3/british-shorthair-cat-carrier-cat-relocation-dubai.jpg"
        imageAlt="A cat in a soft travel carrier, the kind of under-seat carrier used for Etihad in-cabin pet travel"
        eyebrow="Airline guide"
        title="Etihad Pets in Cabin — The Only UAE In-Cabin Option"
        subtitle="Small dogs and cats, one published fee, booked early — arriving at Abu Dhabi, not Dubai International. We coordinate the file; Etihad operates the flight."
        updated="Updated September 2026"
        primaryLabel="Check cabin eligibility"
        whatsappMessage={WA}
        secondary={{ label: 'All six flight modes', to: FLIGHT_MODE_PATHS.hub }}
      />

      <section className="section-padding bg-white">
        <div className="mx-auto max-w-[900px] px-5 sm:px-6 lg:px-8">
          <UaeCargoRuleCallout extra="This page is the exception path: Etihad in-cabin into Abu Dhabi. It is not a cabin product into DXB." />
          <h2 className="mb-4 text-[24px] font-bold text-[#2A2A2A] sm:text-[30px]">Who can fly in the cabin</h2>
          <p className="mb-4 leading-relaxed text-[#5A5A5A]">
            Etihad is the only UAE airline that accepts small dogs and cats in the cabin (source: Etihad). Pets must be at least 16 weeks old and weigh up to 8 kg including the carrier. The accompanying passenger must be 18 or older. Emirates does not carry dogs or cats in the cabin except falcons and guide dogs (source: Emirates). flydubai does not allow cabin animals except falcons (source: flydubai). Air Arabia likewise does not carry cats or dogs — falcons only.
          </p>
          <p className="mb-4 leading-relaxed text-[#5A5A5A]">
            Cabin is not a shortcut around UAE import paperwork. A MOCCAE import permit is still required and is valid for 30 days from issuance. Pair this guide with{' '}
            <Link to="/guides/moccae-import-permit/" className="font-semibold text-[#4F5BD5] hover:underline">
              the MOCCAE import permit guide
            </Link>{' '}
            and{' '}
            <Link to="/guides/uae-pet-import-requirements/" className="font-semibold text-[#4F5BD5] hover:underline">
              UAE pet import requirements
            </Link>
            .
          </p>
          <ContentImage
            src="/assets/w1-w3/pet-airline-options-cabin-baggage-cargo-diagram.png"
            alt="Cabin versus baggage versus cargo decision diagram for flying a pet to the UAE"
            caption="Cabin is the exception. Most UAE arrivals still use manifest cargo."
          />
        </div>
      </section>

      <section className="section-padding bg-[#F5F6FD]">
        <div className="mx-auto max-w-[900px] px-5 sm:px-6 lg:px-8">
          <h2 className="mb-4 text-[24px] font-bold text-[#2A2A2A] sm:text-[30px]">Verified Etihad cabin rules</h2>
          <p className="mb-4 text-sm leading-relaxed text-[#5A5A5A]">
            Eligibility figures below are from Etihad’s{' '}
            <a href={ETIHAD_PETS_URL} target="_blank" rel="noopener noreferrer" className="font-semibold text-[#4F5BD5] hover:underline">
              travelling-with-pets
            </a>{' '}
            page. Cabin fees change — confirm the live amount at booking. We are not affiliated with Etihad.
          </p>
          <LastVerified note="Airline fees and carrier limits can change. Recheck Etihad before you submit the form." />
          <div className="mb-6 overflow-x-auto">
            <table className="w-full min-w-[560px] border-collapse text-sm">
              <thead>
                <tr className="bg-[#E9ECFB]">
                  <th className="border border-[#E2E5F6] px-4 py-3 text-left font-semibold text-[#2A2A2A]">Rule</th>
                  <th className="border border-[#E2E5F6] px-4 py-3 text-left font-semibold text-[#2A2A2A]">Published figure / status (source: Etihad unless noted)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Cabin pet fee', 'From USD 399 per flight in Economy (source: Etihad). Confirm live before you pay.'],
                  ['Business cabin pet fee', 'Extra seat plus USD 399 (source: Etihad)'],
                  ['Weight', 'Pet + carrier up to 8 kg'],
                  ['Minimum age', '16 weeks'],
                  ['Under-seat carrier', 'Maximum 40 × 40 × 22 cm'],
                  ['Extra-seat carrier', '50 × 43 × 50 cm if an extra seat is purchased'],
                  ['Ventilation', 'At least 16% of the container ventilated on at least three sides; escape- and leak-proof'],
                  ['Booking form', 'At least 7 days before the flight'],
                  ['Documents to Etihad', 'At least 72 hours before departure'],
                ].map(([rule, value], i) => (
                  <tr key={rule} className={i % 2 ? 'bg-[#F5F6FD]' : 'bg-white'}>
                    <td className="border border-[#E2E5F6] px-4 py-3 font-semibold text-[#2A2A2A]">{rule}</td>
                    <td className="border border-[#E2E5F6] px-4 py-3 text-[#5A5A5A]">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <ul className="space-y-2">
            {[
              'Book your own passenger ticket first, then request the pet slot — cabin inventory is limited.',
              'Falcons have a separate cabin programme on Etihad-operated flights; that is not this dog-and-cat product.',
              'If the pet or carrier misses the limit, use manifest cargo instead of forcing cabin.',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-[#5A5A5A]">
                <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-[#4F5BD5]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="mx-auto max-w-[900px] px-5 sm:px-6 lg:px-8">
          <h2 className="mb-4 text-[24px] font-bold text-[#2A2A2A] sm:text-[30px]">AUH arrival and the transfer to Dubai</h2>
          <p className="mb-4 leading-relaxed text-[#5A5A5A]">
            In-cabin Etihad arrivals land at Zayed International Airport (AUH), not DXB. Etihad requires a pet release permit, a completed UAE health certificate and an Abu Dhabi Customs Bill of Entry for Abu Dhabi arrivals (source: Etihad). Community-level notes live on the{' '}
            <Link to="/cities/abu-dhabi/" className="font-semibold text-[#4F5BD5] hover:underline">
              Abu Dhabi pet relocation page
            </Link>
            .
          </p>
          <p className="mb-4 leading-relaxed text-[#5A5A5A]">
            If the home address is in Dubai, cabin does not end at the jet bridge. We coordinate the AUH release and a climate-controlled ground transfer into the city. Ground product detail sits on{' '}
            <Link to="/service/pet-transport-dubai/" className="font-semibold text-[#4F5BD5] hover:underline">
              local pet transport and pet taxi
            </Link>
            . If cabin is not eligible, use{' '}
            <Link to={FLIGHT_MODE_PATHS.cargo} className="font-semibold text-[#4F5BD5] hover:underline">
              Emirates pet cargo / manifest cargo
            </Link>{' '}
            or the{' '}
            <Link to={FLIGHT_MODE_PATHS.doorToDoor} className="font-semibold text-[#4F5BD5] hover:underline">
              door-to-door relocation service
            </Link>
            .
          </p>
          <p className="leading-relaxed text-[#5A5A5A]">
            We coordinate. We do not operate Etihad, MICCO or the vehicle. Message us when you want the eligibility check, the form timing and the AUH-to-Dubai handover held on one WhatsApp thread.
          </p>
        </div>
      </section>

      <FlightModeCards
        heading="Sibling modes and the door-to-door umbrella"
        intro="Cabin is one product. Compare baggage, cargo, jet and charter, or hand the whole file to door-to-door coordination."
        exclude="cabin"
      />

      <section className="section-padding bg-white">
        <div className="mx-auto max-w-[820px] px-5 sm:px-6 lg:px-8">
          <h2 className="mb-6 text-center text-[24px] font-bold text-[#2A2A2A] sm:text-[30px]">Frequently asked questions</h2>
          <div className="space-y-3">
            {faqData.map((f) => (
              <FAQItem key={f.q} question={f.q} answer={f.a} />
            ))}
          </div>
        </div>
      </section>

      <OfficialSources />

      <section className="section-padding bg-[#4F5BD5]">
        <div className="mx-auto max-w-[800px] px-5 text-center sm:px-6 lg:px-8">
          <h2 className="mb-4 text-[24px] font-bold text-white sm:text-[30px]">We coordinate the Etihad cabin file</h2>
          <p className="mb-8 text-base leading-relaxed text-white/80">
            Eligibility, booking-form timing, AUH release steps and the Dubai transfer — quoted on WhatsApp. Email{' '}
            <a href="mailto:support@dubai-pet-relocation.ae" className="underline">
              support@dubai-pet-relocation.ae
            </a>{' '}
            if you prefer mail.
          </p>
          <a
            href={getWhatsAppUrl(WA)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#25D366] px-7 py-4 text-sm font-semibold text-white hover:bg-[#1DA851]"
          >
            <MessageCircle className="h-4 w-4" /> Check cabin eligibility
          </a>
        </div>
      </section>
    </div>
  )
}
