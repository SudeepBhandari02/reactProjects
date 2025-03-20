import { useState } from 'react'
import './App.css'
import Hero from "./components/Hero/Hero.jsx"
import Projects from "./components/Projects/Projects.jsx"
import {ThemeProvider} from "./common/ThemeContext";
import Skills from './components/Skills/Skills'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ThemeProvider>
      <Hero/>
      <Projects/>
      <Skills/>
      <Contact/>
      <Footer/>
    </ThemeProvider>
    </>
  )
}

export default App
