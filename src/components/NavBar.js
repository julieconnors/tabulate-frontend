import React from 'react'
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
import styled from '@emotion/styled'

const MenuDiv = styled.div`
    padding-left: 35%;
    padding-right: 35%;
    .nav {
        color: black;
        font-weight: bold;
        }
    button {
        margin-right: 10px;
        background-color: #4297A0;
        }
`
function NavBar() {
    return (
        <MenuDiv>
            <Navbar>
                <Button><Link to="/account" className="nav">Home</Link></Button>
                <Button><Link to="/day-sheet" className="nav">Day Sheet</Link></Button>
                <Button><Link to="/statements" className="nav">Statements</Link></Button>
            </Navbar>
        </MenuDiv>
    )
}

export default NavBar;