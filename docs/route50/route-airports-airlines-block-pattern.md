# ROUTE PAGE BLOCK PATTERN — Airports + Pet-Capable Airlines
**Author:** DPR Content Architect  
**Date:** 2026-09-05  
**Status:** PATTERN READY — wait for SEO ranked ~50-route list before page drafts  
**Scope:** `/routes/{origin}-to-{destination}/` (inbound to Dubai AND outbound from Dubai)  
**Binding rules:** architecture-brief.md (outbound ≠ reversed inbound); regulatory-source-of-truth.csv; trust-claims-strip-brief.md; no airline affiliation claims; WhatsApp +971504782999

---

## Purpose
Every route page must answer README question (8): **What are the route/airline options?** with a corridor-specific **Airports** section and a **Pet-capable airlines** section — without becoming thin doorway spam or inventing fees/affiliations.

This pattern defines:
1. What is **templated** (safe chrome / structure)
2. What must be **unique per country / corridor / direction**
3. **Regulatory / first-party sources** required before publish
4. Hand-off to SEO Lead (ranked list), Visual, Frontend

---

## Placement in page outline (recommended)
Insert after document sequence / timeline, before cost teaser and FAQ:

1. Hero + Quick Answer  
2. Who this corridor is for  
3. Documents & timeline (direction-specific)  
4. **Airports on this corridor** ← this pattern  
5. **Pet-capable airlines & flight modes** ← this pattern  
6. Cost drivers (verified figures only / confirm-on-portal)  
7. Failure modes  
8. Route cards (hub + reverse)  
9. FAQ 6–10 unique  
10. CTA: **Get Route Checked**

Word budget for both blocks combined: **~350–550 words** (not a second airline guide). Deep airline policy → link `/guides/emirates-pet-cargo/` and `/guides/etihad-pet-policy/` when live (W11).

---

## Block A — Airports on this corridor

### Templated chrome (reuse structure)
| Element | Template |
|---|---|
| H2 | `Airports for {Origin} ↔ {Dubai/UAE}` (direction-aware wording) |
| Intro (1–2 sentences) | Pets on this corridor move through **named** passenger/cargo airports; UAE arrivals for most itineraries clear via **DXB** and/or **DWC** cargo pathways (AUH when Etihad cabin exception applies — see SOT). |
| Table columns | Airport code \| City/role \| Pet role (export / transit / import clearance) \| Notes |
| Closing | Link to `/guides/dubai-pet-arrival-guide/` (when live) for DXB Cargo Village walkthrough; never invent release fees. |
| Disclaimer | Airport names/codes are routing facts; **no partnership** with airport operators. |

### Must be UNIQUE per corridor
| Field | Why unique | Example |
|---|---|---|
| Origin primary airport(s) | Export/departure reality | LHR/LGW/MAN vs JFK/EWR/LAX vs BOM/DEL |
| Origin secondary / alternate | When pets often leave from a different city than the owner’s home | PH secondary = MNL; AU = SYD/MEL |
| UAE side airports | Direction + airline choice | Inbound EK → DXB/DWC cargo; EY cabin → AUH; outbound destination gateway |
| Clearance vs passenger terminal | Avoid “meet at arrivals hall” myths | Manifest cargo → cargo village / handler, not baggage reclaim |
| Seasonal / embargo airport notes | Only if first-party | EK bird embargo May–Sep via DXB (SOT) — species-gated |
| Ground transfer after clearance | Local only if relevant | Link `/service/pet-transport-dubai/` for DXB→community |

### Never invent
- Fake “preferred airport partner” claims  
- Exact cargo cut-off times without airline/handler first-party  
- Release/inspection fee numerals until portal verification  
- Airport signage imagery presented as documentary fact  

---

## Block B — Pet-capable airlines & flight modes

### Templated chrome (reuse structure)
| Element | Template |
|---|---|
| H2 | `Pet-capable airlines on the {corridor} route` |
| Intro | Airlines set **how** the animal travels (cabin / excess baggage / manifest cargo). UAE entry for most dogs/cats is **manifest cargo** (IATA LAR); Etihad in-cabin into AUH is a documented exception (SOT). |
| Comparison table columns | Airline \| Flight mode(s) allowed on this corridor \| Typical use case \| First-party policy link \| Notes |
| Decision helper (3 bullets) | (1) Direct vs connection risk for live animals (2) Cabin eligibility (breed/weight/destination) (3) Cargo vs baggage when leaving Dubai |
| Cross-links | Always link Emirates + Etihad guides when live; never claim DPR is “official” for any airline |
| Closing CTA line | WhatsApp route + pet size/breed for mode feasibility — **Get Route Checked** |

### Must be UNIQUE per corridor
| Field | Why unique | Notes |
|---|---|---|
| Primary carriers with real pet products on that OD | Corridor-specific | e.g. UK→DXB: EK / BA / Virgin (verify each); IN→DXB: EK / AI / EY; KSA: Saudia + road alternative |
| Flight mode matrix for **this** OD | Same airline ≠ same rules every OD | EK: all itineraries **ending in Dubai** = cargo; from Dubai baggage rules differ by journey time (SOT) |
| Origin-country carrier policy | Export-side constraints | Lufthansa/AF/KL for EU; SQ for Singapore; PAL/Cebu for PH outbound, etc. |
| Connection / embargo / brachycephalic bans | High rejection risk | Summer embargos, snub-nosed bans — only with dated first-party |
| Cabin vs cargo for **inbound UAE** | Regulatory + airline | Manifest cargo default; EY cabin → AUH exception only |
| Fee treatment | Trust | Prefer **mode labels + “confirm current airline tariff”**; publish numerals only when in SOT with freshness class ≤30 days |

