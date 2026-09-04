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
import { BASE_URL, getWhatsAppUrl } from '../lib/seo.ts'
import { FLIGHT_MODE_PATHS, UAE_MANIFEST_CARGO_RULE } from '../data/flightModes.ts'

const WA =
  'Hi Dubai Pet Relocation! I need Emirates SkyCargo / manifest pet cargo to or from Dubai. Can you review the route and quote the cargo coordination?'

const faqData = [
  {
    q: 'Why do pets arriving in Dubai go as cargo?',
    a: 'Emirates requires all itineraries ending in Dubai to travel as cargo on SkyCargo (source: Emirates). UAE import rules also require manifested cargo, except Etihad in-cabin into Abu Dhabi. Cabin and accompanied baggage are the wrong products for a DXB arrival.',
  },
  {
    q: 'What are the Emirates animal charges?',
    a: 'USD 500 (pet + carrier ≤23 kg and ≤150 cm), USD 650 (24–32 kg, 150–300 cm), USD 800 (over 32 kg, up to 300 cm). Over 300 cm travels as cargo (source: Emirates). Confirm live figures on the Emirates animals page. We do not add invented mark-ups to those numerals.',
  },
  {
    q: 'How do I book Emirates Pets / SkyCargo?',
    a: 'Emirates asks for the pet travel form at least one week before the flight (source: Emirates). SkyCargo then accepts the animal as manifest cargo under IATA Live Animals Regulations. We coordinate the file; the carrier accepts the booking.',
  },
  {
    q: 'Does Emirates allow dogs and cats in the cabin?',
    a: 'No. Emirates does not carry animals in the cabin except falcons on certain Pakistan routings and guide dogs for the blind (source: Emirates). Cabin into the UAE is the Etihad AUH product.',
  },
  {
    q: 'What crate does cargo require?',
    a: 'An IATA-compliant hard crate. See the IATA pet crate guide. Soft carriers are a cabin product, not a SkyCargo product.',
  },
  {
    q: 'What happens on arrival at DXB?',
    a: 'The pet is accepted at the cargo terminal, then examined by MOCCAE veterinary staff and released if compliant — there is no routine quarantine for compliant pets. We coordinate clearance and the last mile via the pet import and door-to-door pages. Confirm any release-fee amount on the official portal; published figures have differed.',
  },
  {
    q: 'How long is the MOCCAE import permit valid?',
    a: '30 days from issuance. Book cargo inside that window. Do not plan around a 90-day permit.',
  },
  {
    q: 'Are you part of Emirates SkyCargo?',
    a: 'No. We are an independent coordinator. Airline rules and fees on this page are cited from Emirates / SkyCargo first-party pages.',
  },
]

