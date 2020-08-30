import React, { Component } from 'react';
import ProTypes from 'prop-types';
import location from 'd'
import { Route, Switch, Link } from 'react-router-dom';
import "../styles/order.scss";

class Order extends Component {
    state = {
        count: 0,
        products:[],
    };

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
                products: data,
            });
        }).catch((err) => {
            console.error(err);
        });
    }

    handleDelete = (id, index) => {
        fetch("http://127.0.0.1:8080/order/" + id, {
            method: 'GET'
        }).then((response) => {
            if (response.ok) {
                this.state.products.splice(index,1);
                this.setState({
                    products: this.state.products,
                })
            }
            return Promise.reject(new Error(response.status + response.statusText));
        })
        .catch((err) => {
            console.error(err);
        });
    }

    render() {
        return (
            <section className='order'>
                <table className="order-tab">
                    <tr>
                        <th>名字</th>
                        <th>单价</th>
                        <th>数量</th>
                        <th>单位</th>
                        <th>操作</th>
                    </tr>
                    {
                        this.state.products.map((product, index) => (
                            <tr key={index}>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td>{product.count}</td>
                                <td>{product.unit}</td>
                                <td><button onClick={() => this.handleDelete(product.id, index)}>删除</button></td>
                            </tr>
                        ))
                    }

                </table>
            </section>
        );
    }
}

export default Order;