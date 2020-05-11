import React, { Component } from 'react';
import './App.css';
import Dice from './components/Dice.js';
import Log from './components/Log.js';
import dice1 from './images/dice1.jpg';
import dice2 from './images/dice2.jpg';
import dice3 from './images/dice3.jpg';
import dice4 from './images/dice4.jpg';
import dice5 from './images/dice5.jpg';
import dice6 from './images/dice6.jpg';
import diceface from './images/diceface.jpg';


class App extends Component {
  constructor() {
    super()
    this.state = {
      outcome: 7,
      previousRolls: [],
      rollImage: [dice1, dice2, dice3, dice4, dice5, dice6, diceface]
    }
  };

  roll = () =>  {
    let random = Math.floor(Math.random() * 6) + 1

    this.setState({ outcome: random })

    this.setState({ previousRolls: [...this.state.previousRolls, random]})


  }
  clear = () => {
    this.setState({ outcome: 7 })
    this.setState({ previousRolls: []})
  }



  render()  {
    return(
      <>
          < Dice
            roll = { this.roll }
            outcome = { this.state.outcome }
            image = { this.state.rollImage}
            clear = { this.clear }
          />
          < Log
            previousRolls = { this.state.previousRolls }


          />

      </>
    )
  }

}

export default App;
