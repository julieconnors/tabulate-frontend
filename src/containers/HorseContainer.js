import React, { Component } from 'react';
import Horses from '../components/horses/Horses'
import HorseForm from '../components/horses/HorseForm'
import { connect } from 'react-redux'
import { fetchHorses } from '../actions/fetchHorses'
import styled from '@emotion/styled'

const HorseDiv = styled.div`
    background-color: #2F5061;
    text-align: center;
    display: flex;

    .display {
        color: #F4EAE6;
        text-align: right;
        padding: 2%;
        width: 30%;
        margin: 5%;
        td {
            width: 150px;
        }
    }

    .form {
        margin: 2%;
        padding: 5%;
        width: 60%;
        background-color: #F4EAE6;
    }
`

class HorseContainer extends Component {

    componentDidMount() {
        this.props.fetchHorses()
    }

    render() {
        return (
            <HorseDiv className="container">
                <Horses horses={this.props.horses}/>
                <HorseForm/>
            </HorseDiv>
        )
    }
}

const mapStateToProps = state => {
    return {
        horses: state.horses
    }
}

export default connect(mapStateToProps, { fetchHorses })(HorseContainer);