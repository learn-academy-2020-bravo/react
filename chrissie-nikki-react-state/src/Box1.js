import React, { Component } from 'react';
import './App.css';

class Box1 extends Component{
  constructor(props){
    super(props)
      this.state = {
        colorNames: ["green", "blue", "purple", "red", "yellow", "orange"],
        currentColor: ""

      }
    }
  
  chooseRandomColor = () => {
    let randomColor = Math.floor(Math.random() * 6)
    this.setState({currentColor: this.state.colorNames[randomColor]})
  }
      

  
  render () {
    return (
      <>
      <div  id ="box1" onClick = {this.chooseRandomColor}  style = {{backgroundColor: this.state.currentColor}}>
        <p>
          { this.state.currentColor }
        </p>

      </div>
      
      </>
    )
  }
}


export default Box1;