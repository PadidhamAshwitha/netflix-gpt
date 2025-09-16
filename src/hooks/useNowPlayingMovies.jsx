import { useDispatch , useSelector} from "react-redux";
import { TMDB_NOWPLAYING_API, API_OPTIONS } from "../utilities/constants";
import { addNowPlayingMovies } from "../utilities/moviesSlice";
import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';

const useNowPlayingMovies = () =>{
      const dispatch = useDispatch();
      const navigate = useNavigate();
    
      // memoization
      const nowPlayingMovies = useSelector((store) => store.movies.nowPlayingMovies);
      
      const getNowPlayingMovies = async () =>{
        const data = await fetch(TMDB_NOWPLAYING_API,API_OPTIONS);
        const json = await data.json();

        if(!json.results) navigate("/error", {
          state: {
            status : data.status,
            message : json.status_message,
          }
        });
        dispatch(addNowPlayingMovies(json.results));
      };
    
      useEffect(()=>{
        !nowPlayingMovies && getNowPlayingMovies();
      }, []);
    
};

export default useNowPlayingMovies;