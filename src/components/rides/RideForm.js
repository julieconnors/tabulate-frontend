import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addRide } from '../../actions/addRide'
class RideForm extends Component {

    state = {
        service_id: "",
        horse_id: ""
    }

    handleChange = (event) => {
        this.setState({
            service_id: event.target.value,
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

        document.getElementById(horse.id).disabled = true
        const form = document.querySelectorAll(`span.${horse.attributes.name} > input`);
        form.forEach(formElement => formElement.disabled = true);
        this.setState({
            service_id: "",
            horse_id: ""
        })
    }

    render() {
        const optionsBoxes = this.props.services.map((option) => {
            return (
                    <span className="td" key={option.id}> {/* title is set to the horses id, so I can handle change with event.target.parent.id */}
                        <span className={this.props.horse.attributes.name} title={this.props.horse.id}>
                            <input onChange={this.handleChange} type="radio" name="training" value={option.id}/>
                        </span>
                    </span>)
            })
        
        return (
            <form className="tr" name={this.props.horse.name}>
                <span className="td">{this.props.horse.attributes.name}</span>   
                    {optionsBoxes}            
                <span className="td"><input onClick={this.handleSubmit} type="submit" id={this.props.horse.id} value="Save"/></span>
            </form>
        )
    }
}

export default connect(null, { addRide })(RideForm);