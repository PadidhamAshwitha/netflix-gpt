import { POSTER_PATH } from "../utilities/constants";

const VideoTitle = ({title,overview,poster_path}) =>{
    return (
        <div className="pt-[5%] pl-4 md:pl-20 w-screen aspect-video absolute bg-gradient-to-r from-black">
            <img 
            className = "hidden md:inline-block w-1/12 animate-pulse"
            src={POSTER_PATH + poster_path} 
            alt="movie-poster" />
            
            <h1 className="w-6/12 md:w-4/12 pt-10 md:pt-0 text-lg md:text-6xl text-white font-extrabold font-serif">{title}</h1>
            <p className="w-4/12 py-6 hidden md:inline-block text-lg text-white font-serif">{overview}</p>
            <div>
                <button 
                className = "mt-2 md:m-2 p-2 md:px-10 bg-white hover:opacity-80 rounded-lg text-black cursor-pointer "
                >
                ▶ Play</button>
                <button 
                className = "m-2 p-2 px-10 hidden md:inline-block bg-gray-500 hover:opacity-80 rounded-lg text-white cursor-pointer">
                More Info </button>
                
            </div>
        </div>

    );
};

export default VideoTitle;