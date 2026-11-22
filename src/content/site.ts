/* ============================================================
 * Inhalts-Layer - eine Wahrheit fuer die Wurzel-Website.
 * Copy woertlich aus Notion „Messaging-Brief Website-Wurzel".
 * Preistabelle: PRO €49 ENTSCHIEDEN 11.07.2026 (Stefan; Notion
 * STAMM §3.2 = Master). Das „39 €" in der Honorarnote ist ein
 * pricing-neutrales Beispiel, kein Website-Preis.
 * ============================================================ */

/** Externe Ziele (Appendix E). */
export const links = {
  calendly: 'https://calendly.com/placeofmotion/30min',
  appRegister: 'https://app.placeofmotion.com?register=true',
  appLogin: 'https://app.placeofmotion.com',
  demo: 'https://demo.placeofmotion.com',
  press: {
    orf: 'https://kaernten.orf.at/stories/3138200/',
    meinbezirk:
      'https://www.meinbezirk.at/klagenfurt/c-wirtschaft/physiotherapie-wird-digital_a3683025',
    kleineZeitung:
      'https://www.kleinezeitung.at/artikel/5711233/Place-of-Motion_Klagenfurter-setzt-auf-interaktive-Bewegung',
  },
} as const

/** Primaere / sekundaere CTA-Beschriftungen (CTA-Hierarchie §3). */
/** Die zwei Knöpfe der Website (Befund 2, Stefan 22.11.2026): überall gleiche Reihenfolge,
 *  „Erstgespräch buchen“ bleibt der grüne Hauptknopf. Unter jedem Knopf steht eine Zeile,
 *  was nach dem Klick passiert. Wortlaut der ersten Zeile laut Calendly am 22.11.2026
 *  („20 Minuten per Videocall, ganz unverbindlich“); BASIC braucht bei der Anmeldung nur
 *  E-Mail, Passwort und ein Häkchen. */
export const cta = {
  primary: { label: 'Erstgespräch buchen', href: links.calendly, zeile: '20 Minuten per Videocall, unverbindlich' },
  secondary: { label: 'Kostenlos BASIC starten', href: links.appRegister, zeile: 'Ohne Kreditkarte' },
} as const

export const nav = {
  /** Nur die internen Sektions-Anker als Textlinks. */
  links: [
    { label: 'Funktionen', href: '#funktionen' },
    { label: "So funktioniert's", href: '#so-funktionierts' },
    { label: 'Preise', href: '#preise' },
  ],
  // Login = Sekundär-Aktion (Outline), Booking = Primär-CTA (Fill).
  login: { label: 'Anmelden', href: links.appLogin },
  cta: { label: 'Erstgespräch buchen', href: links.calendly },
} as const

/** Kopfbereich neu (Stefan 18.11.2026, Website-Audit Befund 1): Die Überschrift ist der
 *  Zeit-Satz aus Stefans Brief an die Praxen statt des Einkommens-Satzes. Grund: Laut
 *  Notion (SALES 17 und 18) kauften die Founding Members wegen Zeit, Bedienbarkeit und
 *  eigener Videos; von 93 vergebenen Plänen wurde bis 18.11.2026 einer verkauft.
 *  Der Einkommens-Satz steht jetzt als Überschrift im Abschnitt „Und dein Umsatz?“. */
export const hero = {
  eyebrow: 'Übungsplan-Software für Physio- und Ergotherapie',
  headline: 'Heimübungen kosten dich pro Patient zehn Minuten, die keiner zahlt.',
  subhead:
    'Mit Place of Motion stellst du den Plan mit Video aus der Bibliothek zusammen und gibst ihn per QR-Code mit. Ohne App, ohne Konto. Kostenlos, oder du verrechnest ihn als Selbstzahlerleistung.',
  /** Zeile unter den Knöpfen: was es kostet, auf einen Blick. */
  preiszeile: 'BASIC kostenlos · PRO 49 € im Monat',
  /** Vertrauenskarte unter den Knöpfen (Stefan 11.11.2026, Variante C). Kein Siegel-Look:
   *  nur belegte Fakten (Vertrag zur Auftragsverarbeitung live seit 11.11.2026). */
  vertrauen: {
    titel: 'DSGVO-konform',
    punkte: ['Vertrag zur Auftragsverarbeitung', 'Daten in Frankfurt', 'Made in Austria'],
    href: '/auftragsverarbeitung',
  },
  annotation: ['Dein Logo.', 'Dein Name.'],
} as const

