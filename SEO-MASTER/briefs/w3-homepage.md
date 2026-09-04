# w3-homepage — READY FOR PRODUCTION (implementation notes)

**URL:** `/`  
**Status:** READY FOR PRODUCTION (this PR)  
**Action:** REBUILD IA + REFRESH per `homepage-ia.md` (binding). ~12 sections.

## SERP
- Title: Pet Relocation Dubai — Clear Coordination for Dogs & Cats
- H1: Pet Relocation Dubai, Made Clear and Safe
- Meta: Plan pet relocation to and from Dubai. MOCCAE-aware document checks, route guidance, and WhatsApp timelines — get a relocation quote.

## Implemented
- Sections: Hero; Trust bar (process chips); Services grid → `/service/*` + `/services/`; Routes strip → `/routes/`; How it works (3 steps) → `/how-it-works/`; Cost drivers (qualitative, no fee numerals) → cost guide; UAE import essentials (30-day permit, titer sample within 90 days before travel, breeds, IATA, summer); Dubai areas → `/dubai/` + `/cities/`; Why us (process language only); Guides strip; FAQ (8 unique); Final CTA. Footer index unchanged.
- Schema: Organization, WebSite, LocalBusiness, BreadcrumbList, ItemList, FAQPage.
- FAQ count: **8 unique** (not copied from service pages).
- Inbound at launch: **≥4 P1** added + wired from `/services/`, `/routes/`, `/guides/`, `/dubai/` (and `/cities/`).
- Anti-cannibalization: homepage is category entry; money head stays on `/service/pet-relocation-dubai/`.

## Assets (`/assets/w1-w3/`)
Wired: services strip (german-shepherd, british-shorthair, moccae-permit); routes-strip-beagle; how-pet-relocation-works-7-step; iata-crate-hardware; dubai-pet-relocation-community-coverage-map.  
**Blocked heroes (existing `/images/hero-dog.jpg` placeholder only):** homepage hero, trust-bar photo, van card. No AI fillers.

## Fee blockers
No AED fee tables. Portal fees → confirm on official MOCCAE site. Trust bar = process chips only (no 400+/4.9/0 errors/24/7/50+ countries).
