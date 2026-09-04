import { Link } from 'react-router-dom'
import { CheckCircle, MessageCircle, XCircle } from 'lucide-react'
import SEOHead from '../components/SEOHead.tsx'
import Hero from '../components/Hero.tsx'
import Breadcrumb from '../components/Breadcrumb.tsx'
import FAQItem from '../components/FAQItem.tsx'
import ContentImage from '../components/ContentImage.tsx'
import FlightModeCards from '../components/FlightModeCards.tsx'
import UaeCargoRuleCallout from '../components/UaeCargoRuleCallout.tsx'
import OfficialSources from '../components/OfficialSources.tsx'
import LastVerified from '../components/LastVerified.tsx'
import SnippetAnswer from '../components/SnippetAnswer.tsx'
import { BASE_URL, getWhatsAppUrl } from '../lib/seo.ts'
import { FLIGHT_MODE_PATHS } from '../data/flightModes.ts'

const WA =
  'Hi Dubai Pet Relocation! I want to know whether my pet can travel as accompanied checked baggage, or whether we need manifest cargo instead.'

const snippetQuestion = 'Can my pet fly as checked baggage to Dubai?'
const snippetAnswer =
  'Emirates does not accept pets as checked baggage on itineraries that end in Dubai — those animals must travel as SkyCargo. From Dubai, cats and dogs may travel as accompanied hold baggage if the total journey is under 17 hours (source: Emirates). UAE import still follows the manifest-cargo rule except Etihad cabin into Abu Dhabi.'

const faqData = [
  {
    q: 'Emirates pet checked baggage vs cargo into Dubai',
    a: 'Into Dubai they are not interchangeable. Emirates requires every itinerary ending in Dubai to travel as SkyCargo, not as accompanied checked baggage (source: Emirates). Checked baggage may apply from Dubai when the total journey is under 17 hours. UAE import still uses manifest cargo except Etihad cabin into Abu Dhabi. If you are flying into DXB, plan cargo.',
  },
  {
    q: 'Can my pet arrive in Dubai as checked baggage?',
    a: 'Not on Emirates. All itineraries ending in Dubai must travel as cargo on Emirates SkyCargo (source: Emirates). UAE import rules also require manifested cargo, with the documented exception of Etihad in-cabin arrivals into Abu Dhabi. Do not book a passenger ticket assuming the pet can check in beside you at DXB.',
  },
  {
    q: 'When does Emirates allow checked-baggage pets?',
    a: 'From Dubai, falcons, cats, dogs and pet birds may travel as checked baggage in the hold if the total journey time is under 17 hours (source: Emirates). That is an outbound / through-journey rule, not a DXB-arrival rule.',
  },
  {
    q: 'What does Emirates charge for animals as baggage?',
    a: 'When the itinerary is eligible, Emirates publishes animal-charge tiers on its animals page. The full USD 500 / 650 / 800 grid lives on the Emirates pet cargo guide — this page owns eligibility (accompanied hold, excess / AVIH, the under-17-hour outbound rule, and the DXB-ending cargo block), not that fee table.',
  },
  {
    q: 'Does flydubai offer checked-baggage pets?',
    a: 'flydubai does not allow animals in the cabin except falcons. Other pets travel via flydubai Cargo (source: flydubai). Air Arabia likewise does not carry cats or dogs (falcons only). A secondary source states flydubai does not offer AVIH checked-baggage service — treat that as secondary until the cargo desk confirms your booking.',
  },
  {
    q: 'Is checked baggage the same as manifest cargo?',
    a: 'No. Accompanied baggage travels on the owner’s ticket in the hold. Manifest cargo is a live-animal air-waybill booking, often unaccompanied, accepted at the cargo terminal. UAE arrivals use cargo except the Etihad AUH cabin path.',
  },
  {
    q: 'Do I still need a MOCCAE import permit for baggage travel?',
    a: 'If the pet is entering the UAE, yes. The permit is valid 30 days from issuance. Baggage status does not waive the permit. For most Dubai arrivals you should be on the cargo path anyway.',
  },
  {
    q: 'What if my outbound journey is longer than 17 hours?',
    a: 'Emirates checked-baggage pets require a total journey under 17 hours (source: Emirates). Longer itineraries move to SkyCargo. Open the Emirates pet cargo guide or door-to-door coordination.',
  },
  {
    q: 'Can you decide this for me?',
    a: 'Yes. Send the route, date and pet weight. We will tell you whether baggage is even legal on that itinerary, then quote cargo or door-to-door if it is not.',
  },
]

