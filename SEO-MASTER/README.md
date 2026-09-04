# DUBAI PET RELOCATION — SEO PROGRAM HANDBOOK (AI HANDOVER)
Site: https://dubai-pet-relocation.ae/ | Program assembled: 2026-09-04 | 13-week sprint: 2026-09-07 → 2026-12-06
This document is self-contained. Read sections 1–3 before touching ANY URL. All referenced files live in this directory.

---

## 1. PROGRAM OVERVIEW & STRATEGY
Three governing principles:
1. **One owner per keyword.** Every keyword has exactly ONE primary URL in `keyword-lock-map.csv`. Never create a page targeting a keyword another page owns. Directional twins exist deliberately (to-Dubai vs from-Dubai; commercial service vs informational guide) and are kept distinct by intent signalling, not by accident.
2. **Intent-first architecture.** Pages map to search intent (commercial decision / informational how-to / route-specific / local / airline decision-support). No page exists without demonstrated separate search intent (evidence in `new-page-justifications.md`).
3. **Quality over URL count.** 17 country route pairs and 4 emirate pages are deliberately HELD in `backlog.csv`. Thin doorway pages were merged (8 redirects). Do not resurrect them without new demand evidence.

13-week sprint phases: W1 Foundation & Truth (regulatory VETO fixes, 404 hubs, redirects staged, tracking) → W2 keyword sign-off + baselines → W3 core money pages → W4 cost/decision → W5 import authority → W6 export authority → W7–W8 routes (inbound then outbound) → W9 animal/special cases → W10 local consolidation → W11 airline/airport → W12 internal linking + technical consolidation → W13 QA + next-cycle planning. Every week closes with a WEEKLY REVIEW row (13-point checklist) in `content-calendar.csv`.

## 2. SITE ARCHITECTURE
Hubs and their clusters:
- **`/` (homepage)** — category entry. Rebuilt W3 per `homepage-ia.md` (BINDING): ~2,500–3,000 words, 12 sections; detail content lives on hubs, not the homepage.
- **`/services/`** — tier-comparison hub (PawPilot/PawPartner/PawVIP). Parents the 10 `/service/*` pages.
- **`/service/*`** — commercial money pages: pet-relocation-dubai (head term), pet-import-dubai, pet-export-dubai, pet-transport-dubai, international-pet-relocation, pet-relocation-to-dubai, pet-relocation-from-dubai, dog-relocation-dubai, cat-relocation-dubai, moccae-pet-permit, corporate-pet-relocation (W4). HOLD: emergency-pet-relocation.
- **`/routes/`** — route hub (created W1), 21 route pages by W11: 13 inbound (uk, usa, canada, australia, india, philippines, new-zealand, south-africa + new germany, france, netherlands, singapore, saudi-arabia) and 8 outbound (dubai-to-uk, dubai-to-usa + new canada, australia, india, philippines, germany, saudi-arabia). RULE: outbound pages are destination-side documents, never reversed inbound copies.
- **`/guides/`** — informational hub; 8 existing guides + 6 new (pet-export-from-dubai W6; pet-relocation-companies-dubai W4; snub-nosed-dogs-flying-uae W9; emirates-pet-cargo, etihad-pet-policy, dubai-pet-arrival-guide W11). Guides are the linkable assets; service pages are the commercial twins (cross-link, never duplicate rules tables).
- **`/dubai/`** — Dubai community hub + 16 Grade-A community pages after consolidation (W10). Absorbs `/cities/dubai/` (301).
- **`/cities/`** — emirate hub (created W1): abu-dhabi (expanded W10), sharjah (created W10); RAK/Ajman/Fujairah/UAQ in backlog.
- Root informational pages: `/how-it-works/`, `/about/`, `/contact/`, `/faq/`, `/dog-relocation-to-dubai/`, `/cat-relocation-to-dubai/` (KEEP at root — they rank; ruling 8/9).

## 3. KEYWORD OWNERSHIP RULES (read before creating ANY URL)
`keyword-lock-map.csv` (578 rows) is the single source of keyword truth. Columns include Primary URL, Primary/Secondary, Search Volume, Intent, Cluster, Cannibalization Risk, Priority Score, Status.
**The 12 pre-creation questions** — answer ALL before creating a URL:
1. Is the primary keyword already assigned to a Primary URL in the lock map? (If yes → STOP, use that URL.)
2. Does any existing page already serve this search intent?
3. Is there measured demand (cluster volume in `keyword-universe.csv`) above the HOLD threshold (~65/mo cluster for routes)?
4. What SERP competitors rank, and what is their depth? (see `competitor-gap.csv`)
5. Can the page be written with UNIQUE content, or is it a template-swap of a sibling?
6. Which parent hub does it belong to, and does the hub link to it?
7. What is the cannibalization risk vs the two nearest existing URLs, and how is intent differentiated?
8. Are first-party regulatory facts available in `regulatory-source-of-truth.csv` to support it? (If not, Regulatory Fact-Checker must add them BEFORE writing.)
9. Does `architecture-brief.md` explicitly authorize or HOLD this URL class?
10. What conversion goal / CTA taxonomy entry does it serve?
11. Can it earn at least 3 internal inbound links at launch (update `internal-link-map.csv`)?
12. What images (original vs AI) does it need (add rows to `image-map.csv`)?
If any answer fails, put the item in `backlog.csv` with justification instead of creating it.

