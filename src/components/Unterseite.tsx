import type { ReactNode } from 'react'
import { Check, ChevronDown } from 'lucide-react'
import { Eyebrow } from './primitives'

/** Gemeinsame Bausteine der Unterseiten (/uebungsplaene-verkaufen, /kliniken). Stile in index.css (.unterseite-*). */

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

/** Aufklappbare Fragen. Die Antworten stehen im HTML und sind auch zugeklappt für Suchmaschinen lesbar. */
export function HaeufigeFragen({ fragen }: { fragen: { frage: string; antwort: string }[] }) {
  return (
    <div style={{ maxWidth: 780, marginInline: 'auto' }}>
      <Eyebrow style={{ textAlign: 'center' }}>Fragen</Eyebrow>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <UnterseiteH2>Häufige Fragen</UnterseiteH2>
      </div>
      <div className="unterseite-fragen">
        {fragen.map((f) => (
          <details key={f.frage}>
            <summary>
              <h3>{f.frage}</h3>
              <ChevronDown className="unterseite-pfeil" size={20} strokeWidth={2.4} aria-hidden="true" />
            </summary>
            <p>{f.antwort}</p>
          </details>
        ))}
      </div>
    </div>
  )
}
