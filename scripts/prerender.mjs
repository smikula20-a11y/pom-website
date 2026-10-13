// Baut nach `vite build` für jede Seite eine fertige HTML-Datei, damit Suchmaschinen
// und KI-Dienste den Inhalt lesen können, ohne JavaScript auszuführen.
// Im Browser übernimmt React danach die fertige Seite (hydrateRoot in main.tsx).
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const wurzel = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const dist = path.join(wurzel, 'dist')
const serverBundle = path.join(wurzel, 'dist-ssr', 'entry-server.js')

const vorlage = fs.readFileSync(path.join(dist, 'index.html'), 'utf8')
const { render, seiten, SITE_URL } = await import(pathToFileURL(serverBundle).href)

const attr = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')

for (const [pfad, meta] of Object.entries(seiten)) {
  const inhalt = render(pfad)
  if (!inhalt.trim()) throw new Error(`Leere Seite beim Vorab-Rendern: ${pfad}`)

  const html = vorlage
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${attr(meta.title)}</title>`)
    .replace(/<meta\s+name="description"[\s\S]*?\/>/, `<meta name="description" content="${attr(meta.description)}" />`)
    .replace(/<meta\s+property="og:title"[\s\S]*?\/>/, `<meta property="og:title" content="${attr(meta.title)}" />`)
    .replace(/<meta\s+property="og:description"[\s\S]*?\/>/, `<meta property="og:description" content="${attr(meta.description)}" />`)
    .replace('</head>', `  <link rel="canonical" href="${SITE_URL}${pfad}" />\n  </head>`)
    .replace('<div id="root"></div>', `<div id="root">${inhalt}</div>`)

  // /impressum -> impressum.html; Vercel liefert sie dank "cleanUrls" unter /impressum aus.
  const ziel = path.join(dist, pfad === '/' ? 'index.html' : `${pfad.slice(1)}.html`)
  fs.writeFileSync(ziel, html)
  console.log(`vorab gerendert: ${pfad}`)
}

fs.rmSync(path.join(wurzel, 'dist-ssr'), { recursive: true, force: true })
