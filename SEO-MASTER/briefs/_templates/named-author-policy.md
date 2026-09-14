# Named-author policy (guides)

**Applies to:** every `/guides/*` URL (informational how-to). Service and route pages keep Organization as the visible publisher unless a verified person is added later.

## What to show on the page

1. **Named author** — a real person recorded as verified in `trust-claims-register.csv`, **or** the organizational byline `Dubai Pet Relocation editorial` (no invented staff names).
2. **Credentials** — one short line of process credentials only, e.g. “UAE pet-relocation coordinators; facts checked against `regulatory-source-of-truth.csv`.” Do not invent licences, IPATA numbers, years in business, or “ex-MOCCAE / airline” titles.
3. **Last Updated** — visible date on the guide (Hero `updated` string and/or Article `dateModified`). Re-stamp when regulatory copy or fees change.

## Schema

- Default: `author` = Organization `Dubai Pet Relocation` (matches live guides such as `/guides/dubai-pet-arrival-guide/`).
- If a verified named person is approved: `author` = Person with `name` + `jobTitle` only from the trust register. Never publish a fictional byline to “look more E-E-A-T.”

## Barred

- Invented coordinators, vets, or “Dr.” names.
- Unverified ratings, pet-count claims, 15-minute reply SLAs, 24/7, or partnership logos.
- Implying MOCCAE, IATA, Emirates, or Etihad endorsement.

## Review

When evidence for a named person arrives, log it in `trust-claims-register.csv` first, then add the byline and update `change-log.csv`.