/** Ablauf-Film auf der Startseite (AblaufFilm, ersetzt FlowLoop am 11.11.2026).
 *  Die Schritte stehen als Text unter dem Film. Statt „Live-Demo ansehen“ führt
 *  ein Knopf zur kostenlosen Anmeldung (Stefan 11.11.2026). */
export const demo = {
  eyebrow: "So läuft's · live",
  filmLabel:
    'Kurzer Film ohne Ton: Im Editor kommt eine Übung in den Plan, der Plan wird per QR-Code geteilt, am Handy läuft das Übungsvideo, danach entsteht die Honorarnote.',
  schritte: [
    { text: 'Plan erstellen', pro: false },
    { text: 'Per QR-Code teilen', pro: false },
    { text: 'Mit Video üben', pro: false },
    { text: 'Verkaufen', pro: true },
  ],
} as const

export const problem = {
  eyebrow: 'Das Problem',
  heading: 'Deine Arbeit endet an der Praxistür - deine Wirkung sollte es nicht.',
  // Jede Karte fuehrt mit einer kurzen, fett gesetzten Schmerz-Ueberschrift
  // (hohe Lesbarkeit statt ausgegraut) + Beleg-Satz (Wortlaut aus dem Brief).
  bullets: [
    { title: 'Motivation hält nicht', body: 'Patienten gehen motiviert raus, nach 3 Tagen wieder passiv.' },
    { title: 'Zettel verschwinden', body: 'Übungszettel werden vergessen, verlegt oder falsch umgesetzt.' },
    { title: 'Wissen bleibt zurück', body: 'Nach Therapieende fällt der Patient weg - dein Wissen bleibt in der Praxis.' },
  ],
} as const

/** „Was POM kann" - Gratis-Kern zuerst, PRO getaggt. KEINE Video-Anzahl (§8). */
export const features = {
  eyebrow: 'Was POM kann',
  heading: 'Alles, um Patienten auch zwischen den Terminen zu begleiten.',
  items: [
    { title: 'Plan per QR teilen', body: 'Ein Scan in der Praxis - kein Login, keine App-Installation.', pro: false },
    // Befund 12 (22.11.2026): ohne Wirkungsanklang („damit zuhause richtig trainiert wird“).
    { title: 'Professionelle Übungsvideos', body: 'Zu jeder Übung ein Video zum Nachschauen zuhause.', pro: false },
    { title: 'Ausdruck pro Patient', body: 'Jeder Plan auch auf Papier zum Mitgeben.', pro: false },
    { title: 'Zeit sparen mit KI-Entwurf', body: 'Ein Entwurf in Sekunden - du bleibst der fachliche Kopf.', pro: true },
    { title: 'Zusatzeinkommen', body: 'Verkaufe Pläne als Selbstzahler-Leistung - der Umsatz gehört dir.', pro: true },
    { title: 'Dein Branding', body: 'Dein Logo, dein Name - der Plan sieht aus wie aus deiner Praxis.', pro: true },
  ],
  /** Datenschutz-Zeile unter den Kacheln (10.11.2026): KI-Suchdienste fanden auf der Startseite
   *  nichts zum Datenschutz. Seit 11.11.2026 mit „DSGVO-konform“: Vertrag zur Auftragsverarbeitung für Praxen
   *  live (/auftragsverarbeitung), Zustimmung in der App, Datenschutzerklärung für Website und App. */
  datenschutz: {
    text: 'Datenschutz: DSGVO-konform, mit Vertrag zur Auftragsverarbeitung. Die Patientendaten liegen verschlüsselt in einem Rechenzentrum in Frankfurt am Main, mit täglicher Sicherung.',
    link: { label: 'Zum Vertrag zur Auftragsverarbeitung', href: '/auftragsverarbeitung' },
  },
} as const

