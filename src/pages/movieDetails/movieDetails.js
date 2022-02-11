import "./movieDetails.css";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getSingleMovie} from "../../store";
import {useParams} from "react-router-dom";


const MovieDetails = () => {

    const dispatch = useDispatch();

    const {id} = useParams();

    useEffect(() => {
        dispatch(getSingleMovie({id}))
    }, [])

    const {singleMovie,statusMovie} = useSelector(state => state['movieReducer']);

    const {poster_path, title, release_date, vote_average, vote_count} = singleMovie;

    return (
        <div className={"details"}>
            {statusMovie ==='pending' && <h2>Loading</h2>}
            <div className={"top_content"}>
                <img src={'https://image.tmdb.org/t/p/w500' + poster_path} alt=""/>
                <div>
                    <div><h1>{title}</h1><h4>({release_date})</h4></div>
                    <div>Жанри (доробити)</div>
                    <div className={"rating"}>Рейтинг фільму(Tmdb):<p>{vote_average}/10</p></div>
                </div>
            </div>
        </div>
    );
};

export {MovieDetails};