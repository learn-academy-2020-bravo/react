import React, { Component } from 'react';


class GoodRobo extends Component  {
    render(){
      return (
        <>
        {/* calling a method and passing the information from the input */}
        <h1>Good Robot says, { `I hear you saying ${ (this.props.roboSpeak) } is that correct?`} </h1>
         </>
      )
    }
}

export default GoodRobo;
