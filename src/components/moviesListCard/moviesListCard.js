import {Link} from "react-router-dom";

import "./moviesListCard.css";

const MoviesListCard = ({movie: {id, title, poster_path, vote_average, overview}}) => {

    return (
        <Link className={"movie"} data-title={overview} to={id.toString()}>
            <img src={poster_path ? ("https://image.tmdb.org/t/p/w500" + poster_path) : require("./default_image.jpg")}
                 alt={title}/>
            <div className={"title"}>
                <h3>{title}</h3>
                <div className={vote_average <= 5 ? "ratings_low" : "ratings_high"}>{vote_average}</div>
            </div>
        </Link>
    );
};

export {MoviesListCard};