# COMMERCIAL — Shared cost and quotation memory

These files are the Dubai Pet Relocation team's shared commercial operational memory. They are living stubs: headers only until verified costs, quotes, or competitor prices are entered.

**Do not invent pricing numbers.** Leave a cell empty rather than guessing. Every cost row must carry a `verification_status` (or equivalent) so agents know whether the figure can be used in a quote.

## Files

| File | Purpose |
| --- | --- |
| `pricing-master.csv` | Canonical cost and selling-price register. |
| `route-costs.csv` | Costs broken down by origin, destination, and pet type. |
| `supplier-costs.csv` | Supplier service rates. |
| `competitor-pricing.csv` | Public competitor prices with source URL. |
| `quotation-log.csv` | Enquiries quoted and their outcomes. |

## `verification_status` values

Use exactly one of these values on cost rows:

| Value | Meaning |
| --- | --- |
| `Verified fixed cost` | Confirmed, non-negotiable rate (for example a published fee). Safe to treat as fixed until `review_date`. |
| `Verified market price` | Confirmed from current market evidence, not a locked supplier contract. |
| `Current supplier quote` | Written quote from a named supplier; still check `date_verified` / `review_date`. |
| `Estimated range` | Directional only. Must not be presented as a firm price. |
| `Requires external quotation` | No usable figure yet. Do not quote a number until a supplier or official source responds. |

When a row is `Estimated range` or `Requires external quotation`, say so in any customer-facing quote notes.
