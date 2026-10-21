import {
  Banknote,
  ClipboardList,
  CreditCard,
  Download,
  FileText,
  Landmark,
  QrCode,
  Receipt,
  Wallet,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '../components/Button'
import { Container, Eyebrow, Reveal } from '../components/primitives'
import { Haekchenliste, HaeufigeFragen, UnterseiteH2 } from '../components/Unterseite'
import { FinalCta } from '../sections/MidSections'
import { links } from '../content/site'

/** Unterseite „Übungspläne als Selbstzahlerleistung verkaufen“ (Text von Stefan freigegeben 15.10.2026).
 *  Texte und Bilder belegt an der App: PlanAssignmentModal (Vergabe, Knopf „Verkaufen & Honorarnote“),
 *  invoiceGenerator (Barbeleg/Honorarnote, Nummer JJJJ-NNN, Steuerhinweise), InvoicesView (Status),
 *  Dashboard (Kachel „Umsatz (Monat)“). Namen und Beträge in den Bildern sind erfunden. */


const schritte = [
  {
    icon: ClipboardList,
    titel: 'Plan zusammenstellen',
    text: 'Übungen aus der Bibliothek wählen, zu jeder Übung gibt es ein Video.',
  },
  {
    icon: Wallet,
    titel: 'Kostenpflichtig vergeben',
    text: 'Beim Vergeben „Kostenpflichtig“ wählen, Betrag eintragen und die Bezahlart festlegen: bar, Karte oder Überweisung.',
  },
  {
    icon: QrCode,
    titel: 'Verkaufen',
    text: 'Auf „Verkaufen & Honorarnote“ tippen. Deine Patientin oder dein Patient bekommt den Plan per QR-Code oder Link und öffnet ihn am Handy, ohne Konto und ohne App.',
  },
  {
    icon: Receipt,
    titel: 'Beleg ausgeben',
    text: 'Beleg öffnen und ausdrucken oder als PDF speichern. Bei Überweisung markierst du die Zahlung als bezahlt, sobald das Geld da ist.',
  },
]

const belegInhalt = [
  'deine Praxisdaten: Name, Adresse, auf Wunsch Logo, Steuernummer oder UID',
  'Name der Patientin oder des Patienten',
  'fortlaufende Nummer, Datum und Leistungsdatum',
  'Leistung, Betrag und Bezahlart',
  'ein Steuerhinweis, passend zu deinem Steuerstatus',
  'bei Überweisung deine Bankverbindung',
]

const verkaeufe = [
  'Liste aller Belege mit Status „bezahlt“ oder „ausstehend“',
  'Storno mit Begründung',
  'Export als CSV-Datei für deine Steuerberatung',
  'Umsatz des laufenden Monats auf der Startseite der App',
]

const fragen: { frage: string; antwort: string }[] = [
  {
    frage: 'Bekommt Place of Motion einen Anteil am Verkauf?',
    antwort:
      'Nein. Deine Patient:innen zahlen bar, mit Karte oder per Überweisung direkt an dich. Place of Motion ist an der Zahlung nicht beteiligt.',
  },
  { frage: 'Wer legt den Preis fest?', antwort: 'Du. Den Betrag trägst du bei jedem Verkauf selbst ein.' },
  {
    frage: 'Kann ich Pläne weiterhin kostenlos vergeben?',
    antwort: 'Ja. Bei jedem Plan entscheidest du, ob du ihn kostenlos oder kostenpflichtig vergibst.',
  },
  {
    frage: 'Brauchen meine Patient:innen eine App oder ein Konto?',
    antwort: 'Nein. Sie öffnen den Plan über den QR-Code oder den Link im Browser am Handy.',
  },
  {
    frage: 'Kann ich mit Karte kassieren?',
    antwort:
      'Ja, wenn du ein eigenes Kartenterminal hast. In deinen Praxisdaten schaltest du dafür die Kartenzahlung ein.',
  },
  {
    frage: 'Was muss ich steuerlich beachten?',
    antwort:
      'In der App wählst du deinen Steuerstatus: Heilbehandlung (umsatzsteuerfrei nach § 6 Abs. 1 Z 19 UStG), Kleinunternehmer oder umsatzsteuerpflichtig. Der passende Hinweis steht dann auf dem Beleg. Welcher Status für dich gilt, klärst du mit deiner Steuerberatung. Place of Motion erstellt den Beleg in deinem Namen, die steuerliche Verantwortung liegt bei dir.',
  },
]

/* ---------------- Bilder (nachgebaut aus der App, erfundene Daten) ---------------- */

const karte = {
  background: '#fff',
  border: '1px solid #eef0ea',
  borderRadius: 24,
  boxShadow: '0 12px 40px rgba(26,26,26,.10)',
} as const

const kleinLabel = {
  fontFamily: 'var(--font-sans)',
  fontSize: 10,
  fontWeight: 900,
  letterSpacing: '.1em',
  textTransform: 'uppercase',
  color: '#94a3b8',
} as const

/** Vergabe-Schritt: Kostenpflichtig, Betrag, Bezahlart, Knopf „Verkaufen & Honorarnote“. */
function VergabeBild() {
  const arten = [
    { icon: Banknote, label: 'Bar', aktiv: true },
    { icon: CreditCard, label: 'Karte', aktiv: false },
    { icon: Landmark, label: 'Überweisung', aktiv: false },
  ]
  return (
    <div className="unterseite-bild" style={{ ...karte, padding: '24px 24px 22px' }}>
      <div style={{ ...kleinLabel, marginBottom: 10 }}>Plan vergeben</div>
      <div style={{ fontFamily: 'var(--font-display)', fontSize: 18, fontWeight: 700, color: '#1a1a1a', marginBottom: 16 }}>
        Rücken aktiv
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 6, background: '#f5f5f3', borderRadius: 12, padding: 4, marginBottom: 16 }}>
        <div style={{ textAlign: 'center', fontSize: 13, fontWeight: 600, color: '#64748b', padding: '8px 0' }}>Kostenlos</div>
        <div style={{ textAlign: 'center', fontSize: 13, fontWeight: 700, color: '#fff', background: 'var(--pom-olive)', borderRadius: 9, padding: '8px 0' }}>
          Kostenpflichtig
        </div>
      </div>

      <div style={{ ...kleinLabel, marginBottom: 6 }}>Betrag</div>
      <div style={{ border: '1px solid #e2e8f0', borderRadius: 10, padding: '10px 12px', fontSize: 16, fontWeight: 700, color: '#1a1a1a', marginBottom: 16 }}>
        39,00 €
      </div>

      <div style={{ ...kleinLabel, marginBottom: 6 }}>Bezahlart</div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 6, marginBottom: 18 }}>
        {arten.map(({ icon: Icon, label, aktiv }) => (
          <div
            key={label}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 4,
              padding: '9px 4px',
              borderRadius: 10,
              fontSize: 11.5,
              fontWeight: 600,
              color: aktiv ? 'var(--pom-olive-hover)' : '#64748b',
              background: aktiv ? 'var(--pom-olive-tint)' : '#fff',
              border: `1px solid ${aktiv ? 'var(--pom-olive-tint-line)' : '#e2e8f0'}`,
            }}
          >
            <Icon size={17} strokeWidth={2.2} />
            {label}
          </div>
        ))}
      </div>

      <div style={{ background: 'var(--pom-ink)', color: '#fff', borderRadius: 12, padding: '12px 0', textAlign: 'center', fontSize: 14, fontWeight: 700 }}>
        Verkaufen &amp; Honorarnote
      </div>
    </div>
  )
}

