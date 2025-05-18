// import { useState } from 'react'
import MovieSelector from './component/MovieSelector'
// import data from './data/data.json'
import './App.css'
// import { Route } from 'react-router-dom'

function App() {
  // const [allMovies, setAllMovies] = useState(data.map(obj => {
  //   return {...obj, genre};
  // })
// )

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
