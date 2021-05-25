import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'; 
import NavBar from './components/NavBar'
import DaySheetContainer from './containers/DaySheetContainer';
import StatementContainer from './containers/StatementContainer'
import Home from './containers/Home'

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
        <Router>
          <NavBar />
            <Route exact path="/" component={Home}/>
            <Route exact path="/day-sheet" component={DaySheetContainer} />
            <Route exact path="/statements" component={StatementContainer} />
        </Router>
      </div>
    );
}

export default App;
