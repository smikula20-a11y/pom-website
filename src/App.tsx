// Bootstrap-Platzhalter auf `main`. Die vollständige Website wird auf dem
// Feature-Branch `feat/wurzel-website` gebaut (Hero, So funktioniert's,
// Honorarnote, Features, Social Proof, Gründer, Final-CTA, Footer, Rechtsseiten).

export default function App() {
  return (
    <main
      style={{
        minHeight: '100vh',
        display: 'grid',
        placeItems: 'center',
        background: 'var(--pom-stone-bg)',
        padding: '24px',
      }}
    >
      <div style={{ textAlign: 'center' }}>
        <div className="pom-eyebrow" style={{ color: 'var(--pom-olive)' }}>
          Place of Motion
        </div>
        <h1 className="pom-h1" style={{ marginTop: '12px' }}>
          Website im Aufbau
        </h1>
      </div>
    </main>
  )
}
