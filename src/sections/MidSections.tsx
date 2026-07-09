import type { ReactNode } from 'react'
import {
  Check,
  ClipboardList,
  FileText,
  Palette,
  Play,
  QrCode,
  Sparkles,
  Video,
  Wallet,
  X,
} from 'lucide-react'
import { Button } from '../components/Button'
import { Container, Eyebrow, Reveal } from '../components/primitives'
import { HonorarNote } from '../components/HonorarNote'
import {
  audience,
  cta,
  features,
  finalCta,
  founder,
  honorar,
  howItWorks,
  problem,
  testimonial,
} from '../content/site'

function H2({ children, onOlive = false }: { children: ReactNode; onOlive?: boolean }) {
  return (
    <h2
      style={{
        fontFamily: 'var(--font-display)',
        fontSize: 'clamp(26px, 3.4vw, 34px)',
        fontWeight: 800,
        letterSpacing: '-0.02em',
        lineHeight: 1.2,
        color: onOlive ? '#fff' : '#1a1a1a',
        margin: 0,
        maxWidth: 620,
        textWrap: 'pretty',
      }}
    >
      {children}
    </h2>
  )
}

const featureIcons = [QrCode, Video, FileText, Sparkles, Wallet, Palette]

/* ---------------- Problem ---------------- */
export function Problem() {
  return (
    <section style={{ background: '#fff' }}>
      <Container className="section">
        <Reveal>
          <Eyebrow tone="muted">{problem.eyebrow}</Eyebrow>
          <H2>{problem.heading}</H2>
        </Reveal>
        <div className="grid-3" style={{ marginTop: 44 }}>
          {problem.bullets.map((b, i) => (
            <Reveal key={b.title} delay={i * 0.08}>
              <div
                style={{
                  background: '#f8f8f6',
                  border: '1px solid var(--pom-stone-300)',
                  borderRadius: 20,
                  padding: '28px 26px',
                  height: '100%',
                }}
              >
                <div
                  style={{
                    display: 'grid',
                    placeItems: 'center',
                    width: 36,
                    height: 36,
                    borderRadius: 10,
                    background: 'var(--pom-olive-a10)',
                    color: 'var(--pom-olive-hover)',
                    fontFamily: 'var(--font-display)',
                    fontSize: 16,
                    fontWeight: 800,
                    letterSpacing: '-0.02em',
                    marginBottom: 16,
                  }}
                >
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 18,
                    fontWeight: 700,
                    letterSpacing: '-0.01em',
                    color: '#1a1a1a',
                    margin: '0 0 8px',
                  }}
                >
                  {b.title}
                </h3>
                <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.6, color: 'var(--pom-slate-600)' }}>
                  {b.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}

/* ---------------- Features ---------------- */
export function Features() {
  return (
    <section id="funktionen" style={{ background: '#fff' }}>
      <Container className="section">
        <Reveal>
          <Eyebrow>{features.eyebrow}</Eyebrow>
          <H2>{features.heading}</H2>
        </Reveal>
        <div className="grid-3" style={{ marginTop: 44 }}>
          {features.items.map((f, i) => {
            const Icon = featureIcons[i] ?? Check
            return (
              <Reveal key={f.title} delay={(i % 3) * 0.08}>
                <div
                  className="pom-card-hover"
                  style={{
                    background: '#f8f8f6',
                    border: '1px solid var(--pom-stone-300)',
                    borderRadius: 24,
                    padding: '28px 26px',
                    height: '100%',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: 16,
                    }}
                  >
                    <div
                      style={{
                        width: 44,
                        height: 44,
                        borderRadius: 12,
                        background: 'var(--pom-olive-a10)',
                        display: 'grid',
                        placeItems: 'center',
                      }}
                    >
                      <Icon size={22} color="var(--pom-olive-hover)" strokeWidth={2.2} />
                    </div>
                    {f.pro && (
                      <span
                        style={{
                          fontFamily: 'var(--font-sans)',
                          fontSize: 10,
                          fontWeight: 900,
                          letterSpacing: '.1em',
                          textTransform: 'uppercase',
                          color: 'var(--pom-olive-hover)',
                          background: 'var(--pom-olive-tint)',
                          border: '1px solid var(--pom-olive-tint-line)',
                          padding: '3px 8px',
                          borderRadius: 999,
                        }}
                      >
                        PRO
                      </span>
                    )}
                  </div>
                  <h3 className="pom-h3" style={{ marginBottom: 8 }}>
                    {f.title}
                  </h3>
                  <p style={{ margin: 0, fontSize: 15, lineHeight: 1.6, color: 'var(--pom-slate-600)' }}>
                    {f.body}
                  </p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </Container>
    </section>
  )
}

/* ---------------- So funktioniert's (Olive-Band) ---------------- */
const stepIcons = [ClipboardList, QrCode, Play]
export function HowItWorks() {
  return (
    <section id="so-funktionierts" className="pom-band-olive">
      <Container className="section">
        <div className="pom-band-eyebrow" style={{ marginBottom: 14 }}>
          {howItWorks.eyebrow}
        </div>
        <H2 onOlive>{howItWorks.heading}</H2>
        <div className="grid-3" style={{ marginTop: 52 }}>
          {howItWorks.steps.map((s, i) => {
            const Icon = stepIcons[i] ?? ClipboardList
            return (
              <Reveal key={s.n} delay={i * 0.1}>
                <div
                  style={{
                    background: 'rgba(255,255,255,.12)',
                    border: '1px solid rgba(255,255,255,.22)',
                    borderRadius: 24,
                    padding: '32px 28px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 14,
                    height: '100%',
                  }}
                >
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: 10,
                      background: 'rgba(255,255,255,.92)',
                      display: 'grid',
                      placeItems: 'center',
                    }}
                  >
                    <Icon size={20} color="var(--pom-olive-hover)" strokeWidth={2.5} />
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 19,
                      fontWeight: 700,
                      letterSpacing: '-0.01em',
                      color: '#fff',
                    }}
                  >
                    {s.n} · {s.title}
                  </div>
                  <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.6, color: 'rgba(255,255,255,.85)' }}>
                    {s.body}
                  </p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </Container>
    </section>
  )
}

/* ---------------- Honorarnote ---------------- */
export function Honorar() {
  return (
    <section style={{ background: '#fff' }}>
      <Container className="section">
        <div className="split">
          <Reveal>
            <Eyebrow>{honorar.eyebrow}</Eyebrow>
            <H2>{honorar.heading}</H2>
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 17,
                lineHeight: 1.65,
                color: 'var(--pom-slate-500)',
                margin: '20px 0 32px',
                maxWidth: 500,
                textWrap: 'pretty',
              }}
            >
              {honorar.body}
            </p>
            <Button href={honorar.cta.href} variant="secondary">
              {honorar.cta.label}
            </Button>
          </Reveal>
          <Reveal delay={0.1}>
            <HonorarNote />
          </Reveal>
        </div>
      </Container>
    </section>
  )
}

/* ---------------- Für wen / nicht für wen ---------------- */
export function Audience() {
  return (
    <section id="fuer-wen" style={{ background: 'var(--pom-stone-bg)' }}>
      <Container className="section">
        <Reveal>
          <Eyebrow>{audience.eyebrow}</Eyebrow>
          <H2>{audience.heading}</H2>
        </Reveal>
        <div className="grid-2" style={{ marginTop: 44 }}>
          <Reveal>
            <AudienceCard heading={audience.fitHeading} items={audience.fit} kind="fit" />
          </Reveal>
          <Reveal delay={0.08}>
            <AudienceCard heading={audience.notHeading} items={audience.not} kind="not" />
          </Reveal>
        </div>
      </Container>
    </section>
  )
}

function AudienceCard({
  heading,
  items,
  kind,
}: {
  heading: string
  items: readonly string[]
  kind: 'fit' | 'not'
}) {
  const fit = kind === 'fit'
  return (
    <div
      style={{
        background: '#fff',
        border: `1px solid ${fit ? 'var(--pom-olive-tint-line)' : 'var(--pom-stone-300)'}`,
        borderRadius: 24,
        padding: '32px 30px',
        height: '100%',
      }}
    >
      <h3 className="pom-h3" style={{ marginBottom: 20 }}>
        {heading}
      </h3>
      <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 14 }}>
        {items.map((it) => (
          <li key={it} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
            <span
              style={{
                flex: 'none',
                width: 22,
                height: 22,
                borderRadius: 999,
                display: 'grid',
                placeItems: 'center',
                marginTop: 1,
                background: fit ? 'var(--pom-olive)' : 'var(--pom-stone-200)',
              }}
            >
              {fit ? (
                <Check size={13} color="#fff" strokeWidth={3} />
              ) : (
                <X size={13} color="var(--pom-stone-600)" strokeWidth={3} />
              )}
            </span>
            <span style={{ fontSize: 16, lineHeight: 1.55, color: 'var(--pom-slate-600)' }}>{it}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

/* ---------------- Social Proof ---------------- */
export function SocialProof() {
  return (
    <section style={{ background: '#fff' }}>
      <Container className="section" style={{ maxWidth: 820, textAlign: 'center' }}>
        <Reveal>
          <Eyebrow>{testimonial.eyebrow}</Eyebrow>
          <blockquote
            style={{
              margin: '10px 0 0',
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(22px, 2.8vw, 30px)',
              fontWeight: 700,
              lineHeight: 1.35,
              letterSpacing: '-0.02em',
              color: '#1a1a1a',
              textWrap: 'pretty',
            }}
          >
            „{testimonial.quote}"
          </blockquote>
          <p
            style={{
              margin: '26px auto 0',
              maxWidth: 560,
              fontFamily: 'var(--font-sans)',
              fontSize: 15.5,
              lineHeight: 1.7,
              color: 'var(--pom-slate-500)',
              textWrap: 'pretty',
            }}
          >
            {testimonial.support}
          </p>
          <div style={{ marginTop: 28, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 14 }}>
            <div
              style={{
                width: 48,
                height: 48,
                borderRadius: 999,
                background: 'var(--pom-olive)',
                color: '#fff',
                display: 'grid',
                placeItems: 'center',
                fontFamily: 'var(--font-display)',
                fontWeight: 800,
                fontSize: 17,
                flex: 'none',
              }}
            >
              SA
            </div>
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: '#1a1a1a' }}>
                {testimonial.name}
              </div>
              <div style={{ fontSize: 13, color: 'var(--pom-stone-500)', fontWeight: 500 }}>
                {testimonial.role}
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}

/* ---------------- Gründer ---------------- */
export function Founder() {
  return (
    <section id="gruender" style={{ background: 'var(--pom-stone-bg)' }}>
      <Container className="section" style={{ maxWidth: 820 }}>
        <Reveal>
          <Eyebrow>{founder.eyebrow}</Eyebrow>
          <H2>{founder.heading}</H2>
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 18,
              lineHeight: 1.7,
              color: 'var(--pom-slate-600)',
              margin: '20px 0 0',
              textWrap: 'pretty',
            }}
          >
            {founder.paragraph}
          </p>
          <p style={{ marginTop: 16, fontWeight: 600, color: '#1a1a1a' }}>{founder.signature}</p>

          <div style={{ marginTop: 28 }}>
            <div className="pom-eyebrow" style={{ color: 'var(--pom-stone-500)', marginBottom: 14 }}>
              {founder.pressLabel}
            </div>
            <div className="press-bar">
              {founder.press.map((p) =>
                p.href ? (
                  <a
                    key={p.label}
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="press-item"
                  >
                    {p.label}
                  </a>
                ) : (
                  <span key={p.label} className="press-item">
                    {p.label}
                  </span>
                ),
              )}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}

/* ---------------- Final-CTA (Olive-Band) ---------------- */
export function FinalCta() {
  return (
    <section id="final-cta" className="pom-band-olive-gradient">
      <Container className="section" style={{ maxWidth: 760, textAlign: 'center' }}>
        <Reveal>
          <div className="pom-band-eyebrow" style={{ marginBottom: 16 }}>
            {finalCta.eyebrow}
          </div>
          <H2 onOlive>{finalCta.heading}</H2>
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 17,
              lineHeight: 1.6,
              color: 'rgba(255,255,255,.9)',
              margin: '20px auto 0',
              maxWidth: 560,
              textWrap: 'pretty',
            }}
          >
            {finalCta.transparency}
          </p>
          <div
            style={{
              display: 'flex',
              gap: 16,
              justifyContent: 'center',
              flexWrap: 'wrap',
              marginTop: 32,
            }}
          >
            <Button href={cta.primary.href} variant="white" size="lg" external>
              {cta.primary.label}
            </Button>
            <Button href={cta.secondary.href} variant="secondary" size="lg" uppercase={false} external
              className="btn-on-olive">
              {cta.secondary.label}
            </Button>
          </div>
          <p style={{ marginTop: 18, fontSize: 13, color: 'rgba(255,255,255,.75)', fontWeight: 500 }}>
            {finalCta.note}
          </p>
        </Reveal>
      </Container>
    </section>
  )
}
