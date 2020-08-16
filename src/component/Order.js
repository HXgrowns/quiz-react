import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import "../styles/order.scss";

class Order extends Component {
    state = {
        count: 0,
        products: [
            {
                "name": "威化饼",
                "price": 17.80,
                "unit": "袋",
                "num": 3,
                "img": "https://img.alicdn.com/bao/uploaded/i4/725677994/O1CN01en7iXF28vIlV6FNq2_!!725677994.jpg_160x160q90.jpg"
            }, {
                "name": "纯牛奶",
                "price": 59.50,
                "unit": "箱",
                "num": 2,
                "img": "https://img.alicdn.com/bao/uploaded/i2/725677994/O1CN01D9Tfqv28vIj7kkIAZ_!!725677994.jpg_160x160q90.jpg"
            }, {
                "name": "威化饼",
                "price": 17.80,
                "unit": "袋",
                "num": 5,
                "img": "https://img.alicdn.com/bao/uploaded/i4/725677994/O1CN01en7iXF28vIlV6FNq2_!!725677994.jpg_160x160q90.jpg"
            },
        ],
    };

    handleDelete = (id) => {
        let productsCopy = this.state.products;
        delete productsCopy[id];
        this.setState({
            products: productsCopy,
        })
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
                                <td>{product.num}</td>
                                <td>{product.unit}</td>
                                <td><button onClick={() => this.handleDelete(index)}>删除</button></td>
                            </tr>
                        ))
                    }

                </table>
            </section>
        );
    }
}

export default Order;