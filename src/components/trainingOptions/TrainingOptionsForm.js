import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTrainingOption } from '../../actions/addTrainingOption';
import Form from 'react-bootstrap/Form';

class TrainingOptionsForm extends Component {

    state = {
        label: "",
        fee: 0
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addTrainingOption(this.state)
        this.setState({
            label: "",
            fee: 0
        })
    }

    render() {
        return (
            <div className="options-form">
                <h4>Set Pricing</h4>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group>
                            <Form.Label>Training Option</Form.Label>
                            <input type="text" value={this.state.label} name="label" onChange={this.handleChange} /><br></br>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Fee</Form.Label>
                            <input type="text" value={this.state.fee} name="fee" onChange={this.handleChange} /><br></br>
                        </Form.Group>

                        <input type="submit" value="Add"/>

                    </Form>
            </div>
        )
    }
}

export default connect(null, { addTrainingOption })(TrainingOptionsForm);