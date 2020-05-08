import React,{ Component } from 'react';
import Header from './header.js';
import Content from './Content.js';
import About from './About.js';
import Footer from './Footer.js';
import './App.css';


class App extends Component {
  render() {
    return(
      <>
        <Header />
        <Content />
        <About />
        <Footer />
      </>
    )
  }
}

export default App
