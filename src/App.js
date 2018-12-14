import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import HeatMap from './components/HeatMap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeatMap/>
      </div>
    );
  }
}

export default App;