## 4. CLUSTER INVENTORY & STATUS
- **Built (pre-program):** core-money service pages (thin — expanded W3), 8 inbound + 2 outbound routes (expanded W7/W8), 8 guides, 41 local pages (consolidated to 16 Grade-A + 17 Grade-B W10), 2 city pages.
- **Built during program:** route hub + city hub (W1), corporate B2B (W4), companies comparison (W4), export guide (W6), 4 new inbound routes (W7), 6 new outbound routes (W8), snub-nosed guide (W9), Sharjah (W10), Emirates/Etihad/arrival guides + Netherlands route (W11).
- **Pending/backlog:** 17 HOLD country pairs, RAK/Ajman/Fujairah/UAQ, emergency page (capability-gated), cost/crate tools, GCC expansion, breed pages (if SERP-justified), Grade-B local improvements — all in `backlog.csv` with demand evidence and blockers.

## 5. PAGES COMPLETED / PENDING
`page-roadmap.csv` (102 rows) holds per-URL actions: Action column = KEEP / REFRESH / EXPAND / MERGE / REDIRECT / REPOSITION / CREATE, with current vs recommended titles/H1s, word-count targets, quality scores, and action detail. The `content-calendar.csv` schedules every EXPAND/CREATE/MERGE to a week. As work completes, update the roadmap row (mark done in calendar Status column: planned → in-progress → ready → live) and log it in `change-log.csv`. MERGE targets: bur-dubai←karama, jbr←bluewaters, jumeirah←port-de-la-mer, downtown-dubai←city-walk, umm-suqeim←al-wasl, dubai-silicon-oasis←international-city; /dubai/←/cities/dubai/ and ←/dubai/sheikh-zayed-road/. REPOSITION: dubailand (district hub). REFRESH-to-break-ND4: meydan.

## 6. REGULATORY RULES (NON-NEGOTIABLE)
- `regulatory-source-of-truth.csv` (118 claims) is the ONLY source for regulatory figures. Each row: Claim, Source, Source URL, Jurisdiction, Date Checked, Confidence Level (high / medium / secondary-source), Page Using The Claim, Next Review Date.
- **VETO protocol:** the Regulatory Fact-Checker overrides Content Writers on any regulatory statement. If source-of-truth conflicts with site copy, the copy loses. Blocking example: the 90-day MOCCAE permit-validity claim is VETOED (first-party says 30 days — verified/confirm on MOCCAE portal before republishing, W1).
- **Confidence levels:** high = publish; medium = publish with verification note; secondary-source = label as estimate or verify first-party before publishing.
- **Freshness classes:** 30-day class (airline fees/rules, permit/release fees — Next Review ~30 days); 90-day class (process rules, mid-stability); 180-day class (stable law, e.g. Federal Law 22/2016 breed list, IATA CR1). Re-verify per Next Review Date column.
- **Last-verified display:** every page showing regulatory figures must display a "Last verified [date]" line; stale pages (>class window) drop to a re-verification queue.
- Known open verifications (W1): permit fee AED 200 vs 500; release fee 500/250 vs 1,000/500; MOCCAE exempt-country list capture; AVS Singapore first-party rows missing.

## 7. CONTENT QUALITY STANDARD
**The 14 questions every page answers:** (1) What is this service/process? (2) Who is it for? (3) What does it cost (itemized AED, verified)? (4) How long does it take (scenario timelines)? (5) What documents are needed, in order? (6) What are the eligibility/breed/species constraints? (7) What can go wrong (rejection/failure modes)? (8) What are the route/airline options? (9) What rules apply at origin AND destination? (10) What happens on arrival? (11) What do I need to do vs what does DPR do? (12) Why trust DPR (verified evidence only)? (13) FAQs (6–10, unique per page)? (14) What is the next step (one primary CTA)?
**AI content gate — 10 checks, ALL must pass before READY:** FACT (every figure traces to source-of-truth or verified internal data) / DUPLICATION (no >40% shingle similarity to any sibling) / INTENT (matches lock-map intent) / CANNIBALIZATION (12-question check) / REGULATORY (Fact-Checker sign-off) / BRAND (tone, no unsupported superlatives) / LINK (hub up-link + 3+ cross-links per internal-link-map) / CTA (taxonomy CTA present + tracked) / IMAGE (image-map rows fulfilled, alts written) / SCHEMA (valid JSON-LD for page type).
Patterns that win this SERP (competitor-notes §3): "Quick Answer" first paragraph, year-stamped titles, named author + Last Updated, numbered document frameworks, AED cost tables, scenario timelines, route cards, FAQ blocks, WhatsApp-first CTA.

