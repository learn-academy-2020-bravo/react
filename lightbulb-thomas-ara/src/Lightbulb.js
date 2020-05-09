import React, { Component } from 'react';
import './App.css';
import offBulb from './images/OFFbulb.jpg'
import onBulb from './images/ONbulb.jpg'
import offSwitch from './images/Offswitch.jpeg'
import onSwitch from './images/ONswitch.jpg'


class Lightbulb extends Component {
  constructor(props) {
    super(props)
    this.state = {
      bulbImage: offBulb,
      switchImage: offSwitch
    }
  }

  handleChange = () => {
    if(this.state.bulbImage === onBulb) {
      this.setState({bulbImage: offBulb})
      this.setState({switchImage: offSwitch})
    }
    else {
      this.setState({bulbImage: onBulb})
      this.setState({switchImage: onSwitch})
    }
  }



  render(){
    return(
      <>
          <img src = {this.state.bulbImage} height="100" width="100"/>
          <img src = {this.state.switchImage} height="100" width="100" onClick={this.handleChange}/>
      </>
    )
  }
}



export default Lightbulb;
