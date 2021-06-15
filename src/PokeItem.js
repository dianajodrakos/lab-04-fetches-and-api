import React, { Component } from 'react'

export default class PokeItem extends Component {
    render() {
        return (
            <div className="card">
                <h2>{ this.props.data.pokemon }</h2>
                <h6>ID: { this.props.data.id }</h6>
                <img src={ this.props.data.url_image } alt={this.props.data.pokemon} />
                { this.props.data.type_2 === 'NA' ? <h6>TYPE: {this.props.data.type_1}</h6> : <h6>TYPE: {this.props.data.type_1} & {this.props.data.type_2}</h6> }
                    <p>HP: {this.props.data.hp} ｜ ATTACK: {this.props.data.attack} ｜ DEFENSE: {this.props.data.defense}</p>
            </div>
        )
    }
}
