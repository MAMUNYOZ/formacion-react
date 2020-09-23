import React from 'react'

export const LoginScreen = ({ history }) => {

    const makeLogin = () => {
        history.replace('/');
    }

    return (
        <div className="container mt-5">
            <h1>Login Screen</h1>
            <button
            className="btn btn-primary"
            onClick={ makeLogin }> Acceder </button>
        </div>
    )
}
