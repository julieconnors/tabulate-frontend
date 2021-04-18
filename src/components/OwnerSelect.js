import React, { Component } from 'react';
// import Calendar from './Calendar'
import NewCalendar from './NewCalendar';
class OwnerSelect extends Component {

    state = {
        owner_id: 1,
        startDate: "",
        endDate: ""
    }   

    handleSelect = (event) => {
        // debugger
        this.setState({
            owner_id: event.target.value
        })

      }

    handleSubmit = (event) => {
        event.preventDefault()
        console.log(this.state)
        debugger
    }

    collectDateRange = (data) => {
        // debugger
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
                    </select>
                    <NewCalendar collectDateRange={this.collectDateRange}/><br></br>
                    <input type="submit" value="Generate Statement"/>
                </form>
                {/* <Calendar collectDateRange={this.collectDateRange}/> */}
            </div>
        )
    }
}

export default OwnerSelect;