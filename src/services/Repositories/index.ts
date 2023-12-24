import axios from "axios";

const getRepositories = (username: string) => {
    return axios.get(`https://api.github.com/users/${username}/repos`)
}

export {
    getRepositories
}