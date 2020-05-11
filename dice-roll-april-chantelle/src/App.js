import React, { Component } from 'react';
import Dice from './Components/dice';
import DiceLog from './Components/diceLog';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
      this.state = {
        numbers : [1, 2, 3, 4, 5, 6],
        currentRoll : "",
        rollLog : []
      }
  }
  rollDice = () => {
    //if you want to do a not-6 sided dice (make it more dynamic), you can set the 6 to be an array.length. 
    let random = Math.floor(Math.random() * 6)
    let someNum = this.state.numbers[random]
    this.setState({ currentRoll : someNum })
    this.setState({ rollLog: [someNum, ...this.state.rollLog]})
    
  }

  render () {  
    return (
      <React.Fragment>
        <h1>Dice Roller </h1>
        <button onClick = { this.rollDice }>Roll The Dice</button>
        <Dice currentRoll = { this.state.currentRoll } />
        <DiceLog rollLog = {this.state.rollLog} />
      </React.Fragment>
    );
  }
}

export default App;
