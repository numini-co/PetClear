# Week 7 TOP INBOUND ROUTES briefs (from 2026-10-19)

All 8 URLs are live on main and in the live sitemap. All briefs are EXPAND/upgrade. Calendar lists 4 as CREATE: mismatch, SEO should update content-calendar.csv rows to EXPAND.

| Route | Live state | Unique words (est.) | Top gaps | Brief |
|---|---|---|---|---|
| /routes/uk-to-dubai/ | LIVE (legacy) | ~2,640 | APHA/AHC section, London intent, cat para | uk-to-dubai.md |
| /routes/usa-to-dubai/ | LIVE (legacy) | ~1,980 | USDA endorsement body section, hub scenarios, CDC return note | usa-to-dubai.md |
| /routes/india-to-dubai/ | LIVE (legacy) | ~2,750 | AQCS export VERIFY, Mumbai intent, FAQ dedupe | india-to-dubai.md |
| /routes/philippines-to-dubai/ | LIVE (legacy) | ~2,380 | volume line scrub, BAI export VERIFY, lab VERIFY | philippines-to-dubai.md |
| /routes/germany-to-dubai/ | LIVE Route50 (calendar says CREATE) | ~1,060 | Veterinaeramt VERIFY, city intent | germany-to-dubai.md |
| /routes/saudi-arabia-to-dubai/ | LIVE Route50 (calendar says CREATE) | ~1,270 | MEWA Anaam walkthrough (first-party), Riyadh intent | saudi-arabia-to-dubai.md |
| /routes/france-to-dubai/ | LIVE Route50 (calendar says CREATE) | ~1,100 | DDPP VERIFY, de-duplicate vs Germany | france-to-dubai.md |
| /routes/singapore-to-dubai/ | LIVE Route50 (calendar says CREATE) | ~1,040 | AVS VERIFY, return-to-SG note | singapore-to-dubai.md |

Plus export-gaps.md (W6 fold-in, cheap).

## Source conflicts to fix
- route50/DEPTH_BAR.md still says MOCCAE permit 30 days (lines 19 and 44). Hard lock is 90 days from issuance. Update before Frontend Builder reads it.
- regulatory-source-of-truth.csv row 2 still states 30 days (APHIS secondary). Needs MOCCAE first-party 90-day row.
- Calendar asks for 'verified AED + origin-currency cost tables' on routes: conflicts with fee lock. Briefs use cost-driver narrative + labelled government fees only.

## Live scrub list
- philippines-to-dubai: 'Dubai Pet Relocation has helped many Filipino families move their pets to Dubai' (volume claim).
- All 8 pages: em dashes in shared template strings and route copy.
- No 30-day import-permit lines found on these 8 pages (30-day mentions on India/PH are vaccine-to-sample and booster intervals, which are fine).