import React, { Component } from 'react';
import Dice from './Components/dice';
import DiceLog from './Components/diceLog';
import face1 from './images/1side.png';
import face2 from './images/2sides.png';
import face3 from './images/3sides.png';
import face4 from './images/4sides.png';
import face5 from './images/5sides.png';
import face6 from './images/6sides.png'
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
      this.state = {
        numbers : [1, 2, 3, 4, 5, 6],
        currentRoll : face1,
        rollLog : []
      }
  }
  rollDice = () => {
    //if you want to do a not-6 sided dice (make it more dynamic), you can set the 6 to be an array.length. 
    let random = Math.floor(Math.random() * 6)
    let someNum = this.state.numbers[random]
    if(someNum === 1){
      this.setState({ currentRoll: face1})
    } else if(someNum === 2) {
      this.setState({ currentRoll: face2})
    } else if(someNum === 3) {
      this.setState({ currentRoll: face3})
    } else if(someNum === 4) {
      this.setState({ currentRoll: face4})
    } else if(someNum === 5) {
      this.setState({ currentRoll: face5})
    } else if(someNum === 6) {
      this.setState({ currentRoll: face6})
    } else {
      return "error"
    }

    this.setState({ rollLog: [someNum, ...this.state.rollLog]})
    
  }

  reset = () => {
    //will reset our roll log and current roll to its original state
    this.setState({currentRoll: face1})
    this.setState({rollLog: []})
  }

  render () {  
    return (
      <React.Fragment>
        <div id="main">
          <h1>Dice Roller </h1>
          <div id="dice">
          <button onClick = { this.rollDice }>Roll The Dice</button>
          <Dice currentRoll = { this.state.currentRoll } />
          </div>
          <div id="log">
              <button onClick = {this.reset}>Reset</button>
              <DiceLog rollLog = {this.state.rollLog} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
