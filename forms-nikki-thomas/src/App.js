import React, {Component} from 'react';

import './App.css';

import Greeter from './components/Greeter'

import NameInput from './components/NameInput'

class App extends Component{
  constructor(props){
    super(props)
   
    this.state = {
      name: ""
    }
  }

  updateName = (name) => {
    
    this.setState({ name: name })
  }

  render() {
    return (
      <>
      <NameInput
          name={ this.state.name }
          updateName={ this.updateName }
        />
      <div>
        <h3> Good Robot</h3>
        <Greeter
          name={ this.state.name }
        />
         </div>
      <div>
      <h3> Bad Robot</h3>
      <Greeter
        name={ this.state.name }
      />
      </div>
      <div>
      <h3> Kanyebot 5000 Robot</h3>
      <Greeter
        name={ this.state.name }
      />
      </div>
      </>
    )
  }
}

export default App;
