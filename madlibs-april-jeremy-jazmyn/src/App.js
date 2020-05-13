import React from 'react';
import './App.css';

//import the form, so we can nest it in our render
import Form from './components/Form'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      showStory: false,
      form:{
        verb1: '',
        noun1: '',
        adjective1: '',
      }
    }
  }
  
  handleFormUpdate = (formValues) =>{
    this.setState({
      form: formValues,
      showStory: true
    })
  }
  
  clear = () => {
    this.setState({
      showStory: false,
    })
  }
  
  render(){
    return (
        <>
        <div>Hello World</div>
        <div>
          <h2>Please enter some words.</h2>
          <div>
            {/* pass form from state to Madlib component */}
            <Form 
              form={this.state.form} 
              onSubmit={this.handleFormUpdate}
            />
          </div>
        </div>
        
        {/* The Story */}
        {this.state.showStory &&
          <div>
            <div>
              The mouse ran out of the {this.state.form.noun1} and was {this.state.form.verb1}. and she was so {this.state.form.adjective1} 
            </div>
            <button onClick={this.clear}>Clear</button>
          </div>
        }
      </>
    );
  }
}
export default App;

// import React, { Component } from 'react';
// import Form from './components/Form'
// import './App.css';


// class App extends Component {
//   constructor(props){
//     super(props)
//     this.state= {
//       showMadLibs: false,
//       form:{
//         Noun1: "",
//         Verb1: "",
//         Noun2: "",
//         Noun3: "",
//         Adjective1: "",
//         Verb2: "",
//         Adjective2: "",
//         Noun4: ""
//       }
//     }
//   }


//   handleChange = (values) => {
//     this.setState({ form: values, 
//     showMadLibs: true
//     })

//   }

//   clear = () => {
//     this.setState({ showMadLibs: false })
// }

//   render (){
//   return (
//     <>
//     <h1> SadLib </h1>
//     <div>
//       <Form 
//           form={ this.state.form }
//           onSubmit={ this.handleChange }/>
//     </div>
//     </>
//   )
//   }
// }

// export default App;
