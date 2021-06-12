import React, { Component } from 'react';
import HorseContainer from './HorseContainer';
import ServicesContainer from './ServicesContainer';

class Home extends Component {
    render(){
        const currentUser = this.props.currentUser.data.attributes
        const horses = currentUser.horses
        const services = currentUser.services

        return(
            <div>
                <HorseContainer horses={horses} />
                <ServicesContainer services={services}/>
            </div>
        )
    }
}
    
export default Home;