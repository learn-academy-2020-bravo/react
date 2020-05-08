import React, { Component } from 'react'
import Content from './Content'
import Footer from './Footer'
import './App.css';


// Im going ot have to make 2 different .js files // Content.js and Footer.js
class App extends Component {
  render() {
  return (
    <div>
    <h1>About Us</h1>
      <Content />
      <Footer />
    </div>
    );
  }
}

export default App;
