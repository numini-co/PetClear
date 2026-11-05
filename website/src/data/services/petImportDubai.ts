import type { ServicePageData } from '../../types/servicePage.ts'
import { waEligibility } from '../../lib/conversionCopy.ts'
import { PERMIT_VALIDITY } from '../../lib/regulatory.ts'

const FEES =
  'MOCCAE charges government fees for the import permit and for releasing each animal on arrival. These are separate from our coordination quote; confirm the current amounts on the official MOCCAE portal.'
const TITRE =
  'High-risk origins need at least 0.5 IU/ml. The certificate is valid for 365 days if the vaccine stays valid and continuous and no booster is given. Otherwise the test is repeated. A first vaccine, or a gap in vaccination, needs at least 21 days before the test. A valid booster does not.'
const OUTCOME =
  'If the import does not comply, the pet may be rejected at the owner\'s expense or confiscated. MOCCAE does not publish a fine amount or a routine quarantine length; a compliant animal is examined at the entry port and released.'

const petImportDubai: ServicePageData = {
  slug: 'pet-import-dubai',
  seoTitle: 'Pet Import Dubai: Permits, Clearance & Delivery [2026]',
  metaDescription:
    'Pet import service for dogs and cats into Dubai and the UAE: breed, origin, MOCCAE permit timed to landing (90 days from issuance). Check eligibility.',
  h1: 'Pet import Dubai for dogs and cats',
  primaryKeyword: 'pet import services Dubai',
  heroValueProp:
    'Importing a dog or cat into Dubai, we check breed and origin, time the MOCCAE import permit (90 days from issuance), and handle release to your door.',
  heroImage: '/images/service-pet-import-dubai.jpg',
  heroImageAlt:
    'Pet travel crates handled in a Dubai air-cargo warehouse during import clearance',
  whatsappMessage: waEligibility({
    destination: 'Dubai',
    need: 'managed pet import into Dubai: breed check, MOCCAE import permit, documents, cargo clearance and delivery. Please send pet type and breed, weight, origin country and arrival month',
  }),
  ctaLabel: 'Get a managed-move quote',
  ctaSupport:
    'Send the pet, breed, weight, origin country, arrival month and current vaccination dates. We check eligibility and reply with a managed-import quote.',
  ctaHeading: 'Ready to import your pet into Dubai?',
  ctaBody:
    'Send your origin, pet and arrival month on WhatsApp. We check eligibility first and quote the managed import before anything is booked.',
  paidIncludes: [
    'Breed, origin and risk status checked before anything is booked',
    'Microchip, vaccines and health certificate sequenced so every document matches',
    'MOCCAE import permit applied for and timed to your landing date',
    'IATA crate sized and cargo booked into DXB, DWC or AUH',
    'Cargo-village inspection and release coordinated, then delivery to your door',
  ],
  heroEyebrow: 'Pet Import Service',
  snippetQuestion: 'What are the requirements for traveling with my pet to the UAE?',
  snippetAnswer:
    'A pet entering the UAE needs a permanent microchip whose number matches the health certificate, the vaccines for that species, an authorised health certificate, and a MOCCAE import permit valid 90 days from issuance. High-risk origins add a rabies antibody test of at least 0.5 IU/ml. Matching animals are inspected and released. Full rules are in [UAE pet import requirements for dogs and cats](/guides/uae-pet-import-requirements/).',
  trustBadges: [
    'MOCCAE import permit timed to landing',
    'Documents checked before booking',
    'Cargo clearance at DXB, DWC or AUH',
    'WhatsApp updates during business hours',
  ],
  hasHowTo: true,
  howToName: 'How a managed pet import to Dubai is coordinated',
  sections: [
    {
      h2: 'Pet import services in Dubai: what we handle',
      intro:
        'Importing a dog or cat into Dubai or the UAE means we coordinate the breed and origin check, the MOCCAE import permit, matching documents, cargo clearance and delivery home. Moving to Dubai and want the whole move, including settling in? See [pet relocation to Dubai](/service/pet-relocation-to-dubai/). Need only the permit filed? See [MOCCAE permit assistance](/service/moccae-pet-permit/). Doing it yourself? The rules are in [UAE pet import requirements for dogs and cats](/guides/uae-pet-import-requirements/). Not sure which service fits? [Compare pet relocation services](/service/pet-relocation-dubai/).',
      body: [
        {
          type: 'p',
          text: 'If you are paying someone to get a dog or cat into the UAE, the work is operational: eligibility, document sequence, a permit that is still valid on landing, a cargo booking, veterinary inspection at the cargo village, and last-mile handover. We coordinate that sequence with veterinary and transport partners. We do not operate the aircraft. Only MOCCAE issues permits.',
        },
        {
          type: 'p',
          text: 'Your origin country changes the paperwork: open your route from [all pet relocation routes to Dubai](/routes/).',
        },
        {
          type: 'list',
          items: [
            'Eligibility review against the ban list published by MOCCAE',
            'Document pack: matching microchip, species vaccines, antibody test only if the origin is high-risk',
            'MOCCAE import permit timed to landing, valid 90 days from issuance',
            'IATA crate sizing and manifested cargo booking into DXB, DWC or AUH',
            'Arrival inspection coordination and door delivery in Dubai',
          ],
        },
      ],
    },
    {
      h2: 'How does pet import to Dubai work, step by step?',
      intro:
        'Book cargo only after the permit window and, for a high-risk origin, the titre certificate are understood.',
      body: [
        {
          type: 'image',
          src: '/assets/w5/pet-import-dubai-process-diagram.png',
          alt: 'Pet import process for Dubai: permit, health certificate, flight, customs, delivery',
          caption:
            'Permit, certificate, flight, clearance, release and delivery. Permit validity is 90 days from issuance. When a titre is required, the certificate rule is 365 days while the vaccine stays valid.',
        },
        {
          type: 'steps',
          steps: [
            {
              title: 'Eligibility and origin check',
              text: 'Send breed, age, weight, origin country and a target month. We check the published ban list. We confirm your origin\'s risk status against the current MOCCAE list. At our last check the United Kingdom was on the low-risk list and the United States was not named on it.',
            },
            {
              title: 'Microchip and vaccines',
              text: 'Permanent microchip. The number on the health certificate must match the animal. Rabies vaccination is not before 12 weeks of age. Dogs also need distemper, parvovirus, infectious canine hepatitis and leptospirosis. Cats need panleukopenia, rhinotracheitis and calicivirus. The same sequence applies when you import a cat to Dubai.',
            },
            {
              title: 'Antibody test, only if the origin is high-risk',
              text: `${TITRE} Detail: [rabies titre test for Dubai](/guides/rabies-titer-test-dubai/).`,
            },
            {
              title: 'MOCCAE import permit, 90 days from issuance',
              text: `${PERMIT_VALIDITY} ${FEES} The published estimate is 1 working day, or 5 working days for a service, emotional support or medical dog. Walkthrough: [how to apply for a MOCCAE import permit](/guides/moccae-import-permit/). Hands-on help: [MOCCAE permit assistance](/service/moccae-pet-permit/).`,
            },
            {
              title: 'Health certificate, parasites, crate and cargo',
              text: 'MOCCAE asks for an authorised health certificate and the validity depends on the origin authority. Internal and external parasite treatment is recorded in the 14 days before shipment. Your vet chooses a species-safe product. We size an IATA crate and coordinate cargo. Emirates itineraries ending in Dubai are cargo.',
            },
            {
              title: 'Clearance at DXB, DWC or AUH and door delivery',
              text: `${FEES} A MOCCAE inspector checks the microchip and documents. ${OUTCOME} We arrange last-mile delivery and keep you on WhatsApp during business hours. We do not promise a release time.`,
            },
          ],
        },
      ],
    },
    {
      id: 'documents',
      h2: 'Documents we check before anything is booked',
      intro:
        'Every document has to show the same 15-digit microchip number and matching pet details, so the MOCCAE inspector can release your pet without delay.',
      body: [
        {
          type: 'image',
          src: '/assets/w5/pet-import-document-folder-checklist-dubai.jpg',
          alt: 'Pet import document folder for Dubai: vaccination records, microchip certificate and itinerary',
          caption: 'One folder, every document, checked twice before anything is booked.',
        },
        {
          type: 'list',
          items: [
            'Permanent microchip. The health-certificate number must match the animal.',
            'Rabies vaccination not before 12 weeks of age. Validity follows the manufacturer.',
            'Species vaccines as listed on [UAE pet import requirements for dogs and cats](/guides/uae-pet-import-requirements/)',
            'Antibody result of at least 0.5 IU/ml when the origin is high-risk, under the 365-day certificate conditions',
            'Authorised health certificate from the origin authority. Validity set by the origin authority.',
            'MOCCAE import permit still inside its 90 days from issuance on the arrival date',
            'Internal and external parasite treatment in the 14 days before shipment',
            'Release papers: customs declaration or bill of lading, vaccine record, health certificate, and the antibody certificate if required',
          ],
        },
        {
          type: 'p',
          text: `${OUTCOME} We check every document before the flight.`,
        },
      ],
    },
    {
      h2: 'When should the MOCCAE import permit be issued?',
      intro:
        'The permit is the legal gate. Airlines will not accept the animal without it, and a cargo village will not release an animal on an expired permit. The commercial job is to issue it late enough to cover landing and early enough to survive processing.',
      body: [
        {
          type: 'p',
          text: `${PERMIT_VALIDITY} Applying the day you first think about moving is how permits expire on the tarmac. We work backwards from a confirmed cargo date, then open the portal application once the document pack is consistent.`,
        },
        {
          type: 'p',
          text: 'Access uses the MOCCAE digital account. We still do not issue the permit. MOCCAE does. Individuals may import up to 2 companion animals per person in the year (2 cats, 2 dogs, or 1 of each), except resident animals returning.',
        },
        {
          type: 'p',
          text: 'The published permit estimate is 1 working day, or 5 working days for a service, emotional support or medical dog.',
        },
        {
          type: 'p',
          text: 'Want us to run it? Compare what we handle on [our service tiers](/services/), then check eligibility on WhatsApp for a managed-import quote. We price after the eligibility check rather than publishing a package total. See [how our quotes work](/prices/).',
        },
      ],
    },
    {
      h2: 'How long does pet import to Dubai take?',
      intro:
        'There is no single week count. It depends on whether the origin is high-risk, and on the vaccine already in the animal.',
      body: [
        {
          type: 'p',
          text: 'When the origin is low-risk and the animal is already microchipped and vaccinated, the tight clocks are the 90-day permit, parasite treatment in the 14 days before shipment, and the origin health certificate\'s own validity. We do not promise a fixed number of weeks.',
        },
        {
          type: 'p',
          text: `${TITRE} Clinic turnaround is not a Ministry service time. We map the certificate against the permit, which lasts 90 days from issuance.`,
        },
        {
          type: 'table',
          headers: ['Starting point', 'What usually drives the calendar', 'What it does not mean'],
          rows: [
            [
              'RNATT not required; already vaccinated',
              'Health certificate + 90-day permit + cargo slot',
              'A guaranteed week count. Cargo calendars move.',
            ],
            [
              'RNATT not required; new rabies vaccine',
              '21 days before the antibody test only if the vaccine is a first dose or follows a gap',
              'That every pet must wait 21 days before arrival',
            ],
            [
              'Antibody test required',
              '0.5 IU/ml and the 365-day certificate conditions, then the 90-day permit',
              'A 90-day sample window or a 90-day wait after the result',
            ],
          ],
        },
      ],
    },
    {
      h2: 'How much does pet import to Dubai cost?',
      intro:
        'We price your import after an eligibility check, because the origin, the pet, the crate and the cargo route all change the total.',
      body: [
        {
          type: 'p',
          text: FEES,
        },
        {
          type: 'table',
          headers: ['Cost type', 'How it is priced'],
          rows: [
            ['MOCCAE government fee: import permit', 'Confirm the current fee on the official MOCCAE portal'],
            ['MOCCAE government fee: dog or cat release', 'Confirm the current fee on the official MOCCAE portal'],
            ['Origin veterinary work (vaccines, certificate, titre if required)', 'Quoted by your origin vet'],
            ['IATA-compliant crate', 'Sized to the animal; partner quote, not a guess from a chart'],
            ['Manifested cargo', 'Airline and route specific. We itemise before you book'],
            ['Coordination and handling', 'Quoted after the eligibility check for your origin, pet and service tier'],
          ],
        },
        {
          type: 'p',
          text: 'Compare how much of the sequence we hold versus how much you hold on [our service tiers](/services/). Then send your origin, pet and arrival month on WhatsApp. We price after the eligibility check. See [how our quotes work](/prices/).',
        },
      ],
    },
    {
      h2: "Is your dog's breed allowed into the UAE?",
      intro:
        'We check the dog against the ban list published by MOCCAE before you commit to a flight.',
      body: [
        {
          type: 'p',
          text: 'The names on that list include Staffordshire Bull Terrier, American Pit Bull Terrier, American Staffordshire Terrier, American Bully, the listed mastiff types, Japanese Tosa and Presa Canario. Rottweiler, Doberman and Boxer were not on the published list. Full names: [banned dog breeds in Dubai](/guides/banned-dog-breeds-dubai/).',
        },
        {
          type: 'p',
          text: 'The same rules allow service, emotional support and medical dogs when a certified training-centre document, a certified medical report on the owner, and a signed pledge are supplied. A casual letter is not those documents.',
        },
      ],
    },
    {
      h2: 'Airport clearance we coordinate at DXB, DWC and AUH',
      intro:
        'Pets enter as manifested cargo, so they arrive at a cargo terminal, not the passenger hall. The full post-arrival journey, including DXB arrival, clearance and registration, is in the [Dubai pet arrival guide](/guides/dubai-pet-arrival-guide/).',
      body: [
        {
          type: 'p',
          text: `At Dubai International the typical path is the cargo village: inspection, microchip check against the permit, document review, then handover. ${FEES} ${OUTCOME} Step-by-step notes are on the [Dubai pet arrival guide](/guides/dubai-pet-arrival-guide/).`,
        },
        {
          type: 'p',
          text: "Abu Dhabi arrivals use the same federal permit. Confirm the carrier's cabin and cargo rules in writing before booking; we do this as part of the quote.",
        },
        {
          type: 'p',
          text: 'We stay in contact on WhatsApp until the animal is in the van. We do not promise a clearance time.',
        },
      ],
    },
  ],
  faq: [
    {
      q: 'How long do pets stay in quarantine?',
      a: 'Compliant pets are examined at the entry port and released. The UAE does not publish a routine quarantine length when documents are correct. We do not assume a day count for a paperwork hold. More detail is in the [UAE pet import requirements for dogs and cats](/guides/uae-pet-import-requirements/) guide.',
    },
    {
      q: 'What are the rules and regulations for pets in the UAE?',
      a: 'Federal rules cover a matching microchip, the vaccines for that species, a health certificate, a MOCCAE import permit valid 90 days from issuance, and the published breed ban. Use [UAE pet import requirements for dogs and cats](/guides/uae-pet-import-requirements/) and [banned dog breeds in Dubai](/guides/banned-dog-breeds-dubai/).',
    },
    {
      q: 'What are the requirements for traveling with my pet to the UAE?',
      a: 'A matching microchip, the vaccines for that species, an authorised health certificate, parasite treatment in the 14 days before shipment, and a MOCCAE import permit valid 90 days from issuance. High-risk origins add an antibody test of at least 0.5 IU/ml. Emirates itineraries ending in Dubai are cargo. Full checklist: [UAE pet import requirements for dogs and cats](/guides/uae-pet-import-requirements/).',
    },
    {
      q: 'Does Dubai allow pet dogs?',
      a: 'You can import a dog to Dubai when the breed is not on the published ban list and the import documents are complete. Check [banned dog breeds in Dubai](/guides/banned-dog-breeds-dubai/) before you book.',
    },
    {
      q: 'Is it legal to have a dog in Dubai?',
      a: 'Dogs are legal in Dubai when the breed is not on the published ban list. You still need a MOCCAE import permit valid for 90 days from issuance. Breed names are on [banned dog breeds in Dubai](/guides/banned-dog-breeds-dubai/).',
    },
    {
      q: 'Do I need a MOCCAE import permit for my dog?',
      a: 'Every dog entering the UAE needs a MOCCAE import permit, valid 90 days from issuance. Government fees apply, so confirm the current amount on the official MOCCAE portal. How to apply is on the [MOCCAE import permit guide](/guides/moccae-import-permit/).',
    },
    {
      q: 'How much does it cost to import a pet to Dubai?',
      a: 'To import a pet to the UAE, the package is priced after an eligibility check. Government fees apply, and you confirm the current amounts on the official MOCCAE portal. Cargo, the crate, the vet and coordination are quoted for your pet. Check eligibility on WhatsApp +971504782999.',
    },
    {
      q: 'What does your pet import service include?',
      a: 'We coordinate the breed and origin check, matching documents, the MOCCAE import permit valid 90 days from issuance, IATA crate sizing, manifested cargo and cargo-village clearance through to a Dubai door. We are a coordination service, not a vet, an airline or MOCCAE. Compare help on [our service tiers](/services/).',
    },
    {
      q: 'What is the difference between pet import Dubai and pet relocation to Dubai?',
      a: 'Pet import Dubai covers the permit, documents, cargo clearance and delivery. [Pet relocation to Dubai](/service/pet-relocation-to-dubai/) is the full move from your home vet to settling in. Do-it-yourself rules are in [UAE pet import requirements](/guides/uae-pet-import-requirements/). All of them start with an eligibility check.',
    },
    {
      q: 'How long is the MOCCAE import permit valid?',
      a: 'The MOCCAE import permit is valid for 90 days from issuance. The pet must enter the UAE inside that window. An expired permit means a new application and a new government fee. We time filing to a confirmed cargo date.',
    },
    {
      q: 'Do I need a rabies titer test to import a pet to Dubai?',
      a: 'Only if the origin is high-risk. At our last check the United Kingdom was on the low-risk list and the United States was not named on it. When a test is required, the result must be at least 0.5 IU/ml and the certificate follows the 365-day conditions. Detail: [rabies titre test for Dubai](/guides/rabies-titer-test-dubai/).',
    },
    {
      q: 'How much do government import fees cost?',
      a: 'Confirm the current MOCCAE permit fee and the arrival release and inspection fee on the official MOCCAE portal. Fees may change. Those government charges exclude veterinary work, the crate, cargo and coordination.',
    },
    {
      q: 'Can my pet fly in the cabin into Dubai?',
      a: "Emirates says ordinary animals are not allowed in the cabin, and every itinerary ending in Dubai must travel as cargo. Other airlines are separate products. We confirm the carrier's cabin and cargo rules in writing before you pay for a ticket.",
    },
    {
      q: 'How many pets can I import on a personal permit?',
      a: 'Personal (non-commercial) import is typically limited to a maximum of 2 pets per person (2 cats, or 2 dogs, or 1 cat and 1 dog) per permit, per year. Confirm the current portal rule for your household. More than two pets usually needs a different import route; include the number of pets when you check eligibility.',
    },
    {
      q: 'What happens if the paperwork is wrong on arrival?',
      a: "The published outcome is rejection at the owner's expense or confiscation. MOCCAE does not publish a fine amount or a routine quarantine length. A compliant animal is examined at the entry port and released. That is why we check every document before the flight.",
    },
    {
      q: 'Do you issue the MOCCAE permit yourselves?',
      a: 'Only MOCCAE issues permits. We check the documents, time the permit (valid 90 days from issuance) and, on higher tiers, coordinate portal submission through vetted partners. Standalone permit help: [MOCCAE permit assistance](/service/moccae-pet-permit/). DIY walkthrough: [MOCCAE import permit guide](/guides/moccae-import-permit/). Tick-list: [pet import checklist](/guides/import-checklist/).',
    },
    {
      q: 'When should I use import versus door-to-door relocation?',
      a: 'Use pet import Dubai for the permit, cargo clearance and a Dubai door. The full move is [pet relocation to Dubai](/service/pet-relocation-to-dubai/). If you are not sure which fits, [compare pet relocation services](/service/pet-relocation-dubai/). Leaving the UAE is [pet export from Dubai](/service/pet-export-dubai/). Check eligibility on WhatsApp +971504782999.',
    },
  ],
  relatedLinks: [
    { label: 'Dubai pet arrival guide', to: '/guides/dubai-pet-arrival-guide/' },
    { label: 'UAE pet import requirements', to: '/guides/uae-pet-import-requirements/' },
    { label: 'MOCCAE permit assistance', to: '/service/moccae-pet-permit/' },
    { label: 'MOCCAE import permit guide', to: '/guides/moccae-import-permit/' },
    { label: 'Rabies titre test Dubai', to: '/guides/rabies-titer-test-dubai/' },
    { label: 'Pet relocation to Dubai', to: '/service/pet-relocation-to-dubai/' },
    { label: 'Banned dog breeds in Dubai', to: '/guides/banned-dog-breeds-dubai/' },
    { label: 'Routes hub', to: '/routes/' },
    { label: 'Pet relocation cost Dubai', to: '/guides/pet-relocation-cost-dubai/' },
    { label: 'How it works', to: '/how-it-works/' },
    { label: 'Pet import checklist', to: '/guides/import-checklist/' },
    { label: 'Pet relocation Dubai', to: '/' },
    { label: 'Pet relocation services', to: '/service/pet-relocation-dubai/' },
    { label: 'Pet export from Dubai', to: '/service/pet-export-dubai/' },
    { label: 'Pet relocation from Dubai', to: '/service/pet-relocation-from-dubai/' },
    { label: 'IATA pet crate requirements', to: '/guides/iata-pet-crate-requirements/' },
  ],
}

export default petImportDubai
