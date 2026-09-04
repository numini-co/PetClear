# PR #13 COPY QA REVIEW — W3 accelerate pages

**Reviewer:** DPR Content Architect  
**Repo / PR:** numini-co/PetClear #13 (`cursor/w3-accelerate-pages-bd62`)  
**Date:** 2026-09-04 (Asia/Makassar)  
**Scope:** Copy-bearing files only — no rewrite; Frontend amends into #13  
**Compared to:** `SEO-MASTER/briefs/w3-homepage.md`, `w3-pet-relocation-dubai.md`, `w3-pet-relocation-to-dubai.md`, `w3-pet-relocation-from-dubai.md`, `w3-services-hub.md`, `w3-pet-transport-dubai.md`

---

## Verdict: **CHANGES REQUESTED**

Hard gates (WhatsApp number, MOCCAE 30-day import permit, titer = sample within 90 days before travel, no invented government fee numerals, no trust-metric boasts, taxi-first transport framing, directional anti-cannibalization) are largely clean. Blocking gaps: incomplete transport market-band table, one exact cross-page FAQ clone, shared service CTA/date copy out of taxonomy, and a few brief-required SERP/CTA/validity strings.

---

## Per-page notes (short)

### `/` — `HomePage.tsx`
- **SERP:** Title / meta / H1 match brief. Category-entry positioning vs money page is explicit — good anti-cannibalization.
- **FAQ:** 8 unique to homepage *except* exact titer Q shared with money page (see punch #2). Brief’s cabin-vs-cargo / chooser / fee-table Qs not present; orientation set is mostly fine once clone is fixed.
- **Trust bar:** Process chips only (no 400+ / 4.9★ / 24/7). Not brief-verbatim — non-blocking.
- **Links / WA:** Heavy outbound to services, routes, guides, dubai, cities. WhatsApp via `getWhatsAppUrl` → `971504782999` ✓.
- **Regulatory:** 30-day permit + titer sample-within-90-days-before-travel stated correctly; no fee numerals.

### `/services/` — `ServicesPage.tsx`
- **SERP:** H1 + meta match brief intent. Title string leans H1 wording; brief preferred “Compare Service Tiers” in `<title>` (nice-to-have).
- **FAQ:** 8 unique tier/package Qs — no clone of money/directional/transport sets ✓.
- **Anti-cannibalization:** Explicit hand-off to money / to / from / transport URLs ✓.
- **Gap:** Service card grid is label+arrow only — brief requires unique 1–2 sentence blurbs so hub is not a thin doorway (punch #5).
- **No invented package AED** ✓.

### `/service/pet-relocation-dubai/` — money
- **SERP:** Title / meta / H1 / primary keyword match brief ✓.
- **Owns money head;** points inbound/outbound/transport out correctly ✓.
- **FAQ:** 8; titer Q exact-clone with homepage (punch #2). Permit = 30 days; no fee table ✓.
- **Links:** ≥3 meaningful outbound ✓.

### `/service/pet-relocation-to-dubai/` — inbound
- **SERP + inbound-only framing** match Ruling 2 ✓.
- **FAQ:** 8 unique arrival-side Qs ✓. Permit 30 days; titer sample-before-travel ✓. No fee numerals ✓.
- **Settling-in / routes / import deconflict** present ✓.

### `/service/pet-relocation-from-dubai/` — outbound
- **SERP + outbound-only / destination-first** match Ruling 3 ✓.
- **Export fees:** Contested ranges correctly withheld ✓.
- **Gap:** Export health certificate described as “short validity” only — brief/SOT wants **30 days from issue** stated (punch #4).
- **CTA taxonomy:** Page WhatsApp message is timeline-oriented, but shared `ServicePage` final button is still “Get Your Free Quote” (punch #3).

### `/service/pet-transport-dubai/` — taxi-first
- **SERP:** Taxi-first H1/meta/primaryKeyword ✓. Title close but not brief-exact (nice-to-have).
- **Market ranges:** Labelled “not a DPR quote”, dated **4 September 2026**, quotation CTA present ✓.  
  **Missing bands** vs brief gate: two-way **140–790**, OOH **75–105**, and DXB blogs **250–400 = Estimated only** (punch #1).
- **No 24/7 / 15-min / MOCCAE-approved badge** ✓.
- **FAQ:** 8 unique ground/taxi Qs ✓ (brief listed 9 — still inside 6–10).
- **Links:** ≥3 outbound ✓; `/cities/abu-dhabi/` soft-missing (nice-to-have).

### Shared template (in PR) — `website/src/components/ServicePage.tsx`
- Hardcoded final CTA **“Get Your Free Quote”** and hero **“Updated June 2026”** apply to all four service data pages — out of W3 CTA taxonomy and stale vs September 2026 (punch #3).

### WhatsApp (sitewide)
- `website/src/lib/seo.ts` on PR head: `WHATSAPP_PHONE = '971504782999'`, `PHONE_E164 = '+971504782999'` → `wa.me/971504782999` only ✓.

---

## Punch list (blocking — Frontend amend into #13)

1. **Transport market table incomplete** — `petTransportDubai.ts` pricing H2 + FAQ pricing answer.  
   - **Current table rows:** local short 75–150; by distance 75–350; DXB 450–525; AUH 750–840; Dubai–AUH 400–700.  
   - **Add (same “Typical market range — not a DPR quote” framing, date 4 September 2026):**  
     - Two-way: **from 140–790**  
     - OOH surcharge examples: **75–105** (examples only — not a flat add-on promise)  
   - **Add disclaimer line (table intro or footnote):** blogs quoting DXB **250–400** are **Estimated only**; verified market DXB band remains **450–525**.  
   - Mirror the new bands in the FAQ answer for “How is pet taxi pricing confirmed?”

2. **Cross-page FAQ clone** — exact same Q on homepage + money:  
   - **Current (both):** `When should the rabies titer blood sample be taken?`  
   - **Suggested:** keep money Q as-is (route/relocation framing). On **homepage** retitle + tweak answer, e.g.  
     - Q → `When does the homepage say a rabies titer sample must be taken?`  
     - A → keep SOT (sample within 90 days before travel; ≥0.5 IU/ml; not a 90-day wait) + point to titer guide / money page for depth.  
   - Do **not** paste identical Q strings across pages.

3. **Shared service CTA + stale “Updated” stamp** — `ServicePage.tsx` (affects money / to / from / transport).  
   - **Current final button:** `Get Your Free Quote`  
   - **Suggested (page-aware, brief taxonomy):**  
     - money + to-dubai → **Get a Relocation Quote**  
     - from-dubai → **Check Your Timeline**  
     - transport → **WhatsApp a Relocation Coordinator**  
   - Wire via optional field on `ServicePageData` (e.g. `ctaLabel`) or slug switch — do not leave one generic label on all four.  
   - **Current:** `updated="Updated June 2026"`  
   - **Suggested:** `Updated September 2026` (match Home/Services W3 stamp).

4. **From-Dubai export certificate validity** — `petRelocationFromDubai.ts` export steps / FAQ.  
   - **Current:** “short validity” / “still inside its validity” only.  
   - **Suggested:** state SOT explicitly: **MOCCAE export health certificate is valid for 30 days from issuance**; schedule close to departure. Still **do not** invent fee numerals (confirm on portal / quote).

5. **Services hub card blurbs** — `ServicesPage.tsx` “Open the service page for your move” grid.  
   - **Current:** `SERVICE_LINKS` label + arrow only.  
   - **Suggested:** unique **1–2 sentence** blurb per live `/service/*` card (tiers hub brief) so `/services/` is not a thin doorway. Example pattern: money = door-to-door coordination both directions; to-dubai = inbound arrival spine; from-dubai = destination-first departure; transport = pet taxi / ground only — then link.

6. **Homepage FAQ brief alignment (partial)** — `HomePage.tsx` `HOME_FAQS`. After fixing punch #2, replace **one** weaker orientation Q with brief-required chooser intent:  
   - **Add (or swap in):** Q ≈ `Where should I start if I’m not sure whether I need full relocation or just local transport?`  
   - **Suggested A:** international/docs → money or to/from twins; ground-only taxi → `/service/pet-transport-dubai/`; compare tiers → `/services/`.  
   - Keep total FAQ count in **6–10**; still no clones of child-page FAQ sets.

---

## Nice-to-haves (non-blocking)

1. **Transport `<title>`** → brief exact: `Pet Taxi Dubai | Local & Airport Pet Transport` (current taxi-first title is acceptable).
2. **Services `<title>`** → brief: `Pet Relocation Services Dubai | Compare Service Tiers`.
3. **Transport relatedLinks:** add `/cities/abu-dhabi/` (inter-emirate) and `/guides/iata-pet-crate-requirements/` when air-connecting crates are mentioned.
4. **Transport FAQ:** add careful “Are vehicles MOCCAE-approved?” answer (process standards; **no** approval badge) to hit brief’s 9th Q.
5. **Homepage trust bar:** optionally align chip strings closer to brief’s five approved process lines (current chips already safe).
6. **Homepage services intro:** trim toward brief “20–30 words + card 1-liners” if Frontend wants stricter IA word budget (anti-cannibalization already stated well).
7. **Money relatedLinks:** soft-add `/service/international-pet-relocation/` (brief Out list).
8. **To-Dubai:** light Dubai Municipality / post-arrival registration pointer (entity checklist) without duplicating the import-guide table.
9. **ServicePage hero eyebrow** “Pet Relocation Service” is awkward on the **pet taxi** page — consider slug-aware eyebrow (e.g. “Pet Taxi & Ground Transport”).

---

## Re-PASS — 2026-09-04 (evening)

Frontend amended all 6 blocking items into #13 (tip includes “Address Content Architect QA blockers…”). Verified on branch `cursor/w3-accelerate-pages-bd62` tip `f329402b`:

1. Transport: two-way 140–790, OOH 75–105, DXB blogs 250–400 Estimated only + verified 450–525; FAQ mirrors bands ✓  
2. Homepage titer Q retitled (`When does the homepage say…`); money keeps original — no exact clone ✓  
3. ServicePage page-aware CTAs + `Updated September 2026` ✓  
4. From-Dubai export cert **30 days from issuance** in steps + FAQ ✓  
5. Services hub `SERVICE_BLURBS` unique 1–2 sentence blurbs ✓  
6. Homepage chooser FAQ present ✓  

**Verdict: PASS** — Content Architect signs off for ready-for-review and standing merge (copy/FAQ/intent). Nice-to-haves from first review remain optional. PR #13 subsequently merged.
