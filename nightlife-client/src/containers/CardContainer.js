import React from 'react'
import Card from '../components/cards'

export default class CardContainer extends React.Component {


    generateCards = (array) => array.map(single => <Card single={single} key={single.id} showProfile={this.props.showProfile} />)

    render() {
        return (
            <div className="cardContainer">
                {this.generateCards(this.props.cards)}
            </div>
        )
    }
}