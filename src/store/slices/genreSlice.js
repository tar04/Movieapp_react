import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";

import {genresService} from "../../services";

const initialState={
    genres:[],
    status:null
}

export const getGenres = createAsyncThunk(
    "movieSlice/getGenres",
    async () => {
        try {
           return  await genresService.getAll();
        } catch (e) {
            console.log(e);
        }
    }
);


const genreSlice = createSlice({
    name: "genreSlice",
    initialState,
    extraReducers: {
        [getGenres.pending]: (state) => {
            state.status = "pending";
        },
        [getGenres.fulfilled]: (state, action) => {
            state.status = "fulfilled";
            state.genres = action.payload;
        }
    }
});


const genreReducer = genreSlice.reducer;

export default genreReducer;