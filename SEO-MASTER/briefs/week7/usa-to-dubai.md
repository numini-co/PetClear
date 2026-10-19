# Week 7 brief: /routes/usa-to-dubai/

**Live state (main + sitemap, checked 2026-10-12):** LIVE (legacy page, pages/USAToDubai.tsx)
**Action:** EXPAND/upgrade existing copy. Never rename, remove or redirect.
**Current unique words:** ~1,980 (estimate); total rendered ~2,370. Depth bar: at least 1,000 unique words (route50/DEPTH_BAR.md). Calendar target for Week 7 is higher (2,200 to 3,800); reach it with origin-side detail, scenarios and FAQs, never filler.

## Title / H1 / meta (keyword-lock-map.csv)
- Primary: **pet relocation USA to Dubai** (route page; does not target money term 'pet relocation Dubai', which stays on /service/pet-relocation-dubai/)
- Title: Pet Relocation USA to Dubai: USDA Certificate, Timeline and Quote
- H1: Pet Relocation from the USA to Dubai
- Meta: Bringing a dog or cat from the USA to Dubai? USDA-endorsed health certificate steps, MOCCAE permit valid 90 days, airline cargo options and timeline. Get your route checked.

## Top gaps vs depth bar
- Thinnest of the 4 legacy pages; timeline is a generic 5-step clone
- No scenario timelines by US region / hub
- USDA endorsement section exists only as an FAQ; needs body section (VERIFY first-party)
- No return-to-US / CDC forward-planning note
- Hub list lacks airport codes narrative; 'Other US carriers' heading vague
- No cat paragraph despite 'bring cat from USA to Dubai' primary

## Section outline (unique origin-side content)
1. Corridor intro: long-haul, often one-stop; temperature embargoes from US hubs; state vs federal roles
2. Origin-side rules: USDA-accredited vet issues certificate, USDA APHIS endorsement [VERIFY: APHIS appears in source-of-truth only as a source for UAE-side claims; the endorsement workflow itself is not logged]
3. USDA endorsed health certificate UAE (owns that secondary keyword): what endorsement means, timing relative to flight, VEHCS digital vs paper [VERIFY]
4. Document sequence and scenario timelines: 'East Coast direct (JFK/IAD/BOS)' vs 'Mid-West connection via hub' vs 'West Coast (LAX/SFO/SEA) heat-season'
5. Re-entry note: if the family may return to the US, link /routes/dubai-to-usa/ and say CDC dog rules change; CDC claim is VERIFIED first-party (Certification of U.S.-Issued Rabies Vaccination form)
6. Airports/airlines block: JFK, IAD, BOS, ORD, IAH, DFW, ATL, LAX, SFO, SEA, MCO -> DXB/AUH. Emirates SkyCargo (VERIFIED cargo-only into Dubai), Etihad (confirm), United/others via connection (confirm current policy)
7. Cat-specific paragraph ('bring cat from USA to Dubai')
8. Buyer vs free-help CTA

## FAQs (PAA-led, 40 to 90 words each)
**Can I bring a dog to Dubai from the USA?**
Yes. US-origin dogs and cats can enter the UAE with an ISO microchip, a valid rabies vaccination, a MOCCAE import permit issued no more than 90 days before arrival, and a health certificate from a USDA-accredited vet that has been government endorsed. Pets land as manifest cargo. Some breeds are restricted, so start with a free eligibility check before booking anything.
_(61 words)_

**Does the USDA need to endorse my pet's health certificate for Dubai?**
Plan on it. The UAE expects a government-endorsed origin certificate, and in the US that endorsement comes through the federal animal health authority after your accredited vet signs. Book the vet visit so endorsement lands close to the flight while the MOCCAE permit is still inside its 90-day window. We check timing as part of route coordination.
_(57 words)_

**Which airline to Dubai allows pets from the USA?**
Emirates carries pets to Dubai as cargo through SkyCargo, and does not take pets in the cabin on itineraries ending in Dubai. Etihad and other carriers may route through their hubs, often with seasonal heat limits from southern US airports. Policies change, so confirm current rules with the airline. We compare live options once your pet's size and month are known.
_(61 words)_

**How long does it take to move a pet from the USA to Dubai?**
Allow about 4 to 8 weeks for a typical healthy adult pet with current vaccinations. The main steps are the MOCCAE permit, the accredited vet exam, government endorsement and a cargo booking that fits heat rules. Puppies, new vaccinations or restricted breeds take longer. Use the free eligibility check to see which timeline applies to you.
_(56 words)_

## Internal links
- /routes/dubai-to-usa/ (reverse twin)
- /routes/canada-to-dubai/ (sibling)
- /service/pet-relocation-to-dubai/
- /guides/uae-pet-import-requirements/
- /service/moccae-pet-permit/
- /guides/dubai-pet-arrival-guide/
- /routes/

## CTA guidance
- Buyer: 'Get Route Checked' quote form + WhatsApp +971504782999 (paid coordination, quote after eligibility).
- Free help: free eligibility check + DIY links to import guide and MOCCAE permit explainer. Keep the two visibly separate.

## VERIFY items (ship softened until logged first-party)
- USDA APHIS endorsement process / VEHCS wording (not logged first-party for US export)
- United and other US carrier pet cargo acceptance to DXB
- US titre status: the USA is NOT in MOCCAE Resolution 109/2021 Annex 1 low-risk list (2025 PDF), so a titre is likely required for US-origin pets. Confirm on the MOCCAE portal and check the live page FAQ 'Is the USA low-risk for pet import to Dubai?'

## Hard locks (apply to every line of proposed copy)
- British English. No em dashes anywhere (use commas, colons or full stops). The live page currently renders many em dashes from the shared template; Frontend Builder should replace them in this route's strings.
- MOCCAE import permit: valid 90 days from issuance; the pet must enter the UAE inside that window. Never 30.
- Titre (MOCCAE Ministerial Resolution 109/2021, Art. 3(4)(c), https://www.moccae.gov.ae/assets/download/2025/M109-21.pdf.aspx): for pets from high-risk countries, an antibody titration test certificate from a laboratory approved by the exporting country's competent authorities, done before export, with a result of at least 0.5 IU/ml. The sample is taken at least 21 days after a first or interrupted vaccination, or directly if the animal has a valid booster. Confirm current timing on the MOCCAE portal. Never state a validity period for the titre certificate or a pre-travel window. The MOCCAE import permit (90 days from issue) is a separate clock.
- Fees: no package totals, no invented AED or airline tables. Government fees only labelled and "confirm on the MOCCAE portal" (portal figures on file: permit AED 200, release AED 500 dog / AED 250 cat, all confirm-on-portal). Everything else: quote after eligibility check.
- No volume claims ("hundreds of pets", "many families", "thousands of moves"). No SEO volumes printed on page.
- Origin-side authority claims only where marked VERIFIED below; anything marked VERIFY ships as softened wording ("your official vet authority will confirm") until SEO logs a first-party source in regulatory-source-of-truth.csv.
- Airlines: describe as "confirm current policy"; no affiliation, no logos, no "MOCCAE-approved airline". Emirates first-party: itineraries ending in Dubai carry animals as cargo (SkyCargo), no cabin pets.
- CTAs: buyer path = "Get Route Checked" (paid coordination quote, WhatsApp +971504782999); free-help path = free eligibility check + /guides/uae-pet-import-requirements/ + /service/moccae-pet-permit/ explainer. Label the split clearly.
- Never rename, remove or redirect the URL. Outbound twin page is not edited except to confirm its link back.
- Quarantine content stays owned by /guides/uae-pet-import-requirements/ (link only).
