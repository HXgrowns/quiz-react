import React, { Component } from 'react';
import './App.scss';
import Header from './component/Header';
import Description from './component/Description';
import Education from './component/Education/Education';

class App extends Component {
  render() {
    return (
      <main className="app">
        <Header></Header>
        <Description></Description>
        <Education></Education>
      </main>
    );
  }
}

export default App;
