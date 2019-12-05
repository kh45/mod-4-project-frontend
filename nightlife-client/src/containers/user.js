import React, { Component } from 'react';
import SavedEventContainer from './saved_event_container'

class User extends Component {

  // generateCards = (array) => array.map(single => <Card single={single} />)

  render() {
    return(
      <div className="artistProfileContainer"> 
        <div className="sidenav">
            <div>
                <img className= "artistProfilePic" src={require('../assets/profilepic.gif')} />
                <h1>{this.props.currentUser.name}</h1>
            </div>
        </div>
      </div>
    )
  }
}

export default User;