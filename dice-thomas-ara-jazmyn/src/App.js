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
      outcome: 6,
      previousRolls: [],
      rollImage: [dice1, dice2, dice3, dice4, dice5, dice6, diceface]
    }
  };

  //obtain a random index to get from a picture from rollImage, and add that result to
  //our previous rolls array.
  roll = () =>  {
    let random = Math.floor(Math.random() * 6)
    this.setState({
      outcome: random,
      previousRolls: [...this.state.previousRolls, random + 1]
    })
  }

  //set the image to the start, clear out previous rolls array.
  clear = () => {
    this.setState({
      outcome: 6,
      previousRolls: []
    })
  }

  render()  {
    return(
      <>
      <div class="row">
          <div class="column">
          < Dice
            roll = { this.roll }
            outcome = { this.state.outcome }
            image = { this.state.rollImage}
          />
          </div>
          <div class = "column">
          < Log
            previousRolls = { this.state.previousRolls }
            clear = { this.clear }
          />
          </div>
      </div>
      <footer id= "Createes"> Created by Thomas, Ara, and Jazmyn </footer>
      </>
    )
  }
}

export default App;
