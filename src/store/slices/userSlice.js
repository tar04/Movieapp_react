import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    username: '',
    theme: true
}

let userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.username = action.payload.data;
        },
        setTheme: (state) => {
            state.theme = !state.theme;
        },
    }
});

const userReducer = userSlice.reducer;

export const {setUser, setTheme} = userSlice.actions;
export default userReducer;