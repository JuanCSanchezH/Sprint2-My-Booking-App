
import axios from "axios";
import endpoints from "./endpoints";

export const getUserByEmailAndPassword = async (email, password) => {
    try {
        const data = await axios.get(endpoints.userByEmailAndPassword(email, password));
        console.log(data.data[0]);
        return data.data.length ? data.data[0] : null;
    } catch (error) {
        console.log(error);
        return null;
    }
}
