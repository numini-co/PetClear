# Change log

## Release 3: representative template proof

Purpose: prove the page standard on five existing URLs before any wider rewrite. No new routes. No URL changes. No redesign.

Commit / PR: 6f290bbc6569b35b5996b36a235304952f4fc447 on branch cursor/release3-template-proof-ea81. Pull request https://github.com/numini-co/PetClear/pull/66.

Affected URLs:

- https://dubai-pet-relocation.ae/routes/uk-to-dubai/
- https://dubai-pet-relocation.ae/dubai/dubai-marina/
- https://dubai-pet-relocation.ae/dog-relocation-to-dubai/
- https://dubai-pet-relocation.ae/cat-relocation-to-dubai/
- https://dubai-pet-relocation.ae/guides/uae-pet-import-requirements/

Verification:

- Primary pages opened on 2026-09-22: MOCCAE import of pets; GOV.UK 3926EHC and the version 8 specimen; Emirates animals FAQ (full text saved from the official page).
- British Airways travelling-with-pets page: fetch timed out. Indexed official text was used only for hold-not-cabin and the UK pet-partner arrangement. Flight times, temperatures and Dubai-specific BA tariffs were not stated.
- Etihad travelling-with-pets page: fetch timed out. Cabin weights, centimetres and fares were removed from these five URLs rather than repeated.
- Dubai Municipality registration deadline and fee: not re-checked. Removed from the import guide.
- Older MOCCAE PDF claims (90-day pre-travel titre sample, ISO microchip label, AED 5,000 fine, microchip-before-vaccine as a rejection rule) were not on the live service page. Those sentences were narrowed or removed on the five URLs. The separate titre guide was not edited in this release and may still show the older sample window. The import guide says so.
- Veterinary review was not supplied.

Out of scope: remaining URL batch, robots cleanup, new tools, GBP, GSC, GA4.

## Release 4 Batch 1: claim hygiene on the next URLs

Purpose: align the titre guide, the banned-breed guide, the permit and checklist guides, four money/service pages, USA to Dubai, Dubai to UK, and residual workshop language on /dubai/ with the Release 3 register. No new routes. No URL changes. Shared regulatory.ts constants were left in place so out-of-scope pages are not rewritten by a constant change.

Branch: cursor/release4-batch1-claim-hygiene-ed98. Base: main after pull request 66 (e4183bdbe740ae8a01b3557897dd53de5fde4216). Content commit: e34e48223e99364090a8e624f16a0d7940599e87. Pull request: https://github.com/numini-co/PetClear/pull/67.

Verification on this branch: `npm run lint` in website/ exited 0 (existing warnings on unrelated pages only; Batch 1 files were clean). `npm run build` completed with prerender 0 failed. seo-growth is not imported by the website. Browser walkthrough was not run; verification was lint, typecheck, and prerender.

Affected URLs:

- https://dubai-pet-relocation.ae/guides/rabies-titer-test-dubai/
- https://dubai-pet-relocation.ae/guides/banned-dog-breeds-dubai/
- https://dubai-pet-relocation.ae/guides/moccae-import-permit/
- https://dubai-pet-relocation.ae/guides/import-checklist/
- https://dubai-pet-relocation.ae/service/pet-import-dubai/
- https://dubai-pet-relocation.ae/service/pet-export-dubai/
- https://dubai-pet-relocation.ae/service/pet-relocation-to-dubai/
- https://dubai-pet-relocation.ae/service/pet-relocation-from-dubai/
- https://dubai-pet-relocation.ae/routes/usa-to-dubai/
- https://dubai-pet-relocation.ae/routes/dubai-to-uk/
- https://dubai-pet-relocation.ae/dubai/

Sources checked on 2026-09-22:

- https://moccae.gov.ae/en/services/import-permit-pets
- https://www.gov.uk/bring-pet-to-great-britain
- https://www.gov.uk/bring-pet-to-great-britain/which-pet-travel-document
- https://www.gov.uk/bring-pet-to-great-britain/great-britain-pet-health-certificate
- https://www.gov.uk/bring-pet-to-great-britain/microchip
- https://www.gov.uk/bring-pet-to-great-britain/tapeworm-treatment-dogs
- Existing seo-growth/claims-register.csv from Release 3

Blocked or still unverified (not reintroduced):

- Blood sample within 90 days before travel.
- Non-compliance fine of AED 5,000.
- ISO 11784/11785 and microchip-before-vaccine as current MOCCAE rejection rules. ISO and chip-before-vaccine are stated only as Great Britain entry rules, with the GOV.UK source.
- Rottweiler, Doberman and Boxer as banned or muzzle-restricted. AED 10,000 to 700,000 fines, jail, euthanasia, wolf hybrids, Bandog, and "any cross" as a UAE ban.
- Full low-risk country list. The United States was not named on the list checked this date. The United Kingdom was.
- Municipal registration within 30 days and a fee near AED 10.
- A universal 5-day or 10-day MOCCAE health certificate. The 10-day window on Dubai to UK is the Great Britain pet health certificate only.
- Package or crate totals in AED. Etihad cabin weights, fares, and an AED 365 bill of entry.
- Flight times, hold temperatures, daily frequencies, 2 to 4 hour or 1 to 2 hour clearance, and a May to September embargo calendar.
- Model A or Model B as the document for entering Great Britain from the UAE.
- Low-risk age "12" stated as 12 weeks.
- A MOCCAE export certificate life of 30 days, or an invented export endorsement fee.
- Veterinary review was not supplied.

Out of scope: remaining communities and routes, robots.txt, GSC, new pages, veterinary certification.
