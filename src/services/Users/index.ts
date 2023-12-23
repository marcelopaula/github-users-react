import axios from "axios";

const SearchUser = async (username: string) => {
    try {
        const result = await axios.get(`https://api.github.com/users/${username}`);
        return result;
    } catch (err: unknown) {
        if (err instanceof Error) return err.message;
    }
};

export default SearchUser;