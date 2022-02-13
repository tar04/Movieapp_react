import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    username: '',
    theme: ''
}

let userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.username = action.payload.data;
        },
        changeTheme: (state) => {
            state.theme=state.theme==="dark" ? "light": "dark";
        },
        setTheme: (state,action) => {
            state.theme=action.payload;
        }
    }
});

const userReducer = userSlice.reducer;

export const {setUser, changeTheme,setTheme} = userSlice.actions;
export default userReducer;