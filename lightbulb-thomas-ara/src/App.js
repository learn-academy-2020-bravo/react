import React, { Component } from 'react';
import './App.css';
import OFFbulb from './images/OFFbulb.jpg'
import ONbulb from './images/ONbulb.jpg'
import OFFswitch from './images/Offswitch.jpeg'
import ONswitch from './images/ONswitch.jpg'



class App extends Component {
  constructor() {
    super()
    this.state = {
        bulbImage: OFFbulb,
        switchImage: OFFswitch,
        switchArray: []
    }
  }

  addSwitch = () => {
    this.setState({switchArray: [...this.state.switchArray, this.state.switchImage]})
    console.log(this.state.switchArray)
  }

  deleteSwitch = () =>  {
    this.setState({switchArray: this.state.switchArray.slice(0,this.state.switchArray.length - 1)})
    console.log(this.state.switchArray)
  }

  handleChange = () => {
    if(this.state.bulbImage === ONbulb) {
      this.setState({bulbImage: OFFbulb})
      this.setState({switchImage: OFFswitch})
      this.setState({switchArray: this.state.switchArray.map(x => OFFswitch)})
    }
    else {
      this.setState({bulbImage: ONbulb})
      this.setState({switchImage: ONswitch})
      this.setState({switchArray: this.state.switchArray.map(x => ONswitch)})
    }
  }

  render(){
    return(
      <>
        <div className = "buttonContainer">
          <button className = "button"  onClick = {this.addSwitch}> Add a Light Switch. </button>
          <button className = "button"  onClick = {this.deleteSwitch}> Remove a Light Switch. </button>
        </div>

        <img src = {this.state.bulbImage}/>
        <div onClick = {this.handleChange}> {this.state.switchArray.map(x => <img src = {x} height = "100" width = "100"/>)} </div>
        //<img src = {this.state.switchArray} onClick = {this.handleChange}/>
      </>
    );
  }
}




export default App;
