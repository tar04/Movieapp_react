import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {moviesService} from "../../services";

const initialState = {
    movies: [],
    singleMovie: null,
    statusMovie: null,
    status: null,
    error: null
}

export const getMovies = createAsyncThunk(
    "movieSlice/getMovies",
    async (_, {rejectWithValue}) => {
        try {
            return await moviesService.getAll().then(value => value.results);
        } catch (e) {
            return rejectWithValue(e.message)
        }
    }
);

export const getSingleMovie = createAsyncThunk(
    "movieSlice/getSingleMovie",
    async ({id}) => {
        try {
            return await moviesService.getMovieById(id);
        } catch (e) {
            console.log(e);
        }
    }
);

const movieSlice = createSlice({
    name: "movieSlice",
    initialState,
    extraReducers: {
        [getMovies.pending]: (state) => {
            state.status = 'pending';
            state.error = null
        },
        [getMovies.fulfilled]: (state, action) => {
            state.status = 'fulfilled';
            state.movies = action.payload;
        },
        [getMovies.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        },
        [getSingleMovie.pending]: (state) => {
            state.statusMovie = 'pending';
        },
        [getSingleMovie.fulfilled]: (state, action) => {
            state.singleMovie = action.payload;
        }
    }
});

const movieReducer = movieSlice.reducer;

export default movieReducer;
