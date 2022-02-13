import {MoviesList} from "../moviesList/moviesList";
import {Genres} from "../genres/genres";
import "./mainContent.css";

const MainContent = () => {
    return (
        <div className={"content"}>
            <Genres/>
            <MoviesList/>
        </div>
    );
};

export {MainContent};