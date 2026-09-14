# Editorial Workflow (adopted 2026-09-14)
**Scope:** dubai-pet-relocation.ae / PetClear only  
**Status:** ADOPTED after owner Week-2 lock-map sign-off  
**Hard URL rule:** NEVER rename / remove / redirect existing URLs. Adding new URLs is OK when gated.

## 1) Page brief template (SEO Lead → Content Architect)

Every brief must answer the **12-question gate** before any new URL or major expand:

1. Primary KW + DFS UAE evidence (Ads/Labs; null allowed if strategic — say so)
2. One owner URL (lock-map row) — no dual primary
3. Intent + funnel stage
4. Cannibalization risks (URLs that must not steal)
5. Supporting pages / internal link targets
6. HARD regulatory locks (permit 90d from issuance; titer sample within 90 days before travel; no invented fees; no airline affiliation)
7. PAA/FAQ ownership (own on this page vs deep-link)
8. Unique angle (≥1000 unique body for routes; outbound ≠ reverse inbound)
9. Title / H1 / meta targets (primary once each)
10. Schema (FAQPage only where FAQs are real answers)
11. CTA taxonomy (money vs peer vs corporate — no cross-pollute)
12. Ship gate owner (SEO Lead sign-off before merge for new URLs)

**Header block (copy into every brief):**
```
URL: /…/
Primary KW: …
DFS UAE: <number | null> (source date)
Status: existing | refresh | HOLD | PARKED
Owner ruling #: …
Cannibalization: …
Hard locks: …
PAA own vs link: …
Success: title/H1/meta + body primary density + FAQ schema if applicable
```

## 2) AI content gate (before Builder / Cursor)

| Gate | Fail = stop |
|---|---|
| Lock-map | Primary KW already owned elsewhere → rewrite brief, do not publish |
| Volume honesty | No invented vols; null ≠ "low"; cite DFS date |
| Regulatory | Permit validity ≠ titer window; cite SoT CSV |
| Fees / affiliation | No invented AED bands; no "official partner of Airline X" |
| Uniqueness | Routes: ≥1000 unique; outbound not inbound paste |
| Thin | No new URL for a single PAA already answerable on owner page |
| Trust | Unverified stats stripped or tagged `last-verified` |
| FPR | Never `pet relocators Dubai` in title/H1/meta |
| URLs | Never rename/remove/redirect existing URLs |

**Pass artifact:** short `AI_GATE_PASS.md` (URL, gates checked, residual risks) attached to PR.

## 3) Freshness classes (`last-verified`)

| Class | What | Cadence | Who |
|---|---|---|---|
| **R0 Regulatory** | MOCCAE permit, titer, banned breeds, CDC/high-risk, destination import rules | ≤90 days or on law change | SEO Lead + Regulatory SoT |
| **R1 Airline policy** | Emirates/Etihad cabin/cargo (edu only) | ≤60 days | Content + SEO |
| **R2 Fees / cost bands** | MOCCAE fees, published cost ranges | ≤90 days; never invent | Pricing + SEO |
| **R3 Commercial claims** | Trust bar, reviews, volume claims ("hundreds of…") | ≤30 days or remove | Orchestrator / QA |
| **R4 Evergreen process** | How-it-works, crate sizing principles | ≤180 days | Content |

**On-page:** where a numeral or policy is shown, prefer `Last verified: YYYY-MM-DD` in FAQ or footnote for R0–R2.

## 4) Roles

| Role | Owns |
|---|---|
| SEO Lead | Lock-map, gate, PAA ownership, PASS/FAIL on PRs |
| Content Architect | Brief → draft FAQ/body from gate |
| Frontend / Cursor | Copy/meta/schema only per brief |
| QA | Live spot-check vs HARD locks |
| Orchestrator | Owner unlocks, priority |

## 5) CREATE/EXPAND unlock (2026-09-14)
Owner unlocked CREATE/EXPAND **under signed HOLDs A–F** (emergency capability-gated; companies listicle; FPR PARKED; architecture HOLD corridors beyond live Route50; tool HOLDs; thin commercial defer). New URLs OK when 12-Q gate passes. Existing URLs: never rename/remove/redirect.
