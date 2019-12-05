import React from 'react'
import EventCard from './EventCards'
import CardContainer from '../containers/CardContainer'
// import * as pics from '../assets'
const eventsURL = 'https://app.ticketmaster.com/discovery/v2/events.json?attractionId='
const apiKey = '&apikey=1i46AcS72ycCMynN5TKWZ3wLHfn4cDtl'

export default class ArtistProfile extends React.Component {
    constructor() {
        super()
        this.state = {
            upcomingEvents : []
        }
    }

    openNewWindow(url){
        window.open(url, '_blank');
    }

    getArtistEvents = (id) => {
        return fetch(`${eventsURL}${id}${apiKey}`)
        .then(response => response.json())
        .then(events => {
            if (events._embedded !== undefined) {
                this.setState({
                    upcomingEvents: events._embedded.events
                })
            }
        })
    }

    componentDidMount = () => {
        this.getArtistEvents(this.props.artist.id)
    }

    generateEventCards = (events) => {
        console.log(events)
        let k = events.map(event => <EventCard likeHandler={this.props.likeHandler} currentUser={this.props.currentUser} event={event} key={event.id} openNewWindow={this.openNewWindow} />)
        // let k = events.map(event => <div>hello</div>)
        console.log(k)
        return k
    }


    render() {
        if (this.props.artist.externalLinks === undefined) {
            this.props.artist.externalLinks = {twitter: [{url: 'http://twitter.com'}], youtube: [{url: 'http://youtube.com'}], instagram: [{url: 'http://instagram.com'}]}
        } 
        let {name, images, url, externalLinks: {instagram, twitter, youtube}} = this.props.artist
        if (instagram === undefined) {
            this.props.artist.externalLinks.instagram = [{url: 'https://instagram.com'}]
        }
        if (youtube === undefined) {
            this.props.artist.externalLinks.youtube = [{url: 'https://youtube.com'}]
        }
        if (twitter === undefined) {
            this.props.artist.externalLinks.twitter = [{url: 'https://twitter.com'}]
        }
        return (
            <div className="artistProfileContainer"> 
                <div className="sidenav">
                    <div>
                        <img className= "artistProfilePic" src={images[1].url} />
                        <h1>{name}</h1>
                        <div className="socialBar">
                            <img className="social-icon" src={require('../assets/instagram.png')} onClick={() => this.openNewWindow(instagram[0].url)} />
                            <img className="social-icon" src={require('../assets/twitter.png')} onClick={() => this.openNewWindow(twitter[0].url)}/>
                            <img className="social-icon" src={require('../assets/youtube.png')} onClick={() => this.openNewWindow(youtube[0].url)}/>
                        </div>
                        <button className="button" onClick={() => this.openNewWindow(url)} >Get Tickets</button>
                    </div>
                </div>
                <div className="artistEventsContainer">
                    <h1 className="logo hello">Upcoming Shows</h1>
                    <div className="pls">
                        {this.generateEventCards(this.state.upcomingEvents)}
                    </div>
                </div>
            </div>
        )
    }
}
