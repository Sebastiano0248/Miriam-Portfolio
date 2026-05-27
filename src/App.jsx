import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import Sidebar from './components/Sidebar'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Skills from './components/sections/Skills'
import Resume from './components/sections/Resume'
import Portfolio from './components/sections/Portfolio'
import Services from './components/sections/Services'
import Footer from './components/Footer'
import ScrollTop from './components/ScrollTop'

function App() {
  useEffect(() => {
    AOS.init({ duration: 600, easing: 'ease-in-out', once: true, mirror: false })
  }, [])

  return (
    <>
      <Sidebar />
      <main className="main">
        <Hero />
        <About />
        <Skills />
        <Resume />
        <Portfolio />
        <Services />
      </main>
      <Footer />
      <ScrollTop />
    </>
  )
}

export default App
