// Build-time prerender: turn the CSR shell into real per-route HTML so crawlers
// and AI engines receive full content + per-page <title>/meta/JSON-LD.
//
// Runs after `vite build` (client -> dist) and `vite build --ssr` (server -> dist-server).
// Routes come from the generated sitemap.xml so they always match the canonical set.
import fs from 'node:fs'
import path from 'node:path'
import { pathToFileURL } from 'node:url'

const CLIENT_DIR = path.resolve(process.env.PRERENDER_CLIENT || 'dist')
const SERVER_DIR = path.resolve(process.env.PRERENDER_SERVER || 'dist-server')

const { render } = await import(pathToFileURL(path.join(SERVER_DIR, 'entry-server.js')).href)

// Derive routes from the built sitemap (strip the origin to get paths).
const sitemap = fs.readFileSync(path.join(CLIENT_DIR, 'sitemap.xml'), 'utf8')
const routes = [...sitemap.matchAll(/<loc>\s*([^<]+?)\s*<\/loc>/g)]
  .map((m) => m[1].replace(/^https?:\/\/[^/]+/, ''))
  .filter((p) => p.startsWith('/'))
if (!routes.includes('/')) routes.unshift('/')

// Strip the shell's default head tags that each page overrides (keep charset,
// viewport, theme-color, preconnect, favicon, and sitewide Org/WebSite JSON-LD).
let template = fs.readFileSync(path.join(CLIENT_DIR, 'index.html'), 'utf8')
template = template
  .replace(/<title>[\s\S]*?<\/title>/i, '')
  .replace(/<meta\s+name="description"[^>]*>/gi, '')
  .replace(/<meta\s+name="keywords"[^>]*>/gi, '')
  .replace(/<meta\s+name="robots"[^>]*>/gi, '')
  .replace(/<meta\s+property="og:[^"]*"[^>]*>/gi, '')
  .replace(/<meta\s+name="twitter:[^"]*"[^>]*>/gi, '')
  .replace(/<link\s+rel="canonical"[^>]*>/gi, '')

const ROOT_RE = /<div id="root">\s*<\/div>/

let ok = 0
let fail = 0
for (const route of routes) {
  try {
    let appHtml = await render(route)

    // Lift hoistable head tags (title, meta, canonical link) out of the body
    // and into <head> where crawlers expect them. JSON-LD stays in body (valid anywhere).
    const head = []
    appHtml = appHtml.replace(/<title>[\s\S]*?<\/title>/i, (m) => {
      head.push(m)
      return ''
    })
    appHtml = appHtml.replace(/<meta\b[^>]*>/gi, (m) => {
      head.push(m)
      return ''
    })
    appHtml = appHtml.replace(/<link\b[^>]*\brel="canonical"[^>]*>/gi, (m) => {
      head.push(m)
      return ''
    })

    if (!ROOT_RE.test(template)) throw new Error('root placeholder not found in template')
    const html = template
      .replace(ROOT_RE, `<div id="root">${appHtml}</div>`)
      .replace('</head>', `${head.join('')}</head>`)

    const outDir = route === '/' ? CLIENT_DIR : path.join(CLIENT_DIR, route)
    fs.mkdirSync(outDir, { recursive: true })
    fs.writeFileSync(path.join(outDir, 'index.html'), html)
    ok++
  } catch (e) {
    fail++
    console.error('PRERENDER FAIL', route, '->', e.message)
  }
}

// Render a styled 404 page to /404.html for Vercel to serve on unknown routes.
try {
  let appHtml = await render('/404')

  const head = []
  appHtml = appHtml.replace(/<title>[\s\S]*?<\/title>/i, (m) => {
    head.push(m)
    return ''
  })
  appHtml = appHtml.replace(/<meta\b[^>]*>/gi, (m) => {
    head.push(m)
    return ''
  })
  appHtml = appHtml.replace(/<link\b[^>]*\brel="canonical"[^>]*>/gi, (m) => {
    head.push(m)
    return ''
  })

  if (!ROOT_RE.test(template)) throw new Error('root placeholder not found in template')
  const html = template
    .replace(ROOT_RE, `<div id="root">${appHtml}</div>`)
    .replace('</head>', `${head.join('')}</head>`)

  fs.writeFileSync(path.join(CLIENT_DIR, '404.html'), html)
  ok++
} catch (e) {
  fail++
  console.error('PRERENDER FAIL', '/404', '->', e.message)
}

console.log(`prerendered ${ok} routes ok, ${fail} failed (of ${routes.length})`)
if (fail > 0) process.exit(1)
