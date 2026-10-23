import { Link } from 'react-router-dom'
import { AlertTriangle, CheckCircle, MessageCircle } from 'lucide-react'
import SEOHead from '../components/SEOHead.tsx'
import Hero from '../components/Hero.tsx'
import Breadcrumb from '../components/Breadcrumb.tsx'
import FAQItem from '../components/FAQItem.tsx'
import ContentImage from '../components/ContentImage.tsx'
import FlightModeCards from '../components/FlightModeCards.tsx'
import OfficialSources from '../components/OfficialSources.tsx'
import LastVerified from '../components/LastVerified.tsx'
import SnippetAnswer from '../components/SnippetAnswer.tsx'
import LinkedText from '../components/LinkedText.tsx'
import { stripInternalMarkdownLinks } from '../lib/linkedText.ts'
import { BASE_URL, getWhatsAppUrl } from '../lib/seo.ts'
import { FLIGHT_MODE_PATHS } from '../data/flightModes.ts'
import PaidIncludes from '../components/PaidIncludes.tsx'
import LinkPlanSlot from '../components/LinkPlanSlot.tsx'

const ETIHAD_PETS_URL = 'https://www.etihad.com/en-ae/plan/travel-companion/travelling-with-pets'

const STRONG_WA =
  'inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#0B6B3A] px-6 py-3.5 text-sm font-semibold text-white shadow-lg ring-1 ring-black/10 transition hover:bg-[#095A31] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:w-auto'

const WA =
  'Hello Dubai Pet Relocation. Please check if you can manage my Etihad move. Pet type and breed: Weight: Origin: Destination: Airline: Etihad. Travel date: Door-to-door (yes or no):'

const GATE =
  'Planning it yourself? Use the checklist below. Want us to handle it? WhatsApp is for people booking a managed move.'

const MANAGED = [
  'Cabin or cargo eligibility check for your pet and route',
  'Etihad booking form and IATA crate sizing',
  'MOCCAE import permit (valid 90 days from issuance) and health paperwork coordination',
  'AUH arrival, release and the drive to Dubai',
  'Quote confirmed on WhatsApp before anything is booked',
] as const

const snippetQuestion = 'Can I bring my pet in the cabin on Etihad?'
const snippetAnswer =
  'Etihad is the only UAE airline that takes small dogs and cats in the cabin. Pet plus carrier must be 8 kg or less, and the flight lands at Abu Dhabi. Etihad sets the cabin pet fee per route; confirm the current fee with Etihad when you book. Other pets entering the UAE travel as manifest cargo.'

