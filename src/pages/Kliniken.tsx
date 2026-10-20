import {
  Building2,
  ClipboardList,
  GraduationCap,
  Image as ImageIcon,
  LayoutTemplate,
  Lock,
  Mail,
  Phone,
  QrCode,
  Receipt,
  Server,
  ShieldCheck,
  Users,
  Video,
} from 'lucide-react'
import { Button } from '../components/Button'
import { HeroFlowVisual } from '../components/HeroFlowVisual'
import { Container, Eyebrow, Reveal } from '../components/primitives'
import { Haekchenliste, HaeufigeFragen, UnterseiteH2 } from '../components/Unterseite'
import { footer, links } from '../content/site'

/** Unterseite für Krankenhäuser, Reha-Einrichtungen, Therapie- und Primärversorgungszentren (Sie-Form).
 *  Aussagen belegt am 15.10.2026:
 *  App (main 7e64368): gemeinsame Patientenliste je Hausgruppe + Schalter „Nur meine“ (PatientsView),
 *  Plan-Verlauf mit Vorname (PatientDetail, PR #55), Klinikvorlagen per SQL (types.ts, PlanPickerModal),
 *  Logo in Patientenansicht und Ausdruck (QRPlanView, App.tsx), eigene Videos → Bunny, im Haus sichtbar
 *  (VideoUploadModal, bunny-upload), Ausdruck mit Start-/Endbild, Dosierung, QR-Code (App.tsx Druck),
 *  Patientenansicht ohne Konto (get_plan_by_token), Anmeldung pro Tab (PR #49),
 *  kein Verkauf in der App für EXPERT (PlanAssignmentModal).
 *  Datenschutz (20.10.2026, Stefan: schlank, nur Zutreffendes): Aussagen aus dem Blatt „Datenschutz in Kürze“
 *  vom 20.10.2026, belegt im AVV vom 01.10.2026 (Punkt 3.12, Anlage ./1 und ./2). Die volle Anbieterliste samt
 *  Drittlandsbezug (Vercel, Vimeo, Supabase-Zugriffe) steht im Blatt und im AVV, hier nur „schicken wir gern“.
 *  „DSGVO-konform“ ist eine eigene Aussage, kein Siegel und kein Zertifikat. Ohne Patientennamen = Nummer im
 *  Namensfeld (PlanAssignmentModal: Name Pflicht-Freitext, E-Mail und Adresse optional). KI kommt auf der Seite
 *  nicht vor (Stefan 20.10.2026).
 *  Bewusst nicht: „nur EU“, „kein Tracking“, Server in Österreich, Zertifikate, Pilotklinik, Preise, Video-Anzahl. */

const imHaus = [
  {
    icon: Users,
    titel: 'Eigene Zugänge fürs Team',
    text: 'Jede Therapeut:in meldet sich mit eigenem Zugang an. Auf gemeinsam genutzten PCs bleibt jede in ihrem eigenen Browser-Tab angemeldet.',
  },
  {
    icon: ClipboardList,
    titel: 'Gemeinsame Patientenliste',
    text: 'Das ganze Team sieht dieselben Patient:innen. Bei jedem Plan steht, wann und von wem er vergeben wurde.',
  },
  {
    icon: LayoutTemplate,
    titel: 'Vorlagen des Hauses',
    text: 'Für häufige Behandlungen richten wir fertige Vorlagen ein. Daraus stellt Ihr Team Pläne zusammen und passt sie an.',
  },
  {
    icon: ImageIcon,
    titel: 'Logo des Hauses',
    text: 'Ihr Logo steht auf jedem Plan, am Handy und auf dem Ausdruck.',
  },
  {
    icon: Video,
    titel: 'Neue Übungen nach Bedarf',
    text: 'Fehlt eine Übung, filmen wir sie nach Absprache. Ihr Team kann auch eigene Übungsvideos hochladen, alle Kolleg:innen im Haus können sie verwenden.',
  },
  {
    icon: GraduationCap,
    titel: 'Einschulung im Haus',
    text: 'Wir schulen Ihr Team vor Ort ein, richten die PCs gemeinsam ein und bleiben Ihre direkte Ansprechperson.',
  },
]

