import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/login'
import Navbar from './components/navbar'
import Search from './components/search'

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      logged_in: false
    }
  }

  logIn = () => {
    this.setState({
      logged_in: true
    })
  }
  
  render() {

  
  return (
    <div className="App">
      {/* <Navbar /> */}
      {this.state.logged_in ? <Search /> : <Login logIn={this.logIn} />}
    </div>
  );
  }
}
