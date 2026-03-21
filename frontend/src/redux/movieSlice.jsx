import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movie",
    initialState: {
        nowPlayingMovies: null,
        popularMovies: null,
        topRatedMovies: null,
        upcomingMovies: null,
        toggle:false,
        trailerMovie:null,
        open:false,
        id:"",
        selectedMovie:null,
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
        },
        setToggle:(state)=>{
            state.toggle = !state.toggle
        },
        getTrailerMovie:(state, actions)=>{
            state.trailerMovie = actions.payload
        },
        setOpen:(state, actions)=>{
            state.open = actions.payload
        },
        getId:(state, actions)=>{
            state.id = actions.payload
        },
        setSelectedMovie:(state, actions)=>{
            state.selectedMovie = actions.payload
        }
        
    }
})
export const {getNowPlayingMovies, getPopularMovie, getTopRatedMovie, getUpcomingMovie, setToggle, getTrailerMovie, setOpen, getId, setSelectedMovie} = movieSlice.actions
export default movieSlice.reducer