export default function EmiratesPetCargoGuide() {
  const canonical = `${BASE_URL}${FLIGHT_MODE_PATHS.cargo}`
  const title = 'Emirates Pet Cargo & SkyCargo Pets — 2026 Guide'
  const description =
    'Manifest cargo is the default for pets entering Dubai. Emirates SkyCargo rules, the USD 500 / 650 / 800 animal-charge tiers, booking steps, and how we coordinate the cargo file.'

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
            'Emirates pet cargo, Emirates SkyCargo pets, Emirates pet policy, Emirates pet cargo price, Emirates pet cargo booking, manifest cargo pet Dubai',
          canonical,
          ogType: 'article',
        }}
        schemas={[breadcrumbSchema, articleSchema, faqSchema]}
      />
      <Breadcrumb items={[{ label: 'Guides', path: '/guides/' }, { label: 'Emirates pet cargo' }]} />

      <Hero
        image="/images/guide-iata-crate.jpg"
        imageAlt="An IATA-approved pet crate of the kind used for Emirates SkyCargo and other manifest cargo bookings"
        eyebrow="Airline guide"
        title="Flying Your Pet with Emirates: SkyCargo, Rules & Costs"
        subtitle="Manifest cargo is the flagship path into Dubai. Emirates animal-charge tiers, booking windows and unaccompanied cargo — cited from the airline, coordinated by us."
        updated="Updated September 2026"
        primaryLabel="Quote cargo coordination"
        whatsappMessage={WA}
        secondary={{ label: 'All six flight modes', to: FLIGHT_MODE_PATHS.hub }}
      />

      <section className="section-padding bg-white">
        <div className="mx-auto max-w-[900px] px-5 sm:px-6 lg:px-8">
          <div className="mb-8 rounded-[20px] border border-[#C8CEE8] bg-[#F5F6FD] p-6">
            <h2 className="mb-2 text-xl font-bold text-[#2A2A2A]">Why this page owns cargo</h2>
            <p className="text-sm leading-relaxed text-[#5A5A5A]">{UAE_MANIFEST_CARGO_RULE}</p>
          </div>
          <h2 className="mb-4 text-[24px] font-bold text-[#2A2A2A] sm:text-[30px]">Manifest cargo vs everything else</h2>
          <p className="mb-4 leading-relaxed text-[#5A5A5A]">
            Manifest cargo is an unaccompanied (or separately ticketed) live-animal booking on an air waybill. The crate is accepted at the cargo terminal — at DXB that is typically the cargo village, not the passenger hall. Emirates SkyCargo publishes a dedicated Emirates Pets product under IATA Live Animals Regulations (source: Emirates SkyCargo).
          </p>
          <p className="mb-4 leading-relaxed text-[#5A5A5A]">
            Emirates does not carry dogs or cats in the cabin (falcons and guide dogs are the published exceptions; source: Emirates). flydubai likewise keeps dogs and cats on cargo (source: flydubai). Cabin into the UAE is the{' '}
            <Link to={FLIGHT_MODE_PATHS.cabin} className="font-semibold text-[#4F5BD5] hover:underline">
              Etihad in-cabin path into Abu Dhabi
            </Link>
            . Accompanied hold travel is explained on{' '}
            <Link to={FLIGHT_MODE_PATHS.baggage} className="font-semibold text-[#4F5BD5] hover:underline">
              pet as checked baggage
            </Link>{' '}
            — and is blocked for Emirates itineraries that end in Dubai.
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
            First-party animal charges. We do not invent a second price list. Confirm the live amount on Emirates before you pay.
          </p>
          <LastVerified note="Airline charges can change. Recheck the Emirates animals page for your travel month." />
          <div className="mb-6 overflow-x-auto">
            <table className="w-full min-w-[560px] border-collapse text-sm">
              <thead>
                <tr className="bg-[#E9ECFB]">
                  <th className="border border-[#E2E5F6] px-4 py-3 text-left font-semibold text-[#2A2A2A]">Pet + carrier</th>
                  <th className="border border-[#E2E5F6] px-4 py-3 text-left font-semibold text-[#2A2A2A]">Published charge</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="border border-[#E2E5F6] px-4 py-3 text-[#5A5A5A]">≤23 kg and ≤150 cm</td>
                  <td className="border border-[#E2E5F6] px-4 py-3 font-semibold text-[#2A2A2A]">USD 500</td>
                </tr>
                <tr className="bg-[#F5F6FD]">
                  <td className="border border-[#E2E5F6] px-4 py-3 text-[#5A5A5A]">24–32 kg and 150–300 cm</td>
                  <td className="border border-[#E2E5F6] px-4 py-3 font-semibold text-[#2A2A2A]">USD 650</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-[#E2E5F6] px-4 py-3 text-[#5A5A5A]">&gt;32 kg, ≤300 cm</td>
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
              'Maximum two adult animals of comparable size, each up to 14 kg, may share one container; animals over 14 kg travel separately (source: Emirates).',
              'Pet travel form at least one week before the flight; minimum pet age 4 months (source: Emirates).',
              'Valid import permit and government-endorsed health certificate required before acceptance (source: Emirates).',
              'Birds (except some falcons) are not accepted for transit via Dubai as checked baggage or cargo between 1 May and 30 September (source: Emirates).',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-[#5A5A5A]">
                <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-[#4F5BD5]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm leading-relaxed text-[#5A5A5A]">
            Snub-nosed breed restrictions appear in secondary airline summaries; Emirates’ current first-party page did not list a complete breed ban at last check. We treat that as secondary and confirm acceptance on the specific routing before we book. Summer heat notes live on the{' '}
            <Link to="/guides/pet-travel-summer-dubai/" className="font-semibold text-[#4F5BD5] hover:underline">
              summer travel guide
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="mx-auto max-w-[900px] px-5 sm:px-6 lg:px-8">
          <h2 className="mb-4 text-[24px] font-bold text-[#2A2A2A] sm:text-[30px]">Booking the cargo file</h2>
          <div className="mb-6 space-y-4">
            {[
              {
                title: 'Confirm the route will accept the animal',
                text: 'Aircraft type, season and breed matter. We check SkyCargo (or another pet-experienced carrier) before anyone pays a passenger ticket.',
              },
              {
                title: 'Line up the 30-day permit window',
                text: 'The MOCCAE import permit is valid 30 days from issuance. Cargo space and the permit have to overlap. See the MOCCAE import permit guide.',
              },
              {
                title: 'Submit the airline form and documents',
                text: 'Emirates wants the pet travel form at least a week out and destination paperwork before acceptance. We assemble the pouch; the airline accepts it.',
              },
              {
                title: 'Crate check at the cargo terminal',
                text: 'IATA CR1 sizing, door hardware, labels and water bowls. Detail on the IATA crate guide.',
              },
              {
                title: 'Travel day and arrival clearance',
                text: 'Unaccompanied cargo is handed to cargo staff. On arrival, MOCCAE inspects and releases compliant pets. We coordinate the last mile.',
              },
            ].map((s, i) => (
              <div key={s.title} className="flex gap-4">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#4F5BD5] text-sm font-bold text-white">
                  {i + 1}
                </div>
                <div>
                  <p className="mb-1 font-bold text-[#2A2A2A]">{s.title}</p>
                  <p className="leading-relaxed text-[#5A5A5A]">{s.text}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mb-3 leading-relaxed text-[#5A5A5A]">
            Import and arrival pages to open next:
          </p>
          <ul className="space-y-2">
            <li>
              <Link to="/guides/uae-pet-import-requirements/" className="font-semibold text-[#4F5BD5] hover:underline">
                UAE pet import requirements
              </Link>{' '}
              — document checklist
            </li>
            <li>
              <Link to="/guides/moccae-import-permit/" className="font-semibold text-[#4F5BD5] hover:underline">
                MOCCAE import permit
              </Link>{' '}
              — 30-day validity
            </li>
            <li>
              <Link to="/service/pet-import-dubai/" className="font-semibold text-[#4F5BD5] hover:underline">
                Pet import service for Dubai
              </Link>{' '}
              — commercial arrival filing
            </li>
            <li>
              <Link to="/service/pet-relocation-to-dubai/" className="font-semibold text-[#4F5BD5] hover:underline">
                Pet relocation to Dubai
              </Link>{' '}
              — inbound-only sequence
            </li>
            <li>
              <Link to={FLIGHT_MODE_PATHS.doorToDoor} className="font-semibold text-[#4F5BD5] hover:underline">
                Door-to-door pet relocation
              </Link>{' '}
              — umbrella coordination
            </li>
          </ul>
        </div>
      </section>

      <FlightModeCards
        heading="Sibling modes"
        intro="Cargo is the default. Cabin, baggage, jet and charter are the alternatives. Door-to-door is how we hold documents and the last mile around the air waybill."
        exclude="cargo"
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
          <h2 className="mb-4 text-[24px] font-bold text-white sm:text-[30px]">We book and manage the cargo leg</h2>
          <p className="mb-8 text-base leading-relaxed text-white/80">
            Send pet, route and month. We confirm SkyCargo (or another cargo carrier) acceptance and quote coordination — not an invented freight table. WhatsApp or{' '}
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
            <MessageCircle className="h-4 w-4" /> Get a cargo quote
          </a>
        </div>
      </section>
    </div>
  )
}
