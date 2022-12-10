import React, { useState } from 'react'
import DashboardPage from './DashboardPage';
import LoginPage from './LoginPage';

export const IndexPage = () => {
    const [auth, setAuth] = useState(true);

    return (
        <>
            <main>
                {auth ? (
                    <DashboardPage />
                ) : (
                    <LoginPage />
                )}
                <button onClick={() => setAuth(true)}>Login</button>
                <button onClick={() => setAuth(false)}>Log out</button>
            </main>
        </>
    )
}

export default IndexPage