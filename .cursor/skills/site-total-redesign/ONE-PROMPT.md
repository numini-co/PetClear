# ONE PROMPT

Copy everything inside the fence. Paste it as the first message in Cursor / Claude / Codex on any website repo after this skill folder is present.

```
Run the site-total-redesign skill on this entire website. Do not ask me to pick pages. Do the whole job.

Load, in order:
1. .cursor/skills/site-total-redesign/SKILL.md or .claude/skills/site-total-redesign/SKILL.md or ~/.claude/skills/site-total-redesign/SKILL.md
2. Its references: course-doctrine, mcp-orchestration, build-loop, icon-and-assets, page-audit, companion-skills
3. Every companion skill that exists on this machine: impeccable, design-taste-frontend, high-end-visual-design, redesign-existing-projects, frontend-design, visual-validation-standard, ui-ux-pro-max, web-design-guidelines, stitch-design-taste, brandkit, image, bfl-image-artist, pagespeed-insights / google-psi, gsc-mcp / google-search-console, bing-webmaster, optimize-seo

Then execute the full protocol:

ORIENT
- Map the repo for 10 minutes before editing. Framework, tokens, routes, nav, footer, 404, forms, image pipeline.
- List every user-facing route. That list is the work.

EVIDENCE (use every MCP that is actually connected; skip only if missing/unauth)
- pagespeed-insights: analyze_pages on all money URLs, mobile and desktop
- search-console: list_sites, query_search_analytics, inspect_url on top pages
- bing-webmaster: crawl stats, page stats, indexed health if the site is verified
- plugin-shadcn-shadcn if components.json exists
- plugin-github-github for repo context when relevant
- Browser: open local or live and walk every route like a real user
- GenerateImage / image / BFL for missing brand images, favicon, OG, and icons

DESIGN
- State one design read: page kind, audience, vibe, preserve vs overhaul, dials V/M/D.
- Write or update DESIGN.md so the visual world is pinned (one accent, type pair, radius rule, motion, icon family, bans).
- Existing brand tokens, URLs, nav labels, forms, legal copy, and real claims stay unless I explicitly said to replace them.

ICONS AND ASSETS (do this, do not skip)
- Replace generic favicons and placeholder icons.
- Ship favicon.ico + SVG favicon, apple-touch-icon 180, 192/512 if a manifest exists, og-image 1200x630.
- One in-UI icon family only. Phosphor Light or Remix Line. No Lucide mix. No emoji-as-icon.
- Real photography or generated brand images. No div fake screenshots. No leftover /placeholder.

EVERY PAGE
- For each route: screenshot current → diagnose → implement in this stack → run → screenshot again → fix the gap.
- Repeat until the page would survive a design-lead review. First try is never done.
- Shared chrome is one system.
- Full states: hover, active, focus, loading, empty, error, 404.
- Mobile collapse explicit. Heroes use min-h-[100dvh], never h-screen.

QUALITY FLOOR
- No Inter-by-default, no purple AI glow, no 3 equal feature cards, no em-dash decoration, no "Elevate / Seamless / Unleash / Next-Gen".
- Contrast 4.5:1 body, visible buttons, hero overlays, breathing section space, correct z-index.
- Reduced motion honored. Animate only transform/opacity.

VERIFY
- Desktop + 390px mobile on every changed route.
- Re-run PageSpeed on live or preview if a URL exists.
- Report a page table, files written, MCP data that actually returned, and MCPs that were blind.

Do not commit or push unless I ask. Start now.
```
