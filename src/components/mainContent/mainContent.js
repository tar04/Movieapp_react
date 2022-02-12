import {MoviesList} from "../moviesList/moviesList";
import "./mainContent.css";
import {Genres} from "../genres/genres";

const MainContent = () => {
    return (
        <div className={"content"}>
            <Genres/>
            <MoviesList/>
        </div>
    );
};

export {MainContent};