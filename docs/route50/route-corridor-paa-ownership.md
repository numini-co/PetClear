# Route Corridor PAA Ownership — DataForSEO (Route50 + Live)

**Site:** dubai-pet-relocation.ae / PetClear  
**Date:** 2026-09-05 (Asia/Makassar UTC+8)  
**Rule:** Every question below was returned in a Google `people_also_ask` block via DataForSEO SERP organic live/advanced. **Nothing invented. No invented volumes** (volume column left blank / null).

**Ship-gate companion:** `route-content-depth-checklist.md`  
**Prior global PAA brief:** `paa-qa-ownership-brief.md` (sitewide seeds; this file is **corridor-family** seeds)

---

## 1. Method + cost

| Item | Detail |
|---|---|
| Endpoint | `POST https://api.dataforseo.com/v3/serp/google/organic/live/advanced` |
| Auth | Basic (`/home/box/.config/dataforseo/credentials.json`) |
| Body | `keyword`, `location_code`, `language_code: en`, `depth: 10` |
| Extract | `type == people_also_ask` → element `title` |
| Locations | UAE `2784` for Dubai-side seeds; UK `2826` for one UK-origin inbound seed |
| Seeds pulled | **23** (all ok; 0 failures) |
| Unique PAA titles | **39** across **92** seed×question rows |
| **API cost** | **USD 0.046** |
| Raw JSON | `/workspace/seo-strategy-q4/dataforseo/routes-paa/` + `_meta.json` |
| Machine CSV | `route-corridor-paa-ownership.csv` |

### Seeds

1. `pet relocation UK to Dubai` — family **UK** — loc `2784` — slug hint `uk-to-dubai` — 4 PAA
2. `pet relocation Dubai to UK` — family **UK** — loc `2784` — slug hint `dubai-to-uk` — 4 PAA
3. `bring dog from UK to Dubai` — family **UK** — loc `2826` — slug hint `uk-to-dubai` — 4 PAA
4. `pet relocation USA to Dubai` — family **USA** — loc `2784` — slug hint `usa-to-dubai` — 4 PAA
5. `pet relocation Dubai to USA` — family **USA** — loc `2784` — slug hint `dubai-to-usa` — 4 PAA
6. `pet relocation Canada to Dubai` — family **Canada** — loc `2784` — slug hint `canada-to-dubai` — 4 PAA
7. `pet relocation Dubai to Canada` — family **Canada** — loc `2784` — slug hint `dubai-to-canada` — 4 PAA
8. `pet relocation Australia to Dubai` — family **Australia_NZ** — loc `2784` — slug hint `australia-to-dubai` — 4 PAA
9. `pet relocation Dubai to Australia` — family **Australia_NZ** — loc `2784` — slug hint `dubai-to-australia` — 4 PAA
10. `pet relocation New Zealand to Dubai` — family **Australia_NZ** — loc `2784` — slug hint `new-zealand-to-dubai` — 4 PAA
11. `pet relocation India to Dubai` — family **SouthAsia_PH** — loc `2784` — slug hint `india-to-dubai` — 4 PAA
12. `pet relocation Dubai to Philippines` — family **SouthAsia_PH** — loc `2784` — slug hint `dubai-to-philippines` — 4 PAA
13. `pet relocation Pakistan to Dubai` — family **SouthAsia_PH** — loc `2784` — slug hint `pakistan-to-dubai` — 4 PAA
14. `pet relocation Saudi Arabia to Dubai` — family **GCC** — loc `2784` — slug hint `saudi-arabia-to-dubai` — 4 PAA
15. `pet relocation Qatar to Dubai` — family **GCC** — loc `2784` — slug hint `qatar-to-dubai` — 4 PAA
16. `pet relocation Germany to Dubai` — family **Europe** — loc `2784` — slug hint `germany-to-dubai` — 4 PAA
17. `pet relocation Dubai to Germany` — family **Europe** — loc `2784` — slug hint `dubai-to-germany` — 4 PAA
18. `pet relocation France to Dubai` — family **Europe** — loc `2784` — slug hint `france-to-dubai` — 4 PAA
19. `pet relocation South Africa to Dubai` — family **Africa** — loc `2784` — slug hint `south-africa-to-dubai` — 4 PAA
20. `pet relocation Egypt to Dubai` — family **Africa** — loc `2784` — slug hint `egypt-to-dubai` — 4 PAA
21. `pet relocation Singapore to Dubai` — family **SE_EastAsia** — loc `2784` — slug hint `singapore-to-dubai` — 4 PAA
22. `pet relocation Dubai to Japan` — family **SE_EastAsia** — loc `2784` — slug hint `dubai-to-japan` — 4 PAA
23. `pet relocation Thailand to Dubai` — family **SE_EastAsia** — loc `2784` — slug hint `thailand-to-dubai` — 4 PAA

