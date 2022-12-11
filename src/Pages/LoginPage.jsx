import React from 'react'
import LoginComponent from '../Components/LoginComponent/LoginComponent'

export const LoginPage = ({ setAuth }) => {
    return (
        <>
            <LoginComponent setAuth={setAuth} />
        </>
    )
}

export default LoginPage