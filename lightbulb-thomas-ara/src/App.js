import React, { Component } from 'react';
import './App.css';
import Lightbulb from './Lightbulb.js'


class App extends Component {
  constructor() {
    super()
    this.state = {
        switchArray: []
    }
  }

  addSwitch = () => {
    this.setState({switchArray: [...this.state.switchArray, < Lightbulb />]})
  }

  deleteSwitch = () =>  {
    this.setState({switchArray: this.state.switchArray.slice(0,this.state.switchArray.length - 1)})
  }

  render(){
    return(
      <>
        <div className = "buttonContainer">
          <button className = "button"  onClick = {this.addSwitch}> Add a Light Switch. </button>
          <button className = "button"  onClick = {this.deleteSwitch}> Remove a Light Switch. </button>
        </div>
        <div> {this.state.switchArray} </div>
      </>
    );
  }
}




export default App;