---

## 2. Global ownership rules (route vs guides)

| Intent | Owner | Route page role |
|---|---|---|
| Cost / how much / ship-pet price | `/guides/pet-relocation-cost-dubai/` | Teaser sentence + link only — **no fee numerals** |
| MOCCAE permit / need a permit | `/guides/moccae-import-permit/` | Mention **30-day** validity in rules; FAQ deep-link |
| UAE import / quarantine requirements | `/guides/uae-pet-import-requirements/` | Corridor rules high-level; quarantine FAQ **only** on import guide |
| Airline cabin/cargo **policy** (Emirates, SQ, “which airline allows”) | Airline guides / `/guides/pet-flight-options-dubai/` | Route lists OD carriers with modes + **confirm current policy** — does **not** own policy FAQ |
| Best / reliable relocation company | `/service/pet-relocation-dubai/` (interim) | Soft pointer CTA — do not build company-comparison FAQ on every route |
| Corridor how-to / docs / timeline / airports / “can I fly/move dog from X to Dubai (or reverse)” | **`/routes/{slug}/`** | **Own** these PAAs in unique FAQs |
| Qatar **route** vs Qatar Airways **policy** | Route = GCC relocation; policy = airline guide | Never steal airline-policy PAA onto `/routes/qatar-to-dubai/` or `/routes/dubai-to-qatar/` |
| Off-topic (rehome, stray legality, “easiest country”) | **HOLD** | Do not force onto route FAQs |

**Volumes:** not pulled in this SERP job. If Ads/Labs volumes are cited later, label source and keep nulls as null — never invent.

---

## 3. Per-family ownership

### 1. UK (live both ways)

**URLs:** Live: `/routes/uk-to-dubai/`, `/routes/dubai-to-uk/`  
**Seeds this pull:** `pet relocation UK to Dubai` (loc 2784); `pet relocation Dubai to UK` (loc 2784); `bring dog from UK to Dubai` (loc 2826)

| Real PAA (quoted) | Owner | Cluster | Notes |
|---|---|---|---|
| Can I move my dog from the UK to Dubai? | `/routes/uk-to-dubai/` | corridor | Corridor-specific eligibility / how-to — route page owns |
| How much does it cost to relocate a pet in Dubai? | `/guides/pet-relocation-cost-dubai/` | cost | Cost PAAs → cost guide; route page teaser+link only, no fee numerals |
| How much does it cost to import a pet into the UAE? | `/guides/pet-relocation-cost-dubai/` | cost | Cost PAAs → cost guide; route page teaser+link only, no fee numerals |
| What is the best pet relocation service in Dubai? | `/service/pet-relocation-dubai/` | best-company | Best/reliable service → money page interim (companies guide when live) |
| How much does it cost to ship a pet to the UK? | `/guides/pet-relocation-cost-dubai/` | cost | Cost PAAs → cost guide; route page teaser+link only, no fee numerals |
| What are the requirements for relocating my dog to the UK? | `/routes/dubai-to-uk/` | corridor | Destination-entry requirements for outbound corridor page |
| How much does it cost to fly a dog from the UK to Dubai? | `/guides/pet-relocation-cost-dubai/` | cost | Cost PAAs → cost guide; route page teaser+link only, no fee numerals |
| Can I take my pet dog to Dubai? | `/routes/uk-to-dubai/` | corridor | Corridor-specific eligibility / how-to — route page owns |
| Can I take my dog to live with me in Dubai? | `/routes/uk-to-dubai/` | corridor | Corridor-specific eligibility / how-to — route page owns |
| Do I need a permit to import my dog into the UAE? | `/guides/moccae-import-permit/` | moccae | MOCCAE/permit how-to → moccae guide; route may mention 30-day validity in rules |

