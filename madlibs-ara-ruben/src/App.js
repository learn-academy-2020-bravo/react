import React, { Component }from 'react';
import Story from './components/Story'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
        location: "",
        famousPerson: "",
        adjective:"",
        sound:"",
        animal1:"",
        animal2:""

    }
  }

  handleChange = (e) => {
    this.setState({ location: e.target.value})

  }
  render() {
    return (
      <>
      <input value={ this.state.location }
      location={ this.state.location }
      onChange={ this.handleChange }></input>
      <Story />
      </>

    );
  }
}



export default App;
