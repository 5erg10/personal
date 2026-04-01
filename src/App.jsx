import { AppProvider } from './context/AppContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Portfolio from './components/Portfolio'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import VideoModal from './components/VideoModal'
import ProjectModal from './components/ProjectModal'
import { PROJECTS } from './data/projects'

export default function App() {
  return (
    <AppProvider>
      <Navbar />
      <main>
        <Hero />
        <Portfolio projects={PROJECTS} />
        <About />
        <Contact />
      </main>
      <Footer />
      <VideoModal />
      <ProjectModal />
    </AppProvider>
  )
}
