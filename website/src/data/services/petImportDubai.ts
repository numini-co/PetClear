import type { ServicePageData } from '../../types/servicePage.ts'
import {
  EXEMPT_LIST_HOLD,
  MANIFEST_CARGO,
  MICROCHIP_BEFORE_RABIES,
  NONCOMPLIANCE_FINE,
  PARASITE_WINDOW,
  PERMIT_FEE_VERIFY,
  PERMIT_PROCESSING_ESTIMATE,
  PERMIT_VALIDITY,
  RABIES_AGE_WAIT,
  RELEASE_FEE_VERIFY,
  TITER_SAMPLE_RULE,
  TWO_PETS_RULE,
} from '../../lib/regulatory.ts'

const petImportDubai: ServicePageData = {
  slug: 'pet-import-dubai',
  seoTitle: 'Pet Import Dubai | MOCCAE Permit & Customs Clearance (2026)',
  metaDescription:
    'Commercial pet import to Dubai: MOCCAE 30-day permit, titer sample timing, cargo clearance at DXB and door delivery. Message us on WhatsApp for a relocation quote.',
  keywords:
    'pet import dubai, pet import UAE, how to import a pet to UAE, MOCCAE import permit application, import pet to dubai, pet customs dubai',
  h1: 'Pet Import Services in Dubai',
  primaryKeyword: 'pet import dubai',
  heroValueProp:
    'Commercial import into the UAE: we sequence the 30-day MOCCAE permit, titer sample window, manifested cargo and DXB clearance so your dog or cat is released to a Dubai door — not left in a cargo hall.',
  // Blocked original-photo placeholder — AI substitute not used for this hero.
  heroImage: '/images/service-pet-import-dubai.jpg',
  heroImageAlt:
    'Pet travel crates being handled in a Dubai air-cargo warehouse during pet import clearance (placeholder until an original cargo-facility photo is shot)',
  whatsappMessage:
    'Hi Dubai Pet Relocation! I want to import my pet to Dubai. Can you review origin, breed, documents and a commercial import quote?',
  ctaLabel: 'Get a Relocation Quote',
  heroEyebrow: 'Pet Import Service',
  trustBadges: [
    '30-day MOCCAE permit window',
    'Titer sample timing checked',
    'DXB / AUH cargo clearance',
    'WhatsApp during business hours',
  ],
  hasHowTo: true,
  howToName: 'How commercial pet import to Dubai is coordinated',
  sections: [
    {
      h2: 'This page is the commercial import job — not the rules encyclopaedia',
      intro:
        'Ruling 5: this URL owns importing a pet as a paid coordination job. The full statutory checklist lives on [UAE pet import requirements](/guides/uae-pet-import-requirements/). Arrival-side settling (first week, municipality registration) lives on [pet relocation to Dubai](/service/pet-relocation-to-dubai/). Permit filing as a standalone product lives on [MOCCAE permit assistance](/service/moccae-pet-permit/).',
      body: [
        {
          type: 'p',
          text: 'If you are paying someone to get a dog or cat into the UAE, the work is operational: eligibility, document sequence, a permit that is still valid on landing, a manifested cargo booking, veterinary inspection at the cargo village, and last-mile handover. We coordinate that sequence with vetted veterinary and transport partners. We do not operate the aircraft and we are not a MOCCAE-licensed agency — only the Ministry issues permits.',
        },
        {
          type: 'p',
          text: `${MANIFEST_CARGO} Country-level corridors (UK certificates, India titer logistics, Philippines BAI) belong on the [routes hub](/routes/), not as a second copy of this page.`,
        },
        {
          type: 'list',
          items: [
            'Eligibility review — breed against Federal Law 22/2016 Annex 2 before you commit to a flight',
            'Document pack lined up in the correct order (microchip before rabies, then vaccinations, then titer if required)',
            'MOCCAE import permit timed to the 30-day validity window',
            'IATA crate sizing and manifested cargo booking into DXB, DWC or AUH',
            'Arrival inspection coordination and door delivery in Dubai',
          ],
        },
      ],
    },
    {
      h2: 'The six-stage import sequence we actually run',
      intro:
        'Order is the product. Booking a ticket before the permit window and titer sample date are understood is the most expensive import mistake we see.',
      body: [
        {
          type: 'image',
          src: '/assets/w5/pet-import-dubai-process-diagram.png',
          alt: 'Pet import process for Dubai: MOCCAE permit, health certificate, flight, customs clearance, release, home delivery',
          caption: 'Six commercial stages. Validity and fees are confirmed on the portal — they are not baked into this diagram.',
        },
        {
          type: 'steps',
          steps: [
            {
              title: 'Eligibility and origin check',
              text: 'Send breed, age, weight, origin country and a target month. We check Annex 2 breed restrictions and whether your origin is treated as titer-required. We do not publish an unverified exempt-country list — confirm your origin on the MOCCAE portal, or we will check it with you.',
            },
            {
              title: 'Microchip, then vaccinate',
              text: `${MICROCHIP_BEFORE_RABIES} ${RABIES_AGE_WAIT} Dogs also need distemper, parvovirus, infectious canine hepatitis and leptospirosis; cats need panleukopenia, rhinotracheitis and calicivirus.`,
            },
            {
              title: 'Titer sample — only if your origin requires it',
              text: `${TITER_SAMPLE_RULE} ${EXEMPT_LIST_HOLD} Deep timing lives on [rabies titer test for Dubai](/guides/rabies-titer-test-dubai/).`,
            },
            {
              title: 'MOCCAE import permit — 30 days',
              text: `${PERMIT_VALIDITY} ${PERMIT_FEE_VERIFY} ${PERMIT_PROCESSING_ESTIMATE} Walkthrough: [how to apply for a MOCCAE import permit](/guides/moccae-import-permit/). Hands-on filing: [MOCCAE permit assistance](/service/moccae-pet-permit/).`,
            },
            {
              title: 'Health certificate, parasites, crate and cargo',
              text: `An official origin-country health certificate is commonly required within 5–10 days of departure. ${PARASITE_WINDOW} We size an IATA crate and coordinate a manifested cargo booking — not cabin, not hold baggage (Etihad cabin into Abu Dhabi is the published exception).`,
            },
            {
              title: 'Clearance at DXB / AUH and door delivery',
              text: `${RELEASE_FEE_VERIFY} A MOCCAE inspector scans the chip and reviews the pack. Compliant pets are examined and released — there is no routine quarantine. We arrange last-mile delivery and keep you on WhatsApp during business hours.`,
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
            'ISO 11784/11785 15-digit microchip implanted before the rabies vaccination',
            'Rabies certificate: pet at least 12 weeks at vaccination; at least 21 days before arrival; inactivated or recombinant only',
            'Species core vaccines as listed on [UAE pet import requirements](/guides/uae-pet-import-requirements/)',
            'RNATT result ≥0.5 IU/ml when required — sample drawn within 90 days before travel',
            'Government-endorsed international veterinary health certificate from the origin country',
            'MOCCAE import permit still inside its 30-day window on the arrival date',
            'Internal and external parasite treatments within 10 days before shipping',
            'Owner passport copy and UAE visa / residency details used on the permit',
          ],
        },
        {
          type: 'p',
          text: `${NONCOMPLIANCE_FINE} We triple-check the pack so a typo never becomes a refused landing.`,
        },
      ],
    },
    {
      h2: 'How we time the 30-day MOCCAE permit against the flight',
      intro:
        'The permit is the legal gate. Airlines will not accept the animal without it, and a cargo village will not release an animal on an expired permit. The commercial job is to issue it late enough to cover landing and early enough to survive processing.',
      body: [
        {
          type: 'p',
          text: `${PERMIT_VALIDITY} Applying the day you first think about moving is how permits expire on the tarmac. We work backwards from a confirmed cargo date, then open the portal application once the document pack is consistent.`,
        },
        {
          type: 'p',
          text: 'Access requires UAE Pass. Many newcomers ask us to coordinate the form with a vetted local partner rather than learn the portal under a flight deadline. We still do not issue the permit — MOCCAE does.',
        },
        {
          type: 'p',
          text: `${TWO_PETS_RULE} ${PERMIT_PROCESSING_ESTIMATE}`,
        },
      ],
    },
    {
      h2: 'Import timeline — what actually sets the floor',
      intro:
        'The honest answer is not a single number. It depends on whether MOCCAE requires an RNATT for your origin, and whether the microchip-then-rabies sequence is already done.',
      body: [
        {
          type: 'p',
          text: 'When an RNATT is not required and the pet is already microchipped and rabies-vaccinated, the commercial path is usually a matter of weeks: health-certificate window, 10-day parasite treatments, crate, cargo slot and the 30-day permit. Starting from a new first rabies vaccination adds the 21-day wait before arrival.',
        },
        {
          type: 'p',
          text: `${TITER_SAMPLE_RULE} Lab turnaround (often 1–3 weeks) and the 21-day post-vaccination wait before a valid sample can be drawn are what stretch high-risk files — not a mandatory 90-day sit after the result arrives. We map dates backwards from your target landing so the sample is still inside the 90-day window on travel day.`,
        },
        {
          type: 'table',
          headers: ['Starting point', 'What usually drives the calendar', 'What we will not claim'],
          rows: [
            [
              'RNATT not required; already vaccinated',
              'Health certificate + 30-day permit + cargo slot',
              'A guaranteed week count — cargo calendars move',
            ],
            [
              'RNATT not required; new rabies vaccine',
              '21-day wait after vaccination plus the pack above',
              'That the 21 days can be waived',
            ],
            [
              'RNATT required',
              'Post-vaccine wait + lab time + sample still ≤90 days before travel',
              'A 90-day waiting period after the test',
            ],
          ],
        },
      ],
    },
    {
      h2: 'What an import quote is made of — without invented government fees',
      intro:
        'Government charges are a small, contested slice. Published permit and release figures have differed, so this page does not print AED 200 vs 500 or 500/250 vs 1,000/500 as if they were settled.',
      body: [
        {
          type: 'p',
          text: `${PERMIT_FEE_VERIFY} ${RELEASE_FEE_VERIFY} Those portal amounts exclude origin veterinary work, the crate, manifested cargo and our coordination.`,
        },
        {
          type: 'table',
          headers: ['Cost type', 'How we treat it on this page'],
          rows: [
            ['MOCCAE import permit (per pet)', 'Confirm the live portal amount when you apply'],
            ['Arrival veterinary release / inspection', 'Confirm the live portal / cargo-village amount'],
            ['Origin veterinary (vaccines, certificate, titer if required)', 'Quoted from your origin vet — not a published DPR fee table'],
            ['IATA-compliant crate', 'Sized to the animal; partner quote, not a guess from a chart'],
            ['Manifested cargo', 'Airline and route specific — we itemise before you book'],
            ['Coordination and handling', 'Quoted on WhatsApp for your origin, size and service tier'],
          ],
        },
        {
          type: 'p',
          text: 'Compare how much of the sequence we hold versus how much you hold on [compare our service tiers](/services/). Then message us for a relocation quote — we do not publish a fake AED total on this page.',
        },
      ],
    },
    {
      h2: 'Breed eligibility before you spend on cargo',
      intro:
        'Federal Law No. 22 of 2016 Annex 2 (as amended, including Ministerial Decree 190/2021) prohibits import of listed dangerous-dog types and their hybrids. We check your dog against the current list before you commit.',
      body: [
        {
          type: 'p',
          text: 'Annex 2 includes Pit Bull types (Staffordshire Bull Terrier, American Pit Bull Terrier, American Staffordshire Terrier, American Bully and mixes), Mastiff types (including Fila Brasileiro, Dogo Argentino and other Mastiff / hybrids), Japanese Tosa, Rottweiler, Doberman Pinscher, Presa Canario and Boxer. Possession, trade or breeding of Annex-2 dogs is prohibited. Mixed dogs that are morphologically identifiable as a listed type can still be refused.',
        },
        {
          type: 'p',
          text: 'Narrow exceptions for service, assistance or medical-purpose animals require training-centre documentation and a supporting medical report under the 2021 amendment. We do not treat an “emotional support” letter as a shortcut. Full list and enforcement notes: [banned dog breeds in Dubai](/guides/banned-dog-breeds-dubai/).',
        },
      ],
    },
    {
      h2: 'Airport clearance we coordinate — DXB, DWC and AUH',
      intro:
        'Pets enter as manifested cargo, so they arrive at a cargo terminal, not the passenger hall. A dedicated arrival walkthrough (Cargo Village, municipality registration) is scheduled as a later guide; until that URL is live, this section is the commercial summary.',
      body: [
        {
          type: 'p',
          text: `At Dubai International the typical path is the cargo village: MOCCAE veterinary inspection, microchip scan against the permit, document review, customs release, then handover. ${RELEASE_FEE_VERIFY} When the pack is complete, compliant pets are released to the owner or nominated agent — there is no routine quarantine.`,
        },
        {
          type: 'p',
          text: 'Abu Dhabi arrivals follow the same federal permit and inspection logic at the AUH cargo side. Etihad in-cabin pets still need the UAE health paperwork plus an Abu Dhabi Customs Bill of Entry — we flag that path only when the animal actually qualifies. We advise which airport matches the route rather than forcing every file through DXB.',
        },
        {
          type: 'p',
          text: `${NONCOMPLIANCE_FINE} Incomplete titer or permit files are exactly where coordinated clearance earns its keep. We do not invent 1–2 hour guarantees; we stay on the thread until the animal is in the van.`,
        },
      ],
    },
  ],
  faq: [
    {
      q: 'What does a commercial pet import to Dubai actually include?',
      a: 'On this page it means we coordinate eligibility, the document sequence, the 30-day MOCCAE import permit, IATA crate sizing, manifested cargo and cargo-village clearance through to a Dubai door. We are a coordination service, not the airline and not a MOCCAE-licensed issuer. Compare depth of help on [compare our service tiers](/services/).',
    },
    {
      q: 'How is this different from the UAE import-requirements guide?',
      a: 'The guide owns the statutory checklist. This page owns the paid import job — sequencing, partners and clearance. Read the rules on [UAE pet import requirements](/guides/uae-pet-import-requirements/), then use this page when you want the work done.',
    },
    {
      q: 'How long is the MOCCAE import permit valid?',
      a: 'Thirty days from issuance. The pet must enter the UAE inside that window. If the permit expires, a new application and a new portal fee are required. We time filing against a confirmed cargo date, not against the day you first messaged us.',
    },
    {
      q: 'Do I need a rabies titer test to import a pet to Dubai?',
      a: 'Only if MOCCAE treats your origin as requiring an RNATT. When it is required, the blood sample must be taken within 90 days before travel and read at least 0.5 IU/ml. That is a sample-timing window, not a 90-day wait after the result. We do not publish an unverified exempt-country list — confirm your origin on the portal. Detail: [rabies titer test for Dubai](/guides/rabies-titer-test-dubai/).',
    },
    {
      q: 'How much do government import fees cost?',
      a: 'Confirm the current MOCCAE permit fee and the arrival release / inspection fee on the official portal. Published amounts have differed (permit AED 200 vs 500; release figures also conflict). Those government charges exclude veterinary work, crate, cargo and coordination.',
    },
    {
      q: 'Can my pet fly in the cabin into Dubai?',
      a: 'Almost never. Pets must enter the UAE as manifested cargo, not cabin or accompanied checked baggage. Etihad publishes an in-cabin option for eligible small dogs and cats arriving into Abu Dhabi only. Emirates arrivals into Dubai travel as SkyCargo. We confirm the carrier rule in writing before you pay for a ticket.',
    },
    {
      q: 'How many pets can I import on a personal permit?',
      a: 'Personal (non-commercial) import is typically limited to a maximum of 2 pets per person (2 cats, or 2 dogs, or 1 cat and 1 dog) per permit / per year. Confirm the current portal rule for your household. Larger groups need a different conversation — message us before you book crates.',
    },
    {
      q: 'What happens if the paperwork is wrong on arrival?',
      a: 'Non-compliant imports can face a fine of AED 5,000 per animal, and the animal may be rejected or confiscated. Compliant pets are examined by MOCCAE staff at the entry port and released — there is no routine quarantine. That is why we line-check the pack before the flight, not after.',
    },
    {
      q: 'Do you issue the MOCCAE permit yourselves?',
      a: 'No. Only MOCCAE issues permits. We review the file, time the 30-day window and, on higher tiers, coordinate portal submission through vetted partners. Standalone permit help: [MOCCAE permit assistance](/service/moccae-pet-permit/). DIY walkthrough: [MOCCAE import permit guide](/guides/moccae-import-permit/).',
    },
  ],
  relatedLinks: [
    { label: 'UAE Pet Import Requirements', to: '/guides/uae-pet-import-requirements/' },
    { label: 'MOCCAE Permit Assistance', to: '/service/moccae-pet-permit/' },
    { label: 'MOCCAE Import Permit Guide', to: '/guides/moccae-import-permit/' },
    { label: 'Rabies Titer Test Dubai', to: '/guides/rabies-titer-test-dubai/' },
    { label: 'Pet Relocation to Dubai', to: '/service/pet-relocation-to-dubai/' },
    { label: 'Banned Dog Breeds in Dubai', to: '/guides/banned-dog-breeds-dubai/' },
    { label: 'Routes Hub', to: '/routes/' },
    { label: 'How It Works', to: '/how-it-works/' },
  ],
}

export default petImportDubai
