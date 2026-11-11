import { Check, ShieldCheck } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '../components/Button'
import { Container } from '../components/primitives'
import { HeroFlowVisual } from '../components/HeroFlowVisual'
import { cta, hero } from '../content/site'

/** Rot-weiß-rote Flagge, klein (wie die Kachel „Made in Austria“ auf /einrichtungen). */
function Flagge() {
  const rot = { flex: 1, background: '#C8102E' }
  return (
    <span aria-hidden="true" style={{ width: 15, height: 10, borderRadius: 2, overflow: 'hidden', border: '1px solid #e2e8f0', display: 'inline-flex', flexDirection: 'column', flexShrink: 0 }}>
      <span style={rot} />
      <span style={{ flex: 1, background: '#fff' }} />
      <span style={rot} />
    </span>
  )
}

/** Vertrauenskarte unter den Knöpfen: DSGVO-konform mit den Belegen dahinter, Klick öffnet den Vertrag. */
function VertrauensKarte() {
  const { titel, punkte, href } = hero.vertrauen
  return (
    <Link
      to={href}
      className="hero-vertrauen"
      style={{
        display: 'flex', alignItems: 'center', gap: 14, marginTop: 18, padding: '12px 18px 12px 12px',
        borderRadius: 16, background: '#fff', border: '1px solid #e7e8e2',
        boxShadow: '0 10px 30px rgba(26,26,26,.06)', textDecoration: 'none', maxWidth: 480,
      }}
    >
      <span style={{ flex: '0 0 42px', height: 42, borderRadius: 12, background: '#8BA83A', display: 'grid', placeItems: 'center' }}>
        <ShieldCheck size={23} color="#fff" strokeWidth={2.4} aria-hidden="true" />
      </span>
      <span style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <span style={{ fontFamily: 'var(--font-display)', fontSize: 17, fontWeight: 800, color: '#1a1a1a' }}>{titel}</span>
        <span style={{ display: 'flex', alignItems: 'center', gap: 6, flexWrap: 'wrap', fontFamily: 'var(--font-sans)', fontSize: 13.5, lineHeight: 1.45, color: '#64748b' }}>
          {punkte.map((p, i) => (
            <span key={p} style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
              {p === 'Made in Austria' && <Flagge />}
              {p}
              {i < punkte.length - 1 && <span aria-hidden="true">·</span>}
            </span>
          ))}
        </span>
      </span>
    </Link>
  )
}

export function Hero() {
  return (
    <section id="top" style={{ background: 'var(--pom-stone-bg)' }}>
      <Container className="section">
        <div className="hero-grid">
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <div className="pom-eyebrow" style={{ color: 'var(--pom-olive)', marginBottom: 20 }}>
              {hero.eyebrow}
            </div>
            <h1
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(34px, 5vw, 54px)',
                fontWeight: 800,
                lineHeight: 1.12,
                letterSpacing: '-0.02em',
                color: '#1a1a1a',
                margin: '0 0 24px',
                textWrap: 'pretty',
              }}
            >
              {hero.headline}
            </h1>
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 19,
                lineHeight: 1.65,
                color: '#71716b',
                margin: '0 0 40px',
                maxWidth: 540,
                textWrap: 'pretty',
              }}
            >
              {hero.subhead}
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
              <Button href={cta.primary.href} variant="primary" size="lg" external>
                {cta.primary.label}
              </Button>
              <Button href={cta.secondary.href} variant="ghost" size="lg" uppercase={false} external>
                {cta.secondary.label}
              </Button>
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                marginTop: 22,
                fontFamily: 'var(--font-sans)',
                fontSize: 14,
                fontWeight: 500,
                color: '#9a9a94',
              }}
            >
              <Check size={15} color="#8BA83A" strokeWidth={2.75} />
              {hero.microcopy}
            </div>
            <VertrauensKarte />
          </div>

          <div className="hero-visual">
            <HeroFlowVisual />
          </div>
        </div>
      </Container>
    </section>
  )
}
