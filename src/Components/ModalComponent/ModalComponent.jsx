import React, { useState } from 'react'
import './style.css'

export const ModalComponent = (props) => {
    const [modal, setModal] = useState("");
    const handleChange = (e) => {
        e.target.id === 'open' ? setModal("block") : setModal("none")
    }
    return (
        <>
            <div className="modal" style={{ display: modal }}>
                <div className="modal-content">
                    <div className="modal-header">
                        <span id='close' className="close" onClick={(e) => handleChange(e)}>&times;</span>
                        <img src="/img/logo.png" alt="logo" />
                    </div>
                    <div className="modal-body">
                        <div className="modal_account">
                            <div className="container">
                                <form action="#" method="post">
                                    <input type="text" placeholder='Username' />
                                    <label htmlFor="" placeholder='Password'></label>
                                    <input type="password" placeholder='Password' />
                                    <button type='button'>Create an Account</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <h3>Modal Footer</h3>
                    </div>
                </div>
            </div>
            <button className='open_modal' id="open" onClick={(e) => handleChange(e)}>{props.message}</button>
        </>
    )
}

export default ModalComponent