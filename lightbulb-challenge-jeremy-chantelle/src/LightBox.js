import React, { Component } from 'react';
import './App.css';

class LightBox extends Component {
  constructor(props) {
    super(props)
      this.state = {
        lightOn: false,
        lightStatus: "",
        lightColor: ""
      }
  }

  lightSwitch = () => {
    if (this.state.lightOn === false) {
      this.setState({
        lightOn: true,
        lightStatus: "ON",
        lightColor: "yellow"
      })
    } else {
      this.setState({
        lightOn: false,
        lightStatus: "OFF",
        lightColor: "white"
      })
    }
  }

  render() {
    let { lightStatus } = this.state
    let { lightColor } = this.state
    return(
      <>
        <div
        class = "light"
        onClick = { this.lightSwitch }
        style = {{ backgroundColor: lightColor }}
        >
          <p>{ lightStatus }</p>
        </div>
      </>
    )
  }
}

export default LightBox;
