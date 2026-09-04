# w3-pet-relocation-from-dubai — READY FOR PRODUCTION (implementation notes)

**URL:** `/service/pet-relocation-from-dubai/`  
**Status:** READY FOR PRODUCTION  
**Action:** REFRESH outbound/departure-only (Ruling 3).

## SERP
- H1: Moving Pets Out of Dubai
- Meta: Leaving Dubai with your pet: destination-first timelines, MOCCAE export health certificate path, cargo booking, and outbound route guidance. Check your timeline.

## Implemented
- Outbound-only: destination-first timeline, MOCCAE export path, DXB/DWC departure. Not a reversed inbound copy.
- FAQ: **8 unique**. HowTo + FAQPage.
- Inbound: homepage, `/services/`, `/routes/` + live Dubai-to-UK / Dubai-to-USA guides.
- Export-cert fee ranges (300–700 vs first-party AED 100 personal consignment) **not published**.

## Assets (`/assets/w1-w3/`)
Hero: pet-relocation-from-dubai-husky-balcony-golden-hour.jpg  
Process: pet-relocation-from-dubai-outbound-journey-diagram.png  
Detail: export-documents-crate-pouch-checklist-dubai.jpg

## Fee blockers
No outbound AED tables. Destination quarantine charged by destination — flagged, not numbered.