const faqData = [
  {
    q: 'Are pets allowed in Etihad Airways?',
    a: 'Etihad offers pet products on eligible routes, including cabin options into Abu Dhabi when the size and the policy fit, plus cargo pathways. Rules change by route, breed and season, so confirm them on etihad.com before you book. Cabin into Abu Dhabi is not the same product as Emirates cargo into Dubai. Compare modes on the [pet flight options hub](/guides/pet-flight-options-dubai/).',
  },
  {
    q: 'How much does Etihad charge for a pet in a cabin?',
    a: 'Etihad sets the cabin pet fee per route; confirm the current fee with Etihad when you book. Dubai Pet Relocation does not publish an Etihad cabin price and does not sell the ticket. If the pet is entering the UAE, budget separately for the import file and confirm government fees on the official MOCCAE portal. WhatsApp +971504782999 is for a managed move once you are ready to book.',
  },
  {
    q: 'Can I buy my pet a seat on a plane?',
    a: 'Mainstream Gulf carriers do not sell a paid passenger seat for a dog or cat. Pets travel in the cabin, under the seat, when that product is allowed, as checked baggage when the airline offers it, or as manifest cargo. The Etihad cabin product is still a pet-in-cabin policy, not a ticketed seat. Confirm the live rule on the airline site.',
  },
  {
    q: 'How much does it cost to bring a cat in the cabin on an Etihad flight?',
    a: 'A cat in the cabin follows the same Etihad weight and carrier limits as a small dog: pet plus carrier up to 8 kg, and an under-seat carrier maximum of 40 × 40 × 22 cm (source: Etihad). Etihad sets the cabin pet fee per route; confirm the current fee with Etihad when you book. We are not Etihad and we do not sell airline tickets.',
  },
  {
    q: 'Etihad pet in cabin business class',
    a: 'Etihad’s published Business cabin path has required an extra seat plus a pet fee. Confirm the live combination when you book. The extra-seat carrier size is 50 × 43 × 50 cm (source: Etihad). We coordinate eligibility and the Abu Dhabi arrival. We do not sell the seat.',
  },
  {
    q: 'Can pets fly in the cabin into Dubai International (DXB)?',
    a: 'Dogs and cats do not fly in the cabin into Dubai on Emirates, flydubai or Air Arabia. Falcons are the published exception on those carriers. Cabin into the UAE is an Etihad product that arrives at Abu Dhabi (AUH). Pets entering Dubai itself travel as manifest cargo. We can still coordinate an Abu Dhabi cabin arrival and a ground transfer to a Dubai address.',
  },
  {
    q: 'What does Etihad charge for a cabin pet?',
    a: 'Etihad sets the cabin pet fee per route; confirm the current fee with Etihad when you book. That charge is Etihad’s, not a Dubai Pet Relocation price. Where Business cabin is offered, the published path has been an extra seat plus a pet fee. Confirm the combination on Etihad’s travelling-with-pets page before you pay.',
  },
  {
    q: 'What are the size and weight limits?',
    a: 'Pet plus carrier must weigh up to 8 kg. The under-seat carrier maximum is 40 × 40 × 22 cm. If an extra seat is purchased, the published larger limit is 50 × 43 × 50 cm (source: Etihad). Pets must be at least 16 weeks old. The passenger with the pet must be 18 or older.',
  },
  {
    q: 'How early do I need to book?',
    a: 'Submit the pet booking form at least 7 days before the flight and email the required documents at least 72 hours before departure (source: Etihad). Cabin slots are limited, so do not treat this as a same-week product.',
  },
  {
    q: 'What documents are needed to fly into Abu Dhabi with a pet on Etihad?',
    a: 'Etihad lists a pet release permit, a completed UAE health certificate, and an Abu Dhabi Customs Bill of Entry for arrivals into Abu Dhabi (source: Etihad). A valid MOCCAE import permit is still required. It is valid for 90 days from issuance. Confirm government fees on the official MOCCAE portal.',
  },
  {
    q: 'Do you book the Etihad cabin ticket for me?',
    a: 'We coordinate eligibility, the booking form, document timing, Abu Dhabi arrival steps and the transfer to Dubai when that is the home address. We are not Etihad and we do not sell airline tickets as a carrier. The quote is confirmed on WhatsApp before anything is booked.',
  },
  {
    q: 'What if my pet is over 8 kg?',
    a: 'Cabin is closed once the pet plus carrier is over 8 kg. Use manifest cargo, or a door-to-door relocation if you want the file handled. A private jet or a shared charter is only relevant when scheduled cargo will not accept the animal, and those bookings are quote-only.',
  },
  {
    q: 'Is cabin the same as door-to-door relocation?',
    a: 'Cabin rules and a door-to-door relocation are different bookings. Door-to-door pet relocation is the coordination of documents, crate, flight mode and the last mile on one thread. The cabin limits here are the airline product for a small pet into Abu Dhabi.',
  },
  {
    q: 'What should I send if I want a managed Etihad move?',
    a: 'Send the pet type and breed, the weight, the origin, the destination, the airline, the travel date, and whether you want door-to-door. We confirm the quote on WhatsApp before anything is booked. WhatsApp +971504782999. Email support@dubai-pet-relocation.ae if you prefer mail.',
  },
]

const linkClass = 'font-semibold text-[#4F5BD5] hover:underline'

