import { useState } from 'react'
import './App.css'
import Hero from "./components/Hero/Hero.jsx"
import Projects from "./components/Projects/Projects.jsx"
import {ThemeProvider} from "./common/ThemeContext";
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ThemeProvider>
      <Hero/>
      <Projects/>
      </ThemeProvider>
    </>
  )
}

export default App
