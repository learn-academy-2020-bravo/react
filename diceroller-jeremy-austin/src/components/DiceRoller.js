import React, { Component } from 'react';
import CSS from '../App.css';

class DiceRoller extends Component{
  render(){
    return(
      <>
          <p id="diceBox" onClick= {this.props.rollTheD6}> { this.props.currentDiceRoll }</p>
      </>

    )
}
}
export default DiceRoller
