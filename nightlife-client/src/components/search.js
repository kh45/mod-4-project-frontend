import React from 'react'
import CardContainer from '../containers/CardContainer'
import Card from './cards'
const URL_1 = 'https://app.ticketmaster.com/discovery/v2/attractions.json?keyword='
const URL_2 = '&classificationId=KZFzniwnSyZfZ7v7nJ&apikey=1i46AcS72ycCMynN5TKWZ3wLHfn4cDtl'

export default class Search extends React.Component {
    constructor() {
        super()
        this.state = {
            query: "",
            results: []
        }
    }

    handleChange = (event) => {
        this.setState({
            query: event.target.value
        })
    }

    searchForArtist = (event) => {
        event.preventDefault()
        let query = this.cleanName(this.state.query)
        console.log(`${URL_1}${query}${URL_2}`)
        fetch(`${URL_1}${query}${URL_2}`)
        .then(response => response.json())
        .then(artists => this.setState({results: artists._embedded.attractions}))
    }

    cleanName = (name) => {
        return name.replace(/ /g, "%20")
    }

    generateCards = (array) => array.map(single => <Card single={single} />)

    render() {
        return (
    <div className="background-container">
        <h1>SEARCH FOR YOUR STUFF</h1>
        <h6>Option 1 - input group</h6>
        <div className="row">
            <div className="col-md-12">
                <form action="" acceptCharset="UTF-8" method="get" onSubmit={this.searchForArtist}>
                    <div className="input-group">
                        <input type="text" name="query" id="search" value={this.state.query} onChange={this.handleChange} placeholder="Search for ARTISTS and hopefully in the near future, EVEVNTS, VENUES, AND LOCATIONS" className="form-control" />
                    <span className="input-group-btn">
                        <input type="button" name="commit" value="Search" className="btn btn-primary" data-disable-with="Search" />
                     </span>
                </div>
            </form>
        </div>
    </div>
    <hr />
    {/* {this.generateCards(this.state.results)} */}
    {/* <CardContainer cards={this.generateCards(this.state.results)}/> */}
    <CardContainer cards={this.state.results}/>
    </div>
        )
    }
}