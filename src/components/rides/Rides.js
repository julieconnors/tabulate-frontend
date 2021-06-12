import React, { Component } from 'react';
import styled from '@emotion/styled'

const TodaysRides = styled.div`;
    background-color: #2F5061;
    color: #F4EAE6;
    text-align: center;
    margin: 5%;
    padding: 2%;
    .table {
        width: 50%;
        margin-left: 25%;
    }
`
class Rides extends Component {
    render() {
        const filteredRides = this.props.rides.filter(ride => ride.attributes.date === this.props.date)

        const rideList = filteredRides.map(ride => {
            return (
                <div className="tr" key={ride.id}>
                    <span className='td'>{ride.attributes.horse.name}</span>
                    <span className='td'>{ride.attributes.service.label}</span>
                    <span className='td'><button>Edit</button></span>
                    <span className='td'><button>Delete</button></span>
                </div>)
    })
        return (
            <TodaysRides>
                <h4>Today</h4>
                <div className='table'>
                        {rideList}
                </div>
            </TodaysRides>
        )
    }
}

export default Rides;