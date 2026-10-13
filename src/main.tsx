import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
// Selbst gehostete Schriften (lokal gebundelt, kein Google-CDN / keine
// IP-Uebermittlung an Google). Familien-Namen sind exakt „Inter"/„Outfit".
import '@fontsource/inter/400.css'
import '@fontsource/inter/500.css'
import '@fontsource/inter/600.css'
import '@fontsource/inter/700.css'
import '@fontsource/inter/800.css'
import '@fontsource/inter/900.css'
import '@fontsource/outfit/400.css'
import '@fontsource/outfit/500.css'
import '@fontsource/outfit/600.css'
import '@fontsource/outfit/700.css'
import '@fontsource/outfit/800.css'
import '@fontsource/outfit/900.css'
import App from './App'
import './index.css'

const root = document.getElementById('root')!
const app = (
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
)

// Gebaute Seiten kommen fertig gerendert (scripts/prerender.mjs) und werden nur
// übernommen; im Dev-Server ist #root leer und wird neu aufgebaut.
if (root.hasChildNodes()) hydrateRoot(root, app)
else createRoot(root).render(app)
