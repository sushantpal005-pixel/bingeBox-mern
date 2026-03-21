// import axios from 'axios'
// import React from 'react'
// import { options } from '../utils/constant'
// import {useDispatch} from "react-redux"
// import { getTrailerMovie } from '../redux/movieSlice'
// const useMovieById = async (movieId) => {
//     const dispatch = useDispatch();
    
//     try {
//         const res = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/videos`, options)
//         const trailer = res?.data?.results?.filter((items)=>{
//             return items.type === "Trailer"
//         })
//         dispatch(getTrailerMovie(trailer.length > 0 ? trailer[0] : res.data.results[0]))
//     } catch (error) {
//         console.log(error)
//     }
// }

// export default useMovieById

import axios from 'axios'
import { useEffect } from 'react'
import { options } from '../utils/constant'
import { useDispatch } from "react-redux"
import { getTrailerMovie } from '../redux/movieSlice'

const useMovieById = (movieId) => {
    const dispatch = useDispatch();

    useEffect(() => {
        const getMovieById = async () => {
            try {
                const res = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/videos`, options);

                const trailer = res?.data?.results?.filter((items) => {
                    return items.type === "Trailer"
                });

                dispatch(getTrailerMovie(trailer.length > 0 ? trailer[0] : res.data.results[0]));
            } catch (error) {
                console.log(error);
            }
        };

        getMovieById();
    }, [movieId]); 
};

export default useMovieById;