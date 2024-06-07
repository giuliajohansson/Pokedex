import './App.css'
import Logo from './components/Logo'
import Pokedex from './components/Pokedex'
import { useState, useEffect } from "react"
import { motion } from 'framer-motion'
import styled from 'styled-components'

const Spinner = styled(motion.div)`
  width: 30px;
  height: 30px;
  border: 4px solid white;
  border-top: 2px solid black;
  border-radius: 50%;
`

function App() {

  const [Carregando, setCarregando] = useState(true);

  useEffect(() => {
      const timer = setTimeout(() => {
      setCarregando(false)
      }, 3000)
      return () => clearTimeout(timer)
  }, [])

  return (
    <div className="center">
      {Carregando ? (
          <Spinner
            animate={{ rotate: 360 }}
            transition={{ duration: 0.5, repeat: Infinity, ease: 'linear' }}
          />
        ):(
          <div>
            <Logo />
            <Pokedex />
          </div>
        )
      }
    </div>
  )
}

export default App
