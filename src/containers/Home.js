import React from 'react';
import HorseContainer from './HorseContainer';
import ServicesContainer from './ServicesContainer';
import { BrowserRouter as Router, Route } from 'react-router-dom'; 
import NavBar from './components/NavBar'
import DaySheetContainer from './containers/DaySheetContainer';
import StatementContainer from './containers/StatementContainer'
import Home from './containers/Home'
// import ErrorBoundary from '../components/ErrorBoundary'

const Home = () => (
    <div>
        <Router>
            <NavBar />
            {/* <Route exact path="/" component={Home}/> */}
            <Route exact path="/day-sheet" component={DaySheetContainer} />
            <Route exact path="/statements" component={StatementContainer} />
        </Router>
        {/* <ErrorBoundary> */}
            <HorseContainer />
            <ServicesContainer />
        {/* </ErrorBoundary> */}
    </div>
)

export default Home;