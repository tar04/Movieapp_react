import "./genres.css";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getGenres} from "../../store";
import {Genre} from "../genre/genre";

const Genres = () => {

    const dispatch = useDispatch();

    const {genres} = useSelector(state => state["genreReducer"]);

    useEffect(()=>{
        dispatch(getGenres())
    },[])


    return (
        <div className={"genresPage"}>
            {genres.map(genre=><Genre key={genre.id} genre={genre}/>)}
        </div>
    );
};

export {Genres};