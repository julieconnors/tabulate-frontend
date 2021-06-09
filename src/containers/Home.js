import React from 'react';
import HorseContainer from './HorseContainer';
import ServicesContainer from './ServicesContainer';
import { BrowserRouter as Router, Route } from 'react-router-dom'; 
import NavBar from '../components/NavBar'
import DaySheetContainer from './DaySheetContainer';
import StatementContainer from './StatementContainer'
// import ErrorBoundary from '../components/ErrorBoundary'

const Home = () => (
    <div>
        <Router>
            <NavBar />
            <Route exact path="/account" component={Home}/>
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