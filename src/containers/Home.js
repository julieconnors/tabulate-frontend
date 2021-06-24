import React, { Component } from 'react';
import HorseContainer from './HorseContainer';
import ServicesContainer from './ServicesContainer';

class Home extends Component {
    
    handleClick = () => {
        localStorage.removeItem('token')
    }

    render(){
        const currentUser = this.props.currentUser
        const horses = currentUser.horses
        const services = currentUser.services

        

        return(
            <div>
                <HorseContainer horses={horses} />
                <ServicesContainer services={services}/>
                <button onClick={this.handleClick}>Logout</button>
            </div>
        )
    }
}
    
export default Home;