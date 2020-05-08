import React, { Component } from 'react';
import './App.css';
import OFFbulb from './images/OFFbulb.jpg'
import ONbulb from './images/ONbulb.jpg'
import Offswitch from './images/Offswitch.jpeg'
import ONswitch from './images/ONswitch.jpg'



class Lightbulb extends Component {
  constructor(props) {
    super(props)
    this.state = {
      switch:"OFF",
      lights:"white",
      bulbImage: OFFbulb,
      switchImage: Offswitch
    }
  }

  handleChange = () => {
    if(this.state.bulbImage === ONbulb) {
      this.setState({bulbImage: OFFbulb})
      this.setState({switchImage: Offswitch})

    }
    else {
      this.setState({bulbImage: ONbulb})
      this.setState({switchImage: ONswitch})
    }
  }



  render(){
    return(
      <>
        <div id="square" style = {{backgroundColor: this.state.lights}} onClick = {this.handleChange}>
          <p>{this.state.switch}</p>
          <img src = {this.state.bulbImage}/>
          <img src = {this.state.switchImage}/>
        </div>
      </>
    )
  }
}



export default Lightbulb;
