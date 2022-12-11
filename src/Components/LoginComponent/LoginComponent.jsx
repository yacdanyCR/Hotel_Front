import React, { useState } from 'react'
import './style.css'
import { ImUser } from "react-icons/im";
import { IoLockClosed } from "react-icons/io5";
import ModalComponent from '../ModalComponent/ModalComponent';
import { authUser } from '../../services/authService';

export const LoginComponent = ({ setAuth }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();
        const response = await authUser(username, password);
        if (username !== "" && password !== "") setAuth(response);
    }
    return (
        <section>
            <div className="login_Section">
                <div className="container">
                    <div className='login_img'>
                        <img src="/img/img.png" alt="img" />
                    </div>
                    <div className='login'>
                        <img src="/img/logo.png" alt="logo" />
                        <form onSubmit={(e) => handleLogin(e)} method="POST">
                            <ImUser size={25} /><input type="text" placeholder='Username' onChange={(e) => setUsername(e.target.value)} required /><br />
                            <IoLockClosed size={25} /><input type="password" placeholder='password' onChange={(e) => setPassword(e.target.value)} required />
                            <br />
                            <button type='submit'>Login</button>

                        </form>
                        <ModalComponent message={"New User"} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LoginComponent