import React, { Component } from 'react';
import './App.css';

class Box extends Component{
    constructor(props){
        super(props)
            this.state = {isLightOn: true};
            this.lightSwitch = this.lightSwitch.bind(this);
    }

    lightSwitch() {
        this.setState(state => ({
            isLightOn: !state.isLightOn
        }));
            
    }
    render () {
        return(
         <>
           <div><button onClick = {this.lightSwitch}>{this.state.isLightOn ? 'ON' : 'OFF'} </button></div>
         </>
    )}
}

export default Box;