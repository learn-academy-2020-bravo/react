import React, {Component} from 'react';
import Word from './components/Word'
import './App.css';
import UserInput from './components/UserInput'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
    fieldName:"",
      nounOne: "",
      verb: "",
      nounTwo: "",
      nounThree: "",
      adjective: "",
      verbTwo: "",
      adjectiveTwo: "",
      nounFour: "",
      madLib:""
    }
  }
  handleChange = event => {
    const {name,value} = event.target
    //const name = event.target.name
    //const value = event.target.value
    //more logic here as per the requirement
    this.setState({
        [name]: event.target.value,
    });
};
// {this.state.verb}
  // updateNoun = (name) => {
  //   this.setState({ noun: name})
  // }

  // updateVerb = (name) => {
  //   this.setState({ verb: name})
  // }

  // updateNounTwo = (name) => {
  //   this.setState({ nounTwo: name})
  // }

  // updateNounThree = (name) => {
  //   this.setState({ nounThree: name})
  // }

  // updateAdjective = (name) => {
  //   this.setState({ adjective: name})
  // }

  // updateVerbTwo = (name) => {
  //   this.setState({ verbTwo: name})
  // }

  // updateAdjectiveTwo = (name) => {
  //   this.setState({ adjectiveTwo: name})
  // }

  // updateNounFour = (name) => {
  //   this.setState({ nounFour: name})
  // }
   createMadLib = () => {
      this.setState({ madLib: `I am going to take my${this.state.nounOne}` })
   }

  render() {
    return (
      <>
      {/* add container (div className='container')\
      - class = className
      - anytime you have text, wrap in a h1-6, p or span tag
      - instead of br, use margins and padding in your css
      - look into creating block element with css (display:block)
      */}
      <div class="row">
        <div class="column">
          Noun:
          <UserInput
            value={this.state.noun}
            handleChange={ this.handleChange}
            fieldName="nounOne"
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
          <button onClick= {this.createMadLib}> Submit </button>
          {this.state.madLib}
        </div>
      </div>
      </>
    )
  }
}

export default App;
