import type { ServicePageData } from '../../types/servicePage.ts'
import { FLIGHT_MODE_PATHS } from '../flightModes.ts'
import { waEligibility } from '../../lib/conversionCopy.ts'

const sharedPetCharter: ServicePageData = {
  slug: 'shared-pet-charter',
  seoTitle: 'Shared Pet Charter Flight Dubai | Quote-Only Seats',
  metaDescription:
    'Shared pet charter flight Dubai: a dedicated lift shared with other pets. A firm seat is Get a Quote. WhatsApp +971504782999.',
  h1: 'Shared Pet Charter Flight Dubai — Quote-Only',
  primaryKeyword: 'shared pet charter flight Dubai',
  heroValueProp:
    'A menu offer for a dedicated lift shared with other pets — more control than a scheduled belly hold, without buying the whole aircraft. This is not the door-to-door pet relocation page. Market listings below are labelled third-party context. A firm seat is Get a Quote.',
  heroImage: '/assets/w-flight-modes/shared-pet-charter-dogs-dedicated-lift-dubai.jpg',
  heroImageAlt:
    'Two calm dogs in travel crates inside a dedicated animal-lift cabin',
  whatsappMessage: waEligibility({ need: 'shared pet charter / managed move' }),
  ctaLabel: 'Check charter eligibility',
  heroEyebrow: 'Charter coordination',
  snippetQuestion: 'What is a shared pet charter?',
  snippetAnswer:
    'A shared pet charter is a dedicated lift that several pets share — more control than scheduled cargo, without buying a whole private jet. Firm seats we coordinate are Get a Quote. Labelled third-party seats (Elite Pets, PetXJets, JetCircle, press) are market context, not our prices. Documents and the 90-day import permit still apply.',
  trustBadges: ['Firm seat = Get a Quote', 'Labelled market listings only', 'Documents still required', 'WhatsApp during business hours'],
  hasHowTo: true,
  howToName: 'How a shared pet charter is coordinated',
  sections: [
    {
      h2: 'What a shared pet charter is (and is not)',
      intro:
        'This is an offer / menu page for shared-charter coordination. It is not [door-to-door pet relocation](/service/pet-relocation-dubai/), it is not [private jet pet travel](/service/private-jet-pet-travel/), and it is not scheduled [manifest cargo](/guides/emirates-pet-cargo/).',
      body: [
        {
          type: 'p',
          text: 'On a shared / group charter, several pets travel on a dedicated or part-chartered aircraft arranged for live animals. You are not buying the empty cabin. You are buying a place on a lift that only goes when enough animals (or a sponsor) make it viable. We coordinate your file onto that lift. We do not operate the aeroplane and we are not affiliated with any airline.',
        },
        {
          type: 'table',
          headers: ['', 'Scheduled cargo', 'Shared charter', 'Private jet'],
          rows: [
            [
              'Aircraft',
              'Airline belly / SkyCargo',
              'Dedicated or part-chartered lift',
              'Whole aircraft for one party',
            ],
            [
              'Who else is on board',
              'Freight and other live-animal consignments',
              'Other pets on the same lift',
              'Your party only',
            ],
            [
              'When it flies',
              'Airline schedule',
              'When the lift is confirmed',
              'When you accept the quote',
            ],
            [
              'Price on this site',
              'Airline animal-charge tiers on the cargo guide; freight quoted per route/weight',
              'Market listings as context; firm seat = quote',
              'Custom charter quote only',
            ],
          ],
        },
        {
          type: 'p',
          text: 'If you searched for pet relocation in Dubai, open [door-to-door pet relocation](/service/pet-relocation-dubai/). If the job is a multi-country cargo file, open [international pet relocation](/service/international-pet-relocation/). If scheduled cargo will accept the animal, start on the [Emirates cargo guide](/guides/emirates-pet-cargo/). If you need the whole aircraft, open the [private jet](/service/private-jet-pet-travel/) page. All six modes sit on the [pet flight options hub](/guides/pet-flight-options-dubai/).',
        },
      ],
    },
    {
      h2: 'Empty-leg, pet charter Dubai, and manifest cargo versus charter',
      intro:
        'Searchers mix three phrases. We keep them distinct so a quote matches the aircraft, not the blog label.',
      body: [
        {
          type: 'p',
          text: 'Empty-leg is a positioning flight that already has to move — an operator may sell leftover capacity. A shared pet charter Dubai lift can use an empty-leg slot when one exists; it can also be a purpose-built animal lift that only goes when enough pets fill it. We do not advertise empty-leg seats we do not have. If none is forming, we say so and move you to cargo or a full jet.',
        },
        {
          type: 'p',
          text: 'Pet charter Dubai is the commercial phrase for a dedicated or part-chartered aircraft arranged for live animals. It is not scheduled belly freight. Manifest cargo is the default UAE arrival product: the pet travels as a booked consignment on a commercial airline (often Emirates SkyCargo into DXB). Charter buys control of when the lift flies and who else is on board. Cargo buys an airline schedule. Documents and the 90-day MOCCAE import permit still apply on both.',
        },
        {
          type: 'p',
          text: 'Country corridors still start on the route page — for example [UK to Dubai](/routes/uk-to-dubai/) or [USA to Dubai](/routes/usa-to-dubai/) — then come back here only if scheduled cargo will not accept the animal. Compare modes on the [pet flight options hub](/guides/pet-flight-options-dubai/). Door-to-door coordination sits on [pet relocation Dubai](/service/pet-relocation-dubai/). Coordination is quoted after eligibility on [Prices](/prices/) — we do not invent a DPR charter AED.',
        },
      ],
    },
    {
      h2: 'When a shared charter beats cargo — and who it is for',
      intro:
        'A pet charter Dubai lift is not the default. Most UAE arrivals still use scheduled manifest cargo. Charter is the exception when cargo will not accept the animal, the week, or the crate plan.',
      body: [
        {
          type: 'list',
          items: [
            'Scheduled belly or SkyCargo will not accept the breed, snub-nose type, crate size or summer heat window',
            'The itinerary needs a dedicated lift date that an airline timetable cannot hold',
            'Several pets in one household would otherwise split across cargo bookings',
            'An empty-leg or part-chartered animal lift is actually forming — we do not invent one',
          ],
        },
        {
          type: 'p',
          text: 'Who it is for: owners who already know cargo is blocked or fragile, and who want a shared lift rather than buying a whole [private jet](/service/private-jet-pet-travel/). Who it is not for: a first search for [pet relocation Dubai](/service/pet-relocation-dubai/) or a DIY cargo file — start on the [pet flight options hub](/guides/pet-flight-options-dubai/) and the cargo guide. Documents and the 90-day MOCCAE import permit still apply.',
        },
        {
          type: 'p',
          text: 'A firm seat we coordinate is Get a Quote after eligibility. Labelled third-party market ranges on this page are not DPR rates. Scoped coordination packages live on [Prices](/prices/). WhatsApp +971504782999 only if you want us to check whether a lift exists for your route and pet.',
        },
      ],
    },
    {
      h2: 'Coordination scope',
      intro:
        'A shared lift does not waive UAE rules. Import still means a 90-day MOCCAE permit and manifest-style veterinary clearance unless the Etihad AUH cabin exception applies — and a charter is not that exception.',
      body: [
        {
          type: 'steps',
          steps: [
            {
              title: 'Route and date',
              text: 'We check whether a shared lift is even forming on your corridor and week. Many weeks there is not one — then we recommend cargo or a full jet.',
            },
            {
              title: 'Eligibility',
              text: 'Breed, crate, season and destination paperwork have to match the operator’s acceptance list. Secondary breed rumours are confirmed per lift, not assumed.',
            },
            {
              title: 'Quote',
              text: 'A WhatsApp Get a Quote for our coordination plus the operator’s per-pet lift charge when we have it. Market EUR figures below are context, not a DPR rate card.',
            },
            {
              title: 'Documents and crate',
              text: 'Same pouch as cargo: microchip, vaccines, health certificate, permit. IATA crate rules still apply unless the operator specifies a different cabin arrangement in writing.',
            },
            {
              title: 'Handoff',
              text: 'Ground collection, lift acceptance, arrival clearance and last-mile delivery — the same orchestration spine as door-to-door.',
            },
          ],
        },
        {
          type: 'p',
          text: 'Cabin rules and baggage rules live on their own guides. Do not treat a charter as in-cabin Etihad or as Emirates checked baggage.',
        },
      ],
    },
    {
      h2: 'Market context (labelled competitor seats — not a DPR price list)',
      intro:
        'Shared-charter seats on Europe↔Dubai corridors appear on third-party sites. Every figure below is a labelled market listing (Elite Pets / PetXJets / JetCircle / press) — not a Dubai Pet Relocation price. A firm seat we coordinate is Get a Quote.',
      body: [
        {
          type: 'table',
          headers: ['Label', 'Figure', 'What it is'],
          rows: [
            [
              'Elite Pets (market listing)',
              'AED 45,000 per seat; return pair AED 85,000',
              'Market listing — not a DPR price',
            ],
            [
              'PetXJets (market listing)',
              'AED 42,000 (some figures TBC)',
              'Market listing — some amounts TBC; not a DPR price',
            ],
            [
              'JetCircle (market listing)',
              'EUR 12,000–13,000 (Munich→Dubai EUR 12,000 / Dubai↔London EUR 13,000; schedule-specific)',
              'Published JetCircle figure; schedule-specific. Not a DPR quote.',
            ],
            [
              'Press / listicle snapshots',
              '~USD 10,000 typical; surge ~EUR 20,000',
              'Press / market — not a DPR price',
            ],
            [
              'Dubai Pet Relocation firm seat',
              'Get a Quote',
              'Coordination plus the operator’s live lift charge. No invented DPR seat price.',
            ],
          ],
        },
        {
          type: 'p',
          text: 'Named operators above are independent of this site. We are not affiliated with Elite Pets, PetXJets or JetCircle and we cannot promise their seats. If no shared lift is forming, we move you to [manifest cargo](/guides/emirates-pet-cargo/) or a [custom charter quote](/service/private-jet-pet-travel/).',
        },
      ],
    },
    {
      h2: 'Sibling modes',
      intro: 'Every new flight-mode page links the set. Open the one that matches the job.',
      body: [
        {
          type: 'cards',
          cards: [
            {
              title: 'Pet flight options hub',
              text: 'Comparison table for all six modes.',
              to: FLIGHT_MODE_PATHS.hub,
              kind: 'Guide',
            },
            {
              title: 'Private jet pet travel',
              text: 'Whole aircraft. Custom charter quote only.',
              to: FLIGHT_MODE_PATHS.jet,
              kind: 'Service',
            },
            {
              title: 'Manifest cargo',
              text: 'Educational SkyCargo process — default UAE arrival.',
              to: FLIGHT_MODE_PATHS.cargo,
              kind: 'Guide',
            },
            {
              title: 'Etihad in-cabin',
              text: 'Small pets into Abu Dhabi only.',
              to: FLIGHT_MODE_PATHS.cabin,
              kind: 'Guide',
            },
            {
              title: 'Checked baggage',
              text: 'Accompanied hold; blocked for DXB arrivals.',
              to: FLIGHT_MODE_PATHS.baggage,
              kind: 'Guide',
            },
            {
              title: 'Door-to-door relocation',
              text: 'Umbrella service — we pick the mode.',
              to: FLIGHT_MODE_PATHS.doorToDoor,
              kind: 'Service',
            },
          ],
        },
      ],
    },
  ],
  faq: [
    {
      q: 'Do you publish shared-charter prices?',
      a: 'A firm DPR seat is Get a Quote. Labelled market listings (not DPR) include Elite Pets AED 45,000/seat (return pair AED 85,000), PetXJets AED 42,000 (some TBC), JetCircle EUR 12,000–13,000, and press snapshots around USD 10,000 / surge EUR 20,000. WhatsApp or support@dubai-pet-relocation.ae.',
    },
    {
      q: 'How is this cheaper than a private jet?',
      a: 'Qualitatively: you share the aircraft cost with other pets instead of buying the empty cabin. We will not invent a percentage or an AED saving. Market EUR bands are context only. The quote will show both options when both exist.',
    },
    {
      q: 'Is a shared charter always available?',
      a: 'No. It exists when an operator is filling a lift. If none is forming, we move you to cargo or a full jet — we will not invent a departure.',
    },
    {
      q: 'Does a charter skip UAE import rules?',
      a: 'No. The MOCCAE import permit is still valid 90 days from issuance. Pets still enter under veterinary and customs control.',
    },
    {
      q: 'Are you affiliated with an airline?',
      a: 'No. We coordinate. Emirates, Etihad and charter operators remain independent of this site.',
    },
    {
      q: 'Should I start on door-to-door instead?',
      a: 'Start on [door-to-door pet relocation](/service/pet-relocation-dubai/) if you want us to pick the mode. This page is only the shared-lift offer.',
    },
    {
      q: 'What is an empty-leg pet charter?',
      a: 'An empty-leg is a positioning flight with leftover capacity. A shared pet charter Dubai seat can sit on one when an operator is already moving the aircraft. We confirm whether a lift exists for your week — we do not invent empty-leg departures. WhatsApp +971504782999.',
    },
    {
      q: 'How is a pet charter Dubai different from manifest cargo?',
      a: 'Manifest cargo is a booked consignment on a scheduled airline hold. A pet charter Dubai lift is a dedicated or part-chartered aircraft. Charter trades schedule for control; cargo trades control for an airline timetable. Both still need the 90-day MOCCAE import permit. Compare modes on [pet flight options](/guides/pet-flight-options-dubai/).',
    },
    {
      q: 'Can a UK or USA file use a shared charter instead of SkyCargo?',
      a: 'Only if an operator is filling a lift on that corridor and the animal is accepted. Most UK and USA arrivals still use manifest cargo. Start on [UK to Dubai](/routes/uk-to-dubai/) or [USA to Dubai](/routes/usa-to-dubai/), then send a paid eligibility check if cargo is blocked. Educational cargo process: [Emirates pet cargo](/guides/emirates-pet-cargo/).',
    },
    {
      q: 'When does a shared pet charter beat manifest cargo?',
      a: 'A shared pet charter Dubai lift beats cargo when the airline will not accept the animal, the heat window, or the crate plan, or when several pets need one dedicated lift. Cargo still wins when a scheduled SkyCargo booking exists. Compare modes on [pet flight options](/guides/pet-flight-options-dubai/). We do not invent a departure or a DPR charter AED. WhatsApp +971504782999 for a paid eligibility check if you want us to test whether a lift is forming.',
    },
    {
      q: 'Who is a shared pet charter for?',
      a: 'Owners who already know scheduled cargo is blocked or fragile, and who do not want to buy a whole private jet. It is not the first page for a standard inbound file — start on [pet relocation Dubai](/service/pet-relocation-dubai/) or the [pet flight options hub](/guides/pet-flight-options-dubai/). Empty-leg seats exist only when an operator is already moving the aircraft. Documents and the 90-day MOCCAE import permit still apply.',
    },
    {
      q: 'How do I check shared-charter eligibility?',
      a: 'Send species, breed, origin, destination and month on WhatsApp for a paid eligibility check. We confirm whether a shared lift, empty-leg slot or cargo booking is the honest product. A firm DPR seat is Get a Quote. Coordination packages: [Prices](/prices/). Email support@dubai-pet-relocation.ae if you prefer mail.',
    },
  ],
  relatedLinks: [
    { label: 'Pet flight options hub', to: FLIGHT_MODE_PATHS.hub },
    { label: 'Private jet pet travel', to: FLIGHT_MODE_PATHS.jet },
    { label: 'Door-to-door pet relocation', to: FLIGHT_MODE_PATHS.doorToDoor },
    { label: 'Emirates pet cargo', to: FLIGHT_MODE_PATHS.cargo },
    { label: 'Etihad pet policy', to: FLIGHT_MODE_PATHS.cabin },
    { label: 'International pet relocation', to: '/service/international-pet-relocation/' },
    { label: 'Prices after eligibility', to: '/prices/' },
    { label: 'UK to Dubai', to: '/routes/uk-to-dubai/' },
    { label: 'USA to Dubai', to: '/routes/usa-to-dubai/' },
  ],
}

export default sharedPetCharter
