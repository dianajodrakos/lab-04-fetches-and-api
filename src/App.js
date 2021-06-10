import request from 'superagent'
import React, { Component } from 'react';
import Header from './Header.js';
import PokeList from './PokeList.js';
import './App.css';

export default class App extends Component {

  state = {
    search: '',
    loading: false,
    pokedex: []
  }
  
  //display all pokemon on page load (mount)
  componentDidMount = async () => {
    this.setState = { loading: true };
    const pokedexAPI = await request.get('https://pokedex-alchemy.herokuapp.com/api/pokedex')
    console.log(pokedexAPI.body);
    
    this.setState = { pokedex: pokedexAPI.body };
    this.setState = { loading: false };
    //loading state true
    //async function to get API
    //loading state false
  }


  render() {
    

    return (
      <div>
        <Header />
        <PokeList data={this.state.pokedex}/>
      </div>
    )
  }
}
