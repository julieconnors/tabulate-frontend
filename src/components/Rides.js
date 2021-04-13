import React, { Component } from 'react';
import { fetchRides } from '../actions/fetchRides';
import { connect } from 'react-redux';

class Rides extends Component {

    componentDidMount() {
        this.props.fetchRides()
    }

    // filterRides() {
    //     this.props.rides.filter(ride => ride.attributes.date === this.props.date)
    // }

    render() {
        const filteredRides = this.props.rides.filter(ride => ride.attributes.date === this.props.date)
        const rideList = filteredRides.map(ride => {
            return (
                <tr key={ride.id}>
                    <td>{ride.attributes.horse_id}</td>
                    <td>training option</td>
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

const mapStateToProps = state => {
    return {
        rides: state.rides
    }
}

export default connect(mapStateToProps, { fetchRides })(Rides);