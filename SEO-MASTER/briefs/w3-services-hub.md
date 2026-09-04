# w3-services-hub — READY FOR PRODUCTION (implementation notes)

**URL:** `/services/`  
**Status:** READY FOR PRODUCTION  
**Action:** EXPAND tiers hub (`ServicesPage.tsx`).

## SERP
- Title / H1: Dubai Pet Relocation Services — From Essential to Coordination
- Meta: Compare Dubai pet relocation service tiers — from document guidance to full coordination. Choose a package, then open the service page for your move.

## Implemented
- PawPilot / PawPartner / PawVIP comparison **without AED package prices** (“Quote on WhatsApp”).
- Offer schema no longer emits invented prices.
- FAQ: **8 unique** + FAQPage JSON-LD.
- Inbound: homepage + `/routes/`, `/guides/`, `/dubai/`, `/cities/` (added this PR).
- Child listing to all 10 `/service/*` URLs with map anchors.

## Assets (`/assets/w1-w3/`)
pet-relocation-service-tiers-comparison-dubai.png  
Hero keeps existing `/images/services-hero.jpg` (not in the 29-file W3 set).

## Fee blockers
No package AED tables. Government fees confirm-on-portal.
