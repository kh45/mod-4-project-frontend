import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/login'
import Navbar from './components/navbar'
import Search from './components/search'
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom'

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
    <BrowserRouter>
    <div className="App">
      {this.state.logged_in ? <Navbar /> : null}
      <Switch>
        <Route exact path="/">
          {this.state.logged_in? <Redirect to="/search" /> : <Login 
              logIn={this.logIn}/>
          }
        </Route>
        <Route exact path="/search" render ={(props) => {
          return <Search />
        }}/>
      </Switch>
    </div>
    </BrowserRouter>
  );
  }
}
