# Last-verified / freshness policy

**Do not invent a second stamp component.** Use the existing React component:

`website/src/components/LastVerified.tsx`

It reads `LAST_VERIFIED_LABEL` from `website/src/lib/regulatory.ts` (`LAST_VERIFIED_DATE`) unless the page passes a `date` override. Optional `note` explains what to reconfirm (usually the MOCCAE portal).

## Where to render

- Every page that shows a regulatory figure, government fee, airline charge, or validity window.
- Place the stamp next to the figure (table, list, or paragraph) — not only in the footer.
- `OfficialSources` already includes a default `<LastVerified />` for the citations block. Page-level stamps are still required beside contested or time-sensitive numbers.

## Freshness classes (`regulatory-source-of-truth.csv` Next Review Date)

| Class | Window | Typical claims |
|---|---|---|
| **30-day** | Re-verify ~monthly | Airline fees/rules; MOCCAE import/export/release **fees**; portal processing times |
| **90-day** | Re-verify ~quarterly | Process rules (permit validity 90 days from issuance; RNATT sample window; parasite window) |
| **180-day** | Re-verify ~twice yearly | Stable law (Federal Law 22/2016 breed list; IATA CR1 container principles) |

Stale pages (past the class window) go on the re-verification queue in the weekly cycle. Do not silently keep old numerals.

## Regulatory locks (do not “correct” these without a new SOT row)

- MOCCAE **import** permit validity = **90 days from issuance** (never 30). ADRO 30-day language is secondary and must not override.
- RNATT = blood sample **within 90 days before travel**, result **≥0.5 IU/ml** — a sample-timing window, not a post-test wait.
- MOCCAE export health-certificate **AED 100 / 1 working day / 30-day validity** = secondary-source only (SOT 2026-09-09; portal WAF). Publish as confirm-on-portal / verify-on-portal. Shared copy helpers: `EXPORT_CERT_FEE_VERIFY` and `EXPORT_CERT_TIMING_VERIFY` in `regulatory.ts`.

## Override `date` when

The page was verified on a different day than the shared stamp (example: a new guide shipped 14 September 2026 while the sitewide stamp is 6 September 2026). Keep the `note` honest about what was *not* confirmed first-party.
