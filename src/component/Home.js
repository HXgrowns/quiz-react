import React, { Component } from 'react';
import {Route, Switch, Link} from 'react-router-dom';
import Product from './Product';
import "../styles/Home.scss"

class Home extends Component {
    render() {
        return (
            <section className = 'home'>
                <Product></Product>
                <Product></Product>
                <Product></Product>
            </section>
        );
    }
}

export default Home;