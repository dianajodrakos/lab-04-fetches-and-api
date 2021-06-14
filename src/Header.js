import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
            <div className="nav">
                <NavLink exact to="/">Home</NavLink>
                <NavLink to="/pokemon">Pokedex Search</NavLink>
            </div>
        )
    }
}
