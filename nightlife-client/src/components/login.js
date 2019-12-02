import React from 'react'

export default class Login extends React.Component {
    render() {
        return (
            <div className="login-page">
                <div className="login-form">
                <h2>Login</h2>
                <form>
                    <label>
                        Username:
                        <input name="username" />
                    </label><br />
                    <label>
                        Password:
                        <input name="password" />
                    </label>
                </form>
                </div>
            </div>
        )
    }
}