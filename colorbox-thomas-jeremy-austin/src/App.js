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
    this.setState({colorArray: [...this.state.colorArray, < Colorbox />]})
  }

  deleteColorBox = () => {
    this.setState({ colorArray: this.state.colorArray.slice(0,this.state.colorArray.length - 1)})
  }

  render() {
    return (
      <>
        <div className= "buttonContainer">
            <button className= "button" onClick={ this.addColorBox}> Press button to add box.    </button>
            <button className= "button" onClick={ this.deleteColorBox }> Press button to remove box. </button>
          </div>
        <div> {this.state.colorArray } </div>
      </>
    );
  }
}

export default App;
