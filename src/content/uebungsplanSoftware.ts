/** Texte der Seite /uebungsplan-software (Entwurf Fassung 2, von Stefan freigegeben 10.11.2026).
 *  Eine Quelle für die sichtbare Seite (pages/UebungsplanSoftware.tsx) und für die maschinenlesbaren
 *  Fragen und Antworten (FAQPage in seo.ts): So bleiben beide wortgleich.
 *  Bewusst nicht: Namen anderer Software, Anzahl an Videos, Aussagen zur Wirkung bei Patient:innen,
 *  Founding-Member-Preis, Bewertungen. Zum Datenschutz nur Ort, Verschlüsselung und Sicherung. */

export interface FrageAntwort {
  frage: string
  antwort: string
  /** Interner Link unter der Antwort (nur sichtbar, nicht Teil der maschinenlesbaren Antwort). */
  link?: { label: string; href: string }
  /** true = steht sinngleich schon an anderer Stelle der Seite, daher nur einmal in FAQPage. */
  ohneSchema?: boolean
}

export const kopf = {
  eyebrow: 'Software für Heimübungspläne',
  h1: 'Übungsplan-Software für Physiotherapie in Österreich',
  lead: 'Place of Motion ist eine Übungsplan-Software aus Kärnten. Du stellst Heimübungspläne aus einer Bibliothek mit Übungsvideos zusammen und gibst sie per QR-Code, Link oder Ausdruck an deine Patient:innen weiter. Sie öffnen den Plan am Handy im Browser, ohne App und ohne Konto.',
  hinweis: 'Entwickelt von Stefan Mikula, Physiotherapeut mit eigener Praxis in Klagenfurt.',
} as const

export const wasIst: FrageAntwort = {
  frage: 'Was ist eine Übungsplan-Software?',
  antwort:
    'Eine Übungsplan-Software ersetzt den Übungszettel. Du wählst Übungen aus einer Bibliothek, legst Dosierung und Hinweise fest und gibst den Plan weiter. Deine Patient:innen sehen am Handy zu jeder Übung ein Video, auf dem Ausdruck ein Bild mit Dosierung.',
}

export const schritte = [
  {
    titel: 'Übungen wählen',
    text: 'Du wählst die Übungen aus der Bibliothek und legst zu jeder Übung Dosierung und Hinweise fest.',
  },
  {
    titel: 'Plan weitergeben',
    text: 'QR-Code scannen lassen, Link schicken oder ausdrucken. Der Ausdruck zeigt alle Übungen mit Bild und Dosierung, der QR-Code steht auf der ersten Seite.',
  },
  {
    titel: 'Plan am Handy',
    text: 'Deine Patient:innen öffnen den Plan im Browser und sehen zu jeder Übung ein Video.',
  },
] as const

/** Tabelle „Worauf solltest du bei der Auswahl achten?“ */
export const auswahl: FrageAntwort[] = [
  {
    frage: 'Brauchen Patient:innen eine App oder ein Konto?',
    antwort: 'Nein. Sie scannen den QR-Code oder öffnen den Link, der Plan öffnet sich im Browser.',
    ohneSchema: true,
  },
  {
    frage: 'Gibt es zu jeder Übung ein Video?',
    antwort: 'Ja, eigens für Place of Motion gedreht. Mit PRO lädst du zusätzlich eigene Übungsvideos hoch.',
  },
  {
    frage: 'Geht es auch auf Papier?',
    antwort: 'Ja. Jeder Plan lässt sich ausdrucken, mit Bildern, Dosierung und QR-Code.',
  },
  {
    frage: 'Wo liegen die Patientendaten?',
    antwort: 'Verschlüsselt in einem Rechenzentrum in Frankfurt am Main, mit täglicher Sicherung.',
  },
  {
    frage: 'Erstellt die Software Belege nach österreichischem Steuerrecht?',
    antwort:
      'Ja, beim Verkauf mit PRO. Barbeleg oder Honorarnote tragen den passenden Steuerhinweis nach dem österreichischen Umsatzsteuergesetz.',
  },
  {
    frage: 'Brauche ich eine Installation oder Schnittstelle?',
    antwort: 'Nein. Place of Motion läuft im Browser, am PC und am Handy.',
  },
  {
    frage: 'Kann ich kostenlos starten?',
    antwort: 'Ja, mit BASIC, ohne Kreditkarte.',
  },
]

