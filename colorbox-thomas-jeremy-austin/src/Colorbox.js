import React, { Component } from 'react';
import './App.css';

class Colorbox extends Component {
  constructor(props)  {
    super(props)
      this.state = {
        colors: ["green", "blue", "yellow", "red", "purple", "orange"],
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
          <div class = "white-box" onClick = {this.handleChange} style = `background-color: ${this.state.currentColor}`>
            <p>{this.state.currentColor}</p>
          </div>
        </>
    );
  }
}

export default Colorbox;
