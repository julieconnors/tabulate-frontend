import React, { Component } from 'react';
import { fetchOwners } from '../actions/fetchOwners';
import { fetchRides } from '../actions/fetchRides';
import { fetchTrainingOptions } from '../actions/fetchTrainingOptions';
import { connect } from 'react-redux';
import StatementForm from '../components/statements/StatementForm';
import styled from '@emotion/styled'

const StatementDisplay = styled.div`
    text-align: center;
    background-color: #2F5061;
    color: #F4EAE6;
    padding: 2%;
    table {
        text-align: center;
    }
`
class StatementContainer extends Component {
    
    componentDidMount() {
        this.props.fetchOwners()
        this.props.fetchRides()
        this.props.fetchTrainingOptions()
    }
    
    render() {
        return (
            <StatementDisplay>
                <StatementForm owners={this.props.owners} rides={this.props.rides} trainingOptions={this.props.trainingOptions}/>
            </StatementDisplay>
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

export default connect(mapStateToProps, { fetchOwners, fetchRides, fetchTrainingOptions })(StatementContainer);