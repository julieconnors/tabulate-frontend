import React, { Component } from 'react';
import HorseContainer from './HorseContainer';
import ServicesContainer from './ServicesContainer';

class Home extends Component {

    render(){
        return(
            <div>
                <HorseContainer />
                <ServicesContainer />
                <button onClick={this.props.handleLogout}>Logout</button>
            </div>
        )
    }
}
    
export default Home;