/** So funktioniert's - Olive-Band. Copy aus dem Design-Handoff (deckt §6). */
export const howItWorks = {
  eyebrow: "So funktioniert's",
  heading: 'Vom Plan zur Honorarnote - in drei Schritten.',
  steps: [
    {
      n: 1,
      title: 'Plan erstellen',
      body: 'Übungen aus der Bibliothek zusammenstellen - mit Dosierung, Hinweisen und Video pro Übung.',
    },
    {
      n: 2,
      title: 'QR-Code teilen',
      body: 'Der Patient scannt den Code in der Praxis - kein Login, keine App-Installation.',
    },
    {
      n: 3,
      title: 'Patient trainiert',
      body: 'Zuhause, am Handy, mit Video pro Übung - dein Plan arbeitet weiter, auch ohne Termin.',
    },
  ],
} as const

/** Honorarnote - realisiert die Zusatzeinkommen-Korrektur (§8): 100 % Umsatz
 *  beim Therapeuten, POM erstellt nur die Honorarnote. KEINE „Provision". */
export const honorar = {
  eyebrow: 'Und dein Umsatz?',
  // Überschrift = früherer Satz aus dem Kopfbereich (Stefan 18.11.2026).
  heading: 'Dein Einkommen hört auf, wenn du aufhörst zu behandeln.',
  body: 'Vergib einen Plan kostenlos oder verkauft - bar, Karte oder Überweisung. Die Honorarnote erstellt sich automatisch in deinem Namen. Der Umsatz gehört dir, der Plan wird zur Einnahme.',
  // Führt zur Seite mit dem ganzen Ablauf statt zum Schlussabschnitt.
  cta: { label: 'So verdienst du mit', href: '/uebungsplaene-verkaufen' },
  // Beispiel-Beleg (pricing-neutral, KEIN Abo-Preis).
  mock: {
    number: 'HN-2026-0142',
    status: 'Verkauft',
    line: { label: 'Trainingsplan „Rücken aktiv"', amount: '39 €' },
    meta: { who: 'Max Mustermann · 07.07.', method: 'Karte' },
    total: '39,00 €',
  },
} as const

export const audience = {
  eyebrow: 'Für wen',
  heading: 'Ehrlich: für wen POM gebaut ist - und für wen nicht.',
  fitHeading: 'Geeignet, wenn du …',
  fit: [
    'Patienten zwischen und nach den Einheiten begleiten willst.',
    'digitale Einnahmen ohne Mehraufwand willst.',
    'unter deinem eigenen Namen auftreten willst.',
  ],
  notHeading: 'Nicht geeignet, wenn du …',
  not: [
    'schnelle Marketing-Tricks suchst.',
    'Therapie durch Technik ersetzen willst.',
    'Qualität für Nebensache hältst.',
  ],
} as const

