import React, { Component } from 'react'
import PokeItem from './PokeItem.js';
import { Link } from 'react-router-dom';

export default class PokeList extends Component {
    
    render() {
        return (
            <div className="list">
                { this.props.data.map((pokemon) => 
                <Link to={`/pokemon/${pokemon._id}`} >
                    <PokeItem data={pokemon} key={pokemon.id} />
                </Link>
            )}
            </div>
        )
    }
}
