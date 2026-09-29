import Nav from './sections/Nav'
import Hero from './sections/Hero'
import Projects from './sections/Projects'
import About from './sections/About'
import Footprint from './sections/Footprint'
import Contact from './sections/Contact'
import { Cta, Footer } from './sections/Closing'
import ProjectsPage from './pages/ProjectsPage'
import ProjectPage from './pages/ProjectPage'
import AboutPage from './pages/AboutPage'
import NotFoundPage from './pages/NotFoundPage'
import LegalPage from './pages/LegalPage'
import DisclaimerGate from './components/DisclaimerGate'
import CookieBanner from './components/CookieBanner'
import PageHead from './components/PageHead'
import { findProject } from './data/projects'
import { findLegal } from './data/legal'
import { BrowserRouter, Routes, Route, useParams, useLocation } from 'react-router-dom'
import { useEffect } from 'react'

function Home() {
  return (
    <>
      <PageHead
        title="Arham Realty · A Legacy In Every Detail"
        description="30+ years of building spaces with permanence, character and purpose. Arham Realty has built across Mumbai and Thane since 1994."
      />
      <Hero />
      <Projects />
      <About />
      <Footprint />
      <Contact />
      <Cta />
    </>
  )
}

function LegalPageWrapper() {
  const { slug } = useParams()
  const doc = findLegal(slug || '')
  if (doc) return <LegalPage doc={doc} />
  return <NotFoundPage />
}

function ProjectPageWrapper() {
  const { slug } = useParams()
  const project = findProject(slug || '')
  if (project) return <ProjectPage project={project} />
  return <NotFoundPage />
}

function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const id = hash.replace('#', '')
        const element = document.getElementById(id)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 0)
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' })
    }
  }, [pathname, hash])
  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/legal/:slug" element={<LegalPageWrapper />} />
          <Route path="/projects/:slug" element={<ProjectPageWrapper />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
      <CookieBanner />
      <DisclaimerGate />
    </BrowserRouter>
  )
}
