import axios from "axios";

const authUser = async (username, password) => {
    try {
        return await axios.post("http://localhost:3000/api/user/login", {
            username,
            password
        }).then((response) => {
            return response.data.auth
        })
    } catch (error) {
        console.log(error);
    }
}

export {
    authUser
}