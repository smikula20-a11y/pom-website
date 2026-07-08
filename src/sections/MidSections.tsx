import type { CSSProperties, ReactNode } from 'react'
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
  demo,
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

/* ---------------- Demo ---------------- */
export function DemoEmbed() {
  return (
    <section id="demo" style={{ background: '#fff' }}>
      <Container className="section">
        <Reveal>
          <Eyebrow>{demo.eyebrow}</Eyebrow>
          <H2>{demo.heading}</H2>
          <div
            style={{
              marginTop: 36,
              borderRadius: 24,
              overflow: 'hidden',
              boxShadow: 'var(--shadow-xl)',
              border: '1px solid var(--pom-stone-300)',
              background: '#000',
              aspectRatio: '16 / 9',
            }}
          >
            <iframe
              src={demo.src}
              title="Place of Motion — Produkt-Demo"
              loading="lazy"
              allow="fullscreen; autoplay; picture-in-picture"
              style={{ width: '100%', height: '100%', border: 0, display: 'block' }}
            />
          </div>
          <p style={{ marginTop: 14, fontSize: 13, color: 'var(--pom-stone-500)', fontWeight: 500 }}>
            {demo.caption}
          </p>
        </Reveal>
      </Container>
    </section>
  )
}

/* ---------------- Problem ---------------- */
export function Problem() {
  return (
    <section style={{ background: 'var(--pom-stone-bg)' }}>
      <Container className="section">
        <Reveal>
          <Eyebrow>{problem.eyebrow}</Eyebrow>
          <H2>{problem.heading}</H2>
        </Reveal>
        <div className="grid-3" style={{ marginTop: 44 }}>
          {problem.bullets.map((b, i) => (
            <Reveal key={b} delay={i * 0.08}>
              <div
                style={{
                  background: '#fff',
                  border: '1px solid var(--pom-stone-300)',
                  borderRadius: 20,
                  padding: '28px 26px',
                  height: '100%',
                }}
              >
                <div
                  style={{
                    width: 34,
                    height: 34,
                    borderRadius: 10,
                    background: 'var(--pom-olive-a10)',
                    display: 'grid',
                    placeItems: 'center',
                    marginBottom: 16,
                  }}
                >
                  <X size={18} color="var(--pom-olive-hover)" strokeWidth={2.5} />
                </div>
                <p style={{ margin: 0, fontSize: 16, lineHeight: 1.6, color: 'var(--pom-slate-600)' }}>
                  {b}
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
                    background: 'var(--pom-surface)',
                    border: '1px solid var(--pom-stone-300)',
                    borderRadius: 20,
                    padding: '26px 24px',
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
      <Container className="section" style={{ maxWidth: 860 }}>
        <Reveal>
          <Eyebrow>{testimonial.eyebrow}</Eyebrow>
          <blockquote
            style={{
              margin: '18px 0 0',
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(20px, 2.6vw, 26px)',
              fontWeight: 600,
              lineHeight: 1.45,
              letterSpacing: '-0.01em',
              color: '#1a1a1a',
              textWrap: 'pretty',
            }}
          >
            „{testimonial.quote}"
          </blockquote>
          <div style={{ marginTop: 24, display: 'flex', alignItems: 'center', gap: 14 }}>
            <div
              style={{
                width: 46,
                height: 46,
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
            <div>
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
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
              {founder.press.map((p) => {
                const label = p.year ? `${p.label} · ${p.year}` : p.label
                const chipStyle: CSSProperties = {
                  fontFamily: 'var(--font-sans)',
                  fontSize: 13,
                  fontWeight: 600,
                  color: 'var(--pom-slate-600)',
                  background: '#fff',
                  border: '1px solid var(--pom-stone-300)',
                  padding: '8px 14px',
                  borderRadius: 999,
                }
                return p.href ? (
                  <a
                    key={p.label}
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={chipStyle}
                  >
                    {label}
                  </a>
                ) : (
                  <span key={p.label} style={chipStyle}>
                    {label}
                  </span>
                )
              })}
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
