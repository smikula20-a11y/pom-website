import { Route, Routes } from 'react-router-dom'
import { MotionConfig } from 'motion/react'
import { Nav } from './sections/Nav'
import { Footer } from './sections/Footer'
import { ScrollToTop } from './components/ScrollToTop'
import Home from './pages/Home'
import Impressum from './pages/Impressum'
import Datenschutz from './pages/Datenschutz'

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <ScrollToTop />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/impressum" element={<Impressum />} />
        <Route path="/datenschutz" element={<Datenschutz />} />
        {/* Unbekannte Pfade -> Startseite (Catch-all; echte 301s in vercel.json). */}
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </MotionConfig>
  )
}
