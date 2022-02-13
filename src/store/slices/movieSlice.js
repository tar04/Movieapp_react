import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {moviesService} from "../../services";

const initialState = {
    movies: [],
    status: null,
    error: null,
    singleMovie: [],
    statusMovie: null,
    page: 1,
    pageCount: 500,
    genres: []
}

export const getMovies = createAsyncThunk(
    "movieSlice/getMovies",
    async ({page, genres}, {dispatch, rejectWithValue}) => {
        try {
            dispatch(refreshMovie());

            return await moviesService.getAll(page, genres.join("%2C")).then(value => {
                dispatch(changePageCount(value.total_pages));
                if (value.total_pages) {
                    return value.results
                } else {
                    return rejectWithValue("No such films");
                }
            });
        } catch (e) {
            return rejectWithValue(e.message);
        }
    }
);

export const getSingleMovie = createAsyncThunk(
    "movieSlice/getSingleMovie",
    async ({id}, {rejectWithValue}) => {
        try {
            return await moviesService.getMovieById(id);
        } catch (e) {
            return rejectWithValue(e.message);
        }
    }
);


const movieSlice = createSlice({
    name: "movieSlice",
    initialState,
    reducers: {
        refreshMovie: (state) => {
            state.singleMovie = [];
        },
        prevPage: (state) => {
            state.page = --state.page;
        },
        nextPage: (state) => {
            state.page = ++state.page;
        },
        firstPage: (state) => {
            state.page = 1;
        },
        lastPage: (state) => {
            state.page = state.pageCount;
        },
        addGenre: (state, action) => {
            state.genres.push(action.payload.id);
            state.page = 1;
        },
        delGenre: (state, action) => {
            state.genres = state.genres.filter(genre => genre !== action.payload.id);
            state.page = 1;
        },
        resetPage: (state) => {
            state.genres = [];
            state.page=1;
        },
        changePageCount: (state, action) => {
            state.pageCount = action.payload;
            if (state.pageCount > 500) {
                state.pageCount = 500;
            }
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
            state.movies = []
        },
        [getSingleMovie.pending]: (state) => {
            state.statusMovie = 'pending';
        },
        [getSingleMovie.fulfilled]: (state, action) => {
            state.statusMovie = 'fulfilled';

            state.singleMovie = action.payload;
        },
        [getSingleMovie.rejected]: (state) => {
            state.statusMovie = 'rejected';
        }
    }
});

const movieReducer = movieSlice.reducer;

export const {
    refreshMovie,
    prevPage,
    nextPage,
    firstPage,
    lastPage,
    addGenre,
    delGenre,
    changePageCount,
    resetPage
} = movieSlice.actions;
export default movieReducer;
