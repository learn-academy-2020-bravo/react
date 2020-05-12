import React, { Component } from 'react';
import Nouns from './components/Nouns.js'
import Adjectives from './components/Adjectives.js'
import Adverbs from './components/Adverbs.js'
import Verbs from './components/Verbs.js'
import Pronouns from './components/Pronouns.js'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
      this.state = {
        noun: "",
        adverb: "",
        adjective: "",
        verb: "",
        pronoun: "",
      };
}
  handleChange = (e) => {
    this.setState({value: e.target.value});
    };
  handleFormSubmit = (e) => {
    event.preventDefault();
    };
}
  render () {
    return (
      <>
        {/* text inputs for each*/}
          <Nouns /> 
          <Adjectives />
          <Adverbs />
          <Verbs />
          <Pronouns />
      </>
   
  )}
}
export default App;
