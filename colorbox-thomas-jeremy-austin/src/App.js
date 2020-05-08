import React, { Component } from 'react';
import Colorbox from './Colorbox.js'
import './App.css';

class App extends Component {
  constructor() {
    super()
      this.state = {
        colorArray: []
      }
    }

  addColorBox = () => {
    this.setState({colorArray: [...this.state.colorArray,< Colorbox />]})
  }

  deleteColorBox = () => {
    this.setState({ colorArray: this.state.colorArray.slice(0,this.state.colorArray.length - 1)})
  }

  render() {
    return (
        <>
          <div> { this.state.colorArray } </div>
          <button onClick={ this.addColorBox}> press button to add box </button>
          <button onClick={ this.deleteColorBox }> press button to remove box </button>
        </>
    );
  }
}

export default App;
