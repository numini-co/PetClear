import type { ServicePageData } from '../../types/servicePage.ts'

const petRelocationToDubai: ServicePageData = {
  slug: 'pet-relocation-to-dubai',
  seoTitle: 'Pet Relocation to Dubai | Arrival-Side Import Guide',
  metaDescription:
    'Moving to Dubai with your dog or cat: MOCCAE 30-day import permit, titer timing, cargo arrival at DXB, and settling-in steps. Get a relocation quote.',
  keywords:
    'pet relocation to dubai, moving to Dubai with pets, moving to Dubai with a dog, bringing pets to Dubai, import dog to dubai, import cat to dubai',
  h1: 'Bringing Pets to Dubai from Anywhere',
  primaryKeyword: 'pet relocation to dubai',
  heroValueProp:
    'Inbound only: MOCCAE 30-day import permit, titer timing, cargo arrival at DXB or DWC, and the first week in a new Dubai home.',
  heroImage: '/assets/w1-w3/pet-relocation-to-dubai-cat-arrival-new-apartment.jpg',
  heroImageAlt:
    'Cat stepping out of its travel crate into a new Dubai apartment after relocating to Dubai',
  whatsappMessage:
    'Hi! I am moving to Dubai with my pet. Can you map the inbound permit, titer timing and arrival steps from my country?',
  trustBadges: [
    'Inbound / arrival-side only',
    '30-day MOCCAE permit window',
    'Titer sample timing checked',
    'WhatsApp through arrival',
  ],
  hasHowTo: true,
  howToName: 'How to bring a dog or cat to Dubai',
  sections: [
    {
      h2: 'This page is inbound only — arrival into Dubai',
      intro:
        'Ruling 2: this URL owns bringing a pet to Dubai. It is not the generic money page and it is not the outbound export journey. Door-to-door commercial coordination lives on [pet relocation services in Dubai](/service/pet-relocation-dubai/). Leaving the UAE lives on [moving pets out of Dubai](/service/pet-relocation-from-dubai/). Commercial import filing is [pet import service for Dubai](/service/pet-import-dubai/).',
      body: [
        {
          type: 'p',
          text: 'If you are flying a dog or cat into the UAE, the job is arrival-side: origin documents that MOCCAE will accept, a permit that is still valid on landing, cargo clearance at DXB or DWC, and a quiet first week in the new apartment or villa. We coordinate that sequence. We do not operate the aircraft.',
        },
        {
          type: 'p',
          text: 'Country-level differences — UK DEFRA certificates, US endorsement, India titer logistics — belong on the [routes hub](/routes/), not as a second copy of this page. Use this page to understand the inbound spine that every origin still has to hit.',
        },
      ],
    },
    {
      h2: 'The inbound journey, from home-country vet to a Dubai room',
      intro:
        'Order matters. Booking a flight before the permit window and titer timing are understood is the most expensive inbound mistake we see.',
      body: [
        {
          type: 'image',
          src: '/assets/w1-w3/pet-relocation-to-dubai-inbound-journey-diagram.png',
          alt: 'Inbound pet relocation journey to Dubai from first vet visit to home delivery',
          caption: 'Eight inbound stages. “Titer if required” is conditional — not a universal 90-day wait.',
        },
        {
          type: 'steps',
          steps: [
            {
              title: 'Confirm breed and origin rules',
              text: 'Message breed, age, weight and origin country. We check UAE breed restrictions and whether your origin is treated as titer-required. Dedicated corridors start on [bringing your pet to Dubai](/routes/uk-to-dubai/) and the other inbound guides.',
            },
            {
              title: 'Microchip, then vaccinate',
              text: 'The ISO 15-digit microchip must be in place before the rabies vaccination that will be recorded on the import file. Vaccinations given before the chip are a common refusal reason.',
            },
            {
              title: 'Titer timing — if your origin requires it',
              text: 'When a rabies antibody test is required, the blood sample must be drawn within 90 days before travel and read at least 0.5 IU/ml. We do not describe this as a 90-day wait after the titer. See [rabies titer test](/guides/rabies-titer-test-dubai/).',
            },
            {
              title: 'MOCCAE import permit — 30 days',
              text: 'The import permit is applied for on the official portal and is valid for 30 days from issuance. Your pet must arrive inside that window. Confirm the current portal fee when you apply; contested AED figures are not published here. Walkthrough: [MOCCAE import permit](/guides/moccae-import-permit/).',
            },
            {
              title: 'Health certificate and parasite treatments',
              text: 'The origin-country health certificate is a short-validity document. Treatments are timed to arrival, not to the day you first thought about moving. Full checklist: [UAE pet import requirements](/guides/uae-pet-import-requirements/).',
            },
            {
              title: 'Cargo booking and crate',
              text: 'Almost every dog and cat enters as manifested cargo, not cabin or hold baggage. We help size an IATA crate and coordinate a pet-experienced booking. Summer and snub-nosed rules can close options — see [pet travel in summer](/guides/pet-travel-summer-dubai/).',
            },
            {
              title: 'DXB or DWC cargo arrival',
              text: 'A MOCCAE inspector reviews the file and scans the chip at the cargo terminal. When the file is consistent, release is usually the same day. We coordinate the handover; we are not the inspection authority.',
            },
            {
              title: 'Settling in',
              text: 'A quiet room, familiar bedding, and heat-aware walks matter more than a second permit PDF. The next section covers the first week.',
            },
          ],
        },
      ],
    },
    {
      h2: 'Arrival-day documents we actually check',
      intro:
        'The informational rules table lives on the import guide. This page lists the inbound file we review so cargo staff and the inspector see one consistent story.',
      body: [
        {
          type: 'image',
          src: '/assets/w1-w3/moccae-permit-document-check-hands-dubai.jpg',
          alt: 'Hands reviewing a pet travel checklist for a MOCCAE permit application',
          caption: 'Permit, chip number and vaccination dates have to match across every page.',
        },
        {
          type: 'list',
          items: [
            'ISO 11784/11785 15-digit microchip, implanted before the recorded rabies vaccination',
            'Valid rabies vaccination and core species vaccinations',
            'Rabies titer result when the origin requires it — sample within 90 days before travel, ≥ 0.5 IU/ml',
            'MOCCAE import permit still inside its 30-day validity on the arrival date',
            'Origin-country government health certificate inside its short validity window',
            'Parasite treatments recorded to the arrival window',
            'Owner identification and a recent photo of the pet where the portal asks for one',
          ],
        },
        {
          type: 'p',
          text: 'Commercial filing help is on [MOCCAE import and export permit service](/service/moccae-pet-permit/). The how-to walkthrough stays on the [MOCCAE import permit](/guides/moccae-import-permit/) guide so this page does not duplicate the rules table.',
        },
      ],
    },
    {
      h2: 'First week in Dubai — heat, buildings and a vet',
      intro:
        'Clearing cargo is the end of the flight, not the end of the inbound job. Cats and dogs settle faster when the first days are boring on purpose.',
      body: [
        {
          type: 'image',
          src: '/assets/w1-w3/settling-in-first-week-dubai-spaniel-pet-corner.jpg',
          alt: 'Cocker spaniel sniffing a pet bed in a new Dubai apartment during the first week after relocation',
          caption: 'Arrival day is day one of settling in — heat, walks and a local vet come next.',
        },
        {
          type: 'p',
          text: 'Give the pet one room with their own bed, bowls and a familiar item from home. Let them expand the map of the apartment over several days. High-rise buildings add lift and lobby rules; villas add garden heat. Community-specific pickup notes live on [Dubai communities we cover](/dubai/).',
        },
        {
          type: 'p',
          text: 'From late spring through early autumn, pavement and balcony surfaces can burn paws. Walk early or after dusk, carry water, and never leave a pet in a parked car. Some breeds cannot live in certain apartment types — we flag that before you fly, using the [banned dog breeds](/guides/banned-dog-breeds-dubai/) list.',
        },
        {
          type: 'p',
          text: 'Register with a local clinic in the first week so you have a contact for routine care and any municipality registration your community expects. Keep the import file — you will need it for boarding, future travel or an eventual outbound move.',
        },
      ],
    },
    {
      h2: 'Inbound cost drivers — quote on WhatsApp, no fee table',
      intro:
        'We do not publish permit, release or cargo numerals on this inbound page. Those figures are contested or route-specific. Qualitative drivers plus a WhatsApp quote are what we can stand behind today.',
      body: [
        {
          type: 'p',
          text: 'What moves an inbound quote: origin country (titer or not), pet size and crate, season, whether you want document guidance only or arrival-day coordination, and whether last-mile delivery is a tower or a villa. Read [what pet relocation costs in 2026](/guides/pet-relocation-cost-dubai/) for the driver list, then [request your free WhatsApp quote](/contact/).',
        },
        {
          type: 'p',
          text: 'If you already know the country corridor, open that route page from the [routes hub](/routes/) so we are not guessing origin paperwork. Then come back here for the arrival-side spine.',
        },
      ],
    },
  ],
  faq: [
    {
      q: 'What is the first inbound step when bringing a pet to Dubai?',
      a: 'Confirm breed eligibility and whether your origin requires a titer, then work backwards from a realistic arrival month. Do not buy cargo space first. Country detail is on the [routes hub](/routes/).',
    },
    {
      q: 'How long is the MOCCAE import permit valid?',
      a: 'Thirty days from issuance. The pet must land inside that window. A 90-day permit validity claim is vetoed and is not used on this page.',
    },
    {
      q: 'When must the rabies titer blood sample be drawn for entry to Dubai?',
      a: 'When a titer is required, draw the sample within 90 days before travel. The result must be at least 0.5 IU/ml. This is not a 90-day waiting period after the test. Details: [rabies titer test](/guides/rabies-titer-test-dubai/).',
    },
    {
      q: 'Can my dog or cat fly in the cabin into Dubai?',
      a: 'Almost never for entry. Dogs and cats enter as manifested air cargo. Cabin or checked-baggage products are the wrong inbound path for the UAE. We coordinate a pet-experienced cargo booking and an IATA crate.',
    },
    {
      q: 'What happens after cargo arrival at DXB?',
      a: 'A MOCCAE inspector reviews the file and scans the microchip at the cargo terminal. When documents match, release is typically the same day. We coordinate collection; we are not the inspector.',
    },
    {
      q: 'How should I settle a pet into a new Dubai apartment?',
      a: 'Start with one quiet room, familiar bedding, and heat-aware walks. Check building pet rules and book a local vet in the first week. Community notes: [Dubai communities we cover](/dubai/).',
    },
    {
      q: 'Are any dog breeds banned from entering the UAE?',
      a: 'Yes. Some types are prohibited and others are restricted inside Dubai. We check eligibility before you commit. The list and caveats live on [banned dog breeds in Dubai](/guides/banned-dog-breeds-dubai/).',
    },
    {
      q: 'How is this different from the generic pet relocation Dubai page?',
      a: 'This URL is inbound only — permit, arrival and settling in. The money head [pet relocation services in Dubai](/service/pet-relocation-dubai/) covers door-to-door coordination in both directions. Do not treat the two pages as duplicates.',
    },
  ],
  relatedLinks: [
    { label: 'Pet relocation services in Dubai', to: '/service/pet-relocation-dubai/' },
    { label: 'Pet import service for Dubai', to: '/service/pet-import-dubai/' },
    { label: 'UAE pet import requirements', to: '/guides/uae-pet-import-requirements/' },
    { label: 'MOCCAE import permit', to: '/guides/moccae-import-permit/' },
    { label: 'Routes hub — inbound corridors', to: '/routes/' },
    { label: 'Request your free WhatsApp quote', to: '/contact/' },
    { label: 'Dubai communities we cover', to: '/dubai/' },
    { label: 'How it works', to: '/how-it-works/' },
  ],
}

export default petRelocationToDubai
