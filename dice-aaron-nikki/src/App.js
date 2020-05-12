import React, { Component } from 'react'
import DiceRoller from './DiceRoller'
import Logged from './Logged'
import './App.css'


export default class App extends Component {
constructor(props) {
  super(props)
  this.state = {
    dice: '',
    logArray: [],
   // diceImages: [dice1, dice2, dice3, dice4, dice5, dice6]
  }
}

randomNumber = () => {
  let random = Math.ceil(Math.random() * 6)
  this.state.logArray.push(random + ',' + ' ')
  this.setState({ dice: random, logArray: this.state.logArray })
  
}

restart = () => {
  this.setState({logArray: []}) //clears the log of numbers
  this.setState({dice: ''}) //clear the currently rolled number
}

  render() {
  return (
    <div> 
      <h3 style={{
        textAlign: 'center',
        cursor: 'grab',
        border: '1px solid black',
        background: 'Yellow',
        padding: '0.5rem 2rem',
        margin: '2.5rem',
        width: 'auto'
               }}
      >Dice Roller</h3>

      <DiceRoller dice={this.state.dice}/>
      <Logged log={this.state.logArray}/>
      <button onClick={ this.randomNumber } style={{
        font: 'inherit',
        cursor: 'pointer',
        border: '1px solid red',
        background: 'red',
        padding: '0.5rem 2rem',
        margin: '2rem'
      }}
      >ROLL THE DICE!!</button> 
      <button onClick={ this.restart }
      style={{
        font: 'inherit',
        cursor: 'pointer',
        border: '1px solid red',
        background: 'blue',
        padding: '0.5rem 2rem',
        margin: '2.5rem',
        
      }}
      >DELETE DICE COUNT</button> 
    </div>
  )
}
}
