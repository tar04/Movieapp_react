import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {getMovies} from "../../store";
import {MoviesListCard} from "../moviesListCard/moviesListCard";
import "./moviesList.css";

const MoviesList = () => {
    
    const dispatch = useDispatch();
    
    const {movies,error,status} = useSelector(state => state["movieReducer"]);
    
    useEffect(()=>{
        dispatch(getMovies());
    },[])
    
    return (
        <div className={"movies"}>
            {status ==='pending' && <h2>Loading...</h2>}
            {error && <h2>{error}</h2>}
            {movies.map(movie=><MoviesListCard key={movie.id} movie={movie}/>)}
        </div>
    );
};

export {MoviesList};