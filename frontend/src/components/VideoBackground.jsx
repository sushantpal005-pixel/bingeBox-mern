// import React from 'react'
// import useMovieById from '../hooks/useMovieById'
// import { useSelector } from 'react-redux'

// const VideoBackground = ({movieId,bool}) => {
//   const trailerMovie = useSelector(store=>store.movie.trailerMovie)
//   useMovieById(movieId)
//   if (!trailerMovie) return null;
//   return (
//     <div className='w-[vw] overflow-hidden'>
//       <iframe  
//       className={`${bool ? "w-[100%]" : "w-screen aspect-video" } `}
//       src={`https://www.youtube.com/embed/${trailerMovie?.key}?si=OEFMwLEQ69o7Bkbz&autoplay=1&mute=1` }
//       title="YouTube video player" 
//       frameBorder="0" 
//       allowFullScreen></iframe>
//     </div>
//   )
// }

// export default VideoBackground


import React from "react";
import useMovieById from "../hooks/useMovieById";
import { useSelector } from "react-redux";

const VideoBackground = ({ movieId }) => {
  const trailerMovie = useSelector((store) => store.movie.trailerMovie);

  useMovieById(movieId);

  if (!trailerMovie) return null;

  return (
    <div className=" absolute inset-0 w-full h-full overflow-hidden z-0 top-0 ">
      
      <iframe
        className="absolute top-1/2 left-1/2 w-[120%] h-[120%] -translate-x-1/2 -translate-y-1/2"
        src={`https://www.youtube.com/embed/${trailerMovie?.key}?autoplay=1&mute=1&controls=0&loop=1&playlist=${trailerMovie?.key}`}
        title="YouTube video player"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
      ></iframe>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>
    </div>
  );
};

export default VideoBackground;