import axios from "axios";

const registerUser = async (username, password) => {
    try {
        return await axios.post("http://localhost:3000/api/user", {
            username,
            password
        }).then((response) => {
            response.data.affectedRows > 0 ? alert("Se a creado su cuenta") : alert("No se pudo crear su cuenta");
        })
    } catch (error) {
        console.log(error);
    }
}

export {
    registerUser
}