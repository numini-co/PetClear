# Route50 Content System — 50 NEW PetClear Corridor Pages

**Author:** DPR Content Architect  
**Date:** 2026-09-05  
**Status:** SYSTEM READY — Tranche A scaffold + 2 exemplars; Tranche B = unique copy batches  
**Locked URLs:** `/workspace/route50/LOCKED_50_URLS.txt` (50; existing 10 live excluded)  
**Seed:** `/workspace/route50/airports_airlines_seed.json` — **NOT final**; verify before marking copy final  
**Cursor brief:** `/workspace/route50/CURSOR_TRANCHE_BRIEF.md`  
**Schema:** `/workspace/route50/routePageData.schema.json`  
**Exemplars:** `/workspace/route50/exemplars/germany-to-dubai.json`, `dubai-to-germany.json`  
**Binding:** architecture-brief.md; regulatory-source-of-truth.csv; route-airports-airlines-block-pattern.md; trust-claims-strip-brief.md  
**WhatsApp (only):** +971504782999

---

## Purpose

Ship 50 new `/routes/{slug}/` pages with:

- Shared chrome (template)  
- Corridor-unique intros and FAQs  
- Direction-aware rules (inbound ≠ outbound reverse)  
- Seed-backed airports + airlines (with verification flags)  
- Zero invented fees, volumes, or airline affiliations  

This doc is the **content-facing** system. Frontend implements Tranche A from the Cursor brief.

---

## Required page sections (every route)

| # | Section | Unique vs templated | Notes |
|---|---|---|---|
| 1 | Hero + H1 + Quick answer strip | Partially unique | H1/meta/intro unique; CTA chrome templated |
| 2 | Corridor intro | **UNIQUE** | Outbound ≠ reverse of inbound |
| 3 | Airports (non-Dubai country from seed + UAE DXB/DWC/AUH note) | Airports from seed; chrome templated | IATA + city |
| 4 | Pet-capable airlines (cabin / cargo / generally not / confirm) | Carrier list from seed; modes until verified | No logos; no affiliation; “confirm current policy” |
| 5 | Rules block | Direction-specific | Inbound = UAE/MOCCAE; outbound = destination high-level + verify |
| 6 | FAQ (4–6) | **UNIQUE** per slug | FAQPage schema; no fee invention |
| 7 | OfficialSources + related links + CTA | Mostly templated | Get Route Checked / WhatsApp +971504782999 |
| — | Hero image | Path convention only | `/assets/routes/heroes/{slug}.jpg` until Visual delivers |

Word budget for airports + airlines blocks combined: ~350–550 words (see block pattern).

---

## Unique vs templated

### Templated (safe reuse)

- Section H2 chrome and table column headers  
- UAE airport note framing (DXB / DWC cargo pathways; AUH when Etihad cabin exception)  
- Disclaimers: no airport/airline partnership  
- CTA button labels and WhatsApp number  
- Breadcrumb + RoutesHub card shell  
- OfficialSources list structure (fill URLs from SOT)  

### Must be unique per slug / direction

- `title`, `meta`, `h1`, `intro`  
- FAQ questions and answers (airport codes, airline names, direction)  
- Hub card 1-line description  
- Outbound `destinationRules` focus (destination authority, not UAE import rewrite)  
- Any embargo / brachy / connection notes only when first-party cited  

---

## Direction rules

| Direction | Slug pattern | Intro / rules focus | Airlines focus |
|---|---|---|---|
| **Inbound** | `{country}-to-dubai` | Leaving origin → **UAE entry** (MOCCAE permit **30 days**; microchip; vaccines; titer sample within **90 days before travel** when required; manifest cargo default) | How pets leave origin + how they must enter UAE |
| **Outbound** | `dubai-to-{country}` | Leaving UAE → **destination import** (MOCCAE export health cert high-level; plan destination-backwards; verify destination authority) | How pets leave UAE + destination acceptance |

**Never** paste inbound copy with country names swapped for outbound.

---

## Regulatory locks (copy must use)

| Topic | Locked wording |
|---|---|
| Titer | Blood sample taken **within 90 days before travel**; minimum **0.5 IU/ml**. Required when origin is **not** on MOCCAE exempt list (list itself needs portal verify — do not invent exempt claims). |
| Titer anti-pattern | **NEVER** “wait 90 days after the titer” / “90-day waiting period after the blood draw” |
| MOCCAE import permit | Valid **30 days** from issuance; pet must enter within that window |
| Fees | **No** MOCCAE / release / package fee numerals until portal verification. Packages = quote-only. |
| Volumes | LOCKED file volumes are SEO cluster estimates only — **never** print on pages; never invent DataForSEO numbers |
| Airlines | No logos; no “official partner”; no “MOCCAE-approved airline” |

---

## FAQ rules

- **4–6** questions per page  
- At least one airport / clearance FAQ and one airline-mode FAQ  
- Corridor-unique: change IATA codes, carrier names, direction  
- No invented AED/USD fee bands  
- CTA close: Get Route Checked / WhatsApp +971504782999  
- Do not clone FAQ strings across routes  

### FAQ seed ideas (adapt — do not copy verbatim across pages)

**Inbound:** Which UAE airport will my pet clear? Can cabin apply on this OD into Dubai? Is manifest cargo required when the itinerary ends in Dubai? When must the rabies titer sample be drawn? How long is the MOCCAE permit valid?

**Outbound:** What MOCCAE document do I need to leave the UAE? Does {destination} require a titer from the UAE? Which gateway airport do pets usually arrive at in {country}? Can pets leave Dubai as baggage vs cargo on {airline}? How do I plan destination rules before booking?

