# Route50 DEPTH BAR — OWNER UPGRADE 2026-09-05

**Binding for PR #25 body expand and future Tranche B.**  
Gold samples: `exemplars/germany-to-dubai.json`, `exemplars/dubai-to-germany.json`.  
Full brief: `CURSOR_TRANCHE_BRIEF.md`.

## Rule

Every `/routes/{slug}/` page must be **≥1000 words of UNIQUE detailed copy** — not templated filler, not thin airport tables alone.

## Checklist (all required)

- [ ] Unique corridor intro (outbound ≠ reverse inbound)
- [ ] `rulesSpecialties` — origin OR destination-side as direction requires
- [ ] `difficulties` — failure modes for **THIS** corridor
- [ ] `howItWorks` — scenario timeline (not generic 5-step clone)
- [ ] Airports (IATA + city) — seed + UAE DXB/DWC/AUH + `airportsNarrative`
- [ ] Airlines — cabin / cargo / generally not; confirm current policy; no affiliation + `airlinesNarrative`
- [ ] UAE import: MOCCAE permit **30 days** (inbound); outbound: destination rules high-level + verify
- [ ] FAQ 4–6 unique — prefer DataForSEO **PAA** when provided; **no invented fees**
- [ ] Internal links ≥3 meaningful (hub + reverse twin + guides)
- [ ] Quote-only packages; WhatsApp **+971504782999**; CTA **Get Route Checked**
- [ ] `depthBar: "OWNER ≥1000 unique"` + `wordCountEstimate` ≥ 1000

## Word-count concatenation

`intro` + `rulesSpecialties` + `difficulties` + `howItWorks` + `airportsNarrative` + `airlinesNarrative` + `uaeRules`/`destinationRules` (bullets + notes) + FAQ **answers**.

## Anti-patterns (instant fail)

| Anti-pattern | Correct |
|---|---|
| Templated filler / country-name swap intros | Unique corridor prose |
| Outbound = reverse of inbound (AU/PH/IN extra-strict) | Destination-backwards outbound intent |
| Invented MOCCAE / airline / package fee numerals | Portal confirm + quote-only CTA |
| “90-day wait **after** titer/draw” | Sample within **90 days before travel** (≥0.5 IU/ml) |
| Thin table-only pages | Narrative sections + tables |
| Airline logos / affiliation / “MOCCAE-approved airline” | Unverified seed + confirm current policy |
| Printing SEO volumes on the page | Never |

## Regulatory locks (unchanged)

- Titer = sample within 90 days **before travel** (≥0.5 IU/ml) — NEVER “90-day wait after draw”
- MOCCAE import permit = **30 days** from issuance (inbound)
- Outbound export cert = commonly **30 days** from issuance (high-level; verify on portal) — no invented fees
- No invented MOCCAE/airline fee numerals

## PR #25 steer

Open PR: `feat(routes): Route50 — 50 new corridor pages + shared template`.  
Expand bodies to this depth bar using DE exemplars as the gold sample. Do **not** invent volumes or fees. Do **not** launch a duplicate Cursor tranche from scratch.
