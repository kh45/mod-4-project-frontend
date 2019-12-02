import React from 'react'

export default class Login extends React.Component {
    render() {
        return (
            <div className="login-page">
                {/* <h2>Login</h2> */}
                <form>
                    <label>
                        Username:
                        <input name="username" />
                    </label>
                    {/* <input name="password">PASSWORD</input> */}
                </form>
            </div>
        )
    }
}