import React, { Component } from 'react';
import './App.css';

const GoodRobo = (props) => {
    render() {
      return (
        <>
        {/* calling a method and passing the information from the input */}
        <h1>Good Robot says, { `I hear you saying ${ (props.roboSpeak) } is that correct?`} </h1>
         </>
      )
    }
}

export default GoodRobo;