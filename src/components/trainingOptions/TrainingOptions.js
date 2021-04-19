import React, { Component } from 'react';

class TrainingOptions extends Component {

    render() {

        const optionsList = this.props.trainingOptions.map(option => {
            return (
                <tr>
                    <td>{option.attributes.label}</td>
                    <td>{option.attributes.fee}</td>
                </tr>
            )
        })

        return (
            <div>
            <h2>Training Options</h2>
            <table>
                <thead>
                    <tr>
                        <th>Training Options</th>
                        <th>Fee</th>
                    </tr>
                </thead>
                <tbody>
                    {optionsList}
                </tbody>
            </table>
            </div>
        )
    }
}

export default TrainingOptions;