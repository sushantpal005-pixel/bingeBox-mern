// import React from 'react'
// import MovieCard from './MovieCard'
// const MovieList = ({ title, movies=[], searchMovie=false }) => {
//   return (
//     <div className='px-8'>
//       <h1 className={`${searchMovie ? "text-black" : "text-white"} text-3xl py-3 `}>{title}</h1>
//       <div className='flex overflow-x-auto no-scrollbar cursor-pointer' >
//         <div className='flex items-center '>
//           {
//             movies?.map((movie)=>{
//               return (
//                 <MovieCard key={movie.id} movieId={movie.id} posterPath ={movie.poster_path}/>
//               )
//             })
//           }
//         </div>
//       </div>
//     </div>
//   )
// }

// export default MovieList


import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies = [], searchMovie = false }) => {
  return (
    <div className="px-4 sm:px-6 md:px-10 py-4">
      
      {/* Title */}
      <h1
        className={`${
          searchMovie ? "text-black" : "text-white"
        } text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mb-3`}
      >
        {title}
      </h1>

      {/* Scroll Container */}
      <div className="flex overflow-x-scroll no-scrollbar space-x-3 sm:space-x-4 cursor-pointer">
        
        {movies?.map((movie) => (
          <div key={movie.id} className="flex-shrink-0">
            <MovieCard
              movieId={movie.id}
              posterPath={movie.poster_path}
            />
          </div>
        ))}

      </div>
    </div>
  );
};

export default MovieList;