/** Kundenstimmen direkt unter dem Kopfbereich (Stefan 18.11.2026, Website-Audit Befund 7).
 *  Beide Texte sind WORTGETREU, nichts umformuliert.
 *  - Leon Fian: seine Google-Bewertung vom 18.11.2026, ganz (nur das Smiley am Ende fehlt).
 *    Freigabe per WhatsApp 18.11.2026, 13:17 („Klar.“) für Bewertung und Namen; der
 *    Praxisname ist nicht erfragt und steht deshalb nicht da. Die fünf Sterne gehören zu
 *    dieser einen Bewertung, es gibt bewusst keine Gesamtnote.
 *  - Sarah Arbeiter: zwei aufeinanderfolgende Sätze aus ihrer Rückmeldung
 *    (Freigabe 23.06.2026: voller Name + Verlinkung OK). Der ganze Text lautete:
 *    „Stefan hat mir vor kurzem sein Tool vorgestellt. Ich bin schon lange auf der Suche
 *    nach einem geeigneten Programm. Stefan hat wirklich alles gut durchdacht und die
 *    leichte und rasche Bedienbarkeit haben mich sofort überzeugt. Die Pläne sind wirklich
 *    schnell erstellt und sie kommen bei meinen PatientInnen gut an. Seit meinem Kauf wurde
 *    das Repertoire an Übungen erweitert und er ist offen für neue Vorschläge. Für den Kauf
 *    war für mich noch entscheidend, dass ich ein regionales Unternehmen unterstütze. Ich
 *    freue mich auf eine weitere Zusammenarbeit!“
 *  Kein „Founding Member“ bei den Namen (Stefan 18.11.2026). */
export interface Stimme {
  text: string
  name: string
  kuerzel: string
  rolle: string
  /** Sterne der einzelnen Bewertung, nur bei Google-Bewertungen. */
  sterne?: number
  quelle?: { label: string; href: string }
}
export const stimmen: { eyebrow: string; liste: Stimme[] } = {
  eyebrow: 'Aus der Praxis',
  liste: [
    {
      text: 'Benutze Place of Motion jetzt schon seit ein paar Monaten. Bin sehr zufrieden mit der einfachen Bedienung und der unkomplizierten Erstellung der Trainingshandouts für meine Patienten. Spare mir damit auch viel Zeit. Kann ich nur empfehlen.',
      name: 'Leon Fian',
      kuerzel: 'LF',
      rolle: 'Physiotherapeut',
      sterne: 5,
      quelle: { label: 'Bewertung bei Google', href: 'https://g.page/r/CeMRxCe_4dpfECE' },
    },
    {
      text: 'Stefan hat wirklich alles gut durchdacht und die leichte und rasche Bedienbarkeit haben mich sofort überzeugt. Die Pläne sind wirklich schnell erstellt und sie kommen bei meinen PatientInnen gut an.',
      name: 'Sarah Arbeiter',
      kuerzel: 'SA',
      rolle: 'Physiotherapeutin',
    },
  ],
}

/** Gruender-Absatz (exakt, §Appendix D). Presse nur hier, target=_blank. */
export const founder = {
  eyebrow: 'Warum es das gibt',
  heading: 'Aus der Praxis, für die Praxis.',
  paragraph:
    'Ich baue an digitaler Physiotherapie, seit ich 2018 meine Praxis in Klagenfurt eröffnet habe. Die Idee wurde 2019 in MeinBezirk und der Kleinen Zeitung porträtiert und an der FH Kärnten (Gründergarage) vorgestellt. Als einer der ersten ÖGK-Vertragstherapeuten Kärntens (ORF, 2022) kenne ich beide Welten - Kassenabrechnung und Selbstzahler. Place of Motion ist die konsequente Weiterentwicklung: aus der Praxis, für die Praxis.',
  signature: 'Stefan Mikula, Gründer',
  pressLabel: 'Berichtet in',
  press: [
    { label: 'ORF Kärnten', href: links.press.orf },
    { label: 'MeinBezirk', href: links.press.meinbezirk },
    { label: 'Kleine Zeitung', href: links.press.kleineZeitung },
    { label: 'FH Kärnten · Gründergarage', href: '' },
  ],
} as const

