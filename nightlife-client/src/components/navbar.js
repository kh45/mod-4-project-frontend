import React, { Component } from 'react';
import {BrowserRouter, Link} from 'react-router-dom'

class Navbar extends Component {

  render() {
    return (
            <div className="navbar transparent navbar-inverse">
                <a className="navbar-brand font" href="#">NightLife</a>
                <Link to="/users"><button type="button" onClick={this.props.userButtonHandler} className="btn navbutton navbar-text btn-primary">Profile</button></Link>
                <button type="button" onClick={this.props.logoutHandler} className="btn navbutton navbar-text btn-primary">Logout</button>                           

            </div>
    );
  }

}

export default Navbar;
