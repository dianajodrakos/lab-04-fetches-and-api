import React, { Component } from 'react'
import request from 'superagent';

export default class PokeDetail extends Component {

    state = {
        pokemon: '',
    }

    //set state on component load
    componentDidMount() {
        this.fetchDetail();
    }

    //write fetch function to set state to match params ID
    fetchDetail = async () => {
        const pokeData = await request.get(`https://pokedex-alchemy.herokuapp.com/api/pokedex/${this.props.match.params.id}`);

        this.setState({ pokemon: pokeData.body });
    }

    render() {
        console.log(this.props);
        console.log(this.state);
        return (
            <div className="card">
                <h2> {this.props.match.params.id} </h2>
                <h2> {this.state.pokemon._id} </h2>
            </div>
        )
    }
}