export default function EtihadPetPolicyGuide() {
  const canonical = `${BASE_URL}${FLIGHT_MODE_PATHS.cabin}`
  const title = 'Etihad Pet Policy 2026 | Cabin, Cargo & UAE Import Rules'
  const description =
    'Etihad pet policy for cabin and cargo: carrier limits, Abu Dhabi arrival and the UAE import file. Check if we can manage your Etihad move.'

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
    dateModified: '2026-10-23',
    mainEntityOfPage: { '@type': 'WebPage', '@id': canonical },
  }
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqData.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: stripInternalMarkdownLinks(f.a) },
    })),
  }

  return (
    <div>
      <SEOHead
        meta={{
          title,
          description,
          canonical,
          ogType: 'article',
        }}
        schemas={[breadcrumbSchema, articleSchema, faqSchema]}
      />
      <Breadcrumb items={[{ label: 'Guides', path: '/guides/' }, { label: 'Etihad pet policy' }]} />

      <div className="bg-white">
        <p className="mx-auto max-w-[900px] px-5 py-6 text-base leading-relaxed text-[#5A5A5A] sm:px-6 lg:px-8">
          Moving your pet to Dubai or away from it? Compare{' '}
          <Link to="/service/pet-relocation-to-dubai/" className={linkClass}>
            moving a pet to Dubai
          </Link>
          ,{' '}
          <Link to="/service/pet-relocation-from-dubai/" className={linkClass}>
            moving a pet from Dubai
          </Link>{' '}
          or{' '}
          <Link to="/services/" className={linkClass}>
            all services
          </Link>{' '}
          first.
        </p>
        <div className="mx-auto max-w-[900px] px-5 pb-6">
          <LinkPlanSlot path="/guides/etihad-pet-policy/" slot="after-answer" />
        </div>
      </div>

      <Hero
        image="/assets/w1-w3/british-shorthair-cat-carrier-cat-relocation-dubai.jpg"
        imageAlt="A cat in a soft travel carrier, the kind of under-seat carrier used for Etihad in-cabin pet travel"
        eyebrow="Airline guide"
        title="Etihad pet policy: cabin, cargo and flying your pet to the UAE"
        subtitle="Small dogs and cats can travel in the Etihad cabin into Abu Dhabi when the weight and the carrier fit. Etihad sets the cabin fee. We coordinate the file. Etihad operates the flight."
        updated="Updated October 2026"
        primaryLabel="Check if we can manage your Etihad move"
        primaryClassName={STRONG_WA}
        whatsappMessage={WA}
        gateLine={GATE}
        secondary={{ label: 'All six flight modes', to: FLIGHT_MODE_PATHS.hub }}
      />

      <section className="section-padding bg-white">
        <div className="mx-auto max-w-[900px] px-5 sm:px-6 lg:px-8">
          <SnippetAnswer question={snippetQuestion} answer={snippetAnswer} />
          <h2 className="mb-4 text-[24px] font-bold text-[#2A2A2A] sm:text-[30px]">Cabin, hold or cargo</h2>
          <p className="mb-4 leading-relaxed text-[#5A5A5A]">
            The Etihad pet policy covers three different ways a dog or cat can fly, and only one of them is a cabin seat into the UAE. Cabin means a small pet in a carrier under the seat, on an eligible Etihad flight that lands at Zayed International Airport (AUH). Hold, or checked baggage, is an accompanied product some airlines sell on the same passenger ticket. Manifest cargo is a live-animal booking on an air waybill, accepted at a cargo terminal rather than in the cabin.
          </p>
          <p className="mb-4 leading-relaxed text-[#5A5A5A]">
            If the pet plus carrier is over 8 kg, or the carrier misses the published size, cabin is the wrong product. Do not force it. Checked baggage has to be confirmed on the live airline page for that route. It is not a substitute for the UAE import rule below.
          </p>
          <div className="mb-8 rounded-[20px] border border-[#E8D48B] bg-[#FFF8E7] p-6">
            <h3 className="mb-2 flex items-center gap-2 text-lg font-bold text-[#2A2A2A]">
              <AlertTriangle className="h-5 w-5 shrink-0 text-[#C89F5A]" aria-hidden="true" />
              UAE import rule: manifest cargo
            </h3>
            <p className="mb-3 text-sm leading-relaxed text-[#5A5A5A]">
              Pets entering the UAE travel as manifested cargo under IATA live-animal conditions, not as cabin pets or accompanied checked baggage. The documented exception is an Etihad in-cabin arrival into Abu Dhabi. That exception is not a cabin product into Dubai International (DXB).
            </p>
            <p className="text-sm leading-relaxed text-[#5A5A5A]">
              Compare every mode on the{' '}
              <Link to={FLIGHT_MODE_PATHS.hub} className={linkClass}>
                pet flight options hub
              </Link>
              , or go straight to{' '}
              <Link to={FLIGHT_MODE_PATHS.cargo} className={linkClass}>
                Emirates pet cargo
              </Link>
              .
            </p>
            <LastVerified note="Confirm the current MOCCAE import conditions on the official portal before you book." />
          </div>
          <h2 className="mb-4 text-[24px] font-bold text-[#2A2A2A] sm:text-[30px]">Who can fly in the cabin</h2>
          <p className="mb-4 leading-relaxed text-[#5A5A5A]">
            Etihad is the only UAE airline that accepts small dogs and cats in the cabin (source: Etihad). Pets must be at least 16 weeks old and weigh up to 8 kg including the carrier. The accompanying passenger must be 18 or older. Emirates does not carry dogs or cats in the cabin except falcons and guide dogs (source: Emirates). flydubai does not allow cabin animals except falcons (source: flydubai). Air Arabia likewise does not carry cats or dogs. Falcons are the exception there. Size fit is not a breed waiver. Confirm snub-nosed and brachycephalic notes on the live Etihad page. Physiology sits on{' '}
            <Link to="/guides/snub-nosed-dogs-flying-uae/" className={linkClass}>
              snub-nosed dogs flying to the UAE
            </Link>
            .
          </p>
          <p className="mb-4 leading-relaxed text-[#5A5A5A]">
            Cabin is not a shortcut around UAE import paperwork. A MOCCAE import permit is still required and is valid for 90 days from issuance. Confirm government fees on the official MOCCAE portal. Also read the{' '}
            <Link to="/guides/moccae-import-permit/" className={linkClass}>
              MOCCAE import permit guide
            </Link>{' '}
            and{' '}
            <Link to="/guides/uae-pet-import-requirements/" className={linkClass}>
              UAE pet import requirements
            </Link>
            .
          </p>
          <ContentImage
            src="/assets/w1-w3/pet-airline-options-cabin-baggage-cargo-diagram.webp"
            alt="Cabin versus baggage versus cargo decision diagram for flying a pet to the UAE"
            caption="Cabin is the exception. Most UAE arrivals still use manifest cargo."
            width={1100}
            height={733}
          />
        </div>
      </section>

      <section className="section-padding bg-[#F5F6FD]">
        <div className="mx-auto max-w-[900px] px-5 sm:px-6 lg:px-8">
          <h2 className="mb-4 text-[24px] font-bold text-[#2A2A2A] sm:text-[30px]">Verified Etihad cabin rules</h2>
          <p className="mb-4 text-sm leading-relaxed text-[#5A5A5A]">
            Eligibility figures below are from Etihad’s{' '}
            <a href={ETIHAD_PETS_URL} target="_blank" rel="noopener noreferrer" className={linkClass}>
              travelling-with-pets
            </a>{' '}
            page. Etihad sets the cabin pet fee per route; confirm the current fee with Etihad when you book. We are not affiliated with Etihad, and we do not publish an Etihad cabin price.
          </p>
          <LastVerified note="Airline carrier limits can change. Recheck Etihad before you submit the form." />
          <div className="mb-6 overflow-x-auto">
            <table className="w-full min-w-[560px] border-collapse text-sm">
              <thead>
                <tr className="bg-[#E9ECFB]">
                  <th className="border border-[#E2E5F6] px-4 py-3 text-left font-semibold text-[#2A2A2A]">Rule</th>
                  <th className="border border-[#E2E5F6] px-4 py-3 text-left font-semibold text-[#2A2A2A]">Published figure (source: Etihad unless noted)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Cabin pet fee', 'Etihad sets the cabin pet fee per route; confirm the current fee with Etihad when you book.'],
                  ['Business cabin pet fee', 'Extra seat plus a pet fee where Business cabin is offered. Confirm the current combination with Etihad when you book.'],
                  ['Weight', 'Pet plus carrier up to 8 kg'],
                  ['Minimum age', '16 weeks'],
                  ['Passenger', '18 or older'],
                  ['Under-seat carrier', 'Maximum 40 × 40 × 22 cm'],
                  ['Extra-seat carrier', '50 × 43 × 50 cm if an extra seat is purchased'],
                  ['Ventilation', 'At least 16% of the container ventilated on at least three sides, and escape-proof and leak-proof'],
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
          <h3 className="mb-3 text-lg font-bold text-[#2A2A2A]">Checklist if you are arranging it yourself</h3>
          <ul className="space-y-2">
            {[
              'Pet plus carrier is 8 kg or under, and the pet is at least 16 weeks old.',
              'Under-seat carrier is within 40 × 40 × 22 cm, or 50 × 43 × 50 cm if an extra seat is purchased.',
              'The passenger travelling with the pet is 18 or older.',
              'Your own passenger ticket is booked first. The pet form then goes to Etihad at least 7 days before the flight.',
              'Documents reach Etihad at least 72 hours before departure.',
              'The MOCCAE import permit is still in date (valid 90 days from issuance) if the pet is entering the UAE.',
              'The cabin fee is confirmed with Etihad when you book. Government fees are confirmed on the official MOCCAE portal.',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-[#5A5A5A]">
                <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-[#4F5BD5]" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm leading-relaxed text-[#5A5A5A]">
            Falcons have a separate cabin programme on Etihad-operated flights. That programme is not the dog-and-cat product above.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="mx-auto max-w-[900px] px-5 sm:px-6 lg:px-8">
          <h2 className="mb-4 text-[24px] font-bold text-[#2A2A2A] sm:text-[30px]">How an Etihad cabin request is sequenced</h2>
          <p className="mb-4 leading-relaxed text-[#5A5A5A]">
            Etihad’s published timing is a sequence, not a same-week add-on. Book the passenger ticket yourself first, because cabin inventory is limited and the pet slot is requested after the seat exists (source: Etihad). The pet booking form then has to reach Etihad at least 7 days before the flight, and the document pack at least 72 hours before departure.
          </p>
          <p className="mb-4 leading-relaxed text-[#5A5A5A]">
            On the travel day the pet and the passenger check in together. The flight lands at Abu Dhabi, where Etihad asks for a pet release permit, a completed UAE health certificate and an Abu Dhabi Customs Bill of Entry (source: Etihad). If the pet is entering the UAE, the MOCCAE import permit still has to be valid on arrival. It is valid for 90 days from issuance. Confirm government fees on the official MOCCAE portal. When the home address is in Dubai, plan the road transfer after release. Cabin does not deliver the pet to a Dubai door.
          </p>
          <h2 className="mb-4 text-[24px] font-bold text-[#2A2A2A] sm:text-[30px]">
            Booked an Etihad cabin seat? You still need the UAE import file
          </h2>
          <p className="mb-4 leading-relaxed text-[#5A5A5A]">
            A confirmed cabin seat into Abu Dhabi does not replace the import permit. The MOCCAE import permit is valid for 90 days from issuance, and the health certificate still has to match the arrival. When you also need the crate, a cargo booking, or the permit handled with the flight, use the services below or ask us to manage the move.
          </p>
          <ul className="mb-6 space-y-2">
            <li>
              <Link to="/service/pet-import-dubai/" className={linkClass}>
                Pet import to Dubai
              </Link>
            </li>
            <li>
              <Link to="/service/moccae-pet-permit/" className={linkClass}>
                MOCCAE permit assistance
              </Link>
            </li>
          </ul>
          <a href={getWhatsAppUrl(WA)} target="_blank" rel="noopener noreferrer" className={STRONG_WA}>
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            Check if we can manage your Etihad move
          </a>
        </div>
      </section>

      <section className="section-padding bg-[#F5F6FD]">
        <div className="mx-auto max-w-[900px] px-5 sm:px-6 lg:px-8">
          <h2 className="mb-4 text-[24px] font-bold text-[#2A2A2A] sm:text-[30px]">AUH arrival and the drive to Dubai</h2>
          <p className="mb-4 leading-relaxed text-[#5A5A5A]">
            In-cabin Etihad arrivals land at Zayed International Airport (AUH), not at Dubai International. Etihad requires a pet release permit, a completed UAE health certificate and an Abu Dhabi Customs Bill of Entry for Abu Dhabi arrivals (source: Etihad). Community notes sit on the{' '}
            <Link to="/cities/abu-dhabi/" className={linkClass}>
              Abu Dhabi pet relocation page
            </Link>
            .
          </p>
          <p className="mb-4 leading-relaxed text-[#5A5A5A]">
            If the home address is in Dubai, the cabin booking does not end at the jet bridge. The pet still has to clear Abu Dhabi and then travel by road. We coordinate the AUH release and a ground transfer into the city. Ground detail sits on{' '}
            <Link to="/service/pet-transport-dubai/" className={linkClass}>
              local pet transport and pet taxi
            </Link>
            . If cabin is not eligible, use{' '}
            <Link to={FLIGHT_MODE_PATHS.cargo} className={linkClass}>
              Emirates pet cargo
            </Link>{' '}
            or{' '}
            <Link to={FLIGHT_MODE_PATHS.doorToDoor} className={linkClass}>
              pet relocation services in Dubai
            </Link>
            .
          </p>
          <p className="leading-relaxed text-[#5A5A5A]">
            We coordinate. We do not operate Etihad or the vehicle. Ask for an eligibility check on the form timing and the Abu Dhabi to Dubai handover. The quote is confirmed on WhatsApp before anything is booked.
          </p>
        </div>
      </section>

      <FlightModeCards
        heading="Cabin, hold or cargo: other ways to fly your pet to the UAE"
        intro="Cabin is one way to fly. Compare hold baggage, cargo, a private jet or a shared charter if the Etihad cabin limits do not fit the pet."
        exclude="cabin"
      />

      <section className="section-padding bg-white">
        <div className="mx-auto max-w-[820px] px-5 sm:px-6 lg:px-8">
          <h2 className="mb-6 text-center text-[24px] font-bold text-[#2A2A2A] sm:text-[30px]">Frequently asked questions</h2>
          <div className="space-y-3">
            {faqData.map((f) => (
              <FAQItem key={f.q} question={f.q} answer={<LinkedText text={f.a} />} />
            ))}
          </div>
        </div>
      </section>

      <OfficialSources />

      <section className="section-padding bg-[#4F5BD5] max-sm:pb-40!">
        <div className="mx-auto max-w-[800px] px-5 sm:px-6 lg:px-8">
          <h2 className="mb-4 text-center text-[24px] font-bold text-white sm:text-[30px]">
            Check if we can manage your Etihad move
          </h2>
          <p className="mb-6 text-center text-base leading-relaxed text-white">
            Send the pet, the route and the travel date. We confirm the quote on WhatsApp before anything is booked. Email{' '}
            <a href="mailto:support@dubai-pet-relocation.ae" className="underline">
              support@dubai-pet-relocation.ae
            </a>{' '}
            if you prefer mail, or message +971504782999.
          </p>
          <PaidIncludes
            tone="dark"
            compact
            title="What a managed move covers"
            className="mx-auto mb-6 max-w-2xl text-left"
            items={MANAGED}
          />
          <div className="text-center">
            <a href={getWhatsAppUrl(WA)} target="_blank" rel="noopener noreferrer" className={STRONG_WA}>
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              Check if we can manage your Etihad move
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
