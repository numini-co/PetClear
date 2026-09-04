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
import SnippetAnswer from '../components/SnippetAnswer.tsx'
import { BASE_URL, getWhatsAppUrl } from '../lib/seo.ts'
import { FLIGHT_MODE_PATHS, UAE_MANIFEST_CARGO_RULE } from '../data/flightModes.ts'

const WA =
  'Hi Dubai Pet Relocation! I need help choosing how my pet should fly to or from Dubai. Can you recommend a mode and quote the coordination?'

const snippetQuestion = 'Which airlines fly pets to Dubai?'
const snippetAnswer =
  'Etihad flies small dogs and cats in the cabin into Abu Dhabi. Emirates, flydubai and Air Arabia do not carry cats or dogs in the cabin — falcons only, plus Emirates guide dogs. The default into Dubai is manifest cargo, often Emirates SkyCargo. Cabin, baggage, cargo, jet and charter sit on this comparison hub, not on one airline page.'

const faqData = [
  {
    q: 'Which airlines fly pets to Dubai?',
    a: 'Etihad is the only UAE cabin path for cats and dogs, and those flights land at Abu Dhabi (AUH). Emirates, flydubai and Air Arabia do not carry cats or dogs in the cabin (falcons; Emirates also lists guide dogs). Most Dubai International arrivals are manifest cargo — Emirates SkyCargo is the common DXB product. This hub is the comparison. Emirates fees and booking steps live on the Emirates pet cargo guide; Etihad cabin rules live on the Etihad guide.',
  },
  {
    q: 'Pet friendly airlines Dubai',
    a: '“Pet friendly airlines Dubai” is a comparison, not a cabin free-for-all. Etihad cabin (AUH) is the exception for small dogs and cats. Emirates, flydubai and Air Arabia keep cats and dogs out of the cabin. Cargo is the default into Dubai. Open a child guide when you already know the carrier; use this hub when you are choosing.',
  },
  {
    q: 'Best airline to fly a dog to Dubai?',
    a: 'There is no single best airline. Cabin only exists on Etihad into AUH for pets that meet the weight and carrier limits. A DXB arrival is almost always cargo. We do not rank carriers or sell tickets — we match the animal to a legal mode, then quote coordination. Compare the table on this page, then open the matching child guide.',
  },
  {
    q: 'Can I bring my pet on an Emirates flight?',
    a: 'Yes, but not in the cabin. Emirates carries dogs and cats as checked baggage on some outbound journeys under 17 hours, and as SkyCargo manifest cargo — and every itinerary ending in Dubai must use cargo (source: Emirates). Cabin on Emirates is limited to falcons on certain Pakistan routings and guide dogs. Open the Emirates pet cargo guide or the checked-baggage guide for the mode that matches your route.',
  },
  {
    q: 'Can pets fly in cabin to Dubai?',
    a: 'No. Pets entering Dubai International travel as manifest cargo, not in the cabin. The only UAE dog-and-cat cabin product is Etihad into Abu Dhabi. Emirates, flydubai and Air Arabia do not carry dogs or cats in the cabin (falcons excepted). We can still coordinate an AUH cabin arrival plus a ground transfer to a Dubai address.',
  },
  {
    q: 'Which flights allow pets in the cabin?',
    a: 'Into the UAE, only Etihad accepts small dogs and cats in the cabin, and those flights land at Abu Dhabi. Emirates, flydubai and Air Arabia cabin products are falcons-only (plus Emirates guide dogs). Cabin slots are limited and must be requested after you hold a passenger ticket. Compare modes on this hub; cabin-policy depth lives on the Etihad guide.',
  },
  {
    q: 'Does a pet in cabin count as a carry-on?',
    a: 'On Etihad, a cabin pet travels in an approved under-seat carrier and is a separate pet booking, not a free carry-on bag. Pet plus carrier must weigh up to 8 kg; the under-seat carrier maximum is 40 × 40 × 22 cm (source: Etihad). Buying an extra seat can raise the published carrier size. Confirm the live fee and inventory at booking — we do not sell Etihad tickets.',
  },
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
    a: 'On the child guides, not on this chooser hub. Etihad cabin from USD 399 lives on the Etihad pets-in-cabin guide. Emirates animal-charge tiers live on the Emirates pet cargo guide. Jet, shared charter and door-to-door stay Get a Quote.',
  },
]

