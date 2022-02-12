import {configureStore} from "@reduxjs/toolkit";

import userReducer from "./slices/userSlice";
import movieReducer from "./slices/movieSlice";
import genreReducer from "./slices/genreSlice";

const store = configureStore({
    reducer: {
        userReducer,
        movieReducer,
        genreReducer
    }
});

export default store;