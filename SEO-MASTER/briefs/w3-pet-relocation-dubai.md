# w3-pet-relocation-dubai — READY FOR PRODUCTION (implementation notes)

**URL:** `/service/pet-relocation-dubai/`  
**Status:** READY FOR PRODUCTION  
**Action:** EXPAND money head (dfs 390). Data file `website/src/data/services/petRelocationDubai.ts` + ServicePage.

## SERP
- Title: Pet Relocation Dubai | Door-to-Door Dog & Cat Relocation
- H1: Pet Relocation in Dubai — Door-to-Door, Transparently Coordinated
- Meta: Door-to-door pet relocation in Dubai: MOCCAE document checks, IATA-compliant crates, cargo booking coordination, and clear WhatsApp timelines. Get a relocation quote.

## Implemented
- FAQ: **8 unique**. HowTo + FAQPage + Service + Organization + WebSite + BreadcrumbList.
- Inbound: homepage, `/services/`, `/dubai/`, `/guides/`, `/cities/` (wired this PR) + existing map rows.
- Outbound: cost guide, contact, tiers, to/from, transport, how-it-works, dubai hub.
- Pet shipping / cargo folded here (ruling 11). Coordinator service, not airline owner.
- Titer: sample within 90 days before travel, ≥0.5 IU/ml. Permit: 30 days.

## Assets (`/assets/w1-w3/`)
Wired: pet-relocation-dubai-process-five-stages.png; measuring-toy-poodle-crate-sizing-dubai.jpg.  
**Hero BLOCKED** — keeps existing `/images/service-pet-relocation-dubai.jpg` placeholder.

## Fee blockers
No AED tables. No contested MOCCAE 200 vs 500, release fees, or export-cert ranges. Cost drivers + WhatsApp quote only.
