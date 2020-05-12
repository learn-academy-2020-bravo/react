import React, { Component } from 'react'
import Paragraph from './components/paragraph'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
      this.state = {
        noun: "DRAGON",
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

  render() {
    return (
  
    <div>
      <h1>Hi</h1>
      < Paragraph noun= { this.state.noun }/>
    </div>
    )
  }
}

export default App;
