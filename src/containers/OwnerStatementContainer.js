import React, { Component } from 'react';
import { fetchOwners } from '../actions/fetchOwners';
import { fetchRides } from '../actions/fetchRides'
import { fetchTrainingOptions } from '../actions/fetchTrainingOptions'

import { connect } from 'react-redux';
import OwnerStatementForm from '../components/OwnerStatementForm';
class OwnerStatementContainer extends Component {
    
    componentDidMount() {
        this.props.fetchOwners()
        this.props.fetchRides()
        this.props.fetchTrainingOptions()
    }
    
    render() {
        return (
            <div>
                <OwnerStatementForm owners={this.props.owners} rides={this.props.rides} trainingOptions={this.props.trainingOptions}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        owners: state.owners,
        rides: state.rides,
        trainingOptions: state.trainingOptions
    }
}

export default connect(mapStateToProps, { fetchOwners, fetchRides, fetchTrainingOptions })(OwnerStatementContainer);