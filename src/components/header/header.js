import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom"

import "./header.css";
import {setTheme} from "../../store";

const Header = () => {

    const {username: {username}, theme} = useSelector(state => state['userReducer']);

    const dispatch = useDispatch();

    const switch_theme = () => {
        dispatch(setTheme());
    }

    return (
        <div className={'header'}>
            <div className={"theme_switch"} onClick={switch_theme} data-title="Змінити оформлення сайту"><img
                src={require(theme ? "./dark.png" : "./light.png")} alt="Змінити оформлення сайту"/>
            </div>
            <Link className={"logo"} to={"/movies"}><img src={require("./icon.png")} alt="KinoManiac"/><p>KinoManiac</p>
            </Link>
            <div className={"user"}>
                <img className={"user_picture"} src={require("./user-picture.png")} alt={username}/>
                <p>Вітаю, {username ? username: "друже"}</p>
            </div>
        </div>
    );
};

export {Header};