export const anders = [
  {
    titel: 'Pläne verkaufen',
    text: 'Mit PRO gibst du einen Plan auch gegen Bezahlung weiter. Die App erstellt den Beleg in deinem Namen, das Geld geht direkt an dich.',
    link: { label: 'Übungspläne verkaufen', href: '/uebungsplaene-verkaufen' },
  },
  {
    titel: 'Aus der Praxis',
    text: 'Stefan Mikula baut an Place of Motion, seit er 2018 seine Physiotherapie-Praxis in Klagenfurt eröffnet hat.',
  },
  {
    titel: 'Für Praxen und Einrichtungen',
    text: 'Einzelpraxen starten selbst. Krankenhäuser, Reha- und Therapiezentren bekommen eigene Zugänge fürs Team, eine gemeinsame Patientenliste und eine Einschulung vor Ort.',
    link: { label: 'Für Einrichtungen', href: '/einrichtungen' },
  },
  {
    titel: 'Selbst gedrehte Videos',
    text: 'Die Übungsvideos der Bibliothek sind eigens für Place of Motion gedreht.',
  },
] as const

export const praxissoftware: FrageAntwort = {
  frage: 'Ersetzt Place of Motion meine Praxissoftware?',
  antwort:
    'Nein, es ergänzt sie. Termine, Kassenabrechnung und Dokumentation bleiben in deinem bisherigen Programm, die Heimübungspläne machst du mit Place of Motion. Beides läuft nebeneinander, ohne Schnittstelle und ohne Umstellung.',
}

export const kosten: FrageAntwort = {
  frage: 'Was kostet Place of Motion?',
  antwort:
    'BASIC ist kostenlos. PRO kostet 49 € im Monat oder 490 € im Jahr. Für Einrichtungen richtet sich der Preis nach der Größe des Hauses.',
  link: { label: 'Alle Preise', href: '/#preise' },
}

export const tarife = [
  { name: 'BASIC', preis: '0 €', zusatz: '', text: 'Bibliothek, Pläne per QR-Code, Link und Ausdruck.', hervorgehoben: false },
  {
    name: 'PRO',
    preis: '49 €',
    zusatz: 'im Monat oder 490 € im Jahr',
    text: 'Dazu KI-Entwurf, Vorlagen, dein Logo auf Plan und Ausdruck, eigene Videos und der Verkauf mit Beleg.',
    hervorgehoben: true,
  },
  {
    name: 'Einrichtungen',
    preis: 'Nach Größe',
    zusatz: '',
    text: 'Der Preis richtet sich nach der Größe des Hauses. Wir rechnen ihn im Erstgespräch gemeinsam durch.',
    hervorgehoben: false,
  },
] as const

export const fragen: FrageAntwort[] = [
  {
    frage: 'Brauchen meine Patient:innen eine App?',
    antwort:
      'Nein. Sie öffnen den Plan über den QR-Code oder den Link im Browser am Handy, ohne Konto und ohne Passwort.',
  },
  {
    frage: 'Was ist mit Patient:innen ohne Smartphone?',
    antwort: 'Sie bekommen den Ausdruck mit allen Übungen, Bildern und Dosierung.',
  },
  {
    frage: 'Kann ich eigene Übungsvideos verwenden?',
    antwort:
      'Ja, mit PRO. Du lädst deine Videos hoch und verwendest sie in deinen Plänen wie die Videos aus der Bibliothek.',
  },
  {
    frage: 'Wo liegen die Daten?',
    antwort: 'Verschlüsselt in einem Rechenzentrum in Frankfurt am Main, mit täglicher Sicherung.',
    ohneSchema: true,
  },
  {
    frage: 'Kann ich Übungspläne als Selbstzahlerleistung verkaufen?',
    antwort:
      'Ja, mit PRO. Du legst den Preis fest, kassierst bar, mit Karte oder per Überweisung, und die App erstellt den Beleg in deinem Namen.',
    link: { label: 'Übungspläne verkaufen', href: '/uebungsplaene-verkaufen' },
  },
  {
    frage: 'Gibt es Place of Motion auch für Reha-Zentren und Krankenhäuser?',
    antwort:
      'Ja. Für Häuser mit mehreren Therapeut:innen gibt es eigene Zugänge, eine gemeinsame Patientenliste, Vorlagen des Hauses und eine Einschulung vor Ort.',
    link: { label: 'Für Einrichtungen', href: '/einrichtungen' },
  },
  {
    frage: 'Wer steckt hinter Place of Motion?',
    antwort: 'Stefan Mikula, Physiotherapeut mit eigener Praxis in Klagenfurt.',
  },
]

/** Alle Fragen der Seite in Lesereihenfolge, jede nur einmal (für FAQPage). */
export const alleFragen: FrageAntwort[] = [wasIst, ...auswahl, praxissoftware, kosten, ...fragen].filter(
  (f) => !f.ohneSchema,
)
