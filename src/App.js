import React from 'react';
import {Routes, Route} from "react-router-dom";

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