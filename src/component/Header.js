import React, { Component } from 'react';
import avatarImg from '../assets/avatar.jpg';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <img className="header-img" src={avatarImg} alt="avatar"></img>
        <h3 className="header-h3">HELLO, </h3>
        <p>MY NAME IS KAMIL 24YO AND THIS IS MY RESUM/CS</p>
      </header>
    );
  }
}

export default Header;
