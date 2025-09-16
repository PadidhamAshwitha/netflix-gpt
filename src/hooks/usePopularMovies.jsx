import {TMDB_POPULAR_API, API_OPTIONS} from "../utilities/constants";
import {addPopularMovies } from "../utilities/moviesSlice";
import {useDispatch, useSelector} from "react-redux";
import {useEffect } from "react";
const usePopularMovies = () => {
    
    const dispatch = useDispatch();

    // memoization
    const popularMovies = useSelector((store) => store.movies.popularMovies);

    const getPopularMovies = async() => {

        const data = await fetch(TMDB_POPULAR_API, API_OPTIONS);
        const json = await data.json();
        dispatch(addPopularMovies(json?.results));
    };


    useEffect(()=>{
        !popularMovies && getPopularMovies();
    }, []);
};

export default usePopularMovies;