import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const MovieContainer = () => {
  const movie = useSelector(store=>store.movie)
  console.log(movie)
  return (
    <div className='bg-black'>
      <div className='-mt-52 relative z-10'>
        <MovieList title = {"Popular Movie"} />
      </div>
    </div>
  )
}

export default MovieContainer