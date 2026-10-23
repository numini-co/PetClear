import { Link } from 'react-router-dom'
import { CheckCircle, MessageCircle } from 'lucide-react'
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
import PaidIncludes from '../components/PaidIncludes.tsx'
import { stripInternalMarkdownLinks } from '../lib/linkedText.ts'
import { BASE_URL, getWhatsAppUrl } from '../lib/seo.ts'
import { FLIGHT_MODE_PATHS } from '../data/flightModes.ts'

const STRONG_WA =
  'inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#0B6B3A] px-6 py-3.5 text-sm font-semibold text-white shadow-lg ring-1 ring-black/10 transition hover:bg-[#095A31] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:w-auto'

const WA =
  'Hello Dubai Pet Relocation. I want a managed-move quote for Emirates cargo. Pet type and breed: Weight: Origin: Destination: Airline: Emirates. Travel date: Door-to-door (yes or no):'

const GATE =
  'Planning it yourself? Use the checklist below. Want us to handle it? WhatsApp is for people booking a managed move.'

const MANAGED = [
  'Emirates SkyCargo booking as manifest cargo',
  'IATA crate sizing and labelling',
  'MOCCAE import permit (valid 90 days from issuance) and vet paperwork',
  'DXB Cargo Village release and home delivery',
  'Quote confirmed on WhatsApp before anything is booked',
] as const

const snippetQuestion = 'Does Emirates allow pets in cargo?'
const snippetAnswer =
  'Emirates accepts dogs and cats as SkyCargo manifest cargo. Itineraries ending in Dubai use that product, not cabin or checked baggage. Emirates published tiers are USD 500, 650 and 800 by pet-plus-carrier size (source: Emirates). Those airline charges are not our quote. Confirm them with Emirates SkyCargo.'

