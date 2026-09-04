# SEO-MASTER program — Dubai Pet Relocation only

**Repo:** `numini-co/PetClear`  
**Brand / domain:** Dubai Pet Relocation · [dubai-pet-relocation.ae](https://dubai-pet-relocation.ae)  
**Horizon:** 13 weeks (foundation through first authority expansion)

This file is the short program summary for PetClear. It does **not** replace the full SEO-MASTER pack (populated keyword locks, inventories, calendars, and maps).

## Import status

PR #2 landed header-only CSV scaffolds in this folder. The **full program pack** (verified CSV/MD rows) is large and lives on the orchestrator box. It will be committed here by the orchestrator via `gh` — do not invent keyword rankings, traffic numbers, prices, or page claims in the stubs while waiting.

Until that import:

- Treat `README.md` + the CSV headers as the file contract.
- Treat this `PROGRAM.md` as the week-by-week operating plan.
- Do not populate CSVs from guesswork.

## Scope

| In | Out |
| --- | --- |
| PetClear / Dubai Pet Relocation only | Other brands, repos, or marketplaces |
| English site on dubai-pet-relocation.ae | Arabic mirror (`/ar/`) until week 13 prep |
| SEO, content, internal links, local/technical foundation | Commercial pricing files (`COMMERCIAL/`) except as a read-only citation source |

Existing strategy sources (do not duplicate them here): `strategy/seo_strategy.md`, `MONTH-1-EXECUTION-PLAN.md`, `UAE_EXPANSION_MASTER_BLUEPRINT.md`.

## 13-week outline

### Weeks 1–4 — Foundation

| Week | Focus | Outcome |
| --- | --- | --- |
| 1 | Technical + NAP | HTTPS/canonical/robots/sitemap hygiene; Search Console + GA4; consistent NAP and WhatsApp (`+971 50 478 2999`) |
| 2 | Schema + local | Organization / LocalBusiness / FAQ / Breadcrumb on live templates; Google Business Profile started |
| 3 | Core commercial pages | Homepage + service/import/export hubs live with unique FAQ and internal links |
| 4 | Measurement + images | WhatsApp/phone/form events; Core Web Vitals baseline; Visual Media fills `image-map.csv` / `visual-library.csv` from real assets |

### Weeks 5–8 — Coverage

| Week | Focus | Outcome |
| --- | --- | --- |
| 5 | Route cluster A | Priority import routes (e.g. UK, USA) as unique pages, not thin clones |
| 6 | Route cluster B + guides | Additional routes plus cost / requirements / crate depth pages |
| 7 | Species + permit | Dog, cat, and MOCCAE permit pages locked to distinct keywords in `keyword-lock-map.csv` |
| 8 | Area / emirate spokes | Dubai area and emirate pages wired from hubs; no orphan URLs |

### Weeks 9–13 — Authority and handoff

| Week | Focus | Outcome |
| --- | --- | --- |
| 9 | Internal link pass | Execute `internal-link-map.csv`; every indexed URL has ≥3 inbound contextual links |
| 10 | Content calendar | Two informational pieces from `content-calendar.csv` (seasonal / how-to); cite `regulatory-source-of-truth.csv` |
| 11 | Competitor gaps | Fill documented gaps from `competitor-gap.csv`; no invented competitor ranks |
| 12 | Index + redirects | Sitemap/IndexNow refresh; `redirect-map.csv` for any retired paths; backlog triage |
| 13 | Review + Phase 2 brief | Audit locks vs live `site-inventory.csv`; brief Arabic + extra-route expansion — do not ship `/ar/` in this pack |

## Operating rules

1. **One keyword, one owner page.** Lock it in `keyword-lock-map.csv` before writing.
2. **Cite before you claim.** Regulatory or cost copy needs a row in `regulatory-source-of-truth.csv` (and a `COMMERCIAL/` verification status if a number is shown).
3. **No invented metrics.** Leave cells empty rather than guessing volume, rank, or price.
4. **Log shipping.** Every live URL or SEO change gets a `change-log.csv` row with PR/commit.

## Full pack (orchestrator import)

Expected files already scaffolded; orchestrator replaces stubs with verified rows:

| File | Role in the 13-week program |
| --- | --- |
| `keyword-lock-map.csv` | Cannibalisation lock |
| `site-inventory.csv` | Live vs planned URLs |
| `page-roadmap.csv` | Weeks 3–8 page queue |
| `content-calendar.csv` | Weeks 10–11 production |
| `internal-link-map.csv` | Week 9 pass |
| `image-map.csv` / `visual-library.csv` | Week 4+ asset register (Visual Media) |
| `competitor-gap.csv` | Week 11 |
| `regulatory-source-of-truth.csv` | Citation gate |
| `redirect-map.csv` | Week 12 |
| `change-log.csv` / `backlog.csv` | Ongoing |

Do not merge this PR as a substitute for that import.