### 2. USA (live both ways)

**URLs:** Live: `/routes/usa-to-dubai/`, `/routes/dubai-to-usa/`  
**Seeds this pull:** `pet relocation USA to Dubai` (loc 2784); `pet relocation Dubai to USA` (loc 2784)

| Real PAA (quoted) | Owner | Cluster | Notes |
|---|---|---|---|
| How much does it cost to relocate a pet in Dubai? | `/guides/pet-relocation-cost-dubai/` | cost | Cost PAAs → cost guide; route page teaser+link only, no fee numerals |
| How much does it cost to import a pet into the UAE? | `/guides/pet-relocation-cost-dubai/` | cost | Cost PAAs → cost guide; route page teaser+link only, no fee numerals |
| What is the best pet relocation service in Dubai? | `/service/pet-relocation-dubai/` | best-company | Best/reliable service → money page interim (companies guide when live) |
| Does Emirates allow pets in cargo? | `/guides/emirates-pet-cargo/` | airline-policy | Airline policy → Emirates guide NOT route page |
| How much does it cost to ship from Dubai to the USA? | `/guides/pet-relocation-cost-dubai/` | cost | Cost PAAs → cost guide; route page teaser+link only, no fee numerals |

### 3. Canada (live inbound + new dubai-to-canada)

**URLs:** Live: `/routes/canada-to-dubai/` · New: `/routes/dubai-to-canada/`  
**Seeds this pull:** `pet relocation Canada to Dubai` (loc 2784); `pet relocation Dubai to Canada` (loc 2784)

| Real PAA (quoted) | Owner | Cluster | Notes |
|---|---|---|---|
| How much does it cost to relocate a pet in Dubai? | `/guides/pet-relocation-cost-dubai/` | cost | Cost PAAs → cost guide; route page teaser+link only, no fee numerals |
| How much does it cost to import a pet into the UAE? | `/guides/pet-relocation-cost-dubai/` | cost | Cost PAAs → cost guide; route page teaser+link only, no fee numerals |
| What is the best pet relocation service in Dubai? | `/service/pet-relocation-dubai/` | best-company | Best/reliable service → money page interim (companies guide when live) |
| Can I take my dog to live with me in Dubai? | `/dog-relocation-to-dubai/` | species | Generic Dubai dog inbound → species page; corridor pages link up |
| Can I bring my pet if I move to Canada? | `/routes/dubai-to-canada/` | corridor | Corridor-specific eligibility / how-to — route page owns |
| Which pet relocation company is the most reliable and trustworthy in the UAE? | `/service/pet-relocation-dubai/` | best-company | Best/reliable service → money page interim (companies guide when live) |
| What is the easiest country to move to with pets? | `HOLD` | hold | Generic lifestyle — not OD-specific |

### 4. Australia / New Zealand

**URLs:** Live: `/routes/australia-to-dubai/`, `/routes/new-zealand-to-dubai/` · New: `/routes/dubai-to-australia/`, `/routes/dubai-to-new-zealand/`  
**Seeds this pull:** `pet relocation Australia to Dubai` (loc 2784); `pet relocation Dubai to Australia` (loc 2784); `pet relocation New Zealand to Dubai` (loc 2784)

| Real PAA (quoted) | Owner | Cluster | Notes |
|---|---|---|---|
| How much does it cost to relocate a pet in Dubai? | `/guides/pet-relocation-cost-dubai/` | cost | Cost PAAs → cost guide; route page teaser+link only, no fee numerals |
| How much does it cost to import a pet into the UAE? | `/guides/pet-relocation-cost-dubai/` | cost | Cost PAAs → cost guide; route page teaser+link only, no fee numerals |
| Which pet relocation company is the most reliable and trustworthy in the UAE? | `/service/pet-relocation-dubai/` | best-company | Best/reliable service → money page interim (companies guide when live) |
| How much does it cost to take pets overseas from Australia? | `/guides/pet-relocation-cost-dubai/` | cost | Cost PAAs → cost guide; route page teaser+link only, no fee numerals |
| What are the requirements for relocating a pet to Australia? | `/routes/dubai-to-australia/` | corridor | Destination-entry requirements for outbound corridor page |
| What is the best pet relocation service in Dubai? | `/service/pet-relocation-dubai/` | best-company | Best/reliable service → money page interim (companies guide when live) |
| Can I take my dog if I move to Australia? | `/routes/dubai-to-australia/` | corridor | Corridor-specific eligibility / how-to — route page owns |
| How much does it cost to transport a pet in New Zealand? | `/guides/pet-relocation-cost-dubai/` | cost | Cost PAAs → cost guide; route page teaser+link only, no fee numerals |

