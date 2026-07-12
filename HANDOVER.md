# HANDOVER — pom-website sicher von unterwegs weiterbearbeiten

> **Zweck:** Du kannst die Wurzel-Website von **jedem Rechner** (z. B. auf der Reha) sicher
> weiterbearbeiten — **ohne** dass auf dem fremden PC etwas hängen bleibt oder Zugangsdaten
> abgegriffen werden. Leitprinzip nach dem Defacement vom 06.07.2026:
> **Ein fremder PC gilt als potenziell kompromittiert (Keylogger, Malware, geteilter Rechner).**

---

## 0. Das Wichtigste in 30 Sekunden

- **Repo:** `github.com/smikula20-a11y/pom-website` (privat). **Kein Secret im Repo** — `.env` und
  `*.sql` sind ge-ignored → das Repo ist **gefahrlos in jedem Browser zu öffnen**.
- **Arbeiten:** **in der Cloud / im Browser**, nie lokal klonen. Empfohlen: **Claude Code im Browser**
  (`claude.ai/code`) oder **GitHub Codespaces**.
- **Login:** **mit dem Handy** (Passkey / „mit Gerät anmelden" per QR), **Inkognito-Fenster**, danach
  **abmelden + Sitzung widerrufen**.
- **Guardrail:** `main` = Vercel-Produktion. Arbeit **nur auf `feat/wurzel-website`** → Pull Request →
  **Merge machst ausschließlich du.**

---

## 1. Stand (08.07.2026)

- `main` = minimales Vite-Gerüst (Vercel-Produktion, zeigt „Website im Aufbau").
- `feat/wurzel-website` = **vollständige neue Website** (Hero, Demo, Problem, Funktionen, „So
  funktioniert's", Honorarnote, Für wen, Sarah-Testimonial, Gründer, Final-CTA, Footer + Impressum/
  Datenschutz). Build grün, Preview Desktop + Mobile geprüft.
- **Nächster Schritt:** Vercel-Preview des Feature-Branch reviewen → PR mergen (du) → Production zeigt die
  fertige Seite.

Offen vor Go-live siehe Abschnitt 7.

---

## 2. Sicher von einem fremden PC — die 5 Grundregeln

1. **Behandle den PC als kompromittiert.** Tippe dort **nie** ein Master-Passwort oder ein Secret.
2. **Dein Handy ist der Sicherheitsanker** (Bitwarden + Biometrie). Logins über **Passkey** oder
   **„mit Handy anmelden" (QR-Code)** — so bekommt der fremde PC das Passwort nie zu sehen.
3. **Immer ein privates/Inkognito-Fenster.** Passwörter **nicht** im Browser speichern. Am Ende
   **überall abmelden und das Fenster schließen.**
4. **Nichts bleibt lokal:** kein `git clone`, keine Installation, keine Downloads von Repo, DB-Dumps
   oder Exporten. Gearbeitet wird in der Cloud.
5. **Danach aufräumen:** vom Handy/vertrauten Gerät die **aktiven Sitzungen prüfen und die fremde
   widerrufen** — bei GitHub, Vercel, Notion, Google und Anthropic/claude.ai.

---

## 3. Womit du weiterarbeitest (Browser-only, nichts bleibt auf dem PC)

| Weg | Wofür | Hinweis |
|-----|-------|---------|
| **A) Claude Code im Browser — `claude.ai/code`** | Weiterarbeiten **mit Claude Code** in einer Cloud-Umgebung, GitHub verbunden. Nichts auf dem fremden PC. | Im Max-Plan enthalten. Login via claude.ai (2FA / Google-SSO). **Erste Wahl.** |
| **B) GitHub Codespaces** | Browser-VS-Code **mit Terminal**: `npm run dev` läuft in der Cloud, Live-Preview im Browser. Für echtes Entwickeln/Testen. | Repo-Seite → grüner „Code"-Button → „Codespaces" → „Create". Läuft in der Cloud. |
| **C) github.dev** | Schnelle Text-/Copy-Edits + Commit direkt auf `feat/wurzel-website`. Kein Terminal, kein Build. | Auf der Repo-Seite einfach **`.` (Punkt) drücken** oder `github.com` → `github.dev` in der URL. |
| **D) Vercel-Dashboard** | Previews reviewen, Deployments ansehen. | Kein Code nötig. |

**Empfehlung Reha:** A für inhaltliche Weiterarbeit mit Claude Code, C für einen schnellen Copy-Fix,
B wenn du eine Änderung wirklich live testen willst.

