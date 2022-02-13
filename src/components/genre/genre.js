import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import {addGenre, delGenre} from "../../store";
import "./genre.css";

const Genre = ({genre: {id, name}}) => {

    const {genres} = useSelector(state => state["movieReducer"]);

    const dispatch = useDispatch();

    const [status, setStatus] = useState(false);

    const send = () => {
        if (!genres.includes(id)) {
            setStatus(!status);
            dispatch(addGenre({id}));

        } else {
            setStatus(!status);
            dispatch(delGenre({id}));
        }
    }

    return (
        <div className={status ? "genre_sel" : "genre"} onClick={send}>
            {name}
        </div>
    );
};

export {Genre};