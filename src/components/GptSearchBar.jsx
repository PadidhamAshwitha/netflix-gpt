import { useRef } from "react";
import {useSelector } from "react-redux";
import {useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';

import languages from "../utilities/languageConstants";
import openai from "../utilities/openai";
import {API_OPTIONS} from "../utilities/constants";
import {addGptMovieResults,clearGptResults} from "../utilities/gptSlice";


const GptSearchBar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const searchText = useRef(null);

    const langKey = useSelector(store => store.config.lang);

    const searchMoviesInTMDB = async (movie) => {
        const data = await fetch("https://api.themoviedb.org/3/search/movie?query="
            + movie +
            "&include_adult=false&language=en-US&page=1",API_OPTIONS
        );
        const json = await data.json();
        return json.results;
    };

    const handleGptSearchClick = async () => {
        if(!searchText.current.value) {
        <p className = "pt-4 text-2xl md:text-3xl font-bold text-red-600 mb-6 text-center animate-pulse">
            Enter the Prompt to get the recommendations!!! Enjoyyy 🎥🎬🍿
        </p>
        }

        const gptQuery = "Role: you act like a Movie Recommendation System. Task: Suggest 5 movie names according to the query" +
        searchText.current.value + ". Context : to build a movie recommendation system which suggest some movies. output format: give 5 movie names, with comma seperated for example:8 vasantalu, return of the dragon, veeramallu, kingdom, manam.";

        // call to gpt API's to get the gpt results (The 5 movie names)
        const gptResults = await openai.chat.completions.create({
            model: 'gpt-4o',
            messages: [
                { role: "user", content: gptQuery },
            ],
        });

        // If no results found for the given query
        if(!gptResults?.choices) navigate("/error");

        const gptMovies = gptResults?.choices?.[0]?.message?.content.split(",");

        // console.log(gptResults?.choices?.[0]?.message?.content.split(","));

        //const gptMovies = ["8 vasantalu", "sita ramam", "pushpa", "12 fail", "tourist family"];

        const promiseArray = gptMovies.map((movie) => searchMoviesInTMDB(movie));
        // [promise, promise, promise, promise, promise] 
        // will return the output after completion of all promises
        
        const tmdbMovieResults = await Promise.all(promiseArray);
        // console.log(tmdbMovieResults);
        dispatch(addGptMovieResults({movieNames: gptMovies, movieResults : tmdbMovieResults}));

    };

    const handleGptClearClick = () => {
        dispatch(clearGptResults());
    };


    return (
        <div className="pt-[40%] md:pt-[5%] flex justify-center ">

            <form 
            onSubmit={(e) => e.preventDefault()}
            className = "w-full md:w-8/12 p-2 bg-black grid grid-cols-12 rounded-lg">
                <input 
                ref={searchText}
                className="p-2 m-2 bg-white focus:ring-2 focus:ring-white col-span-9 md:col-span-10"
                type="text" 
                placeholder={languages[langKey].gptSearchPlaceholder}
                />
                <button 
                onClick={handleGptSearchClick}
                className = "py-2 md:px-4 m-2 text-white font-bold bg-red-600 hover:bg-red-700 rounded-lg cursor-pointer hover:border border-white col-span-3 md:col-span-2">
                    {languages[langKey].search}
                </button>
            </form>
                <button 
                onClick={handleGptClearClick}
                className = " md:px-4 my-4 mx-2 text-white font-bold bg-red-600 hover:bg-red-700 rounded-lg cursor-pointer hover:border border-white col-span-3 md:col-span-2">
                    Clear Gpt Results
                </button>
        </div>
    );
};

export default GptSearchBar;