/** Barbeleg wie aus der App (Kartenzahlung, Steuerhinweis Heilbehandlung). */
function BelegBild() {
  const zeile = { display: 'flex', justifyContent: 'space-between', gap: 12 } as const
  return (
    <div className="unterseite-bild" style={{ ...karte, padding: '24px 26px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 18 }}>
        <div style={{ width: 34, height: 34, borderRadius: 10, background: 'var(--pom-olive-a10)', display: 'grid', placeItems: 'center' }}>
          <FileText size={17} color="var(--pom-olive-hover)" strokeWidth={2.2} />
        </div>
        <div style={{ lineHeight: 1.35 }}>
          <div style={{ fontSize: 13, fontWeight: 700, color: '#1a1a1a' }}>Physiotherapie Muster</div>
          <div style={{ fontSize: 11.5, color: '#94a3b8' }}>Musterweg 1 · 9020 Klagenfurt</div>
        </div>
      </div>

      <div style={{ ...zeile, alignItems: 'flex-end', marginBottom: 14 }}>
        <div>
          <div style={kleinLabel}>An</div>
          <div style={{ fontSize: 13, color: '#1a1a1a' }}>Maria Beispiel</div>
        </div>
        <div style={{ textAlign: 'right', fontSize: 11.5, color: '#64748b', lineHeight: 1.5 }}>
          Nr. 2026-014
          <br />
          15.10.2026
        </div>
      </div>

      <div style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 800, color: '#1a1a1a', marginBottom: 12 }}>
        Barbeleg
      </div>

      <div style={{ ...zeile, padding: '12px 0', borderTop: '1px solid #f1f5f9', borderBottom: '1px solid #f1f5f9', fontSize: 12.5, color: '#475569' }}>
        <span>
          Physiotherapeutische Beratung inkl. digitalem Heimübungsplan
          <span style={{ display: 'block', fontSize: 11.5, color: '#94a3b8', marginTop: 3 }}>Zahlung: Kartenzahlung</span>
        </span>
        <span style={{ fontWeight: 600, color: '#1a1a1a', whiteSpace: 'nowrap' }}>39,00 €</span>
      </div>

      <div style={{ ...zeile, alignItems: 'baseline', margin: '14px 0 10px' }}>
        <span style={kleinLabel}>Gesamtbetrag</span>
        <span style={{ fontFamily: 'var(--font-display)', fontSize: 26, fontWeight: 900, letterSpacing: '-0.02em', color: '#1a1a1a' }}>
          39,00 €
        </span>
      </div>
      <div style={{ fontSize: 11, color: '#94a3b8' }}>Umsatzsteuerbefreit gemäß § 6 Abs 1 Z 19 UStG.</div>
    </div>
  )
}

