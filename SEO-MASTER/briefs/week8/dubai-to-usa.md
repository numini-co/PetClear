# Week 8 brief: /routes/dubai-to-usa/ (EXPAND / correct)

**Live state (main 2cabfdd; live page checked 2026-10-19):** LIVE. ~3,610 words in `<main>` (~3,950 rendered text). Calendar says ~3,858.
**URL rule:** keep the URL. Inbound twin /routes/usa-to-dubai/ is link only.

## Word count
- **Target: 3,600 to 3,900 words in `<main>`**, same length as now. This pass is mainly **corrections**: several live claims contradict CDC and APHIS (see the table below). Replace wrong blocks; do not add length on top of them.

## Title / H1 / meta (keyword-lock-map)
- Primary: **pet relocation Dubai to USA**. Secondary: moving dog from Dubai to USA, pet export Dubai to USA, shipping dog from Dubai to USA.
- Title: `Pet Relocation Dubai to USA: CDC Dog Rules, Import Form and Timeline`
- H1: `Pet Relocation from Dubai to the USA`
- Meta: `Moving a dog or cat from Dubai to the USA? The UAE is on the CDC high-risk list. See the CDC Dog Import Form, endorsed rabies form, titre or 28-day quarantine, and cat rules. Check your move.`

## Verified claims (first-party, fetched 2026-10-19)
| # | Claim | Source URL | Status |
|---|---|---|---|
| 1 | **United Arab Emirates is on the CDC list of high-risk countries for dog rabies**; dogs that have been there in the past 6 months must meet extra requirements | https://www.cdc.gov/importation/dogs/high-risk-countries.html | VERIFIED |
| 2 | Requirements depend on where the dog was vaccinated (US vs foreign) and countries visited in the past 6 months; Dog Importation Navigator | https://www.cdc.gov/importation/dogs/index.html | VERIFIED |
| 3 | **Every dog** entering the US needs a CDC Dog Import Form receipt; free; one per dog; can be done on travel day (CDC recommends a few days before); receipt valid for the arrival date only; new form if date or airport changes; photo within 15 days for dogs under 1 year | https://www.cdc.gov/importation/dogs/foreign-vaccinated-high-risk-countries.html and https://www.cdc.gov/importation/dogs/faqs.html | VERIFIED |
| 4 | Foreign-vaccinated (e.g. Dubai-vaccinated) dog from high-risk country needs: **Certification of Foreign Rabies Vaccination and Microchip form**, completed by a vet and endorsed by an official government veterinarian of the exporting country; completed no more than 30 days before travel; valid 30 days, single use; typed | foreign-vaccinated page above; https://www.cdc.gov/importation/hcp/dog-importation/index.html | VERIFIED |
| 5 | Valid rabies serology titre from a **CDC-approved laboratory**; sample at least 30 days after first valid vaccine and at least 28 days before US entry; pass is at least 0.5 IU/mL; valid for life if vaccine coverage does not lapse | same | VERIFIED. This is the **US destination rule**; label it "CDC rule". Do not mix with the UAE inbound titre rule (MOCCAE Resolution 109/2021 Art. 3(4)(c)) or the 90-day MOCCAE import permit |
| 6 | Without a valid titre: **28-day quarantine** at a CDC-registered animal care facility (can be shortened via PSM in set cases, personal pets only) | foreign-vaccinated page; FAQ | VERIFIED |
| 7 | Reservation at a **CDC-registered animal care facility** (exam + revaccination with US-licensed vaccine), arrival by air at that facility's airport, matching the Dog Import Form receipt; no domestic onward flight before services; importer pays facility costs | foreign-vaccinated page; https://www.cdc.gov/importation/dogs/approved-care-facilities.html | VERIFIED |
| 8 | No CDC-registered facilities in Alaska, Hawaii or US territories, so these dogs **cannot enter via Alaska, Hawaii or a territory** | https://www.cdc.gov/importation/dogs/faqs.html | VERIFIED |
| 9 | Dog at least 6 months old at entry; first rabies vaccine at or after 12 weeks; microchip before vaccine, readable by universal scanner; documents in English or certified translation | foreign-vaccinated page; FAQ | VERIFIED |
| 10 | **US-vaccinated dogs returning** (e.g. family dog that left the US): need a Certification of U.S.-Issued Rabies Vaccination form **endorsed by USDA before the dog left the US**; USDA export health certificates issued after 31 July 2025 are not accepted; otherwise follow foreign-vaccinated rules | https://www.cdc.gov/importation/dogs/faqs.html | VERIFIED. This is the only place "USDA endorsement" belongs on this page |
| 11 | Cats: CDC requires cats appear healthy; **no federal proof of rabies vaccination**; no general health certificate required by CDC; Hawaii and Guam impose their own cat quarantine | https://www.cdc.gov/importation/bringing-an-animal-into-the-us | VERIFIED (via search index of first-party page; direct fetch not run) |
| 12 | APHIS has **no animal-health import requirements for pet cats** from foreign countries | https://www.aphis.usda.gov/pet-travel/another-country-to-us-import/cats | VERIFIED via search index of first-party page; direct fetch blocked by APHIS WAF. Re-confirm in browser |
| 13 | APHIS dog import: screwworm certificate (official government vet, inspected within 5 days of shipment) only if origin is screwworm-affected; FMD-affected origin: clean coat, bath, 5 days from livestock | https://www.aphis.usda.gov/pet-travel/another-country-to-us-import/dogs | Rule VERIFIED via search index (fetch blocked). **Whether UAE is screwworm- or FMD-affected: VERIFY** on APHIS animal health status list |
| 14 | MOCCAE export health certificate in Dubai before departure: fee and validity | regulatory-source-of-truth.csv: secondary only | **VERIFY, awaiting David.** No numbers in copy. Label "government fee; confirm fee and validity on the MOCCAE portal" |
| 15 | Who in the UAE endorses the CDC foreign-vaccination form as "official government veterinarian" (MOCCAE vet) | not found first-party | **VERIFY** |
| 16 | Emirates, United, Delta, American pet cargo acceptance DXB to US airports with an animal care facility; summer embargo dates | airline sites | **VERIFY** (confirm current policy) |
| 17 | State rules: "registration with a local vet within 30 days", "all other states no quarantine" | none | **VERIFY**, soften to "check your destination state's agriculture department" |

