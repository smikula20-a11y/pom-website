import { useState } from 'react'
import { Container } from './primitives'
import { demo } from '../content/site'

/**
 * FlowLoop - „Produkt in Aktion" als getaktete CSS-Sequenz (7s-Loop) statt
 * Live-iframe: Editor → QR → Phone → „Verkauft"-Honorarnote. Look 1:1 aus dem
 * Claude-Design-Handoff (Option 3a, Sektion 4).
 *
 * Desktop: horizontale Reihe mit gestrichelten Konnektoren + wanderndem Punkt.
 * Mobile (<880px): vertikaler Stack (siehe .flow-* in index.css) - die
 * transform-basierten Animationen laufen weiter, nur die Punkte entfallen.
 * Reduced-Motion: alles im Endzustand eingefroren (index.css).
 *
 * Die echte Demo (iframe) lädt erst bei Klick auf die Facade.
 */

function Play({ size = 8, color = '#9a9a94' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} aria-hidden="true">
      <path d="M8 5v14l11-7z" />
    </svg>
  )
}

function EditorRow({
  n,
  title,
  meta,
  active = false,
}: {
  n: number
  title: string
  meta: string
  active?: boolean
}) {
  return (
    <div
      className={active ? 'flow-anim flow-row' : undefined}
      style={{
        background: '#fff',
        border: active ? '1.5px solid rgba(139,168,58,.55)' : '1px solid #eceae4',
        borderRadius: 10,
        padding: '8px 9px',
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        boxShadow: active ? '0 4px 12px rgba(139,168,58,.16)' : undefined,
      }}
    >
      <span
        style={{
          width: 15,
          height: 15,
          borderRadius: 999,
          background: active ? '#8BA83A' : '#f0f0ed',
          color: active ? '#fff' : '#71716b',
          display: 'grid',
          placeItems: 'center',
          fontFamily: 'var(--font-display)',
          fontSize: 8.5,
          fontWeight: 800,
          flex: 'none',
        }}
      >
        {n}
      </span>
      <div
        style={{
          width: 30,
          height: 24,
          borderRadius: 5,
          background: active ? 'rgba(139,168,58,.16)' : '#e8e8e4',
          flex: 'none',
          display: 'grid',
          placeItems: 'center',
        }}
      >
        <Play color={active ? '#6b8429' : '#9a9a94'} />
      </div>
      <div style={{ minWidth: 0 }}>
        <div
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 10,
            fontWeight: 700,
            color: '#1a1a1a',
            lineHeight: 1.15,
          }}
        >
          {title}
        </div>
        <div
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 8.5,
            fontWeight: 600,
            color: active ? '#6b8429' : '#8BA83A',
            marginTop: 2,
          }}
        >
          {meta}
        </div>
      </div>
    </div>
  )
}

function Connector({ dot }: { dot: 1 | 2 }) {
  return (
    <div className="flow-connector">
      <span className="flow-connector__line" />
      <svg className="flow-connector__arrow" width="9" height="11" viewBox="0 0 9 11" aria-hidden="true">
        <path d="M0 0 L9 5.5 L0 11 Z" fill="#8BA83A" />
      </svg>
      <span className={`flow-anim flow-dot flow-dot--${dot}`} />
    </div>
  )
}