export default function PetAsCheckedBaggageGuide() {
  const canonical = `${BASE_URL}${FLIGHT_MODE_PATHS.baggage}`
  const title = 'Pets as Checked Baggage UAE | Accompanied Hold Rules'
  const description =
    'Pets as checked baggage in the UAE: when accompanied hold / excess / AVIH is allowed, the Emirates under-17-hour outbound rule, and why DXB-ending itineraries must use manifest cargo.'

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Guides', item: `${BASE_URL}/guides/` },
      { '@type': 'ListItem', position: 3, name: 'Pet as checked baggage', item: canonical },
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
            'pets as checked baggage UAE, pet as checked baggage, accompanied pet baggage UAE, excess baggage pets UAE, AVIH pet Dubai',
          canonical,
          ogType: 'article',
        }}
        schemas={[breadcrumbSchema, articleSchema, faqSchema]}
      />
      <Breadcrumb items={[{ label: 'Guides', path: '/guides/' }, { label: 'Pet as checked baggage' }]} />

      <Hero
        image="/images/dog-crate.jpg"
        imageAlt="A dog in a hard travel crate of the kind used when a pet travels as accompanied hold baggage"
        eyebrow="Flight-mode guide"
        title="Flying a Pet as Accompanied Checked Baggage"
        subtitle="Hold travel on the same ticket is allowed on some outbound Emirates journeys — and blocked for itineraries that end in Dubai. Read the rule before you book a passenger seat."
        updated="Updated September 2026"
        primaryLabel="Check if baggage is allowed"
        whatsappMessage={WA}
        secondary={{ label: 'All six flight modes', to: FLIGHT_MODE_PATHS.hub }}
      />

      <section className="section-padding bg-white">
        <div className="mx-auto max-w-[900px] px-5 sm:px-6 lg:px-8">
          <SnippetAnswer question={snippetQuestion} answer={snippetAnswer} />
          <UaeCargoRuleCallout extra="Checked baggage is not a workaround for a Dubai-ending import. If the itinerary ends at DXB, plan manifest cargo." />
          <h2 className="mb-4 text-[24px] font-bold text-[#2A2A2A] sm:text-[30px]">What “accompanied checked baggage” means</h2>
          <p className="mb-4 leading-relaxed text-[#5A5A5A]">
            The pet travels in the aircraft hold on the owner’s passenger booking (often labelled AVIH). You check the crate at the passenger or special-baggage desk, not at a cargo terminal. That is different from{' '}
            <Link to={FLIGHT_MODE_PATHS.cargo} className="font-semibold text-[#4F5BD5] hover:underline">
              manifest air cargo
            </Link>
            , where the animal has its own air waybill and is accepted at the cargo facility.
          </p>
          <p className="mb-4 leading-relaxed text-[#5A5A5A]">
            Baggage is only useful when both the airline and the destination allow it. For UAE arrivals, the destination usually does not. Compare every mode on the{' '}
            <Link to={FLIGHT_MODE_PATHS.hub} className="font-semibold text-[#4F5BD5] hover:underline">
              pet flight options hub
            </Link>
            .
          </p>
          <ContentImage
            src="/assets/w-flight-modes/pet-airline-options-cabin-baggage-cargo-diagram.png"
            alt="Cabin, checked-baggage and cargo options for pet travel to or from Dubai"
            caption="Accompanied hold travel is the middle column — and the one UAE arrivals usually cannot use."
          />
        </div>
      </section>

      <section className="section-padding bg-[#F5F6FD]">
        <div className="mx-auto max-w-[900px] px-5 sm:px-6 lg:px-8">
          <h2 className="mb-4 text-[24px] font-bold text-[#2A2A2A] sm:text-[30px]">When it is allowed vs blocked for UAE arrivals</h2>
          <div className="mb-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-[20px] bg-white p-6 shadow-sm">
              <h3 className="mb-3 flex items-center gap-2 font-bold text-[#2A2A2A]">
                <XCircle className="h-5 w-5 text-[#C45C5C]" /> Blocked
              </h3>
              <ul className="space-y-2 text-sm text-[#5A5A5A]">
                <li>Itineraries ending in Dubai on Emirates — animals must travel as SkyCargo (source: Emirates).</li>
                <li>UAE import as cabin or accompanied baggage, except Etihad in-cabin into Abu Dhabi.</li>
                <li>flydubai dogs and cats — cabin is falcons only; other pets go via cargo (source: flydubai).</li>
                <li>Air Arabia — no cats or dogs (falcons only); not a cabin or AVIH workaround for UAE arrivals.</li>
              </ul>
            </div>
            <div className="rounded-[20px] bg-white p-6 shadow-sm">
              <h3 className="mb-3 flex items-center gap-2 font-bold text-[#2A2A2A]">
                <CheckCircle className="h-5 w-5 text-[#4F5BD5]" /> Sometimes allowed
              </h3>
              <ul className="space-y-2 text-sm text-[#5A5A5A]">
                <li>From Dubai on Emirates: cats, dogs, falcons and pet birds as checked baggage if the total journey is under 17 hours (source: Emirates).</li>
                <li>Other carriers’ AVIH products on corridors that do not end in the UAE — confirm the specific airline, not this page.</li>
                <li>Etihad cabin into AUH is a different product — see the{' '}
                  <Link to={FLIGHT_MODE_PATHS.cabin} className="font-semibold text-[#4F5BD5] hover:underline">
                    Etihad pet policy
                  </Link>
                  .
                </li>
              </ul>
            </div>
          </div>
          <p className="leading-relaxed text-[#5A5A5A]">
            Emirates also requires the pet travel form at least one week before the flight and a minimum pet age of 4 months (source: Emirates). Pregnant animals are not accepted beyond one-third of gestation, nor within 48 hours of giving birth (source: Emirates).
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="mx-auto max-w-[900px] px-5 sm:px-6 lg:px-8">
          <h2 className="mb-4 text-[24px] font-bold text-[#2A2A2A] sm:text-[30px]">Fees sit on the cargo guide — this page owns eligibility</h2>
          <p className="mb-4 leading-relaxed text-[#5A5A5A]">
            This URL owns pets as checked baggage in the UAE: accompanied hold, excess / AVIH, the Emirates under-17-hour outbound rule, and the DXB-ending cargo disclaimer. The full Emirates USD 500 / 650 / 800 animal-charge table is cargo-owned depth on the{' '}
            <Link to={FLIGHT_MODE_PATHS.cargo} className="font-semibold text-[#4F5BD5] hover:underline">
              Emirates pet cargo guide
            </Link>
            . Those figures do not unlock checked-baggage arrival into DXB.
          </p>
          <LastVerified note="Confirm current Emirates animal charges on the official animals page before you pay." />
          <p className="leading-relaxed text-[#5A5A5A]">
            A valid import permit and government-endorsed health certificate for the destination are required before Emirates accepts the animal (source: Emirates). Leaving the UAE still needs the MOCCAE export health certificate — plan destination rules backwards. If you want one coordinator for the whole outbound file, use{' '}
            <Link to={FLIGHT_MODE_PATHS.doorToDoor} className="font-semibold text-[#4F5BD5] hover:underline">
              door-to-door pet relocation
            </Link>{' '}
            or{' '}
            <Link to="/service/pet-relocation-from-dubai/" className="font-semibold text-[#4F5BD5] hover:underline">
              pet relocation from Dubai
            </Link>
            .
          </p>
        </div>
      </section>

      <FlightModeCards
        heading="Sibling modes"
        intro="If baggage is blocked — which it is for most UAE arrivals — cargo, cabin (AUH only), jet or charter are the remaining air products. Door-to-door is how we hold the file."
        exclude="baggage"
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
          <h2 className="mb-4 text-[24px] font-bold text-white sm:text-[30px]">Tell us the itinerary — we will say yes or no</h2>
          <p className="mb-8 text-base leading-relaxed text-white/80">
            Route, date, pet weight. We confirm whether accompanied baggage is legal, or we move you to cargo. WhatsApp or{' '}
            <a href="mailto:support@dubai-pet-relocation.ae" className="underline">
              support@dubai-pet-relocation.ae
            </a>
            .
          </p>
          <a
            href={getWhatsAppUrl(WA)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#25D366] px-7 py-4 text-sm font-semibold text-white hover:bg-[#1DA851]"
          >
            <MessageCircle className="h-4 w-4" /> Check baggage eligibility
          </a>
        </div>
      </section>
    </div>
  )
}
