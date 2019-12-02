import React from 'react'


export default class Login extends React.Component {
    render() {
        return (
            <div class="container mainContent">
	<h1 class="text-center heading_h1">NightLife<span class="sub_h1">- Log In</span></h1>
	<div class="row">
		<div class="col-md-6 col-md-offset-3 col-xs-6 col-xs-offset-3 loginContainer">
			<form method="post">
				<div class="col-md-8 col-md-offset-2 col-xs-8 col-xs-offset-2 form-group">
					<input type="text" name="username" placeholder="Username" class="form-control" required="" />
				</div>

				<div class="col-md-8 col-md-offset-2 col-xs-8 col-xs-offset-2  form-group">
					<input type="password" name="password" placeholder="Password" class="form-control" required="" />
				</div>

				<div class="col-md-8 col-md-offset-2 col-xs-8 col-xs-offset-2  form-group" align="center">
					<button class="login_btn" name="login">Log In</button>
					<p class="forgotLink"><a href=""> Forgot Password? </a></p>
				</div>
			</form>

			<div class="col-md-10 col-md-offset-1 col-xs-10 col-xs-offset-1" align="center">
				<p class="signupLink">Not Registered?<a href="" class="signup"> Create an Account. </a></p>
			</div>
		</div>
	</div>
</div>
        )
    }
}