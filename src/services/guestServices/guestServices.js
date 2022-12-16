import axios from "axios"
import { successAlert } from "../../alerts/sweetAlert";

const getAllGuest = async (setGuest) => {
    try {
        return await axios.get("https://hotel-backend-production.up.railway.app/api/guest")
            .then((data) => {
                setGuest(data.data);
            })
    } catch (error) {
        console.log(error);
    }
}

const addGuest = async ({ name, lastname, birthdate, country, phone, checkin, checkout, payment }, setGuest) => {
    try {
        await axios.post("https://hotel-backend-production.up.railway.app/api/guest", {
            name,
            lastname,
            birthdate,
            country,
            phone,
            checkin,
            checkout,
            payment
        }).then(() => {
            getAllGuest(setGuest);
        })
    } catch (error) {
        console.log(error)
    }
}

const deleteGuest = async (id) => {
    try {
        axios.delete(`https://hotel-backend-production.up.railway.app/api/guest/${id}`)
            .then((response) => {
                return response
            })
    } catch (error) {
        console.log(error);
    }
}

const updateCurrentGuest = async ({ id, name, lastname, phone, country }, setGuest) => {
    try {
        return await axios.put(`https://hotel-backend-production.up.railway.app/api/guest`, {
            id,
            name,
            lastname,
            phone,
            country
        }).then(() => {
            getAllGuest(setGuest);
            successAlert("Information Updated.!");
        })
    } catch (error) {

    }
}

const searchGuest = async (search, setGuest) => {
    try {
        axios.get(`https://hotel-backend-production.up.railway.app/api/guest/${search}`, {

        }).then((response) => {
            setGuest(response.data);
        })
    } catch (error) {
        console.log(error);
    }
}

export {
    getAllGuest,
    deleteGuest,
    addGuest,
    updateCurrentGuest,
    searchGuest
}