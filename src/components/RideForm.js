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
            training_option_id: event.target.value,
            horse_id: event.target.parentElement.title
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const newRide = {
            ...this.state, date: this.props.date
        }
        this.props.addRide(newRide)
        let horse = this.props.horses.find(horse => horse.id === this.state.horse_id)
        let idx = parseInt(this.state.training_option_id) - 1
        document.querySelector(`span.td input#${horse.attributes.name}${idx}`).checked = false
        this.setState({
            training_option_id: "",
            horse_id: ""
        })
    }

    render() {

        const optionsBoxes = this.props.trainingOptions.map((option, index) => {
            return (
                <span className="td" key={option.id} title={this.props.horse.id}> {/* here id is set to the horses id, so I can handle change with event.target.parent.id */}
                    <input onChange={this.handleChange} type="radio" name="training" id={this.props.horse.attributes.name+index} horse_id={this.props.horse.id} value={option.id}/> {/* here horse id is just so I can verify that the form is generate a row for each horse*/}
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