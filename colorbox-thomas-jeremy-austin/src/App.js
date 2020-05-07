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
    this.setState({ colorArray: this.state.colorArray.push( < Colorbox />)})
  }

  deleteColorBox = () => {

  }

  // handleChange(e) {
  //   this.setState({
  //
  //   })
  // }

  render() {
    return (
        <>
          < Colorbox />
          <div> { this.state.colorArray.map(element=>element)} </div>
          <button onClick={ this.addColorBox}> press button to add box </button>
          <button onClick={ this.deleteColorBox }> press button to remove box </button>
        </>
    );
  }
}

export default App;
