import React, { Component } from 'react';

class Horses extends Component {

    render(){
        const horseList = this.props.horses.map(horse => {
            return (
                <tr>
                    <td>{horse.attributes.name}</td>
                    <td>{horse.attributes.owner.name}</td>
                </tr>
            )
        })
        return (
        <div>
        <h2>Horses</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Owner</th>
                    </tr>
                </thead>
                <tbody>
                   {horseList}
                </tbody>
            </table>
        </div>
        )}
}

export default Horses;