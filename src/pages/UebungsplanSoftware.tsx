import {
  ArrowRight,
  CalendarDays,
  ClipboardList,
  FileText,
  Gift,
  Monitor,
  Plus,
  Printer,
  QrCode,
  Receipt,
  Server,
  Smartphone,
  Stethoscope,
  Building2,
  Video,
  Wallet,
  type LucideIcon,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '../components/Button'
import { Container, Eyebrow, Reveal } from '../components/primitives'
import { UnterseiteH2 } from '../components/Unterseite'
import { FinalCta } from '../sections/MidSections'
import { links } from '../content/site'
import {
  anders,
  auswahl,
  fragen,
  kopf,
  kosten,
  praxissoftware,
  schritte,
  tarife,
  wasIst,
} from '../content/uebungsplanSoftware'
import { HandyUebung, KopfVideo } from './Einrichtungen'

/** Unterseite „Übungsplan-Software für Physiotherapie in Österreich“ (Text Fassung 2, Stefan 10.11.2026).
 *  Für allgemeine Suchfragen: Software Österreich, Pläne mit Videos, QR-Code, Datenschutz.
 *  Alle Texte stehen in content/uebungsplanSoftware.ts, weil dieselben Fragen und Antworten auch
 *  maschinenlesbar im <head> landen (FAQPage, siehe content/seo.ts).
 *  App-Bilder sind die von /einrichtungen (Film im Kopf, Handy-Ansicht), hier nichts Neues nachgebaut.
 *  Häufige Fragen zum Auf- und Zuklappen (details/summary, erste offen): Die Antworten stehen trotzdem
 *  vollständig im fertigen HTML. */

const schrittSymbole: LucideIcon[] = [ClipboardList, QrCode, Smartphone]
const auswahlSymbole: LucideIcon[] = [Smartphone, Video, Printer, Server, Receipt, Monitor, Gift]
const andersSymbole: LucideIcon[] = [Wallet, Stethoscope, Building2, Video]

/** Interner Link mit Pfeil. Anker auf der Startseite (/#preise) als normaler Link, damit der Sprung sitzt. */
function Textlink({ href, label }: { href: string; label: string }) {
  const inhalt = (
    <>
      {label}
      <ArrowRight size={16} strokeWidth={2.4} aria-hidden="true" />
    </>
  )
  return href.includes('#') ? (
    <a className="unterseite-link" href={href}>
      {inhalt}
    </a>
  ) : (
    <Link className="unterseite-link" to={href}>
      {inhalt}
    </Link>
  )
}

/** Hebt „Ja“ oder „Nein“ am Anfang der Antwort hervor, der Wortlaut bleibt gleich. */
function Antwort({ text }: { text: string }) {
  const treffer = /^(Ja|Nein)(?=[.,])/.exec(text)
  if (!treffer) return <>{text}</>
  return (
    <>
      <strong>{treffer[1]}</strong>
      {text.slice(treffer[1].length)}
    </>
  )
}

/** Bild zu „Ersetzt Place of Motion meine Praxissoftware?“: zwei Programme, die nebeneinander laufen. */
function NebeneinanderBild() {
  const kopfzeile = { display: 'flex', alignItems: 'center', gap: 12 } as const
  const name = { fontFamily: 'var(--font-display)', fontSize: 18, fontWeight: 700, color: '#1a1a1a' } as const
  const bleibt = [
    { icon: CalendarDays, label: 'Termine' },
    { icon: Receipt, label: 'Kassenabrechnung' },
    { icon: FileText, label: 'Dokumentation' },
  ]
  return (
    <div className="unterseite-bild unterseite-nebeneinander" aria-hidden="true">
      <div>
        <div style={kopfzeile}>
          <span className="unterseite-symbol" style={{ margin: 0, background: 'var(--pom-stone-150)' }}>
            <Monitor size={22} color="var(--pom-slate-500)" strokeWidth={2.2} />
          </span>
          <span style={name}>Deine Praxissoftware</span>
        </div>
        <ul>
          {bleibt.map(({ icon: Icon, label }) => (
            <li key={label}>
              <Icon size={17} color="var(--pom-slate-400)" strokeWidth={2.2} />
              {label}
            </li>
          ))}
        </ul>
      </div>
      <span className="unterseite-plus">
        <Plus size={18} strokeWidth={3} />
      </span>
      <div className="ist-pom">
        <div style={kopfzeile}>
          <img src="/logos/pom-olive-icon.svg" alt="" width={44} height={44} style={{ flex: 'none' }} />
          <span style={name}>Place of Motion</span>
        </div>
        <ul>
          <li>
            <ClipboardList size={17} color="var(--pom-olive-hover)" strokeWidth={2.2} />
            Heimübungspläne
          </li>
        </ul>
      </div>
    </div>
  )
}

export default function UebungsplanSoftware() {
  return (
    <main>
      {/* 1 · Kopf */}
      <section style={{ background: 'var(--pom-stone-bg)' }}>
        <Container className="section">
          <div className="split unterseite-split unterseite-split--kopf">
            <div>
              <Eyebrow>{kopf.eyebrow}</Eyebrow>
              <h1 className="unterseite-h1">{kopf.h1}</h1>
              <p className="unterseite-lead">{kopf.lead}</p>
              <div className="unterseite-knoepfe">
                <Button href={links.appRegister} external>
                  Kostenlos starten
                </Button>
                <Button href={links.calendly} variant="secondary" external>
                  Erstgespräch buchen
                </Button>
              </div>
              <p className="unterseite-hinweis">{kopf.hinweis}</p>
            </div>
            <KopfVideo />
          </div>
        </Container>
      </section>

      {/* 2 · Was ist eine Übungsplan-Software? */}
      <section style={{ background: '#fff' }}>
        <Container className="section">
          <div className="split unterseite-split">
            <Reveal>
              <Eyebrow>Kurz erklärt</Eyebrow>
              <UnterseiteH2>{wasIst.frage}</UnterseiteH2>
              <p className="unterseite-text">{wasIst.antwort}</p>
            </Reveal>
            <Reveal delay={0.1}>
              <HandyUebung />
            </Reveal>
          </div>
        </Container>
      </section>

      {/* 3 · So erstellst du einen Plan */}
      <section className="pom-band-olive">
        <Container className="section">
          <div className="pom-band-eyebrow" style={{ marginBottom: 14 }}>
            In drei Schritten
          </div>
          <UnterseiteH2 onOlive>So erstellst du einen Plan</UnterseiteH2>
          <div className="grid-3" style={{ marginTop: 44 }}>
            {schritte.map((s, i) => {
              const Icon = schrittSymbole[i]
              return (
                <Reveal key={s.titel} delay={i * 0.08} style={{ height: '100%' }}>
                  <div className="unterseite-schritt">
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <div style={{ width: 40, height: 40, borderRadius: 10, background: 'rgba(255,255,255,.92)', display: 'grid', placeItems: 'center' }}>
                        <Icon size={20} color="var(--pom-olive-hover)" strokeWidth={2.5} />
                      </div>
                      <span aria-hidden="true" style={{ fontFamily: 'var(--font-display)', fontSize: 30, fontWeight: 900, color: 'rgba(255,255,255,.35)' }}>{i + 1}</span>
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

      {/* 4 · Worauf solltest du bei der Auswahl achten? (Tabelle, am Handy eine Karte pro Frage) */}
      <section style={{ background: 'var(--pom-stone-bg)' }}>
        <Container className="section">
          <Reveal>
            <Eyebrow>Auswahl</Eyebrow>
            <UnterseiteH2>Worauf solltest du bei der Auswahl achten?</UnterseiteH2>
          </Reveal>
          <div className="unterseite-tabelle-rahmen">
            <table className="unterseite-tabelle">
              <thead>
                <tr>
                  <th scope="col">Frage</th>
                  <th scope="col">So ist es bei Place of Motion</th>
                </tr>
              </thead>
              <tbody>
                {auswahl.map((z, i) => {
                  const Icon = auswahlSymbole[i]
                  return (
                    <tr key={z.frage}>
                      <th scope="row">
                        <span className="unterseite-tabelle-frage">
                          <span className="unterseite-tabelle-symbol" aria-hidden="true">
                            <Icon size={18} color="var(--pom-olive-hover)" strokeWidth={2.2} />
                          </span>
                          <span>{z.frage}</span>
                        </span>
                      </th>
                      <td>
                        <Antwort text={z.antwort} />
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </Container>
      </section>

      {/* 5 · Was ist bei Place of Motion anders? */}
      <section style={{ background: '#fff' }}>
        <Container className="section">
          <Reveal>
            <Eyebrow>Unterschiede</Eyebrow>
            <UnterseiteH2>Was ist bei Place of Motion anders?</UnterseiteH2>
          </Reveal>
          <div className="grid-2" style={{ marginTop: 40 }}>
            {anders.map((k, i) => {
              const Icon = andersSymbole[i]
              return (
                <Reveal key={k.titel} delay={(i % 2) * 0.08} style={{ height: '100%' }}>
                  <div className="unterseite-karte">
                    <div className="unterseite-symbol">
                      <Icon size={22} color="var(--pom-olive-hover)" strokeWidth={2.2} />
                    </div>
                    <h3>{k.titel}</h3>
                    <p>{k.text}</p>
                    {'link' in k && <Textlink {...k.link} />}
                  </div>
                </Reveal>
              )
            })}
          </div>
        </Container>
      </section>

      {/* 6 · Ersetzt Place of Motion meine Praxissoftware? */}
      <section style={{ background: 'var(--pom-stone-bg)' }}>
        <Container className="section">
          <div className="split unterseite-split unterseite-split--bild-links">
            <Reveal delay={0.1}>
              <NebeneinanderBild />
            </Reveal>
            <Reveal>
              <Eyebrow>Praxissoftware</Eyebrow>
              <UnterseiteH2>{praxissoftware.frage}</UnterseiteH2>
              <p className="unterseite-text">{praxissoftware.antwort}</p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* 7 · Was kostet Place of Motion? */}
      <section style={{ background: '#fff' }}>
        <Container className="section">
          <Reveal>
            <Eyebrow>Preise</Eyebrow>
            <UnterseiteH2>{kosten.frage}</UnterseiteH2>
            <p className="unterseite-text">{kosten.antwort}</p>
          </Reveal>
          <div className="grid-3" style={{ marginTop: 36 }}>
            {tarife.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.08} style={{ height: '100%' }}>
                <div className={t.hervorgehoben ? 'unterseite-karte unterseite-tarif ist-pro' : 'unterseite-karte unterseite-tarif'}>
                  <h3 className="unterseite-tarif-name">{t.name}</h3>
                  <div className="unterseite-tarif-preis">{t.preis}</div>
                  <div className="unterseite-tarif-zusatz">{t.zusatz}</div>
                  <p>{t.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
          {kosten.link && <Textlink {...kosten.link} />}
        </Container>
      </section>

      {/* 8 · Häufige Fragen zum Aufklappen, die erste ist beim Laden offen */}
      <section style={{ background: 'var(--pom-stone-bg)' }}>
        <Container className="section">
          <div style={{ maxWidth: 780, marginInline: 'auto' }}>
            <Eyebrow style={{ textAlign: 'center' }}>Fragen</Eyebrow>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <UnterseiteH2>Häufige Fragen</UnterseiteH2>
            </div>
            <div className="unterseite-fragen unterseite-fragen--klapp">
              {fragen.map((f, i) => (
                <details key={f.frage} open={i === 0 ? true : undefined}>
                  <summary>
                    <h3>{f.frage}</h3>
                    <span className="unterseite-klapp-symbol" aria-hidden="true">
                      <Plus size={18} strokeWidth={2.6} />
                    </span>
                  </summary>
                  <div className="unterseite-antwort">
                    <p>{f.antwort}</p>
                    {f.link && <Textlink {...f.link} />}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* 9 · Abschluss wie auf der Startseite */}
      <FinalCta />
    </main>
  )
}
