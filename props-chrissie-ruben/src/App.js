import React, {Component} from 'react';
import Dice from './components/Dice'
import './App.css';
import Rolls from './components/Rolls';
import one from './images/one.png'
import two from './images/two.png'
import three from './images/three.png'
import four from './images/four.png'
import five from './images/five.png'
import six from './images/six.png'
import giphy from './images/giphy.gif'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentRoll: "",
      previousLog: [],
      pictureOfDiceRoll: giphy
    }
  }

  diceRolling = () => {
    let randomRoll = Math.ceil(Math.random() * 6)
    this.state.previousLog.push(randomRoll)
    if(randomRoll === 1) {
      this.setState({ currentRoll: randomRoll, 
        previousLog: this.state.previousLog,
        pictureOfDiceRoll: one})
    } else if(randomRoll === 2) {
      this.setState({ currentRoll: randomRoll, 
        previousLog: this.state.previousLog,
        pictureOfDiceRoll: two})
    } else if(randomRoll === 3) {
      this.setState({ currentRoll: randomRoll,
        previousLog: this.state.previousLog,
        pictureOfDiceRoll: three})
    } else if(randomRoll === 4) {
      this.setState({ currentRoll: randomRoll, 
        previousLog: this.state.previousLog,
        pictureOfDiceRoll: four})
    } else if(randomRoll === 5) {
      this.setState({ currentRoll: randomRoll, 
        previousLog: this.state.previousLog,
        pictureOfDiceRoll: five})
    } else if(randomRoll === 6) {
      this.setState({ currentRoll: randomRoll, 
        previousLog: this.state.previousLog,
        pictureOfDiceRoll: six})
    } 

   
  }

  reset = () => {
    this.setState({ previousLog: [], pictureOfDiceRoll: giphy, currentRoll: "" })
  }

  render() {
    return(
      <>
        <Dice
         diceCurrentRoll ={ this.state.currentRoll }
         boxClick = { this.diceRolling }
         pictureOfDiceRoll = { this.state.pictureOfDiceRoll }
         resetButton = { this.reset }
         />
         
         <Rolls
         rollingLog = { this.state.previousLog }
         />
      </>
    )
  }

}

export default App;
