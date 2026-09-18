---
name: site-total-redesign
description: Run a full-site design overhaul from one prompt. Audits every page, upgrades visual design and icons, uses Pagespeed, Search Console, Bing, shadcn, GitHub, and image tools, then iterates with the screenshot build loop. Use when the user says total redesign, run the site prompt, optimize all pages, update the icon, copy this skill to a website, or ship a better design with all MCPs.
---

# Site Total Redesign

Portable design-engineer agent. Copy this folder onto any website, paste [ONE-PROMPT.md](ONE-PROMPT.md), and run.

Source doctrine: the Core Stack course (taste/workflow, MCP + CLI + skills.md, prototyping vs building, screenshot loop, icons, ship). Companion craft lives in local design skills. Do not invent a new aesthetic system when those files already decide it.

## Load order

Read these before editing code:

1. This file
2. [references/course-doctrine.md](references/course-doctrine.md)
3. [references/mcp-orchestration.md](references/mcp-orchestration.md)
4. [references/build-loop.md](references/build-loop.md)
5. [references/icon-and-assets.md](references/icon-and-assets.md)
6. [references/page-audit.md](references/page-audit.md)
7. [references/companion-skills.md](references/companion-skills.md) then the named companion `SKILL.md` files that exist on this machine

If a companion skill is missing, continue with doctrine + this file. Do not stop.

## Hard rules

- The tool does not matter. The process does.
- Workflow is the edge, not a prettier first prompt.
- Build in the real repo, not a web builder. Lovable / v0 / Figma Make are reference only.
- First output is never final. If it felt easy, push harder.
- Change one blast-radius at a time, preview, click, then next page.
- Preserve product truth: URLs, nav labels, forms, legal copy, analytics names, real claims.
- Do not commit or push unless the user asked.
- Never ship generic AI UI: Inter-by-default, purple glow, three equal cards, Lucide soup, fake screenshots, em-dash decoration, "Elevate / Seamless / Unleash".

## Mode

State this one-liner before code:

`Reading this as: <page kind> for <audience>, <vibe>, <preserve|overhaul>, dials V/M/D = n/n/n.`

Ask at most one question, and only if preserve vs overhaul is truly unclear.

## Execution

Copy this checklist and keep it updated:

```
Site Total Redesign
- [ ] 0 Load skill + doctrine + companions
- [ ] 1 Orient repo (10 minutes of map before a line)
- [ ] 2 Evidence via every available MCP
- [ ] 3 Design read + DESIGN.md / PRODUCT.md
- [ ] 4 Identity + icons (favicon, apple, OG, app icon)
- [ ] 5 Every route, screenshot loop to done
- [ ] 6 Verify desktop + mobile + PSI + a11y locks
- [ ] 7 Report what changed and what MCP was blind
```

### 0. Load

Read the files in Load order. If `PRODUCT.md` or `DESIGN.md` exist in the project, they win over taste defaults.

### 1. Orient

Map before writing:

- framework and styling (Next, Astro, WordPress, vanilla, Tailwind, CSS modules)
- app vs pages router, or template hierarchy
- design tokens / existing brand
- every route and shared chrome (nav, footer, cookie, 404)
- `package.json` before adding any dependency

Start with a contained win if the repo is unfamiliar: token, spacing, empty state, or favicon. Then go page by page.

### 2. Evidence

Use every MCP that is actually connected. Skip quietly if a namespace is `needsAuth` or missing. Never fake scores.

Required attempts when a public URL exists:

- `pagespeed-insights.analyze_pages` on the money pages (mobile + desktop)
- `search-console` list sites / analytics / inspect money URLs
- `bing-webmaster` crawl + page stats if the site is verified
- `plugin-shadcn-shadcn` only if `components.json` exists
- `plugin-github-github` for current branch context when the folder is a GitHub repo
- Browser pass: open local or live, walk every route

Details: [references/mcp-orchestration.md](references/mcp-orchestration.md)

### 3. Pin the visual world

Write or update `DESIGN.md` in the project root (or `design-system/MASTER.md` if that already exists). Include atmosphere, one accent, type pair, radius rule, motion rule, icon family, and bans.

If this is a redesign-preserve job, extract tokens from the live site first. Do not replace a real brand with a new fashion palette.

### 4. Icons and identity

Do this before polishing random components. A placeholder favicon makes the whole site feel unfinished.

Ship a matched set:

- `favicon.ico` + SVG favicon
- `apple-touch-icon.png` 180
- `icon-192.png` / `icon-512.png` for PWA if the project has a manifest
- `og-image.png` 1200x630
- in-UI icon family: one set, light stroke (Phosphor Light / Remix Line). Do not mix families.

Generate missing brand marks with the image skill / BFL / Cursor `GenerateImage` when the user asked for a total redesign or icon update. Wire real files into markup. No leftover `/placeholder` or generic globe favicon.

Details: [references/icon-and-assets.md](references/icon-and-assets.md)

### 5. Every page

For each route in [references/page-audit.md](references/page-audit.md):

1. Screenshot or render current
2. Diagnose (hierarchy, type, color, layout, motion, states, copy, a11y)
3. Implement in the existing stack
4. Run locally
5. Screenshot again
6. Paste the gap back into the work and fix
7. Repeat until the page would survive a design-lead review

Loop rules: [references/build-loop.md](references/build-loop.md)

Shared chrome is one system. Do not restyle the header differently on each page.

### 6. Verify

Before calling the site done:

- Five visual locks: contrast, button visibility, hero overlay, spacing, z-index
- Desktop and a 390-wide mobile pass on every changed route
- `min-h-[100dvh]`, never `h-screen` for heroes
- Reduced motion respected
- Empty / loading / error / 404 exist
- PSI re-run on live or preview if a URL exists
- shadcn `get_audit_checklist` if shadcn components were added
- No em-dash in visible copy. Regular hyphen only.

### 7. Report

Return:

- Design read + dials
- Page table: route, what changed, still weak
- Icon/asset files written
- MCP results that actually came back, and which MCPs were unavailable
- What you did not touch on purpose

## Model routing

Treat models like people on a team:

| Job | Who |
|---|---|
| Architecture, first design read, hard redesign | strongest reasoning model (Opus-class) |
| Tight CSS/component iteration | fast pair (Sonnet-class) |
| Pure mechanical edits | cheapest capable coder |
| Huge repo or long docs | long-context model |

Keep the skill files loaded instead of pasting the whole course into chat. That is how you avoid burning the context window.

## Out of scope unless asked

- Rewriting backend business logic
- Buying domains, Apple Developer, or paid store listings
- Force-push, production deploys, or secret commits
- Inventing metrics, testimonials, or legal claims
