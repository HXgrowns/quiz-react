import React, { Component } from 'react';
import Info from './Info';

class Desc extends Component {
  render() {
    return (
      <article className="education-item">
        <h3 className="education-year">1990</h3>
        <Info></Info>
      </article>
    );
  }
}

export default Desc;
