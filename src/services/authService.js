import axios from "axios";
import { errorAlert } from "../alerts/sweetAlert";

const authUser = async (username, password) => {
    try {
        return await axios.post("https://hotel-backend-production.up.railway.app/api/user/login", {
            username,
            password
        }).then((response) => {
            if (!response.data.auth) {
                errorAlert("Incorrect user or password.!");
            }
            return response.data.auth;
        })
    } catch (error) {
        console.log(error);
    }
}

export {
    authUser
}