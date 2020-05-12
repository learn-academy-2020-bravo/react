import React, { Component } from 'react'
import DiceRoller from './components/DiceRoller'
import Logged from './components/Logged'
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
<<<<<<< HEAD
  this.setState({logArray: []}) //clears the log of numbers
  this.setState({dice: ''}) //clear the currently rolled number
=======
  this.setState({  logArray: ""})

>>>>>>> 6dde61605f0dc32f7d04b9b913ea2d195f28f4c3
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
<<<<<<< HEAD
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
=======
      
      <button onClick={ this.randomNumber }>Generate a random number</button> 
      <button onClick= {this.restart}>restart</button>
    </>
>>>>>>> 6dde61605f0dc32f7d04b9b913ea2d195f28f4c3
  )
}
}
