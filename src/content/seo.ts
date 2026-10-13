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
