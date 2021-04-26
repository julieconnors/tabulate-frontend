import React, { Component } from 'react';

class Horses extends Component {

    render(){
        console.log(this.props.horses)
        const horseList = this.props.horses.map(horse => {
            return (
                <tr key={horse.id}>
                    <td>{horse.attributes.name}</td>
                    <td>{horse.attributes.owner.name}</td>
                </tr>
            )
        })
        return (
        <div className="display">
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