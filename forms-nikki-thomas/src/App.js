import React, {Component} from 'react';
import './App.css';
import Goodrobot from './components/Goodrobot'
import Badrobot from './components/Badrobot'
import Kanye from './components/Kanye'
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
        <h1>Robo Active Listening</h1>
        <div> Say something
          <NameInput
              name={ this.state.name }
              updateName={ this.updateName }
          />
        </div>
        <div>
          <h3> Good Robot</h3>
          <Goodrobot
            name={ this.state.name }
          />
           </div>
        <div>
          <h3> Bad Robot</h3>
          <Badrobot
            name={ this.state.name }
          />
        </div>
        <div>
          <h3> Kanyebot 5000 Robot</h3>
          <Kanye
            name={ this.state.name }
          />
        </div>
      </>
    )
  }
}

export default App;
