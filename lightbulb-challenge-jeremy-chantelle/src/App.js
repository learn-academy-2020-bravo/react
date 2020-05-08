import React, { Component } from 'react';
import LightBox from './LightBox'
import LightBulb from './LightBulb'
import './App.css';

class App extends Component {
  constructor (props){
    super(props) 
      this.state = {
        switchArray : []
      }
  }

addingLights = () => {
  this.setState ({switchArray: [... this.state.switchArray, < LightBulb />]})
}

removingLights = () => {
  this.setState ({switchArray: this.state.switchArray.slice(0,this.state.switchArray.length-1) })
}

  render() {
    return(
      <>
        <h1>Are You Afraid of the Dark?</h1>
        <div id="buttons">
          <button onClick = {this.addingLights}>Add More Light</button>
          <button onClick = {this.removingLights}>Less Light</button>

        </div>
        < LightBulb />
        <div>
          {this.state.switchArray}
        </div>
        <p> Jeremy and Chantelle made this. And we're not afraid of the dark.</p>
      </>
    )
  }
}

export default App;
