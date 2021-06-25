import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addService } from '../../actions/addService';

class ServicesForm extends Component {

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
        let service = {
            label: this.state.label,
            fee: parseInt(this.state.fee),
            userId: localStorage.id
        }
        this.props.addService(service)
        this.setState({
            label: "",
            fee: 0
        })
    }

    render() {
        return (
            <div className="form">
                <h4>Set Pricing</h4>
                    <form onSubmit={this.handleSubmit}>
                            <label>Service</label>
                            <input type="text" value={this.state.label} name="label" onChange={this.handleChange} /><br></br>
                            <label>Fee</label>
                            <input type="text" value={this.state.fee} name="fee" onChange={this.handleChange} /><br></br>

                        <input type="submit" value="Add"/>

                    </form>
            </div>
        )
    }
}

export default connect(null, { addService })(ServicesForm);