import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'

import Header from './components/Header/Header'
import Main from './components/Main/Main'

class App extends Component {
  render() {
    return (
      <div id="container">
        <div id="header">
          <Header/>
        </div>
        <div id="body" className="container">
          <Main />
        </div>
        <div id="footer">
          Footer
        </div>
      </div>
    );
  }
}

export default App;