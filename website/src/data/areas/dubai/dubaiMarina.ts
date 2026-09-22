import type { AreaPageData } from '../../../types/areaPage.ts'

const dubaiMarina: AreaPageData = {
  slug: 'dubai-marina',
  areaName: 'Dubai Marina',
  emirate: 'Dubai',
  seoTitle: 'Pet Relocation Dubai Marina | Tower Collection Planning',
  metaDescription:
    'Pet collection in Dubai Marina: tell us the building name, visitor registration, loading access and any service-lift booking. WhatsApp +971504782999.',
  h1: 'Pet collection in Dubai Marina',
  primaryKeyword: 'pet relocation dubai marina',
  heroValueProp:
    'Moving a dog or cat to or from a Dubai Marina tower? Share the building name and how the building allows a crate to leave. We plan the collection around those details. WhatsApp +971504782999.',
  heroImage: '/images/area-dubai-marina.jpg',
  heroImageAlt: 'A dog with the Dubai Marina towers behind, for pet collection planning in Dubai Marina',
  whatsappMessage:
    'Hi Dubai Pet Relocation. I need pet collection in Dubai Marina. I will send the building name and any visitor registration, loading access or service-lift booking.',
  geo: { lat: '25.0805', lng: '55.1403' },
  landmarks: ['Marina Walk', 'Jumeirah Beach Residence (JBR)', 'Marina Mall', 'Bluewaters Island', 'Dubai Marina Yacht Club', 'Marina Promenade', 'Pier 7'],
  vetsNote:
    'Clinics near Dubai Marina and JBR can do microchip scans, vaccines and health certificates. Rosters change, so this page does not name a clinic or claim a partnership. Use the vet who already holds the file, or ask on WhatsApp what kind of appointment you need. Federal import steps are on [UAE pet import requirements](/guides/uae-pet-import-requirements/).',
  intro:
    'Dubai Marina is a waterfront of residential towers. A crate leaving an apartment has to fit the access your building actually allows. Let us know your building name and any collection requirements, such as visitor registration, loading access or a service-lift booking. Confirm these details with your building management so collection can be planned around them. This page is the Marina last mile. Import papers stay on the [UAE pet import requirements](/guides/uae-pet-import-requirements/) guide. Neighbouring towers are separate pages: [JBR](/dubai/jbr/) and [JLT](/dubai/jlt/). The area index is the [Dubai communities hub](/dubai/).',
  sections: [
    {
      h2: 'What to confirm with your building',
      intro:
        'We do not publish a Marina-wide rule for lifts, lobbies or visitor desks. Those are set by the tower, and they differ.',
      body: [
        {
          type: 'p',
          text: 'Let us know your building name and any collection requirements, such as visitor registration, loading access or a service-lift booking. Confirm these details with your building management so collection can be planned around them. Useful notes are the tower or cluster name, whether a visitor must be registered, where a vehicle can stop, and whether a crate is expected on a service lift or a goods lift.',
        },
        {
          type: 'p',
          text: 'If the building wants a resident to ride with the crate, say so before the day. If a lobby cannot hold a crate, the plan stays in the apartment until the lift and the vehicle are both ready. We do not override building management, and we do not leave a crate unattended in a public lobby.',
        },
        {
          type: 'list',
          items: [
            'Building or tower name, and the entrance you want used',
            'Visitor registration: name, plate and the window the desk will accept',
            'Loading access: podium, basement ramp, or another bay the building names',
            'Service-lift or goods-lift booking, if the building asks for one',
            'Whether a resident must escort the crate',
          ],
        },
      ],
    },
    {
      h2: 'How a Marina collection is planned',
      intro:
        'The practical job is the short move from the apartment to the vehicle, then on to cargo or to the home delivery.',
      body: [
        {
          type: 'p',
          text: 'Tell us the nearest point a vehicle may wait. Marina Walk, the yacht club, Pier 7 and Marina Mall are landmarks for finding the tower. They are not holding areas, and we do not use them unless that is the real address and the property allows the vehicle.',
        },
        {
          type: 'p',
          text: 'Cats usually stay in a carrier until the travel crate is at the door. Dogs move on a lead for the transfer the building allows. A long promenade walk is not part of the collection plan, especially in hot weather. For a local clinic or crate run that is not an international file, use [pet transport in Dubai](/service/pet-transport-dubai/).',
        },
        {
          type: 'steps',
          steps: [
            {
              title: 'Send the building notes',
              text: 'Name, visitor registration, loading access, and any service-lift booking your management requires.',
            },
            {
              title: 'Agree a window',
              text: 'We message on WhatsApp when the vehicle is at the access point you named. We do not promise a clock-minute arrival.',
            },
            {
              title: 'Crate, then vehicle',
              text: 'The pet is secured in the apartment or at the lift your building allows, then moved to the vehicle.',
            },
            {
              title: 'Airport or home',
              text: 'Outbound files continue to the cargo desk that accepted the booking. Inbound delivery uses the same building notes in reverse.',
            },
          ],
        },
      ],
    },
    {
      h2: 'Heat and the promenade',
      intro:
        'Daily walks and travel day are different jobs.',
      body: [
        {
          type: 'p',
          text: 'Marina Walk is a common place to exercise a dog outside collection hours. Leash and licensing rules are set by the municipality and by the building. This page does not publish a fine table. On collection day, keep any walk short and close to the tower your management allows. Do not use the promenade as a waiting area.',
        },
        {
          type: 'p',
          text: 'In warmer months, get the animal used to the crate indoors. A balcony is not a substitute. After an inbound delivery, water and a cool room come before a walk.',
        },
      ],
    },
    {
      h2: 'Airport routing from Dubai Marina',
      intro:
        'Road time depends on the hour, the cargo desk and which airport the booking uses. This page does not state a minute count.',
      body: [
        {
          type: 'p',
          text: 'Most international files clear through a cargo path at Dubai International (DXB) or Al Maktoum (DWC), not the passenger baggage hall. Which airport applies is the airline booking, not a Marina default. We plan backwards from the cargo acceptance time, then from the building access window. Sheikh Zayed Road can be slow. We do not promise a journey time.',
        },
        {
          type: 'p',
          text: 'Inbound, release at the cargo terminal comes first. The [Dubai pet arrival guide](/guides/dubai-pet-arrival-guide/) covers that step. The drive back to the tower still needs the same visitor and lift notes as a collection.',
        },
        {
          type: 'table',
          headers: ['Leg', 'What to plan', 'What we do not promise'],
          rows: [
            ['Marina tower to DXB cargo', 'The cargo cut-off, then the building access window', 'A fixed drive time or a passenger-terminal meeting'],
            ['Marina tower to DWC', 'Use this only when the booking is a DWC acceptance', 'That every Marina pet uses DWC'],
            ['Cargo release to the tower', 'The same building notes as collection', 'An unescorted crate left in a lobby'],
          ],
        },
      ],
    },
    {
      h2: 'Papers for a move into or out of the tower',
      intro:
        'The federal file does not change because the address is in Dubai Marina. The last mile does.',
      body: [
        {
          type: 'p',
          text: 'Inbound, a MOCCAE import permit is valid for 90 days from issuance. The animal must enter the UAE inside that window. Species, vaccines, titre rules and airline products are on [UAE pet import requirements](/guides/uae-pet-import-requirements/), not restated as a Marina by-law. Government fees are on that guide. This page does not publish a package price.',
        },
        {
          type: 'p',
          text: 'Outbound planning starts with the destination country, then the UAE export certificate and the airline. Do not reuse inbound permit wording for an export. See [pet export from Dubai](/guides/pet-export-from-dubai/).',
        },
        {
          type: 'p',
          text: 'Service pages: [pet relocation to Dubai](/service/pet-relocation-to-dubai/) for an arrival, [pet relocation Dubai](/service/pet-relocation-dubai/) for door-to-door coordination, [pet import to Dubai](/service/pet-import-dubai/) for the commercial import, and [pet export from Dubai](/service/pet-export-dubai/) when you leave.',
        },
      ],
    },
    {
      h2: 'What we coordinate for a Marina address',
      body: [
        {
          type: 'list',
          items: [
            'Collection or delivery at the tower, using the access your building confirms',
            'MOCCAE import or export timing when that service is booked',
            'A crate that can pass the lift and corridor you measured',
            'Cargo acceptance at the airport named on the booking',
            'WhatsApp updates during business hours',
          ],
        },
        {
          type: 'cards',
          cards: [
            {
              kind: 'Dubai hub',
              title: 'All Dubai communities',
              text: 'Compare other tower and villa areas.',
              to: '/dubai/',
            },
            {
              kind: 'Local ground',
              title: 'Pet transport',
              text: 'Clinic runs and local crate transfers.',
              to: '/service/pet-transport-dubai/',
            },
            {
              kind: 'Inbound file',
              title: 'Relocation to Dubai',
              text: 'Arrival-side coordination after cargo release.',
              to: '/service/pet-relocation-to-dubai/',
            },
            {
              kind: 'Guide',
              title: 'Import requirements',
              text: 'Permit, vaccines and the 90-day window.',
              to: '/guides/uae-pet-import-requirements/',
            },
            {
              kind: 'Guide',
              title: 'Arrival at the airport',
              text: 'What happens after the aircraft lands.',
              to: '/guides/dubai-pet-arrival-guide/',
            },
            {
              kind: 'Service',
              title: 'Pet import to Dubai',
              text: 'When the Marina tower is the delivery address.',
              to: '/service/pet-import-dubai/',
            },
          ],
        },
      ],
    },
  ],
  faq: [
    {
      q: 'Do you collect from Dubai Marina towers?',
      a: 'Yes, when the building allows the visit. Let us know your building name and any collection requirements, such as visitor registration, loading access or a service-lift booking. Confirm these details with your building management so collection can be planned around them. JBR is a different page: [JBR](/dubai/jbr/).',
    },
    {
      q: 'Does every Marina tower require a service lift?',
      a: 'No. This page does not set a building rule. Ask your management. If they want a service lift or a goods lift booked, send that booking with the collection request.',
    },
    {
      q: 'Can my dog walk on Marina Walk before collection?',
      a: 'Only if you choose a short walk the building and the weather allow, close to the tower. The promenade is not a holding area, and collection does not depend on it.',
    },
    {
      q: 'How long is the drive from Dubai Marina to the airport?',
      a: 'It varies with traffic and with whether the booking is DXB or DWC cargo. We do not publish a minute count. The plan starts from the cargo acceptance time, then the access window at your tower.',
    },
    {
      q: 'How long is the import permit if I am moving into Dubai Marina?',
      a: '90 days from issuance. The pet must enter the UAE in that window. The address does not change the permit. Application notes: [MOCCAE import permit](/guides/moccae-import-permit/).',
    },
    {
      q: 'What should I send for a quote?',
      a: 'Species, approximate weight, origin or destination, travel window, and the building notes above. This page does not publish a package price. Government fees are listed on the [import requirements](/guides/uae-pet-import-requirements/) guide. WhatsApp +971504782999.',
    },
    {
      q: 'The lobby cannot hold a crate. Can you still collect?',
      a: 'Yes, if the apartment or a booked lift can hold the crate until the vehicle is at the access point you named. Tell us that limit before the day.',
    },
    {
      q: 'Is Bluewaters or Marina Mall a pickup point?',
      a: 'Only when that is the real address and the property allows a vehicle. A mall frontage is not a substitute for your tower\'s loading access. Palm addresses use [Palm Jumeirah](/dubai/palm-jumeirah/).',
    },
  ],
  relatedAreas: [
    { label: 'JBR', to: '/dubai/jbr/' },
    { label: 'JLT', to: '/dubai/jlt/' },
    { label: 'Palm Jumeirah', to: '/dubai/palm-jumeirah/' },
    { label: 'Downtown Dubai', to: '/dubai/downtown-dubai/' },
  ],
}

export default dubaiMarina
