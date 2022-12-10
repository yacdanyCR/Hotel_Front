import React from 'react'
import './style.css'
import { ImUser } from "react-icons/im";
import { IoLockClosed } from "react-icons/io5";
import ModalComponent from '../ModalComponent/ModalComponent';

export const LoginComponent = () => {
    return (
        <main>
            <section>
                <div className="login_Section">
                    <div className="container">
                        <div className='login_img'>
                            <img src="/img/img.png" alt="img" />
                        </div>
                        <div className='login'>
                            <img src="/img/logo.png" alt="logo" />
                            <form action="#" method="get">
                                <ImUser size={25} /><input type="text" placeholder='Username' /><br />
                                <IoLockClosed size={25} /><input type="password" placeholder='password' />
                                <br />
                                <button type='button' onClick={() => alert("Hola")}>Login</button>
                            </form>
                            <ModalComponent message={"Register"} />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default LoginComponent