import React from 'react'

const Greeter = (props) => {
  // Greeter is a dumb/display component that does not hold state

    return (
      // calling a method and passing the information from the input
      <h1>Hello, { props.name }! </h1>
    )
}

export default Greeter