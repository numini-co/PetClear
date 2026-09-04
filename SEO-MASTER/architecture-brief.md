# TARGET SITE ARCHITECTURE — Dubai Pet Relocation (v1, 2026-09-04)

Evidence base: site-inventory.csv (81 URLs), keyword-universe.csv (576), competitor-gap.csv (21), regulatory-source-of-truth.csv (118 claims). Principle: existing equity matters — no URL changes unless cannibalization or misplacement forces it. No page without demonstrated separate search intent.

## KEYWORD OWNERSHIP DECISIONS (anti-cannibalization rulings)

1. **/service/pet-relocation-dubai/** owns "pet relocation Dubai" (money head term, decision stage). EXPAND from 892 words.
2. **/service/pet-relocation-to-dubai/** owns "pet relocation to Dubai" + "moving to Dubai with pets" (inbound directional). Must be visibly inbound-focused (arrival-side: import permit, cargo arrival, settling in).
3. **/service/pet-relocation-from-dubai/** owns "pet relocation from Dubai" (outbound directional; departure-side content).
4. **/service/international-pet-relocation/** owns "international pet relocation Dubai/UAE" (brand-agnostic international term).
5. **/service/pet-import-dubai/** owns "pet import Dubai/UAE" (commercial import intent); informational import intent is owned by /guides/uae-pet-import-requirements/ — cross-link, do not duplicate rules tables.
6. **/service/pet-export-dubai/** owns "pet export Dubai" (commercial export intent).
7. **/service/pet-transport-dubai/** owns "pet transport Dubai" (incl. local ground transport, pet taxi crossover intent).
8. **/service/dog-relocation-dubai/** owns "dog relocation Dubai" (money, species). **/dog-relocation-to-dubai/** (root, KEEP — already ranks) owns "dog relocation to Dubai" (inbound directional species). Differentiate: root page = inbound journey to Dubai.
9. Same ruling for cats: **/service/cat-relocation-dubai/** owns "cat relocation Dubai"; **/cat-relocation-to-dubai/** owns "cat relocation to Dubai".
10. **/service/moccae-pet-permit/** owns "MOCCAE pet permit service/assistance" (commercial). **/guides/moccae-import-permit/** owns "MOCCAE import permit" (informational how-to + walkthrough). Cross-link heavily; the guide is the linkable asset.
11. **/service/pet-shipping... ** — "pet shipping Dubai" / "pet cargo Dubai" are folded into /service/pet-relocation-dubai/ and /service/international-pet-relocation/ as secondaries. DO NOT create a separate pet-shipping page (SERP intent overlaps with pet relocation; foufoufly ranks one page for both).