### 5. India / Philippines / Pakistan

**URLs:** Live: `/routes/india-to-dubai/`, `/routes/philippines-to-dubai/` · New: `/routes/dubai-to-india/`, `/routes/dubai-to-philippines/`, `/routes/pakistan-to-dubai/`, `/routes/dubai-to-pakistan/`  
**Seeds this pull:** `pet relocation India to Dubai` (loc 2784); `pet relocation Dubai to Philippines` (loc 2784); `pet relocation Pakistan to Dubai` (loc 2784)

| Real PAA (quoted) | Owner | Cluster | Notes |
|---|---|---|---|
| Can we take pets from India to the UAE? | `/routes/india-to-dubai/` | corridor | Corridor-specific eligibility / how-to — route page owns |
| How much does it cost to relocate a pet in Dubai? | `/guides/pet-relocation-cost-dubai/` | cost | Cost PAAs → cost guide; route page teaser+link only, no fee numerals |
| Is relocation of stray dogs legal in India? | `HOLD` | hold | India stray-dog legality — not relocation corridor |
| Which pet relocation company is the best in India? | `/service/pet-relocation-dubai/` | best-company | Company-quality PAA — interim money page; India-local company SERP is weak fit for DPR route page (teaser only) |
| How much does it cost to transport a pet in the Philippines? | `/guides/pet-relocation-cost-dubai/` | cost | Cost PAAs → cost guide; route page teaser+link only, no fee numerals |
| How much does it cost to ship a dog to the Philippines? | `/guides/pet-relocation-cost-dubai/` | cost | Cost PAAs → cost guide; route page teaser+link only, no fee numerals |
| Can I take my dog if I move to the Philippines? | `/routes/dubai-to-philippines/` | corridor | Corridor-specific eligibility / how-to — route page owns |
| How much does it cost to import a pet into the UAE? | `/guides/pet-relocation-cost-dubai/` | cost | Cost PAAs → cost guide; route page teaser+link only, no fee numerals |
| What are the requirements to move my pet to the UAE? | `/guides/uae-pet-import-requirements/` | import-reqs | General UAE import requirements → import guide; quarantine deep-dive stays here FAQ-only |
| What is the best pet relocation service in Dubai? | `/service/pet-relocation-dubai/` | best-company | Best/reliable service → money page interim (companies guide when live) |

### 6. GCC (SA, QA, OM, BH, KW) — route ≠ Qatar Airways policy

**URLs:** New: SA/QA/OM/BH/KW × both directions (see LOCKED_50). **Do not** park Qatar Airways pet-policy PAAs on Qatar **route** pages.  
**Seeds this pull:** `pet relocation Saudi Arabia to Dubai` (loc 2784); `pet relocation Qatar to Dubai` (loc 2784)

| Real PAA (quoted) | Owner | Cluster | Notes |
|---|---|---|---|
| How much does it cost to relocate a pet in Dubai? | `/guides/pet-relocation-cost-dubai/` | cost | Cost PAAs → cost guide; route page teaser+link only, no fee numerals |
| How can I export my pet from Saudi Arabia? | `/routes/saudi-arabia-to-dubai/` | corridor | Origin-export how-to for SA→Dubai corridor; deep-link export/MOCCAE as needed |
| How much does it cost to import a pet into the UAE? | `/guides/pet-relocation-cost-dubai/` | cost | Cost PAAs → cost guide; route page teaser+link only, no fee numerals |
| What is the best pet relocation service in Dubai? | `/service/pet-relocation-dubai/` | best-company | Best/reliable service → money page interim (companies guide when live) |
| Where can I give my cat away in Qatar? | `HOLD` | hold | Rehoming/giveaway — not relocation |

