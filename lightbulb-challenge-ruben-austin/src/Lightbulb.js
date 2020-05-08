import React, { Component } from 'react';
import './App.css';

class Lightbulb extends Component {
    constructor (props) {
      super(props)
      this.state = {

        lightArray: ["white", "yellow"],
        onOff: " "
      }
    }
    handleChange = () => {
    //   let lightVar = () =>
    //  if [0] => add 1 store value
    // if [1] => subtract 1 store value
    // return 
    //   }
      let off = this.state.lightArray[0]

      let on = this.state.lightArray[1]
      if(off == "white") {
        this.setState({onOff: this.state.lightArray[1]})
      } else if(on == "yellow") {
        this.setState({onOff: this.state.lightArray[0]})
      }
    }

    render () {
      return(
        <>
          <div onClick= { this.handleChange} class = "box" style = {{backgroundColor: this.state.onOff}}>

            <button  className= "off button"> off
            </button>
            {/* <button  className= "on button"> on
            </button> */}
          </div>

        </>
      )
    }




}
export default Lightbulb
