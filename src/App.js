import 'bootstrap/dist/css/bootstrap.css';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
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
