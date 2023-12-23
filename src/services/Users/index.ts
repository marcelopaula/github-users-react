import axios from "axios";

const SearchUser = async (username: string) => {
    const result = await axios.get(`https://api.github.com/users/${username}`);
    return result;
};

export default SearchUser;