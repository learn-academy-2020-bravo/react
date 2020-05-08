import React, { Component } from 'react';
import offLight from './images/lightBulbOffDark.png'
import onLight from './images/lightBulbOn.png'
import offSwitch from './images/lightSwitchOff.png'
import onSwitch from './images/lightSwitchOn.png'
import './App.css';

class LightBulb extends Component {
  constructor(props) {
    super(props)
      this.state = {
        lightOn: false,
        lightSwitchStatus: offSwitch,
        lightColor: offLight,
        backColor: "black"
      }
  }

  lightSwitch = () => {
    if (this.state.lightOn === false) {
      this.setState({
        lightOn: true,
        lightSwitchStatus: onSwitch,
        lightColor: onLight,
        backColor: "gray"
      })
    } else {
      this.setState({
        lightOn: false,
        lightSwitchStatus: offSwitch,
        lightColor: offLight,
        backColor: "black"
      })
    }
  }

  render() {
    let { lightSwitchStatus } = this.state
    let { lightColor } = this.state
    let { backColor } = this.state
    return(
      <>
        <div
        class = "lightswitch"         
        style = {{ backgroundColor: backColor }}
        >
          <img src = { lightSwitchStatus } onClick = { this.lightSwitch } class = "switch"/>
          <img src ={ lightColor } class = "bulb"/>
        </div>
      </>
    )
  }
}

export default LightBulb;
