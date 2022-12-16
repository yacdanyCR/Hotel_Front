import React, { useState } from 'react'
import DashboardPage from './DashboardPage';

import LoginPage from './LoginPage';

export const IndexPage = () => {
    const [auth, setAuth] = useState(false);

    return (
        <>
            <main>
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