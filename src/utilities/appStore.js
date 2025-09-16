import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./moviesSlice";
import gptReducer from "./gptSlice";
import configReducer from "./configSlice";
import selectedMovieReducer from "./selectedMovieSlice";

const appStore = configureStore({
    reducer : {
        user : userReducer,
        movies : moviesReducer,
        gpt : gptReducer,
        config : configReducer,
        selectedMovie : selectedMovieReducer,
    },
});

export default appStore;