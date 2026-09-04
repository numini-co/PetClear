# Crawl Summary — dubai-pet-relocation.ae
Date checked: 2026-09-04 | Crawler: Python requests + BeautifulSoup, UA `Mozilla/5.0 (compatible; SEO-audit/1.0)`, ~0.42s delay between requests

## Scope
- Sitemap: `https://dubai-pet-relocation.ae/sitemap.xml` — **81 URLs**, all crawled successfully (0 fetch errors).
- Sections: 41 `/dubai/` neighborhood pages, 10 `/service/`, 10 `/routes/`, 8 `/guides/`, 2 `/cities/`, plus home, services hub, about, contact, FAQ, how-it-works, 2 legal, 2 dog/cat relocation-to-Dubai pages.

## robots.txt key directives
- `User-agent: * / Allow: /`
- Explicit **Allow: /** for AI crawlers: GPTBot, OAI-SearchBot, ChatGPT-User, PerplexityBot, ClaudeBot, Claude-Web, Google-Extended (AEO/GEO-friendly stance)
- `Disallow: /admin/`, `Disallow: /api/`
- Sitemap declared: `https://dubai-pet-relocation.ae/sitemap.xml`

## Status anomalies
- **All 81 sitemap URLs: HTTP 200, no redirects, no fetch errors.** Final URL == sitemap URL in every case.
- 2 pages are deliberately `noindex, nofollow`: `/privacy-policy/`, `/terms-of-service/` (legal pages — normal practice).
- All 81 pages have a canonical, title, meta description, and exactly one H1. All pages are `lang="en"`; **no hreflang anywhere** (single-language site — fine).

## Duplicate / near-duplicate findings
- **Duplicate titles: 0** exact-match groups. **Duplicate meta descriptions: 0.** **Duplicate H1s: 0.** No missing or multiple H1s on any page.
- **Near-duplicate body text — the 41 `/dubai/` neighborhood pages:** measured with 8-word-shingle Jaccard similarity on full visible text.
  - Mean pairwise similarity **0.322**, median **0.343**, min 0.081, max 0.551 across all 820 pairs.
  - **8 pairs ≥ 0.50 similarity** (these share roughly half their text — template skeletons with swapped neighborhood names):
    - bur-dubai ↔ karama (0.551)
    - dubai-hills ↔ meydan (0.520)
    - business-bay ↔ bur-dubai (0.520)
    - umm-suqeim ↔ al-wasl (0.517)
    - business-bay ↔ karama (0.512)
    - city-walk ↔ bluewaters (0.509)
    - city-walk ↔ port-de-la-mer (0.506)
    - arabian-ranches ↔ dubailand (0.502)
  - Near-duplicate groups (≥0.50, union-find): **ND1** business-bay/bur-dubai/karama (avg 0.527); **ND2** city-walk/bluewaters/port-de-la-mer (0.503); **ND3** arabian-ranches/dubailand (0.502); **ND4** dubai-hills/meydan (0.520); **ND5** umm-suqeim/al-wasl (0.517). Full-text SequenceMatcher ratio on the worst pairs reaches ~0.68–0.70.
  - Interpretation: the neighborhood pages are **partially templated** — no pair is a near-exact clone (nothing ≥0.7 shingle-Jaccard), but ~20 of the 41 pages sit in clusters sharing ~50% of body text. Average neighborhood page is only ~1,125 words (incl. shared nav/footer boilerplate), so the *unique* content per page is thin.

## Missing / length issues
- Missing H1: **0**. Missing titles: **0**. Missing meta descriptions: **0**.
- Titles >60 chars: 6 pages. Meta descriptions >160 chars: 16 pages (truncation risk in SERPs).
- Every page has at least one H2.

## Schema usage (JSON-LD, pages using each type)
- Organization 81/81, WebSite 81/81, BreadcrumbList 78/81, FAQPage 74/81, **LocalBusiness 44/81** (all 41 neighborhood pages + home + 2 others), Article 17, Service 11 (all service pages), HowTo 9, ItemList 2, ContactPage 1.
- Breadcrumb markup detected on **81/81** pages.
- Images: 128 total, **0 missing alt text**.

## Broken links
- **2 broken internal links (both 404):**
  - `https://dubai-pet-relocation.ae/routes` ← linked from **10 pages** (all route pages; hub page missing — only `/routes/uk-to-dubai/` etc. exist in sitemap)
  - `https://dubai-pet-relocation.ae/cities` ← linked from **2 pages** (the two `/cities/*` pages)
  - Note: trailing-slash variants `/routes/` and `/cities/` were not linked from crawled pages; the bare (no-slash) versions 404 rather than redirect.
- No other internal targets outside the sitemap were found; all other internal links resolve to crawled 200 pages.

## Orphan pages
- **None.** Every sitemap URL receives at least one internal link from another crawled page.

## Word counts by section (visible body text, includes nav/footer boilerplate)
| Section | Pages | Mean | Median | Min | Max |
|---|---|---|---|---|---|
| home | 1 | 10,052 | 10,052 | — | — |
| route | 10 | 2,781 | 2,605 | 2,207 | 3,858 |
| city | 2 | 2,532 | 2,532 | 2,302 | 2,762 |
| info | 6 | 2,108 | 1,861 | 524 | 4,007 |
| guide | 8 | 1,887 | 1,562 | 530 | 3,784 |
| service | 11 | 1,788 | 1,821 | 873 | 2,690 |
| legal | 2 | 1,388 | 1,388 | 1,187 | 1,588 |
| **local (/dubai/)** | **41** | **1,125** | **1,100** | **523** | **1,586** |

## Top 10 thinnest pages
1. `/dubai/` (hub) — 523 words
2. `/contact/` — 524
3. `/guides/` (hub) — 530
4. `/services/` (hub) — 873
5. `/service/pet-relocation-dubai/` — 892
6. `/dubai/dubai-marina/` — 985
7. `/about/` — 1,000
8. `/dubai/deira/` — 1,019
9. `/dubai/umm-suqeim/` — 1,033
10. `/dubai/al-wasl/` — 1,033

(The three thinnest are hub/contact pages where low word count is expected; the flagship `/service/pet-relocation-dubai/` at 892 words is the notable thin money page.)

## Trust claims
- 234 trust-claim instances extracted across the site into `trust-claims-register.csv` (all marked REVIEW / needs manual verification). Categories: MOCCAE-related 112, IATA/IPATA 51, partnership/vetting 31, license/certification 18, 24/7 availability 7, pets-relocated counts 2, percentage/success 2, review/country volume 1, other 10.
- Key quantified claims on homepage: **"400+ Pets relocated"**, **"4.9★ Google rating"**, **"15 min WhatsApp reply"**, **"0 Paperwork errors"**, **"24/7 Availability"**, **"50+ destination countries"** — none independently verifiable from the site itself; all flagged for manual verification.

## Crawl limitations
- HTML-only crawl (no JavaScript rendering); word counts include shared nav/footer text, so absolute numbers overstate unique content.
- Similarity measured on full visible text including boilerplate; unique-content similarity would be somewhat higher than reported.
- Only internal link targets outside the sitemap were re-fetched for broken-link checking (2 found, both 404); all in-sitemap targets were already verified 200 during the crawl.
