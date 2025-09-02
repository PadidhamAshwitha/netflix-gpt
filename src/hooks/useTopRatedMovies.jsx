import {useDispatch } from "react-redux";
import {useEffect } from "react";
import {TMDB_TOP_RATED_API, API_OPTIONS} from "../utilities/constants";
import {addTopRatedMovies } from "../utilities/moviesSlice";


const useTopRatedMovies = () => {
    const dispatch = useDispatch();

    const getTopRatedMovies = async () => {
        const data = await fetch(TMDB_TOP_RATED_API, API_OPTIONS);
        const json = await data.json();
        dispatch(addTopRatedMovies(json?.results));
    };
        useEffect(() => {
            getTopRatedMovies();
        }, []);

};

export default useTopRatedMovies;