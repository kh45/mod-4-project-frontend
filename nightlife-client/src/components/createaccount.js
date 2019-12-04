import React, { Component } from 'react';

class CreateAccount extends Component {

    render() {
        return (
            <div className="background-container">
            	<div className="container mainContent">
					<h1 className="text-center font heading_h1">Create Account</h1>
						<div className="row">
							<div className="col-md-6 col-md-offset-3 col-xs-6 col-xs-offset-3 loginContainer" align="center">
								<form className="login-form" method="post" onSubmit={(event) => this.props.createAccount(event)}>
									<div className="col-md-8 col-md-offset-2 col-xs-8 col-xs-offset-2 form-group">
										<input type="text" name="name" placeholder="Username" className="form-control" required="" />
									</div>
									<div className="col-md-8 col-md-offset-2 col-xs-8 col-xs-offset-2  form-group">
										<input type="password" name="password" placeholder="Password" className="form-control" required="" />
									</div>
									<div className="col-md-8 col-md-offset-2 col-xs-8 col-xs-offset-2  form-group">
										<input type="text" name="email" placeholder="Email" className="form-control" required="" />
									</div>
									<div className="col-md-8 col-md-offset-2 col-xs-8 col-xs-offset-2  form-group" align="center">
										<button className="login_btn" name="submit">Submit</button>
									</div>
								</form>
							</div>
						</div>
					</div>
			</div>
        )
    }
}

export default CreateAccount;