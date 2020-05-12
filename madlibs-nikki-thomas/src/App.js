import React, {Component} from 'react';
import Greeter from './components/Greeter'
import './App.css';

import UserInput from './components/UserInput'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      name: ["","","","","","","",""]
    }
  }

  updateName = (name) => {
    this.setState({ name: name })
  }

  render() {
    return (
      <>
      <Greeter name={this.state.name[0]} />
        <UserInput 
          name={this.state.name[0]}
          updateName={ this.updateName}
          
          />
           <UserInput 
          name={this.state.name[1]}
          updateName={ this.updateName}
          
          />
           <UserInput 
          name={this.state.name[2]}
          updateName={ this.updateName}
          
          />
           <UserInput 
          name={this.state.name[3]}
          updateName={ this.updateName}
          
          />
           <UserInput 
          name={this.state.name[4]}
          updateName={ this.updateName}
          
          />
           <UserInput 
          name={this.state.name[5]}
          updateName={ this.updateName}
          
          />
           <UserInput 
          name={this.state.name[6]}
          updateName={ this.updateName}
          
          />
           <UserInput 
          name={this.state.name[7]}
          updateName={ this.updateName}
          
          />
      </>
    )
  }
}

export default App;
