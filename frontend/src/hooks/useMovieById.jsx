import axios from 'axios'
import React from 'react'
import { options } from '../utils/constant'
const useMovieById = async (movieId) => {
    try {
        const res = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/videos`, options)
        console.log(res.data.results.filter((items)=>{
            return items.type === "trailer"
        }))
    } catch (error) {
        console.log(error)
    }
}

export default useMovieById
