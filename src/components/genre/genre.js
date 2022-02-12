import "./genre.css";
import {useDispatch, useSelector} from "react-redux";
import {addGenre, delGenre} from "../../store";

const Genre = ({genre: {id, name}}) => {

    const {genres} = useSelector(state => state["movieReducer"]);

    const dispatch = useDispatch();

    let status = false;

    const send = () => {
        status = !status;
        if (!genres.includes(id)) {
            dispatch(addGenre({id}));

        } else {
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