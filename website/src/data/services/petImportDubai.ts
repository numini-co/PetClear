import type { ServicePageData } from '../../types/servicePage.ts'
import { waEligibility } from '../../lib/conversionCopy.ts'
import { PERMIT_VALIDITY } from '../../lib/regulatory.ts'

const FEES =
  'On 22 September 2026 the MOCCAE page listed AED 200 to issue an import permit for one animal, AED 500 to release one dog, and AED 250 to release one cat. These are government charges, not a relocation package.'
const TITRE =
  'High-risk origins need at least 0.5 IU/ml. The certificate is valid for 365 days if the vaccine stays valid and continuous and no booster is given. Otherwise the test is repeated. A first vaccine, or a gap in vaccination, needs at least 21 days before the test. A valid booster does not. An older 90-day sample window is not on the live page.'
const OUTCOME =
  'If the import does not comply, the pet may be rejected at the owner\'s expense or confiscated. The page does not publish a fine amount. A matching animal is examined at the entry port and released. No routine quarantine length is published.'

const petImportDubai: ServicePageData = {
  slug: 'pet-import-dubai',
  seoTitle: 'Pet Import Services Dubai | MOCCAE & Customs Clearance',
  metaDescription:
    'Pet import services in Dubai: MOCCAE permit valid 90 days from issuance, titre conditions for high-risk origins, and cargo clearance. No package price on this page.',
  h1: 'Pet Import Services in Dubai',
  primaryKeyword: 'pet import services Dubai',
  heroValueProp:
    'Commercial import into the UAE: we sequence the MOCCAE permit (90 days from issuance), the titre certificate when the origin is high-risk, cargo into Dubai, and handover at the door.',
  // Blocked original-photo placeholder — AI substitute not used for this hero.
  heroImage: '/images/service-pet-import-dubai.jpg',
  heroImageAlt:
    'Pet travel crates handled in a Dubai air-cargo warehouse during import clearance',
  whatsappMessage: waEligibility({ need: 'managed move' }),
  ctaLabel: 'Get a managed-move quote',
  heroEyebrow: 'Pet Import Service',
  snippetQuestion: 'What are the requirements for traveling with my pet to the UAE?',
  snippetAnswer:
    'A pet entering the UAE needs a permanent microchip whose number matches the health certificate, the vaccines for that species, an authorised health certificate, and a MOCCAE import permit valid 90 days from issuance. High-risk origins add a rabies antibody test of at least 0.5 IU/ml. Matching animals are inspected and released. Full rules live on the UAE import-requirements guide.',
  trustBadges: [
    '90-day MOCCAE permit window',
    '365-day titre certificate when required',
    'DXB / AUH cargo clearance',
    'WhatsApp during business hours',
  ],
  hasHowTo: true,
  howToName: 'How commercial pet import to Dubai is coordinated',
  sections: [
    {
      h2: 'What this import service covers',
      intro:
        'Import coordination means we sequence the paid file: partners, paperwork and clearance. The full statutory checklist lives on [UAE pet import requirements](/guides/uae-pet-import-requirements/). Arrival-side settling (first week, municipality registration) lives on [pet relocation to Dubai](/service/pet-relocation-to-dubai/). Permit filing as a standalone product lives on [MOCCAE permit assistance](/service/moccae-pet-permit/).',
      body: [
        {
          type: 'p',
          text: 'If you are paying someone to get a dog or cat into the UAE, the work is operational: eligibility, document sequence, a permit that is still valid on landing, a cargo booking, veterinary inspection at the cargo village, and last-mile handover. We coordinate that sequence with veterinary and transport partners. We do not operate the aircraft. Only MOCCAE issues permits.',
        },
        {
          type: 'p',
          text: 'Emirates says ordinary pets are not in the cabin, and itineraries ending in Dubai must travel as cargo. Country corridors belong on the [routes hub](/routes/).',
        },
        {
          type: 'list',
          items: [
            'Eligibility review against the ban list printed on the MOCCAE import page',
            'Document pack: matching microchip, species vaccines, antibody test only if the origin is high-risk',
            'MOCCAE import permit timed to the 90-day validity window',
            'IATA crate sizing and manifested cargo booking into DXB, DWC or AUH',
            'Arrival inspection coordination and door delivery in Dubai',
          ],
        },
      ],
    },
    {
      h2: 'The six-stage import sequence we actually run',
      intro:
        'Book cargo only after the permit window and, for a high-risk origin, the titre certificate are understood.',
      body: [
        {
          type: 'image',
          src: '/assets/w5/pet-import-dubai-process-diagram.png',
          alt: 'Pet import process for Dubai: permit, health certificate, flight, customs, delivery',
          caption: 'Illustration only. Permit validity is 90 days from issuance. Titre timing follows the live MOCCAE page.',
        },
        {
          type: 'steps',
          steps: [
            {
              title: 'Eligibility and origin check',
              text: 'Send breed, age, weight, origin country and a target month. We check the published ban list. We do not reprint the low-risk country list. On 22 September 2026 the United Kingdom was on it and the United States was not named on it. Confirm any other origin on the live page.',
            },
            {
              title: 'Microchip and vaccines',
              text: 'Permanent microchip. The number on the health certificate must match the animal. ISO 11784/11785 and an implant-before-vaccine order were not restated on the live page. Rabies vaccination is not before 12 weeks of age. Dogs also need distemper, parvovirus, infectious canine hepatitis and leptospirosis. Cats need panleukopenia, rhinotracheitis and calicivirus.',
            },
            {
              title: 'Antibody test, only if the origin is high-risk',
              text: `${TITRE} Detail: [rabies titre test for Dubai](/guides/rabies-titer-test-dubai/).`,
            },
            {
              title: 'MOCCAE import permit, 90 days from issuance',
              text: `${PERMIT_VALIDITY} ${FEES} The published estimate is 1 working day, or 5 working days for a service, emotional support or medical dog. Walkthrough: [how to apply for a MOCCAE import permit](/guides/moccae-import-permit/). Hands-on filing: [MOCCAE permit assistance](/service/moccae-pet-permit/).`,
            },
            {
              title: 'Health certificate, parasites, crate and cargo',
              text: 'The live page asks for an authorised health certificate and does not state a universal 5-day or 10-day validity. Internal and external parasite treatment is recorded in the 14 days before shipment. Your vet chooses a species-safe product. We size an IATA crate and coordinate cargo. Emirates itineraries ending in Dubai are cargo.',
            },
            {
              title: 'Clearance at DXB / AUH and door delivery',
              text: `${FEES} A MOCCAE inspector checks the chip and the file. ${OUTCOME} We arrange last-mile delivery and keep you on WhatsApp during business hours. We do not promise a release time.`,
            },
          ],
        },
      ],
    },
    {
      h2: 'Documents we line-check before anything is booked',
      intro:
        'This is a commercial review list, not a substitute for the statutory table on the requirements guide. Every certificate must show the same 15-digit microchip number.',
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
            'Permanent microchip. The health-certificate number must match the animal. ISO was not restated.',
            'Rabies vaccination not before 12 weeks of age. Validity follows the manufacturer.',
            'Species vaccines as listed on [UAE pet import requirements](/guides/uae-pet-import-requirements/)',
            'Antibody result of at least 0.5 IU/ml when the origin is high-risk, under the 365-day certificate conditions',
            'Authorised health certificate from the origin authority. No universal 10-day validity on the MOCCAE page.',
            'MOCCAE import permit still inside its 90 days from issuance on the arrival date',
            'Internal and external parasite treatment in the 14 days before shipment',
            'Release papers: customs declaration or bill of lading, vaccine record, health certificate, and the antibody certificate if required',
          ],
        },
        {
          type: 'p',
          text: `${OUTCOME} We check the pack before the flight.`,
        },
      ],
    },
    {
      h2: 'How we time the 90-day MOCCAE permit against the flight',
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
      ],
    },
    {
      h2: 'What sets the calendar',
      intro:
        'There is no single week count. It depends on whether the origin is high-risk, and on the vaccine already in the animal.',
      body: [
        {
          type: 'p',
          text: 'When the origin is low-risk and the animal is already microchipped and vaccinated, the tight clocks are the 90-day permit, parasite treatment in the 14 days before shipment, and the origin health certificate\'s own validity. We do not promise a 4 to 6 week file.',
        },
        {
          type: 'p',
          text: `${TITRE} Clinic turnaround is not a Ministry service time. We map the certificate against the permit, which lasts 90 days from issuance.`,
        },
        {
          type: 'table',
          headers: ['Starting point', 'What usually drives the calendar', 'What we will not claim'],
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
      h2: 'What an import quote is made of',
      intro:
        'This page does not publish a package total. The government amounts below are the fees on the MOCCAE page checked on 22 September 2026.',
      body: [
        {
          type: 'p',
          text: `${FEES} Those amounts exclude origin veterinary work, the crate, cargo and coordination. We do not publish a package total.`,
        },
        {
          type: 'table',
          headers: ['Cost type', 'How we treat it on this page'],
          rows: [
            ['MOCCAE import permit (per animal)', 'AED 200 on the page checked 22 September 2026'],
            ['Dog release / cat release', 'AED 500 per dog, AED 250 per cat, on that same page'],
            ['Origin veterinary (vaccines, certificate, titer if required)', 'Quoted from your origin vet — not a published DPR fee table'],
            ['IATA-compliant crate', 'Sized to the animal; partner quote, not a guess from a chart'],
            ['Manifested cargo', 'Airline and route specific — we itemise before you book'],
            ['Coordination and handling', 'Quoted on WhatsApp for your origin, size and service tier'],
          ],
        },
        {
          type: 'p',
          text: 'Compare how much of the sequence we hold versus how much you hold on [compare our service tiers](/services/). Then send origin, pet and month on WhatsApp for a paid eligibility check and a managed-import quote — we do not publish a fake AED total on this page. Packages: [Prices](/prices/).',
        },
      ],
    },
    {
      h2: 'Breed eligibility before you spend on cargo',
      intro:
        'We check the dog against the ban list printed on the MOCCAE import page before you commit to a flight.',
      body: [
        {
          type: 'p',
          text: 'The names on that page include Staffordshire Bull Terrier, American Pit Bull Terrier, American Staffordshire Terrier, American Bully, the listed mastiff types, Japanese Tosa and Presa Canario. Rottweiler, Doberman and Boxer were not on the list we checked. The English page does not add "any cross", so this page does not either. Full names: [banned dog breeds in Dubai](/guides/banned-dog-breeds-dubai/).',
        },
        {
          type: 'p',
          text: 'The same page allows service, emotional support and medical dogs when a certified training-centre document, a certified medical report on the owner, and a signed pledge are supplied. A casual letter is not those documents.',
        },
      ],
    },
    {
      h2: 'Airport clearance we coordinate — DXB, DWC and AUH',
      intro:
        'Pets enter as manifested cargo, so they arrive at a cargo terminal, not the passenger hall. This section stays a short commercial summary. The full post-arrival journey — DXB arrival, clearance and registration — lives on the [Dubai pet arrival guide](/guides/dubai-pet-arrival-guide/).',
      body: [
        {
          type: 'p',
          text: `At Dubai International the typical path is the cargo village: inspection, microchip check against the permit, document review, then handover. ${FEES} ${OUTCOME} Step-by-step notes are on the [Dubai pet arrival guide](/guides/dubai-pet-arrival-guide/).`,
        },
        {
          type: 'p',
          text: 'Abu Dhabi arrivals use the same federal permit. The Etihad product page was not fully re-read on 22 September 2026, so this page does not repeat cabin weights, fares or a bill-of-entry amount. Confirm the carrier in writing.',
        },
        {
          type: 'p',
          text: `${OUTCOME} We stay on the thread until the animal is in the van. We do not promise a clearance time.`,
        },
      ],
    },
  ],
  faq: [
    {
      q: 'How long do pets stay in quarantine?',
      a: 'The UAE typically has no long quarantine when documents are correct — compliant pets are examined at the entry port and released. We do not assume a day-count for a paperwork hold. Depth lives on the [UAE pet import requirements](/guides/uae-pet-import-requirements/) guide.',
    },
    {
      q: 'What are the rules and regulations for pets in the UAE?',
      a: 'Federal rules cover a matching microchip, the vaccines for that species, a health certificate, a MOCCAE import permit valid 90 days from issuance, and the published breed ban. Use [UAE pet import requirements](/guides/uae-pet-import-requirements/) and [banned dog breeds in Dubai](/guides/banned-dog-breeds-dubai/).',
    },
    {
      q: 'What are the requirements for traveling with my pet to the UAE?',
      a: 'A matching microchip, the vaccines for that species, an authorised health certificate, parasite treatment in the 14 days before shipment, and a MOCCAE import permit valid 90 days from issuance. High-risk origins add an antibody test of at least 0.5 IU/ml. Emirates itineraries ending in Dubai are cargo. Full checklist: [UAE pet import requirements](/guides/uae-pet-import-requirements/).',
    },
    {
      q: 'Does Dubai allow pet dogs?',
      a: 'Yes. Dogs are legal in Dubai when the breed is not on the published ban list and the import file is complete. Check [banned dog breeds in Dubai](/guides/banned-dog-breeds-dubai/) before you book.',
    },
    {
      q: 'Is it legal to have a dog in Dubai?',
      a: 'Yes, when the breed is not on the published ban list. You still need a MOCCAE import permit valid for 90 days from issuance. Names: [banned dog breeds in Dubai](/guides/banned-dog-breeds-dubai/).',
    },
    {
      q: 'Do I need a MOCCAE import permit for my dog?',
      a: 'Yes. Every dog entering the UAE needs a MOCCAE import permit, valid 90 days from issuance. Confirm the live portal fee; fees may change. Apply questions live on the [MOCCAE import permit guide](/guides/moccae-import-permit/). This commercial import page does not deep-own that query.',
    },
    {
      q: 'How much does it cost to import a pet to Dubai?',
      a: 'This page does not publish a package total. Government charges checked on 22 September 2026 were AED 200 for the permit, AED 500 to release a dog, and AED 250 to release a cat. Cargo, crate and coordination are quoted for your animal. WhatsApp +971504782999.',
    },
    {
      q: 'What does a commercial pet import to Dubai actually include?',
      a: 'On this page it means we coordinate eligibility, the document sequence, the 90-day MOCCAE import permit, IATA crate sizing, manifested cargo and cargo-village clearance through to a Dubai door. We are a coordination service, not the airline and not a MOCCAE-licensed issuer. Compare depth of help on [compare our service tiers](/services/).',
    },
    {
      q: 'How is this different from the UAE import-requirements guide?',
      a: 'Read the statutory checklist on the guide. Use this page when you want the import sequenced, with partners and clearance. Rules: [UAE pet import requirements](/guides/uae-pet-import-requirements/).',
    },
    {
      q: 'How long is the MOCCAE import permit valid?',
      a: '90 days from issuance. The pet must enter the UAE inside that window. If the permit expires, a new application and a new portal fee are required. We time filing against a confirmed cargo date, not against the day you first messaged us.',
    },
    {
      q: 'Do I need a rabies titer test to import a pet to Dubai?',
      a: 'Only if the origin is high-risk. On 22 September 2026 the United Kingdom was on the low-risk list and the United States was not named on it. When a test is required, the result must be at least 0.5 IU/ml and the certificate follows the 365-day conditions. Detail: [rabies titre test for Dubai](/guides/rabies-titer-test-dubai/).',
    },
    {
      q: 'How much do government import fees cost?',
      a: 'Confirm the current MOCCAE permit fee and the arrival release / inspection fee on the official portal; fees may change. Those government charges exclude veterinary work, crate, cargo and coordination.',
    },
    {
      q: 'Can my pet fly in the cabin into Dubai?',
      a: 'Emirates says ordinary animals are not allowed in the cabin, and every itinerary ending in Dubai must travel as cargo. Other airlines are separate products. We confirm the carrier in writing before you pay for a ticket. Cabin weights and fares are not copied here.',
    },
    {
      q: 'How many pets can I import on a personal permit?',
      a: 'Personal (non-commercial) import is typically limited to a maximum of 2 pets per person (2 cats, or 2 dogs, or 1 cat and 1 dog) per permit / per year. Confirm the current portal rule for your household. Larger groups need a different conversation — send household details on WhatsApp for a paid eligibility check before you book crates.',
    },
    {
      q: 'What happens if the paperwork is wrong on arrival?',
      a: 'The published outcome is rejection at the owner\'s expense or confiscation. The page checked on 22 September 2026 does not publish a fine amount or a quarantine length. A matching file is examined and released. That is why we check the pack before the flight.',
    },
    {
      q: 'Do you issue the MOCCAE permit yourselves?',
      a: 'Only MOCCAE issues permits. We review the file, time the 90-day window and, on higher tiers, coordinate portal submission through vetted partners. Standalone permit help: [MOCCAE permit assistance](/service/moccae-pet-permit/). DIY walkthrough: [MOCCAE import permit guide](/guides/moccae-import-permit/). Tick-list: [pet import checklist](/guides/import-checklist/).',
    },
    {
      q: 'When should I use import versus door-to-door relocation?',
      a: 'Use this page when the job is inbound clearance — permit, cargo and a Dubai door. Use [pet relocation Dubai](/service/pet-relocation-dubai/) when you want one coordinator to pick the mode and hold the last mile. Leaving the UAE is [pet export from Dubai](/service/pet-export-dubai/). WhatsApp +971504782999.',
    },
  ],
  relatedLinks: [
    { label: 'Dubai pet arrival guide', to: '/guides/dubai-pet-arrival-guide/' },
    { label: 'UAE Pet Import Requirements', to: '/guides/uae-pet-import-requirements/' },
    { label: 'MOCCAE Permit Assistance', to: '/service/moccae-pet-permit/' },
    { label: 'MOCCAE Import Permit Guide', to: '/guides/moccae-import-permit/' },
    { label: 'Rabies Titer Test Dubai', to: '/guides/rabies-titer-test-dubai/' },
    { label: 'Pet Relocation to Dubai', to: '/service/pet-relocation-to-dubai/' },
    { label: 'Banned Dog Breeds in Dubai', to: '/guides/banned-dog-breeds-dubai/' },
    { label: 'Routes Hub', to: '/routes/' },
    { label: 'Pet Relocation Cost Dubai', to: '/guides/pet-relocation-cost-dubai/' },
    { label: 'How It Works', to: '/how-it-works/' },
    { label: 'Pet import checklist', to: '/guides/import-checklist/' },
    { label: 'Pet relocation Dubai', to: '/service/pet-relocation-dubai/' },
    { label: 'Pet export from Dubai', to: '/service/pet-export-dubai/' },
  ],
}

export default petImportDubai
