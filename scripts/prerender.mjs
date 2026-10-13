// Baut nach `vite build` für jede Seite eine fertige HTML-Datei, damit Suchmaschinen
// und KI-Dienste den Inhalt lesen können, ohne JavaScript auszuführen.
// Im Browser übernimmt React danach die fertige Seite (hydrateRoot in main.tsx).
// Dazu: 404.html für unbekannte Adressen und sitemap.xml aus derselben Seitenliste.
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const wurzel = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const dist = path.join(wurzel, 'dist')
const serverBundle = path.join(wurzel, 'dist-ssr', 'entry-server.js')

const vorlage = fs.readFileSync(path.join(dist, 'index.html'), 'utf8')
const { render, seiten, nichtGefunden, organisation, SITE_URL } = await import(
  pathToFileURL(serverBundle).href
)

const attr = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')

/** Setzt Titel, Beschreibung und Zusatz-Tags in die Vorlage und den gerenderten Inhalt in #root. */
function seite(url, meta, kopf) {
  const inhalt = render(url)
  if (!inhalt.trim()) throw new Error(`Leere Seite beim Vorab-Rendern: ${url}`)
  return vorlage
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${attr(meta.title)}</title>`)
    .replace(/<meta\s+name="description"[\s\S]*?\/>/, `<meta name="description" content="${attr(meta.description)}" />`)
    .replace(/<meta\s+property="og:title"[\s\S]*?\/>/, `<meta property="og:title" content="${attr(meta.title)}" />`)
    .replace(/<meta\s+property="og:description"[\s\S]*?\/>/, `<meta property="og:description" content="${attr(meta.description)}" />`)
    .replace('</head>', `${kopf.map((z) => `  ${z}\n`).join('')}  </head>`)
    .replace('<div id="root"></div>', `<div id="root">${inhalt}</div>`)
}

for (const [pfad, meta] of Object.entries(seiten)) {
  const kopf = [`<link rel="canonical" href="${SITE_URL}${pfad}" />`]
  if (pfad === '/') {
    // JSON in <script>: "<" escapen, damit kein Text das Tag vorzeitig schließt.
    const json = JSON.stringify(organisation).replace(/</g, '\\u003c')
    kopf.push(`<script type="application/ld+json">${json}</script>`)
  }
  // /impressum -> impressum.html; Vercel liefert sie dank "cleanUrls" unter /impressum aus.
  const ziel = path.join(dist, pfad === '/' ? 'index.html' : `${pfad.slice(1)}.html`)
  fs.writeFileSync(ziel, seite(pfad, meta, kopf))
  console.log(`vorab gerendert: ${pfad}`)
}

// Vercel zeigt 404.html bei jeder Adresse, die es nicht gibt (mit Status 404).
fs.writeFileSync(
  path.join(dist, '404.html'),
  seite('/404', nichtGefunden, ['<meta name="robots" content="noindex" />']),
)
console.log('vorab gerendert: 404.html')

const sitemap = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...Object.keys(seiten).map((pfad) => `  <url><loc>${SITE_URL}${pfad}</loc></url>`),
  '</urlset>',
  '',
].join('\n')
fs.writeFileSync(path.join(dist, 'sitemap.xml'), sitemap)
console.log('geschrieben: sitemap.xml')

fs.rmSync(path.join(wurzel, 'dist-ssr'), { recursive: true, force: true })