const faqData = [
  {
    q: 'Does Emirates allow pets in cargo?',
    a: 'Emirates moves pets as SkyCargo manifest cargo on eligible routes when the documents and the IATA crate pass acceptance. Cabin carriage into Dubai on Emirates is not the product used for pet relocation. Confirm the live route, breed and seasonal heat rules with the airline before you pay. We coordinate the file. We are not Emirates.',
  },
  {
    q: 'Can I bring my pet on an Emirates flight?',
    a: 'You can move a dog or cat on Emirates when the live-animal product, the crate and the UAE import papers are accepted, typically as cargo rather than as a passenger seat-mate into Dubai. You still need a MOCCAE import permit valid for 90 days from issuance when the pet is entering the UAE. Compare modes on the [pet flight options hub](/guides/pet-flight-options-dubai/). WhatsApp +971504782999.',
  },
  {
    q: 'How much does Emirates pet cargo cost?',
    a: 'Emirates publishes animal-charge tiers by pet-plus-carrier size: USD 500, USD 650 and USD 800 (source: Emirates). Confirm the live figure with Emirates SkyCargo before you budget. Those airline fees are not a freight total and not a Dubai Pet Relocation package price. Coordination is quoted per route and weight after you are ready to book.',
  },
  {
    q: 'How much does it cost to bring a pet on Emirates Airlines?',
    a: 'A dog or cat flying into Dubai with Emirates travels as manifest cargo, not in the cabin. Use the Emirates published tiers in the table above, and confirm the current tier with Emirates SkyCargo. A Dubai Pet Relocation coordination quote is separate and is confirmed on WhatsApp before anything is booked.',
  },
  {
    q: 'How much does it cost to transport a pet on Emirates Airlines?',
    a: 'The airline charge and the relocation quote are different numbers. Emirates published tiers are in the fee table above and they are not our price. Door-to-door coordination, the crate and the last mile are quoted per route and weight. Government fees are confirmed on the official MOCCAE portal.',
  },
  {
    q: 'Emirates pet checked baggage and excess baggage',
    a: 'Emirates checked baggage and excess baggage (AVIH) are a different product from SkyCargo. Itineraries ending in Dubai must travel as cargo. Baggage does not unlock a DXB arrival (source: Emirates). From Dubai, cats and dogs may travel as checked baggage if the total journey is under 17 hours. That outbound product is explained on the [pet as checked baggage](/guides/pet-as-checked-baggage/) guide.',
  },
  {
    q: 'Why do pets arriving in Dubai go as cargo?',
    a: 'Emirates requires all itineraries ending in Dubai to travel as cargo on SkyCargo (source: Emirates). UAE import rules also require manifested cargo, except an Etihad in-cabin arrival into Abu Dhabi. Cabin and accompanied baggage are the wrong products for a DXB arrival.',
  },
  {
    q: 'What are the Emirates animal charges?',
    a: 'Emirates published tiers, not our quote: USD 500 when the pet plus carrier is up to 23 kg and up to 150 cm, USD 650 for 24 to 32 kg and 150 to 300 cm, and USD 800 over 32 kg up to 300 cm (source: Emirates). Over 300 cm travels as cargo, with the rate confirmed per booking. Confirm the live figures with Emirates SkyCargo. Coordination is quoted per route and weight.',
  },
  {
    q: 'How do I book Emirates Pets and SkyCargo?',
    a: 'Emirates asks for the pet travel form at least one week before the flight (source: Emirates). SkyCargo then accepts the animal as manifest cargo under IATA Live Animals Regulations. We can coordinate the file. The carrier accepts the booking.',
  },
  {
    q: 'Does Emirates allow dogs and cats in the cabin?',
    a: 'Emirates does not carry animals in the cabin except falcons on certain Pakistan routings and guide dogs for the blind (source: Emirates). Cabin into the UAE is the Etihad Abu Dhabi product, not an Emirates product into Dubai.',
  },
  {
    q: 'What crate does cargo require?',
    a: 'Cargo requires an IATA-compliant hard crate. Soft carriers are a cabin product, not a SkyCargo product. Sizing and hardware are in the [IATA pet crate requirements](/guides/iata-pet-crate-requirements/).',
  },
  {
    q: 'What happens on arrival at DXB?',
    a: 'The pet is accepted at the cargo terminal, then examined by MOCCAE veterinary staff and released if the file is compliant. There is no routine quarantine for compliant pets. Clearance and the drive home sit with international pet relocation and door-to-door pet relocation when you want them handled. Confirm the arrival release fee on the official MOCCAE portal.',
  },
  {
    q: 'How long is the MOCCAE import permit valid?',
    a: 'The MOCCAE import permit is valid for 90 days from issuance. Book the cargo flight inside that window so the pet arrives while the permit is still in date.',
  },
  {
    q: 'Are you part of Emirates SkyCargo?',
    a: 'We are an independent coordinator. We are not part of Emirates SkyCargo. Airline rules and the fee tiers below are cited from Emirates and SkyCargo. Confirm the current tiers with Emirates SkyCargo before you pay the airline.',
  },
  {
    q: 'Is the USD 500, 650 and 800 table a Dubai Pet Relocation freight quote?',
    a: 'Those figures are Emirates published animal-charge tiers (source: Emirates), not a Dubai Pet Relocation freight quote. Cargo coordination is quoted per route and weight on international pet relocation or door-to-door pet relocation.',
  },
  {
    q: 'How far ahead should I book Emirates cargo through a managed move?',
    a: 'Emirates asks for the pet travel form at least one week before the flight (source: Emirates). A managed move needs that week plus the permit window. The MOCCAE import permit is valid for 90 days from issuance, and the cargo booking has to sit inside it. Send the pet, the route and the target month when you are ready to book.',
  },
  {
    q: 'What do you need from me to quote an Emirates cargo move?',
    a: 'Send the pet type and breed, the weight, the origin, the destination, the airline, the travel date, and whether you want door-to-door. Crate measurements help if you already have them. The quote covers eligibility, permit timing, the SkyCargo booking, the IATA crate, then airport release and delivery. Government fees are confirmed on the official MOCCAE portal. WhatsApp +971504782999 opens the booking for people ready to hire.',
  },
  {
    q: 'Can a snub-nosed dog fly as Emirates cargo?',
    a: 'Snub-nosed and brachycephalic acceptance has to be confirmed with Emirates for the route and the travel date. Do not treat a blog list as permission to book. Physiology background is on [snub-nosed dogs flying to the UAE](/guides/snub-nosed-dogs-flying-uae/).',
  },
]

const linkClass = 'font-semibold text-[#4F5BD5] hover:underline'