---

## 4. Login ohne Passwort-Tippen (keylogger-sicher)

- **Passkeys einrichten** (von einem vertrauten Gerät) für GitHub, Google, Vercel, Microsoft. Am fremden
  PC dann „mit Handy anmelden" per QR — es wird **kein Passwort getippt**.
- Wo (noch) kein Passkey möglich ist: **Bitwarden-App am Handy** öffnen und den Wert dort ablesen. Musst
  du ausnahmsweise tippen, danach diesen Zugang **rotieren** (dein fester Bitwarden-Workflow).
- **2FA nie per SMS** — immer Authenticator-App oder Passkey.
- **Bitwarden-Browser-Erweiterung NICHT** auf dem fremden PC einloggen (das entsperrt den ganzen Tresor).

---

## 5. Konten härten — einmalig, von einem VERTRAUTEN Gerät (idealerweise vor der Reha)

Pro Dienst: 2FA/Passkey aktiv, Recovery gesetzt, alte Sitzungen abgemeldet.

- **Reihenfolge:** **Google/Gmail zuerst** (dort landen 2FA-/Recovery-Mails → das ist die Schaltzentrale,
  am härtesten sichern), dann easyname (Mail-2FA ist bereits aktiv), GitHub, Vercel, Notion,
  Anthropic/claude.ai, Supabase, ThriveCart, Brevo.
- **GitHub zusätzlich:** **Branch-Protection / Ruleset auf `main`** einschalten (Direktpush verbieten, PR
  erzwingen). Das macht deine Regel „kein Auto-main" **plattformseitig unumgehbar** — selbst wenn eine
  Sitzung kompromittiert würde, kann niemand direkt auf `main`.
  Repo → **Settings → Branches / Rules → Add rule** für `main`.

---

## 6. Projekt lokal/Codespaces starten

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # tsc + vite build -> dist/
npm run preview  # dist/ lokal servieren
```

Stack: Vite + React 19 + TypeScript, Tailwind v4, motion (Framer), lucide-react, react-router-dom.
Guardrail beim Committen: **nur `feat/wurzel-website`**, dann PR, **Merge nur du**.

---

## 7. Offen vor Go-live (kein DNS-Switch in diesem Schritt)

- **Datenschutz** ist ein **Entwurf** → rechtlich prüfen lassen (Banner auf der Seite).
- **Google Fonts selbst hosten** (DSGVO) statt vom Google-CDN.
- **SSG-Prerendering** (SEO) ergänzen; aktuell SPA für den Review-Preview.
- **Impressum:** Rechtsform / UID / GISA bestätigen.
- **Sarah IG-Handle** + Kleine-Zeitung-Artikel verifizieren.
- **301-Catch-all + Google-`site:`-Liste** finalisieren; **DNS-Switch** ist ein separates Gate.
- **Vor jeder easyname-Hosting-Kündigung:** office@-Postfach-Abhängigkeit klären (Mail läuft dort).

---

## 8. Quellen der Wahrheit

- **Notion = Master** (STAMM / SALES / STAND + „Parkzettel"; Messaging-Brief Website-Wurzel). Copy,
  Struktur, Button-Spec §11, **Preise** kommen aus Notion — nie aus dem alten DB-Dump.
- **Dieses Repo = Code.** Design-Tokens aus dem Claude-Design-Handoff; Hero-Flow-Visual verifiziert gegen
  `smikula20-a11y/place-of-motion` (read-only).
- **Impressum-/Datenschutz-Adresse = SaaS-Business:** Feistritz 34, 9560 Feldkirchen (NICHT die
  Praxis-Adresse).

---

## 9. Offene Sicherheits-To-dos (getrennt behandeln — hier stehen bewusst KEINE Werte)

- **cron-job.org „Keepalive"-Job:** enthält einen **Legacy-Supabase-anon-Key im Klartext in der Job-URL**
  → rotieren bzw. Zugriff einschränken. (Betrifft die isolierte Umfrage-Instanz, nicht die Prod-App.)
- **easyname Backup-FTP-Zugang:** Zugangsdaten liegen in einer Notion-Notiz → beim Offboarding des
  Programmierers / Hosting-Cleanup **mitrotieren**.
- **Positiv:** Der früher exponierte Anthropic-Key ist **bereits revoked** und läuft serverseitig über den
  `ki-plan`-Proxy — hier ist nichts offen.
