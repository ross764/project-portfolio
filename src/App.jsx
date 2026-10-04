import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import BeyondCode from './components/BeyondCode'
import TechStack from './components/TechStack'
import Projects from './components/Projects'
import DevelopmentJourney from './components/DevelopmentJourney'
import CurrentlyExploring from './components/CurrentlyExploring'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Reveal from './components/Reveal'

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Reveal><Hero /></Reveal>
        <Reveal><About /></Reveal>
        <Reveal><BeyondCode /></Reveal>
        <Reveal><TechStack /></Reveal>
        <Reveal><Projects /></Reveal>
        <Reveal><DevelopmentJourney /></Reveal>
        <Reveal><CurrentlyExploring /></Reveal>
        <Reveal><Education /></Reveal>
        <Reveal><Contact /></Reveal>
      </main>
      <Footer />
    </>
  )
}

export default App
