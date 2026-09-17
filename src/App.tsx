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
import { RouterProvider, useRouter } from './router'

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

function Routes() {
  const { path } = useRouter()

  if (path === '/') return <Home />
  if (path === '/about') return <AboutPage />
  if (path === '/projects') return <ProjectsPage />

  if (path.startsWith('/legal/')) {
    const doc = findLegal(path.slice('/legal/'.length))
    if (doc) return <LegalPage doc={doc} />
  }

  if (path.startsWith('/projects/')) {
    const project = findProject(path.slice('/projects/'.length))
    if (project) return <ProjectPage project={project} />
  }

  return <NotFoundPage />
}

export default function App() {
  return (
    <RouterProvider>
      <Nav />
      <main>
        <Routes />
      </main>
      <Footer />
      <CookieBanner />
      <DisclaimerGate />
    </RouterProvider>
  )
}
