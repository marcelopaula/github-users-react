import { ISort } from "@/Store/slices/sort";
import axios from "axios";

const getRepositories = (username: string, sort: ISort) => {
    return axios.get(`https://api.github.com/search/repositories?q=user:${username}&sort=${sort.sort}&order=${sort.order}`)
}

const getRepository = (repo: string) => {
    return axios.get(`https://api.github.com/repos/${repo}`)
}

const getLanguages = (url: string) =>
    axios.get(url)

export {
    getRepositories,
    getRepository,
    getLanguages
}