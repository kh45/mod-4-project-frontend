import React from 'react'

export default class Card extends React.Component {

    render() {
        const {name, id, images} = this.props.single
        console.log(images)
        return (
            <div className="card" onClick={() => this.props.showProfile(this.props.single)}>
                <img className="card-img-top" src={images[1].url} alt="Card image" />
                <h4 className="artist-name">{name}</h4>
                {/* <div className="card-body">
                    <h4 className="card-title">{name}</h4>
                    <p className="card-text">Some example text.</p>
                    <a href="#" className="btn btn-primary">See Profile</a>
                    </div> */}
            </div>
        )
    }
}