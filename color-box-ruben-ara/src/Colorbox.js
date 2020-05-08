import React, {Component} from 'react';

import './App.css';

class Colorbox extends Component {
  constructor(props) {
      super(props)
         this.state = {
             colorNames: ["green", "blue", "pink", "red", "purple", "yellow"],
             
             currentColor: " "
         }
         
  }

  
  
  
  handleChange = () => {
    // let elem = document.getElementById('colored')
    // elem.style.backgroundColor = this.state.currentColor
      let randomColor = Math.floor(Math.random() * this.state.colorNames.length)
      this.setState({currentColor: this.state.colorNames[randomColor]})
  }

  render() {
    return (
      <div>
          <div id="colored" style = {{backgroundColor: this.state.currentColor}}>
              <button onClick = {this.handleChange}>ClickMe</button>
              {this.state.currentColor}
              
          </div>
      </div>
    )
  }
}


export default Colorbox;