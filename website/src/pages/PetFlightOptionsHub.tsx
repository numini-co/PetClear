import { Link } from 'react-router-dom'
import { AlertTriangle, MessageCircle } from 'lucide-react'
import SEOHead from '../components/SEOHead.tsx'
import Hero from '../components/Hero.tsx'
import Breadcrumb from '../components/Breadcrumb.tsx'
import FAQItem from '../components/FAQItem.tsx'
import ContentImage from '../components/ContentImage.tsx'
import FlightModeCards from '../components/FlightModeCards.tsx'
import OfficialSources from '../components/OfficialSources.tsx'
import LastVerified from '../components/LastVerified.tsx'
import { BASE_URL, getWhatsAppUrl } from '../lib/seo.ts'
import { FLIGHT_MODE_PATHS, UAE_MANIFEST_CARGO_RULE } from '../data/flightModes.ts'

const WA =
  'Hi Dubai Pet Relocation! I need help choosing how my pet should fly to or from Dubai. Can you recommend a mode and quote the coordination?'

const faqData = [
  {
    q: 'What is the default way a pet enters the UAE?',
    a: 'Manifest cargo. Pets enter the UAE as manifested live-animal cargo, not as cabin pets or accompanied checked baggage. The documented exception is Etihad in-cabin arrivals into Abu Dhabi. See the Etihad pets-in-cabin guide and the Emirates pet cargo guide.',
  },
  {
    q: 'Can my dog or cat fly in the cabin into Dubai International?',
    a: 'No. Emirates does not carry dogs or cats in the cabin (falcons and guide dogs are the published exceptions). flydubai and Air Arabia are falcons-only in the cabin (source: flydubai; source: Air Arabia). Cabin into the UAE for dogs and cats is an Etihad product that arrives at Abu Dhabi (AUH). We then arrange the ground transfer to Dubai if that is the home address. Cabin-policy depth lives on the Etihad guide — this hub does not republish that fee grid.',
  },
  {
    q: 'When is checked baggage allowed?',
    a: 'Only when the airline and the destination both allow accompanied hold travel. For Emirates, itineraries ending in Dubai must go as SkyCargo. From Dubai, dogs and cats may travel as checked baggage if the total journey is under 17 hours (source: Emirates). UAE arrivals still follow the manifest-cargo import rule unless the Etihad AUH cabin exception applies. Eligibility depth lives on the checked-baggage guide.',
  },
  {
    q: 'Do you publish private-jet or shared-charter prices?',
    a: 'No. Aircraft, routing and handling vary too widely. Those two commercial offer pages are quote-only — message us on WhatsApp. We do not publish jet or charter fee tables.',
  },
  {
    q: 'How long is a MOCCAE import permit valid?',
    a: '30 days from issuance. The pet must enter the UAE inside that window. Older “90-day permit” wording is wrong.',
  },
  {
    q: 'Which page should I open if I just want you to handle everything?',
    a: 'Door-to-door pet relocation in Dubai. That is the umbrella service: we choose the flight mode, then coordinate documents, crate, booking and the last mile.',
  },
  {
    q: 'Are you affiliated with Emirates or Etihad?',
    a: 'No. We are an independent coordination service. Airline figures on the child guides are cited from the carrier’s published pages. We do not operate the aircraft.',
  },
  {
    q: 'Where do verified airline fees live?',
    a: 'On the child guides, not on this chooser hub. Etihad cabin-fee depth — including the expired 13 Apr–31 May 2026 USD 399 promo and the secondary USD 1,500 estimate — lives on the Etihad pets-in-cabin guide. Emirates USD 500 / 650 / 800 animal-charge tiers live on the Emirates pet cargo guide. Jet, shared charter and door-to-door coordination stay Get a Quote.',
  },
]

