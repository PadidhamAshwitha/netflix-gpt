import {IMAGE_CDN_URL} from "../utilities/constants";

const MovieCard = ({posterPath, title}) => {
    return (
        <div className="w-48 p-2 flex-shrink-0 rounded-lg cursor-pointer transform transition-transform duration-300 ease-in-out hover:scale-110 hover:z-20">
            <img
            className = "rounded-lg hover:shadow-xl shadow-gray-500/50" 
            src={IMAGE_CDN_URL + posterPath} 
            alt={title}/>
            <h3 className="mt-2 text-white text-sm font-semibold ">{title}</h3>
        </div>
    );
};

export default MovieCard;