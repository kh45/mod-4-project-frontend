import React, { Component } from 'react';
import SavedEventCard from '../components/savedeventcard'

class SavedEventContainer extends Component {
  generateCards = (array) => array.map(event => <SavedEventCard event={event}/>)
  render() {
    return (
        <div>
          <div className="cardContainer">
            {this.generateCards(this.props.cards)}
          </div>
        </div>
    )
  }
}

export default SavedEventContainer;