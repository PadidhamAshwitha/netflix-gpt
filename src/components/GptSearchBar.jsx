import { useRef } from "react";
import {useSelector } from "react-redux";
import {useDispatch } from "react-redux";

import languages from "../utilities/languageConstants";
import openai from "../utilities/openai";
import {API_OPTIONS} from "../utilities/constants";
import {addGptMovieResults} from "../utilities/gptSlice";


const GptSearchBar = () => {
    const dispatch = useDispatch();
    const langKey = useSelector(store => store.config.lang);
    const searchText = useRef(null);

    const searchMoviesInTMDB = async (movie) => {
        const data = await fetch("https://api.themoviedb.org/3/search/movie?query="+ movie +"&include_adult=false&language=en-US&page=1", API_OPTIONS);
        const json = await data.json();
        console.log(json.results);

        return json.results;
    }

    const handleGptSearchClick = async () => {

        
        const gptQuery = "Role: you act like a Movie Recommendation System. Task: Suggest 5 movie names according to the query" +
        searchText.current.value + ". Context : to build a movie recommendation system which suggest some movies. output format: give 5 movie names as a list for example: 1. 8 vasantalu 2. return of the dragon 3. veeramallu 4. kingdom 5. manam";

        console.log(searchText.current.value);
        // const gptResults = await openai.chat.completions.create({
        //     model: 'gpt-4o',
        //     messages: [
        //         { role: 'developer', content: gptQuery },
        //     ],
        //     });

        //     if(!gptResults.choices) {(err)=> err.message()};
            // const gptMovies = gptResults?.choices?.[0]?.message?.content.split(",");
            // console.log(gptResults?.choices?.[0]?.message?.content.split(","));

            const gptMovies = ["8 vasantalu", "sita ramam", "pushpa", "jai janaki nayaka", "12 fail", "tourist family"];

            const promiseArray = gptMovies.map((movie) => searchMoviesInTMDB(movie));
            // [promise, promise, promise]
            const tmdbResults = await Promise.all(promiseArray);
            console.log(tmdbResults);

            dispatch(addGptMovieResults({movieNames: gptMovies, movieResults : tmdbResults}));



    };


    return (
        <div className=" pt-[5%] flex justify-center">

            <form 
            onSubmit={(e) => e.preventDefault()}
            className = "w-8/12 p-2 bg-black grid grid-cols-12 rounded-lg">
                <input 
                ref={searchText}
                className="p-2 m-2 bg-white focus:ring-2 focus:ring-white col-span-10"
                type="text" 
                placeholder={languages[langKey].gptSearchPlaceholder}
                />
                <button 
                onClick={handleGptSearchClick}
                className = "py-2 px-4 m-2 text-white font-bold bg-red-600 hover:bg-red-700 rounded-lg cursor-pointer hover:border border-white col-span-2">
                    {languages[langKey].search}
                </button>
            </form>
        </div>
    );
};

export default GptSearchBar;