# Keyword lock-map — owner Week-2 sign-off (2026-09-14)

**Site:** dubai-pet-relocation.ae / PetClear  
**Scope:** SEO-MASTER docs only. No website/app code.  
**Hard URL rule:** NEVER rename / remove / redirect existing URLs.

This file records the signed decisions. It does **not** rewrite `architecture-brief.md` rulings.

## Confirmed: one-owner rulings 1–11

Rulings 1–11 in `architecture-brief.md` (KEYWORD OWNERSHIP DECISIONS) are **confirmed as-is**. Do not rewrite them.

| # | Owner URL (unchanged) | Owns |
|---|---|---|
| 1 | `/service/pet-relocation-dubai/` | pet relocation Dubai (money head) |
| 2 | `/service/pet-relocation-to-dubai/` | inbound directional |
| 3 | `/service/pet-relocation-from-dubai/` | outbound directional |
| 4 | `/service/international-pet-relocation/` | international pet relocation Dubai/UAE |
| 5 | `/service/pet-import-dubai/` + `/guides/uae-pet-import-requirements/` | commercial vs informational import split |
| 6 | `/service/pet-export-dubai/` | commercial export |
| 7 | `/service/pet-transport-dubai/` | pet transport Dubai (incl. taxi crossover) |
| 8 | `/service/dog-relocation-dubai/` + `/dog-relocation-to-dubai/` | species service vs inbound-journey root |
| 9 | `/service/cat-relocation-dubai/` + `/cat-relocation-to-dubai/` | same split for cats |
| 10 | `/service/moccae-pet-permit/` + `/guides/moccae-import-permit/` | commercial permit vs informational guide |
| 11 | (no new URL) | pet shipping/cargo Dubai folded as secondaries |

## HOLD set A–F — locked

Do **not** unlock HOLD rows in `keyword-lock-map.csv`. Status columns stay as signed.

| HOLD | What stays locked |
|---|---|
| A | Emergency — `/service/emergency-pet-relocation/` capability-gated |
| B | Companies listicle |
| C | FPR `/for-pet-relocators/` PARKED |
| D | Architecture HOLD corridors beyond live Route50 |
| E | Tool HOLDs (cost calculator / crate-size as tools, not new URLs) |
| F | Thin commercial defer |

## Volume null truth-up (two primaries only)

Owner authorized a docs-only lock-map volume null truth-up. Match FPR pattern: empty Search Volume + `dataforseo_ads_live:null` evidence in Last Optimized.

| Keyword | Primary URL (KEPT) | Search Volume | Evidence |
|---|---|---|---|
| `international pet relocation Dubai` | `/service/international-pet-relocation/` | empty / null | `dataforseo_ads_live:null` (UAE 2784). Old lock-map `260` was an estimate. Null is not zero invented demand. |
| `pet relocation Dubai cost` | `/guides/pet-relocation-cost-dubai/` | empty / null | same. URL kept. |

Related secondaries (e.g. `pet relocation Dubai price`) were **not** changed. `keyword-universe.csv` estimates were left untouched (out of scope).

## CREATE/EXPAND unlock (research note only)

Owner unlocked CREATE/EXPAND **under signed HOLDs A–F**. New URLs are OK when the 12-question gate in `editorial-workflow.md` passes. Do **not** mass-change Status columns on HOLD/PARKED rows.

## Docs patch authorized

| Artifact | Action |
|---|---|
| `keyword-lock-map.csv` | Two primary Search Volume clears + Last Optimized notes |
| `research/editorial-workflow.md` | Adopted P2 workflow (2026-09-14) |
| `research/keyword-lock-map-owner-signoff.md` | This record |
| `change-log.csv` | Append 2026-09-14 owner Week-2 sign-off row |

See `change-log.csv` and the PR that lands this patch.
