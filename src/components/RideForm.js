import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addRide } from '../actions/addRide'
class RideForm extends Component {

    state = {
        training_option_id: "",
        horse_id: ""
    }

    handleChange = (event) => {
        this.setState({
            training_option_id: event.target.id,
            horse_id: event.target.parentElement.id
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const newRide = {
            ...this.state, date: this.props.date
        }
        this.props.addRide(newRide)
    }

    render() {
        const optionsBoxes = this.props.trainingOptions.map(option => {
            return (
                <span className="td" key={option.id} id={this.props.horse.id}> {/* here id is set to the horses id, so I can handle change with event.target.parent.id */}
                    <input onChange={this.handleChange} type="radio" name="training" horse_id={this.props.horse.id} id={option.id}/> {/* here horse id is just so I can verify that the form is generate a row for each horse*/}
                </span>)
            })
        
        return (
            <form className="tr" name={this.props.horse.name}>
                <span className="td">{this.props.horse.attributes.name}</span>               
                    {optionsBoxes}
                <span className="td"><input onClick={this.handleSubmit} type="submit" value="Save"/></span>
            </form>
           
        )
    }
}

export default connect(null, { addRide })(RideForm);