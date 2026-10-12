import type { ServicePageData } from '../../types/servicePage.ts'
import { GUIDE_SOFT_GATE, waEligibility } from '../../lib/conversionCopy.ts'

const petExportDubai: ServicePageData = {
  slug: 'pet-export-dubai',
  seoTitle: 'Pet Export Dubai | Managed Export Eligibility Check',
  metaDescription:
    'Check export eligibility and get a managed export quote from Dubai. Destination-first planning and the MOCCAE export health certificate.',
  h1: 'Pet export services from Dubai',
  primaryKeyword: 'pet export dubai',
  heroValueProp:
    'Pet export services from Dubai start with a destination rule check, then the MOCCAE export health certificate and a managed export quote.',
  heroImage: '/images/service-pet-export-dubai.jpg',
  heroImageAlt:
    'Calm dog and cat beside a travel crate at a Dubai airport departure terminal',
  whatsappMessage: waEligibility({ origin: 'Dubai', need: 'managed export' }),
  ctaLabel: 'Get a managed export quote',
  heroEyebrow: 'Pet Export Service',
  ctaSupport:
    'Check export eligibility first. Send the destination, the pet and the month, and we reply with a managed export quote.',
  ctaHeading: 'Ready for a managed export quote?',
  ctaBody:
    'Send the destination, pet and travel month. We check export eligibility and reply with a managed export quote. Government fees: confirm on the MOCCAE portal. We do not publish a package total in AED.',
  gateLine: GUIDE_SOFT_GATE,
  servicePreset: 'Export service',
  paidIncludes: [
    'Destination rule check',
    'Vet and titer sequencing',
    'MOCCAE export health certificate timing',
    'Airline or cargo booking with an IATA crate',
    'DXB or DWC airport handover',
  ],
  trustBadges: ['MOCCAE export guided', 'Vetted partners', 'Fit to Fly coordination', 'WhatsApp support'],
  hasHowTo: true,
  howToName: 'Step-by-Step Pet Export Process from Dubai',
  sections: [
    {
      h2: 'What our pet export service from Dubai covers',
      intro:
        'A managed pet export from Dubai lines up the destination country’s entry rules with the MOCCAE export health certificate, then books the flight. The DIY document order lives on the export guide.',
      body: [
        {
          type: 'p',
          text: 'Repatriation, a new job or a family move all use the same paid sequence: destination rules, vet papers, a Fit to Fly certificate, the MOCCAE export health certificate, the airport inspection, then travel. Timing matters. A titer test or an EU-format travel certificate can add weeks if it is left until the end. If you are filing the pouch yourself, use [how to export a pet from Dubai](/guides/pet-export-from-dubai/).',
        },
        {
          type: 'list',
          items: [
            'Destination rule check before anything is booked, because entry rules vary by country',
            'Vet and titer sequencing: microchip, rabies vaccination history, pet passport or vaccination book, and any titer test the destination requires',
            'Fit to Fly veterinary certificate timed to your flight (typically valid 5 to 10 days depending on destination)',
            'MOCCAE export health certificate timing, including the mandatory airport inspection with a government vet',
            'Airline or cargo booking with an IATA crate, out of DXB or DWC',
            'DXB or DWC airport handover, with WhatsApp updates from the quote through departure day',
          ],
        },
        {
          type: 'p',
          text: 'We are a coordination service. We do not fly the animals ourselves. We work with vetted veterinary and transport partners so the paperwork, timeline and inspection match the booking. Door-to-door umbrella: [pet relocation Dubai](/). The inbound twin is [pet import to Dubai](/service/pet-import-dubai/). The wider outbound move is [pet relocation from Dubai](/service/pet-relocation-from-dubai/).',
        },
      ],
    },
    {
      h2: 'Step-by-Step Pet Export Process',
      intro:
        'Every export from Dubai runs through the same five stages. We manage the sequence and the deadlines so each document is still valid when your pet boards.',
      body: [
        {
          type: 'steps',
          steps: [
            {
              title: 'Prepare vet documents',
              text: 'We confirm the microchip number matches every certificate and that the rabies vaccination is still valid for the destination. A 30-day figure is not used here as a MOCCAE permit life. The UAE import permit of 90 days from issuance is an inbound document and does not authorise export.',
            },
            {
              title: 'Fit to Fly certificate',
              text: 'A licensed vet issues a Fit to Fly (fit to travel) certificate close to your flight date — usually valid 5 to 10 days depending on the destination. We time this so it stays valid through departure.',
            },
            {
              title: 'MOCCAE export health certificate',
              text: 'We guide the application for the MOCCAE export health certificate on the MOCCAE portal. For the EU or UK, the destination travel certificate is issued by your vet and then endorsed by MOCCAE.',
            },
            {
              title: 'Airport inspection',
              text: 'A MOCCAE government veterinarian carries out an in-person inspection at the Cargo Village (DXB) or the relevant terminal, scanning the microchip and reviewing every document before the export is approved.',
            },
            {
              title: 'Travel day',
              text: 'Your pet travels per IATA Live Animals Regulations in an approved crate. We coordinate the cargo booking and keep you updated on WhatsApp until your pet is on its way.',
            },
          ],
        },
      ],
    },
    {
      h2: 'MOCCAE Export Permit and Health Certificate',
      body: [
        {
          type: 'p',
          text: 'The MOCCAE export health certificate is the document that authorises your pet to leave the UAE. It is applied for online through the MOCCAE portal, but it is not final until a government veterinarian inspects your pet in person at the airport — scanning the microchip and checking that every certificate matches before the export permit is issued.',
        },
        {
          type: 'list',
          items: [
            'Applied for online via the MOCCAE portal (UAE Pass access required)',
            'Government fee applies — confirm the current amount and validity window on the official MOCCAE portal (do not treat secondary blog numerals as official fees)',
            'Requires an in-person inspection at the airport with a MOCCAE government vet before the export is approved',
            'For EU and UK destinations, the travel certificate is issued by your vet first, then endorsed by MOCCAE',
            'The microchip number must match across the passport, vaccination records, Fit to Fly certificate and export certificate',
          ],
        },
        {
          type: 'p',
          text: 'The UAE itself does not require quarantine to leave — there is no export quarantine. What you need to satisfy is the destination country, plus this MOCCAE certificate and its inspection. We coordinate the timing so the inspection lines up with your flight and the certificate is still valid on departure day.',
        },
      ],
    },
    {
      h2: 'Pet Export Timeline',
      intro:
        'How long export takes depends almost entirely on your destination. If your pet is already fully vaccinated and the destination needs no rabies titer test, it can be quick. If a titer test is required, the lab and waiting times dominate the schedule.',
      body: [
        {
          type: 'table',
          headers: ['Scenario', 'Typical timeline'],
          rows: [
            ['Fully vaccinated, no titer test required at destination', 'A few days to 2 weeks'],
            ['Destination requires a rabies titer test', '7+ weeks (allow 2 to 3 weeks for results plus any waiting period)'],
            ['Fit to Fly certificate', 'Issued within 5 to 10 days of travel'],
            ['MOCCAE export health certificate', 'Online application plus the in-person airport inspection'],
          ],
        },
        {
          type: 'p',
          text: 'Some destinations — the UK, EU and Australia in particular — have strict entry protocols that can stretch the timeline well beyond the UAE-side paperwork. The single most common cause of delay is leaving a titer test until late, because the blood draw, lab turnaround and any post-test waiting period cannot be shortened. We map your destination requirements first so the whole plan is built backwards from your travel date.',
        },
      ],
    },
    {
      h2: 'Pet Export Cost Dubai',
      body: [
        {
          type: 'p',
          text: 'This page does not publish a package total in AED. The quote depends on the destination, the animal, the crate and whether that country asks for an antibody test. Government fees: confirm on the MOCCAE portal. We do not treat secondary blog numerals as official fees.',
        },
        {
          type: 'table',
          headers: ['Cost component', 'How this page treats it'],
          rows: [
            ['Veterinary documentation', 'Quoted by the clinic. Not a package price.'],
            ['Fit to fly certificate', 'Quoted by the clinic. Not a package price.'],
            ['MOCCAE export certificate', 'Government fee. Confirm on the MOCCAE portal.'],
            ['Rabies antibody test, if the destination requires one', 'Laboratory fee. Not a published AED band.'],
            ['Flight or cargo', 'Airline quote for that crate and date.'],
            ['Coordination', 'Quoted after eligibility. No package total on this page.'],
          ],
        },
        {
          type: 'p',
          text: 'There is no package total on this page. Send the destination, breed and weight for a managed export quote. Government fees: confirm on the MOCCAE portal. Coordination packages: [Prices](/prices/).',
        },
      ],
    },
    {
      h2: 'Popular Destinations',
      intro:
        'Destination requirements vary by country, so every export plan starts with the rules of where you are going. These are the routes we coordinate most often from Dubai.',
      body: [
        {
          type: 'list',
          items: [
            'United Kingdom: Great Britain pet health certificate for a listed country. See the Dubai to UK route guide. Not Model A or Model B.',
            'United States — destination rules vary by state and airline; see our Dubai to USA route guide',
            'Australia — among the strictest entry regimes worldwide, often requiring a titer test and advance planning',
            'European Union — EU-format travel certificate issued by your vet and endorsed by MOCCAE',
            'India — popular repatriation route with its own documentation requirements',
          ],
        },
        {
          type: 'p',
          text: 'Each country sets its own conditions for vaccinations, titer testing, certificate format and entry points, and these change from time to time. We verify the current requirements for your specific destination before you book, so you are never caught out at the other end. The whole outbound move, from the decision to leave through the airport handover, is [pet relocation from Dubai](/service/pet-relocation-from-dubai/). This page stays on the export paperwork and the flight booking.',
        },
      ],
    },
    {
      h2: 'Urgent Pet Export Options',
      body: [
        {
          type: 'p',
          text: 'If you are leaving Dubai on short notice, export is still possible — but the timeline is dictated by your destination, not by how fast we can move. Where a destination requires only standard vaccinations and no titer test, we can often compress the documentation and inspection into days. Where a titer test is mandatory, that waiting period cannot be skipped, so the realistic priority becomes getting the test started immediately and booking the earliest compliant flight.',
        },
        {
          type: 'list',
          items: [
            'Same-day WhatsApp response to map the fastest compliant route for your destination',
            'Expedited coordination of vet appointments, the Fit to Fly certificate and the MOCCAE inspection',
            'Priority cargo and, where needed, charter options for time-critical departures',
            'Honest guidance — if a titer test makes a date impossible, we tell you up front rather than promising the impossible',
          ],
        },
        {
          type: 'p',
          text: 'Send destination, species and travel month on WhatsApp for a quote if you want us to run the export file. We will say, realistically, the soonest your pet can legally leave Dubai. Coordination is quoted after eligibility on [Prices](/prices/).',
        },
      ],
    },
  ],
  faq: [
    {
      q: 'How do I get an export permit for my pet in the UAE?',
      a: 'Leaving the UAE uses export documentation (MOCCAE export pathway / veterinary export certification as required for the destination) — not the import permit used to enter. Requirements depend on the destination country. Start with destination rules, then align UAE export timing so certificates do not expire before departure. The departure journey is [pet relocation from Dubai](/service/pet-relocation-from-dubai/). WhatsApp +971504782999 for a managed-move quote.',
    },
    {
      q: 'What are the requirements for obtaining a pet export permit from the MOCCAE in Dubai, UAE?',
      a: 'Export permission is destination-led: microchip and vaccine records, UAE veterinary exam, MOCCAE export steps as applicable, and airline acceptance. Do not apply an import permit (90-day inbound) to an outbound file. Confirm current export portal steps on moccae.gov.ae. We coordinate the export file once the destination checklist is clear.',
    },
    {
      q: 'How much does it cost to export a pet from Dubai?',
      a: 'This page does not publish a package total in AED. Send the destination, species, breed and weight on WhatsApp +971504782999. We check export eligibility and reply with a managed export quote. Government fees: confirm on the MOCCAE portal.',
    },
    {
      q: 'What should I send for a pet export quote from Dubai?',
      a: 'Send your name, whether the pet is a dog or cat, the destination country and the month you want to fly, on WhatsApp +971504782999. Add breed and approximate weight if you have them. Origin is Dubai. We check export eligibility and reply with a managed export quote. Government fees: confirm on the MOCCAE portal. The DIY document order is on [how to export a pet from Dubai](/guides/pet-export-from-dubai/).',
    },
    {
      q: 'How far ahead should a UK, EU or USA export from Dubai start?',
      a: 'Start from the destination, not from a Dubai certificate date. Great Britain treats the UAE as a listed country, so the entry document is a Great Britain pet health certificate, not Model A or Model B, issued within 10 days of arrival. Dogs need tapeworm treatment in the 24 to 120 hours before arrival. An EU file uses a travel certificate from your vet, then MOCCAE endorsement. Confirm the live listed-country annex before you assume a titer is not required. A USA dog file follows CDC high-risk rules, and airline rules still vary. If the destination needs a rabies titer, plan for 7 or more weeks. If it does not, UAE-side paperwork is often a few days to two weeks. We do not publish an export-certificate validity figure. Confirm timing on the MOCCAE portal.',
    },
    {
      q: 'How long does pet export from Dubai take?',
      a: 'If your pet is fully vaccinated and the destination does not require a rabies titer test, export can take just a few days to two weeks. If a titer test is required, plan for 7 or more weeks because of lab turnaround and any waiting period. The destination country drives the timeline more than the UAE-side paperwork does.',
    },
    {
      q: 'What is the MOCCAE export health certificate?',
      a: 'It is the document that authorises your pet to leave the UAE. You apply online through the MOCCAE portal, and it becomes final only after a government veterinarian inspects your pet in person at the airport, scanning the microchip and reviewing your documents. Confirm current validity and the government fee on the official portal — secondary write-ups discuss a short window, but we do not publish those numerals as first-party facts. How-to: [how to export your pet from Dubai](/guides/pet-export-from-dubai/).',
    },
    {
      q: 'Does my pet need to be quarantined to leave the UAE?',
      a: 'No. The UAE does not impose quarantine on pets leaving the country. Any quarantine requirement comes from the destination country, not from the UAE, so it depends entirely on where you are travelling to.',
    },
    {
      q: 'Do I need a rabies titer test to export my pet?',
      a: 'It depends on your destination, not on the UAE. Some countries require a rabies antibody titer test before entry; many do not. Because the test involves a blood draw, lab turnaround of two to three weeks and sometimes a waiting period, we check your destination’s rules first so it is started early enough.',
    },
    {
      q: 'Which documents do I need to take my pet out of Dubai?',
      a: 'A microchip number that matches every certificate, a current rabies vaccination, a fit-to-fly note from the vet, the MOCCAE export steps the destination requires, and that country\'s own travel document. For Great Britain the document is a Great Britain pet health certificate, not Model A or Model B. We review the file so the chip number matches.',
    },
    {
      q: 'Do you physically transport the pet yourselves?',
      a: 'We are a coordination service. We connect you with vetted veterinary and transport partners and manage the documents, timeline and airport inspection so nothing is missed. We do not operate the aircraft ourselves.',
    },
    {
      q: 'How do I get started with exporting my pet from Dubai?',
      a: 'WhatsApp +971504782999 with destination, species and the month you want to fly if you want a quote and a managed export quote. We reply during business hours with a destination-first checklist. Process how-to: [how to export your pet from Dubai](/guides/pet-export-from-dubai/). Packages: [Prices](/prices/).',
    },
    {
      q: 'Is pet export the same as door-to-door relocation?',
      a: 'Use this page when the pet is leaving the UAE and you want the export file coordinated. [pet relocation Dubai](/) covers the wider move if the flight mode is still open. Arrivals use [pet import to Dubai](/service/pet-import-dubai/). WhatsApp +971504782999.',
    },
  ],
  relatedLinks: [
    { label: 'How to export your pet from Dubai', to: '/guides/pet-export-from-dubai/' },
    { label: 'Pet Relocation from Dubai', to: '/service/pet-relocation-from-dubai/' },
    { label: 'MOCCAE Pet Permit', to: '/service/moccae-pet-permit/' },
    { label: 'Dubai to UK Pet Transport', to: '/routes/dubai-to-uk/' },
    { label: 'Dubai to USA Pet Transport', to: '/routes/dubai-to-usa/' },
    { label: 'How It Works', to: '/how-it-works/' },
    { label: 'pet relocation Dubai', to: '/' },
    { label: 'Pet relocation services', to: '/service/pet-relocation-dubai/' },
    { label: 'Pet import to Dubai', to: '/service/pet-import-dubai/' },
    { label: 'Prices after eligibility', to: '/prices/' },
  ],
}

export default petExportDubai
