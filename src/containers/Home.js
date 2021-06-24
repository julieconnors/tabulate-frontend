import React, { Component } from 'react';
import HorseContainer from './HorseContainer';
import ServicesContainer from './ServicesContainer';

class Home extends Component {

    render(){
        const currentUser = this.props.currentUser
        const horses = currentUser.horses
        const services = currentUser.services
        return(
            <div>
                <HorseContainer horses={horses} currentUser={this.props.currentUser}/>
                <ServicesContainer services={services}/>
                <button onClick={this.props.handleLogout}>Logout</button>
            </div>
        )
    }
}
    
export default Home;