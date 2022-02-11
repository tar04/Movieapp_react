import React from 'react';
import {Routes, Route, Link} from "react-router-dom";

import "./App.css"
import {LoginPage, MovieDetails, MoviesPage, NotFoundPage} from "./pages";
import {MainContent} from "./components";

const App = () => {

    return (
        <div>
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