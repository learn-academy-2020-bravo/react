import React, { Component } from 'react';
import './App.css';
import Dice from './components/Dice.js';
import Log from './components/Log.js';


class App extends Component {
  constructor() {
    super()
    this.state = {
      outcome: 0,
      previousRolls: []
    }
  };

  roll = () =>  {
    let random = Math.floor(Math.random() * 6) + 1
    console.log(random)
    this.setState({ outcome: random })
    console.log(this.state.outcome)
  }

  addRoll = () => {
    this.setState({ previousRolls: [...this.state.previousRolls, roll]})
  }

  render()  {
    return(
      <>
          < Dice
            roll = { this.roll }
            outcome = { this.state.outcome }
          />
          < Log
            roll = { this.state.outcome }
            previousRolls = { this.state.previousRolls }
            addRoll = { this.addRoll }
          />
          );
      </>
    )
  }

}

export default App;
