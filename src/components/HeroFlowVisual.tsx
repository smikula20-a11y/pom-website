/**
 * HeroFlowVisual — statischer Nachbau der POM-Patienten-Ansicht (Phone-Mock).
 * Verifiziert gegen das App-Repo place-of-motion (QRPlanView/PatientPlanView),
 * Look aus dem Claude-Design-Handoff. Kein Supabase/Vimeo — rein statisch.
 */

function PlayTriangle({ size = 16, color = '#1a1a1a' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} aria-hidden="true">
      <path d="M8 5v14l11-7z" />
    </svg>
  )
}

export function HeroFlowVisual() {
  return (
    <div style={{ position: 'relative', justifySelf: 'start' }}>
      <div
        style={{
          width: 300,
          maxWidth: '100%',
          background: '#fff',
          borderRadius: 32,
          boxShadow: 'var(--shadow-frame)',
          overflow: 'hidden',
        }}
      >
        {/* Dark header */}
        <div
          style={{
            background: 'linear-gradient(135deg,#1a1a1a,#2a2a2a)',
            padding: '20px 20px 18px',
            color: '#fff',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 11, marginBottom: 14 }}>
            <div
              style={{
                width: 38,
                height: 38,
                borderRadius: 11,
                background: 'rgba(139,168,58,.25)',
                border: '1.5px dashed rgba(255,255,255,.45)',
                display: 'grid',
                placeItems: 'center',
                flex: 'none',
                fontFamily: 'var(--font-display)',
                fontSize: 14,
                fontWeight: 800,
                color: '#fff',
              }}
            >
              DP
            </div>
            <div style={{ whiteSpace: 'nowrap' }}>
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 16,
                  fontWeight: 800,
                  letterSpacing: '-0.01em',
                  lineHeight: 1.2,
                }}
              >
                Deine Praxis
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: 11,
                  fontWeight: 500,
                  color: 'rgba(255,255,255,.6)',
                }}
              >
                Physiotherapie
              </div>
            </div>
          </div>
          <div
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 10,
              fontWeight: 900,
              textTransform: 'uppercase',
              letterSpacing: '.14em',
              color: 'rgba(255,255,255,.55)',
            }}
          >
            Dein Trainingsplan
          </div>
        </div>

        {/* Tag tabs */}
        <div style={{ display: 'flex', gap: 6, padding: '14px 16px 4px' }}>
          <span
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 11,
              fontWeight: 700,
              padding: '6px 13px',
              borderRadius: 999,
              background: '#8BA83A',
              color: '#fff',
              boxShadow: '0 4px 10px rgba(139,168,58,.35)',
            }}
          >
            Tag 1
          </span>
          {['Tag 2', 'Tag 3'].map((t) => (
            <span
              key={t}
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 11,
                fontWeight: 600,
                padding: '6px 13px',
                borderRadius: 999,
                background: '#f0f0ed',
                color: '#71716b',
              }}
            >
              {t}
            </span>
          ))}
        </div>

        {/* Exercise cards */}
        <div style={{ padding: '12px 16px 20px', display: 'flex', flexDirection: 'column', gap: 10 }}>
          <div style={{ border: '1.5px solid #e5e5e0', borderRadius: 18, overflow: 'hidden' }}>
            <div
              style={{
                aspectRatio: '16 / 9',
                background: '#e8e8e4',
                display: 'grid',
                placeItems: 'center',
                position: 'relative',
              }}
            >
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 999,
                  background: 'rgba(255,255,255,.92)',
                  display: 'grid',
                  placeItems: 'center',
                  boxShadow: '0 4px 12px rgba(0,0,0,.12)',
                }}
              >
                <PlayTriangle />
              </div>
              <span
                style={{
                  position: 'absolute',
                  left: 10,
                  top: 10,
                  fontFamily: 'var(--font-sans)',
                  fontSize: 9,
                  fontWeight: 900,
                  textTransform: 'uppercase',
                  letterSpacing: '.1em',
                  background: 'rgba(255,255,255,.9)',
                  color: '#1a1a1a',
                  padding: '4px 8px',
                  borderRadius: 999,
                }}
              >
                Video
              </span>
            </div>
            <div style={{ padding: '12px 14px' }}>
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 14,
                  fontWeight: 700,
                  color: '#1a1a1a',
                }}
              >
                Brücke mit Ausstrecken
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: 11.5,
                  fontWeight: 500,
                  color: '#9a9a94',
                  marginTop: 3,
                }}
              >
                3×10-12 · Rückenlage
              </div>
            </div>
          </div>

          <div
            style={{
              border: '1.5px solid #e5e5e0',
              borderRadius: 18,
              padding: '12px 14px',
              display: 'flex',
              alignItems: 'center',
              gap: 10,
            }}
          >
            <div style={{ width: 44, height: 32, borderRadius: 8, background: '#e8e8e4', flex: 'none' }} />
            <div>
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 13,
                  fontWeight: 700,
                  color: '#1a1a1a',
                }}
              >
                Wandrutschen
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: 11,
                  fontWeight: 500,
                  color: '#9a9a94',
                }}
              >
                3×8 · Stand
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* „Dein Logo. Dein Name." annotation (hidden on narrow screens) */}
      <div className="hero-annotation">
        <svg width="38" height="34" viewBox="0 0 38 34" fill="none" aria-hidden="true" style={{ flex: 'none', marginTop: 14 }}>
          <path d="M35 3 C26 16 18 24 6 28" stroke="#8BA83A" strokeWidth="2.25" strokeLinecap="round" />
          <path d="M12 29.5 6 28l3.5-5" stroke="#8BA83A" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <div
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 15,
            fontWeight: 800,
            letterSpacing: '-0.01em',
            color: '#1a1a1a',
            lineHeight: 1.35,
          }}
        >
          Dein Logo.
          <br />
          Dein Name.
        </div>
      </div>
    </div>
  )
}
