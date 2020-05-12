import React, { Component } from 'react';
import CSS from '../App.css';

class DiceRoller extends Component{
  render(){
    return(
      <>
        <div id="diceRollerBody">
          <div id="diceBox" onClick= {this.props.rollTheD6}> <img src={ this.props.currentDiceRoll } className= "diceImage"/> </div>
          <h3 id="diceCaption">CLICK GUY TO ROLL</h3>
          <button id="clearButton" onClick = { this.props.clearDice }>CLEAR ME!</button>
        </div>
      </>

    )
}
}
export default DiceRoller
