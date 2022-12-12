import React, { useState } from 'react'
import './style.css'

export const AddGuestModalComponent = () => {
    const [modal, setModal] = useState("");
    const [guest, setGuest] = useState({
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

        setGuest((prev) => {
            return { ...prev, [name]: value }
        })
    }

    const handleChange = (e) => {
        e.target.id === 'open' ? setModal("block") : setModal("none")
    }

    const handleSubmitGuest = (e) => {
        e.preventDefault()
    }
    return (
        <>
            <div className="modal" style={{ display: modal }}>
                <div className="modal-content" id='modal-content-guest'>
                    <div className="modal-header">
                        <span id='close' className="close" onClick={(e) => handleChange(e)}>&times;</span>
                    </div>
                    <div className="modal-body">
                        <div className="modal_account">
                            <div className="container">
                                <div className="img_modal">
                                    <img src="/img/logo.png" />
                                </div>
                                <form onSubmit={(e) => handleSubmitGuest(e)} method="post">
                                    <div className="modal_input">
                                        <input type="text" name='name' placeholder='Name' required onChange={(e) => handleGuest(e)} />
                                    </div>
                                    <div className="modal_input">
                                        <input type="text" name='lastname' placeholder='Lastname' required onChange={(e) => handleGuest(e)} />
                                    </div>
                                    <div className="modal_input">
                                        <label htmlFor="birth" name='birth_date'>Bith Date</label>
                                        <input type="date" name='birthdate' placeholder='birth-date' onChange={(e) => handleGuest(e)} />
                                    </div>
                                    <div className="modal_input">
                                        <select name="country" onChange={(e) => handleGuest(e)} >
                                            <option value="Costarican" defaultValue={"costarricense"}>Costarricense</option>
                                            <option value="Mexican">Mexicano</option>
                                            <option value="American">Americano</option>
                                            <option value="Argentin">Argentino</option>
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button className='add_guest' id="open" onClick={(e) => handleChange(e)}>Add Guest</button>
        </>
    )
}

export default AddGuestModalComponent