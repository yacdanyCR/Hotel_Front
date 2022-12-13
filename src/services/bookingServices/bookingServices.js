import axios from "axios"

const getBookings = async (setBookings) => {
    try {
        axios.get("http://localhost:3000/api/booking", {

        }).then((response) => {
            setBookings(response.data);
        })
    } catch (error) {
        console.log(error);
    }
}

export {
    getBookings
}