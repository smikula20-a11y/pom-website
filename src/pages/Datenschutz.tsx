import { impressum } from '../content/site'

/** Datenschutzerklärung für Website und App. Wortlaut aus der freigegebenen Fassung,
 *  Änderungen nur nach Freigabe durch Stefan. Der Stand steht in content/site.ts. */
export default function Datenschutz() {
  return (
    <main style={{ background: '#fff' }}>
      <div className="section prose">
        <h1>Datenschutzerklärung für Website und App</h1>
        <p className="lead">
          Stand: {impressum.datenschutzStand} · Information gemäß Art. 13 und 14 DSGVO.
        </p>

        <h2 className="teil">Teil A: Allgemeines</h2>

        <h3>1. Verantwortlicher</h3>
        <p>
          Verantwortlich für die Datenverarbeitung auf der Website placeofmotion.com und in der
          Web-App app.placeofmotion.com im Sinne der DSGVO ist:
        </p>
        <p>
          Place of Motion, Stefan Mikula
          <br />
          Feistritz 34, 9560 Feldkirchen, Österreich
          <br />
          E-Mail: <a href="mailto:office@placeofmotion.com">office@placeofmotion.com</a> ·
          Telefon: <a href="tel:+436509946090">+43 650 9946090</a>
        </p>
        <p>
          Place of Motion ist ein Einzelunternehmen. Einen Datenschutzbeauftragten haben wir nicht
          bestellt. Wenden Sie sich mit allen Fragen zum Datenschutz direkt an die Adresse oben.
        </p>

        <h3>2. Wofür diese Erklärung gilt</h3>
        <p>Diese Erklärung gilt für zwei Dinge:</p>
        <ul>
          <li>für den Besuch der Website placeofmotion.com (Teil B),</li>
          <li>
            für Therapeutinnen und Therapeuten, die ein Konto in der App haben oder anlegen (Teil
            C).
          </li>
        </ul>
        <p>
          Sie gilt nicht für die Daten von Patientinnen und Patienten. Für diese Daten ist die
          Praxis oder Einrichtung verantwortlich, die den Übungsplan ausgibt. Place of Motion
          verarbeitet sie nur im Auftrag. Mehr dazu in Punkt 21.
        </p>
        <p>
          Nutzen Sie ein Konto, das eine Einrichtung (zum Beispiel eine Klinik oder ein
          Therapiezentrum) für Sie bestellt hat, ist für Ihre Kontodaten diese Einrichtung
          verantwortlich. Place of Motion verarbeitet sie dann im Auftrag der Einrichtung. Wenden
          Sie sich in diesem Fall an Ihre Einrichtung.
        </p>

        <h3>3. Grundsätze und Verschlüsselung</h3>
        <p>
          Wir verarbeiten personenbezogene Daten nur, soweit das für den Betrieb von Website und App
          erforderlich ist, und auf Grundlage der Datenschutz-Grundverordnung (DSGVO) sowie des
          österreichischen Datenschutzgesetzes (DSG). Die Übertragung erfolgt durchgehend
          TLS-verschlüsselt (Aufruf über https).
        </p>

        <h2 className="teil">Teil B: Website placeofmotion.com</h2>

        <h3>4. Aufruf der Website und Hosting (Vercel)</h3>
        <p>
          Diese Website wird bei <strong>Vercel Inc.</strong> (USA) gehostet. Beim Aufruf der Seite
          verarbeitet Vercel als Auftragsverarbeiter technisch notwendige Server-Logdaten. Das sind
          unter anderem IP-Adresse, Datum und Uhrzeit der Anfrage, abgerufene Ressource, Referrer
          sowie Browser- und Betriebssystemtyp. Zweck ist die sichere und stabile Auslieferung der
          Seite. Rechtsgrundlage ist unser berechtigtes Interesse daran (Art. 6 Abs. 1 lit. f
          DSGVO).
        </p>
        <p>
          Mit Vercel besteht ein Auftragsverarbeitungsvertrag. Die Übermittlung in die USA stützt
          sich auf den Angemessenheitsbeschluss der Europäischen Kommission zum Datenschutzrahmen
          EU-USA (Data Privacy Framework). Vercel ist dort zertifiziert. Der Vertrag mit Vercel
          enthält zusätzlich die EU-Standardvertragsklauseln.
        </p>
        <p>
          Vercel speichert die Protokolle nur kurz. Im genutzten Tarif (Pro) sind Laufzeitprotokolle
          laut Vercel einen Tag lang abrufbar. Danach werden sie automatisch gelöscht.
        </p>

        <h3>5. Schriftarten</h3>
        <p>
          Zur einheitlichen Darstellung nutzt die Seite die Schriftarten „Inter“ und „Outfit“. Diese
          werden lokal von unserem Server ausgeliefert und mit der Seite mitgeladen. Es findet keine
          Verbindung zu Google-Servern und keine Übermittlung Ihrer IP-Adresse an Dritte statt.
        </p>

        <h3>6. Produkt-Demo</h3>
        <p>
          Die animierte Produktvorschau läuft ohne externe Einbindung. Erst wenn Sie aktiv auf
          „Live-Demo ansehen“ klicken, wird eine Demo von unserer eigenen Subdomain
          (demo.placeofmotion.com) nachgeladen.
        </p>

        <h3>7. Terminbuchung (Calendly)</h3>
        <p>
          Für die Buchung eines Erstgesprächs verlinken wir auf den
          Dienst <strong>Calendly</strong> (Calendly LLC, USA). Erst wenn Sie dort aktiv einen
          Termin buchen, verarbeitet Calendly die von Ihnen eingegebenen Daten (z. B. Name, E-Mail,
          Terminwunsch) auf Basis seiner eigenen Datenschutzbestimmungen. Rechtsgrundlage
          unsererseits ist die Durchführung vorvertraglicher Maßnahmen (Art. 6 Abs. 1 lit. b DSGVO).
          Calendly ist unter dem EU-US Data Privacy Framework zertifiziert. Ergänzend gelten die
          EU-Standardvertragsklauseln.
        </p>

        <h3>8. Kontaktaufnahme</h3>
        <p>
          Wenn Sie uns per E-Mail oder Telefon kontaktieren, verarbeiten wir Ihre Angaben zur
          Bearbeitung der Anfrage. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b bzw. lit. f DSGVO. Die
          Daten werden gelöscht, sobald sie nicht mehr erforderlich sind, spätestens nach Ablauf
          etwaiger gesetzlicher Aufbewahrungsfristen.
        </p>

        <h3>9. Cookies und Tracking auf der Website</h3>
        <p>
          Diese Website setzt keine Analyse- oder Marketing-Cookies und bindet kein Tracking ein. Es
          werden ausschließlich technisch notwendige Daten im Rahmen des Hostings verarbeitet. Die
          Website enthält kein Kontaktformular und keine Registrierung. Die Registrierung für das
          Produkt erfolgt in der App. Dafür gilt Teil C.
        </p>

        <h2 className="teil">Teil C: App app.placeofmotion.com</h2>
        <p>Teil C gilt für Therapeutinnen und Therapeuten mit einem Konto in der App.</p>

        <h3>10. Registrierung und Konto</h3>
        <p>
          <strong>Welche Daten.</strong> Für ein Konto brauchen wir Ihre E-Mail-Adresse und ein
          Passwort. Das Passwort wird nicht im Klartext gespeichert, sondern als Streuwert.
          Gespeichert werden außerdem der Zeitpunkt der Registrierung, der Bestätigung Ihrer
          E-Mail-Adresse und Ihrer letzten Anmeldung sowie Ihr Tarif (BASIC oder PRO).
        </p>
        <p>
          <strong>Woher.</strong> Die Daten geben Sie bei der Registrierung selbst ein. Kaufen Sie
          ein Abo, bevor Sie ein Konto haben, legen wir das Konto mit der E-Mail-Adresse aus dem
          Kauf an. Sie erhalten dann eine E-Mail, mit der Sie Ihr Passwort festlegen.
        </p>
        <p>
          <strong>Zweck und Rechtsgrundlage.</strong> Wir brauchen diese Daten, um Ihnen die App
          bereitzustellen und Sie bei der Anmeldung zu erkennen. Rechtsgrundlage ist die Erfüllung
          des Vertrags über die Nutzung der App (Art. 6 Abs. 1 lit. b DSGVO).
        </p>
        <p>
          <strong>Wo.</strong> Die Daten liegen in einer Datenbank in der Europäischen Union, Region
          Frankfurt am Main. Dienstleister ist Supabase (siehe Punkt 22).
        </p>
        <p>
          <strong>Wie lange.</strong> Wir speichern die Daten, solange Ihr Konto besteht. Ihr Konto
          löschen wir, wenn Sie das per E-Mail
          an <a href="mailto:office@placeofmotion.com">office@placeofmotion.com</a> verlangen,
          binnen 30 Tagen. Die Kündigung eines bezahlten Tarifs allein löscht das Konto nicht.
          Sicherungskopien der Datenbank werden nach rund einer Woche überschrieben, spätestens 30
          Tage nach der Löschung. Konten, die nicht mehr benutzt werden, löschen wir derzeit nicht
          von selbst.
        </p>

        <h3>11. Anmeldung und Speicher in Ihrem Browser</h3>
        <p>
          Damit Sie angemeldet bleiben, legt die App Daten im Speicher Ihres Browsers ab (lokaler
          Speicher, kein Cookie zur Analyse). Das sind:
        </p>
        <ul>
          <li>Ihre Anmeldung (ein Sitzungsschlüssel),</li>
          <li>der Zwischenstand des Plans, an dem Sie gerade arbeiten,</li>
          <li>
            auf gemeinsam genutzten Computern in Einrichtungen ein Merker, dass die Anmeldung dort
            nur für das jeweilige Browserfenster gilt.
          </li>
        </ul>
        <p>
          Diese Daten sind unbedingt erforderlich, damit die App funktioniert. Eine Einwilligung ist
          dafür nicht nötig (§ 165 Abs. 3 TKG 2021). Rechtsgrundlage für die Verarbeitung ist Art. 6
          Abs. 1 lit. b DSGVO.
        </p>
        <p>
          Die App meldet Sie nicht von selbst ab. Die Daten bleiben im Browser, bis Sie sich
          abmelden oder die Websitedaten in Ihrem Browser löschen. Melden Sie sich auf fremden
          Geräten deshalb immer ab.
        </p>
        <p>
          Die App setzt keine Cookies zur Reichweitenmessung oder Werbung. Es sind keine Werkzeuge
          Dritter zur Analyse oder Fehlerverfolgung eingebunden. Schriftarten und QR-Codes erzeugt
          die App selbst.
        </p>

        <h3>12. Profil und Praxisdaten</h3>
        <p>
          <strong>Welche Daten.</strong> Unter „Praxisdaten“ können Sie eintragen: Name der Praxis,
          Anschrift, Telefon, E-Mail-Adresse, Steuernummer, UID-Nummer, Steuerstatus, IBAN und BIC
          sowie ein Logo. Dazu kommen Ihre Einstellungen in der App: Dokumentfarbe, Nummernkreis und
          Leistungsbezeichnung Ihrer Honorarnoten, Ihre Favoriten in der Übungsbibliothek.
        </p>
        <p>
          <strong>Zweck.</strong> Mit diesen Angaben erstellt die App Ihre Pläne und Ihre
          Honorarnoten. Name und Logo Ihrer Praxis stehen auf den Plänen, die Sie ausgeben, und in
          der Ansicht, die Ihre Patientinnen und Patienten über den QR-Code öffnen. Anschrift,
          Telefon, E-Mail-Adresse, Steuernummer und UID-Nummer stehen auf Ihren Honorarnoten, IBAN
          und BIC nur bei Zahlung per Überweisung.
        </p>
        <p>
          <strong>Freiwillig.</strong> Die Angaben sind freiwillig. Ohne die Pflichtangaben für eine
          Honorarnote können Sie in der App aber keine Zahlung erfassen.
        </p>
        <p>
          <strong>Rechtsgrundlage.</strong> Erfüllung des Vertrags über die Nutzung der App (Art. 6
          Abs. 1 lit. b DSGVO).
        </p>
        <p>
          <strong>Ihr Logo.</strong> Das Logo liegt in einer Ablage, die ohne Anmeldung lesbar ist,
          wenn man die genaue Adresse der Datei kennt. Das ist nötig, damit es in der
          Patientenansicht erscheint.
        </p>
        <p>
          <strong>Wie lange.</strong> Sie können die Angaben jederzeit selbst ändern oder entfernen.
          Sonst bleiben sie gespeichert, solange Ihr Konto besteht.
        </p>

        <h3>13. Ihre Zustimmung zu AGB und Vertrag zur Auftragsverarbeitung</h3>
        <p>
          Bei der Registrierung stimmen Sie unseren AGB und dem Vertrag zur Auftragsverarbeitung zu.
          Wir speichern den Zeitpunkt Ihrer Zustimmung und die Fassung der beiden Texte.
        </p>
        <p>
          Zweck ist der Nachweis, dass und mit welchem Inhalt der Vertrag zustande gekommen ist.
          Rechtsgrundlage ist die Erfüllung des Vertrags (Art. 6 Abs. 1 lit. b DSGVO) und unser
          berechtigtes Interesse am Nachweis (Art. 6 Abs. 1 lit. f DSGVO).
        </p>
        <p>Wir speichern diese Angaben, solange Ihr Konto besteht, und danach noch drei Jahre.</p>
        <p>Diese Datenschutzerklärung ist eine Information. Sie müssen ihr nicht zustimmen.</p>

        <h3>14. Abo und Zahlung</h3>
        <p>Der Tarif BASIC ist kostenlos. Für bezahlte Tarife gilt:</p>
        <p>
          <strong>Kassa.</strong> Die Bestellung läuft über eine Kassa unter
          online.placeofmotion.com. Betrieben wird sie vom
          Dienst <strong>ThriveCart</strong> (ThriveCart LLC, 251 Little Falls Drive, Wilmington,
          Delaware 19808, USA). ThriveCart verarbeitet die Daten in unserem Auftrag. Sie geben dort
          Vor- und Nachnamen, E-Mail-Adresse und Anschrift (Straße, Ort, Postleitzahl, Land,
          Bundesland) ein. Die Kassa setzt technisch notwendige Cookies für den Bestell- und
          Zahlungsvorgang.
        </p>
        <p>
          <strong>Schutz vor automatisierten Bestellungen.</strong> Die Kassa nutzt den
          Dienst <strong>reCAPTCHA</strong> von Google. Dabei werden Angaben zu Ihrem Gerät und
          Ihrem Verhalten auf der Seite, darunter Ihre IP-Adresse, an Google übermittelt. Zweck ist
          der Schutz der Kassa vor Missbrauch durch automatisierte Programme. Rechtsgrundlage ist
          unser berechtigtes Interesse daran (Art. 6 Abs. 1 lit. f DSGVO). Es gelten zusätzlich die
          Datenschutzerklärung und die Nutzungsbedingungen von Google.
        </p>
        <p>
          <strong>Zahlung.</strong> Die Zahlung wickelt je nach Ihrer
          Wahl <strong>Stripe</strong> oder <strong>PayPal</strong> ab. Ihre Karten- oder Kontodaten
          geben Sie direkt bei diesen Zahlungsdiensten ein. Wir sehen keine vollständigen
          Kartennummern. Stripe und PayPal verarbeiten Ihre Daten teils in eigener Verantwortung,
          etwa zur Betrugsvorbeugung und um ihre gesetzlichen Pflichten zu erfüllen. Es gelten deren
          Datenschutzerklärungen. Vertragspartner sind Stripe Payments Europe, Limited (Irland) und
          PayPal (Europe) S.à r.l. et Cie, S.C.A. (Luxemburg).
        </p>
        <p>
          <strong>Was wir erhalten.</strong> ThriveCart meldet uns Bestellung, Verlängerung und
          Erstattung. Wir erhalten dabei Ihre E-Mail-Adresse, das gekaufte Produkt und den Stand der
          Zahlung. Damit schalten wir Ihren Tarif in der App frei und speichern, bis wann er bezahlt
          ist. Die E-Mail-Adresse in der Kassa muss deshalb dieselbe sein wie im Konto.
        </p>
        <p>
          <strong>Rechtsgrundlage.</strong> Erfüllung des Vertrags über den bezahlten Tarif (Art. 6
          Abs. 1 lit. b DSGVO).
        </p>
        <p>
          <strong>Wie lange.</strong> Bestell- und Zahlungsdaten bewahren wir sieben Jahre auf
          (siehe Punkt 15).
        </p>
        <p>
          <strong>Übermittlung in die USA.</strong> ThriveCart sitzt in den USA und ist nicht unter
          dem Datenschutzrahmen EU-USA zertifiziert. Die Übermittlung stützt sich auf die
          Standardvertragsklauseln, die ThriveCart in seinem Auftragsverarbeitungsvertrag (Data
          Processing Addendum) anbietet.
        </p>

        <h3>15. Rechnungen und Buchhaltung</h3>
        <p>
          Für jede Zahlung entsteht ein Beleg mit Ihrem Namen, Ihrer Anschrift, dem Produkt und dem
          Betrag. Wir sind gesetzlich verpflichtet, Belege und Aufzeichnungen sieben Jahre
          aufzubewahren (§ 132 Abs. 1 BAO). Die Frist läuft ab dem Ende des Kalenderjahres, auf das
          sich der Beleg bezieht. Rechtsgrundlage ist die Erfüllung dieser rechtlichen Pflicht (Art.
          6 Abs. 1 lit. c DSGVO).
        </p>
        <p>
          Belege geben wir an unsere Steuerberatung weiter und, soweit gesetzlich verlangt, an das
          Finanzamt. Zahlungen sehen auch unsere Bank und die Zahlungsdienste aus Punkt 14.
        </p>
        <p>
          Diese Daten löschen wir auch dann erst nach Ablauf der Frist, wenn Sie Ihr Konto vorher
          löschen lassen.
        </p>

        <h3>16. E-Mails an Sie</h3>
        <p>
          <strong>E-Mails der App.</strong> Die App schickt Ihnen E-Mails, die für Ihr Konto nötig
          sind: die Bestätigung der Registrierung, einen Anmeldelink, wenn Sie ihn anfordern, den
          Link zum Zurücksetzen des Passworts und nach einem Kauf die Einladung, Ihr Passwort
          festzulegen. Den Versand übernimmt <strong>easyname GmbH</strong> (Wien) in unserem
          Auftrag. easyname erhält dafür Ihre E-Mail-Adresse. Rechtsgrundlage ist Art. 6 Abs. 1 lit.
          b DSGVO.
        </p>
        <p>
          <strong>Mitteilungen zum Vertrag.</strong> Wir schreiben Ihnen an die E-Mail-Adresse Ihres
          Kontos, wenn wir dazu verpflichtet sind oder der Vertrag es vorsieht. Das sind zum
          Beispiel Änderungen der AGB oder des Vertrags zur Auftragsverarbeitung, ein neuer
          Dienstleister oder eine Datenpanne, die Ihre Daten betrifft. Rechtsgrundlage ist Art. 6
          Abs. 1 lit. b und lit. c DSGVO.
        </p>
        <p>
          <strong>Keine Werbung per E-Mail.</strong> Wir verschicken derzeit keinen Newsletter und
          keine Werbe-E-Mails an registrierte Nutzerinnen und Nutzer. Sollte sich das ändern,
          ergänzen wir diese Erklärung vorher.
        </p>

        <h3>17. Hilfe, Einschulung und Kundenverwaltung</h3>
        <p>
          Wenn Sie uns um Hilfe bitten oder eine Einschulung vereinbaren, verarbeiten wir Ihre
          Angaben aus der Anfrage und, soweit nötig, die Daten Ihres Kontos. Rechtsgrundlage ist
          Art. 6 Abs. 1 lit. b DSGVO. Für Termine gilt Punkt 7 (Calendly).
        </p>
        <p>
          Wir führen eine Kundenliste mit Namen, Kontaktdaten, Tarif und Notizen zu Gesprächen.
          Zweck ist die Betreuung unserer Kundinnen und Kunden. Rechtsgrundlage ist Art. 6 Abs. 1
          lit. b DSGVO und unser berechtigtes Interesse an einer geordneten Kundenbetreuung (Art. 6
          Abs. 1 lit. f DSGVO).
        </p>
        <p>Dafür nutzen wir folgende Dienste:</p>
        <ul>
          <li>Die Kundenliste führen wir in <strong>Notion</strong> (Notion Labs, Inc., USA).</li>
          <li>
            E-Mails an <a href="mailto:office@placeofmotion.com">office@placeofmotion.com</a> kommen
            in einem Postfach bei <strong>easyname</strong> (Wien) an und werden an ein Postfach
            bei <strong>Google</strong> (Gmail) weitergeleitet.
          </li>
          <li>Für kurze Nachrichten nutzen wir teils <strong>WhatsApp</strong>.</li>
          <li>
            Erstgespräche und Einschulungen per Video finden über <strong>Google
            Meet</strong> statt.
          </li>
        </ul>
        <p>
          Notion, Google und WhatsApp (Meta) übermitteln Daten in die USA. Die Grundlage steht in
          Punkt 23.
        </p>
        <p>
          Diese Daten löschen wir, sobald sie nicht mehr erforderlich sind, spätestens drei Jahre
          nach dem Ende des Vertrags. Gesetzliche Aufbewahrungsfristen gehen vor.
        </p>

        <h3>18. KI-Planassistent</h3>
        <p>
          Der KI-Planassistent steht nur im Tarif PRO zur Verfügung. Er arbeitet nur, wenn Sie ihn
          benutzen.
        </p>
        <p>
          <strong>Zähler.</strong> Damit der Assistent nicht missbraucht wird, zählen wir Ihre
          Anfragen. Gespeichert werden die Kennung Ihres Kontos, der Tag, die Zahl der Anfragen an
          diesem Tag und der Zeitpunkt der letzten Anfrage. Derzeit sind 30 Anfragen pro Tag
          möglich. Rechtsgrundlage ist unser berechtigtes Interesse, Missbrauch und unkontrollierte
          Kosten zu verhindern (Art. 6 Abs. 1 lit. f DSGVO). Den Inhalt Ihrer Anfragen speichern wir
          nicht in diesem Zähler. Die Einträge löschen wir nach 90 Tagen.
        </p>
        <p>
          <strong>Inhalt Ihrer Anfragen.</strong> Der Text, den Sie eingeben, und die Liste der
          Übungen der Bibliothek gehen an den KI-Dienst <strong>Anthropic</strong> (Anthropic
          Ireland, Limited, Irland, Verarbeitung auch in den USA). Ihre E-Mail-Adresse oder die
          Kennung Ihres Kontos werden nicht mitgeschickt. Anthropic darf die Eingaben nicht zum
          Training von KI-Modellen verwenden. Die Übermittlung in die USA stützt sich auf die
          Standardvertragsklauseln der Europäischen Kommission. Soweit Ihre Eingaben Angaben zu
          Patientinnen und Patienten enthalten, gilt dafür der Vertrag zur Auftragsverarbeitung.
          Schreiben Sie keine Namen in das Feld.
        </p>

        <h3>19. Videos und Bilder der Übungsbibliothek</h3>
        <p>
          Die Videos und Vorschaubilder der Übungsbibliothek kommen derzeit
          von <strong>Vimeo</strong> (Vimeo.com, Inc., USA). Die Vorschaubilder werden mit der Seite
          geladen, ein Video erst, wenn Sie es starten. Vimeo erhält dabei die IP-Adresse Ihres
          Geräts und die Adresse des Bildes oder Videos. Daraus ist erkennbar, welche Übungen auf
          Ihrem Gerät angezeigt werden. Vimeo erhält von uns weder Ihren Namen noch Ihre
          E-Mail-Adresse. Die Videos sind so eingebunden, dass Vimeo kein Cookie zur Wiedererkennung
          setzt (Einstellung „dnt=1“).
        </p>
        <p>
          Vimeo verarbeitet diese Daten in eigener Verantwortung. Rechtsgrundlage für die Einbindung
          ist unser berechtigtes Interesse, die Videos zuverlässig auszuliefern (Art. 6 Abs. 1 lit.
          f DSGVO). Die Übermittlung in die USA stützt sich auf den Angemessenheitsbeschluss der
          Europäischen Kommission zum Datenschutzrahmen EU-USA. Vimeo ist dort zertifiziert.
        </p>
        <p>
          Videos, die Sie selbst hochladen, liegen bei <strong>BunnyWay d.o.o.</strong> (Slowenien),
          Speicherort Frankfurt am Main. Beim Abspielen erhält Bunny die IP-Adresse Ihres Geräts.
          Bunny arbeitet in unserem Auftrag.
        </p>

        <h3>20. Auslieferung der App und Protokolle</h3>
        <p>
          Die Programmdateien der App liefert <strong>Vercel Inc.</strong> (USA) aus. Vercel erhält
          dabei wie bei der Website Ihre IP-Adresse, die Browserkennung und die aufgerufene Adresse
          (siehe Punkt 4). Inhalte Ihres Kontos laufen nicht über Vercel. Sie gehen direkt zwischen
          Ihrem Browser und der Datenbank hin und her.
        </p>
        <p>
          Der Betreiber der Datenbank, <strong>Supabase</strong>, führt technische Protokolle über
          Zugriffe und Anmeldungen. Sie dienen der Sicherheit und der Fehlersuche. Rechtsgrundlage
          ist unser berechtigtes Interesse daran (Art. 6 Abs. 1 lit. f DSGVO). Die Protokolle können
          Ihre IP-Adresse enthalten und werden nach rund sieben Tagen gelöscht.
        </p>
        <p>
          Wir selbst führen kein Protokoll über Ihre einzelnen Arbeitsschritte in der App.
          Gespeichert wird, wann ein Eintrag angelegt wurde. Öffnen Sie einen Patientenplan über
          seinen Link, während Sie angemeldet sind, wird bei diesem Aufruf vermerkt, dass er aus
          einer angemeldeten Sitzung kam.
        </p>

        <h3>21. Patientendaten: Place of Motion als Auftragsverarbeiter</h3>
        <p>
          Die Daten Ihrer Patientinnen und Patienten verarbeiten wir nicht für eigene Zwecke. Das
          sind zum Beispiel Namen, Übungspläne, Angaben auf Honorarnoten und die Aufrufe der Pläne.
          Verantwortlich dafür sind Sie als Praxis. Place of Motion ist Ihr Auftragsverarbeiter nach
          Art. 28 DSGVO.
        </p>
        <p>
          Was wir mit diesen Daten tun dürfen, welche Dienstleister wir einsetzen und wie die Daten
          geschützt sind, regelt der{' '}
          <a href="/auftragsverarbeitung">Vertrag zur Auftragsverarbeitung</a>.
        </p>
        <p>
          Patientinnen und Patienten finden in der Ansicht ihres Plans einen kurzen
          Datenschutzhinweis. Mit Fragen zu ihren Daten wenden sie sich an ihre Praxis. Anfragen,
          die uns direkt erreichen, leiten wir an die Praxis weiter.
        </p>

        <h2 className="teil">Teil D: Für Website und App gemeinsam</h2>

        <h3>22. Empfänger</h3>
        <p>Empfänger Ihrer Daten sind die folgenden Dienstleister und Stellen:</p>
        <div className="tabelle-rahmen">
          <table className="rechts-tabelle">
            <thead>
              <tr>
                <th scope="col">Empfänger</th>
                <th scope="col">Wofür</th>
                <th scope="col">Rolle</th>
                <th scope="col">Ort</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td data-label="Empfänger">Supabase Pte. Ltd, Singapur</td>
                <td data-label="Wofür">Datenbank, Anmeldung, Dateiablage der App</td>
                <td data-label="Rolle">Auftragsverarbeiter</td>
                <td data-label="Ort">
                  Speicherung in der EU (Frankfurt am Main). Zugriffe für Betrieb und Unterstützung
                  aus den USA und Singapur möglich
                </td>
              </tr>
              <tr>
                <td data-label="Empfänger">Vercel Inc., USA</td>
                <td data-label="Wofür">Auslieferung von Website und App</td>
                <td data-label="Rolle">Auftragsverarbeiter</td>
                <td data-label="Ort">weltweites Auslieferungsnetz, Hauptverarbeitung USA</td>
              </tr>
              <tr>
                <td data-label="Empfänger">easyname GmbH, Wien</td>
                <td data-label="Wofür">Versand der E-Mails der App, Domain</td>
                <td data-label="Rolle">Auftragsverarbeiter</td>
                <td data-label="Ort">EU oder EWR</td>
              </tr>
              <tr>
                <td data-label="Empfänger">BunnyWay d.o.o., Slowenien</td>
                <td data-label="Wofür">Auslieferung selbst hochgeladener Videos</td>
                <td data-label="Rolle">Auftragsverarbeiter</td>
                <td data-label="Ort">EU</td>
              </tr>
              <tr>
                <td data-label="Empfänger">Vimeo.com, Inc., USA</td>
                <td data-label="Wofür">Videos und Vorschaubilder der Übungsbibliothek</td>
                <td data-label="Rolle">eigener Verantwortlicher</td>
                <td data-label="Ort">USA</td>
              </tr>
              <tr>
                <td data-label="Empfänger">Anthropic Ireland, Limited, Irland</td>
                <td data-label="Wofür">KI-Planassistent (nur PRO, nur bei Nutzung)</td>
                <td data-label="Rolle">Auftragsverarbeiter</td>
                <td data-label="Ort">EU und USA</td>
              </tr>
              <tr>
                <td data-label="Empfänger">ThriveCart LLC, USA</td>
                <td data-label="Wofür">Kassa für bezahlte Tarife</td>
                <td data-label="Rolle">Auftragsverarbeiter</td>
                <td data-label="Ort">USA</td>
              </tr>
              <tr>
                <td data-label="Empfänger">Stripe Payments Europe, Limited, Irland</td>
                <td data-label="Wofür">Zahlung mit Karte</td>
                <td data-label="Rolle">Zahlungsdienst, teils eigener Verantwortlicher</td>
                <td data-label="Ort">Irland, USA</td>
              </tr>
              <tr>
                <td data-label="Empfänger">PayPal (Europe) S.à r.l. et Cie, S.C.A., Luxemburg</td>
                <td data-label="Wofür">Zahlung mit PayPal</td>
                <td data-label="Rolle">Zahlungsdienst, eigener Verantwortlicher</td>
                <td data-label="Ort">Luxemburg, weitere Länder</td>
              </tr>
              <tr>
                <td data-label="Empfänger">Calendly LLC, USA</td>
                <td data-label="Wofür">Terminbuchung, nur wenn Sie dort buchen</td>
                <td data-label="Rolle">eigener Verantwortlicher</td>
                <td data-label="Ort">USA</td>
              </tr>
              <tr>
                <td data-label="Empfänger">Notion Labs, Inc., USA</td>
                <td data-label="Wofür">Kundenliste</td>
                <td data-label="Rolle">Dienstleister</td>
                <td data-label="Ort">USA</td>
              </tr>
              <tr>
                <td data-label="Empfänger">Google (Gmail, Google Meet, reCAPTCHA)</td>
                <td data-label="Wofür">
                  Weiterleitung unserer E-Mails, Videogespräche, Schutz der Kassa
                </td>
                <td data-label="Rolle">Dienstleister</td>
                <td data-label="Ort">EU und USA</td>
              </tr>
              <tr>
                <td data-label="Empfänger">WhatsApp (Meta)</td>
                <td data-label="Wofür">kurze Nachrichten, wenn Sie uns dort schreiben</td>
                <td data-label="Rolle">Dienstleister</td>
                <td data-label="Ort">EU und USA</td>
              </tr>
              <tr>
                <td data-label="Empfänger">Steuerberatung, Finanzamt, Bank</td>
                <td data-label="Wofür">Buchhaltung und Zahlungsverkehr</td>
                <td data-label="Rolle">eigene Verantwortliche</td>
                <td data-label="Ort">Österreich</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          Ihre Patientinnen und Patienten sehen den Namen und das Logo Ihrer Praxis auf dem Plan und
          Ihre Praxisangaben auf der Honorarnote. Das veranlassen Sie selbst, wenn Sie einen Plan
          ausgeben.
        </p>
        <p>Wir verkaufen keine Daten und geben sie nicht zu Werbezwecken weiter.</p>

        <h3>23. Übermittlung in Länder außerhalb der EU</h3>
        <p>
          Einige Empfänger sitzen außerhalb der Europäischen Union oder können von dort auf Daten
          zugreifen:
        </p>
        <div className="tabelle-rahmen">
          <table className="rechts-tabelle">
            <thead>
              <tr>
                <th scope="col">Empfänger</th>
                <th scope="col">Land</th>
                <th scope="col">Worauf sich die Übermittlung stützt</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td data-label="Empfänger">Vercel</td>
                <td data-label="Land">USA</td>
                <td data-label="Worauf sich die Übermittlung stützt">
                  Angemessenheitsbeschluss zum Datenschutzrahmen EU-USA (Data Privacy Framework),
                  zusätzlich Standardvertragsklauseln
                </td>
              </tr>
              <tr>
                <td data-label="Empfänger">Vimeo</td>
                <td data-label="Land">USA</td>
                <td data-label="Worauf sich die Übermittlung stützt">
                  Angemessenheitsbeschluss zum Datenschutzrahmen EU-USA
                </td>
              </tr>
              <tr>
                <td data-label="Empfänger">Calendly</td>
                <td data-label="Land">USA</td>
                <td data-label="Worauf sich die Übermittlung stützt">
                  Angemessenheitsbeschluss zum Datenschutzrahmen EU-USA, zusätzlich
                  Standardvertragsklauseln
                </td>
              </tr>
              <tr>
                <td data-label="Empfänger">Notion</td>
                <td data-label="Land">USA</td>
                <td data-label="Worauf sich die Übermittlung stützt">
                  Angemessenheitsbeschluss zum Datenschutzrahmen EU-USA
                </td>
              </tr>
              <tr>
                <td data-label="Empfänger">Google</td>
                <td data-label="Land">USA</td>
                <td data-label="Worauf sich die Übermittlung stützt">
                  Angemessenheitsbeschluss zum Datenschutzrahmen EU-USA
                </td>
              </tr>
              <tr>
                <td data-label="Empfänger">WhatsApp (Meta)</td>
                <td data-label="Land">USA</td>
                <td data-label="Worauf sich die Übermittlung stützt">
                  Angemessenheitsbeschluss zum Datenschutzrahmen EU-USA
                </td>
              </tr>
              <tr>
                <td data-label="Empfänger">Supabase</td>
                <td data-label="Land">
                  Singapur, USA (nur Zugriffe für Betrieb und Unterstützung, Speicherung in
                  Frankfurt)
                </td>
                <td data-label="Worauf sich die Übermittlung stützt">
                  Standardvertragsklauseln der Europäischen Kommission
                </td>
              </tr>
              <tr>
                <td data-label="Empfänger">Anthropic</td>
                <td data-label="Land">USA</td>
                <td data-label="Worauf sich die Übermittlung stützt">
                  Standardvertragsklauseln der Europäischen Kommission
                </td>
              </tr>
              <tr>
                <td data-label="Empfänger">ThriveCart</td>
                <td data-label="Land">USA</td>
                <td data-label="Worauf sich die Übermittlung stützt">
                  Standardvertragsklauseln laut Auftragsverarbeitungsvertrag von ThriveCart
                </td>
              </tr>
              <tr>
                <td data-label="Empfänger">Stripe</td>
                <td data-label="Land">USA</td>
                <td data-label="Worauf sich die Übermittlung stützt">
                  Angemessenheitsbeschluss zum Datenschutzrahmen EU-USA (Stripe, LLC ist
                  zertifiziert)
                </td>
              </tr>
              <tr>
                <td data-label="Empfänger">PayPal</td>
                <td data-label="Land">Länder außerhalb des EWR</td>
                <td data-label="Worauf sich die Übermittlung stützt">
                  Standardvertragsklauseln der Europäischen Kommission (laut Datenschutzerklärung
                  von PayPal)
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          Eine Kopie der Standardvertragsklauseln erhalten Sie auf Anfrage
          an <a href="mailto:office@placeofmotion.com">office@placeofmotion.com</a>.
        </p>

        <h3>24. Speicherdauer im Überblick</h3>
        <p>
          Wir speichern personenbezogene Daten nur so lange, wie es für die jeweiligen Zwecke
          erforderlich ist oder gesetzliche Aufbewahrungspflichten bestehen. Danach werden die Daten
          gelöscht.
        </p>
        <div className="tabelle-rahmen">
          <table className="rechts-tabelle">
            <thead>
              <tr>
                <th scope="col">Daten</th>
                <th scope="col">Dauer</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td data-label="Daten">Server-Logdaten von Website und App bei Vercel</td>
                <td data-label="Dauer">kurz, Laufzeitprotokolle einen Tag</td>
              </tr>
              <tr>
                <td data-label="Daten">Konto, Profil und Praxisdaten</td>
                <td data-label="Dauer">
                  solange das Konto besteht. Löschung binnen 30 Tagen, nachdem Sie sie verlangt
                  haben
                </td>
              </tr>
              <tr>
                <td data-label="Daten">Sicherungskopien der Datenbank</td>
                <td data-label="Dauer">rund eine Woche, spätestens 30 Tage nach der Löschung</td>
              </tr>
              <tr>
                <td data-label="Daten">Daten im Speicher Ihres Browsers</td>
                <td data-label="Dauer">bis Sie sich abmelden oder die Websitedaten löschen</td>
              </tr>
              <tr>
                <td data-label="Daten">Zustimmung zu AGB und Vertrag</td>
                <td data-label="Dauer">Dauer des Kontos und drei Jahre danach</td>
              </tr>
              <tr>
                <td data-label="Daten">Bestell-, Zahlungs- und Rechnungsdaten</td>
                <td data-label="Dauer">
                  sieben Jahre ab Ende des Kalenderjahres (§ 132 Abs. 1 BAO)
                </td>
              </tr>
              <tr>
                <td data-label="Daten">Zähler des KI-Planassistenten</td>
                <td data-label="Dauer">90 Tage</td>
              </tr>
              <tr>
                <td data-label="Daten">Anfragen, Schriftverkehr, Kundenliste</td>
                <td data-label="Dauer">
                  bis sie nicht mehr erforderlich sind, spätestens drei Jahre nach Vertragsende
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>25. Müssen Sie Daten angeben? Automatisierte Entscheidungen</h3>
        <p>
          Für ein Konto brauchen wir Ihre E-Mail-Adresse und ein Passwort. Ohne diese Angaben können
          Sie die App nicht nutzen. Für einen bezahlten Tarif brauchen wir zusätzlich die Angaben
          für die Rechnung. Alle anderen Angaben sind freiwillig.
        </p>
        <p>
          Wir treffen keine Entscheidungen, die ausschließlich automatisiert ablaufen und Ihnen
          gegenüber rechtliche Wirkung haben (Art. 22 DSGVO). Wir erstellen keine Profile über Sie.
        </p>

        <h3>26. Ihre Rechte</h3>
        <p>Ihnen stehen nach der DSGVO folgende Rechte zu:</p>
        <ul>
          <li>Auskunft (Art. 15), Berichtigung (Art. 16) und Löschung (Art. 17)</li>
          <li>Einschränkung der Verarbeitung (Art. 18) und Datenübertragbarkeit (Art. 20)</li>
          <li>Widerspruch gegen Verarbeitungen auf Basis berechtigter Interessen (Art. 21)</li>
          <li>Widerruf erteilter Einwilligungen mit Wirkung für die Zukunft (Art. 7 Abs. 3)</li>
        </ul>
        <p>Derzeit stützen wir keine Verarbeitung auf eine Einwilligung.</p>
        <p>
          Ihre Praxisdaten können Sie in der App selbst ändern. Die E-Mail-Adresse Ihres Kontos
          ändern wir auf Ihre Anfrage. Zur Ausübung Ihrer Rechte genügt eine E-Mail
          an <a href="mailto:office@placeofmotion.com">office@placeofmotion.com</a>. Wir antworten
          binnen eines Monats (Art. 12 Abs. 3 DSGVO).
        </p>

        <h3>27. Beschwerderecht</h3>
        <p>
          Unbeschadet anderer Rechtsbehelfe haben Sie das Recht auf Beschwerde bei der
          Aufsichtsbehörde:
        </p>
        <p>
          Österreichische Datenschutzbehörde, Barichgasse 40-42, 1030 Wien
          <br />
          <a href="https://www.dsb.gv.at" target="_blank" rel="noopener noreferrer">dsb.gv.at</a> · <a href="mailto:dsb@dsb.gv.at">dsb@dsb.gv.at</a>
        </p>

        <h3>28. Änderungen dieser Erklärung</h3>
        <p>
          Wir passen diese Erklärung an, wenn sich die App, die eingesetzten Dienstleister oder die
          Rechtslage ändern. Es gilt die Fassung, die auf dieser Seite steht. Den Stand finden Sie
          oben.
        </p>
      </div>
    </main>
  )
}