### 7. Europe core (DE, FR, ES, NL, IT, IE, TR)

**URLs:** New: DE/FR/ES/NL/IT/IE/TR corridors (exemplars DE in/out). Seeds pulled: DE both + FR inbound.  
**Seeds this pull:** `pet relocation Germany to Dubai` (loc 2784); `pet relocation Dubai to Germany` (loc 2784); `pet relocation France to Dubai` (loc 2784)

| Real PAA (quoted) | Owner | Cluster | Notes |
|---|---|---|---|
| How much does it cost to relocate a pet in Dubai? | `/guides/pet-relocation-cost-dubai/` | cost | Cost PAAs → cost guide; route page teaser+link only, no fee numerals |
| How much does it cost to import a pet into the UAE? | `/guides/pet-relocation-cost-dubai/` | cost | Cost PAAs → cost guide; route page teaser+link only, no fee numerals |
| What is the best pet relocation service in Dubai? | `/service/pet-relocation-dubai/` | best-company | Best/reliable service → money page interim (companies guide when live) |
| Can I import dogs into Dubai? | `/routes/germany-to-dubai/` | corridor | On DE inbound SERP — corridor FAQ + link species page |
| How much does it cost to fly my dog to Germany? | `/guides/pet-relocation-cost-dubai/` | cost | Cost PAAs → cost guide; route page teaser+link only, no fee numerals |
| Is Germany a pet friendly country? | `HOLD` | hold | Lifestyle amenity — weak corridor fit; HOLD unless short pointer |
| Which airline to Dubai allows pets? | `/guides/pet-flight-options-dubai/` | airline-policy | Airline chooser → flight-options hub; route may name OD carriers with confirm-current-policy only |

### 8. Africa (ZA, EG)

**URLs:** Live: `/routes/south-africa-to-dubai/` · New: `/routes/dubai-to-south-africa/`, `/routes/egypt-to-dubai/`, `/routes/dubai-to-egypt/`  
**Seeds this pull:** `pet relocation South Africa to Dubai` (loc 2784); `pet relocation Egypt to Dubai` (loc 2784)

| Real PAA (quoted) | Owner | Cluster | Notes |
|---|---|---|---|
| How much does it cost to relocate a pet in Dubai? | `/guides/pet-relocation-cost-dubai/` | cost | Cost PAAs → cost guide; route page teaser+link only, no fee numerals |
| Which pet relocation company is the most reliable and trustworthy in the UAE? | `/service/pet-relocation-dubai/` | best-company | Best/reliable service → money page interim (companies guide when live) |
| How much does it cost to fly my dog to South Africa? | `/guides/pet-relocation-cost-dubai/` | cost | Cost PAAs → cost guide; route page teaser+link only, no fee numerals |
| What is the easiest country to move to with pets? | `HOLD` | hold | Generic lifestyle — not OD-specific |
| How much does it cost to import a pet into the UAE? | `/guides/pet-relocation-cost-dubai/` | cost | Cost PAAs → cost guide; route page teaser+link only, no fee numerals |
| What is the best pet relocation service in Dubai? | `/service/pet-relocation-dubai/` | best-company | Best/reliable service → money page interim (companies guide when live) |
| Does Emirates allow pets in cargo? | `/guides/emirates-pet-cargo/` | airline-policy | Airline policy → Emirates guide NOT route page |

### 9. SE / East Asia (SG, TH, ID, MY, CN, HK, JP, KR)

**URLs:** New: SG/TH/ID/MY/CN/HK/JP/KR × both (LOCKED_50). Seeds pulled: SG in, JP out, TH in.  
**Seeds this pull:** `pet relocation Singapore to Dubai` (loc 2784); `pet relocation Dubai to Japan` (loc 2784); `pet relocation Thailand to Dubai` (loc 2784)

