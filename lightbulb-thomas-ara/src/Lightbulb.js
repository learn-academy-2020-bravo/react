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
      lights:"white",
      bulbImage: OFFbulb,
      bulbClass: 'bulbOff',
      switchImage: Offswitch
    }
  }

  handleChange = () => {
    // let parent know that bulb state changed, so we can toggle fireworks YO
    this.props.bulbHandler()
    if(this.state.bulbImage === ONbulb) {
      this.setState({bulbImage: OFFbulb, switchImage: Offswitch, bulbClass: 'bulbOff'})


    }
    else {
      this.setState({bulbImage: ONbulb, switchImage: ONswitch, bulbClass: 'bulbOn'})
    }
  }



  render(){
    return(
      <div>
        <div className={'theLightDiv'} onClick = {this.handleChange}>
          <img id="bulbImage" className={this.state.bulbClass} src = {this.state.bulbImage}/>
          <img id="switchImage" src = {this.state.switchImage}/>
        </div>
      </div>
    )
  }
}



export default Lightbulb;
