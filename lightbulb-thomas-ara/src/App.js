import React, { Component } from 'react';
import './App.css';
import Lightbulb from'./Lightbulb'


class App extends Component {
  constructor() {
    super()
    this.state = {

    }
  }

  render(){
    return(
      <>
        <Lightbulb />
        <footer>
        Created by Thomas & Ara
        </footer>
      </>
    );
  }
}




export default App;
