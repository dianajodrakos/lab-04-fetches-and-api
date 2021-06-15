import React, { Component } from 'react'
import request from 'superagent';

export default class PokeDetail extends Component {

    state = {
        pokemon: '',
        loading: false,
    }

    //set state on component load
    componentDidMount() {
        this.fetchDetail();
    }

    //write fetch function to set state to match params ID
    fetchDetail = async () => {
        this.setState({ loading: true });
        const pokeData = await request.get(`https://pokedex-alchemy.herokuapp.com/api/pokedex/${this.props.match.params.id}`);

        this.setState({ pokemon: pokeData.body, loading: false });
    }

    render() {
        console.log(this.state);
        return (
            <div className="list">
                <div className="detail">
                    {this.state.loading && <img src="../loadingpokedex.gif" alt="loading"/> }
                    <h2>{ this.state.pokemon.pokemon }</h2>
                    <h6>ID: {this.state.pokemon.id}</h6>
                    <img src={ this.state.pokemon.url_image } alt={this.state.pokemon.pokemon} />
                    { this.state.pokemon.type_2 === 'NA' 
                    ? <h6>TYPE: {this.state.pokemon.type_1}</h6> 
                    : <h6>TYPE: {this.state.pokemon.type_1} & {this.state.pokemon.type_2}</h6> 
                    }
                    <p>
                        HP: {this.state.pokemon.hp} ｜ 
                        ATTACK: {this.state.pokemon.attack} ｜ 
                        DEFENSE: {this.state.pokemon.defense}
                    </p>
                </div>
            </div>
        )
    }
}
