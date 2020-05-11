import React, { Component } from 'react';
import DiceRoller from "./components/DiceRoller.js";
import RollTracker from "./components/RollTracker.js";
import './App.css';


class App extends Component{

  constructor(props){
    super(props)
    this.state= {
      //values go here
      currentDiceRoll: "",
      perviousDiceRolls: []
    }
  }
  rollTheD6 = () => {
    let randomDice = Math.ceil(Math.random() * 6)
    this.setState({ currentDiceRoll: randomDice})
  }



    //meth heads go here
 render() {
  return(
    <>
      <button onClick= {this.rollTheD6}> Roll the d6 </button>
      < DiceRoller currentDiceRoll= {this.state.currentDiceRoll} />
  {/*    < RollTracker previousDiceRolls= /> */}
    </>
  )
}
}
export default App;
