import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";

import {getSingleMovie} from "../../store";
import "./movieDetails.css";


const MovieDetails = () => {

    const {id} = useParams();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getSingleMovie({id}));
    }, []);

    const {singleMovie, statusMovie} = useSelector(state => state["movieReducer"]);

    const {
        poster_path,
        title,
        release_date,
        vote_average,
        vote_count,
        genres,
        overview,
        production_countries,
        production_companies,
        tagline
    } = singleMovie;

    return (
        <div className={"details"}>
            {statusMovie === "pending" && <h2>Loading...</h2>}
            {statusMovie === "rejected" ? <h3>Такого фільму не знайдено</h3> : (singleMovie && (
                <div className={"top_content"}>
                    {poster_path && (<img src={"https://image.tmdb.org/t/p/w500" + poster_path} alt={""}/>)}
                    <div className={"text"}>
                        <div><h1 className={"titletext"}>{title}</h1>{tagline &&
                        <h5 className={"tagline"}>({tagline})</h5>}<h4 className={"release-date"}>Дата виходу в
                            прокат: {release_date}</h4>
                        </div>
                        <div className={"genres"}>Жанри: {genres && genres.map(genre => genre.name + ", ")}</div>
                        <div className={"rating"}>Рейтинг фільму(Tmdb):<p>{vote_average}/10</p>,
                            враховуючи {vote_count} голосів
                        </div>
                        <h3 className={"overview"}>{overview}</h3>
                        <div>Країни виробники:</div>
                        <div>{production_countries && production_countries.map(country => country.name + ", ")}</div>
                        <div className={"company_title"}>Компанії виробники:</div>
                        <div className={"companies"}>{production_companies && production_companies.map(company => <div
                            key={company.id}>{company.name} </div>)}</div>
                    </div>
                </div>))}
        </div>
    );
};

export {MovieDetails};