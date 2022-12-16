import React, { useContext, useState } from 'react'
import Swal from 'sweetalert2';
import { GuestContext } from '../../Context/GhuestContext';
import { getAllBookings } from '../../services/bookingServices/bookingServices';
import { addGuest } from '../../services/guestServices/guestServices';

export const FormComponent = ({ setModal }) => {
    const { setGuest, setBookings } = useContext(GuestContext);
    const [newGuest, setNewGuest] = useState({
        name: "",
        lastname: "",
        birthdate: "",
        country: "",
        phone: "",
        checkin: "",
        checkout: "",
        payment: ""
    });

    const handleGuest = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setNewGuest((prev) => {
            return { ...prev, [name]: value }
        })
    }
    const handleSubmitGuest = async (e) => {
        e.preventDefault();
        await addGuest(newGuest, setGuest);
        await getAllBookings(setBookings);

        setModal("none");
        Swal.fire(
            'New Guest Added!',
            'You clicked the button!',
            'success'
        )
    }

    return (
        <>
            <form onSubmit={(e) => handleSubmitGuest(e)} method="post">
                <div className="modal_input">
                    <input type="text" name='name' placeholder='Name' onChange={(e) => handleGuest(e)} />
                </div>
                <div className="modal_input">
                    <input type="text" name='lastname' placeholder='Lastname' onChange={(e) => handleGuest(e)} />
                </div>
                <div className="modal_input">
                    <label htmlFor="birth" name='birth_date'>Bith Date</label>
                    <input type="date" name='birthdate' placeholder='birth-date' onChange={(e) => handleGuest(e)} />
                </div>
                <div className="modal_input">
                    <select name="country" onChange={(e) => handleGuest(e)} >
                        <option value="Costarican" defaultValue={"Costarican"}>Costarican</option>
                        <option value="Mexican">Mexican</option>
                        <option value="American">American</option>
                        <option value="Argentinian">Argentinian</option>
                    </select>
                </div>
                <div className="modal_input">
                    <input type="number" name='phone' placeholder='Phone' onChange={(e) => handleGuest(e)} />

                </div>
                <div className="modal_input">
                    <label htmlFor="check-in">Check in </label>
                    <input type="date" name='checkin' onChange={(e) => handleGuest(e)} />
                </div>
                <div className="modal_input">
                    <label htmlFor="check-out">Check out </label>
                    <input type="date" name='checkout' onChange={(e) => handleGuest(e)} />
                </div>
                <div className="modal_input">
                    <label htmlFor="payment-method">Payment Method</label>
                    <select name="payment" onChange={(e) => handleGuest(e)} >
                        <option value="Credit Card">Credit Card</option>
                        <option value="Paypal">Paypal</option>
                        <option value="Cash">Cash</option>
                    </select>
                </div>
                <br />
                <button type='submit'>Add Guest</button>
            </form>
        </>
    )
}

export default FormComponent