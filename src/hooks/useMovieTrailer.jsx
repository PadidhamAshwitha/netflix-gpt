import {API_OPTIONS} from "../utilities/constants";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {addMovieTrailer } from "../utilities/moviesSlice";

const useMovieTrailer = (movieId) => {

    // const [trailerId, setTrailerId ] = useState(null);
    const dispatch = useDispatch();
    const getMovieVideos = async() => {
        // console.log(movieId.movieId);
        const data = await fetch("https://api.themoviedb.org/3/movie/" + movieId?.movieId + "/videos?language=en-US",API_OPTIONS);
        const json = await data.json();
        // console.log(json);
        const filteredVideos = json.results.filter((video)=> video.type === "Trailer");
        const trailer = filteredVideos.length ? filteredVideos[0] : json.results[0];
        //setTrailerId(trailer.key);
        dispatch(addMovieTrailer(trailer));
        // console.log(trailer);
    };
    useEffect(()=>{
        getMovieVideos();
    }, []);

    //return trailerId;
};

export default useMovieTrailer;