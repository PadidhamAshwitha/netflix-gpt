import {API_OPTIONS} from "../utilities/constants";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {addMovieTrailer } from "../utilities/moviesSlice";

const useMovieTrailer = (movieId) => {

    // const [trailerId, setTrailerId ] = useState(null);
    const dispatch = useDispatch();
    const getMovieVideos = async() => {
        const data = await fetch("https://api.themoviedb.org/3/movie/" + movieId?.movieId + "/videos?language=en-US",API_OPTIONS);
        const json = await data.json();
        const filteredVideos = json.results.filter((video)=> video.type === "Trailer");
        const trailer = filteredVideos.length ? filteredVideos[0] : json.results[0];
        dispatch(addMovieTrailer(trailer));
    };
    useEffect(()=>{
        getMovieVideos();
    }, []);

    //return trailerId;
};

export default useMovieTrailer;