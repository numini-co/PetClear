# Routes-50 lock-map update — risks brief
Date: 2026-09-05 | Week: W-routes50 | Owner: DPR SEO Lead
Scope: `keyword-lock-map.csv` + `keyword-universe.csv` only. No website pages.

Locked slugs are binding. Do not swap country pairs or reverse inbound/outbound URLs.

## What this update did
- Upserted **50 primary** head terms (`pet relocation {Country} to Dubai` / `pet relocation Dubai to {Country}`) onto dedicated `/routes/{slug}/` URLs.
- All 50: Status = `to create`, Existing/New = `new`.
- Reassigned **6 outbound-intent secondaries** off live inbound twins (AU / PH / IN). Kept Secondary.
- Promoted HOLD/hub heads off `https://dubai-pet-relocation.ae/routes/` onto the locked slug.
- Appended **14 Asia head terms** to `keyword-universe.csv` (JP / HK / TH / ID / MY / CN / KR × inbound+outbound).
- Did **not** delete other lock-map rows.
- Did **not** change the 10 live inbound/outbound route primaries (UK/USA/CA/AU/IN/PH/NZ/ZA inbound + Dubai-to-UK / Dubai-to-USA).

## Volume rules (nothing invented)
| Head | Volume | Basis | Label location |
|---|---:|---|---|
| `pet relocation Dubai to India` | 30 | `dataforseo_labs_keyword_overview` | Last Optimized |
| All other existing heads | existing lock-map Search Volume | `seo_master_cluster_estimate` from lock-map / backlog | Last Optimized |
| Asia 14 (no prior universe) | 36 | `seo_master_cluster_estimate` — backlog `<=36/mo` ceiling | Last Optimized + universe Volume Basis |

**Labs 1/50.** Only one of the 50 heads has a DataForSEO Labs keyword-overview hit: Dubai-to-India = 30. Every other head is a cluster estimate copied from the existing lock-map or the backlog 36 ceiling. Do not treat those estimates as live Ads or Labs volumes.

## Top risks

### 1. Twin cannibalization — AU / PH / IN (HIGH)
Live inbound pages already own the inbound heads:

| Live inbound (do not retarget outbound) | New outbound primary | Secondaries moved off the inbound twin |
|---|---|---|
| `/routes/australia-to-dubai/` | `/routes/dubai-to-australia/` | `pet relocation Dubai to Australia cost`; `how to move pets from Dubai to Australia`; `can I fly my dog direct from Dubai to Australia` |
| `/routes/philippines-to-dubai/` | `/routes/dubai-to-philippines/` | `pet relocation UAE to Philippines cost`; `how to send pet from Dubai to Philippines` |
| `/routes/india-to-dubai/` | `/routes/dubai-to-india/` | `how to take pets from UAE to India` |

If copy, titles, or FAQs on the live inbound pages still answer “Dubai → destination” questions, Google will keep ranking the inbound twin for outbound queries. Page build (later, not this PR) must: outbound-only H1/title; no reversed inbound clone; internal links use directional anchors; inbound pages drop outbound-intent sections.

### 2. Labs 1/50
Priority scoring and “is this corridor worth a page?” cannot be re-run from Labs. 49/50 volumes are `seo_master_cluster_estimate`. A later Keywords Data / Labs pass may shrink several heads (same pattern as the W1–4 Ads refresh). Do not invent interpolated volumes to fill the 49 gaps.

### 3. HOLD threshold override
Architecture-brief / README HOLD rule is ~65/mo **cluster** for a new country pair. Several locked slugs sit below that (Spain/Italy/Ireland/Bahrain/Kuwait heads at 20; many outbound twins at 20–40; Asia at the 36 ceiling). This lock-map update **overrides** that threshold for the 50 locked slugs only. It does not authorize Belgium, Switzerland, Sri Lanka, Kenya, Russia, or Europe-generic pairs. Hub secondaries for those non-locked corridors stay on `/routes/`.

### 4. Asia 36 ceiling
JP / HK / TH / ID / MY / CN / KR had **no cluster in the keyword universe** and backlog demand evidence of `<=36/mo est.` The 14 new heads are written at **36**, labeled `seo_master_cluster_estimate`. 36 is a ceiling, not a measured volume. Do not raise it without a live/Labs pull.

### 5. Qatar vs Qatar Airways policy intent
`pet relocation Qatar to Dubai` / `pet relocation Dubai to Qatar` are **country-route** heads on `/routes/qatar-to-dubai/` and `/routes/dubai-to-qatar/`.

`Qatar Airways pet policy` (170, cluster `airline-qatar`) stays on `/guides/pet-flight-options-dubai/`. Do not move airline-policy terms onto the Qatar country slugs. Route pages may mention QR as a carrier option; they must not target or cannibalize the airline-policy SERP.

## 10 live route primaries left untouched
`/routes/uk-to-dubai/`, `/routes/usa-to-dubai/`, `/routes/canada-to-dubai/`, `/routes/australia-to-dubai/`, `/routes/india-to-dubai/`, `/routes/philippines-to-dubai/`, `/routes/new-zealand-to-dubai/`, `/routes/south-africa-to-dubai/`, `/routes/dubai-to-uk/`, `/routes/dubai-to-usa/`.

Exception: the six outbound-intent **secondaries** listed in §1 were moved off the AU/PH/IN inbound twins.

## Locked slugs (do not swap)
dubai-to-india, dubai-to-philippines, saudi-arabia-to-dubai, dubai-to-australia, dubai-to-saudi-arabia, germany-to-dubai, france-to-dubai, dubai-to-canada, dubai-to-south-africa, qatar-to-dubai, singapore-to-dubai, dubai-to-germany, dubai-to-qatar, turkey-to-dubai, spain-to-dubai, netherlands-to-dubai, dubai-to-france, dubai-to-turkey, dubai-to-oman, dubai-to-singapore, pakistan-to-dubai, oman-to-dubai, bahrain-to-dubai, kuwait-to-dubai, italy-to-dubai, ireland-to-dubai, dubai-to-netherlands, dubai-to-pakistan, egypt-to-dubai, dubai-to-egypt, dubai-to-new-zealand, dubai-to-spain, dubai-to-bahrain, dubai-to-kuwait, dubai-to-italy, dubai-to-ireland, japan-to-dubai, dubai-to-japan, hong-kong-to-dubai, dubai-to-hong-kong, thailand-to-dubai, dubai-to-thailand, indonesia-to-dubai, dubai-to-indonesia, malaysia-to-dubai, dubai-to-malaysia, china-to-dubai, dubai-to-china, south-korea-to-dubai, dubai-to-south-korea.
