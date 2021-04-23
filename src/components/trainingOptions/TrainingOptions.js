import React, { Component } from 'react';

class TrainingOptions extends Component {

    render() {

        const optionsList = this.props.trainingOptions.map(option => {
            return (
                <tr key={option.id}>
                    <td>{option.attributes.label}</td>
                    <td>{option.attributes.fee}</td>
                </tr>
            )
        })

        return (
            <div className="display">
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