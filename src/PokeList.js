import React, { Component } from 'react'
import PokeItem from './PokeItem.js';

export default class PokeList extends Component {
    
    render() {
        return (
            <div className="list">
                { this.props.data.map((pokemon, i) => 
                <PokeItem data={pokemon} key={i}/>
            )}
            </div>
        )
    }
}
