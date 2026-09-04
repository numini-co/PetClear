# SEO-MASTER — Shared operational memory

These files are the Dubai Pet Relocation team's shared SEO operational memory. They are living stubs: headers and ownership only until the team adds verified rows.

**All agents and team members must read this folder before starting SEO, content, or visual work.** Do not invent keyword rankings, traffic numbers, or page claims. Add a row only when the fact is verified.

## Ownership

| File | Primary owner | Notes |
| --- | --- | --- |
| `keyword-lock-map.csv` | SEO Lead | Keyword-to-page lock; prevents cannibalisation. |
| `site-inventory.csv` | SEO Lead | Live / planned URL inventory. |
| `page-roadmap.csv` | SEO Lead | Proposed pages and dependencies. |
| `content-calendar.csv` | SEO Lead | Production schedule; owners per task. |
| `internal-link-map.csv` | SEO Lead | Planned and live internal links. |
| `image-map.csv` | Visual Media | Page-level asset placement. |
| `visual-library.csv` | Visual Media | Master asset register (stills + motion). |
| `competitor-gap.csv` | SEO Lead | Competitor gaps and our response. |
| `regulatory-source-of-truth.csv` | SEO Lead | Claims that must cite a source. |
| `redirect-map.csv` | SEO Lead | Path redirects; coordinate with engineering. |
| `change-log.csv` | SEO Lead | Who changed what, and where. |
| `backlog.csv` | SEO Lead | Unscheduled SEO / content work. |

SEO Lead is the default owner for this folder. Visual Media owns `image-map.csv` and `visual-library.csv`. Anyone may propose rows; the owner reviews and updates `status` / `updated_at` (or equivalent) fields.

## How to update

1. Read the relevant CSV before creating or editing a page.
2. Add or edit one row per real item. Leave unused columns empty rather than guessing.
3. Record the change in `change-log.csv`.
4. Prefer a PR note or commit hash in `pr_or_commit` when the change ships.
