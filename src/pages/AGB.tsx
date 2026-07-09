import { footer, impressum } from '../content/site'

export default function AGB() {
  const a = footer.address
  return (
    <main style={{ background: '#fff' }}>
      <div className="section prose">
        <h1>Allgemeine Geschäftsbedingungen (AGB)</h1>
        <p className="lead">Stand: {impressum.datenschutzStand}</p>

        <h2>1. Geltungsbereich &amp; Anbieter</h2>
        <p>
          Diese AGB gelten für die Nutzung der Plattform „Place of Motion" (nachfolgend „Dienst"),
          bereitgestellt von {a.name}, {a.owner}, {a.street}, {a.city}, Österreich (nachfolgend
          „Anbieter"). Sie gelten in der zum Zeitpunkt des Vertragsabschlusses gültigen Fassung.
          Abweichenden Bedingungen des Nutzers wird widersprochen.
        </p>

        <h2>2. Vertragsgegenstand &amp; Leistungen</h2>
        <p>
          Der Dienst ermöglicht es Physiotherapeut:innen und Praxen, digitale Trainingspläne zu
          erstellen, per QR-Code an Patient:innen weiterzugeben und optional als Selbstzahler-Leistung
          anzubieten. Der konkrete Funktionsumfang richtet sich nach dem gewählten Tarif (BASIC, PRO
          bzw. Founding Member). Der Anbieter kann den Dienst weiterentwickeln und einzelne Funktionen
          anpassen, soweit dies für den Nutzer zumutbar ist.
        </p>

        <h2>3. Registrierung &amp; Vertragsabschluss</h2>
        <p>
          Die Nutzung setzt eine Registrierung unter app.placeofmotion.com voraus. Der Vertrag kommt
          mit Freischaltung des Zugangs bzw. mit Buchung eines kostenpflichtigen Tarifs zustande. Der
          Nutzer sichert zu, richtige Angaben zu machen und die Zugangsdaten vertraulich zu behandeln.
          Der Dienst richtet sich ausschließlich an Unternehmer:innen; eine Nutzung durch
          Verbraucher:innen ist nicht vorgesehen.
        </p>

        <h2>4. Preise &amp; Zahlung</h2>
        <p>
          BASIC wird kostenlos bereitgestellt. Kostenpflichtige Tarife (PRO, Founding Member) werden je
          nach gewähltem Abrechnungszeitraum monatlich oder jährlich im Voraus zu den bei der Buchung
          angezeigten Preisen abgerechnet. Die Zahlung ist zu Beginn des jeweiligen
          Abrechnungszeitraums fällig; bei Zahlungsverzug kann der Zugang nach angemessener Frist
          eingeschränkt oder gesperrt werden. Der Anbieter ist Kleinunternehmer gemäß § 6 Abs. 1 Z 27
          UStG; es wird keine Umsatzsteuer ausgewiesen.
        </p>

        <h2>5. Laufzeit &amp; Kündigung</h2>
        <p>
          Der kostenlose Tarif kann jederzeit beendet werden. Monatlich abgerechnete Tarife -
          einschließlich Founding Member - können jederzeit zum Ende des laufenden Kalendermonats
          gekündigt werden. Der jährlich abgerechnete Tarif läuft für die gewählte Laufzeit von zwölf
          Monaten und kann zu deren Ende gekündigt werden. Das Recht zur außerordentlichen Kündigung
          aus wichtigem Grund bleibt für beide Seiten unberührt.
        </p>

        <h2>6. Widerrufsrecht</h2>
        <p>
          Der Dienst richtet sich ausschließlich an Unternehmer:innen. Ein gesetzliches Widerrufsrecht,
          wie es Verbraucher:innen nach dem Fern- und Auswärtsgeschäfte-Gesetz (FAGG) zusteht, besteht
          daher nicht.
        </p>

        <h2>7. Pflichten des Nutzers</h2>
        <p>
          Der Nutzer verpflichtet sich, den Dienst nur im Rahmen der geltenden Gesetze und seiner
          fachlichen Verantwortung zu nutzen. Er ist für die von ihm erstellten Inhalte sowie für die
          fachliche Richtigkeit der Trainingspläne selbst verantwortlich. Eine missbräuchliche Nutzung,
          insbesondere die Gefährdung der Sicherheit oder Verfügbarkeit des Dienstes, ist untersagt.
        </p>

        <h2>8. Inhalte, Daten &amp; Honorarnote</h2>
        <p>
          Vom Nutzer erstellte Pläne und eingegebene Daten bleiben seine Inhalte; der Anbieter nutzt
          sie ausschließlich zur Erbringung des Dienstes. Bei kostenpflichtigen Plänen erstellt der
          Dienst lediglich die Honorarnote im Namen des Nutzers - der Umsatz steht vollständig dem
          Nutzer zu, der Anbieter tritt nicht als Verkäufer der Leistung auf. Die steuerliche und
          rechtliche Verantwortung für den Verkauf liegt beim Nutzer.
        </p>

        <h2>9. Verfügbarkeit &amp; Gewährleistung</h2>
        <p>
          Der Anbieter bemüht sich um eine hohe Verfügbarkeit des Dienstes, schuldet jedoch keine
          bestimmte Verfügbarkeit, soweit nicht ausdrücklich vereinbart. Wartungsarbeiten und
          Störungen können zu vorübergehenden Einschränkungen führen. Es gelten die gesetzlichen
          Gewährleistungsbestimmungen.
        </p>

        <h2>10. Haftung</h2>
        <p>
          Der Anbieter haftet unbeschränkt für Vorsatz und grobe Fahrlässigkeit sowie für Schäden aus
          der Verletzung des Lebens, des Körpers oder der Gesundheit. Im Übrigen ist die Haftung -
          soweit gesetzlich zulässig - auf den vertragstypischen, vorhersehbaren Schaden begrenzt. Für
          die fachliche Anwendung der Trainingspläne bei Patient:innen haftet der Nutzer.
        </p>

        <h2>11. Datenschutz</h2>
        <p>
          Informationen zur Verarbeitung personenbezogener Daten finden sich in der{' '}
          <a href="/datenschutz">Datenschutzerklärung</a>. Für die Verarbeitung von Patientendaten im
          Dienst gilt zusätzlich die im Produkt bereitgestellte Vereinbarung.
        </p>

        <h2>12. Änderungen der AGB</h2>
        <p>
          Der Anbieter kann diese AGB mit Wirkung für die Zukunft ändern, soweit dies aus sachlichem
          Grund erforderlich und für den Nutzer zumutbar ist. Über Änderungen wird rechtzeitig
          informiert.
        </p>

        <h2>13. Schlussbestimmungen</h2>
        <p>
          Es gilt österreichisches Recht unter Ausschluss der Verweisungsnormen. Gerichtsstand ist -
          soweit gesetzlich zulässig - der Sitz des Anbieters. Sollte eine Bestimmung unwirksam sein,
          bleibt die Wirksamkeit der übrigen Bestimmungen unberührt.
        </p>
      </div>
    </main>
  )
}
