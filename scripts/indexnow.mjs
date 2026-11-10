// Meldet Bing (und den anderen IndexNow-Suchmaschinen) neue, geänderte oder gelöschte Adressen,
// damit sie nicht wochenlang auf den nächsten Besuch des Bing-Bots warten müssen.
// ChatGPT und Copilot suchen über Bing.
//
// Aufruf:
//   npm run indexnow               alle Adressen aus der Live-Sitemap + alte Joomla-Adressen
//   npm run indexnow -- <url> ...  nur diese Adressen
//
// Voraussetzung: public/<KEY>.txt ist live, also https://placeofmotion.com/<KEY>.txt
// liefert genau den Schlüssel. Sonst bricht das Skript ab, ohne etwas zu senden.

const KEY = '1847a02879a177cc2f22f888c8163f95'
const SITE = 'https://placeofmotion.com'
const ENDPOINT = 'https://api.indexnow.org/indexnow'

// Alte Joomla-Seiten, die Bing am 10.11.2026 noch zeigte (Blindtext, alte Anmeldeformulare,
// alte Videobibliothek). Sie liefern heute 404; Bing soll sie neu abrufen und entfernen.
const ALTE_ADRESSEN = [
  'https://www.placeofmotion.com/component/osmembership/videobibliothek/pro-1-jahr/sign-up',
  'https://www.placeofmotion.com/component/osmembership/videobibliothek/basic-1-monat-gratis/sign-up',
  'https://www.placeofmotion.com/component/osmembership/videobibliothek/basic-1-monat-gratis/sign-up?Itemid=415',
  'https://www.placeofmotion.com/component/content/article/24-joomla?catid=19&Itemid=437',
  'https://www.placeofmotion.com/component/content/article/71-doner-spare-ribs-pastrami-shank?catid=79&Itemid=437',
  'https://www.placeofmotion.com/component/content/article/71-doner-spare-ribs-pastrami-shank?catid=79&amp;Itemid=437',
  'https://www.placeofmotion.com/component/content/article/72-jerky-shank-chicken-boudin?catid=79&Itemid=437',
  'https://www.placeofmotion.com/component/content/article/72-jerky-shank-chicken-boudin?catid=79&amp;Itemid=437',
  'https://www.placeofmotion.com/component/content/article/73-leberkas-tail-swine-pork?catid=79&Itemid=437',
  'https://www.placeofmotion.com/component/content/article/75-5-effective-email-unsubscribe-pages?catid=79&Itemid=437',
  'https://www.placeofmotion.com/videobibliothek/beispielvideos/item/1-video-0001',
]

async function schluesselLive() {
  const res = await fetch(`${SITE}/${KEY}.txt`)
  const text = (await res.text()).trim()
  return res.ok && text === KEY
}

async function urlsAusSitemap() {
  const xml = await (await fetch(`${SITE}/sitemap.xml`)).text()
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1])
}

async function melden(urls) {
  // IndexNow verlangt einen Host pro Meldung, daher nach Host trennen.
  const nachHost = new Map()
  for (const u of urls) {
    const host = new URL(u).host
    if (!nachHost.has(host)) nachHost.set(host, [])
    nachHost.get(host).push(u)
  }
  for (const [host, liste] of nachHost) {
    const res = await fetch(ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify({ host, key: KEY, keyLocation: `https://${host}/${KEY}.txt`, urlList: liste }),
    })
    // 200 = angenommen, 202 = angenommen, Schlüssel wird noch geprüft,
    // 403 = Schlüssel ungültig, 422 = Adresse passt nicht zum Host
    console.log(`${host}: ${liste.length} Adressen -> HTTP ${res.status} ${res.statusText}`)
  }
}

if (!(await schluesselLive())) {
  console.error(`Abbruch: ${SITE}/${KEY}.txt ist nicht live oder enthält nicht den Schlüssel.`)
  process.exit(1)
}

const args = process.argv.slice(2)
const urls = args.length ? args : [...(await urlsAusSitemap()), ...ALTE_ADRESSEN]
await melden(urls)
