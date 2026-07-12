import { footer, impressum } from '../content/site'

export default function Impressum() {
  const a = footer.address
  return (
    <main style={{ background: '#fff' }}>
      <div className="section prose">
        <h1>Impressum</h1>
        <p className="lead">
          Offenlegung gemäß § 5 E-Commerce-Gesetz (ECG), § 14 UGB und §§ 24, 25 Mediengesetz (MedienG).
        </p>

        <h2>Medieninhaber, Herausgeber &amp; Diensteanbieter</h2>
        <p>
          {a.name}
          <br />
          Inhaber: {a.owner}
          <br />
          {a.street}
          <br />
          {a.city}, Österreich
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
          Physiotherapeut:innen Trainingspläne erstellen, per QR-Code an ihre Patient:innen übergeben
          und optional als Selbstzahler-Leistung anbieten können.
        </p>

        <h2>Rechtsform &amp; Registerdaten</h2>
        <p>
          Rechtsform: {impressum.legalForm}
          <br />
          {impressum.uid ? (
            <>UID-Nummer: {impressum.uid}</>
          ) : impressum.kleinunternehmer ? (
            <>
              Umsatzsteuer: Kleinunternehmer gemäß § 6 Abs. 1 Z 27 UStG - es wird keine Umsatzsteuer
              ausgewiesen, eine UID-Nummer besteht nicht.
            </>
          ) : (
            <>
              UID-Nummer: <em>[falls vorhanden - vor Veröffentlichung ergänzen]</em>
            </>
          )}
          <br />
          Eine Eintragung im Firmenbuch besteht nicht.
        </p>

        <h2>Gewerberecht</h2>
        <p>
          Gewerbe: {impressum.gewerbe}
          <br />
          {impressum.gisa && (
            <>
              GISA-Zahl: {impressum.gisa}
              <br />
            </>
          )}
          Gewerbebehörde: {impressum.gewerbebehoerde}
          <br />
          Mitgliedschaft: {impressum.chamber}
          <br />
          Anwendbare Rechtsvorschrift:{' '}
          <a href={impressum.berufsrechtUrl} target="_blank" rel="noopener noreferrer">
            {impressum.berufsrecht}
          </a>
        </p>

        <h2>Aufsichtsbehörde</h2>
        <p>
          {impressum.gewerbebehoerde} als zuständige Gewerbebehörde (§ 5 Abs. 1 Z 6 ECG).
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
          Vollständigkeit und Aktualität wird keine Gewähr übernommen. Für die Inhalte externer Links
          ist ausschließlich deren jeweiliger Betreiber verantwortlich; zum Zeitpunkt der Verlinkung
          waren keine Rechtsverstöße erkennbar.
        </p>

        <h2>Urheberrecht &amp; Bildnachweis</h2>
        <p>
          Die auf dieser Website veröffentlichten Inhalte, Texte, Grafiken und Logos unterliegen dem
          österreichischen Urheberrecht. Jede Verwertung außerhalb der Grenzen des Urheberrechts bedarf
          der vorherigen schriftlichen Zustimmung. Das in der Produktvorschau gezeigte Übungsfoto stammt
          aus eigenem Bildmaterial von Place of Motion.
        </p>
      </div>
    </main>
  )
}
