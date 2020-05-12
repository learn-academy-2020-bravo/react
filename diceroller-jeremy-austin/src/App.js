import React, { Component } from 'react';
import DiceRoller from "./components/DiceRoller";
import RollTracker from "./components/RollTracker";
import './App.css';
import escape from './images/escape-from-flavortown-module.jpg'
import dice1 from './images/guy1.png'
import dice2 from './images/guy2.png'
import dice3 from './images/guy3.png'
import dice4 from './images/guy4.png'
import dice5 from './images/guy5.png'
import dice6 from './images/guy6.png'
import diceStart from './images/guystart.png'
import escapePNG from './images/escapeimage.png'


class App extends Component{

  constructor(props){
    super(props)
    this.state= {
      //values go here
      diceFaces: [dice1, dice2, dice3, dice4, dice5, dice6],
      currentDiceRoll: diceStart,
      previousDiceRolls: []
    }
  }
  rollTheD6 = () => {
    let randomNum = Math.floor(Math.random() * 6)
    this.setState({
      currentDiceRoll: this.state.diceFaces[randomNum],
      previousDiceRolls: [...this.state.previousDiceRolls, this.state.currentDiceRoll]
    })
  }

  clearDice = () => {
    this.setState({
      currentDiceRoll: diceStart,
      previousDiceRolls: []
    })
  }

    //methods go here
 render() {
  return(
    <>
      <div className= "background">
        <header>
          <div id="titlePortion">
            <h1>ESCAPE FROM FLAVORTOWN</h1>
            <h4>DUNGEONS & DINERS & DRAGONS & DRIVE-INS & DIVES</h4>
          </div>
          <img id="headerImage" src={escapePNG} />
        </header>
          <div className= "lowerContent">
            <div className= "dice">
              < DiceRoller rollTheD6= {this.rollTheD6} currentDiceRoll= {this.state.currentDiceRoll}
              clearDice = { this.clearDice }
              />
            </div>
            <div className= "list">
              < RollTracker
              previousDiceRolls = { this.state.previousDiceRolls }
              />
            </div>
            </div>
        </div>
    </>
  )
}
}
export default App;
