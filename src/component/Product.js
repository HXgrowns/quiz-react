import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import Ke from '../assets/order-list.jpg'
import AddImg from '../assets/add.png'

class Product extends Component {
    render() {
        return (
            <section className='product'>
                <img src = {Ke}></img>
                <p>可乐1</p>
                <p>单价：1元/瓶</p>
                <button><img src = {AddImg}></img></button>
            </section>
        );
    }
}

export default Product;