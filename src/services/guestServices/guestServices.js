import axios from "axios"
import { successAlert } from "../../alerts/sweetAlert";

const getAllGuest = async (setGuest) => {
    try {
        return await axios.get("http://localhost:3000/api/guest")
            .then((data) => {
                setGuest(data.data);
            })
    } catch (error) {

    }
}

const addGuest = async ({ name, lastname, birthdate, country, phone, checkin, checkout, payment }, setGuest) => {
    try {
        axios.post("http://localhost:3000/api/guest", {
            name,
            lastname,
            birthdate,
            country,
            phone,
            checkin,
            checkout,
            payment
        }).then((response) => {
            getAllGuest(setGuest);
        })
    } catch (error) {

    }
}

const deleteGuest = async (id) => {
    try {
        axios.delete(`http://localhost:3000/api/guest/${id}`)
            .then((response) => {
                return response
            })
    } catch (error) {

    }
}

const updateCurrentGuest = async ({ id, name, lastname, phone, country }, setGuest) => {
    try {
        return await axios.put(`http://localhost:3000/api/guest`, {
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

export {
    getAllGuest,
    deleteGuest,
    addGuest,
    updateCurrentGuest
}