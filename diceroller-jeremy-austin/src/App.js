import React, { Component } from 'react';
import DiceRoller from "./components/DiceRoller";
import RollTracker from "./components/RollTracker";
import './App.css';


class App extends Component{

  constructor(props){
    super(props)
    this.state= {
      //values go here
      currentDiceRoll: "",
      previousDiceRolls: []
    }
  }
  rollTheD6 = () => {
    let randomDice = Math.ceil(Math.random() * 6)
    this.setState({
      currentDiceRoll: randomDice,
      previousDiceRolls: [...this.state.previousDiceRolls, this.state.currentDiceRoll]
    })
  }




    //meth heads go here
 render() {
  return(
    <>
      <h1>Roll The Dice</h1>
      <button onClick= {this.rollTheD6}> Roll the d6 </button>
      < DiceRoller currentDiceRoll= {this.state.currentDiceRoll} />
      < RollTracker
        listDiceRolls= { this.listPreviousRolls }
        previousDiceRolls = { this.state.previousDiceRolls }
        />
    </>
  )
}
}
export default App;
