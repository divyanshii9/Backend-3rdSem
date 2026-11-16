import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div>
      <h1>Student Details</h1>
      <p>Name:Utkarsh Dixit</p>
      <p>Course:FSD</p>
      <p>Attendence:82</p>
     </div>
    </>
  )
}

export default App
