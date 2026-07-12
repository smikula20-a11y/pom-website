import { honorar } from '../content/site'

/**
 * HonorarNote - statischer Beleg-Mock (aus dem Design-Handoff).
 * Betrag ist ein pricing-neutrales Beispiel, KEIN Abo-Preis (§8).
 */
export function HonorarNote() {
  const m = honorar.mock
  return (
    <div
      style={{
        justifySelf: 'center',
        width: 340,
        maxWidth: '100%',
        background: '#fff',
        border: '1px solid #f1f5f9',
        borderRadius: 24,
        boxShadow: '0 12px 40px rgba(26,26,26,.10)',
        padding: '26px 28px',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
        <div className="pom-eyebrow" style={{ color: '#94a3b8' }}>
          Honorarnote
        </div>
        <span
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 10,
            fontWeight: 900,
            textTransform: 'uppercase',
            letterSpacing: '.1em',
            background: '#ecfdf5',
            color: '#059669',
            border: '1px solid #bbf7d0',
            padding: '4px 10px',
            borderRadius: 999,
          }}
        >
          {m.status}
        </span>
      </div>

      <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: '#94a3b8', marginBottom: 14 }}>
        {m.number}
      </div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 10,
          paddingBottom: 16,
          borderBottom: '1px solid #f1f5f9',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--font-sans)', fontSize: 13.5, color: '#475569' }}>
          <span>{m.line.label}</span>
          <span style={{ fontWeight: 600, color: '#1a1a1a' }}>{m.line.amount}</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--font-sans)', fontSize: 13.5, color: '#475569' }}>
          <span>{m.meta.who}</span>
          <span style={{ color: '#94a3b8' }}>{m.meta.method}</span>
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginTop: 16 }}>
        <span className="pom-eyebrow" style={{ color: '#94a3b8' }}>
          Summe
        </span>
        <span
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 28,
            fontWeight: 900,
            letterSpacing: '-0.02em',
            color: '#1a1a1a',
          }}
        >
          {m.total}
        </span>
      </div>
    </div>
  )
}
