import React, { Component } from 'react';

class Services extends Component {

    render() {
        const optionsList = this.props.services.map(option => {
            return (
                <tr key={option.id}>
                    <td>{option.label}</td>
                    <td>{option.fee}</td>
                </tr>
            )
        })

        return (
            <div className="display">
                <table>
                    <thead>
                        <tr>
                            <th>Services</th>
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

export default Services;