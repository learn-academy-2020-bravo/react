import React, { Component } from 'react'
import Paragraph from './components/paragraph'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
      this.state = {
        noun: "",
        adj: "",
        sport: "",
        weather: "",
        number: "",
        bodyPlural: "",
        verb1: "",
        verb2: "",
        verb3: ""
      }
  }
  
updateNoun = (noun) => {
  this.setState({noun: noun})
}

handleChange = (e) => {
  // a method that will take a value from an input and save it in the state key "noun" **this updates in real-time**
  this.setState({noun: e.target.value})
}


  render() {
    return (
  
    <div>
      <h1>Mad Libs Challenge!!</h1>
      <input type="noun"
        value = { this.noun }
        onChange= {this.handleChange}
      />
      < Paragraph noun= { this.state.noun }/>
    </div>
    )
  }
}

export default App;