| Real PAA (quoted) | Owner | Cluster | Notes |
|---|---|---|---|
| How much does it cost to relocate a pet in Dubai? | `/guides/pet-relocation-cost-dubai/` | cost | Cost PAAs → cost guide; route page teaser+link only, no fee numerals |
| What is the best pet relocation service in Dubai? | `/service/pet-relocation-dubai/` | best-company | Best/reliable service → money page interim (companies guide when live) |
| Does Singapore Airlines allow pets to fly? | `/guides/pet-flight-options-dubai/` | airline-policy | Carrier policy → flight-options hub (or future SQ guide); NOT Qatar/GCC route page; NOT corridor route |
| What are some reputable pet relocation companies in Singapore? | `HOLD` | hold | Origin-market company list (Singapore) — not DPR UAE money intent |
| Can I bring my dog if I move to Japan? | `/routes/dubai-to-japan/` | corridor | Corridor-specific eligibility / how-to — route page owns |
| Can I bring my pet dog to Japan? | `/routes/dubai-to-japan/` | corridor | Corridor-specific eligibility / how-to — route page owns |
| How do I move my pet to Japan? | `/routes/dubai-to-japan/` | corridor | Corridor-specific eligibility / how-to — route page owns |
| How much does it cost to import a pet into the UAE? | `/guides/pet-relocation-cost-dubai/` | cost | Cost PAAs → cost guide; route page teaser+link only, no fee numerals |
| How much does Emirates pet cargo cost? | `/guides/emirates-pet-cargo/` | airline-policy | Airline policy → Emirates guide NOT route page |

---

## 4. Route-page FAQ shortlist (corridor-owned only)

Prefer these (or close paraphrases tied to the same OD) on the matching `/routes/{slug}/` FAQ block. Do **not** duplicate cost/MOCCAE/airline-policy answers.

| Family | Slug hint | FAQ candidate (real PAA) |
|---|---|---|
| UK | `uk-to-dubai` | Can I move my dog from the UK to Dubai? |
| UK | `dubai-to-uk` | What are the requirements for relocating my dog to the UK? |
| UK | `uk-to-dubai` | Can I take my pet dog to Dubai? |
| UK | `uk-to-dubai` | Can I take my dog to live with me in Dubai? |
| Canada | `dubai-to-canada` | Can I bring my pet if I move to Canada? |
| Australia_NZ | `dubai-to-australia` | What are the requirements for relocating a pet to Australia? |
| Australia_NZ | `dubai-to-australia` | Can I take my dog if I move to Australia? |
| SouthAsia_PH | `india-to-dubai` | Can we take pets from India to the UAE? |
| SouthAsia_PH | `dubai-to-philippines` | Can I take my dog if I move to the Philippines? |
| GCC | `saudi-arabia-to-dubai` | How can I export my pet from Saudi Arabia? |
| Europe | `germany-to-dubai` | Can I import dogs into Dubai? |
| SE_EastAsia | `dubai-to-japan` | Can I bring my dog if I move to Japan? |
| SE_EastAsia | `dubai-to-japan` | Can I bring my pet dog to Japan? |
| SE_EastAsia | `dubai-to-japan` | How do I move my pet to Japan? |

**Count:** 14 corridor-owned FAQ candidates from this pull (after dedupe by question×slug; cross-seed inbound bleed reassigned).

---

## 5. Explicit non-owners (do not put on route FAQs)

