import React from 'react'

export default class EventCard extends React.Component {
    state = {
        toggle: false,
        userEvent: null,
        currentEvent: null
    }

    onClickHandler = (event) => {
        const EMPTY_HEART = '♡'
        const FULL_HEART = '♥'

        let glyphStates = {
        "♡": "♥",
        "♥": "♡"
        };

        let colorStates = {
        "red" : "",
        "": "red"
        };

        let heart = event.target
        heart.innerText = glyphStates[heart.innerText];
        heart.style.color = colorStates[heart.style.color];
        if (this.state.toggle === false) {
            fetch("http://localhost:3000/events", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept' : 'application/json'
                },
                body: JSON.stringify({
                    "user_id" : `${this.props.currentUser.id}`,
                    "name" : `${this.props.event.name}`,
                    "date" : `${this.props.event.dates.start.localDate}`,
                    "start" : `${this.props.event.dates.start.localTime}`,
                    "venue" : `${this.props.event._embedded.venues[0].name}`,
                    "image" : `${this.props.event.images[0].url}`
                })
            })
            .then(resp => resp.json())
            .then(resp => {
                console.log(resp)
                this.setState({toggle: true, currentEvent: resp.event, userEvent: resp.user_event})
            })
        }
        if (this.state.toggle === true) {
            fetch("http://localhost:3000/events", {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept' : 'application/json'
                },
                body: JSON.stringify({
                    "user_event_id" : `${this.state.userEvent.id}`,
                    "event_id" : `${this.state.currentEvent.id}`
                })
            })
            .then(this.setState({
                currentEvent: null,
                userEvent: null,
                toggle: false
            }))
            }
            this.props.likeHandler(this.props.event)
        }
        
    

    render() {
       

       

        const {name, images} = this.props.event
        return (
            <div className="card mb-3 eventCard">
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img src={images[0].url} className="eventcard-img" alt="..." />
                    </div>
                <div className="col-md-8">
                    <div className="card-body">
                        
                            <p  className="like">Like! <span onClick={(event) => this.onClickHandler(event)} className="like-glyph">&#x2661;</span></p>
                    
                         <h5 className="card-title">{name}</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                            <button onClick={() => this.props.addEventToFavorites(this.props.event)}>hello</button>
                    </div>
                </div>
            </div>
        </div>
        )
    }
} 