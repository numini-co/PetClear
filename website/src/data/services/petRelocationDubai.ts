import type { ServicePageData } from '../../types/servicePage.ts'
import { GUIDE_SOFT_GATE, waEligibility } from '../../lib/conversionCopy.ts'

const petRelocationDubai: ServicePageData = {
  slug: 'pet-relocation-dubai',
  seoTitle: 'Pet Relocation Services Dubai | Compare Tiers & Quotes',
  metaDescription:
    'Pet relocation services in Dubai for a dog or cat. Check eligibility, then request a managed-move quote from documents to doorstep.',
  h1: 'Pet relocation services in Dubai, managed from documents to doorstep',
  primaryKeyword: 'pet relocation services Dubai',
  heroValueProp:
    'Compare import, export and door-to-door first if unsure; we hold the permit, crate, flight and handover, then quote after an eligibility check.',
  heroImage: '/images/service-pet-relocation-dubai.jpg',
  heroImageAlt:
    'Handler carrying a cat in a travel carrier toward a Dubai doorway',
  whatsappMessage: waEligibility({ need: 'managed move' }),
  ctaLabel: 'Get a managed-move quote',
  ctaSupport:
    'Send the pet, the route and the month. We reply with an eligibility check and a managed-move quote.',
  ctaHeading: 'Ready for a managed-move quote?',
  ctaBody:
    'Send pet type, breed, origin, destination and a target month. We reply with eligibility and a managed-move quote before any booking.',
  gateLine: GUIDE_SOFT_GATE,
  paidIncludes: [
    'Breed and route eligibility check before booking',
    'MOCCAE import permit timed so the 90-day window from issuance covers arrival, or the export certificate sequenced for the destination',
    'Airline or cargo booking with the IATA crate measured on your pet',
    'DXB or DWC release and home handover with vetted partners',
    'One coordinator on WhatsApp in published hours',
  ],
  trustBadges: ['Document review before travel', 'MOCCAE permit guidance', 'IATA crate sizing help', 'WhatsApp during business hours'],
  hasHowTo: true,
  howToName: 'How door-to-door pet relocation in Dubai is coordinated',
  sections: [
    {
      h2: 'What do pet relocation services in Dubai include?',
      intro:
        'Pet relocation services in Dubai are the paid coordination of a dog or cat: document guidance, a managed import or export, and door-to-door handling of the crate, the flight and the handover. You pay for an eligibility check first, then for one coordinator to hold that work through to the doorstep. The MOCCAE import permit is valid for 90 days from issuance.',
      body: [
        {
          type: 'p',
          text: 'Not sure which you need? Compare [import](/service/pet-relocation-to-dubai/), [export](/service/pet-relocation-from-dubai/) and [door-to-door](/services/) first. A road transfer inside the UAE, including pet taxi, is [local pet transport and pet taxi](/service/pet-transport-dubai/).',
        },
        {
          type: 'p',
          text: 'Door-to-door pet relocation means we coordinate the pieces that have to line up: eligibility, documents, crate, cargo booking, airport handling and the last-mile handover. We are a coordination service, not the airline and not the vehicle owner. Vetted veterinary and transport partners do the physical work. We keep the sequence, the paperwork and the WhatsApp thread consistent.',
        },
        {
          type: 'list',
          items: [
            'Document review: microchip, rabies vaccination, health certificate and titer result where the route requires one',
            'MOCCAE import or export permit guidance. The import permit is valid for 90 days from issuance, and that window is confirmed before you book',
            'Breed eligibility against current UAE restricted-breed rules, before you commit to a flight',
            'IATA-compliant crate measurement and sourcing through partners, not a guess from a chart',
            'Cargo booking coordination with pet-experienced airlines. Longer cargo detail is on [international pet relocation](/service/international-pet-relocation/)',
            'Customs and last-mile handover at DXB or DWC, then delivery into a Dubai community or collection for departure',
          ],
        },
        {
          type: 'p',
          text: 'Compare how much of that sequence we hold on [compare our service tiers](/services/). Coordination packages are listed on [Prices](/prices/). Then send your departure city, destination, pet details and preferred travel date on WhatsApp for an eligibility check and a managed-move quote. Government fees are confirmed on the official MOCCAE portal.',
        },
      ],
    },
    {
      h2: 'How to choose a pet relocation company in Dubai',
      intro:
        'A pet relocation company in Dubai should name the process before it names a price. We do not publish a companies ranking. We are Dubai Pet Relocation, and the quote follows an eligibility check.',
      body: [
        {
          type: 'list',
          items: [
            'Will they state the MOCCAE import permit as valid 90 days from issuance and confirm government fees on the official portal?',
            'Do they name a process (documents, crate, cargo or cabin, last mile), or only a from-price?',
            'Will they match the animal to a legal flight mode (Etihad cabin into Abu Dhabi, cargo into DXB, jet or charter only when a scheduled flight will not take the pet)?',
            'Are they a coordinator, not a fake airline or an invented IPATA member?',
            'Can you reach them on WhatsApp (+971 50 478 2999) or support@dubai-pet-relocation.ae when you are ready to book a managed move?',
          ],
        },
        {
          type: 'p',
          text: 'There is no honest number-one list. We are a provider, not a review site. Judge us, and anyone else, by licensing, by MOCCAE permit guidance, and by fee transparency: government amounts confirmed on the official portal, and our coordination quoted after eligibility. Cabin, cargo, jet or charter has to fit the animal. Email support@dubai-pet-relocation.ae or WhatsApp +971 50 478 2999 when you want an eligibility check.',
        },
        {
          type: 'p',
          text: 'Those questions beat a trophy list. Compare how much of the file we hold on [compare our service tiers](/services/), then ask for a managed-move quote.',
        },
      ],
    },
    {
      h2: 'Flight options we can arrange',
      intro:
        'We match the air product to the animal, then hold the documents, the crate and the last mile. These six cards are the flight options. Compare them on the hub, then ask for a managed-move quote.',
      body: [
        {
          type: 'cards',
          cards: [
            {
              title: 'All six flight modes (hub)',
              text: 'Decision table: cabin, baggage, cargo, jet, charter and door-to-door coordination.',
              to: '/guides/pet-flight-options-dubai/',
              kind: 'Guide',
            },
            {
              title: 'Pet in cabin',
              text: 'Etihad only; 8 kg or under including the carrier; arrives Abu Dhabi. UAE imports otherwise travel as manifest cargo.',
              to: '/guides/etihad-pet-policy/',
              kind: 'Guide',
            },
            {
              title: 'Pet as checked baggage',
              text: 'Accompanied hold. Blocked for itineraries ending in Dubai. Emirates under-17-hour rule from Dubai.',
              to: '/guides/pet-as-checked-baggage/',
              kind: 'Guide',
            },
            {
              title: 'Manifest air cargo',
              text: 'Cargo process for animals that cannot travel in the cabin. Emirates animal-charge tiers apply. Freight is quoted per route and weight.',
              to: '/guides/emirates-pet-cargo/',
              kind: 'Guide',
            },
            {
              title: 'Private jet pet travel',
              text: 'Jet travel is quoted on the private jet page.',
              to: '/service/private-jet-pet-travel/',
              kind: 'Service',
            },
            {
              title: 'Shared / group pet charter',
              text: 'A shared charter seat is quoted for the pet and the route. A market listing is not our price.',
              to: '/service/shared-pet-charter/',
              kind: 'Service',
            },
          ],
        },
        {
          type: 'p',
          text: 'We are not the airline. Cabin fees and the Emirates animal-charge table are on the guides linked above. Private jet and shared charter quotes, including any market listing you have seen, are on [private jet pet travel](/service/private-jet-pet-travel/) and [shared pet charter](/service/shared-pet-charter/).',
        },
      ],
    },
    {
      h2: 'How a managed move runs, step by step',
      intro:
        'Every international move through Dubai follows the same backbone. The depth of help changes by tier. The order does not.',
      body: [
        {
          type: 'image',
          src: '/assets/w1-w3/pet-relocation-dubai-process-five-stages.png',
          alt: 'Five-stage pet relocation process in Dubai: quote, documents, booking, travel day, delivery',
          caption: 'Five stages, one WhatsApp thread. The longer sequence is on How it works.',
        },
        {
          type: 'steps',
          steps: [
            {
              title: 'Quote and eligibility',
              text: 'Send pet type, breed, weight, origin or destination, and a target month. We confirm breed rules, seasonal airline limits and whether the route is inbound, outbound or a local-only transfer.',
            },
            {
              title: 'Document check',
              text: 'We line-check microchip, vaccinations and certificates against the route. Import permits are valid 90 days from issuance. For inbound titer, use a result of at least 0.5 IU/ml and a certificate valid for 365 days if the vaccine stays valid and continuous and no booster is given. That is not a 90-day wait after the test.',
            },
            {
              title: 'Crate and cargo booking',
              text: 'We size the crate to the animal, then coordinate a cargo booking. Snub-nosed breeds and summer heat change airline options. Those constraints are flagged here, not after you have paid for a ticket.',
            },
            {
              title: 'Travel day',
              text: 'Handlers, crate labels and the document pouch have to match. We coordinate the airport side and keep you on WhatsApp during business hours. We do not claim a 24/7 desk.',
            },
            {
              title: 'Delivery or departure handover',
              text: 'Inbound pets are cleared and taken to the new address. Outbound pets leave DXB or DWC with destination paperwork already timed. See [How it works](/how-it-works/) for the longer seven-step view.',
            },
          ],
        },
      ],
    },
    {
      h2: 'Documents, crate and cargo: what we handle',
      intro:
        'A Dubai move stalls on a mismatched microchip, a crate that fails the airline door check, or a cargo booking made before the permit window is clear. On a managed move, those three sit with us.',
      body: [
        {
          type: 'image',
          src: '/assets/w1-w3/measuring-toy-poodle-crate-sizing-dubai.jpg',
          alt: 'Hands measuring a toy poodle with a tape for IATA crate sizing before a Dubai pet relocation',
          caption: 'Crate size drives both welfare and the airline’s accept or reject decision. We measure the pet.',
        },
        {
          type: 'p',
          text: 'The document set is route-specific, but the Dubai-side constants are an ISO 15-digit microchip, a current rabies vaccination, a government health certificate, and a MOCCAE permit. Inbound permits must still be valid on the day the pet arrives. Confirm permit and release fees on the official MOCCAE portal. We do not print those government amounts.',
        },
        {
          type: 'p',
          text: 'Crate sizing is a measurement, not a breed average. The animal must stand, turn and lie down. Hardware (door grid, bolts, water bowl clips) is what cargo staff actually inspect. The full checklist is the [IATA crate rules](/guides/iata-pet-crate-requirements/) guide.',
        },
        {
          type: 'p',
          text: 'Pet shipping Dubai is the cargo booking inside a managed move, not a separate product. Longer cargo detail is on [international pet relocation](/service/international-pet-relocation/). Airline cargo rules are in the [Emirates pet cargo](/guides/emirates-pet-cargo/) guide. We coordinate the booking. We do not operate the aircraft. Compare modes on the [pet flight options hub](/guides/pet-flight-options-dubai/). For country-level rules, use the [routes hub](/routes/).',
        },
        {
          type: 'list',
          items: [
            'Inbound arrivals: [UAE pet import requirements for dogs and cats](/guides/uae-pet-import-requirements/) and [MOCCAE import permit](/guides/moccae-import-permit/)',
            'Breed questions: [banned dog breeds in Dubai](/guides/banned-dog-breeds-dubai/)',
            'Titer timing: [rabies titer test](/guides/rabies-titer-test-dubai/). Use a result of at least 0.5 IU/ml and a certificate valid for 365 days if the vaccine stays valid and continuous and no booster is given',
            'Cost drivers without a fee table: [what pet relocation costs in 2026](/guides/pet-relocation-cost-dubai/)',
            'Talk to the team when you are ready for a managed-move quote: [contact](/contact/)',
          ],
        },
        {
          type: 'p',
          text: 'We coordinate the move. We are not the airline and we do not issue the MOCCAE permit. The sequence is the ISO microchip before the rabies vaccination, then the titre certificate when the route requires one, with breed, season and flight mode checked before anyone pays for cargo. Arrival or departure handover is at DXB or DWC, then the last mile into a named Dubai community. One coordinator is on WhatsApp +971504782999 during business hours, or by email at support@dubai-pet-relocation.ae. We do not publish move counts, star ratings or a 24/7 desk. Use the [import checklist](/guides/import-checklist/) if you want a tick-list before you ask for a managed-move quote.',
        },
        {
          type: 'p',
          text: 'The last mile only works if it matches the building. A high-rise in Marina and a villa in Arabian Ranches are not the same pickup. Pet movers Dubai means that handover inside a managed move, not a separate taxi brand. We coordinate collection and delivery across Dubai communities: Marina, JBR, JLT, Jumeirah, Downtown, Business Bay, Palm Jumeirah, Arabian Ranches, JVC, Al Barsha, Mirdif and others listed on the [Dubai communities we cover](/dubai/) hub. Other emirates start at [pet relocation across the UAE](/cities/).',
        },
        {
          type: 'p',
          text: 'Dogs and cats share the federal permit chain. They do not share crate size, airline rules or apartment rules. Species detail is on [dog relocation](/service/dog-relocation-dubai/) and [cat relocation](/service/cat-relocation-dubai/). The paid arrival service is [managed pet import](/service/pet-import-dubai/). The checklist is the [UAE import guide](/guides/uae-pet-import-requirements/). Leaving the UAE is [pet export from Dubai](/service/pet-export-dubai/).',
        },
      ],
    },
    {
      h2: 'What affects your quote',
      intro:
        'Your quote depends on the route, your pet\'s size, the travel arrangements and how much of the file you want held. We describe those drivers here and send a proposal on WhatsApp. Government fees are confirmed on the official portal.',
      body: [
        {
          type: 'table',
          headers: ['Driver', 'Why it moves the quote'],
          rows: [
            ['Direction', 'Inbound (permit + arrival clearance) versus outbound (destination rules first)'],
            ['Pet size and crate', 'Airline chargeable weight and whether a larger crate is required'],
            ['Origin or destination rules', 'Titer, treatments and quarantine windows sit on the route, not on a generic average'],
            ['Season', 'Summer heat embargoes and snub-nosed restrictions shrink airline choice'],
            ['How much we hold', 'Document guidance only versus booking, travel day and last mile. See [service tiers](/services/)'],
          ],
        },
        {
          type: 'p',
          text: 'Government permit and release amounts must be confirmed on the official MOCCAE portal. Export-certificate amounts are confirmed there too. For the other drivers, open the [cost guide](/guides/pet-relocation-cost-dubai/) and then [contact the team](/contact/) for a managed-move quote.',
        },
        {
          type: 'p',
          text: 'Other companies publish their own packages. Dubai Pet Relocation coordination is quoted for the pet and the route. Government fees, the clinic, the airline, and the crate stay on their own invoices.',
        },
      ],
    },
  ],
  faq: [
    {
      q: 'What is the best pet relocation service in Dubai?',
      a: '“Best” depends on your origin, species, and whether you need documentation-only or door-to-door coordination. Dubai Pet Relocation coordinates MOCCAE permits, veterinary timing, airline live-animal booking, and arrival handover for dogs and cats. We do not publish move counts or star ratings. Send your move details for an eligibility check and a managed-move quote. Cost types: [what pet relocation costs in 2026](/guides/pet-relocation-cost-dubai/). Dog-specific: [dog relocation to Dubai](/dog-relocation-to-dubai/). WhatsApp +971504782999 when you are ready to book.',
    },
    {
      q: 'How much do pet relocation services cost in Dubai?',
      a: 'Pet relocation services in Dubai are quoted after an eligibility check. The quote moves with the route, the pet’s size and crate, destination rules, the season, and how much of the file we hold. Government permit and release fees are confirmed on the official MOCCAE portal. We do not publish a fee table. The driver list is on the [cost guide](/guides/pet-relocation-cost-dubai/). WhatsApp +971504782999 for a managed-move quote.',
    },
    {
      q: 'How do I judge pet relocation services in Dubai without a ranking list?',
      a: 'Judge the process, not a trophy list. Ask who confirms government fees on the official MOCCAE portal, who will not force cabin onto an animal that must travel as cargo, and who quotes the file after eligibility. Compare tiers on [our services hub](/services/). We are Dubai Pet Relocation, and door-to-door coordination is the managed move. We do not publish a companies list.',
    },
    {
      q: 'What does door-to-door pet relocation in Dubai include?',
      a: 'It includes the coordinated sequence: eligibility, document review, MOCCAE permit guidance, IATA crate sizing, cargo booking coordination, airport handling and the last-mile handover. We do not fly the animal ourselves. Compare depth of help on [compare our service tiers](/services/).',
    },
    {
      q: 'Do you operate the airline or just coordinate cargo booking?',
      a: 'We coordinate the booking. We do not operate the aircraft. Pet shipping is the cargo booking inside the managed move. Longer cargo detail is on [international pet relocation](/service/international-pet-relocation/). Emirates cargo rules are in the [Emirates pet cargo](/guides/emirates-pet-cargo/) guide. We work with pet-experienced airlines and transport partners. We are not the carrier.',
    },
    {
      q: 'How long is a MOCCAE import permit valid for a Dubai relocation?',
      a: 'A MOCCAE import permit is valid for 90 days from issuance. The pet must arrive inside that window.',
    },
    {
      q: 'When should the rabies titer blood sample be taken?',
      a: 'When a titer is required for the route, use a result of at least 0.5 IU/ml and a certificate valid for 365 days if the vaccine stays valid and continuous and no booster is given. That is not the same as a 90-day waiting period after the test. See the [rabies titer test](/guides/rabies-titer-test-dubai/) guide.',
    },
    {
      q: 'Can you relocate pets inside Dubai as well as internationally?',
      a: 'An international door-to-door move covers arrival in Dubai or departure from Dubai. Same-city or inter-emirate ground moves, including pet taxi, are handled as [local pet transport and pet taxi service](/service/pet-transport-dubai/). We will not force a cargo booking onto a vet visit.',
    },
    {
      q: 'What happens on travel day at DXB or DWC?',
      a: 'The crate, labels and document pouch have to match. Inbound pets go through veterinary inspection at the cargo terminal. Outbound pets depart with destination paperwork already timed. We coordinate the handoffs and update you on WhatsApp during business hours.',
    },
    {
      q: 'How do I choose between Essential guidance and full coordination?',
      a: 'If you already understand cargo and only need document checks, start on the Essential tier. If you want bookings and travel-day held for you, choose a coordination tier. The regulatory steps do not change. Only who holds each task changes. Open [compare our service tiers](/services/).',
    },
    {
      q: 'What do you need from me to quote a managed move?',
      a: 'Send pet type, breed, approximate weight, origin, destination and a target month. We reply with an eligibility check and the drivers that change the managed-move quote. We do not publish a fee table. Government permit and release amounts are confirmed on the MOCCAE portal. You can also [contact the team](/contact/).',
    },
    {
      q: 'How far ahead should I book a managed move?',
      a: 'Start when the travel month is real, not the week of the flight. A route that needs a rabies titer and a MOCCAE import permit (valid 90 days from issuance) has to clear vaccination and lab timing before the airline is booked. Send the pet, origin, destination and target month and we reply with a managed-move quote.',
    },
    {
      q: 'Which flight modes do you arrange?',
      a: 'We arrange cabin on Etihad into Abu Dhabi, accompanied checked baggage where the airline allows it, and manifest cargo, which is the usual mode for a UAE import. Private jet and shared charter quotes are on [private jet pet travel](/service/private-jet-pet-travel/) and [shared pet charter](/service/shared-pet-charter/). Compare modes on the [pet flight options hub](/guides/pet-flight-options-dubai/).',
    },
    {
      q: 'How do I start a pet relocation to Dubai?',
      a: 'Send species, breed, weight, origin and a target month on WhatsApp +971504782999. We confirm breed rules, the 90-day MOCCAE permit window and whether cargo, cabin, jet or charter fits. Tick-list: [import checklist](/guides/import-checklist/). We reply during business hours. We do not promise a 15-minute reply.',
    },
    {
      q: 'Who actually handles my pet on travel day?',
      a: 'Vetted veterinary and transport partners handle the animal. We hold the sequence, the document pouch and the WhatsApp thread. We are not the airline, and we do not issue the MOCCAE permit.',
    },
    {
      q: 'What should a pet relocation company in Dubai show before you pay?',
      a: 'A pet relocation company in Dubai should name the process before the price: documents, crate, flight mode and last mile, with the MOCCAE import permit valid 90 days from issuance and government fees confirmed on the official portal. We do not publish a companies ranking or star ratings. Send the pet, the route and the month for an eligibility check and a managed-move quote.',
    },
  ],
  relatedLinks: [
    { label: 'Pet flight options hub', to: '/guides/pet-flight-options-dubai/' },
    { label: 'Emirates pet cargo', to: '/guides/emirates-pet-cargo/' },
    { label: 'Etihad pet policy', to: '/guides/etihad-pet-policy/' },
    { label: 'Private jet pet travel', to: '/service/private-jet-pet-travel/' },
    { label: 'Shared pet charter', to: '/service/shared-pet-charter/' },
    { label: 'What pet relocation costs in 2026', to: '/guides/pet-relocation-cost-dubai/' },
    { label: 'Pet import checklist', to: '/guides/import-checklist/' },
    { label: 'Pet import services Dubai', to: '/service/pet-import-dubai/' },
    { label: 'Pet export Dubai', to: '/service/pet-export-dubai/' },
    { label: 'Contact for a managed-move quote', to: '/contact/' },
    { label: 'Compare our service tiers', to: '/services/' },
    { label: 'Bringing your pet to Dubai', to: '/service/pet-relocation-to-dubai/' },
    { label: 'Moving your pet out of Dubai', to: '/service/pet-relocation-from-dubai/' },
    { label: 'Local pet transport and pet taxi', to: '/service/pet-transport-dubai/' },
    { label: 'How it works', to: '/how-it-works/' },
    { label: 'Dubai communities we cover', to: '/dubai/' },
  ],
}

export default petRelocationDubai
