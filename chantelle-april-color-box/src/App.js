import React, { Component } from 'react';
import './App.css';
import ColorBox from './ColorBox'

class App extends Component { 
  render () {
    return (
      <div >
        <h1>Color Boxes</h1>
          <ColorBox />
          <br></br>
          <ColorBox />
          <br></br>
          <ColorBox />
        
      </div>
    );
  }
}

export default App;
