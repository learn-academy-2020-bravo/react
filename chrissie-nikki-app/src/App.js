import React,{ Component } from 'react';
import Header from './header.js';
import Content from './Content.js';
import Footer from './Footer.js';
import './App.css';


class App extends Component {
  render() {
    return(
      <>
        <Header />
        <Content />
        <Footer />
      </>
    )
  }
}

export default App
