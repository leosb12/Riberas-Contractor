import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import BeforeAfter from './components/BeforeAfter'
import Process from './components/Process'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import PaintingPage from './pages/services/PaintingPage'
import FlooringPage from './pages/services/FlooringPage'
import DrywallPage from './pages/services/DrywallPage'
import DeckPage from './pages/services/DeckPage'
import ShowerPage from './pages/services/ShowerPage'
import BacksplashPage from './pages/services/BacksplashPage'

function HomePage() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <BeforeAfter />
      <Process />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services/painting" element={<PaintingPage />} />
        <Route path="/services/flooring" element={<FlooringPage />} />
        <Route path="/services/drywall" element={<DrywallPage />} />
        <Route path="/services/deck" element={<DeckPage />} />
        <Route path="/services/shower" element={<ShowerPage />} />
        <Route path="/services/backsplash" element={<BacksplashPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
