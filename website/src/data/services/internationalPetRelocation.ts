import type { ServicePageData } from '../../types/servicePage.ts'

const internationalPetRelocation: ServicePageData = {
  slug: 'international-pet-relocation',
  seoTitle: 'International Pet Relocation Dubai | Global Service',
  metaDescription:
    'Worldwide pet relocation to and from Dubai. Destination-by-destination requirement checks, full documentation, vetted partners, door-to-door coordination.',
  keywords:
    'international pet relocation dubai, worldwide pet relocation, global pet transport, overseas pet relocation, pet relocation international',
  h1: 'Global Pet Relocation Services',
  primaryKeyword: 'international pet relocation dubai',
  heroValueProp:
    'Relocating a dog or cat across borders to or from Dubai? We coordinate documentation, permits, airline-approved crates and customs for your exact destination — connecting you with vetted partners and pet-experienced airlines, and keeping you updated on WhatsApp at every step.',
  heroImage: '/images/service-international-pet-relocation.jpg',
  heroImageAlt:
    'A calm dog and cat beside a travel crate with a world map and aircraft in the background — international pet relocation in Dubai',
  whatsappMessage:
    'Hi Dubai Pet Relocation! I need international pet relocation to or from Dubai. Can you tell me the requirements and cost for my destination country?',
  trustBadges: ['Route-by-route requirement checks', 'Vetted partners worldwide', 'Pet-experienced airlines', 'WhatsApp support'],
  costRange: { low: '5000', high: '25000' },
  hasHowTo: false,
  sections: [
    {
      h2: 'Global Pet Relocation Services From Dubai',
      intro:
        'International pet relocation is more complex than a regional move. Every destination country sets its own import rules, and the same pet can need different paperwork, vaccinations and waiting periods depending on where it is heading. We coordinate the whole journey to and from Dubai by checking the current rules for your exact corridor so nothing falls through the gaps.',
      body: [
        {
          type: 'p',
          text: 'Whether you are leaving the UAE for a new posting overseas or bringing a pet into Dubai from abroad, international pet relocation involves matching your animal against the destination country’s exact entry requirements, preparing documents in the right order, booking a suitable flight and clearing customs on both ends. We map the full route before you commit, so you know the timeline and cost up front.',
        },
        {
          type: 'p',
          text: 'We are a coordination service, not an airline or a carrier. We do not physically fly the animals ourselves — we connect you with vetted veterinary, crate and ground-handling partners, work with pet-experienced airlines, and make sure the documentation and timing are correct for your specific destination.',
        },
        {
          type: 'list',
          items: [
            'Destination-by-destination requirement checks for your exact corridor',
            'Microchip, rabies vaccination, titer test and health certificate review against the destination country’s rules',
            'MOCCAE import or export permit guidance, and origin/destination government paperwork coordination',
            'IATA-compliant crate sizing and sourcing through vetted partners',
            'Flight routing and cargo booking with pet-experienced airlines out of DXB and DWC',
            'Customs clearance coordination at both ends and door-to-door delivery',
            'A single WhatsApp point of contact for the entire move',
          ],
        },
        {
          type: 'p',
          text: 'Popular international corridors include the UK, USA, India, Australia, the EU, Canada, Singapore and the wider GCC. Because requirements vary so much by destination, we confirm the current rules for your exact country before quoting — we never copy a generic checklist across borders.',
        },
      ],
    },
    {
      h2: 'International Pet Relocation Process',
      intro:
        'The exact steps depend on your origin and destination, but most international moves to or from Dubai follow the same backbone. We build a tailored plan around your country pair and travel date.',
      body: [
        {
          type: 'steps',
          steps: [
            {
              title: 'Tell us your route',
              text: 'Send your pet type, breed, origin and destination country on WhatsApp. We confirm the destination country’s current import requirements, check breed eligibility and flag any seasonal or country-specific restrictions before you commit.',
            },
            {
              title: 'Map the timeline',
              text: 'Because requirements vary by destination, we work backwards from your travel date. Some countries are straightforward; others (such as rabies-controlled or island nations) require titer tests and long mandatory waiting periods, so we plan the sequence carefully.',
            },
            {
              title: 'Prepare documents and permits',
              text: 'We review microchip, vaccinations and the government health certificate, and guide the MOCCAE import or export permit alongside any documentation the destination country demands. We check names and microchip numbers match across every document.',
            },
            {
              title: 'Crate and flight booking',
              text: 'We help size an IATA-compliant crate through vetted partners and coordinate a routing on a pet-experienced airline, choosing connections and transit airports that suit your animal.',
            },
            {
              title: 'Travel day and customs',
              text: 'Your pet travels per IATA Live Animals Regulations. We coordinate departure handling and customs clearance at both the origin and destination airports.',
            },
            {
              title: 'Door-to-door delivery',
              text: 'We arrange final delivery to the home address and keep you updated on WhatsApp at every checkpoint, so you always know where your pet is.',
            },
          ],
        },
      ],
    },
    {
      h2: 'Country-Specific Requirements',
      intro:
        'There is no single set of rules for international pet relocation. Each destination country decides what it needs — and the difference between getting it right and getting it wrong can be weeks of delay or refused entry. Below are the broad shapes of some of the most common destinations, with detailed route guides for the busiest corridors.',
      body: [
        {
          type: 'table',
          headers: ['Destination', 'What typically drives the timeline'],
          rows: [
            ['United Kingdom', 'Microchip, rabies vaccination and an approved route; specific paperwork and an authorised carrier for the final leg.'],
            ['United States', 'Rabies vaccination and a valid health certificate; requirements differ by destination state and have been tightened in recent years.'],
            ['India', 'Import permits and health documentation; rules differ for returning residents versus first-time imports.'],
            ['Australia', 'One of the strictest regimes worldwide — rabies titer testing, long lead times and mandatory post-arrival quarantine.'],
          ],
        },
        {
          type: 'p',
          text: 'These summaries are a starting point only. Requirements change, and the precise documents depend on your pet, its vaccination history and your departure point. We confirm the live rules for your destination before quoting, and our route guides break each corridor down step by step.',
        },
        {
          type: 'list',
          items: [
            'UK to Dubai route guide — see /routes/uk-to-dubai/',
            'USA to Dubai route guide — see /routes/usa-to-dubai/',
            'Australia to Dubai route guide — see /routes/australia-to-dubai/',
          ],
        },
        {
          type: 'p',
          text: 'Heading the other way — out of Dubai to the UK, USA, India, Australia or beyond? The same principle applies: we work to the destination country’s import rules and the UAE’s MOCCAE export requirements together, so both ends line up.',
        },
      ],
    },
    {
      h2: 'How we choose a flight mode (not an airline affiliation)',
      intro:
        'We are independent of every carrier. The air product comes first — cabin, accompanied baggage, manifest cargo, a shared charter or a private jet — then we confirm which pet-experienced airline will actually accept the animal on that date.',
      body: [
        {
          type: 'cards',
          cards: [
            {
              title: 'Pet flight options hub',
              text: 'Compare all six modes in one decision table.',
              to: '/guides/pet-flight-options-dubai/',
              kind: 'Guide',
            },
            {
              title: 'Etihad in-cabin',
              text: 'The UAE cabin exception — small pets into Abu Dhabi.',
              to: '/guides/etihad-pet-policy/',
              kind: 'Guide',
            },
            {
              title: 'Emirates / manifest cargo',
              text: 'Default for itineraries ending in Dubai. SkyCargo fee tiers.',
              to: '/guides/emirates-pet-cargo/',
              kind: 'Guide',
            },
            {
              title: 'Private jet pet travel',
              text: 'Dedicated aircraft when scheduled products will not work. Quote only.',
              to: '/service/private-jet-pet-travel/',
              kind: 'Service',
            },
            {
              title: 'Shared / group pet charter',
              text: 'A dedicated lift shared with other pets. Quote only.',
              to: '/service/shared-pet-charter/',
              kind: 'Service',
            },
          ],
        },
        {
          type: 'p',
          text: 'Emirates does not carry dogs or cats in the cabin (falcons and guide dogs excepted; source: Emirates). UAE arrivals travel as manifest cargo except Etihad in-cabin into Abu Dhabi. We confirm current acceptance, crate rules and booking windows with the carrier before anything is booked — we do not claim an airline partnership.',
        },
      ],
    },
    {
      h2: 'International Pet Relocation Cost',
      intro:
        'International moves cost more than regional transport because of long-haul cargo, destination-specific veterinary work and more complex documentation.',
      body: [
        {
          type: 'p',
          text: 'Total international pet relocation typically ranges from around AED 5,000 for shorter overseas routes to AED 25,000 or more for long-haul, multi-pet or premium door-to-door service. The biggest variables are the destination country’s requirements, your pet’s size, the flight routing and whether a titer test and waiting period are needed.',
        },
        {
          type: 'table',
          headers: ['Cost component', 'Typical range (AED)'],
          rows: [
            ['Government permits and release fees', '450 – 1,000'],
            ['Veterinary (vaccines, health cert, titer test)', '1,200 – 3,000'],
            ['IATA crate', '110 – 1,500'],
            ['International flight / cargo', '5,000 – 18,000+'],
            ['Coordination, customs and door-to-door handling', '2,000 – 7,000'],
          ],
        },
        {
          type: 'p',
          text: 'We give you a firm cost range for your exact route once we have your origin, destination and pet details — no surprises mid-move.',
        },
      ],
    },
  ],
  faq: [
    {
      q: 'How many countries do you cover for international pet relocation?',
      a: 'We coordinate pet relocation to and from Dubai on a corridor-by-corridor basis, including popular destinations such as the UK, USA, India, Australia, the EU, Canada and Singapore. Because requirements vary by destination, we confirm the current rules for your exact country before quoting.',
    },
    {
      q: 'Do requirements differ by destination country?',
      a: 'Yes — significantly. Each country sets its own import rules, so the same pet may need different vaccinations, a rabies titer test, specific permits or a quarantine period depending on where it is going. We check the live requirements for your destination rather than applying a generic checklist.',
    },
    {
      q: 'How long does an international pet move take?',
      a: 'It depends entirely on the destination. Straightforward routes from low-risk countries can take a few weeks, while strict regimes — such as Australia, which requires titer testing and post-arrival quarantine — can take several months. We map the timeline backwards from your travel date so you can plan ahead.',
    },
    {
      q: 'Which airlines do you use?',
      a: 'We are not affiliated with any airline. We confirm which pet-experienced carrier will accept the animal — often Emirates SkyCargo for Dubai-ending itineraries, or Etihad cabin into Abu Dhabi when the pet qualifies. Compare modes on the [pet flight options hub](/guides/pet-flight-options-dubai/).',
    },
    {
      q: 'Do you physically transport the pet yourselves?',
      a: 'No. We are a coordination service, not an airline or carrier. We connect you with vetted veterinary, crate and ground-handling partners, book with pet-experienced airlines, and manage the documents and timeline so nothing is missed.',
    },
    {
      q: 'How do I get started?',
      a: 'Message us on WhatsApp with your pet type, breed, origin and destination country. We confirm the destination’s exact requirements, map the timeline and reply with a firm cost range — within 15 minutes during business hours.',
    },
  ],
  relatedLinks: [
    { label: 'Pet flight options hub', to: '/guides/pet-flight-options-dubai/' },
    { label: 'Emirates pet cargo', to: '/guides/emirates-pet-cargo/' },
    { label: 'Etihad pet policy', to: '/guides/etihad-pet-policy/' },
    { label: 'Private jet pet travel', to: '/service/private-jet-pet-travel/' },
    { label: 'Shared pet charter', to: '/service/shared-pet-charter/' },
    { label: 'Pet Relocation Dubai', to: '/service/pet-relocation-dubai/' },
    { label: 'Pet Export from Dubai', to: '/service/pet-export-dubai/' },
    { label: 'UK to Dubai', to: '/routes/uk-to-dubai/' },
    { label: 'USA to Dubai', to: '/routes/usa-to-dubai/' },
    { label: 'Australia to Dubai', to: '/routes/australia-to-dubai/' },
    { label: 'How It Works', to: '/how-it-works/' },
  ],
}

export default internationalPetRelocation
