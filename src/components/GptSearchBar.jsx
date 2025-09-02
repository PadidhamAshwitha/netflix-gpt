import languages from "../utilities/languageConstants";
import {useSelector } from "react-redux";

const GptSearchBar = () => {
    const langKey = useSelector(store => store.config.lang);
    console.log(langKey);
    return (
        <div className=" pt-[5%] flex justify-center">

            <form className = "w-8/12 p-2 bg-black grid grid-cols-12 rounded-lg">
                <input 
                className="p-2 m-2 bg-white focus:ring-2 focus:ring-white col-span-10"
                type="text" 
                placeholder={languages[langKey].gptSearchPlaceholder}
                />
                <button className = "py-2 px-4 m-2 text-white font-bold bg-red-600 hover:bg-red-700 rounded-lg cursor-pointer hover:border border-white col-span-2">
                    {languages[langKey].search}
                </button>
            </form>
        </div>
    );
};

export default GptSearchBar;