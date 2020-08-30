import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import Product from './Product';
import "../styles/Home.scss"

class Home extends Component {
    state = {
        count: 0,
        products:[],
    };

    componentDidMount() {
        fetch("http://127.0.0.1:8080/product/list", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                'Accept': 'application/json;charset=UTF-8',
            }
        }).then((response) => {
            if (response.ok) {
                return response.json();
            }
            return Promise.reject(new Error(response.status + response.statusText));
        }).then((data) => {
            console.log(data);
            this.setState({
                products: data,
            });
        }).catch((err) => {
            console.error(err);
        });
    }

    render() {
        return (
            <section className='home'>
                {this.state.products.map((p, index) => (
                    <Product key={index} className="prod" product={p} />
                ))}
            </section>
        );
    }
}

export default Home;