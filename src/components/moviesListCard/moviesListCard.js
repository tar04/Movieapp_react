import {Link} from "react-router-dom";

import "./moviesListCard.css";

const MoviesListCard = ({movie:{id,title, poster_path, vote_average, overview}}) => {

    return (
        <Link className={"movie"} data-title={overview} to={id.toString()}>
            <img src={'https://image.tmdb.org/t/p/w500' + poster_path} alt={title}/>
            <div className={"title"}><h3>{title}</h3> <p>Rating:{vote_average}</p></div>
        </Link>
    );
};

export {MoviesListCard};