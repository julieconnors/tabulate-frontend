import React, { Component } from 'react';
import { fetchRides } from '../actions/fetchRides';
import { connect } from 'react-redux';

class Rides extends Component {

    componentDidMount() {
        this.props.fetchRides()
    }
    render() {
        const rides = this.props.rides.map(ride => <p key={ride.id}>{ride.id}</p>)
        console.log(this.props.rides)
        return (
            <div>
                {rides}
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