## 8. IMAGE SYSTEM
`image-map.csv` (200 rows) defines every image: Section, Objective, Subject, Pet/People/Setting, Orientation, Aspect Ratio, Suggested Filename, Alt Text, Caption, Original Photo Preferred?, AI Image Acceptable?, full generation Prompt.
Rules: 31 rows REQUIRE original photos (AI substitution banned — trust-critical: team, real crates, facility, paperwork); 169 are AI-acceptable. Prompt style: photorealistic, natural light, Dubai-realistic settings, no text overlays. **Banned imagery:** muzzled/distressed animals, crates in cargo-hold darkness, visible competitor branding, fake "team" photos presented as real people, imagery implying airline/government affiliation. Alt text is mandatory (crawl baseline: 0 missing — keep it that way).

## 9. INTERNAL LINKING SYSTEM
Hub/spoke: hubs (`/`, `/services/`, `/routes/`, `/guides/`, `/dubai/`, `/cities/`) link down to all spokes; spokes link up to their hub and laterally to 2–4 siblings (e.g., route ↔ reverse route, guide ↔ commercial twin). `internal-link-map.csv` (400 rows: Source, Target, Recommended Anchor, Reason, Location, Priority P1/P2/P3) is executed W12 — P1 (102 rows) first. Anchor rules: use the recommended anchor or a natural variant; no target may receive >30% exact-match anchors; money-page anchors from guides use commercial phrasing ("get a quote for X"), guide anchors from service pages use informational phrasing. Every new URL needs ≥3 inbound links at launch — add rows to the map when creating pages.

## 10. CONVERSION ARCHITECTURE
CTA taxonomy (use only these; each is a tracked event): **Get Route Checked** (route pages) / **Check Pet Eligibility** (breed/species/snub-nosed) / **Get a Relocation Quote** (money pages, homepage, comparison) / **Check Documents** (export/import guides) / **Ask About Your Pet** (species pages) / **Calculate Estimated Cost** (cost guide) / **Check Your Timeline** (export/departure pages) / **WhatsApp a Relocation Coordinator** (transport/local pages; WhatsApp is the primary conversion channel in this SERP).
Tracking (GA4/GTM, baselined W1): one event per CTA type, WhatsApp deep-link clicks, form submits, phone clicks; leads reported by cluster in the weekly review. Corporate page uses an RFP/enquiry CTA, not instant WhatsApp quote.

