# ⛔ OWNER GATE — DO NOT LAUNCH CURSOR YET

**No Cursor cloud-agent launch until all 50 dog + country-flag heroes are ready** (Visual Media).  
Scaffold brief below is parked. Content block pattern + per-country tables are ready now; **full page body copy waits for SEO volume pass**.

When both heroes + SEO volume pass land, launch **one** Cursor tranche using:
- `/workspace/route50/RouteAirportsAirlinesBlock.tsx.md`
- `/workspace/route50/countryAirAir.seed.ts`
- `/workspace/route50/COUNTRY_AIRPORTS_AIRLINES_TABLES.md`
- This brief (Tranche A chrome) then Tranche B body batches

---

## SEO RISK — HIGH twin cannibalization (Orchestrator 2026-09-05)

**Do not ship Tranche B body copy that reverses inbound pages.**

- **Risk:** HIGH twin cannibalization — outbound keywords still mapped to live inbound twins (worst: **Australia** cost / how-to / direct-flight; also **Philippines** + **India**).
- **Rule:** Every `dubai-to-{country}` page owns **distinct outbound intent**: export from Dubai → destination-side rules, timeline, arrival, and failure modes. It is **never** a mirrored `{country}-to-dubai` with names swapped.
- **When writing Tranche B:** after SEO finishes KW reassignment, refresh title/H1/meta/FAQ ownership from the updated keyword-lock-map; until then treat AU/PH/IN outbound as **extra-strict** differentiation (destination import hooks, export cert timing, destination quarantine/NOC — not UAE import essay).
- **Inbound twins** keep arrival-side MOCCAE 30-day / titer-before-travel framing; outbound must not re-own those head terms.
- Fold final KW targets into this brief when SEO Lead posts reassignment — then write bodies.

# Cursor Cloud Agent Brief — Route50 Tranche A (+ data shape + 2 exemplars)

> **Heroes:** Tranche A uses placeholder paths `/assets/routes/heroes/{slug}.jpg` — do **not** invent binaries and do **not** block scaffold on Visual delivery. Full hero art is a Visual Media handoff; pages must render with fallback until assets land.

**Author:** DPR Content Architect  
**Date:** 2026-09-05 (Asia/Makassar)  
**Repo:** https://github.com/numini-co/PetClear  
**Scope:** Content system for **50 NEW** locked route URLs (existing 10 live routes stay as-is)  
**This brief covers:** **Tranche A** (scaffold + registry + hub + App routes) **+ data shape + 2 gold exemplars** already filled under `/workspace/route50/exemplars/`  
**Does NOT cover:** inventing DataForSEO volumes; writing unique body copy for all 50 (that is Tranche B)

---

## Goal

Add a **content system** (typed data + shared `RoutePage` template + registry keyed by slug) so all 50 locked URLs can ship with consistent chrome and direction-aware sections — **without** inventing volumes, fees, trust metrics, or airline affiliations.

Locked slugs: `/workspace/route50/LOCKED_50_URLS.txt`  
Seed (VERIFY before final copy): `/workspace/route50/airports_airlines_seed.json`  
Regulatory SOT: `SEO-MASTER/regulatory-source-of-truth.csv`  
Block pattern: `SEO-MASTER/briefs/route-airports-airlines-block-pattern.md`  
Content system: `SEO-MASTER/briefs/route50-content-system.md`  
Schema: `/workspace/route50/routePageData.schema.json`  
Exemplars: `/workspace/route50/exemplars/germany-to-dubai.json`, `dubai-to-germany.json`

---

## Architecture (preferred)

Avoid 50 near-duplicate `*ToDubai.tsx` / `DubaiTo*.tsx` monsters.

| File | Role |
|---|---|
| `website/src/types/routePage.ts` | `RoutePageData` type matching schema |
| `website/src/components/RoutePage.tsx` | Shared template matching existing visual language: SEOHead, Breadcrumb, Hero, sections, FAQ schema, OfficialSources, WhatsApp CTA |
| `website/src/data/routes/registry.ts` | All 50 entries keyed by slug (+ keep existing 10 pages as-is or migrate later) |
| `website/src/data/routes/seed/airportsAirlines.ts` | Copy from seed JSON; each airline row must include `verificationStatus: 'unverified' \| 'verified'` |
| `website/src/pages/RoutePageLoader.tsx` (or equivalent) | One loader: resolve slug → registry → `<RoutePage data={…} />` |
| `website/src/App.tsx` | Generate lazy routes from registry (or thin wrappers that **only** import data) |
| `website/src/pages/RoutesHub.tsx` | Add INBOUND / OUTBOUND cards for all 50 (1-line unique desc each) |

**If** matching existing style requires thin wrappers (`GermanyToDubai.tsx` etc.), wrappers must **only** import registry data — zero duplicated section markup.

### RoutePageData fields (see schema)

`slug`, `direction` (`inbound` \| `outbound`), `title`, `meta`, `h1`, `heroImage`, `heroAlt`, `intro` (unique), `airports[]`, `uaeAirports[]`, `airlines[{name, mode, notes, policyUrl?, verified}]`, `uaeRules`, `destinationRules` (outbound), `faqs[4–6]`, `relatedLinks`, `cta`, `lastVerified`.

Airline `mode` enum: `cabin` \| `cargo` \| `cabin_or_cargo` \| `generally_not` \| `confirm`.

---

## EVERY page MUST render

