import {useSelector} from "react-redux";

import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpComingMovies from "../hooks/useUpComingMovies";

import Header from './Header';
import GptSearchPage from "./GptSearchPage";
import MainContainer from './MainContainer';
import SecondaryContainer from "./SecondaryContainer";
import DisplayMovie from "./DisplayMovie";
import Footer from "./Footer";
const Browse = () => {

  const showGptSearch = useSelector(store => store.gpt.showGptSearch);

  const selectedMovie = useSelector((store) => store.selectedMovie.movie);

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpComingMovies();
  return (
    <div>
      <Header/>
      {showGptSearch ? <GptSearchPage/> : 
      selectedMovie ? <DisplayMovie movie = {selectedMovie}/> :
      <>
      <MainContainer/>
      <SecondaryContainer/>
      <Footer/>
      </>
      }
    </div>
  );
};

export default Browse;