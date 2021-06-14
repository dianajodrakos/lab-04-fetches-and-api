import React, { Component } from 'react'
import PokeItem from './PokeItem.js';
import { Link } from 'react-router-dom';

export default class PokeList extends Component {
    
    render() {
        return (
            <div className="list">
                { this.props.data.map((pokemon, i) => 
                <Link to="/pokemon/:id" data={pokemon} key={i}>
                    <PokeItem data={pokemon} key={i}/>
                </Link>
            )}
            </div>
        )
    }
}
