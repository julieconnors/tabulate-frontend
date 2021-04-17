import React, { Component } from 'react';

class HorseForm extends Component {

    state = {
        name: "",
        owner: ""
    }

    handleChange = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        // dispatch action to add horse
        this.props.addHorse(this.state.name)
        this.setState({
            name: ""
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Horse Name</label>
                    <input type="text" value={this.state.name} onChange={this.handleChange}/><br></br>
                    <label>Owner Name</label>
                    <input type="text" value={this.state.owner} onChange={this.handleChange}/><br></br>
                    <input type="submit" value="Add Horse"/>
                </form>
            </div>
        )
    }
}

export default HorseForm;