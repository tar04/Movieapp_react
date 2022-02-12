import {axiosService} from "./axiosService";
import {urls} from "../config";

export const moviesService={
    getAll:(pageNum,genres)=>axiosService.get(`${urls.movies}?page=${pageNum}&with_genres=${genres}`).then(value => value.data),
    getMovieById:(id)=>axiosService.get(`${urls.singleMovie}/${id}`).then(value => value.data)
}