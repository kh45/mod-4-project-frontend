import React from 'react';
import './App.css';
import Login from './components/login'
import User from './containers/user'
import Navbar from './components/navbar'
import Search from './components/search'
import CreateAccount from './components/create_account'
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom'

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      currentUser: null,
      currentUsersEvents: null
    }
  }

  renderRedirect = () => {
    return window.history.pushState(null, null, '/new')
  }

  createAccount = (event) => {
    event.preventDefault()
    fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept' : 'application/json'
        },
        body: JSON.stringify({
            "name" : `${event.target.name.value}`,
            "password" : `${event.target.password.value}`,
            "email" : `${event.target.email.value}`
        })
    })
    .then(resp => resp.json())
    .then(user => this.setState({current_user: user}))
  }

  logoutHandler = () => {
    this.setState({currentUser: null})
    window.history.pushState(null, null, '/')
    window.location.reload()
  }

  logIn = (event) => {
    event.preventDefault()
    fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept' : 'application/json'
        },
        body: JSON.stringify({
            "name" : `${event.target.name.value}`,
            "password" : `${event.target.password.value}`,
        })
      })
    .then(resp => resp.json())
    .then(user => this.setState({currentUser: user}))
    .catch(() => alert("Please enter a valid username."))
  }
  
  render() {
  return (
    <BrowserRouter>
    <div className="App">
      {this.state.currentUser ? <Navbar logoutHandler={this.logoutHandler}/> : null}
      <Switch>
        <Route exact path="/">
          {this.state.currentUser? <Redirect to="/search" /> : <Login 
              logIn={this.logIn}
              renderRedirect={this.renderRedirect}/>
          }
        </Route>
        <Route exact path="/search" render ={(props) => {
          return <Search />
        }}/>
        <Route exact path="/users" render={(props) => {
          return <User 
            currentUser={this.state.current_user}/>
        }}/>
        <Route exact path="/new" render={(props) => {
          return <CreateAccount 
            createAccount={this.createAccount}
          />
        }}/>
      </Switch>
    </div>
    </BrowserRouter>
  );
  }
}
