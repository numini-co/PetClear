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
    rulesSpecialties:
      'France → Dubai specialises around a French official-veterinarian export file that must then satisfy UAE entry, not around an EU pet-passport hop. A vétérinaire sanitaire can endorse origin health papers that name the animal, the ISO microchip, and the vaccines, but those papers only matter in Dubai if they line up with a MOCCAE import permit that is still valid when the crate lands. That permit is valid for 30 days from issuance; the pet must enter the UAE inside that window. When a rabies antibody titer is required, the blood sample must be taken within 90 days before travel and read at least 0.5 IU/ml — a pre-travel sample window, not a wait-after-draw rule. Confirm on the official MOCCAE portal whether this French origin is currently treated as titer-exempt before you skip the lab. Specialty versus other EU outbounds into the UAE: Paris Charles de Gaulle (CDG) is the working long-haul live-animal factory, while Orly (ORY), Lyon (LYS) and Nice (NCE) are seed alternates that often lack the same cargo desk. Air France seed mode is cabin-or-cargo, yet UAE entry for most dogs and cats is still manifest cargo via Dubai International (DXB) or Al Maktoum / Dubai World Central (DWC). Etihad language into Abu Dhabi (AUH) is an airline- and OD-specific exception, not a Paris default. PetClear is not affiliated with MOCCAE, Air France, or any Gulf carrier — confirm current policy on the live itinerary.',
    difficulties:
      'The French inbound file usually breaks on airport fantasy and clock collision, not on a missing stamp alone. Families book a passenger seat out of Nice-Côte d’Azur because the villa is in Antibes, then discover NCE has no live-animal product on the week they fly, while CDG cargo would have worked. Others treat Orly like a second Charles de Gaulle: ORY is in the seed, but city-airport handling is not automatic crate acceptance. Air France cabin products inside Schengen do not authorise cabin into Dubai; Emirates, Etihad and Qatar Airways seed as cargo on this corridor, and Qatar via Doha adds a live-animal connection you must confirm. Permit timing fails when the MOCCAE import permit is issued, then the family slips the flight past the 30-day validity. Titer timing fails when someone draws blood early and treats the result as a wait-after-draw project, so the sample is older than 90 days before travel when the crate finally moves. Chip mismatches between a French identification document and the MOCCAE file strand animals at cargo. Do not invent MOCCAE or CDG release fee bands — confirm official portal amounts and quote via Get Route Checked or WhatsApp +971504782999.',
    howItWorks:
      'Scenario: a family leaving the 6th arrondissement of Lyon for Dubai Hills, one medium dog, one cat. Month −4: decide whether the crate truly exports from Lyon–Saint-Exupéry or must reposition to Paris Charles de Gaulle; do not promise a Nice departure because a cousin has a Côte d’Azur flat. Confirm whether a rabies titer is required for this French origin on the current MOCCAE portal. If yes, schedule the blood draw so the sample date will still sit within 90 days before the eventual travel date and keep the ≥0.5 IU/ml result with the file. On a France file, confirm the ISO microchip precedes the rabies vaccination that will be cited for UAE import. Month −3 to −2: start the MOCCAE import permit so issuance leaves enough of the 30-day validity for the booked cargo date, and hold a French official-vet appointment that can still be valid on departure. Week −3: lock Air France, Emirates, Etihad or Qatar Airways live-animal acceptance for France → UAE — Air France cabin-or-cargo seed, Gulf rows cargo, all unverified on this page. Week −1: parasite treatments per the current portal checklist, crate fit, and cargo booking confirmation. Arrival in the UAE is a DXB or DWC cargo and veterinary release pathway for most consignments, not a stroll through passenger baggage reclaim. This is a planning narrative, not a guaranteed SLA.',
    airportsNarrative:
      'French seed export airports are Paris Charles de Gaulle (CDG), Paris Orly (ORY), Lyon (LYS) and Nice (NCE). CDG is the primary long-haul pet factory: cargo infrastructure, handler coverage, and the usual Roissy live-animal path toward the Gulf. ORY sits on the same city but is a different airport with a different cargo culture — do not treat an Orly passenger ticket as a CDG crate booking. LYS is the honest alternate for Rhône-Alpes families when the carrier’s live-animal desk exists; many files still truck or fly the crate to CDG rather than invent a Lyon long-haul product. NCE is the Riviera trap: tourist seats are plentiful, live-animal desks are not. On a France inbound, DXB is the name on the human boarding pass; the crate still usually clears Roissy-to-Dubai cargo, not the arrivals hall. DWC on a France file is usually an Emirates SkyCargo-style clearance, not a second passenger terminal in Dubai. Abu Dhabi (AUH) matters only when the itinerary is genuinely Etihad — confirm that product; it is not a default Paris arrival. Write the same IATA on the booking, the French certificate, and the MOCCAE file.',
    airlinesNarrative:
      'Seed airlines on the France block are Air France (cabin-or-cargo), Emirates (cargo), Etihad (cargo) and Qatar Airways (cargo). Every row remains verificationStatus unverified until a first-party pet-policy URL is checked for the exact France → Dubai origin-destination pair. Air France is the home-carrier temptation: European cabin language does not become cabin into Dubai. UAE entry for most dogs and cats is manifest cargo under IATA live-animal conditions. Emirates itineraries that end in Dubai generally stay cargo — confirm the current Emirates policy rather than a blog screenshot. Etihad may publish cabin language into AUH on some small-pet products; treat that as an exception to verify, never as a CDG default. Qatar Airways seed mode is cargo and often implies a Doha connection, which adds a live-animal transfer you must confirm rather than assume. This page lists corridor modes; it does not own a sitewide “which airline allows pets to Dubai” chooser. PetClear displays no carrier logos as partnership marks, claims no affiliation, and never calls a carrier MOCCAE-approved. Confirm current policy before you pay for a crate or a ticket.',
    faqs: [
      {
        question: 'Which French airports actually export pets toward Dubai?',
        answer:
          'Paris Charles de Gaulle (CDG) is the primary long-haul seed. Paris Orly (ORY), Lyon (LYS) and Nice (NCE) are alternates only when the carrier and handler confirm a live-animal desk. Presence in the seed is not automatic crate acceptance — especially on a Riviera passenger flight.',
      },
      {
        question: 'Does a Nice or Orly passenger ticket include a crate desk?',
        answer:
          'Not by default. NCE and ORY sit in the seed as alternates. Many long-haul pet files still reposition to CDG. Confirm the live-animal product on the exact flight number before you promise a Côte d’Azur or Orly departure.',
      },
      {
        question: 'Will the pet clear with me at Dubai passenger arrivals?',
        answer:
          'Usually not on a cargo consignment. Manifest cargo is processed through cargo and veterinary release pathways associated with DXB or DWC, not the passenger baggage hall. Ask the handler where to collect after MOCCAE release.',
      },
      {
        question: 'Can Air France cabin the dog all the way into Dubai?',
        answer:
          'Do not assume cabin into Dubai. Air France seeds as cabin-or-cargo; UAE entry default is still manifest cargo. Emirates, Etihad and Qatar Airways seed as cargo. Confirm the live origin-destination policy — rows here remain unverified.',
      },
      {
        question: 'How long does the MOCCAE import permit last on a France departure?',
        answer:
          '30 days from the date of issuance. The pet must enter the UAE inside that window. Do not plan around a 90-day permit myth, and do not treat a French EU passport as a substitute for the permit.',
      },
      {
        question: 'When must the rabies titer blood be drawn for France to Dubai?',
        answer:
          'When a titer is required, the sample must be taken within 90 days before travel and read at least 0.5 IU/ml. Confirm exemption on the current MOCCAE portal before you skip the lab. This is a pre-travel sample window, not a wait-after-draw rule.',
      },
      {
        question: 'Is a French pet passport enough for UAE entry?',
        answer:
          'No. An EU pet passport helps identification and vaccine history, but UAE entry is a MOCCAE import-permit file plus origin health papers that match the microchip. The passport does not replace the 30-day permit or cargo acceptance.',
      },
      {
        question: 'How do I get a quote for France to Dubai pet relocation?',
        answer:
          'France–Dubai package or government fee bands are not printed on this corridor page. The cost-driver teaser lives at /guides/pet-relocation-cost-dubai/. For a CDG-dated quote, use Get Route Checked or WhatsApp +971504782999 with species, breed, weight and whether the crate truly leaves Paris or Lyon.',
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
    rulesSpecialties:
      'Dubai → France is planned destination-backwards from a French TRAVELLERS point of entry, not from a UAE import checklist. The European Commission non-commercial pet-movement building blocks apply at the arrival airport: ISO microchip before the rabies vaccination used for entry, a valid rabies course (including the wait after a primary vaccination where that rule applies), and an EU animal health certificate issued by an official or authorised veterinarian inside the short entry validity window — commonly discussed as about ten days for entry, always verify live. Source-of-truth currently lists the UAE among third countries whose dogs, cats and ferrets are exempt from rabies antibody titration for non-commercial EU entry; listings change, so re-check the Commission page before you skip a titer. Non-commercial movement usually caps five pets per traveller; more can trip commercial or Balai rules. Only after those French dates are stable should you request MOCCAE exit documentation. Export-certificate validity is commonly a short window cited at 30 days from issuance at a high level — verify on the MOCCAE portal. Do not paste a MOCCAE import-permit essay onto this outbound page. Specialty of the French gateway: Paris Charles de Gaulle is the working long-haul veterinary border, not a Nice holiday arrival.',
    difficulties:
      'Outbound France fails when families treat CDG like a passenger convenience instead of the veterinary border that actually inspects the crate. Booking a Nice (NCE) or Orly (ORY) arrival because relatives will collect on the Côte d’Azur, then discovering the airline has no live-animal product there, leaves a valid EU certificate pointing at the wrong ramp. Others chase a MOCCAE import permit that is irrelevant when leaving Dubai, burning days that should have gone to the EU animal health certificate. Export-certificate timing fails when the UAE vet issues papers too early and the 30-day-from-issuance window (verify on portal) dies before departure. Air France cabin-or-cargo seed language on France-side products does not automatically mean cabin from Dubai; Emirates and Qatar Airways seed as cargo leaving the UAE. A Doha connection adds a live-animal transfer you must confirm. Skipping a titer on a stale Commission screenshot is another trap. Collecting in Lyon after a CDG cargo arrival is a ground problem, not a second airport claim. A TGV ticket from Roissy does not convert Orly into the named point of entry. No invented French or MOCCAE fee numerals — Get Route Checked or WhatsApp +971504782999.',
    howItWorks:
      'Scenario: a household leaving Dubai Marina for a long let in Lyon’s Croix-Rousse, one dog. Month −4: lock the French arrival city and the honest gateway — CDG unless a carrier and French border post both accept ORY, LYS or NCE for live animals. Decide whether the French arrival is non-commercial or commercial/Balai, then re-read the live Commission titration list for UAE-origin pets. Month −3: make sure the ISO microchip precedes the rabies vaccination on the record and that any booster waiting periods will finish before certificate week. Month −2: engage the authorised-vet path for the EU animal health certificate and, in parallel, shortlist Air France, Emirates, Etihad or Qatar Airways products leaving Dubai International (DXB), Al Maktoum / Dubai World Central (DWC) or Abu Dhabi (AUH). Confirm current policy; every seed row is unverified. Weeks −3 to −2: once French dates are firm, apply for MOCCAE export/exit veterinary documentation so the export certificate still covers departure. Week −1: crate check and any parasite treatments the destination or airline still requires. Arrival day in France is an EU-entry and CDG (or confirmed alternate) live-animal story — not a UAE cargo-release narrative. This timeline is a planning sketch, not a promised duration.',
    airportsNarrative:
      'French arrival seed airports are Paris Charles de Gaulle (CDG), Paris Orly (ORY), Lyon (LYS) and Nice (NCE). CDG is the usual long-haul pet arrival: veterinary controls, cargo handling, and the airport most Gulf and Air France live-animal products actually name. ORY is the same city on paper and a different operational question — confirm live-animal arrival before you tell family to wait at Orly. LYS is attractive for a Rhône-Alpes homecoming only when the carrier’s pet product and the French point of entry both work; many files still land CDG and continue by road. NCE is the holiday-collection fantasy: Riviera passenger density does not equal a crate desk. UAE departure side: DXB is common on passenger tickets even when the animal moves as cargo or hold depending on the product leaving Dubai. DWC is cargo-centric on many SkyCargo-style consignments. AUH is the Etihad alternate — confirm the outbound pet product, which can differ from whatever you used inbound. Airport presence in the seed is not automatic acceptance. Leaving the UAE, treat Dubai International (DXB) as the passenger-ticket airport that often still ships the animal as cargo, Al Maktoum / Dubai World Central (DWC) as the SkyCargo-style departure when that product is booked, and Abu Dhabi (AUH) only when Etihad is truly on the ticket. A family that flew themselves into CDG Terminal 1 will not collect a crate at the same door. Name the same French IATA on the EU certificate and the airway bill.',
    airlinesNarrative:
      'Seed carriers on the France block, now read outbound, are Air France (cabin-or-cargo), Emirates (cargo), Etihad (cargo) and Qatar Airways (cargo). From Dubai each product must be re-confirmed for UAE → France; inbound acceptance does not transfer. Air France is the home-carrier pull into CDG, but cabin-or-cargo seed mode is not a promise of cabin leaving Dubai — read the live AF pet page for this OD, including breed and crate limits, before you brief family to meet you at a passenger gate. Emirates seed mode is cargo — do not invent hold-baggage eligibility from a screenshot of a different city pair. Etihad requires an explicit cabin-versus-cargo check on Dubai or Abu Dhabi to France routings; an AUH exception, if any, does not rewrite CDG veterinary entry. Qatar via Doha adds a second live-animal handling you must confirm rather than treat as a hidden AF flight. All rows stay unverified until a first-party check. This corridor page names OD carriers; it does not steal a sitewide airline-chooser FAQ. PetClear has no airline affiliation and publishes no partnership logos. Quote-only packages via Get Route Checked or WhatsApp +971504782999.',
    faqs: [
      {
        question: 'Is Dubai to France just France to Dubai with the names swapped?',
        answer:
          'No. Outbound planning starts with EU entry documents and a French gateway that actually accepts live animals, then UAE export paperwork. Inbound owns the MOCCAE import permit and UAE cargo release. Swapping country names is not a file.',
      },
      {
        question: 'Do I need a MOCCAE import permit to fly from Dubai to Paris?',
        answer:
          'No. A MOCCAE import permit is for entering the UAE. Leaving Dubai needs UAE export/exit veterinary documentation timed to the EU animal health certificate. Confirm the current MOCCAE digital-services pathway.',
      },
      {
        question: 'Which French airport should the crate actually land at?',
        answer:
          'Plan Paris Charles de Gaulle (CDG) unless the carrier and the French veterinary border both accept Orly, Lyon or Nice for your product. Do not promise a Nice collection because the house is in Cannes.',
      },
      {
        question: 'Does France still skip a rabies titer for pets coming from the UAE?',
        answer:
          'For non-commercial EU entry, source-of-truth currently lists the UAE as titration-exempt. Listings change. Verify the live European Commission list before you skip a titer, and follow microchip, vaccine and certificate rules either way.',
      },
      {
        question: 'Can we land the crate in Nice and take the train to Lyon?',
        answer:
          'Only if a live-animal product into NCE exists and the EU certificate names that point of entry. Default planning is CDG. A train after a confirmed CDG cargo arrival is a ground choice, not a second airport claim.',
      },
      {
        question: 'What UAE paper do I show on departure day to France?',
        answer:
          'The MOCCAE export health certificate (exit pathway), aligned to the EU certificate dates — not an import permit. Validity is commonly a short window; verify on the portal before you book.',
      },
      {
        question: 'Does an Air France cabin seat from Dubai change EU entry rules?',
        answer:
          'No. Cabin versus cargo is an airline product question. EU entry still needs the animal health certificate, microchip and vaccine sequence. Confirm Air France’s live Dubai → France pet policy; seed mode is cabin-or-cargo and unverified.',
      },
      {
        question: 'What drives the cost of a Dubai to France pet export?',
        answer:
          'A Dubai–Paris export quote stays off this page. Read /guides/pet-relocation-cost-dubai/ for the drivers, then send pet details and the French city via Get Route Checked or WhatsApp +971504782999 — we will not invent a CDG or MOCCAE figure here.',
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
    rulesSpecialties:
      'Turkey → Dubai is a Turkish official-veterinary export into a UAE import file. Türkiye is not an EU member state, so this corridor does not run on an EU animal health certificate or on EU third-country titration language. Origin papers typically come through the Ministry of Agriculture and Forestry / official veterinarian path that names the ISO microchip, rabies vaccination, and the animal that will travel — confirm the current Turkish export endorsement, not a downloaded EU passport template. On the UAE side the clocks that cannot slip are the same inbound locks as any third-country origin: a MOCCAE import permit valid 30 days from issuance, with the pet inside the UAE before that window lapses, and — when a rabies titer is required — a blood sample taken within 90 days before travel reading at least 0.5 IU/ml. Confirm exemption on the official MOCCAE portal; do not invent a Turkish exempt claim and do not paste EU Commission listing text as if it applied to Turkish origin. Specialty versus a French inbound: two Istanbul airports with different operators, a tourism airport in Antalya, and a low-cost carrier seeded as confirm. Cabin into Dubai is not the default. Cargo clearance is the working assumption at DXB or DWC.',
    difficulties:
      'Turkish inbound files fail on airport identity and on low-cost assumptions more often than on a missing vaccine sticker. Istanbul Airport (IST) and Sabiha Gökçen (SAW) are not interchangeable live-animal desks: SAW sits on the Asian side with a different operator, and a cheap passenger hop from SAW does not become an IST cargo booking. Antalya (AYT) is the holiday trap — summer tourist seats do not prove a crate product exists that week. Pegasus is seeded as confirm: do not buy a LCC ticket and hope the pet is accepted. Turkish Airlines seeds as cabin-or-cargo, which still does not authorise cabin into Dubai; Emirates seeds as cargo. Families also mis-apply EU titer-exemption talk because Turkey is “in Europe” on a map: UAE import titer rules are a MOCCAE portal question, not a Commission listing. Permit timing still kills files when the MOCCAE import permit’s 30-day validity expires after a delayed IST slot. Drawing titer blood too early, then treating the result as a wait-after-draw project, pushes the sample outside 90 days before travel. No invented AED bands — Get Route Checked or WhatsApp +971504782999.',
    howItWorks:
      'Scenario: a family leaving Kadıköy for JVC with one dog. Month −4: decide the honest export airport. Default planning is Istanbul Airport (IST). Treat SAW and AYT as unconfirmed until the carrier’s live-animal desk says yes. Confirm on the MOCCAE portal whether a rabies titer is required for this Turkish origin. If yes, book the blood draw so the sample date remains within 90 days before the travel date you actually fly, and keep the ≥0.5 IU/ml result. On a Turkey file, confirm the ISO microchip precedes the rabies vaccination that will be cited for UAE import — an EU passport template is the wrong form. In parallel, ask a Turkish official veterinarian what export endorsement the current ministry path expects — not an EU pet-movement form. Month −3 to −2: apply for the MOCCAE import permit so the 30-day validity still covers the cargo date, and hold the Turkish health-certificate appointment inside its own short window. Week −3: lock Turkish Airlines or Emirates acceptance (Pegasus only if live policy confirms). All seed rows are unverified. Week −1: parasite treatments per the UAE portal checklist and crate fit. Istanbul consignments almost always release at DXB or DWC cargo, not at passenger reclaim. This is a planning narrative, not a guaranteed timetable.',
    airportsNarrative:
      'Turkish seed export airports are Istanbul Airport (IST), Sabiha Gökçen (SAW) and Antalya (AYT). IST is the working long-haul live-animal gateway: new-airport cargo infrastructure and the usual Turkish Airlines / Emirates long-haul path toward the UAE. SAW is a second Istanbul code on the Asian shore with a different operator and a heavier low-cost mix — do not assume SAW mirrors IST handling. AYT is the Mediterranean tourism airport; it is in the seed as an alternate, not as a proven summer crate factory. On the UAE side, Dubai International (DXB) is the passenger name families know, but manifest cargo typically clears through cargo and veterinary release pathways, not the arrivals hall. DWC on a Turkey file is a cargo village drive, not a reason to send family to DXB Terminal 3. Abu Dhabi (AUH) is relevant only when the itinerary is genuinely Etihad — Etihad is not on the Turkey seed airline list, so do not invent an AUH default from this corridor. Write the same IATA on the Turkish export paper, the airway bill, and the MOCCAE file. IST cargo handlers and DXB cargo village are different buildings with different opening hours; do not tell a cousin to wait at Dubai passenger arrivals because the Turkish ticket said DXB. If the consignment is booked DWC, collection is a different drive again. Never invent AUH as a Turkey-seed default.',
    airlinesNarrative:
      'Seed airlines on the Turkey block are Turkish Airlines (cabin-or-cargo), Emirates (cargo) and Pegasus (confirm). Every row remains unverified against a first-party pet-policy URL for the exact Turkey → Dubai pair. Turkish Airlines is the home-carrier temptation out of IST: cabin-or-cargo seed mode describes what the carrier may offer on some products, not a right to cabin into Dubai. UAE entry for most dogs and cats is still manifest cargo. Emirates seed mode is cargo — confirm the current Emirates policy for IST (or SAW/AYT if you truly have a product there). Pegasus is the failure-mode airline on this corridor: seed mode is confirm, so do not treat a low-cost Istanbul–Dubai seat as pet acceptance. This page lists OD modes; it does not own the sitewide “which airline to Dubai allows pets” question. PetClear claims no affiliation, displays no partnership logos, and never describes a carrier as MOCCAE-approved. Confirm current policy before you crate. A Turkish Airlines Europe cabin story from IST to a Schengen city does not travel with you onto an IST–DXB cargo booking. If Emirates is the chosen row, confirm whether the crate is labelled DXB or DWC before anyone books a hotel near Terminal 3. Pegasus remains the airline you verify last, after a real live-animal product exists on Turkish Airlines or Emirates. Quote-only via Get Route Checked or WhatsApp +971504782999.',
    faqs: [
      {
        question: 'Should the crate leave from IST or Sabiha Gökçen?',
        answer:
          'IST is the primary long-haul seed. SAW is a different Istanbul airport with a different operator. Confirm live-animal handling before you choose the Asian-side code. Antalya (AYT) needs the same explicit confirmation.',
      },
      {
        question: 'Does Pegasus take pets from Istanbul to Dubai?',
        answer:
          'Seed mode is confirm. Do not book assuming acceptance. Turkish Airlines seeds as cabin-or-cargo; Emirates seeds as cargo. Confirm the live policy for the exact flight — rows here remain unverified.',
      },
      {
        question: 'Is Turkey treated as an EU origin for UAE import?',
        answer:
          'No. Türkiye is not in the EU pet-movement system. UAE entry is a MOCCAE import-permit file. Do not paste EU titration-exemption language onto a Turkish origin. Confirm any titer exemption on the MOCCAE portal.',
      },
      {
        question: 'How long is the MOCCAE import permit from a Turkish departure?',
        answer:
          '30 days from issuance. The pet must enter the UAE inside that window. A delayed IST cargo slot after issuance is a classic way to burn the permit.',
      },
      {
        question: 'When is the rabies titer sample taken for Turkey to Dubai?',
        answer:
          'If a titer is required, draw the sample within 90 days before travel and obtain at least 0.5 IU/ml. Confirm the requirement on the current MOCCAE portal. This is a pre-travel sample window, not a wait-after-draw rule.',
      },
      {
        question: 'Can I use a Turkish pet passport instead of MOCCAE papers?',
        answer:
          'Identification and vaccine history help the file, but they do not replace the MOCCAE import permit or UAE cargo acceptance. Origin health papers must match the microchip and the permit. Confirm the current Turkish export endorsement separately.',
      },
      {
        question: 'Will the pet come out at DXB passenger reclaim from Istanbul?',
        answer:
          'Usually not on manifest cargo. Expect cargo and veterinary release pathways at DXB or DWC. Your handler tells you where to collect after MOCCAE release — not the passenger baggage belt.',
      },
      {
        question: 'How do I get a Turkey to Dubai pet relocation quote?',
        answer:
          'Istanbul–Dubai quotes are not listed as package bands here. Cost drivers sit on /guides/pet-relocation-cost-dubai/. Share IST (or a confirmed SAW/AYT) dates and pet details via Get Route Checked or WhatsApp +971504782999.',
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
    rulesSpecialties:
      'Dubai → Turkey is destination-backwards from Turkish veterinary entry, not from EU third-country building blocks and not from a UAE import-permit essay. The authority to verify is the Ministry of Agriculture and Forestry (tarimorman.gov.tr) plus the veterinary border at the named arrival airport. Typical file pieces — confirm live, do not treat this as a published fee or form list — include an ISO microchip, a current rabies vaccination, any import permission or advance notification the ministry currently requires from the UAE, and an official health certificate inside a short validity window. Türkiye is not an EU member; Commission titration-exemption language that applies to non-commercial EU entry does not automatically apply at Istanbul. Do not skip a Turkish-required test because an EU listing mentions the UAE. Only after the Turkish dates and airport are stable should you request MOCCAE exit documentation. Export-certificate validity is commonly a short window cited at 30 days from issuance at a high level — verify on the MOCCAE portal. Specialty of this gateway: Istanbul Airport (IST) is the working long-haul inspection point; Sabiha Gökçen and Antalya are not default import ramps. Pegasus remains confirm. Cabin assumptions from a Turkish Airlines Europe product do not transfer from Dubai.',
    difficulties:
      'The distinctive outbound-Turkey failure is treating Türkiye as “Europe, so EU pet movement.” Families arrive at IST with an EU-style certificate mindset and no Turkish import permission, or they skip a test the ministry still wants because they read an EU third-country titer note that does not govern Istanbul. The second failure is airport identity: a SAW or AYT passenger ticket because the summer house is in Bodrum or the in-laws live on the Asian side, while the permit and the live-animal product name IST. Pegasus is seeded as confirm — a low-cost seat is not a crate booking. Others chase a MOCCAE import permit that is irrelevant when leaving Dubai, then request the UAE export certificate too early so the short validity window (commonly discussed as 30 days from issuance — verify on portal) expires. Emirates seed mode leaving the UAE is cargo; Turkish Airlines cabin-or-cargo seed language is not a cabin promise from Dubai. No invented ministry or airline fee numerals. Quote via Get Route Checked or WhatsApp +971504782999. A Beşiktaş collection plan does not turn SAW into the ministry inspection airport. If the Turkish permission names IST, the airway bill must name IST. Do not invent a Bodrum or Antalya veterinary border because the summer house is there.',
    howItWorks:
      'Scenario: a household leaving Downtown Dubai for Beşiktaş with one cat. Month −4: read the current Turkish import conditions for dogs and cats from the UAE. Confirm whether an advance permit, notification, or licensed-broker step is required, and name Istanbul Airport (IST) unless the ministry and the carrier both accept another seed airport. Do not start from a MOCCAE import-permit checklist. Month −3: align ISO microchip and rabies records to whatever the Turkish path currently asks; if a titer or extra test is required by Türkiye, schedule it to the ministry’s clock, not to an EU listing. Month −2: shortlist Turkish Airlines or Emirates products leaving DXB, DWC or AUH that accept the live animal into IST. Treat Pegasus as unconfirmed. All seed rows are unverified — confirm current policy. Weeks −3 to −2: once IST dates are firm, apply for MOCCAE export/exit veterinary documentation so the export certificate still covers departure. Week −1: crate check and any treatments the destination or airline still requires. Arrival day is a Turkish veterinary-border story at IST, not a UAE cargo-release narrative and not an EU free-movement stamp. This is a planning sketch, not a promised SLA.',
    airportsNarrative:
      'Turkish arrival seed airports are Istanbul Airport (IST), Sabiha Gökçen (SAW) and Antalya (AYT). IST is the working long-haul import gateway: the airport most ministry files and Gulf or Turkish Airlines live-animal products can actually name. SAW is a second Istanbul code with a different operator and a heavier low-cost mix — treat it as unconfirmed for import unless both the ministry paperwork and the carrier’s live-animal desk agree. AYT is a tourism airport; a Bodrum or Antalya family collection is a ground transfer after IST unless you have written acceptance at AYT. UAE departure side: Dubai International (DXB) is common on passenger tickets even when the pet moves as cargo or hold depending on the product leaving Dubai. DWC leaving for France is a SkyCargo-style departure when that product is the one booked, not a passenger gate at CDG. Abu Dhabi (AUH) is an alternate when routing truly uses Etihad — Etihad is not on this country seed, so do not invent an AUH–IST default. Seed presence is not automatic live-animal acceptance. Outbound from the UAE, DXB passenger tickets still often move the animal as cargo; DWC is the SkyCargo-style alternative when that product is the one booked. Do not invent an Etihad AUH–IST default on a country seed that does not list Etihad. Tell collectors to go to IST live-animal / cargo instructions, not the IST passenger hall, unless the carrier’s product says otherwise.',
    airlinesNarrative:
      'Seed airlines, read outbound, are Turkish Airlines (cabin-or-cargo), Emirates (cargo) and Pegasus (confirm). From Dubai each product must be re-confirmed for UAE → Türkiye. Inbound acceptance on a Turkey → Dubai ticket does not transfer. Turkish Airlines is the home-carrier pull into IST, but cabin-or-cargo seed mode is not a cabin promise leaving Dubai. Emirates seed mode is cargo — do not invent cabin eligibility. Pegasus remains confirm and is the airline most likely to strand a family who booked a cheap passenger seat. All rows stay verificationStatus unverified with “confirm current policy” until a first-party check. This page does not own a sitewide airline-chooser FAQ. PetClear has no airline affiliation, publishes no partnership logos, and never claims a carrier is ministry-approved. Packages are quote-only via Get Route Checked or WhatsApp +971504782999. Read Turkish Airlines’ current UAE–Türkiye pet page for this OD, including whether cabin, hold or cargo applies leaving Dubai — the IST-side cabin-or-cargo seed is not the answer. Emirates cargo from DXB or DWC into IST is the planning default until a first-party page says otherwise. If someone forwards a Pegasus booking reference, treat it as a passenger ticket until the live policy confirms a crate. This page does not own a sitewide airline-chooser FAQ.',
    faqs: [
      {
        question: 'Is Dubai to Turkey the reverse of Turkey to Dubai?',
        answer:
          'No. Outbound is a Turkish veterinary-import file aimed at IST. Inbound is a MOCCAE import permit and UAE cargo release. The two pages do not share a checklist.',
      },
      {
        question: 'Does Turkey follow EU titer-exempt rules for pets from the UAE?',
        answer:
          'Do not assume EU listings apply at Istanbul. Türkiye is not in the EU non-commercial pet-movement system. Confirm Turkish veterinary tests and permits separately. Commission titration notes do not govern this destination.',
      },
      {
        question: 'Which Turkish airport should the pet arrive at from Dubai?',
        answer:
          'Plan Istanbul Airport (IST) unless your import permission names another port and the carrier’s live-animal desk agrees. SAW and AYT are seed alternates, not default inspection airports.',
      },
      {
        question: 'What UAE paper do I need to leave Dubai for Istanbul?',
        answer:
          'A MOCCAE export health certificate timed to the Turkish entry window — not a MOCCAE import permit. Confirm the current digital-services pathway and the short validity window on the portal.',
      },
      {
        question: 'Can Pegasus carry the crate from Dubai to Türkiye?',
        answer:
          'Seed mode is confirm. Do not plan on it. Turkish Airlines seeds as cabin-or-cargo; Emirates seeds as cargo. Confirm the live origin-destination policy before you buy a seat.',
      },
      {
        question: 'Do I need a Turkish import permit before the UAE export certificate?',
        answer:
          'Plan destination-backwards: confirm the current ministry entry process first, including any advance permission, then time the MOCCAE export certificate to those dates. We do not invent a form name or a fee.',
      },
      {
        question: 'Is an EU-style pet passport enough at IST?',
        answer:
          'No. A passport is not EU free movement into Türkiye and is not a substitute for Turkish veterinary entry conditions. Name the same airport on the permission and the airway bill.',
      },
      {
        question: 'What drives the cost of a Dubai to Turkey pet export?',
        answer:
          'A Dubai–Istanbul export quote is not a published ministry or package band. See /guides/pet-relocation-cost-dubai/ for drivers, then Get Route Checked or WhatsApp +971504782999 with pet details and the IST date the permit actually names.',
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
    rulesSpecialties:
      'Spain → Dubai is a Spanish official-veterinarian export that must then satisfy UAE entry. An EU pet passport is useful identification on the Iberian side; it is not a UAE import document. Origin papers need the ISO microchip, the rabies vaccination used for import, and a government-endorsed health certificate that still matches the animal when the crate leaves Madrid-Barajas (MAD) or Barcelona-El Prat (BCN). Spanish inbound clocks are still UAE clocks: MOCCAE import permit valid 30 days from issuance, pet in the UAE before it lapses, and — when a titer is required — a sample taken within 90 days before travel reading at least 0.5 IU/ml. Confirm exemption on the MOCCAE portal; do not invent a Spanish exempt claim. Specialty versus a Paris file: Spain splits long-haul gravity between MAD (Iberia hub) and BCN (tourist and Gulf density), with Málaga (AGP) as the Costa del Sol trap. Iberia seeds as cabin-or-cargo; Vueling seeds as confirm; Emirates and Qatar Airways seed as cargo. Cabin into Dubai is not the default. Clearance is cargo-default at DXB or DWC. PetClear is not affiliated with Iberia, Vueling, or MOCCAE.',
    difficulties:
      'Spanish inbound files break on the MAD versus BCN argument and on the Costa del Sol passenger habit. Families living in Marbella book AGP because the airport is twenty minutes from the villa, then find no live-animal product on that date while MAD cargo would have worked. Others pick BCN because the family is Catalan, then discover the chosen Gulf flight’s crate desk is in Madrid that week. Vueling is seeded as confirm: a Barcelona–something cheap seat is not pet acceptance toward Dubai. Iberia cabin products inside Spain do not authorise cabin into Dubai; Emirates and Qatar Airways seed as cargo, and a Doha connection adds a live-animal transfer. Permit timing fails when the MOCCAE import permit is issued and the family then slips past the 30-day validity for a later Iberia slot. Spanish titer timing fails when the lab date is treated as a wait-after-draw project and the sample is older than 90 days before the MAD or BCN cargo date. Chip mismatches between a Spanish identification document and the MOCCAE file strand crates at cargo. No invented fee numerals — Get Route Checked or WhatsApp +971504782999.',
    howItWorks:
      'Scenario: a family leaving Valencia for Arabian Ranches, one dog, deciding whether to truck to Madrid or fly the owner through Barcelona. Month −4: pick the honest export airport. Default planning is MAD or BCN. Treat AGP as unconfirmed until the carrier’s live-animal desk says yes. Confirm on the MOCCAE portal whether a rabies titer is required for this Spanish origin. If Spain needs a titer, book the draw so the sample still sits inside 90 days before the real MAD or BCN date and keep the ≥0.5 IU/ml result. On a Spain file, confirm the ISO microchip precedes the rabies vaccination that will be cited for UAE import. Month −3 to −2: start the MOCCAE import permit so the 30-day validity still covers cargo day, and hold a Spanish official-vet appointment that can still be valid at MAD or BCN. Week −3: lock Iberia, Emirates or Qatar Airways acceptance. Treat Vueling as unconfirmed. All seed rows are unverified. Week −1 on a Spain file: portal-timed parasite treatments and a crate that MAD or BCN cargo will actually accept. Madrid or Barcelona consignments almost always release at DXB or DWC cargo, not at passenger reclaim. This is a planning narrative, not a guaranteed SLA.',
    airportsNarrative:
      'Spanish seed export airports are Madrid (MAD), Barcelona (BCN) and Málaga (AGP). MAD is the Iberia long-haul hub and the airport most likely to have a weekday crate desk toward the Gulf. BCN is the second long-haul seed: El Prat handles serious cargo, but not every Barcelona passenger flight is a pet product — confirm the exact service. AGP is the Costa del Sol alternate; it is in the seed so we can name it, not so you can assume a Málaga–Dubai crate. On a Spanish inbound, DXB is the passenger brand on the human ticket; the crate still usually clears cargo, not the arrivals hall. DWC on a Spanish file is a SkyCargo-style clearance when that product is booked, separate from Barajas or El Prat. Abu Dhabi (AUH) matters when the itinerary is genuinely Etihad — Etihad is not on the Spain seed airline list, so do not invent an AUH default from Madrid. Write the same IATA on the Spanish certificate, the booking, and the MOCCAE file. A Madrid cargo label and a Barcelona passenger ticket are not the same file. If the MOCCAE permit and the Spanish certificate say MAD, do not let the family fly themselves from BCN and expect the crate to follow. On arrival, DXB cargo village and DWC are different collection drives; AUH is not a Spain-seed default.',
    airlinesNarrative:
      'Seed airlines on the Spain block are Iberia (cabin-or-cargo), Emirates (cargo), Vueling (confirm) and Qatar Airways (cargo). Every row remains unverified for the exact Spain → Dubai pair. Iberia is the home-carrier temptation out of MAD: cabin-or-cargo seed mode is not a right to cabin into Dubai. UAE entry for most dogs and cats is manifest cargo. Emirates seed mode is cargo — confirm the current policy for MAD or BCN. Vueling is the Spanish failure-mode carrier: seed confirm, so do not treat a Barcelona low-cost seat as acceptance. Qatar Airways seed mode is cargo and may imply a Doha connection, which is a second live-animal handling you must confirm. This page lists corridor modes; it does not own the sitewide airline-chooser question. PetClear displays no logos as partnership marks and never calls a carrier MOCCAE-approved. Confirm current policy before you crate. Iberia’s MAD hub is the product you confirm first for a weekday crate; a Barcelona Iberia connection is a second live-animal handling, not a free upgrade. Emirates cargo from MAD or BCN must name the same IATA as the MOCCAE file. Qatar via Doha is a transfer, not an Iberia codeshare you can ignore. Vueling stays confirm. Quote-only via Get Route Checked or WhatsApp +971504782999.',
    faqs: [
      {
        question: 'Should the crate leave Madrid, Barcelona or Málaga?',
        answer:
          'MAD and BCN are the usual long-haul seeds. AGP needs explicit live-animal confirmation. Do not assume a Costa del Sol passenger flight can carry the crate just because Málaga is in the seed.',
      },
      {
        question: 'Does Vueling take pets from Spain to Dubai?',
        answer:
          'Seed mode is confirm. Do not assume acceptance. Iberia seeds as cabin-or-cargo; Emirates and Qatar Airways seed as cargo. Confirm the live origin-destination policy — rows remain unverified.',
      },
      {
        question: 'Will the pet clear at DXB passenger arrivals from Madrid?',
        answer:
          'Usually not on manifest cargo. Expect cargo and veterinary release pathways at DXB or DWC. Ask the handler where to collect after MOCCAE release.',
      },
      {
        question: 'Can Iberia cabin the dog into Dubai from Barajas?',
        answer:
          'Do not assume cabin into Dubai. Iberia seed mode is cabin-or-cargo; UAE entry default is still manifest cargo. Confirm the live Iberia policy for Spain → UAE.',
      },
      {
        question: 'How long is the MOCCAE import permit on a Spanish departure?',
        answer:
          '30 days from issuance. The pet must enter the UAE inside that window. A slipped MAD cargo date after issuance is a common way to burn the permit.',
      },
      {
        question: 'When should the titer blood be drawn for Spain to Dubai?',
        answer:
          'If required, sample within 90 days before travel and obtain at least 0.5 IU/ml. Confirm exemption on the MOCCAE portal. This is a pre-travel sample window, not a wait-after-draw rule.',
      },
      {
        question: 'Is a Spanish EU pet passport enough for UAE entry?',
        answer:
          'No. The passport helps identification and vaccine history. UAE entry still needs a MOCCAE import permit and origin health papers that match the microchip. The passport does not replace cargo acceptance.',
      },
      {
        question: 'How do I get a Spain to Dubai pet relocation quote?',
        answer:
          'Spain–Dubai package figures are omitted here on purpose. Read /guides/pet-relocation-cost-dubai/, then request a quote via Get Route Checked or WhatsApp +971504782999 with MAD versus BCN.',
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
      'Dubai to Spain is EU-certificate work aimed at Madrid or Barcelona, then a MOCCAE export exam and a live-animal product leaving the UAE. It is not Spain→Dubai reversed. Iberia may offer cabin or cargo on some products; Emirates and Qatar Airways seed as cargo; Vueling is confirm. Do not promise Málaga arrival unless the carrier and EU TRAVELLERS point of entry both work for live animals.',
    snippetQuestion: 'How do I take a pet from Dubai to Spain?',
    snippetAnswer:
      'Complete the EU animal health certificate file, then UAE export papers, then a booking into MAD or BCN. Not a MOCCAE import permit.',
    hubCardDesc: 'EU certificate into MAD/BCN — Spanish arrival, destination-backwards.',
    destinationRules: EU_DEST('Spain', 'MAD, BCN, AGP'),
    rulesSpecialties:
      'Dubai → Spain is planned destination-backwards from a Spanish TRAVELLERS point of entry, usually Madrid-Barajas or Barcelona-El Prat. The shared EU third-country building blocks apply: ISO microchip before the rabies vaccination used for entry, a valid rabies course including the wait after a primary vaccination where that rule applies, and an EU animal health certificate issued by an official or authorised veterinarian inside the short entry validity window. SOT currently lists the UAE as titration-exempt for non-commercial entry into Spain — still open the live Commission page before you skip a lab. Non-commercial movement usually caps five pets per traveller. Only after Spanish dates are stable should you request MOCCAE exit documentation. UAE export-certificate validity toward Spain is commonly a short window discussed as 30 days from issuance — confirm on the MOCCAE portal, not a blog. Do not paste a MOCCAE import-permit essay here. Specialty versus a Paris arrival: Spain’s gravity splits between MAD (Iberia T4 culture) and BCN (El Prat, different handler), with AGP as the Costa collection fantasy. Vueling is confirm. Iberia cabin-or-cargo seed language is not a cabin promise from Dubai. Name Madrid or Barcelona on the EU certificate before anyone requests UAE exit papers; a Costa del Sol address is not a point of entry.',
    difficulties:
      'Outbound Spain fails on the Málaga promise and on the Madrid-versus-Barcelona family argument. Relatives will collect in Marbella, so someone books AGP, then the EU certificate and the airline product only work at MAD. Catalan families push BCN while the only confirmed live-animal arrival that week is Barajas. Vueling remains confirm — a cheap El Prat seat is not a crate booking from Dubai. Others chase a MOCCAE import permit that does not apply when leaving the UAE, or they issue the export certificate too early and watch the short validity window (commonly 30 days from issuance — verify on portal) expire. Emirates and Qatar Airways seed as cargo leaving Dubai; a Doha connection is a second live-animal handling. Skipping a titer on a stale Commission screenshot is a separate trap. Iberia cabin-or-cargo seed mode on Spain-side products does not automatically mean cabin from DXB. No invented AENA or MOCCAE fee numerals. Quote via Get Route Checked or WhatsApp +971504782999. An Iberia MAD arrival with family waiting at El Prat is the same class of error as an AGP fantasy. Brief collectors on the airport that is printed on the EU certificate, then arrange the AVE or a van. Do not invent an AENA live-animal desk at a tourist airport because the villa WhatsApp group voted for it.',
    howItWorks:
      'Scenario: a household leaving Dubai Creek Harbour for a flat in Valencia, one dog, arguing whether family should collect in Madrid or Barcelona. Month −4: lock the Spanish arrival city and the honest gateway — MAD or BCN unless the carrier and the Spanish point of entry both accept AGP. Decide whether the Spanish arrival is non-commercial or commercial/Balai, then re-read the live Commission titration list for UAE-origin pets. Month −3 for Spain: make the ISO microchip and rabies record ready for an EU certificate that will name MAD or BCN, and finish any primary-course wait. Month −2: engage the authorised-vet path for the EU animal health certificate and shortlist Iberia, Emirates or Qatar Airways products leaving DXB, DWC or AUH. Treat Vueling as unconfirmed. All seed rows are unverified. Weeks −3 to −2: once Spanish dates are firm, apply for MOCCAE export/exit veterinary documentation so the export certificate still covers departure. Week −1: crate check and any destination or airline treatments still required. Arrival day in Spain is an EU-entry story at MAD or BCN (or a confirmed AGP), not a UAE cargo-release narrative. This is a planning sketch, not a promised duration. If Valencia family will collect, plan the road from MAD or BCN after the crate is released — do not add AGP to the certificate as a convenience code.',
    airportsNarrative:
      'Spanish arrival seed airports are Madrid (MAD), Barcelona (BCN) and Málaga (AGP). MAD is the usual Iberia long-haul live-animal arrival and the airport most Gulf cargo products can name without a fight. BCN is a real second gateway when the carrier’s pet product and the Spanish veterinary border both work at El Prat — confirm rather than assume because the family is Catalan. AGP is the Costa del Sol collection fantasy: seed presence is not a Málaga import desk. UAE departure toward Spain: a DXB passenger ticket often still ships the animal as cargo or hold depending on the Iberia or Gulf product. DWC leaving for Türkiye is a cargo departure alternative to DXB, still aimed at IST inspection. Abu Dhabi (AUH) is the Etihad alternate; Etihad is not on the Spain seed list, so do not invent an AUH–MAD default. Choosing MAD versus BCN should follow handler coverage and the live booking, not a copy-paste from the inbound Spain → Dubai export story. Leaving Dubai, DXB passenger tickets still often ship the animal as cargo; DWC is the SkyCargo-style alternative. Do not invent an Etihad AUH–MAD default on a Spain seed that does not list Etihad. Barajas cargo and El Prat cargo are different collection briefings; send the collector the IATA that is on the EU certificate.',
    airlinesNarrative:
      'Seed carriers, read outbound, are Iberia (cabin-or-cargo), Emirates (cargo), Vueling (confirm) and Qatar Airways (cargo). From Dubai each product must be re-confirmed for UAE → Spain. Iberia is the home-carrier pull into MAD, but cabin-or-cargo seed mode is not a cabin promise leaving Dubai. Emirates seed mode is cargo — do not invent hold-baggage eligibility. Qatar via Doha adds connection risk. Vueling remains confirm and should not appear in a plan as the crate carrier. All rows stay unverified with “confirm current policy” until a first-party check. This Spain outbound page names Iberia, Emirates, Vueling and Qatar modes; it does not steal a sitewide airline-chooser FAQ. PetClear has no airline affiliation and publishes no partnership logos. Packages are quote-only via Get Route Checked or WhatsApp +971504782999. Confirm Iberia’s live Dubai–Madrid (or Dubai–Barcelona) pet page, including whether cabin, hold or cargo applies leaving the UAE. Emirates cargo into MAD is a different handler briefing from Emirates cargo into BCN. Qatar via Doha is a second live-animal ramp. Vueling is not a planning carrier. This page names OD modes; it does not steal a sitewide airline-chooser FAQ. Quote-only via Get Route Checked or WhatsApp +971504782999.',
    faqs: [
      {
        question: 'Is Dubai to Spain the reverse of Spain to Dubai?',
        answer:
          'No. Outbound is EU entry at a Spanish gateway that accepts live animals, then UAE export papers. Inbound is a MOCCAE import permit and UAE cargo release.',
      },
      {
        question: 'Do I need a MOCCAE import permit to leave Dubai for Madrid?',
        answer:
          'No. Import permits are for entering the UAE. Leaving Dubai needs a MOCCAE export health certificate timed to the EU animal health certificate. Confirm the current portal pathway.',
      },
      {
        question: 'Can the crate arrive in Málaga from Dubai?',
        answer:
          'Only if the airline and the live-animal handler accept AGP and the EU certificate names that point of entry. Default planning is MAD or BCN. A Costa collection is usually a road transfer after Madrid or Barcelona.',
      },
      {
        question: 'Does Spain require a rabies titer from the UAE?',
        answer:
          'For non-commercial EU entry, source-of-truth currently treats the UAE as titration-exempt. Verify the live Commission list before you skip a titer. Follow microchip, vaccine and certificate rules either way.',
      },
      {
        question: 'Madrid or Barcelona for a Valencia family?',
        answer:
          'Choose the gateway the carrier’s pet product and the Spanish veterinary border both support that week. Geography is secondary. Confirm before you print labels or brief grandparents.',
      },
      {
        question: 'What UAE paper do I need on departure day to Spain?',
        answer:
          'The MOCCAE export health certificate aligned to the EU certificate dates — not an import permit. Validity is commonly a short window; verify on the portal before you book.',
      },
      {
        question: 'Can Vueling bring the pet from Dubai to El Prat?',
        answer:
          'Seed mode is confirm. Do not plan on it. Iberia seeds as cabin-or-cargo; Emirates and Qatar Airways seed as cargo. Confirm the live policy for the exact pair.',
      },
      {
        question: 'What drives the cost of a Dubai to Spain pet export?',
        answer:
          'Dubai–Spain export quotes stay off-page. Cost drivers: /guides/pet-relocation-cost-dubai/. Get Route Checked or WhatsApp +971504782999 once MAD or BCN is the honest gateway.',
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
    rulesSpecialties:
      'The Netherlands → Dubai corridor has one seed export code: Amsterdam Schiphol (AMS). There is no Rotterdam or Eindhoven pet-export airport in the seed, so a rejected crate size or a closed live-animal desk at Schiphol is not a problem you solve by inventing a second Dutch gateway. Origin papers still need a Dutch official-veterinarian path: ISO microchip, the rabies vaccination used for UAE import, and a health certificate that matches the animal on cargo day. An EU pet passport helps identification; it is not a UAE import document. The UAE clocks are inbound-standard: a MOCCAE import permit valid 30 days from issuance, pet in the UAE before that window lapses, and — when a titer is required — a blood sample taken within 90 days before travel reading at least 0.5 IU/ml. Confirm exemption on the MOCCAE portal; do not invent a Dutch exempt claim. Specialty versus Paris or Madrid: KLM is the home-carrier temptation (cabin-or-cargo seed) on a single mega-hub, while Emirates and Etihad seed as cargo. Cabin into Dubai is not the default. Clearance is cargo-default at DXB or DWC. AUH appears only when the itinerary is genuinely Etihad. PetClear is not affiliated with KLM, Schiphol, or MOCCAE.',
    difficulties:
      'Dutch inbound files fail because there is nowhere else to go. If KLM’s live-animal desk at AMS declines the crate dimensions or the breed that week, the seed does not offer a second Dutch airport. Families still try to invent Eindhoven or Rotterdam “cargo” and waste a week. The second failure is cabin fantasy: KLM cabin products inside Europe do not authorise cabin into Dubai; Emirates and Etihad seed as cargo on this corridor. Etihad cabin language into AUH, if it exists at all for this OD, is an exception to confirm — not a Schiphol default. Permit timing fails when the MOCCAE import permit is issued and the family then waits for a preferred KLM bank that sits outside the 30-day validity. Titer timing fails when blood is drawn early and treated as a wait-after-draw project, so the sample is older than 90 days before travel when the crate finally moves. Chip mismatches between a Dutch identification document and the MOCCAE file strand animals in AMS cargo. Summer heat embargoes, if a carrier publishes them, are first-party only — do not invent one. No fee numerals. Get Route Checked or WhatsApp +971504782999.',
    howItWorks:
      'Scenario: a family leaving Utrecht for Dubai Silicon Oasis, one medium dog, one cat, both intending to export from the only Dutch seed airport. Month −4: accept that Amsterdam Schiphol (AMS) is the export. Confirm on the MOCCAE portal whether a rabies titer is required for this Dutch origin. If yes, schedule the blood draw so the sample date will still sit within 90 days before the travel date you actually fly, and keep the ≥0.5 IU/ml result. On a Dutch file, confirm the ISO microchip precedes the rabies vaccination that will be cited for UAE import. Month −3 to −2: start the MOCCAE import permit so issuance leaves enough of the 30-day validity for the booked AMS cargo date, and hold a Dutch official-vet appointment that can still be valid on departure. Week −3: lock KLM, Emirates or Etihad live-animal acceptance for Netherlands → UAE. KLM seeds as cabin-or-cargo; Gulf rows seed as cargo; all unverified on this page. If AMS declines the crate, the conversation is a date change or a non-Dutch gateway — not a fictional Dutch alternate. Week −1: parasite treatments per the current portal checklist and crate fit. Arrival is DXB or DWC cargo and veterinary release for most consignments. This is a planning narrative, not a guaranteed SLA.',
    airportsNarrative:
      'The Netherlands seed list contains one airport: Amsterdam Schiphol (AMS). That single code is the entire Dutch export conversation on this corridor. Schiphol is a genuine long-haul live-animal hub — capable cargo infrastructure, KLM home base, Gulf wide-body density — but capability is not a booking. Confirm the live-animal product on the exact flight. Do not invent Rotterdam The Hague, Eindhoven, or Maastricht as pet-export airports for a Dubai file. On a Dutch inbound, DXB is only the passenger brand on the human ticket; the crate from AMS still usually clears cargo, not the arrivals hall. DWC on a Dutch file is the SkyCargo-style twin of AMS cargo — still not passenger reclaim. Abu Dhabi (AUH) matters when the itinerary uses Etihad; any cabin exception into AUH is airline- and OD-specific and must be confirmed. Write AMS on the Dutch certificate, the airway bill, and the MOCCAE file so collection instructions match reality. Because AMS is the only Dutch code, a declined Schiphol crate is a date, airline, or crate-size problem — not a reason to type RTM or EIN onto the MOCCAE file. On the UAE side, write DXB or DWC as the actual cargo clearance, not as a passenger meeting point. AUH appears only on a genuine Etihad ticket.',
    airlinesNarrative:
      'Seed airlines on the Netherlands block are KLM (cabin-or-cargo), Emirates (cargo) and Etihad (cargo). Every row remains unverified against a first-party pet-policy URL for the exact Netherlands → Dubai pair. KLM is the home-carrier temptation at AMS: cabin-or-cargo seed mode describes what the carrier may offer on some products, not a right to cabin into Dubai. UAE entry for most dogs and cats is still manifest cargo under IATA live-animal conditions. Emirates seed mode is cargo — confirm the current Emirates policy for AMS–UAE. Etihad seed mode is cargo, with any AUH cabin language treated as an exception to verify, never as a Schiphol default. This page lists corridor modes; it does not own the sitewide “which airline to Dubai allows pets” chooser. PetClear displays no carrier logos as partnership marks, claims no affiliation, and never calls a carrier MOCCAE-approved. Confirm current policy before you pay for a crate or a KLM ticket. Confirm KLM’s current AMS–UAE live-animal page for breed, crate and whether the product is cargo rather than a European cabin leftover. Emirates from Schiphol is cargo until a first-party page says otherwise. Etihad may mention AUH cabin on some small-pet products — verify that OD; it is not a KLM substitute. Quote-only via Get Route Checked or WhatsApp +971504782999.',
    faqs: [
      {
        question: 'Is Schiphol the only Dutch airport on this seed for Dubai?',
        answer:
          'Yes. AMS is the only Netherlands export code. Confirm live-animal handling at Schiphol for your carrier. Do not invent a Rotterdam or Eindhoven pet-export airport if AMS declines the crate.',
      },
      {
        question: 'Can KLM cabin the dog from Amsterdam into Dubai?',
        answer:
          'Do not assume cabin into Dubai. KLM seeds as cabin-or-cargo; UAE entry default is still manifest cargo. Emirates and Etihad seed as cargo. Confirm the live origin-destination policy — rows remain unverified.',
      },
      {
        question: 'Will the pet clear at DXB passenger arrivals from AMS?',
        answer:
          'Usually not on manifest cargo. Expect cargo and veterinary release pathways at DXB or DWC. Ask the handler where to collect after MOCCAE release — not the passenger baggage belt.',
      },
      {
        question: 'How long is the MOCCAE import permit from a Dutch departure?',
        answer:
          '30 days from issuance. The pet must enter the UAE inside that window. Waiting for a preferred KLM bank after issuance is a common way to burn the permit.',
      },
      {
        question: 'When must the titer sample be drawn for the Netherlands to Dubai?',
        answer:
          'If a titer is required, draw the sample within 90 days before travel and obtain at least 0.5 IU/ml. Confirm exemption on the MOCCAE portal. This is a pre-travel sample window, not a wait-after-draw rule.',
      },
      {
        question: 'Is a Dutch EU pet passport enough for UAE entry?',
        answer:
          'No. The passport helps identification and vaccine history. UAE entry still needs a MOCCAE import permit and origin health papers that match the microchip. The passport does not replace AMS cargo acceptance.',
      },
      {
        question: 'What if Schiphol refuses the crate dimensions that week?',
        answer:
          'The seed has no second Dutch airport. The conversation becomes a date change, a crate resize, or a non-Dutch gateway — not Rotterdam cargo folklore. Confirm KLM or Gulf live-animal rules before you rebuild the timeline.',
      },
      {
        question: 'How do I get a Netherlands to Dubai pet relocation quote?',
        answer:
          'Netherlands–Dubai quotes stay off this page: no package or government bands. The cost-driver article is /guides/pet-relocation-cost-dubai/. For a Schiphol-dated quote, use Get Route Checked or WhatsApp +971504782999.',
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
    rulesSpecialties:
      'Dubai → the Netherlands is planned destination-backwards from a single TRAVELLERS point of entry: Amsterdam Schiphol (AMS). The shared EU third-country building blocks apply at that airport: ISO microchip before the rabies vaccination used for entry, a valid rabies course including the wait after a primary vaccination where that rule applies, and an EU animal health certificate issued by an official or authorised veterinarian inside the short entry validity window. SOT currently lists the UAE as titration-exempt for non-commercial entry into the Netherlands — still open the live Commission page before you skip a lab. Non-commercial movement usually caps five pets per traveller; more can trip commercial or Balai rules. Only after AMS dates are stable should you request MOCCAE exit documentation. UAE export-certificate validity toward Schiphol is commonly a short window discussed as 30 days from issuance — confirm on the MOCCAE portal, not a blog. Do not paste a MOCCAE import-permit essay onto this outbound page. Specialty versus France or Spain: there is no second Dutch arrival code in the seed. If AMS live-animal handling is unavailable that week, you do not invent Eindhoven import. KLM cabin-or-cargo seed language is not a cabin promise from Dubai. Emirates and Etihad seed as cargo leaving the UAE.',
    difficulties:
      'Outbound Netherlands fails on the single-gateway constraint and on cabin folklore. Families book a random KLM passenger seat into AMS and assume Schiphol’s animal facilities will absorb an unmarked crate. Capability at the airport is not a booking. Others invent Rotterdam or Eindhoven “import” because someone will collect from Brabant. The seed has AMS only. A third failure is chasing a MOCCAE import permit that is irrelevant when leaving Dubai, then issuing the UAE export certificate too early so the short validity window (commonly 30 days from issuance — verify on portal) expires before the EU certificate and the AMS slot align. KLM cabin-or-cargo seed mode on Netherlands-side products does not automatically mean cabin from Dubai; Emirates and Etihad seed as cargo. Skipping a titer on a stale Commission screenshot is another trap. Compact geography helps after arrival — most Dutch cities are a short transfer from Schiphol — but that is a ground fact, not a reason to skip live-animal confirmation. No invented Schiphol or MOCCAE fee numerals. Get Route Checked or WhatsApp +971504782999. A Leiden or Utrecht home address does not create a second import airport. If AMS live-animal handling is closed that week, the honest options are a date change or a non-Dutch EU gateway — not Eindhoven folklore.',
    howItWorks:
      'Scenario: a household leaving Palm Jumeirah for a canal-side let in Leiden, one dog. Month −4: lock AMS as the arrival gateway. Decide whether the Dutch arrival is non-commercial or commercial/Balai, then re-read the live Commission titration list for UAE-origin pets. Do not start from a UAE import-permit checklist. Month −3 for the Netherlands: make the ISO microchip and rabies record ready for an AMS-named EU certificate, and finish any primary-course wait. Month −2: engage the authorised-vet path for the EU animal health certificate and shortlist KLM, Emirates or Etihad products leaving DXB, DWC or AUH that accept the live animal into AMS. Confirm current policy; every seed row is unverified. Weeks −3 to −2: once Dutch dates are firm, apply for MOCCAE export/exit veterinary documentation so the export certificate still covers departure. Week −1: crate check and any parasite treatments the destination or airline still requires. Arrival day in the Netherlands is an EU-entry and Schiphol live-animal story — not a UAE cargo-release narrative. Collection instructions come from the handler at AMS, not from passenger baggage reclaim folklore. This timeline is a planning sketch, not a promised duration. After AMS release, the drive to Leiden is a van problem. Keep AMS as the only IATA on the EU certificate unless you have deliberately changed country.',
    airportsNarrative:
      'The Netherlands arrival seed list is one code: Amsterdam Schiphol (AMS). That is the import gateway conversation. Schiphol can handle live animals, but airport presence is not automatic acceptance — the booking must be a pet product and the EU certificate must name this point of entry. Do not invent Rotterdam The Hague, Eindhoven, or Maastricht as pet-import airports on this corridor. Compact Dutch geography means most families can collect from AMS and continue by road; that convenience is not a second airport. UAE departure toward Amsterdam: a DXB passenger ticket often still ships the animal as cargo or hold depending on the KLM or Gulf product. DWC leaving for Spain is a SkyCargo-style origin, not an El Prat passenger convenience. Abu Dhabi (AUH) is the Etihad alternate — confirm the outbound pet product, which can differ from whatever you used inbound. Write AMS on the EU certificate, the airway bill, and the UAE export file. Leaving the UAE, DXB passenger tickets still often move the animal as cargo; DWC is the SkyCargo-style alternative; AUH is the Etihad alternate when that routing is real. Schiphol collection is a live-animal briefing, not a Terminal 2 hug at the belt. Do not print RTM or EIN on any paper in this file.',
    airlinesNarrative:
      'Seed carriers, read outbound, are KLM (cabin-or-cargo), Emirates (cargo) and Etihad (cargo). From Dubai each product must be re-confirmed for UAE → the Netherlands. Inbound acceptance on a Netherlands → Dubai ticket does not transfer. KLM is the home-carrier pull into AMS, but cabin-or-cargo seed mode is not a cabin promise leaving Dubai. Emirates seed mode is cargo — do not invent hold-baggage eligibility from a screenshot. Etihad requires an explicit cabin-versus-cargo check on Dubai or Abu Dhabi to Amsterdam routings. All rows stay verificationStatus unverified with “confirm current policy” until a first-party check. This Dutch outbound page names KLM, Emirates and Etihad modes; it does not steal a sitewide airline-chooser FAQ. PetClear has no airline affiliation and publishes no partnership logos. Packages are quote-only via Get Route Checked or WhatsApp +971504782999. Confirm KLM’s live Dubai–Amsterdam pet page for this OD: cabin-or-cargo seed language is not a cabin promise leaving DXB. Emirates cargo into AMS has its own handler path. Etihad from AUH, if used, must still land as a pet product at Schiphol, not as an unmarked hold bag. This page does not own a sitewide airline-chooser FAQ. Quote-only via Get Route Checked or WhatsApp +971504782999.',
    faqs: [
      {
        question: 'Is Dubai to the Netherlands just the inbound page reversed?',
        answer:
          'No. Outbound is EU entry at AMS plus UAE export papers. Inbound is a MOCCAE import permit and UAE cargo release. The checklists do not swap.',
      },
      {
        question: 'Do I need a MOCCAE import permit to fly from Dubai to Schiphol?',
        answer:
          'No. Import permits are for entering the UAE. Leaving Dubai needs a MOCCAE export health certificate timed to the EU animal health certificate. Confirm the current digital-services pathway.',
      },
      {
        question: 'Can we arrive at Rotterdam or Eindhoven instead of AMS?',
        answer:
          'Not on this seed. Amsterdam Schiphol is the only Dutch gateway listed. Do not invent a second import airport. A road transfer after AMS is a ground choice.',
      },
      {
        question: 'Does the Netherlands require a rabies titer from the UAE?',
        answer:
          'For non-commercial EU entry, source-of-truth currently treats the UAE as titration-exempt. Verify the live Commission list before you skip a titer. Follow microchip, vaccine and certificate rules either way.',
      },
      {
        question: 'Does Schiphol’s animal facility mean any KLM seat works?',
        answer:
          'No. Airport capability is not a booking. The ticket must be a live-animal product and the EU certificate must name AMS. Confirm KLM’s current Dubai → Amsterdam pet policy; seed mode is cabin-or-cargo and unverified.',
      },
      {
        question: 'What UAE paper do I need on departure day to Amsterdam?',
        answer:
          'The MOCCAE export health certificate aligned to the EU certificate dates — not an import permit. Validity is commonly a short window; verify on the portal before you book.',
      },
      {
        question: 'Can Emirates cabin the pet from Dubai to AMS?',
        answer:
          'Emirates seed mode on this corridor is cargo. Do not invent cabin eligibility. Etihad also seeds as cargo. Confirm the live policy for the exact pair.',
      },
      {
        question: 'What drives the cost of a Dubai to Netherlands pet export?',
        answer:
          'A Dubai–Amsterdam export quote is not printed here. Read /guides/pet-relocation-cost-dubai/ for drivers, then send pet details and the AMS date via Get Route Checked or WhatsApp +971504782999.',
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
    rulesSpecialties:
      'Italy → Dubai is an Italian official-veterinarian export that must then satisfy UAE entry, split between Rome Fiumicino (FCO) and Milan Malpensa (MXP). An EU pet passport helps identification; it is not a UAE import document. Origin papers need the ISO microchip, the rabies vaccination used for import, and a government-endorsed health certificate that still matches the animal when the crate leaves Fiumicino or Malpensa. Italian inbound clocks are still UAE clocks: MOCCAE import permit valid 30 days from issuance, pet in the UAE before it lapses, and — when a titer is required — a sample taken within 90 days before travel reading at least 0.5 IU/ml. Confirm exemption on the MOCCAE portal; do not invent an Italian exempt claim. Specialty versus a single-hub Dutch file: Italy’s north–south family argument is real, and Milan Linate (LIN) is a city-airport trap that is in the seed as an alternate, not as a long-haul crate factory. ITA Airways seeds as cabin-or-cargo — a young-brand policy you confirm, not assume. Emirates and Qatar Airways seed as cargo. Cabin into Dubai is not the default. Clearance is cargo-default at DXB or DWC.',
    difficulties:
      'Italian inbound files fail on the Rome-versus-Milan argument and on Linate folklore. A Milan family books LIN because it is twenty minutes from the apartment, then discovers the city airport has no live-animal product toward Dubai that week, while MXP cargo would have worked. A Roman family refuses Malpensa on principle and misses the only Gulf crate desk available. ITA Airways cabin language on European sectors does not authorise cabin into Dubai; Emirates and Qatar Airways seed as cargo, and a Doha connection adds a live-animal transfer. Permit timing fails when the MOCCAE import permit is issued and the family then waits for an ITA or Emirates bank that sits outside the 30-day validity. Italian titer timing fails when the lab date is treated as a wait-after-draw project and the sample is older than 90 days before the FCO or MXP cargo date. Chip mismatches between an Italian identification document and the MOCCAE file strand crates. ITA policy flux is a confirm-current-policy problem, not a reason to invent affiliation. No fee numerals. Get Route Checked or WhatsApp +971504782999. A Bologna truck to the wrong Milan airport is a week of delay: LIN is not MXP. If ITA cannot take the crate, switch to a confirmed Emirates or Qatar cargo product out of FCO or MXP rather than shopping Linate passenger seats.',
    howItWorks:
      'Scenario: a family leaving Bologna for Dubai Hills, arguing whether the crate should truck to Malpensa or ride south to Fiumicino. Month −4: pick the honest export airport. Default planning is FCO or MXP. Treat LIN as unconfirmed until the carrier’s live-animal desk says yes. Confirm on the MOCCAE portal whether a rabies titer is required for this Italian origin. If Italy needs a titer, book the draw so the sample still sits inside 90 days before the real FCO or MXP date and keep the ≥0.5 IU/ml result. On an Italy file, confirm the ISO microchip precedes the rabies vaccination that will be cited for UAE import. Month −3 to −2: start the MOCCAE import permit so the 30-day validity still covers cargo day, and hold an Italian official-vet appointment that can still be valid at FCO or MXP. Week −3: lock ITA Airways, Emirates or Qatar Airways acceptance. All seed rows are unverified. If ITA declines the crate, the conversation is Emirates or Qatar cargo — not a Linate passenger hop. Week −1 on an Italy file: portal-timed parasite treatments and a crate that FCO or MXP cargo will actually accept. Arrival is DXB or DWC cargo and veterinary release for most consignments. This is a planning narrative, not a guaranteed SLA.',
    airportsNarrative:
      'Italian seed export airports are Rome Fiumicino (FCO), Milan Malpensa (MXP) and Milan Linate (LIN). FCO is the central-and-south long-haul factory: ITA home station and a common Gulf cargo path. MXP is the northern long-haul factory: Malpensa cargo culture is not Linate, and most serious Milan pet files use MXP rather than the city airport. LIN is in the seed as an alternate with stricter confirmation — city-airport passenger convenience is not a crate desk. On an Italian inbound, DXB is the passenger brand on the human ticket; the crate still usually clears cargo, not the arrivals hall. DWC on an Italian file is a cargo clearance, not a Fiumicino-style passenger hall. Abu Dhabi (AUH) matters when the itinerary is genuinely Etihad — Etihad is not on the Italy seed airline list, so do not invent an AUH default from Rome. Write the same IATA on the Italian certificate, the booking, and the MOCCAE file. North-of-Apennines files usually mean MXP; Lazio and south usually mean FCO. Do not split the difference at LIN. On the UAE side, write DXB or DWC as the cargo clearance actually booked. AUH is not an Italy-seed default. A cousin waiting at Fiumicino Terminal 3 will not collect a Malpensa crate.',
    airlinesNarrative:
      'Seed airlines on the Italy block are ITA Airways (cabin-or-cargo), Emirates (cargo) and Qatar Airways (cargo). Every row remains unverified for the exact Italy → Dubai pair. ITA is the home-carrier temptation out of FCO: cabin-or-cargo seed mode is not a right to cabin into Dubai, and a post-rebrand policy page must be read for this OD rather than remembered from an older Alitalia rumour. UAE entry for most dogs and cats is manifest cargo. Emirates seed mode is cargo — confirm the current policy for FCO or MXP. Qatar Airways seed mode is cargo and may imply a Doha connection, which is a second live-animal handling you must confirm. This page lists corridor modes; it does not own the sitewide airline-chooser question. PetClear displays no logos as partnership marks and never calls a carrier MOCCAE-approved. Confirm current policy before you crate. Read ITA’s current Italy–UAE pet page — not an Alitalia forum post — for crate limits and whether the product is cargo. Emirates from FCO is a different desk from Emirates from MXP; name the same IATA on the MOCCAE file. Qatar via Doha is a transfer you confirm. Quote-only via Get Route Checked or WhatsApp +971504782999.',
    faqs: [
      {
        question: 'Can I export the crate from Milan Linate to Dubai?',
        answer:
          'LIN is in the seed as an alternate. Confirm the carrier’s live-animal desk. Many long-haul pet movements use Milan Malpensa (MXP) instead. Do not treat a Linate passenger ticket as a crate booking.',
      },
      {
        question: 'Fiumicino or Malpensa for a Bologna family?',
        answer:
          'Choose the gateway that actually has a live-animal product that week. FCO and MXP are both seed export airports. Geography is secondary to handler coverage. Confirm before you truck the crate.',
      },
      {
        question: 'Can ITA Airways cabin the dog into Dubai?',
        answer:
          'Do not assume cabin into Dubai. ITA seeds as cabin-or-cargo; UAE entry default is still manifest cargo. Emirates and Qatar Airways seed as cargo. Confirm the live policy — rows remain unverified.',
      },
      {
        question: 'Will the pet clear at DXB passenger arrivals from Rome?',
        answer:
          'Usually not on manifest cargo. Expect cargo and veterinary release pathways at DXB or DWC. Ask the handler where to collect after MOCCAE release.',
      },
      {
        question: 'How long is the MOCCAE import permit on an Italian departure?',
        answer:
          '30 days from issuance. The pet must enter the UAE inside that window. Waiting for a later ITA or Emirates bank after issuance is a common way to burn the permit.',
      },
      {
        question: 'When should the titer blood be drawn for Italy to Dubai?',
        answer:
          'If required, sample within 90 days before travel and obtain at least 0.5 IU/ml. Confirm exemption on the MOCCAE portal. This is a pre-travel sample window, not a wait-after-draw rule.',
      },
      {
        question: 'Is an Italian EU pet passport enough for UAE entry?',
        answer:
          'No. The passport helps identification and vaccine history. UAE entry still needs a MOCCAE import permit and origin health papers that match the microchip. The passport does not replace FCO or MXP cargo acceptance.',
      },
      {
        question: 'How do I get an Italy to Dubai pet relocation quote?',
        answer:
          'Italy–Dubai package bands are not published on this corridor page. Cost drivers live at /guides/pet-relocation-cost-dubai/. Quote via Get Route Checked or WhatsApp +971504782999 once you know FCO versus MXP.',
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
    rulesSpecialties:
      'Dubai → Italy is planned destination-backwards from an Italian TRAVELLERS point of entry, usually Rome Fiumicino (FCO) or Milan Malpensa (MXP). The shared EU third-country building blocks apply: ISO microchip before the rabies vaccination used for entry, a valid rabies course including the wait after a primary vaccination where that rule applies, and an EU animal health certificate issued by an official or authorised veterinarian inside the short entry validity window. SOT currently lists the UAE as titration-exempt for non-commercial entry into Italy — still open the live Commission page before you skip a lab. Non-commercial movement usually caps five pets per traveller. Only after Italian dates are stable should you request MOCCAE exit documentation. UAE export-certificate validity toward Fiumicino or Malpensa is commonly a short window discussed as 30 days from issuance — confirm on the MOCCAE portal. Do not paste a MOCCAE import-permit essay here. Specialty versus Amsterdam’s single code: Italy forces a north–south gateway choice, and Linate (LIN) is a city-airport arrival you must not promise. ITA Airways cabin-or-cargo seed language is not a cabin promise from Dubai. Emirates and Qatar Airways seed as cargo leaving the UAE.',
    difficulties:
      'Outbound Italy fails on the FCO-versus-MXP family split and on Linate convenience. Grandparents will collect in central Milan, so someone names LIN on a WhatsApp thread, then the EU certificate and the airline product only work at Malpensa. Roman relatives refuse a northern landing and miss the only confirmed Gulf arrival that week. Others chase a MOCCAE import permit that does not apply when leaving the UAE, or they issue the export certificate too early and watch the short validity window (commonly 30 days from issuance — verify on portal) expire. ITA policy must be read for the outbound OD — a remembered Alitalia cabin story is not a booking. Emirates and Qatar Airways seed as cargo leaving Dubai; a Doha connection is a second live-animal handling. Skipping a titer on a stale Commission screenshot is a separate trap. A high-speed train after a confirmed FCO or MXP cargo arrival is a ground choice, not a third airport. No invented ADR or MOCCAE fee numerals. Quote via Get Route Checked or WhatsApp +971504782999. A Frecciarossa ticket after FCO release is fine; printing LIN on the EU certificate because the hotel is near Linate is not. If ITA outbound from Dubai is unavailable that week, the fallback is a confirmed Emirates or Qatar cargo product into FCO or MXP, not a passenger hop into the city airport.',
    howItWorks:
      'Scenario: a household leaving Dubai Marina for a long let in Bologna, one dog, arguing Rome versus Milan for collection. Month −4: lock the Italian arrival city and the honest gateway — FCO or MXP unless the carrier and the Italian point of entry both accept LIN. Decide whether the Italian arrival is non-commercial or commercial/Balai, then re-read the live Commission titration list for UAE-origin pets. Month −3 for Italy: make the ISO microchip and rabies record ready for an FCO- or MXP-named EU certificate, and finish any primary-course wait. Month −2: engage the authorised-vet path for the EU animal health certificate and shortlist ITA Airways, Emirates or Qatar Airways products leaving DXB, DWC or AUH. All seed rows are unverified. Weeks −3 to −2: once Italian dates are firm, apply for MOCCAE export/exit veterinary documentation so the export certificate still covers departure. Week −1: crate check and any destination or airline treatments still required. Arrival day in Italy is an EU-entry story at FCO or MXP (or a confirmed LIN), not a UAE cargo-release narrative. This is a planning sketch, not a promised duration. Tell Bologna collectors which of FCO or MXP is on the certificate before they buy train tickets. Do not add LIN as a courtesy code.',
    airportsNarrative:
      'Italian arrival seed airports are Rome Fiumicino (FCO), Milan Malpensa (MXP) and Milan Linate (LIN). FCO is the usual central-and-south long-haul live-animal arrival. MXP is the northern long-haul arrival — Malpensa cargo culture, not the city airport. LIN is the convenience trap: seed presence is not a Linate import desk. Choosing FCO versus MXP should follow the carrier’s pet product, the Italian veterinary border, and who can actually collect the crate — not a copy-paste from the inbound Italy → Dubai export story. UAE departure toward Italy: a DXB passenger ticket often still ships the animal as cargo or hold depending on the ITA or Gulf product. DWC leaving for Amsterdam is a cargo origin that still has to land as a pet product at AMS. Abu Dhabi (AUH) is the Etihad alternate; Etihad is not on the Italy seed list, so do not invent an AUH–FCO default. Airport presence in the seed is not automatic acceptance. Leaving Dubai, DXB passenger tickets still often ship the animal as cargo; DWC is the SkyCargo-style alternative. Do not invent an Etihad AUH–FCO default on an Italy seed that does not list Etihad. Fiumicino cargo and Malpensa cargo are different collection briefings. Linate remains a confirmation problem, not a third long-haul factory.',
    airlinesNarrative:
      'Seed carriers, read outbound, are ITA Airways (cabin-or-cargo), Emirates (cargo) and Qatar Airways (cargo). From Dubai each product must be re-confirmed for UAE → Italy. ITA is the home-carrier pull into FCO, but cabin-or-cargo seed mode is not a cabin promise leaving Dubai, and the live ITA pet page — not an Alitalia memory — is the document to read. Emirates seed mode is cargo — do not invent hold-baggage eligibility. Qatar via Doha adds connection risk. All rows stay unverified with “confirm current policy” until a first-party check. This Italian outbound page names ITA, Emirates and Qatar modes; it does not steal a sitewide airline-chooser FAQ. PetClear has no airline affiliation and publishes no partnership logos. Packages are quote-only via Get Route Checked or WhatsApp +971504782999. Confirm ITA’s live Dubai–Rome or Dubai–Milan pet page for this OD, including cabin versus cargo leaving the UAE. Emirates cargo into FCO is not the same handler note as Emirates cargo into MXP. Qatar via Doha is a second ramp. This page names OD modes; it does not steal a sitewide airline-chooser FAQ. Quote-only via Get Route Checked or WhatsApp +971504782999.',
    faqs: [
      {
        question: 'Is Dubai to Italy the reverse of Italy to Dubai?',
        answer:
          'No. Outbound is EU entry at FCO or MXP plus UAE export papers. Inbound is a MOCCAE import permit and UAE cargo release. Swapping country names is not a file.',
      },
      {
        question: 'Do I need a MOCCAE import permit to leave Dubai for Rome?',
        answer:
          'No. Import permits are for entering the UAE. Leaving Dubai needs a MOCCAE export health certificate timed to the EU animal health certificate. Confirm the current portal pathway.',
      },
      {
        question: 'FCO or MXP for collection — and can we use Linate?',
        answer:
          'Choose Fiumicino or Malpensa based on the carrier’s pet product and who can collect. Treat Linate as unconfirmed unless the airline and the Italian border post both accept live animals there.',
      },
      {
        question: 'Does Italy require a rabies titer from the UAE?',
        answer:
          'For non-commercial EU entry, source-of-truth currently treats the UAE as titration-exempt. Verify the live Commission list before you skip a titer. Follow microchip, vaccine and certificate rules either way.',
      },
      {
        question: 'Can ITA cabin the pet from Dubai into Fiumicino?',
        answer:
          'Do not assume cabin. ITA seeds as cabin-or-cargo; confirm the live Dubai → Italy policy. Emirates and Qatar Airways seed as cargo. Rows on this page remain unverified.',
      },
      {
        question: 'What UAE paper do I need on departure day to Italy?',
        answer:
          'The MOCCAE export health certificate aligned to the EU certificate dates — not an import permit. Validity is commonly a short window; verify on the portal before you book.',
      },
      {
        question: 'Can we land at FCO and take the train to Milan?',
        answer:
          'A rail transfer after a confirmed Fiumicino cargo arrival is a ground choice. It does not turn LIN into an arrival airport and it does not replace naming the correct point of entry on the EU certificate.',
      },
      {
        question: 'What drives the cost of a Dubai to Italy pet export?',
        answer:
          'Dubai–Italy export pricing stays quote-only. See /guides/pet-relocation-cost-dubai/ for what moves the number, then WhatsApp +971504782999 or Get Route Checked with FCO versus MXP and pet details.',
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
    rulesSpecialties:
      'Ireland → Dubai is an Irish official-veterinarian export from an island with thin long-haul pet capacity, not a Ryanair cabin hop. Origin papers need the ISO microchip, the rabies vaccination used for UAE import, and a government-endorsed health certificate that still matches the animal when the crate leaves Dublin (DUB). An EU pet passport helps identification; it is not a UAE import document. Irish inbound clocks are still UAE clocks: MOCCAE import permit valid 30 days from issuance, pet in the UAE before it lapses, and — when a titer is required — a sample taken within 90 days before travel reading at least 0.5 IU/ml. Confirm exemption on the MOCCAE portal; do not invent an Irish exempt claim. Specialty versus continental EU inbounds: Ryanair is seeded as generally not accepting pets, Cork (ORK) is a seed alternate that often has no crate desk, and Aer Lingus seeds as cabin-or-cargo without becoming cabin into Dubai. Emirates seeds as cargo. Cabin into Dubai is not the default. Clearance is cargo-default at DXB or DWC. PetClear is not affiliated with Aer Lingus, Ryanair, Emirates, or MOCCAE.',
    difficulties:
      'Irish inbound files fail first on Ryanair culture. Families who fly themselves on a low-cost seat assume the dog can ride along; the seed says Ryanair is generally not pets. The second failure is Cork folklore: ORK is in the seed as an alternate, not as a proven long-haul crate factory. The third is capacity: Dublin has fewer Gulf live-animal banks than CDG or MAD, so a missed Aer Lingus or Emirates acceptance can push the family past the MOCCAE import permit’s 30-day validity while they wait for the next product. Aer Lingus cabin language on European or Atlantic-style products does not authorise cabin into Dubai; Emirates seeds as cargo. Irish titer timing fails when the lab date is treated as a wait-after-draw project and the sample is older than 90 days before the DUB cargo date. Chip mismatches between an Irish identification document and the MOCCAE file strand crates. Island logistics also mean a refused DUB crate is not solved by inventing Shannon as an export airport — Shannon is not in the seed. No fee numerals. Get Route Checked or WhatsApp +971504782999.',
    howItWorks:
      'Scenario: a family leaving Galway for Dubai Hills, one dog, hoping they can “just put him under the seat on Ryanair.” Month −4: retire that plan. Default export is Dublin (DUB). Treat Cork (ORK) as unconfirmed until a carrier’s live-animal desk says yes. Confirm on the MOCCAE portal whether a rabies titer is required for this Irish origin. If Ireland needs a titer, book the draw so the sample still sits inside 90 days before the real DUB date and keep the ≥0.5 IU/ml result. On an Ireland file, confirm the ISO microchip precedes the rabies vaccination that will be cited for UAE import. Month −3 to −2: start the MOCCAE import permit so the 30-day validity still covers a thinner DUB cargo calendar, and hold an Irish official-vet appointment that can still be valid on departure. Week −3: lock Aer Lingus or Emirates acceptance. Treat Ryanair as generally not pets. All seed rows are unverified. Week −1 on an Ireland file: portal-timed parasite treatments and a crate that DUB cargo will actually accept. Dublin consignments almost always release at DXB or DWC cargo, not at passenger reclaim. This is a planning narrative, not a guaranteed SLA.',
    airportsNarrative:
      'Irish seed export airports are Dublin (DUB) and Cork (ORK). DUB is the primary long-haul pet factory on the island: the airport most Aer Lingus and Emirates conversations can actually name. ORK is the Munster alternate; it is in the seed so we can name it, not so you can assume a Cork–Dubai crate. Shannon is not in the seed — do not invent it. On an Irish inbound, DXB is the passenger brand on the human ticket; the crate still usually clears cargo, not the arrivals hall. DWC on an Irish file is a cargo-village collection after a thin DUB bank, not Terminal 3. Abu Dhabi (AUH) matters when the itinerary is genuinely Etihad — Etihad is not on the Ireland seed airline list, so do not invent an AUH default from Dublin. Write the same IATA on the Irish certificate, the booking, and the MOCCAE file. Island geography means a refused Dublin product is a date or carrier problem, not a second-airport folklore problem. A Galway or Cork family still usually crates at DUB. Do not type SNN onto the MOCCAE file. On the UAE side, write DXB or DWC as the cargo clearance actually booked; passenger Terminal 3 is not the meeting point. AUH is not an Ireland-seed default.',
    airlinesNarrative:
      'Seed airlines on the Ireland block are Aer Lingus (cabin-or-cargo), Emirates (cargo) and Ryanair (generally not). Every row remains unverified for the exact Ireland → Dubai pair. Aer Lingus is the home-carrier temptation out of DUB: cabin-or-cargo seed mode is not a right to cabin into Dubai. UAE entry for most dogs and cats is still manifest cargo. Emirates seed mode is cargo — confirm the current policy for DUB (or ORK if you truly have a product there). Ryanair is the Irish failure-mode carrier: seed generally not accepting pets, so do not plan a low-cost cabin hop and do not brief the family that “everyone does it.” This page lists corridor modes; it does not own the sitewide “which airline to Dubai allows pets” chooser. PetClear displays no logos as partnership marks and never calls a carrier MOCCAE-approved. Confirm current policy before you crate. Confirm Aer Lingus’s current Ireland–UAE live-animal page — cabin-or-cargo seed language is not cabin into Dubai. Emirates from DUB is cargo until a first-party page says otherwise. Ryanair stays generally not pets even if the humans already bought seats. Quote-only via Get Route Checked or WhatsApp +971504782999.',
    faqs: [
      {
        question: 'Can Ryanair take the dog from Dublin to Dubai?',
        answer:
          'Do not plan on it. Ryanair seeds as generally not accepting pets. Use a carrier that publishes a live-animal product. Confirm current policy if someone told you otherwise — we do not plan on a Ryanair crate.',
      },
      {
        question: 'Dublin or Cork for the export?',
        answer:
          'DUB is the primary seed. ORK needs explicit live-animal confirmation. Do not assume a Munster passenger flight can carry the crate. Shannon is not in the seed.',
      },
      {
        question: 'Can Aer Lingus cabin the pet into Dubai?',
        answer:
          'Do not assume cabin into Dubai. Aer Lingus seeds as cabin-or-cargo; UAE entry default is still manifest cargo. Emirates seeds as cargo. Confirm the live origin-destination policy — rows remain unverified.',
      },
      {
        question: 'Will the pet clear at DXB passenger arrivals from Dublin?',
        answer:
          'Usually not on manifest cargo. Expect cargo and veterinary release pathways at DXB or DWC. Ask the handler where to collect after MOCCAE release.',
      },
      {
        question: 'How long is the MOCCAE import permit from an Irish departure?',
        answer:
          '30 days from issuance. The pet must enter the UAE inside that window. Dublin’s thinner live-animal calendar makes a slipped date after issuance especially costly.',
      },
      {
        question: 'When should the titer blood be drawn for Ireland to Dubai?',
        answer:
          'If required, sample within 90 days before travel and obtain at least 0.5 IU/ml. Confirm exemption on the MOCCAE portal. This is a pre-travel sample window, not a wait-after-draw rule.',
      },
      {
        question: 'Is an Irish EU pet passport enough for UAE entry?',
        answer:
          'No. The passport helps identification and vaccine history. UAE entry still needs a MOCCAE import permit and origin health papers that match the microchip. The passport does not replace DUB cargo acceptance.',
      },
      {
        question: 'How do I get an Ireland to Dubai pet relocation quote?',
        answer:
          'Ireland–Dubai quotes are not listed as bands on this page. The teaser sits at /guides/pet-relocation-cost-dubai/. Send DUB dates and pet details through Get Route Checked or WhatsApp +971504782999.',
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
    rulesSpecialties:
      'Dubai → Ireland is planned destination-backwards from an Irish TRAVELLERS point of entry, almost always Dublin (DUB). The shared EU third-country building blocks apply: ISO microchip before the rabies vaccination used for entry, a valid rabies course including the wait after a primary vaccination where that rule applies, and an EU animal health certificate issued by an official or authorised veterinarian inside the short entry validity window. SOT currently lists the UAE as titration-exempt for non-commercial entry into Ireland — still open the live Commission page before you skip a lab. Non-commercial movement usually caps five pets per traveller. Great Britain tapeworm (Echinococcus) rules do not automatically copy onto an Irish arrival; read the Irish/EU certificate notes for dogs rather than pasting a GOV.UK GB checklist. Only after Dublin dates are stable should you request MOCCAE exit documentation. UAE export-certificate validity toward Dublin is commonly a short window discussed as 30 days from issuance — confirm on the MOCCAE portal, not a blog. Do not paste a MOCCAE import-permit essay here. Specialty versus continental EU arrivals: island capacity is thinner, Cork (ORK) is unconfirmed unless live-animal import is real, and Ryanair is generally not pets. Aer Lingus cabin-or-cargo seed language is not a cabin promise from Dubai. Emirates seeds as cargo leaving the UAE.',
    difficulties:
      'Outbound Ireland fails on Ryanair folklore, on Cork promises, and on GB-rule copy-paste. Families who fly themselves on a low-cost seat assume the crate can follow; Ryanair seeds as generally not accepting pets. Others name ORK because the house is in West Cork, then discover the EU certificate and the airline product only work at Dublin. A third failure is pasting Great Britain tapeworm timing onto an Irish file without reading the Irish/EU notes — Ireland is in the EU pet-movement framework, not a GB arrival. Others chase a MOCCAE import permit that does not apply when leaving the UAE, or they issue the export certificate too early and watch the short validity window (commonly 30 days from issuance — verify on portal) expire while they wait for the next DUB live-animal bank. Aer Lingus cabin-or-cargo seed mode is not a cabin promise from Dubai; Emirates seeds as cargo. Skipping a titer on a stale Commission screenshot is a separate trap. Shannon is not in the seed. No invented DAA or MOCCAE fee numerals. Quote via Get Route Checked or WhatsApp +971504782999.',
    howItWorks:
      'Scenario: a household leaving Arabian Ranches for a return to Howth, one dog, with cousins offering to “just book Ryanair.” Month −4: retire that plan. Lock Dublin (DUB) as the arrival gateway unless a carrier and the Irish point of entry both accept Cork. Decide whether the Irish arrival is non-commercial or commercial/Balai, then re-read the live Commission titration list for UAE-origin pets. Read the Irish/EU certificate notes for dogs instead of a GB tapeworm printout. Month −3 for Ireland: make the ISO microchip and rabies record ready for a DUB-named EU certificate, and finish any primary-course wait. Month −2: engage the authorised-vet path for the EU animal health certificate and shortlist Aer Lingus or Emirates products leaving DXB, DWC or AUH. Treat Ryanair as generally not pets. All seed rows are unverified. Weeks −3 to −2: once Irish dates are firm, apply for MOCCAE export/exit veterinary documentation so the export certificate still covers a thinner DUB calendar. Week −1: crate check and any destination or airline treatments still required. Arrival day in Ireland is an EU-entry story at DUB, not a UAE cargo-release narrative. This is a planning sketch, not a promised duration.',
    airportsNarrative:
      'Irish arrival seed airports are Dublin (DUB) and Cork (ORK). DUB is the working long-haul live-animal arrival on the island — the airport most Aer Lingus and Emirates products can name. ORK is the Munster collection fantasy unless the carrier and the Irish veterinary border both accept live animals there. Shannon is not in the seed; do not invent it. Island geography means most families can collect from Dublin and continue by road to Cork, Galway or Belfast-bound connections; that convenience is not a second import airport. UAE departure toward Ireland: a DXB passenger ticket often still ships the animal as cargo or hold depending on the Aer Lingus or Emirates product. DWC leaving for Italy is a cargo origin aimed at FCO or MXP, not Linate. Abu Dhabi (AUH) is the Etihad alternate; Etihad is not on the Ireland seed list, so do not invent an AUH–DUB default. Airport presence in the seed is not automatic acceptance. Write DUB on the EU certificate unless ORK is truly confirmed. Leaving the UAE, DXB passenger tickets still often move the animal as cargo; DWC is the SkyCargo-style alternative. Do not invent an Etihad AUH–DUB default on an Ireland seed that does not list Etihad. Dublin live-animal collection is a cargo briefing. Cork remains a confirmation problem. Shannon is still not in the seed.',
    airlinesNarrative:
      'Seed carriers, read outbound, are Aer Lingus (cabin-or-cargo), Emirates (cargo) and Ryanair (generally not). From Dubai each product must be re-confirmed for UAE → Ireland. Aer Lingus is the home-carrier pull into DUB, but cabin-or-cargo seed mode is not a cabin promise leaving Dubai. Emirates seed mode is cargo — do not invent hold-baggage eligibility. Ryanair remains generally not pets and should not appear in a plan as the crate carrier, inbound or outbound. All rows stay unverified with “confirm current policy” until a first-party check. This Irish outbound page names Aer Lingus, Emirates and Ryanair modes; it does not steal a sitewide airline-chooser FAQ. PetClear has no airline affiliation and publishes no partnership logos. Packages are quote-only via Get Route Checked or WhatsApp +971504782999. Confirm Aer Lingus’s live Dubai–Dublin pet page for this OD: cabin-or-cargo seed language is not a cabin promise leaving DXB. Emirates cargo into DUB has its own handler path and a thinner weekday bank than CDG or MAD. Ryanair is not a planning carrier in either direction. This page does not own a sitewide airline-chooser FAQ. Quote-only via Get Route Checked or WhatsApp +971504782999.',
    faqs: [
      {
        question: 'Is Dubai to Ireland the reverse of Ireland to Dubai?',
        answer:
          'No. Outbound is EU entry at Dublin plus UAE export papers. Inbound is a MOCCAE import permit and UAE cargo release. Ryanair folklore is wrong in both directions.',
      },
      {
        question: 'Can Ryanair take the pet from Dubai to Dublin?',
        answer:
          'Seed: generally not pets. Confirm current policy if you were told otherwise — we do not plan on it. Aer Lingus seeds as cabin-or-cargo; Emirates seeds as cargo.',
      },
      {
        question: 'Do I need a MOCCAE import permit to leave Dubai for Ireland?',
        answer:
          'No. Import permits are for entering the UAE. Leaving Dubai needs a MOCCAE export health certificate timed to the EU animal health certificate. Confirm the current portal pathway.',
      },
      {
        question: 'Does Ireland require a rabies titer from the UAE?',
        answer:
          'For non-commercial EU entry, source-of-truth currently treats the UAE as titration-exempt. Verify the live Commission list before you skip a titer. Follow microchip, vaccine and certificate rules either way.',
      },
      {
        question: 'Can the crate arrive in Cork instead of Dublin?',
        answer:
          'Only if live-animal import at ORK is real for your carrier and the EU certificate names that point of entry. Default planning is DUB. A road transfer after Dublin is the usual Munster collection.',
      },
      {
        question: 'Do Great Britain tapeworm rules apply at Dublin?',
        answer:
          'Do not copy-paste a GOV.UK GB checklist onto an Irish arrival. Ireland is in the EU pet-movement framework. Read the Irish/EU certificate notes for dogs and confirm what that document actually requires.',
      },
      {
        question: 'What UAE paper do I need on departure day to Dublin?',
        answer:
          'The MOCCAE export health certificate aligned to the EU certificate dates — not an import permit. Validity is commonly a short window; verify on the portal before you book.',
      },
      {
        question: 'What drives the cost of a Dubai to Ireland pet export?',
        answer:
          'Dubai–Dublin export cost is quote-only. Drivers are explained at /guides/pet-relocation-cost-dubai/. Get Route Checked or WhatsApp +971504782999 with the DUB date and the pets that will travel.',
      },
    ],
  },
]
