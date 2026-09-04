# Route Content Depth Checklist — Cursor Ship Gate (PR #25)

**Site:** dubai-pet-relocation.ae / PetClear  
**Owner:** DPR SEO Lead  
**Date:** 2026-09-05 (Asia/Makassar UTC+8)  
**Applies to:** ALL route pages — **10 live** + **50 new Route50** (`LOCKED_50_URLS.txt`)  
**Binding:** Content depth is a **ship gate** for Route50 PR #25 body expand. Fail any HARD LOCK or any FAIL row below → do not merge that slug.

**Companion:**  
- PAA ownership → `route-corridor-paa-ownership.md` + `.csv`  
- One-pager → `/workspace/route50/DEPTH_BAR.md`  
- System → `/workspace/route50/route50-content-system.md`  
- Gold samples → `/workspace/route50/exemplars/germany-to-dubai.json`, `dubai-to-germany.json` (≥1000 unique each)

---

## Alignment note (word budget upgrade)

Prior `route50-content-system` budgeted airports + airlines blocks at ~**350–550 words** and treated unique intros/FAQs as the main differentiation. **Owner upgrade (2026-09-05):** every route page must ship **≥1000 words UNIQUE body** (concatenated prose fields below). Tables alone never pass. This checklist **supersedes** the thin intro+FAQ-only bar for PR #25 / Tranche B while keeping airports/airlines block pattern + regulatory locks.

Countable fields (exclude nav/footer/templated chrome, H2 chrome labels, CTA button chrome, breadcrumb shells):

`intro` + `rulesSpecialties` + `difficulties` + `howItWorks` + `airportsNarrative` + `airlinesNarrative` + `uaeRules` / `destinationRules` prose (bullets + notes) + FAQ **answers**.

Payload must set `depthBar: "OWNER ≥1000 unique"` and `wordCountEstimate` ≥ 1000.

---

## HARD LOCKS (must appear correctly — instant FAIL if wrong)

| # | Lock | Correct | NEVER |
|---|---|---|---|
| H1 | MOCCAE **import** permit validity | **30 days from issuance**; pet must enter within that window | “90-day permit” / any 90-day validity claim for MOCCAE import |
| H2 | Rabies titer (when required) | Blood sample taken **within 90 days before travel**; result ≥ **0.5 IU/ml** | “Wait 90 days **after** the titer/draw” / “90-day waiting period after blood draw” |
| H3 | Fees | No invented MOCCAE / release / package / partner / airline fee numerals (AED or otherwise). Packages = **quote-only** | Invented AED/USD bands; live India-page fee copy |
| H4 | Airline / airport affiliation | None. No logos-as-proof. No “official partner”. No “MOCCAE-approved airline” | Partnership / endorsement claims |
| H5 | Direction | **Outbound ≠ reverse of inbound**. Never name-swap country strings | Paste inbound UAE-import essay onto `dubai-to-{country}` |
| H6 | Airports | **IATA + city** required for every airport row (seed + UAE DXB/DWC/AUH note) | Bare city or bare IATA; invented airports outside seed/SOT |
| H7 | Airlines | Each row: `cabin` / `cargo` / `cabin_or_cargo` / `generally_not` / `confirm` + **confirm current policy** until first-party cite; `verificationStatus` | Firm cabin claims without first-party URL; unverified upgraded to verified |
| H8 | Keyword volumes | **Never invent**. DataForSEO only when citing; null stays null. Never print volumes on page | Fabricated Labs/Ads numbers; printing cluster estimates on-page |

WhatsApp / CTA only: **+971504782999** / **Get Route Checked**.

---

## Required UNIQUE sections (purpose)

| # | Section / field | Purpose | Direction note |
|---|---|---|---|
| 1 | **Corridor-specific rules** (`rulesSpecialties` + `uaeRules` / `destinationRules`) | Direction-aware regulatory path for **this** OD | Inbound = UAE/MOCCAE entry; outbound = destination import high-level + UAE export cert (verify) — **not** a mirrored UAE essay |
| 2 | **What’s special about this origin/destination** (fold into intro + `rulesSpecialties`) | Why this corridor differs (chip standards, exempt/titer risk, breed lists, connection hubs, seasonal cargo) | Cite first-party or mark unverified; no invented embargo lists |
| 3 | **Hard failure points** (`difficulties`) | Permit timing, titer **sample window**, breed/embargo, docs order, summer cargo heat embargoes, wrong airport clearance | Must be corridor-specific — not a generic 5-bullet clone |
| 4 | **Step-by-step process** (`howItWorks`) | Scenario timeline owners can follow | Unique per slug; outbound plans **destination-backwards** |
| 5 | **Airports + airlines** (tables + `airportsNarrative` + `airlinesNarrative`) | Gateway clarity + mode reality | IATA+city; modes + confirm-current-policy; narrative depth (not tables alone) |
| 6 | **FAQs** (4–6 unique) | Own **corridor-family** PAAs only (see ownership MD) | Cost → cost guide; MOCCAE → moccae guides; airline policy → airline guides; quarantine deep-dive → import FAQ |
| 7 | **Deep internal links** (`relatedLinks`) | Guide/service/sibling depth | **Minimums** below |

### Internal-link minimums (PASS requires all)

