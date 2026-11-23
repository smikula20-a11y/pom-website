import { useId, useState } from 'react'
import { honorar } from '../content/site'

/** Tausenderpunkt wie im restlichen Text der Website („1.794 €“). toLocaleString('de-AT')
 *  setzt ein Leerzeichen statt des Punkts. */
const euro = (n: number) => `${String(n).replace(/\B(?=(\d{3})+(?!\d))/g, '.')} €`

/**
 * Umsatzrechner (Startseite „Und dein Umsatz?“, Website-Audit Befund 9, Stefan 23.11.2026).
 * Reine Rechnung mit den Werten der Besucher:in: Pläne pro Woche mal Preis. Rechnet nur den
 * Umsatz der Praxis, keine Aussage über Patient:innen.
 */
export function Umsatzrechner() {
  const r = honorar.rechner
  const id = useId()
  const [plaene, setPlaene] = useState<number>(r.plaene.start)
  const [preis, setPreis] = useState<number>(r.preis.start)

  const monat = plaene * preis * r.wochenProMonat
  const jahr = plaene * preis * r.arbeitswochenProJahr
  const noetig = Math.ceil(r.proPreisMonat / preis)

  return (
    <div className="rechner" data-nosnippet="">
      <div className="pom-eyebrow rechner__eyebrow">{r.eyebrow}</div>
      <h3 className="rechner__titel">{r.titel}</h3>

      <label className="rechner__label" htmlFor={`${id}-plaene`}>
        {r.plaene.label}
        <span className="rechner__wert">{plaene}</span>
      </label>
      <input
        id={`${id}-plaene`}
        className="rechner__regler"
        type="range"
        min={r.plaene.min}
        max={r.plaene.max}
        step={1}
        value={plaene}
        onChange={(e) => setPlaene(Number(e.target.value))}
      />

      <label className="rechner__label" htmlFor={`${id}-preis`}>
        {r.preis.label}
        <span className="rechner__wert">{preis} €</span>
      </label>
      <input
        id={`${id}-preis`}
        className="rechner__regler"
        type="range"
        min={r.preis.min}
        max={r.preis.max}
        step={1}
        value={preis}
        aria-valuetext={`${preis} €`}
        onChange={(e) => setPreis(Number(e.target.value))}
      />

      <div className="rechner__ergebnis" aria-live="polite">
        <div className="rechner__zeile">
          <span>{r.monat}</span>
          <b>{euro(monat)}</b>
        </div>
        <div className="rechner__zeile">
          <span>{r.jahr}</span>
          <b>{euro(jahr)}</b>
        </div>
      </div>

      <p className="rechner__pro">
        PRO kostet {r.proPreisMonat} € im Monat. Bei diesem Preis ist das mit {noetig}{' '}
        {noetig === 1 ? 'verkauften Plan' : 'verkauften Plänen'} im Monat bezahlt.
      </p>
      <p className="rechner__fein">{r.kleingedruckt}</p>
    </div>
  )
}
