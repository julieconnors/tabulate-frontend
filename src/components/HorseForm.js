import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addHorse } from '../actions/addHorse';

class HorseForm extends Component {

    state = {
        name: "",
        owner: ""
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        // dispatch action to add horse
        
        this.props.addHorse(this.state)
        this.setState({
            name: "",
            owner: ""
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Horse Name</label>
                    <input type="text" value={this.state.name} name="name" onChange={this.handleChange}/><br></br>
                    <label>Owner Name</label>
                    <input type="text" value={this.state.owner} name="owner" onChange={this.handleChange}/><br></br>
                    <input type="submit" value="Add Horse"/>
                </form>
            </div>
        )
    }
}

export default connect(null, { addHorse })(HorseForm);