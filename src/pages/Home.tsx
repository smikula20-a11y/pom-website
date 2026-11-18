import { Hero } from '../sections/Hero'
import { Pricing } from '../sections/Pricing'
import { AblaufFilm } from '../components/AblaufFilm'
import {
  Audience,
  Features,
  FinalCta,
  Founder,
  Honorar,
  HowItWorks,
  Problem,
  Stimmen,
} from '../sections/MidSections'
import { Container } from '../components/primitives'
import { HaeufigeFragen } from '../components/Unterseite'
import { startFragen } from '../content/site'

export default function Home() {
  return (
    <>
      <Hero />
      {/* Kundenstimmen gleich nach dem Kopfbereich (18.11.2026), vorher stand eine Stimme nach den Preisen */}
      <Stimmen />
      <Problem />
      <AblaufFilm />
      <Features />
      <HowItWorks />
      <Honorar />
      <Audience />
      <Pricing />
      <Founder />
      {/* Häufige Fragen: Antworten stehen im HTML, auch zugeklappt lesbar für Suchmaschinen */}
      <section id="fragen" style={{ background: '#fff' }}>
        <Container className="section">
          <HaeufigeFragen fragen={startFragen} />
        </Container>
      </section>
      <FinalCta />
    </>
  )
}
