import { footer, impressum } from '../content/site'

export default function Datenschutz() {
  const a = footer.address
  return (
    <main style={{ background: '#fff' }}>
      <div className="section prose">
        <h1>Datenschutzerklärung</h1>
        <p className="lead">
          Stand: {impressum.datenschutzStand} · Information gemäß Art. 13 und 14 DSGVO.
        </p>

        <h2>Verantwortlicher</h2>
        <p>
          Verantwortlich für die Datenverarbeitung auf dieser Website im Sinne der DSGVO ist:
          <br />
          {a.name}, {a.owner}
          <br />
          {a.street}, {a.city}, Österreich
          <br />
          E-Mail: <a href={`mailto:${a.email}`}>{a.email}</a> · Telefon:{' '}
          <a href={a.phoneHref}>{a.phone}</a>
        </p>

        <h2>Grundsätze &amp; Verschlüsselung</h2>
        <p>
          Wir verarbeiten personenbezogene Daten nur, soweit dies für den Betrieb dieser Website
          erforderlich ist, und auf Grundlage der Datenschutz-Grundverordnung (DSGVO) sowie des
          österreichischen Datenschutzgesetzes (DSG). Die Übertragung erfolgt durchgehend
          TLS-verschlüsselt (Aufruf über https).
        </p>

        <h2>Aufruf der Website &amp; Hosting (Vercel)</h2>
        <p>
          Diese Website wird bei <strong>Vercel Inc.</strong> (USA) gehostet. Beim Aufruf der Seite
          verarbeitet Vercel als Auftragsverarbeiter technisch notwendige Server-Logdaten - unter
          anderem IP-Adresse, Datum und Uhrzeit der Anfrage, abgerufene Ressource, Referrer sowie
          Browser- und Betriebssystemtyp. Zweck ist die sichere und stabile Auslieferung der Seite;
          Rechtsgrundlage ist unser berechtigtes Interesse (Art. 6 Abs. 1 lit. f DSGVO). Mit Vercel
          besteht ein Auftragsverarbeitungsvertrag; die Übermittlung in die USA wird auf die
          EU-Standardvertragsklauseln gestützt. Die Server-Logs werden auf dem
          genutzten Hobby-Plan nur sehr kurz gespeichert (Runtime-Logs maximal 1 Stunde) und danach
          automatisch gelöscht.
        </p>

        <h2>Schriftarten</h2>
        <p>
          Zur einheitlichen Darstellung nutzt die Seite die Schriftarten „Inter" und „Outfit". Diese
          werden lokal von unserem Server ausgeliefert und mit der Seite mitgeladen. Es findet keine
          Verbindung zu Google-Servern und keine Übermittlung Ihrer IP-Adresse an Dritte statt.
        </p>

        <h2>Produkt-Demo</h2>
        <p>
          Die animierte Produktvorschau läuft ohne externe Einbindung. Erst wenn Sie aktiv auf
          „Live-Demo ansehen" klicken, wird eine Demo von unserer eigenen Subdomain
          (demo.placeofmotion.com) nachgeladen.
        </p>

        <h2>Terminbuchung (Calendly)</h2>
        <p>
          Für die Buchung eines Erstgesprächs verlinken wir auf den Dienst <strong>Calendly</strong>
          {' '}(Calendly LLC, USA). Erst wenn Sie dort aktiv einen Termin buchen, verarbeitet Calendly
          die von Ihnen eingegebenen Daten (z. B. Name, E-Mail, Terminwunsch) auf Basis seiner eigenen
          Datenschutzbestimmungen. Rechtsgrundlage unsererseits ist die Durchführung vorvertraglicher
          Maßnahmen (Art. 6 Abs. 1 lit. b DSGVO). Calendly ist unter dem EU-US Data Privacy Framework
          zertifiziert; ergänzend gelten die EU-Standardvertragsklauseln.
        </p>

        <h2>Kontaktaufnahme</h2>
        <p>
          Wenn Sie uns per E-Mail oder Telefon kontaktieren, verarbeiten wir Ihre Angaben zur
          Bearbeitung der Anfrage. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b bzw. lit. f DSGVO. Die
          Daten werden gelöscht, sobald sie nicht mehr erforderlich sind, spätestens nach Ablauf
          etwaiger gesetzlicher Aufbewahrungsfristen.
        </p>

        <h2>Registrierung / App</h2>
        <p>
          Diese Marketing-Website enthält kein Kontaktformular und keine Registrierung. Die
          Registrierung für das Produkt erfolgt auf <strong>app.placeofmotion.com</strong>; dafür gilt
          die dortige, gesonderte Datenschutzerklärung.
        </p>

        <h2>Cookies &amp; Tracking</h2>
        <p>
          Diese Website setzt keine Analyse- oder Marketing-Cookies und bindet kein Tracking ein. Es
          werden ausschließlich technisch notwendige Daten im Rahmen des Hostings verarbeitet.
        </p>

        <h2>Empfänger &amp; Drittlandübermittlung</h2>
        <p>
          Empfänger personenbezogener Daten sind ausschließlich der Hosting-Dienstleister (Vercel) und
          - nur bei aktiver Terminbuchung - Calendly. Die Übermittlung in die USA stützt Vercel auf die
          EU-Standardvertragsklauseln; Calendly ist zusätzlich unter dem EU-US Data Privacy Framework
          zertifiziert. Eine darüber hinausgehende Weitergabe an Dritte findet nicht statt.
        </p>

        <h2>Speicherdauer</h2>
        <p>
          Wir speichern personenbezogene Daten nur so lange, wie es für die jeweiligen Zwecke
          erforderlich ist oder gesetzliche Aufbewahrungspflichten bestehen. Danach werden die Daten
          gelöscht.
        </p>

        <h2>Ihre Rechte</h2>
        <p>Ihnen stehen nach der DSGVO folgende Rechte zu:</p>
        <ul>
          <li>Auskunft (Art. 15), Berichtigung (Art. 16) und Löschung (Art. 17)</li>
          <li>Einschränkung der Verarbeitung (Art. 18) und Datenübertragbarkeit (Art. 20)</li>
          <li>Widerspruch gegen Verarbeitungen auf Basis berechtigter Interessen (Art. 21)</li>
          <li>Widerruf erteilter Einwilligungen mit Wirkung für die Zukunft (Art. 7 Abs. 3)</li>
        </ul>
        <p>
          Zur Ausübung Ihrer Rechte genügt eine E-Mail an{' '}
          <a href={`mailto:${a.email}`}>{a.email}</a>.
        </p>

        <h2>Beschwerderecht</h2>
        <p>
          Unbeschadet anderer Rechtsbehelfe haben Sie das Recht auf Beschwerde bei der Aufsichtsbehörde:
          <br />
          Österreichische Datenschutzbehörde, Barichgasse 40-42, 1030 Wien
          <br />
          <a href="https://www.dsb.gv.at" target="_blank" rel="noopener noreferrer">
            dsb.gv.at
          </a>{' '}
          · <a href="mailto:dsb@dsb.gv.at">dsb@dsb.gv.at</a>
        </p>
      </div>
    </main>
  )
}
