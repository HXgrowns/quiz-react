import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';

class Order extends Component {
    render() {
        return (
            <section className = 'route'>
                <p>Company:ThoughtWorks Local</p>
                <p className = 'about-p'>Location:Xian</p>
                
                <p>For more information,please</p>
            </section>
        );
    }
}

export default Order;