import MovieCard from "./MovieCard";

const MovieList = ({title, movies}) => {
    return (
        <div className="py-2">
            <h1 className = " py-2 font-bold text-xl text-white"> {title}</h1>
            <div className = "flex overflow-x-auto scrollbar-hide ">
                <div className ="flex ">
                    {movies?.map(movie =>
                        <MovieCard key={movie.id} posterPath={movie.poster_path} title={movie.original_title}/>
                    )
                    }
                </div>
            </div>
        </div>
    );
};

export default MovieList;