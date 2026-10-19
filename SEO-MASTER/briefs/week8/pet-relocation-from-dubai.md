# Week 8 brief: /service/pet-relocation-from-dubai/ (finish W6 partial)

**Live state (main 2cabfdd; live page checked 2026-10-19):** LIVE. ~1,490 words in `<main>` (~1,840 rendered text). Calendar W3 target 1,700 to 2,000; W6 row "REFRESH (export pass): verify export cert fee consistency, finalise departure-side journey, add links to all outbound route pages".
**URL rule:** keep the URL. No redirects.

## Ownership (keyword-lock-map), do not cannibalise
- This page owns: **pet relocation from Dubai** (primary), leaving Dubai with pets, moving pet out of Dubai, taking dog/cat out of UAE, pet relocation out of UAE, returning home from Dubai with pet. Angle: the **departure journey** from decision to handover.
- /service/pet-export-dubai/ owns pet export Dubai, export dog/cat from Dubai, fly my dog from Dubai, urgent pet export, urgent pet flight Dubai to UK. Angle: the paid export file.
- /guides/pet-export-from-dubai/ owns MOCCAE pet export permit, export health certificate UAE pets, documents to take pet out of UAE, cost to export pet from Dubai, fit to fly certificate. Angle: process how-to.
- So this page **summarises** the MOCCAE export step in 2 to 3 sentences and links to the guide. No fee table, no step-by-step portal walkthrough here.

## Word count
- **Target: 1,800 to 2,000 words in `<main>`** (+300 to 500): the route link section (~150 words of region framing plus links), departure journey refinements and one extra FAQ.