export default function PetFlightOptionsHub() {
  const canonical = `${BASE_URL}${FLIGHT_MODE_PATHS.hub}`
  const title = 'Pet Flight Options from Dubai | Cabin, Cargo, Jet & Charter'
  const description =
    'Chooser hub: compare six pet flight modes to or from Dubai — cabin, checked baggage, manifest cargo, private jet, shared charter, and door-to-door. Decision table and UAE cargo rule only; airline fee grids live on the child guides.'

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Guides', item: `${BASE_URL}/guides/` },
      { '@type': 'ListItem', position: 3, name: 'Pet flight options', item: canonical },
    ],
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
            'pet flight options Dubai, fly pet to or from Dubai, cabin vs cargo vs charter UAE, pet travel modes Dubai, how should my pet fly Dubai',
          canonical,
          ogType: 'article',
        }}
        schemas={[breadcrumbSchema, faqSchema]}
      />
      <Breadcrumb items={[{ label: 'Guides', path: '/guides/' }, { label: 'Pet flight options' }]} />

      <Hero
        image="/images/import-hero.jpg"
        imageAlt="A dog and cat beside travel documents, representing the choice of how a pet flies to or from Dubai"
        eyebrow="Flight options hub"
        title="Six Ways a Pet Can Fly to or from Dubai"
        subtitle="Chooser hub only — decision table, mode cards and a UAE cargo callout. Airline policy tables and commercial jet or charter copy live on the child URLs."
        updated="Updated September 2026"
        primaryLabel="Ask which mode fits"
        whatsappMessage={WA}
        secondary={{ label: 'Door-to-door relocation', to: FLIGHT_MODE_PATHS.doorToDoor }}
      />

      <section className="section-padding bg-white">
        <div className="mx-auto max-w-[900px] px-5 sm:px-6 lg:px-8">
          <p className="mb-4 leading-relaxed text-[#5A5A5A]">
            This page is the navigational chooser. It does not own Etihad cabin-fee tables, Emirates animal-charge tiers, or the “pet relocation Dubai” money head. Those live on the child guides and on{' '}
            <Link to={FLIGHT_MODE_PATHS.doorToDoor} className="font-semibold text-[#4F5BD5] hover:underline">
              door-to-door pet relocation in Dubai
            </Link>
            . Air Arabia cabin is falcons-only (source: Air Arabia) — not a dog or cat product. Open a child page when you already know the mode; message us when you want us to choose and coordinate.
          </p>
          <ContentImage
            src="/assets/w-flight-modes/pet-airline-options-cabin-baggage-cargo-diagram.png"
            alt="Diagram comparing cabin, checked-baggage and cargo options for flying a pet to or from Dubai"
            caption="Cabin, hold baggage and cargo are different products. UAE arrivals almost always use manifest cargo."
          />
          <div className="rounded-[20px] border border-[#E8D48B] bg-[#FFF8E7] p-6">
            <h2 className="mb-2 flex items-center gap-2 text-xl font-bold text-[#2A2A2A]">
              <AlertTriangle className="h-5 w-5 shrink-0 text-[#C89F5A]" />
              UAE cargo-rule callout
            </h2>
            <p className="text-sm leading-relaxed text-[#5A5A5A]">{UAE_MANIFEST_CARGO_RULE}</p>
            <LastVerified note="Confirm the current MOCCAE import conditions on the official portal before you book." />
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#F5F6FD]">
        <div className="mx-auto max-w-[1100px] px-5 sm:px-6 lg:px-8">
          <h2 className="mb-3 text-[24px] font-bold text-[#2A2A2A] sm:text-[30px]">Decision table</h2>
          <p className="mb-6 max-w-3xl text-base leading-relaxed text-[#5A5A5A]">
            Use this to pick a child page. This table is a chooser, not an airline policy grid — no Etihad fee rows and no Emirates 500 / 650 / 800 reprint. Jet, charter and door-to-door stay Get a Quote.
          </p>
          <div className="-mx-5 overflow-x-auto px-5 sm:mx-0 sm:px-0">
            <table className="w-full min-w-[720px] border-collapse text-sm">
              <thead>
                <tr className="bg-[#E9ECFB]">
                  <th className="border border-[#E2E5F6] px-4 py-3 text-left font-semibold text-[#2A2A2A]">Mode</th>
                  <th className="border border-[#E2E5F6] px-4 py-3 text-left font-semibold text-[#2A2A2A]">Fits when</th>
                  <th className="border border-[#E2E5F6] px-4 py-3 text-left font-semibold text-[#2A2A2A]">UAE arrival</th>
                  <th className="border border-[#E2E5F6] px-4 py-3 text-left font-semibold text-[#2A2A2A]">Open</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="border border-[#E2E5F6] px-4 py-3 font-semibold text-[#2A2A2A]">Pet in cabin</td>
                  <td className="border border-[#E2E5F6] px-4 py-3 text-[#5A5A5A]">
                    Small dog or cat on Etihad only. Air Arabia, flydubai and Emirates cabin = falcons (or guide dogs), not pets.
                  </td>
                  <td className="border border-[#E2E5F6] px-4 py-3 text-[#5A5A5A]">AUH only (Etihad exception)</td>
                  <td className="border border-[#E2E5F6] px-4 py-3">
                    <Link to={FLIGHT_MODE_PATHS.cabin} className="font-semibold text-[#4F5BD5] hover:underline">
                      Etihad cabin guide
                    </Link>
                  </td>
                </tr>
                <tr className="bg-[#F5F6FD]">
                  <td className="border border-[#E2E5F6] px-4 py-3 font-semibold text-[#2A2A2A]">Checked / accompanied baggage</td>
                  <td className="border border-[#E2E5F6] px-4 py-3 text-[#5A5A5A]">
                    Owner on the same ticket; airline allows AVIH; journey rules met
                  </td>
                  <td className="border border-[#E2E5F6] px-4 py-3 text-[#5A5A5A]">Not for itineraries ending in Dubai — into Dubai often must be cargo</td>
                  <td className="border border-[#E2E5F6] px-4 py-3">
                    <Link to={FLIGHT_MODE_PATHS.baggage} className="font-semibold text-[#4F5BD5] hover:underline">
                      Checked-baggage guide
                    </Link>
                  </td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-[#E2E5F6] px-4 py-3 font-semibold text-[#2A2A2A]">Manifest air cargo</td>
                  <td className="border border-[#E2E5F6] px-4 py-3 text-[#5A5A5A]">
                    Most inbound dogs and cats; unaccompanied or owner on a different flight
                  </td>
                  <td className="border border-[#E2E5F6] px-4 py-3 text-[#5A5A5A]">Required for DXB-ending itineraries</td>
                  <td className="border border-[#E2E5F6] px-4 py-3">
                    <Link to={FLIGHT_MODE_PATHS.cargo} className="font-semibold text-[#4F5BD5] hover:underline">
                      Emirates / cargo guide
                    </Link>
                  </td>
                </tr>
                <tr className="bg-[#F5F6FD]">
                  <td className="border border-[#E2E5F6] px-4 py-3 font-semibold text-[#2A2A2A]">Private jet</td>
                  <td className="border border-[#E2E5F6] px-4 py-3 text-[#5A5A5A]">
                    Scheduled aircraft will not accept the pet, or the calendar will not wait
                  </td>
                  <td className="border border-[#E2E5F6] px-4 py-3 text-[#5A5A5A]">Coordinated per flight plan</td>
                  <td className="border border-[#E2E5F6] px-4 py-3">
                    <Link to={FLIGHT_MODE_PATHS.jet} className="font-semibold text-[#4F5BD5] hover:underline">
                      Private jet service
                    </Link>
                  </td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-[#E2E5F6] px-4 py-3 font-semibold text-[#2A2A2A]">Shared / group charter</td>
                  <td className="border border-[#E2E5F6] px-4 py-3 text-[#5A5A5A]">
                    A dedicated lift shared with other pets — less isolation than a full jet, more control than a belly hold
                  </td>
                  <td className="border border-[#E2E5F6] px-4 py-3 text-[#5A5A5A]">Coordinated per lift</td>
                  <td className="border border-[#E2E5F6] px-4 py-3">
                    <Link to={FLIGHT_MODE_PATHS.charter} className="font-semibold text-[#4F5BD5] hover:underline">
                      Shared charter service
                    </Link>
                  </td>
                </tr>
                <tr className="bg-[#F5F6FD]">
                  <td className="border border-[#E2E5F6] px-4 py-3 font-semibold text-[#2A2A2A]">Door-to-door relocation</td>
                  <td className="border border-[#E2E5F6] px-4 py-3 text-[#5A5A5A]">
                    You want one coordinator to pick the mode and hold documents, crate and last mile
                  </td>
                  <td className="border border-[#E2E5F6] px-4 py-3 text-[#5A5A5A]">We match the mode to the permit window</td>
                  <td className="border border-[#E2E5F6] px-4 py-3">
                    <Link to={FLIGHT_MODE_PATHS.doorToDoor} className="font-semibold text-[#4F5BD5] hover:underline">
                      Door-to-door service
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <FlightModeCards
        heading="Open a child page"
        intro="Each card is a dedicated URL. Cabin covers Etihad cabin rules. Cargo is the Emirates / manifest-cargo guide. Jet and charter are quote-only offers. Door-to-door remains the umbrella coordination service."
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
          <h2 className="mb-4 text-[24px] font-bold text-white sm:text-[30px]">Not sure which mode fits?</h2>
          <p className="mb-8 text-base leading-relaxed text-white/80">
            Send pet type, weight, origin or destination, and a target month. We recommend a mode. Full coordination is quoted on the door-to-door page — no invented jet or charter prices.
          </p>
          <a
            href={getWhatsAppUrl(WA)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#25D366] px-7 py-4 text-sm font-semibold text-white shadow-sm hover:bg-[#1DA851]"
          >
            <MessageCircle className="h-4 w-4" /> Ask which mode fits
          </a>
        </div>
      </section>
    </div>
  )
}
