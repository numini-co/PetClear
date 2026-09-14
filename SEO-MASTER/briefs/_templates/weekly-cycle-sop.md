# Weekly cycle SOP — `change-log.csv` and `keyword-lock-map.csv`

Run this at the end of every content calendar week (and on each daily tranche that ships a URL). Owner-blocked items (lock-map stakeholder sign-off, GSC baseline) stay `planned` — do not invent a sign-off or ranks.

## 1. Before writing

1. Open `keyword-lock-map.csv`. Confirm the primary keyword is not already owned by another URL.
2. If creating a URL, complete the 12 pre-creation questions (`README.md` §3 / `page-brief-template.md`) and log **12Q PASS** in `change-log.csv`.
3. Pull DataForSEO live volumes when available. Null live volumes stay as prior estimates — **do not zero them**. Flag “estimated” in the change-log.

## 2. Updating `keyword-lock-map.csv`

| Event | What to change |
|---|---|
| New URL goes live | Ensure the **primary** Keyword row points at the live canonical. Set **Status** = `live` for **all rows** whose Primary URL is that canonical. Set **Existing/New** = `existing` if it was `new`. Set **Last Optimized** = ship date (`YYYY-MM-DD`). |
| Twin / secondary only | Do not steal another page’s primary. Add or keep secondaries on the owner URL. |
| Volume refresh | Update **Search Volume** only where live Ads returned a non-null number. Note date + market (UAE 2784) in `change-log.csv`. |
| Rank pull (GSC) | Fill **Current Rank** only from a real export. If GSC is owner-blocked, leave `not tracked`. |

Never reassign a primary to “help” a new page. Directional twins (to-Dubai vs from-Dubai; service vs guide) stay split by intent.

## 3. Appending `change-log.csv`

One row per decision or ship. Columns: `Date,Week,Change Type,URL,Detail,Source/Reason,Owner,Status`.

**Detail must include when relevant:**

- URLs created / modified (paths only).
- DataForSEO volumes used that day (live vs null/estimated).
- **12Q PASS** (or FAIL + HOLD reason).
- Regulatory notes (e.g. export-certificate fee remains secondary / verify-on-portal).
- What was *not* done (no W10 redirects, no invented GSC/GTM, no fake stakeholder sign-off).

Status values: `done (YYYY-MM-DD)` | `partial (YYYY-MM-DD)` | `planned` | `decided`.

## 4. Companion files (same cycle)

- `content-calendar.csv` — Status: `planned` → `in-progress` → `done (date)` or `partial (date)` + note.
- `page-roadmap.csv` — CREATE/EXPAND/REFRESH rows: Action `CREATE done (date)`, word count, schema, inbound/outbound counts when known.
- `internal-link-map.csv` — append “implemented YYYY-MM-DD” on the Reason (or a notes) field for links actually wired this cycle.
- `image-map.csv` / `visual-library.csv` — mark delivered paths under `website/public/assets/…`.
- Both sitemaps (`website/public/sitemap.xml` and `SEO-MASTER/sitemap.xml`) — add the URL; set `lastmod` to the ship date.

## 5. Week-close checklist (13 points)

Mirror the WEEKLY REVIEW row: work vs plan; URLs created; URLs modified; merges/redirects; lock-map assignments; links vs map; images vs map; schema; SOT freshness 30/90/180; blockers; ranking (only if GSC exists); indexation; next-week tasks.
