import React, { Component } from 'react';
import CSS from '../App.css';

class RollTracker extends Component{

  render() {
    let eachRoll = this.props.previousDiceRolls.slice(1).reverse().map(number => {
      return <p className = "previousDice"> <img src= { number } className= "previousDieFaces"/> </p>
    })

    return(
      <>
      <div className = "previousRolls">
        <h3>PREVIOUS GUYS!</h3>
        <div id= "rolledDice" > { eachRoll } </div>
      </div>
      </>
    )
  }
}
export default RollTracker
