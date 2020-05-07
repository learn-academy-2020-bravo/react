import React, { Component } from 'react';
import './App.css';
class ColorBox extends Component { 
  constructor(props){
      super(props)
        this.state = {
            color:["white", "green","blue", "yellow", "red", "purple", "orange"],
            currentColor: ""
        }
  }
  
  handleChange = () => {
      let { color } = this.state
      let randomNum = Math.floor(Math.random() * 7)
      this.setState({ currentColor: color[randomNum]})
  }
  
  
  
  
render () {
    let { currentColor } = this.state 
    return (
      <div id="whitebox" onClick = { this.handleChange }           style={{backgroundColor: currentColor}} >
        <p>
           { currentColor }
        </p>
      </div>
    );
  }
}

export default ColorBox;
