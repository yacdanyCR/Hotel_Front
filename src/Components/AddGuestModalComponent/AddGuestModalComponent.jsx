import React, { useState } from 'react'
import FormComponent from '../FormComponent/FormComponent';
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
                                <div className="img_modal">
                                    <img src="/img/logo.png" alt='logo' />
                                </div>
                                <FormComponent setModal={setModal} />
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