import MovieList from "./MovieList";
import {useSelector} from "react-redux";
const SecondaryContainer = () => {
    const movies = useSelector(store => store.movies);
    return (
    <div className = "pl-4 md:pl-20 bg-black ">
        <div className = "mt-0 md:-mt-48 md:relative z-30">
        <MovieList title={"Now Playing Movies"} movies={movies?.nowPlayingMovies}/>
        <MovieList title={"Up Coming Movies"} movies={movies?.upComingMovies}/>
        <MovieList title={"Popular Movies"} movies={movies?.popularMovies}/>
        <MovieList title={"Top Rated Movies"} movies={movies?.topRatedMovies}/>
        <MovieList title={"Drama Movies"} movies={movies?.popularMovies}/>
        <MovieList title={"Horror Movies"} movies={movies?.popularMovies}/>
        <MovieList title={"Romantic TV Shows"} movies={movies?.popularMovies}/>
        <MovieList title={"Comedy Movies"} movies={movies?.popularMovies}/>
        <MovieList title={"Bollywood Movies"} movies={movies?.popularMovies}/>

        </div>
    </div>)
};

export default SecondaryContainer;