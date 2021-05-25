import React from 'react'
import { NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import styled from '@emotion/styled'

const MenuDiv = styled.div`
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
            <Container>
                <Navbar>
                    <MenuDiv>
                        <Button><NavLink to="/" className="nav">Home</NavLink></Button>
                        <Button><NavLink to="/day-sheet" className="nav">Day Sheet</NavLink></Button>
                        <Button><NavLink to="/statements" className="nav">Statements</NavLink></Button>
                    </MenuDiv>
                </Navbar>
            </Container>
        )
}

export default NavBar;