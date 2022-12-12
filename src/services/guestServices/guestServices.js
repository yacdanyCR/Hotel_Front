import axios from "axios"

const getAllGuest = async (setGuest) => {
    try {
        return await axios.get("http://localhost:3000/api/guest")
            .then((data) => {
                setGuest(data.data);
            })
    } catch (error) {

    }
}

export {
    getAllGuest
}