import React, { Component } from 'react';
import './App.css';
import Offswitch from './images/Offswitch.jpeg'
import ONswitch from './images/ONswitch.jpg'



class Lightswitch extends Component {
  constructor(props) {
    super(props)
    this.state = {
      switchImage: Offswitch
    }
  }

  handleChange = () => {
    if(this.state.switchImage === ONswitch) {
      this.setState({switchImage: Offswitch})

    }
    else {
      this.setState({switchImage: ONswitch})

    }
  }



  render(){
    return(
      <>
        //<img src = {this.state.switchImage} onClick = {this.handleChange}/>
      </>
    )
  }
}



export default Lightswitch;
