import React, { Component }from 'react';
import Story from './components/Story'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      madlibs:{
        location: "",
        famousPerson: "",
        adjective:"",
        sound:"",
        animal1:"",
        animal2:"",
      },
      paragraph: ''
    }
  }

  handleChange = (e) => {
    const {madlibs} = this.state
    madlibs[e.target.name] = e.target.value
    // this.setState({e.target.name: e.target.value})
  }

  handleFormSubmit = (e) => {
    var paragraph = `just waking up in the ${this.state.madlibs.location}, gotta thank ${this.state.madlibs.famousPerson}
    I don't know, but today seems kinda ${this.state.madlibs.adjective}. No ${this.state.madlibs.sound} from the ${this.state.madlibs.animal1}, no smog, and momma cooked a breakfast with no ${this.state.madlibs.animal2}`
    this.setState({paragraph: paragraph})
  }

  handleClear = (e) => {
    this.setState({paragraph: this.state.madlibs.paragraph, location:"", famousPerson:"", adjective: "", sound:"", animal1:"", animal2:""})
  }



  render() {
    return (
      <>
      <label>Location</label>
      <input
      value={ this.state.location }
      name={ "location" }
      onChange={ this.handleChange }></input>
      <br></br>
      <label>Famous Person</label>
      <input
      value={ this.state.famousPerson }
      name={ "famousPerson" }
      onChange={ this.handleChange }></input>
      <br></br>
        <label>Adjective</label>
      <input
      value={ this.state.adjective }
      name={ "adjective" }
      onChange={ this.handleChange }></input>
      <br></br>
      <label>Sound</label>
      <input
      value={ this.state.sound }
      name={ "sound" }
      onChange={ this.handleChange }></input>
      <br></br>
      <label>Animal #1</label>
      <input
      value={ this.state.animal1 }
      name={ "animal1" }
      onChange={ this.handleChange }></input>
      <br></br>
      <label>Animal #2</label>
      <input
      value={ this.state.animal2 }
      name={ "animal2" }
      onChange={ this.handleChange }></input>
      <br></br>
      <button type="submit" onClick={this.handleFormSubmit}>Submit</button>
      <button type="clear" onClick={this.handleClear}>Clear</button>
      <Story paragraph={this.state.paragraph} />

      </>

    );
  }
}



export default App;
