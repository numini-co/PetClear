import type { RouteUniqueCopy } from './types.ts'

const EU_DEST = (country: string, airports: string): NonNullable<RouteUniqueCopy['destinationRules']> => ({
 authorityHint: `EU non-commercial pet movement into ${country} (European Commission) plus arrival-airport veterinary controls`,
 bullets: [
 `Plan ${country} / EU entry before requesting UAE export paperwork so certificates do not expire on the ramp.`,
 'Typical third-country building blocks: ISO microchip before rabies vaccination, valid rabies vaccination (21-day wait after a primary course), and an EU animal health certificate from an official/authorised vet inside the entry validity window (commonly 10 days for entry).',
 'SOT: the UAE is on the EU list of third countries whose dogs/cats/ferrets are exempt from rabies antibody titration for non-commercial entry — verify the current Commission listing before you skip a titer.',
 'Non-commercial rules usually cap five pets per traveller; more can trigger commercial/Balai rules.',
 `Arrival airports named for this corridor: ${airports}. Naming an airport here is not automatic live-animal acceptance.`,
 ],
 verifyNote:
 'Re-check European Commission pet-movement pages and the airline. Dubai Pet Relocation is not a government authority.',
})

export const EUROPE_COPY: RouteUniqueCopy[] = [
 {
 slug: 'france-to-dubai',
 countryKey: 'france',
 title: 'Pet Relocation France to Dubai: Certificate, Airlines and Timeline',
 meta: 'Moving a dog or cat from France to Dubai? Official vet certificate, MOCCAE permit valid 90 days, Air France and Emirates cargo. Get your route checked.',
 h1: 'Pet Relocation from France to Dubai',
 heroAlt: 'Dog with French flag cue ready for pet relocation from France to Dubai',
 intro:
 'Pet relocation from France to Dubai is usually a Paris file. Most dogs and cats leave as cargo from Paris Charles de Gaulle (CDG). Paris Orly (ORY), Lyon (LYS), Nice (NCE) and Marseille (MRS) count only when that airport accepts the crate on the day you need.\n\nThe French paperwork is an export health certificate from an official vet, then an endorsement your state veterinary service will confirm. We do not name a departmental office process that is not logged from a first-party page. The UAE side is a MOCCAE import permit valid for 90 days from issuance. The pet must enter the UAE inside that window. A French pet passport, or the animal health certificate used for travel inside Europe, does not replace either document. Confirm on the official MOCCAE portal whether this origin needs a titre.',
 snippetQuestion: 'What do I need to fly a pet from Paris to Dubai?',
 snippetAnswer:
 'You need French export papers, a live-animal booking, and a MOCCAE import permit that is still valid when the pet lands. The permit lasts 90 days from issuance. Paris Charles de Gaulle (CDG) is the airport to book first. Paris Orly (ORY), Lyon (LYS) and Nice (NCE) work only after that airport accepts the crate. Air France may offer cabin or cargo. Emirates, Etihad and Qatar Airways are listed as cargo. Plan cargo clearance at Dubai International (DXB) or Al Maktoum / Dubai World Central (DWC), then ask the handler where to collect after the veterinary release.',
 hubCardDesc: 'French export from Paris Charles de Gaulle into Dubai cargo, on a 90-day MOCCAE import permit.',
 rulesSpecialties:
 'France to Dubai is a Paris-led export into a UAE import, and it is not a copy of the Germany page. The French file starts with an official vet who examines the animal and writes the export health certificate for the UAE, not the Great Britain or EU pet-travel form used for a weekend in another EU country. Endorsement by the state veterinary service is a step your official vet authority will confirm. Do not treat a departmental acronym as a published checklist on this page.\n\nThe MOCCAE import permit is valid for 90 days from issuance. The pet must land inside that window. Check the official portal before you treat a French origin as exempt from a rabies titre. If a titre is required, the blood sample is taken within 90 days before travel and the result must be at least 0.5 IU/ml. That is the sample date, not a wait after the draw.\n\nCDG is the airport to plan first. ORY, LYS, NCE and MRS each need a live-animal yes. Emirates itineraries ending in Dubai are cargo. Air France and any KLM connection via Amsterdam stay on confirm current policy. If you may return to France later, the UAE is on the European Commission list that can skip a titre for non-commercial EU entry. That is the return rule. Read [Dubai to France](/routes/dubai-to-france/).',
 difficulties:
 'The booking usually fails on the airport. A passenger ticket from Nice (NCE) or Paris Orly (ORY) does not open a crate desk, and many long-haul pets still leave from Paris Charles de Gaulle (CDG). Lyon (LYS) is useful only when the carrier confirms a desk that week. Air France cabin rules inside Europe do not place the dog in the cabin into Dubai. Emirates, Etihad and Qatar Airways are listed as cargo, and a Qatar Airways connection in Doha needs its own live-animal acceptance. The permit fails when the flight slips past 90 days from issuance. The microchip on the French papers must be the chip on the MOCCAE file. In Dubai, collect from cargo at Dubai International (DXB) or Al Maktoum / Dubai World Central (DWC). Abu Dhabi (AUH) applies only to an Etihad itinerary. Tell us about your move before you pay for a seat the airline has not accepted for the animal.',
 howItWorks:
 'Document order for a French departure: ISO microchip before the rabies vaccine you will cite, rabies vaccination (21 days before travel when it is a primary course), MOCCAE import permit so the 90 days from issuance cover arrival, official vet examination and export certificate, endorsement confirmed by the French veterinary authority, cargo booking, then arrival release in Dubai.\n\nCharles de Gaulle direct, labelled typical rather than promised: a healthy adult dog already living in the Paris area, with a current rabies vaccine, often needs about 6 to 8 weeks for the permit, the certificate and a cargo slot. The tight document is the export certificate, which is issued close to the flight.\n\nLyon or Nice via a connection, also typical rather than promised: a household in Lyon or on the Cote d\'Azur often still sends the crate to CDG by road. Marseille (MRS) is the same kind of question. Book the passenger tickets only after the live-animal desk names the airport. If the certificate says CDG, a Nice passenger flight does not move the animal.\n\nCost drivers are crate size, cargo rate, French vet work and coordination. No package total and no euro figure are printed here. Confirm UAE government fees on the official MOCCAE portal. Quote after the eligibility check.',
 airportsNarrative:
 'French airports on this route are Paris Charles de Gaulle (CDG), Paris Orly (ORY), Lyon (LYS) and Nice (NCE). CDG is the long-haul cargo airport most trips toward the Gulf use. ORY is in the same city and a different operation, so an Orly ticket is not a Charles de Gaulle crate booking. Lyon can take a pet when the carrier confirms a live-animal desk, and many pets from eastern France still travel by road to CDG. Nice has frequent passenger flights and a thinner crate service, so confirm the flight before you rely on it. In the UAE, Dubai International (DXB) is often the name on the passenger ticket while the animal clears in cargo. Al Maktoum / Dubai World Central (DWC) is the other Dubai cargo clearance, including many Emirates cargo bookings. Abu Dhabi (AUH) is the arrival only when Etihad is the carrier. Put the same code on the French certificate, the airway bill and the MOCCAE file.',
 airlinesNarrative:
 'Carriers to ask about are Air France, Emirates and Etihad, plus a KLM connection via Amsterdam only if that airline confirms the animal. Confirm current policy before you pay. Air France cabin rules inside Europe do not become a cabin seat into Dubai. We do not state that Air France Cargo or KLM accepts pets on a Paris to Dubai sector until you have it from the airline for your date.\n\nEmirates itineraries ending in Dubai carry animals as cargo through SkyCargo, not in the cabin. Confirm whether the crate is labelled DXB or DWC before anyone books a hotel by the passenger terminal. Etihad is cargo into Dubai on this description. A limited cabin option into Abu Dhabi, if it exists on your dates, is an exception to confirm on the Etihad page. It is not the default from Paris. Qatar Airways via Doha adds a second handling. Dubai Pet Relocation coordinates the file. The airline decides whether the pet travels.',
 faqs: [
 {
 question: 'Which French airports actually export pets toward Dubai?',
 answer:
 'Paris Charles de Gaulle (CDG) is the airport to plan first. Paris Orly (ORY), Lyon (LYS) and Nice (NCE) can work after the airline and the handler confirm a live-animal desk on that date. A Riviera passenger flight does not include a crate. Ask for the flight number before you book family tickets around Nice or Orly. If that desk says no, move the crate to CDG.',
 },
 {
 question: 'Does a Nice or Orly passenger ticket include a crate desk?',
 answer:
 'A passenger ticket at Nice (NCE) or Paris Orly (ORY) does not include a crate desk. Both airports are alternates, and many long-haul pets still reposition to Paris Charles de Gaulle (CDG). Ask the carrier whether that flight number accepts a live animal before you promise a Nice or Orly departure. Lyon (LYS) needs the same check.',
 },
 {
 question: 'Will the pet clear with me at Dubai passenger arrivals?',
 answer:
 'On a cargo booking, the pet clears through cargo and the veterinary release at Dubai International (DXB) or Al Maktoum / Dubai World Central (DWC). That is a different building from the passenger baggage hall. Ask the handler where to collect after MOCCAE release, and use the airport code written on the airway bill.',
 },
 {
 question: 'Can Air France cabin the dog all the way into Dubai?',
 answer:
 'Air France is listed as cabin or cargo, and that listing is not a cabin seat into Dubai. Most dogs and cats arrive as cargo. Emirates, Etihad and Qatar Airways are listed as cargo on this route. Confirm the live policy for your exact France to UAE trip, including breed and crate size, before you buy the ticket.',
 },
 {
 question: 'How long does the MOCCAE import permit last on a France departure?',
 answer:
 'The MOCCAE import permit is valid for 90 days from issuance. The pet must enter the UAE inside that window. A French pet passport does not replace it, and a later Charles de Gaulle cargo date can use up the permit if you wait too long after it is issued. Apply when the flight date is real.',
 },
 {
 question: 'When must the rabies titre blood be drawn for France to Dubai?',
 answer:
 'Confirm on the official MOCCAE portal before you skip a titre for a French origin. If a test is required, the blood sample is taken within 90 days before travel and the result must be at least 0.5 IU/ml. That is the sample date, not a wait after the draw. A first vaccine, or a gap, needs at least 21 days before the test. A valid booster does not.',
 },
 {
 question: 'Is a French pet passport enough for UAE entry?',
 answer:
 'An EU pet passport helps show identity and vaccine history. UAE entry still needs a MOCCAE import permit and French health papers that match the microchip. The passport does not accept the crate at Paris Charles de Gaulle (CDG), and it does not clear cargo at Dubai International (DXB) or Al Maktoum / Dubai World Central (DWC).',
 },
 {
 question: 'How do I move my dog from France to Dubai?',
 answer:
 'Check that the breed is allowed in the UAE, then confirm the microchip and rabies vaccination are current. Apply for the MOCCAE import permit, valid 90 days from issuance. A French official vet issues the export health certificate. Your official vet authority will confirm who endorses it before you book. Book cargo from Paris or another confirmed hub into Dubai, then plan arrival release.',
 },
 {
 question: 'Can my cat fly with me from Paris to Dubai?',
 answer:
 'Not in the cabin into Dubai. Emirates carries animals on itineraries ending in Dubai as cargo, and most carriers follow a similar rule. Etihad publishes a limited cabin option into Abu Dhabi for small pets on some routes, so check current policy if that suits you. Otherwise your cat travels as manifest cargo with its own documents. See the [pet flight options hub](/guides/pet-flight-options-dubai/).',
 },
 {
 question: 'How do I get a quote for France to Dubai pet relocation?',
 answer:
 'Get Route Checked after a free eligibility check. Tell us the pet, the French airport and your dates on WhatsApp +971504782999 or the quote form. [What changes the cost](/guides/pet-relocation-cost-dubai/) lists drivers only. Say whether the crate leaves Paris Charles de Gaulle (CDG), Orly (ORY), Lyon (LYS), Nice (NCE) or a confirmed Marseille desk. No package total is printed here.',
 },
 ],
 },
 {
 slug: 'dubai-to-france',
 countryKey: 'france',
 title: 'Pet Relocation Dubai to France | Planning & Quote',
 meta: 'Moving a dog or cat from Dubai to France? Review documents, travel options and arrival planning, then request a quote for your pet and dates.',
 h1: 'Pet relocation from Dubai to France',
 heroAlt: 'Dog with French flag cue ready for export from Dubai to France',
 intro:
 'A move from Dubai to France starts with EU entry rules, then UAE export papers. The usual landing airport is Paris Charles de Gaulle (CDG). Paris Orly (ORY), Lyon (LYS) and Nice (NCE) need a confirmed crate desk. The ISO microchip must come before the rabies vaccine. An official veterinarian issues the EU animal health certificate inside its short entry window, commonly about 10 days. Air France is listed as cabin or cargo. Emirates, Etihad and Qatar Airways are listed as cargo. After the French dates are firm, time the MOCCAE export certificate to departure. Tell us about your move with the pet and the French city.',
 snippetQuestion: 'How do I take a pet from Dubai to France?',
 snippetAnswer:
 'Build the EU entry file before you book the crate. That means an ISO microchip before the rabies vaccine, a valid rabies course, and an EU animal health certificate for the French airport that will inspect the animal. Paris Charles de Gaulle (CDG) is the usual point of entry. Orly (ORY), Lyon (LYS) or Nice (NCE) only if that airport is accepted. Then get the MOCCAE export certificate. Confirm Air France, Emirates, Etihad or Qatar Airways for the Dubai departure. This journey does not use a MOCCAE import permit.',
 hubCardDesc: 'EU entry at Paris Charles de Gaulle, then a UAE export certificate for the flight from Dubai.',
 destinationRules: EU_DEST('France', 'CDG, ORY, LYS, NCE'),
 rulesSpecialties:
 'Dubai to France is planned from the French point of entry, usually Paris Charles de Gaulle (CDG). European Commission rules for a non-commercial move ask for an ISO microchip before the rabies vaccine, a valid rabies course, and a 21-day wait after a primary course. An official or authorised veterinarian issues the EU animal health certificate inside the entry window, commonly about 10 days. The Commission currently lists the UAE among countries whose dogs, cats and ferrets can skip rabies antibody titration for non-commercial entry. Open the live list before you skip the test. More than five pets with one traveller can move the file onto commercial or Balai rules. Only then do you request MOCCAE exit papers. Export certificates are often discussed as valid for about 30 days from issuance, so check the portal. Paris Orly (ORY), Lyon (LYS) and Nice (NCE) are possible only when that border post accepts the crate.',
 difficulties:
 'The crate is inspected at the French airport named on the EU certificate. For most bookings that is Paris Charles de Gaulle (CDG). A plan to meet family at Nice (NCE) or Paris Orly (ORY) works only if the airline and the border post both accept live animals there. Lyon (LYS) is the same kind of check. A MOCCAE import permit is for pets entering the UAE, so the useful UAE paper here is the export certificate. Issue it too early and the short window, often discussed as about 30 days from issuance, can end before departure. Air France is listed as cabin or cargo from some products. Emirates, Etihad and Qatar Airways are listed as cargo, and a Doha connection needs its own confirmation. A train after a confirmed CDG release can reach Lyon. It does not change the airport on the certificate.',
 howItWorks:
 'Lock the French arrival airport before you book anyone a ticket. Use Paris Charles de Gaulle (CDG) unless the carrier and the French border post accept Paris Orly (ORY), Lyon (LYS) or Nice (NCE). Decide whether the move is non-commercial or commercial, and read the live European Commission list before you skip a rabies antibody test for a pet from the UAE. Fit the ISO microchip before the rabies vaccine, and finish the 21-day wait after a primary course. An authorised veterinarian then issues the EU animal health certificate inside the entry window, commonly about 10 days. Shortlist Air France, Emirates, Etihad or Qatar Airways from Dubai International (DXB), Al Maktoum / Dubai World Central (DWC) or Abu Dhabi (AUH), and confirm that product into the French airport. Air France is listed as cabin or cargo. The other three are listed as cargo. With the French dates firm, request the MOCCAE export certificate so it still covers departure.',
 airportsNarrative:
 'French arrival airports on this route are Paris Charles de Gaulle (CDG), Paris Orly (ORY), Lyon (LYS) and Nice (NCE). CDG is the long-haul veterinary border most Air France and Gulf cargo products can name. ORY is the same city on a map and a separate question for a crate, so confirm live-animal arrival before family waits at Orly. Lyon suits a home in the east of France only when the carrier and the border post both work there. Many pets still land at CDG and continue by road. Nice is a passenger airport first. Leaving the UAE, Dubai International (DXB) is the common passenger airport and often still ships the animal as cargo. Al Maktoum / Dubai World Central (DWC) is the cargo departure when that Emirates product is booked. Abu Dhabi (AUH) is the departure when the ticket is Etihad. Name the same French code on the EU certificate and the airway bill.',
 airlinesNarrative:
 'From Dubai, confirm Air France, Emirates, Etihad and Qatar Airways again. A France to Dubai acceptance does not transfer. Air France is listed as cabin or cargo. Read the current Air France pet page for Dubai to France, including breed and crate limits, before you tell family to meet you at a passenger gate. Emirates is listed as cargo. Do not treat a screenshot from another city pair as permission for this one. Etihad is listed as cargo. An Abu Dhabi (AUH) product, if you are using one, still has to meet French entry at the airport on the certificate. Qatar Airways is listed as cargo and usually means a live-animal transfer in Doha. Dubai Pet Relocation coordinates the file and does not fly the aircraft. Ask the carrier to confirm the product before you pay.',
 faqs: [
 {
 question: 'Is Dubai to France just France to Dubai with the names swapped?',
 answer:
 'Leaving Dubai is a French entry file, then UAE export papers. Coming from France is a MOCCAE import permit and cargo release in the UAE. The airports can look similar. The order of the papers does not. Start with the European Commission pet rules and the French airport that will inspect the crate.',
 },
 {
 question: 'Do I need a MOCCAE import permit to fly from Dubai to Paris?',
 answer:
 'A MOCCAE import permit is for a pet entering the UAE. This journey needs a MOCCAE export health certificate timed to the EU animal health certificate. Confirm the current digital service on the MOCCAE portal, and keep the export certificate inside its validity on the day you leave Dubai International (DXB) or the cargo airport you actually use.',
 },
 {
 question: 'Which French airport should the crate actually land at?',
 answer:
 'Plan Paris Charles de Gaulle (CDG) unless the airline and the French veterinary border both accept Paris Orly (ORY), Lyon (LYS) or Nice (NCE). A house near Nice is not a reason to print NCE on the certificate. Ask the carrier which airport code is on the live-animal booking, then use that same code on the EU papers.',
 },
 {
 question: 'Does France still skip a rabies titer for pets coming from the UAE?',
 answer:
 'For non-commercial entry, the European Commission currently lists the UAE among countries whose dogs, cats and ferrets can enter without a rabies antibody test. Lists change, so open the live page before you skip the lab. You still need the microchip before the vaccine, a valid rabies course, and the EU certificate. A primary course usually needs 21 days. More than five pets can bring commercial or Balai rules.',
 },
 {
 question: 'Can we land the crate in Nice and take the train to Lyon?',
 answer:
 'Only if a live-animal product into Nice (NCE) exists and the EU certificate names NCE. The usual plan is Paris Charles de Gaulle (CDG). A train from a confirmed CDG cargo release to Lyon is a ground trip. It does not make Orly (ORY) or Nice the point of entry, and it does not move the inspection.',
 },
 {
 question: 'What UAE paper do I show on departure day to France?',
 answer:
 'Show the MOCCAE export health certificate, aligned to the dates on the EU animal health certificate. An import permit is the wrong document on the way out. The export window is often discussed as about 30 days from issuance. Check the portal before the vet signs, so the paper still covers departure day.',
 },
 {
 question: 'Does an Air France cabin seat from Dubai change EU entry rules?',
 answer:
 'Cabin or cargo is the airline product. EU entry still needs the animal health certificate, the microchip and the vaccine sequence. Air France is listed as cabin or cargo on this route. Confirm the Dubai to France policy for your pet. Emirates, Etihad and Qatar Airways are listed as cargo. A cabin seat does not skip the border post.',
 },
 {
 question: 'What drives the cost of a Dubai to France pet export?',
 answer:
 'Tell us about your move with the pet, the French city and your dates. We explain the next steps and any assessment fee before paid work starts. Read [what changes the cost](/guides/pet-relocation-cost-dubai/) before you compare airports. You can also WhatsApp +971 50 478 2999. Say whether the crate is planned into Paris Charles de Gaulle (CDG) or another confirmed French airport.',
 },
 ],
 },
 {
 slug: 'turkey-to-dubai',
 countryKey: 'turkey',
 title: 'Pet Relocation Turkey to Dubai | Planning & Quote',
 meta: 'Moving a dog or cat from Turkey to Dubai? Review documents, travel options and arrival planning, then request a quote for your pet and dates.',
 h1: 'Pet relocation from Turkey to Dubai',
 heroAlt: 'Dog with Turkish flag cue ready for pet relocation from Turkey to Dubai',
 intro:
 'Most pets leave Turkey for Dubai from Istanbul Airport (IST), then clear UAE cargo. Sabiha Gökçen (SAW) and Antalya (AYT) count only when that airport has a live-animal desk. Türkiye is not in the EU pet system, so the origin papers come through a Turkish official veterinarian. Turkish Airlines is listed as cabin or cargo. Emirates is listed as cargo. Pegasus is listed as confirm. The MOCCAE import permit is valid for 90 days from issuance, and the pet must enter the UAE inside that window. Clearance is at Dubai International (DXB) or Al Maktoum / Dubai World Central (DWC). Tell us about your move.',
 snippetQuestion: 'How do I fly a pet from Istanbul to Dubai?',
 snippetAnswer:
 'Confirm a live-animal export from Istanbul Airport (IST), or from Sabiha Gökçen (SAW) or Antalya (AYT) only if that desk accepts the crate. Hold a MOCCAE import permit that is still inside 90 days from issuance on arrival. Turkish Airlines is listed as cabin or cargo. Emirates is listed as cargo. Pegasus is listed as confirm, so check that policy before you buy a seat. Most dogs and cats clear as cargo at Dubai International (DXB) or Al Maktoum / Dubai World Central (DWC).',
 hubCardDesc: 'Istanbul export into Dubai cargo, with Turkish exit papers and a 90-day MOCCAE permit.',
 rulesSpecialties:
 'Turkey to Dubai is a Turkish export into a UAE import permit. Türkiye is not an EU member, so this route does not use an EU animal health certificate or an EU titration list. Origin papers usually come through the Ministry of Agriculture and Forestry and an official veterinarian, naming the ISO microchip, the rabies vaccine and the animal. The MOCCAE import permit is valid for 90 days from issuance, and the pet must be in the UAE before it ends. Check the MOCCAE portal before you assume a Turkish origin is exempt from a rabies antibody test. Istanbul Airport (IST) is the long-haul cargo airport. Sabiha Gökçen (SAW) has a different operator. Antalya (AYT) is a tourism airport. Turkish Airlines is listed as cabin or cargo. Emirates is listed as cargo. Pegasus is listed as confirm. Most dogs and cats still enter as cargo at Dubai International (DXB) or Al Maktoum / Dubai World Central (DWC).',
 difficulties:
 'The usual break is the airport code, or a low-cost ticket. Istanbul Airport (IST) and Sabiha Gökçen (SAW) are not the same desk. SAW sits on the Asian side with another operator. Antalya (AYT) has summer passenger seats, which is not the same as a crate product that week. Pegasus is listed as confirm. A cheap seat is not acceptance. Turkish Airlines is listed as cabin or cargo, and that still does not put most pets in the cabin into Dubai. Emirates is listed as cargo. Turkey being near Europe does not make it an EU origin for MOCCAE. A delayed IST slot can push the flight past the 90 days on the import permit. The microchip on the Turkish papers must match the permit. Collect in Dubai from cargo at DXB or DWC, not from the passenger belt.',
 howItWorks:
 'Pick the export airport first. The working default is Istanbul Airport (IST). Treat Sabiha Gökçen (SAW) and Antalya (AYT) as open only after the carrier confirms a live-animal desk. Ask a Turkish official veterinarian what the Ministry of Agriculture and Forestry currently requires. An EU form is the wrong template. Fit the ISO microchip before the rabies vaccine you will cite, and check the MOCCAE portal for a rabies antibody test on this origin. Apply for the import permit so the 90 days from issuance cover the cargo date. Book Turkish Airlines or Emirates only after that carrier accepts the animal. Turkish Airlines is listed as cabin or cargo. Emirates is listed as cargo. Add Pegasus only if its live policy says yes. It is listed as confirm. In the final week, follow the MOCCAE parasite checklist and check the crate. Release is at Dubai International (DXB) or Al Maktoum / Dubai World Central (DWC).',
 airportsNarrative:
 'Turkish export airports on this route are Istanbul Airport (IST), Sabiha Gökçen (SAW) and Antalya (AYT). IST is the long-haul airport with the cargo path Turkish Airlines and Emirates usually use toward the UAE. SAW is a second Istanbul code, on the Asian shore, with a different operator and more low-cost flying. Do not copy an IST booking onto SAW. AYT is the Mediterranean tourism airport. It is an alternate, not a standing crate hub. In the UAE, Dubai International (DXB) is the passenger name many families know, and manifest cargo still clears in the cargo building. Al Maktoum / Dubai World Central (DWC) is a separate collection drive. Abu Dhabi (AUH) is not a default here, because Etihad is not a listed airline on this route. Write the same code on the Turkish export paper, the airway bill and the MOCCAE file.',
 airlinesNarrative:
 'Airlines on this route are Turkish Airlines, Emirates and Pegasus. Turkish Airlines is listed as cabin or cargo. That describes products the airline may sell. It is not a cabin seat into Dubai. Most dogs and cats travel as cargo. Emirates is listed as cargo. Confirm the Emirates policy for IST, or for SAW or AYT only if you already have a live-animal product there. Pegasus is listed as confirm. A low-cost Istanbul to Dubai seat is not pet acceptance until the airline says so in writing for that flight. A Turkish Airlines cabin story from IST to a European city does not carry over to an IST cargo booking for Dubai. Dubai Pet Relocation coordinates the file. Confirm the carrier before you build the crate.',
 faqs: [
 {
 question: 'Should the crate leave from IST or Sabiha Gökçen?',
 answer:
 'Istanbul Airport (IST) is the primary long-haul airport. Sabiha Gökçen (SAW) is a different Istanbul airport and a different operator. Confirm live-animal handling before you choose the Asian-side code. Antalya (AYT) needs the same explicit yes from the carrier. A passenger fare at SAW or AYT does not move the crate.',
 },
 {
 question: 'Does Pegasus take pets from Istanbul to Dubai?',
 answer:
 'Pegasus is listed as confirm. Do not buy the seat on the assumption the pet is accepted. Turkish Airlines is listed as cabin or cargo. Emirates is listed as cargo. Ask each airline about the exact flight, the breed and the crate. An airline name here is not the booking.',
 },
 {
 question: 'Is Turkey treated as an EU origin for UAE import?',
 answer:
 'Türkiye is not in the EU pet-movement system. UAE entry is a MOCCAE import permit plus Turkish export papers that match the microchip. An EU titration note does not decide a Turkish origin. Check the MOCCAE portal before you skip a rabies antibody test, and use the Turkish ministry path for the exit papers.',
 },
 {
 question: 'How long is the MOCCAE import permit from a Turkish departure?',
 answer:
 'The MOCCAE import permit is valid for 90 days from issuance. The pet must enter the UAE inside that window. A delayed cargo slot at Istanbul Airport (IST) after the permit is issued is a common way to lose the date. Book the flight inside the window, or ask about a fresh permit before travel.',
 },
 {
 question: 'When is the rabies titer sample taken for Turkey to Dubai?',
 answer:
 'Check the MOCCAE portal before you skip a rabies antibody test for a Turkish origin. When a test is required, the result must be at least 0.5 IU/ml; the certificate is valid for 365 days if the vaccine stays valid and continuous and no booster is given; otherwise repeat the test; a first vaccine or a gap needs at least 21 days before the test, and a valid booster does not; the blood sample is taken within 90 days before travel, not as a wait after the draw.',
 },
 {
 question: 'Can I use a Turkish pet passport instead of MOCCAE papers?',
 answer:
 'A Turkish pet passport, or any ID booklet, can support identity and vaccine history. It does not replace the MOCCAE import permit or cargo acceptance in Dubai. The origin health papers must match the microchip and the permit. Confirm the current Turkish export endorsement with an official veterinarian as well.',
 },
 {
 question: 'Will the pet come out at DXB passenger reclaim from Istanbul?',
 answer:
 'On manifest cargo, expect the cargo and veterinary release path at Dubai International (DXB) or Al Maktoum / Dubai World Central (DWC). The passenger baggage belt is the wrong meeting point. The handler tells you where to collect after MOCCAE release. If the bill says DWC, it is a different drive from DXB.',
 },
 {
 question: 'How do I get a Turkey to Dubai pet relocation quote?',
 answer:
 'Tell us about your move with the pet, the Turkish airport and your dates. We explain the next steps and any assessment fee before paid work starts. [What changes the cost](/guides/pet-relocation-cost-dubai/) is in the cost guide. You can also WhatsApp +971 50 478 2999. Say whether the crate leaves Istanbul Airport (IST) or a confirmed SAW or AYT desk.',
 },
 ],
 },
 {
 slug: 'dubai-to-turkey',
 countryKey: 'turkey',
 title: 'Pet Relocation Dubai to Turkey | Planning & Quote',
 meta: 'Moving a dog or cat from Dubai to Turkey? Review documents, travel options and arrival planning, then request a quote for your pet and dates.',
 h1: 'Pet relocation from Dubai to Turkey',
 heroAlt: 'Dog with Turkish flag cue ready for export from Dubai to Turkey',
 intro:
 'A move from Dubai to Turkey starts with Turkish veterinary entry, usually at Istanbul Airport (IST). Confirm the current import steps with the Ministry of Agriculture and Forestry before you lock a flight. Sabiha Gökçen (SAW) and Antalya (AYT) are alternates only if the ministry and the airline both accept them. Türkiye is outside EU pet movement, so an EU certificate is the wrong model. Time the MOCCAE export certificate to the Turkish dates. Turkish Airlines is listed as cabin or cargo. Emirates is listed as cargo. Pegasus is listed as confirm. Tell us about your move with the pet and the arrival airport the permission names.',
 snippetQuestion: 'What leads a Dubai → Istanbul pet file?',
 snippetAnswer:
 'Start with the Turkish veterinary conditions for the arrival airport, usually Istanbul Airport (IST). Confirm any permit or advance notice the Ministry of Agriculture and Forestry asks for from the UAE. Then time the MOCCAE export certificate to those dates. Turkish Airlines is listed as cabin or cargo. Emirates is listed as cargo. Pegasus is listed as confirm. This is Turkish import, not a MOCCAE import permit and not EU free movement.',
 hubCardDesc: 'Turkish veterinary entry at Istanbul Airport, then UAE export papers from Dubai.',
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
 'Dubai to Turkey is planned from Turkish veterinary entry, not from EU third-country rules and not from a UAE import permit. The authority to read is the Ministry of Agriculture and Forestry, including guidance on tarimorman.gov.tr, plus the border at the named airport. The file usually includes an ISO microchip, a current rabies vaccine, any import permission or advance notice the ministry requires, and an official health certificate inside a short window. Confirm the live steps. Commission notes that mention the UAE do not govern Istanbul. If Türkiye asks for a test, use the ministry clock. After the Turkish airport and dates are stable, request MOCCAE exit papers. Export certificates are often discussed as valid for about 30 days from issuance. Check the portal. Istanbul Airport (IST) is the inspection point to plan. Sabiha Gökçen (SAW) and Antalya (AYT) are not the default. Pegasus is listed as confirm.',
 difficulties:
 'The distinctive miss is treating Türkiye as EU pet movement because it sits on a European map. Families reach Istanbul Airport (IST) with an EU-style plan and no Turkish permission, or they skip a test the ministry still wants. The second miss is the airport. A Sabiha Gökçen (SAW) or Antalya (AYT) ticket, because the house is on the coast or the family lives on the Asian side, fails when the permission names IST. Pegasus is listed as confirm. A low-cost seat is not a crate. A MOCCAE import permit does not help on the way out. The export certificate, often discussed as about 30 days from issuance, can expire if it is signed too early. Turkish Airlines is listed as cabin or cargo. Emirates is listed as cargo. A cabin story on a Turkish Airlines European flight does not travel with you from Dubai.',
 howItWorks:
 'Read the current Turkish import conditions for a dog or cat from the UAE. Confirm whether the Ministry of Agriculture and Forestry wants a permit, a notice, or another step, and name Istanbul Airport (IST) unless the ministry and the carrier both accept another airport. Align the ISO microchip and rabies record to that path. If Türkiye requires an extra test, schedule it to the ministry rule. Shortlist Turkish Airlines or Emirates from Dubai International (DXB), Al Maktoum / Dubai World Central (DWC), or Abu Dhabi (AUH) only if that routing truly exists. Etihad is not a listed carrier here, so do not assume an AUH to IST default. Turkish Airlines is listed as cabin or cargo. Emirates is listed as cargo. Treat Pegasus as unconfirmed. It is listed as confirm. With the IST date firm, request the MOCCAE export certificate so it covers departure. Arrival is a Turkish veterinary check at the airport on the permission.',
 airportsNarrative:
 'Turkish arrival airports on this route are Istanbul Airport (IST), Sabiha Gökçen (SAW) and Antalya (AYT). IST is the long-haul inspection airport most ministry files and Turkish Airlines or Emirates products can name. SAW is a second Istanbul code with another operator. Treat it as unconfirmed unless the ministry paperwork and the live-animal desk both agree. AYT is a tourism airport. A coastal collection is a ground transfer after IST unless you have written acceptance at AYT. Leaving the UAE, Dubai International (DXB) is common on passenger tickets and often still moves the animal as cargo. Al Maktoum / Dubai World Central (DWC) is the cargo departure when that product is booked. Abu Dhabi (AUH) is not a default, because Etihad is not listed on this route. Send collectors to the IST live-animal instructions, not the passenger hall, unless the carrier says otherwise. The permission and the airway bill must name the same code.',
 airlinesNarrative:
 'Airlines on the way to Türkiye are Turkish Airlines, Emirates and Pegasus. Confirm each one again for a departure from the UAE. A Turkey to Dubai acceptance does not transfer. Turkish Airlines is listed as cabin or cargo. That is not a cabin promise out of Dubai. Read the current pet page for this city pair. Emirates is listed as cargo into Istanbul Airport (IST). Pegasus is listed as confirm, and it is the booking most likely to leave a family with a passenger seat and no crate. If someone forwards a Pegasus reference, treat it as a passenger ticket until the live policy confirms the animal. Dubai Pet Relocation coordinates the file and does not fly the aircraft. Ask the carrier to confirm before you pay.',
 faqs: [
 {
 question: 'Is Dubai to Turkey the reverse of Turkey to Dubai?',
 answer:
 'Leaving Dubai is a Turkish veterinary import aimed at Istanbul Airport (IST). Coming from Turkey is a MOCCAE import permit and cargo release in the UAE. The city pair looks reversible. The papers are not. Start with the Ministry of Agriculture and Forestry, then the UAE export certificate.',
 },
 {
 question: 'Does Turkey follow EU titer-exempt rules for pets from the UAE?',
 answer:
 'Do not treat an EU list as the rule at Istanbul. Türkiye is outside EU non-commercial pet movement. Confirm Turkish tests and permissions on their own. A Commission note about pets from the UAE does not clear a crate at IST. Read the ministry guidance, including tarimorman.gov.tr, for the current step.',
 },
 {
 question: 'Which Turkish airport should the pet arrive at from Dubai?',
 answer:
 'Plan Istanbul Airport (IST) unless the import permission names another airport and the carrier agrees. Sabiha Gökçen (SAW) and Antalya (AYT) are named alternates, not the default inspection point. A summer house on the coast is a drive after IST, unless AYT is accepted in writing on both the permission and the airway bill.',
 },
 {
 question: 'What UAE paper do I need to leave Dubai for Istanbul?',
 answer:
 'You need a MOCCAE export health certificate timed to the Turkish entry window. An import permit is for pets entering the UAE. Confirm the digital service and the short validity on the portal. The export window is often discussed as about 30 days from issuance, so sign it when the Istanbul date is real.',
 },
 {
 question: 'Can Pegasus carry the crate from Dubai to Türkiye?',
 answer:
 'Pegasus is listed as confirm. Do not plan the crate on it. Turkish Airlines is listed as cabin or cargo. Emirates is listed as cargo. Confirm the live policy for Dubai to Türkiye before you buy a seat. A passenger booking reference is not a live-animal acceptance.',
 },
 {
 question: 'Do I need a Turkish import permit before the UAE export certificate?',
 answer:
 'Set the Turkish entry steps first, including any advance permission the Ministry of Agriculture and Forestry currently wants. Then time the MOCCAE export certificate to those dates. We do not guess the form name. The ministry page and the airline both have to agree the airport before you pay for the crate.',
 },
 {
 question: 'Is an EU-style pet passport enough at IST?',
 answer:
 'A pet passport is not EU free movement into Türkiye, and it is not a substitute for Turkish veterinary entry. The permission and the airway bill should name the same airport, usually Istanbul Airport (IST). Bring the microchip record and the health certificate the ministry asked for.',
 },
 {
 question: 'What drives the cost of a Dubai to Turkey pet export?',
 answer:
 'Tell us about your move with the pet, the Istanbul date and the airport the permission names. We explain the next steps and any assessment fee before paid work starts. Read [what changes the cost](/guides/pet-relocation-cost-dubai/). You can also WhatsApp +971 50 478 2999. Say whether the arrival is Istanbul Airport (IST) or a confirmed alternate.',
 },
 ],
 },
 {
 slug: 'spain-to-dubai',
 countryKey: 'spain',
 title: 'Pet Relocation Spain to Dubai | Planning & Quote',
 meta: 'Moving a dog or cat from Spain to Dubai? Review documents, travel options and arrival planning, then request a quote for your pet and dates.',
 h1: 'Pet relocation from Spain to Dubai',
 heroAlt: 'Dog with Spanish flag cue ready for pet relocation from Spain to Dubai',
 intro:
 'Most pets leave Spain for Dubai from Madrid (MAD) or Barcelona (BCN), as cargo into the UAE. Málaga (AGP) counts only when the carrier accepts a live animal there. A Spanish official veterinarian endorses the export papers, and the ISO microchip must match the MOCCAE file. Iberia is listed as cabin or cargo. Emirates and Qatar Airways are listed as cargo. Vueling is listed as confirm. The import permit is valid for 90 days from issuance, and the pet must enter the UAE inside that window. Clearance is at Dubai International (DXB) or Al Maktoum / Dubai World Central (DWC). Tell us about your move.',
 snippetQuestion: 'How do I fly a pet from Madrid or Barcelona to Dubai?',
 snippetAnswer:
 'Confirm a live-animal export from Madrid (MAD) or Barcelona (BCN). Use Málaga (AGP) only if that airport accepts the crate. Hold a MOCCAE import permit that is still inside 90 days from issuance on landing. Iberia is listed as cabin or cargo. Emirates and Qatar Airways are listed as cargo. Vueling is listed as confirm, so do not treat a low-cost seat as acceptance. Most dogs and cats clear as cargo at Dubai International (DXB) or Al Maktoum / Dubai World Central (DWC).',
 hubCardDesc: 'Madrid or Barcelona export into Dubai cargo, with Spanish papers and a 90-day MOCCAE permit.',
 rulesSpecialties:
 'Spain to Dubai is a Spanish export that must also satisfy UAE entry. An EU pet passport helps with identity. It is not the import document. A Spanish official veterinarian endorses papers with the ISO microchip, the rabies vaccine and the animal, matching the file when the crate leaves Madrid (MAD) or Barcelona (BCN). The MOCCAE import permit is valid for 90 days from issuance, and the pet must enter the UAE inside that window. Check the portal before you treat Spain as exempt from a rabies antibody test. Fit the chip before the vaccine you will cite. Long-haul gravity sits at MAD, the Iberia hub, and at BCN. Málaga (AGP) is the coastal alternate. Iberia is listed as cabin or cargo. Vueling is listed as confirm. Emirates and Qatar Airways are listed as cargo. Clearance is cargo at Dubai International (DXB) or Al Maktoum / Dubai World Central (DWC).',
 difficulties:
 'Families near the coast book Málaga (AGP) because it is close, then find no live-animal product, while Madrid (MAD) cargo would have worked. Others choose Barcelona (BCN) because that is home, then find the crate desk is in Madrid that week. Vueling is listed as confirm. A cheap Barcelona seat is not acceptance toward Dubai. Iberia cabin products inside Spain do not authorise a cabin into Dubai. Emirates and Qatar Airways are listed as cargo, and a Doha connection is another live-animal transfer. The permit fails if the flight moves past 90 days from issuance. The microchip on the Spanish papers must match the MOCCAE file. Collect from cargo at Dubai International (DXB) or Al Maktoum / Dubai World Central (DWC). Abu Dhabi (AUH) is not a default, because Etihad is not listed on this route.',
 howItWorks:
 'Pick Madrid (MAD) or Barcelona (BCN) as the export airport, and treat Málaga (AGP) as open only after the carrier confirms a desk. Fit the ISO microchip before the rabies vaccine, and check the MOCCAE portal for a rabies antibody test on a Spanish origin. A Spanish official veterinarian endorses the export papers while they still match the animal. Apply for the import permit so the 90 days from issuance cover the cargo day. Book Iberia, Emirates or Qatar Airways only after that carrier accepts the pet. Iberia is listed as cabin or cargo. Emirates and Qatar Airways are listed as cargo. Leave Vueling off the plan unless its live policy says yes. It is listed as confirm. A Qatar routing via Doha needs a confirmed connection. In the final week, follow the MOCCAE parasite checklist and use a crate the airport will accept. Release is at DXB or DWC cargo.',
 airportsNarrative:
 'Spanish export airports on this route are Madrid (MAD), Barcelona (BCN) and Málaga (AGP). MAD is the Iberia long-haul hub and the airport most likely to have a weekday crate desk toward the Gulf. BCN handles serious cargo, and not every Barcelona passenger flight is a pet product, so confirm the service. AGP is the coastal alternate. It is on the list so you can ask about it, not so a Málaga holiday flight becomes a crate. In the UAE, Dubai International (DXB) may be the name on the passenger ticket. The crate still usually clears in cargo. Al Maktoum / Dubai World Central (DWC) is a separate clearance when an Emirates cargo product is booked. Abu Dhabi (AUH) is not a default from Madrid, because Etihad is not a listed airline here. If the permit and the Spanish certificate say MAD, do not fly the family from BCN and expect the crate to follow.',
 airlinesNarrative:
 'Airlines on this route are Iberia, Emirates, Vueling and Qatar Airways. Iberia is listed as cabin or cargo. A cabin product inside Spain is not a cabin seat into Dubai. Confirm the Iberia page for Madrid or Barcelona to the UAE, including crate limits. Emirates is listed as cargo from MAD or BCN, and the label must match the MOCCAE file, DXB or DWC. Vueling is listed as confirm. A Barcelona low-cost seat is not acceptance. Qatar Airways is listed as cargo and may connect in Doha, which is a second handling you confirm. An Iberia connection through Barcelona is also a second handling, not a free add-on. Dubai Pet Relocation coordinates the file. The airline decides if the pet travels. Confirm the policy before you pay for the crate.',
 faqs: [
 {
 question: 'Should the crate leave Madrid, Barcelona or Málaga?',
 answer:
 'Madrid (MAD) and Barcelona (BCN) are the usual long-haul airports. Málaga (AGP) needs an explicit live-animal yes from the carrier. A coastal passenger flight does not carry the crate just because AGP is a possible code. If the desk at Málaga says no, move the animal to MAD or BCN and keep that code on the papers.',
 },
 {
 question: 'Does Vueling take pets from Spain to Dubai?',
 answer:
 'Vueling is listed as confirm. Do not assume acceptance. Iberia is listed as cabin or cargo. Emirates and Qatar Airways are listed as cargo. Confirm the policy for the exact Spain to UAE flight, including breed and crate size. A low-cost seat from Barcelona is a passenger booking until the airline says otherwise.',
 },
 {
 question: 'Will the pet clear at DXB passenger arrivals from Madrid?',
 answer:
 'On manifest cargo, the pet uses the cargo and veterinary release path at Dubai International (DXB) or Al Maktoum / Dubai World Central (DWC). That is not the passenger arrivals hall. Ask the handler where to collect after MOCCAE release, and go to the airport written on the airway bill.',
 },
 {
 question: 'Can Iberia cabin the dog into Dubai from Barajas?',
 answer:
 'Iberia is listed as cabin or cargo, and that is not a cabin seat into Dubai from Madrid-Barajas. Most dogs and cats travel as cargo. Emirates and Qatar Airways are listed as cargo. Confirm the live Iberia policy for Spain to the UAE before you tell anyone the dog will ride in the cabin.',
 },
 {
 question: 'How long is the MOCCAE import permit on a Spanish departure?',
 answer:
 'The MOCCAE import permit is valid for 90 days from issuance. The pet must enter the UAE inside that window. A later Madrid cargo date, booked after the permit is already issued, is a common way to lose the window. Tie the permit to a flight the airline has accepted.',
 },
 {
 question: 'When should the titer blood be drawn for Spain to Dubai?',
 answer:
 'Check the MOCCAE portal before you skip a rabies antibody test for a Spanish origin. When a test is required, the result must be at least 0.5 IU/ml; the certificate is valid for 365 days if the vaccine stays valid and continuous and no booster is given; otherwise repeat the test; a first vaccine or a gap needs at least 21 days before the test, and a valid booster does not; the blood sample is taken within 90 days before travel, not as a wait after the draw.',
 },
 {
 question: 'Is a Spanish EU pet passport enough for UAE entry?',
 answer:
 'A Spanish EU pet passport helps with identity and vaccine history. UAE entry still needs a MOCCAE import permit and origin health papers that match the microchip. The passport does not accept the crate in Madrid or Barcelona, and it does not replace cargo clearance in Dubai.',
 },
 {
 question: 'How do I get a Spain to Dubai pet relocation quote?',
 answer:
 'Tell us about your move with the pet, Madrid or Barcelona, and your dates. We explain the next steps and any assessment fee before paid work starts. Read [what changes the cost](/guides/pet-relocation-cost-dubai/). You can also WhatsApp +971 50 478 2999. Say if Málaga is only a hope or a confirmed live-animal desk.',
 },
 ],
 },
 {
 slug: 'dubai-to-spain',
 countryKey: 'spain',
 title: 'Pet Relocation Dubai to Spain | Planning & Quote',
 meta: 'Moving a dog or cat from Dubai to Spain? Review documents, travel options and arrival planning, then request a quote for your pet and dates.',
 h1: 'Pet relocation from Dubai to Spain',
 heroAlt: 'Dog with Spanish flag cue ready for export from Dubai to Spain',
 intro:
 'A move from Dubai to Spain starts with EU entry at Madrid (MAD) or Barcelona (BCN), then UAE export papers. Málaga (AGP) is possible only if the airline and the Spanish border post both accept the animal. The ISO microchip comes before the rabies vaccine. An authorised veterinarian issues the EU animal health certificate inside a short window, commonly about 10 days. Iberia is listed as cabin or cargo. Emirates and Qatar Airways are listed as cargo. Vueling is listed as confirm. With the Spanish dates firm, time the MOCCAE export certificate to departure. Tell us about your move with the pet and the Spanish city.',
 snippetQuestion: 'How do I take a pet from Dubai to Spain?',
 snippetAnswer:
 'Finish the EU animal health certificate for the Spanish airport that will inspect the pet, then the MOCCAE export certificate, then the booking. Madrid (MAD) or Barcelona (BCN) is the usual point of entry. Málaga (AGP) only if that airport is accepted. The microchip comes before the rabies vaccine. Iberia is listed as cabin or cargo. Emirates and Qatar Airways are listed as cargo. Vueling is listed as confirm. A MOCCAE import permit is for pets entering the UAE, not this direction.',
 hubCardDesc: 'EU entry at Madrid or Barcelona, then a UAE export certificate for the flight from Dubai.',
 destinationRules: EU_DEST('Spain', 'MAD, BCN, AGP'),
 rulesSpecialties:
 'Dubai to Spain is planned from a Spanish point of entry, usually Madrid (MAD) or Barcelona (BCN). European Commission rules ask for an ISO microchip before the rabies vaccine, a valid course, and a 21-day wait after a primary vaccination. An official or authorised veterinarian issues the EU animal health certificate inside the entry window, commonly about 10 days. The Commission currently lists the UAE among countries whose dogs, cats and ferrets can skip rabies antibody titration for non-commercial entry. Open the live list before you skip the lab. More than five pets with one traveller can move onto commercial or Balai rules. Then request MOCCAE exit papers. Export certificates are often discussed as valid for about 30 days from issuance. Málaga (AGP) is a coastal collection point only when the border post accepts it. Iberia is listed as cabin or cargo. Vueling is listed as confirm. Emirates and Qatar Airways are listed as cargo.',
 difficulties:
 'The miss is a Málaga promise, or a family split between Madrid and Barcelona. Relatives in Marbella do not make AGP the point of entry if the airline and the certificate only work at MAD. A Catalan collection does not make BCN available if the confirmed product that week is Barajas. Vueling is listed as confirm. A cheap El Prat seat is not a crate from Dubai. A MOCCAE import permit does not apply on the way out. The export certificate, often about 30 days from issuance, expires if it is signed too early. Emirates and Qatar Airways are listed as cargo, and Doha is a second handling. Iberia is listed as cabin or cargo, which you reconfirm from Dubai. A road or rail trip after release is fine. Put collectors at the airport printed on the EU certificate.',
 howItWorks:
 'Lock Madrid (MAD) or Barcelona (BCN) unless the carrier and the Spanish point of entry both accept Málaga (AGP). Decide if the arrival is non-commercial or commercial, and read the live European Commission list before you skip a rabies antibody test. Fit the ISO microchip before the rabies vaccine, and finish any 21-day wait after a primary course. An authorised veterinarian issues the EU certificate in the entry window, commonly about 10 days, naming the real airport. Shortlist Iberia, Emirates or Qatar Airways from Dubai International (DXB), Al Maktoum / Dubai World Central (DWC), or Abu Dhabi (AUH) only if Etihad is actually booked. Etihad is not a listed carrier on this route. Iberia is listed as cabin or cargo. Emirates and Qatar Airways are listed as cargo. Vueling stays unconfirmed. With the Spanish date firm, request the MOCCAE export certificate. If family live elsewhere in Spain, plan the road after release.',
 airportsNarrative:
 'Spanish arrival airports on this route are Madrid (MAD), Barcelona (BCN) and Málaga (AGP). MAD is the usual Iberia long-haul live-animal arrival. BCN is a real second gateway when the pet product and the veterinary border both work at El Prat. Being based in Catalonia is not itself a confirmation. AGP is the coastal hope. A listed code is not a Málaga import desk. Choose MAD or BCN from the live booking and who can collect the crate. Leaving Dubai, a DXB passenger ticket often still ships the animal as cargo. Al Maktoum / Dubai World Central (DWC) is the cargo alternative when that product is booked. Abu Dhabi (AUH) is not a default to Madrid, because Etihad is not listed here. Barajas cargo and El Prat cargo are different collection briefings. Send the collector the code on the EU certificate.',
 airlinesNarrative:
 'Confirm Iberia, Emirates, Vueling and Qatar Airways again for a departure from the UAE. Spain to Dubai acceptance does not transfer. Iberia is listed as cabin or cargo into Madrid, and that is not a cabin promise out of Dubai. Read the live Dubai to Madrid or Dubai to Barcelona pet page. Emirates is listed as cargo, and a MAD arrival is a different handler note from a BCN arrival. Qatar Airways is listed as cargo via Doha, a second ramp for the animal. Vueling is listed as confirm and should not be the crate plan. Dubai Pet Relocation coordinates the file and does not fly the aircraft. Ask each carrier to confirm the product, the breed limit and the crate before you pay.',
 faqs: [
 {
 question: 'Is Dubai to Spain the reverse of Spain to Dubai?',
 answer:
 'Leaving Dubai is EU entry at a Spanish airport that accepts live animals, then UAE export papers. Coming from Spain is a MOCCAE import permit and cargo release in the UAE. Use the direction you are actually flying. The airport codes can match. The order of permits does not.',
 },
 {
 question: 'Do I need a MOCCAE import permit to leave Dubai for Madrid?',
 answer:
 'An import permit is for a pet entering the UAE. Leaving Dubai for Madrid needs a MOCCAE export health certificate timed to the EU animal health certificate. Confirm the current portal path, and keep the export paper valid on departure day from Dubai International (DXB) or the cargo airport on the booking.',
 },
 {
 question: 'Can the crate arrive in Málaga from Dubai?',
 answer:
 'Only if the airline and the handler accept Málaga (AGP) and the EU certificate names that point of entry. The default is Madrid (MAD) or Barcelona (BCN). A coastal collection is usually a road transfer after the crate is released. Do not print AGP because the house is nearby.',
 },
 {
 question: 'Does Spain require a rabies titer from the UAE?',
 answer:
 'For non-commercial EU entry, the European Commission currently treats the UAE as exempt from rabies antibody titration for dogs, cats and ferrets. Verify the live list before you skip a test. You still follow the microchip, vaccine and certificate rules. A primary course usually needs 21 days. The entry certificate window is commonly about 10 days.',
 },
 {
 question: 'Madrid or Barcelona for a Valencia family?',
 answer:
 'Choose the gateway the carrier and the Spanish veterinary border both support that week. For a family in Valencia, Madrid (MAD) and Barcelona (BCN) are both possible, and the road comes after release. Confirm before you print labels or ask someone to wait. Geography is the second decision, not the first.',
 },
 {
 question: 'What UAE paper do I need on departure day to Spain?',
 answer:
 'Take the MOCCAE export health certificate, aligned to the EU certificate dates. An import permit is the wrong paper on departure day. Validity is a short window, often discussed as about 30 days from issuance. Check the portal before you book the final cargo date.',
 },
 {
 question: 'Can Vueling bring the pet from Dubai to El Prat?',
 answer:
 'Vueling is listed as confirm. Do not plan the crate on it. Iberia is listed as cabin or cargo. Emirates and Qatar Airways are listed as cargo. Confirm the live policy for Dubai to Barcelona before you buy an El Prat seat. A passenger fare is not a live-animal booking.',
 },
 {
 question: 'What drives the cost of a Dubai to Spain pet export?',
 answer:
 'Tell us about your move with the pet, the Spanish city and your dates. We explain the next steps and any assessment fee before paid work starts. Read [what changes the cost](/guides/pet-relocation-cost-dubai/). You can also WhatsApp +971 50 478 2999. Say whether the honest gateway is Madrid (MAD) or Barcelona (BCN).',
 },
 ],
 },
 {
 slug: 'netherlands-to-dubai',
 countryKey: 'netherlands',
 title: 'Pet Relocation Netherlands to Dubai | Planning & Quote',
 meta: 'Moving a dog or cat from Netherlands to Dubai? Review documents, travel options and arrival planning, then request a quote for your pet and dates.',
 h1: 'Pet relocation from Netherlands to Dubai',
 heroAlt: 'Dog with Dutch flag cue ready for pet relocation from Amsterdam to Dubai',
 intro:
 'Pets leave the Netherlands for Dubai from Amsterdam Schiphol (AMS), the only Dutch airport on this route. There is no Rotterdam or Eindhoven export on the list. A Dutch official veterinarian endorses papers that match the ISO microchip. KLM is listed as cabin or cargo. Emirates and Etihad are listed as cargo. The MOCCAE import permit is valid for 90 days from issuance, and the pet must enter the UAE inside that window. Clearance is at Dubai International (DXB) or Al Maktoum / Dubai World Central (DWC). Abu Dhabi (AUH) applies when the ticket is Etihad. Tell us about your move with the pet and the Schiphol date.',
 snippetQuestion: 'What do I need to fly a pet from Schiphol to Dubai?',
 snippetAnswer:
 'You need a confirmed live-animal booking from Amsterdam Schiphol (AMS), Dutch export papers, and a MOCCAE import permit still inside 90 days from issuance on arrival. KLM is listed as cabin or cargo. Emirates and Etihad are listed as cargo. Most dogs and cats clear as cargo at Dubai International (DXB) or Al Maktoum / Dubai World Central (DWC). If Schiphol declines the crate, the next step is a new date or another country, not a second Dutch airport.',
 hubCardDesc: 'Schiphol export into Dubai cargo, with Dutch papers and a 90-day MOCCAE permit.',
 rulesSpecialties:
 'The Netherlands to Dubai has one export code: Amsterdam Schiphol (AMS). Rotterdam, Eindhoven and Maastricht are not export airports on this route. A closed desk at Schiphol is a date, airline or crate problem, not a second Dutch gateway. A Dutch official veterinarian prepares papers with the ISO microchip, the rabies vaccine and the animal. An EU pet passport helps identity. It is not the UAE permit. The MOCCAE import permit is valid for 90 days from issuance, and the pet must enter the UAE inside that window. Check the portal before you treat a Dutch origin as exempt from a rabies antibody test. Fit the chip before the vaccine you will cite. KLM is listed as cabin or cargo. Emirates and Etihad are listed as cargo. Most dogs and cats enter as cargo at Dubai International (DXB) or Al Maktoum / Dubai World Central (DWC). Abu Dhabi (AUH) is the arrival only on an Etihad itinerary.',
 difficulties:
 'If KLM declines the crate size or the breed at Amsterdam Schiphol (AMS) that week, the list has no second Dutch airport. Inventing Eindhoven or Rotterdam cargo wastes the week. KLM cabin products inside Europe do not put the pet in the cabin into Dubai. Emirates and Etihad are listed as cargo. Any Etihad cabin language into Abu Dhabi (AUH) is an exception you confirm, not a Schiphol default. The permit fails when you wait for a later KLM flight that sits outside 90 days from issuance. The microchip on the Dutch papers must match the MOCCAE file. Heat limits, if a carrier publishes them, come from that airline, not from a rumour. Collect in Dubai from cargo at DXB or DWC. Tell us about your move before you rebuild the trip around an airport that is not on this route.',
 howItWorks:
 'Accept Amsterdam Schiphol (AMS) as the export airport. Fit the ISO microchip before the rabies vaccine, and check the MOCCAE portal for a rabies antibody test on a Dutch origin. A Dutch official veterinarian endorses the papers so they are still valid on cargo day. Apply for the import permit so the 90 days from issuance cover the Schiphol date. Book KLM, Emirates or Etihad only after that carrier accepts the animal. KLM is listed as cabin or cargo. Emirates and Etihad are listed as cargo. If AMS declines the crate, change the date, the crate or the country of exit. Do not type Rotterdam or Eindhoven onto the permit. In the final week, follow the MOCCAE parasite checklist and check the crate fit. Release is at Dubai International (DXB) or Al Maktoum / Dubai World Central (DWC) cargo. Abu Dhabi (AUH) is the release airport only on a real Etihad ticket.',
 airportsNarrative:
 'The Dutch airport on this route is Amsterdam Schiphol (AMS). That single code is the whole export conversation. Schiphol can handle long-haul live animals, and capability is still not a booking. Confirm the product on the exact flight. Rotterdam The Hague, Eindhoven and Maastricht are not pet-export airports for this Dubai file. In the UAE, Dubai International (DXB) may be the brand on the passenger ticket. The crate from AMS usually clears in cargo, not at baggage reclaim. Al Maktoum / Dubai World Central (DWC) is the other cargo clearance. Abu Dhabi (AUH) matters when the itinerary is Etihad, and any cabin exception into AUH has to be confirmed for this city pair. Write AMS on the Dutch certificate, the airway bill and the MOCCAE file. A declined Schiphol crate is a date or crate-size problem. It is not a reason to invent another Dutch code.',
 airlinesNarrative:
 'Airlines on this route are KLM, Emirates and Etihad. KLM is listed as cabin or cargo. A European cabin product is not a right to cabin into Dubai. Read the current KLM page for Amsterdam Schiphol (AMS) to the UAE, including breed, crate and whether the product is cargo. Emirates is listed as cargo until its pet page says otherwise for this city pair. Etihad is listed as cargo. A cabin mention into Abu Dhabi (AUH) on some small-pet products is an exception you verify. It is not a substitute for KLM. Dubai Pet Relocation coordinates the file and does not fly the aircraft. Confirm the policy with KLM, Emirates or Etihad before you pay for a ticket or a crate. The airline still has to say yes for Amsterdam Schiphol (AMS).',
 faqs: [
 {
 question: 'Is Schiphol the only Dutch airport on this corridor for Dubai?',
 answer:
 'Yes. Amsterdam Schiphol (AMS) is the only Dutch export airport on this route. Confirm live-animal handling there for your carrier. Rotterdam, Eindhoven and Maastricht are not the backup if AMS declines the crate. The honest next step is a new date, a different crate, or an exit from another country.',
 },
 {
 question: 'Can KLM cabin the dog from Amsterdam into Dubai?',
 answer:
 'KLM is listed as cabin or cargo, and that is not a cabin seat into Dubai. Emirates and Etihad are listed as cargo. Most dogs and cats travel as cargo. Read the [Emirates pet cargo guide](/guides/emirates-pet-cargo/) and the [pet flight options hub](/guides/pet-flight-options-dubai/), then confirm the policy with the airline for Amsterdam Schiphol (AMS) to the UAE.',
 },
 {
 question: 'Will the pet clear at DXB passenger arrivals from AMS?',
 answer:
 'On manifest cargo, expect cargo and veterinary release at Dubai International (DXB) or Al Maktoum / Dubai World Central (DWC). The passenger baggage belt is the wrong place to wait. Ask the handler where to collect after MOCCAE release, and match that instruction to the code on the airway bill.',
 },
 {
 question: 'How long is the MOCCAE import permit from a Dutch departure?',
 answer:
 'The MOCCAE import permit is valid for 90 days from issuance. The pet must enter the UAE inside that window. Waiting for a preferred KLM departure after the permit is issued is a common way to lose it. Apply when the Schiphol cargo date is real enough to fly.',
 },
 {
 question: 'When must the titer sample be drawn for the Netherlands to Dubai?',
 answer:
 'Check the MOCCAE portal before you skip a rabies antibody test for a Dutch origin. When a test is required, the result must be at least 0.5 IU/ml; the certificate is valid for 365 days if the vaccine stays valid and continuous and no booster is given; otherwise repeat the test; a first vaccine or a gap needs at least 21 days before the test, and a valid booster does not; the blood sample is taken within 90 days before travel, not as a wait after the draw.',
 },
 {
 question: 'Is a Dutch EU pet passport enough for UAE entry?',
 answer:
 'A Dutch EU pet passport helps with identity and vaccine history. UAE entry still needs a MOCCAE import permit and origin health papers that match the microchip. The passport does not accept the crate at Amsterdam Schiphol (AMS), and it does not clear cargo in Dubai.',
 },
 {
 question: 'What if Schiphol refuses the crate dimensions that week?',
 answer:
 'This route has no second Dutch airport. The conversation becomes a new date, a resized crate, or an exit through another country. It does not become Rotterdam or Eindhoven cargo. Confirm KLM, Emirates or Etihad live-animal rules before you rebuild the timeline around a hope.',
 },
 {
 question: 'How do I get a Netherlands to Dubai pet relocation quote?',
 answer:
 'Tell us about your move with the pet and the Amsterdam Schiphol date. We explain the next steps and any assessment fee before paid work starts. Read [what changes the cost](/guides/pet-relocation-cost-dubai/). You can also WhatsApp +971 50 478 2999. Include breed, weight and crate size, because Schiphol has no Dutch alternate on this list.',
 },
 ],
 },
 {
 slug: 'dubai-to-netherlands',
 countryKey: 'netherlands',
 title: 'Pet Relocation Dubai to Netherlands | Planning & Quote',
 meta: 'Moving a dog or cat from Dubai to Netherlands? Review documents, travel options and arrival planning, then request a quote for your pet and dates.',
 h1: 'Pet relocation from Dubai to Netherlands',
 heroAlt: 'Dog with Dutch flag cue ready for export from Dubai to Amsterdam',
 intro:
 'A move from Dubai to the Netherlands starts with EU entry at Amsterdam Schiphol (AMS), the only Dutch gateway on this route. Build the animal health certificate for AMS, then the MOCCAE export certificate, then a live-animal product. The microchip comes before the rabies vaccine. KLM is listed as cabin or cargo. Emirates and Etihad are listed as cargo. Schiphol can handle animals, and the booking still has to be a pet product. Rotterdam and Eindhoven are not arrival airports here. Tell us about your move with the pet and the Schiphol date.',
 snippetQuestion: 'How do I take a pet from Dubai to Amsterdam?',
 snippetAnswer:
 'Put the EU animal health certificate first, the MOCCAE export certificate second, and a live-animal booking into Amsterdam Schiphol (AMS) third. The microchip comes before the rabies vaccine, and a primary course usually needs 21 days. KLM is listed as cabin or cargo. Emirates and Etihad are listed as cargo. A MOCCAE import permit is for pets entering the UAE. Rotterdam, Eindhoven and Maastricht are not import airports on this route.',
 hubCardDesc: 'EU entry at Amsterdam Schiphol, then a UAE export certificate for the flight from Dubai.',
 destinationRules: EU_DEST('the Netherlands', 'AMS'),
 rulesSpecialties:
 'Dubai to the Netherlands is planned from one point of entry: Amsterdam Schiphol (AMS). European Commission rules ask for an ISO microchip before the rabies vaccine, a valid course, and a 21-day wait after a primary vaccination. An official or authorised veterinarian issues the EU animal health certificate inside the entry window, commonly about 10 days. The Commission currently lists the UAE among countries whose dogs, cats and ferrets can skip rabies antibody titration for non-commercial entry. Open the live list before you skip the lab. More than five pets with one traveller can move the trip onto commercial or Balai rules. Then request MOCCAE exit papers. Export certificates are often discussed as valid for about 30 days from issuance. Check the portal. There is no second Dutch arrival code. If AMS cannot take the animal that week, Eindhoven is not the substitute. KLM is listed as cabin or cargo. Emirates and Etihad are listed as cargo from the UAE.',
 difficulties:
 'Two misses are common. One is a random KLM passenger seat into Amsterdam Schiphol (AMS), on the hope that the animal building will absorb an unmarked crate. The building is not the booking. The other is a plan to import through Rotterdam or Eindhoven because someone will collect from another city. This list has AMS only. Maastricht is not on it either. A MOCCAE import permit does not apply on the way out. The export certificate, often about 30 days from issuance, can end before the EU certificate and the AMS slot line up. KLM is listed as cabin or cargo, which you reconfirm from Dubai. Emirates and Etihad are listed as cargo. A short drive after release is normal in the Netherlands. It does not create a second import airport. If AMS is closed to the crate that week, change the date or use a gateway in another country.',
 howItWorks:
 'Lock Amsterdam Schiphol (AMS) as the arrival. Decide whether the move is non-commercial or commercial, and read the live European Commission list before you skip a rabies antibody test for a pet from the UAE. Fit the ISO microchip before the rabies vaccine, and finish the 21-day wait after a primary course. An authorised veterinarian issues the EU certificate for AMS inside the entry window, commonly about 10 days. Shortlist KLM, Emirates or Etihad from Dubai International (DXB), Al Maktoum / Dubai World Central (DWC) or Abu Dhabi (AUH), and confirm the product into AMS. KLM is listed as cabin or cargo. Emirates and Etihad are listed as cargo. With the Dutch date firm, request the MOCCAE export certificate so it covers departure. Collection instructions come from the handler at Schiphol. The drive onward is a van after release. Keep AMS as the only Dutch code on the certificate. Dubai Pet Relocation coordinates the papers. The airline accepts the animal.',
 airportsNarrative:
 'The Dutch arrival airport on this route is Amsterdam Schiphol (AMS). Schiphol can handle live animals. The booking still has to be a pet product, and the EU certificate has to name this point of entry. Rotterdam The Hague, Eindhoven and Maastricht are not pet-import airports here. Most Dutch cities are a short road transfer from AMS. That convenience is not a second airport. Leaving the UAE, a Dubai International (DXB) passenger ticket often still moves the animal as cargo. Al Maktoum / Dubai World Central (DWC) is the cargo departure when that product is booked. Abu Dhabi (AUH) is the departure when the ticket is Etihad. Write AMS on the EU certificate, the airway bill and the UAE export file. Collection is a live-animal briefing at Schiphol, not a hug at the baggage belt. Do not print a Rotterdam or Eindhoven code on any paper in this file.',
 airlinesNarrative:
 'Confirm KLM, Emirates and Etihad again for UAE to the Netherlands. An inbound acceptance does not transfer. KLM is listed as cabin or cargo into Amsterdam Schiphol (AMS), and that is not a cabin promise leaving Dubai. Read the current KLM pet page for this city pair. Emirates is listed as cargo, with its own handler path at AMS. Etihad is listed as cargo. If the routing uses Abu Dhabi (AUH), the animal still has to arrive as an accepted pet product at Schiphol. Dubai Pet Relocation coordinates the file and does not fly the aircraft. Confirm the live policy for your dates before you pay. A guide does not replace a yes from KLM, Emirates or Etihad.',
 faqs: [
 {
 question: 'Is Dubai to the Netherlands just the inbound page reversed?',
 answer:
 'Leaving Dubai is EU entry at Amsterdam Schiphol (AMS) plus a UAE export certificate. Coming from the Netherlands is a MOCCAE import permit and cargo release in the UAE. The checklists do not swap. Start with the European Commission rules and a pet booking that Schiphol will actually accept.',
 },
 {
 question: 'Do I need a MOCCAE import permit to fly from Dubai to Schiphol?',
 answer:
 'An import permit is for a pet entering the UAE. Leaving for Schiphol needs a MOCCAE export health certificate timed to the EU animal health certificate. Confirm the current digital path. The export window is often discussed as about 30 days from issuance, so it has to cover the departure day.',
 },
 {
 question: 'Can we arrive at Rotterdam or Eindhoven instead of AMS?',
 answer:
 'Not on this route. Amsterdam Schiphol (AMS) is the only Dutch gateway listed. Rotterdam, Eindhoven and Maastricht are not import airports here. A road transfer after AMS is a ground choice. If Schiphol cannot take the crate that week, change the date or use a gateway in another country.',
 },
 {
 question: 'Does the Netherlands require a rabies titer from the UAE?',
 answer:
 'For non-commercial EU entry, the European Commission currently treats the UAE as exempt from rabies antibody titration for dogs, cats and ferrets. Verify the live list before you skip a test. You still need the microchip before the vaccine, a valid course, and the EU certificate. A primary course usually needs 21 days.',
 },
 {
 question: 'Does Schiphol’s animal facility mean any KLM seat works?',
 answer:
 'No. The animal building at Amsterdam Schiphol (AMS) is not a booking. The ticket has to be a live-animal product, and the EU certificate has to name AMS. KLM is listed as cabin or cargo. Confirm the current Dubai to Amsterdam policy with KLM before you brief anyone to wait at a passenger gate.',
 },
 {
 question: 'What UAE paper do I need on departure day to Amsterdam?',
 answer:
 'Take the MOCCAE export health certificate, aligned to the EU certificate dates. An import permit is the wrong document on the way out of Dubai. Validity is a short window, often discussed as about 30 days from issuance. Check the portal before you fix the Schiphol slot.',
 },
 {
 question: 'Can a pet fly cabin from Dubai to AMS on this corridor?',
 answer:
 'Emirates and Etihad are listed as cargo on this route. KLM is listed as cabin or cargo, which you confirm from Dubai rather than assume. Read the [Emirates pet cargo guide](/guides/emirates-pet-cargo/) and the [pet flight options hub](/guides/pet-flight-options-dubai/). Then confirm the live policy for your exact Dubai to Amsterdam Schiphol (AMS) pair.',
 },
 {
 question: 'What drives the cost of a Dubai to Netherlands pet export?',
 answer:
 'Tell us about your move with the pet and the Amsterdam Schiphol date. We explain the next steps and any assessment fee before paid work starts. Read [what drives pet relocation cost](/guides/pet-relocation-cost-dubai/). You can also WhatsApp +971 50 478 2999. One Dutch airport means the date and the crate size matter in the first message.',
 },
 ],
 },
 {
 slug: 'italy-to-dubai',
 countryKey: 'italy',
 title: 'Pet Relocation Italy to Dubai | Planning & Quote',
 meta: 'Moving a dog or cat from Italy to Dubai? Review documents, travel options and arrival planning, then request a quote for your pet and dates.',
 h1: 'Pet relocation from Italy to Dubai',
 heroAlt: 'Dog with Italian flag cue ready for pet relocation from Italy to Dubai',
 intro:
 'Most pets leave Italy for Dubai from Rome Fiumicino (FCO) or Milan Malpensa (MXP). Milan Linate (LIN) is a city airport and needs a stricter check before you rely on it. An Italian official veterinarian endorses papers that match the ISO microchip. ITA Airways is listed as cabin or cargo. Emirates and Qatar Airways are listed as cargo. The MOCCAE import permit is valid for 90 days from issuance, and the pet must enter the UAE inside that window. Clearance is at Dubai International (DXB) or Al Maktoum / Dubai World Central (DWC). Tell us about your move with the pet and the Italian airport.',
 snippetQuestion: 'FCO or MXP for a pet leaving Italy to Dubai?',
 snippetAnswer:
 'Rome Fiumicino (FCO) and Milan Malpensa (MXP) are both export airports on this route. Choose the one with a live-animal desk on your dates. Do not assume Milan Linate (LIN) matches Malpensa. Hold a MOCCAE import permit still inside 90 days from issuance, and plan cargo arrival at Dubai International (DXB) or Al Maktoum / Dubai World Central (DWC). ITA Airways is listed as cabin or cargo. Emirates and Qatar Airways are listed as cargo.',
 hubCardDesc: 'Rome or Milan export into Dubai cargo, with Italian papers and a 90-day MOCCAE permit.',
 rulesSpecialties:
 'Italy to Dubai is an Italian export that must also meet UAE entry, split between Rome Fiumicino (FCO) and Milan Malpensa (MXP). An EU pet passport helps identity. It is not the import permit. An Italian official veterinarian endorses papers with the ISO microchip, the rabies vaccine and the animal. The MOCCAE import permit is valid for 90 days from issuance, and the pet must enter the UAE inside that window. Check the portal before you treat Italy as exempt from a rabies antibody test. Fit the chip before the vaccine you will cite. Milan Linate (LIN) is a city-airport alternate, not a long-haul crate hub. ITA Airways is listed as cabin or cargo. Read the current ITA page, not an old Alitalia memory. Emirates and Qatar Airways are listed as cargo. Clearance is cargo at Dubai International (DXB) or Al Maktoum / Dubai World Central (DWC).',
 difficulties:
 'The argument is Rome versus Milan, plus Linate habit. A Milan family books Linate (LIN) because it is close, then finds no product toward Dubai, while Malpensa (MXP) would have worked. A Rome family refuses Malpensa and misses the only Gulf desk that week. ITA Airways cabin language on European sectors does not authorise cabin into Dubai. Emirates and Qatar Airways are listed as cargo, and Doha is another live-animal transfer. The permit fails if you wait for a later ITA or Emirates flight outside 90 days from issuance. The microchip must match the MOCCAE file. If ITA declines the crate, move to a confirmed Emirates or Qatar cargo product from Fiumicino (FCO) or MXP. Do not shop Linate passenger seats. Abu Dhabi (AUH) is not a default, because Etihad is not listed here.',
 howItWorks:
 'Choose Rome Fiumicino (FCO) or Milan Malpensa (MXP). Treat Milan Linate (LIN) as closed until the carrier says the desk is open. Fit the ISO microchip before the rabies vaccine, and check the MOCCAE portal for a rabies antibody test on an Italian origin. An Italian official veterinarian endorses the export papers for the airport you will actually use. Apply for the import permit so the 90 days from issuance cover cargo day. Book ITA Airways, Emirates or Qatar Airways only after that carrier accepts the pet. ITA is listed as cabin or cargo. Emirates and Qatar Airways are listed as cargo. If ITA says no, the fallback is Emirates or Qatar from FCO or MXP, not a Linate hop. A Qatar connection via Doha needs its own confirmation. In the final week, follow the MOCCAE parasite checklist and check the crate. Release is at DXB or DWC cargo. Dubai Pet Relocation coordinates the papers. The airline accepts the animal.',
 airportsNarrative:
 'Italian export airports on this route are Rome Fiumicino (FCO), Milan Malpensa (MXP) and Milan Linate (LIN). FCO is the long-haul airport for central and southern Italy, and a common ITA and Gulf cargo path. MXP is the northern long-haul airport. Malpensa cargo is not Linate. LIN is the city airport and needs a direct yes before you use it. North of the Apennines usually means MXP. Lazio and the south usually mean FCO. Do not split the difference at Linate. In the UAE, Dubai International (DXB) may be on the passenger ticket while the crate clears in cargo. Al Maktoum / Dubai World Central (DWC) is the other cargo clearance. Abu Dhabi (AUH) is not an Italy default, because Etihad is not listed. A cousin at Fiumicino will not collect a Malpensa crate. Use one code on the Italian certificate, the booking and the MOCCAE file.',
 airlinesNarrative:
 'Airlines on this route are ITA Airways, Emirates and Qatar Airways. ITA is listed as cabin or cargo out of Rome Fiumicino (FCO), and sometimes Milan. That is not a cabin right into Dubai. Read the current ITA pet page for Italy to the UAE, not an Alitalia forum post, for crate limits and whether the product is cargo. Emirates is listed as cargo. The FCO desk and the Malpensa (MXP) desk are different, so name the same code on the MOCCAE file. Qatar Airways is listed as cargo and may connect in Doha, which you confirm as a transfer. Dubai Pet Relocation coordinates the file. The airline decides if the pet travels. Confirm the policy before you build the crate or pay for the seat.',
 faqs: [
 {
 question: 'Can I export the crate from Milan Linate to Dubai?',
 answer:
 'Milan Linate (LIN) is an alternate, not the default. Confirm the carrier desk before you use it. Many long-haul pets use Milan Malpensa (MXP) instead. A Linate passenger ticket is not a crate booking. If LIN says no, truck to MXP or Rome Fiumicino (FCO) and put that code on the papers.',
 },
 {
 question: 'Fiumicino or Malpensa for a Bologna family?',
 answer:
 'Choose the airport with a live-animal product that week. Rome Fiumicino (FCO) and Milan Malpensa (MXP) are both on this route. For a family in Bologna, the road to either airport is normal. Distance matters less than the handler. Confirm before you truck the crate, and do not stop at Linate (LIN) unless that desk has said yes.',
 },
 {
 question: 'Can ITA Airways cabin the dog into Dubai?',
 answer:
 'ITA Airways is listed as cabin or cargo, and that is not a cabin seat into Dubai. Most dogs and cats travel as cargo. Emirates and Qatar Airways are listed as cargo. Confirm the live ITA policy for Italy to the UAE. An older Alitalia story is not the current rule.',
 },
 {
 question: 'Will the pet clear at DXB passenger arrivals from Rome?',
 answer:
 'On manifest cargo, expect cargo and veterinary release at Dubai International (DXB) or Al Maktoum / Dubai World Central (DWC). The passenger hall in Dubai is the wrong meeting point. Ask the handler where to collect after MOCCAE release. A Rome departure does not change that.',
 },
 {
 question: 'How long is the MOCCAE import permit on an Italian departure?',
 answer:
 'The MOCCAE import permit is valid for 90 days from issuance. The pet must enter the UAE inside that window. Waiting for a later ITA Airways or Emirates flight after the permit is issued is a common way to lose it. Match the permit to a cargo date the airline has accepted.',
 },
 {
 question: 'When should the titer blood be drawn for Italy to Dubai?',
 answer:
 'Check the MOCCAE portal before you skip a rabies antibody test for an Italian origin. When a test is required, the result must be at least 0.5 IU/ml; the certificate is valid for 365 days if the vaccine stays valid and continuous and no booster is given; otherwise repeat the test; a first vaccine or a gap needs at least 21 days before the test, and a valid booster does not; the blood sample is taken within 90 days before travel, not as a wait after the draw.',
 },
 {
 question: 'Is an Italian EU pet passport enough for UAE entry?',
 answer:
 'An Italian EU pet passport helps with identity and vaccine history. UAE entry still needs a MOCCAE import permit and origin papers that match the microchip. The passport does not accept the crate at Rome Fiumicino (FCO) or Milan Malpensa (MXP), and it does not clear Dubai cargo.',
 },
 {
 question: 'How do I get an Italy to Dubai pet relocation quote?',
 answer:
 'Tell us about your move with the pet, Rome or Milan, and your dates. We explain the next steps and any assessment fee before paid work starts. Read [what changes the cost](/guides/pet-relocation-cost-dubai/). You can also WhatsApp +971 50 478 2999. Say Fiumicino (FCO) or Malpensa (MXP), and whether Linate is only a wish.',
 },
 ],
 },
 {
 slug: 'dubai-to-italy',
 countryKey: 'italy',
 title: 'Pet Relocation Dubai to Italy | Planning & Quote',
 meta: 'Moving a dog or cat from Dubai to Italy? Review documents, travel options and arrival planning, then request a quote for your pet and dates.',
 h1: 'Pet relocation from Dubai to Italy',
 heroAlt: 'Dog with Italian flag cue ready for export from Dubai to Italy',
 intro:
 'A move from Dubai to Italy starts with EU entry at Rome Fiumicino (FCO) or Milan Malpensa (MXP), then UAE export papers. Treat Milan Linate (LIN) as unconfirmed unless the carrier and the Italian border post both accept the animal. The microchip comes before the rabies vaccine. An authorised veterinarian issues the EU certificate inside a short window, commonly about 10 days. ITA Airways is listed as cabin or cargo. Emirates and Qatar Airways are listed as cargo. With the Italian dates firm, time the MOCCAE export certificate to departure. Tell us about your move with the pet and the arrival city.',
 snippetQuestion: 'How do I take a pet from Dubai to Rome or Milan?',
 snippetAnswer:
 'Finish the EU animal health certificate first, the MOCCAE export certificate second, and a live-animal booking into Rome Fiumicino (FCO) or Milan Malpensa (MXP) third. The microchip comes before the rabies vaccine. Milan Linate (LIN) needs a yes from the airline and the border post. ITA Airways is listed as cabin or cargo. Emirates and Qatar Airways are listed as cargo. A MOCCAE import permit is for pets entering the UAE, not for this direction.',
 hubCardDesc: 'EU entry at Rome or Milan, then a UAE export certificate for the flight from Dubai.',
 destinationRules: EU_DEST('Italy', 'FCO, MXP, LIN'),
 rulesSpecialties:
 'Dubai to Italy is planned from an Italian point of entry, usually Rome Fiumicino (FCO) or Milan Malpensa (MXP). European Commission rules ask for an ISO microchip before the rabies vaccine, a valid course, and a 21-day wait after a primary vaccination. An official or authorised veterinarian issues the EU animal health certificate inside the entry window, commonly about 10 days. The Commission currently lists the UAE among countries whose dogs, cats and ferrets can skip rabies antibody titration for non-commercial entry. Open the live list before you skip the lab. More than five pets with one traveller can move the trip onto commercial or Balai rules. Then request MOCCAE exit papers. Export certificates are often discussed as valid for about 30 days from issuance. Italy forces a north-south choice. Milan Linate (LIN) is a city airport you should not promise. ITA Airways is listed as cabin or cargo. Emirates and Qatar Airways are listed as cargo from the UAE.',
 difficulties:
 'The split is Fiumicino versus Malpensa, and Linate looks convenient. A plan to collect in central Milan does not make LIN the point of entry if the certificate and the airline only work at Malpensa (MXP). Refusing a northern landing can miss the only confirmed Gulf arrival that week at Rome Fiumicino (FCO). A MOCCAE import permit does not apply on the way out. The export certificate, often about 30 days from issuance, expires if it is signed too early. Read the live ITA Airways page for Dubai to Italy. An Alitalia cabin memory is not a booking. Emirates and Qatar Airways are listed as cargo, and Doha is a second handling. A high-speed train after a confirmed FCO or MXP release is a ground trip. Printing LIN because the hotel is nearby is not. If ITA is unavailable, use confirmed Emirates or Qatar cargo into FCO or MXP.',
 howItWorks:
 'Lock Rome Fiumicino (FCO) or Milan Malpensa (MXP) unless the carrier and the Italian point of entry both accept Milan Linate (LIN). Decide if the arrival is non-commercial or commercial, and read the live European Commission list before you skip a rabies antibody test. Fit the ISO microchip before the rabies vaccine, and finish the 21-day wait after a primary course. An authorised veterinarian issues the EU certificate in the entry window, commonly about 10 days, with the real airport on it. Shortlist ITA Airways, Emirates or Qatar Airways from Dubai International (DXB), Al Maktoum / Dubai World Central (DWC), or Abu Dhabi (AUH) only if that routing is real. Etihad is not listed on this route. ITA is listed as cabin or cargo. Emirates and Qatar Airways are listed as cargo. With the Italian date firm, request the MOCCAE export certificate. Tell collectors which of FCO or MXP is on the certificate before they buy train tickets.',
 airportsNarrative:
 'Italian arrival airports on this route are Rome Fiumicino (FCO), Milan Malpensa (MXP) and Milan Linate (LIN). FCO is the usual long-haul arrival for central and southern Italy. MXP is the northern long-haul arrival. Linate is the convenience trap. A listed code is not a Linate import desk. Choose FCO or MXP from the carrier product, the Italian veterinary border, and who can collect. Leaving Dubai, a DXB passenger ticket often still ships the animal as cargo. Al Maktoum / Dubai World Central (DWC) is the cargo alternative when that product is booked. Abu Dhabi (AUH) is not a default to Fiumicino, because Etihad is not listed here. Fiumicino cargo and Malpensa cargo are different briefings. Linate remains a confirmation problem, not a third long-haul airport. Put the arrival code on the EU certificate and the airway bill.',
 airlinesNarrative:
 'Confirm ITA Airways, Emirates and Qatar Airways again for a departure from the UAE. Italy to Dubai acceptance does not transfer. ITA is listed as cabin or cargo into Rome, and that is not a cabin promise out of Dubai. The document to read is the live ITA pet page for Dubai to Rome or Dubai to Milan, not an Alitalia memory. Emirates is listed as cargo. Cargo into Fiumicino (FCO) is not the same handler note as cargo into Malpensa (MXP). Qatar Airways is listed as cargo via Doha, a second ramp. Dubai Pet Relocation coordinates the file and does not fly the aircraft. Ask the carrier to confirm cabin or cargo, breed limits and the crate before you pay for the seat.',
 faqs: [
 {
 question: 'Is Dubai to Italy the reverse of Italy to Dubai?',
 answer:
 'Leaving Dubai is EU entry at Rome Fiumicino (FCO) or Milan Malpensa (MXP), plus UAE export papers. Coming from Italy is a MOCCAE import permit and cargo release in the UAE. Swapping the country names does not build the file. Start with the Italian airport that will inspect the crate.',
 },
 {
 question: 'Do I need a MOCCAE import permit to leave Dubai for Rome?',
 answer:
 'An import permit is for a pet entering the UAE. Leaving for Rome needs a MOCCAE export health certificate timed to the EU animal health certificate. Confirm the portal path. Keep that export paper valid on the day you depart Dubai International (DXB) or the cargo airport on the booking.',
 },
 {
 question: 'FCO or MXP for collection — and can we use Linate?',
 answer:
 'Choose Fiumicino (FCO) or Malpensa (MXP) from the carrier product and who can collect. Treat Milan Linate (LIN) as unconfirmed unless the airline and the Italian border post both accept live animals there. A central Milan address is a drive from MXP after release, not a reason to print LIN.',
 },
 {
 question: 'Does Italy require a rabies titer from the UAE?',
 answer:
 'For non-commercial EU entry, the European Commission currently treats the UAE as exempt from rabies antibody titration for dogs, cats and ferrets. Verify the live list before you skip a test. Follow the microchip, vaccine and certificate rules either way. A primary course usually needs 21 days. The certificate window is commonly about 10 days.',
 },
 {
 question: 'Can ITA cabin the pet from Dubai into Fiumicino?',
 answer:
 'Do not assume cabin. ITA Airways is listed as cabin or cargo. Confirm the live Dubai to Italy policy, and use the current ITA page rather than an Alitalia recollection. Emirates and Qatar Airways are listed as cargo. The airline has to accept the pet on the flight you bought.',
 },
 {
 question: 'What UAE paper do I need on departure day to Italy?',
 answer:
 'Take the MOCCAE export health certificate, aligned to the EU certificate dates. An import permit is the wrong paper on departure. Validity is a short window, often discussed as about 30 days from issuance. Check the portal before you lock the Fiumicino or Malpensa slot.',
 },
 {
 question: 'Can we land at FCO and take the train to Milan?',
 answer:
 'A train after a confirmed Fiumicino (FCO) cargo arrival is a ground choice. It does not turn Milan Linate (LIN) into the arrival airport, and it does not replace the point of entry on the EU certificate. If the papers say Malpensa (MXP), that is where the crate is.',
 },
 {
 question: 'What drives the cost of a Dubai to Italy pet export?',
 answer:
 'Tell us about your move with the pet, Rome or Milan, and your dates. We explain the next steps and any assessment fee before paid work starts. Read [what changes the cost](/guides/pet-relocation-cost-dubai/). You can also WhatsApp +971 50 478 2999. Say Fiumicino (FCO) or Malpensa (MXP) in the first message.',
 },
 ],
 },
 {
 slug: 'ireland-to-dubai',
 countryKey: 'ireland',
 title: 'Pet Relocation Ireland to Dubai | Planning & Quote',
 meta: 'Moving a dog or cat from Ireland to Dubai? Review documents, travel options and arrival planning, then request a quote for your pet and dates.',
 h1: 'Pet relocation from Ireland to Dubai',
 heroAlt: 'Dog with Irish flag cue ready for pet relocation from Ireland to Dubai',
 intro:
 'Pets leave Ireland for Dubai from Dublin (DUB). Cork (ORK) counts only when that desk says yes. Shannon is not an airport on this route. Ryanair is listed as generally not accepting pets, so a low-cost seat is the wrong plan. Aer Lingus is listed as cabin or cargo. Emirates is listed as cargo. An Irish official veterinarian endorses papers that match the ISO microchip. The MOCCAE import permit is valid for 90 days from issuance. Dublin has fewer live-animal flights than a continental hub, so keep the permit inside that window. Clearance is at Dubai International (DXB) or Al Maktoum / Dubai World Central (DWC). Tell us about your move.',
 snippetQuestion: 'Can I fly a pet from Dublin to Dubai on Ryanair?',
 snippetAnswer:
 'Do not plan the pet on Ryanair. Ryanair is listed as generally not accepting pets. Use a carrier that publishes a live-animal product from Dublin (DUB), or from Cork (ORK) only if that airport accepts the crate. Hold a MOCCAE import permit still inside 90 days from issuance. Aer Lingus is listed as cabin or cargo. Emirates is listed as cargo. Most dogs and cats arrive as cargo at Dubai International (DXB) or Al Maktoum / Dubai World Central (DWC).',
 hubCardDesc: 'Dublin export into Dubai cargo. Ryanair generally does not accept pets.',
 rulesSpecialties:
 'Ireland to Dubai is an Irish export from an island with fewer long-haul pet flights, not a Ryanair cabin hop. An Irish official veterinarian endorses papers with the ISO microchip, the rabies vaccine and the animal, usually leaving Dublin (DUB). An EU pet passport helps identity. It is not the UAE permit. The MOCCAE import permit is valid for 90 days from issuance, and the pet must enter the UAE inside that window. Check the portal before you treat Ireland as exempt from a rabies antibody test. Fit the chip before the vaccine you will cite. Ryanair is listed as generally not accepting pets. Cork (ORK) is an alternate that often has no crate desk. Shannon is not on this list. Aer Lingus is listed as cabin or cargo, which is not cabin into Dubai. Emirates is listed as cargo. Clearance is cargo at Dubai International (DXB) or Al Maktoum / Dubai World Central (DWC).',
 difficulties:
 'The first miss is Ryanair habit. A low-cost seat for the people does not include the dog. Ryanair is listed as generally not accepting pets. The second is Cork. ORK is an alternate, not a proven long-haul crate airport. The third is the calendar. Dublin has fewer Gulf live-animal flights than Paris or Madrid, so a missed Aer Lingus or Emirates acceptance can push you past the 90 days on the MOCCAE permit. Aer Lingus cabin language on other routes does not authorise cabin into Dubai. Emirates is listed as cargo. The microchip on the Irish papers must match the permit. A refused Dublin crate is not solved by typing Shannon on the file. Shannon is not on this route. Abu Dhabi (AUH) is not a default, because Etihad is not listed. Collect from DXB or DWC cargo.',
 howItWorks:
 'Drop any plan that puts the pet on Ryanair. The export airport to book is Dublin (DUB). Treat Cork (ORK) as open only after a carrier confirms a live-animal desk. Shannon is not an option on this route. Fit the ISO microchip before the rabies vaccine, and check the MOCCAE portal for a rabies antibody test on an Irish origin. An Irish official veterinarian endorses the export papers. Apply for the import permit early enough that the 90 days from issuance still cover a thinner Dublin calendar. Book Aer Lingus or Emirates only after that carrier accepts the animal. Aer Lingus is listed as cabin or cargo. Emirates is listed as cargo. Ryanair stays generally not pets. In the final week, follow the MOCCAE parasite checklist and check the crate. Release is at Dubai International (DXB) or Al Maktoum / Dubai World Central (DWC) cargo. Dubai Pet Relocation coordinates the papers. The airline accepts the animal.',
 airportsNarrative:
 'Irish export airports on this route are Dublin (DUB) and Cork (ORK). DUB is the long-haul airport Aer Lingus and Emirates conversations can actually name. ORK is the Munster alternate. It is listed so you can ask, not so a Cork passenger flight becomes a crate to Dubai. Shannon is not on this list. Do not add it to the MOCCAE file. A family in Galway or Cork still usually crates at Dublin. In the UAE, Dubai International (DXB) may be on the passenger ticket while the animal clears in cargo. Al Maktoum / Dubai World Central (DWC) is a separate collection after the Dublin flight. Abu Dhabi (AUH) is not an Ireland default, because Etihad is not a listed airline. A refused Dublin product is a date or carrier problem, not a second-airport story. Use one code on the Irish certificate, the booking and the permit.',
 airlinesNarrative:
 'Airlines on this route are Aer Lingus, Emirates and Ryanair. Aer Lingus is listed as cabin or cargo. That is not a cabin seat into Dubai. Read the current Aer Lingus page for Ireland to the UAE, including crate and breed limits, and expect cargo unless the page says otherwise for your flight. Emirates is listed as cargo from Dublin, or from Cork only if a real product exists there. Ryanair is listed as generally not accepting pets. Do not brief the family that everyone does it. A seat already bought for the people does not change that. Dubai Pet Relocation coordinates the file and does not fly the aircraft. Confirm Aer Lingus or Emirates before you pay for the crate.',
 faqs: [
 {
 question: 'Can Ryanair take the dog from Dublin to Dubai?',
 answer:
 'Do not plan on Ryanair. It is listed as generally not accepting pets. Use a carrier that publishes a live-animal product, which on this route means confirming Aer Lingus or Emirates. If someone tells you otherwise, ask the airline for the written policy on that flight. A passenger booking is not a crate.',
 },
 {
 question: 'Dublin or Cork for the export?',
 answer:
 'Dublin (DUB) is the primary airport. Cork (ORK) needs an explicit live-animal confirmation. A Munster passenger flight does not carry the crate by itself. Shannon is not on this list, so do not add it as a backup when Dublin is full. Most pets still leave from DUB.',
 },
 {
 question: 'Can Aer Lingus cabin the pet into Dubai?',
 answer:
 'Aer Lingus is listed as cabin or cargo, and that is not a cabin seat into Dubai. Most dogs and cats travel as cargo. Emirates is listed as cargo. Confirm the live policy for Ireland to the UAE, including the breed and the crate, before you buy the ticket.',
 },
 {
 question: 'Will the pet clear at DXB passenger arrivals from Dublin?',
 answer:
 'On manifest cargo, expect cargo and veterinary release at Dubai International (DXB) or Al Maktoum / Dubai World Central (DWC). The passenger baggage hall is the wrong meeting point. Ask the handler where to collect after MOCCAE release. A Dublin ticket that says DXB can still mean the cargo village.',
 },
 {
 question: 'How long is the MOCCAE import permit from an Irish departure?',
 answer:
 'The MOCCAE import permit is valid for 90 days from issuance. The pet must enter the UAE inside that window. Dublin has fewer live-animal flights than a large hub, so a slipped date after issuance is expensive. Apply when you have a realistic Aer Lingus or Emirates cargo date.',
 },
 {
 question: 'When should the titer blood be drawn for Ireland to Dubai?',
 answer:
 'Check the MOCCAE portal before you skip a rabies antibody test for an Irish origin. When a test is required, the result must be at least 0.5 IU/ml; the certificate is valid for 365 days if the vaccine stays valid and continuous and no booster is given; otherwise repeat the test; a first vaccine or a gap needs at least 21 days before the test, and a valid booster does not; the blood sample is taken within 90 days before travel, not as a wait after the draw.',
 },
 {
 question: 'Is an Irish EU pet passport enough for UAE entry?',
 answer:
 'An Irish EU pet passport helps with identity and vaccine history. UAE entry still needs a MOCCAE import permit and origin papers that match the microchip. The passport does not accept the crate at Dublin (DUB), and it does not replace cargo clearance in Dubai.',
 },
 {
 question: 'How do I get an Ireland to Dubai pet relocation quote?',
 answer:
 'Tell us about your move with the pet and the Dublin date. We explain the next steps and any assessment fee before paid work starts. Read [what changes the cost](/guides/pet-relocation-cost-dubai/). You can also WhatsApp +971 50 478 2999. Say if Cork is a confirmed desk or only the city where you live.',
 },
 ],
 },
 {
 slug: 'dubai-to-ireland',
 countryKey: 'ireland',
 title: 'Pet Relocation Dubai to Ireland | Planning & Quote',
 meta: 'Moving a dog or cat from Dubai to Ireland? Review documents, travel options and arrival planning, then request a quote for your pet and dates.',
 h1: 'Pet relocation from Dubai to Ireland',
 heroAlt: 'Dog with Irish flag cue ready for export from Dubai to Ireland',
 intro:
 'A move from Dubai to Ireland starts with EU entry at Dublin (DUB), then UAE export papers. Cork (ORK) is possible only if live-animal import there is real. Ryanair is listed as generally not accepting pets. Aer Lingus is listed as cabin or cargo. Emirates is listed as cargo. The microchip comes before the rabies vaccine, and an authorised veterinarian issues the EU certificate inside a short window, commonly about 10 days. Ireland uses EU pet movement. Great Britain tapeworm rules do not copy across by default. With the Dublin date firm, time the MOCCAE export certificate to departure. Tell us about your move.',
 snippetQuestion: 'How do I take a pet from Dubai to Dublin?',
 snippetAnswer:
 'Build the EU animal health certificate for Dublin (DUB) first, the MOCCAE export certificate second, and a live-animal booking third. Ryanair is listed as generally not accepting pets, so it is not the plan. Aer Lingus is listed as cabin or cargo. Emirates is listed as cargo. Cork (ORK) only if that import is confirmed. The microchip comes before the rabies vaccine. A MOCCAE import permit is for pets entering the UAE.',
 hubCardDesc: 'EU entry at Dublin, then a UAE export certificate. Not a Ryanair seat.',
 destinationRules: EU_DEST('Ireland', 'DUB, ORK'),
 rulesSpecialties:
 'Dubai to Ireland is planned from an Irish point of entry, almost always Dublin (DUB). European Commission rules ask for an ISO microchip before the rabies vaccine, a valid course, and a 21-day wait after a primary vaccination. The Commission currently lists the UAE among countries whose dogs, cats and ferrets can skip rabies antibody titration for non-commercial entry. Open the live list before you skip the lab. More than five pets with one traveller can move onto commercial or Balai rules. Great Britain tapeworm rules, including Echinococcus treatment aimed at Britain, do not automatically apply at Dublin. Then request MOCCAE exit papers. Export certificates are often discussed as valid for about 30 days from issuance. Check the portal. Cork (ORK) stays unconfirmed unless import there is real. Ryanair is listed as generally not accepting pets. Aer Lingus is listed as cabin or cargo. Emirates is listed as cargo.',
 difficulties:
 'Three misses show up. Families buy Ryanair seats and assume the crate can follow. Ryanair is listed as generally not accepting pets. Others name Cork (ORK) because the house is in Munster, then find the certificate and the airline only work at Dublin (DUB). A third is pasting a Great Britain tapeworm timetable, or a GOV.UK checklist, onto an Irish file. Ireland is in the EU pet-movement framework, not a British arrival. A MOCCAE import permit does not apply on the way out. The export certificate, often about 30 days from issuance, can expire while you wait for the next Dublin live-animal flight. Aer Lingus is listed as cabin or cargo, which you reconfirm from Dubai. Emirates is listed as cargo. Shannon is not on this list. A road after Dublin is the normal way to reach Cork.',
 howItWorks:
 'Retire a Ryanair plan at the start. Lock Dublin (DUB) unless a carrier and the Irish point of entry both accept Cork (ORK). Decide if the arrival is non-commercial or commercial, and read the live European Commission list before you skip a rabies antibody test. Read the Irish and EU notes for dogs instead of a Great Britain tapeworm printout. Fit the ISO microchip before the rabies vaccine, and finish the 21-day wait after a primary course. An authorised veterinarian issues the EU certificate for DUB inside the entry window, commonly about 10 days. Shortlist Aer Lingus or Emirates from Dubai International (DXB), Al Maktoum / Dubai World Central (DWC), or Abu Dhabi (AUH) only if that routing exists. Etihad is not listed here. Aer Lingus is listed as cabin or cargo. Emirates is listed as cargo. Ryanair stays generally not pets. With the Irish date firm, request the MOCCAE export certificate so it covers a thinner Dublin calendar.',
 airportsNarrative:
 'Irish arrival airports on this route are Dublin (DUB) and Cork (ORK). DUB is the long-haul live-animal arrival most Aer Lingus and Emirates products can name. ORK is a Munster hope unless the carrier and the Irish veterinary border both accept the animal there. Shannon is not on this list. Most families collect in Dublin and continue by road. That drive is not a second import airport. Leaving the UAE, a DXB passenger ticket often still moves the animal as cargo. Al Maktoum / Dubai World Central (DWC) is the cargo alternative when that product is booked. Abu Dhabi (AUH) is not a default to Dublin, because Etihad is not listed. Write DUB on the EU certificate unless ORK is truly confirmed. Dublin collection is a cargo briefing. Cork remains a confirmation problem. Shannon stays off the paperwork.',
 airlinesNarrative:
 'Confirm Aer Lingus, Emirates and Ryanair again for a departure from the UAE. An Ireland to Dubai acceptance does not transfer, and Ryanair does not become an option in either direction. Aer Lingus is listed as cabin or cargo into Dublin (DUB). That is not a cabin promise out of Dubai. Read the live Aer Lingus pet page for this city pair. Emirates is listed as cargo, with its own handler path and a thinner weekday pattern than a huge continental hub. Ryanair is listed as generally not accepting pets. Do not put it in the plan as the crate carrier. Dubai Pet Relocation coordinates the file and does not fly the aircraft. Ask Aer Lingus or Emirates to confirm the animal before you pay.',
 faqs: [
 {
 question: 'Is Dubai to Ireland the reverse of Ireland to Dubai?',
 answer:
 'Leaving Dubai is EU entry at Dublin plus a UAE export certificate. Coming from Ireland is a MOCCAE import permit and cargo release in the UAE. Ryanair is the wrong plan in both directions. It is listed as generally not accepting pets. Start with a carrier that publishes a live-animal product into Dublin (DUB).',
 },
 {
 question: 'Can Ryanair take the pet from Dubai to Dublin?',
 answer:
 'Ryanair is listed as generally not accepting pets. Confirm the current policy if you were told otherwise, and do not plan on it. Aer Lingus is listed as cabin or cargo. Emirates is listed as cargo. A seat for the people on a low-cost flight does not move the crate from Dubai to Dublin.',
 },
 {
 question: 'Do I need a MOCCAE import permit to leave Dubai for Ireland?',
 answer:
 'An import permit is for a pet entering the UAE. Leaving for Ireland needs a MOCCAE export health certificate timed to the EU animal health certificate. Confirm the portal path. The export window is short, often discussed as about 30 days from issuance, and it has to cover departure.',
 },
 {
 question: 'Does Ireland require a rabies titer from the UAE?',
 answer:
 'For non-commercial EU entry, the European Commission currently treats the UAE as exempt from rabies antibody titration for dogs, cats and ferrets. Verify the live list before you skip a test. You still need the microchip before the vaccine, a valid course, and the EU certificate inside its entry window. A primary course usually needs 21 days.',
 },
 {
 question: 'Can the crate arrive in Cork instead of Dublin?',
 answer:
 'Only if live-animal import at Cork (ORK) is real for your carrier and the EU certificate names that point of entry. The default is Dublin (DUB). A road transfer after Dublin is the usual way to reach Munster. Shannon is not an alternate on this route.',
 },
 {
 question: 'Do Great Britain tapeworm rules apply at Dublin?',
 answer:
 'Do not copy a GOV.UK Great Britain checklist onto an Irish arrival. Ireland is in the EU pet-movement framework. Tapeworm treatment aimed at Britain, including Echinococcus timing, does not automatically apply at Dublin. Read the Irish and EU certificate notes for dogs and follow what that document requires.',
 },
 {
 question: 'What UAE paper do I need on departure day to Dublin?',
 answer:
 'Take the MOCCAE export health certificate, aligned to the EU certificate dates. An import permit is the wrong paper on the way out. Validity is a short window, often discussed as about 30 days from issuance. Check the portal before you book the Dublin flight, because the live-animal calendar is thinner than at a huge hub.',
 },
 {
 question: 'What drives the cost of a Dubai to Ireland pet export?',
 answer:
 'Tell us about your move with the pet and the Dublin date. We explain the next steps and any assessment fee before paid work starts. Read [what changes the cost](/guides/pet-relocation-cost-dubai/). You can also WhatsApp +971 50 478 2999. Say how many pets will travel, and whether Cork is a confirmed import or a drive after Dublin.',
 },
 ],
 },
]
