import React from 'react';
import './App.css';
import Login from './components/login'
import User from './containers/user'
import Navbar from './components/navbar'
import Search from './components/search'
import CreateAccount from './components/createaccount'
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom'

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      currentUser: null,
      currentUsersEvents: []
    }
  }

  renderRedirect = () => {
    return window.history.pushState(null, null, '/new')
  }

  likeHandler = (event) => {
    if (this.state.currentUsersEvents.includes(event)) {
      let stateCopy = [...this.state.currentUsersEvents]
      let newState = stateCopy.filter(singleEvent => singleEvent.id != event.id)
      this.setState({currentUsersEvents: newState
      })
    }
    else {
      this.setState({
        currentUsersEvents: [...this.state.currentUsersEvents, event]
      })
    }
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
  }

  // userButtonHandler = () => {
  //   console.log('here')
  //   return <Redirect to="/users" />
  // }

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
    .then(user => {
      console.log(user)
      this.setState({currentUser: user, currentUsersEvents: user.events})
    })
    .catch(() => alert("Please enter a valid username."))
  }

  addEventToFavorites = (event) => {
    if (!this.state.currentUsersEvents.includes(event)) {
      this.setState({
        currentUsersEvents: [...this.state.currentUsersEvents, event]
      })
    }
  }
  
  render() {
  return (
    <BrowserRouter>
    <div className="App">
      {this.state.currentUser ? <Navbar 
        logoutHandler={this.logoutHandler}
        userButtonHandler={this.userButtonHandler}/> : null}
      <Switch>
        <Route exact path="/">
          {this.state.currentUser ? <Redirect to="/search" /> : <Login 
              logIn={this.logIn}
              renderRedirect={this.renderRedirect}/>
          }
        </Route>
        <Route exact path="/search" render ={(props) => {
          return <Search addEventToFavorites={this.addEventToFavorites}
          currentUser={this.state.currentUser}
          likeHandler={this.likeHandler}/>
        }}/>
        <Route exact path="/users" render={(props) => {
          return <User 
            currentUser={this.state.currentUser}
            currentUsersEvents={this.state.currentUsersEvents}/>
        }}/>
        <Route exact path="/new">
          {this.state.currentUser ? <Redirect to="/search" /> : <CreateAccount 
              createAccount={this.createAccount}
          />}
        </Route>
      </Switch>
    </div>
    </BrowserRouter>
  );
  }
}