export const finalCta = {
  eyebrow: 'Bereit?',
  heading: 'Aus deinem Wissen wird ein Produkt.',
  // Transparenz-Zeile STATT Preistabelle (§8).
  transparency:
    'Kostenlos mit BASIC starten - PRO schaltet KI, Verkauf und deinen Markenauftritt frei.',
  /** Zeile unter den Knöpfen (Stefan 22.11.2026: WhatsApp läuft auf der POM-Nummer).
   *  Ersetzt den Satz „Kein Verkaufsdruck. Wir schauen gemeinsam, ob POM zu deiner Praxis passt.“ */
  reden: {
    frage: 'Lieber gleich reden?',
    anrufen: 'Anrufen',
    whatsapp: 'auf WhatsApp schreiben',
    nummer: '0681 20157016',
    telHref: 'tel:+4368120157016',
    whatsappHref: 'https://wa.me/4368120157016',
  },
} as const

/* ---------------- Häufige Fragen auf der Startseite (11.11.2026) ----------------
 * Sichtbar als aufklappbare Karten und wortgleich als FAQPage für Suchmaschinen (seo.ts).
 * Aussagen geprüft gegen AGB Punkt 5, Datenschutzerklärung Punkt 18 und die Preistabelle. */
export const startFragen: { frage: string; antwort: string; link?: { label: string; href: string } }[] = [
  {
    frage: 'Was ist Place of Motion?',
    antwort:
      'Place of Motion ist eine Software aus Kärnten. Physiotherapeut:innen erstellen damit Heimübungspläne mit Übungsvideos und geben sie per QR-Code, Link oder Ausdruck weiter. Patient:innen brauchen weder Konto noch App.',
  },
  {
    frage: 'Für wen ist Place of Motion gedacht?',
    antwort:
      'Für Physio- und Ergotherapeut:innen in Einzel- und Gruppenpraxen. Für Krankenhäuser, Reha- und Therapiezentren gibt es eigene Zugänge fürs Team.',
    link: { label: 'Für Einrichtungen', href: '/einrichtungen' },
  },
  {
    frage: 'Wie fange ich an?',
    antwort:
      'Du registrierst dich kostenlos mit BASIC, ohne Kreditkarte. Place of Motion läuft im Browser, am PC und am Handy, du musst nichts installieren. Wenn du es dir lieber zeigen lässt, buchst du ein Erstgespräch.',
  },
  {
    frage: 'Was ist der Unterschied zwischen BASIC und PRO?',
    antwort:
      'Mit BASIC nutzt du die Übungsbibliothek mit Videos und gibst Pläne per QR-Code, Link und Ausdruck weiter. PRO bringt dazu den KI-Entwurf, Vorlagen, dein Logo auf Plan und Ausdruck, eigene Videos und den Verkauf mit Beleg. PRO kostet 49 € im Monat oder 490 € im Jahr.',
  },
  {
    frage: 'Was macht der KI-Entwurf?',
    antwort:
      'Du beschreibst in ein paar Sätzen, worum es geht. Die KI schlägt daraus einen Plan mit Übungen aus der Bibliothek vor. Du prüfst den Entwurf, änderst ihn und entscheidest, was deine Patient:innen bekommen.',
  },
  {
    frage: 'Kann ich jederzeit kündigen?',
    antwort:
      'Ja. Monatliche Tarife kündigst du jederzeit zum Ende des laufenden Kalendermonats. Der Jahrestarif läuft zwölf Monate und endet dann, wenn du kündigst. BASIC kannst du jederzeit beenden.',
  },
]

/* ---------------- Preise (Zahlen aus Notion, NICHT aus dem Dump) ----------------
 * BASIC gratis · PRO €49/Monat (Toggle jährlich = 2 Monate gratis) · FM €15/Monat lifetime.
 * §8: keine „Provision", keine Video-Anzahl. */
export interface PriceFeature {
  t: string
  ok: boolean
  highlight?: boolean
}
export interface PricePlan {
  name: string
  badge?: string
  note?: string
  price?: string
  interval?: string
  toggle?: {
    monthly: { price: string; interval: string; note?: string }
    yearly: { price: string; interval: string; note?: string; save?: string }
  }
  features: PriceFeature[]
  cta: { label: string; href: string; variant: 'primary' | 'secondary'; external?: boolean }
  featured?: boolean
  /** Verknappung: Gesamt-Plätze (durchgestrichen) + noch freie. */
  scarcity?: { total: number; left: number }
}