## Live errors to fix (priority)
1. "USDA APHIS Health Certificate ... issued by a USDA-accredited UAE veterinarian ... required for both dogs and cats": **wrong.** USDA accreditation applies to US-licensed vets for exports from the US (APHIS process overview). APHIS has no cat import requirement (#12). For Dubai-vaccinated dogs, the CDC-required government-endorsed document is the Certification of Foreign Rabies Vaccination and Microchip form (#4). Replace the H2 "USDA APHIS Health Certificate" and FAQ "What is the USDA APHIS health certificate for pets entering the USA?"
2. "Since 2023, the CDC requires ... Dog Import Form" for high-risk dogs: **wrong date and scope.** Current rules date from 1 August 2024, and the form is required for every dog (#3).
3. "Airlines will not board a dog ... without the CDC receipt": soften to "shown to the airline if requested and to Customs and Border Protection on arrival" (CDC wording).
4. "Not all UAE vets hold USDA accreditation ... we work exclusively with accredited vets in Dubai": **remove** (misleading).
5. Hawaii and Guam blocks: rewrite. Foreign-vaccinated high-risk dogs cannot enter via Hawaii or territories (#8); they land at a mainland facility airport first. Cats: Hawaii and Guam local quarantine (#11). Remove "120-day" figures unless verified on Hawaii/Guam first-party (VERIFY).
6. "Registration with a local veterinarian within 30 days of arrival" and the named-states no-quarantine list: VERIFY or remove.
7. "Summer Travel Restrictions (May – September)": em dash, and dates need airline confirmation.
8. 9 rendered em dashes. Remove.
9. "From Dubai to New York, Los Angeles, Chicago ... we h[andle]": fine, but avoid any implied volume.

## Section outline
1. Intro: the UAE is CDC high-risk for dog rabies, so the US file starts at least 2 months out for dogs; cats are simpler.
2. Which lane is your dog in? (a) Dubai-vaccinated dog: foreign-vaccinated high-risk rules. (b) US-vaccinated dog returning with a USDA-endorsed US rabies form. Link the CDC Dog Importation Navigator.
3. Lane A documents: Certification of Foreign Rabies Vaccination and Microchip form (endorser in UAE: VERIFY), CDC-approved lab titre, facility reservation, Dog Import Form receipt.
4. CDC-registered animal care facility: what happens (exam, revaccination, 28-day quarantine without titre), arrival airport must match, no domestic connection first.
5. Lane B: returning US-vaccinated dogs (USDA endorsement before leaving the US; post-31 July 2025 certificates not accepted).
6. Cats from Dubai to the USA (CDC healthy-on-arrival, APHIS none, state and airline rules, Hawaii/Guam).
7. Dubai side: MOCCAE export health certificate (confirm on portal), crate, cargo booking.
8. Timeline working back from landing (CDC checklist: 60+ days, 30+ days, 30 days, travel week, travel day).
9. Airlines and airports (confirm current policy; only facility airports for lane A).
10. State rules handoff (link state agriculture departments; Hawaii special case).
11. Cost drivers, no package total; facility costs paid by importer (CDC), quote after eligibility.
12. FAQs. 13. Buyer vs free-help CTA.

## FAQs (PAA-led, 40 to 90 words)
**Is the UAE a high-risk country for bringing a dog into the USA?**
Yes. The CDC lists the United Arab Emirates as high risk for dog rabies, so any dog that has been in the UAE in the 6 months before entry must meet extra rules. For a dog vaccinated in Dubai, that means an endorsed CDC rabies vaccination form, a titre from a CDC-approved lab or a 28-day quarantine, and a reservation at a CDC-registered animal care facility.

**What is the CDC Dog Import Form?**
It is a free online form that every dog entering the United States needs, whatever country it comes from. You complete one per dog and receive a receipt by email, which is valid only for the arrival date and airport you entered. If your flight date or arrival airport changes, submit a new form. Dogs under one year need a photo taken within 15 days before travel.

**Does my dog need a titre test to fly from Dubai to the USA?**
Not strictly, but without one your dog must spend 28 days in quarantine at a CDC-registered animal care facility. To avoid that, a vet draws blood at least 30 days after the first valid rabies vaccine and at least 28 days before US entry, and a CDC-approved laboratory must report at least 0.5 IU/mL. Results stay valid if vaccination never lapses.

**Do cats need a rabies certificate to enter the USA from Dubai?**
Not at federal level. The CDC requires cats to look healthy on arrival and does not require proof of rabies vaccination, and APHIS sets no animal health import rules for pet cats. Your destination state and your airline may still ask for a rabies certificate, and Hawaii and Guam apply their own cat quarantine, so check those before booking.

**Can my dog fly from Dubai straight to Hawaii?**
Not if the dog was vaccinated outside the US. The CDC says there are no registered animal care facilities in Alaska, Hawaii or US territories, so a foreign-vaccinated dog from a high-risk country such as the UAE must first land at a mainland airport with a facility reservation. Hawaii then applies its own entry rules, which you should confirm with the state.

## Internal links
- /routes/usa-to-dubai/ (reverse twin, link only)
- /service/pet-relocation-from-dubai/, /service/pet-export-dubai/, /guides/pet-export-from-dubai/
- /routes/dubai-to-canada/ (sibling; note Canada is a separate rulebook)
- /routes/ (hub)

## CTA guidance
- Buyer: "Get Route Checked" managed-move quote, WhatsApp +971504782999, quote after eligibility (facility reservation and lab costs are third-party, importer pays per CDC).
- Free help: link the CDC Dog Importation Navigator and the export guide. Keep separate from the paid quote.

## Images (from SEO-MASTER/image-map.csv, for Visual Director)
| Placement | Filename | Alt text | Caption (as mapped) | Note |
|---|---|---|---|---|
| Hero | dubai-to-usa-crate-weighing-beagle-logistics.jpg (16:9, AI ok) | Crated beagle being weighed before a Dubai to USA pet relocation flight | "For the USA route, Dubai is CDC high-risk listed - the paperwork starts earlier than you think." | Claim VERIFIED. Replace " - " with a colon; neutral room only |
| Documents & timeline section | dubai-to-usa-cdc-dog-import-form-timeline-diagram.png (16:9, diagram) | Documents and timeline for exporting a dog from Dubai to the USA, including the CDC Dog Import Form | none | **Change diagram label** "USDA-endorsed health certificate where required" to "Endorsed CDC foreign rabies vaccination form (dogs)" and add "Titre or 28-day facility quarantine", "CDC-registered facility reservation". Cat lane: "Healthy on arrival; check state rules" |
| Arrival & reunion (before FAQ/CTA) | dubai-to-usa-arrival-beagle-american-lawn.jpg (16:9, AI ok) | Beagle reunited with its owner at their new US home after relocating from Dubai | "High-risk route, low-drama ending. That is the plan." | OK |

## Lock note for Orchestrator
The Week 8 instruction lists "USDA APHIS endorsement" as a hook. Per CDC and APHIS, USDA endorsement only applies to **US-vaccinated dogs returning** with a form endorsed before they left the US. It does not apply to Dubai-vaccinated dogs or cats. The brief scopes it to lane B.

## Hard locks
- British English; no em dashes; no invented AED; government fees labelled confirm-on-portal; no volume claims; buyer vs free-help CTA; WhatsApp +971504782999; preserve URLs.
- Titre (MOCCAE Ministerial Resolution 109/2021, Art. 3(4)(c), https://www.moccae.gov.ae/assets/download/2025/M109-21.pdf.aspx): for pets from high-risk countries, an antibody titration test certificate from a laboratory approved by the exporting country's competent authorities, done before export, with a result of at least 0.5 IU/ml. The sample is taken at least 21 days after a first or interrupted vaccination, or directly if the animal has a valid booster. Confirm current timing on the MOCCAE portal. Never state a validity period for the titre certificate or a pre-travel window. The MOCCAE import permit (90 days from issue) is a separate clock.
- VERIFY items (rows 13 to 17): no numbers, dates or named airlines/states as fact in copy until verified. MOCCAE export certificate fee and validity awaiting David.
