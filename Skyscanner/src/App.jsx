import { useState } from 'react'
import './App.css'
import Main from './components/Main/Main'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="pageWrap">
      Welcome to the page Or Ali and Egnoel
    <Main/>
    </div>
  )
}

export default App
