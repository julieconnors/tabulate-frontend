import React, { Component } from 'react';
class Rides extends Component {

    render() {
        const filteredRides = this.props.rides.filter(ride => ride.attributes.date === this.props.date)

        const rideList = filteredRides.map(ride => {
            return (
                <tr key={ride.id} className="todays-rides">
                    <td>{ride.attributes.horse.name}</td>
                    <td>{ride.attributes.training_option.label}</td>
                </tr>)
    })
        return (
            <div className='rides'>
                <h4>Today's Rides</h4>
                <table>
                    <tbody>
                        {rideList}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Rides;