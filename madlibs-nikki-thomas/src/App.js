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
      madLib:"",
    })
  }

   createMadLib = () => {
      this.setState({ madLib: `It was a cold November ${this.state.nounOne}. I woke up and ${this.state.verb} to the kitchen.  My favorite ${this.state.nounTwo} was cooking on the stove.  I thought to myself, "I think I'll add some ${this.state.nounThree} to the dish".  I thought it was a very ${this.state.adjective} meal.  After breakfast, I think I'll  ${this.state.verbTwo} down to the docks.  I was having a ${this.state.adjectiveTwo} journey, until I tripped over a  ${this.state.nounFour}.`})
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
      <div className="container">
        <div className="row">
          <div className="center">
            <h1> Mad Libs </h1>
          </div>
        </div>
        <div className="row">
          <div className="column left">
            <p>Noun: </p>
            <p>Verb: </p>
            <p>Noun: </p>
            <p>Noun: </p>
            <p>Adjective: </p>
            <p>Verb: </p>
            <p>Adjective: </p>
            <p>Noun: </p>
          </div>
          <div className="column middle">
            <p className="inputMargin">
              <UserInput
                handleChange={ this.handleChange}
                fieldName="nounOne"
              />
            </p>
            <p className="inputMargin">
              <UserInput
              handleChange={ this.handleChange}
              fieldName="verb"
              />
            </p>
            <p className="inputMargin">
              <UserInput
              handleChange={ this.handleChange}
              fieldName="nounTwo"
              />
            </p>
            <p className="inputMargin">
              <UserInput
              handleChange={ this.handleChange}
              fieldName="nounThree"
              />
            </p>
            <p className="inputMargin">
              <UserInput
               handleChange={ this.handleChange}
               fieldName="adjective"
              />
            </p>
            <p className="inputMargin">
              <UserInput
               handleChange={ this.handleChange}
               fieldName="verbTwo"
              />
            </p>
            <p className="inputMargin">
              <UserInput
               handleChange={ this.handleChange}
               fieldName="adjectiveTwo"
              />
            </p>
            <p className="inputMargin">
              <UserInput
               handleChange={ this.handleChange}
               fieldName="nounFour"
              />
            </p>
          </div>
          <div className="column right">
            <p className="story">{this.state.madLib}</p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="column half buttonOne">
          <button onClick= {this.createMadLib}> Submit </button>
        </div>
        <div className="column half buttonTwo">
          <button onClick= {this.clear}> Clear </button>
        </div>
      </div>
      </>
    )
  }
}

export default App;
