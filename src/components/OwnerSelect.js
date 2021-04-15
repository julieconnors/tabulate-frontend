import React, { Component } from 'react';

class OwnerSelect extends Component {

    state = {
        owner_id: "",
        start_date: "",
        end_date: ""
    }   

    render() {
        const ownerOptions = this.props.owners.map(owner => <option key={owner.id} value={owner.id}>{owner.attributes.name}</option>)
        return (
            <div>
                <form>
                <label>Owner:</label>
                    <select name="owners">
                        {ownerOptions}
                    </select>
                    <input type="date"/>
                </form>
            </div>
        )
    }
}

export default OwnerSelect;