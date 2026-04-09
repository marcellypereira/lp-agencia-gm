import { useEffect } from 'react'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Marquee from './components/Marquee.jsx'
import Stats from './components/Stats.jsx'
import Services from './components/Services.jsx'
import Process from './components/Process.jsx'
import Cases from './components/Cases.jsx'
import Manifesto from './components/Manifesto.jsx'
import CTA from './components/CTA.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in')
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.12 }
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Stats />
        <Services />
        <Process />
        <Cases />
        <Manifesto />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
