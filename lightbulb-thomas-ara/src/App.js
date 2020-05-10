import React, { Component } from 'react';
import './App.css';
import Lightbulb from './Lightbulb.js'


class App extends Component {
  constructor() {
    super()
<<<<<<< HEAD
  }
  render(){
    return(
      <div>
        <Lightbulb />
        <footer>
        Created by Thomas & Ara
        </footer>
      </div>
=======
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
>>>>>>> f98ccd07b6d9197bd3396b74e174e7c058a485b2
    );
  }
}



export default App;
