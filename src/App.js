import React, { Component } from "react";
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import Add from "./component/Add";
import Home from "./component/Home";
import Order from "./component/Order";

class App extends Component {
  
  render() {
    return (
      <Router>
        <header className = 'header'>
          <nav className='nav'>
            <NavLink exact className = 'link' to="/"  activeStyle= {{backgroundColor: 'blue'}}>商城</NavLink>
            <NavLink className = 'link' to="/Order" activeStyle= {{backgroundColor: 'blue'}}>订单</NavLink>
            <NavLink className = 'link' to="/Add" activeStyle= {{backgroundColor: 'blue'}}>添加商品</NavLink>
          </nav>
        </header>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/Add' component={Add} />
          <Route exact path='/Order' component={Order} />
        </Switch>
        <footer className = 'footer'>
          TW Mail @2018 Created by ForCheng
        </footer>
      </Router>
    );
  }
}

export default App;