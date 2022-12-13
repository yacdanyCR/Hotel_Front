import axios from "axios";
import { errorAlert } from "../alerts/sweetAlert";

const authUser = async (username, password) => {
    try {
        return await axios.post("http://localhost:3000/api/user/login", {
            username,
            password
        }).then((response) => {
            if (!response.data.auth) {
                errorAlert("Usuario o contraseña incorrecta.!");
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