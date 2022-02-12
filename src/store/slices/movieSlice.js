import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {moviesService} from "../../services";

const initialState={
    movies:[],
    status:null,
    error:null,
    singleMovie:[],
    statusMovie:null,
    page:1,
    pageCount:500
}

export const getMovies = createAsyncThunk(
    "movieSlice/getMovies",
    async ({page}, {dispatch,rejectWithValue}) => {
        try {
            dispatch(refreshMovie());
            return await moviesService.getAll(page).then(value => value.results);
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
    reducers:{
        refreshMovie:(state) => {
            state.singleMovie=[];
        }
    },
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
            state.statusMovie = 'fulfilled';
            state.singleMovie = action.payload;
        }
    }
});

const movieReducer = movieSlice.reducer;

export const {refreshMovie} =movieSlice.actions;
export default movieReducer;
