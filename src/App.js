import './App.css';
import React, { Component } from 'react';
import ErrorBoundary from './components/ErrorBoundary'
import DaySheetContainer from './containers/DaySheetContainer';
// import OwnerStatementContainer from './containers/OwnerStatementContainer';

class App extends Component {

  render() {
    return (
      <div className="App">
        <ErrorBoundary>

        <DaySheetContainer/>
        {/* <OwnerStatementContainer/> */}
        </ErrorBoundary>

      </div>
    );
  }
  
}

export default App;
