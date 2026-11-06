import type { ServicePageData } from '../../types/servicePage.ts'
import { waEligibility } from '../../lib/conversionCopy.ts'
import {
  EXEMPT_LIST_HOLD,
  LAST_VERIFIED_LABEL,
  MANIFEST_CARGO,
  MICROCHIP_BEFORE_RABIES,
  PERMIT_FEE_VERIFY,
  PERMIT_PROCESSING_ESTIMATE,
  PERMIT_VALIDITY,
  RABIES_AGE_WAIT,
  TITER_SAMPLE_RULE,
} from '../../lib/regulatory.ts'

const moccaePetPermit: ServicePageData = {
  slug: 'moccae-pet-permit',
  seoTitle: 'MOCCAE Pet Permit Assistance | Managed Applications',
  metaDescription:
    'Managed MOCCAE pet permit applications for dogs and cats: document review, UAE Pass guidance, tracking until issue. 90 days from issuance. Check eligibility.',
  h1: 'MOCCAE pet permit application assistance',
  primaryKeyword: 'moccae pet permit dubai',
  heroValueProp:
    'Need a MOCCAE import permit, valid 90 days from issuance, or an export health certificate handled inside your move? We review your documents, guide the UAE Pass portal path and track approval until the Ministry issues it, then quote after an eligibility check. Only MOCCAE issues permits.',
  // Blocked original-photo placeholder — AI substitute not used for this hero.
  heroImage: '/images/service-moccae-pet-permit.jpg',
  heroImageAlt:
    'MOCCAE pet permit application folder prepared on a coordinator desk in Dubai',
  whatsappMessage: waEligibility({
    need: 'managed MOCCAE permit assistance (import permit or export health certificate). Please send the pet, the route, whether you need an import permit or an export health certificate, and the travel month',
  }),
  ctaLabel: 'Check permit eligibility',
  ctaSupport:
    'Send the pet, breed, origin or destination, travel month and whether you need an import permit or an export health certificate. We check eligibility and reply with a managed-permit quote.',
  ctaHeading: 'Ready to check permit eligibility?',
  ctaBody:
    'Send the pet, the route and whether you need an import permit or an export health certificate. We check eligibility and quote managed permit assistance before paid work starts. Government fees: confirm on the official MOCCAE portal.',
  paidIncludes: [
    'Document pack reviewed for microchip, vaccine and certificate consistency before anyone opens the portal',
    'UAE Pass path chosen for import permit or export health certificate',
    'Application prepared so origin rules and required attachments match',
    'Status tracked on WhatsApp until MOCCAE issues the document',
    'Rejection reason read and documents fixed before you resubmit',
  ],
  gateLine:
    'Guides are free to read. WhatsApp is for a managed permit application and a quote.',
  heroEyebrow: 'MOCCAE permit assistance',
  snippetQuestion: 'What does MOCCAE pet permit assistance include?',
  snippetAnswer:
    'Paid assistance includes document review, UAE Pass portal guidance and tracking until MOCCAE issues the import permit (valid 90 days from issuance) or the export health certificate. Only MOCCAE issues permits. Confirm fees on the official MOCCAE portal. Doing it yourself? Use the free MOCCAE import permit guide. WhatsApp +971504782999.',
  trustBadges: [
    'Import permit valid 90 days from issuance',
    'Document review before submit',
    'UAE Pass portal guidance',
    'WhatsApp during business hours',
  ],
  hasHowTo: true,
  howToName: 'How managed MOCCAE permit assistance works',
  sections: [
    {
      id: 'assistance',
      h2: 'MOCCAE pet permit assistance: what we handle',
      intro:
        'Paid help is for an import permit into the UAE or an export health certificate out of the UAE. Doing the portal yourself? Use the free [MOCCAE import permit guide](/guides/moccae-import-permit/). Need the full inbound move including cargo and delivery? See [pet import Dubai](/service/pet-import-dubai/) or [pet relocation to Dubai](/service/pet-relocation-to-dubai/). Leaving the UAE? See [pet export from Dubai](/service/pet-export-dubai/) or [pet relocation from Dubai](/service/pet-relocation-from-dubai/). Not sure which service fits? [Compare pet relocation services](/service/pet-relocation-dubai/).',
      body: [
        {
          type: 'p',
          text: 'MOCCAE, the UAE Ministry of Climate Change and Environment, issues pet import permits and export health certificates. Every dog or cat entering the UAE needs an import permit issued before arrival. Every pet leaving needs a MOCCAE export health certificate. Both are applied for on the official MOCCAE portal with a UAE Pass login.',
        },
        {
          type: 'p',
          text: 'We are a coordination service, not a government department, a vet or an airline. Only MOCCAE issues permits. Paid help covers document review, form preparation, error-flagging and status tracking until the Ministry approves.',
        },
        {
          type: 'list',
          items: [
            'Document review: microchip, rabies dates and certificate numbers checked for consistency',
            'Import-permit guidance on the official portal (UAE Pass path)',
            'Export health-certificate guidance, including the in-person quarantine-centre exam',
            'Approval tracking on WhatsApp during business hours',
            'Rejection triage: read the reason, fix the documents and resubmit on the same portal',
          ],
        },
      ],
    },
    {
      h2: 'How does managed MOCCAE permit assistance work?',
      intro:
        'The Ministry decides whether to issue the document. We review the documents with you and track status until it is issued. Field-by-field portal steps are in the free [MOCCAE import permit guide](/guides/moccae-import-permit/).',
      body: [
        {
          type: 'image',
          src: '/assets/w5/moccae-import-permit-application-flowchart.webp',
          alt: 'MOCCAE pet import permit application flow from document collection to approval tracking',
          width: 1100,
          height: 733,
          caption:
            'Documents complete? If no, fix them before you pay the portal. Issued import permits are valid 90 days from issuance.',
        },
        {
          type: 'steps',
          steps: [
            {
              title: 'Send the pack, not a screenshot of a boarding pass',
              text: 'WhatsApp the microchip number, rabies certificate, any RNATT result, owner passport bio page and a clear pet photo. We line-check numbers and dates before anyone opens the portal.',
            },
            {
              title: 'UAE Pass and the correct service path',
              text: 'The import permit is requested on moccae.gov.ae under Services, then Export and Import Services, then Import Permit for Pets. You need UAE Pass. If you do not have it yet, we talk you through setup. We do not assume a login for you.',
            },
            {
              title: 'Form fields we refuse to guess',
              text: 'Species, breed spelling, microchip, origin country and planned arrival. Origin classification decides whether an RNATT must be attached. We will not invent an exempt-country answer. Confirm on the official MOCCAE portal.',
            },
            {
              title: 'Pay only the live portal fee',
              text: `${PERMIT_FEE_VERIFY} We do a last pass on the application, then you submit. Government fees are the same whether you apply yourself or we guide you.`,
            },
            {
              title: 'Track until the PDF is in your folder',
              text: `${PERMIT_PROCESSING_ESTIMATE} ${LAST_VERIFIED_LABEL}. We watch the status and message you when it is ready so cargo can be confirmed, not the other way around.`,
            },
          ],
        },
        {
          type: 'p',
          text: `${RABIES_AGE_WAIT} ${MICROCHIP_BEFORE_RABIES} ${MANIFEST_CARGO}`,
        },
      ],
    },
    {
      h2: 'What is the MOCCAE export health certificate?',
      intro:
        'Leaving the UAE is not a reversed import form. Destination rules decide titer, tapeworm and certificate format. Plan from the destination backwards, then book the MOCCAE exam.',
      body: [
        {
          type: 'list',
          items: [
            'Confirm destination requirements first. GB, EU, CDC, DAFF and AQCS rules are not interchangeable',
            'Apply on the official MOCCAE portal with UAE Pass for the veterinary health certificate for export',
            'Attend the in-person examination at a MOCCAE quarantine centre (for example Dubai Airport Cargo Village or Zayed International Airport)',
            'A government veterinarian scans the microchip and reviews the documents before the certificate is issued',
            'Export-certificate fee and stated service time: confirm on the official MOCCAE portal',
          ],
        },
        {
          type: 'p',
          text: 'If the destination needs an RNATT, that clock starts long before the MOCCAE exam. See [rabies titer test for Dubai](/guides/rabies-titer-test-dubai/) for inbound titer rules, and [MOCCAE pet export permit](/service/pet-export-dubai/) when you want the full outbound job rather than permit-only help.',
        },
      ],
    },
    {
      h2: 'What must be ready before you submit on the portal',
      intro:
        'MOCCAE will not correct a mismatched chip for you. The review catches rejects that reset the clock.',
      body: [
        {
          type: 'image',
          src: '/assets/w1-w3/moccae-permit-document-check-hands-dubai.jpg',
          alt: 'Hands reviewing a pet travel checklist for a MOCCAE permit application',
          caption:
            'Check the microchip, vaccine dates and certificate numbers before anyone opens the portal.',
        },
        {
          type: 'list',
          items: [
            'UAE Pass account that can reach the MOCCAE digital services portal',
            'ISO-compliant 15-digit microchip implanted before the rabies vaccination, identical on every page',
            'Valid rabies vaccination: not before 12 weeks of age, at least 21 days before travel, and not more than 12 months prior',
            'Government health certificate details ready (import) or destination-format certificate plan (export)',
            'Owner passport and, where applicable, UAE visa or residency details',
            'RNATT ≥0.5 IU/ml attached only when the origin requires it: use a result of at least 0.5 IU/ml and a certificate valid for 365 days if the vaccine stays valid and continuous and no booster is given',
          ],
        },
        {
          type: 'p',
          text: `${TITER_SAMPLE_RULE} ${EXEMPT_LIST_HOLD}`,
        },
      ],
    },
    {
      h2: 'How long does a MOCCAE import permit take, and how long is it valid?',
      intro:
        'Processing time and permit validity are two different clocks. Mixing them up is how people miss a cargo slot.',
      body: [
        {
          type: 'p',
          text: PERMIT_PROCESSING_ESTIMATE,
        },
        {
          type: 'p',
          text: `${PERMIT_VALIDITY} If plans slip and the permit expires, you reapply and pay the portal fee again. We time the application to a confirmed travel date, not to a hopeful month.`,
        },
        {
          type: 'table',
          headers: ['Clock', 'What to expect', 'How we label it'],
          rows: [
            [
              'Processing',
              'Often a few working days when the documents are complete',
              'Estimate, secondary-sourced, not a MOCCAE SLA',
            ],
            [
              'Import-permit validity',
              '90 days from the date of issuance',
              'Hard rule: pet must arrive inside the window',
            ],
            [
              'Where to apply',
              'Official MOCCAE portal via UAE Pass',
              'We guide. The Ministry issues',
            ],
            [
              'Best time to apply',
              'Travel date confirmed and documents already consistent',
              'Early enough for the estimate, late enough for 90 days',
            ],
          ],
        },
      ],
    },
    {
      h2: 'How much does MOCCAE pet permit assistance cost?',
      intro:
        'Coordination is quoted after an eligibility check. Government fees: confirm on the official MOCCAE portal. Fees may change.',
      body: [
        {
          type: 'p',
          text: 'MOCCAE charges an import-permit fee before travel and a veterinary release fee at the cargo terminal. Confirm both on the official MOCCAE portal. Fees may change. Our coordination fee is quoted separately on WhatsApp and is not a government charge.',
        },
        {
          type: 'table',
          headers: ['Charge', 'Labelled amount'],
          rows: [
            ['Import permit', 'Confirm on official MOCCAE portal'],
            ['Dog port release', 'Confirm on official MOCCAE portal'],
            ['Cat port release', 'Confirm on official MOCCAE portal'],
            ['Import-permit validity', '90 days from issuance'],
            ['Our document review and tracking', 'Quoted after the eligibility check for your pet and route'],
          ],
        },
        {
          type: 'p',
          text: 'If you are comfortable with UAE Pass and your documents already match, follow [the MOCCAE import permit guide](/guides/moccae-import-permit/). If a rejection would miss a cargo booking, check eligibility for managed permit assistance.',
        },
      ],
    },
    {
      h2: 'Mistakes we catch before you submit',
      intro:
        'Most rejects come from inconsistent documents, not mystery policy. The guide lists causes and fixes. These are the points we review before anyone submits.',
      body: [
        {
          type: 'image',
          src: '/assets/w5/moccae-permit-common-rejection-reasons-diagram.webp',
          alt: 'Common MOCCAE pet permit rejection reasons: expired vaccines, microchip mismatches and timing errors',
          width: 1280,
          height: 853,
          caption:
            'Expired vaccines, microchip mismatches and timing errors reset the processing estimate.',
        },
        {
          type: 'list',
          items: [
            'Mismatched microchip numbers across vaccination, health certificate and the form',
            'Microchip implanted after the rabies vaccination that you intend to use',
            'Rabies vaccination outside the 21-day / 12-month window on the planned arrival date',
            'Missing RNATT when the origin requires one, or attaching a certificate outside the 365-day validity, or after a booster without a new test',
            'Cargo booked before the permit is issued',
            'Applying so early that the 90-day validity ends before landing',
          ],
        },
      ],
    },
  ],
  faq: [
    {
      q: 'Do I need a MOCCAE import permit for my dog?',
      a: 'Every dog needs its own MOCCAE import permit before the animal flies, and the same rule applies to a cat. The import permit is valid 90 days from issuance. We review scans and catch photo, chip and vaccine mismatches, then submit with you on the official MOCCAE portal. Confirm the import-permit fee and the arrival release fees on that portal. Walkthrough: [MOCCAE import permit guide](/guides/moccae-import-permit/). WhatsApp +971504782999.',
    },
    {
      q: 'How do I get a pet import permit from MOCCAE?',
      a: 'You apply on the official MOCCAE portal with UAE Pass. Managed assistance is document review and submission support so a rejection does not burn the travel window. Keep arrival inside the 90 days from issuance. Confirm current fees on the official MOCCAE portal. For the steps without a coordinator, use the [MOCCAE import permit guide](/guides/moccae-import-permit/). Email support@dubai-pet-relocation.ae.',
    },
    {
      q: 'Do I need a MOCCAE import permit?',
      a: 'Every dog or cat entering the UAE needs a MOCCAE import permit before travel. It is valid 90 days from issuance. Paid assistance is document review, portal guidance and tracking until the Ministry issues it. The step-by-step walkthrough is the [MOCCAE import permit guide](/guides/moccae-import-permit/).',
    },
    {
      q: 'What is a MOCCAE pet permit?',
      a: 'A MOCCAE pet permit is the official UAE government approval that lets a dog or cat enter or leave the country. MOCCAE is the Ministry of Climate Change and Environment. Imports need a MOCCAE import permit. Exports need a MOCCAE export health certificate. Both are applied for on the official MOCCAE portal with UAE Pass.',
    },
    {
      q: 'Do you issue MOCCAE pet permits?',
      a: 'Only the Ministry of Climate Change and Environment issues permits. We review documents, help you submit on the official MOCCAE portal with UAE Pass, and track approval. We are a coordination service, not a vet, an airline or MOCCAE.',
    },
    {
      q: 'What is the difference between MOCCAE permit assistance and the MOCCAE import permit guide?',
      a: 'The [MOCCAE import permit guide](/guides/moccae-import-permit/) is the free walkthrough of the UAE Pass path. MOCCAE permit assistance is paid document review, portal guidance and tracking until the Ministry issues the document. Cargo and delivery sit on [pet import Dubai](/service/pet-import-dubai/) and [pet relocation to Dubai](/service/pet-relocation-to-dubai/). Start with an eligibility check. WhatsApp +971504782999.',
    },
    {
      q: 'How long is a MOCCAE import permit valid?',
      a: 'A MOCCAE import permit is valid for 90 days from issuance. The pet must arrive in the UAE inside that window. An expired permit means a new application and a new fee on the official MOCCAE portal.',
    },
    {
      q: 'How long does MOCCAE take to approve an import permit?',
      a: 'Complete applications are typically estimated at 2 to 5 working days. That is a secondary-sourced estimate, not a guarantee from MOCCAE. Incomplete applications take longer because they are returned. Apply once travel is confirmed, and confirm current timing on the official MOCCAE portal.',
    },
    {
      q: 'How much is the MOCCAE pet permit fee?',
      a: 'MOCCAE charges an import-permit fee before travel and a veterinary release fee at the cargo terminal. Confirm both on the official MOCCAE portal. Fees may change. Those government charges exclude veterinary work, the crate, flights and our coordination quote.',
    },
    {
      q: 'Can you fast-track or “express” a MOCCAE permit?',
      a: 'We cannot override Ministry processing. What we can do is catch a reject that would restart the estimate. Anyone selling a guaranteed same-day MOCCAE stamp is selling a promise we will not make.',
    },
    {
      q: 'What is the difference between the import permit and the export certificate?',
      a: 'The import permit authorises entry and must be issued before the pet travels to the UAE. It is valid 90 days from issuance. The export health certificate authorises departure and includes an in-person exam at a MOCCAE quarantine centre. Destination rules sit on top of that certificate. Confirm government fees on the official MOCCAE portal.',
    },
    {
      q: 'Does the permit application need a rabies titer result?',
      a: 'Only when MOCCAE requires an RNATT for the origin. If it does, attach a result of at least 0.5 IU/ml and a certificate valid for 365 days if the vaccine stays valid and continuous and no booster is given. We do not publish an not yet confirmed with the carrier exempt-country list. See [rabies titer test for Dubai](/guides/rabies-titer-test-dubai/).',
    },
    {
      q: 'What do you need from me to start permit assistance?',
      a: 'Send the pet, breed, origin or destination, travel month, and whether you need an import permit or an export health certificate. WhatsApp +971504782999 during business hours. We check eligibility and explain the managed-permit quote before paid work starts. Government fees stay on the official MOCCAE portal. See [how our quotes work](/prices/).',
    },
  ],
  relatedLinks: [
    { label: 'MOCCAE import permit guide', to: '/guides/moccae-import-permit/' },
    { label: 'Pet import to Dubai', to: '/service/pet-import-dubai/' },
    { label: 'Pet relocation to Dubai', to: '/service/pet-relocation-to-dubai/' },
    { label: 'Pet export from Dubai', to: '/service/pet-export-dubai/' },
    { label: 'Pet relocation from Dubai', to: '/service/pet-relocation-from-dubai/' },
    { label: 'Pet relocation Dubai', to: '/service/pet-relocation-dubai/' },
    { label: 'UAE pet import requirements', to: '/guides/uae-pet-import-requirements/' },
    { label: 'Rabies titer test for Dubai', to: '/guides/rabies-titer-test-dubai/' },
    { label: 'IATA pet crate requirements', to: '/guides/iata-pet-crate-requirements/' },
    { label: 'How it works', to: '/how-it-works/' },
  ],
}

export default moccaePetPermit
