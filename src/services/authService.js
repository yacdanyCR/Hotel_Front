import axios from "axios";
import { errorAlert, successAlert } from "../alerts/sweetAlert";

const authUser = async (username, password) => {
    try {
        return await axios.post("http://localhost:3000/api/user/login", {
            username,
            password
        }).then((response) => {
            if (!response.data.auth) {
                errorAlert("Usuario o contraseña incorrecta.!");
            } else {
                successAlert("Welcome.!");
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