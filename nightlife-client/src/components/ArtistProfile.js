import React from 'react'
// import * as pics from '../assets'

export default class ArtistProfile extends React.Component {

    openNewWindow(url){
        window.open(url, '_blank');
    }


    render() {
        let {name, images, url, externalLinks: {instagram, twitter, youtube}} = this.props.artist
        if (instagram === undefined) {
            instagram = [{url: 'https://instagram.com'}]
        }
        if (youtube === undefined) {
            youtube = [{url: 'https://youtube.com'}]
        }
        if (twitter === undefined) {
            twitter = [{url: 'https://twitter.com'}]
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
                <h1 className="hello">Upcoming shows</h1>
            </div>
        )
    }
}