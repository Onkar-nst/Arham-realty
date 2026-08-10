import Nav from './sections/Nav'
import Hero from './sections/Hero'
import Projects from './sections/Projects'
import About from './sections/About'
import Footprint from './sections/Footprint'
import Values from './sections/Values'
import Contact from './sections/Contact'
import { Cta, Footer, Marquee } from './sections/Closing'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Projects />
        <Marquee />
        <About />
        <Footprint />
        <Values />
        <Contact />
        <Cta />
      </main>
      <Footer />
    </>
  )
}
