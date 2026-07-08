import { Hero } from '../sections/Hero'
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
      <SocialProof />
      <Founder />
      <FinalCta />
    </>
  )
}
