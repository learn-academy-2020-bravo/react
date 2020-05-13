import React, { Component } from 'react';


const Verbs = (props) => {
  return(
      <>

        <input onChange = {props.handleChange}
          value= {props.verbs}/> A Verb

      </>
  )

}

export default Verbs;
