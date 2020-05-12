import React, { Component } from 'react';
import Form from './components/Form'
import './App.css';


class App extends Component {
  constructor(props){
    super(props)
    this.state= {
      showMadLibs: false,
      form:{
        Noun1: "",
        Verb1: "",
        Noun2: "",
        Noun3: "",
        Adjective1: "",
        Verb2: "",
        Adjective2: "",
        Noun4: ""
      }
    }
  }


  updateName = (values) => {
    this.setState({ form: values })
  }

clear = () => {
  this.setState({ showMadLibs: false })
}

  render (){
  return (
    <>
    <h1> SadLib </h1>
    <Form form={this.state} />
      <form>

      </form>
    </>
  )
  }
}

// As a user I can see a page with 8 different text inputs with labels
//As a user I can fill out the inputs
//Once submit button is pressed user sees a pragraph with the words inputed
//clear button to restart the madlib
//need onclick event
//two inputs buttons to submit and clear
//paragraph thats going to get populated with the user input
//
export default App;
