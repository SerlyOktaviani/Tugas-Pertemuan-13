import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "../features";

const store = configureStore({
    reducer: {
        movies: moviesReducer
    },
});

export default store;
