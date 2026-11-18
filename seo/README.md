# Keyword map

`keyword-map.json` is the locked keyword map for every public URL in `website/public/sitemap.xml`. It is the source of truth for which query each page is allowed to rank for.

The daily SEO run uses this file before it edits a page.

## Before editing a page

1. Open the entry whose `url` matches the page.
2. Read `primaryKeyword` and `secondaryKeywords`. Those are the only queries that page may target.
3. Do not write another page's primary into the title, H1, meta description, or headings.
4. If the assignment is wrong, change this map in the same pull request. Do not reassign a keyword only in the page.
5. From `website/`, run `npm run check:keywords`.

A primary keyword belongs to exactly one URL. A keyword that is primary on one URL must not appear as a secondary on another URL unless it is listed in `allowedOverlaps` with a reason. `allowedOverlaps` cannot give the same primary to two URLs.

## Fields

| Field | Meaning |
| --- | --- |
| `url` | Canonical public URL, including the trailing slash. |
| `primaryKeyword` | The one query this URL owns. |
| `secondaryKeywords` | Supporting queries for the same URL. They still have to be unique across the map. |
| `intent` | `service/money`, `guide/informational`, `route`, `community`, or `species`. |
| `notes` | Optional lane notes for the editor. Not shown on the site. |
| `allowedOverlaps` | Exceptions. Each item needs `keyword`, `urls`, and `reason`. |

## Normalisation

Comparisons lowercase the keyword, trim it, and collapse whitespace. Hyphens and other punctuation become spaces. The check does not stem words. Singular and plural stay distinct (`dog` and `dogs` are different keywords). `uae` and `dubai` stay distinct. Do not merge those variants by hand just because they look similar.

The title/H1 test is fuzzy: the primary passes when the normalised phrase sits in the title or the H1, or when its words appear there in order after dropping `a`, `an`, `the`, `and`, `or`, `of`, `your`, and `our`. `to` and `from` are kept, so an inbound route and its outbound twin do not match each other.

## The check

`website/package.json` runs the check at the start of `npm run build`, so Vercel runs it on every deployment.

- Duplicate keywords, a sitemap URL with no entry, and a map URL that is not in the sitemap are errors. They fail the build.
- A title or H1 that does not contain the primary is a warning. It is printed and does not fail the build. Fix it by editing the map, or by a later copy change that keeps this file in sync. Do not treat a warning as permission to copy another page's primary.

```bash
cd website
npm run check:keywords
```