const fuerPatienten = [
  'Ausdruck mit allen Übungen, Bildern, Dosierung und QR-Code',
  'QR-Code scannen, der Plan öffnet sich am Handy im Browser',
  'kein Konto, keine App, kein Passwort',
  'zu jeder Übung ein Video',
  'Pläne lassen sich jederzeit abschalten, der Link gilt dann nicht mehr',
]

const verkauf = [
  { icon: ClipboardList, titel: 'Im Therapieraum', text: 'Die Therapeut:in gibt den Plan in der Einheit aus.' },
  {
    icon: Building2,
    titel: 'An der Anmeldung',
    text: 'Bezahlt wird an der Anmeldung, wie bei anderen Privatleistungen. Den Preis legt das Haus fest.',
  },
  { icon: Receipt, titel: 'Beleg aus Ihrer Kasse', text: 'Den Beleg gibt die Kasse des Hauses aus.' },
]

const datenschutz = [
  'Jedes Haus bekommt einen eigenen Vertrag zur Auftragsverarbeitung.',
  'Auf Wunsch ganz ohne Patientennamen: Statt des Namens bekommt jeder Plan eine Nummer.',
]

const vertrauen = [
  { icon: ShieldCheck, titel: 'DSGVO-konform', text: 'mit Vertrag zur Auftragsverarbeitung' },
  { icon: Server, titel: 'Patientendaten in Frankfurt', text: 'Rechenzentrum in Frankfurt am Main' },
  { icon: Lock, titel: 'Verschlüsselt', text: 'bei Übertragung und Speicherung, tägliche Sicherung' },
  { icon: null, titel: 'Made in Austria', text: 'entwickelt in Klagenfurt' },
]

