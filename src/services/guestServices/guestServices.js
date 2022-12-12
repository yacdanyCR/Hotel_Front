import axios from "axios"

const getAllGuest = async () => {
    try {
        return await axios.get("http://localhost:3000/api/guest")
            .then((data) => {
                console.log(data.data)
            })
    } catch (error) {

    }
}

export {
    getAllGuest
}