import type { ServicePageData } from '../../types/servicePage.ts'
import {
  EXEMPT_LIST_HOLD,
  LAST_VERIFIED_LABEL,
  MANIFEST_CARGO,
  MICROCHIP_BEFORE_RABIES,
  PERMIT_FEE_VERIFY,
  PERMIT_PROCESSING_ESTIMATE,
  PERMIT_VALIDITY,
  RABIES_AGE_WAIT,
  RELEASE_FEE_VERIFY,
  TITER_SAMPLE_RULE,
} from '../../lib/regulatory.ts'

const moccaePetPermit: ServicePageData = {
  slug: 'moccae-pet-permit',
  seoTitle: 'MOCCAE Pet Permit Service | Import & Export Permits (2026)',
  metaDescription:
    'MOCCAE pet permit assistance for Dubai: document review, UAE Pass portal guidance and 30-day import-permit tracking. Message us on WhatsApp to check your documents.',
  keywords:
    'MOCCAE pet permit, MOCCAE pet import permit, MOCCAE pet export permit, express MOCCAE permit, moccae pet permit dubai, pet import permit dubai online',
  h1: 'MOCCAE Import and Export Permit Assistance',
  primaryKeyword: 'moccae pet permit dubai',
  heroValueProp:
    'Permit assistance only: we review the file, walk the official MOCCAE portal with you, and track the 30-day import window so the Ministry issues the permit correctly the first time.',
  // Blocked original-photo placeholder — AI substitute not used for this hero.
  heroImage: '/images/service-moccae-pet-permit.jpg',
  heroImageAlt:
    'MOCCAE pet permit application folder being prepared on a coordinator desk in Dubai (placeholder until an original workspace photo is shot)',
  whatsappMessage:
    'Hi Dubai Pet Relocation! I need MOCCAE import or export permit help. Can you review my documents before I submit?',
  ctaLabel: 'Check Documents',
  heroEyebrow: 'MOCCAE Permit Assistance',
  trustBadges: [
    '30-day import-permit window',
    'Document review before submit',
    'Portal + UAE Pass guidance',
    'WhatsApp during business hours',
  ],
  hasHowTo: true,
  howToName: 'How we assist a MOCCAE pet import permit application',
  sections: [
    {
      h2: 'This page is permit assistance — the how-to lives on the guide',
      intro:
        'Ruling 10: this URL is the commercial twin. The linkable walkthrough, UAE Pass path and rejection table live on [the MOCCAE import permit guide](/guides/moccae-import-permit/). Full import rules live on [UAE pet import requirements](/guides/uae-pet-import-requirements/). End-to-end cargo and clearance live on [pet import to Dubai](/service/pet-import-dubai/).',
      body: [
        {
          type: 'p',
          text: 'MOCCAE — the UAE Ministry of Climate Change and Environment — is the federal authority that issues pet import permits and veterinary travel documents. Every dog or cat entering the UAE needs an import permit issued before arrival. Every pet leaving needs a MOCCAE export health certificate. Both are applied for on the official portal with a UAE Pass login.',
        },
        {
          type: 'p',
          text: 'We are a coordination service, not a government department. We are not MOCCAE-licensed and we do not issue permits. What you buy here is review, form preparation, error-flagging and status tracking until the Ministry approves. Booking flights before that approval is the expensive mistake this page exists to prevent.',
        },
        {
          type: 'list',
          items: [
            'Document review — microchip, rabies dates and certificate numbers checked for consistency',
            'Import-permit guidance on the official portal (UAE Pass path)',
            'Export health-certificate guidance, including the in-person quarantine-centre exam',
            'Approval tracking on WhatsApp during business hours',
            'Rejection triage — we read the reason, fix the file and you resubmit on the same portal',
          ],
        },
      ],
    },
    {
      h2: 'How we run an import-permit file with you',
      intro:
        'The Ministry owns the decision. We own the file hygiene. For field-by-field portal steps, use the guide — then come back here if you want us on the thread.',
      body: [
        {
          type: 'image',
          src: '/assets/w5/moccae-import-permit-application-flowchart.png',
          alt: 'MOCCAE pet import permit application flow from document collection to approval tracking',
          caption: 'Documents complete? If no, fix before you pay the portal. Validity overlays stay in the copy, not in the graphic.',
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
              text: 'The import permit is requested on moccae.gov.ae under Services → Export and Import Services → Import Permit for Pets. You need UAE Pass. If you do not have it yet, we talk you through setup — we do not invent a login for you.',
            },
            {
              title: 'Form fields we refuse to guess',
              text: 'Species, breed spelling, microchip, origin country and planned arrival. Origin classification decides whether an RNATT must be attached. We will not invent an exempt-country answer — confirm on the portal.',
            },
            {
              title: 'Pay only the live portal fee',
              text: `${PERMIT_FEE_VERIFY} We do a last pass on the application, then you submit. Government fees are the same whether you DIY or we guide you.`,
            },
            {
              title: 'Track until the PDF is in your folder',
              text: `${PERMIT_PROCESSING_ESTIMATE} ${LAST_VERIFIED_LABEL}. We watch the status and message you when it is ready so cargo can be confirmed — not the other way around.`,
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
      h2: 'Export health certificate — different product, same portal',
      intro:
        'Leaving Dubai is not a reversed import form. Destination rules decide titer, tapeworm and certificate format. Plan from the destination backwards, then book the MOCCAE exam.',
      body: [
        {
          type: 'list',
          items: [
            'Confirm destination requirements first — GB, EU, CDC, DAFF and AQCS rules are not interchangeable',
            'Apply on the MOCCAE portal with UAE Pass for the veterinary health certificate for export',
            'Attend the in-person examination at a MOCCAE quarantine centre (for example Dubai Airport Cargo Village or Zayed International Airport)',
            'A government veterinarian scans the microchip and reviews the documents before the certificate is issued',
            'Export-certificate fee and stated service time are published on the portal — confirm the live figures; we do not restate contested amounts here',
          ],
        },
        {
          type: 'p',
          text: 'If the destination needs an RNATT, that clock starts long before the MOCCAE exam. See [rabies titer test for Dubai](/guides/rabies-titer-test-dubai/) for inbound titer rules, and [pet export from Dubai](/service/pet-export-dubai/) when you want the full outbound job rather than permit-only help.',
        },
      ],
    },
    {
      h2: 'What must be true before we let you hit submit',
      intro:
        'MOCCAE will not fix a mismatched chip for you. Our review exists to catch the rejects that reset the clock.',
      body: [
        {
          type: 'image',
          src: '/assets/w1-w3/moccae-permit-document-check-hands-dubai.jpg',
          alt: 'Hands reviewing a pet travel checklist for a MOCCAE permit application',
          caption: 'Checklist still from the W3 set — reused here because permit review is the same physical job.',
        },
        {
          type: 'list',
          items: [
            'UAE Pass account that can reach the MOCCAE digital services portal',
            'ISO-compliant 15-digit microchip implanted before the rabies vaccination, identical on every page',
            'Valid rabies vaccination — not before 12 weeks of age; at least 21 days before travel; not more than 12 months prior',
            'Government health certificate details ready (import) or destination-format certificate plan (export)',
            'Owner passport and, where applicable, UAE visa or residency details',
            'RNATT ≥0.5 IU/ml attached only when the origin requires it — sample taken within 90 days before travel',
          ],
        },
        {
          type: 'p',
          text: `${TITER_SAMPLE_RULE} ${EXEMPT_LIST_HOLD}`,
        },
      ],
    },
    {
      h2: 'Processing time (estimate) and 30-day validity',
      intro:
        'Two different clocks. Mixing them up is how people miss a cargo slot.',
      body: [
        {
          type: 'p',
          text: PERMIT_PROCESSING_ESTIMATE,
        },
        {
          type: 'p',
          text: `${PERMIT_VALIDITY} If plans slip and the permit expires, you reapply and pay the live portal fee again. We time the application to a confirmed travel date, not to a hopeful month.`,
        },
        {
          type: 'table',
          headers: ['Clock', 'What to expect', 'How we label it'],
          rows: [
            [
              'Processing',
              'Often a few working days when the file is complete',
              'Estimate — secondary-sourced; not a MOCCAE SLA',
            ],
            [
              'Import-permit validity',
              '30 days from the date of issuance',
              'Hard rule — pet must arrive inside the window',
            ],
            [
              'Where to apply',
              'Official MOCCAE portal via UAE Pass',
              'We guide; the Ministry issues',
            ],
            [
              'Best time to apply',
              'Travel date confirmed and documents already consistent',
              'Early enough for the estimate, late enough for 30 days',
            ],
          ],
        },
      ],
    },
    {
      h2: 'What the permit costs — confirm on the portal',
      intro:
        'This is the regulatory-blocking commercial page. We do not publish contested government fee numerals as if they were settled.',
      body: [
        {
          type: 'p',
          text: `${PERMIT_FEE_VERIFY} ${RELEASE_FEE_VERIFY} Our coordination fee is quoted separately on WhatsApp and is not a government charge.`,
        },
        {
          type: 'table',
          headers: ['Charge', 'What to do'],
          rows: [
            ['MOCCAE import permit (per pet)', 'Verify the current amount on the official portal'],
            ['Veterinary release / inspection on arrival', 'Verify the current amount on the official portal'],
            ['Import-permit validity', '30 days from issuance — not 90'],
            ['Our document review and tracking', 'Quoted for your file; same government fee either way'],
          ],
        },
        {
          type: 'p',
          text: 'DIY versus managed is an honesty question, not a badge. If you are comfortable with UAE Pass and your pack is already consistent, follow [the MOCCAE import permit guide](/guides/moccae-import-permit/). If a rejection would blow a cargo booking, use this service.',
        },
      ],
    },
    {
      h2: 'Mistakes we catch before MOCCAE does',
      intro:
        'Most rejects are file hygiene, not mystery policy. The guide lists causes and fixes; this section is what we actually review on a commercial file.',
      body: [
        {
          type: 'image',
          src: '/assets/w5/moccae-permit-common-rejection-reasons-diagram.png',
          alt: 'Common MOCCAE pet permit rejection reasons: expired vaccines, microchip mismatches and timing errors',
          caption: 'The four rejects that reset the processing estimate. Exact wording stays in the copy.',
        },
        {
          type: 'list',
          items: [
            'Mismatched microchip numbers across vaccination, health certificate and the form',
            'Microchip implanted after the rabies vaccination that you intend to use',
            'Rabies vaccination outside the 21-day / 12-month window on the planned arrival date',
            'Missing RNATT when the origin requires one — or attaching a sample older than 90 days before travel',
            'Cargo booked before the permit is issued',
            'Applying so early that the 30-day validity dies before landing',
          ],
        },
      ],
    },
  ],
  faq: [
    {
      q: 'Do you issue MOCCAE pet permits?',
      a: 'No. Only the Ministry of Climate Change and Environment issues permits. We review documents, help you submit on the official portal with UAE Pass, and track approval. We are not MOCCAE-licensed.',
    },
    {
      q: 'Should I use this page or the MOCCAE import-permit guide?',
      a: 'Use [the MOCCAE import permit guide](/guides/moccae-import-permit/) to learn the UAE Pass path, form fields and rejection reasons. Use this page when you want us to check the file and stay on the thread until the PDF is issued.',
    },
    {
      q: 'How long is a MOCCAE import permit valid?',
      a: 'Thirty days from the date of issuance — never 90. The pet must arrive in the UAE inside that window. An expired permit means a new application and a new portal fee.',
    },
    {
      q: 'How long does MOCCAE take to approve an import permit?',
      a: 'Complete applications are typically estimated at 2–5 working days. That is a secondary-sourced estimate, not a first-party SLA. Incomplete files take longer because they are returned. We label it as an estimate and recommend applying once travel is confirmed.',
    },
    {
      q: 'How much is the MOCCAE pet permit fee?',
      a: 'Confirm the current import-permit fee and the arrival-release fee on the official portal when you apply. Published amounts have differed. Those government charges exclude veterinary work, crate, flights and our coordination.',
    },
    {
      q: 'Can you fast-track or “express” a MOCCAE permit?',
      a: 'We cannot override Ministry processing. What we can do is stop a reject that restarts the estimate. Anyone selling a guaranteed same-day MOCCAE stamp is selling something we will not claim.',
    },
    {
      q: 'What is the difference between the import permit and the export certificate?',
      a: 'The import permit authorises entry and must be issued before the pet travels to the UAE. The export health certificate authorises departure and includes a mandatory in-person exam at a MOCCAE quarantine centre. Destination rules sit on top of the export certificate.',
    },
    {
      q: 'Does the permit application need a rabies titer result?',
      a: 'Only when MOCCAE requires an RNATT for the origin. If it does, attach a result of at least 0.5 IU/ml from a sample taken within 90 days before travel. We do not publish an unverified exempt-country list. See [rabies titer test for Dubai](/guides/rabies-titer-test-dubai/).',
    },
    {
      q: 'What do you need from me to start permit assistance?',
      a: 'Pet type, microchip number, rabies vaccination date, origin or destination, and whether you are importing or exporting. Message us on WhatsApp during business hours — we reply with the missing pieces and a coordination quote. Government fees stay on the portal.',
    },
  ],
  relatedLinks: [
    { label: 'MOCCAE Import Permit Guide', to: '/guides/moccae-import-permit/' },
    { label: 'Pet Import to Dubai', to: '/service/pet-import-dubai/' },
    { label: 'UAE Pet Import Requirements', to: '/guides/uae-pet-import-requirements/' },
    { label: 'Rabies Titer Test Dubai', to: '/guides/rabies-titer-test-dubai/' },
    { label: 'Pet Export from Dubai', to: '/service/pet-export-dubai/' },
    { label: 'Pet Relocation Dubai', to: '/service/pet-relocation-dubai/' },
    { label: 'How It Works', to: '/how-it-works/' },
  ],
}

export default moccaePetPermit
