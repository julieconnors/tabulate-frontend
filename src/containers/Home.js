import React, { Component } from 'react';
import HorseContainer from './HorseContainer';
import ServicesContainer from './ServicesContainer';
import ErrorBoundary from '../components/ErrorBoundary'

class Home extends Component {

    render() {
        return (
            <div>
                <ErrorBoundary>
                    <HorseContainer />
                    <ServicesContainer />
                </ErrorBoundary>
            </div>
        )
    }

}

export default Home;