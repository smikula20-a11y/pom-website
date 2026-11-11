import { Hero } from '../sections/Hero'
import { Pricing } from '../sections/Pricing'
import { FlowLoop } from '../components/FlowLoop'
import {
  Audience,
  Features,
  FinalCta,
  Founder,
  Honorar,
  HowItWorks,
  Problem,
  SocialProof,
} from '../sections/MidSections'
import { Container } from '../components/primitives'
import { HaeufigeFragen } from '../components/Unterseite'
import { startFragen } from '../content/site'

export default function Home() {
  return (
    <>
      <Hero />
      <Problem />
      <FlowLoop />
      <Features />
      <HowItWorks />
      <Honorar />
      <Audience />
      <Pricing />
      <SocialProof />
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
