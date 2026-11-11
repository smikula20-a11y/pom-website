import { impressum } from '../content/site'

/** Vertrag zur Auftragsverarbeitung für Praxen. Wortlaut aus der freigegebenen Fassung,
 *  Änderungen nur nach Freigabe durch Stefan. Fassung und Stand stehen in content/site.ts. */
export default function Auftragsverarbeitung() {
  return (
    <main style={{ background: '#fff' }}>
      <div className="section prose">
        <h1>Vertrag zur Auftragsverarbeitung für Praxen</h1>
        <p className="lead">nach Art 28 der Datenschutz-Grundverordnung (DSGVO)</p>
        <p className="lead">{impressum.avvFassung}</p>

        <h2>Die Parteien</h2>
        <p>
          <strong>Die Praxis</strong> ist die Person oder das Unternehmen, das ein Konto bei Place
          of Motion angelegt hat. Sie ist Verantwortliche im Sinne der DSGVO.
        </p>
        <p>
          <strong>Place of Motion</strong> ist Stefan Mikula, Place of Motion, Einzelunternehmen,
          Feistritz 34, 9560 Feldkirchen, Österreich, GISA-Zahl 39738837,
          E-Mail <a href="mailto:office@placeofmotion.com">office@placeofmotion.com</a>. Place of
          Motion ist Auftragsverarbeiter.
        </p>
        <p>Place of Motion ist ein Einzelunternehmen ohne Mitarbeiterinnen und Mitarbeiter.</p>

        <h2>1. Worum es geht</h2>
        <p>
          1.1 Place of Motion betreibt die Web-Anwendung „Place of Motion“ unter
          app.placeofmotion.com. Die Praxis erstellt damit Heimübungspläne und gibt sie per QR-Code,
          Link oder Ausdruck an ihre Patientinnen und Patienten weiter. Dabei verarbeitet Place of
          Motion personenbezogene Daten im Auftrag der Praxis.
        </p>
        <p>
          1.2 Welche Daten das sind, wen sie betreffen, wozu sie verarbeitet werden und wie lange,
          steht in <strong>Anlage 1</strong>.
        </p>
        <p>
          1.3 Dieser Vertrag ergänzt die Allgemeinen Geschäftsbedingungen von Place of Motion (AGB).
          In Fragen des Datenschutzes geht er den AGB vor.
        </p>
        <p>
          1.4 Dieser Vertrag gilt für ein Konto. Arbeiten in einer Gruppenpraxis mehrere
          selbstständige Therapeutinnen und Therapeuten mit je eigenem Konto, schließt jede und
          jeder diesen Vertrag für das eigene Konto.
        </p>

        <h2>2. Abschluss und Dauer</h2>
        <p>
          2.1 Der Vertrag kommt zustande, wenn die Praxis ihm in der Anwendung zustimmt, beim
          Registrieren oder bei der ersten Anmeldung nach Veröffentlichung dieses Vertrags. Place of
          Motion speichert den Zeitpunkt der Zustimmung und die Fassung des Vertrags.
        </p>
        <p>
          2.2 Der Vertrag gilt, solange das Konto der Praxis besteht. Ein Wechsel des Tarifs ändert
          daran nichts.
        </p>
        <p>
          2.3 Der Vertrag endet erst, wenn Place of Motion die Daten der Praxis nach Punkt 9
          gelöscht hat.
        </p>

        <h2>3. Weisungen</h2>
        <p>
          3.1 Place of Motion verarbeitet die Daten nur auf dokumentierte Weisung der Praxis.
          Weisungen sind dieser Vertrag, die AGB und alles, was die Praxis in der Anwendung selbst
          auslöst, zum Beispiel einen Plan vergeben, abschalten oder löschen.
        </p>
        <p>
          3.2 Weitere Weisungen erteilt die Praxis per E-Mail
          an <a href="mailto:office@placeofmotion.com">office@placeofmotion.com</a>, und zwar von
          der E-Mail-Adresse, mit der das Konto angemeldet ist.
        </p>
        <p>
          3.3 Place of Motion verwendet die Daten nicht für eigene Zwecke, gibt sie nicht an Dritte
          weiter und verwendet sie nicht zum Training von Systemen künstlicher Intelligenz. Dritte
          in diesem Sinn sind nicht die Dienstleister nach Anlage 3.
        </p>
        <p>
          3.4 Die Praxis beauftragt Place of Motion, aus den Daten Gesamtzahlen zu bilden, die keine
          Person und keine einzelne Praxis erkennen lassen, zum Beispiel die Zahl aller vergebenen
          Pläne. Place of Motion verwendet diese Zahlen, um den Dienst zu betreiben und zu
          verbessern und um über den Dienst zu berichten. Place of Motion nennt sie nie zusammen mit
          dem Namen einer Praxis.
        </p>
        <p>
          3.5 Hält Place of Motion eine Weisung für rechtswidrig, teilt Place of Motion das der
          Praxis unverzüglich mit.
        </p>
        <p>
          3.6 Verlangt eine Behörde von Place of Motion die Herausgabe von Daten der Praxis,
          informiert Place of Motion die Praxis unverzüglich, soweit das gesetzlich erlaubt ist, und
          verweist die Behörde an die Praxis.
        </p>

        <h2>4. Vertraulichkeit</h2>
        <p>
          4.1 Stefan Mikula behandelt die Daten vertraulich. Das gilt auch nach dem Ende dieses
          Vertrags.
        </p>
        <p>
          4.2 Setzt Place of Motion künftig weitere Personen ein, die Zugriff auf die Daten haben,
          verpflichtet Place of Motion sie vorher schriftlich zur Vertraulichkeit.
        </p>
        <p>
          4.3 Place of Motion beachtet, dass die Daten der beruflichen Verschwiegenheitspflicht der
          Praxis unterliegen.
        </p>

        <h2>5. Sicherheit</h2>
        <p>
          5.1 Place of Motion trifft die technischen und organisatorischen Maßnahmen
          nach <strong>Anlage 2</strong> (Art 32 DSGVO).
        </p>
        <p>
          5.2 Place of Motion darf die Maßnahmen ändern, wenn das Schutzniveau dadurch nicht sinkt.
          Die jeweils aktuelle Anlage 2 stellt Place of Motion der Praxis zur Verfügung.
        </p>
        <p>
          5.3 Heimübungspläne können Rückschlüsse auf die Gesundheit zulassen. Place of Motion
          behandelt sie als Gesundheitsdaten im Sinne des Art 9 DSGVO.
        </p>

        <h2>6. Unterauftragsverarbeiter</h2>
        <p>
          6.1 Die Praxis erlaubt Place of Motion, die in <strong>Anlage 3 Teil A</strong> genannten
          Unterauftragsverarbeiter einzusetzen.
        </p>
        <p>
          6.2 Die Praxis erlaubt Place of Motion allgemein, Unterauftragsverarbeiter zu wechseln
          oder weitere einzusetzen. Place of Motion kündigt jede solche Änderung mindestens 14 Tage
          vorher per E-Mail an die Adresse des Kontos an.
        </p>
        <p>
          6.3 Die Praxis kann der Änderung bis zu ihrem Wirksamwerden per E-Mail widersprechen. Kann
          Place of Motion die Änderung nicht abwenden, können beide Seiten den Vertrag über die
          Nutzung und diesen Vertrag sofort beenden. Im Voraus bezahlte Entgelte für die Zeit nach
          dem Ende zahlt Place of Motion anteilig zurück.
        </p>
        <p>
          6.4 Place of Motion schließt mit jedem Unterauftragsverarbeiter einen Vertrag, der ihm im
          Wesentlichen dieselben Datenschutzpflichten auferlegt wie dieser Vertrag (Art 28 Abs 4
          DSGVO).
        </p>
        <p>
          6.5 Kommt ein Unterauftragsverarbeiter seinen Datenschutzpflichten nicht nach, haftet
          Place of Motion der Praxis dafür nach Punkt 11.
        </p>
        <p>
          6.6 Die Unterauftragsverarbeiter setzen ihrerseits weitere Dienstleister ein. Wo deren
          Listen zu finden sind, steht in Anlage 3. Über Änderungen in diesen Listen informiert
          Place of Motion die Praxis, wenn Place of Motion davon erfährt und die Änderung den
          Speicherort der Patientendaten oder die Grundlage einer Übermittlung in ein Drittland
          betrifft.
        </p>

        <h2>7. Ort der Verarbeitung und Übermittlung in Drittländer</h2>
        <p>
          7.1 Die Patientendaten werden in einer Datenbank in der Europäischen Union gespeichert,
          Region Frankfurt am Main.
        </p>
        <p>
          7.2 Einzelne Dienstleister sitzen außerhalb der Europäischen Union oder können von dort
          auf Daten zugreifen. Welche das sind, welche Daten sie erhalten und worauf sich die
          Übermittlung stützt, steht in <strong>Anlage 3</strong>.
        </p>
        <p>
          7.3 Die Praxis weist Place of Motion an, die Daten in dem in Anlage 3 beschriebenen Umfang
          auch in Drittländer zu übermitteln.
        </p>
        <p>
          7.4 Die Angaben in Anlage 3 betreffen nur die Zulässigkeit der Übermittlung in ein
          Drittland (Kapitel V DSGVO). Die Rechtsgrundlage für die Verarbeitung selbst (Art 6 und
          Art 9 DSGVO) bestimmt die Praxis.
        </p>

        <h2>8. Unterstützung der Praxis</h2>
        <p>
          8.1 <strong>Rechte der Patientinnen und Patienten.</strong> Die Praxis kann in der
          Anwendung selbst Daten berichtigen, Pläne abschalten und löschen, Patientinnen und
          Patienten löschen und Pläne ausdrucken oder als PDF speichern. Bereits erstellte Belege
          bleiben mit Name und Anschrift in der Liste der Belege, auch wenn die Praxis die Person
          löscht, weil die Praxis Belege aufbewahren muss. Auf Verlangen der Praxis löscht Place of
          Motion auch diese. Braucht die Praxis darüber hinaus Hilfe, um eine Anfrage zu
          beantworten, unterstützt Place of Motion sie auf Anfrage.
        </p>
        <p>
          8.2 Wendet sich eine betroffene Person direkt an Place of Motion, leitet Place of Motion
          die Anfrage unverzüglich an die Praxis weiter und teilt das der Person mit. Lässt sich die
          Praxis nicht zuordnen, bittet Place of Motion die Person, sich an ihre Praxis zu wenden.
        </p>
        <p>
          8.3 <strong>Verletzung des Schutzes personenbezogener Daten.</strong> Place of Motion
          meldet der Praxis jede Verletzung, die ihre Daten betrifft, unverzüglich und spätestens
          binnen 48 Stunden, nachdem Place of Motion davon erfahren hat. Die Meldung geht per E-Mail
          an die Adresse des Kontos. Sie enthält, soweit bekannt, die Angaben nach Art 33 Abs 3
          DSGVO. Fehlende Angaben reicht Place of Motion nach.
        </p>
        <p>
          8.4 Erfährt Place of Motion von der Verletzung durch einen Unterauftragsverarbeiter, läuft
          die Frist ab dessen Meldung an Place of Motion. Die Unterauftragsverarbeiter sagen Place
          of Motion teils längere Fristen zu (siehe Anlage 3).
        </p>
        <p>
          8.5 Ob eine Verletzung der Datenschutzbehörde oder den betroffenen Personen gemeldet wird,
          entscheidet die Praxis. Place of Motion nimmt diese Meldung nicht vorweg.
        </p>
        <p>
          8.6 <strong>Weitere Pflichten der Praxis.</strong> Place of Motion unterstützt die Praxis
          auf Anfrage bei ihren Pflichten nach Art 32 bis 36 DSGVO (Sicherheit, Meldungen,
          Datenschutz-Folgenabschätzung, vorherige Konsultation), soweit es um die Verarbeitung
          durch Place of Motion geht.
        </p>
        <p>
          8.7 <strong>Kontrolle.</strong> Place of Motion stellt der Praxis auf Anfrage alle
          Informationen zur Verfügung, die sie braucht, um die Einhaltung dieses Vertrags zu prüfen.
          Dazu gehören die Verträge mit den Unterauftragsverarbeitern und schriftliche Auskünfte.
          Reicht das nicht aus, kann die Praxis nach Terminvereinbarung selbst prüfen oder eine zur
          Verschwiegenheit verpflichtete Person damit beauftragen. Place of Motion betreibt keine
          eigenen Server. Die Prüfung findet deshalb in der Regel per Videogespräch mit Einsicht in
          die Einstellungen der Dienste statt.
        </p>
        <p>
          8.8 Place of Motion führt ein Verzeichnis der Verarbeitungstätigkeiten nach Art 30 Abs 2
          DSGVO.
        </p>

        <h2>9. Ende des Vertrags, Rückgabe und Löschung</h2>
        <p>
          9.1 Die Praxis kann ihr Konto jederzeit per E-Mail
          an <a href="mailto:office@placeofmotion.com">office@placeofmotion.com</a> löschen lassen.
          Die Kündigung eines bezahlten Tarifs nach den AGB löscht das Konto nicht.
        </p>
        <p>
          9.2 Vor der Löschung kann die Praxis ihre Pläne als PDF speichern und ihre Honorarnoten
          als PDF und als Liste (CSV) herunterladen. Auf Wunsch stellt Place of Motion der Praxis
          vor der Löschung einmal einen Auszug ihrer Daten in einem gängigen, maschinenlesbaren
          Format bereit.
        </p>
        <p>
          9.3 Place of Motion löscht die Daten der Praxis binnen 30 Tagen, nachdem die Praxis die
          Löschung verlangt hat. Gelöscht werden die Patientendaten, die Pläne, die Rechnungsdaten,
          die hochgeladenen Videos und Bilder, die Aufrufdaten und das Konto. Mit der Löschung
          funktionieren die ausgegebenen Links und QR-Codes nicht mehr.
        </p>
        <p>
          9.4 Sicherungskopien werden im regulären Sicherungszyklus überschrieben, spätestens 30
          Tage nach der Löschung.
        </p>
        <p>9.5 Place of Motion bestätigt der Praxis die Löschung per E-Mail.</p>
        <p>
          9.6 Place of Motion löscht nicht, soweit ein Gesetz der Europäischen Union oder
          Österreichs Place of Motion zur Aufbewahrung verpflichtet.
        </p>
        <p>
          9.7 <strong>Aufbewahrungspflichten der Praxis.</strong> Place of Motion ist kein Archiv.
          Pflichten der Praxis zur Dokumentation und Aufbewahrung, etwa für die
          Patientendokumentation und für Rechnungen, erfüllt die Praxis selbst. Sie speichert oder
          druckt dafür rechtzeitig, was sie braucht.
        </p>

        <h2>10. Pflichten der Praxis</h2>
        <p>
          10.1 Die Praxis ist dafür verantwortlich, dass sie die Daten verarbeiten darf, und
          informiert ihre Patientinnen und Patienten über die Verarbeitung (Art 13 DSGVO). Die
          Angaben, die sie dafür braucht, stehen in diesem Vertrag und seinen Anlagen. In der
          Patientenansicht ist zusätzlich ein kurzer Datenschutzhinweis abrufbar.
        </p>
        <p>
          10.2 Die Praxis gibt nur Daten ein, die sie für den Heimübungsplan und für die Honorarnote
          braucht. Statt des Namens kann sie eine Nummer eintragen.
        </p>
        <p>
          10.3 Die Praxis filmt und fotografiert für hochgeladene Videos und Bilder keine
          Patientinnen und Patienten.
        </p>
        <p>
          10.4 In das Eingabefeld des KI-Planassistenten schreibt die Praxis keine Namen und keine
          anderen Angaben, mit denen eine Person erkennbar ist.
        </p>
        <p>
          10.5 Die Praxis schickt Place of Motion keine Patientendaten per E-Mail oder Messenger.
          Braucht Place of Motion für eine Hilfestellung Einblick, sieht Place of Motion die Daten
          in der Datenbank ein.
        </p>
        <p>
          10.6 Ein Konto gilt für eine Person. Die Praxis hält ihre Zugangsdaten geheim und meldet
          Place of Motion unverzüglich, wenn sie einen Missbrauch vermutet.
        </p>

        <h2>11. Haftung</h2>
        <p>
          11.1 Für die Haftung zwischen der Praxis und Place of Motion gilt Punkt 10 der AGB. Das
          gilt auch für Schäden, die ein Unterauftragsverarbeiter verursacht, und für den Rückgriff
          nach Art 82 Abs 5 DSGVO.
        </p>
        <p>11.2 Ansprüche betroffener Personen nach Art 82 DSGVO bleiben unberührt.</p>

        <h2>12. Schlussbestimmungen</h2>
        <p>
          12.1 Place of Motion kann diesen Vertrag ändern, wenn sich die Rechtslage, die Anwendung
          oder die eingesetzten Dienstleister ändern. Place of Motion kündigt die Änderung
          mindestens 30 Tage vorher per E-Mail an. Für einen Wechsel von Unterauftragsverarbeitern
          gilt Punkt 6. Ist die Praxis nicht einverstanden, kann sie bis zum Wirksamwerden kündigen
          und ihr Konto löschen lassen.
        </p>
        <p>12.2 Es gilt österreichisches Recht. Für den Gerichtsstand gilt Punkt 13 der AGB.</p>
        <p>12.3 Ist eine Bestimmung unwirksam, bleibt der Vertrag im Übrigen wirksam.</p>
        <p>
          12.4 Zuständige Aufsichtsbehörde ist die österreichische Datenschutzbehörde, Barichgasse
          40-42, 1030 Wien.
        </p>

        <h2 className="teil">Anlage 1: Gegenstand, Daten, betroffene Personen, Dauer</h2>

        <h3>A. Gegenstand und Zweck</h3>
        <p>
          Bereitstellung und Betrieb der Web-Anwendung „Place of Motion“. Die Praxis legt
          Patientinnen und Patienten an, stellt Heimübungspläne mit Videos zusammen und gibt sie
          aus. Patientinnen und Patienten öffnen ihren Plan über einen Link oder QR-Code ohne
          Anmeldung. Verkauft die Praxis einen Plan, erstellt die Anwendung eine Honorarnote im
          Namen der Praxis.
        </p>

        <h3>B. Betroffene Personen</h3>
        <ul>
          <li>Patientinnen und Patienten der Praxis</li>
          <li>
            die Person, die das Konto nutzt, soweit ihre Daten in den Plänen und Honorarnoten stehen
          </li>
        </ul>

        <h3>C. Arten von Daten</h3>
        <p>
          <strong>1. Stammdaten der Patientinnen und Patienten.</strong> Name oder, nach Wahl der
          Praxis, eine Nummer. Freiwillig: E-Mail-Adresse und Anschrift (Straße, Hausnummer,
          Postleitzahl, Ort, Land). Die Anschrift braucht die Praxis nur für eine Honorarnote. Die
          Anwendung verschickt keine E-Mails an Patientinnen und Patienten.
        </p>
        <p>
          <strong>2. Heimübungspläne.</strong> Übungsauswahl, Dosierung, Hinweise, Name des Plans,
          interne Notizen der Praxis, Zeitpunkt der Vergabe, ob der Plan aktiv ist. Diese Daten
          können Rückschlüsse auf die Gesundheit zulassen (Art 9 DSGVO). Die internen Notizen werden
          den Patientinnen und Patienten nicht angezeigt und nicht an ihr Gerät übertragen.
        </p>
        <p>
          <strong>3. Rechnungsdaten bei verkauften Plänen.</strong> Betrag, Zahlungsart (bar, Karte,
          Überweisung), Zahlungsstatus, Nummer und Datum der Honorarnote, Storno mit Grund, Name und
          Anschrift der Patientin oder des Patienten zum Zeitpunkt der Honorarnote. Die Honorarnote
          selbst entsteht als PDF im Browser der Praxis und wird nicht auf einem Server abgelegt.
          Place of Motion wickelt keine Zahlungen ab und sieht keine Karten- oder Bankdaten der
          Patientinnen und Patienten.
        </p>
        <p>
          <strong>4. Selbst hochgeladene Videos.</strong> Videos, die die Praxis als eigene Übungen
          hochlädt, samt zwei Standbildern je Video. Sie können die Therapeutin oder den Therapeuten
          zeigen. Die Standbilder liegen in einer Ablage, die ohne Anmeldung lesbar ist, wenn man
          die genaue Adresse kennt.
        </p>
        <p>
          <strong>5. Selbst hochgeladene Bilder.</strong> Bilder, die die Praxis als Anfangs- oder
          Endposition einer Übung hochlädt. Sie werden im Plan gespeichert und mit dem Plan
          angezeigt.
        </p>
        <p>
          <strong>6. Aufrufdaten.</strong> Bei jedem Aufruf eines Plans über den Link, auch mit
          ungültigem Code: Zeitpunkt, interne Kennung des Plans, Streuwert des Zugangscodes,
          Ergebnis (gültig, inaktiv, unbekannt), eine pseudonyme Gerätekennung als gesalzener
          Streuwert aus Browserkennung und IP-Adresse, die Geräteart (Mobilgerät, Computer,
          unbekannt) und ob der Aufruf aus einer angemeldeten Sitzung kam. Nicht gespeichert werden
          die IP-Adresse und der Zugangscode im Klartext. Nicht erhoben wird, welche Übung angesehen
          wurde und wie lange. Zweck: Nachweis, ob und wann ein Plan aufgerufen wurde, und
          Fehlersuche. Die Praxis sieht diese Daten in der Anwendung derzeit nicht. Place of Motion
          gibt der Praxis auf Anfrage Auskunft.
        </p>
        <p>
          <strong>7. Eingaben in den KI-Planassistenten (nur Tarif PRO, nur wenn die Praxis ihn
          benutzt).</strong> Der Text, den die Praxis in das Eingabefeld schreibt, und die Liste der
          Übungen der Bibliothek. Aus der Patientenverwaltung wird nichts mitgeschickt. Die Praxis
          schreibt keine Namen in das Feld (Punkt 10.4).
        </p>

        <h3>D. Was nicht unter diesen Vertrag fällt</h3>
        <p>
          Die Daten der Praxis als Kundin von Place of Motion verarbeitet Place of Motion als
          eigener Verantwortlicher. Das sind die Anmeldedaten (E-Mail-Adresse, Passwort als
          Streuwert, Anmeldezeitpunkte), die Praxis- und Rechnungsangaben im Profil (Name der
          Praxis, Anschrift, Telefon, E-Mail, Steuernummer, UID, IBAN, BIC, Logo), die Abrechnung
          des Tarifs und E-Mails an die Praxis. Dafür gilt die Datenschutzerklärung von Place of
          Motion.
        </p>
        <p>
          Die Zahlung durch Patientinnen und Patienten über einen Online-Bezahllink ist nicht Teil
          der Leistung für Praxen und nicht freigeschaltet.
        </p>

        <h3>E. Dauer</h3>
        <ul>
          <li>
            Die Daten bleiben gespeichert, solange das Konto besteht und die Praxis sie nicht
            löscht.
          </li>
          <li>
            Ein ausgegebener Plan bleibt über seinen Link abrufbar, bis die Praxis ihn abschaltet
            oder löscht oder die Patientin oder den Patienten löscht. Die Anwendung schaltet Pläne
            nicht von selbst ab.
          </li>
          <li>
            Aufrufdaten bleiben auch nach dem Löschen eines Plans gespeichert, längstens bis zur
            Löschung des Kontos nach Punkt 9. Auf Weisung der Praxis löscht Place of Motion sie
            früher.
          </li>
          <li>Nach dem Ende gilt Punkt 9.</li>
        </ul>

        <h2 className="teil">Anlage 2: Technische und organisatorische Maßnahmen</h2>
        <p>
          Stand November 2026. Hier steht nur, was tatsächlich umgesetzt ist. Place of Motion hat keine
          Zertifizierung und lässt keine Penetrationstests durchführen.
        </p>

        <h3>A. Vertraulichkeit</h3>
        <ol>
          <li>
            <strong>Keine eigenen Server.</strong> Die Verarbeitung findet in den Rechenzentren der
            Dienstleister nach Anlage 3 statt. Der Arbeitsplatzrechner von Place of Motion steht in
            einem versperrbaren Raum, mit aktivem Virenschutz und aktiver Firewall.
          </li>
          <li>
            <strong>Zugang der Praxis.</strong> Anmeldung mit E-Mail-Adresse und Passwort. Ein
            zweiter Faktor ist für die Konten der Praxen nicht eingerichtet. Die Anwendung meldet
            niemanden automatisch ab.
          </li>
          <li>
            <strong>Zugang von Place of Motion.</strong> Die Verwaltungskonten bei Supabase, Vercel,
            Bunny, easyname und Vimeo sind mit Zwei-Faktor-Anmeldung gesichert. Das Konto beim
            KI-Anbieter hat kein Passwort. Die Anmeldung läuft über einen Einmal-Link an das
            E-Mail-Postfach von Place of Motion.
          </li>
          <li>
            <strong>Trennung der Praxen.</strong> Zugriffsregeln in der Datenbank sorgen dafür, dass
            ein Konto nur die eigenen Patientinnen und Patienten, Pläne, Rechnungsdaten und Videos
            sieht.
          </li>
          <li>
            <strong>Zugang der Patientinnen und Patienten.</strong> Nur über einen zufälligen
            Zugangscode mit 16 Zeichen im Link. Die Patientenansicht liest den Plan über eine eigene
            Datenbankfunktion. Die Tabellen mit Patientendaten sind ohne Anmeldung nicht lesbar.
          </li>
          <li>
            <strong>Kontoart.</strong> Die Kontoart (BASIC, PRO, Einrichtung) kann nur Place of
            Motion ändern.
          </li>
          <li>
            <strong>Pseudonymisierung.</strong> In den Aufrufdaten stehen weder IP-Adresse noch
            Zugangscode im Klartext. Die Praxis kann statt des Namens eine Nummer führen.
          </li>
          <li>
            <strong>Schlüssel.</strong> Die Schlüssel für den Videodienst und den KI-Dienst liegen
            nur am Server, nicht im Browser.
          </li>
        </ol>

        <h3>B. Integrität</h3>
        <ol start={9}>
          <li>
            <strong>Verschlüsselte Übertragung.</strong> Jede Übertragung läuft über TLS (HTTPS).
          </li>
          <li>
            <strong>Verschlüsselte Speicherung.</strong> Die Datenbank und ihre Sicherungen sind
            beim Dienstleister verschlüsselt gespeichert (AES-256).
          </li>
          <li>
            <strong>Videos.</strong> Die Adressen der selbst hochgeladenen Videos werden am Server
            signiert und laufen nach 6 Stunden ab.
          </li>
          <li>
            <strong>Nachvollziehbarkeit.</strong> Die Anwendung speichert zu jeder Patientin, jedem
            Patienten und jedem Plan, wann der Eintrag angelegt wurde. Änderungen und Löschungen
            werden nicht protokolliert.
          </li>
        </ol>

        <h3>C. Verfügbarkeit</h3>
        <ol start={13}>
          <li>
            <strong>Sicherungen.</strong> Tägliche Sicherung der Datenbank beim Dienstleister in
            Frankfurt, Aufbewahrung rund eine Woche. Dateien in der Ablage (hochgeladene Bilder und
            Standbilder) sind nicht Teil dieser Sicherung.
          </li>
          <li><strong>Keine zugesagte Verfügbarkeit.</strong> Es gilt Punkt 9 der AGB.</li>
          <li>
            <strong>Notfallplan.</strong> Für den Fall einer Datenpanne liegt ein schriftlicher
            Ablauf vor.
          </li>
        </ol>

        <h3>D. Datenschutzfreundliche Gestaltung</h3>
        <ol start={16}>
          <li>Die Patientenansicht kommt ohne Anmeldung und ohne Cookies zur Analyse aus.</li>
          <li>
            In der Anwendung sind keine Werkzeuge Dritter zur Reichweitenmessung oder
            Fehlerverfolgung eingebunden.
          </li>
          <li>Schriften und QR-Codes erzeugt die Anwendung selbst, ohne fremden Dienst.</li>
          <li>
            Videos werden erst nach dem Antippen geladen. Vimeo-Videos sind mit der Einstellung
            „dnt=1“ eingebunden. Vimeo erfährt beim Abspielen nur den Namen der Seite, nicht den
            Link mit dem Zugangscode.
          </li>
          <li>
            Interne Notizen werden nicht an das Gerät der Patientinnen und Patienten übertragen.
          </li>
          <li>
            Die Honorarnote entsteht im Browser der Praxis und wird nicht auf einem Server abgelegt.
          </li>
          <li>
            Der KI-Planassistent erhält keine Daten aus der Patientenverwaltung. Er ist auf 30
            Anfragen je Konto und Tag begrenzt.
          </li>
          <li>Die Anwendung ist für Suchmaschinen gesperrt.</li>
        </ol>

        <h3>E. Überprüfung</h3>
        <ol start={24}>
          <li>
            Place of Motion wählt Unterauftragsverarbeiter anhand ihrer
            Auftragsverarbeitungsverträge und ihrer dokumentierten Sicherheitsmaßnahmen aus. Eine
            ISO-Zertifizierung der Dienstleister hat Place of Motion nicht gesondert geprüft.
          </li>
          <li>
            Place of Motion überprüft diese Anlage und die Angaben in Anlage 3 mindestens einmal
            jährlich.
          </li>
        </ol>

        <h2 className="teil">Anlage 3: Unterauftragsverarbeiter und eingebundene Dienste</h2>
        <p>
          Stand November 2026.
        </p>

        <h3>Teil A: Unterauftragsverarbeiter</h3>
        <div className="tabelle-rahmen">
          <table className="rechts-tabelle karten">
            <thead>
              <tr>
                <th scope="col">Dienst</th>
                <th scope="col">Firma und Sitz</th>
                <th scope="col">Zweck</th>
                <th scope="col">Welche Daten</th>
                <th scope="col">Ort</th>
                <th scope="col">Grundlage der Übermittlung</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td data-label="Dienst">Supabase</td>
                <td data-label="Firma und Sitz">
                  Supabase Pte. Ltd, 65 Chulia Street, #38-02/03, OCBC Centre, Singapur 049513
                </td>
                <td data-label="Zweck">Datenbank, Anmeldung, Dateiablage, Serverfunktionen</td>
                <td data-label="Welche Daten">
                  Alle Daten nach Anlage 1. Hier liegen die Patientendaten.
                </td>
                <td data-label="Ort">
                  Speicherung und vorrangige Verarbeitung in der EU, Region Frankfurt am Main.
                  Zugriffe für Betrieb und Unterstützung sowie Protokolldaten können in die USA und
                  nach Singapur reichen.
                </td>
                <td data-label="Grundlage der Übermittlung">
                  Standarddatenschutzklauseln der EU-Kommission (Durchführungsbeschluss (EU)
                  2021/914), Modul 3. Der Auftragsverarbeitungsvertrag ist Teil der
                  Nutzungsbedingungen von Supabase, Fassung 01.08.2026. Die Folgenabschätzung von
                  Supabase (Transfer Impact Assessment vom 14.03.2025) gibt es auf Anfrage.
                </td>
              </tr>
              <tr>
                <td data-label="Dienst">Vercel</td>
                <td data-label="Firma und Sitz">
                  Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA
                </td>
                <td data-label="Zweck">Auslieferung der Web-Anwendung (Programmdateien)</td>
                <td data-label="Welche Daten">
                  Keine Planinhalte, keine Namen, keine Notizen. Beim Aufruf erhält Vercel die
                  IP-Adresse, die Browserkennung und die aufgerufene Adresse. Bei der
                  Patientenansicht enthält diese Adresse den Zugangscode. Vercel speichert das kurz
                  in seinem Protokoll.
                </td>
                <td data-label="Ort">
                  Weltweites Auslieferungsnetz. Hauptverarbeitung laut Vertrag von Vercel in den
                  USA.
                </td>
                <td data-label="Grundlage der Übermittlung">
                  Angemessenheitsbeschluss für den Datenschutzrahmen EU-USA (Durchführungsbeschluss
                  (EU) 2023/1795). Vercel ist in der Data Privacy Framework List als „Active“
                  geführt. Der Vertrag von Vercel
                  enthält zusätzlich die Standarddatenschutzklauseln. Auftragsverarbeitungsvertrag
                  liegt vor (08.09.2026).
                </td>
              </tr>
              <tr>
                <td data-label="Dienst">Bunny</td>
                <td data-label="Firma und Sitz">
                  BunnyWay d.o.o., Dunajska cesta 165, 1000 Ljubljana, Slowenien
                </td>
                <td data-label="Zweck">
                  Speicherung und Auslieferung der selbst hochgeladenen Videos
                </td>
                <td data-label="Welche Daten">
                  Die Videos und, beim Abspielen, die IP-Adresse des Geräts
                </td>
                <td data-label="Ort">
                  EU. Speicher Frankfurt am Main. Auslieferung im Konto von Place of Motion auf
                  Standorte in der EU eingestellt.
                </td>
                <td data-label="Grundlage der Übermittlung">
                  Keine Übermittlung in ein Drittland. Auftragsverarbeitungsvertrag liegt vor
                  (07.09.2026).
                </td>
              </tr>
              <tr>
                <td data-label="Dienst">easyname</td>
                <td data-label="Firma und Sitz">
                  easyname GmbH, Canettistraße 5/10, 1100 Wien, Österreich
                </td>
                <td data-label="Zweck">
                  Versand der System-E-Mails an die Praxis (Bestätigung der Registrierung,
                  Anmeldelink, Passwort zurücksetzen)
                </td>
                <td data-label="Welche Daten">E-Mail-Adresse der Praxis. Keine Patientendaten.</td>
                <td data-label="Ort">EU oder EWR (laut Vertrag)</td>
                <td data-label="Grundlage der Übermittlung">
                  Keine Übermittlung in ein Drittland. Auftragsverarbeitungsvertrag liegt vor
                  (17.09.2026).
                </td>
              </tr>
              <tr>
                <td data-label="Dienst">Anthropic</td>
                <td data-label="Firma und Sitz">
                  Anthropic Ireland, Limited, Irland (Vertragspartner für Kunden im EWR);
                  Verarbeitung auch durch Anthropic, PBC, USA
                </td>
                <td data-label="Zweck">
                  KI-Planassistent. Nur Tarif PRO, nur wenn die Praxis ihn benutzt.
                </td>
                <td data-label="Welche Daten">
                  Der Text, den die Praxis eingibt, und die Liste der Bibliotheksübungen. Keine
                  Daten aus der Patientenverwaltung. Anthropic darf die Eingaben nicht zum Training
                  von Modellen verwenden (Commercial Terms, Punkt B).
                </td>
                <td data-label="Ort">EU und USA</td>
                <td data-label="Grundlage der Übermittlung">
                  Standarddatenschutzklauseln der EU-Kommission (Durchführungsbeschluss (EU)
                  2021/914), Modul 2 und 3, im Data Processing Addendum von Anthropic enthalten
                  (Punkt I.1). Das Data Processing Addendum ist Teil der Commercial Terms (Punkt C).
                  Löschung binnen 30 Tagen nach Vertragsende (Punkt H.1).
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          <strong>Weitere Dienstleister der Unterauftragsverarbeiter.</strong> Supabase führt seine
          Liste unter supabase.com/legal/customer-resources/subprocessor-list. Die Datenbanken
          laufen auf Amazon Web Services. Vercel setzt unter anderem Amazon Web Services, Microsoft
          Azure und Google Cloud ein (Liste unter security.vercel.com). Bunny führt seine Liste
          unter bunny.net/gdpr/sub-processors. easyname stellt seine Liste im Kundenportal bereit.
        </p>
        <p>
          <strong>Meldefristen der Unterauftragsverarbeiter bei einer Datenpanne.</strong> Bunny 48
          Stunden, Supabase nach Möglichkeit 48 Stunden, Anthropic 48 Stunden, Vercel und easyname
          unverzüglich ohne bestimmte Stundenfrist.
        </p>

        <h3>Teil B: Eingebundener Dienst, kein Unterauftragsverarbeiter</h3>
        <p>
          Vimeo verarbeitet die Daten, die beim Laden anfallen, nicht auf Weisung von Place of
          Motion, sondern zu eigenen Zwecken und in eigener Verantwortung. Die Praxis braucht für
          diese Weitergabe eine Rechtsgrundlage und muss ihre Patientinnen und Patienten darüber
          informieren.
        </p>
        <div className="tabelle-rahmen">
          <table className="rechts-tabelle karten">
            <thead>
              <tr>
                <th scope="col">Dienst</th>
                <th scope="col">Firma und Sitz</th>
                <th scope="col">Was der Dienst erhält</th>
                <th scope="col">Grundlage der Übermittlung</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td data-label="Dienst">Vimeo</td>
                <td data-label="Firma und Sitz">
                  Vimeo.com, Inc., 330 West 34th Street, 10th Floor, New York, NY 10001, USA
                </td>
                <td data-label="Was der Dienst erhält">
                  Die Videos und Standbilder der Übungsbibliothek von Place of Motion kommen von
                  Vimeo. Die Standbilder werden mit der Seite geladen, ein Video erst nach dem
                  Antippen. Vimeo erhält dabei die IP-Adresse des Geräts und die Adresse des
                  Standbilds oder Videos. Daraus ist erkennbar, welche Bibliotheksübungen auf dem
                  Gerät angezeigt werden. Das gilt für die Patientenansicht und für die Arbeit der
                  Praxis in der Anwendung. Vimeo erhält keine Namen, keine Notizen und keinen
                  Zugangscode.
                </td>
                <td data-label="Grundlage der Übermittlung">
                  Angemessenheitsbeschluss für den Datenschutzrahmen EU-USA (Durchführungsbeschluss
                  (EU) 2023/1795). Vimeo ist in der Data Privacy Framework List als „Active“
                  geführt.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          Liefert Place of Motion die Übungsbibliothek künftig über Bunny aus, gilt dafür die Zeile
          zu Bunny in Teil A. Das ist kein neuer Unterauftragsverarbeiter.
        </p>
      </div>
    </main>
  )
}
