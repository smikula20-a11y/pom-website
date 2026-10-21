/** Titel und Beschreibung je Seite. Beim Bauen (scripts/prerender.mjs) landen sie
 *  im <head> der fertigen HTML-Datei, im Browser setzt Seitentitel.tsx sie bei
 *  jedem Seitenwechsel. Hauptadresse ist placeofmotion.com (www leitet dorthin um). */
export const SITE_URL = 'https://placeofmotion.com'

export const seiten = {
  '/': {
    title: 'Place of Motion — Digitale Trainingspläne für deine Praxis',
    description:
      'Erstelle digitale Trainingspläne für deine Patienten — per QR-Code aufs Handy, mit Video pro Übung. Kostenlos starten, optional verkaufen. Für Physiotherapeut:innen.',
  },
  '/uebungsplaene-verkaufen': {
    title: 'Übungspläne als Selbstzahlerleistung verkaufen | Place of Motion',
    description:
      'Heimübungspläne als Selbstzahlerleistung anbieten: Preis selbst festlegen, bar, mit Karte oder per Überweisung kassieren, Beleg in deinem Namen.',
  },
  '/kliniken': {
    title: 'Place of Motion für Krankenhäuser, Reha- und Therapiezentren',
    description:
      'Heimübungspläne mit Video für Ihr ganzes Team: eigene Zugänge, Logo des Hauses, Ausgabe per QR-Code, Patient:innen ohne Konto und ohne App.',
  },
  '/impressum': {
    title: 'Impressum | Place of Motion',
    description: 'Impressum von Place of Motion: Anbieter, Kontakt und Firmendaten.',
  },
  '/datenschutz': {
    title: 'Datenschutz | Place of Motion',
    description: 'Datenschutzerklärung von Place of Motion.',
  },
  '/agb': {
    title: 'AGB | Place of Motion',
    description: 'Allgemeine Geschäftsbedingungen von Place of Motion.',
  },
} as const

export type Seitenpfad = keyof typeof seiten

/** Für unbekannte Adressen (404.html, nicht im Index). */
export const nichtGefunden = {
  title: 'Seite nicht gefunden | Place of Motion',
  description: 'Diese Seite gibt es auf placeofmotion.com nicht.',
} as const

/** Firmen-Steckbrief für Suchmaschinen (schema.org), nur auf der Startseite. */
export const organisation = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Place of Motion',
  url: `${SITE_URL}/`,
  logo: `${SITE_URL}/logos/pom-olive-icon.svg`,
  email: 'office@placeofmotion.com',
} as const