export const pricing: {
  eyebrow: string
  heading: string
  sub: string
  /** Zeilen unter den Preisen, je Eintrag eine Zeile. */
  footnote: string[]
  toggleLabels: { monthly: string; yearly: string }
  plans: PricePlan[]
} = {
  eyebrow: 'Preise',
  heading: 'Starte kostenlos. Wachse, wenn du bereit bist.',
  sub: 'Kein Risiko, keine Kreditkarte für den Start.',
  // Befund 4 (Stefan 22.11.2026): Kündigung wie in AGB Punkt 5 (vorher „Jederzeit kündbar“,
  // das galt nur für die Monatstarife), Endpreise wie AGB Punkt 4 (Kleinunternehmer).
  footnote: [
    'Monatlich jederzeit zum Monatsende kündbar, das Jahresabo zum Ende der 12 Monate.',
    'Endpreise, keine Umsatzsteuer. Keine versteckten Kosten.',
  ],
  toggleLabels: { monthly: 'Monatlich', yearly: 'Jährlich' },
  plans: [
    {
      name: 'Basic',
      price: '€0',
      interval: '/ Monat',
      note: 'Zum Reinschnuppern',
      // Grenzen von BASIC offen (Stefan 22.11.2026), laut App.tsx PERMISSIONS:
      // maxLessons 5, canSave false (Entwürfe und Vorlagen), watermark + advertFooter am Ausdruck.
      features: [
        { t: 'App und Übungsbibliothek mit Videos', ok: true },
        { t: 'Pläne per QR-Code und als Ausdruck', ok: true },
        { t: 'Bis zu 5 Übungen pro Plan', ok: true },
        { t: 'Entwürfe und Vorlagen speichern', ok: false },
        { t: 'Ausdruck ohne Wasserzeichen und Werbezeile', ok: false },
        { t: 'KI-Planassistent', ok: false },
        { t: 'Verkauf & automatische Honorarnote', ok: false },
        { t: 'Dein Logo & Branding', ok: false },
      ],
      cta: { label: 'Kostenlos starten', href: links.appRegister, variant: 'secondary', external: true },
    },
    {
      name: 'Pro',
      badge: '★ Empfohlen',
      featured: true,
      toggle: {
        monthly: { price: '€49', interval: '/ Monat', note: 'monatlich abgerechnet · jederzeit zum Monatsende kündbar' },
        // Jahres-Default (Stefan 22.11.2026): große Zahl ist der Preis pro Monat (490 / 12 = 40,83,
        // aufgerundet), die Jahressumme steht darunter. Kein zweites „Empfohlen" - das bleibt dem Plan.
        yearly: { price: '€41', interval: '/ Monat', note: 'jährlich abgerechnet: €490 im Voraus · 2 Monate gratis', save: '-17 %' },
      },
      features: [
        // „Unbegrenzt viele Übungen pro Plan“ statt „Unbegrenzte Pläne“: auch BASIC vergibt beliebig
        // viele Pläne. Unterlagen hochladen nur PRO (App.tsx, Befund 10).
        { t: 'Unbegrenzt viele Übungen pro Plan', ok: true },
        { t: 'KI-Planassistent', ok: true, highlight: true },
        { t: 'Entwürfe und Vorlagen speichern', ok: true },
        { t: 'Eigene Unterlagen als PDF mitgeben, z. B. Merkblätter', ok: true },
        { t: 'Dein Logo in App und Ausdruck', ok: true },
        { t: 'Ausdruck ohne Wasserzeichen', ok: true },
        { t: 'Verkauf als Selbstzahler-Leistung - Umsatz gehört dir', ok: true },
      ],
      cta: { label: 'Erstgespräch buchen', href: links.calendly, variant: 'primary', external: true },
    },
    {
      name: 'Founding Member',
      badge: '⚡ Founding Member',
      // Stand 11.11.2026: 7 FM vergeben (Stefan) -> 3 frei.
      scarcity: { total: 10, left: 3 },
      price: '€15',
      interval: '/ Monat',
      note: 'Lifetime-Preis · bleibt für immer',
      features: [
        { t: 'Alles aus PRO', ok: true },
        { t: 'Dauerhaft nur €15 / Monat', ok: true, highlight: true },
        { t: 'Preis gilt für immer', ok: true },
        { t: 'Direkter Draht zur Entwicklung', ok: true },
      ],
      cta: { label: 'Erstgespräch buchen', href: links.calendly, variant: 'secondary', external: true },
    },
  ],
}

