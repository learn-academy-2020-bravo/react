import React, { Component } from 'react';
import './App.css';
import OFFbulb from './images/OFFbulb.jpg'
import ONbulb from './images/ONbulb.jpg'


class Lightbulb extends Component {
  constructor(props) {
    super(props)
    this.state = {
      switch:"OFF",
      lights:"white",
      OFFbulb: OFFbulb,
      ONbulb: ONbulb

    }
  }

  handleChange = () => {
    if(this.state.switch === "OFF") {

      this.setState({switch: "ON"})
      this.setState({lights: "yellow"})
    }
    else {
      this.setState({switch: "OFF"})
      this.setState({lights: "white"})
    }

  }



  render(){
    // console.log("render", this.state.switch);
    return(
      <>
        <div id="square" style = {{backgroundColor: this.state.lights}} onClick = {this.handleChange}>
        <p>{this.state.switch}</p>
        <img src = {this.state.OFFbulb}/>
        <img src = {this.state.ONbulb}/>



        </div>
      </>
    )
  }
}



export default Lightbulb;
