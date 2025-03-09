import { useState } from 'react'
import './App.css'
import Hero from "./components/Hero/Hero.jsx"
import {ThemeProvider} from "./common/ThemeContext";
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ThemeProvider>
      <Hero/>
      </ThemeProvider>
    </>
  )
}

export default App
