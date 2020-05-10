import React, { Component } from 'react';
import './App.css';
import OFFbulb from './images/OFFbulb.jpg'
import ONbulb from './images/ONbulb.jpg'
import Offswitch from './images/OFFswitch.jpg'
import ONswitch from './images/ONswitch.jpg'



class Lightbulb extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // switch:"OFF",
      lights:"white",
      bulbImage: OFFbulb,
      bulbClass: 'bulbOff',
      switchImage: Offswitch
    }
  }

  handleChange = () => {
    if(this.state.bulbImage === ONbulb) {
      this.setState({bulbImage: OFFbulb, switchImage: Offswitch, bulbClass: 'bulbOff'})


    }
    else {
      this.setState({bulbImage: ONbulb, switchImage: ONswitch, bulbClass: 'bulbOn'})

    }
  }



  render(){
    return(
      <>
        <div className={'theLightDiv'} onClick = {this.handleChange}>
          <img id="bulbImage" className={this.state.bulbClass} src = {this.state.bulbImage}/>
          <img id="switchImage" src = {this.state.switchImage}/>
        </div>
      </>
    )
  }
}



export default Lightbulb;
