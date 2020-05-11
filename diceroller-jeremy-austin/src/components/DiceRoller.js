import React, { Component } from 'react';
import CSS from '../App.css';

class DiceRoller extends Component{
  render(){
    return(
      <>
          <h3> { this.props.currentDiceRoll }</h3>
      </>

    )
}
}
export default DiceRoller
