import React, { useState } from 'react'
import './style.css'
import { ImUser } from "react-icons/im";
import { IoLockClosed } from "react-icons/io5";
import ModalComponent from '../ModalComponent/ModalComponent';
import { authUser } from '../../services/authService';

export const LoginComponent = ({ setAuth }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {
        const response = await authUser(username, password);
        setAuth(response);
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
                        <form>
                            <ImUser size={25} /><input type="text" placeholder='Username' onChange={(e) => setUsername(e.target.value)} /><br />
                            <IoLockClosed size={25} /><input type="text" placeholder='password' onChange={(e) => setPassword(e.target.value)} />
                            <br />
                            <button type='button' onClick={(e) => handleLogin()}>Login</button>
                        </form>
                        <ModalComponent message={"Register"} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LoginComponent