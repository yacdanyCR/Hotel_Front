import React, { useState } from 'react'
import { registerUser } from '../../services/userServices/userServices';
import './style.css'

export const ModalComponent = (props) => {
    const [modal, setModal] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleChange = (e) => {
        e.target.id === 'open' ? setModal("block") : setModal("none")
    }

    const handleAccount = async (e) => {
        e.preventDefault();
        return await registerUser(username, password);
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
                                <form method="post" onSubmit={(e) => handleAccount(e)}>
                                    <input type="text" placeholder='Username' onChange={(e) => setUsername(e.target.value)} required />
                                    <label htmlFor="password" placeholder='Password'></label>
                                    <input type="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)} required />
                                    <button type='submit'>Create an Account</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button className='open_modal' id="open" onClick={(e) => handleChange(e)}>{props.message}</button>
        </>
    )
}

export default ModalComponent