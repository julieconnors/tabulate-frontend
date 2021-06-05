import React from 'react';
import Login from './components/Login'
import Signup from './components/Signup'
import Welcome from './components/Welcome'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 
import { Link } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.css';

function App() {

    function switchMode() {
      let toggleButton = document.querySelector('.toggle')
      let background = document.querySelector('.App').style

      if (background.backgroundColor ===  "black") {
          background.backgroundColor = "white"
        } else {
          background.backgroundColor = "black"
        }

      if (toggleButton.innerText === "Dark Mode") {
          toggleButton.innerText = "Light Mode"
        } else {
          toggleButton.innerText = "Dark Mode"
        }
      }

    return (
      <div className="App">
        <button className={"toggle"} onClick={() => switchMode()}>Dark Mode</button>
        {/* <Welcome /> */}
        <Router>
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
          </Switch>
        </Router>

      </div>
    );
}

export default App;
