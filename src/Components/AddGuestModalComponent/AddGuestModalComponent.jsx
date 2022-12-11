import React, { useState } from 'react'
import './style.css'

export const AddGuestModalComponent = () => {
    const [modal, setModal] = useState("");

    const handleChange = (e) => {
        e.target.id === 'open' ? setModal("block") : setModal("none")
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
                                <form method="post">
                                    <input type="text" placeholder='Name' required />
                                    <input type="text" placeholder='Lastname' required />
                                    <label htmlFor="birth">Bith Date</label>
                                    <input type="date" placeholder='birth-date' />
                                    <select name="" id="">
                                        <option value="" defaultValue={"costarricense"}>Costarricense</option>
                                        <option value="">Mexicano</option>
                                        <option value="">Americano</option>
                                        <option value="">Argentino</option>
                                    </select>
                                    <input type="date" placeholder='birth-date' />
                                    <input type="number" placeholder='Phone' />
                                    <input type="number" placeholder='Number' />
                                    <label htmlFor="check-in">Check in </label>
                                    <input type="date" />
                                    <label htmlFor="check-out">Check out </label>
                                    <input type="date" />
                                    <label htmlFor="payment-method">Payment Method</label>
                                    <select name="" id="">
                                        <option value="">Credit Card</option>
                                        <option value="">Paypal</option>
                                        <option value="">Cash</option>
                                    </select>
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