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
        let product = {
            name: this.state.name,
            img: this.state.img,
            unit: this.state.unit,
            price: this.state.price,
        };
        fetch("http://127.0.0.1:8080/product", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                'Accept': 'application/json;charset=UTF-8',
            },
            body: JSON.stringify(product),
        }).then((response) => {
            if (response.status === 201) {
                alert("submitted success");
                return response.json();
            }
            return Promise.reject(new Error(response.status + response.statusText));
        }).catch((err) => {
            console.error(err);
        });
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
                        disabled={(!this.state.name || !(this.state.price > 0) 
                            || !this.state.unit || !this.state.img)}
                        className="submit" type="submit" value="提交"></input>
                </section>
            </form>
        );
    }
}

export default Add;