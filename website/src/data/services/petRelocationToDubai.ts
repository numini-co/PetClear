import type { ServicePageData } from '../../types/servicePage.ts'
import { CTA_ELIGIBILITY_MOVE, waEligibility } from '../../lib/conversionCopy.ts'

const petRelocationToDubai: ServicePageData = {
  slug: 'pet-relocation-to-dubai',
  seoTitle: 'Pet Relocation to Dubai | Managed Moves for Dogs & Cats',
  metaDescription:
    'Dogs, cats moving to Dubai, UAE: breed, origin, MOCCAE import permit timed to landing (90 days from issuance), IATA crate, DXB or DWC cargo. Check eligibility',
  h1: 'Pet relocation to Dubai, from your vet at home to your new front door',
  primaryKeyword: 'pet relocation to dubai',
  ctaLabel: CTA_ELIGIBILITY_MOVE,
  heroValueProp:
    'Moving to Dubai with a dog or cat, we check breed and origin rules, time the MOCCAE import permit to your landing, and bring your pet home from DXB or DWC.',
  heroImage: '/assets/w1-w3/pet-relocation-to-dubai-cat-arrival-new-apartment.jpg',
  heroImageAlt:
    'Cat stepping out of its travel crate into a new Dubai apartment after relocating to Dubai',
  whatsappMessage: waEligibility({
    destination: 'Dubai',
    need: 'managed move into Dubai: breed check, MOCCAE import permit, crate, cargo and home delivery. Please send pet type and breed, weight, origin country, arrival month, and whether door-to-door delivery is needed',
  }),
  ctaSupport:
    'Send the pet, breed, weight, origin country, arrival month and current vaccination dates. We check eligibility and reply with a managed-move quote.',
  ctaHeading: 'Ready for a managed-move quote?',
  ctaBody:
    'Send your origin, pet and arrival month on WhatsApp. We check eligibility first and reply with a managed-move quote before anything is booked.',
  paidIncludes: [
    'Breed and origin rules checked for your pet and arrival month',
    'Vaccinations, titre timing where required and treatments sequenced to the landing',
    'MOCCAE import permit applied for and timed to your arrival date',
    'IATA crate sized and a pet-experienced cargo booking into DXB or DWC',
    'Cargo release at the airport and delivery to your Dubai home',
  ],
  trustBadges: [
    'Moves into Dubai and the UAE',
    'Import permit timed to landing',
    'Cargo arrival at DXB or DWC',
    'WhatsApp updates to your door',
  ],
  hasHowTo: true,
  howToName: 'How to bring a dog or cat to Dubai',
  sections: [
    {
      h2: 'Pet relocation to Dubai: what we manage',
      intro:
        'Moving to Dubai or the UAE with a dog or cat means one coordinator from the home-country vet to the new front door. We run the whole inbound move. Leaving the UAE instead? See [pet relocation from Dubai](/service/pet-relocation-from-dubai/). Need only the import permit and paperwork? See [pet import Dubai](/service/pet-import-dubai/) or [MOCCAE permit assistance](/service/moccae-pet-permit/). Not sure which service you need? [Compare pet relocation services](/service/pet-relocation-dubai/).',
      body: [
        {
          type: 'p',
          text: 'If you are flying a dog or cat into the UAE, the job is arrival-side: origin documents that MOCCAE will accept, a permit that is still valid on landing, cargo clearance at DXB or DWC, and a quiet first week in the new apartment or villa. We coordinate that sequence. We do not operate the aircraft.',
        },
        {
          type: 'p',
          text: 'Your origin country changes the paperwork: open your route, such as [UK to Dubai](/routes/uk-to-dubai/), from [all pet relocation routes to Dubai](/routes/).',
        },
      ],
    },
    {
      h2: 'Steps for moving a pet to Dubai',
      intro:
        'Order matters. Booking cargo before the permit window and any required test timing are understood is the costliest mistake on an inbound move.',
      body: [
        {
          type: 'image',
          src: '/assets/w1-w3/pet-relocation-to-dubai-inbound-journey-diagram.webp',
          alt: 'Inbound pet relocation journey to Dubai from first vet visit to home delivery',
          width: 1280,
          height: 853,
          caption: 'Eight inbound stages. “Titer if required” is conditional, not a universal 90-day wait.',
        },
        {
          type: 'steps',
          steps: [
            {
              title: 'Confirm breed and origin rules',
              text: 'Message breed, age, weight and origin country, including when you are bringing a cat to Dubai. We check UAE breed restrictions and whether your origin is treated as titer-required. Dedicated corridors start on [UK to Dubai](/routes/uk-to-dubai/) and the other inbound routes.',
            },
            {
              title: 'Microchip, then vaccinate',
              text: 'Fit a permanent microchip. The number on the health certificate must match the animal.',
            },
            {
              title: 'Titer timing, if your origin requires it',
              text: 'High-risk origins need at least 0.5 IU/ml. The certificate is valid for 365 days if the vaccine stays valid and continuous and no booster is given. Otherwise the test is repeated. A first or lapsed vaccine needs at least 21 days before the test. A valid booster does not. See [rabies titre test](/guides/rabies-titer-test-dubai/).',
            },
            {
              title: 'Time the permit to the landing date',
              text: 'Apply on the official portal and land while the permit is still valid: 90 days from issuance. Confirm the fee on the official MOCCAE portal. The walkthrough is in our [MOCCAE import permit](/guides/moccae-import-permit/) guide.',
            },
            {
              title: 'Health certificate and parasite treatments',
              text: 'The origin-country health certificate is a short-validity document. Treatments are timed to arrival, not to the day you first thought about moving. Full checklist: [UAE pet import requirements for dogs and cats](/guides/uae-pet-import-requirements/).',
            },
            {
              title: 'Cargo booking and crate',
              text: 'Almost every dog and cat enters as manifested cargo, not cabin or hold baggage. We help size an IATA crate and coordinate a pet-experienced booking. Summer and snub-nosed rules can close options. See [pet travel in summer](/guides/pet-travel-summer-dubai/).',
            },
            {
              title: 'DXB or DWC cargo arrival',
              text: 'A MOCCAE inspector checks the documents and scans the chip at the cargo terminal. When the documents match, release is usually the same day. We coordinate the handover. We are not the inspection authority.',
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
      h2: 'Documents checked before your pet lands in Dubai',
      intro:
        'Every document has to tell the same story: the same microchip number, dates and pet details, so cargo staff and the MOCCAE inspector can release your pet without delay.',
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
            'Permanent microchip. The health-certificate number must match the animal.',
            'Valid rabies vaccination and core species vaccinations',
            'Antibody result of at least 0.5 IU/ml when the origin is high-risk, under the 365-day certificate conditions',
            'MOCCAE import permit still inside its 90-day validity on the arrival date',
            'Origin-country government health certificate inside its short validity window',
            'Parasite treatments recorded to the arrival window',
            'Owner identification and a recent photo of the pet where the portal asks for one',
          ],
        },
        {
          type: 'p',
          text: 'Want us to prepare and file the MOCCAE application for you? See [MOCCAE permit assistance](/service/moccae-pet-permit/). Doing the paperwork yourself? The step-by-step is in our [MOCCAE import permit](/guides/moccae-import-permit/) guide.',
        },
      ],
    },
    {
      h2: "Your pet's first week in Dubai: heat, buildings and a vet",
      intro:
        'Clearing cargo is the end of the flight, not the end of the inbound job. Someone moving to Dubai with a cat settles faster when the first days are boring on purpose, and the same is true for a dog.',
      body: [
        {
          type: 'image',
          src: '/assets/w1-w3/settling-in-first-week-dubai-spaniel-pet-corner.jpg',
          alt: 'Cocker spaniel sniffing a pet bed in a new Dubai apartment during the first week after relocation',
          caption: 'Arrival day is day one of settling in. Heat, walks and a local vet come next.',
        },
        {
          type: 'p',
          text: 'Give the pet one room with their own bed, bowls and a familiar item from home. Let them expand the map of the apartment over several days. High-rise buildings add lift and lobby rules; villas add garden heat. Community-specific pickup notes live on [Dubai communities we cover](/dubai/).',
        },
        {
          type: 'p',
          text: 'From late spring through early autumn, pavement can burn paws. Walk early or after dusk, carry water, and never leave a pet in a parked car. Import bans are the names on the [banned dog breeds](/guides/banned-dog-breeds-dubai/) page. A building may still set its own pet rule. Check with your building.',
        },
        {
          type: 'p',
          text: 'Register with a local clinic in the first week so you have a contact for routine care and any municipality registration your community expects. Keep the import documents. You will need them for boarding, future travel or an eventual outbound move. The longer post-arrival walkthrough covers cargo clearance, collection, settling and Aleef registration, in [the post-arrival guide for pets](/guides/dubai-pet-arrival-guide/).',
        },
      ],
    },
    {
      h2: 'How much does pet relocation to Dubai cost?',
      intro:
        'The quote depends on your origin country, your pet and your dates, so we price it after an eligibility check rather than publishing a package total.',
      body: [
        {
          type: 'p',
          text: 'What moves an inbound quote: origin country (titer or not), pet size and crate, season, whether you want document guidance only or arrival-day coordination, and whether last-mile delivery is a tower or a villa. Read [what pet relocation costs in 2026](/guides/pet-relocation-cost-dubai/) for the driver list, then request a managed-move quote on [the contact form](/contact/) once your origin and travel month are known.',
        },
        {
          type: 'p',
          text: 'If you already know the country corridor, open that route page from [all pet relocation routes to Dubai](/routes/) so we are not guessing origin paperwork. Then check eligibility for your move. MOCCAE government fees for the import permit apply; confirm the current amount on the official MOCCAE portal.',
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
      q: 'How should I time the permit against the arrival date?',
      a: 'The [MOCCAE import permit](/guides/moccae-import-permit/) is valid for 90 days from issuance. Land inside that window. Confirm the fee on the official MOCCAE portal.',
    },
    {
      q: 'When must the rabies titer blood sample be drawn for entry to Dubai?',
      a: 'When the origin is high-risk, the result must be at least 0.5 IU/ml. The certificate is valid for 365 days if the vaccine stays valid and no booster is given. The 90-day clock is the import permit, counted from issuance, not a sample window. Details: [rabies titre test](/guides/rabies-titer-test-dubai/).',
    },
    {
      q: 'Can my dog or cat fly in the cabin into Dubai?',
      a: 'Almost never for entry. Dogs and cats enter as manifested air cargo. Cabin or checked-baggage products are the wrong inbound path for the UAE. We coordinate a pet-experienced cargo booking and an IATA crate.',
    },
    {
      q: 'What happens after cargo arrival at DXB?',
      a: 'A MOCCAE inspector checks the documents and scans the microchip at the cargo terminal. When the documents match, release is typically the same day. We coordinate collection. We are not the inspector. Full post-arrival steps are in [the post-arrival guide for pets](/guides/dubai-pet-arrival-guide/).',
    },
    {
      q: 'How should I settle a pet into a new Dubai apartment?',
      a: 'Start with one quiet room, familiar bedding, and heat-aware walks. Check building pet rules and book a local vet in the first week. Community notes: [Dubai communities we cover](/dubai/).',
    },
    {
      q: 'Are any dog breeds banned from entering the UAE?',
      a: 'Some dog types are prohibited from entering the UAE and others are restricted inside Dubai. We check eligibility before you commit. The list and caveats live on [banned dog breeds in Dubai](/guides/banned-dog-breeds-dubai/).',
    },
    {
      q: 'What is the difference between pet relocation to Dubai and pet import Dubai?',
      a: 'Pet relocation to Dubai is the full inbound move from the home-country vet to your door. [Pet import Dubai](/service/pet-import-dubai/) covers the import permit and paperwork. Door-to-door in both directions is [pet relocation services](/service/pet-relocation-dubai/). All of them start with an eligibility check.',
    },
    {
      q: 'How long does pet relocation to Dubai take?',
      a: 'It depends on the origin country. A non-titre origin is driven by vaccination age, the health certificate and permit timing. A titre origin adds the test wait. The MOCCAE import permit is valid for 90 days from issuance, so the landing has to sit inside that window. Send your origin and arrival month and we will check eligibility.',
    },
    {
      q: 'Can you collect my pet from the airport and deliver it to my home in Dubai?',
      a: 'Airport collection at DXB or DWC and delivery to your Dubai home are part of a managed inbound move when that scope is booked. See what that covers on [pet relocation services](/service/pet-relocation-dubai/). Send the pet, origin country and arrival month so we can check eligibility.',
    },
  ],
  relatedLinks: [
    { label: 'The post-arrival guide for pets', to: '/guides/dubai-pet-arrival-guide/' },
    { label: 'All pet relocation routes to Dubai', to: '/routes/' },
    { label: 'Request a managed-move quote', to: '/contact/' },
    { label: 'IATA pet crate requirements', to: '/guides/iata-pet-crate-requirements/' },
    { label: 'Dubai communities we cover', to: '/dubai/' },
    { label: 'How it works', to: '/how-it-works/' },
    { label: 'Pet relocation from Dubai', to: '/service/pet-relocation-from-dubai/' },
    { label: 'Pet import Dubai', to: '/service/pet-import-dubai/' },
    { label: 'Pet relocation services in Dubai', to: '/service/pet-relocation-dubai/' },
    { label: 'UAE pet import requirements for dogs and cats', to: '/guides/uae-pet-import-requirements/' },
    { label: 'MOCCAE import permit', to: '/guides/moccae-import-permit/' },
  ],
}

export default petRelocationToDubai