/** Rot-weiß-rote Flagge im Symbolfeld der Kachel „Made in Austria“ (Stefan 20.10.2026). Bewusst kein Wappen. */
function FlaggeOesterreich() {
  const rot = { flex: 1, background: '#C8102E' }
  return (
    <span aria-hidden="true" style={{ width: 26, height: 18, borderRadius: 3, overflow: 'hidden', border: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column' }}>
      <span style={rot} />
      <span style={{ flex: 1, background: '#fff' }} />
      <span style={rot} />
    </span>
  )
}

const fragen = [
  {
    frage: 'Brauchen Patient:innen eine App oder ein Konto?',
    antwort:
      'Nein. Sie scannen den QR-Code auf dem Ausdruck oder öffnen den Link. Der Plan öffnet sich im Browser am Handy.',
  },
  {
    frage: 'Braucht es eine Installation oder eine Schnittstelle?',
    antwort:
      'Nein. Place of Motion läuft im Browser an den vorhandenen PCs. Eine Schnittstelle zu Kasse oder Patientenverwaltung gibt es nicht und braucht es nicht.',
  },
  {
    frage: 'Können wir eigene Übungsvideos verwenden?',
    antwort:
      'Ja. Ihr Team lädt eigene Videos hoch, und alle Kolleg:innen im Haus können sie verwenden. Fehlt eine Übung, filmen wir sie nach Absprache.',
  },
  {
    frage: 'Erscheint unser Logo auf den Plänen?',
    antwort: 'Ja, am Handy und auf dem Ausdruck. Wir richten es bei der Einrichtung für Sie ein.',
  },
  {
    frage: 'Wie wird das Team eingeschult?',
    antwort: 'Vor Ort im Haus. Dabei richten wir auch die gemeinsam genutzten PCs ein. Danach bleiben wir Ihre direkte Ansprechperson.',
  },
  {
    frage: 'Wo liegen die Daten?',
    antwort:
      'Die Patientendaten liegen verschlüsselt in einem Rechenzentrum in Frankfurt am Main. Eine Übersicht aller Anbieter mit Ort und Rechtsgrundlage schicken wir Ihnen gern.',
  },
  {
    frage: 'Geht es auch ohne Patientennamen?',
    antwort:
      'Ja, auf Wunsch. Statt des Namens bekommt jeder Plan eine Nummer. Das Team notiert sie in der eigenen Patientensoftware des Hauses; nur dort ist sie mit dem Namen verbunden. Place of Motion bekommt keine Namen.',
  },
  {
    frage: 'Können wir Pläne an Patient:innen verkaufen?',
    antwort:
      'Das entscheidet Ihr Haus. Wer verkaufen möchte, kassiert über die eigene Kasse, wie bei anderen Privatleistungen. Place of Motion ist an der Zahlung nicht beteiligt und sieht keine Zahlungsdaten.',
  },
  {
    frage: 'Was kostet Place of Motion für Einrichtungen?',
    antwort: 'Der Preis richtet sich nach der Größe des Hauses. Wir rechnen ihn im Erstgespräch gemeinsam durch.',
  },
]

/* ---------------- Bilder (nachgebaut aus der App, Übungsnamen aus der Bibliothek) ---------------- */

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

/** Platzhalter für Start- und Endbild einer Übung. */
function Vorschaubild() {
  return (
    <div style={{ aspectRatio: '4 / 3', borderRadius: 8, background: '#eef0ea', display: 'grid', placeItems: 'center' }}>
      <ImageIcon size={16} color="#b6bcae" strokeWidth={2} />
    </div>
  )
}

/** Platzhalter-Zeilen statt erfundener Dosierungen. */
function Textzeilen({ breiten }: { breiten: string[] }) {
  return (
    <div style={{ display: 'grid', gap: 5 }}>
      {breiten.map((b, i) => (
        <div key={i} style={{ height: 6, width: b, borderRadius: 3, background: '#e2e8f0' }} />
      ))}
    </div>
  )
}

/** Ausdruck: Logo, Planname, vergeben am, Übungen mit Start-/Endbild und Dosierung, QR-Code unten. */
function AusdruckBild() {
  const uebungen = ['Wandrutschen', 'Vorgebeugtes Y-Heben']
  return (
    <div className="unterseite-bild" style={{ ...karte, borderRadius: 14, padding: '22px 22px 18px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 }}>
        <div>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: 17, fontWeight: 800, color: '#1a1a1a' }}>Schulter mobil</div>
          <div style={{ fontSize: 11, color: '#94a3b8', marginTop: 2 }}>vergeben am 15.10.2026</div>
        </div>
        <div style={{ border: '1.5px dashed #cbd5c0', borderRadius: 8, padding: '6px 10px', fontSize: 11, fontWeight: 700, color: 'var(--pom-olive-hover)' }}>
          Ihr Logo
        </div>
      </div>

      {uebungen.map((name, i) => (
        <div key={name} style={{ borderTop: '1px solid #f1f5f9', padding: '12px 0' }}>
          <div style={{ fontSize: 12.5, fontWeight: 700, color: '#1a1a1a', marginBottom: 8 }}>
            {i + 1}. {name}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1.2fr', gap: 8, alignItems: 'start' }}>
            <Vorschaubild />
            <Vorschaubild />
            <div style={{ border: '1px solid #eef0ea', borderRadius: 8, padding: '7px 8px' }}>
              <div style={{ ...kleinLabel, fontSize: 9, marginBottom: 6 }}>Dosierung</div>
              <Textzeilen breiten={['90%', '60%']} />
            </div>
          </div>
        </div>
      ))}

      <div style={{ display: 'flex', alignItems: 'center', gap: 12, borderTop: '1px solid #f1f5f9', paddingTop: 12 }}>
        <div style={{ width: 54, height: 54, borderRadius: 8, border: '1px solid #e2e8f0', display: 'grid', placeItems: 'center' }}>
          <QrCode size={38} color="#1a1a1a" strokeWidth={1.6} />
        </div>
        <div>
          <div style={{ fontSize: 12, fontWeight: 700, color: '#1a1a1a' }}>QR-Code scannen – direkt zum Plan</div>
          <div style={{ fontSize: 10.5, color: '#94a3b8', marginTop: 2 }}>Erstellt mit Place of Motion</div>
        </div>
      </div>
    </div>
  )
}

/** Vier Vertrauenspunkte statt Anbieterliste. Bewusst kein Siegel-Bild: es gibt kein Zertifikat. */
function DatenschutzBild() {
  return (
    <div className="unterseite-bild unterseite-vertrauen">
      {vertrauen.map((v) => {
        const Icon = v.icon
        return (
          <div key={v.titel} style={{ ...karte, borderRadius: 18, padding: '18px 16px' }}>
            <div className="unterseite-symbol" style={{ marginBottom: 12 }}>
              {Icon ? <Icon size={22} color="var(--pom-olive-hover)" strokeWidth={2.2} /> : <FlaggeOesterreich />}
            </div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 17, fontWeight: 800, color: '#1a1a1a', lineHeight: 1.25 }}>{v.titel}</div>
            <div style={{ fontSize: 14, lineHeight: 1.5, color: '#64748b', marginTop: 6 }}>{v.text}</div>
          </div>
        )
      })}
    </div>
  )
}

