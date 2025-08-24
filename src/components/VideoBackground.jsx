import useMovieTrailer from "../hooks/useMovieTrailer";
import {useSelector} from "react-redux";
const VideoBackground = (movieId) => {
    useMovieTrailer(movieId);
    
    const movieTrailer = useSelector(store => store.movies?.movieTrailer);
    if(!movieTrailer) return null;
    // const trailerId = useMovieTrailer(movieId);
    return (
        <div className="w-fullscreen ">
            <iframe 
            className = "w-fullscreen aspect-video"
            // src={"https://www.youtube.com/embed/" + trailerId}
            src={"https://www.youtube.com/embed/" + movieTrailer?.key +    
            "?autoplay=1&mute=1&controls=1&loop=1&playlist=" +
            movieTrailer?.key + "&rel=0"}
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            picture-in-picture
            allowFullScreen
            >
            </iframe>
        </div>
    );

};

export default VideoBackground;


// {
//   "id": 755898,
//   "results": [
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Official Trailer",
//       "key": "d9erkpdh5o0",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Trailer",
//       "official": true,
//       "published_at": "2025-07-24T18:40:00.000Z",
//       "id": "6882cabfdaa869ed6516b8a5"
//     }
//   ]
// }