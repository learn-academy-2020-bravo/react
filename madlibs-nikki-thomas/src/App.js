import React, {Component} from 'react';
import './App.css';
import UserInput from './components/UserInput'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
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

  clear = () => {
    this.setState({
      nounOne: "",
      verb: "",
      nounTwo: "",
      nounThree: "",
      adjective: "",
      verbTwo: "",
      adjectiveTwo: "",
      nounFour: "",
      madLib:""
    })
  }

   createMadLib = () => {
      this.setState({ madLib: `I am going to take my ${this.state.nounOne} ${this.state.verb} the ${this.state.nounTwo} while on the ${this.state.nounThree}.  I'm having a ${this.state.adjective} day.  Let's go ${this.state.verbTwo}.  Let's have a ${this.state.adjectiveTwo} ${this.state.nounFour}.`})
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
            handleChange={ this.handleChange}
            fieldName="nounOne"
          />
          <br></br>
          Verb:
          <UserInput
          handleChange={ this.handleChange}
          fieldName="verb"
          />
          <br></br>
          Noun:
          <UserInput
          handleChange={ this.handleChange}
          fieldName="nounTwo"
          />
          <br></br>
          Noun:
          <UserInput
          handleChange={ this.handleChange}
          fieldName="nounThree"
          />
          <br></br>
          Adjective:
         <UserInput
         handleChange={ this.handleChange}
         fieldName="adjective"
          />
          <br></br>
          Verb:
         <UserInput
         handleChange={ this.handleChange}
         fieldName="verbTwo"
          />
          <br></br>
          Adjective:
         <UserInput
         handleChange={ this.handleChange}
         fieldName="adjectiveTwo"
          />
          <br></br>
          Noun:
         <UserInput
         handleChange={ this.handleChange}
         fieldName="nounFour"
          />
        </div>
        <div class="column">
          <button onClick= {this.createMadLib}> Submit </button>
          <button onClick= {this.clear}> Clear </button>
          {this.state.madLib}
        </div>
      </div>
      </>
    )
  }
}

export default App;