---

## Hero / Visual Media handoff

| Field | Convention |
|---|---|
| Path | `/assets/routes/heroes/{slug}.jpg` |
| Alt | Dog + corridor context (no airline brands); include country cue |
| Until Visual delivers | Use placeholder path; template must not 404 the page (fallback image OK) |
| Banned | Airline logos, airport signs-as-fact, fake staff, trust-metric overlays |

Visual queue: batch heroes by Tranche B country batches (10 at a time).

---

## Hub card rules (RoutesHub)

For each of the 50 URLs:

- Add to **INBOUND** or **OUTBOUND** array by direction  
- **1-line unique description** (≤ ~110 chars); no fees; no volumes  
- Link to `/routes/{slug}/` (or existing route path convention)  
- Prefer destination/clearance cue over generic “pet relocation” spam  

Examples (DE exemplars):

- IN: `germany-to-dubai` — “FRA/MUC export pathways into DXB/DWC cargo clearance for dogs and cats.”  
- OUT: `dubai-to-germany` — “Leave Dubai for FRA/MUC/BER with destination-backwards EU entry planning.”  

---

## Seed verification protocol

1. Start from `airports_airlines_seed.json` (28 countries).  
2. Map each airline tuple → `RoutePageData.airlines[]` with `verificationStatus: "unverified"` by default.  
3. Before **final** copy: open official pet policy URL; set `mode`, `notes`, `policyUrl`, `verified: true`, `verificationStatus: "verified"`, update `lastVerified`.  
4. Rows that are `confirm` / `varies` / ambiguous remain `mode: "confirm"` and on-page “confirm current policy”.  
5. Do not invent airports not in seed without SOT.  
6. China seed includes `HKG` as “via HK note” — treat as routing note, not a China domestic airport claim.  

### Seed mode mapping (ambiguous → enum)

| Seed label (examples) | Map to `mode` | UI until verified |
|---|---|---|
| `cargo` | `cargo` | Cargo — confirm current policy |
| `cabin/cargo`, `cargo/cabin`, `cargo/cabin program`, `cargo/cabin rules`, `cargo/cabin limited`, `cargo/cabin varies`, `cargo/cabin confirm` | `cabin_or_cargo` **or** `confirm` if “varies/confirm/limited” present | Confirm mode for this OD |
| `generally not pets` | `generally_not` | Generally not accepted — confirm |
| `confirm`, `limited/confirm` | `confirm` | Confirm current policy |
| Bare `cabin` (rare in seed) | `cabin` | Cabin — confirm eligibility |

**Quality issue:** many seed modes are compound/ambiguous (`cargo/cabin varies`, `limited/confirm`). Tranche A must preserve uncertainty via `confirm` / unverified flags — never upgrade to a firm cabin claim without first-party URL.

---

## Anti-patterns (live India page — DO NOT COPY)

From live `IndiaToDubai` / similar:

1. **Wrong titer framing:** “90-day wait after titer” → **replace** with sample within 90 days **before travel**  
2. **Invented fee bands** for MOCCAE / packages → **omit**; quote-only CTA  
3. Near-duplicate reverse pages for outbound  
4. Airline affiliation or logo blocks  
5. Printing SEO volumes on the page  
6. Thin doorway intros that only swap country names  

---

## Tranche A vs B (content)

| Tranche | Content work |
|---|---|
| **A** (now) | System docs, schema, seed→typed shape, hub card lines for all 50, **2 filled exemplars** (DE in + DE out) |
| **B** (later) | Unique intros + FAQs in batches of 10; outbound destinationRules; airline verify pass; Visual heroes |

---

## Definition of done (content system)

- [x] Required sections documented  
- [x] Unique vs templated split  
- [x] Direction rules  
- [x] FAQ / hero / hub / seed verify protocol  
- [x] Anti-patterns from live India called out  
- [x] Schema + 2 exemplars + Cursor Tranche A brief  
- [ ] Tranche B batch copy (not this pass)  

**Next:** Frontend executes Tranche A from `CURSOR_TRANCHE_BRIEF.md`; Content fills Tranche B after chrome lands.


## Update 2026-09-05 (Orchestrator)
- Use locked slugs + seed; do not block on SEO reordering.
- **No Cursor launch until 50 dog/flag heroes ready.**
- Deliverable now: reusable TS block + per-country tables (`COUNTRY_AIRPORTS_AIRLINES_TABLES.md`, `countryAirAir.seed.ts`).
- Page body copy waits for SEO volume pass.
- Airline rows remain unverified until official policy check.


## SEO RISK — HIGH twin cannibalization (Orchestrator 2026-09-05)

**Do not ship Tranche B body copy that reverses inbound pages.**

- **Risk:** HIGH twin cannibalization — outbound keywords still mapped to live inbound twins (worst: **Australia** cost / how-to / direct-flight; also **Philippines** + **India**).
- **Rule:** Every `dubai-to-{country}` page owns **distinct outbound intent**: export from Dubai → destination-side rules, timeline, arrival, and failure modes. It is **never** a mirrored `{country}-to-dubai` with names swapped.
- **When writing Tranche B:** after SEO finishes KW reassignment, refresh title/H1/meta/FAQ ownership from the updated keyword-lock-map; until then treat AU/PH/IN outbound as **extra-strict** differentiation (destination import hooks, export cert timing, destination quarantine/NOC — not UAE import essay).
- **Inbound twins** keep arrival-side MOCCAE 30-day / titer-before-travel framing; outbound must not re-own those head terms.
- Fold final KW targets into this brief when SEO Lead posts reassignment — then write bodies.

