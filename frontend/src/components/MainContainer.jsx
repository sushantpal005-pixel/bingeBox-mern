import React from 'react'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'
import { useSelector } from 'react-redux'


const MainContainer = () => {
  const movie = useSelector(store => store.movie?.nowPlayingMovies)
  const movieId = useSelector(store => store.movie.selectedMovie)
  
  if (!movie) return;   //early return in react
  // if (!movieId) {
  //   console.log("bhai",movie)
  //   const { overview, id, title } = movie[4]
  // }
  // const {overview, id, title} = movie[movieId]
  const currentMovie =
    movie.find((m) => m.id === movieId) || movie[4];

  const { overview, id, title } = currentMovie;

  return (
    <div >
      <VideoTitle title={title} overview={overview} /> 
       <VideoBackground movieId={id} /> 
    </div>
  )
}

export default MainContainer
