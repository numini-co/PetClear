import type { ServicePageData } from '../../types/servicePage.ts'
import { FLIGHT_MODE_PATHS } from '../flightModes.ts'

const privateJetPetTravel: ServicePageData = {
  slug: 'private-jet-pet-travel',
  seoTitle: 'Private Jet Pet Travel from Dubai | Quote-Only Coordination',
  metaDescription:
    'Private jet pet travel when scheduled cabin, baggage or cargo will not work. We coordinate eligibility, documents and the last mile. Quote only — no invented jet prices.',
  keywords:
    'private jet pet travel Dubai, private jet with dog UAE, fly pet private aircraft Dubai, dedicated aircraft pet relocation',
  h1: 'Private Jet Pet Travel — When a Scheduled Flight Is Not the Right Fit',
  primaryKeyword: 'private jet pet travel Dubai',
  heroValueProp:
    'A dedicated aircraft is a last-resort air product: tight calendars, animals scheduled carriers will not accept, or owners who need the whole cabin. We coordinate the file. Quotes only — we do not publish jet prices.',
  heroImage: '/images/service-international-pet-relocation.jpg',
  heroImageAlt:
    'A calm dog beside a travel crate and an aircraft in the background — private jet pet travel coordinated from Dubai',
  whatsappMessage:
    'Hi Dubai Pet Relocation! I need a private-jet option for my pet. Can you review the route and send a quote? I understand this is quote-only.',
  ctaLabel: 'Get a Private Jet Quote',
  heroEyebrow: 'Charter coordination',
  trustBadges: ['Quote only — no published jet prices', 'Independent of any airline', 'Documents still required', 'WhatsApp during business hours'],
  hasHowTo: true,
  howToName: 'How we coordinate private jet pet travel from Dubai',
  sections: [
    {
      h2: 'When a private jet is the right flight mode',
      intro:
        'This is a commercial service page, not an airline. Most Dubai pet moves use [manifest air cargo](/guides/emirates-pet-cargo/). Cabin is the [Etihad AUH exception](/guides/etihad-pet-policy/). A jet is for the cases those products cannot cover.',
      body: [
        {
          type: 'p',
          text: 'We do not own an aircraft and we are not affiliated with any charter operator. We coordinate eligibility, the document pouch, ground handoffs and the 30-day MOCCAE import-permit window when the UAE is the destination. The operator flies the aeroplane.',
        },
        {
          type: 'list',
          items: [
            'Scheduled cargo or cabin will not accept the animal (breed, season, routing or aircraft type)',
            'The calendar cannot wait for the next pet-legal commercial departure',
            'Multi-pet or special-handling files that a belly hold cannot take',
            'Owners already chartering for themselves who want the pet on the same flight plan',
          ],
        },
        {
          type: 'p',
          text: 'If a shared lift is enough, start on [shared / group pet charter](/service/shared-pet-charter/). If you want us to pick the cheapest legal mode, start on [door-to-door pet relocation](/service/pet-relocation-dubai/). Compare all six modes on the [pet flight options hub](/guides/pet-flight-options-dubai/).',
        },
      ],
    },
    {
      h2: 'What we coordinate (and what we do not price on this page)',
      intro:
        'Private-jet cost is a function of aircraft, routing, handling and empty-leg availability. Those numbers change by the day. We will not invent a USD or AED jet table here. The CTA is Get a Quote.',
      body: [
        {
          type: 'image',
          src: '/assets/w1-w3/international-pet-relocation-coordinator-timeline-dubai.jpg',
          alt: 'Coordinator timeline notes for a complex international pet flight arranged from Dubai',
          caption: 'The jet is one line on the timeline. Permits and crates still have to match.',
        },
        {
          type: 'steps',
          steps: [
            {
              title: 'Feasibility',
              text: 'Pet type, breed, weight, origin, destination and date. We say whether a jet is actually required or whether cargo / cabin / a shared charter will do.',
            },
            {
              title: 'Operator match',
              text: 'We enquire with pet-experienced charter partners. Acceptance is the operator’s decision, not a promise on this page.',
            },
            {
              title: 'Documents',
              text: 'Same UAE import or export chain as any other mode. MOCCAE import permits are valid 30 days from issuance. A jet does not waive veterinary or customs rules.',
            },
            {
              title: 'Quote',
              text: 'A written WhatsApp range for coordination plus the operator’s aircraft quote when we have it. Nothing is booked until you accept the scope.',
            },
            {
              title: 'Travel day',
              text: 'FBO / private-terminal handoff, crate or cabin arrangement as the operator allows, and last-mile ground on either end.',
            },
          ],
        },
      ],
    },
    {
      h2: 'Sibling modes — do not skip the cheaper legal option',
      intro:
        'A jet is not a status upgrade on a file that cargo would have taken. Open the comparison hub before you ask for an aircraft.',
      body: [
        {
          type: 'cards',
          cards: [
            {
              title: 'Pet flight options hub',
              text: 'Decision table for all six modes.',
              to: FLIGHT_MODE_PATHS.hub,
              kind: 'Guide',
            },
            {
              title: 'Etihad in-cabin',
              text: 'Small pets ≤8 kg into Abu Dhabi.',
              to: FLIGHT_MODE_PATHS.cabin,
              kind: 'Guide',
            },
            {
              title: 'Manifest cargo',
              text: 'Default UAE arrival path — Emirates SkyCargo.',
              to: FLIGHT_MODE_PATHS.cargo,
              kind: 'Guide',
            },
            {
              title: 'Shared pet charter',
              text: 'A dedicated lift shared with other pets. Quote only.',
              to: FLIGHT_MODE_PATHS.charter,
              kind: 'Service',
            },
            {
              title: 'Checked baggage',
              text: 'Accompanied hold — blocked for DXB-ending itineraries.',
              to: FLIGHT_MODE_PATHS.baggage,
              kind: 'Guide',
            },
            {
              title: 'Door-to-door relocation',
              text: 'Umbrella orchestration. We pick the mode.',
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
      q: 'Do you publish private-jet prices?',
      a: 'No. Aircraft, routing and handling vary too widely. This page is quote-only. Message us on WhatsApp or write to support@dubai-pet-relocation.ae.',
    },
    {
      q: 'Are you an airline or a jet operator?',
      a: 'Neither. We coordinate. The charter operator flies the aircraft. We are not affiliated with Emirates, Etihad or any jet company.',
    },
    {
      q: 'Does a private jet skip the MOCCAE import permit?',
      a: 'No. Pets entering the UAE still need a valid import permit (30 days from issuance) and the rest of the veterinary file. Arrival is still a customs and veterinary event.',
    },
    {
      q: 'When should I use shared charter instead?',
      a: 'When you want a dedicated lift but not a whole aircraft to yourself. See [shared / group pet charter](/service/shared-pet-charter/).',
    },
    {
      q: 'Can cabin or cargo still work?',
      a: 'Often yes. Check [Etihad pet policy](/guides/etihad-pet-policy/) and [Emirates pet cargo](/guides/emirates-pet-cargo/) before you ask for a jet.',
    },
    {
      q: 'What do you need for a quote?',
      a: 'Pet type, breed, weight, origin, destination, and the week you must travel. We reply with feasibility and a quote range — not a published rate card.',
    },
  ],
  relatedLinks: [
    { label: 'Pet flight options hub', to: FLIGHT_MODE_PATHS.hub },
    { label: 'Shared / group pet charter', to: FLIGHT_MODE_PATHS.charter },
    { label: 'Door-to-door pet relocation', to: FLIGHT_MODE_PATHS.doorToDoor },
    { label: 'Emirates pet cargo', to: FLIGHT_MODE_PATHS.cargo },
    { label: 'Etihad pet policy', to: FLIGHT_MODE_PATHS.cabin },
    { label: 'International pet relocation', to: '/service/international-pet-relocation/' },
  ],
}

export default privateJetPetTravel
