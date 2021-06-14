import React, { Component } from 'react'
import Home from './Home.js';
import Header from './Header.js';
import PokeDetail from "./PokeDetail.js";
import PokeIndex from './PokeIndex.js';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

export default class App extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Header />
                    <Switch>
                        <Route path="/pokemon/:id" component={PokeDetail} />
                        <Route path="/pokemon" component={PokeIndex} />
                        <Route path="/" exact component={Home} />
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}
