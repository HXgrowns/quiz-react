import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import Ke from '../assets/kele.jpg';
import AddImg from '../assets/add.png';
import "../styles/Product.scss";

class Product extends Component {
    render() {
        return (
            <section className='product'>
                <img className = "product-img" src = {Ke}></img>
                <p className = 'product-name'>可乐1</p>
                <p className = 'product-price'>单价：1元/瓶</p>
                <button className = "add"><img className = "add-img" src = {AddImg}></img></button>
            </section>
        );
    }
}

export default Product;