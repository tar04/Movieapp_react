import axios from "axios";

import baseURL from "../config/urls";

export const axiosService = axios.create({
    baseURL,
    headers: {
        Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZjAwZGM2YWNmNTFlNjkwZWE5ZDIxODRkNDFhODdlMSIsInN1YiI6IjYyMDUyNjFhZTMyM2YzMDBkMDJmMDJmNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.u-OMTFrvLMMT20tgGnLCqO_G7iYJkDWRBKcmht9mp-I"
    }
});

