import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Projects from './components/Projects'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Projects />
        <CTA />
      </main>
      <footer className="border-t border-white/10 bg-black/80">
        <div className="mx-auto max-w-6xl px-6 py-8 text-sm text-white/60 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Redline Roofing • All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