1. **Unique destination/corridor intro** — outbound ≠ reverse paste of inbound  
2. **Main airports** (IATA + city) from seed for the non-Dubai country + UAE note (DXB / DWC / AUH)  
3. **Airlines** cabin / cargo / generally not accepted; **no affiliation**; “confirm current policy”  
4. **UAE rules:** inbound MOCCAE permit **30 days**; outbound high-level destination rules + verify  
5. **FAQ 4–6 unique**; **no invented fees**; DPR packages = quote-only CTA **Get Route Checked** / WhatsApp **+971504782999**  
6. **Hero placeholder** path: `/assets/routes/heroes/{slug}.jpg` — do not invent binaries; use placeholder until Visual delivers  
7. **RoutesHub** INBOUND/OUTBOUND cards for all new URLs (1-line unique desc each)

---

## Regulatory locks (HARD)

| Claim | Correct | NEVER |
|---|---|---|
| Rabies titer (RNATT) | Blood sample within **90 days before travel**, result ≥ **0.5 IU/ml** | “90-day wait **after** titer” / waiting period framing copied from live India page |
| MOCCAE import permit | Valid **30 days** from issuance | “90-day permit” |
| MOCCAE / release fees | Confirm on portal — **no fee numerals** until portal verification | Invented AED bands |
| Airline relationship | None — “confirm current policy” | Logos, “official partner”, “MOCCAE-approved airline” |
| Volumes | LOCKED file volumes = SEO cluster estimates only | Do **not** put volume numbers on pages; do **not** invent DataForSEO volumes |

**Live anti-pattern:** `IndiaToDubai` currently has WRONG titer “90-day wait” and invented fee bands — **do not copy**.

---

## Verification gate

Before marking any route copy **final**:

1. Check each airline row’s mode against the carrier’s **official pet policy URL**.  
2. Leave seed rows labelled `confirm` / `varies` / ambiguous as `mode: "confirm"` (or map carefully) and UI copy **“confirm current policy”** until verified.  
3. Set `verificationStatus: "verified"` only after first-party check + date in `lastVerified` / notes.  
4. Seed is **NOT** final — airports may be incomplete; do not invent airports beyond seed without SOT.

---

## Tranche split

### Tranche A (THIS brief) — chrome + data shape + 2 exemplars

- [ ] `RoutePageData` type + JSON schema alignment  
- [ ] Shared `RoutePage` template (all required sections)  
- [ ] `airportsAirlines.ts` seed copy with `verificationStatus` per airline  
- [ ] `registry.ts` stubs for **all 50** slugs (meta/h1/hero path + airports/airlines from seed; intros/FAQs can be stub or empty with TODOs except exemplars)  
- [ ] Wire **germany-to-dubai** + **dubai-to-germany** as **gold samples** from `/workspace/route50/exemplars/*.json`  
- [ ] `RoutePageLoader` + App routes generated from registry for all 50  
- [ ] RoutesHub INBOUND/OUTBOUND cards for all 50 (1-line unique desc)  
- [ ] Hero img src convention + graceful placeholder fallback  
- [ ] WhatsApp CTA only `+971504782999` / Get Route Checked  

### Tranche B (separate brief later) — unique copy batches

- Fill unique intros + FAQs country-by-country in **batches of 10**  
- Destination-rules blocks for outbound pages (high-level + verify; no invented fees)  
- Airline verification pass (set `verified` + policyUrl)  
- Visual Media hero delivery → replace placeholders  

---

## Exemplars already filled (import these)

| Slug | Direction | File |
|---|---|---|
| `germany-to-dubai` | inbound | `/workspace/route50/exemplars/germany-to-dubai.json` |
| `dubai-to-germany` | outbound | `/workspace/route50/exemplars/dubai-to-germany.json` |

Outbound exemplar is **not** a reverse paste of inbound — different intro angle, FAQs, and rules focus (EU entry / export cert vs UAE import).

---

## Success criteria checklist

- [ ] One shared `RoutePage` (or thin data-only wrappers) — no 50 markup clones  
- [ ] All 50 locked slugs routable from App via registry  
- [ ] RoutesHub lists all 50 with unique 1-line cards  
- [ ] Every page renders all 7 required section types  
- [ ] Titer wording = sample within 90 days **before travel** (≥0.5 IU/ml)  
- [ ] MOCCAE permit = **30 days**  
- [ ] No fee numerals; no volume numbers on pages  
- [ ] No airline logos / affiliation claims  
- [ ] Airlines show unverified/confirm until first-party check  
- [ ] Heroes use `/assets/routes/heroes/{slug}.jpg` placeholder path  
- [ ] CTA = Get Route Checked + WhatsApp +971504782999  
- [ ] Germany inbound + outbound exemplars render as gold samples  
- [ ] Existing 10 live routes unchanged (or migration deferred)  

---

## Explicit non-goals

- Do **not** invent DataForSEO volumes  
- Do **not** put LOCKED cluster-estimate volumes on HTML pages  
- Do **not** write full unique bodies for all 50 in Tranche A  
- Do **not** ship binary hero images (Visual handoff)  
- Do **not** copy IndiaToDubai titer/fee errors  

---

## Handoff notes for agent

1. Prefer registry + loader over 50 TSX files.  
2. Map seed airline mode strings → enum (see content-system “Seed mode mapping”). Ambiguous → `confirm`.  
3. `relatedLinks` minimum: hub `/routes/`, reverse twin slug, relevant money/service twin.  
4. FAQ schema JSON-LD from `faqs[]` only — no cloned strings across routes.  
5. When done: open PR titled `feat(routes): Route50 Tranche A scaffold + DE exemplars`.
