import {createSlice } from "@reduxjs/toolkit";

const selectedMovieSlice = createSlice({
    name : "selected Movie",
    initialState : {
        movie : null,
        trailer : null,
        movieDetails : null,
    },
    reducers : {
        addSelectedMovie : (state, action) => {
            state.movie = action.payload;
        },
        addTrailer : (state, action) => {
            state.trailer = action.payload;
        },
        addMovieDetails : (state, action )=> {
            state.movieDetails = action.payload;
        },
        clearSelectedMovie : (state) => {
            state.movie = null;
        },
    },
});

export const {addSelectedMovie, clearSelectedMovie, addMovieDetails, addTrailer } = selectedMovieSlice.actions;

export default selectedMovieSlice.reducer;