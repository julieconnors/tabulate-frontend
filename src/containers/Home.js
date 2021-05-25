import React from 'react';
import HorseContainer from './HorseContainer';
import ServicesContainer from './ServicesContainer';
// import ErrorBoundary from '../components/ErrorBoundary'

const Home = () => (
    <div>
        {/* <ErrorBoundary> */}
            <HorseContainer />
            <ServicesContainer />
        {/* </ErrorBoundary> */}
    </div>
)

export default Home;