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
      logged_in: false,
      current_user: {},
      current_users_events: {}
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
    .then(user => this.setState({currentUser: user}))
    window.history.pushState(null, null, '/search')
    window.location.reload()
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
