import { useEffect, useRef } from 'react'
import {
  Building2,
  ChevronDown,
  ChevronUp,
  ClipboardList,
  GraduationCap,
  Image as ImageIcon,
  LayoutTemplate,
  Lock,
  Mail,
  Phone,
  Play,
  Receipt,
  Server,
  ShieldCheck,
  Users,
  Video,
} from 'lucide-react'
import { Button } from '../components/Button'
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

/* ---------------- Bilder (nachgebaut aus der App, Übungen und Fotos aus der Bibliothek) ---------------- */

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

/** Kopf der Seite: kurzer Film ohne Ton (10 s): Ausdruck, QR-Code scannen, Plan am Handy, Video.
 *  Gebaut mit HyperFrames in C:\Users\smiku\claude code\pom-videos\videos\kliniken-kopf (Stefan 21.10.2026).
 *  Spielt einmal, sobald er zur Hälfte zu sehen ist (am Handy steht er unter dem Text), und bleibt auf dem
 *  letzten Bild stehen. Poster = erstes Bild. Bei „Bewegung reduzieren“ oder wenn das Gerät nicht abspielt
 *  (z. B. Stromsparmodus) steht stattdessen das letzte Bild da. */
function KopfVideo() {
  const ref = useRef<HTMLVideoElement>(null)
  useEffect(() => {
    const video = ref.current
    if (!video) return
    const endbild = () => {
      video.poster = '/video/kliniken-kopf-ende.jpg'
    }
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      endbild()
      return
    }
    const beobachter = new IntersectionObserver(
      ([eintrag]) => {
        if (!eintrag.isIntersecting) return
        beobachter.disconnect()
        video.play().catch(endbild)
      },
      { threshold: 0.5 },
    )
    beobachter.observe(video)
    return () => beobachter.disconnect()
  }, [])
  return (
    <div className="kopf-video">
      <video
        ref={ref}
        src="/video/kliniken-kopf.mp4"
        poster="/video/kliniken-kopf-start.jpg"
        muted
        playsInline
        preload="auto"
        width={960}
        height={1200}
        aria-label="Ein ausgedruckter Übungsplan mit QR-Code. Ein Handy scannt den Code und zeigt denselben Plan mit Übungsvideo."
      />
    </div>
  )
}

/** Abschnitt 3: Patientenansicht am Handy mit geöffneter Übung, schematisch wie PatientPlanView der App
 *  (Zeile mit Nummer und Bild, Video, Dosierung, Beschreibung, Hinweise; zweite Übung zugeklappt). */
