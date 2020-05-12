import React, { Component } from 'react';
import Nouns from './components/Nouns.js'
import Adjectives from './components/Adjectives.js'
import Adverbs from './components/Adverbs.js'
import Verbs from './components/Verbs.js'
import Pronouns from './components/Pronouns.js'
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
      this.state ={
        noun: noun,
        adverb: adverb,
        adjective: adjective,
        verb: verb,
        pronoun: pronoun,
      };

      handleChange(e) {
        this.setState({value: e.target.value});
      };
      handleSubmit(e) {
        alert('Your madlib is: ' + this.state.value)
      };



}

  render(){
  return (
    <>
        <header> </header>
        <body/>
        {/* text inputs for each*/}
        <Nouns /> <input type="text" name="Nouns">
        <Adjectives input type="text" name="Adjectives" />
        <Adverbs input type="text" name="Adverbs" />
        <Verbs input type="text" name="Verbs" />
        <Pronouns input type="text" name="Pronouns" />

    </>
  )}



}
export default App;
