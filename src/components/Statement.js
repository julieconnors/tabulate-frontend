import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchTrainingOptions } from '../actions/fetchTrainingOptions'

class Statement extends Component {

    componentDidMount() {
        this.props.fetchTrainingOptions()
        
    }

    sortRides = () => {
        // abstract by iterating through training options set by user
        const lessons = this.props.rideList.filter(ride => ride.attributes.training_option.label === "Lesson")
        const flatting = this.props.rideList.filter(ride => ride.attributes.training_option.label === "Flat Ride")
        const coaching = this.props.rideList.filter(ride => ride.attributes.training_option.label === "Coaching")
        const showing = this.props.rideList.filter(ride => ride.attributes.training_option.label === "Show Ride")
        const jumping = this.props.rideList.filter(ride => ride.attributes.training_option.label === "Jump School")

        const rides = [lessons, flatting, coaching, showing, jumping]
        return rides
    }

    totaler = (sortedList) => {
        const prices = sortedList.map(price => {
            if (price !== 0) {
                return price[0].attributes.training_option.fee
            } else {
                return 0
            }
        })
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        return prices.reduce(reducer)
    }

    render() {
        const trainingOptionHeadings = this.props.trainingOptions.map(option => <th>{option.attributes.label}</th>)
        const sortedRides = this.sortRides()
        const sortedList = sortedRides.map(list => {
            if (list.length > 0) {
                return list
            } else { 
                return 0 
            }
        })

        const items = sortedList.map(list => {
            if (list !== 0) {
                let price = list[0].attributes.training_option.fee
                return <td>{price * list.length}</td>
            } else {
                return <td></td>
            }
        })

        const total = this.totaler(sortedList)

        return (
            <div>
            <table>
                <thead>
                    <tr>
                        {trainingOptionHeadings}
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    <tr> 
                        {items}
                        <td>{total}</td>
                    </tr>
                </tbody>
            </table>

            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        trainingOptions: state.trainingOptions
    }
}

export default connect(mapStateToProps, { fetchTrainingOptions })(Statement);