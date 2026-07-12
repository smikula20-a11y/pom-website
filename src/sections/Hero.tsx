import { Check } from 'lucide-react'
import { Button } from '../components/Button'
import { Container } from '../components/primitives'
import { HeroFlowVisual } from '../components/HeroFlowVisual'
import { cta, hero } from '../content/site'

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
                fontSize: 13,
                fontWeight: 500,
                color: '#9a9a94',
              }}
            >
              <Check size={15} color="#8BA83A" strokeWidth={2.75} />
              {hero.microcopy}
            </div>
          </div>

          <div className="hero-visual">
            <HeroFlowVisual />
          </div>
        </div>
      </Container>
    </section>
  )
}
