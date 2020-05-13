import React, { Component } from 'react';


const Adjectives = (props) => {
  return(
      <>

        <input onChange = {props.handleChange}
          value= {props.adjectives}/> An Adjective

      </>
  )

}

export default Adjectives;
