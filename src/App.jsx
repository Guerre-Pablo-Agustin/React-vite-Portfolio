//Components
import Hero from "./Components/Hero/Hero"
import Nav from "./Components/Nav/Nav"
import About from "./Components/About/about"
import Skills from "./Components/Skills/Skils"
import Projects from "./Components/Projects/Projects"
import Contact from "./Components/Contact/Contact"
import Footer from "./Components/Footer/footer"
import ScrollButton from "./Components/ScrollButton/ScrollButton"

function App() {
 

  return (
    <>
      <div className="bg-tertiary">
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      </div>

      <div>
        <ScrollButton />
      </div>

    </>
  )
}

export default App
