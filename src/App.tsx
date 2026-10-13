import { Route, Routes } from 'react-router-dom'
import { MotionConfig } from 'motion/react'
import { Nav } from './sections/Nav'
import { Footer } from './sections/Footer'
import { ScrollToTop } from './components/ScrollToTop'
import { Seitentitel } from './components/Seitentitel'
import Home from './pages/Home'
import Impressum from './pages/Impressum'
import Datenschutz from './pages/Datenschutz'
import AGB from './pages/AGB'
import NichtGefunden from './pages/NichtGefunden'

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <ScrollToTop />
      <Seitentitel />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/impressum" element={<Impressum />} />
        <Route path="/datenschutz" element={<Datenschutz />} />
        <Route path="/agb" element={<AGB />} />
        {/* Unbekannte Pfade -> Fehlerseite (404.html, echte 301s in vercel.json). */}
        <Route path="*" element={<NichtGefunden />} />
      </Routes>
      <Footer />
    </MotionConfig>
  )
}
