import React, { Component }from 'react';


const Story = (props) => {
  return (
    <>

    <p>Just waking up in the {props.location}, gotta thank {props.famousPerson}.
    I don't know, but today seems kinda {props.adjective}. No {props.sound} from the {props.animal1}, no smog, and momma cooked a breakfast with no {props.animal2}.</p>
    </>

  );
}




export default Story;
