import React from 'react'

export default class Card extends React.Component {

    render() {
        const {name, images} = this.props.single
        console.log(images)
        return (
            <div className="card">
                <img className="card-img-top" src={images[1].url} alt="Card image" />
                <div className="card-body">
                    <h4 className="card-title">{name}</h4>
                    <p className="card-text">Some example text.</p>
                    <a href="#" className="btn btn-primary">See Profile</a>
                    </div>
            </div>
        )
    }
}