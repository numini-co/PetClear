import type { ServicePageData } from '../../types/servicePage.ts'
import { waEligibility } from '../../lib/conversionCopy.ts'
import { EXPORT_CERT_FEE_VERIFY } from '../../lib/regulatory.ts'

const petRelocationFromDubai: ServicePageData = {
  slug: 'pet-relocation-from-dubai',
  seoTitle: 'Pet Relocation from Dubai | Managed Outbound Moves',
  metaDescription:
    'Pet relocation from Dubai: check eligibility, then request a managed-move quote for documents, the crate and handover.',
  h1: 'Pet relocation from Dubai for a managed outbound move',
  primaryKeyword: 'pet relocation from dubai',
  heroValueProp:
    'Pet relocation from Dubai covers the whole outbound move, from destination rules to the airport handover.',
  heroImage: '/assets/w1-w3/pet-relocation-from-dubai-husky-balcony-golden-hour.jpg',
  heroImageAlt:
    'Husky sitting beside a packed travel crate on a Dubai balcony before relocating from Dubai',
  whatsappMessage: waEligibility({ origin: 'Dubai', need: 'managed move' }),
  ctaLabel: 'Get a managed-move quote',
  ctaSupport:
    'Send the destination, the pet and the month. We reply with eligibility and a managed-move quote.',
  ctaHeading: 'Ready for a managed-move quote?',
  ctaBody:
    'Send the destination, pet and month on WhatsApp. We reply with eligibility and a managed-move quote before any booking.',
  paidIncludes: [
    'Destination rules check before a flight week is discussed',
    'Export certificate timing set against your travel date',
    'Airline booking once the document window is clear',
    'Crate sized for the animal and the route',
    'Airport handover at DXB or DWC',
  ],
  trustBadges: [
    'Outbound / departure-side only',
    'Destination rules first',
    'MOCCAE export path guided',
    'WhatsApp through departure',
  ],
  hasHowTo: true,
  howToName: 'How to move a pet out of Dubai',
  sections: [
    {
      h2: 'What you get when leaving Dubai with pets',
      intro:
        'Leaving Dubai with pets follows the destination rules, not a reversed arrival checklist. This page is the whole outbound move. Export paperwork and the flight booking sit on [exporting your pet from the UAE](/service/pet-export-dubai/). Arrivals use [bringing pets to Dubai](/service/pet-relocation-to-dubai/). Full coordination uses [pet relocation services in Dubai](/service/pet-relocation-dubai/).',
      body: [
        {
          type: 'p',
          text: 'Taking a dog or cat out of the UAE is destination-first. The United Kingdom, the United States, Australia and a GCC hop do not share an entry file. Dubai’s export certificate is comparatively quick, and useless if it is issued before the destination’s waiting periods, treatments or endorsements are ready. For the document-by-document how-to, read [how to export your pet from Dubai](/guides/pet-export-from-dubai/).',
        },
        {
          type: 'p',
          text: 'A managed move starts with where you are going, then builds the Dubai-side path backwards. We are a coordination service. We do not fly the animal and we are not the destination’s inspector.',
        },
      ],
    },
    {
      h2: 'Steps for moving a pet out of Dubai',
      intro:
        'Every move out of Dubai shares a backbone. The first step branches, which is why a UK departure and a US departure are not copy-paste twins.',
      body: [
        {
          type: 'image',
          src: '/assets/w1-w3/pet-relocation-from-dubai-outbound-journey-diagram.png',
          alt: 'Outbound pet relocation journey from Dubai with destination-specific rules highlighted',
          caption: 'The first node branches: destination rules differ, so the timeline is built backwards.',
        },
        {
          type: 'steps',
          steps: [
            {
              title: 'Read the destination rules',
              text: 'Send pet type, breed, age and destination with the eligibility check. That country’s current entry file (vaccinations, titer, treatments, quarantine) is read before a flight week is discussed. Start with [leaving Dubai with pets on the UK route](/routes/dubai-to-uk/) or [moving a pet out of Dubai to the USA](/routes/dubai-to-usa/) if those are your corridors.',
            },
            {
              title: 'Build the timeline backwards',
              text: 'Destination waiting periods sit on the destination, not on Dubai. They are not the UAE inbound rule. When a titre is required for entry to the UAE, the blood sample is taken within 90 days before travel and must show at least 0.5 IU/ml. That is the sample date, not a wait after the draw. The MOCCAE import permit is a separate 90 days, counted from issuance.',
            },
            {
              title: 'Veterinary preparation in the UAE',
              text: 'Microchip verification, vaccinations and any destination-required tests are booked with a UAE clinic that can produce a consistent file. Names and chip numbers must match every later certificate.',
            },
            {
              title: 'MOCCAE export health certificate',
              text: `The UAE export health certificate is issued after a pre-export veterinary inspection. Schedule it close to departure so the window still covers travel day. ${EXPORT_CERT_FEE_VERIFY} The export certificate is commonly valid for 30 days from issue. Verify that 30-day validity on the official portal. That 30-day life is the export certificate, not the MOCCAE import permit (90 days from issuance for animals entering the UAE). Process guide: [how to export your pet from Dubai](/guides/pet-export-from-dubai/).`,
            },
            {
              title: 'Crate and cargo booking',
              text: 'We size an IATA crate and coordinate a pet-experienced cargo booking, including seasonal and snub-nosed airline limits. Booking before the export certificate window is understood is how people miss their own flight.',
            },
            {
              title: 'Departure day at DXB or DWC',
              text: 'The document pouch travels on the crate. We coordinate the handover and brief you on destination arrival: clearance, inspection or quarantine where that country requires it.',
            },
            {
              title: 'Arrival support at the destination',
              text: 'We stay on WhatsApp during business hours through the landing update. What happens after landing is the destination’s rulebook, which is why the first step was never to book Dubai cargo.',
            },
          ],
        },
      ],
    },
    {
      h2: 'Documents that travel with the crate',
      intro:
        'The pouch is a physical object. If a page in it disagrees with another page, the destination, not Dubai, stops the entry.',
      body: [
        {
          type: 'image',
          src: '/assets/w1-w3/export-documents-crate-pouch-checklist-dubai.jpg',
          alt: 'Export documents pouch secured to a pet travel crate before departure from Dubai',
          caption: 'The document pouch travels on the crate, checked, copied and backed up.',
        },
        {
          type: 'list',
          items: [
            'Microchip number consistent on every certificate. An ISO label is a destination rule only when that country states it.',
            'Rabies and any destination-required vaccinations still valid on travel day',
            'Destination titer or lab reports where that country asks for them',
            'MOCCAE export health certificate issued after the pre-export inspection, still inside the validity window shown on the official portal',
            'Destination import permit or advance notice where that country requires one',
            'Parasite or tapeworm treatments timed to the destination. For a dog entering Great Britain, treatment is no less than 24 hours and no more than 5 days before arrival.',
            'Cargo booking confirmation and IATA crate labels',
          ],
        },
        {
          type: 'p',
          text: 'The paid export file (paperwork and flight booking) is [pet export from Dubai](/service/pet-export-dubai/). Permit help on its own is [MOCCAE permit assistance](/service/moccae-pet-permit/). This page is the departure journey: what happens from the decision to leave until the handover.',
        },
      ],
    },
    {
      h2: 'Routes for taking a dog or cat out of the UAE',
      intro:
        'Open the published route page for your country, then send an eligibility check for any corridor that is not listed yet.',
      body: [
        {
          type: 'list',
          items: [
            '[Leaving Dubai with your pet: Dubai to UK](/routes/dubai-to-uk/): destination-driven timeline, GB paperwork and tapeworm timing for dogs',
            '[Moving pets out of Dubai: Dubai to USA](/routes/dubai-to-usa/): CDC-facing dog rules and US arrival inspection',
            '[Dubai to India](/routes/dubai-to-india/): destination rules first, then the UAE export certificate',
            '[Dubai to Philippines](/routes/dubai-to-philippines/): BAI import file on the destination side',
            '[Dubai to Australia](/routes/dubai-to-australia/): permit and quarantine planned before the Dubai departure',
            '[Dubai to Canada](/routes/dubai-to-canada/): Canadian entry file, then the UAE export certificate',
            '[Dubai to Germany](/routes/dubai-to-germany/): EU entry papers before the export window',
            '[Dubai to Saudi Arabia](/routes/dubai-to-saudi-arabia/): MEWA permit on Anaam, then the UAE export certificate',
            'More countries: open the [routes hub](/routes/) and send the country name with your eligibility check',
          ],
        },
        {
          type: 'p',
          text: 'Australia, New Zealand, the EU and regional hops each have their own clocks. A line that says a typical export from Dubai takes two weeks would be false for some of those files and sloppy for all of them. The destination is checked first.',
        },
      ],
    },
    {
      h2: 'What changes the quote for a move out of Dubai',
      intro:
        'The quote describes the drivers for your pet and your dates. The labelled export-certificate fee above is a government figure on file. Confirm it on the official portal. This page still does not publish a package total.',
      body: [
        {
          type: 'p',
          text: 'What moves an outbound quote: destination (quarantine countries sit at the top), pet size, cargo routing, how many destination tests are required, and whether you want document guidance or departure-day coordination. Read [what pet relocation costs in 2026](/guides/pet-relocation-cost-dubai/) for the types of cost, then request a managed-move quote on [the contact form](/contact/) once the destination is known.',
        },
        {
          type: 'p',
          text: 'Arrival quarantine charged by a destination country is not our fee and is not something we invent a number for. We flag it when the destination uses it.',
        },
      ],
    },
  ],
  faq: [
    {
      q: 'How do I relocate my pet from Dubai?',
      a: 'Outbound moves start with destination import rules, then UAE export paperwork, crate, and a confirmed live-animal flight. That is the reverse of bringing a pet in. Use [/service/pet-export-dubai/](/service/pet-export-dubai/) for export-permit depth and the matching [/routes/dubai-to-{country}/](/routes/) page for corridor detail. WhatsApp +971504782999 for a managed-move quote.',
    },
    {
      q: 'Why do destination rules drive the outbound timeline from Dubai?',
      a: 'Because the UAE export certificate is relatively quick, while the destination sets titer windows, treatments and any quarantine. The destination is read first and the Dubai file is built backwards from it.',
    },
    {
      q: 'What is the MOCCAE export health certificate path?',
      a: `A pre-export veterinary inspection, then a UAE export health certificate scheduled close to departure. ${EXPORT_CERT_FEE_VERIFY} The export certificate is commonly valid for 30 days from issue. Verify that 30-day validity on the official portal. That 30-day life is the export certificate, not the 90-day import permit. How-to: [how to export your pet from Dubai](/guides/pet-export-from-dubai/).`,
    },
    {
      q: 'When should I start planning a move out of Dubai?',
      a: 'As soon as you know the destination. A nearby, low-rule country can be short. A titer or quarantine destination can need many months. Send the country name on WhatsApp for a managed-move quote if you want the month checked against that file.',
    },
    {
      q: 'Is a titer always required to take a pet from the UAE to the UK?',
      a: 'Destination rules change and must be checked for your travel month. The UK file is not a copy of the UAE inbound titer rule. The current destination steps are on [leaving Dubai with pets for the UK](/routes/dubai-to-uk/). A managed-move quote checks that page against your month.',
    },
    {
      q: 'What travels with the crate on departure day?',
      a: 'The document pouch (certificates, treatments, booking and labels) attached to the crate, plus digital copies. A single mismatched chip number is the usual reason a destination stops the entry.',
    },
    {
      q: 'Can you help with Dubai to USA as well as Dubai to UK?',
      a: 'Yes. Published outbound pages include [Dubai to UK](/routes/dubai-to-uk/), [Dubai to USA](/routes/dubai-to-usa/), [Dubai to India](/routes/dubai-to-india/), [Dubai to Philippines](/routes/dubai-to-philippines/), [Dubai to Australia](/routes/dubai-to-australia/), [Dubai to Canada](/routes/dubai-to-canada/), [Dubai to Germany](/routes/dubai-to-germany/) and [Dubai to Saudi Arabia](/routes/dubai-to-saudi-arabia/). The full list is the [routes hub](/routes/).',
    },
    {
      q: 'How is this different from the pet export Dubai service page?',
      a: 'This page is the departure journey and the order of work. [Pet export from Dubai](/service/pet-export-dubai/) is the paid file: destination permission, the UAE export certificate, and the flight booking. Read them together.',
    },
    {
      q: 'How do I check whether my travel date is realistic?',
      a: 'Send destination, pet details and the month you want to fly. The destination windows are mapped against the MOCCAE export-certificate timing, and the reply says whether the date holds. [Request a managed-move quote](/contact/).',
    },
  ],
  relatedLinks: [
    { label: 'How to export your pet from Dubai', to: '/guides/pet-export-from-dubai/' },
    { label: 'Exporting your pet from the UAE', to: '/service/pet-export-dubai/' },
    { label: 'Pet relocation services in Dubai', to: '/service/pet-relocation-dubai/' },
    { label: 'Leaving Dubai with your pet, UK', to: '/routes/dubai-to-uk/' },
    { label: 'Moving pets out of Dubai, USA', to: '/routes/dubai-to-usa/' },
    { label: 'Dubai to India', to: '/routes/dubai-to-india/' },
    { label: 'Dubai to Philippines', to: '/routes/dubai-to-philippines/' },
    { label: 'Dubai to Australia', to: '/routes/dubai-to-australia/' },
    { label: 'Dubai to Canada', to: '/routes/dubai-to-canada/' },
    { label: 'Dubai to Germany', to: '/routes/dubai-to-germany/' },
    { label: 'Dubai to Saudi Arabia', to: '/routes/dubai-to-saudi-arabia/' },
    { label: 'Routes hub', to: '/routes/' },
    { label: 'Request a managed-move quote', to: '/contact/' },
    { label: 'Compare our service tiers', to: '/services/' },
    { label: 'How it works', to: '/how-it-works/' },
  ],
}

export default petRelocationFromDubai
