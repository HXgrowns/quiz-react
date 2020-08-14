import React, { Component } from 'react';
import {Route, Switch, Link} from 'react-router-dom';
import Product from './Product';

class Home extends Component {
    render() {
        return (
            <section className = 'home'>
                <Product></Product>
            </section>
        );
    }
}

export default Home;