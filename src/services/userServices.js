
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

export const createAnUser = async (newUser) => {
    try {
        const response = await axios.get(endpoints.findUserByEmail(newUser.email));
        if (response.data.length) return false;
        const { data, status } = await axios.post(endpoints.users, newUser);
        
        if (status < 200 && status >= 300) return null;
        return data;

    } catch (error) {
        console.log(error);
        return null;
    }
}