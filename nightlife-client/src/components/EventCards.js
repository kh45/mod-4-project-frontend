import React from 'react'

export default class EventCard extends React.Component {
    state = {
        toggle: false,
        userEvent: null,
        currentEvent: null
    }

    componentDidMount(){

        if (this.props.currentUser.events){
        this.props.currentUser.events.map(singleEvent => {
            if (singleEvent.name.includes(this.props.event.name)){

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
    
                let heart = document.getElementById(singleEvent.api_id)
                if (heart === true){
                    heart.innerText = glyphStates[heart.innerText];
                    heart.style.color = colorStates[heart.style.color];
                }
                let newUserEvent = this.props.currentUser.user_events.filter(singleUserEvent => {
                    return singleUserEvent.event_id === singleEvent.id
                })
                this.setState({
                    currentEvent: this.props.event,
                    userEvent: newUserEvent[0],
                    toggle: true
                })
            }
        })
    }
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
                    "image" : `${this.props.event.images[0].url}`,
                    "api_id" : `${this.props.event.id}`,
                    "city" : `${this.props.event._embedded.venues[0].city.name}`,
                    "state" : `${this.props.event._embedded.venues[0].state.stateCode}`
                })
            })
            .then(resp => resp.json())
            .then(resp => {
                this.setState({toggle: true, currentEvent: resp.event, userEvent: resp.user_event})
            })
        }
        if (this.state.toggle === true) {
            fetch("http://localhost:3000/events", {
                method: 'PATCH',
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
        let img_url
        if (images === undefined) {
            img_url = this.props.event.image
        } else {
            img_url = images[0].url;
        }
        let date;
        if (this.props.event.dates === undefined) {
            date = this.props.event.start
        } else {
            date = this.props.event.dates.start.localDate
        }
        let city;
        let state;
        let venue;
        if (this.props.event._embedded) {
            venue = this.props.event._embedded.venues[0].name;
            // debugger
            this.props.event._embedded.venues[0].state ? state = this.props.event._embedded.venues[0].state.stateCode : state = this.props.event._embedded.venues[0].country.name;
            city = this.props.event._embedded.venues[0].city.name
        } else {
            venue = this.props.event.venue;
            state = this.props.event.state;
            city = this.props.event.city;
        }
        return (
            <div className="card mb-3 eventCard">
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img src={img_url} className="eventcard-img" alt="..." />
                    </div>
                <div className="col-md-8">
                    <div className="card-body">
                        
                            <p  className="like">Like! <span onClick={(event) => this.onClickHandler(event)} id={`${this.props.event.id}`} className="like-glyph">&#x2661;</span></p>
                    
                         <h5 className="card-title eventText">{name}</h5>
                            <h4 className="eventText">{venue}</h4>
                            <h5 className="eventText">{city}, {state}</h5>
                            <h5 className="eventText">{date}</h5>
                            <button onClick={() => this.props.openNewWindow(this.props.event.url)}>Buy Tix!</button>
                    </div>
                </div>
            </div>
        </div>
        )
    }
} 