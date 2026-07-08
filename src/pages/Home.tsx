import { Hero } from '../sections/Hero'
import { Pricing } from '../sections/Pricing'
import {
  Audience,
  DemoEmbed,
  Features,
  FinalCta,
  Founder,
  Honorar,
  HowItWorks,
  Problem,
  SocialProof,
} from '../sections/MidSections'

export default function Home() {
  return (
    <>
      <Hero />
      <DemoEmbed />
      <Problem />
      <Features />
      <HowItWorks />
      <Honorar />
      <Audience />
      <Pricing />
      <SocialProof />
      <Founder />
      <FinalCta />
    </>
  )
}
