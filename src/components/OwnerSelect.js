import React, { Component } from 'react';
import Calendar from './Calendar'
class OwnerSelect extends Component {

    state = {
        owner_id: ""
    }   

    handleSelect(){

      }

    handleSubmit = () => {

    }

    render() {
        const ownerOptions = this.props.owners.map(owner => <option key={owner.id} value={owner.id}>{owner.attributes.name}</option>)

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                <label>Owner:</label>
                    <select name="owners">
                        {ownerOptions}
                    </select>
                    <Calendar />
                    {/* <input type="date"/> */}
                </form>
            </div>
        )
    }
}

export default OwnerSelect;