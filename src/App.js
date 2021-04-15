import './App.css';
import React, { Component } from 'react';
import DaySheetContainer from './containers/DaySheetContainer';
// import OwnerStatementContainer from './containers/OwnerStatementContainer';

class App extends Component {

  render() {
    return (
      <div className="App">
        <DaySheetContainer/>
        {/* <OwnerStatementContainer/> */}
      </div>
    );
  }
  
}

export default App;
