import React, { Component } from 'react';
import './App.css';
import Lightbulb from './Lightbulb.js'


class App extends Component {
  constructor() {
    super()
  }
  render(){
    return(
      <div>
        <Lightbulb />
        <footer>
        Created by Thomas & Ara
        </footer>
      </div>
    );
  }
}



export default App;
