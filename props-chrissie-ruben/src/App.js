import React, {Component} from 'react';
import Dice from './components/Dice'
import './App.css';
import Rolls from './components/Rolls';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentRoll: "",
      previousLog: []
    }
  }

  diceRolling = () => {
    let randomRoll = Math.ceil(Math.random() * 6)
    this.state.previousLog.push(randomRoll)
    this.setState({ currentRoll: randomRoll, 
                    previousLog: this.state.previousLog })
  }

  render() {
    return(
      <>
        <Dice
         diceCurrentRoll ={ this.state.currentRoll }
         boxClick = { this.diceRolling }
         />
         <Rolls
         rollingLog = { this.state.previousLog }
         />
      </>
    )
  }

}

export default App;
