import type { AreaPageData } from '../../../types/areaPage.ts'

const dubaiMarina: AreaPageData = {
  slug: 'dubai-marina',
  areaName: 'Dubai Marina',
  emirate: 'Dubai',
  seoTitle: 'Pet Relocation Dubai Marina | Dog & Cat Transport',
  metaDescription:
    'Pet relocation in Dubai Marina — door-to-door dog and cat transport, MOCCAE permit guidance and IATA crates. Free WhatsApp quote in 15 minutes.',
  keywords:
    'pet relocation dubai marina, pet transport dubai marina, dog relocation dubai marina, cat relocation dubai marina, pet movers marina',
  h1: 'Pet Relocation in Dubai Marina',
  primaryKeyword: 'pet relocation dubai marina',
  heroValueProp:
    'Relocating a dog or cat to or from Dubai Marina? We coordinate the whole move for Marina residents — MOCCAE permits, breed checks, IATA crates, customs and door-to-door delivery from your tower — with WhatsApp updates at every step.',
  heroImage: '/images/area-dubai-marina.jpg',
  heroImageAlt: 'A happy dog with the Dubai Marina skyline of tall towers behind — pet relocation in Dubai Marina',
  whatsappMessage: 'Hi Dubai Pet Relocation! I live in Dubai Marina and need help relocating my pet. Can you guide me on the process and cost?',
  geo: { lat: '25.0805', lng: '55.1403' },
  landmarks: ['Marina Walk', 'Jumeirah Beach Residence (JBR)', 'Marina Mall', 'Bluewaters Island', 'Dubai Marina Yacht Club', 'Marina Promenade', 'Pier 7'],
  vetsNote:
    'Dubai Marina and the neighbouring JBR area are well served by veterinary clinics for the microchip, vaccination and health-certificate steps your pet needs before travel. We coordinate timing with your vet so every document is valid on travel day — and if you prefer, we can recommend a vetted clinic nearby.',
  intro:
    'Dubai Marina is one of the most pet-populated communities in Dubai — a dense, high-rise waterfront neighbourhood full of expat families and their dogs and cats. That also makes it one of the most common places we relocate pets to and from. Whether you are moving into a Marina tower from abroad or leaving the UAE, we handle the permits, paperwork and transport so you can focus on settling your family in.',
  sections: [
    {
      h2: 'Pet Relocation Services for Dubai Marina Residents',
      body: [
        { type: 'list', items: [
          'Door-to-door pickup from your Marina tower or building',
          'MOCCAE import or export permit guidance (or handled for you)',
          'Microchip, vaccination and health-certificate coordination',
          'IATA-compliant crate sizing and sourcing',
          'Flight, cargo and customs clearance at DXB / DWC',
          'WhatsApp updates at every checkpoint',
        ] },
      ],
    },
    {
      h2: 'Moving To or From Dubai Marina With a Pet',
      body: [
        { type: 'p', text: 'Most Marina relocations are international — families arriving from the UK, USA, India, Australia and across Europe, or leaving Dubai for a new posting. The requirements depend on your origin or destination country, but the core steps are the same: a valid microchip, current vaccinations, a government health certificate, and a MOCCAE permit valid for 90 days.' },
        { type: 'p', text: 'From low-risk countries the timeline is typically 2–6 weeks; from high-risk rabies countries that require a titer test, plan for around four months because of the mandatory waiting period. We map your exact timeline before you commit.' },
      ],
    },
    {
      h2: 'Pet-Friendly Living in Dubai Marina',
      body: [
        { type: 'p', text: 'Dubai Marina is high-rise living, so most pets are dogs and cats kept in apartments. The Marina Walk and nearby beaches are popular for dog walking, and many towers are pet-friendly — though policies vary by building, so check your tenancy terms. We can advise on crate acclimation for apartment pets ahead of travel day.' },
      ],
    },
    {
      h2: 'Cost of Pet Relocation in Dubai Marina',
      body: [
        { type: 'p', text: 'Total cost depends on your route, pet size and service level — typically AED 2,000 to AED 25,000. Government fees are roughly AED 700 per dog and AED 450 per cat; the rest covers veterinary work, crate, cargo and coordination.' },
      ],
    },
  ],
  faq: [
    { q: 'Do you pick up from my building in Dubai Marina?', a: 'Yes — we arrange door-to-door pickup from your Marina tower or building and coordinate the entire move from there.' },
    { q: 'How long does pet relocation from Dubai Marina take?', a: 'From low-risk countries, usually 2–6 weeks. From high-risk rabies countries that need a titer test, plan for about four months because of the mandatory waiting period.' },
    { q: 'How much does it cost?', a: 'Most relocations fall between AED 2,000 and AED 25,000 depending on route, pet size and service level. We give you a clear range on WhatsApp before you commit.' },
    { q: 'Can you handle the MOCCAE permit for me?', a: 'Yes. We guide you through the MOCCAE import or export permit, or handle the application on your behalf depending on your service tier.' },
    { q: 'My building has pet rules — can you help?', a: 'We focus on the relocation itself, but we can advise on crate acclimation and travel-day logistics for apartment pets in high-rise towers like those in the Marina.' },
  ],
  relatedAreas: [
    { label: 'JBR', to: '/dubai/jbr/' },
    { label: 'Palm Jumeirah', to: '/dubai/palm-jumeirah/' },
    { label: 'Business Bay', to: '/dubai/business-bay/' },
    { label: 'Downtown Dubai', to: '/dubai/downtown-dubai/' },
    { label: 'Jumeirah', to: '/dubai/jumeirah/' },
  ],
}

export default dubaiMarina
