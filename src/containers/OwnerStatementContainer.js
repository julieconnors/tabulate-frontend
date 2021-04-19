import React, { Component } from 'react';
import { fetchOwners } from '../actions/fetchOwners';
import { fetchRides } from '../actions/fetchRides'
import { connect } from 'react-redux';
import OwnerStatementForm from '../components/OwnerStatementForm';
class OwnerStatementContainer extends Component {
    
    componentDidMount() {
        this.props.fetchOwners()
        this.props.fetchRides()
    }
    
    render() {
        return (
            <div>
                <OwnerStatementForm owners={this.props.owners} rides={this.props.rides}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        owners: state.owners,
        rides: state.rides
    }
}

export default connect(mapStateToProps, { fetchOwners, fetchRides })(OwnerStatementContainer);