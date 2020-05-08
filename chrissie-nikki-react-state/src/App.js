import React, { Component } from 'react';
import Box from './Box.js';
import Box1 from './Box1.js';
import './App.css';

class App extends Component{
  render(){
    return (
      <div>
    
        <h1> BOX LYFE </h1>
        <Box1 />
        <br/>
        <Box />
        <br/>
      </div>
    );
    }
}  
export default App;
