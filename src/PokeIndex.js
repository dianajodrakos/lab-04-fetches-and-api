import React, { Component } from 'react';
import request from 'superagent';
import PokeSearch from './PokeSearch.js';
import PokeList from './PokeList.js';
import './App.css';

export default class PokeIndex extends Component {
  state = {
    loading: false,
    pokedex: [],
    query: '',
    queryCat: 'pokemon',
    sortCat: 'pokemon',
    sortOrder: 'asc',
    page: 1,
  }
  
  //display all pokemon on page load (mount)
  componentDidMount = async () => {
    this.fetchPokemon();
  }
  
  handleClick = () => {
    this.fetchPokemon();
  }
  
  handleQueryChange = (e) => {
    this.setState({ query: e.target.value });
  }
  
  handleQueryCatChange = (e) => {
    this.setState({ queryCat: e.target.value });
  }
  
  handleSortChange = (e) => {
    this.setState({ sortOrder: e.target.value });
  }
  
  handleSortCatChange = (e) => {
    this.setState({ sortCat: e.target.value });
  }
  //event handler for page forward, async
  nextPage = async (e) => {
    await this.setState({page: this.state.page + 1});
    this.fetchPokemon();
  }

  //event handler for page back, async
  prevPage = async (e) => {
    await this.setState({page: this.state.page - 1});
    this.fetchPokemon();
  }

  //make fetch function with loading toggle
  fetchPokemon = async () => {
    //loading state true
    this.setState({ loading: true });


    //make url ternary, account for sort option
    const URL = this.state.query 
    ? `https://pokedex-alchemy.herokuapp.com/api/pokedex?&pokemon=${this.state.query}&sort=${this.state.sortCat}&direction=${this.state.sortOrder}&page=${this.state.page}` 
    : `https://pokedex-alchemy.herokuapp.com/api/pokedex?&sort=${this.state.sortCat}&direction=${this.state.sortOrder}&page=${this.state.page}`;

    //async function to get API
    const pokedexAPI = await request.get(URL);
    
    //loading state false, set API request to state
    this.setState({ pokedex: pokedexAPI.body.results });
    this.setState({ loading: false });
  }

  render() {

    return (
      <div>
        <PokeSearch handleClick={this.handleClick} handleQueryChange={this.handleQueryChange} handleQueryCatChange={this.handleQueryCatChange} handleSortChange={this.handleSortChange} handleSortCatChange={this.handleSortCatChange}/>
        { this.state.loading && <img src="./loadingpokedex.gif" alt="loading" /> }
        <PokeList data={this.state.pokedex} />
        <div className="page">
          {this.state.page - 1 > 0 && (
            <button onClick={this.prevPage}>‹ Page {this.state.page -1}</button>
            )}
          <button onClick={this.nextPage}>
            Page {this.state.page + 1} ›
          </button>
          </div>
      </div>
    );
  }
}
