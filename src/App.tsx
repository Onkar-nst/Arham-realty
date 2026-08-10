import Nav from './sections/Nav'
import Hero from './sections/Hero'
import Projects from './sections/Projects'
import About from './sections/About'
import Footprint from './sections/Footprint'
import Values from './sections/Values'
import Contact from './sections/Contact'
import { Cta, Footer, Marquee } from './sections/Closing'
import ProjectsPage from './pages/ProjectsPage'
import ProjectPage from './pages/ProjectPage'
import AboutPage from './pages/AboutPage'
import NotFoundPage from './pages/NotFoundPage'
import PageHead from './components/PageHead'
import { findProject, hasDetailPage } from './data/projects'
import { RouterProvider, useRouter } from './router'

function Home() {
  return (
    <>
      <PageHead
        title="Arham Realty · Redefining Mumbai's Skyline for 30+ Years"
        description="Arham Realty has built across Mumbai and Thane since 1994. Fourteen completed projects, two under construction and six more in the pipeline."
      />
      <Hero />
      <Projects />
      <Marquee />
      <About />
      <Footprint />
      <Values />
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

  if (path.startsWith('/projects/')) {
    const project = findProject(path.slice('/projects/'.length))
    /* Only the projects with full client material have a page of their
       own; the rest are listed on the index. */
    if (project && hasDetailPage(project)) return <ProjectPage project={project} />
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
    </RouterProvider>
  )
}