export default function PetFlightOptionsHub() {
  const canonical = `${BASE_URL}${FLIGHT_MODE_PATHS.hub}`
  const title = 'Pet Flight Options from Dubai | Cabin, Cargo, Jet & Charter'
  const description =
    'Which airlines fly pets to Dubai? Compare Etihad cabin into AUH with Emirates, flydubai and Air Arabia (no cabin cats or dogs) and the cargo default. Six flight modes; fee grids live on the child guides.'

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
            'which airlines fly pets to Dubai, pet friendly airlines Dubai, pet flight options Dubai, fly pet to or from Dubai, cabin vs cargo vs charter UAE, pet travel modes Dubai',
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
        subtitle="Chooser and airline comparison: Etihad cabin into AUH, Emirates / flydubai / Air Arabia no cabin cats or dogs, cargo the Dubai default. Fee grids live on the child guides."
        updated="Updated September 2026"
        primaryLabel="Ask which mode fits"
        whatsappMessage={WA}
        secondary={{ label: 'Door-to-door relocation', to: FLIGHT_MODE_PATHS.doorToDoor }}
      />

      <section className="section-padding bg-white">
        <div className="mx-auto max-w-[900px] px-5 sm:px-6 lg:px-8">
          <SnippetAnswer question={snippetQuestion} answer={snippetAnswer} />
          <p className="mb-4 leading-relaxed text-[#5A5A5A]">
            This page owns the comparison queries — which airlines fly pets to Dubai, and which carriers are “pet friendly” here. It does not own Etihad cabin-fee tables, Emirates animal-charge tiers, or the “pet relocation Dubai” money head. Those live on the child guides and on{' '}
            <Link to={FLIGHT_MODE_PATHS.doorToDoor} className="font-semibold text-[#4F5BD5] hover:underline">
              door-to-door pet relocation in Dubai
            </Link>
            . Air Arabia cabin is falcons-only (source: Air Arabia) — not a dog or cat product. Open a child page when you already know the carrier or mode; message us when you want us to choose and coordinate.
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
          <h2 className="mb-3 text-[24px] font-bold text-[#2A2A2A] sm:text-[30px]">
            Which airlines fly pets to Dubai — a comparison
          </h2>
          <p className="mb-6 max-w-3xl text-base leading-relaxed text-[#5A5A5A]">
            This is the comparison, not an Emirates-only sponge. Cabin cats and dogs exist on Etihad into Abu Dhabi.
            Emirates, flydubai and Air Arabia do not offer that cabin product. Cargo is the default into Dubai. Airline
            fee numerals stay on the child guides.
          </p>
          <div className="-mx-5 overflow-x-auto px-5 sm:mx-0 sm:px-0">
            <table className="w-full min-w-[720px] border-collapse text-sm">
              <thead>
                <tr className="bg-[#E9ECFB]">
                  <th className="border border-[#E2E5F6] px-4 py-3 text-left font-semibold text-[#2A2A2A]">Airline</th>
                  <th className="border border-[#E2E5F6] px-4 py-3 text-left font-semibold text-[#2A2A2A]">Cabin cats / dogs</th>
                  <th className="border border-[#E2E5F6] px-4 py-3 text-left font-semibold text-[#2A2A2A]">Typical Dubai / UAE arrival</th>
                  <th className="border border-[#E2E5F6] px-4 py-3 text-left font-semibold text-[#2A2A2A]">Open</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="border border-[#E2E5F6] px-4 py-3 font-semibold text-[#2A2A2A]">Etihad</td>
                  <td className="border border-[#E2E5F6] px-4 py-3 text-[#5A5A5A]">
                    Yes — small pets into AUH only. From USD 399 in Economy (source: Etihad); confirm live at booking.
                  </td>
                  <td className="border border-[#E2E5F6] px-4 py-3 text-[#5A5A5A]">Cabin into AUH, then ground to Dubai if needed</td>
                  <td className="border border-[#E2E5F6] px-4 py-3">
                    <Link to={FLIGHT_MODE_PATHS.cabin} className="font-semibold text-[#4F5BD5] hover:underline">
                      Etihad cabin guide
                    </Link>
                  </td>
                </tr>
                <tr className="bg-[#F5F6FD]">
                  <td className="border border-[#E2E5F6] px-4 py-3 font-semibold text-[#2A2A2A]">Emirates</td>
                  <td className="border border-[#E2E5F6] px-4 py-3 text-[#5A5A5A]">
                    No — falcons on certain Pakistan routings and guide dogs only (source: Emirates)
                  </td>
                  <td className="border border-[#E2E5F6] px-4 py-3 text-[#5A5A5A]">Manifest cargo / SkyCargo for DXB-ending itineraries</td>
                  <td className="border border-[#E2E5F6] px-4 py-3">
                    <Link to={FLIGHT_MODE_PATHS.cargo} className="font-semibold text-[#4F5BD5] hover:underline">
                      Emirates cargo guide
                    </Link>
                  </td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-[#E2E5F6] px-4 py-3 font-semibold text-[#2A2A2A]">flydubai</td>
                  <td className="border border-[#E2E5F6] px-4 py-3 text-[#5A5A5A]">No — falcons only (source: flydubai)</td>
                  <td className="border border-[#E2E5F6] px-4 py-3 text-[#5A5A5A]">Cargo when the route accepts the animal</td>
                  <td className="border border-[#E2E5F6] px-4 py-3 text-[#5A5A5A]">This comparison — not a flydubai fee page</td>
                </tr>
                <tr className="bg-[#F5F6FD]">
                  <td className="border border-[#E2E5F6] px-4 py-3 font-semibold text-[#2A2A2A]">Air Arabia</td>
                  <td className="border border-[#E2E5F6] px-4 py-3 text-[#5A5A5A]">No — falcons only (source: Air Arabia)</td>
                  <td className="border border-[#E2E5F6] px-4 py-3 text-[#5A5A5A]">Not a cat or dog cabin product</td>
                  <td className="border border-[#E2E5F6] px-4 py-3 text-[#5A5A5A]">This comparison — not an Air Arabia fee page</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
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
