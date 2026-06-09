import './App.css'
import Hero from './components/hero'
import Navbar from './components/navbar'
import ProjectsSection from './components/ProjectsSection'
import AboutSection from './components/AboutSection'
import SkillsSection from './components/SkillsSection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[#09090b]">
      <Navbar />
      <Hero />
      <main>
        <SkillsSection />
        <ProjectsSection />
        <AboutSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
