import React, { Component } from 'react';

class Horses extends Component {

    render(){
        const horseList = this.props.horses.map(horse => {
            return (
                <tr key={horse.id}>
                    <td>{horse.name}</td>
                    {/* <td>{horse.owner.name}</td> */}
                </tr>
            )
        })
        return (
        <div className="display">
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        {/* <th>Owner</th> */}
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