export const footer = {
  company: 'Place of Motion',
  tagline: 'Digitale Trainingspläne für deine Praxis. Erstellen, teilen, verkaufen.',
  address: {
    name: 'Place of Motion',
    street: 'Feistritz 34',
    city: '9560 Feldkirchen',
    owner: 'Stefan Mikula',
    phone: '+43 681 20157016',
    phoneHref: 'tel:+4368120157016',
    email: 'office@placeofmotion.com',
  },
  /** Unterseiten im Fußbereich (Spalte Produkt), interne Links. */
  pages: [
    { label: 'Übungsplan-Software', href: '/uebungsplan-software' },
    { label: 'Übungspläne verkaufen', href: '/uebungsplaene-verkaufen' },
    { label: 'Für Einrichtungen', href: '/einrichtungen' },
  ],
  /** Hinweis für alle, die die frühere Praxis suchen (10.11.2026): „stefan mikula physiotherapie“
   *  führt laut Search Console oft hierher. */
  praxis: {
    text: 'Die Physiotherapie-Praxis von Stefan Mikula heißt jetzt Therapie Welzenegg:',
    label: 'therapiewelzenegg.at',
    href: 'https://therapiewelzenegg.at',
  },
  legal: [
    { label: 'Impressum', href: '/impressum' },
    { label: 'Datenschutz', href: '/datenschutz' },
    { label: 'AGB', href: '/agb' },
    { label: 'Auftragsverarbeitung', href: '/auftragsverarbeitung' },
  ],
} as const

/** Rechtliche Stammdaten fuers Impressum (AT: ECG §5, MedienG §25, GewO).
 *  Leere Strings = vor Veroeffentlichung von Stefan zu ergaenzen; die Seite
 *  zeigt dann einen sichtbaren Platzhalter. Nicht-leere Werte sind sinnvolle
 *  Defaults fuer ein Kaerntner IT-Einzelunternehmen und sollten bestaetigt werden. */
export const impressum = {
  legalForm: 'Einzelunternehmen',
  uid: '', // keine UID - Kleinunternehmer (siehe kleinunternehmer)
  kleinunternehmer: true, // § 6 Abs. 1 Z 27 UStG: keine USt, keine UID
  gisa: '39738837', // GISA-Zahl (BH Feldkirchen, GISA-Auszug 10.07.2026)
  gewerbe: 'Dienstleistungen in der automatischen Datenverarbeitung und Informationstechnik',
  gewerbebehoerde: 'Bezirkshauptmannschaft Feldkirchen',
  chamber: 'Wirtschaftskammer Kärnten',
  berufsrecht: 'Gewerbeordnung (GewO), abrufbar über ris.bka.gv.at',
  berufsrechtUrl: 'https://www.ris.bka.gv.at',
  /** Stand je Rechtstext, getrennt gepflegt: nur ändern, wenn sich der jeweilige Text ändert. */
  datenschutzStand: 'November 2026',
  agbStand: 'November 2026',
  // Unterlagen (PDF): Fassung 1.1. Beim Livegang Monat prüfen (AGB und AVV gleich).
  avvFassung: 'Fassung 1.1, Stand November 2026',
} as const
