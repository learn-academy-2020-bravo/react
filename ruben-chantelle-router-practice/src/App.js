import React from 'react';
import Home from './pages/home.js'
import Silence from './pages/SilenceoftheLambs.js'
import Alien from './pages/Alien.js'
import Inception from './pages/Inception.js'
import Thing from './pages/TheThing.js'
import Vendetta from './pages/VforVendetta.js'
import Oopsie from './pages/Oopsie.js'
import './App.css';
import{
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from "react-router-dom"
function App() {
  return (
    <Router>
    <Home/>
    <nav>
      <ul>
        <li>
          <Link to="/VforVendetta">V for Vendetta</Link>
        </li>
        <li>
          <Link to="/TheThing">The Thing</Link>
        </li>
        <li>
          <Link to="/Inception">Inception</Link>
        </li>
        <li>
          <Link to="/SilenceoftheLambs">Silence of the Lambs</Link>
        </li>
        <li>
          <Link to="/Alien">Alien</Link>
        </li>
      </ul>
    </nav>
    <Switch>
      <Route path="/SilenceoftheLambs" component={ Silence }/>
      <Route path="/Alien" component={ Alien }/>
      <Route path="/Inception" component={ Inception }/>
      <Route path="/TheThing" component={ Thing }/>
      <Route path="/VforVendetta" component={ Vendetta }/>
      <Route component={ Oopsie }/>
    </Switch>

    </Router>
  )
}

export default App;
