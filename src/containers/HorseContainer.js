import React, { Component } from 'react';
import Horses from '../components/horses/Horses'
import HorseForm from '../components/horses/HorseForm'
import { connect } from 'react-redux'
import { fetchHorses } from '../actions/fetchHorses'

class HorseContainer extends Component {

    componentDidMount() {
        this.props.fetchHorses()
    }

    render() {
        return (
        <div className="container">
            <Horses horses={this.props.horses}/>
            <HorseForm/>
        </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        horses: state.horses
    }
}

export default connect(mapStateToProps, { fetchHorses })(HorseContainer);