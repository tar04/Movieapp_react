import axios from "axios";

import baseURL from "../config/urls";

export const axiosService = axios.create({
    baseURL,
    headers: {
        Authorization: process.env.REACT_APP_BEARER_TOKEN
    }
});

