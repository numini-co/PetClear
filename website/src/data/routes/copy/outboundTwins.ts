import type { RouteUniqueCopy } from './types.ts'

/** Outbound-only corridors whose inbound twins are already live. Extra-strict differentiation. */
export const OUTBOUND_TWIN_COPY: RouteUniqueCopy[] = [
  {
    slug: 'dubai-to-australia',
    countryKey: 'australia',
    title: 'Pet Relocation Dubai to Australia | PetClear',
    meta: 'Export a dog or cat from Dubai to Australia: DAFF Group 3, BICON permit, Mickleham quarantine, RNATT and SYD/MEL/BNE/PER arrival.',
    h1: 'Pet relocation from Dubai to Australia',
    heroAlt: 'Dog with Australian flag cue ready for export from Dubai to Australia',
    intro:
      'Taking a dog or cat from Dubai to Australia is an Australian biosecurity project, not a reversed “Australia to Dubai” import essay. The Department of Agriculture, Fisheries and Forestry (DAFF) treats the UAE as a Group 3 approved country: you plan BICON import-permit timing, approved-country residency, rabies vaccination plus an RNATT of at least 0.5 IU/ml from an approved laboratory, and a post-entry quarantine booking at Mickleham (Melbourne) before anyone requests a MOCCAE export health certificate. Pets typically arrive at SYD, MEL, BNE or PER only after that Australian chain is real — then the airline product leaving DXB, DWC or AUH is chosen to match the permit and quarantine slot. This page does not re-own inbound UAE permit or “how to fly a pet into Dubai from Australia” terms; those stay on the live inbound guide.',
    snippetQuestion: 'What actually drives a Dubai → Australia pet move?',
    snippetAnswer:
      'Australian import rules: BICON permit, Group 3 residency and RNATT, then a Mickleham quarantine place. Only after those dates exist do you lock the MOCCAE export certificate and the live-animal booking out of Dubai.',
    hubCardDesc: 'DAFF Group 3 + Mickleham quarantine — plan Australia first, then UAE export.',
    destinationRules: {
      authorityHint: 'Australian Government DAFF / BICON cat and dog import conditions (Group 3, including the UAE)',
      bullets: [
        'Apply for an Australian import permit via BICON before you treat a quarantine slot as bookable — a permit does not guarantee a Mickleham place.',
        'Group 3 dogs and cats must have lived in an approved country for at least 180 days before export, counted from the date the RNATT sample arrives at the laboratory. That 180 days is a residency clock, not UAE import quarantine.',
        'DAFF requires a rabies vaccination followed by an RNATT result of ≥ 0.5 IU/ml from an approved laboratory. Identity verification before the blood draw can affect the post-entry quarantine length — confirm the current step-by-step guide.',
        'Post-entry quarantine is only at the Mickleham facility (Melbourne). Published minimums are typically 10–30 days, longer if risk issues arise. Arrival airport (SYD/MEL/BNE/PER) must still accept the live animal and connect to that quarantine plan.',
        'Hybrid-wolf dog types and some wild-cat hybrids are not permitted. Bengal-cat import policy tightened in 2026 (secondary sources) — verify the current BICON commodity case for your breed before you book.',
        'Do not invent government or quarantine fee numerals. Confirm charges on official DAFF/BICON pages.',
      ],
      verifyNote:
        'Re-check the DAFF Group 3 step-by-step guides and BICON before travel. Listings and quarantine capacity change. Dubai Pet Relocation is not DAFF and does not sell airline tickets.',
    },
    faqs: [
      {
        question: 'Is Dubai to Australia just the reverse of Australia to Dubai?',
        answer:
          'No. The live Australia→Dubai page is about leaving Australia and entering the UAE. This page is about Australian import: BICON, Group 3 residency, RNATT for DAFF, and Mickleham quarantine. Swapping country names would cannibalise both URLs and give you the wrong checklist.',
      },
      {
        question: 'Do I need a MOCCAE import permit to fly a pet from Dubai to Australia?',
        answer:
          'No. A MOCCAE import permit is only for entering the UAE. Leaving Dubai you need UAE export/exit veterinary documentation timed to the Australian permit and quarantine slot — confirm the current MOCCAE digital-services pathway.',
      },
      {
        question: 'Which Australian airports can pets arrive at from Dubai?',
        answer:
          'Seed gateways are SYD, MEL, BNE and PER. Post-entry quarantine is at Mickleham in Melbourne, so the arrival city and the quarantine booking must be planned together. Confirm live-animal acceptance with the carrier and handler — an IATA code on this page is not a booking.',
      },
      {
        question: 'Does Australia require a rabies titer for pets coming from the UAE?',
        answer:
          'Yes under current Group 3 conditions: rabies vaccination plus an RNATT of at least 0.5 IU/ml from an approved laboratory, with the 180-day approved-country residency clock tied to when that sample reaches the lab. That is an Australian import rule, not the UAE “sample within 90 days before travel” inbound framing.',
      },
      {
        question: 'Can Qantas take my dog in the cabin from Dubai to Sydney?',
        answer:
          'Seed mode for Qantas on this corridor is cabin-or-cargo with a “limited” flag — treat it as unconfirmed. Emirates and Etihad seed as cargo. Confirm the live pet policy for the exact Dubai→Australia itinerary. We are not an airline partner.',
      },
      {
        question: 'How do I get a quote for Dubai to Australia?',
        answer:
          'Use Get Route Checked or WhatsApp +971504782999 with species, breed, weight, preferred month, and whether you already have a BICON case or Mickleham hold. We quote against live constraints and do not publish package fee bands.',
      },
    ],
  },
  {
    slug: 'dubai-to-philippines',
    countryKey: 'philippines',
    title: 'Pet Relocation Dubai to Philippines | PetClear',
    meta: 'Export a dog or cat from Dubai to the Philippines: BAI SPSIC, 10-day export certificate, MNL/CEB/CRK arrival and airline mode checks.',
    h1: 'Pet relocation from Dubai to the Philippines',
    heroAlt: 'Dog with Philippine flag cue ready for export from Dubai to the Philippines',
    intro:
      'Leaving Dubai for the Philippines is a Bureau of Animal Industry problem first: you need an approved SPSIC (Sanitary and Phytosanitary Import Clearance) before the pet travels, then a UAE export health certificate issued inside the short window BAI will accept, then a live-animal booking into Manila, Cebu or Clark. This is not a mirror of the live Philippines→Dubai page, which is about high-risk UAE entry, MOCCAE permits and inbound cargo clearance. Here the failure modes are a missing SPSIC, an expired origin health certificate, or an arrival without BAI documents — BAI states pets can be seized or refused. We do not re-own inbound titer-for-Dubai or “waiting period into the UAE” language on this URL.',
    snippetQuestion: 'What do I need before a pet leaves Dubai for the Philippines?',
    snippetAnswer:
      'An approved BAI SPSIC before travel, a UAE export / international veterinary health certificate issued within BAI’s short pre-departure window, and a carrier that will accept the animal into MNL, CEB or CRK. Destination paperwork leads; UAE exit follows.',
    hubCardDesc: 'BAI SPSIC first, then UAE export cert into MNL/CEB/CRK — not a UAE-import essay.',
    destinationRules: {
      authorityHint: 'Philippines Bureau of Animal Industry (BAI) pet import / SPSIC rules',
      bullets: [
        'Obtain an approved SPSIC from BAI before the pet leaves the UAE. BAI publishes the application online; a one-time importation is capped (currently max three animals) and the SPSIC has a published validity window (SOT: 60 days) — verify the live portal.',
        'Dogs and cats must meet BAI age rules at application (SOT: at least 120 days old). Pregnant animals and pets that gave birth within 12 weeks before travel are not eligible on the published page.',
        'The pet must travel with an export permit / international veterinary health certificate issued within 10 calendar days before departure — that is the document you time the MOCCAE export exam to, not a UAE import permit.',
        'ISO microchip and rabies vaccination timing are set by BAI (first rabies vaccination at least 14 days before SPSIC application on the published page), plus species booster combinations. Confirm current BAI lists.',
        'Pets arriving without a valid SPSIC and veterinary health certificate can be seized, confiscated or refused admission.',
        'Do not treat published historic peso inspection figures as current — confirm any arrival charges with the Quarantine Office. We do not print fee numerals here.',
      ],
      verifyNote:
        'Re-check https://www.bai.gov.ph/Stakeholders/PetImport and your airline before you book. Dubai Pet Relocation is not BAI and is not affiliated with any carrier.',
    },
    faqs: [
      {
        question: 'Is this the same process as flying a pet from Manila to Dubai?',
        answer:
          'No. Philippines→Dubai is UAE import (MOCCAE permit, inbound cargo release, titer-when-required for entering the UAE). Dubai→Philippines is BAI SPSIC, a 10-day export health certificate, and arrival inspection in the Philippines. Using the inbound checklist outbound is how pets get refused at MNL.',
      },
      {
        question: 'Which Philippine airports do pets from Dubai usually enter?',
        answer:
          'Seed gateways are MNL (Manila), CEB (Cebu) and CRK (Clark). Confirm that your SPSIC, airline and handler all name the same airport — a seed code is not acceptance.',
      },
      {
        question: 'Can Philippine Airlines fly my cat as cabin from Dubai?',
        answer:
          'PAL’s seed mode is cabin-or-cargo with a “program” flag; Cebu Pacific is confirm/limited; Emirates, Qatar Airways and Etihad seed as cargo. Confirm the live product for the exact Dubai→Philippines itinerary. This page is not a carrier policy guide.',
      },
      {
        question: 'What UAE document do I need to leave Dubai for the Philippines?',
        answer:
          'A MOCCAE export / veterinary health certificate timed so it is still inside BAI’s 10-calendar-day window on departure. You do not apply for a MOCCAE import permit to leave the UAE.',
      },
      {
        question: 'How do I get a Dubai to Philippines quote?',
        answer:
          'WhatsApp +971504782999 or Get Route Checked with species, breed, weight, target island/city, and whether an SPSIC is already approved. Packages are quote-only — no published fee bands.',
      },
    ],
  },
  {
    slug: 'dubai-to-india',
    countryKey: 'india',
    title: 'Pet Relocation Dubai to India | PetClear',
    meta: 'Export a dog or cat from Dubai to India: AQCS advance NOC, Transfer of Residence vs short stay, DEL/BOM/BLR gateways and cargo checks.',
    h1: 'Pet relocation from Dubai to India',
    heroAlt: 'Dog with Indian flag cue ready for export from Dubai to India',
    intro:
      'Moving a pet from Dubai to India is an AQCS / DGFT problem, not a rewrite of the live India→Dubai page. Every dog or cat needs an Advance No Objection Certificate from the Animal Quarantine & Certification Station, applied for before embarkation, and must enter through a designated Indian airport (Delhi, Mumbai, Bengaluru, Hyderabad, Chennai — plus Kolkata on the DGFT list; our seed highlights DEL, BOM, BLR, HYD and MAA). Pathway choice matters: Transfer of Residence, re-import, or short-stay licensing are different files. UAE work is the export health certificate and the airline product leaving DXB/DWC/AUH — not another MOCCAE import-permit essay. We deliberately do not reuse inbound “titer wait into Dubai” or invented India-package fee language on this URL.',
    snippetQuestion: 'How do I bring a pet from Dubai into India?',
    snippetAnswer:
      'Secure the AQCS Advance NOC for the correct Indian pathway (residence transfer, re-import or short stay), enter via a designated airport, then time the MOCCAE export certificate and cargo booking to that NOC. This is not UAE import.',
    hubCardDesc: 'AQCS Advance NOC and designated-airport arrival — India import, not UAE entry.',
    destinationRules: {
      authorityHint: 'Government of India DAHD / AQCS and DGFT pet-import pathways',
      bullets: [
        'Apply for an Advance NOC from AQCS before the pet embarks (SOT: at least seven working days before embarkation). Travel without a valid NOC is the usual refusal mode.',
        'Know which of the three published pathways you are on: Transfer of Residence (overseas-stay and relocation evidence), Re-import (original AQCS export health certificate), or Short Stay (DGFT import licence — committee timing can be monthly).',
        'Entry is allowed only through designated airports/seaports. Seed gateways we list are DEL, BOM, BLR, HYD and MAA; DGFT also names Kolkata. Quarantine, when required, is at the government station for that port.',
        'ISO microchip before rabies vaccination and a current rabies vaccine are the usual health building blocks. Secondary sources say India does not require a rabies titer for import — verify the current AQCS instruction for your pathway rather than copying UAE inbound titer rules.',
        'Airline mode leaving Dubai is independent of the NOC. Emirates and Etihad seed as cargo; Air India as cabin-or-cargo (varies); IndiGo generally does not accept pets; Qatar Airways as cargo via DOH. Confirm live policy.',
        'No package or government fee numerals on this page. Confirm AQCS/DGFT charges on official channels.',
      ],
      verifyNote:
        'Re-check DAHD/AQCS and DGFT notices before you book. Dubai Pet Relocation is not an Indian authority and is not affiliated with any airline.',
    },
    faqs: [
      {
        question: 'Why isn’t this page the reverse of India to Dubai?',
        answer:
          'India→Dubai is about entering the UAE (MOCCAE 30-day permit, inbound cargo, titer-when-required for UAE). Dubai→India is about AQCS NOC, Indian pathway (ToR / re-import / short stay) and designated-airport quarantine. Reverse-pasting inbound copy would rank the wrong intent and miss the NOC.',
      },
      {
        question: 'Which Indian airports can receive a pet from Dubai?',
        answer:
          'Seed corridors we map are DEL, BOM, BLR, HYD and MAA. Official Indian lists also include Kolkata. Your NOC, airline AWB and handler must all name the same designated port.',
      },
      {
        question: 'Do I need a rabies titer to enter India from the UAE?',
        answer:
          'Secondary SOT notes say India does not require a rabies titer for import, unlike many UAE inbound cases. Treat that as verify-on-AQCS, not as a reason to skip UAE-side export vaccines or microchip rules. Do not copy the live India→Dubai titer story onto this page.',
      },
      {
        question: 'Can IndiGo fly my dog from Dubai to Mumbai?',
        answer:
          'Seed labels IndiGo as generally not accepting pets. Confirm current policy; do not book assuming a cabin pet. Emirates/Etihad seed as cargo; Air India as cabin-or-cargo with a varies flag.',
      },
      {
        question: 'What UAE paper do I need to leave Dubai for India?',
        answer:
          'A MOCCAE export health certificate timed to the AQCS NOC and the flight, not a MOCCAE import permit. Import permits are for animals entering the UAE.',
      },
      {
        question: 'How do I get a Dubai to India quote?',
        answer:
          'Get Route Checked or WhatsApp +971504782999 with pathway (ToR, re-import or short stay), pet details, and target city. Quote-only — we do not publish AED or INR package bands.',
      },
    ],
  },
  {
    slug: 'dubai-to-canada',
    countryKey: 'canada',
    title: 'Pet Relocation Dubai to Canada | PetClear',
    meta: 'Export a dog or cat from Dubai to Canada: CFIA rabies certificate rules, YYZ/YVR/YUL/YYC gateways, and airline mode checks from the UAE.',
    h1: 'Pet relocation from Dubai to Canada',
    heroAlt: 'Dog with Canadian flag cue ready for export from Dubai to Canada',
    intro:
      'Dubai to Canada is planned around Canadian Food Inspection Agency entry, not around a MOCCAE import permit. Personal pet dogs and cats typically need a valid rabies vaccination certificate that identifies the animal; federal import permits are not the usual personal-pet path — confirm the current CFIA page, because commercial or under-age movements differ. Pets usually arrive at Toronto, Vancouver, Montreal or Calgary after a UAE export health certificate and a live-animal product out of DXB, DWC or AUH. This page does not retell the live Canada→Dubai inbound guide (CFIA-endorsed export into UAE cargo). Airline rows stay unverified.',
    snippetQuestion: 'What does Canada require for a pet leaving Dubai?',
    snippetAnswer:
      'CFIA-facing rabies documentation that identifies the pet, a MOCCAE export health certificate timed to travel, and a carrier that will accept the animal into YYZ, YVR, YUL or YYC. Confirm current CFIA personal-pet rules before you book.',
    hubCardDesc: 'CFIA-facing rabies papers into YYZ/YVR/YUL/YYC — Canada entry, not UAE import.',
    destinationRules: {
      authorityHint: 'Canadian Food Inspection Agency (CFIA) personal pet import rules — verify the live CFIA page',
      bullets: [
        'Personal pet dogs and cats above the published age usually need a rabies vaccination certificate in English or French that identifies the animal. Confirm whether your case is personal or commercial.',
        'Secondary sources say there is typically no federal import permit and no quarantine for compliant personal pets — treat both statements as verify-on-CFIA, not as a guarantee.',
        'Commercial movements (resale, adoption, breeding, exhibition) and very young dogs can trigger extra CFIA permits and health certificates.',
        'CBSA/CFIA may charge an inspection fee at the border for non-US origins — confirm the current amount with the agency; we do not print figures here.',
        'Pick the arrival gateway (YYZ, YVR, YUL, YYC) the carrier and handler can actually clear. Seed airports are not automatic acceptance.',
      ],
      verifyNote:
        'CFIA web pages move. Re-check inspection.canada.ca and the airline before travel. Dubai Pet Relocation is not CFIA.',
    },
    faqs: [
      {
        question: 'Is Dubai→Canada the reverse of Canada→Dubai?',
        answer:
          'No. The live inbound page is UAE entry from Canada. This page is Canadian arrival: CFIA rabies identification, CBSA inspection, and the airline product leaving the UAE.',
      },
      {
        question: 'Which Canadian airports do pets from Dubai use?',
        answer:
          'Seed gateways are YYZ (Toronto), YVR (Vancouver), YUL (Montreal) and YYC (Calgary). Confirm live-animal handling on your booking.',
      },
      {
        question: 'Can Air Canada take my cat in the cabin from Dubai?',
        answer:
          'Air Canada seeds as cabin-or-cargo; Emirates and Etihad as cargo; WestJet as confirm. Cabin eligibility is OD- and size-specific. Confirm current policy — rows here are unverified.',
      },
      {
        question: 'Do I need a MOCCAE import permit to leave Dubai for Canada?',
        answer:
          'No. You need UAE export documentation plus CFIA-facing rabies papers. Import permits are for animals arriving in the UAE.',
      },
      {
        question: 'How do I get a Dubai to Canada quote?',
        answer:
          'Get Route Checked or WhatsApp +971504782999 with pet details, destination city, and travel month. Quote-only; no published package prices.',
      },
    ],
  },
  {
    slug: 'dubai-to-south-africa',
    countryKey: 'south-africa',
    title: 'Pet Relocation Dubai to South Africa | PetClear',
    meta: 'Export a dog or cat from Dubai to South Africa: DALRRD import permit, JNB/CPT arrival, dog quarantine risk and UAE export timing.',
    h1: 'Pet relocation from Dubai to South Africa',
    heroAlt: 'Dog with South African flag cue ready for export from Dubai to South Africa',
    intro:
      'Dubai to South Africa is built around a veterinary import permit from DALRRD (Directorate: Animal Health), not around UAE inbound rules. Dogs and cats need an ISO microchip (tattoos are not accepted on the mirrored infosheet), and dogs from countries that are not on South Africa’s exemption list — the UAE is not described as exempt — can face arrival quarantine. Published entry airports for this movement are Johannesburg (OR Tambo) and Cape Town; Durban appears in our airport seed as a city code but must be confirmed for live-animal import. Only after the South African permit and isolation plan exist do you time the MOCCAE export certificate and the cargo product leaving Dubai. This is not a reversed South Africa→Dubai titer-into-UAE guide.',
    snippetQuestion: 'What is different about sending a pet from Dubai to South Africa?',
    snippetAnswer:
      'DALRRD import permit first, ISO microchip, and a realistic JNB or CPT arrival plan that may include dog quarantine. UAE export papers follow those dates. This is not the inbound South Africa→Dubai checklist.',
    hubCardDesc: 'DALRRD permit into JNB/CPT — dog quarantine risk, not a UAE-import recap.',
    destinationRules: {
      authorityHint: 'South Africa DALRRD Directorate: Animal Health — veterinary import permit (verify first-party)',
      bullets: [
        'Obtain a veterinary import permit before the pet leaves the UAE. ISO 11784/11785 microchip is mandatory on the mirrored infosheet; tattoos are not accepted.',
        'Secondary sources: dogs from non-exempt countries (UAE not listed as exempt) face a minimum arrival quarantine; cats are not routinely quarantined. Confirm the current DALRRD instruction for your species.',
        'Dogs and cats may only enter via Johannesburg (OR Tambo) or Cape Town on the mirrored infosheet. Treat DUR as unconfirmed for import unless DALRRD and the airline both accept it.',
        'Rabies vaccination timing is typically a window before import (secondary: between 30 days and 12 months). Secondary sources say no rabies titer is required for South Africa — verify; do not paste UAE inbound titer rules here.',
        'No government or package fee numerals on this page. Confirm permit and quarantine charges with DALRRD and the facility.',
      ],
      verifyNote:
        'DALRRD documents are the authority. Re-check before booking. Dubai Pet Relocation is not a South African government office.',
    },
    faqs: [
      {
        question: 'Is this the reverse of South Africa to Dubai?',
        answer:
          'No. The live inbound page is about entering the UAE from South Africa. This page is DALRRD import, possible dog quarantine, and JNB/CPT arrival from Dubai.',
      },
      {
        question: 'Which South African airports can receive pets from Dubai?',
        answer:
          'Plan on JNB or CPT unless DALRRD and your carrier confirm another port. DUR is in the city seed — confirm live-animal import before you advertise it to family as the arrival city.',
      },
      {
        question: 'Which airlines appear on this corridor seed?',
        answer:
          'Emirates, Qatar Airways and Ethiopian seed as cargo; South African Airways as confirm. Confirm current pet policy for the exact OD. We are not affiliated with any airline.',
      },
      {
        question: 'What UAE document do I need to leave Dubai?',
        answer:
          'A MOCCAE export health certificate aligned to the DALRRD permit validity and the flight — not a MOCCAE import permit.',
      },
      {
        question: 'How do I get a Dubai to South Africa quote?',
        answer:
          'Get Route Checked or WhatsApp +971504782999 with species, breed, weight and whether you already hold a DALRRD permit. Quote-only.',
      },
    ],
  },
  {
    slug: 'dubai-to-new-zealand',
    countryKey: 'new-zealand',
    title: 'Pet Relocation Dubai to New Zealand | PetClear',
    meta: 'Export a dog or cat from Dubai to New Zealand: MPI import, AKL/WLG/CHC gateways, long biosecurity timelines and UAE export timing.',
    h1: 'Pet relocation from Dubai to New Zealand',
    heroAlt: 'Dog with New Zealand flag cue ready for export from Dubai to New Zealand',
    intro:
      'Dubai to New Zealand is an MPI biosecurity timeline, often measured in months, not a swapped New Zealand→Dubai arrival story. New Zealand’s cat and dog import conditions are among the strictest in this tranche: approved-country status, veterinary checks, and post-arrival controls are set by the Ministry for Primary Industries, and some origins are simply not practical until the pet has completed time in an approved place. Seed arrival cities are Auckland, Wellington and Christchurch; the live-animal product leaving Dubai (Air New Zealand, Emirates or Qantas in our seed — all cargo-flagged) has to match a real MPI permit. We do not recast this page as UAE import, rabies-free-origin inbound, or a cost-band article.',
    snippetQuestion: 'Can I just book a cargo flight from Dubai to Auckland for my dog?',
    snippetAnswer:
      'Not as a first step. MPI import conditions and permit timing decide whether the movement is even possible. Only then do you time the MOCCAE export certificate and a cargo product into AKL, WLG or CHC.',
    hubCardDesc: 'MPI-first biosecurity into AKL/WLG/CHC — long-lead export, not UAE import.',
    destinationRules: {
      authorityHint: 'New Zealand Ministry for Primary Industries (MPI) — importing cats and dogs',
      bullets: [
        'Read the current MPI cat-and-dog import health standard and permit process before you promise a date. Some countries/residency histories are not eligible for direct export.',
        'Expect a destination-backwards calendar: MPI permit and any pre-export isolation or testing, then UAE export certification, then the airline booking.',
        'Arrival gateways in the seed are AKL, WLG and CHC. Confirm which airport MPI and the carrier will actually use for live animals on your permit.',
        'Do not copy UAE inbound titer/permit wording onto this page. New Zealand’s rabies and parasite rules are MPI’s, not MOCCAE’s.',
        'No fee numerals. MPI, quarantine and airline charges are confirmed on official pages and at booking.',
      ],
      verifyNote:
        'Start at mpi.govt.nz cat-and-dog import pages. Rules change. Dubai Pet Relocation is not MPI.',
    },
    faqs: [
      {
        question: 'Is Dubai→New Zealand the reverse of New Zealand→Dubai?',
        answer:
          'No. The live inbound page is about a rabies-free origin entering the UAE. This page is MPI import from the UAE — a different authority, timeline and failure mode.',
      },
      {
        question: 'Which New Zealand airports are in the seed?',
        answer:
          'AKL (Auckland), WLG (Wellington) and CHC (Christchurch). Confirm live-animal arrival handling; not every passenger flight can carry the consignment.',
      },
      {
        question: 'Which airlines seed on Dubai to New Zealand?',
        answer:
          'Air New Zealand, Emirates and Qantas all seed as cargo. Confirm current policy. We do not claim partnership or cabin eligibility.',
      },
      {
        question: 'What UAE paperwork is required to leave Dubai?',
        answer:
          'A MOCCAE export health certificate timed to the MPI permit — not a MOCCAE import permit for entering the UAE.',
      },
      {
        question: 'How do I get a Dubai to New Zealand quote?',
        answer:
          'Get Route Checked or WhatsApp +971504782999 with residency history, species, breed and earliest month you can travel. Quote-only; many MPI files are long-lead.',
      },
    ],
  },
]
