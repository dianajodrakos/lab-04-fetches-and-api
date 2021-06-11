import React, { Component } from 'react';
import request from 'superagent';
import Header from './Header.js';
import PokeList from './PokeList.js';
import './App.css';

export default class App extends Component {

  state = {
    loading: false,
    pokedex: [],
    query: '',
    sortOrder: '',
  }

  //display all pokemon on page load (mount)
  componentDidMount = async () => {
    //loading state true
    this.setState({ loading: true });
    //async function to get API
    let pokedexAPI = await request.get('https://pokedex-alchemy.herokuapp.com/api/pokedex');
    
    //loading state false, set API request to state
    this.setState({ pokedex: pokedexAPI.body.results });
    this.setState({ loading: false });
  }

  handleClick = (e) => {
    console.log('click')
  }

  handleQueryChange = (e) => {
    this.setState({ query: e.target.value });
  }

  handleSortChange = (e) => {
    this.setState({ sortOrder: e.target.value });
  }

  render() {

    return (
      <div>
        <Header handleClick={this.handleClick} handleQueryChange={this.handleQueryChange} handleSortChange={this.handleSortChange} />

        { this.state.loading && <img src="./loadingpokedex.gif" alt="loading"/> }
        { console.log(this.state.pokedex)}
        {/* display loading image until pokedex is ready to load */}
        <PokeList data={this.state.pokedex} />
      </div>
    );
  }
}
