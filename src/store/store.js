import {configureStore} from "@reduxjs/toolkit";

import userReducer from "./slices/userSlice";
import movieReducer from "./slices/movieSlice";

const store = configureStore({
    reducer: {
        userReducer,
        movieReducer
    }
});

export default store;