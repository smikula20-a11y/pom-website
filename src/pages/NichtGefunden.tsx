import { Button } from '../components/Button'

export default function NichtGefunden() {
  return (
    <main style={{ background: '#fff' }}>
      <div className="section prose">
        <h1>Seite nicht gefunden</h1>
        <p className="lead">Diese Adresse gibt es auf placeofmotion.com nicht (mehr).</p>
        <p>
          <Button href="/">Zur Startseite</Button>
        </p>
      </div>
    </main>
  )
}
