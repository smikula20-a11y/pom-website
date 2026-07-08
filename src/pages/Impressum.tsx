import { footer } from '../content/site'

export default function Impressum() {
  const a = footer.address
  return (
    <main style={{ background: '#fff' }}>
      <div className="section prose">
        <h1>Impressum</h1>
        <p className="lead">Offenlegung gemäß § 5 ECG, § 14 UGB und § 25 MedienG.</p>

        <div className="legal-note">
          <strong>Entwurf — bitte vor Go-live prüfen.</strong> Rechtsform, UID-Nummer und ggf.
          Gewerbedaten (GISA) bitte bestätigen bzw. ergänzen.
        </div>

        <h2>Medieninhaber &amp; Diensteanbieter</h2>
        <p>
          {a.name}
          <br />
          Inhaber: {a.owner}
          <br />
          {a.street}
          <br />
          {a.city}
          <br />
          Österreich
        </p>

        <h2>Kontakt</h2>
        <p>
          Telefon: <a href={a.phoneHref}>{a.phone}</a>
          <br />
          E-Mail: <a href={`mailto:${a.email}`}>{a.email}</a>
        </p>

        <h2>Unternehmensgegenstand</h2>
        <p>
          Entwicklung und Betrieb von „Place of Motion", einer digitalen Plattform, mit der
          Physiotherapeut:innen Trainingspläne erstellen, per QR-Code an Patient:innen übergeben und
          optional als Selbstzahler-Leistung anbieten können.
        </p>

        <h2>Rechtsform &amp; Registerdaten</h2>
        <p>
          Rechtsform: Einzelunternehmen <em>(zu bestätigen)</em>
          <br />
          UID-Nummer: <em>[falls vorhanden — bitte ergänzen]</em>
          <br />
          GISA-Zahl / Gewerbebehörde: <em>[falls zutreffend — bitte ergänzen]</em>
        </p>

        <h2>Online-Streitbeilegung</h2>
        <p>
          Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{' '}
          <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer">
            ec.europa.eu/consumers/odr
          </a>
          . Zur Teilnahme an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
          sind wir nicht verpflichtet und grundsätzlich nicht bereit.
        </p>

        <h2>Haftung für Inhalte &amp; Links</h2>
        <p>
          Die Inhalte dieser Website wurden mit größtmöglicher Sorgfalt erstellt. Für die Richtigkeit,
          Vollständigkeit und Aktualität wird keine Gewähr übernommen. Für Inhalte externer Links ist
          ausschließlich deren jeweiliger Betreiber verantwortlich.
        </p>

        <h2>Urheberrecht</h2>
        <p>
          Die auf dieser Website veröffentlichten Inhalte, Texte, Grafiken und Logos unterliegen dem
          österreichischen Urheberrecht. Jede Verwertung außerhalb der Grenzen des Urheberrechts bedarf
          der vorherigen schriftlichen Zustimmung.
        </p>
      </div>
    </main>
  )
}
