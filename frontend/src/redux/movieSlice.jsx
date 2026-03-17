import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movie",
    initialState: {
        nowPlayingMovies: null,
        popularMovies: null,
        topRatedMovies: null,
        upcomingMovies: null
    },
    reducers: {
        //actions
        getNowPlayingMovies: (state, actions)=>{
            state.nowPlayingMovies = actions.payload
        },
        getPopularMovie:(state, actions)=>{
            state.popularMovies = actions.payload
        },
        getTopRatedMovie:(state, actions)=>{
            state.topRatedMovies = actions.payload
        },
        getUpcomingMovie:(state, actions)=>{
            state.upcomingMovies = actions.payload
        }
    }
})
export const {getNowPlayingMovies, getPopularMovie, getTopRatedMovie, getUpcomingMovie} = movieSlice.actions
export default movieSlice.reducer