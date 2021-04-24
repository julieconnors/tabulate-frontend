import React, { Component } from 'react';
import HorseContainer from './containers/HorseContainer';
import TrainingOptionsContainer from './containers/TrainingOptionsContainer';
// import ErrorBoundary from './components/ErrorBoundary'
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        {/* <ErrorBoundary> */}
          <HorseContainer />
          <TrainingOptionsContainer />
        {/* </ErrorBoundary> */}
      </div>
    );
  }
  
}

export default App;