export function FlowLoop() {
  const [demoOpen, setDemoOpen] = useState(false)

  return (
    <section id="demo" style={{ background: '#eceae4' }}>
      <Container className="section">
        <div
          style={{
            background: '#fff',
            border: '1px solid #e5e5e0',
            borderRadius: 24,
            boxShadow: '0 24px 60px rgba(26,26,26,.10)',
            padding: '42px 48px 38px',
          }}
          className="flow-card"
        >
          {/* Head */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: 34,
              gap: 12,
            }}
          >
            <div className="pom-eyebrow" style={{ color: '#8BA83A' }}>
              {demo.eyebrow}
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 6,
                fontFamily: 'var(--font-sans)',
                fontSize: 11,
                fontWeight: 600,
                color: '#9a9a94',
              }}
            >
              <span style={{ width: 7, height: 7, borderRadius: 999, background: '#8BA83A' }} />
              {demo.indicator}
            </div>
          </div>

          {/* Track */}
          <div className="flow-track">
            {/* Station 1 - Editor */}
            <div className="flow-station flow-editor">
              <div
                style={{
                  background: '#fff',
                  padding: '11px 14px 10px',
                  borderBottom: '1px solid #eceae4',
                  display: 'flex',
                  alignItems: 'flex-end',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <div
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 14,
                      fontWeight: 800,
                      letterSpacing: '-0.01em',
                      color: '#1a1a1a',
                      lineHeight: 1,
                    }}
                  >
                    Mein Plan
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: 8.5,
                      fontWeight: 500,
                      color: '#9a9a94',
                      marginTop: 3,
                    }}
                  >
                    Aufbau &amp; Vorschau
                  </div>
                </div>
                <span
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: 8.5,
                    fontWeight: 900,
                    textTransform: 'uppercase',
                    letterSpacing: '.12em',
                    color: '#8BA83A',
                  }}
                >
                  Editor
                </span>
              </div>
              <div style={{ padding: '11px 11px 13px', display: 'flex', flexDirection: 'column', gap: 8 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '0 2px 2px' }}>
                  <span
                    style={{
                      width: 18,
                      height: 18,
                      borderRadius: 6,
                      background: '#8BA83A',
                      color: '#fff',
                      display: 'grid',
                      placeItems: 'center',
                      fontFamily: 'var(--font-display)',
                      fontSize: 10,
                      fontWeight: 800,
                      flex: 'none',
                    }}
                  >
                    1
                  </span>
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: 12, fontWeight: 800, color: '#1a1a1a' }}>
                    Tag 1
                  </span>
                  <span style={{ fontFamily: 'var(--font-sans)', fontSize: 9, fontWeight: 500, color: '#9a9a94' }}>
                    3 Übungen
                  </span>
                </div>
                <EditorRow n={1} title="Latzug mit Theraband" meta="3×10-15" />
                <EditorRow n={2} title="Seitheben mit Kurzhanteln" meta="3×10-15" />
                <EditorRow n={3} title="Vorgebeugtes Y-Heben" meta="frisch hinzugefügt" active />
              </div>
            </div>

            <Connector dot={1} />

            {/* Station 2 - QR */}
            <div style={{ flex: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 11 }}>
              <div
                style={{
                  position: 'relative',
                  width: 124,
                  height: 124,
                  background: '#fff',
                  border: '1px solid #e5e5e0',
                  borderRadius: 16,
                  boxShadow: '0 8px 24px rgba(26,26,26,.08)',
                  padding: 12,
                  overflow: 'hidden',
                }}
              >
                <svg
                  viewBox="0 0 100 100"
                  preserveAspectRatio="xMidYMid meet"
                  style={{ display: 'block', width: '100%', height: '100%' }}
                  aria-hidden="true"
                >
                  <rect x="6" y="6" width="26" height="26" rx="4" fill="#1a1a1a" />
                  <rect x="11" y="11" width="16" height="16" rx="2" fill="#fff" />
                  <rect x="15" y="15" width="8" height="8" rx="1" fill="#1a1a1a" />
                  <rect x="68" y="6" width="26" height="26" rx="4" fill="#1a1a1a" />
                  <rect x="73" y="11" width="16" height="16" rx="2" fill="#fff" />
                  <rect x="77" y="15" width="8" height="8" rx="1" fill="#1a1a1a" />
                  <rect x="6" y="68" width="26" height="26" rx="4" fill="#1a1a1a" />
                  <rect x="11" y="73" width="16" height="16" rx="2" fill="#fff" />
                  <rect x="15" y="77" width="8" height="8" rx="1" fill="#1a1a1a" />
                  <g fill="#1a1a1a">
                    <rect x="40" y="8" width="6" height="6" />
                    <rect x="52" y="8" width="6" height="6" />
                    <rect x="40" y="20" width="6" height="6" />
                    <rect x="60" y="20" width="6" height="6" />
                    <rect x="8" y="40" width="6" height="6" />
                    <rect x="20" y="40" width="6" height="6" />
                    <rect x="40" y="40" width="6" height="6" />
                    <rect x="52" y="40" width="6" height="6" />
                    <rect x="64" y="40" width="6" height="6" />
                    <rect x="80" y="40" width="6" height="6" />
                    <rect x="88" y="52" width="6" height="6" />
                    <rect x="40" y="52" width="6" height="6" />
                    <rect x="52" y="60" width="6" height="6" />
                    <rect x="64" y="52" width="6" height="6" />
                    <rect x="40" y="64" width="6" height="6" />
                    <rect x="52" y="76" width="6" height="6" />
                    <rect x="64" y="80" width="6" height="6" />
                    <rect x="76" y="64" width="6" height="6" />
                    <rect x="88" y="76" width="6" height="6" />
                    <rect x="76" y="88" width="6" height="6" />
                  </g>
                </svg>
                <span className="flow-anim flow-scan" />
              </div>
              <span style={{ fontFamily: 'var(--font-sans)', fontSize: 11, fontWeight: 600, color: '#71716b' }}>
                Scannen - kein Login
              </span>
            </div>

            <Connector dot={2} />

            {/* Station 3 - Phone */}
            <div
              className="flow-phone"
              style={{
                flex: 'none',
                width: 172,
                background: '#fff',
                borderRadius: 22,
                boxShadow: '0 0 0 1px rgba(0,0,0,.06),0 14px 36px rgba(26,26,26,.16)',
                overflow: 'hidden',
              }}
            >
              <div style={{ background: 'linear-gradient(135deg,#1a1a1a,#2a2a2a)', padding: '12px 12px 11px', color: '#fff' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                  <div
                    style={{
                      width: 26,
                      height: 26,
                      borderRadius: 7,
                      background: 'rgba(139,168,58,.28)',
                      border: '1.5px dashed rgba(255,255,255,.5)',
                      display: 'grid',
                      placeItems: 'center',
                      flex: 'none',
                      fontFamily: 'var(--font-display)',
                      fontSize: 10,
                      fontWeight: 800,
                      color: '#fff',
                    }}
                  >
                    DP
                  </div>
                  <div style={{ whiteSpace: 'nowrap' }}>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: 11, fontWeight: 800, letterSpacing: '-0.01em', lineHeight: 1.2 }}>
                      Deine Praxis
                    </div>
                    <div style={{ fontFamily: 'var(--font-sans)', fontSize: 7.5, fontWeight: 500, color: 'rgba(255,255,255,.6)' }}>
                      Physiotherapie
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: 7,
                    fontWeight: 900,
                    textTransform: 'uppercase',
                    letterSpacing: '.14em',
                    color: 'rgba(255,255,255,.55)',
                  }}
                >
                  Dein Trainingsplan
                </div>
              </div>
              <div style={{ display: 'flex', gap: 5, padding: '9px 11px 3px' }}>
                <span style={{ fontFamily: 'var(--font-sans)', fontSize: 8, fontWeight: 700, padding: '4px 8px', borderRadius: 999, background: '#8BA83A', color: '#fff' }}>
                  Tag 1
                </span>
                <span style={{ fontFamily: 'var(--font-sans)', fontSize: 8, fontWeight: 600, padding: '4px 8px', borderRadius: 999, background: '#f0f0ed', color: '#71716b' }}>
                  Tag 2
                </span>
              </div>
              <div style={{ padding: '6px 11px 12px' }}>
                <div className="flow-anim flow-pop" style={{ border: '1.5px solid #e5e5e0', borderRadius: 12, overflow: 'hidden' }}>
                  <div style={{ aspectRatio: '16 / 9', overflow: 'hidden' }}>
                    <img
                      src="/exercise-thumb.jpg"
                      alt="Übungsvideo - Vorgebeugtes Y-Heben"
                      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                    />
                  </div>
                  <div style={{ padding: '8px 10px' }}>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: 10, fontWeight: 700, color: '#1a1a1a' }}>
                      Vorgebeugtes Y-Heben
                    </div>
                    <div style={{ fontFamily: 'var(--font-sans)', fontSize: 8, color: '#9a9a94', marginTop: 2 }}>
                      3×10-15 · Stand
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Payoff - Honorarnote fährt am Ende hoch */}
            <div className="flow-anim flow-note">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 11 }}>
                <span
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: 8.5,
                    fontWeight: 900,
                    textTransform: 'uppercase',
                    letterSpacing: '.14em',
                    color: '#94a3b8',
                  }}
                >
                  Honorarnote
                </span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 9, color: '#cbd5e1' }}>HN-0142</span>
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  fontFamily: 'var(--font-sans)',
                  fontSize: 11,
                  color: '#475569',
                  paddingBottom: 9,
                  borderBottom: '1px solid #f1f5f9',
                }}
              >
                <span>Plan „Rücken aktiv"</span>
                <span style={{ fontWeight: 600, color: '#1a1a1a' }}>39 €</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginTop: 10 }}>
                <span
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: 8.5,
                    fontWeight: 900,
                    textTransform: 'uppercase',
                    letterSpacing: '.14em',
                    color: '#94a3b8',
                  }}
                >
                  Summe
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 19,
                    fontWeight: 900,
                    letterSpacing: '-0.02em',
                    color: '#1a1a1a',
                  }}
                >
                  39,00 €
                </span>
              </div>
              <span className="flow-anim flow-stamp">Verkauft</span>
            </div>
          </div>

          {/* Schritt-Legende */}
          <div className="flow-legend">
            {demo.legend.map((label, i) => {
              const last = i === demo.legend.length - 1
              return (
                <div key={label} style={{ display: 'contents' }}>
                  {i > 0 && <span style={{ color: '#d4d4ce' }}>→</span>}
                  <span
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: 12.5,
                      color: last ? '#1a1a1a' : '#71716b',
                      fontWeight: last ? 600 : 400,
                    }}
                  >
                    <strong
                      style={{
                        fontFamily: 'var(--font-display)',
                        color: last ? '#059669' : '#8BA83A',
                        fontWeight: 800,
                      }}
                    >
                      {last ? '€' : i + 1}
                    </strong>{' '}
                    {label}
                  </span>
                </div>
              )
            })}
          </div>
        </div>

        {/* Demo-Facade - nur auf Mobile: die echte Smartphone-Demo lädt erst
            bei Klick; auf Desktop ausgeblendet (.flow-facade in index.css),
            weil ein Handy-Mockup am Laptop wenig Mehrwert bringt. */}
        <div className="flow-facade">
          {demoOpen ? (
          <div
            style={{
              marginTop: 18,
              borderRadius: 24,
              overflow: 'hidden',
              boxShadow: 'var(--shadow-xl)',
              border: '1px solid #e5e5e0',
              background: '#000',
              aspectRatio: '16 / 9',
            }}
          >
            <iframe
              src={demo.src}
              title={demo.title}
              loading="lazy"
              allow="fullscreen; autoplay; picture-in-picture"
              style={{ width: '100%', height: '100%', border: 0, display: 'block' }}
            />
          </div>
        ) : (
          <div style={{ textAlign: 'center', marginTop: 18, fontFamily: 'var(--font-sans)', fontSize: 13, color: '#9a9a94' }}>
            {demo.facade.lead}{' '}
            <button
              type="button"
              onClick={() => setDemoOpen(true)}
              style={{
                background: 'none',
                border: 'none',
                padding: 0,
                cursor: 'pointer',
                font: 'inherit',
                color: '#6b8429',
                fontWeight: 600,
              }}
            >
              {demo.facade.cta} →
            </button>
          </div>
          )}
        </div>
      </Container>
    </section>
  )
}
