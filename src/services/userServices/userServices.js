import axios from "axios";

const registerUser = async (username, password) => {
    try {
        return await axios.post("http://localhost:3000/api/user", {
            username,
            password
        }).then((response) => {
            response.data.created ? alert("Se a creado su cuenta") : alert("Ese usuario ya existe");
        })
    } catch (error) {
        console.log(error);
    }
}

export {
    registerUser
}