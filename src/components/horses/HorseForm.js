import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addHorse } from '../../actions/addHorse';

class HorseForm extends Component {

    state = {
        name: "",
        owner: ""
    }

    // arrow function syntax binds this to HorseForm component instead of handleChange function context
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        // dispatch action to add horse
        
        this.props.addHorse(this.state) 
        // calling action creator to dispatch 
        this.setState({
            name: "",
            owner: ""
        })
    }

    render() {
        return (
            <div className="form">
                <h4>Add Horse</h4>
                    <form onSubmit={this.handleSubmit}>
                            <label>Horse Name</label>
                            <input type="text" value={this.state.name} name="name" onChange={this.handleChange}/><br></br>
                            <label>Owner Name</label>
                            {/* <Form.Control className="input" type="text" value={this.state.name} name="owner" onChange={this.handleChange}/> */}
                            <input type="text" value={this.state.owner} name="owner" onChange={this.handleChange}/><br></br>
                    
                        <input type="submit" value="Add Horse"/>
                    </form>
            </div>
        )
    }
}

// instead of mapping dispatch to props, I'm using connect to pass the action creator object which I'll then access via this.props
export default connect(null, { addHorse })(HorseForm);