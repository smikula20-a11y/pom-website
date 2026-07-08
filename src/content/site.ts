/* ============================================================
 * Inhalts-Layer — eine Wahrheit fuer die Wurzel-Website.
 * Copy woertlich aus Notion „Messaging-Brief Website-Wurzel".
 * KEINE Abo-Preise auf der Seite (Pricing nicht final, keine
 * Preistabelle — §8). Das „39 €" in der Honorarnote ist ein
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
export const cta = {
  primary: { label: 'Erstgespräch buchen', href: links.calendly },
  secondary: { label: 'Kostenlos BASIC starten', href: links.appRegister },
} as const

export const nav = {
  links: [
    { label: 'Funktionen', href: '#funktionen' },
    { label: "So funktioniert's", href: '#so-funktionierts' },
    { label: 'Preise', href: '#preise' },
    { label: 'Über', href: '#gruender' },
  ],
  login: { label: 'Anmelden', href: links.appLogin },
} as const

export const hero = {
  eyebrow: 'Digitale Trainingspläne für deine Praxis',
  headline: 'Dein Einkommen hört auf, wenn du aufhörst zu behandeln.',
  subhead:
    'Erstelle digitale Trainingspläne für deine Patienten — per QR-Code aufs Handy, mit Video pro Übung.',
  microcopy: 'Keine Kreditkarte · In 2 Minuten startklar.',
  annotation: ['Dein Logo.', 'Dein Name.'],
} as const

export const demo = {
  eyebrow: 'Sieh es in Aktion',
  heading: 'In 38 Sekunden vom Plan zum QR-Code.',
  src: links.demo,
  caption: 'Kurze Produkt-Demo — kein Ton nötig.',
} as const

export const problem = {
  eyebrow: 'Das Problem',
  heading: 'Deine Arbeit endet an der Praxistür — deine Wirkung sollte es nicht.',
  bullets: [
    'Patienten gehen motiviert raus, nach 3 Tagen wieder passiv.',
    'Übungszettel werden vergessen, verlegt oder falsch umgesetzt.',
    'Nach Therapieende fällt der Patient weg — dein Wissen bleibt in der Praxis.',
  ],
} as const

/** „Was POM kann" — Gratis-Kern zuerst, PRO getaggt. KEINE Video-Anzahl (§8). */
export const features = {
  eyebrow: 'Was POM kann',
  heading: 'Alles, um Patienten auch zwischen den Terminen zu begleiten.',
  items: [
    { title: 'Plan per QR teilen', body: 'Ein Scan in der Praxis — kein Login, keine App-Installation.', pro: false },
    { title: 'Professionelle Übungsvideos', body: 'Klare Videos pro Übung, damit zuhause richtig trainiert wird.', pro: false },
    { title: 'PDF pro Patient', body: 'Jeder Plan auch als sauberes PDF zum Mitgeben.', pro: false },
    { title: 'Zeit sparen mit KI-Entwurf', body: 'Ein Entwurf in Sekunden — du bleibst der fachliche Kopf.', pro: true },
    { title: 'Zusatzeinkommen', body: 'Verkaufe Pläne als Selbstzahler-Leistung — der Umsatz gehört dir.', pro: true },
    { title: 'Dein Branding', body: 'Dein Logo, dein Name — der Plan sieht aus wie aus deiner Praxis.', pro: true },
  ],
} as const

/** So funktioniert's — Olive-Band. Copy aus dem Design-Handoff (deckt §6). */
export const howItWorks = {
  eyebrow: "So funktioniert's",
  heading: 'Vom Plan zur Honorarnote — in drei Schritten.',
  steps: [
    {
      n: 1,
      title: 'Plan erstellen',
      body: 'Übungen aus der Bibliothek zusammenstellen — mit Dosierung, Hinweisen und Video pro Übung.',
    },
    {
      n: 2,
      title: 'QR-Code teilen',
      body: 'Der Patient scannt den Code in der Praxis — kein Login, keine App-Installation.',
    },
    {
      n: 3,
      title: 'Patient trainiert',
      body: 'Zuhause, am Handy, mit Video pro Übung — dein Plan arbeitet weiter, auch ohne Termin.',
    },
  ],
} as const

/** Honorarnote — realisiert die Zusatzeinkommen-Korrektur (§8): 100 % Umsatz
 *  beim Therapeuten, POM erstellt nur die Honorarnote. KEINE „Provision". */
