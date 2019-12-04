import React, { Component } from 'react';

class Navbar extends Component {

  render() {
    return (
            <div className="navbar transparent navbar-inverse">
                <a className="navbar-brand font" href="#">NightLife</a>
                <button type="button" onClick={this.props.logoutHandler} className="btn navbar-text btn-primary">Logout</button>
            </div>
    );
  }

}

export default Navbar;
