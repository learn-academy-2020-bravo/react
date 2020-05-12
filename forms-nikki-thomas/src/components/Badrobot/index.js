import React from 'react'

const Badrobot = (props) => {

  const gibberish = (string) => {
    return string.split('').map((value,index) => {
      if (index % 3 == 0) {
        return 'B'
      } else if (index % 3 == 1) {
        return 'L'
      } else return 'A'
    }).join('')
  }

    return (
      <h1>I hear you saying, { gibberish(props.name) }.  Is that correct? </h1>
    )
}

export default Badrobot
