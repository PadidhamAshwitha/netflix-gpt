import MovieCard from "./MovieCard";

const MovieList = ({title, movies}) => {
    return (
        <div className="pb-2">
            <h1 className = " pb-2 font-bold text-xl text-white"> {title}</h1>
            <div className = "flex overflow-x-auto scrollbar-hide ">
                <div className ="flex ">
                    {movies?.map(movie =>
                        <MovieCard key={movie.id} movie={movie} />
                    )
                    }
                </div>
            </div>
        </div>
    );
};

export default MovieList;