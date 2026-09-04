# DataForSEO W1–4 volume refresh — FINDINGS
Date: 2026-09-04 | Owner: DPR SEO Lead | Scope: SEO-MASTER data only (no site page/component changes)

## Method
- **API used:** DataForSEO Keywords Data `google_ads/search_volume/live` only.
- **Location:** UAE (`2784`).
- **Cost:** ~$1.08.
- **Coverage:** 421 keywords mapped from the W1–4 money set against live Ads volumes.
- **Applied:** 40 non-null live volumes written into `keyword-lock-map.csv` (Search Volume) and `keyword-universe.csv` (Est Monthly Volume + Volume Basis = `dataforseo_google_ads_live`) — 31 in the first pass, plus 9 addendum keywords below.
- **Not applied:** live-null keywords were **not** zeroed. Prior estimates remain. Volume Basis stays `estimated` on those universe rows.
- **Not used:** DataForSEO Labs (Keywords For Keywords / Related / Suggestions / Search Intent). No Labs volumes, difficulty, or intent scores were written.
- **Nothing invented.** Every new volume below is the live Ads value. No interpolated, rounded-up, or “likely” figures.

## Top UP (live vs prior estimate)
| Keyword | Prior estimate | Live (UAE 2784) |
|---|---:|---:|
| pet taxi Dubai | 170 | 590 |
| pet relocation from Dubai | 170 | 390 |
| pet relocation to Dubai | 320 | 390 |
| pet passport Dubai | 170 | 210 |
| pet taxi Abu Dhabi | 70 | 110 |

## Top DOWN (live vs prior estimate)
| Keyword | Prior estimate | Live (UAE 2784) |
|---|---:|---:|
| pet relocation Dubai | 900 | 390 |
| **banned dog breeds UAE** | **480** | **10** |
| pet transport Dubai | 480 | 30 |
| pet relocation UAE | 390 | 50 |
| pet shipping Dubai | 320 | 10 |
| **MOCCAE pet import permit** | **320** | **30** |
| pet movers Dubai | 260 | 10 |

`banned dog breeds UAE` 480→10 is a major overestimate. `MOCCAE pet import permit` 320→30 is the same pattern on the permit guide primary.

## Addendum — 9 additional live-non-null updates
| Keyword | Prior estimate | Live (UAE 2784) |
|---|---:|---:|
| pet export UAE | 90 | 10 |
| MOCCAE pet import permit | 320 | 30 |
| UAE pet import requirements | 260 | 10 |
| UAE pet import permit | 170 | 40 |
| banned dog breeds UAE | 480 | 10 |
| banned dog breeds Dubai | 260 | 10 |
| rabies titer test Dubai | 90 | 30 |
| can I bring my dog to Dubai | 70 | 10 |
| can I bring my cat to Dubai | 50 | 10 |

## HOLD candidates (weak live primary)
Priority signal only — no roadmap/calendar edits in this refresh.

**`/routes/` and `/cities/` are NOT volume-HOLD.** Aggregate live across each hub’s owned keywords is ≥65. The W1 IA/404-fix hubs still ship.

| URL / item | Live primary signal | Recommendation |
|---|---|---|
| `/service/international-pet-relocation` | primary null | Thin-scope / defer extra EXPAND |
| `/service/dog-relocation-dubai` | dog relocation Dubai = 30 | Lower-priority EXPAND |
| `/service/cat-relocation-dubai` | cat relocation Dubai = 10 | Lower-priority EXPAND |
| Cost guide | primary null | Thin-scope / defer EXPAND |
| Companies guide (CREATE) | primary null | Defer CREATE |
| Corporate page (CREATE) | primary null | Defer CREATE |

Defer CREATE for companies + corporate, and thin-scope/defer cost EXPAND. Lower priority for dog/cat EXPAND.

## Accelerate
Live non-null support for these money URLs:

- `/` (homepage) — still the category entry
- `/service/pet-relocation-dubai/` — `pet relocation Dubai` 390
- `/service/pet-relocation-to-dubai/` — `pet relocation to Dubai` 390
- `/service/pet-relocation-from-dubai/` — `pet relocation from Dubai` 390
- `/services/` — `pet relocation services Dubai` 320
- Fold **pet taxi Dubai (590)** into `/service/pet-transport-dubai/` (already owns the taxi/transport cluster; do not create a separate taxi URL)

## Origin-market check (optional)
98 route-keyword lookups across 8 origin markets (UK / US / India / CA / AU / DE / PH / KSA). Live results were sparse/non-null. No origin-market volumes were written into lock-map or universe. Estimates on those rows stay as-is.

## What this file is not
- Not a Labs dataset.
- Not a new keyword inventory.
- Not permission to invent volumes where Ads returned null.
- Not a site-copy or URL-architecture change. Architecture rulings in `architecture-brief.md` still stand (including ruling 7: pet-taxi crossover stays on the transport page).
- Not a volume-HOLD on `/routes/` or `/cities/` — those hubs still ship as IA fixes.
