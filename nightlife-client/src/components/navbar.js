import React, { Component } from 'react';
import logo from '../assets/logo.png'

class Navbar extends Component {

  render() {
    return (
      <div>
          <img className="logo" src={logo} alt="Logo" />
      </div>
    );
  }

}

export default Navbar;
