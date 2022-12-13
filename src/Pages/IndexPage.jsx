import React, { useState } from 'react'
import DashboardPage from './DashboardPage';

import LoginPage from './LoginPage';

export const IndexPage = () => {
    const [auth, setAuth] = useState(true);

    return (
        <>
            <main>
                <button onClick={() => setAuth(true)}>Login</button>
                <button onClick={() => setAuth(false)}>Log out</button>
                {auth ? (
                    <DashboardPage />
                ) : (
                    <LoginPage setAuth={setAuth} />
                )}
            </main>
        </>
    )
}

export default IndexPage