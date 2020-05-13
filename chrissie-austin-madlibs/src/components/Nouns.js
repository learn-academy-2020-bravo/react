import React, { Component } from 'react';


const Nouns = (props) => {
  return(
      <>

        <input onChange = {props.handleChange}
          value= {props.noun}/> A Noun
          

      </>
  )}

export default Nouns;
