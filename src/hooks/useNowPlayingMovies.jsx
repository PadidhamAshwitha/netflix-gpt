import { useDispatch } from "react-redux";
import { TMDB_NOWPLAYING_API, API_OPTIONS } from "../utilities/constants";
import { addNowPlayingMovies } from "../utilities/moviesSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () =>{
      const dispatch = useDispatch();
    
      const getNowPlayingMovies = async () =>{
        const data = await fetch(TMDB_NOWPLAYING_API,API_OPTIONS);
        const json = await data.json();
        console.log(json.results);
        dispatch(addNowPlayingMovies(json.results));
      }
    
      useEffect(()=>{
        getNowPlayingMovies();
      }, []);
    
};

export default useNowPlayingMovies;