import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, BACKGROUND_IMG_URL } from "../utilities/constants";
import { clearSelectedMovie, addTrailer } from "../utilities/selectedMovieSlice";

const DisplayMovie = () => {
  const dispatch = useDispatch();
  const{ movie,trailer }= useSelector((store) => store.selectedMovie);

  const [details, setDetails] = useState(null);
  const [cast, setCast] = useState([]);
  const [showTrailer] = useState(true);


  const getMovieTrailer = async () => {
        const res = await fetch("https://api.themoviedb.org/3/movie/"+movie.id+"/videos?language=en-US",API_OPTIONS);
        const data = await res.json();
        const trailerVideo = data.results.find(
                (vid) => vid.type === "Trailer" && vid.site === "YouTube"
        );
        if (trailerVideo) {
          dispatch(addTrailer(trailerVideo.key));
        }
  };

  const getMovieDetails = async () => {
    const res = await fetch("https://api.themoviedb.org/3/movie/"+movie.id+"?language=en-US",  API_OPTIONS);
    const data = await res.json();
    setDetails(data);
  };

  const getMovieCast = async () => {
    const res = await fetch("https://api.themoviedb.org/3/movie/"+movie.id+"/credits?language=en-US",API_OPTIONS);
    const data = await res.json();
    setCast(data.cast.slice(0, 10)); // top 10 actors
  };

  useEffect(() => {
    if (!movie) return;
    getMovieDetails();
    getMovieTrailer();
    getMovieCast();
  }, [movie, dispatch]);

  if (!movie) return null;

  return (
    <div className="flex items-center justify-center ">
      <div className="fixed -z-10">
        <img 
        className="h-screen w-screen object-cover"
        src= {BACKGROUND_IMG_URL} 
        alt = "background-image" 
        />
      </div>
      <div className="mt-20 w-9/12 bg-gray-900 rounded-lg max-h-[90vh] flex flex-col shadow-xl relative">
        {/* Close button */}
        <button
          className="absolute top-4 text-black left-4 text-3xl font-bold z-50 p-2 cursor-pointer"
          onClick={() => dispatch(clearSelectedMovie())}
        >
          ⬅️
        </button>

        {/* Trailer OR Poster */}
        {showTrailer && trailer ? (
          <iframe
            className="w-full aspect-video"
            src={"https://www.youtube.com/embed/"+trailer+"?autoplay=1&mute=0"}  // gets the youtube video key here
            title="Movie Trailer"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ) : (
          <div className="relative w-full aspect-video">
            <img
              className="w-full h-full object-cover"
              src={"https://image.tmdb.org/t/p/original"+ movie.backdrop_path || movie.poster_path}
              alt={movie.title}
            />
          </div>
        )}

        
        <div className="p-6 bg-black mt-2">
          <h2 className="text-3xl font-bold text-white">{movie.title}</h2>

          {/* Overview */}
          <p className="text-gray-300 mt-4 leading-relaxed">
            {movie.overview}
          </p>

          {/* Extra Details */}
          {details && (
            <div className="mt-4 text-gray-400 space-y-2">
              <p>
                ⭐ <span className="font-semibold">{details.vote_average}</span>{" "}
                | ⏳ {details.runtime} mins | 📅{" "}
                {new Date(details.release_date).getFullYear()}
              </p>
              <p>
                🎭{" "}
                {details.genres.map((g) => g.name).join(", ") ||
                  "No genre info"}
              </p>
            </div>
          )}

          {/* Cast */}
          {cast.length > 0 && (
            <div className="mt-4">
              <h3 className="text-lg font-semibold text-white mb-2">
                Cast:
              </h3>
              <p className="text-gray-300">
                {cast.map((actor) => actor.name).join(", ")}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DisplayMovie;