
import {IMAGE_CDN_URL} from "../utilities/constants";
import {useDispatch } from "react-redux";
import {addSelectedMovie} from "../utilities/selectedMovieSlice";

const MovieCard = ({movie}) => {
    const dispatch = useDispatch();

    const handleCardClick = () => {
        // it will push the whole movie object to the store 
        dispatch(addSelectedMovie(movie));
    };


    if(!movie.poster_path ) return null;

    return (
        <div className=" w-30 md:w-48 p-2 flex-shrink-0 rounded-lg cursor-pointer transform transition-transform duration-300 ease-in-out hover:scale-110 hover:z-20"
        onClick={handleCardClick}
        >
            <img
            className = "rounded-lg hover:shadow-xl shadow-gray-500/50" 
            src={IMAGE_CDN_URL + movie.poster_path} 
            alt={movie.title}
            />
            <h3 className="mt-2 text-white text-sm font-semibold ">{movie.title}</h3>
        </div>
    );
};

export default MovieCard;