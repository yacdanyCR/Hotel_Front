import React from 'react'
import './style.css'

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
                            <h1>Login</h1>
                            <form action="#" method="get">
                                <span>Username</span>
                                <input type="text" />
                                <span>Password</span>
                                <input type="password" />
                                <br />
                                <button type='button' onClick={() => alert("Hola")}>Login</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default LoginComponent