/** Verkaufsübersicht: Kachel „Umsatz (Monat)“ und Belegliste mit Status. */
function VerkaeufeBild() {
  const zeilen = [
    { nr: '2026-014', name: 'Maria Beispiel', status: 'Bezahlt' },
    { nr: '2026-013', name: 'Johann Muster', status: 'Ausstehend' },
    { nr: '2026-012', name: 'Eva Probe', status: 'Bezahlt' },
  ]
  return (
    <div className="unterseite-bild" style={{ ...karte, padding: '22px 22px 18px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'var(--pom-olive-tint)', border: '1px solid var(--pom-olive-tint-line)', borderRadius: 16, padding: '14px 16px', marginBottom: 16 }}>
        <div>
          <div style={{ ...kleinLabel, color: 'var(--pom-olive-hover)' }}>Umsatz (Monat)</div>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: 26, fontWeight: 900, color: '#1a1a1a', letterSpacing: '-0.02em' }}>312,00 €</div>
        </div>
        <Wallet size={26} color="var(--pom-olive-hover)" strokeWidth={2} />
      </div>

      {zeilen.map((z) => {
        const bezahlt = z.status === 'Bezahlt'
        return (
          <div key={z.nr} style={{ display: 'grid', gridTemplateColumns: '1fr auto auto', alignItems: 'center', gap: 10, padding: '10px 2px', borderBottom: '1px solid #f1f5f9', fontSize: 12.5 }}>
            <div style={{ lineHeight: 1.35, minWidth: 0 }}>
              <div style={{ fontWeight: 600, color: '#1a1a1a' }}>{z.name}</div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: '#94a3b8' }}>{z.nr}</div>
            </div>
            <span style={{ fontWeight: 600, color: '#1a1a1a' }}>39,00 €</span>
            <span
              style={{
                fontSize: 10,
                fontWeight: 800,
                letterSpacing: '.06em',
                textTransform: 'uppercase',
                padding: '3px 8px',
                borderRadius: 999,
                color: bezahlt ? '#059669' : '#b45309',
                background: bezahlt ? '#ecfdf5' : '#fffbeb',
                border: `1px solid ${bezahlt ? '#bbf7d0' : '#fde68a'}`,
              }}
            >
              {z.status}
            </span>
          </div>
        )
      })}

      <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 12 }}>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 12, fontWeight: 600, color: '#64748b', border: '1px solid #e2e8f0', borderRadius: 999, padding: '5px 12px' }}>
          <Download size={14} strokeWidth={2.2} />
          CSV
        </span>
      </div>
    </div>
  )
}


