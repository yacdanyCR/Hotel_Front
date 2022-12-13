import axios from "axios"

const getAllBookings = async (setBookings) => {
    try {
        return await axios.get("http://localhost:3000/api/booking", {

        }).then((response) => {
            setBookings(response.data);
        })
    } catch (error) {
        console.log(error);
    }
}

const deleteBookings = async (id) => {
    try {
        return await axios.delete(`http://localhost:3000/api/booking/${id}`, {

        }).then((response) => {

        })
    } catch (error) {

    }
}

export {
    getAllBookings,
    deleteBookings
}