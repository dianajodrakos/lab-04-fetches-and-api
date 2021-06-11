import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <div>
                this is my cool header
                <input type="text" placeholder="Pokemon name" onChange={this.props.handleQueryChange}/>
                <button onClick={this.props.handleClick}>search</button>
                <select onChange={this.props.handleSortChange}>
                    <option value="asc">Ascending</option>
                    <option value="desc">Descending</option>
                </select>
            </div>
        )
    }
}
