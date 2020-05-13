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
    console.log(e)
    };
  
  handleFormSubmit = (e) => {
    e.preventDefault();
    };
  
  render () {
    return (
      <>
        {/* text inputs for each*/}
          <Nouns />
          <br/>
          <Nouns />
          <br/>
          <Nouns />
          <br/>
          <Adjectives />
          <br/>
          <Adverbs />
          <br/>
          <Verbs />
          <br/>
          <Pronouns />
          <br/>
          <button type ="submit" id="button"> Submit </button>
      </>

  )
}
}
export default App;
