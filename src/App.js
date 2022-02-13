import React, {useEffect} from 'react';
import {Routes, Route} from "react-router-dom";

import {LoginPage, MovieDetails, MoviesPage, NotFoundPage} from "./pages";
import {MainContent} from "./components";
import {useDispatch, useSelector} from "react-redux";
import useLocalStorage from "use-local-storage";
import {setTheme} from "./store";

const App = () => {

    const {theme} = useSelector(state => state['userReducer']);

    const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const [themeState, setThemeState] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(setTheme(themeState))
    },[])

    useEffect(()=>{
        setThemeState(theme);
    },[theme])


    return (
        <div data-theme={theme}>
            <Routes>
                <Route path={'/'} element={<LoginPage/>}/>
                <Route path={'/movies'} element={<MoviesPage/>}>
                    <Route index element={<MainContent/>}/>
                    <Route path={':id'} element={<MovieDetails/>}/>
                </Route>
                <Route path={'*'} element={<NotFoundPage/>}/>
            </Routes>
        </div>
    );
};

export default App;