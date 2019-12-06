import React, { Component } from 'react';
import SavedEventContainer from './saved_event_container'
import EventCard from '../components/EventCards'

class User extends Component {

  generateEventCards = (events) => {
    // if (events === undefined )
    let k = events.map(event => <EventCard likeHandler={this.props.likeHandler} currentUser={this.props.currentUser} event={event} key={event.id} />)
    // let k = events.map(event => <div>hello</div>)
    // console.log(k)
    return k
}

  render() {
    return(
      <div className="artistProfileContainer"> 
        <div className="sidenav">
            <div>
                <img className= "artistProfilePic" src={require('../assets/profilepic.gif')} />
                <h1>{this.props.currentUser.name}</h1>
            </div>
        </div>
        <div className="artistEventsContainer">
                    <h1 className="hello logo">Your Saved Events</h1>
                    <div className="pls">
                        {this.generateEventCards(this.props.currentUsersEvents)}
                    </div>
                </div>
      </div>
    )
  }
}

export default User;