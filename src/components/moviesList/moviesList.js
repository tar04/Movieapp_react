import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {getMovies, nextPage, prevPage} from "../../store";
import {MoviesListCard} from "../moviesListCard/moviesListCard";
import "./moviesList.css";

const MoviesList = () => {

    const dispatch = useDispatch();

    const {movies, error, status, page, pageCount} = useSelector(state => state["movieReducer"]);

    useEffect(() => {
        dispatch(getMovies({page}));
    }, [page])

    const scrollUp = () => {

    }
    
    const prev = () => {
        dispatch(prevPage());
        scrollUp();
    }

    const next = (e) => {
        dispatch(nextPage());
        scrollUp();
    }

    return (
        <div>
            <div>{status === 'pending' && <h2>Loading...</h2>}</div>
            <div id={"sa"}>123</div>
            <div className={"movies"}>
                {error && <h2>{error}</h2>}
                {movies.map(movie => <MoviesListCard key={movie.id} movie={movie}/>)}
            </div>
            <div className={"pages"}>
                {page !== 1 && <div className="page" onClick={prev}>Previous page</div>}
                <div className="current">{page}</div>
                {page!==pageCount && <div className="page" onClick={next}>Next page</div>}
            </div>
        </div>
    );
};

export {MoviesList};