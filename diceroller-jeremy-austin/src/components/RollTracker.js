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
        <h3> Your Previous rolls </h3>
        <div> { eachRoll } </div>
      </div>
      </>
    )
  }
}
export default RollTracker
