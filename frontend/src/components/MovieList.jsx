import React from 'react'
import MovieCard from './MovieCard'
const MovieList = () => {
  return (
    <div className='px-8'>
      <h1 className='text-3xl text-white'>Popular Movie</h1>
      <div >
        <div className='flex items-center '>
            <MovieCard/>
            <MovieCard/>
            <MovieCard/>
            <MovieCard/>
        </div>
      </div>
    </div>
  )
}

export default MovieList
