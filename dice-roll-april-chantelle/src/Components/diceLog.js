import React, { Component } from 'react';

class DiceLog extends Component {
  render (){  
    let rolled = this.props.rollLog.map(number => {
      return(
      <li> { number } </li>
      )
    })
    return (
      <React.Fragment>
         <p class="dicelog">Dice Log:</p>
          <ul>
            <li> {rolled} </li>
          </ul>
      </React.Fragment>
    );
  }
}

export default DiceLog;


// this is what we were working towards Chantelle
// class DiceLog extends Component {

// import React, { Component } from 'react';
  
//   render (){  
//     let eachItem = this.props.rollLog.map(item => {
//       return(
//         <li>{ item }</li>
//       )
//       })
//     }

//     return (
//       <React.Fragment>
//          <h4>Dice Log: { this.props.rollLog }</h4>
//          <ul>
//           <li>{ item }</li>
//          </ul>
//       </React.Fragment>
//     )
//   }


// export default DiceLog;

