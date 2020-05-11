import React, { Component } from 'react';
import DiceRoller from "./components/DiceRoller";
import RollTracker from "./components/RollTracker";
import './App.css';
import Escape from './images/escape-from-flavortown-module.jpg'


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




    //methods go here
 render() {
  return(
    <>
      <div className= "background">
        <h1>Roll The Dice------------------Your Previous rolls </h1>

          <button onClick= {this.rollTheD6}> Roll the d6 </button>
      
          <div className= "lowerContent">
            <div className= "dice">
            < DiceRoller rollTheD6= {this.rollTheD6} currentDiceRoll= {this.state.currentDiceRoll}  />
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
