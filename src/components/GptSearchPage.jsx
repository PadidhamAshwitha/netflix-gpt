import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import {BACKGROUND_IMG_URL} from "../utilities/constants";
const GptSearchPage = () => {
    return (
        <div>
            <div className="absolute -z-10">
                <img src= {BACKGROUND_IMG_URL} alt = "background-image" />
            </div>
            <GptSearchBar/>
            <GptMovieSuggestions/>
        </div>
    );
};

export default GptSearchPage;