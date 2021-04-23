import React, { Component } from 'react';
import TrainingOptions from '../components/trainingOptions/TrainingOptions';
import TrainingOptionsForm from '../components/trainingOptions/TrainingOptionsForm';
import { connect } from 'react-redux';
import { fetchTrainingOptions } from '../actions/fetchTrainingOptions';
import styled from '@emotion/styled'

const DisplayDiv = styled.div`
    background-color: green;
    text-align: center;
    display: flex;

    .form {
        background-color: blue;
        width: 60%;
        margin: 2%;
    }

    .display {
        color: navy;
        text-align: center;
        padding: 2%;
        width: 30%;
        margin: 5%;
    }
`
class TrainingOptionsContainer extends Component {
    
    componentDidMount() {
        this.props.fetchTrainingOptions()
    }
    
    render() {
        return (
            <DisplayDiv className="container">
                <TrainingOptionsForm/>
                <TrainingOptions trainingOptions={this.props.trainingOptions} />
            </DisplayDiv>
        )
    }
}

const mapStateToProps = state => {
    return {
        trainingOptions: state.trainingOptions
    }
}

export default connect(mapStateToProps, { fetchTrainingOptions })(TrainingOptionsContainer);