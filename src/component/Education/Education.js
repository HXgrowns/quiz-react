import React, { Component } from 'react';
import Desc from './Desc';

class Education extends Component {
  render() {
    return (
      <article className="education">
        <h1 className="article-h1">EDUCATION</h1>
        <article className="education-list">
          <Desc></Desc>
          <Desc></Desc>
          <Desc></Desc>
          <Desc></Desc>
        </article>
      </article>
    );
  }
}

export default Education;
