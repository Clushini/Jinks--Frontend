import React, { Component, useState } from 'react';
import Dashboard from './components/dashboard/index';
import './App.scss';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div id="main">
        <Dashboard />
      </div>
    );
  }
}

export default App;