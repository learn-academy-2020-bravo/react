import React, { Component } from 'react';


class GoodRobo extends Component  {
    render(){
      return (
        <>
        {/* calling a method and passing the information from the input */}
        <h1>Good Robot </h1>
        <h2> { `I hear you saying, ${ (this.props.roboSpeak) }, is that correct?`} </h2>
         </>
      )
    }
}

export default GoodRobo;