export default function UebungsplaeneVerkaufen() {
  return (
    <main>
      {/* 1 · Kopf */}
      <section style={{ background: 'var(--pom-stone-bg)' }}>
        <Container className="section">
          <div className="split unterseite-split">
            <div>
              <Eyebrow>Selbstzahlerleistung mit PRO</Eyebrow>
              <h1 className="unterseite-h1">Übungspläne als Selbstzahlerleistung verkaufen</h1>
              <p className="unterseite-lead">
                Mit Place of Motion gibst du einen Heimübungsplan kostenlos oder gegen Bezahlung an deine
                Patient:innen weiter. Du legst den Preis selbst fest, kassierst bar, mit Karte oder per
                Überweisung, und die App erstellt den Beleg in deinem Namen. Das Geld geht direkt an dich.
              </p>
              <div className="unterseite-knoepfe">
                <Button href={links.calendly} external>
                  Erstgespräch buchen
                </Button>
                <Button href="/#preise" variant="secondary">
                  Preise ansehen
                </Button>
              </div>
              <p className="unterseite-hinweis">
                Für Häuser mit mehreren Therapeut:innen läuft der Verkauf über die eigene Kasse, mehr dazu unter{' '}
                <Link to="/einrichtungen">Für Einrichtungen</Link>.
              </p>
            </div>
            <Reveal delay={0.1}>
              <VergabeBild />
            </Reveal>
          </div>
        </Container>
      </section>

      {/* 2 · So funktioniert's */}
      <section className="pom-band-olive">
        <Container className="section">
          <div className="pom-band-eyebrow" style={{ marginBottom: 14 }}>
            In vier Schritten
          </div>
          <UnterseiteH2 onOlive>So funktioniert's</UnterseiteH2>
          <div className="grid-4" style={{ marginTop: 44 }}>
            {schritte.map((s, i) => {
              const Icon = s.icon
              return (
                <Reveal key={s.titel} delay={i * 0.08} style={{ height: '100%' }}>
                  <div className="unterseite-schritt">
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <div style={{ width: 40, height: 40, borderRadius: 10, background: 'rgba(255,255,255,.92)', display: 'grid', placeItems: 'center' }}>
                        <Icon size={20} color="var(--pom-olive-hover)" strokeWidth={2.5} />
                      </div>
                      <span style={{ fontFamily: 'var(--font-display)', fontSize: 30, fontWeight: 900, color: 'rgba(255,255,255,.35)' }}>{i + 1}</span>
                    </div>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 20, fontWeight: 700, color: '#fff', margin: 0 }}>{s.titel}</h3>
                    <p style={{ margin: 0, fontSize: 16, lineHeight: 1.6, color: 'rgba(255,255,255,.88)' }}>{s.text}</p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </Container>
      </section>

      {/* 3 · Beleg */}
      <section style={{ background: '#fff' }}>
        <Container className="section">
          <div className="split unterseite-split">
            <Reveal>
              <Eyebrow>Der Beleg</Eyebrow>
              <UnterseiteH2>Was auf dem Beleg steht</UnterseiteH2>
              <Haekchenliste punkte={belegInhalt} />
              <p className="unterseite-text">
                Bei Bar- und Kartenzahlung heißt der Beleg „Barbeleg“, bei Überweisung „Honorarnote“. Als
                Leistung steht standardmäßig „Physiotherapeutische Beratung inkl. digitalem Heimübungsplan“.
                Den Text kannst du in deinen Praxisdaten ändern.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <BelegBild />
            </Reveal>
          </div>
        </Container>
      </section>

      {/* 4 · Überblick über die Verkäufe */}
      <section style={{ background: 'var(--pom-stone-bg)' }}>
        <Container className="section">
          <div className="split unterseite-split unterseite-split--bild-links">
            <Reveal delay={0.1}>
              <VerkaeufeBild />
            </Reveal>
            <Reveal>
              <Eyebrow>Überblick</Eyebrow>
              <UnterseiteH2>Überblick über deine Verkäufe</UnterseiteH2>
              <Haekchenliste punkte={verkaeufe} />
            </Reveal>
          </div>
        </Container>
      </section>

      {/* 5 · Was es kostet */}
      <section style={{ background: '#fff' }}>
        <Container className="section">
          <Reveal>
            <div className="unterseite-preis">
              <Eyebrow style={{ textAlign: 'center' }}>Preis</Eyebrow>
              <UnterseiteH2>Was es kostet</UnterseiteH2>
              <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center', gap: 8, margin: '22px 0 4px' }}>
                <span className="unterseite-pro">PRO</span>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: 44, fontWeight: 900, letterSpacing: '-0.03em', color: '#1a1a1a' }}>49 €</span>
                <span style={{ fontSize: 16, color: 'var(--pom-slate-500)' }}>/ Monat</span>
              </div>
              <p className="unterseite-text" style={{ textAlign: 'center', margin: '10px auto 24px' }}>
                Verkaufen ist im Tarif PRO enthalten: 49 € im Monat oder 490 € im Jahr. Mit BASIC
                (kostenlos) vergibst du Pläne kostenlos.
              </p>
              <div className="unterseite-knoepfe" style={{ justifyContent: 'center' }}>
                <Button href={links.calendly} external>
                  Erstgespräch buchen
                </Button>
                <Button href="/#preise" variant="secondary">
                  Preise ansehen
                </Button>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* 6 · Häufige Fragen (Antworten stehen im HTML, auch zugeklappt lesbar für Suchmaschinen) */}
      <section style={{ background: 'var(--pom-stone-bg)' }}>
        <Container className="section">
          <HaeufigeFragen fragen={fragen} />
        </Container>
      </section>

      {/* 7 · Abschluss wie auf der Startseite */}
      <FinalCta />
    </main>
  )
}
