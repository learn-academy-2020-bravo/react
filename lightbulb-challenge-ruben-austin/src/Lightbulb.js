import React, { Component } from 'react';
import './App.css';
import LightBulbOn from "./images/lightbulbyellow.jpg"
import LightBulbOff from "./images/offlightbulb.jpg"
import LightSwitchOn from "./images/lightswitchon.png"
import LightSwitchOff from "./images/lightswitchoff.png"

class Lightbulb extends Component {
    constructor (props) {
      super(props)
      this.state = {
        isLightOn: false,
        lightArray: "yellow",
        onOff: "on",
        pictureOfSwitch:LightSwitchOn ,
        pictureOfBulb: LightBulbOn ,
      }
    }
    handleChange = () => {


      if (this.state.isLightOn == true) {
        this.setState({isLightOn:false, onOff: "off", lightArray:"white", pictureOfBulb: LightBulbOff, pictureOfSwitch: LightSwitchOff})

      }
      else if (this.state.isLightOn == false) {
        this.setState({isLightOn:true, onOff: "on", lightArray:"yellow", pictureOfBulb: LightBulbOn, pictureOfSwitch:LightSwitchOn })
      }

    }

    render () {
      return(
        <>

          <div className="button"  style = {{backgroundColor: this.state.lightArray}}>
            <img src= {this.state.pictureOfBulb} className= "bulb"/>
            <br/>
            <img src= {this.state.pictureOfSwitch}   onClick= { this.handleChange} className= "switch"/>


          </div>

        </>
      )
    }




}
export default Lightbulb
