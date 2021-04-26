import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'; 
import NavBar from './components/NavBar'
import DaySheetContainer from './containers/DaySheetContainer';
import StatementContainer from './containers/StatementContainer'
import Home from './containers/Home'

import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Router>
          <NavBar />
            <Route exact path="/" component={Home}/>
            <Route exact path="/day-sheet" component={DaySheetContainer} />
            <Route exact path="/statements" component={StatementContainer} />
        </Router>
      </div>
    );
  }
  
}

export default App;
