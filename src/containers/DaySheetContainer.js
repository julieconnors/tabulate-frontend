import React, { Component } from 'react';
import RideForm from '../components/rides/RideForm'
import Rides from '../components/rides/Rides'
import { fetchRides } from '../actions/fetchRides'
import { fetchHorses } from '../actions/fetchHorses'
import { fetchServices } from '../actions/fetchServices'
import { connect } from 'react-redux';
import styled from '@emotion/styled'

const DaySheet = styled.div`;
    background-color: #F4EAE6;
    text-align: center;
    padding: 1%;
    DIV.table {
        display:table;
        background-color: #E57F84;
        padding: 1%
    }
    FORM.tr, DIV.tr {
        display:table-row;
    }
    SPAN.td {
        display:table-cell;
        text-align: center;
    }
    SPAN.th {
        display:table-cell;
        font-weight: bold;
        text-align: center;
    }
`

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
        this.props.fetchServices()
        this.props.fetchRides()
    }

    render() {
        const horseList = this.props.horses.map(horse => <RideForm key={horse.id} horse={horse} horses={this.props.horses} date={this.today()} services={this.props.services}/>)

        const servicesHeadings = this.props.services.map(option => <span className="th" key={option.id}>{option.attributes.label}</span>)

        return(
            <DaySheet>
                <h3>{this.today()}</h3>
                    <div className="container">
                        <div className='table'>
                            <div className="tr">
                                <span className="th">Horse</span>
                                {servicesHeadings}
                            </div>
                        {horseList}
                        </div>
                            <Rides rides={this.props.rides} date={this.today()}/>
                    </div>
            </DaySheet>
        )
    }
    
}

const mapStateToProps = state => {
    return { 
        horses: state.horses,
        services: state.services,
        rides: state.rides
    }
}

export default connect(mapStateToProps, { fetchHorses, fetchServices, fetchRides })(DaySheetContainer);