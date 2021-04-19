import './App.css';
import React, { Component } from 'react';
import HorseContainer from './containers/HorseContainer';
import TrainingOptionsContainer from './containers/TrainingOptionsContainer';
// import ErrorBoundary from './components/ErrorBoundary'

class App extends Component {

  render() {
    return (
      <div className="App">
        <HorseContainer />
        <TrainingOptionsContainer />
        {/* <ErrorBoundary> */}

        {/* </ErrorBoundary> */}

      </div>
    );
  }
  
}

export default App;
