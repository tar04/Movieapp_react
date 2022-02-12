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
    reducers: {

    },
    extraReducers: {
        [getGenres.pending]: (state) => {
            state.status = 'pending';
        },
        [getGenres.fulfilled]: (state, action) => {
            state.status = 'fulfilled';
            state.genres = action.payload;
        },
        [getGenres.rejected]: (state) => {
            state.status = 'rejected';
        },
    }
});


const genreReducer = genreSlice.reducer;

export const {} =genreSlice.actions;
export default genreReducer;