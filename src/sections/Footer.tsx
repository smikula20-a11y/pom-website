import { Link } from 'react-router-dom'
import { Container } from '../components/primitives'
import { footer, nav } from '../content/site'

export function Footer() {
  const a = footer.address
  return (
    <footer id="kontakt" style={{ background: 'var(--pom-ink)', color: 'rgba(255,255,255,.75)' }}>
      <Container className="section" style={{ paddingBottom: 40 }}>
        <div className="footer-grid">
          {/* Brand */}
          <div>
            <img
              src="/logos/pom-white.svg"
              alt="place of motion"
              style={{ height: 26, marginBottom: 16 }}
            />
            <p style={{ margin: 0, fontSize: 14, lineHeight: 1.65, maxWidth: 260, color: 'rgba(255,255,255,.6)' }}>
              {footer.tagline}
            </p>
          </div>

          {/* Produkt */}
          <div>
            <div className="footer-heading">Produkt</div>
            <nav className="footer-links">
              {nav.links.map((l) => (
                <a key={l.href} href={l.href}>
                  {l.label}
                </a>
              ))}
              <a href={nav.cta.href} target="_blank" rel="noopener noreferrer">
                {nav.cta.label}
              </a>
            </nav>
          </div>

          {/* Rechtliches */}
          <div>
            <div className="footer-heading">Rechtliches</div>
            <nav className="footer-links">
              {footer.legal.map((l) => (
                <Link key={l.href} to={l.href}>
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Kontakt */}
          <div>
            <div className="footer-heading">Kontakt</div>
            <div className="footer-links">
              <a href={`mailto:${a.email}`}>{a.email}</a>
              <a href={a.phoneHref}>{a.phone}</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">© 2026 {footer.company}</div>
      </Container>
    </footer>
  )
}
