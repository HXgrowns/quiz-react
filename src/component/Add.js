import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import "../styles/add.scss";
class Add extends Component {
    state = {
        product: {
            name: "",
            price: 0,
            unit: "",
            img: "",
        }
    }

    handleInput = (field, e) => {
        this.setState({
            [field]: e.target.value,
        });
    }

    handleSubmit = () => {
        alert(this.state.price);
    }
    render() {
        return (
            <form className='form'>
                <h1>添加商品</h1>
                <section className="form-content">
                    <p>*<label htmlFor="name">名称</label> </p>
                    <input onChange={(e) => {
                        this.handleInput("name", e)
                    }} name="name" placeholder="名称"></input>

                    <p>*<label htmlFor="price">价格</label> </p>
                    <input onChange={(e) => {
                        this.handleInput("price", e)
                    }} name="price" placeholder="价格"></input>

                    <p>*<label htmlFor="unit">单位</label> </p>
                    <input onChange={(e) => {
                        this.handleInput("unit", e)
                    }} name="unit" placeholder="单位"></input>

                    <p>*<label htmlFor="img">图片</label> </p>
                    <input onChange={(e) => {
                        this.handleInput("img", e)
                    }} name="img" placeholder="图片"></input>

                    <input onClick={this.handleSubmit}
                        disabled={(!this.state.product.name || !(this.state.product.price > 0) || !this.state.product.unit || !this.state.product.img)}
                        className="submit" type="submit" value="提交"></input>
                </section>
            </form>
        );
    }
}

export default Add;