# Week 8 briefs (from 2026-10-26), Dubai Pet Relocation

Repo checked: numini-co/PetClear main @ 2cabfdd (2026-10-16, #85). PR #76 (eight inbound routes) is merged. Week 7 briefs are in repo at SEO-MASTER/briefs/week7/.

| Page | Live | Words in main (now) | Target | Brief |
|---|---|---|---|---|
| /routes/dubai-to-uk/ | yes | ~2,080 (calendar says 3,680; stale after PR #81) | 2,100 to 2,400 refine (Orchestrator ruling 2026-10-19) | dubai-to-uk.md |
| /routes/dubai-to-usa/ | yes | ~3,610 (calendar 3,858) | 3,600 to 3,900; corrections, not growth | dubai-to-usa.md |
| /service/pet-relocation-from-dubai/ | yes | ~1,490 | 1,800 to 2,000 | pet-relocation-from-dubai.md |

## Key findings
- **dubai-to-usa has wrong live claims**: "USDA APHIS health certificate by a USDA-accredited UAE vet required for dogs and cats" (APHIS: accreditation is for US vets; no cat import rule; CDC needs the endorsed Certification of Foreign Rabies Vaccination and Microchip form instead); "Since 2023" Dog Import Form (rules date from 1 August 2024, form needed for every dog); Hawaii/Guam blocks (foreign-vaccinated high-risk dogs cannot enter via Hawaii or territories).
- **dubai-to-uk** hooks all VERIFIED on GOV.UK; only carrier names on the approved-routes list and the MOCCAE export fee remain VERIFY.
- **pet-relocation-from-dubai** links 2 of 30 outbound routes; full 30-link row supplied. Remove inbound titre/import-permit paragraph from step 2.

## Rulings applied (Orchestrator, 2026-10-19)
- Titre (corrected ruling 2026-10-19, until David says otherwise): wording comes only from MOCCAE Ministerial Resolution 109/2021 Art. 3(4)(c), https://www.moccae.gov.ae/assets/download/2025/M109-21.pdf.aspx (fetched and confirmed 2026-10-19): antibody titration test from an approved laboratory, done before export, result at least 0.5 IU/ml; sample at least 21 days after a first or interrupted vaccination, or directly with a valid booster; confirm current timing on the MOCCAE portal. No stated certificate validity and no pre-travel window. MOCCAE import permit stays 90 days from issue, kept separate.
- dubai-to-uk: 2,100 to 2,400 word refine.
- VERIFY items and MOCCAE export certificate fee/validity: no numbers in copy; fee and validity awaiting David.

## Merge timing
- /routes/dubai-to-uk/ and /routes/dubai-to-usa/: **no body-copy merges until after 29 Oct 2026** (PR #81 window).
- PR #76 pages (the eight inbound routes, including /routes/germany-to-dubai/): no body-copy merges until after 26 Oct 2026.
- **First merge after 29 Oct: the dubai-to-usa factual corrections** (USDA/APHIS certificate claim, Dog Import Form date and scope, Hawaii/Guam). Then dubai-to-uk refine.
- /service/pet-relocation-from-dubai/ is not in either window; the route link row can go in the Week 8 batch.

## Germany FAQ check (PR #76)
Live /routes/germany-to-dubai/ ships 6 FAQs (6 Question nodes in FAQPage schema). My week7 germany-to-dubai.md brief supplied 2 draft FAQs and asked to "expand to 5". **6 is not a gap; it exceeds the brief.** FAQs 1, 2 match the brief text; 3 to 6 (Berlin/Munich, titre timing, cost, DXB arrival) are on-intent and within the fee/volume locks. FAQ 4 (titre) asserts a 365-day certificate and "not a 90-day sample window"; under the Resolution 109/2021 lock it needs rewording (listed for Frontend, not edited). Its "at least 21 days after a first vaccine" line matches Art. 3(4)(c)(1). Germany is on the MOCCAE Annex 1 low-risk list, so the FAQ should lead with "usually not required". Also on the outbound twin data (dubai-to-germany) a FAQ reads "How do I get a We quote for Dubai to Germany?" (typo, out of Week 8 scope; flag for a quick fix).
