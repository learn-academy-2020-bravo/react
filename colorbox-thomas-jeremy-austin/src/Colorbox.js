import React, { Component } from 'react';
import './App.css';

class Colorbox extends Component {
  constructor(props)  {
    super(props)
      this.state = {
        colors: ["Green", "Blue", "Yellow", "Red", "Purple", "Orange"],
        currentColor: ""
      }
  }

  handleChange = () =>  {
    let randomNum = Math.floor(Math.random() * this.state.colors.length)
    this.setState( {currentColor: this.state.colors[randomNum]} )
  }


  render () {
    return (
        <>
          <div className = {`${this.state.currentColor} box`} onClick = {this.handleChange} >
            <p>{this.state.currentColor}</p>
          </div>
        </>
    );
  }
}

export default Colorbox;
