import React, { Component } from 'react';


class KanyeRobo extends Component {
    render() {
      return(

      <>
      {/* calling a method and passing the information from the input */}
      <h1>Kanye Robot</h1> 
      <h2>{`Imma let you speak, but ${ (this.props.roboSpeak) } loves Kanye like Kanye loves Kayne`} ! </h2>
       </>

      )
    }
}

export default KanyeRobo;
