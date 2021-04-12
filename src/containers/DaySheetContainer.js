import React, { Component } from 'react';
import RideForm from '../components/RideForm'
import { fetchHorses } from '../actions/fetchHorses'
import { connect } from 'react-redux';

class DaySheetContainer extends Component {

    today(){
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();

        today = mm + '/' + dd + '/' + yyyy;
        return today
    }

    componentDidMount() {
        this.props.fetchHorses()
    }

    render() {
        const horseList = this.props.horses.map(horse => <RideForm key={horse.id}/>)
        
        return(
            <div>
                <h2>{this.today()}</h2>
                <div>
                    {horseList}
                </div>
            </div>
            
        )
    }
    
}

const mapStateToProps = state => {
    return { horses: state.horses }
}

export default connect(mapStateToProps, { fetchHorses })(DaySheetContainer);