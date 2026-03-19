import React from 'react'
import useMovieById from '../hooks/useMovieById'

const VideoBackground = ({movieId}) => {
  useMovieById(movieId)
  
  return (
    <div className='w-[vw] overflow-hidden'>
      {/* <iframe 
      className=' scale-100 aspect-video'
      src="https:" 
      title="YouTube video player" 
      frameBorder="0" 
      allowFullScreen>
      </iframe> */}
      <iframe  
      className='w-screen aspect-video'
      src="https://www.youtube.com/embed/oafxkMv4xnc?si=OEFMwLEQ69o7Bkbz" 
      title="YouTube video player" 
      frameborder="0" 
      allowfullscreen></iframe>
    </div>
  )
}

export default VideoBackground
