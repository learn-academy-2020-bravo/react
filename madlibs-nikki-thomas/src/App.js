import React, {Component} from 'react';
import Word from './components/Word'
import './App.css';
import UserInput from './components/UserInput'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      noun: "",
      verb: "",
      nounTwo: "",
      nounThree: "",
      adjective: "",
      verbTwo: "",
      adjectiveTwo: "",
      nounFour: ""
    }
  }

  updateNoun = (name) => {
    this.setState({ noun: name})
  }

  updateVerb = (name) => {
    this.setState({ verb: name})
  }

  updateNounTwo = (name) => {
    this.setState({ nounTwo: name})
  }

  updateNounThree = (name) => {
    this.setState({ nounThree: name})
  }

  updateAdjective = (name) => {
    this.setState({ adjective: name})
  }

  updateVerbTwo = (name) => {
    this.setState({ verbTwo: name})
  }

  updateAdjectiveTwo = (name) => {
    this.setState({ adjectiveTwo: name})
  }

  updateNounFour = (name) => {
    this.setState({ nounFour: name})
  }

  render() {
    return (
      <>
      <div class="row">
        <div class="column">
          Noun:
          <UserInput
            name={this.state.noun}
            updateName={ this.updateNoun}
          />
          <br></br>
          Verb:
          <UserInput
           name={this.state.verb}
           updateName={ this.updateVerb}
          />
          <br></br>
          Noun:
          <UserInput
           name={this.state.nounTwo}
           updateName={ this.updateNounTwo}
          />
          <br></br>
          Noun:
          <UserInput
          name={this.state.nounThree}
          updateName={ this.updateNounThree}
          />
          <br></br>
          Adjective:
         <UserInput
          name={this.state.adjective}
          updateName={ this.updateAdjective}
          />
          <br></br>
          Verb:
         <UserInput
          name={this.state.verbTwo}
          updateName={ this.updateVerbTwo}
          />
          <br></br>
          Adjective:
         <UserInput
          name={this.state.adjectiveTwo}
          updateName={ this.updateAdjectiveTwo}
          />
          <br></br>
          Noun:
         <UserInput
          name={this.state.nounFour}
          updateName={ this.updateNounFour}
          />
        </div>
        <div class="column">
        <Word
          name={this.state.noun}
        />
        <Word
          name={this.state.verb}
        />
        <Word
          name={this.state.nounTwo}
        />
        <Word
          name={this.state.nounThree}
        />
        <Word
          name={this.state.adjective}
        />
        <Word
          name={this.state.verbTwo}
        />
        <Word
          name={this.state.adjectiveTwo}
        />
        <Word
          name={this.state.nounFour}
        />
        </div>
      </div>
      </>
    )
  }
}

export default App;
