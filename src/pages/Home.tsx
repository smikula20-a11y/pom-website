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
      <FinalCta />
    </>
  )
}