| Question | Correct owner | Why |
|---|---|---|
| How much does it cost to relocate a pet in Dubai? | `/guides/pet-relocation-cost-dubai/` | Cost PAAs → cost guide; route page teaser+link only, no fee numerals |
| How much does it cost to import a pet into the UAE? | `/guides/pet-relocation-cost-dubai/` | Cost PAAs → cost guide; route page teaser+link only, no fee numerals |
| What is the best pet relocation service in Dubai? | `/service/pet-relocation-dubai/` | Best/reliable service → money page interim (companies guide when live) |
| How much does it cost to ship a pet to the UK? | `/guides/pet-relocation-cost-dubai/` | Cost PAAs → cost guide; route page teaser+link only, no fee numerals |
| How much does it cost to fly a dog from the UK to Dubai? | `/guides/pet-relocation-cost-dubai/` | Cost PAAs → cost guide; route page teaser+link only, no fee numerals |
| Do I need a permit to import my dog into the UAE? | `/guides/moccae-import-permit/` | MOCCAE/permit how-to → moccae guide; route may mention 30-day validity in rules |
| Does Emirates allow pets in cargo? | `/guides/emirates-pet-cargo/` | Airline policy → Emirates guide NOT route page |
| How much does it cost to ship from Dubai to the USA? | `/guides/pet-relocation-cost-dubai/` | Cost PAAs → cost guide; route page teaser+link only, no fee numerals |
| Can I take my dog to live with me in Dubai? | `/dog-relocation-to-dubai/` | Generic Dubai dog inbound → species page; corridor pages link up |
| Which pet relocation company is the most reliable and trustworthy in the UAE? | `/service/pet-relocation-dubai/` | Best/reliable service → money page interim (companies guide when live) |
| What is the easiest country to move to with pets? | `HOLD` | Generic lifestyle — not OD-specific |
| How much does it cost to take pets overseas from Australia? | `/guides/pet-relocation-cost-dubai/` | Cost PAAs → cost guide; route page teaser+link only, no fee numerals |
| How much does it cost to transport a pet in New Zealand? | `/guides/pet-relocation-cost-dubai/` | Cost PAAs → cost guide; route page teaser+link only, no fee numerals |
| Is relocation of stray dogs legal in India? | `HOLD` | India stray-dog legality — not relocation corridor |
| Which pet relocation company is the best in India? | `/service/pet-relocation-dubai/` | Company-quality PAA — interim money page; India-local company SERP is weak fit for DPR route page (teaser only) |
| How much does it cost to transport a pet in the Philippines? | `/guides/pet-relocation-cost-dubai/` | Cost PAAs → cost guide; route page teaser+link only, no fee numerals |
| How much does it cost to ship a dog to the Philippines? | `/guides/pet-relocation-cost-dubai/` | Cost PAAs → cost guide; route page teaser+link only, no fee numerals |
| What are the requirements to move my pet to the UAE? | `/guides/uae-pet-import-requirements/` | General UAE import requirements → import guide; quarantine deep-dive stays here FAQ-only |
| Where can I give my cat away in Qatar? | `HOLD` | Rehoming/giveaway — not relocation |
| Can I import dogs into Dubai? | `/routes/germany-to-dubai/` | Corridor (DE seed) + link species page |
| How much does it cost to fly my dog to Germany? | `/guides/pet-relocation-cost-dubai/` | Cost PAAs → cost guide; route page teaser+link only, no fee numerals |
| Is Germany a pet friendly country? | `HOLD` | Lifestyle amenity — weak corridor fit; HOLD unless short pointer |
| Which airline to Dubai allows pets? | `/guides/pet-flight-options-dubai/` | Airline chooser → flight-options hub; route may name OD carriers with confirm-current-policy only |
| How much does it cost to fly my dog to South Africa? | `/guides/pet-relocation-cost-dubai/` | Cost PAAs → cost guide; route page teaser+link only, no fee numerals |
| Does Singapore Airlines allow pets to fly? | `/guides/pet-flight-options-dubai/` | Carrier policy → flight-options hub (or future SQ guide); NOT Qatar/GCC route page; NOT corridor route |
| What are some reputable pet relocation companies in Singapore? | `HOLD` | Origin-market company list (Singapore) — not DPR UAE money intent |
| How much does Emirates pet cargo cost? | `/guides/emirates-pet-cargo/` | Airline policy → Emirates guide NOT route page |

---

## 6. Provenance

- All **39** unique titles and **92** seed×question rows come from DataForSEO Google organic live/advanced PAA for the **23** seeds listed above.
- Raw per-seed JSON under `/workspace/seo-strategy-q4/dataforseo/routes-paa/`.
- Meta: `/workspace/seo-strategy-q4/dataforseo/routes-paa/_meta.json` (cost_total recorded).
- **No invented questions. No invented volumes.** Expanded AI Overview answer text not used as competitor copy.

## 7. Coverage gaps (honest)

- Representative seeds only (lean cost). **Not** every LOCKED_50 country got its own SERP — Europe beyond DE/FR, GCC beyond SA/QA, and most Asia outbounds share family ownership patterns until a follow-up pull.
- Many seeds surface the **same** UAE cost / best-service PAAs — those stay on guides/money pages regardless of corridor seed.
- Origin-market location pulls beyond UK `2826` not run this pass (keep API lean). Expand if a corridor FAQ set looks thin.
- Qatar route seeds returned **no** Qatar Airways policy PAA this pull — still keep the hard split: route ≠ airline policy.
