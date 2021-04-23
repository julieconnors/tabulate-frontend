import React, { Component } from 'react';
class Statement extends Component {

    sortRides = (labels) => {
        const rides = []
        // abstract by iterating through training options set by user

        labels.map(label => {
            let idx = this.props.rideList.filter(ride => ride.attributes.training_option.label === label) 
            rides.push(idx)
            return idx
        })
        
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
        const labels = this.props.trainingOptions.map(option => option.attributes.label)
        const trainingOptionHeadings = this.props.trainingOptions.map(option => <th key={option.id}>{option.attributes.label}</th>)
        const sortedRides = this.sortRides(labels)

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
                return <td key={list[0].id}>{price * list.length}</td>
            } else {
                return <td></td>
            }
        })

        const total = this.totaler(sortedList)

        const divStyle = {
            textAlign: 'center',
        }

        return (
            <div style={divStyle}>
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

export default Statement;