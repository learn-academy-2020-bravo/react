import React, { Component } from 'react';
import './App.css';

class Lightbulb extends Component {
    constructor (props) {
      super(props)
      this.state = {

        lightArray: ["white", "yellow"]
      }

    handleChange = () => {
      let lightVar = [] =>

    //  if [0] => add 1 store value
    // if [1] => subtract 1 store value
    return 

      }
    }
  }
    render () {
      return(
        <>
          <div onClick= { this.handleChange}>

            <button  className= "off button"> off
            </button>
            <button  className= "on button"> on
            </button>
          </div>

        </>
      )
    }




}
export default Lightbulb
