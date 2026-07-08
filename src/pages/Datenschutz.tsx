import { footer } from '../content/site'

export default function Datenschutz() {
  const a = footer.address
  return (
    <main style={{ background: '#fff' }}>
      <div className="section prose">
        <h1>Datenschutzerklärung</h1>
        <p className="lead">Stand: Juli 2026 · Informationen gemäß DSGVO.</p>

        <div className="legal-note">
          <strong>Entwurf — noch nicht rechtlich freigegeben.</strong> Vor Go-live juristisch prüfen
          lassen. Offene Punkte: Google-Fonts vor Go-live selbst hosten (aktuell via Google-CDN geladen),
          Auftragsverarbeiter-Adressen (Vercel, Calendly) bestätigen, Aufbewahrungsfristen der
          Server-Logs verifizieren.
        </div>

        <h2>Verantwortlicher</h2>
        <p>
          {a.name}, {a.owner}
          <br />
          {a.street}, {a.city}, Österreich
          <br />
          E-Mail: <a href={`mailto:${a.email}`}>{a.email}</a> · Telefon:{' '}
          <a href={a.phoneHref}>{a.phone}</a>
        </p>

        <h2>Hosting (Vercel)</h2>
        <p>
          Diese Website wird bei <strong>Vercel Inc.</strong> (USA) gehostet. Beim Aufruf der Seite
          verarbeitet Vercel technisch notwendige Daten (u. a. IP-Adresse, Zeitpunkt der Anfrage,
          abgerufene Datei, Browsertyp) in Server-Logfiles. Rechtsgrundlage ist unser berechtigtes
          Interesse an einer sicheren und stabilen Bereitstellung (Art. 6 Abs. 1 lit. f DSGVO). Mit
          Vercel besteht ein Auftragsverarbeitungsvertrag; die Datenübermittlung in die USA wird auf
          die EU-Standardvertragsklauseln gestützt.
        </p>

        <h2>Schriftarten (Google Fonts)</h2>
        <p>
          Zur einheitlichen Darstellung werden die Schriftarten „Inter" und „Outfit" verwendet.{' '}
          <em>
            Hinweis: Bis zur Umstellung auf selbst gehostete Schriftarten werden diese von Google-Servern
            geladen, wobei die IP-Adresse an Google übermittelt wird. Vor Go-live ist die lokale
            Einbindung vorgesehen.
          </em>
        </p>

        <h2>Terminbuchung (Calendly)</h2>
        <p>
          Für die Buchung eines Erstgesprächs verlinken wir auf den Dienst <strong>Calendly</strong>.
          Erst wenn Sie dort aktiv einen Termin buchen, werden die von Ihnen eingegebenen Daten (z. B.
          Name, E-Mail, Terminwunsch) durch Calendly verarbeitet. Es gelten die Datenschutzbestimmungen
          von Calendly.
        </p>

        <h2>Registrierung / App</h2>
        <p>
          Diese Marketing-Website enthält kein Kontaktformular. Die Registrierung für das Produkt erfolgt
          auf <strong>app.placeofmotion.com</strong>; dafür gilt die dortige, gesonderte
          Datenschutzerklärung.
        </p>

        <h2>Cookies &amp; Tracking</h2>
        <p>
          Diese Website setzt keine Analyse- oder Marketing-Cookies und bindet kein Tracking ein. Es
          werden ausschließlich technisch notwendige Daten im Rahmen des Hostings verarbeitet.
        </p>

        <h2>Ihre Rechte</h2>
        <p>Ihnen stehen nach der DSGVO folgende Rechte zu:</p>
        <ul>
          <li>Auskunft (Art. 15), Berichtigung (Art. 16) und Löschung (Art. 17)</li>
          <li>Einschränkung der Verarbeitung (Art. 18) und Datenübertragbarkeit (Art. 20)</li>
          <li>Widerspruch gegen die Verarbeitung (Art. 21)</li>
        </ul>
        <p>
          Zur Ausübung genügt eine E-Mail an <a href={`mailto:${a.email}`}>{a.email}</a>. Ihnen steht
          außerdem ein Beschwerderecht bei der österreichischen Datenschutzbehörde (
          <a href="https://www.dsb.gv.at" target="_blank" rel="noopener noreferrer">
            dsb.gv.at
          </a>
          ) zu.
        </p>
      </div>
    </main>
  )
}
