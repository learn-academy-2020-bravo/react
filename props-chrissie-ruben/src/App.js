import React, {Component} from 'react';
import Dice from './components/Dice'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      diceDigits: [1, 2, 3, 4, 5, 6],
      currentRoll: ""
    }
  }

  diceRolling = () => {
    let randomRoll = Math.floor(Math.random() * this.state.diceDigits.length)
    this.setState({ currentRoll: this.state.diceDigits[randomRoll] })
  }

  render() {
    return(
      <>
        <Dice
         diceCurrentRoll ={ this.state.currentRoll}
         boxClick = {this.diceRolling}
         />
      </>
    )
  }

}

export default App;
