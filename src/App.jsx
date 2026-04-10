import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Footer from './components/Footer'
import AvisoLegal from './components/AvisoLegal'
import Privacidad from './components/Privacidad'
import Cookies from './components/Cookies'
import ScrollToTop from './components/ScrollToTop'

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Contact />
    </>
  )
}

function LegalLayout({ children }) {
  return (
    <div className="min-h-screen pt-24">
      {children}
    </div>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aviso-legal" element={<LegalLayout><AvisoLegal /></LegalLayout>} />
        <Route path="/privacidad" element={<LegalLayout><Privacidad /></LegalLayout>} />
        <Route path="/cookies" element={<LegalLayout><Cookies /></LegalLayout>} />
      </Routes>
      <Footer />
    </div>
  )
}
