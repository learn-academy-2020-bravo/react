import React, { Component } from 'react';
import './App.css';
import Lightbulb from './Lightbulb.js'
import { Fireworks } from 'fireworks/lib/react'


class App extends Component {
  constructor() {
    super()
    this.state = {
      bulbOn: false,
      // fireworkClass: 'hideFirework',
      fxProps: {
          count: -1,
          interval: 500,
          colors: ['pink', 'purple', 'blue'],
          calc: (props, i) => ({
            ...props,
            x: (i + 1) * (window.innerWidth / 3) - (i + 1) * 100,
            y: 200 + Math.random() * 100 - 50 + (i === 2 ? -80 : 0)
          })
      }
    }
  }

  bulbHandler = () =>{
    // toggle bulb state because switch was clicked
    var currentBulbState = this.state.bulbOn;
    this.setState({bulbOn: !this.state.bulbOn})
    currentBulbState = !this.state.bulbOn;
    // hide/show fireworks depending on bulb on/off
    if (currentBulbState){
      var fireworkProps = {
                count: 3,
                interval: 500,
                colors: ['pink', 'purple', 'blue'],
                calc: (props, i) => ({
                  ...props,
                  x: (i + 1) * (window.innerWidth / 3) - (i + 1) * 100,
                  y: 200 + Math.random() * 100 - 50 + (i === 2 ? -80 : 0)
                })
            };
      this.setState({fxProps: fireworkProps})
    }
    else{
      var fireworkProps = {
                count: -1,
                interval: 500,
                colors: ['pink', 'purple', 'blue'],
                calc: (props, i) => ({
                  ...props,
                  x: (i + 1) * (window.innerWidth / 3) - (i + 1) * 100,
                  y: 200 + Math.random() * 100 - 50 + (i === 2 ? -80 : 0)
                })
            };
      this.setState({fxProps: fireworkProps})
    }
  }

  render(){
    return(
      <div>
        <Fireworks {...this.state.fxProps}/>
        <Lightbulb bulbHandler={this.bulbHandler}/>
        <footer>
        Created by Thomas & Ara
        </footer>
      </div>
    );
  }
}



export default App;
