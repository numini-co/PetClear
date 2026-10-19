# Week 8 brief: /routes/dubai-to-uk/ (EXPAND / refine)

**Live state (main 2cabfdd, 2026-10-16; live page checked 2026-10-19):** LIVE, source `website/src/pages/DubaiToUK.tsx`. Last touched by PR #81 (managed-move realign).
**URL rule:** keep the URL. Do not rename, remove or redirect. Inbound twin /routes/uk-to-dubai/ is not edited, only linked.

## Word count
- Calendar says "keep ~3,680 words"; measured live is **~2,080 words in `<main>`** (~2,430 rendered including nav and footer). The 3,680 figure is stale after the PR #81 realign.
- **Target (Orchestrator ruling 2026-10-19): 2,100 to 2,400 words in `<main>`. Refine in place.** Replace weaker lines with the verified GOV.UK facts below rather than adding sections. Priority order: listed-country document and no blood test, 10-day certificate, tapeworm window with worked example, cargo-only and approved routes, arrival and customs.

## Title / H1 / meta (keyword-lock-map)
- Primary: **pet relocation Dubai to UK**. Secondary: moving dog from Dubai to UK, pet export Dubai to UK, tapeworm treatment dog Dubai to UK. Does not target "pet relocation Dubai" (money page) or "urgent pet flight Dubai to UK" (owned by /service/pet-export-dubai/).
- Title: `Pet Relocation Dubai to UK: No Titre Test, GB Certificate and Tapeworm Rule`
- H1: `Pet Relocation from Dubai to the UK`
- Meta: `Moving a dog or cat from Dubai to the UK? The UAE is a listed country, so no rabies blood test. GB pet health certificate within 10 days, dog tapeworm 24 to 120 hours. Check your move.`

## Verified hooks (GOV.UK first-party, fetched 2026-10-19)
Source for every item: GOV.UK guide "Bringing your pet dog, cat or ferret to Great Britain", https://www.gov.uk/bring-pet-to-great-britain (content API, public_updated_at 2024-10-24). Part URLs below.

