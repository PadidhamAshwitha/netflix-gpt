import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";


const MainContainer = () =>{

    const movies = useSelector(store => store.movies?.popularMovies);
    if(!movies) return;
    const mainMovie = movies[1];
    const {original_title, overview, poster_path, id} = mainMovie;
    return (
        <div className="pt-[35%] md:pt-0 bg-black">
            <VideoTitle 
            title={original_title} 
            overview={overview} 
            poster_path={poster_path}
            />
            <VideoBackground movieId={id}/>
        </div>
    );
};

export default MainContainer;