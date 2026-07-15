import './App.css'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Stats from './components/Stats'
import Contact from './components/Contact'
import GradualBlur from './components/GradualBlur'

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans antialiased relative">
      <GradualBlur
        target="page"
        position="bottom"
        height="4rem"
        strength={4}
        divCount={2}
        curve="bezier"
        exponential={true}
        opacity={1}
      />

      <Hero />
      {/* <About /> */}
      <Experience />
      <Skills />
      <Projects />
      <Stats />
      <Contact />

      <footer className="py-8 px-6 text-center border-t border-neutral-100">
        <p className="text-[11px] font-mono text-neutral-400">
          Alan Sebastian Mathew &copy; {new Date().getFullYear()} &mdash; Executing with Absolute Precision
        </p>
      </footer>
    </div>
  )
}
