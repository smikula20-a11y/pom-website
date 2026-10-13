import { Button } from '../components/Button'

/** Fehlerseite für unbekannte Adressen (404.html). Füllt den Bildschirm, damit der
 *  Footer unten sitzt; der Knopf steht bewusst außerhalb von .prose (sonst Link-Stil). */
export default function NichtGefunden() {
  return (
    <main
      style={{
        background: 'var(--pom-stone-bg)',
        minHeight: 'calc(100svh - 120px)',
        display: 'grid',
        placeItems: 'center',
      }}
    >
      <div className="section" style={{ textAlign: 'center' }}>
        <h1 className="pom-h1">Seite nicht gefunden</h1>
        <p className="pom-body" style={{ margin: '12px 0 28px', color: 'var(--pom-slate-500)' }}>
          Diese Adresse gibt es auf placeofmotion.com nicht (mehr).
        </p>
        <Button href="/">Zur Startseite</Button>
      </div>
    </main>
  )
}
