import React, { Component } from 'react';
import CSS from '../App.css';

class RollTracker extends Component{

  render() {
    let eachRoll = this.props.previousDiceRolls.map(number => {
      return <p> { number } </p>
    })

    return(
      <>
      <div className = "previousRolls">
        
        <div id= "rolledDice" > { eachRoll } </div>
      </div>
      </>
    )
  }
}
export default RollTracker
