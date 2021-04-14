import React, { Component } from 'react';
class Rides extends Component {

    // filterRides() {
    //     this.props.rides.filter(ride => ride.attributes.date === this.props.date)
    // }

    render() {
        const filteredRides = this.props.rides.filter(ride => ride.attributes.date === this.props.date)

        const rideList = filteredRides.map(ride => {
            return (
                <tr key={ride.id}>
                    <td>{ride.attributes.horse.name}</td>
                    <td>{ride.attributes.training_option.label}</td>
                </tr>)
    })
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <td>Horse</td>
                            <td>Option</td>
                        </tr>
                    </thead>
                    <tbody>
                        {rideList}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Rides;