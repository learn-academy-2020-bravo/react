import React , { Component } from 'react';
import './App.css';

//create a class that extends from component to App.js
class Square extends Component {
    constructor(props){
        super(props)
            this.state = {
                currentValue: "OFF"
            }
    }
    lightSwitch = () => {
        
        if (this.state.currentValue === "ON" ){
            this.setState({currentValue: "OFF"})
        } else{
            this.setState({currentValue: "ON"})
        }
        
    
    }



 render() {
    
  return (
    <div id = "box" onClick = { this.lightSwitch }>
       <p> {this.state.currentValue } </p>
    </div>
    
  
  )
 }
}

export default Square;