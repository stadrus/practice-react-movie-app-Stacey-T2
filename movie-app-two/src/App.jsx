import { useState } from 'react'
import MovieSelector from './component/MovieSelector'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Movie Selector</h1>
      </div>
      
      <div className="selector">
       <MovieSelector/>
      </div>
      <p className="select-movie">
        Movie Night!
      </p>
    </>
  )
}

export default App
