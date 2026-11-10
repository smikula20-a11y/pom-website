import type { ReactNode } from 'react'
import { ArrowRight, Check, Plus } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Eyebrow } from './primitives'

/** Gemeinsame Bausteine der Unterseiten (/uebungsplaene-verkaufen, /einrichtungen, /uebungsplan-software). Stile in index.css (.unterseite-*). */

export function UnterseiteH2({ children, onOlive = false }: { children: ReactNode; onOlive?: boolean }) {
  return (
    <h2 className="unterseite-h2" style={{ color: onOlive ? '#fff' : '#1a1a1a' }}>
      {children}
    </h2>
  )
}

export function Haekchenliste({ punkte, aufOlive = false }: { punkte: string[]; aufOlive?: boolean }) {
  return (
    <ul className={aufOlive ? 'unterseite-liste unterseite-liste--olive' : 'unterseite-liste'}>
      {punkte.map((p) => (
        <li key={p}>
          <span className="unterseite-haken" aria-hidden="true">
            <Check size={14} strokeWidth={3} />
          </span>
          {p}
        </li>
      ))}
    </ul>
  )
}

/** Interner Link mit Pfeil. Anker auf der Startseite (/#preise) als normaler Link, damit der Sprung sitzt. */
export function Textlink({ href, label }: { href: string; label: string }) {
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

export interface FrageAntwort {
  frage: string
  antwort: string
  link?: { label: string; href: string }
}

/** Häufige Fragen zum Auf- und Zuklappen, gleich auf allen Unterseiten (Stefan 10.11.2026): weiße Karten,
 *  rechts Plus, offen Minus im gleichen Stil, die erste Frage ist beim Laden offen. Die Antworten stehen
 *  auch zugeklappt vollständig im fertigen HTML und sind für Suchmaschinen lesbar. */
export function HaeufigeFragen({ fragen }: { fragen: FrageAntwort[] }) {
  return (
    <div style={{ maxWidth: 780, marginInline: 'auto' }}>
      <Eyebrow style={{ textAlign: 'center' }}>Fragen</Eyebrow>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <UnterseiteH2>Häufige Fragen</UnterseiteH2>
      </div>
      <div className="unterseite-fragen">
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
  )
}
