import React , { Component } from 'react';
import './App.css';
import imageOn from './images/lightOn.jpg'
import imageOff from './images/lightOff.jpg'

//create a class that extends from component to App.js
class Square extends Component {
    constructor(props){
        super(props)
            this.state = {
                currentValue: "OFF",
                lightOn: "ON",
                ligtOff: "OFF",
            }
    }
    lightSwitch = () => {
        
        if (this.state.currentValue === "ON" ){
            this.setState({currentValue: "OFF"}) 
        } else {
            this.setState({currentValue: "ON"})
        }
    }

    lightSwitchImage = () => {
        
        if (this.state.currentValue === "ON" ){
            this.setState({currentImage: imageOff}) 
        } else {
            this.setState({currentImage: imageOn})
        }
    }

 render() {
    
  return (
    <div id = "box" onClick = { this.lightSwitch }>

    </div>
  )
 }
}

export default Square;
    
  
  )
 }
}

export default Square;