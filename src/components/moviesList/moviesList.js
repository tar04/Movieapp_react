import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {firstPage, getMovies, lastPage, nextPage, prevPage} from "../../store";
import {MoviesListCard} from "../moviesListCard/moviesListCard";
import "./moviesList.css";

const MoviesList = () => {

    const dispatch = useDispatch();


    const {movies, error, status, page, pageCount, genres} = useSelector(state => state["movieReducer"]);
    useEffect(() => {
        dispatch(getMovies({page, genres}));
        window.scrollTo(0, 0);
    }, [page,genres])


    const prev = () => {
        dispatch(prevPage());
    }

    const next = () => {
        dispatch(nextPage());
    }

    const first = () => {
        dispatch(firstPage());
    }

    const last = () => {
        dispatch(lastPage());
    }

    const pageOne = "1 <<";
    const pageLast = `>> ${pageCount}`;

    return (
        <div>
            <div>{status === 'pending' && <h2>Loading...</h2>}</div>
            <div className={"movies"}>
                {error && <h2>{error}</h2>}
                {movies.map(movie => <MoviesListCard key={movie.id} movie={movie}/>)}
            </div>
            {!error && <div className={"pages"}>
                {page !== 1 && <div className="prev">
                    <div className="page" onClick={prev}>Previous page</div>
                    <div className="page" onClick={first}>{pageOne}</div>
                </div>}
                <div className="current">{page}</div>
                {page !== pageCount && <div className="next">
                    <div className="page" onClick={last}>{pageLast}</div>
                    <div className="page" onClick={next}>Next page</div>
                </div>}
            </div>}
        </div>
    );
};

export {MoviesList};