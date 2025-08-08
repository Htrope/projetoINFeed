import { useState } from 'react'

import './App.css'
import BtnLikes from './componentes/BtnLikes'
import Header from './componentes/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <BtnLikes/>
    </>
    
      )
}

export default App
