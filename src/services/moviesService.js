import {axiosService} from "./axiosService";
import {urls} from "../config";

export const moviesService={
    getAll:(pageNum)=>axiosService.get(`${urls.movies}?page=${pageNum}`).then(value => value.data),
    getMovieById:(id)=>axiosService.get(`${urls.singleMovie}/${id}`).then(value => value.data)
}