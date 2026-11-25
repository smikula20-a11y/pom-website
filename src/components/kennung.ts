import { useLocation } from 'react-router-dom'

/**
 * Kennung an den Links zu Calendly und zu den Kassen (Website-Audit Befund 11, Stefan 25.11.2026).
 * Calendly speichert sie mit der Buchung, ThriveCart (Pro+, Bericht „Source“) mit der Bestellung.
 * So sieht Stefan, über welchen Knopf gebucht oder gekauft wurde.
 *
 * Bewusst KEIN Zählprogramm auf der Website: TKG 2021 § 165 Abs. 3 verlangt für alles, was nicht
 * unbedingt nötig ist, eine aktive Einwilligung, und die EDPB-Leitlinie 2/2023 (Rn 33) zählt auch
 * Skripte ohne Cookies dazu. Die Kennung ist für alle gleich und enthält nichts über die Person:
 * utm_source=website, utm_medium=<Seite>, utm_content=<Stelle>. Datenschutzerklärung Punkt 7, 9, 14.
 *
 * Nur Calendly und die Kassen (online.placeofmotion.com) bekommen sie, alle anderen Links
 * (App, Anker, Unterseiten) bleiben unverändert.
 */
const MIT_KENNUNG = ['calendly.com', 'online.placeofmotion.com']

const SEITEN: Record<string, string> = {
  '/': 'startseite',
  '/einrichtungen': 'einrichtungen',
  '/uebungsplan-software': 'uebungsplan-software',
  '/uebungsplaene-verkaufen': 'uebungsplaene-verkaufen',
  '/impressum': 'impressum',
  '/datenschutz': 'datenschutz',
  '/agb': 'agb',
  '/auftragsverarbeitung': 'auftragsverarbeitung',
}

/** Hängt die Kennung an, wenn der Link zu Calendly oder zu einer Kasse führt. */
export function mitKennung(href: string, seite: string, stelle: string): string {
  if (!href.startsWith('https://')) return href
  const url = new URL(href)
  if (!MIT_KENNUNG.includes(url.hostname)) return href
  url.searchParams.set('utm_source', 'website')
  url.searchParams.set('utm_medium', seite)
  url.searchParams.set('utm_content', stelle)
  return url.toString()
}

/** Kurzname der aktuellen Seite für die Kennung (beim Vorab-Rendern und im Browser gleich). */
export function useSeite(): string {
  const { pathname } = useLocation()
  const pfad = pathname.length > 1 ? pathname.replace(/\/+$/, '').replace(/\.html$/, '') || '/' : '/'
  return SEITEN[pfad] ?? 'fehlerseite'
}

/** Für Komponenten: (Link, Stelle) -> Link mit Kennung der aktuellen Seite. */
export function useKennung(): (href: string, stelle: string) => string {
  const seite = useSeite()
  return (href, stelle) => mitKennung(href, seite, stelle)
}

/** „Founding Member“ -> „founding-member“ (für Stellen aus Namen). */
export function kurz(name: string): string {
  return name.toLowerCase().replace(/\s+/g, '-')
}
