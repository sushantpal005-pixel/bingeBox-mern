// import React from 'react'
// import { TMDB_IMG_URL } from '../utils/constant'
// import { useDispatch } from 'react-redux'
// import { getId, setOpen, setSelectedMovie } from '../redux/movieSlice'

// const MovieCard = ({posterPath, movieId}) => {
//   const dispatch = useDispatch()
//   if(posterPath === null) return null
//   const handleOpen = ()=>{
//     dispatch(getId(movieId))
//     dispatch(setOpen(true))
//     dispatch(setSelectedMovie(movieId))
//   }
//   return (
//     <div className='w-48 pr-2' onClick={handleOpen} >
//       <img src={`${TMDB_IMG_URL}/${posterPath}`} alt="movie-banner" />
//     </div>
//   )
// }

// export default MovieCard


import React from "react";
import { TMDB_IMG_URL } from "../utils/constant";
import { useDispatch } from "react-redux";
import { getId, setOpen, setSelectedMovie } from "../redux/movieSlice";

const MovieCard = ({ posterPath, movieId }) => {
  const dispatch = useDispatch();

  if (!posterPath) return null;

  const handleOpen = () => {
    dispatch(getId(movieId));
    dispatch(setOpen(true));
    dispatch(setSelectedMovie(movieId));
  };

  return (
    <div
      onClick={handleOpen}
      className="w-32 sm:w-36 md:w-44 lg:w-48 flex-shrink-0 cursor-pointer transform hover:scale-110 transition duration-300"
    >
      <img
        src={`${TMDB_IMG_URL}/${posterPath}`}
        alt="movie-banner"
        className="w-full h-full object-cover rounded-md shadow-md"
      />
    </div>
  );
};

export default MovieCard;