## Gaps vs W6 calendar
1. **Route link row: only 2 of 30 outbound routes linked** (dubai-to-uk, dubai-to-usa). Add all 30 (list below, matching main `outboundTwins.ts` + DubaiToUK/DubaiToUSA pages + live sitemap, checked 2026-10-19) plus the hub /routes/.
2. Export certificate fee line: currently "A government fee applies; confirm current fees and validity on the official portal. Contested ranges are not published here." Keep this. It is labelled and distinct from the import permit. **No numerals.** Export certificate fee and validity are awaiting David; keep the confirm-on-portal line until he confirms.
3. **Remove inbound-titre content from step 2**: the live sentences on the inbound antibody certificate validity and the inbound 90-day clock. They are inbound UAE content, off-topic on this outbound page, and the certificate-validity claim is not in MOCCAE Resolution 109/2021. Replace with one line: "The UAE's 90-day MOCCAE import permit is an inbound rule and does not apply when leaving Dubai."
4. Destination-rules handoff: step 1 only names UK and USA. Add a short "destination rules differ" block with 3 verified examples (each one line, linking to its route page):
   - Great Britain: listed country, no titre, GB pet health certificate within 10 days, dog tapeworm 24 to 120 hours (GOV.UK, https://www.gov.uk/bring-pet-to-great-britain, VERIFIED 2026-10-19).
   - USA: UAE on CDC high-risk list; Dubai-vaccinated dogs need endorsed CDC form, titre or 28-day quarantine, facility reservation (https://www.cdc.gov/importation/dogs/high-risk-countries.html, VERIFIED 2026-10-19).
   - EU (Germany, France and others): UAE is on the EU titre-exempt list (European Commission, regulatory-source-of-truth.csv, high).
   - Australia: UAE is a DAFF Group 3 country, 180-day residency before export (DAFF, source-of-truth, high).
5. Em dashes: 5 rendered. Remove.
6. Airline/cargo step: add one verified line: Emirates allows cats and dogs from Dubai as checked baggage in the hold when total journey is under 17 hours, otherwise cargo (Emirates, source-of-truth, high), **but** some destinations force cargo (e.g. GB: pets must fly as cargo, GOV.UK). Rule: the destination decides.

## Departure journey outline (keep 7-step backbone, refine)
1. Read the destination rules first (eligibility check). Link the matching route page.
2. Build the timeline backwards from landing (destination clocks: certificate windows, tapeworm, titre waits).
3. Veterinary preparation in the UAE (chip, vaccines, destination tests; names and chip numbers consistent).
4. MOCCAE export health certificate: issued after pre-export inspection, scheduled close to departure; government fee, confirm on the MOCCAE portal. Link /guides/pet-export-from-dubai/ for the process.
5. Crate and cargo booking (IATA crate, seasonal and snub-nosed limits; cabin vs hold vs cargo is set by airline and destination).
6. Departure day at DXB or DWC (pouch on crate, handover).
7. Arrival at destination (customs or animal facility per destination; WhatsApp updates in business hours).

## Route link section (replace "Routes for taking a dog or cat out of the UAE")
Intro line (proposed): "Each destination has its own rulebook. Open your route, then send the eligibility check." Then:

- **GCC and Middle East:** [Dubai to Bahrain](/routes/dubai-to-bahrain/), [Dubai to Kuwait](/routes/dubai-to-kuwait/), [Dubai to Oman](/routes/dubai-to-oman/), [Dubai to Qatar](/routes/dubai-to-qatar/), [Dubai to Saudi Arabia](/routes/dubai-to-saudi-arabia/), [Dubai to Egypt](/routes/dubai-to-egypt/), [Dubai to Turkey](/routes/dubai-to-turkey/)
- **Europe and UK:** [Dubai to UK](/routes/dubai-to-uk/), [Dubai to Ireland](/routes/dubai-to-ireland/), [Dubai to France](/routes/dubai-to-france/), [Dubai to Germany](/routes/dubai-to-germany/), [Dubai to Italy](/routes/dubai-to-italy/), [Dubai to Netherlands](/routes/dubai-to-netherlands/), [Dubai to Spain](/routes/dubai-to-spain/)
- **Americas:** [Dubai to USA](/routes/dubai-to-usa/), [Dubai to Canada](/routes/dubai-to-canada/)
- **Asia:** [Dubai to India](/routes/dubai-to-india/), [Dubai to Pakistan](/routes/dubai-to-pakistan/), [Dubai to Philippines](/routes/dubai-to-philippines/), [Dubai to Singapore](/routes/dubai-to-singapore/), [Dubai to Malaysia](/routes/dubai-to-malaysia/), [Dubai to Indonesia](/routes/dubai-to-indonesia/), [Dubai to Thailand](/routes/dubai-to-thailand/), [Dubai to Hong Kong](/routes/dubai-to-hong-kong/), [Dubai to China](/routes/dubai-to-china/), [Dubai to Japan](/routes/dubai-to-japan/), [Dubai to South Korea](/routes/dubai-to-south-korea/)
- **Oceania and Africa:** [Dubai to Australia](/routes/dubai-to-australia/), [Dubai to New Zealand](/routes/dubai-to-new-zealand/), [Dubai to South Africa](/routes/dubai-to-south-africa/)
- [All pet relocation routes](/routes/)

## FAQ to add (40 to 90 words)
**Is pet relocation from Dubai the same for every country?**
No. Leaving Dubai always involves a MOCCAE export health certificate and a cargo or hold booking, but the destination sets everything else. Great Britain needs no titre from the UAE but has a 10-day certificate and a dog tapeworm window, while the USA treats the UAE as high risk for dog rabies. Open your route page first, then plan backwards from landing.

## CTA guidance
- Buyer: "Get a managed-move quote" (current H2 "Ready for a managed-move quote?"), WhatsApp +971504782999, quote after eligibility.
- Free help: route pages + export guide. Keep the export file purchase pointed at /service/pet-export-dubai/.

## Images (from SEO-MASTER/image-map.csv, for Visual Director; 4 rows mapped)
| Placement | Filename | Alt text | Caption |
|---|---|---|---|
| Hero | pet-relocation-from-dubai-husky-balcony-golden-hour.jpg (16:9) | Owner with their husky on a Dubai balcony beside a packed travel crate before relocating from Dubai | "Dubai has been home. Getting out with a pet takes a plan - here is ours." (replace " - " with a full stop) |
| Process (steps) | pet-relocation-from-dubai-outbound-journey-diagram.png (16:9) | Outbound pet relocation journey from Dubai with destination-specific rules highlighted | none. Labels already match the 7-step backbone |
| Detail (documents) | export-documents-crate-pouch-checklist-dubai.jpg (4:3) | Export documents pouch secured to a pet travel crate before departure from Dubai | "The document pouch travels on the crate - checked, copied and backed up digitally." (replace " - " with a comma) |
| CTA | pet-relocation-from-dubai-cta-cat-carrier-departure.jpg (16:9) | Owner carrying a cat carrier out of a Dubai villa to begin a relocation abroad | "Tell us where life is going next. We will get your pet there." |

## Hard locks
- Titre (MOCCAE Ministerial Resolution 109/2021, Art. 3(4)(c), https://www.moccae.gov.ae/assets/download/2025/M109-21.pdf.aspx): for pets from high-risk countries, an antibody titration test certificate from a laboratory approved by the exporting country's competent authorities, done before export, with a result of at least 0.5 IU/ml. The sample is taken at least 21 days after a first or interrupted vaccination, or directly if the animal has a valid booster. Confirm current timing on the MOCCAE portal. Never state a validity period for the titre certificate or a pre-travel window. The MOCCAE import permit (90 days from issue) is a separate clock.
- VERIFY items: no numbers in copy. MOCCAE export certificate fee and validity awaiting David.
British English; no em dashes; MOCCAE import permit 90 days from issuance is inbound only and must never be presented as the export certificate validity; no invented AED; government fees labelled confirm-on-portal; no volume claims; do not edit route pages except link targets.
