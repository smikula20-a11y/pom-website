# pom-website

Statische **Wurzel-Website** für Place of Motion — `placeofmotion.com`.
Reine **Therapeuten-/SaaS-Ansprache**. Patienten → `praxis.`-Subdomain, B2C-Kurse →
`online.`-Subdomain (jeweils eigene Builds, **nicht** in diesem Repo).

Eigenständiges Repo, komplett getrennt von der SaaS-App `place-of-motion`.

## Stack

- **Vite + React 19 + TypeScript**
- **Tailwind CSS v4** (`@tailwindcss/vite`) — Design-Tokens in `src/index.css`
- **motion** (Framer Motion) für dezente Scroll-Reveals
- **lucide-react** Icons
- **react-router-dom** für die Rechtsseiten (`/impressum`, `/datenschutz`)
- Deploy: **Vercel** (`vercel.json` — SPA-Rewrite + 301-Redirect-Map)

## Entwicklung

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # tsc + vite build -> dist/
npm run preview  # dist/ lokal servieren
```

## Quellen der Wahrheit

- **Copy / Struktur / CTA / Button-Spec §11 / Pflicht-Korrekturen** → Notion „Messaging-Brief Website-Wurzel".
- **Preise** → ausschließlich Notion (nie aus dem alten DB-Dump). BASIC gratis · PRO €29 · FM €15 lifetime.
- **Design-Look / Tokens** → Claude-Design-Handoff („Wurzel-Website Look.dc.html", `_ds/tokens/*`).
- **Hero-Flow-Visual** → statischer Nachbau, verifiziert am App-Repo `place-of-motion`
  (`CourseCanvas.tsx`, `QRPlanView.tsx`), ohne Supabase/Vimeo.

## Impressum / Datenschutz (SaaS-Business, nicht die Praxis)

Place of Motion · Feistritz 34 · 9560 Feldkirchen · Stefan Mikula · +43 650 9946090 · office@placeofmotion.com
(Die alte Klagenfurter Praxisadresse gehört auf die `praxis.`-Subdomain, **nicht** hierher.)

## Guardrails

- Arbeit auf `feat/wurzel-website`, **kein Auto-`main`**, PR → **Merge nur Stefan**.
- `*.sql` niemals committen (siehe `.gitignore`).
- 301-Map ist Pflicht-Gate vor jedem DNS-Switch (DNS separat, außerhalb dieses Repos).

## Offen / To-do vor Go-live

- **SEO-Prerendering (SSG):** aktuell SPA für den Review-Preview. Vor Go-live statisches
  Prerendering ergänzen (`vite-react-ssg` o. ä.), damit `/`, `/impressum`, `/datenschutz`
  als HTML ausgeliefert werden.
- 301-Redirect-Map in `vercel.json` finalisieren (aus `pom-tools/website-migration/url-inventory.md`).
- Datenschutz-Entwurf rechtlich prüfen lassen.
- Sarah IG-Handle + Kleine-Zeitung-Artikel verifizieren.
