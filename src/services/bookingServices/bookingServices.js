import axios from "axios"

const getAllBookings = async (setBookings) => {
    try {
        return await axios.get("https://hotel-backend-production.up.railway.app/api/booking", {

        }).then((response) => {
            setBookings(response.data);
        })
    } catch (error) {
        console.log(error);
    }
}

const deleteBookings = async (id) => {
    try {
        return await axios.delete(`https://hotel-backend-production.up.railway.app/api/booking/${id}`, {

        });
    } catch (error) {
        console.log(error);
    }
}

export {
    getAllBookings,
    deleteBookings
}