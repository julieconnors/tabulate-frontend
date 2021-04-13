import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

class NavBar extends Component {
    render() {
        return (
            <div>
                <NavLink to="/" >Home</NavLink>
                <NavLink to="/statements" >Statements</NavLink>

            </div>
        )
    }
}

export default NavBar;