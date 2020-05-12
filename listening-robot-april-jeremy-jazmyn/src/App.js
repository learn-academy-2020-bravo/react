import React, { Component } from 'react';
import GoodRobot from './components/GoodRobot'
import BadRobot from './components/BadRobot'
import KanyeBot from './components/KanyeBot'
import NameInput from './components/NameInput'
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state= {
      name: ""
    }
  }

  updateName = (name) => {
    // this method is passed as props to <NameInput /> so the value from the child component can be passed back "up river" to the parent App.js
    this.setState({ name: name })
  }

    render() {
    return (
<div>
        <h1>Say something<br/>
          {/* <NameInput /> gets the information from state and a method as props  */}
          <NameInput
          name={ this.state.name }
          updateName={ this.updateName }
          /></h1>
        {/* <Component /> gets the same information as props */}
        <h3>Good Robot</h3>
        <GoodRobot
          name={ this.state.name }
        />
        <h3>Bad Robot</h3>
        <BadRobot
          name={ this.state.name }
        />
        <h3>Kanyebot 5000</h3>
        <KanyeBot
        name={ this.state.name }
        />

      </div>
    );
  }
}

//create an input in our parent component for our user to put stuff in

//calling an onChange method in the input tag on parent component
//make a handleChange method that will update state in parent component but lives in child component and pass the updated state as props to the child components
//create modification to user input text by creating a method in child component

export default App;
