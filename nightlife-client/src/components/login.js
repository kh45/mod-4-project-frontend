import React from 'react'
import CreateAccount from './createaccount'


export default class Login extends React.Component {
    render() {
        return (
            <div className="background-container">
            	<div className="container mainContent">
					<h1 className="logo loginheader text-center font heading_h1">NightLife</h1>
				
						<div className="row">
							<div className="col-md-6 col-md-offset-3 col-xs-6 col-xs-offset-3 loginContainer" align="center">
								<form className="login-form" method="post" onSubmit={this.props.logIn}>
									<div className="col-md-8 col-md-offset-2 col-xs-8 col-xs-offset-2 form-group">
										<input type="text" name="name" placeholder="Username" className="form-control" required="" />
									</div>
									<div className="col-md-8 col-md-offset-2 col-xs-8 col-xs-offset-2  form-group">
										<input type="password" name="password" placeholder="Password" className="form-control" required="" />
									</div>
									<div className="col-md-8 col-md-offset-2 col-xs-8 col-xs-offset-2  form-group" align="center">
										<button className="btn-outline-warning waves-effect login_btn" name="login">Log In</button>
										<p className="forgotLink"><a href=""> Forgot Password? </a></p>
									</div>
								</form>
								<div className="col-md-10 col-md-offset-1 col-xs-10 col-xs-offset-1" align="center">
									<p className="signupLink">Not Registered?<a href="" onClick={this.props.renderRedirect} className="signup"> Create an Account. </a></p>
								</div>
							</div>
						</div>
					</div>
			</div>
        )
    }
}