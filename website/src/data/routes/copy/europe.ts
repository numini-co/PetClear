import type { RouteUniqueCopy } from './types.ts'

const EU_DEST = (country: string, airports: string): NonNullable<RouteUniqueCopy['destinationRules']> => ({
  authorityHint: `EU non-commercial pet movement into ${country} (European Commission) plus arrival-airport veterinary controls`,
  bullets: [
    `Plan ${country} / EU entry before requesting UAE export paperwork so certificates do not expire on the ramp.`,
    'Typical third-country building blocks: ISO microchip before rabies vaccination, valid rabies vaccination (21-day wait after a primary course), and an EU animal health certificate from an official/authorised vet inside the entry validity window (commonly 10 days for entry).',
    'SOT: the UAE is on the EU list of third countries whose dogs/cats/ferrets are exempt from rabies antibody titration for non-commercial entry — verify the current Commission listing before you skip a titer.',
    'Non-commercial rules usually cap five pets per traveller; more can trigger commercial/Balai rules.',
    `Arrival airports on this corridor seed: ${airports}. Presence in the seed is not automatic live-animal acceptance.`,
  ],
  verifyNote:
    'Re-check European Commission pet-movement pages and the airline. Dubai Pet Relocation is not a government authority.',
})

export const EUROPE_COPY: RouteUniqueCopy[] = [
  {
    slug: 'france-to-dubai',
    countryKey: 'france',
    title: 'Pet Relocation France to Dubai | PetClear',
    meta: 'Move a dog or cat from France to Dubai: CDG/ORY/LYS/NCE export, MOCCAE 30-day permit, titer window and cargo clearance.',
    h1: 'Pet relocation from France to Dubai',
    heroAlt: 'Dog with French flag cue ready for pet relocation from France to Dubai',
    intro:
      'France to Dubai is an Air France / Emirates / Etihad / Qatar export problem out of Paris Charles de Gaulle (sometimes Orly, Lyon or Nice), then a UAE import file. French exit papers and IATA crate acceptance come first; the clock that cannot slip is the MOCCAE import permit — 30 days from issuance, pet in the UAE before it lapses. Cabin into Dubai is not the default. If a rabies titer is required, draw the sample within 90 days before travel (≥0.5 IU/ml). This inbound page does not explain EU entry from the UAE.',
    snippetQuestion: 'What do I need to fly a pet from Paris to Dubai?',
    snippetAnswer:
      'Live-animal export at CDG (or ORY/LYS/NCE if accepted), a MOCCAE permit valid 30 days, and cargo-default arrival at DXB/DWC. Confirm Air France and Gulf-carrier policies for the exact OD.',
    hubCardDesc: 'CDG export into DXB/DWC cargo — French origin, UAE permit clock.',
    faqs: [
      {
        question: 'Which French airports export pets toward Dubai?',
        answer:
          'CDG is the primary long-haul seed. ORY, LYS and NCE are alternates — confirm live-animal handling before you choose a Riviera departure.',
      },
      {
        question: 'Air France cabin into Dubai?',
        answer:
          'Air France seeds as cabin-or-cargo. UAE entry default is manifest cargo. Confirm the live OD. Emirates, Etihad and Qatar Airways seed as cargo.',
      },
      {
        question: 'MOCCAE permit from France?',
        answer: '30 days from issuance. Do not plan on a 90-day permit.',
      },
      {
        question: 'Titer timing from France?',
        answer:
          'If required, sample within 90 days before travel, ≥ 0.5 IU/ml. Confirm exemption on the MOCCAE portal.',
      },
      {
        question: 'France to Dubai quote?',
        answer: 'Get Route Checked or WhatsApp +971504782999. Quote-only.',
      },
    ],
  },
  {
    slug: 'dubai-to-france',
    countryKey: 'france',
    title: 'Pet Relocation Dubai to France | PetClear',
    meta: 'Export a dog or cat from Dubai to France: EU entry certificate, CDG/ORY gateways and MOCCAE export timing.',
    h1: 'Pet relocation from Dubai to France',
    heroAlt: 'Dog with French flag cue ready for export from Dubai to France',
    intro:
      'Dubai to France is EU-entry first: microchip-before-vaccine, rabies course, EU animal health certificate, then a MOCCAE export certificate locked to those dates and a live-animal product into CDG (ORY, LYS or NCE only if the carrier accepts arrival there). This is not France→Dubai reversed and not a MOCCAE import essay. Air France may offer cabin or cargo on some products; Emirates, Etihad and Qatar Airways seed as cargo from the UAE. Confirm current policy.',
    snippetQuestion: 'How do I take a pet from Dubai to France?',
    snippetAnswer:
      'Build the EU certificate file first, then the MOCCAE export exam, then the booking into CDG or another accepted French gateway. Not a UAE import permit.',
    hubCardDesc: 'EU certificate into CDG — France arrival, destination-backwards.',
    destinationRules: EU_DEST('France', 'CDG, ORY, LYS, NCE'),
    faqs: [
      {
        question: 'Is Dubai→France the reverse of France→Dubai?',
        answer:
          'No. Outbound is EU entry and French gateway acceptance. Inbound is MOCCAE and UAE cargo release.',
      },
      {
        question: 'Does France require a titer from the UAE?',
        answer:
          'For non-commercial EU entry, SOT lists the UAE as titration-exempt — verify the current Commission list. Follow microchip/vaccine/certificate rules either way.',
      },
      {
        question: 'Which French airport should we target?',
        answer:
          'CDG is the usual long-haul pet arrival. Confirm ORY/LYS/NCE before you promise family a Nice collection.',
      },
      {
        question: 'UAE paper to leave Dubai?',
        answer: 'MOCCAE export health certificate timed to the EU certificate — not an import permit.',
      },
      {
        question: 'Quote?',
        answer: 'Get Route Checked or WhatsApp +971504782999. Quote-only.',
      },
    ],
  },
  {
    slug: 'turkey-to-dubai',
    countryKey: 'turkey',
    title: 'Pet Relocation Turkey to Dubai | PetClear',
    meta: 'Move a dog or cat from Turkey to Dubai: IST/SAW/AYT export, MOCCAE 30-day permit, titer window and cargo clearance.',
    h1: 'Pet relocation from Turkey to Dubai',
    heroAlt: 'Dog with Turkish flag cue ready for pet relocation from Turkey to Dubai',
    intro:
      'Turkey to Dubai usually leaves Istanbul Airport (IST), with Sabiha Gökçen (SAW) and Antalya (AYT) as seed alternates when live-animal desks exist. Turkish Airlines, Emirates or Pegasus may be on the ticket — Pegasus is seeded as confirm, so do not assume pets. UAE side: MOCCAE permit valid 30 days, cargo-default clearance at DXB/DWC, titer-when-required with a sample drawn within 90 days before travel. This inbound page does not cover Turkish import permits.',
    snippetQuestion: 'How do I fly a pet from Istanbul to Dubai?',
    snippetAnswer:
      'Confirm live-animal export at IST (or SAW/AYT if accepted), hold a 30-day MOCCAE permit, and plan cargo arrival. Confirm Turkish Airlines / Emirates / Pegasus current policy.',
    hubCardDesc: 'IST export into DXB/DWC — Turkish origin, UAE cargo clearance.',
    faqs: [
      {
        question: 'IST or SAW for pet export?',
        answer:
          'IST is the primary long-haul seed. SAW and AYT need explicit live-animal confirmation. Do not assume every Istanbul airport matches IST handling.',
      },
      {
        question: 'Does Pegasus take pets to Dubai?',
        answer: 'Seed mode is confirm. Do not book assuming acceptance. Turkish Airlines seeds as cabin-or-cargo; Emirates as cargo.',
      },
      {
        question: 'MOCCAE permit from Turkey?',
        answer: '30 days from issuance.',
      },
      {
        question: 'Titer from Turkey?',
        answer:
          'If required, sample within 90 days before travel, ≥ 0.5 IU/ml. Confirm exemption on the MOCCAE portal.',
      },
      {
        question: 'Quote?',
        answer: 'Get Route Checked or WhatsApp +971504782999. Quote-only.',
      },
    ],
  },
  {
    slug: 'dubai-to-turkey',
    countryKey: 'turkey',
    title: 'Pet Relocation Dubai to Turkey | PetClear',
    meta: 'Export a dog or cat from Dubai to Turkey: Turkish veterinary import, IST arrival and MOCCAE export timing.',
    h1: 'Pet relocation from Dubai to Turkey',
    heroAlt: 'Dog with Turkish flag cue ready for export from Dubai to Turkey',
    intro:
      'Dubai to Turkey is a Turkish Ministry of Agriculture and Forestry import, not an EU pet-passport story and not a reversed Turkey→Dubai page. Confirm current veterinary entry conditions, any advance notification, and whether IST (not SAW or AYT) is the inspection airport your permit expects. Then time the MOCCAE export certificate and the Turkish Airlines / Emirates / Pegasus product leaving the UAE. Pegasus remains confirm in our seed.',
    snippetQuestion: 'What leads a Dubai → Istanbul pet file?',
    snippetAnswer:
      'Turkish veterinary import conditions for the named arrival airport (usually IST), then UAE export certification. This is not UAE import and not EU free movement.',
    hubCardDesc: 'Turkish import into IST — not EU pet movement, not UAE import.',
    destinationRules: {
      authorityHint: 'Türkiye Ministry of Agriculture and Forestry — veterinary border / pet import (verify)',
      bullets: [
        'Confirm the current Turkish import permit or veterinary-entry process for dogs and cats from the UAE before you book.',
        'IST is the working long-haul gateway. Treat SAW and AYT as unconfirmed for import unless the ministry and carrier both accept them.',
        'Typical file: ISO microchip, rabies vaccination, official health certificate inside a short window. Turkey is not covered by EU non-commercial pet movement rules.',
        'No fee numerals.',
      ],
      verifyNote: 'Re-check tarimorman.gov.tr guidance and the airline. We are not a Turkish authority.',
    },
    faqs: [
      {
        question: 'Is this the reverse of Turkey to Dubai?',
        answer: 'No. Outbound is Turkish arrival. Inbound is MOCCAE into the UAE.',
      },
      {
        question: 'Does Turkey follow EU titer-exempt rules from the UAE?',
        answer:
          'Do not assume EU listings apply. Confirm Turkish veterinary rules separately.',
      },
      {
        question: 'Which airport should the pet arrive at?',
        answer: 'Plan IST unless your permit names another port with live-animal handling.',
      },
      {
        question: 'UAE paper to leave Dubai?',
        answer: 'MOCCAE export health certificate — not an import permit.',
      },
      {
        question: 'Quote?',
        answer: 'Get Route Checked or WhatsApp +971504782999. Quote-only.',
      },
    ],
  },
  {
    slug: 'spain-to-dubai',
    countryKey: 'spain',
    title: 'Pet Relocation Spain to Dubai | PetClear',
    meta: 'Move a dog or cat from Spain to Dubai: MAD/BCN/AGP export, MOCCAE 30-day permit, titer window and cargo clearance.',
    h1: 'Pet relocation from Spain to Dubai',
    heroAlt: 'Dog with Spanish flag cue ready for pet relocation from Spain to Dubai',
    intro:
      'Spain to Dubai typically exports from Madrid (MAD) or Barcelona (BCN); Málaga (AGP) is a seed alternate when the carrier handles live animals. Iberia, Emirates, Vueling or Qatar Airways may appear — Vueling is seeded as confirm. UAE arrival: MOCCAE permit valid 30 days, cargo-default DXB/DWC, titer-when-required with a sample within 90 days before travel. This page does not cover Spanish/EU import from Dubai.',
    snippetQuestion: 'How do I fly a pet from Madrid or Barcelona to Dubai?',
    snippetAnswer:
      'Confirm live-animal export at MAD or BCN, hold a 30-day MOCCAE permit, and plan cargo arrival. Confirm Iberia / Emirates / Vueling / Qatar Airways current policy.',
    hubCardDesc: 'MAD/BCN export into DXB/DWC — Spanish origin, UAE cargo file.',
    faqs: [
      {
        question: 'MAD, BCN or AGP?',
        answer:
          'MAD and BCN are the usual long-haul seeds. AGP needs explicit live-animal confirmation — do not assume a Costa del Sol passenger flight can carry the crate.',
      },
      {
        question: 'Does Vueling take pets to Dubai?',
        answer: 'Seed confirm. Do not assume acceptance. Iberia seeds as cabin-or-cargo; Emirates and Qatar Airways as cargo.',
      },
      {
        question: 'MOCCAE permit from Spain?',
        answer: '30 days from issuance.',
      },
      {
        question: 'Titer from Spain?',
        answer: 'If required, sample within 90 days before travel, ≥ 0.5 IU/ml.',
      },
      {
        question: 'Quote?',
        answer: 'Get Route Checked or WhatsApp +971504782999. Quote-only.',
      },
    ],
  },
  {
    slug: 'dubai-to-spain',
    countryKey: 'spain',
    title: 'Pet Relocation Dubai to Spain | PetClear',
    meta: 'Export a dog or cat from Dubai to Spain: EU entry certificate, MAD/BCN gateways and MOCCAE export timing.',
    h1: 'Pet relocation from Dubai to Spain',
    heroAlt: 'Dog with Spanish flag cue ready for export from Dubai to Spain',
    intro:
      'Dubai to Spain is EU-certificate work aimed at Madrid or Barcelona, then a MOCCAE export exam and a live-animal product leaving the UAE. It is not Spain→Dubai reversed. Iberia may offer cabin or cargo on some products; Emirates and Qatar Airways seed as cargo; Vueling is confirm. Do not promise Málaga arrival unless the carrier and EU TRAVELLER point of entry both work for live animals.',
    snippetQuestion: 'How do I take a pet from Dubai to Spain?',
    snippetAnswer:
      'Complete the EU animal health certificate file, then UAE export papers, then a booking into MAD or BCN. Not a MOCCAE import permit.',
    hubCardDesc: 'EU certificate into MAD/BCN — Spanish arrival, destination-backwards.',
    destinationRules: EU_DEST('Spain', 'MAD, BCN, AGP'),
    faqs: [
      {
        question: 'Reverse of Spain to Dubai?',
        answer: 'No. Outbound is EU entry. Inbound is UAE/MOCCAE.',
      },
      {
        question: 'Titer for Spain from the UAE?',
        answer:
          'EU non-commercial listing currently treats the UAE as titration-exempt — verify the live Commission list.',
      },
      {
        question: 'Can we arrive in Málaga?',
        answer: 'Only if the airline and live-animal handler accept AGP. Default planning is MAD or BCN.',
      },
      {
        question: 'UAE paper to leave Dubai?',
        answer: 'MOCCAE export health certificate.',
      },
      {
        question: 'Quote?',
        answer: 'Get Route Checked or WhatsApp +971504782999. Quote-only.',
      },
    ],
  },
  {
    slug: 'netherlands-to-dubai',
    countryKey: 'netherlands',
    title: 'Pet Relocation Netherlands to Dubai | PetClear',
    meta: 'Move a dog or cat from the Netherlands to Dubai: AMS export, MOCCAE 30-day permit, titer window and cargo clearance.',
    h1: 'Pet relocation from the Netherlands to Dubai',
    heroAlt: 'Dog with Dutch flag cue ready for pet relocation from Amsterdam to Dubai',
    intro:
      'The Netherlands to Dubai is a single-origin-airport corridor in our seed: Amsterdam Schiphol (AMS). KLM, Emirates or Etihad may carry the animal; UAE arrival is still MOCCAE (permit 30 days from issuance) and cargo-default clearance at DXB or DWC. If a titer is required, sample within 90 days before travel, ≥ 0.5 IU/ml. This inbound page does not cover Dutch/EU import from Dubai — that is the outbound twin.',
    snippetQuestion: 'What do I need to fly a pet from Schiphol to Dubai?',
    snippetAnswer:
      'KLM or Gulf-carrier live-animal acceptance at AMS, a 30-day MOCCAE permit, and cargo-default UAE arrival. Confirm current pet policy for the exact OD.',
    hubCardDesc: 'AMS export into DXB/DWC — one Dutch gateway, full UAE file.',
    faqs: [
      {
        question: 'Is AMS the only Dutch airport on this seed?',
        answer: 'Yes. Confirm live-animal handling at Schiphol for your carrier — one code does not mean every KLM flight accepts the crate.',
      },
      {
        question: 'KLM cabin into Dubai?',
        answer:
          'KLM seeds as cabin-or-cargo. UAE entry default is manifest cargo. Emirates and Etihad seed as cargo. Confirm the live OD.',
      },
      {
        question: 'MOCCAE permit from the Netherlands?',
        answer: '30 days from issuance.',
      },
      {
        question: 'Titer from the Netherlands?',
        answer: 'If required, sample within 90 days before travel, ≥ 0.5 IU/ml.',
      },
      {
        question: 'Quote?',
        answer: 'Get Route Checked or WhatsApp +971504782999. Quote-only.',
      },
    ],
  },
  {
    slug: 'dubai-to-netherlands',
    countryKey: 'netherlands',
    title: 'Pet Relocation Dubai to Netherlands | PetClear',
    meta: 'Export a dog or cat from Dubai to the Netherlands: EU entry certificate, AMS arrival and MOCCAE export timing.',
    h1: 'Pet relocation from Dubai to the Netherlands',
    heroAlt: 'Dog with Dutch flag cue ready for export from Dubai to Amsterdam',
    intro:
      'Dubai to the Netherlands aims at one seed gateway — AMS — with EU entry documents leading the calendar. Build the EU animal health certificate, then the MOCCAE export exam, then a KLM / Emirates / Etihad live-animal product leaving the UAE. This is not the inbound Netherlands→Dubai page. Schiphol’s live-animal facilities are capable, but your booking still has to be a pet product, not a random passenger ticket.',
    snippetQuestion: 'How do I take a pet from Dubai to Amsterdam?',
    snippetAnswer:
      'EU certificate first, UAE export second, AMS live-animal booking third. Not a MOCCAE import permit and not a reversed inbound checklist.',
    hubCardDesc: 'EU certificate into AMS — Dutch arrival, one gateway.',
    destinationRules: EU_DEST('the Netherlands', 'AMS'),
    faqs: [
      {
        question: 'Reverse of Netherlands to Dubai?',
        answer: 'No. Outbound is EU entry at AMS. Inbound is UAE/MOCCAE.',
      },
      {
        question: 'Titer for the Netherlands from the UAE?',
        answer: 'EU listing currently treats the UAE as titration-exempt — verify the live Commission list.',
      },
      {
        question: 'Only AMS?',
        answer: 'On this seed, yes. Do not invent a Rotterdam or Eindhoven pet-import airport.',
      },
      {
        question: 'UAE paper to leave Dubai?',
        answer: 'MOCCAE export health certificate.',
      },
      {
        question: 'Quote?',
        answer: 'Get Route Checked or WhatsApp +971504782999. Quote-only.',
      },
    ],
  },
  {
    slug: 'italy-to-dubai',
    countryKey: 'italy',
    title: 'Pet Relocation Italy to Dubai | PetClear',
    meta: 'Move a dog or cat from Italy to Dubai: FCO/MXP/LIN export, MOCCAE 30-day permit, titer window and cargo clearance.',
    h1: 'Pet relocation from Italy to Dubai',
    heroAlt: 'Dog with Italian flag cue ready for pet relocation from Italy to Dubai',
    intro:
      'Italy to Dubai usually exports from Rome Fiumicino (FCO) or Milan Malpensa (MXP); Linate (LIN) is a seed alternate with stricter confirmation because it is a city airport. ITA Airways, Emirates or Qatar Airways may operate the sector. UAE side: MOCCAE permit valid 30 days, cargo-default DXB/DWC, titer-when-required with a sample within 90 days before travel. This inbound page does not cover Italian/EU import.',
    snippetQuestion: 'FCO or MXP for a pet leaving Italy to Dubai?',
    snippetAnswer:
      'Both are seed export gateways. Confirm live-animal handling and do not assume LIN matches MXP. Hold a 30-day MOCCAE permit and plan cargo arrival in the UAE.',
    hubCardDesc: 'FCO/MXP export into DXB/DWC — Italian origin, UAE cargo file.',
    faqs: [
      {
        question: 'Can I export from Milan Linate?',
        answer:
          'LIN is in the seed as an alternate. Confirm the carrier’s live-animal desk — many long-haul pet movements use MXP instead.',
      },
      {
        question: 'ITA Airways cabin into Dubai?',
        answer:
          'ITA seeds as cabin-or-cargo. UAE entry default is manifest cargo. Emirates and Qatar Airways seed as cargo. Confirm the live OD.',
      },
      {
        question: 'MOCCAE permit from Italy?',
        answer: '30 days from issuance.',
      },
      {
        question: 'Titer from Italy?',
        answer: 'If required, sample within 90 days before travel, ≥ 0.5 IU/ml.',
      },
      {
        question: 'Quote?',
        answer: 'Get Route Checked or WhatsApp +971504782999. Quote-only.',
      },
    ],
  },
  {
    slug: 'dubai-to-italy',
    countryKey: 'italy',
    title: 'Pet Relocation Dubai to Italy | PetClear',
    meta: 'Export a dog or cat from Dubai to Italy: EU entry certificate, FCO/MXP gateways and MOCCAE export timing.',
    h1: 'Pet relocation from Dubai to Italy',
    heroAlt: 'Dog with Italian flag cue ready for export from Dubai to Italy',
    intro:
      'Dubai to Italy is EU-certificate work into Rome Fiumicino or Milan Malpensa, then UAE export paperwork and an ITA / Emirates / Qatar Airways live-animal product. It is not Italy→Dubai reversed. Treat Linate as an unconfirmed arrival unless the carrier and Italian border post both accept live animals there. EU titration-exempt status for the UAE still needs a live Commission check.',
    snippetQuestion: 'How do I take a pet from Dubai to Rome or Milan?',
    snippetAnswer:
      'EU animal health certificate first, MOCCAE export second, FCO or MXP live-animal booking third. Not a UAE import permit.',
    hubCardDesc: 'EU certificate into FCO/MXP — Italian arrival, destination-backwards.',
    destinationRules: EU_DEST('Italy', 'FCO, MXP, LIN'),
    faqs: [
      {
        question: 'Reverse of Italy to Dubai?',
        answer: 'No. Outbound is EU entry. Inbound is UAE/MOCCAE.',
      },
      {
        question: 'FCO vs MXP?',
        answer: 'Choose the gateway your family can collect from and that the carrier’s pet product supports. Confirm before you print labels.',
      },
      {
        question: 'Titer for Italy from the UAE?',
        answer: 'EU listing currently treats the UAE as titration-exempt — verify the live list.',
      },
      {
        question: 'UAE paper to leave Dubai?',
        answer: 'MOCCAE export health certificate.',
      },
      {
        question: 'Quote?',
        answer: 'Get Route Checked or WhatsApp +971504782999. Quote-only.',
      },
    ],
  },
  {
    slug: 'ireland-to-dubai',
    countryKey: 'ireland',
    title: 'Pet Relocation Ireland to Dubai | PetClear',
    meta: 'Move a dog or cat from Ireland to Dubai: DUB/ORK export, MOCCAE 30-day permit, titer window and cargo clearance.',
    h1: 'Pet relocation from Ireland to Dubai',
    heroAlt: 'Dog with Irish flag cue ready for pet relocation from Ireland to Dubai',
    intro:
      'Ireland to Dubai usually leaves Dublin (DUB); Cork (ORK) is a seed alternate when the carrier accepts live animals. Aer Lingus, Emirates or a connecting product may appear — Ryanair is seeded as generally not accepting pets, so do not plan a low-cost cabin hop. UAE arrival: MOCCAE permit valid 30 days, cargo-default DXB/DWC, titer-when-required with a sample within 90 days before travel. This inbound page does not cover Irish/EU import from Dubai.',
    snippetQuestion: 'Can I fly a pet from Dublin to Dubai on Ryanair?',
    snippetAnswer:
      'Do not assume it. Ryanair seeds as generally not accepting pets. Use a carrier that publishes a live-animal product, hold a 30-day MOCCAE permit, and plan cargo arrival in the UAE.',
    hubCardDesc: 'DUB export into DXB/DWC — Irish origin; Ryanair generally not pets.',
    faqs: [
      {
        question: 'DUB or ORK?',
        answer: 'DUB is the primary seed. ORK needs explicit live-animal confirmation.',
      },
      {
        question: 'Aer Lingus cabin into Dubai?',
        answer:
          'Aer Lingus seeds as cabin-or-cargo. UAE entry default is still manifest cargo. Emirates seeds as cargo. Confirm the live OD.',
      },
      {
        question: 'MOCCAE permit from Ireland?',
        answer: '30 days from issuance.',
      },
      {
        question: 'Titer from Ireland?',
        answer: 'If required, sample within 90 days before travel, ≥ 0.5 IU/ml. Confirm exemption on the MOCCAE portal.',
      },
      {
        question: 'Quote?',
        answer: 'Get Route Checked or WhatsApp +971504782999. Quote-only.',
      },
    ],
  },
  {
    slug: 'dubai-to-ireland',
    countryKey: 'ireland',
    title: 'Pet Relocation Dubai to Ireland | PetClear',
    meta: 'Export a dog or cat from Dubai to Ireland: EU entry certificate, DUB arrival and MOCCAE export timing.',
    h1: 'Pet relocation from Dubai to Ireland',
    heroAlt: 'Dog with Irish flag cue ready for export from Dubai to Ireland',
    intro:
      'Dubai to Ireland is EU-entry into Dublin (Cork only if live-animal import is real), then UAE export papers. It is not Ireland→Dubai reversed and not a Ryanair story — Ryanair generally does not take pets. Aer Lingus and Emirates are the seed carriers to confirm. Ireland is in the EU pet-movement framework; tapeworm rules that apply to Great Britain do not automatically copy-paste — confirm the Irish/EU certificate notes for dogs.',
    snippetQuestion: 'How do I take a pet from Dubai to Dublin?',
    snippetAnswer:
      'EU animal health certificate first, MOCCAE export second, a live-animal booking into DUB third. Ryanair is not a planning assumption.',
    hubCardDesc: 'EU certificate into DUB — Irish arrival; not a low-cost cabin hop.',
    destinationRules: EU_DEST('Ireland', 'DUB, ORK'),
    faqs: [
      {
        question: 'Reverse of Ireland to Dubai?',
        answer: 'No. Outbound is EU entry at DUB. Inbound is UAE/MOCCAE.',
      },
      {
        question: 'Can Ryanair take the pet from Dubai?',
        answer: 'Seed: generally not pets. Confirm current policy if you were told otherwise — we do not plan on it.',
      },
      {
        question: 'Titer for Ireland from the UAE?',
        answer: 'EU listing currently treats the UAE as titration-exempt — verify the live Commission list.',
      },
      {
        question: 'UAE paper to leave Dubai?',
        answer: 'MOCCAE export health certificate.',
      },
      {
        question: 'Quote?',
        answer: 'Get Route Checked or WhatsApp +971504782999. Quote-only.',
      },
    ],
  },
]
