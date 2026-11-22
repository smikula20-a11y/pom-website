import type { ReactNode } from 'react'
import {
  Check,
  ClipboardList,
  FileText,
  Palette,
  Play,
  QrCode,
  ShieldCheck,
  Sparkles,
  Video,
  Wallet,
  X,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '../components/Button'
import { Container, Eyebrow, Reveal } from '../components/primitives'
import { HonorarNote } from '../components/HonorarNote'
import { KnopfPaar } from '../components/KnopfPaar'
import {
  audience,
  features,
  finalCta,
  founder,
  honorar,
  howItWorks,
  problem,
  stimmen,
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
                <p style={{ margin: 0, fontSize: 16, lineHeight: 1.6, color: 'var(--pom-slate-600)' }}>
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
                          fontSize: 11,
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
                  <p style={{ margin: 0, fontSize: 16, lineHeight: 1.6, color: 'var(--pom-slate-600)' }}>
                    {f.body}
                  </p>
                </div>
              </Reveal>
            )
          })}
        </div>
        <Reveal>
          <p
            style={{
              margin: '32px auto 0',
              maxWidth: 760,
              textAlign: 'center',
              fontSize: 15,
              lineHeight: 1.6,
              color: 'var(--pom-slate-600)',
            }}
          >
            <ShieldCheck
              size={18}
              color="var(--pom-olive-hover)"
              strokeWidth={2.2}
              aria-hidden="true"
              style={{ display: 'inline-block', verticalAlign: '-4px', marginRight: 6 }}
            />
            {features.datenschutz.text}{' '}
            <Link
              to={features.datenschutz.link.href}
              style={{ color: 'var(--pom-olive-hover)', fontWeight: 600, whiteSpace: 'nowrap' }}
            >
              {features.datenschutz.link.label} →
            </Link>
          </p>
        </Reveal>
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
                  <p style={{ margin: 0, fontSize: 16, lineHeight: 1.6, color: 'rgba(255,255,255,.85)' }}>
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

/* ---------------- Kundenstimmen (direkt unter dem Kopfbereich) ---------------- */
export function Stimmen() {
  return (
    <section id="stimmen" style={{ background: '#fff', borderBottom: '1px solid #ececec' }}>
      <Container className="stimmen">
        <Eyebrow style={{ marginBottom: 0 }}>{stimmen.eyebrow}</Eyebrow>
        <div className="stimmen-grid">
          {stimmen.liste.map((s) => (
            <figure key={s.name} className="stimme">
              {s.sterne ? (
                <div className="stimme-sterne" role="img" aria-label={`${s.sterne} von 5 Sternen`}>
                  {'★'.repeat(s.sterne)}
                </div>
              ) : null}
              <blockquote>„{s.text}“</blockquote>
              <figcaption className="stimme-fuss">
                <span className="stimme-kuerzel" aria-hidden="true">
                  {s.kuerzel}
                </span>
                <span>
                  <span className="stimme-name">{s.name}</span>
                  <span className="stimme-rolle">
                    {s.rolle}
                    {s.quelle ? (
                      <>
                        {' · '}
                        <a href={s.quelle.href} target="_blank" rel="noopener noreferrer">
                          {s.quelle.label}
                        </a>
                      </>
                    ) : null}
                  </span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
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
          <KnopfPaar mitte aufOlive style={{ marginTop: 32 }} />
          <p className="final-reden">
            {finalCta.reden.frage}{' '}
            <a href={finalCta.reden.telHref}>{finalCta.reden.anrufen}</a> oder{' '}
            <a href={finalCta.reden.whatsappHref} target="_blank" rel="noopener noreferrer">
              {finalCta.reden.whatsapp}
            </a>
            :{' '}
            <a href={finalCta.reden.telHref} className="final-reden__nummer">
              {finalCta.reden.nummer}
            </a>
          </p>
        </Reveal>
      </Container>
    </section>
  )
}
