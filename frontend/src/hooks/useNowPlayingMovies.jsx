import axios from "axios"
import { getNowPlayingMovies } from "../redux/movieSlice"
import { now_Playing_Movies, options } from "../utils/constant"
import { useDispatch } from "react-redux"
const useNowPlayingMovies = async () => {
    const dispatch = useDispatch()
    try {
        const res = await axios.get(now_Playing_Movies, options)
        dispatch(getNowPlayingMovies(res.data.results))
        //console.log("now playing movies",res.data.results)
    } catch (error) {
        console.log(error)
    }
}
export default useNowPlayingMovies;