## HUBS (MISSING — currently 404 but internally linked. CREATE WEEK 1)
- **/routes/** — route hub listing all route pages grouped inbound/outbound. Owns "pet relocation routes" navigational/hub intent.
- **/cities/** — emirate/city hub. Owns "pet relocation UAE cities" hub intent.
- Fix bare-URL 404s: ensure /routes and /cities (no trailing slash) redirect/resolve.

## ROUTES (existing: 8 inbound + 2 outbound — keep all)
Existing inbound: uk, usa, canada, australia, india, philippines, new-zealand, south-africa → all KEEP+EXPAND (unique rules/timeline/docs/cost per route).
Existing outbound: dubai-to-uk, dubai-to-usa → KEEP+EXPAND.
NEW inbound (justified by SERP demand + foufoufly coverage + GCC gap): germany-to-dubai, france-to-dubai, netherlands-to-dubai, singapore-to-dubai, saudi-arabia-to-dubai.
NEW outbound (justified by expat-churn demand + competitor coverage): dubai-to-canada, dubai-to-australia, dubai-to-india, dubai-to-philippines, dubai-to-germany, dubai-to-saudi-arabia.
HOLD (backlog, not enough demand evidence): belgium, switzerland, spain, italy, ireland, hong-kong, china, japan, korea, thailand, indonesia, malaysia, qatar, bahrain, kuwait, oman, turkey.
RULE: outbound pages must NOT be reversed inbound copies (destination requirements differ fundamentally — e.g. UAE→UK needs GB pet health cert + tapeworm, UK→UAE needs MOCCAE permit).

## GUIDES (existing 8 — keep all)
banned-dog-breeds-dubai, iata-pet-crate-requirements, moccae-import-permit, pet-relocation-cost-dubai, pet-travel-summer-dubai, rabies-titer-test-dubai, uae-pet-import-requirements + /guides/ hub.
NEW guides (justified): 
- /guides/pet-export-from-dubai/ (export process, destination endorsement)
- /guides/emirates-pet-cargo/ + /guides/etihad-pet-policy/ (airline decision support; factual, first-party, no affiliation claims)
- /guides/snub-nosed-dogs-flying-uae/ (brachycephalic — gap: mentioned everywhere, dedicated guide nowhere)
- /guides/dubai-pet-arrival-guide/ (post-arrival: customs clearance at DXB, Dubai Municipality registration, settling in — fragmented intent nobody owns)
- /guides/moccae-permit-application-walkthrough/ may be FOLDED INTO /guides/moccae-import-permit/ if single-intent (default: fold).
- /guides/pet-relocation-companies-dubai/ ("best pet relocation companies Dubai" comparison — SERP owned by error-prone listicles; must be honest, evidence-based, disclose bias).
HOLD/backlog: cost calculator tool, crate-size tool (build as interactive features on existing cost/crate pages, not new URLs).

## CITIES / EMIRATES
/cities/dubai/ KEEP (links to /dubai/ hub or merge role with /dubai/ — one should be emirate hub, other community hub: /cities/dubai/ = emirate-level overview incl. Dubai Municipality rules; /dubai/ = community directory. Deconflict or MERGE — default recommendation: MERGE /cities/dubai/ into /dubai/ with 301, unless audit shows distinct rankings).
/cities/abu-dhabi/ KEEP+EXPAND ("pet relocation Abu Dhabi" est. 260/mo, weak SERP).
NEW: /cities/sharjah/ (justified: ISS ranks emirate-level, real demand). Backlog: RAK, Ajman, Fujairah, UAQ.

## LOCAL /dubai/ PAGES (41 → graded consolidation)
Grade A (keep+strengthen, highest unique-utility potential): dubai-marina, jlt, jbr, palm-jumeirah, downtown-dubai, business-bay, jumeirah, arabian-ranches, dubai-hills, jvc, al-barsha, mirdif, dubai-south, deira, bur-dubai, umm-suqeim.
Grade B (improve with unique local content or merge into nearest A page): al-furjan, al-quoz, al-satwa, al-wasl, bluewaters, city-walk, creek-harbour, damac-hills, damac-hills-2, dubailand, dubai-investment-park, dubai-production-city, dubai-silicon-oasis, emaar-south, international-city, jvt, karama, meydan, motor-city, mudon, port-de-la-mer, sheikh-zayed-road, sports-city, victory-heights.
Near-duplicate groups from crawl MUST be broken up or consolidated: ND1 (business-bay/bur-dubai/karama), ND2 (city-walk/bluewaters/port-de-la-mer), ND3 (arabian-ranches/dubailand), ND4 (dubai-hills/meydan), ND5 (umm-suqeim/al-wasl).
Each kept local page needs: pickup logistics, high-rise vs villa access, distance/routing to DXB/DWC, nearby vets (verified only), realistic collection procedure, related communities, unique FAQs. Pages that can't support this get MERGED/NOINDEX/301.

## NEW COMMERCIAL PAGES
- /service/corporate-pet-relocation/ (B2B: corporate/employee/executive relocation with pets — low volume, high contract value; competitors: khimjis, crownrelo adjacent).
- HOLD (capability-dependent): /service/emergency-pet-relocation/ — create ONLY if business confirms urgent/last-minute capability.

## HOMEPAGE IA (recommended)
1. Hero: category definition + primary CTA ("Get a Relocation Quote" / "Check Your Route").
2. Trust bar (only VERIFIED claims — currently unverified: 400+ pets, 4.9★, 0 paperwork errors, 15-min reply, 24/7, 50+ countries).
3. Services grid (links to 10 /service/ pages) → routes strip (top corridors both directions) → how-it-works summary → cost teaser (link to cost guide) → compliance authority block (MOCCAE/IATA links to guides) → local coverage summary → FAQ (top 6 only) → final CTA.
Move detail-level content OFF homepage into hubs; homepage must not duplicate service/guide body copy.

## REGULATORY CORRECTIONS (blocking — apply before content rewrites)
1. VETO: site claims 90-day MOCCAE permit validity; first-party evidence (USDA APHIS, MOCCAE doc, RAK Customs) says **30 days**. Fix on all affected pages or verify on MOCCAE portal first.
2. Verify current permit fee (AED 200 vs 500 conflict), release fees (500/250 vs 1000/500 conflict) before publishing fee tables.
3. Correct common wrong assumptions the site may repeat: UAE→UK needs NO titer (UAE is UK-listed); UAE→EU no titer needed; UAE is CDC high-risk for USA; UAE is Australia Group 3 (180-day timeline).
4. Etihad cabin fee is USD 399 (not circulating outdated USD 1,500).