| # | Claim (as it may appear on page) | GOV.UK part | Status |
|---|---|---|---|
| 1 | UAE is a "listed" country; document needed is a Great Britain pet health certificate | /bring-pet-to-great-britain/pet-travel-documents (listed-countries table: "United Arab Emirates: Great Britain pet health certificate") | VERIFIED |
| 2 | Rabies blood test only needed from a country that is not in the EU and not listed, so **no titre for UAE-origin pets entering GB** | /bring-pet-to-great-britain/rabies-blood-tests | VERIFIED |
| 3 | GB pet health certificate signed, stamped and dated by an official veterinarian (OV) with government authority; pet must **enter GB within 10 days** of issue | /bring-pet-to-great-britain/great-britain-pet-health-certificate | VERIFIED. Note: GOV.UK wording is "within 10 days of the certificate being issued", not "issued within 10 days of arrival". Use GOV.UK wording |
| 4 | Dog tapeworm: treat **no less than 24 hours and no more than 5 days (120 hours)** before entering GB; praziquantel or equivalent; product approved in country of use; vet records name, manufacturer, date, time, stamp and signature. Exemptions only Finland, Ireland, Northern Ireland, Malta, Norway | /bring-pet-to-great-britain/tapeworm-treatment-dogs | VERIFIED |
| 5 | If delayed beyond 120 hours, a new treatment may be needed | same | VERIFIED |
| 6 | Approved routes: you can only use certain routes and companies to enter GB; check before travel, they can change or be seasonal | /bring-pet-to-great-britain/travel-routes-pets | VERIFIED |
| 7 | By plane, **pets must travel as cargo** unless chartered private plane or recognised assistance dog | same | VERIFIED |
| 8 | Microchip before or at the same time as rabies vaccine; at least 21 full days after first vaccination before travel (day 1 is the day after) | /bring-pet-to-great-britain/microchip and /rabies-vaccination-and-boosters | VERIFIED |
| 9 | Non-compliance: quarantine up to 4 months or refused entry; owner pays | /bring-pet-to-great-britain (what you need to do) | VERIFIED |
| 10 | Balai rules if pet arrives more than 5 days before or after owner, more than 5 pets, or sale/rehoming | same | VERIFIED |
| 11 | Arriving from outside the EU: pet collected only after customs; an agent, airline or travel company can do this; National Clearance Hub nch@hmrc.gov.uk | /bring-pet-to-great-britain/coming-back-to-great-britain | VERIFIED |
| 12 | Banned breeds cannot enter GB without a valid Certificate of Exemption | main page | VERIFIED |
| 13 | Specific carriers (Emirates SkyCargo, British Airways, Virgin Atlantic) on the GB approved list for DXB to LHR/LGW/MAN | approved routes list (not found via GOV.UK API this run) | **VERIFY** |
| 14 | MOCCAE export health certificate before departure: fee and validity | regulatory-source-of-truth.csv: secondary only, MOCCAE WAF blocked | **VERIFY, awaiting David.** No numbers in copy. Publish only as "a government fee applies; confirm fee and validity on the MOCCAE portal" |
| 15 | Emirates: from Dubai, cats and dogs may travel as checked baggage in the hold if journey under 17 hours | Emirates FAQ (regulatory-source-of-truth.csv row, high) | VERIFIED for Emirates policy, but **GOV.UK cargo rule (#7) overrides for GB entry**. Do not suggest checked baggage into GB |

## Gaps on the live page
- Live copy says "On 22 September 2026 the UAE was a listed country". Keep a dated check line, but update the date at ship time and cite the GOV.UK table.
- No worked tapeworm example (GOV.UK gives one). Add a Dubai departure example: dog treated in Dubai at 10:00 on Monday, flight lands in London after 10:00 on Tuesday and before 10:00 on Saturday. Add the delay rule.
- Approved-route and cargo-only rule is buried in "Carriers". Make it its own H2.
- No arrival/customs section (GOV.UK #11). Add one.
- No Balai trigger block (owner flying separately more than 5 days apart is a common Dubai expat case).
- No cat paragraph (cats: no tapeworm rule, same certificate).
- Em dashes: 5 rendered on page. Remove.
- Image captions in image-map say "titer" (US spelling). Page copy: use "titre".

## Section outline (refine, ~2,100 to 2,400 words; no new H2s beyond those marked)
1. Intro (keep short): a listed-country move. No rabies blood test, but two clocks (10-day certificate, 24 to 120 hour dog tapeworm) set the flight.
2. What GOV.UK asks for from the UAE: verified table with citation and "checked on" date (refine existing "What GOV.UK asks for from Dubai").
3. The file in order (refine existing "The entry file, in order"): microchip, rabies vaccine and 21-day wait, MOCCAE export health certificate (government fee and validity: confirm on the MOCCAE portal, no numbers), GB pet health certificate by OV, tapeworm for dogs, declaration, cargo booking. Add one line for cats (no tapeworm rule, same certificate).
4. Tapeworm and certificate timing (refine existing "Dog tapeworm"): GOV.UK worked example adapted to a Dubai departure plus the delay rule. Replaces, not adds to, the current timing prose.
5. Carriers (refine existing "Carriers from Dubai"): lead with the GOV.UK cargo-only and approved-routes rule; carrier names stay VERIFY.
6. Arrival in Great Britain: one short paragraph (customs, agent collection, quarantine risk) folded into the existing "Travel day" step, not a new section.
7. Cost: keep the existing "What this page does not price" block (no package total; inbound UAE fees not reused as this move's price).
8. FAQs: keep 8 slots by replacing the weakest live FAQs with the 5 below, not adding to them.
9. Buyer vs free-help CTA (existing).
Dropped from the earlier plan: separate Balai and "fly separately" section (one sentence in the file order instead) and standalone arrival H2.

## FAQs (PAA-led, 40 to 90 words)
**Does my pet need a rabies titre test to move from Dubai to the UK?**
No. GOV.UK lists the United Arab Emirates as a "listed" country, and a rabies blood test is only needed for pets coming from countries that are neither in the EU nor listed. Your pet still needs a microchip, a rabies vaccination given at least 21 full days before travel, and a Great Britain pet health certificate. Check the GOV.UK table again before you book, because listings can change.

**What tapeworm treatment does my dog need to enter the UK from Dubai?**
A vet must treat your dog with praziquantel or an equivalent no less than 24 hours and no more than 5 days (120 hours) before you arrive in Great Britain. The vet records the product, manufacturer, date, time, stamp and signature on the certificate. If the flight is delayed beyond 120 hours, the dog may need treating again. Cats do not need this treatment.

**How long is the Great Britain pet health certificate valid?**
Your pet must enter Great Britain within 10 days of the certificate being issued. It must be signed, stamped and dated by an official veterinarian with authority from their government. Book the certificate appointment against your landing date, not your departure date, and leave room for the separate MOCCAE export health certificate in Dubai.

**Can my dog fly in the cabin from Dubai to London?**
No. GOV.UK states that pets entering Great Britain by plane must travel as cargo, unless you are on a chartered private plane or travelling with a recognised assistance dog. The airline and route must also be on the approved list for pet travel into Great Britain, so confirm the carrier before booking anything else.

**What happens when my pet lands in the UK from Dubai?**
Officials check the microchip and documents. Because you are arriving from outside the EU, the pet is released only after customs clearance, which an agent, airline or travel company can usually handle for you. If documents are wrong or preparation was missed, the pet can be quarantined for up to 4 months at your cost.

## Internal links
- /routes/uk-to-dubai/ (reverse twin, link only)
- /service/pet-relocation-from-dubai/ (departure journey hub)
- /service/pet-export-dubai/ (paid export file; owns "urgent pet flight Dubai to UK")
- /guides/pet-export-from-dubai/ (MOCCAE export certificate process)
- /routes/dubai-to-ireland/ (sibling)
- /routes/ (hub)

## CTA guidance
- Buyer: "Get Route Checked" managed-move quote, WhatsApp +971504782999, quote after eligibility.
- Free help: GOV.UK checklist summary on page + export guide link. Keep the two visibly separate.

## Images (from SEO-MASTER/image-map.csv, for Visual Director)
| Placement | Filename | Alt text | Caption (as mapped) | Note |
|---|---|---|---|---|
| Hero | dubai-to-uk-departure-cat-carrier-apartment.jpg (16:9, AI ok) | Owner carrying a cat carrier through a Dubai apartment before relocating from Dubai to the UK | "Dubai to Britain: no titer test needed, but the paperwork clock still matters." | Change caption spelling to "titre" |
| Documents & timeline section | dubai-to-uk-documents-tapeworm-timeline-diagram.png (16:9, diagram) | Documents and timeline for exporting a pet from Dubai to the UK, including the tapeworm treatment window | none | Diagram labels must read "GB pet health certificate (enter within 10 days of issue)" and "Tapeworm (dogs) 24 to 120 hours before arrival". No seals |
| Arrival & reunion (before FAQ/CTA) | dubai-to-uk-arrival-cat-london-sitting-room.jpg (16:9, AI ok) | Cat exploring its new UK home after relocating from Dubai | "New weather, same cat. Home is wherever the blanket lands." | OK |

## Hard locks
- Titre (MOCCAE Ministerial Resolution 109/2021, Art. 3(4)(c), https://www.moccae.gov.ae/assets/download/2025/M109-21.pdf.aspx): for pets from high-risk countries, an antibody titration test certificate from a laboratory approved by the exporting country's competent authorities, done before export, with a result of at least 0.5 IU/ml. The sample is taken at least 21 days after a first or interrupted vaccination, or directly if the animal has a valid booster. Confirm current timing on the MOCCAE portal. Never state a validity period for the titre certificate or a pre-travel window. The MOCCAE import permit (90 days from issue) is a separate clock.
- VERIFY items: no numbers or named carriers in copy until verified. MOCCAE export certificate fee and validity awaiting David.
British English; no em dashes; MOCCAE import permit 90 days from issuance (inbound only, do not imply it applies to export); titre: GB needs no rabies blood test from the UAE; do not add UAE inbound titre wording on this outbound page; no invented AED or GBP; government fees labelled confirm-on-portal; no volume claims; outbound twin is this page, inbound twin untouched.
