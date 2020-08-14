import React, { Component } from 'react';
import {Route, Switch, Link} from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <section className = 'route'>
                <p>This is a beautify Home Page</p>
            </section>
        );
    }
}

export default Home;