import type { ReactNode } from 'react'
import {
  Check,
  FileText,
  Palette,
  QrCode,
  ShieldCheck,
  Sparkles,
  Video,
  Wallet,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '../components/Button'
import { Container, Eyebrow, Reveal } from '../components/primitives'
import { Umsatzrechner } from '../components/Umsatzrechner'
import { KnopfPaar } from '../components/KnopfPaar'
import { kurz, useKennung } from '../components/kennung'
import {
  features,
  finalCta,
  founder,
  honorar,
  problem,
  stimmen,
  tueren,
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
        {/* Am Handy kompakt: Symbol links neben dem Text (Befund 8, 23.11.2026), Stile in index.css (.funktion-karte) */}
        <div className="grid-3 funktionen-raster">
          {features.items.map((f, i) => {
            const Icon = featureIcons[i] ?? Check
            return (
              <Reveal key={f.title} delay={(i % 3) * 0.08}>
                <div className="pom-card-hover funktion-karte">
                  <div className="funktion-karte__kopf">
                    <div className="funktion-karte__symbol">
                      <Icon size={22} color="var(--pom-olive-hover)" strokeWidth={2.2} />
                    </div>
                    {f.pro && <span className="funktion-karte__pro">PRO</span>}
                  </div>
                  <div>
                    <h3 className="pom-h3 funktion-karte__titel">{f.title}</h3>
                    <p className="funktion-karte__text">{f.body}</p>
                  </div>
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

/* ---------------- Und dein Umsatz? (rechts der Umsatzrechner, Befund 9) ---------------- */
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
            <Umsatzrechner />
          </Reveal>
        </div>
      </Container>
    </section>
  )
}

/* ---------------- Für wen: drei Türen (Befund 8, 23.11.2026) ---------------- */
function TuerLink({ href, children }: { href: string; children: ReactNode }) {
  if (href.startsWith('http'))
    return (
      <a className="tuer" href={href} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    )
  if (href.startsWith('#'))
    return (
      <a className="tuer" href={href}>
        {children}
      </a>
    )
  return (
    <Link className="tuer" to={href}>
      {children}
    </Link>
  )
}

export function Tueren() {
  const kennung = useKennung()
  return (
    <section id="fuer-wen" style={{ background: 'var(--pom-stone-bg)' }}>
      <Container className="section">
        <Reveal>
          <Eyebrow>{tueren.eyebrow}</Eyebrow>
          <H2>{tueren.heading}</H2>
        </Reveal>
        <div className="grid-3 tueren-raster">
          {tueren.liste.map((t, i) => (
            <Reveal key={t.titel} delay={i * 0.08}>
              <TuerLink href={kennung(t.link.href, `tuer-${kurz(t.titel)}`)}>
                <h3 className="pom-h3 tuer__titel">{t.titel}</h3>
                <p className="tuer__text">{t.text}</p>
                <span className="tuer__link">
                  {t.link.label} <span aria-hidden="true">{t.link.pfeil}</span>
                </span>
              </TuerLink>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
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
          <KnopfPaar stelle="schluss" mitte aufOlive style={{ marginTop: 32 }} />
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
