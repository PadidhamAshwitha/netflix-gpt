import {useDispatch, useSelector } from "react-redux";
import {useEffect } from "react";
import {TMDB_UPCOMING_API, API_OPTIONS} from "../utilities/constants";
import {addUpComingMovies } from "../utilities/moviesSlice";


const useUpComingMovies = () => {
    const dispatch = useDispatch();

    //memoization
    const upComingMovies = useSelector((store) => store.movies.upComingMovies);

    const getUpComingMovies = async () => {
        const data = await fetch(TMDB_UPCOMING_API, API_OPTIONS);
        const json = await data.json();
        dispatch(addUpComingMovies(json?.results));
    };
        useEffect(() => {
            !upComingMovies && getUpComingMovies();
        }, []);

};

export default useUpComingMovies;