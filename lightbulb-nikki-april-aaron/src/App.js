import React , { Component } from 'react';
import Square from './Square';
import './App.css';

class App extends Component{
  render(){
    return (
      <div>
        <h1>Light Bulb</h1>
        <Square />
      </div>
    );
  }
}

export default App;