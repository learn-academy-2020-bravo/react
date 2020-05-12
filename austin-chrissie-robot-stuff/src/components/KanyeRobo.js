import React, { Component } from 'react';


class KanyeRobo extends Component {
    render() {
      return(

      <>
      {/* calling a method and passing the information from the input */}
      <h1>Good Robot says,  `Ima Let you speak but ${ (this.props.roboSpeak) } loves kanye`} </h1>
       </>

      )
    }
}

export default KanyeRobo;
