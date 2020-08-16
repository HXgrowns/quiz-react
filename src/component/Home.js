import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import Product from './Product';
import "../styles/Home.scss"

class Home extends Component {
    state = {
        count: 0,
        products: [
            {
                "name": "威化饼",
                "price": 17.80,
                "unit": "袋",
                "img": "https://img.alicdn.com/bao/uploaded/i4/725677994/O1CN01en7iXF28vIlV6FNq2_!!725677994.jpg_160x160q90.jpg"
            }, {
                "name": "纯牛奶",
                "price": 59.50,
                "unit": "箱",
                "img": "https://img.alicdn.com/bao/uploaded/i2/725677994/O1CN01D9Tfqv28vIj7kkIAZ_!!725677994.jpg_160x160q90.jpg"
            },
        ],
    };

    render() {
        return (
            <section className='home'>
                {this.state.products.map((p) => (
                    <Product product={p} />
                ))}
            </section>
        );
    }
}

export default Home;