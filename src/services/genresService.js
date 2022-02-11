import {axiosService} from "./axiosService";
import {urls} from "../config";

export const genresService={
    getAll:()=>axiosService.get(urls.genres).then(value => value.data).then(value =>value.genres)
}