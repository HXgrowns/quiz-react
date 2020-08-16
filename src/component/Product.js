import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import Ke from '../assets/kele.jpg';
import AddImg from '../assets/add.png';
import "../styles/Product.scss";

class Product extends Component {

    render() {
        const {product} = this.props;
        return (
            <section className='product'>
                <img className="product-img" src={product.img}></img>
                <section className="name-price">
                    <p className='product-name'>{product.name}</p>
                    <p className='product-price'>单价：{product.price}元/{product.unit}</p>
                </section>
                <button className="add"><img className="add-img" src={AddImg}></img></button>
            </section>
        );
    }
}

export default Product;