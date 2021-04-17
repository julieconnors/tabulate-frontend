import React, { Component } from 'react';
import RideForm from '../components/RideForm'
import Rides from '../components/Rides'
import { fetchRides } from '../actions/fetchRides'
import { fetchHorses } from '../actions/fetchHorses'
import { fetchTrainingOptions } from '../actions/fetchTrainingOptions'
import { connect } from 'react-redux';
import HorseForm from '../components/HorseForm';

class DaySheetContainer extends Component {

    today(){
        var today = new Date();
        var dd = String(today.getDate());
        var mm = String(today.getMonth() + 1);
        var yyyy = today.getFullYear();

        today = mm + '/' + dd + '/' + yyyy;
        return today
    }

    componentDidMount() {
        this.props.fetchHorses()
        this.props.fetchTrainingOptions()
        this.props.fetchRides()
    }

    render() {
        const horseList = this.props.horses.map(horse => <RideForm key={horse.id} horse={horse} horses={this.props.horses} date={this.today()}trainingOptions={this.props.trainingOptions}/>)

        return(
            <div>
                <h2>{this.today()}</h2>
                <HorseForm/>

                <div className='table'>
                        <div className="tr">
                            <span className="th">Horse</span>
                            <span className="th">Flat Ride</span>
                            <span className="th">Jump School</span>
                            <span className="th">Show Ride</span>
                            <span className="th">Lesson</span>
                            <span className="th">Coaching</span>

                        </div>
                    
                        {horseList}
                </div>
                <Rides rides={this.props.rides} date={this.today()}/>
            </div>
            
        )
    }
    
}

const mapStateToProps = state => {
    return { 
        horses: state.horses,
        trainingOptions: state.trainingOptions,
        rides: state.rides
    }
}

export default connect(mapStateToProps, { fetchHorses, fetchTrainingOptions, fetchRides })(DaySheetContainer);