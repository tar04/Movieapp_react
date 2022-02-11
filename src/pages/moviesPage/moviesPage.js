import {Outlet} from "react-router-dom"

import {Header} from "../../components";
import "./moviesPage.css";


const MoviesPage = () => {

    return (
        <div className={'moviesPage'}>
                <Header/>
                <Outlet/>
        </div>
    );
};

export {MoviesPage};