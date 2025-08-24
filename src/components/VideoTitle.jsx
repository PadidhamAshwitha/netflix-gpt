import { POSTER_PATH } from "../utilities/constants";

const VideoTitle = ({title,overview,poster_path}) =>{
    return (
        <div className="pt-[5%] pl-20 w-screen aspect-video absolute bg-gradient-to-r from-black">
            <img 
            className = "w-1/12 animate-pulse"
            src={POSTER_PATH + poster_path} 
            alt="movie-poster" />
            
            <h1 className="w-4/12 text-6xl text-white font-extrabold font-serif">{title}</h1>
            <p className="w-4/12 py-6 text-lg text-white font-serif">{overview}</p>
            <div>
                <button 
                className = "m-2 p-2 px-10 bg-white hover:opacity-80 rounded-lg text-black cursor-pointer ">
                ▶ Play</button>
                <button 
                className = "m-2 p-2 px-10 bg-gray-500 hover:opacity-80 rounded-lg text-white cursor-pointer">
                More Info </button>
                
            </div>
        </div>

    );
};

export default VideoTitle;