import {useSelector} from "react-redux";
import MovieList from "./MovieList";
const GptMovieSuggestions = () => {

    const {movieNames, movieResults} = useSelector((store) => store.gpt);
    if(!movieNames){
        return (
            <div className = "pt-4 text-2xl md:text-3xl font-bold text-red-600 mb-6 text-center animate-pulse">
                No Results Found!!! Try again after SomeTime....
            </div>
        );
    };
    
    return (
        <div className = "relative z-10  p-6 w-fullscreen z-10">
            <h2 className = "text-2xl md:text-3xl font-bold text-red-600 mb-6 text-center animate-pulse">
                📽️Here are Your AI-based Movies you asked. Go Ahead 🚀!!! 
            </h2>

            <div>
                {movieNames.map((movieName, index) => (
                    <div
                        key={movieName}
                        className="bg-gradient-to-br from-gray-900 via-black to-gray-800 rounded-2xl p-4 shadow-xl hover:shadow-2xl hover:scale-[1.02] transform transition duration-300 opacity-90"
                    >
                    <MovieList title={movieName} movies={movieResults[index]}/>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GptMovieSuggestions;