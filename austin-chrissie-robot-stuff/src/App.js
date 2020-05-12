import React, { Component } from 'react';
import GoodRobo from './components/GoodRobo.js'
import BadRobo from './components/BadRobo.js'
import KanyeRobo from './components/KanyeRobo.js'
import './App.css';

class App extends Component {
  constructor (props) {
    super (props)
    this.state = {
      roboSpeak: ""
    }
  }
  updateRobo = (roboSpeak) => {
    //if problems check here!!!!!!!!!!!!
    this.setState ({value: roboSpeak})
  }
  handleChange = (e) => {
    this.setState({
      roboSpeak: e.target.value
    })
  }

    render() {
      return(
      <>
        <input
        value = { this.state.roboSpeak }
        //maybe parantheses???
        onChange = {this.handleChange} />
        <GoodRobo 
        roboSpeak = { this.state.roboSpeak }/>
        {/*BadRobo needs to show it's string on input*/}
        <BadRobo />
        <KanyeRobo
        roboSpeak = { this.state.roboSpeak } />
      </>

      )
    }
}

export default App;
