import axios from "axios";

const getRepositories = (username: string) => {
    return axios.get(`https://api.github.com/users/${username}/repos`)
}

const getRepository = (repo: string) => {
    return axios.get(`https://api.github.com/repos/${repo}`)
}

export {
    getRepositories,
    getRepository
}