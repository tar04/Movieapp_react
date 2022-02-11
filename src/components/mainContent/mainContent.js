import {MoviesList} from "../moviesList/moviesList";
import "./mainContent.css";

const MainContent = () => {
    return (
        <div className={"content"}>
            <MoviesList/>
        </div>
    );
};

export {MainContent};