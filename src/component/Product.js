import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import Ke from '../assets/kele.jpg';
import AddImg from '../assets/add.png';
import "../styles/Product.scss";

class Product extends Component {
    state = {
        orders: [],
    }

    componentDidMount() {
        fetch("http://127.0.0.1:8080/order/list", {
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
            this.setState({
                orders: data,
            });
        }).catch((err) => {
            console.error(err);
        });
    }

    handleAdd = (order) => {
        fetch("http://127.0.0.1:8080/order/save", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                'Accept': 'application/json;charset=UTF-8',
            },
            body: JSON.stringify(order),
        }).then((response) => {
            if (response.status === 201) {
                alert("submitted success");
                return;
            }
            return Promise.reject(new Error(response.status + response.statusText));
        }).catch((err) => {
            console.error(err);
        });
    }

    handleUpdateCount = (name) => {
        console.log(name);
        fetch("http://127.0.0.1:8080/order/update?name=" + name, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                'Accept': 'application/json;charset=UTF-8',
            },
        }).then((response) => {
            if (response.status === 201) {
                alert("update success");
                return;
            }
            return Promise.reject(new Error(response.status + response.statusText));
        }).catch((err) => {
            console.error(err);
        });
    }

    handleAddOrder = (product) => {
        let order = {
            count: 1,
            name: product.name,
            price: product.price,
            unit: product.unit,
        }

        for (let i = 0; i < this.state.orders.length; i++) {
            if (this.state.orders[i].name === product.name) {
                this.handleUpdateCount(this.state.orders[i].name);
                return;
            }
        }
        this.handleAdd(order);
    }

    render() {
        const { product } = this.props;
        return (
            <section className='product'>
                <div className="product-img-frame">
                    <img className="product-img" src={product.img}></img>
                </div>
                <section className="name-price">
                    <p className='product-name'>{product.name}</p>
                    <p className='product-price'>单价：{product.price}元/{product.unit}</p>
                </section>
                <div className="product-add">
                    <button className="add" onClick={() => { this.handleAddOrder(product) }}><img className="add-img" src={AddImg}></img></button>
                </div>
            </section>
        );
    }
}

export default Product;