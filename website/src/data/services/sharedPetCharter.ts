import type { ServicePageData } from '../../types/servicePage.ts'
import { FLIGHT_MODE_PATHS } from '../flightModes.ts'

const sharedPetCharter: ServicePageData = {
  slug: 'shared-pet-charter',
  seoTitle: 'Shared Pet Charter | Group Charter Coordination from Dubai',
  metaDescription:
    'Offer page for shared / group pet charter — a dedicated lift shared with other pets, between scheduled cargo and a full private jet. Quote only — no published charter prices.',
  keywords:
    'shared pet charter Dubai, group pet charter UAE, pet charter flight Dubai, shared animal charter',
  h1: 'Shared / Group Pet Charter — A Midpoint Between Cargo and a Private Jet',
  primaryKeyword: 'shared pet charter Dubai',
  heroValueProp:
    'A menu offer for a dedicated lift shared with other pets — more control than a scheduled belly hold, without buying the whole aircraft. This is not the door-to-door pet relocation page. Quote only. We do not publish charter prices.',
  heroImage: '/images/service-pet-transport-dubai.jpg',
  heroImageAlt:
    'A travel crate ready for a dedicated pet lift — shared charter coordination from Dubai',
  whatsappMessage:
    'Hi Dubai Pet Relocation! I am considering a shared / group pet charter. Can you say whether a lift exists for my route and send a quote?',
  ctaLabel: 'Get a Shared Charter Quote',
  heroEyebrow: 'Charter coordination',
  trustBadges: ['Quote only — no published charter prices', 'Qualitative alternative to a full jet', 'Documents still required', 'WhatsApp during business hours'],
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
              'Emirates published animal tiers on the cargo guide',
              'Quote only — no published charter fees',
              'Quote only — no published jet fees',
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
      h2: 'Coordination scope',
      intro:
        'A shared lift does not waive UAE rules. Import still means a 30-day MOCCAE permit and manifest-style veterinary clearance unless the Etihad AUH cabin exception applies — and a charter is not that exception.',
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
              text: 'A WhatsApp range for our coordination plus the operator’s per-pet lift charge when we have it. No published charter table on this page.',
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
              text: 'Whole aircraft. Quote only.',
              to: FLIGHT_MODE_PATHS.jet,
              kind: 'Service',
            },
            {
              title: 'Manifest cargo',
              text: 'Default UAE arrival — Emirates SkyCargo.',
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
      a: 'No. Lifts are priced per aircraft, routing and how many animals confirm. This page is quote-only. WhatsApp or support@dubai-pet-relocation.ae.',
    },
    {
      q: 'How is this cheaper than a private jet?',
      a: 'Qualitatively: you share the aircraft cost with other pets instead of buying the empty cabin. We will not invent a percentage, an AED saving or a published seat price. The quote will show both options when both exist.',
    },
    {
      q: 'Is a shared charter always available?',
      a: 'No. It exists when an operator is filling a lift. If none is forming, we move you to cargo or a full jet — we will not invent a departure.',
    },
    {
      q: 'Does a charter skip UAE import rules?',
      a: 'No. The MOCCAE import permit is still valid 30 days from issuance. Pets still enter under veterinary and customs control.',
    },
    {
      q: 'Are you affiliated with an airline?',
      a: 'No. We coordinate. Emirates, Etihad and charter operators remain independent of this site.',
    },
    {
      q: 'Should I start on door-to-door instead?',
      a: 'Yes, if you want us to pick the mode. [Door-to-door pet relocation](/service/pet-relocation-dubai/) is the umbrella.',
    },
  ],
  relatedLinks: [
    { label: 'Pet flight options hub', to: FLIGHT_MODE_PATHS.hub },
    { label: 'Private jet pet travel', to: FLIGHT_MODE_PATHS.jet },
    { label: 'Door-to-door pet relocation', to: FLIGHT_MODE_PATHS.doorToDoor },
    { label: 'Emirates pet cargo', to: FLIGHT_MODE_PATHS.cargo },
    { label: 'Etihad pet policy', to: FLIGHT_MODE_PATHS.cabin },
    { label: 'International pet relocation', to: '/service/international-pet-relocation/' },
  ],
}

export default sharedPetCharter
