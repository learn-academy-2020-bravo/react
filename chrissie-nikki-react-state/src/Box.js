import React, { Component } from 'react';
import './App.css';

class Box extends Component{
  constructor(props){
    super(props)
      this.state = {
        colorNames: ["green", "blue", "purple", "red", "yellow", "orange"],
        currentColor: " "
      }
  }
  chooseRandomColor = ( ) => {
    let randomColor = Math.floor(Math.random()*6)
    this.setState({currentColor:this.state.colorNames[randomColor]})
  }
  render () {
    return (
      <>
      <button onClick = {this.chooseRandomColor}>BOX</button>
      </>
    )
  }
}

export default Box;