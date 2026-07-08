import { Link } from 'react-router-dom'
import { Mail, Phone } from 'lucide-react'
import { Container } from '../components/primitives'
import { footer } from '../content/site'

export function Footer() {
  const a = footer.address
  return (
    <footer id="kontakt" style={{ background: 'var(--pom-ink)', color: 'rgba(255,255,255,.75)' }}>
      <Container className="section--tight section" style={{ paddingBottom: 40 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(220px, 1fr) auto',
            gap: 40,
            alignItems: 'start',
          }}
          className="footer-grid"
        >
          <div>
            <img src="/logos/pom-white.svg" alt="place of motion" style={{ height: 26, marginBottom: 16 }} />
            <p style={{ margin: 0, fontSize: 14, lineHeight: 1.6, maxWidth: 320, color: 'rgba(255,255,255,.65)' }}>
              {footer.tagline}
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, fontSize: 14, lineHeight: 1.6 }}>
            <div style={{ color: '#fff', fontWeight: 600, fontFamily: 'var(--font-display)' }}>{a.name}</div>
            <div>{a.owner}</div>
            <div>
              {a.street} · {a.city}
            </div>
            <a href={a.phoneHref} style={{ color: 'rgba(255,255,255,.75)', display: 'inline-flex', alignItems: 'center', gap: 8 }}>
              <Phone size={14} /> {a.phone}
            </a>
            <a href={`mailto:${a.email}`} style={{ color: 'rgba(255,255,255,.75)', display: 'inline-flex', alignItems: 'center', gap: 8 }}>
              <Mail size={14} /> {a.email}
            </a>
          </div>
        </div>

        <div
          style={{
            marginTop: 36,
            paddingTop: 24,
            borderTop: '1px solid rgba(255,255,255,.12)',
            display: 'flex',
            flexWrap: 'wrap',
            gap: 16,
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: 13,
          }}
        >
          <span style={{ color: 'rgba(255,255,255,.5)' }}>© 2026 {footer.company}</span>
          <nav style={{ display: 'flex', gap: 20 }}>
            {footer.legal.map((l) => (
              <Link key={l.href} to={l.href} style={{ color: 'rgba(255,255,255,.75)' }}>
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      </Container>
    </footer>
  )
}
