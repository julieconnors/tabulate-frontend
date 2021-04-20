import React, { Component } from 'react';
import RideForm from '../components/RideForm'
import Rides from '../components/Rides'
import { fetchRides } from '../actions/fetchRides'
import { fetchHorses } from '../actions/fetchHorses'
import { fetchTrainingOptions } from '../actions/fetchTrainingOptions'
import { connect } from 'react-redux';
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

        const trainingOptionHeadings = this.props.trainingOptions.map(option => <span className="th" key={option.id}>{option.attributes.label}</span>)

        return(
            <div>
                <h3>{this.today()}</h3>
                    <div className="container">
                        <div className='table'>
                            <div className="tr">
                                <span className="th">Horse</span>
                                {trainingOptionHeadings}
                            </div>
                        {horseList}
                        </div>
                            <Rides rides={this.props.rides} date={this.today()}/>
                    </div>
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