function HandyUebung() {
  const zeile = { display: 'flex', alignItems: 'center', gap: 10, padding: '10px 12px' } as const
  const nummer = (aktiv: boolean) =>
    ({
      width: 22,
      height: 22,
      borderRadius: 999,
      flex: 'none',
      display: 'grid',
      placeItems: 'center',
      fontSize: 11,
      fontWeight: 800,
      background: aktiv ? '#8BA83A' : '#f0f0ed',
      color: aktiv ? '#fff' : '#9a9a94',
    }) as const
  const pfeilKreis = { width: 26, height: 26, borderRadius: 999, background: '#f0f0ed', display: 'grid', placeItems: 'center', flex: 'none' } as const
  const titel = { fontSize: 13, fontWeight: 600, color: '#1a1a1a', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' } as const
  return (
    <div className="unterseite-bild" style={{ maxWidth: 300 }}>
      <div style={{ width: 300, maxWidth: '100%', background: '#fff', borderRadius: 32, boxShadow: 'var(--shadow-frame)', overflow: 'hidden' }}>
        <div style={{ background: 'linear-gradient(135deg,#1a1a1a,#2a2a2a)', padding: '16px 20px 14px', color: '#fff', display: 'flex', alignItems: 'center', gap: 11 }}>
          <div style={{ width: 34, height: 34, borderRadius: 10, background: 'rgba(139,168,58,.25)', border: '1.5px dashed rgba(255,255,255,.45)', display: 'grid', placeItems: 'center', fontFamily: 'var(--font-display)', fontSize: 13, fontWeight: 800 }}>
            IH
          </div>
          <div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 15, fontWeight: 800, lineHeight: 1.2 }}>Ihr Haus</div>
            <div style={{ fontSize: 11, fontWeight: 500, color: 'rgba(255,255,255,.6)' }}>Dein Trainingsplan</div>
          </div>
        </div>
        <div style={{ padding: '14px 14px 18px' }}>
          <div style={{ border: '1.5px solid #e5e5e0', borderRadius: 18, overflow: 'hidden' }}>
            <div style={zeile}>
              <span style={nummer(true)}>1</span>
              <img src="/bilder/y-heben-ende.jpg" alt="" style={{ width: 40, height: 40, borderRadius: 10, objectFit: 'cover', flex: 'none' }} />
              <div style={{ ...titel, flex: 1, minWidth: 0 }}>Vorgebeugtes Y-Heben mit Kurzhanteln</div>
              <span style={pfeilKreis}>
                <ChevronUp size={14} color="#9a9a94" />
              </span>
            </div>
            <div style={{ padding: '0 12px 14px' }}>
              <div style={{ position: 'relative', aspectRatio: '16 / 9', borderRadius: 12, overflow: 'hidden', background: '#1a1a1a' }}>
                <img
                  src="/exercise-thumb.jpg"
                  alt="Übungsvideo - Vorgebeugtes Y-Heben mit Kurzhanteln"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
                <span style={{ position: 'absolute', inset: 0, display: 'grid', placeItems: 'center' }}>
                  <span style={{ width: 44, height: 44, borderRadius: 999, background: 'rgba(255,255,255,.92)', display: 'grid', placeItems: 'center', boxShadow: '0 4px 14px rgba(0,0,0,.2)' }}>
                    <Play size={18} color="#8BA83A" fill="#8BA83A" style={{ marginLeft: 2 }} />
                  </span>
                </span>
              </div>
              <div style={{ background: '#f2f3ec', borderRadius: 10, padding: '8px 12px', marginTop: 10 }}>
                <div style={{ ...kleinLabel, fontSize: 9, color: '#7a8a5a', marginBottom: 3 }}>Dosierung</div>
                <div style={{ fontSize: 13, fontWeight: 600, color: '#1a1a1a' }}>3 × 10–15</div>
              </div>
              <p style={{ fontSize: 11.5, lineHeight: 1.6, color: '#71716b', margin: '10px 0 0' }}>
                Du hebst die fast gestreckten Arme schräg nach vorne oben, bis sie mit dem Oberkörper ein Y bilden,
                und senkst sie kontrolliert wieder ab.
              </p>
              <div style={{ background: '#f4f5f0', borderRadius: 10, padding: '8px 12px', marginTop: 10 }}>
                <div style={{ ...kleinLabel, fontSize: 9, color: '#8a9878', marginBottom: 3 }}>Hinweise</div>
                <div style={{ fontSize: 12.5, color: '#1a1a1a' }}>Rücken gerade, Kopf in Verlängerung</div>
              </div>
            </div>
          </div>
          <div style={{ ...zeile, border: '1.5px solid #e5e5e0', borderRadius: 18, marginTop: 10 }}>
            <span style={nummer(false)}>2</span>
            <img src="/bilder/seitheben-ende.jpg" alt="" style={{ width: 40, height: 40, borderRadius: 10, objectFit: 'cover', flex: 'none' }} />
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={titel}>Vorgebeugtes Seitheben mit Kurzhanteln</div>
              <div style={{ fontSize: 11.5, fontWeight: 600, color: '#8BA83A', marginTop: 2 }}>3 × 12</div>
            </div>
            <span style={pfeilKreis}>
              <ChevronDown size={14} color="#9a9a94" />
            </span>
          </div>
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
          <div className="split unterseite-split unterseite-split--kopf">
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
            <KopfVideo />
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
              <HandyUebung />
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
