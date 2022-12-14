import axios from "axios";
import { errorAlert, successAlert } from "../../alerts/sweetAlert";

const registerUser = async (username, password) => {
    try {
        return await axios.post("https://hotel-backend-production.up.railway.app/api/user", {
            username,
            password
        }).then((response) => {
            response.data.created ? successAlert("Account Created") : errorAlert("That username exist");
        })
    } catch (error) {
        console.log(error);
    }
}

export {
    registerUser
}