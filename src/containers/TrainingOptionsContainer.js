import React, { Component } from 'react';
import TrainingOptions from '../components/trainingOptions/TrainingOptions';
import TrainingOptionsForm from '../components/trainingOptions/TrainingOptionsForm';
import { connect } from 'react-redux';
import { fetchTrainingOptions } from '../actions/fetchTrainingOptions';
import styled from '@emotion/styled'

const DisplayDiv = styled.div`
    background-color: #4297A0;
    text-align: center;
    display: flex;

    .form {
        background-color: #F4EAE6;
        width: 60%;
        margin: 2%;
        padding: 5%;
    }

    .display {
        color: #F4EAE6;
        text-align: left;
        padding: 2%;
        width: 30%;
        margin: 5%;
        td {
            width: 150px;
        }
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