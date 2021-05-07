import React, { Component } from 'react';
import Calendar from '../Calendar';
import Statement from './Statement'

class StatementForm extends Component {

    state = {
        owner_id: 1,
        startDate: "",
        endDate: "",
        rideList: null
    }   

    handleSelect = (event) => {
        this.setState({
            owner_id: parseInt(event.target.value)
        })

      }

    handleSubmit = (event) => {
        event.preventDefault()
        const start = new Date(this.state.startDate)
        const end = new Date(this.state.endDate)
        const ownerSelection = this.props.rides.filter(ride => ride.attributes.horse.owner_id === this.state.owner_id )

        const list = ownerSelection.filter(ride => {
            let rideDate = new Date(ride.attributes.date)
            return rideDate >= start && rideDate <= end
        })
        this.setState({
            rideList: list
        })
    }

    collectDateRange = (data) => {
        this.setState({
            startDate: data.startDate,
            endDate: data.endDate
        })

    }

    render() {
        const ownerOptions = this.props.owners.map(owner => <option key={owner.id} value={owner.id}>{owner.attributes.name}</option>)

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Owner:</label>
                    <select name="owners" onChange={this.handleSelect}>
                        {ownerOptions}
                    </select><br></br>
                    <Calendar collectDateRange={this.collectDateRange}/><br></br>
                    <br></br>
                    <input type="submit" value="Generate Statement"/>
                </form>
                { this.state.rideList ? <Statement rideList={this.state.rideList} services={this.props.services}/> : null }
            </div>
        )
    }
}

export default StatementForm;