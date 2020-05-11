import React, { Component } from 'react'
import DiceRoller from './components/DiceRoller'
import Logged from './components/Logged'
import './App.css'

//create a box that outputs a number
//everytime we click on box it randomizes a number
//create a random method inside of DicerRoller.js 
//create another box for Logged JS which will log all previous dice rolls into Logged
//create a restart button which will clear all info inside of log


export default class App extends Component {
constructor(props) {
  super(props)
  this.state = {
    dice: '',
    logArray: []
  }
}

randomNumber = () => {
  let random = Math.ceil(Math.random() * 6)
  this.state.logArray.push(random)
  this.setState({ dice: random, logArray: this.state.logArray })
  

}



  render() {
  return (
    <> 
            <h1>Dice Roller</h1>
      <DiceRoller dice={this.state.dice}/>
      <Logged log={this.state.logArray}/>
      <button onClick={ this.randomNumber }>Generate a random number</button> 
      
    </>
  )
}
}