export const honorar = {
  eyebrow: 'Und dein Umsatz?',
  heading: 'Verkauft statt verschenkt — mit automatischer Honorarnote.',
  body: 'Vergib einen Plan kostenlos oder verkauft — bar, Karte oder Überweisung. Die Honorarnote erstellt sich automatisch in deinem Namen. Der Umsatz gehört dir, der Plan wird zur Einnahme.',
  cta: { label: 'So verdienst du mit', href: '#final-cta' },
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
  heading: 'Ehrlich: für wen POM gebaut ist — und für wen nicht.',
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

/** Sarah-Testimonial (Freigabe 23.06.2026: voller Name + Verlinkung OK).
 *  Traegt Usability/Regional-Trust — NICHT den Einkommens-Winkel. */
export const testimonial = {
  eyebrow: 'Aus der Praxis',
  quote:
    'Stefan hat mir vor kurzem sein Tool vorgestellt. Ich bin schon lange auf der Suche nach einem geeigneten Programm. Stefan hat wirklich alles gut durchdacht und die leichte und rasche Bedienbarkeit haben mich sofort überzeugt. Die Pläne sind wirklich schnell erstellt und sie kommen bei meinen PatientInnen gut an. Seit meinem Kauf wurde das Repertoire an Übungen erweitert und er ist offen für neue Vorschläge. Für den Kauf war für mich noch entscheidend, dass ich ein regionales Unternehmen unterstütze. Ich freue mich auf eine weitere Zusammenarbeit!',
  name: 'Sarah Arbeiter',
  role: 'Physiotherapeutin · Gruppenpraxis · Founding Member',
} as const

/** Gruender-Absatz (exakt, §Appendix D). Presse nur hier, target=_blank. */
export const founder = {
  eyebrow: 'Warum es das gibt',
  heading: 'Aus der Praxis, für die Praxis.',
  paragraph:
    'Ich baue an digitaler Physiotherapie, seit ich 2018 meine Praxis in Klagenfurt eröffnet habe. Die Idee wurde 2019 in MeinBezirk und der Kleinen Zeitung porträtiert und an der FH Kärnten (Gründergarage) vorgestellt. Als einer der ersten ÖGK-Vertragstherapeuten Kärntens (ORF, 2022) kenne ich beide Welten — Kassenabrechnung und Selbstzahler. Place of Motion ist die konsequente Weiterentwicklung: aus der Praxis, für die Praxis.',
  signature: 'Stefan Mikula, Gründer',
  pressLabel: 'Bekannt aus',
  press: [
    { label: 'ORF Kärnten', year: '2022', href: links.press.orf },
    { label: 'MeinBezirk', year: '2019', href: links.press.meinbezirk },
    { label: 'Kleine Zeitung', year: '2019', href: links.press.kleineZeitung },
    { label: 'FH Kärnten · Gründergarage', year: '', href: '' },
  ],
} as const

export const finalCta = {
  eyebrow: 'Bereit?',
  heading: 'Sieh dir POM in einem kurzen Erstgespräch an.',
  // Transparenz-Zeile STATT Preistabelle (§8).
  transparency:
    'Kostenlos mit BASIC starten — PRO schaltet KI, Verkauf und deinen Markenauftritt frei.',
  note: 'Kein Verkaufsdruck. Wir schauen gemeinsam, ob POM zu deiner Praxis passt.',
} as const

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
}

export const pricing: {
  eyebrow: string
  heading: string
  sub: string
  footnote: string
  toggleLabels: { monthly: string; yearly: string }
  plans: PricePlan[]
} = {
  eyebrow: 'Preise',
  heading: 'Starte kostenlos. Wachse, wenn du bereit bist.',
  sub: 'Kein Risiko, keine Kreditkarte für den Start.',
  footnote: 'Jederzeit kündbar · Keine versteckten Kosten.',
  toggleLabels: { monthly: 'Monatlich', yearly: 'Jährlich' },
  plans: [
    {
      name: 'Basic',
      price: '€0',
      interval: '/ Monat',
      note: 'Zum Reinschnuppern',
      features: [
        { t: 'Zugang zur App & Übungsbibliothek', ok: true },
        { t: 'Pläne per QR & PDF teilen', ok: true },
        { t: 'Professionelle Übungsvideos', ok: true },
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
        monthly: { price: '€49', interval: '/ Monat' },
        yearly: { price: '€490', interval: '/ Jahr', note: '≈ €41 / Monat', save: '2 Monate gratis' },
      },
      features: [
        { t: 'Unbegrenzte Pläne & Übungen', ok: true },
        { t: 'KI-Planassistent', ok: true, highlight: true },
        { t: 'Vorlagen & Entwürfe', ok: true },
        { t: 'Dein Logo in App & PDF', ok: true },
        { t: 'Verkauf als Selbstzahler-Leistung — Umsatz gehört dir', ok: true },
        { t: 'PDF ohne Wasserzeichen', ok: true },
      ],
      cta: { label: 'Erstgespräch buchen', href: links.calendly, variant: 'primary', external: true },
    },
    {
      name: 'Founding Member',
      badge: '⚡ Limitiert · 10 Plätze',
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
  tagline: 'Digitale Trainingspläne für Physiotherapeut:innen.',
  address: {
    name: 'Place of Motion',
    street: 'Feistritz 34',
    city: '9560 Feldkirchen',
    owner: 'Stefan Mikula',
    phone: '+43 650 9946090',
    phoneHref: 'tel:+436509946090',
    email: 'office@placeofmotion.com',
  },
  legal: [
    { label: 'Impressum', href: '/impressum' },
    { label: 'Datenschutz', href: '/datenschutz' },
  ],
} as const