export default function EmiratesPetCargoGuide() {
  const canonical = `${BASE_URL}${FLIGHT_MODE_PATHS.cargo}`
  const title = 'Emirates Pet Cargo to Dubai | Rules, Crates & Booking'
  const description =
    'Emirates pet cargo rules, crate fit and SkyCargo booking for dogs and cats flying to Dubai. Get a managed-move quote for Emirates cargo.'

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Guides', item: `${BASE_URL}/guides/` },
      { '@type': 'ListItem', position: 3, name: 'Emirates pet cargo', item: canonical },
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
      <Breadcrumb items={[{ label: 'Guides', path: '/guides/' }, { label: 'Emirates pet cargo' }]} />

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
      </div>

      <Hero
        image="/images/guide-iata-crate.jpg"
        imageAlt="An IATA-approved pet crate of the kind used for Emirates SkyCargo and other manifest cargo bookings"
        eyebrow="Airline guide"
        title="Emirates pet cargo: how to fly your dog or cat to Dubai"
        subtitle="Airline rules, crate fit and booking steps for a dog or cat flying as cargo into Dubai. Ask us to book a managed move when you want the file handled."
        updated="Updated October 2026"
        primaryLabel="Get a managed-move quote for Emirates cargo"
        primaryClassName={STRONG_WA}
        whatsappMessage={WA}
        gateLine={GATE}
        secondary={{ label: 'All six flight modes', to: FLIGHT_MODE_PATHS.hub }}
      />

      <section className="section-padding bg-white">
        <div className="mx-auto max-w-[900px] px-5 sm:px-6 lg:px-8">
          <p className="mb-6 leading-relaxed text-[#5A5A5A]">
            Use the rules, the published fee tiers and the booking steps below when a dog or cat will fly with Emirates into Dubai. If you want the file handled, book a managed move through{' '}
            <Link to="/service/pet-relocation-dubai/" className={linkClass}>
              pet relocation services in Dubai
            </Link>
            .
          </p>
          <SnippetAnswer question={snippetQuestion} answer={snippetAnswer} />
          <h2 className="mb-4 text-[24px] font-bold text-[#2A2A2A] sm:text-[30px]">Why pets must fly into Dubai as cargo</h2>
          <p className="mb-4 leading-relaxed text-[#5A5A5A]">
            Pets entering the UAE travel as manifested cargo under IATA live-animal conditions, not as cabin pets or accompanied checked baggage. The documented exception is an Etihad in-cabin arrival into Abu Dhabi, which does not land at Dubai International. Emirates requires every itinerary ending in Dubai to travel as cargo on SkyCargo (source: Emirates).
          </p>
          <p className="mb-4 leading-relaxed text-[#5A5A5A]">
            If you want us to coordinate the file, open{' '}
            <Link to="/service/international-pet-relocation/" className={linkClass}>
              international pet relocation
            </Link>{' '}
            or door-to-door{' '}
            <Link to={FLIGHT_MODE_PATHS.doorToDoor} className={linkClass}>
              pet relocation in Dubai
            </Link>
            .
          </p>
          <h2 className="mb-4 text-[24px] font-bold text-[#2A2A2A] sm:text-[30px]">Cargo, cabin or checked baggage: what Emirates allows</h2>
          <p className="mb-4 leading-relaxed text-[#5A5A5A]">
            Manifest cargo is a live-animal booking on an air waybill. The crate is accepted at the cargo terminal. At DXB that is typically Cargo Village, not the passenger hall. Emirates SkyCargo publishes an Emirates Pets product under IATA Live Animals Regulations (source: Emirates SkyCargo).
          </p>
          <p className="mb-4 leading-relaxed text-[#5A5A5A]">
            Emirates does not carry dogs or cats in the cabin to or from Dubai, except falcons on certain Pakistan routings and guide dogs for the blind (source: Emirates). Accompanied hold travel is explained on{' '}
            <Link to={FLIGHT_MODE_PATHS.baggage} className={linkClass}>
              pet as checked baggage
            </Link>{' '}
            and is blocked for Emirates itineraries that end in Dubai. Comparing airlines? See{' '}
            <Link to={FLIGHT_MODE_PATHS.hub} className={linkClass}>
              pet flight options from Dubai
            </Link>
            . Crate size and hardware for the cargo booking are in the{' '}
            <Link to="/guides/iata-pet-crate-requirements/" className={linkClass}>
              IATA pet crate requirements
            </Link>
            .
          </p>
          <ContentImage
            src="/assets/w1-w3/iata-crate-hardware-detail-compliance-dubai.jpg"
            alt="Close-up of IATA crate hardware used for manifest pet cargo bookings through Dubai"
            caption="Cargo staff inspect the crate, not the passenger ticket. Hardware and ventilation have to match IATA CR1."
          />
        </div>
      </section>

      <section className="section-padding bg-[#F5F6FD]">
        <div className="mx-auto max-w-[900px] px-5 sm:px-6 lg:px-8">
          <h2 className="mb-4 text-[24px] font-bold text-[#2A2A2A] sm:text-[30px]">Verified Emirates fee tiers (source: Emirates)</h2>
          <p className="mb-4 leading-relaxed text-[#5A5A5A]">
            Emirates published tiers, not our quote; confirm with Emirates SkyCargo. The figures below are airline animal charges cited to Emirates, last verified 6 September 2026. They do not unlock cabin or checked-baggage arrival into DXB. Itineraries ending in Dubai still use manifest cargo. Coordination is quoted per route and weight.
          </p>
          <LastVerified note="Airline charges can change. Recheck the Emirates animals page for your travel month." />
          <div className="mb-6 overflow-x-auto">
            <table className="w-full min-w-[560px] border-collapse text-sm">
              <thead>
                <tr className="bg-[#E9ECFB]">
                  <th className="border border-[#E2E5F6] px-4 py-3 text-left font-semibold text-[#2A2A2A]">Pet plus carrier</th>
                  <th className="border border-[#E2E5F6] px-4 py-3 text-left font-semibold text-[#2A2A2A]">
                    Emirates published tier, not our quote
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="border border-[#E2E5F6] px-4 py-3 text-[#5A5A5A]">Up to 23 kg and up to 150 cm</td>
                  <td className="border border-[#E2E5F6] px-4 py-3 font-semibold text-[#2A2A2A]">USD 500</td>
                </tr>
                <tr className="bg-[#F5F6FD]">
                  <td className="border border-[#E2E5F6] px-4 py-3 text-[#5A5A5A]">24 to 32 kg and 150 to 300 cm</td>
                  <td className="border border-[#E2E5F6] px-4 py-3 font-semibold text-[#2A2A2A]">USD 650</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-[#E2E5F6] px-4 py-3 text-[#5A5A5A]">Over 32 kg, up to 300 cm</td>
                  <td className="border border-[#E2E5F6] px-4 py-3 font-semibold text-[#2A2A2A]">USD 800</td>
                </tr>
                <tr className="bg-[#F5F6FD]">
                  <td className="border border-[#E2E5F6] px-4 py-3 text-[#5A5A5A]">Container over 300 cm</td>
                  <td className="border border-[#E2E5F6] px-4 py-3 text-[#5A5A5A]">Travels as cargo (rate confirmed per booking)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <ul className="space-y-2">
            {[
              'A maximum of two adult animals of comparable size, each up to 14 kg, may share one container. Animals over 14 kg travel separately (source: Emirates).',
              'The pet travel form is due at least one week before the flight. Minimum pet age is 4 months (source: Emirates).',
              'A valid import permit and a government-endorsed health certificate are required before acceptance (source: Emirates).',
              'Birds, except some falcons, are not accepted for transit via Dubai as checked baggage or cargo between 1 May and 30 September (source: Emirates).',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-[#5A5A5A]">
                <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-[#4F5BD5]" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <h3 className="mb-3 mt-6 text-lg font-bold text-[#2A2A2A]">Checklist if you are arranging it yourself</h3>
          <ul className="space-y-2">
            {[
              'An itinerary ending in Dubai is booked as SkyCargo manifest cargo, not as cabin or checked baggage.',
              'The pet travel form is submitted at least one week before the flight, and the pet is at least 4 months old.',
              'The crate is an IATA hard crate, sized and labelled for the animal.',
              'The MOCCAE import permit is valid for 90 days from issuance, and the flight sits inside that window.',
              'The import permit and the government-endorsed health certificate are ready before acceptance.',
              'The airline tier is confirmed with Emirates SkyCargo. The published tiers are not our quote.',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-[#5A5A5A]">
                <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-[#4F5BD5]" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm leading-relaxed text-[#5A5A5A]">
            One competitor publishes starting packages of about AED 4,000 to 15,000; that is their pricing, not our quote. Summer heat notes are on the{' '}
            <Link to="/guides/pet-travel-summer-dubai/" className={linkClass}>
              summer travel guide
            </Link>
            . Snub-nosed and brachycephalic acceptance has to be confirmed with Emirates for the travel date. See{' '}
            <Link to="/guides/snub-nosed-dogs-flying-uae/" className={linkClass}>
              snub-nosed dogs flying to the UAE
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="mx-auto max-w-[900px] px-5 sm:px-6 lg:px-8">
          <h2 className="mb-4 text-[24px] font-bold text-[#2A2A2A] sm:text-[30px]">How to book Emirates pet cargo</h2>
          <div className="mb-6 space-y-4">
            {[
              {
                title: 'Confirm the route will accept the animal',
                text: 'Aircraft type, season and breed matter. We check SkyCargo, or another pet-experienced carrier, before anyone pays a passenger ticket.',
              },
              {
                title: 'Line up the 90-day permit window',
                text: 'The MOCCAE import permit is valid for 90 days from issuance. Cargo space and the permit have to overlap. See the MOCCAE import permit guide.',
              },
              {
                title: 'Submit the airline form and documents',
                text: 'Emirates wants the pet travel form at least a week out, and destination paperwork before acceptance. We assemble the pouch. The airline accepts it.',
              },
              {
                title: 'Crate check at the cargo terminal',
                text: 'IATA CR1 sizing, door hardware, labels and water bowls. Detail is on the IATA crate guide.',
              },
              {
                title: 'Travel day and arrival clearance',
                text: 'Unaccompanied cargo is handed to cargo staff. On arrival, MOCCAE inspects and releases compliant pets. We coordinate the last mile when that is part of the booking.',
              },
            ].map((s, i) => (
              <div key={s.title} className="flex gap-4">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#4F5BD5] text-sm font-bold text-white">
                  {i + 1}
                </div>
                <div>
                  <h3 className="mb-1 font-bold text-[#2A2A2A]">{s.title}</h3>
                  <p className="leading-relaxed text-[#5A5A5A]">{s.text}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mb-3 leading-relaxed text-[#5A5A5A]">Want us to book it? These services cover the cargo file:</p>
          <ul className="mb-6 space-y-2">
            <li>
              <Link to="/service/international-pet-relocation/" className={linkClass}>
                International pet relocation
              </Link>
              : cargo booking and multi-country corridor coordination
            </li>
            <li>
              <Link to={FLIGHT_MODE_PATHS.doorToDoor} className={linkClass}>
                Door-to-door pet relocation in Dubai
              </Link>
              : we pick the mode and hold the documents, the crate and the last mile
            </li>
            <li>
              <Link to="/service/shared-pet-charter/" className={linkClass}>
                Shared pet charter
              </Link>
              : empty-leg or group lift only when scheduled manifest cargo will not accept the animal
            </li>
          </ul>
          <a href={getWhatsAppUrl(WA)} target="_blank" rel="noopener noreferrer" className={STRONG_WA}>
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            Get a managed-move quote for Emirates cargo
          </a>
          <p className="mb-3 mt-8 leading-relaxed text-[#5A5A5A]">Related import pages:</p>
          <ul className="space-y-2">
            <li>
              <Link to="/guides/uae-pet-import-requirements/" className={linkClass}>
                UAE pet import requirements for dogs and cats
              </Link>
              : document checklist
            </li>
            <li>
              <Link to="/guides/moccae-import-permit/" className={linkClass}>
                MOCCAE import permit
              </Link>
              : 90-day validity from issuance
            </li>
            <li>
              <Link to="/service/pet-import-dubai/" className={linkClass}>
                Pet import service for Dubai
              </Link>
              : arrival filing when you want it handled
            </li>
            <li>
              <Link to="/service/pet-relocation-to-dubai/" className={linkClass}>
                Pet relocation to Dubai
              </Link>
              : inbound sequence
            </li>
          </ul>
        </div>
      </section>

      <FlightModeCards
        heading="Other ways to fly your pet to the UAE"
        intro="Cargo is the product Emirates sells for a pet flying into Dubai. Cabin, baggage, a private jet and a shared charter are the other air modes. Door-to-door and international relocation are how we hold the documents and the last mile around the air waybill."
        exclude="cargo"
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
            Get a managed-move quote for Emirates cargo
          </h2>
          <p className="mb-6 text-center text-base leading-relaxed text-white">
            Send the pet, the route and the month. We quote a managed move on{' '}
            <Link to="/service/international-pet-relocation/" className="underline">
              international pet relocation
            </Link>{' '}
            or{' '}
            <Link to={FLIGHT_MODE_PATHS.doorToDoor} className="underline">
              pet relocation services in Dubai
            </Link>
            . Email{' '}
            <a href="mailto:support@dubai-pet-relocation.ae" className="underline">
              support@dubai-pet-relocation.ae
            </a>{' '}
            or message +971504782999.
          </p>
          <PaidIncludes
            tone="dark"
            compact
            title="What a managed move covers"
            items={[...MANAGED]}
            className="mx-auto mb-6 max-w-2xl text-left"
          />
          <div className="text-center">
            <a href={getWhatsAppUrl(WA)} target="_blank" rel="noopener noreferrer" className={STRONG_WA}>
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              Get a managed-move quote for Emirates cargo
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
