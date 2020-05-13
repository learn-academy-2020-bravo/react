import React, { Component } from 'react'
import Paragraph from './components/paragraph'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
      this.state = {
        form: {
                  noun: "",
                  adj: "",
                  sport: "",
                  weather: "",
                  number: "",
                  bodyPlural: "",
                  verb1: "",
                  verb2: "",
                  verb3: "",
        },
        showStory: false
      }
  }

handleChange = (e) => {
  this.state.form[e.target.name] = e.target.value
  // accesses the nested object in state, we destructure form based off the input name, so each name matches the value where it should be updating in state
  //once targeted the the "event" gives us the user input that gets assigned to values in form object.. 
  this.setState({form: this.state.form})

}

changeStory = () => {
  this.setState( {showStory: true} )
}

  render() {
    return (
  
    <div>
      <h1>Mad Libs Challenge!!</h1>
      <div id="input">
        <div>
      <input name = "noun" 
        placeholder = "Noun"
        value = { this.state.form.noun }
        onChange= {this.handleChange}
      />
      </div>
      <div>
       <input name="adj" 
        placeholder = "Adj"
        value = { this.state.form.adj }
        onChange= {this.handleChange}
      />
      </div>
      <div>
       <input name="sport" 
        placeholder = "Sport"
        value = { this.state.form.sport }
        onChange= {this.handleChange}
      />
      </div>
      <div>
       <input name="weather" 
        placeholder = "Weather"
        value = { this.state.form.weather }
        onChange= {this.handleChange}
      />
      </div>
       <input name="number" 
        placeholder = "Number"
        value = { this.state.form.number }
        onChange= {this.handleChange}
      />
       <input name="bodyPlural" 
        placeholder = "Body Parts"
        value = { this.state.form.bodyPlural }
        onChange= {this.handleChange}
      />
       <input name="verb1" 
        placeholder = "First Verb"
        value = { this.state.form.verb1 }
        onChange= {this.handleChange}
      />
       <input name="verb2" 
        placeholder = "Second Verb"
        value = { this.state.form.verb2 }
        onChange= {this.handleChange}
      />
       <input name="verb3" 
        placeholder = "Third Verb"
        value = { this.state.form.verb3 }
        onChange= {this.handleChange}
      />
      </div>
      
       <button onClick = { this.changeStory }>Click here
       </button>   
       {/* click here button is considered a truthy value when clicked on (this is called a conditional render*/}
       {this.state.showStory && < Paragraph form = {this.state.form }/>}
       {/* if both true it will render the paragraph */}
    </div>
       )
  }
}

export default App;
