# w3-pet-relocation-to-dubai — READY FOR PRODUCTION (implementation notes)

**URL:** `/service/pet-relocation-to-dubai/`  
**Status:** READY FOR PRODUCTION  
**Action:** REFRESH inbound-only (Ruling 2).

## SERP
- H1: Bringing Pets to Dubai from Anywhere
- Meta: Moving to Dubai with your dog or cat: MOCCAE 30-day import permit, titer timing, cargo arrival at DXB, and settling-in steps. Get a relocation quote.

## Implemented
- Inbound-only: permit, cargo arrival, settling in. Deconflicted from money page, import service, and outbound page.
- FAQ: **8 unique**. HowTo + FAQPage.
- Inbound: homepage, `/services/`, `/routes/` + existing route-map rows.
- Titer: blood sample within 90 days BEFORE travel (≥0.5 IU/ml) — not “90-day wait after titer”. Permit 30 days.

## Assets (`/assets/w1-w3/`)
Hero: pet-relocation-to-dubai-cat-arrival-new-apartment.jpg  
Process: pet-relocation-to-dubai-inbound-journey-diagram.png  
Detail: settling-in-first-week-dubai-spaniel-pet-corner.jpg + moccae-permit-document-check-hands-dubai.jpg

## Fee blockers
No inbound fee table. Portal fees confirm-on-portal only.
