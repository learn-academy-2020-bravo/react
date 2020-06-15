import React from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import "./App.css"

import Music from "./pages/Music"
import Shows from "./pages/Shows"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"

const App = () => {
  return (
      <Router>
          <div>
              <h1>Welcome to April & Aaron's Website</h1>
              <p>We will have some of our favorites songs and t.v. shows listed here</p>
              <nav>
                  <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/music">Music</Link>
                    </li>
                    <li>
                        <Link to="/shows">Shows</Link>
                    </li>
                  </ul>
              </nav>

            <Switch>
              <Route path="/" exact component={ Home } />
              <Route path="/music" component={ Music } />
              <Route path="/shows" component={ Shows } />
              <Route component={ NotFound } />
            </Switch>
          </div>
      </Router>
  )
}
export default App;

