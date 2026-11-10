import type { ServicePageData } from '../../types/servicePage.ts'

const taxiWhatsapp =
  'Hi Dubai Pet Relocation, I want to book a pet taxi. Pickup: Drop-off: Pet type and size: Crate or carrier you already have (size): Date and time window: Cargo slot if this is an airport run:'

const paidScopeItems = [
  'Climate-controlled partner van and a handler used to dogs and cats',
  'Crate or carrier sized for the pet and the van door',
  'DXB or DWC cargo drop-off or collection timed to the slot you hold',
  'Dubai to Abu Dhabi and other inter-emirate runs, with a shaded water stop',
  'Quote confirmed on WhatsApp before the van is reserved',
]

const petTransportDubai: ServicePageData = {
  slug: 'pet-transport-dubai',
  seoTitle: 'Pet Taxi Dubai | Airport, City & Abu Dhabi Transfers',
  metaDescription:
    'Pet taxi in Dubai for dogs and cats: climate-controlled van, sized crate and handler for vet, boarding, DXB or DWC cargo and Abu Dhabi runs. Get a quote.',
  h1: 'Pet taxi in Dubai: city rides, DXB and DWC airport runs and trips between emirates',
  primaryKeyword: 'pet taxi dubai',
  heroEyebrow: 'Pet taxi and ground transfers',
  heroValueProp:
    'Need your dog or cat moved to a vet, boarding, DXB or DWC cargo, or Abu Dhabi: book a climate-controlled van with a sized crate and a handler.',
  heroImage: '/images/service-pet-transport-dubai.jpg',
  heroImageAlt:
    'Climate-controlled van interior with a secured pet travel crate in Dubai',
  snippetQuestion: 'How do I book a pet taxi in Dubai?',
  snippetAnswer:
    'Send the pickup and drop-off, pet type and size, crate or carrier, and the date and time window on WhatsApp. Add the DXB or DWC cargo slot for an airport run. We match a climate-controlled partner van, a sized crate and a handler, and confirm the quote before the van is reserved.',
  whatsappMessage: taxiWhatsapp,
  ctaLabel: 'Book a pet taxi',
  ctaSupport:
    'Send the pickup, drop-off, pet type and size, and the date. The quote is confirmed on WhatsApp before the van is reserved.',
  ctaHeading: 'Ready to book a pet taxi?',
  ctaBody:
    'Send the pickup, drop-off, pet type and size, and the date on WhatsApp. We reply with availability and a booking quote for that window.',
  paidIncludes: paidScopeItems,
  bookingCta: {
    heading: 'Get a pet taxi quote',
    intro:
      'Check availability for your date. Send the pickup, the drop-off, the pet type and size, and the time window. Add the cargo slot when the run is an airport drop-off or collection. The quote is confirmed before the van is reserved.',
    label: 'Check availability for your date',
    items: [
      'Pickup address',
      'Drop-off address',
      'Pet type and size',
      'Date and time window',
      'Cargo slot for airport runs',
    ],
  },
  trustBadges: [
    'Pet taxi and ground only',
    'Climate-controlled partners',
    'DXB and DWC airport runs',
    'Same-day when slots exist',
  ],
  hasHowTo: true,
  howToName: 'How a Dubai pet taxi booking works',
  sections: [
    {
      h2: 'What a pet taxi in Dubai covers',
      intro:
        'Book the ground trip for a set date: the vet, a boarding kennel, a DXB or DWC cargo desk, or Abu Dhabi, in a climate-controlled van with a sized crate and a handler.',
      body: [
        {
          type: 'p',
          text: 'The booking is a climate-controlled vehicle, a crate or carrier that fits the animal, and a handler who treats the pet as a passenger. Use it for home to vet, home to boarding, community to community, or a timed run to DXB or DWC.',
        },
        {
          type: 'list',
          items: [
            'City rides in Dubai: marina towers, villa communities, clinics and boarding',
            'Airport drop-off and collection at DXB Cargo Village and the DWC cargo terminal',
            'Dubai to Abu Dhabi and other inter-emirate ground transfers',
            'Vet appointments and boarding check-ins',
            'Multi-pet households in one booking when the crate space allows',
          ],
        },
        {
          type: 'p',
          text: 'A pet-friendly taxi is not an RTA street-hail cab and it is not a ride-hailing trip. Many street-hail drivers refuse a crate, and ride-hailing acceptance depends on the product and the driver. We do not state a Careem or RTA policy we cannot cite. We coordinate vetted partners. The vans are partner vehicles. The quote depends on the two addresses, the pet, the crate and the time.',
        },
        {
          type: 'p',
          text: 'Flying your pet into or out of the UAE starts with [pet relocation services in Dubai](/service/pet-relocation-dubai/), including [moving a pet to Dubai](/service/pet-relocation-to-dubai/) and [moving a pet from Dubai](/service/pet-relocation-from-dubai/).',
        },
      ],
    },
    {
      h2: 'How a pet taxi booking works',
      intro:
        'Four steps from the first message to the handover. You stay on WhatsApp during business hours until the pet is delivered.',
      body: [
        {
          type: 'steps',
          steps: [
            {
              title: 'Send the run',
              text: 'Pet type, size, temperament, pickup, drop-off, and a time window. Airport runs also need the cargo slot or flight time if you already have one.',
            },
            {
              title: 'Confirm vehicle and crate',
              text: 'We match a climate-controlled partner vehicle and a crate or carrier that fits the pet and the van door. Cats usually travel in a secure carrier. A large dog needs a sized crate and a handler who can load it calmly. If you already have a carrier, send the length, width and height.',
            },
            {
              title: 'Pickup',
              text: 'The handler arrives in the agreed window, settles the pet, and messages you when they leave. Tower lobbies and villa gates are planned, not improvised. See [Dubai communities we cover](/dubai/).',
            },
            {
              title: 'Drop-off',
              text: 'Handover at the clinic, home, boarding kennel or cargo desk, then a WhatsApp confirmation. On a cargo day this ground run is the last road leg of [pet relocation services in Dubai](/service/pet-relocation-dubai/). It does not replace that relocation.',
            },
          ],
        },
      ],
    },
    {
      h2: 'Airport runs to DXB Cargo Village and DWC',
      intro:
        'An airport pet taxi is a timed ground booking. It is not an international ticket and it does not hold a cargo slot for you.',
      body: [
        {
          type: 'p',
          text: 'DXB and DWC cargo terminals do not run on passenger-terminal logic. Drop-off is at the cargo desk, not the passenger kerb. DXB handovers are at Cargo Village. DWC runs use the cargo terminal at Al Maktoum. Windows are short, and a late van can miss acceptance. We plan the road time, the crate and the document pouch so the handler is not guessing at the desk. We do not promise a minute count.',
        },
        {
          type: 'list',
          items: [
            'Outbound drop-off timed to the cargo acceptance window at DXB Cargo Village or DWC',
            'Inbound collection after veterinary release, then delivery into a Dubai community',
            'South Dubai and many villa communities often sit closer to DWC; marina and downtown more often use DXB',
            'Abu Dhabi airport connections are planned as inter-emirate runs to the cargo terminal, not as a second cargo product',
          ],
        },
        {
          type: 'p',
          text: 'If the pet is flying and the cargo booking is not held yet, start with [pet relocation services in Dubai](/service/pet-relocation-dubai/). If the slot is already held and you only need the van, send the pickup, the terminal and the slot for a booking quote.',
        },
      ],
    },
    {
      h2: 'Dubai to Abu Dhabi, Sharjah and other emirates',
      intro:
        'The corridor people book most is Dubai to Abu Dhabi, and the return. Climate control and a water stop matter more than a faster highway time.',
      body: [
        {
          type: 'image',
          src: '/assets/w1-w3/dubai-abu-dhabi-pet-transport-route-map.png',
          alt: 'Inter-emirate pet transport route between Dubai and Abu Dhabi with approximate drive time',
          caption:
            'Illustrative corridor only. Drive time depends on traffic, the pickup community and rest stops.',
        },
        {
          type: 'image',
          src: '/assets/w1-w3/pet-transport-rest-stop-water-border-collie.jpg',
          alt: 'Border collie drinking water at a shaded rest stop on a UAE pet transport journey',
          caption: 'Longer inter-emirate runs get a shaded water stop. The pet travels as a passenger.',
        },
        {
          type: 'p',
          text: 'Dubai to Abu Dhabi is typically a one-and-a-half to two-hour road job before traffic, plus building access at both ends. We do not promise a 90-minute arrival. We sell a planned window, air-conditioning and a handler who stops in shade. Sharjah to Dubai, and crate runs between Sharjah and DXB, are booked the same way. Start at [pet relocation in Sharjah](/cities/sharjah/) for emirate context, then [pet relocation across the UAE](/cities/) for other emirates, then send the two addresses.',
        },
        {
          type: 'p',
          text: 'An inter-emirate pet taxi is still ground transport. It does not replace an international move. If the animal is entering the UAE, the MOCCAE import permit is valid for 90 days from issuance, and government fees are confirmed on the official MOCCAE portal. Compare [moving a pet to Dubai](/service/pet-relocation-to-dubai/) or [moving a pet from Dubai](/service/pet-relocation-from-dubai/) when the pet is crossing the border.',
        },
      ],
    },
    {
      h2: 'Vet, boarding and same-day pet taxi requests',
      intro:
        'A clinic or boarding run is a normal booking. A same-day pet taxi exists only when a vehicle is free for that window.',
      body: [
        {
          type: 'p',
          text: 'Send the clinic or kennel address, the pet and the appointment time. The handler plans the lobby, the lift or the villa gate. We place a same-day request when the window, the community and the vehicle line up. Messages are answered during published business hours. A night-before airport collection is arranged in advance.',
        },
        {
          type: 'list',
          items: [
            'Best same-day fit: a weekday clinic or boarding transfer inside Dubai',
            'Book ahead: a first cargo drop-off, a very large crate, or more than one pet',
            'Not offered as an emergency medical ambulance. Call a clinic if the animal is in distress',
          ],
        },
      ],
    },
    {
      h2: 'Vehicle, crate and handler standards',
      body: [
        {
          type: 'p',
          text: 'The crate has to fit the pet and the van. The animal needs room to stand, turn and lie down, and the loaded crate has to clear the van door and, on an airport run, the cargo desk. If the carrier is the wrong size, we say so before a vehicle is held.',
        },
        {
          type: 'list',
          items: [
            'Climate-controlled vehicles, essential in the UAE heat',
            'Secure crates or carriers sized for the pet and the van',
            'Handlers experienced with dogs and cats, including nervous animals',
            'A clean, ventilated space used for animals, not a last-minute ride-hailing car',
            'A route planned around the hottest hours when the calendar allows',
            'WhatsApp updates from pickup to delivery during business hours on +971504782999',
          ],
        },
        {
          type: 'p',
          text: 'If a vehicle or handler does not meet that bar, we do not use them for your booking. Vetting is how partners are chosen. It is not a government licence, an airline membership or an official endorsement. Email support@dubai-pet-relocation.ae.',
        },
      ],
    },
    {
      h2: 'How much is a pet taxi in Dubai? Typical market ranges (not our quote)',
      intro:
        'The bands below are typical market ranges for a ground pet taxi in the UAE, dated 4 September 2026. They are not our quote or our selling prices. Your quote depends on the addresses, the pet, the crate and the time window.',
      body: [
        {
          type: 'table',
          headers: ['Trip type', 'Typical market range (AED)', 'How to read it'],
          rows: [
            ['Local short transfer', 'from 75 to 150', 'Market range, not our quote'],
            ['By distance within the city', 'from 75 to 350', 'Market range, not our quote'],
            ['DXB airport pet taxi', 'from 450 to 525', 'Market range, not our quote'],
            ['AUH airport pet taxi', 'from 750 to 840', 'Market range, not our quote'],
            ['Dubai to Abu Dhabi inter-emirate', 'from 400 to 700', 'Market range, not our quote'],
            ['Two-way or return pet taxi', 'from 140 to 790', 'Market range, not our quote'],
            ['Out-of-hours surcharge examples', '75 to 105', 'Examples only, not a flat add-on promise'],
          ],
        },
        {
          type: 'p',
          text: 'Last checked 4 September 2026. Send both addresses, the pet and the time window for a booking quote. Government permit fees for international moves are confirmed on the official MOCCAE portal. A full international move is [pet relocation services in Dubai](/service/pet-relocation-dubai/). Cost types for that move are in [what pet relocation costs in 2026](/guides/pet-relocation-cost-dubai/). Ground context sits on the [Abu Dhabi city guide](/cities/abu-dhabi/) and [pet relocation in Sharjah](/cities/sharjah/).',
        },
      ],
      paidScope: {
        items: paidScopeItems,
        ctaLabel: 'Check availability for your date',
        ctaMessage: taxiWhatsapp,
        secondary: {
          prefix: 'Flying your pet abroad? See',
          label: 'pet relocation services in Dubai',
          to: '/service/pet-relocation-dubai/',
        },
      },
    },
  ],
  faq: [
    {
      q: 'How far ahead should I book a pet taxi in Dubai?',
      a: 'A weekday clinic or boarding run inside Dubai can often be placed the day before, or the same day when a vehicle is free. A first airport drop-off, a large crate, or more than one pet needs earlier notice so the vehicle and handler are matched. Send the date, both addresses and the pet size to check that window. WhatsApp is for a booking quote.',
    },
    {
      q: 'What should I have ready when I book a pet taxi?',
      a: 'Have the pet type and size, whether you already own a crate or carrier, the pickup address, the drop-off address, and a time window. For an airport run, add DXB or DWC and the cargo slot or flight time. We send a booking quote for that window before we hold a vehicle.',
    },
    {
      q: 'How early should the van arrive for an airport drop-off?',
      a: 'Cargo desks at DXB Cargo Village and the DWC cargo terminal use a short acceptance window. It is not the passenger-terminal clock. Share that acceptance or collection time and the road time is set so the handler is at the desk inside the window. The van does not replace the airline booking. Send the slot for a booking quote.',
    },
    {
      q: 'Are pets allowed in taxis in Dubai?',
      a: 'Ordinary street-hail taxis often refuse a crate, and many drivers will not take an unsecured dog or cat. There is no reliable street-hail option for a secured animal. We do not cite an RTA rule we have not read on an official page. Send the pet size, the crate and both addresses on WhatsApp +971504782999 for a booking quote.',
    },
    {
      q: 'Are pets allowed in Careem taxi?',
      a: 'Careem acceptance depends on the product and the driver who gets the request. That is not a reserved pet vehicle, and we do not state a Careem policy or claim any Careem link. For a cargo release or a timed airport hand-off, book a dedicated partner van instead of waiting on a driver to accept the crate. Send the pet size and the pickup window for a booking quote.',
    },
    {
      q: 'How much is a pet taxi in Dubai?',
      a: 'Market ranges dated 4 September 2026, and not our quote, are a local short transfer from 75 to 150 AED, a city trip by distance from 75 to 350 AED, a DXB airport run from 450 to 525 AED, an AUH airport run from 750 to 840 AED, a Dubai to Abu Dhabi trip from 400 to 700 AED, and a two-way trip from 140 to 790 AED. Out-of-hours examples of 75 to 105 AED are examples only, not a flat add-on. The quote uses both addresses, the pet, the crate and the time window, and it is confirmed on WhatsApp before the van is reserved. Government permit fees, when the pet is crossing a border, are confirmed on the official MOCCAE portal.',
    },
    {
      q: 'Is there a pet friendly taxi in Dubai?',
      a: 'A pet-friendly booking is a climate-controlled partner van, a crate or carrier that fits the animal, and a handler for a clinic, home, boarding kennel or cargo desk. It is not a street-hail taxi and it is not a ride-hailing car. The vans are partner vehicles. WhatsApp +971504782999 with both addresses and the window for a booking quote.',
    },
    {
      q: 'Which taxi service is pet friendly?',
      a: 'Choose a dedicated pet booking rather than a standard taxi app. The booking covers city rides, airport cargo desks and inter-emirate ground trips. An app request can still be declined by the driver. International cargo is a different service: see [pet relocation services in Dubai](/service/pet-relocation-dubai/). Send the pickup, the drop-off and the pet size for a booking quote.',
    },
    {
      q: 'What is a pet taxi in Dubai versus a full relocation?',
      a: 'It is the climate-controlled ground trip: a clinic, a home, boarding or an airport cargo desk. A full relocation covers documents and the flight. Air cargo is the usual mode into Dubai, not the van. Compare cabin, baggage, cargo, jet and charter on the [pet flight options hub](/guides/pet-flight-options-dubai/). Flying into or out of the UAE starts at [pet relocation services in Dubai](/service/pet-relocation-dubai/). Send the trip for a booking quote if you only need the van.',
    },
    {
      q: 'Do you offer same-day pet taxi bookings in Dubai?',
      a: 'A same-day booking is possible when a vehicle, the crate size and community access line up. Same-day means a free slot that day, agreed before we hold the van. Message during business hours with both addresses and the window for a booking quote.',
    },
    {
      q: 'Can a pet taxi take my dog to DXB or DWC?',
      a: 'An airport booking covers a timed drop-off or collection at DXB Cargo Village or the DWC cargo terminal, then delivery into a Dubai community. We still need the cargo slot or collection time. The van does not replace the airline booking. Send that slot for a booking quote.',
    },
    {
      q: 'Can I book a pet taxi from Dubai to Abu Dhabi airport?',
      a: 'An airport booking is a ground transfer to the Abu Dhabi cargo terminal, with climate control and a shaded water stop when the drive needs it. A city drop-off, with no airport, is the same corridor, quoted as a planned window rather than a guaranteed minute count. Share the pickup, home or cargo terminal, the pet and the time window. The van does not replace the airline booking. Send those details for a booking quote.',
    },
    {
      q: 'Are pet taxi vehicles climate-controlled in summer?',
      a: 'Partner vehicles used for these bookings are climate-controlled. That is a handling standard in the UAE heat, not an optional extra. Send the date and both addresses for a booking quote.',
    },
    {
      q: 'Can I book a pet taxi for a vet or boarding trip only?',
      a: 'Many bookings never touch an airport. Send the clinic or boarding address, the pet details and the appointment time, and we reply with a booking quote for that run.',
    },
    {
      q: 'Do you operate pet taxi 24 hours a day?',
      a: 'Bookings are taken during published business hours. A night-before airport collection is a confirmed slot, arranged in advance, not an overnight dispatch. Message in business hours with the window you need for a booking quote.',
    },
  ],
  relatedLinks: [
    { label: 'Dubai communities we cover', to: '/dubai/' },
    { label: 'Pet relocation across the UAE', to: '/cities/' },
    { label: 'Abu Dhabi city guide', to: '/cities/abu-dhabi/' },
    { label: 'Sharjah city guide', to: '/cities/sharjah/' },
    { label: 'IATA pet crate requirements', to: '/guides/iata-pet-crate-requirements/' },
    { label: 'Request a booking quote', to: '/contact/' },
    { label: 'Pet flight options hub', to: '/guides/pet-flight-options-dubai/' },
    { label: 'Pet relocation services in Dubai', to: '/service/pet-relocation-dubai/' },
    { label: 'Compare our service tiers', to: '/services/' },
    { label: 'How it works', to: '/how-it-works/' },
    { label: 'Guides hub', to: '/guides/' },
  ],
}

export default petTransportDubai
