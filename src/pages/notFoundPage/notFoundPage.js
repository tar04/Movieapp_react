import {Link} from "react-router-dom";

import "./notFoundPage.css";

const NotFoundPage = () => {
    return (
        <div className={"nfpage"}>
            <div>
                <h2>Такої сторінки не існує...</h2>
                <Link to={'/'}>Повернутись до головної сторінки</Link>
            </div>
        </div>
    );
};

export {NotFoundPage};