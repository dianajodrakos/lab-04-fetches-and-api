import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <div>
                this is my cool header
                <select onChange={this.props.handleQueryCatChange}>
                    <option disabled selected={true} value>Search Category:</option>
                    <option value="pokemon">Pokemon</option>
                    <option value="id">Species ID</option>
                    <option value="attack">Attack</option>
                    <option value="defense">Defense</option>
                    <option value="type">Type</option>
                </select>
                <input type="text" placeholder="Pokemon name" onChange={this.props.handleQueryChange}/>

                <select onChange={this.props.handleSortCatChange}>
                <option disabled selected={true} value>Sort Category:</option>
                    <option value="pokemon">Pokemon</option>
                    <option value="id">Species ID</option>
                    <option value="attack">Attack</option>
                    <option value="defense">Defense</option>
                </select>

                <select onChange={this.props.handleSortChange}>
                    <option disabled selected={true} value>Sort by:</option>
                    <option value="asc">Ascending</option>
                    <option value="desc">Descending</option>
                </select>

                <button onClick={this.props.handleClick}>search</button>
            </div>
        )
    }
}
