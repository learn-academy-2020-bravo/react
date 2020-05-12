import React, { Component } from 'react';


const Pronouns = (props) => {
  return(
      <>

        <input onChange = {props.handleChange}
          value= {props.pronoun}/> A Pronoun

      </>
  )
}


export default Pronouns;
