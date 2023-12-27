import axios from "axios";

const getRepositories = (username: string) => {
    return axios.get(`https://api.github.com/search/repositories?q=user:${username}&sort=stars&order=desc`)
}

const getRepository = (repo: string) => {
    return axios.get(`https://api.github.com/repos/${repo}`)
}

export {
    getRepositories,
    getRepository
}