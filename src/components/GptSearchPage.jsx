import GptSearchBar from "./GptSearchBar";
import {useSelector} from "react-redux";

import GptMovieSuggestions from "./GptMovieSuggestions";
import {BACKGROUND_IMG_URL} from "../utilities/constants";
const GptSearchPage = () => {
    const {movieNames} = useSelector((store) => store.gpt);

    return (
        <div>
            <div className="fixed -z-10">
                <img 
                className="h-screen w-screen object-cover"
                src= {BACKGROUND_IMG_URL} 
                alt = "background-image" />
            </div>
            <GptSearchBar/>
            {movieNames && <GptMovieSuggestions/> }
        </div>
    );
};

export default GptSearchPage;