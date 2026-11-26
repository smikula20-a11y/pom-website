import { useState } from 'react'
import { Button } from '../components/Button'
import { Container, Eyebrow, Reveal } from '../components/primitives'
import { pricing } from '../content/site'
import type { PricePlan } from '../content/site'
import { kurz, useKennung } from '../components/kennung'

function PlanCard({
  plan,
  yearly,
  setYearly,
}: {
  plan: PricePlan
  yearly: boolean
  setYearly: (v: boolean) => void
}) {
  const featured = !!plan.featured
  // Kennung an Erstgespräch und Direktkauf (Befund 11): z. B. „preiskarte-pro“.
  const kennung = useKennung()
  const stelle = `preiskarte-${kurz(plan.name)}`

  let amount = plan.price
  let interval = plan.interval
  let note = plan.note
  if (plan.toggle) {
    const t = yearly ? plan.toggle.yearly : plan.toggle.monthly
    amount = t.price
    interval = t.interval
    note = t.note
  }

  return (
    <div className={`price-card${featured ? ' price-card--featured' : ''}`}>
      {plan.badge && (
        <span className={`price-badge ${featured ? 'price-badge--featured' : 'price-badge--limited'}`}>
          {plan.badge}
        </span>
      )}
      {/* Zwei Teile je Karte (Stefan 25.11.2026): oben Inhalt, unten Knöpfe. Über ein gemeinsames
          Raster (subgrid) beginnen die Knöpfe aller drei Karten auf derselben Höhe, auch wenn eine
          Karte nur einen Knopf hat. */}
      <div className={`price-top${plan.hinweis ? ' price-top--hinweis' : ''}`}>
      <div className="price-name">{plan.name}</div>

      {plan.toggle && (
        <div className="price-toggle" role="group" aria-label="Abrechnungszeitraum">
          <button type="button" className={!yearly ? 'active' : ''} onClick={() => setYearly(false)}>
            {pricing.toggleLabels.monthly}
          </button>
          <button type="button" className={yearly ? 'active' : ''} onClick={() => setYearly(true)}>
            {pricing.toggleLabels.yearly}
            {plan.toggle.yearly.save && (
              <span className="price-toggle-badge">{plan.toggle.yearly.save}</span>
            )}
          </button>
        </div>
      )}

      <div>
        <span className="price-amount">{amount}</span>{' '}
        <span className="price-interval">{interval}</span>
      </div>
      <div className="price-note">{note}</div>

      {plan.scarcity && (
        <div className="price-scarcity">
          <span className="price-scarcity__total">{plan.scarcity.total} Plätze</span>
          <span className="price-scarcity__left">Nur noch {plan.scarcity.left} frei</span>
        </div>
      )}

      <hr className="price-hr" />

      <ul className="price-features">
        {plan.features.map((f) => (
          <li key={f.t} className={f.ok ? '' : 'muted'}>
            <span className={f.ok ? 'price-check' : 'price-cross'} aria-hidden="true">
              {f.ok ? '✓' : '✕'}
            </span>
            <span className={f.highlight ? 'price-feat-highlight' : ''}>{f.t}</span>
          </li>
        ))}
      </ul>

      {plan.hinweis && (
        <div className="price-hinweis">
          <strong>{plan.hinweis.titel}</strong>
          <br />
          {plan.hinweis.text}
        </div>
      )}
      </div>

      <div className="price-actions">
        <Button
          href={kennung(plan.cta.href, stelle)}
          variant={plan.cta.variant}
          external={plan.cta.external}
          fullWidth
          uppercase={false}
        >
          {plan.cta.label}
        </Button>
        {plan.cta.zeile && <div className="price-direkt-zeile">{plan.cta.zeile}</div>}

        {plan.direkt && (
          <>
            <Button
              href={kennung(!yearly && plan.direkt.hrefMonatlich ? plan.direkt.hrefMonatlich : plan.direkt.href, stelle)}
              variant="secondary"
              external
              fullWidth
              uppercase={false}
              className="price-direkt"
            >
              {plan.direkt.label}
            </Button>
            <div className="price-direkt-zeile">{plan.direkt.zeile}</div>
          </>
        )}
      </div>
    </div>
  )
}

export function Pricing() {
  // Jahres-Abrechnung als Default; die PRO-Karte zeigt dabei den Preis pro Monat (Stefan 22.11.2026).
  const [yearly, setYearly] = useState(true)
  return (
    <section id="preise" style={{ background: 'var(--pom-stone-bg)' }}>
      <Container className="section">
        <Reveal>
          <div style={{ textAlign: 'center', maxWidth: 620, marginInline: 'auto' }}>
            <Eyebrow style={{ marginBottom: 12 }}>{pricing.eyebrow}</Eyebrow>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(26px, 3.4vw, 34px)',
                fontWeight: 800,
                letterSpacing: '-0.02em',
                lineHeight: 1.2,
                color: '#1a1a1a',
                margin: 0,
              }}
            >
              {pricing.heading}
            </h2>
            <p style={{ marginTop: 12, fontSize: 16, color: 'var(--text-muted)' }}>{pricing.sub}</p>
          </div>
        </Reveal>

        <div className="price-grid" style={{ marginTop: 44 }}>
          {pricing.plans.map((p) => (
            <PlanCard key={p.name} plan={p} yearly={yearly} setYearly={setYearly} />
          ))}
        </div>

        <p style={{ textAlign: 'center', marginTop: 22, fontSize: 13.5, color: 'var(--text-muted)' }}>
          {pricing.footnote.map((zeile, i) => (
            <span key={zeile}>
              {i > 0 && <br />}
              {zeile}
            </span>
          ))}
        </p>
      </Container>
    </section>
  )
}