| Min | Target type | Example |
|---:|---|---|
| 1 | Routes hub | `/routes/` |
| 1 | Reverse twin (if exists) | `germany-to-dubai` ↔ `dubai-to-germany` |
| ≥2 | Guides relevant to direction | inbound: import requirements, MOCCAE permit, titer/crates as needed; outbound: export-from-Dubai, destination-relevant guides |
| ≥1 | Money/service | `/service/pet-relocation-to-dubai/` or `/service/pet-relocation-from-dubai/` (direction-matched) |
| ≥1 | Sibling corridor (same family or adjacent) | e.g. AU twin ↔ NZ; GCC siblings |

**Floor:** ≥**6** meaningful body/related links total (≥3 was the prior DEPTH_BAR floor; this ship gate raises depth for PR #25). Anchors must be corridor-natural — no “click here”.

---

## Thin-content fails (instant FAIL)

| Fail mode | Why |
|---|---|
| Chrome-only / table-only | Nav+footer+airport table without ≥1000 unique prose |
| Inbound paste for outbound | Twin cannibalization (AU / PH / IN **extra-strict**) |
| Generic UAE essay with country swapped | Doorway / thin SERP risk |
| Duplicate FAQ strings across twins or siblings | FAQPage cannibalization |
| Missing airports **or** airlines block | Template contract break |
| Missing `airportsNarrative` or `airlinesNarrative` | Depth bar prose gap |
| Cost/MOCCAE/airline-policy FAQ owned on route when ownership map says guide | Intent steal |
| Invented fees / volumes / affiliations | Hard-lock breach |
| Wrong titer or 90-day permit wording | Regulatory lock breach |

---

## QA ship-gate checklist table (PASS / FAIL)

Use one row per slug. Mark **PASS** only if every applicable item passes. Any FAIL blocks ship for that slug.

| ID | Check | PASS if | FAIL if |
|---|---|---|---|
| D1 | Unique body word count | Concatenated countable fields ≥ **1000** | <1000 or chrome counted as body |
| D2 | `depthBar` + `wordCountEstimate` | Present; estimate ≥1000 and honest | Missing / inflated / <1000 |
| S1 | Corridor rules unique + direction-aware | Inbound ≠ outbound framing | Name-swap / reverse paste |
| S2 | Origin/destination specialties | Corridor-specific prose present | Generic UAE boilerplate only |
| S3 | Hard failure points | `difficulties` names real corridor failure modes (permit **30d**, titer **before travel**, breed/cargo/docs) | Generic clone / wrong titer wait |
| S4 | Step-by-step | `howItWorks` scenario unique | Identical steps across many slugs |
| S5 | Airports | Seed airports + UAE note; **IATA + city** each; narrative present | Missing codes/cities/narrative |
| S6 | Airlines | Modes + confirm-current-policy; unverified flagged; narrative present; **no affiliation** | Firm unverified claims / logos-as-partner |
| S7 | FAQs | 4–6 unique; own corridor PAAs only; no fee invention | Twin-clone FAQs / stolen cost-airline PAAs |
| S8 | Internal links | Hub + twin + ≥2 guides + ≥1 service + ≥1 sibling (≥6 total) | Below mins |
| R1 | MOCCAE import permit | **30 days from issuance** (inbound pages) | 90-day permit language |
| R2 | Rabies titer | Sample **within 90 days before travel**; ≥0.5 IU/ml when required | “90-day wait after draw” |
| R3 | Fees | Zero invented AED/partner/airline fee numerals | Any invented fee band |
| R4 | Volumes | No on-page volumes; null stays null | Invented or printed SEO volumes |
| R5 | Outbound ≠ inbound reverse | Distinct outbound intent (esp. AU/PH/IN) | Mirrored inbound |
| T1 | Live 10 also meet depth | Live routes upgraded or queued with same bar | Live left thin while Route50 ships deep |

**Ship decision:** all of D*, S*, R* = PASS for the slug → eligible. Else fix before merge.

---

## Cursor acceptance snippet (paste into PR review)

```
DEPTH GATE slug={slug}
words={wordCountEstimate} (>=1000?)
direction={inbound|outbound}
locks: permit30=Y/N titerBeforeTravel=Y/N noFees=Y/N noAffiliate=Y/N noVolPrint=Y/N
sections: rules/specialties/difficulties/howItWorks/airports+narrative/airlines+narrative/faqs/links
thin-fails: none?
PAA owner check: cost/moccae/airline-policy not stolen onto route?
RESULT: PASS | FAIL
```

---

## Scope reminder

| Set | Slugs |
|---|---|
| Live 10 | `uk-to-dubai`, `usa-to-dubai`, `canada-to-dubai`, `australia-to-dubai`, `india-to-dubai`, `philippines-to-dubai`, `new-zealand-to-dubai`, `south-africa-to-dubai`, `dubai-to-uk`, `dubai-to-usa` |
| Route50 50 | `/workspace/route50/LOCKED_50_URLS.txt` (no silent replacements) |

Do **not** invent keyword volumes. Prefer FAQ wording from `route-corridor-paa-ownership.md` (DataForSEO-traced). Do **not** open a new GitHub PR from this checklist alone — steer existing PR #25 body expand.
