import React, { Component } from 'react';
import TrainingOptions from '../components/trainingOptions/TrainingOptions';
import TrainingOptionsForm from '../components/trainingOptions/TrainingOptionsForm';
import { connect } from 'react-redux';
import { fetchTrainingOptions } from '../actions/fetchTrainingOptions';

class TrainingOptionsContainer extends Component {
    
    componentDidMount() {
        this.props.fetchTrainingOptions()
    }
    
    render() {
        return (
            <div>
                <TrainingOptions trainingOptions={this.props.trainingOptions} />
                <TrainingOptionsForm/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        trainingOptions: state.trainingOptions
    }
}

export default connect(mapStateToProps, { fetchTrainingOptions })(TrainingOptionsContainer);