### Templated safe phrases (PROCESS-OK)
- “We check the live airline pet policy for your exact itinerary before booking.”  
- “IATA-compliant crate sizing is required for cargo modes.”  
- “Cabin availability is airline- and route-specific — not guaranteed.”  

### Banned phrases
- “Official Emirates / Etihad partner”  
- “MOCCAE-approved airline”  
- “We fly your pet on our aircraft”  
- Unverified “50+ airlines” / country counts  
- Stale fee tables without SOT row + Last verified date  

---

## Direction rules (anti-cannibalization)

| Direction | Airports focus | Airlines focus |
|---|---|---|
| **Inbound** `{country}-to-dubai` | Origin export airport → UAE clearance (DXB/DWC/AUH) | How pets **leave origin** + how they **must enter UAE** (cargo default) |
| **Outbound** `dubai-to-{country}` | DXB/DWC departure → **destination** gateway + arrival rules | How pets **leave UAE** + destination airline/import acceptance |

Outbound pages are **destination-side documents** — never a reverse of the inbound airline table with names swapped.

---

## Per-route data card (fill before drafting copy)
SEO ranked list will supply URLs; Content fills this card per URL before writing:

```
URL:
Direction: inbound | outbound
Origin country / Destination country:
Primary origin airport(s):
Alternate origin airport(s):
UAE airport(s) used on typical itineraries:
Destination gateway airport(s):  (outbound only)
Airlines to evaluate (max 4 primary):
Cabin possible on this OD? (Y/N/exception — cite):
Cargo required for UAE entry? (Y/default):
Embargo / brachy notes (cite or NONE):
SOT rows referenced:
First-party URLs checked + date:
Fee numerals allowed? (Y only if SOT + freshness OK):
Blocker / HOLD reason (if any):
```

---

## Regulatory & source needs (flag for Fact-Checker / SEO)

### Always required (every route)
| Source | Use | Freshness |
|---|---|---|
| MOCCAE pet import/export rules | UAE entry mode (manifest cargo), permit validity **30 days** | 90-day class |
| IATA Live Animals Regulations (CR1 framing) | Crate / acceptance language — no “IATA certified” membership claim | 180-day class |
| Emirates pet policy (first-party) | Cabin bans, Dubai-ending = cargo, baggage-from-Dubai rules, charges | **30-day** |
| Etihad pet policy (first-party) | Cabin USD 399 (verify), AUH arrival exception | **30-day** |

### Per-corridor required (unique)
| Corridor family | Origin/destination authority | Airline extras often needed |
|---|---|---|
| UK | DEFRA/APHA / GOV.UK pet travel | BA / Virgin Atlantic pet pages |
| USA | USDA APHIS (export to UAE); CDC (US entry outbound) | Major US carriers only if OD-relevant |
| EU (DE/FR/NL/…) | EU animal health certificate rules | LH / AF / KL |
| India | AQCS / DGFT | AI / IndiGo cargo policy if used |
| Philippines | BAI | PAL / Cebu Pacific |
| Australia / NZ | DAFF / MPI | Qantas / EK |
| KSA | MEWA / Naama | Saudia; **road vs air** unique |
| Singapore | **AVS — FIRST-PARTY GAP** (README/calendar flag) | SQ |
| Canada | CFIA/CBSA (re-verify; prior 404 flag) | — |
| South Africa | DALRRD | — |

### Known SOT gaps / blockers (do not publish around them)
1. **MOCCAE fee conflicts** (permit 200 vs 500; release bands) — confirm-on-portal only until closed  
2. **MOCCAE titer-exempt country list** — verify before “no titer” inbound messaging  
3. **Singapore AVS** rows missing from regulatory-source-of-truth.csv  
4. **CFIA** URL stability — re-fetch before CA outbound fees  
5. Airline **tariffs** — 30-day freshness; label currency; no Offer schema as firm DPR price  

### Imagery / trust (Visual)
- Process/object: crate hardware, generic cargo trolley, blank checklist — **no airline logos, no airport signs-as-fact, no fake staff**  
- Prefer linking airline guides over embedding branded marks  

---

## FAQ seeds (pick 1–2 per page — must be corridor-unique)
- Which airport will my pet clear on arrival in the UAE on this route?  
- Can my pet fly in cabin on {airline} into Dubai on this corridor?  
- Is Emirates SkyCargo required when the itinerary ends in Dubai?  
- What’s different if we fly Etihad into Abu Dhabi instead of Dubai?  
- Which origin airport is usually used for pets leaving {country}?  

Do **not** clone FAQ strings across routes; change airport codes / airline names / direction.

---

## Internal links (minimum)
**Out from every route block:** `/routes/` hub · reverse-direction twin · `/guides/emirates-pet-cargo/` or Etihad twin when live · money or to/from service twin · arrival guide when live.  
**In:** hub + ≥2 siblings per internal-link-map (≥3 inbound at launch).

---

## Definition of done (pattern)
- [x] Unique vs templated split documented  
- [x] Direction rules stated  
- [x] Per-route data card defined  
- [x] Regulatory source needs flagged (global + corridor + gaps)  
- [ ] SEO ranked ~50-route list received  
- [ ] Per-URL data cards filled  
- [ ] Page drafts started (Content)  

**Next:** Idle until SEO Lead / Orchestrator delivers ranked list; then batch data cards before full copy.
