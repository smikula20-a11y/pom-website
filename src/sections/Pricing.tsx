import { useState } from 'react'
import { Button } from '../components/Button'
import { Container, Eyebrow, Reveal } from '../components/primitives'
import { pricing } from '../content/site'
import type { PricePlan } from '../content/site'

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

      <Button
        href={plan.cta.href}
        variant={plan.cta.variant}
        external={plan.cta.external}
        fullWidth
        uppercase={false}
      >
        {plan.cta.label}
      </Button>
    </div>
  )
}

export function Pricing() {
  // Jahres-Abrechnung als Default (rabattiert, catchy).
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
            <p style={{ marginTop: 12, fontSize: 16, color: 'var(--pom-slate-500)' }}>{pricing.sub}</p>
          </div>
        </Reveal>

        <div className="price-grid" style={{ marginTop: 44 }}>
          {pricing.plans.map((p) => (
            <PlanCard key={p.name} plan={p} yearly={yearly} setYearly={setYearly} />
          ))}
        </div>

        <p style={{ textAlign: 'center', marginTop: 22, fontSize: 12, color: 'var(--pom-slate-400)' }}>
          {pricing.footnote}
        </p>
      </Container>
    </section>
  )
}
