import {useDispatch} from "react-redux";
import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import {joiResolver} from "@hookform/resolvers/joi";

import {setUser} from "../../store";
import {userValidator} from "../../validators";
import "./loginPage.css";

const LoginPage = () => {

    const {register, handleSubmit,formState:{errors}} = useForm(
        {resolver: joiResolver(userValidator), mode: "onTouched"}
    );

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const send = (data) => {
        dispatch(setUser({data}));
        navigate("/movies");
    }

    return (
        <div className={"login"}>
            <div className={"form"}>
                <img src={require("./hello.png")} alt=""/>
                <h2 className={"form_greeting"}>Вітаю у нашому клубі!</h2>
                <h3 className={"form_greeting"}> Як ми можемо до Тебе звертатись?</h3>
                <form onSubmit={handleSubmit(send)}><input type="text" {...register("username")}
                                                           placeholder={"Введи своє ім'я"}/>

                    <button>Поїхали!</button>
                </form>
                {errors.username && <h3>{errors.username.message}</h3>}
            </div>
        </div>
    );
};

export {LoginPage};