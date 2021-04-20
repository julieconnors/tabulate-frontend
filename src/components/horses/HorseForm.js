import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addHorse } from '../../actions/addHorse';
import Form from 'react-bootstrap/Form';

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
            <div className="horses-form">
            <h4>Add Horse</h4>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group>
                        <Form.Label>Horse Name</Form.Label>
                        {/* <Form.Control type="text" value={this.state.name} name="name" onChange={this.handleChange}/> */}
                        <input type="text" value={this.state.name} name="name" onChange={this.handleChange}/><br></br>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Owner Name</Form.Label>
                        {/* <Form.Control className="input" type="text" value={this.state.name} name="owner" onChange={this.handleChange}/> */}
                        <input type="text" value={this.state.owner} name="owner" onChange={this.handleChange}/><br></br>
                    </Form.Group>
                    
                    <input type="submit" value="Add Horse"/>
                </Form>
            </div>
        )
    }
}

export default connect(null, { addHorse })(HorseForm);