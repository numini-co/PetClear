import type { ServicePageData } from '../../types/servicePage.ts'

const petRelocationDubai: ServicePageData = {
  slug: 'pet-relocation-dubai',
  seoTitle: 'Pet Relocation Dubai | Trusted Pet Transport Service',
  metaDescription:
    'Professional pet relocation in Dubai. Door-to-door service, MOCCAE permit help, transparent pricing. WhatsApp us for a free quote in 15 minutes.',
  keywords:
    'pet relocation dubai, pet transport dubai, pet shipping dubai, pet movers dubai, international pet relocation dubai, pet relocation companies dubai',
  h1: 'Comprehensive Pet Relocation Services in Dubai',
  primaryKeyword: 'pet relocation dubai',
  heroValueProp:
    'Moving a dog or cat to or from Dubai? We guide you through MOCCAE permits, breed checks, IATA crates and customs — and stay with you on WhatsApp at every step. Transparent pricing, vetted partners, no guesswork.',
  heroImage: '/images/service-pet-relocation-dubai.jpg',
  heroImageAlt: 'A happy dog and cat beside a travel crate in a bright modern Dubai airport — pet relocation in Dubai',
  whatsappMessage: 'Hi Dubai Pet Relocation! I need help with pet relocation in Dubai. Can you guide me on the process and cost?',
  trustBadges: ['MOCCAE requirements guided', 'Vetted partners', 'IATA crate guidance', 'WhatsApp support'],
  costRange: { low: '2000', high: '25000' },
  hasHowTo: true,
  howToName: 'How Pet Relocation in Dubai Works',
  sections: [
    {
      h2: 'What Our Pet Relocation Service in Dubai Includes',
      intro:
        'Pet relocation to or from Dubai involves permits, vaccinations, an airline-approved crate, customs clearance and careful timing. We coordinate every piece so nothing is missed.',
      body: [
        {
          type: 'list',
          items: [
            'Document review — microchip, rabies vaccination, health certificate and titer test where required',
            'MOCCAE import or export permit guidance (and handling on your behalf on higher tiers)',
            'Breed eligibility checks against the official UAE restricted-breed rules',
            'IATA-compliant crate sizing and sourcing through vetted partners',
            'Flight and cargo coordination with pet-experienced airlines',
            'Customs clearance at DXB / DWC and door-to-door delivery',
          ],
        },
        {
          type: 'p',
          text: 'We are a coordination service: we do not physically fly the animals ourselves, we connect you with vetted veterinary and transport partners and make sure the paperwork and timeline are correct.',
        },
      ],
    },
    {
      h2: 'How Pet Relocation in Dubai Works',
      body: [
        {
          type: 'steps',
          steps: [
            { title: 'Tell us about your pet', text: 'Send your pet type, breed, origin and destination on WhatsApp. We check breed eligibility, route requirements and seasonal restrictions.' },
            { title: 'Document & permit preparation', text: 'We review microchip, vaccinations and health certificate, and guide the MOCCAE import or export permit application.' },
            { title: 'Crate & booking', text: 'We help size an IATA-compliant crate and coordinate a pet-experienced flight and cargo booking.' },
            { title: 'Travel day & customs', text: 'Your pet travels per IATA Live Animals Regulations; we coordinate customs clearance at the airport.' },
            { title: 'Safe delivery', text: 'We arrange door-to-door delivery and keep you updated on WhatsApp at every checkpoint.' },
          ],
        },
      ],
    },
    {
      h2: 'Pet Relocation Requirements for Dubai',
      body: [
        {
          type: 'list',
          items: [
            'ISO-compliant 15-digit microchip',
            'Valid rabies vaccination (timing depends on origin country)',
            'Rabies antibody titer test for high-risk countries (≥ 0.5 IU/ml, valid 365 days, drawn ≥ 21 days after vaccination)',
            'Government veterinary health certificate from the origin country',
            'MOCCAE import permit (valid 90 days from issuance)',
          ],
        },
        { type: 'p', text: 'See our import and export guides for the full, current checklist verified against MOCCAE.' },
      ],
    },
    {
      h2: 'Pet Relocation Dubai Cost',
      body: [
        {
          type: 'p',
          text: 'Total pet relocation typically ranges from AED 2,000 for simple regional moves to AED 25,000 for long-haul, multi-pet or premium door-to-door service. Government fees are roughly AED 700/dog and AED 450/cat; the rest is veterinary work, crate, cargo and coordination.',
        },
        {
          type: 'table',
          headers: ['Cost component', 'Typical range (AED)'],
          rows: [
            ['MOCCAE permit + release fees', '450 – 700'],
            ['Veterinary (vaccines, health cert, titer)', '1,200 – 2,500'],
            ['IATA crate', '110 – 1,500'],
            ['Flight / cargo', '3,000 – 12,000+'],
            ['Coordination & handling', '1,500 – 6,000'],
          ],
        },
      ],
    },
    {
      h2: 'Areas We Serve Across Dubai',
      body: [
        {
          type: 'p',
          text: 'We coordinate pet relocation across all of Dubai — including Dubai Marina, Jumeirah, Downtown Dubai, Palm Jumeirah, Business Bay, Arabian Ranches, Al Barsha and Mirdif — as well as Abu Dhabi, Sharjah and the wider UAE.',
        },
      ],
    },
  ],
  faq: [
    { q: 'How much does pet relocation in Dubai cost?', a: 'Most relocations fall between AED 2,000 and AED 25,000 depending on origin/destination, pet size and service level. Government fees are roughly AED 700/dog and AED 450/cat; the rest covers veterinary work, crate, cargo and coordination.' },
    { q: 'How long does pet relocation to Dubai take?', a: 'From low-risk countries, typically 2–6 weeks. From high-risk rabies countries that require a titer test, plan for about 4 months because of the mandatory waiting period.' },
    { q: 'Do you physically transport the pet yourselves?', a: 'We are a coordination service. We connect you with vetted veterinary and transport partners and manage the documents and timeline so nothing is missed.' },
    { q: 'Which pets can you relocate?', a: 'Primarily dogs and cats to and from Dubai and the wider UAE. Restricted dog breeds are subject to the official UAE rules — we check eligibility before you commit.' },
    { q: 'What documents do I need?', a: 'A microchip, valid rabies vaccination, a government health certificate, a MOCCAE import or export permit, and a rabies titer test for high-risk countries. We review everything first.' },
    { q: 'How do I get started?', a: 'Message us on WhatsApp with your pet type, breed, origin and destination. We reply within 15 minutes during business hours with the exact requirements and a cost range.' },
  ],
  relatedLinks: [
    { label: 'Pet Import to Dubai', to: '/service/pet-import-dubai/' },
    { label: 'Pet Export from Dubai', to: '/service/pet-export-dubai/' },
    { label: 'Dog Relocation Dubai', to: '/service/dog-relocation-dubai/' },
    { label: 'Cat Relocation Dubai', to: '/service/cat-relocation-dubai/' },
    { label: 'MOCCAE Pet Permit', to: '/service/moccae-pet-permit/' },
    { label: 'How It Works', to: '/how-it-works/' },
  ],
}

export default petRelocationDubai
