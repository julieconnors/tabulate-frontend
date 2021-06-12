import React, { Component } from 'react';
import RideForm from '../components/rides/RideForm'

class RideFormContainer extends Component {

    render() {
        const optionsBoxes = this.props.services.map((option) => {
            return (
                    <span className="td" key={option.id}> {/* title is set to the horses id, so I can handle change with event.target.parent.id */}
                        <span className={this.props.horse.attributes.name} title={this.props.horse.id}>
                            <input onChange={this.handleChange} type="radio" name="training" value={option.id} />
                        </span>
                    </span>)
            })
        if (this.props.horse.attributes.rides.filter(ride => ride.date === this.props.date).length >= 1) {
            return (
                <form className="tr" name={this.props.horse.name}>
                    <span className="td">{this.props.horse.attributes.name}</span>   
                        {optionsBoxes}
                    <span>Ride Saved</span>
                </form>
            )
        } else {
            return (
                <RideForm optionsBoxes={optionsBoxes} horse={this.props.horse} horses={this.props.horses} services={this.props.services} date={this.props.date}/>
            )
        }
    }
}

export default RideFormContainer;