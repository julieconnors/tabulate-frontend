import React from 'react';
import Services from '../components/services/Services';
import ServicesForm from '../components/services/ServicesForm';
import styled from '@emotion/styled'

const DisplayDiv = styled.div`
    background-color: #4297A0;
    text-align: center;
    display: flex;

    .form {
        background-color: #F4EAE6;
        width: 60%;
        margin: 2%;
        padding: 5%;
    }

    .display {
        color: #F4EAE6;
        text-align: left;
        padding: 2%;
        width: 30%;
        margin: 5%;
        td {
            width: 150px;
        }
    }
`
const ServicesContainer = (props) => {
    return (
        <DisplayDiv className="container">
            <ServicesForm/>
            <Services services={props.services} />
        </DisplayDiv>
    )
}

export default ServicesContainer;