## 11. TRUST & E-E-A-T RULES
Never publish an unsupported number. `trust-claims-register.csv` (234 claims, all initially REVIEW/unverified) is the workflow: Claim → URL → Evidence → Verified? → Date → Keep/change/remove. Barred until evidenced: 400+ pets relocated, 4.9★ Google rating, 0 paperwork errors (recommend permanent removal or rephrase to process language), 15-min WhatsApp reply, 24/7 availability, 50+ destination countries, all 18 license/certification claims (including any implied MOCCAE/IATA/IPATA endorsement — publish membership/license numbers or drop), 31 partnership/vetting claims (allowed only as process descriptions). When evidence arrives (screenshots, GBP link, license numbers), record it in the register with date, then the claim may go live. Named-author policy: every guide carries a named author + credentials + Last Updated date (E-E-A-T; mirrors the SERP leader's pattern).

## 12. CURRENT PRIORITIES & KNOWN PROBLEMS (as of 2026-09-04)
1. **90-day VETO** — 51 pages repeat "MOCCAE permit valid 90 days"; first-party says 30. Fixed W1 after portal verification. Status: tracked in `change-log.csv`.
2. **Fee conflicts** — permit AED 200 vs 500; release 500/250 vs 1,000/500; export cert site says 300–700 vs first-party AED 100. No fee table goes live before MOCCAE portal verification (W1).
3. **Unverified homepage trust claims** — held W1 pending evidence (see §11).
4. **Emergency page HOLD** — `/service/emergency-pet-relocation/` blocked pending written capability confirmation; decision gate W9.
5. **/service vs /services prefix inconsistency** — singular `/service/*` are the money pages; plural `/services/` is the tier-comparison hub. Both are intentional and indexed; do NOT "normalize" them — but never create new plural-prefix service URLs, and watch for internal-link typos between the two.
6. **Broken hubs (fixed W1)** — bare `/routes` and `/cities` 404 while internally linked; hubs created + 301s.
7. **Near-duplicate locals (ND1–ND5)** — resolved by W10 merges + Grade-A unique-content expansion.
8. **Metadata debt** — 6 titles >60 chars, 16 meta descriptions >160 chars (fixed W12).
9. **Source-of-truth gaps** — Singapore AVS first-party rows missing (needed W7); MOCCAE exempt-country list not captured (needed W5/W7); CFIA pages 404'd during audit (re-verify for W8 Canada page); 2026 Bengal cat ban is secondary-sourced (flag on Australia page).

## 13. NEXT RECOMMENDED ACTIONS & MONTHLY CYCLE
After W13, run a monthly cycle:
1. **Week A — measure:** GSC pulls; update Current Rank in lock map; conversion report by cluster; re-verify any regulatory row past its Next Review Date (30-day class monthly).
2. **Week B — decide:** re-grade Grade-B locals with impressions data (merge losers into nearest Grade A); review `backlog.csv` — promote items whose Blocked By condition cleared; review competitor moves (`competitor-notes.md` refresh if needed).
3. **Week C — produce:** refresh declining pages; build promoted backlog items (12 pre-creation questions + 10-check gate mandatory); outreach round (PropertyFinder, missmeow, petsguide).
4. **Week D — hygiene:** re-crawl sample, link/schema/metadata spot checks, update all CSVs and `change-log.csv`.
Immediate next-cycle priorities: cost calculator + crate tool builds; Qatar/Oman GCC pair (strongest HOLD demand); Grade-B re-grade; listicle outreach; RAK emirate page.

## 14. FILE INVENTORY (14 input files + 4 program files)
| File | What it is | How to update |
|---|---|---|
| `architecture-brief.md` | Binding target architecture: 11 keyword-ownership rulings, hubs, routes, local grading, regulatory corrections | Change only via stakeholder sign-off; log in change-log |
| `site-inventory.csv` | Crawl data for 81 URLs (titles, word counts, schema, links, near-duplicate groups) | Regenerate at each full re-crawl (W13, then monthly Week D) |
| `crawl-summary.md` | Human-readable crawl findings + limitations | Rewrite after each re-crawl |
| `keyword-universe.csv` | 576 researched keywords with volumes/intent/cluster | Append new discoveries; never delete rows |
| `keyword-lock-map.csv` | 578 keyword→URL ownership assignments + priority scores | Update on every page create/merge; Current Rank at each rank pull; mandatory check before ANY new URL |
| `competitor-gap.csv` / `competitor-notes.md` | 21-competitor SERP analysis, 10 content gaps, winning patterns | Refresh quarterly or when SERP shifts |
| `regulatory-source-of-truth.csv` | 118 verified regulatory claims w/ confidence + review dates | Add claims before writing dependent pages; re-verify per Next Review Date; record portal verifications |
| `trust-claims-register.csv` | 234 trust claims w/ verification status | Update on every evidence arrival; nothing publishes as fact while "Verified?" is no |
| `page-roadmap.csv` | 102-URL action plan (KEEP/REFRESH/EXPAND/MERGE/CREATE) | Update status as work completes; append rows for approved new URLs |
| `redirect-map.csv` | All 301s with reasons + status | Status: proposed → staged → live; add rows for any future merge |
| `new-page-justifications.md` | Evidence dossier for the 21 approved new URLs | Append a section whenever a backlog item is promoted |
| `homepage-ia.md` | Binding homepage structure + 48-section disposition map + barred claims list | Revisit only with stakeholder sign-off |
| `internal-link-map.csv` | 400 planned links w/ anchors + P1–P3 | Add rows for every new URL (≥3 inbound); mark implemented |
| `image-map.csv` | 200 image specs (filenames, alts, prompts, original-vs-AI flags) | Add rows per new page; mark delivered in W12 audit |
| `content-calendar.csv` | **The master 13-week calendar (106 rows: 93 tasks + 13 weekly reviews)** | Update Status column (planned → in-progress → ready → live); weekly review rows are the reporting record |
| `backlog.csv` | 36 deferred items w/ demand evidence + blockers | Review monthly; promote or prune |
| `change-log.csv` | Every decision/change with date, reason, owner | Append on every change — the program's memory |
| `README.md` | This handbook | Update when rules change |