export default function Kliniken() {
  const a = footer.address
  return (
    <main>
      {/* 1 · Kopf */}
      <section style={{ background: 'var(--pom-stone-bg)' }}>
        <Container className="section">
          <div className="split unterseite-split">
            <div>
              <Eyebrow>Place of Motion für Einrichtungen</Eyebrow>
              <h1 className="unterseite-h1">Heimübungspläne für Krankenhäuser, Reha- und Therapiezentren</h1>
              <p className="unterseite-lead">
                Für Häuser mit mehreren Therapeut:innen, vom Krankenhaus bis zum Primärversorgungszentrum. Mit
                Place of Motion stellt Ihr Team Heimübungspläne mit Übungsvideos zusammen und gibt sie als
                Ausdruck mit QR-Code an Patient:innen weiter. Die Patient:innen öffnen den Plan am Handy, ohne
                Konto und ohne App.
              </p>
              <div className="unterseite-knoepfe">
                <Button href={links.calendly} external>
                  Erstgespräch buchen
                </Button>
                <Button href="#im-haus" variant="secondary">
                  So läuft es im Haus
                </Button>
              </div>
              <p className="unterseite-hinweis">
                Entwickelt von Stefan Mikula, Physiotherapeut mit eigener Praxis in Klagenfurt.
              </p>
            </div>
            <Reveal delay={0.1}>
              <AusdruckBild />
            </Reveal>
          </div>
        </Container>
      </section>

      {/* 2 · Im Haus */}
      <section id="im-haus" style={{ background: '#fff' }}>
        <Container className="section">
          <Reveal>
            <Eyebrow>Im Haus</Eyebrow>
            <UnterseiteH2>So läuft es im Haus</UnterseiteH2>
          </Reveal>
          <div className="grid-3" style={{ marginTop: 40 }}>
            {imHaus.map((k, i) => {
              const Icon = k.icon
              return (
                <Reveal key={k.titel} delay={(i % 3) * 0.08} style={{ height: '100%' }}>
                  <div className="unterseite-karte">
                    <div className="unterseite-symbol">
                      <Icon size={22} color="var(--pom-olive-hover)" strokeWidth={2.2} />
                    </div>
                    <h3>{k.titel}</h3>
                    <p>{k.text}</p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </Container>
      </section>

      {/* 3 · Für Patient:innen */}
      <section style={{ background: 'var(--pom-stone-bg)' }}>
        <Container className="section">
          <div className="split unterseite-split unterseite-split--bild-links">
            <Reveal delay={0.1}>
              <div className="unterseite-bild" style={{ maxWidth: 300 }}>
                <HeroFlowVisual kuerzel="IH" name="Ihr Haus" zusatz="Therapie" mitHinweis={false} />
              </div>
            </Reveal>
            <Reveal>
              <Eyebrow>Für Patient:innen</Eyebrow>
              <UnterseiteH2>So bekommen Patient:innen ihren Plan</UnterseiteH2>
              <Haekchenliste punkte={fuerPatienten} />
            </Reveal>
          </div>
        </Container>
      </section>

      {/* 4 · Datenschutz und Sicherheit */}
      <section style={{ background: '#fff' }}>
        <Container className="section">
          <div className="split unterseite-split">
            <Reveal>
              <Eyebrow>Datenschutz</Eyebrow>
              <UnterseiteH2>Datenschutz und Sicherheit</UnterseiteH2>
              <Haekchenliste punkte={datenschutz} />
              <p className="unterseite-text">
                Eine Übersicht aller Anbieter mit Ort und Rechtsgrundlage schicken wir Ihnen gern.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <DatenschutzBild />
            </Reveal>
          </div>
        </Container>
      </section>

      {/* 5 · Kostenlos ausgeben oder verkaufen, das Haus entscheidet */}
      <section className="pom-band-olive">
        <Container className="section">
          <div className="pom-band-eyebrow" style={{ marginBottom: 14 }}>
            Ihr Haus entscheidet
          </div>
          <UnterseiteH2 onOlive>Pläne kostenlos ausgeben oder verkaufen</UnterseiteH2>
          <p className="unterseite-lead" style={{ color: 'rgba(255,255,255,.88)', marginBottom: 0 }}>
            Ob Ihr Haus Pläne kostenlos ausgibt oder als Privatleistung verkauft, entscheidet das Haus. Place of
            Motion funktioniert in beiden Fällen gleich. Wer verkaufen möchte, kassiert über die eigene Kasse, nicht
            über die App:
          </p>
          <div className="grid-3" style={{ marginTop: 40 }}>
            {verkauf.map((s, i) => {
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
          <Haekchenliste
            aufOlive
            punkte={[
              'Die Einnahmen bleiben ganz beim Haus. Place of Motion verdient am Verkauf nicht mit.',
              'Keine Schnittstelle, kein IT-Projekt: Die Kasse bucht wie immer. Place of Motion sieht keine Zahlungsdaten.',
            ]}
          />
        </Container>
      </section>

      {/* 6 · Häufige Fragen */}
      <section style={{ background: 'var(--pom-stone-bg)' }}>
        <Container className="section">
          <HaeufigeFragen fragen={fragen} />
        </Container>
      </section>

      {/* 7 · Abschluss: Preis im Gespräch, Kontakt */}
      <section className="pom-band-olive-gradient">
        <Container className="section" style={{ textAlign: 'center' }}>
          <div className="pom-band-eyebrow" style={{ marginBottom: 14 }}>
            Erstgespräch
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <UnterseiteH2 onOlive>Lernen Sie Place of Motion kennen</UnterseiteH2>
          </div>
          <p className="unterseite-lead" style={{ color: 'rgba(255,255,255,.88)', margin: '18px auto 28px' }}>
            Im Erstgespräch zeigen wir Ihnen Place of Motion und rechnen den Preis für Ihr Haus gemeinsam durch.
            Er richtet sich nach der Größe des Hauses.
          </p>
          <div className="unterseite-knoepfe" style={{ justifyContent: 'center' }}>
            <Button href={links.calendly} variant="white" size="lg" external>
              Erstgespräch buchen
            </Button>
          </div>
          <div className="unterseite-kontakt">
            <a href={a.phoneHref}>
              <Phone size={16} aria-hidden="true" /> {a.phone}
            </a>
            <a href={`mailto:${a.email}`}>
              <Mail size={16} aria-hidden="true" /> {a.email}
            </a>
          </div>
        </Container>
      </section>
    </main>
  )
}
