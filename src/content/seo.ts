/** Titel und Beschreibung je Seite. Beim Bauen (scripts/prerender.mjs) landen sie
 *  im <head> der fertigen HTML-Datei, im Browser setzt Seitentitel.tsx sie bei
 *  jedem Seitenwechsel. Hauptadresse ist placeofmotion.com (www leitet dorthin um). */
import { alleFragen, kopf } from './uebungsplanSoftware'

export const SITE_URL = 'https://placeofmotion.com'

export const seiten = {
  '/': {
    title: 'Place of Motion — Digitale Trainingspläne für deine Praxis',
    description:
      'Erstelle digitale Trainingspläne für deine Patienten — per QR-Code aufs Handy, mit Video pro Übung. Kostenlos starten, optional verkaufen. Für Physiotherapeut:innen.',
  },
  '/uebungsplan-software': {
    title: 'Übungsplan-Software für Physiotherapie in Österreich | Place of Motion',
    description:
      'Heimübungspläne mit Video pro Übung erstellen und per QR-Code, Link oder Ausdruck weitergeben, ohne App für Patient:innen. Aus Kärnten, kostenlos starten.',
  },
  '/uebungsplaene-verkaufen': {
    title: 'Übungspläne als Selbstzahlerleistung verkaufen | Place of Motion',
    description:
      'Heimübungspläne als Selbstzahlerleistung anbieten: Preis selbst festlegen, bar, mit Karte oder per Überweisung kassieren, Beleg in deinem Namen.',
  },
  '/einrichtungen': {
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

/** Zusätzliche maschinenlesbare Angaben je Seite (schema.org), landen beim Bauen im <head>.
 *  /uebungsplan-software: Fragen und Antworten wortgleich zum sichtbaren Text, dazu ein Steckbrief
 *  der Software mit den beiden Tarifen. Keine Bewertungen, keine Kundenzahlen. */
export const strukturierteDaten: Partial<Record<Seitenpfad, object[]>> = {
  '/uebungsplan-software': [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'de-AT',
      mainEntity: alleFragen.map((f) => ({
        '@type': 'Question',
        name: f.frage,
        acceptedAnswer: { '@type': 'Answer', text: f.antwort },
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Place of Motion',
      url: `${SITE_URL}/uebungsplan-software`,
      description: kopf.lead,
      applicationCategory: 'BusinessApplication',
      applicationSubCategory: 'Übungsplan-Software für Physiotherapie',
      operatingSystem: 'Web',
      inLanguage: 'de-AT',
      publisher: { '@type': 'Organization', name: 'Place of Motion', url: `${SITE_URL}/` },
      offers: [
        { '@type': 'Offer', name: 'BASIC', price: '0', priceCurrency: 'EUR' },
        {
          '@type': 'Offer',
          name: 'PRO',
          price: '49',
          priceCurrency: 'EUR',
          priceSpecification: {
            '@type': 'UnitPriceSpecification',
            price: '49',
            priceCurrency: 'EUR',
            billingDuration: 'P1M',
          },
        },
      ],
    },
  ],
}
